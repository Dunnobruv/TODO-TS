type ContactProps = {
    ID: string;
    ContactName: string;
    PhoneNumber: string | number;
    Storage: 'SIM' | 'Device';
    Avatar: string;
};

const ContactNameInput =
    document.querySelector<HTMLInputElement>("#ContactName");
const SubmitButton = document.querySelector<HTMLButtonElement>("#SubmitButton");

SubmitButton?.addEventListener("click", () => {
    console.log(ContactNameInput?.value);
});