import { IcOutlineAdminPanelSettings, SolarLogoutBroken } from "@/icons/Icons";
 
import { useAuthStore } from "@/stores/authStore.store";
import { signOut, useSession } from "next-auth/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { deleteAuthCookies } from "@/app/actions/deleteAuthCookies";
import generateAvatarImage from "@/utils/GenerateAvatar";

// este es el dropdown de login cuando esta logueado, mas abajo esta el dropdown de login cuando no esta logueado
const LoginDrop = () => {
  const { data: session } = useSession();
  const { user, isAuthenticated, logout } = useAuthStore();

  const email = session?.user?.email || user?.email;

  const handlelogout = async () => {
    if (session !== null) {
      signOut();
    }
    if (isAuthenticated) {
      logout();
      deleteAuthCookies();
    }
  };

  

  // crear la url de la imagen de avatar
  const avatarSrc = generateAvatarImage(email || "avatar");

      
        return (
          <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform cover"
            src={avatarSrc}
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" textValue="Perfil" className="h-14 gap-2">
            <p className="font-bold">Inicio seccion:</p>
            <p className="font-semibold">{email}</p>
          </DropdownItem>

          {/* seccion del panel de control */}

            {user && user.role === "admin" ? (
              <DropdownItem textValue="Panel de control">
              <Link href="/adminPanel" className="flex justify-around">
              <button className="w-full flex justify-between">
              Panel de Control
              <IcOutlineAdminPanelSettings className="w-6 h-6" />
              </button>
              </Link>
              </DropdownItem>
              ) : (
                    <DropdownItem
                      className="w-0 h-0 -mb-3"
                      textValue="Panel de Control vacio"
                    >
                    </DropdownItem>
                )}

          <DropdownItem key="logout" textValue="Cerrar Seccion" color="danger">
            <button
              onClick={handlelogout}
              className=" w-full flex justify-between"
              >
              Cerrar sesión
              <SolarLogoutBroken className="w-6 h-6" />
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LoginDrop;
