import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import getSongs from "./getSongs";

import { cookies } from 'next/headers'

const getSongsByTitle = async (title: string): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    if (!title) {
        const allSong = await getSongs()
        return allSong
    }

    const { data, error } =await supabase.from('songs').select('*').ilike('title', `%${title}%`).order('created_at', { ascending: false })

    if (error) {
        console.log(error)
    }

    return (data as any) || []
}

export default getSongsByTitle