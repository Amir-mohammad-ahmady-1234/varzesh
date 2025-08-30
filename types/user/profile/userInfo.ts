import { $Enums } from "@prisma/client";

export type userInfo =
  | {
      error: string;
      status: number;
      message?: undefined;
      user?: undefined;
    }
  | {
      message: string;
      user: {
        id: number;
        firstname: string;
        phone: string;
        email: string | null;
        totalMessage: number;
        report: number;
        status: $Enums.Status;
        profileImage: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
      error?: undefined;
      status?: undefined;
    };
