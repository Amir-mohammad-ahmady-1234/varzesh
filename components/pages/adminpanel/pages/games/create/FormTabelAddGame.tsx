"use client";
import React, { useState } from "react";
import PageTitle from "../PageTitle";
import TeamsNameFiled from "../newGame/add-new-game-form/TeamsNameFiled";
import TeamsCategory from "../newGame/add-new-game-form/TeamsCategory";
import GameStatusAndDate from "../newGame/add-new-game-form/GameStatusAndDate";
import SubmitingBtns from "../newGame/add-new-game-form/SubmitingBtns";
import toast from "react-hot-toast";
import Card from "../../../../../common/ui/Card";
import FormField from "../../../../../common/ui/FormField";
import Textarea from "../../../../../common/ui/Textarea";
type StatusType = "Scheduled" | "live" | "down";
type LeagueType = "Acup" | "Tcup" | "Dcup";
export interface TFormDataGame {
  firstthem: string;
  secondthem: string;
  League: LeagueType;
  step: string;
  data: string;
  time: string;
  status: StatusType;
  description: string;
}
function FormTabelAddGame({ DataCreateGame }: any) {
  console.log(DataCreateGame);

  const [formData, setFormData] = useState<TFormDataGame>({
    firstthem: "",
    secondthem: "",
    League: "Acup",
    step: "",
    data: new Date().toISOString().split("T")[0],
    time: "12:00",
    status: "Scheduled",
    description: "",
  });

  async function handelsubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !formData.firstthem ||
      !formData.secondthem ||
      !formData.step ||
      !formData.description
    ) {
      toast.error("تمامی فیلدها را کامل کنید!");
      return;
    }

    const payload = {
      ...formData,
      data: new Date(formData.data),
      time: new Date(`${formData.data}T${formData.time}:00`),
    };

    const res = await DataCreateGame(payload);
    console.log(payload);
    console.log(res);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "data" ? new Date(value) : name === "time" ? value : value,
    }));
  }
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <PageTitle />

        <Card>
          <form className="space-y-6" onSubmit={handelsubmit}>
            <TeamsNameFiled
              firstthem={formData.firstthem}
              secondthem={formData.secondthem}
              handleChange={handleChange}
            />

            <TeamsCategory
              handleChange={handleChange}
              step={formData.step}
              League={formData.League}
            />

            <GameStatusAndDate
              handleChange={handleChange}
              data={formData.data}
              time={formData.time}
              status={formData.status}
            />
            <FormField label="توضیحات">
              <Textarea
                placeholder="توضیحات اضافی درباره بازی..."
                rows={4}
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </FormField>

            <SubmitingBtns formData={formData} />
          </form>
        </Card>
      </div>
    </main>
  );
}

export default FormTabelAddGame;
