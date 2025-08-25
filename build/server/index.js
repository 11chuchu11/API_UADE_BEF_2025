import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { ClientOnly, IconButton, Skeleton, Span, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { useTheme, ThemeProvider } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function ColorModeProvider(props) {
  return /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", disableTransitionOnChange: true, ...props });
}
function useColorMode() {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode
  };
}
function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? /* @__PURE__ */ jsx(LuMoon, {}) : /* @__PURE__ */ jsx(LuSun, {});
}
React.forwardRef(function ColorModeButton2(props, ref) {
  const { toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx(Skeleton, { boxSize: "8" }), children: /* @__PURE__ */ jsx(
    IconButton,
    {
      onClick: toggleColorMode,
      variant: "ghost",
      "aria-label": "Toggle color mode",
      size: "sm",
      ref,
      ...props,
      css: {
        _icon: {
          width: "5",
          height: "5"
        }
      },
      children: /* @__PURE__ */ jsx(ColorModeIcon, {})
    }
  ) });
});
React.forwardRef(
  function LightMode2(props, ref) {
    return /* @__PURE__ */ jsx(
      Span,
      {
        color: "fg",
        display: "contents",
        className: "chakra-theme light",
        colorPalette: "gray",
        colorScheme: "light",
        ref,
        ...props
      }
    );
  }
);
React.forwardRef(
  function DarkMode2(props, ref) {
    return /* @__PURE__ */ jsx(
      Span,
      {
        color: "fg",
        display: "contents",
        className: "chakra-theme dark",
        colorPalette: "gray",
        colorScheme: "dark",
        ref,
        ...props
      }
    );
  }
);
function Provider(props) {
  return /* @__PURE__ */ jsx(ChakraProvider, { value: defaultSystem, children: /* @__PURE__ */ jsx(ColorModeProvider, { ...props }) });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "es",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(Provider, {
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function Root() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BQgoy3j9.js", "imports": ["/assets/chunk-UH6JLGW7-lMiV1NeY.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/root-DZZRFkX9.js", "imports": ["/assets/chunk-UH6JLGW7-lMiV1NeY.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-72bee320.js", "version": "72bee320", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
