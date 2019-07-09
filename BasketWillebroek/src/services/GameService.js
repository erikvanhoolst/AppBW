import { baseUrlAPI } from '../assets/values';
import { Alert } from 'react-native';
const teamMatchesByGuidUrl = baseUrlAPI + "TeamMatchesByGuid?";
const orgDetailByGuidUrl = baseUrlAPI + "OrgDetailByGuid?";
const teamDetailByGuidUrl = baseUrlAPI + "TeamDetailByGuid?";

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

