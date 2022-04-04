import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { ISession, ISessionState } from "@/store/types/Session";

const namespaced = true;

const state: ISessionState = {
  session: {},
};

const getters: GetterTree<ISessionState, RootState> = {
  get(st): ISession | undefined {
    return st.session;
  },
};

const mutations: MutationTree<ISessionState> = {
  SET_TOKEN(st: ISessionState, payload): void {
    st.session.token = payload;
  },

  SET_USER(st: ISessionState, payload): void {
    st.session.user = payload;
  },

  SET_KEYS(st: ISessionState, payload): void {
    st.session.keys = payload;
  },

  SET_SERVER_KEYS(st: ISessionState, payload): void {
    st.session.server_keys = payload;
  },

  CLEAN(st: ISessionState): void {
    st.session = {};
  },
};

const actions: ActionTree<ISessionState, RootState> = {};

const session: Module<ISessionState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default session;
