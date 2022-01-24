import netlifyIdentity from "netlify-identity-widget";

export function init(callback) {
  netlifyIdentity.on("init", () => {
    callback(user);
  });

  netlifyIdentity.init();
}

export function logIn(callback) {
  netlifyIdentity.open();
}
