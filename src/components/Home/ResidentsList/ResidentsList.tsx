type ResidentsListProps = {
  roomNumber: number;
  residents: Array<String>;
};

export const ResidentsList = ({
  roomNumber,
  residents,
}: ResidentsListProps) => (
  <tr>
    <th>{roomNumber}</th>
    <td>
      <ul className="list-unstyled">
        {residents.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </td>
  </tr>
);
