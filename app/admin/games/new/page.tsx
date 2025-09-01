import Sidebar from "../../../../components/pages/adminpanel/layout/Sidebar";
import Topbar from "../../../../components/pages/adminpanel/layout/Topbar";
import Card from "../../../../styles/ui/Card";
import Textarea from "../../../../styles/ui/Textarea";
import FormField from "../../../../styles/ui/FormField";
import PageTitle from "../../../../components/pages/adminpanel/pages/games/newGame/PageTitle";
import TeamsNameFiled from "../../../../components/pages/adminpanel/pages/games/newGame/add-new-game-form/TeamsNameFiled";
import TeamsCategory from "../../../../components/pages/adminpanel/pages/games/newGame/add-new-game-form/TeamsCategory";
import GameStatusAndDate from "../../../../components/pages/adminpanel/pages/games/newGame/add-new-game-form/GameStatusAndDate";
import SubmitingBtns from "../../../../components/pages/adminpanel/pages/games/newGame/add-new-game-form/SubmitingBtns";

export default function NewGamePage() {
  return (
    <div className="flex h-screen bg-(--bg-secondary)">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <PageTitle />

            <Card>
              <form className="space-y-6">
                <TeamsNameFiled />

                <TeamsCategory />

                <GameStatusAndDate />

                <FormField label="توضیحات">
                  <Textarea
                    placeholder="توضیحات اضافی درباره بازی..."
                    rows={4}
                  />
                </FormField>

                <SubmitingBtns />
              </form>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
