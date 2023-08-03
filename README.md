<div align="center"><img src="https://github.com/lordelogos/clientmail.js/assets/67395687/d4a32333-b592-465d-a1ae-04d5954d204a" alt="client mail logo"></div>

<div align="center"><h1>@clientmail/react-email</h1></div>

`@client-mail/react-email` is a plugin for [client-mail](https://github.com/lordelogos/clientmail.js) that enables you send email templates built with [react-email](https://react.email).

## Installation

1. Add `@client-mail/react-email` to your project using your preferred package manager:

   With Yarn

   ```sh
   yarn add @clientmail/react-email
   ```

   With Npm

   ```sh
   npm install @clientmail/react-email
   ```

   With Pnpm

   ```sh
   pnpm install @clientmail/react-email
   ```

2. Add it to the plugins when creating ClientMail class instance

   ```js
   // Add import statement
   import { ReactEmailPlugin } from "@clientmail/react-email";
   import { ReactEmailTemplate } from "./emails";

   // Add to the ClientMail class instance
   const clientMail = new ClientMail("rc_A1..", {
     reactEmailAdapter: new ReactEmailPlugin(),
   });
   ```

3. Send your react-email templates with `react` option.

   ```js
   const data = {
     from: "Acme <onboarding@resend.dev>",
     to: ["delivered@resend.dev"],
     subject: "Hello World",
     // use `react` for react-email templates
     react: <ReactEmailTemplate name={"Paul"} />,
   };

   clientMail.resend(data);
   ```

## Contributing

Contributions to client-mail are welcome! If you find a bug, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request. Please make sure to follow the existing coding style and conventions.

When submitting a pull request, provide a clear description of the changes made and ensure that all tests pass. Adding appropriate tests for new features or bug fixes is highly appreciated.

## Bugs and Feature Requests

For bugs and feature requests, [please create an issue](https://github.com/lordelogos/clientmail-react-email/issues/new/choose).

## Author

- Paul Ehikhuemen ([@pauloe_me](https://twitter.com/pauloe_me))

## License

`@clientmail/react-email` is licensed under the MIT License.
