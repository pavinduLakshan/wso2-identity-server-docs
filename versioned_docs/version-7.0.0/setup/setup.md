# Getting Started

Follow the steps given below to set up and install WSO2 Identity Server on your computer in quick time.

## Install the WSO2 Identity Server

Follow the steps given below.

1. Download and install the Java SE SDK (JDK) version 11 or 17.
2. Go to [WSO2 Identity Server official website](https://wso2.com/identity-server/) and click on **Download**.
3. Install by downloading the **latest release**.

The installation location of WSO2 Identity Server is referred to as `{IS_HOME}`.

:::tip

**WSO2 Updates** include any improvements (e.g., bug fixes, security fixes) that are released by WSO2 on top of a released WSO2 product version. With updates, you do not have to wait until the next product version is released to get the fixes you want. Find out more about WSO2 updates at https://wso2.com/updates.

:::

## Start the WSO2 Identity Server

To start WSO2 IS, open a terminal, navigate to the `{IS_HOME}/bin` folder, and execute one of the following commands:

- On Linux/MacOS

    ``` bash
    sh wso2server.sh
    ```

- On Windows

    ``` bash
    wso2server.bat
    ```

Note that the following log appears in the command prompt when the server starts:

```bash
INFO {org.wso2.carbon.core.internal.StartupFinalizerServiceComponent} - WSO2 Carbon started in 23 sec
```

## Shutting down the server

To shutdown the server, press `Ctrl + C`. Note that the following log appears in the command prompt on server shutdown.

```bash
INFO {org.wso2.carbon.core.init.CarbonServerManager} - Shutdown complete
```

## Access the Console

Once the server has started, you can access the console by navigating to `https://{IS_HOST}/console`. For example, if you are running the WSO2 Identity Server on localhost, the console URL will be `https://localhost:9443/console`.

You will then be presented with the login screen. Enter `admin` for both username and password fields to login as the admin user.

:::info

To change the default admin password, log in to the MyAccount portal as the administrator and [change the password](/guides/user-self-service/change-password/)

:::

## What's next?

Add login to your application using the Identity Server or try it on a sample application. [Try integrating IS into apps](/get-started/try-samples).

