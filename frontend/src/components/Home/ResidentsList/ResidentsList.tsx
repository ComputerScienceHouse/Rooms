import { Resident } from "../../../model/types/resident";

type ResidentsListProps = {
  roomNumber: number;
  residents: Array<Resident>;
};

export const ResidentsList = ({
  roomNumber,
  residents,
}: ResidentsListProps) => (
  <tr>
    <th>{roomNumber}</th>
    <td>
      <ul className="list-unstyled">
        {residents.map((resident) => (
          <li>
            {resident.name} ({resident.username})
          </li>
        ))}
      </ul>
    </td>
  </tr>
);
