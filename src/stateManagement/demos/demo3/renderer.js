import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
  now: Date.now,
  getRootHostContext: () => ({}),
  prepareForCommit: () => ({}),
  resetAfterCommit: () => {},
  getChildHostContext: () => ({}),
  shouldSetTextContent: () => true,
  createInstance: () => {},
  createTextInstance: () => {},
  appendInitialChild: () => {},
  appendChild: () => {},
  finalizeInitialChildren: () => false,
  supportsMutation: true,
  appendChildToContainer: () => {},
  prepareUpdate: () => true,
  commitUpdate: () => {},
  commitTextUpdate: () => {},
  removeChild: () => {},
  clearContainer: () => {},
  supportsPersistence: false,
  getPublicInstance: (instance) => instance,
  preparePortalMount: () => {},
  isPrimaryRenderer: false,
  supportsHydration: false,
  scheduleTimeout: setTimeout,
  cancelTimeout: (id) => clearTimeout(id),
  noTimeout: -1,
});

function render(reactElement) {
  const container = reconciler.createContainer(null, 0, false, null);
  return reconciler.updateContainer(reactElement, container);
}

export default render;
