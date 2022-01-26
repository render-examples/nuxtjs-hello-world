export const state = () => ({
  pageType: null,
  isMobile: false,
  isDesktop: false,
  hasHover: false,
  isLoading: true,
  cursorPosition: {
    x: 0,
    y: 0
  },
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
  },
})

export const mutations = {
  setPageType: (state, payload) => {
    state.pageType= payload;
  },
  setIsLoading: (state, payload) => {
    state.isLoading= payload;
  },
  setIsMobile: (state, payload) => {
    state.isMobile = payload;
  },
  setIsDesktop: (state, payload) => {
    state.isDesktop = payload;
  },
  setHasHover: (state, payload) => {
    state.hasHover = payload;
  },
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload);
  },
  setCursorPosition: (state, payload) => {
    state.cursorPosition = Object.assign({}, state.cursorPosition, payload);
  },
}

export const getters = {
  getPageType: (state) => {
    return state.pageType;
  },
  getIsLoading: (state) => {
    return state.isLoading;
  },
  getIsMobile: (state) => {
    return state.isMobile.isMobile;
  },
  getIsDesktop: (state) => {
    return state.isDesktop.isDesktop;
  },
  getHasHover: (state) => {
    return state.hasHover.hasHover;
  },
  getScroll: (state) => {
    return state.scroll;
  },
  getCursorPosition: (state) => {
    return state.cursorPosition;
  },
}

export const actions = {
  setPageType (context) {
    context.commit('setPageType');
  },
  setIsLoading (context) {
    context.commit('setIsLoading');
  },
  setIsMobile (context) {
    context.commit('setIsMobile');
  },
  setIsDesktop (context) {
    context.commit('setIsMobile');
  },
  setHasHover (context) {
    context.commit('setHasHover');
  },
  setCursorPosition (context) {
    context.commit('setCursorPosition');
  }
}