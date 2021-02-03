type MemberRowProps = {
  name: string;
  points: number;
};

export const MemberRow = ({ name, points }: MemberRowProps) => (
  <tr>
    <th>{name}</th>
    <td>{points}</td>
  </tr>
);
