import supportboxInformation from "../server/admin/paneladmin/support/supportboxInformation";

export async function getStats() {
  const {
    Immediatesupport,
    activesupport,
    approvedsupport,
    error,
    totalsupport,
    waitingsupport,
  } = await supportboxInformation();

  if (error) return { error: error };

  return {
    Immediatesupport,
    activesupport,
    approvedsupport,
    totalsupport,
    waitingsupport,
  };
}
