import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { IApp, IAppSate } from "@/store/types/App";

const namespaced = true;

const state: IAppSate = {
  app: {},
};

const getters: GetterTree<IAppSate, RootState> = {
  get(st): IApp | undefined {
    return st.app;
  },
};

const mutations: MutationTree<IAppSate> = {
  SET_TOKEN(st: IAppSate, payload): void {
    st.app.token = payload;
  },

  CLEAN(st: IAppSate): void {
    st.app = {};
  },
};

const actions: ActionTree<IAppSate, RootState> = {};

const app: Module<IAppSate, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default app;
