import { useState , createContext} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


const[formData, setFormData] = useState({ name: '', email: '' , month: '' , day: '' , year: '' });

const updateFormData = (field, value) => {
    setFormData(prevData => ({...prevData, [field]: value,}));
};

return (
    <UserContext.Provider value={{ formData, updateFormData }}>
    {children}
    </UserContext.Provider>
);
}