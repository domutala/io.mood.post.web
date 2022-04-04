export interface ISession {
  token?: string;
  user?: string;
  keys?: { public: string; private: string };
  server_keys?: { public: string };
}

export interface ISessionState {
  session: ISession;
}
