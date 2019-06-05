const baseUrl = "http://vblcb.wisseq.eu/VBLCB_WebService/data/";
const teamMatchesByGuidUrl = baseUrl + "TeamMatchesByGuid?";

export async function getTeamMatchesByGuid(teamGuid: string): any {
  try {
    let response = await fetch(
        teamMatchesByGuidUrl + `teamguid=${encodeURIComponent(teamGuid)}`,
        {
          method: 'GET'
        }
    );
    let responseJson = await response.json();
    if (response.status === 200) {
      return responseJson
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
}

