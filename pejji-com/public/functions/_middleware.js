export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "pejji-sites.pages.dev") {
    return Response.redirect("https://pejji.ng" + url.pathname + url.search, 301);
  }
  return context.next();
}
