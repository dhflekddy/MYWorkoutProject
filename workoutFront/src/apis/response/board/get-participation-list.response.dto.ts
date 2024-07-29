import { ParticipationListItem } from "types/interface";
import ResponseDto from "../response.dto";


export default interface GetParticipationListResponseDto extends ResponseDto{
    participationList: ParticipationListItem[],
}