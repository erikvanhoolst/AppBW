import {Match} from "../model/Match";

const baseUrl = "http://vblcb.wisseq.eu/VBLCB_WebService/data/";
const teamMatchesByGuidUrl = baseUrl + "TeamMatchesByGuid?";

export async function getTeamMatchesByGuid(teamGuid: string): Match[] {
  try {
    let response = await fetch(
        teamMatchesByGuidUrl + `teamguid=${encodeURIComponent(teamGuid)}`,
        {
          method: 'GET'
        }
    );
    let responseJson = await response.json();
    //console.log(responseJson);
    if (response.status === 200) {
      return responseJson
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
}

