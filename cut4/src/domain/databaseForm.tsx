// src/domain/databaseForm.tsx

import React, { useState } from "react";
import { useComponents } from "../renderers/simpleimpl/use.simple";
import { ObjectDefn } from "../renderers/RenderObject";
import { NameAnd } from "@laoban/utils";
import { lensBuilder, LensAndPath } from "../utils/lensUtils";

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

const baseDefn: ObjectDefn<BaseConnectionParams> = {
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

const mySqlSpecificDefn: ObjectDefn<MySQLSpecificParams> = {
  database: 'string',
  ssl: 'string',
};

const postgreSqlSpecificDefn: ObjectDefn<PostgreSQLSpecificParams> = {
  database: 'string',
  ssl: 'string',
};

const sqlServerSpecificDefn: ObjectDefn<SQLServerSpecificParams> = {
  instanceName: 'string',
  encrypt: 'string',
};

const oracleSpecificDefn: ObjectDefn<OracleSpecificParams> = {
  serviceName: 'string',
  sid: 'string',
};

export const allDefns: NameAnd<{ base: ObjectDefn<BaseConnectionParams>; specific: ObjectDefn<any> }> = {
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
  const { Field, FieldContainer } = useComponents<Partial<ConnectionParams>>(connectionParams, setConnectionParams);
  const defns = (connectionParams?.type && allDefns[connectionParams.type]) || {};

  // Define lenses
  const connectionParamsLens = lensBuilder<Partial<ConnectionParams>>();
  const typeLens = connectionParamsLens.focusOn('type').build();
  const baseLens = connectionParamsLens.focusOn('base').build();
  const specificLens = connectionParamsLens.focusOn('specific').build();

  // Create lenses for base fields
  const baseFieldLenses: { [key: string]: LensAndPath<Partial<ConnectionParams>, any> } = {};
  Object.keys(defns.base || {}).forEach((key) => {
    baseFieldLenses[key] = baseLens.focusOn(key as keyof BaseConnectionParams).build();
  });

  // Create lenses for specific fields
  const specificFieldLenses: { [key: string]: LensAndPath<Partial<ConnectionParams>, any> } = {};
  Object.keys(defns.specific || {}).forEach((key) => {
    specificFieldLenses[key] = specificLens.focusOn(key as string).build();
  });

  return (
    <FieldContainer>
      <Field lens={typeLens} renderer={{ type: 'dropdown', options: allTypes }} />
      {/* Render Base Connection Parameters */}
      {defns.base && (
        <div>
          <h3>Base Connection Parameters</h3>
          {Object.entries(defns.base).map(([key, defn]) => (
            <Field key={`base.${key}`} lens={baseFieldLenses[key]} renderer={defn} />
          ))}
        </div>
      )}
      {/* Render Specific Parameters */}
      {defns.specific && (
        <div>
          <h3>Specific Parameters</h3>
          {Object.entries(defns.specific).map(([key, defn]) => (
            <Field key={`specific.${key}`} lens={specificFieldLenses[key]} renderer={defn} />
          ))}
        </div>
      )}
    </FieldContainer>
  );
}
