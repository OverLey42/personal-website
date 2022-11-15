import { dirname, fromFileUrl, join, exists, Application } from './deps.ts';
import { Server } from '../output/server/index.js';
import { manifest } from './manifest.js';

const server$1 = new Server(manifest);

await server$1.init({ env: Deno.env.toObject() });

const __dirname = dirname(fromFileUrl(import.meta.url));

async function serveDirectory(path, client = false) {
	// need to use async exists due to existsSync not working on Deno Deploy
	if (!(await exists(path))) {
		return false;
	}
	return (ctx) => {
		if (client && ctx.request.url.pathname.startsWith(`/${manifest.appDir}/immutable/`)) {
			ctx.response.headers.set('cache-control', 'public,max-age=31536000,immutable');
		}
		return ctx.send({ root: path, extensions: ['.html'], index: 'index.html' });
	};
}

async function ssr(ctx) {
	const request = ctx.request.originalRequest.request;
	const response = await server$1.respond(request, {
		getClientAddress() {
			// TODO: revisit if it doesn't work with proxy
			return ctx.request.ip;
		}
	});
	ctx.response.status = response.status;
	ctx.response.headers = response.headers;
	ctx.response.body = response.body;
}

const handlers = [
	...(await Promise.all([
		serveDirectory(join(__dirname, 'client'), true),
		serveDirectory(join(__dirname, 'prerendered'))
	])),
	ssr
].filter(Boolean);

async function handler(ctx) {
	for (const handle of handlers) {
		try {
			return await handle(ctx);
		} catch (error) {
			// fall-through to next handler
		}
	}
	ctx.response.status = 404;
	ctx.response.body = 'Not found';
}

const path = Deno.env.get("SOCKET_PATH") ?? false;
const host = Deno.env.get("HOST") ?? '0.0.0.0';
const port = Deno.env.get("PORT") ?? (!path && 3000);

// TODO: add compression middleware
const server = new Application().use(handler);

server.addEventListener('listen', () => {
	console.log(`Listening on http://${addr}`);
});

const addr = path || `${host}:${port}`;
server.listen(addr).catch((err) => {
	console.error('error', err);
});

export { host, path, port, server };
//# sourceMappingURL=index.js.map
