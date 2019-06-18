import { baseUrlAPI } from '../assets/values';
const teamMatchesByGuidUrl = baseUrlAPI + "TeamMatchesByGuid?";
const orgDetailByGuidUrl = baseUrlAPI + "OrgDetailByGuid";
const teamDetailByGuidUrl = baseUrlAPI + "TeamDetailByGuid";

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

export async function getTeamLogo(teamGuid: String): String {
  var poules = [];
  var teams = [];

  try {
    let response = await fetch(
      teamDetailByGuidUrl + `teamguid=${encodeURIComponent(teamGuid)}`,
      {
        method: 'GET'
      }
    );

    let responseJson = await response.json();
    var poules = responseJson.poules;
    var teams = poules.teams.guid;
  } catch (e) {
    console.error(e);
  }
}

