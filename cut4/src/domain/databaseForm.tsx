// src/domain/databaseForm.tsx

import React, { useState } from "react";
import { useComponents } from "../renderers/simpleimpl/use.simple";
import { NameAnd } from "@laoban/utils";

export enum DatabaseType {
  MySQL = 'MySQL',
  PostgreSQL = 'PostgreSQL',
  SQLServer = 'SQLServer',
  Oracle = 'Oracle',
}

interface BaseConnectionParams {
  host: string;
  port: string;
  user: string;
  password: string;
}

const baseDefn = {
  host: 'string',
  port: 'string',
  user: 'string',
  password: 'string',
};

interface MySQLSpecificParams {
  database: string;
  ssl?: string;
}

interface PostgreSQLSpecificParams {
  database: string;
  ssl?: string;
}

interface SQLServerSpecificParams {
  instanceName?: string;
  encrypt?: string;
}

interface OracleSpecificParams {
  serviceName: string;
  sid?: string;
}

export type ConnectionParams =
  | { type: DatabaseType.MySQL; base: BaseConnectionParams; specific: MySQLSpecificParams }
  | { type: DatabaseType.PostgreSQL; base: BaseConnectionParams; specific: PostgreSQLSpecificParams }
  | { type: DatabaseType.SQLServer; base: BaseConnectionParams; specific: SQLServerSpecificParams }
  | { type: DatabaseType.Oracle; base: BaseConnectionParams; specific: OracleSpecificParams };

const mySqlSpecificDefn = {
  database: 'string',
  ssl: 'string',
};

const postgreSqlSpecificDefn = {
  database: 'string',
  ssl: 'string',
};

const sqlServerSpecificDefn = {
  instanceName: 'string',
  encrypt: 'string',
};

const oracleSpecificDefn = {
  serviceName: 'string',
  sid: 'string',
};

export const allDefns: NameAnd<{ base: typeof baseDefn; specific: any }> = {
  [DatabaseType.MySQL]: {
    base: baseDefn,
    specific: mySqlSpecificDefn,
  },
  [DatabaseType.PostgreSQL]: {
    base: baseDefn,
    specific: postgreSqlSpecificDefn,
  },
  [DatabaseType.SQLServer]: {
    base: baseDefn,
    specific: sqlServerSpecificDefn,
  },
  [DatabaseType.Oracle]: {
    base: baseDefn,
    specific: oracleSpecificDefn,
  },
};

export const allTypes: DatabaseType[] = [
  DatabaseType.MySQL,
  DatabaseType.PostgreSQL,
  DatabaseType.SQLServer,
  DatabaseType.Oracle,
];

export type DisplayConnectionParamsProps = {
  params?: Partial<ConnectionParams>;
};

export function DisplayConnectionParams({ params }: DisplayConnectionParamsProps) {
  const [connectionParams, setConnectionParams] = useState<Partial<ConnectionParams>>(params || {});
  const { Field, FieldContainer } = useComponents<ConnectionParams>(connectionParams, setConnectionParams);
  const defns = (connectionParams?.type && allDefns[connectionParams.type]) || {};

  return (
    <FieldContainer>
      <Field id="type" renderer={{ type: 'dropdown', options: allTypes }} />
      {/* Render Base Connection Parameters */}
      {defns.base && (
        <div>
          <h3>Base Connection Parameters</h3>
          {Object.entries(defns.base).map(([key, defn]) => (
            <Field key={`base.${key}`} id={`base.${key}`} renderer={defn} />
          ))}
        </div>
      )}
      {/* Render Specific Parameters */}
      {defns.specific && (
        <div>
          <h3>Specific Parameters</h3>
          {Object.entries(defns.specific).map(([key, defn]) => (
            <Field key={`specific.${key}`} id={`specific.${key}`} renderer={defn} />
          ))}
        </div>
      )}
    </FieldContainer>
  );
}
