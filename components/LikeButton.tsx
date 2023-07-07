"use client"

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import { useSessionContext } from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {
    const router = useRouter()
    const { supabaseClient } = useSessionContext()

    const authModal = useAuthModal()
    const { user } = useUser()

    const [isliked, setIsLiked] = useState<boolean>(false)

    useEffect(() => {
        if (!user?.id) {
            return
        }

        const fetchData = async () => {
            const { data, error } = await supabaseClient.from('liked_songs').select('*').eq('user_id', user.id).eq('song_id', songId).single()
        
            if (!error && data) {
                setIsLiked(true)
            }
        }
        fetchData()
    }, [songId, supabaseClient, user?.id])

    const Icon = isliked ? AiFillHeart : AiOutlineHeart

    const handlelike = async () => {
        if (!user) {
            return authModal.onOpen()
        }

        if (isliked) {
            const { error } = await supabaseClient.from('liked_songs').delete().eq('user_id', user.id).eq('song_id', songId)

            if (error) {
                toast.error(error.message)
            }else {
                setIsLiked(false)
                toast.success('Unliked')
            }
        } else {
            const { error } = await supabaseClient.from('liked_songs').insert({song_id: songId, user_id: user.id})

            if (error) {
                toast.error(error.message)
            }else {
                setIsLiked(true)
                toast.success('Liked')
            }
        }

        router.refresh()
    }

    return ( 
        <button
        onClick={handlelike}
        className="
        hover:opacity-75
        transition
        ">
            <Icon color={isliked ? '#22c55e' : 'white'} size={25}/>
        </button>
    );
}

export default LikeButton;