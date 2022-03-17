import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { Params, ParamsState } from "@/store/types/Params";

const namespaced = true;

const state: ParamsState = {
  params: {
    size: { width: 0, height: 0 },
    drag: { horizontal: 0, vertical: 0 },
    darkMode: false,
  },
};

const getters: GetterTree<ParamsState, RootState> = {
  get(st): Params | undefined {
    return st.params;
  },
};

const mutations: MutationTree<ParamsState> = {
  SET_SIZE(
    st: ParamsState,
    size: {
      key: "width" | "height";
      value: number;
    }
  ): void {
    st.params.size[size.key] = size.value;
  },

  SET_DRAG(
    st: ParamsState,
    drag: {
      key: "horizontal" | "vertical";
      value: number;
    }
  ): void {
    st.params.drag[drag.key] = drag.value;
  },
};

const actions: ActionTree<ParamsState, RootState> = {};

const params: Module<ParamsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default params;
