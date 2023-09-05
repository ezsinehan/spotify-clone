"use client"

import { useSessionContext, useSupabaseClient } from "@/node_modules/@supabase/auth-helpers-react/dist/index";
import {Auth} from "@supabase/auth-ui-react";
import { useRouter } from "@/node_modules/next/navigation";
import { ThemeSupa } from "@/node_modules/@supabase/auth-ui-shared";
import { useEffect } from "react";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import { on } from "process";




const AuthModal = () => {
  const supaBaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose])

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return ( 
    <Modal
      title="Welcome Back"
      description="Login to your Account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supaBaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e"
              }
            }
          }
        }}
      />
    </Modal>
   );
}




export default AuthModal;