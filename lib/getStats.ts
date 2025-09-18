import supportboxInformation from "../server/admin/paneladmin/support/supportboxInformation";

export async function getStats() {
  const {
    totalsupport,
    activesupport,
    waitingsupport,
    approvedsupport,
    Immediatesupport,
    error,
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
