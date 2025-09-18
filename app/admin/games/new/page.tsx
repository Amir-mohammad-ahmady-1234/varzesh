import Sidebar from "../../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../../components/pages/adminpanel/layout/Topbar";
import FormTabelAddGame from "../../../../components/pages/adminpanel/pages/games/create/FormTabelAddGame";
import { CreateGame } from "../../../../server/admin/paneladmin/game/CreateGame/CreateGame";

export default function page() {
  async function handleCreateGame(payload: any) {
    "use server";
    return await CreateGame(payload);
  }

  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <FormTabelAddGame DataCreateGame={handleCreateGame} />
      </div>
    </div>
  );
}
