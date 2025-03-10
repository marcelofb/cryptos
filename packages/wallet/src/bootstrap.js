import faker from "faker";

const mount = (el) => {
  const walletText = `<div>You have ${faker.random.number()} cryptos in your wallet</div>`;
  el.innerHTML = walletText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-wallet");
  if (el) {
    mount(el);
  }
}
export { mount };
