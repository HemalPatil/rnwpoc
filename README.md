# Platform agnostic react components for Android and Web
This project is divided into subprojects as follows

# Update 2023-07-12
1. Supply custom types for `react-native` in the lib that are actually for `react-native-web`.
2. Add `react-native-web` dependency under the alias `react-native` in NextJS so that all components are resolved from `react-native-web`.
3. CSS styles can be added to array so duplicates can be avoided but we'll have to be careful to create almost tailwind like classes and possibly rework some existing styles in the RN app project.
4. No change in the bundle size for RN app when integrated there.
### Cons
1. Bundle size for web home page is still 150kb instead of the normal 75kb.
2. No alternatives available for SVG components.
3. &lt;Paragraph /&gt; is rendered as inline on web and block element in android. Could just be one of the many inconsistencies that we'll have to figure out.
4. Everything is rendered as a div in web. We'll take a heavy penalty on accessibility and lose out on the capabilities that native HTML5 elements provide.

# Create and test lib package
```
cd ./lib
npm install
npm pack
mv rnwpoc-lib-0.1.0.tgz /some/path
```
Change the dependency for `rnwpoc-lib` in `./web/y/package.json` to use the correct file path to the package tarball that was created e g.
```
"dependencies": {
  ...,
  "rnwpoc-lib": "file:/some/path/rnwpoc-lib-0.1.0.tgz"
}
```
Test the package:
```
cd ./web/y
npm install
npm run build #(will fail)
```

## without-rnw
Setup using NextJS' official `create-next-app` utility. It uses the newer `App Router`. Does not use `rnw`.

Bundles sizes (as reported by NextJS):
1. First load JS (shared by all): 77.6 kB
2. Home page: 77.6 kB (0 + 77.6 kB)

Observations:
1. Creates static CSS tailwind file that uses only the used class.
2. Uses TS.

## with-rnw
Copy of the NextJS [example](https://github.com/vercel/next.js/tree/canary/examples/with-react-native-web) for creating apps that use `react-native` components. It uses the old `Pages Router`.

Bundles sizes (as reported by NextJS):
1. First load JS (shared by all): 74 kB
2. Home page: 95.3 kB

Observations:
1. Creates a `style` element in the rendered HTML that has dynamically generated CSS classes.
2. Does NOT use TS.

## with-rnw-manual
Copy of `with-rnw` subproject that tries to use TS.
So far TS integration has been unsuccessful even with `path` alias and `module` declaration.

## agnostic-lib
A POC of the agnostic component library that uses `react-native-web` and can be integrated in `NextJS` as well as `react-native` projects.

Observations:
1. Suffers same problem as `with-rnw-manual` subproject for TS integration


## Glossary
```
rnw = react-native-web
```
