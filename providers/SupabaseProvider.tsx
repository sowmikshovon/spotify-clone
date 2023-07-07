"use client"

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db"

interface SupaBaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupaBaseProviderProps> = ({
    children
}) => {
    const [superbaseClient] = useState(() =>
        createClientComponentClient<Database>()
        );

        return(
            <SessionContextProvider supabaseClient={superbaseClient}>
                {children}
            </SessionContextProvider>
        )
}

export default SupabaseProvider;