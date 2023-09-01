type ContactProps = {
    ID: string;    
    ContactName: string;
    PhoneNumber: string | number;
    Storage: 'SIM' | 'Device';
    Avatar: string | null;
};
type ContactslistType = ContactProps[];

const ContactsList: ContactslistType = [];

const ContactNameInput =
    document.querySelector<HTMLInputElement>("#ContactName");

const PhoneNumberInput =
    document.querySelector<HTMLInputElement>("#PhoneNumber");

const SIMStorageInput =
    document.querySelector<HTMLInputElement>("#SIMStorage");

const DeviceStorageInput =
    document.querySelector<HTMLInputElement>("#DeviceStorage");

const SubmitButton = 
    document.querySelector<HTMLButtonElement>("#SubmitButton");

const ShowContactsButton = 
    document.querySelector<HTMLButtonElement>("#ShowContactsButton");

const ContactsListDrawer = 
    document.querySelector<HTMLButtonElement>("#ContactsListDrawer");

const CloseDrawerButton = 
    document.querySelector<HTMLButtonElement>("#CloseDrawerButton");

const ContactsListElement = 
    document.querySelector<HTMLUListElement>("#Contacts-List");

ShowContactsButton?.addEventListener("click", () => {
    ContactsListDrawer?.classList.remove("hidden");
});

CloseDrawerButton?.addEventListener("click", () => {
    ContactsListDrawer?.classList.add("hidden");
});

SubmitButton?.addEventListener("click", () => {
    const NewContact: ContactProps = {
        ID: crypto.randomUUID(),
        ContactName: ContactNameInput?.value ?? "",
        PhoneNumber: PhoneNumberInput?.value ?? "",
        Avatar: null,
        Storage: DeviceStorageInput?.checked ? "Device" : "SIM",
    };
    ContactsList.push(NewContact);
    
    const ListItem = document.createElement("li");
    const ContactNameElement = document.createElement("li");
    const ContactPhoneNumberElement = document.createElement("p");
    
    ListItem.className = "py-4 px-1 bg-slate-100 rounded-lg";
    ContactNameElement.className = "text-slate-800";
    ContactPhoneNumberElement.className = "text-slate-700";
    
    ContactNameElement.innerHTML = NewContact.ContactName;
    ContactPhoneNumberElement.innerText = NewContact.PhoneNumber.toString();
    
    ListItem.appendChild(ContactNameElement)
    ListItem.appendChild(ContactPhoneNumberElement)
    ContactsListElement?.appendChild(ListItem)
});

