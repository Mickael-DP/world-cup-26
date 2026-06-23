import { Avatar, Table } from "@heroui/react";
import type { Table as TableType } from "../types/standings"

interface GroupTableProps {
  table: TableType[];
}

const getPositionStyle = (position: number) => {
  if (position === 1) return "text-amber-400 font-bold";
  if (position === 2) return "text-amber-400/70 font-semibold";
  return "text-zinc-500";
};

const getRowStyle = (position: number) => {
  if (position === 1) return "border-l-2 border-l-amber-400";
  if (position === 2) return "border-l-2 border-l-amber-400/50";
  return "border-l-2 border-l-transparent";
};

const getPointsStyle = (position: number) => {
  if (position <= 2) return "text-amber-400 font-bold tabular-nums";
  return "text-zinc-300 font-semibold tabular-nums";
};

const GroupTable = ({ table }: GroupTableProps) => {
  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Group standings"
          className=" bg-zinc-900/40"
        >
          <Table.Header className="bg-zinc-900/60 border-b border-zinc-800/80">
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 w-12">
              #
            </Table.Column>
            <Table.Column
              isRowHeader
              className="text-[10px] font-bold tracking-widest uppercase text-zinc-600"
            >
              Team
            </Table.Column>
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">
              Games
            </Table.Column>
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">
              Win
            </Table.Column>
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">
              Draw
            </Table.Column>
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">
              Loose
            </Table.Column>
            <Table.Column className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 text-center">
              Pts
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {table.map((team) => (
              <Table.Row
                key={team.position}
                className={`border-b border-zinc-800/40 hover:bg-zinc-800/40 transition-colors ${getRowStyle(team.position)}`}
              >
                <Table.Cell className={`text-sm ${getPositionStyle(team.position)}`}>
                  {team.position}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5 shrink-0">
                      <Avatar.Image src={team.team.crest} alt={team.team.name} />
                      <Avatar.Fallback className="text-[10px]">
                        {team.team.shortName}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="text-xs font-medium text-zinc-100">
                      {team.team.name}
                    </span>
                    {team.position <= 2 && (
                      <span className="hidden sm:inline-flex text-[9px] font-bold tracking-wider uppercase text-amber-400/60 bg-amber-400/10 px-1.5 py-0.5 rounded-sm">
                        Q
                      </span>
                    )}
                  </div>
                </Table.Cell>
                <Table.Cell className="text-xs text-zinc-400 tabular-nums text-center">
                  {team.playedGames}
                </Table.Cell>
                <Table.Cell className="text-xs text-zinc-400 tabular-nums text-center">
                  {team.won}
                </Table.Cell>
                <Table.Cell className="text-xs text-zinc-400 tabular-nums text-center">
                  {team.draw}
                </Table.Cell>
                <Table.Cell className="text-xs text-zinc-400 tabular-nums text-center">
                  {team.lost}
                </Table.Cell>
                <Table.Cell className={`text-xs text-center ${getPointsStyle(team.position)}`}>
                  {team.points}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default GroupTable;