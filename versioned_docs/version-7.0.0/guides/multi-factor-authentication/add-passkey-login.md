# Add Passkey Authentication

Passkey Authentication adds passwordless login to your applications, which allows users to replace traditional passwords with FIDO2-supported hardware security keys or built-in authenticators on their devices. It also enables credentials to sync across multiple devices, allowing users to log into applications from any device, even if their credentials are stored on another. 

Follow the instructions given below to configure Multi-Factor Authentication (MFA) using Passkey in WSO2 Identity Server.

:::info

- WSO2 Identity Server uses the [WebAuthn API](https://www.w3.org/TR/webauthn-1/) to enable FIDO-based authentication for browsers that no longer support the [U2F extension](https://fidoalliance.org/specs/u2f-specs-master/fido-u2f-overview.html).
    - The following browser versions support the WebAuthn API by default:
        - Chrome 67 and above
        - Firefox 60 and above
        - Edge 17723 and above
- Passkey login with [platform authenticators](https://www.w3.org/TR/webauthn-1/#sctn-authenticator-attachment-modality) will NOT work on the Firefox browser in macOS Catalina, Big Sur, and Monterey due to browser limitations.
- Passkey login with [roaming authenticators](https://www.w3.org/TR/webauthn-1/#sctn-authenticator-attachment-modality) will NOT work on the Firefox browser as the browser doesn't support CTAP2 (Client to Authenticator Protocol 2) with PIN.
- Refer to the [passkeys documentation](https://passkeys.dev/device-support/) to stay up-to-date with the device support for FIDO2 passkeys.

:::

## Prerequisites

- To get started, [create an application](/guides/applications/). You can try with your own application or use one of the [sample applications]({{base_path}}/get-started/try-samples/) provided.

- You also need to have a user account. If you don't already have one, [create a user account](guides/users/manage-users/#onboard-a-user).

- If [Passkey progressive enrollment](guides/authentication/conditional-auth/passkey-progressive-enrollment-based-template.md) is disabled, [application users](/guides/users/manage-users/#onboard-a-user) need to register their passkeys via the My Account app prior to using passkey login. Be sure to educate your users on how to [enroll passkeys via My Account.]({{base_path}}/guides/user-self-service/register-passkey/)

## Enable passkey login for an application

Follow the steps given below to enable **Passkey** login for your application.

1. Navigate to the Console and go to **Applications**.

2. Click on the application to which you wish to add Passkey.

3. Go to the **Login Flow** tab of the application and add Passkey from your preferred editor:

    ---
    === "Classic Editor"
        - If you haven't already built a login flow for your application, select **Start with default configuration** to build one.

            <!-- ![Configuring basic login in {{ product_name }}]({{base_path}}/assets/img/guides/mfa/passkey/add-basic-login-using-classic-editor.png){: width="600" style="display: block; margin: 0; border: 0.3px solid lightgrey;"} -->

        - Now you can add a second step and add **Passkey** as the authenticator.

            <!-- ![Configuring passkey as the second factor]({{base_path}}/assets/img/guides/mfa/passkey/add-passkey-using-classic-editor.png){: width="600" style="display: block; margin: 0; border: 0.3px solid lightgrey;"} -->

    === "Visual Editor"
        To add Passkey as a second-factor authenticator using the Visual Editor:

        1. Switch to the **Visual Editor** tab.

        2. Add a second step and add **Passkey** as the authenticator.

        3. Click **Confirm** to add passwordless login with Passkey to the sign-in flow.

            <!-- ![Configuring passkey login in {{ product_name }}]({{base_path}}/assets/img/guides/mfa/passkey/add-passkey-using-visual-editor.png){: width="600" style="display: block; margin: 0; border: 0.3px solid lightgrey;"} -->

    ---

4. Click **Update** to save your changes.


## Enable Passkey progressive enrollment

This feature allows users to enroll their passkey seamlessly during the usual login flow, offering a blend of convenience and security. Follow the steps given below to enable **Passkey** progressive enrollment for your application.

1. Access the WSO2 Identity Server Console and go to **Connections**.

2. Select the **Passkey** connection.

3. Go to the **Settings** tab of the connection.

4. Enable the option for **Allow passkey progressive enrollment**.

    <!-- ![Enable passkey progressive enrollment in WSO2 Identity Server](/img/enable-passkey-progressive-enrollment.png){: width="500" style="border: 0.3px solid lightgrey;"} -->

5. Click **Update** to save your changes.


:::note

Passkey progressive enrollment can only be configured at the organizational level and cannot be modified at the application level.

:::

## Try it out

In this section, let’s try out the scenario where Passkey progressive enrollment is enabled and the user has not previously enrolled a passkey. The following steps will guide you through enrolling a passkey on-the-fly and then using it to sign in.


1. Access the application URL.

2. Click **Login** to access the Identity Server login page.

3. Enter your username and password, then click **Sign In**.

4. Click **Create a passkey** to give the consent to create a passkey.

    <!-- ![Create a passkey in {{ product_name }}]({{base_path}}/assets/img/guides/mfa/passkey/enrolled-passkey-not-found-info-page.png){: width="300" style="border: 0.3px solid lightgrey;"} -->

6. Follow the instructions given by your browser or device to enroll the passkey.

    <!-- ![Create a passkey browser prompt in {{ product_name }}]({{base_path}}/assets/img/guides/passwordless/passkey/create-passkey-browser-prompt.png){: width="300" style="border: 0.3px solid lightgrey;"} -->

7. Enter a unique name to your passkey for identification.

    <!-- ![Rename passkey in {{ product_name }}]({{base_path}}/assets/img/guides/passwordless/passkey/rename-passkey.png){: width="300" style="border: 0.3px solid lightgrey;"} -->

8. Click **Submit** to complete the enrollment. You'll be authenticated in the application.
