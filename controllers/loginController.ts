import { RouterContext } from '@koa/router';

export async function get(ctx: RouterContext): Promise<void> {
	ctx.throw(501);
}

export async function post(ctx: RouterContext): Promise<void> {
	ctx.throw(501);
}
