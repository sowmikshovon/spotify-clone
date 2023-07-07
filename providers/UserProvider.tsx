"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface userProviderProps {
    children: React.ReactNode;
}

const Userprovider: React.FC<userProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default Userprovider