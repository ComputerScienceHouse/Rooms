import React, { CSSProperties } from "react";

type MemberRowProps = {
  name: string;
  username: string;
  points: number;
};

const mystyles: CSSProperties = {
  wordWrap: "break-word",
  maxWidth: "100px",
};

export const MemberRow = ({ name, points, username }: MemberRowProps) => (
  <tr>
    <th className="col-small" style={mystyles}>{`${name} (${username})`}</th>
    <td>{points}</td>
  </tr>
);
