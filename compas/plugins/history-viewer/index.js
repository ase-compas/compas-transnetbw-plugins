var Mh = Object.defineProperty;
var yc = (t) => {
  throw TypeError(t);
};
var Ph = (t, e, n) => e in t ? Mh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Tt = (t, e, n) => Ph(t, typeof e != "symbol" ? e + "" : e, n), _l = (t, e, n) => e.has(t) || yc("Cannot " + n);
var B = (t, e, n) => (_l(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ze = (t, e, n) => e.has(t) ? yc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ke = (t, e, n, r) => (_l(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Be = (t, e, n) => (_l(t, e, "access private method"), n);
const au = {}, Lt = Symbol("uninitialized"), su = "http://www.w3.org/1999/xhtml", Hh = "http://www.w3.org/2000/svg", Uh = "@attach", lu = !1;
var ol = Array.isArray, kh = Array.prototype.indexOf, za = Array.prototype.includes, cl = Array.from, Lo = Object.defineProperty, zr = Object.getOwnPropertyDescriptor, ou = Object.getOwnPropertyDescriptors, Bh = Object.prototype, Fh = Array.prototype, Do = Object.getPrototypeOf, Cc = Object.isExtensible;
function ki(t) {
  return typeof t == "function";
}
const ve = () => {
};
function Vh(t) {
  return t();
}
function Fs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function cu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const tn = 2, $i = 4, os = 8, No = 1 << 24, Ln = 16, Xn = 32, Zr = 64, Kl = 128, Mo = 256, Kn = 512, Bt = 1024, pt = 2048, Sn = 4096, sn = 8192, zt = 16384, Ti = 32768, Xa = 1 << 25, vr = 65536, Vs = 1 << 17, Gh = 1 << 18, ua = 1 << 19, du = 1 << 20, lr = 1 << 25, Gs = 1 << 21, Gi = 1 << 22, Xr = 1 << 23, cr = Symbol("$state"), uu = Symbol("component"), fu = Symbol("legacy props"), jh = Symbol(""), Ms = Symbol("attributes"), zl = Symbol("class"), Xl = Symbol("style"), Pa = Symbol("text"), Ps = Symbol("form reset"), cs = new class extends Error {
  constructor() {
    super(...arguments);
    Tt(this, "name", "StaleReactionError");
    Tt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var nu;
const dl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((nu = globalThis.document) != null && nu.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Wh() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function qh() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Kh() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let zh = !1;
function hu(t) {
  return t === this.v;
}
function Po(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function vu(t) {
  return !Po(t, this.v);
}
function Ho(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Xh() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yh(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Zh(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qh() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jh(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $h() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ev(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function iv() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let fa = !1, av = !1;
function sv() {
  fa = !0;
}
function lv(t) {
  let e = t.p;
  for (; e !== null && e.c === null; )
    e = e.p;
  return (e == null ? void 0 : e.c) ?? null;
}
function mu(t, e) {
  return t === null && Ho(), t.c ?? (t.c = new Map(lv(t) || void 0));
}
let vt = null;
function ea(t) {
  vt = t;
}
function me(t) {
  return (
    /** @type {T} */
    mu(vt).get(t)
  );
}
function le(t, e) {
  return mu(vt).set(t, e), e;
}
function Oe(t, e = !1, n) {
  vt = {
    p: vt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      Ye
    ),
    l: fa && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    vt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Fu(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, vt = e.p, Uo(t);
}
function Uo(t = {}) {
  return Lo(t, uu, { value: !0 }), t;
}
function ds() {
  return !fa || vt !== null && vt.l === null;
}
let fi = [];
function gu() {
  var t = fi;
  fi = [], Fs(t);
}
function Dn(t) {
  if (fi.length === 0 && !ja) {
    var e = fi;
    queueMicrotask(() => {
      e === fi && gu();
    });
  }
  fi.push(t);
}
function ov() {
  for (; fi.length > 0; )
    gu();
}
const cv = -7169;
function wt(t, e) {
  t.f = t.f & cv | e;
}
function ko(t) {
  t.f & Kn || t.deps === null ? wt(t, Bt) : wt(t, Sn);
}
function _u(t, e) {
  t.f & pt ? e.set(t, pt) : t.f & Sn && e.get(t) !== pt && e.set(t, Sn), wt(t, Bt);
}
function dv(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Dn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Tc = !1;
function uv() {
  Tc || (Tc = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = n[Ps]) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Qr(t) {
  var e = Xe, n = Ye;
  Mn(null), mr(null);
  try {
    return t();
  } finally {
    Mn(e), mr(n);
  }
}
function bu(t, e, n, r = n) {
  t.addEventListener(e, () => Qr(n));
  const i = (
    /** @type {any} */
    t[Ps]
  );
  i ? t[Ps] = () => {
    i(), r(!0);
  } : t[Ps] = () => r(!0), uv();
}
function Eu(t, e, n, r) {
  const i = ds() ? ta : Bo;
  var a = t.filter((m) => !m.settled), l = e.map(i);
  if (n.length === 0 && a.length === 0) {
    r(l);
    return;
  }
  var o = (
    /** @type {Effect} */
    Ye
  ), c = fv(), d = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((m) => m.promise)) : null;
  function u(m) {
    if (!(o.f & zt)) {
      c();
      try {
        r([...l, ...m]);
      } catch (h) {
        ar(h, o);
      }
      js();
    }
  }
  var g = pu();
  if (n.length === 0) {
    d.then(() => u([])).finally(g);
    return;
  }
  function f() {
    Promise.all(n.map((m) => /* @__PURE__ */ hv(m))).then(u).catch((m) => ar(m, o)).finally(g);
  }
  d ? d.then(() => {
    if (o.f & zt) {
      g();
      return;
    }
    c(), f(), js();
  }) : f();
}
function fv() {
  var t = (
    /** @type {Effect} */
    Ye
  ), e = Xe, n = vt, r = (
    /** @type {Batch} */
    Pe
  );
  return function(a = !0) {
    mr(t), Mn(e), ea(n), a && !(t.f & zt) && (r == null || r.activate(), r == null || r.apply());
  };
}
function js(t = !0) {
  mr(null), Mn(null), ea(null), t && (Pe == null || Pe.deactivate());
}
function pu() {
  var t = (
    /** @type {Effect} */
    Ye
  ), e = t.b, n = (
    /** @type {Batch} */
    Pe
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function ta(t) {
  var e = tn | pt;
  return Ye !== null && (Ye.f |= ua), {
    ctx: vt,
    deps: null,
    effects: null,
    equals: hu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Lt
    ),
    wv: 0,
    parent: Ye,
    ac: null
  };
}
const Ha = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function hv(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    Ye
  );
  r === null && Xh();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = yi(
    /** @type {V} */
    Lt
  ), l = !Xe, o = /* @__PURE__ */ new Set();
  return Tv(() => {
    var m, h;
    var c = (
      /** @type {Effect} */
      Ye
    ), d = cu();
    i = d.promise;
    try {
      Promise.resolve(t()).then(d.resolve, (_) => {
        _ !== cs && d.reject(_);
      }).finally(js);
    } catch (_) {
      d.reject(_), js();
    }
    var u = (
      /** @type {Batch} */
      Pe
    );
    if (l) {
      if (c.f & Ti)
        var g = pu();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (m = r.b) != null && m.is_rendered()
      )
        (h = u.async_deriveds.get(c)) == null || h.reject(Ha);
      else
        for (const _ of o.values())
          _.reject(Ha);
      o.add(d), u.async_deriveds.set(c, d);
    }
    const f = (_, b = void 0) => {
      g == null || g(), o.delete(d), b !== Ha && (u.activate(), b ? (a.f |= Xr, na(a, b)) : (a.f & Xr && (a.f ^= Xr), na(a, _)), u.deactivate());
    };
    d.promise.then(f, (_) => f(null, _ || "unknown"));
  }), fs(() => {
    for (const c of o)
      c.reject(Ha);
  }), new Promise((c) => {
    function d(u) {
      function g() {
        u === i ? c(a) : d(i);
      }
      u.then(g, g);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function de(t) {
  const e = /* @__PURE__ */ ta(t);
  return zu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Bo(t) {
  const e = /* @__PURE__ */ ta(t);
  return e.equals = vu, e;
}
function vv(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Xt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Fo(t) {
  var e, n = Ye, r = t.parent;
  if (!Mr && r !== null && t.v !== Lt && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  r.f & (zt | sn))
    return Wh(), t.v;
  mr(r);
  try {
    vv(t), e = Qu(t);
  } finally {
    mr(n);
  }
  return e;
}
function Iu(t) {
  var e = Fo(t);
  if (!t.equals(e) && (t.wv = Yu(), (!(Pe != null && Pe.is_fork) || t.deps === null) && (Pe !== null ? (Pe.capture(t, e, !0), Yr == null || Yr.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    wt(t, Bt);
    return;
  }
  Mr || (Kt !== null ? (Wo() || Pe != null && Pe.is_fork) && Kt.set(t, e) : ko(t));
}
function mv(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Qr(() => {
        n.ac.abort(cs), n.ac = null;
      }), n.fn !== null && (n.teardown = ve), Za(n, 0), qo(n));
}
function Su(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && ra(e);
}
let bl = null, Ni = null, Pe = null, Yr = null, Kt = null, Yl = null, ja = !1, El = !1, Wa = null, Hs = null;
var xc = 0;
let gv = 1;
var Ki, zi, Xi, wr, Yi, Or, is, tr, nr, Zi, mi, Je, Zl, Au, Ql, Ua, Jl, yu, Cu, Tu, Bi, _v, ka;
const al = class al {
  constructor() {
    ze(this, Je);
    Tt(this, "id", gv++);
    /** True as soon as `#process` was called */
    Tt(this, "started", !1);
    Tt(this, "linked", !0);
    /** @type {Batch | null} */
    Tt(this, "prev", null);
    /** @type {Batch | null} */
    Tt(this, "next", null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Tt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * The keys of this map are identical to `this.previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Tt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * The keys of this map are identical to `this.current`
     * @type {Map<Value, any>}
     */
    Tt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    ze(this, Ki, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    ze(this, zi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ze(this, Xi, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    ze(this, wr, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ze(this, Yi, null);
    /**
     * Effects that were scheduled in this batch but not yet 'resolved' into the
     * root effects that need to be flushed. Resolving — the upwards traversal that
     * marks the path to each effect on the shared effect tree (see #resolve) — is
     * deferred until the batch is processed, so that the markers are created and
     * consumed within a single traversal. Scheduling into other batches (which can
     * happen concurrently, e.g. while a batch is committed) can therefore never
     * observe (and be confused by) this batch's markers.
     * May contain duplicates — deduplication happens during resolving
     * @type {Effect[]}
     */
    ze(this, Or, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    ze(this, is, []);
    /**
     * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
     * @type {Map<Effect, number>}
     */
    ze(this, tr, /* @__PURE__ */ new Map());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    ze(this, nr, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    ze(this, Zi, /* @__PURE__ */ new Set());
    Tt(this, "is_fork", !1);
    ze(this, mi, !1);
    Ni === null ? bl = Ni = this : (Ni.next = this, this.prev = Ni), Ni = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    B(this, nr).has(e) || B(this, nr).set(e, { d: [], m: [] }), B(this, Zi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = B(this, nr).get(e);
    if (r) {
      B(this, nr).delete(e);
      for (var i of r.d)
        wt(i, pt), n(i);
      for (i of r.m)
        wt(i, Sn), n(i);
    }
    B(this, Zi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== Lt && !this.previous.has(e) && this.previous.set(e, e.v), e.f & Xr || (this.current.set(e, [n, r]), Kt == null || Kt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    Pe = this;
  }
  deactivate() {
    Pe = null, Kt = null;
  }
  flush() {
    try {
      El = !0, Pe = this, Be(this, Je, Ua).call(this);
    } finally {
      xc = 0, Yl = null, Wa = null, Hs = null, El = !1, Pe = null, Kt = null, dr.clear();
    }
  }
  discard() {
    var e;
    for (const n of B(this, zi)) n(this);
    B(this, zi).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Ha);
    Be(this, Je, ka).call(this), (e = B(this, Yi)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    B(this, is).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (Ke(this, Xi, B(this, Xi) + 1), e) {
      let r = B(this, wr).get(n) ?? 0;
      B(this, wr).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (Ke(this, Xi, B(this, Xi) - 1), e) {
      let r = B(this, wr).get(n) ?? 0;
      r === 1 ? B(this, wr).delete(n) : B(this, wr).set(n, r - 1);
    }
    B(this, mi) || (Ke(this, mi, !0), Dn(() => {
      Ke(this, mi, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Map<Effect, number>} dirty_reactions
   */
  transfer_reactions(e) {
    for (const [n, r] of e)
      this.add_dirty_reaction(n, r);
    e.clear();
  }
  /**
   * @param {Effect} effect
   * @param {number} status
   */
  add_dirty_reaction(e, n) {
    (n === pt || B(this, tr).get(e) !== pt) && B(this, tr).set(e, n);
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    B(this, Ki).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    B(this, zi).add(e);
  }
  settled() {
    return (B(this, Yi) ?? Ke(this, Yi, cu())).promise;
  }
  static ensure() {
    if (Pe === null) {
      const e = Pe = new al();
      !El && !ja && Dn(() => {
        e.started || e.flush();
      });
    }
    return Pe;
  }
  apply() {
    {
      Kt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var n;
    if (Yl = e, (n = e.b) != null && n.is_pending && e.f & ($i | os | No) && !(e.f & Ti)) {
      e.b.defer_effect(e);
      return;
    }
    B(this, Or).push(e);
  }
};
Ki = new WeakMap(), zi = new WeakMap(), Xi = new WeakMap(), wr = new WeakMap(), Yi = new WeakMap(), Or = new WeakMap(), is = new WeakMap(), tr = new WeakMap(), nr = new WeakMap(), Zi = new WeakMap(), mi = new WeakMap(), Je = new WeakSet(), Zl = function() {
  if (this.is_fork) return !0;
  for (const e of B(this, wr).keys())
    if (!Be(this, Je, Au).call(this, e))
      return !0;
  return !1;
}, /**
 * Whether `effect` is inside a branch that this batch skips
 * @param {Effect} effect
 */
Au = function(e) {
  for (var n = (
    /** @type {Effect | null} */
    e
  ); n !== null; n = n.parent)
    if (B(this, nr).has(n)) return !0;
  return !1;
}, /**
 * Convert the effects that were scheduled in this batch into the root effects
 * that need to be traversed, marking the path to each effect (by clearing the
 * `CLEAN` flag on ancestor branches) so that the traversal can find them.
 * This happens right before traversal rather than at scheduling time, so that
 * the markers left on the (shared) effect tree are created and consumed within
 * a single traversal — scheduling into other batches can never observe them
 * @returns {Effect[]}
 */
Ql = function() {
  var e = [];
  for (const a of B(this, Or))
    if (!(a.f & zt || !(a.f & (pt | Sn)))) {
      for (var n = a, r = !1; n.parent !== null; ) {
        n = n.parent;
        var i = n.f;
        if (i & (Zr | Xn)) {
          if (!(i & Bt)) {
            r = !0;
            break;
          }
          n.f ^= Bt;
        }
      }
      r || e.push(n);
    }
  return Ke(this, Or, []), e;
}, Ua = function() {
  var o, c, d, u;
  this.started = !0;
  for (const [g, f] of B(this, tr))
    wt(g, f), this.schedule(g);
  this.apply();
  for (var e = Wa = [], n = [], r = Hs = []; B(this, Or).length > 0; ) {
    xc++ > 1e3 && (Be(this, Je, ka).call(this), Ev());
    for (const g of Be(this, Je, Ql).call(this))
      try {
        Be(this, Je, Jl).call(this, g, e, n);
      } catch (f) {
        throw Ou(g), Be(this, Je, Zl).call(this) || this.discard(), f;
      }
  }
  if (Pe = null, r.length > 0) {
    var i = al.ensure();
    for (const g of r)
      i.schedule(g);
  }
  if (Wa = null, Hs = null, Be(this, Je, Zl).call(this)) {
    Be(this, Je, Bi).call(this, n), Be(this, Je, Bi).call(this, e);
    for (const [g, f] of B(this, nr))
      wu(g, f);
    r.length > 0 && /** @type {unknown} */
    Be(o = Pe, Je, Ua).call(o);
    return;
  }
  const a = Be(this, Je, yu).call(this);
  if (a) {
    Be(this, Je, Bi).call(this, n), Be(this, Je, Bi).call(this, e), Be(c = a, Je, Tu).call(c, this);
    return;
  }
  B(this, tr).clear();
  for (const g of B(this, Ki)) g(this);
  B(this, Ki).clear(), Yr = this, wc(n), wc(e), Yr = null, (d = B(this, Yi)) == null || d.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Pe
  );
  B(this, Xi) === 0 && (B(this, Or).length === 0 || l !== null) && Be(this, Je, ka).call(this), l !== null && (dr.clear(), Be(u = l, Je, Ua).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Jl = function(e, n, r) {
  e.f ^= Bt;
  for (var i = e.first; i !== null; ) {
    var a = i.f, l = (a & (Xn | Zr)) !== 0, o = l && (a & Bt) !== 0, c = o || (a & sn) !== 0 || B(this, nr).has(i);
    if (!c && i.fn !== null) {
      l ? i.f ^= Bt : a & $i ? n.push(i) : vs(i) && (a & Ln && this.add_dirty_reaction(i, Sn), ra(i));
      var d = i.first;
      if (d !== null) {
        i = d;
        continue;
      }
    }
    for (; i !== null; ) {
      var u = i.next;
      if (u !== null) {
        i = u;
        break;
      }
      i = i.parent;
    }
  }
}, yu = function() {
  for (var e = this.prev; e !== null; e = e.prev)
    if (!e.is_fork && Be(this, Je, Cu).call(this, e)) return e;
  return null;
}, /** @param {Batch} batch */
Cu = function(e) {
  for (const [n, [, r]] of this.current)
    if (!r && e.current.has(n))
      return !0;
  return !1;
}, /**
 * @param {Batch} batch
 */
Tu = function(e) {
  var r;
  for (const [i, a] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of e.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && a.promise.then(l.resolve).catch(l.reject);
  }
  e.async_deriveds.clear(), this.transfer_reactions(B(e, tr));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !(i.f & tn && !(i.f & (pt | Sn))))
      for (const c of a) {
        var l = c.f;
        if (l & tn)
          n(
            /** @type {Derived} */
            c
          );
        else {
          var o = (
            /** @type {Effect} */
            c
          );
          l & (Gi | Ln) && !this.async_deriveds.has(o) && (B(this, tr).delete(o), wt(o, pt), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), Be(r = e, Je, ka).call(r), Pe = this, Be(this, Je, Ua).call(this);
}, /**
 * @param {Effect[]} effects
 */
Bi = function(e) {
  for (var n = 0; n < e.length; n += 1)
    _u(e[n], B(this, tr));
}, _v = function() {
  var g, f;
  for (let m = bl; m !== null; m = m.next) {
    var e = m.id < this.id, n = [];
    for (const [h, [_, b]] of this.current) {
      if (m.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          m.current.get(h)[0]
        );
        if (e && _ !== r)
          m.current.set(h, [_, b]);
        else
          continue;
      }
      n.push(h);
    }
    if (e)
      for (const [h, _] of this.async_deriveds) {
        const b = m.async_deriveds.get(h);
        b && _.promise.then(b.resolve).catch(b.reject);
      }
    var i = [...m.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      m.current.get(h)[1]
    );
    if (!(!m.started || i.length === 0)) {
      var a = i.filter((h) => !this.current.has(h));
      if (a.length === 0)
        e && m.discard();
      else if (n.length > 0) {
        if (e)
          for (const h of B(this, Zi))
            m.unskip_effect(h, (_) => {
              var b;
              _.f & (Ln | Gi) ? m.schedule(_) : Be(b = m, Je, Bi).call(b, [_]);
            });
        m.activate();
        var l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var c of n)
          xu(c, a, l, o);
        o = /* @__PURE__ */ new Map();
        var d = [...m.current].filter(([h, _]) => {
          const b = this.current.get(h);
          return b ? b[0] !== _[0] || b[1] !== _[1] : !0;
        }).map(([h]) => h);
        if (d.length > 0)
          for (const h of B(this, is))
            !(h.f & (zt | sn | Vs)) && Vo(h, d, o) && (h.f & (Gi | Ln) ? (wt(h, pt), m.schedule(h)) : m.add_dirty_reaction(h, pt));
        if (B(m, Or).length > 0 && !B(m, mi)) {
          m.apply();
          for (var u of Be(g = m, Je, Ql).call(g))
            Be(f = m, Je, Jl).call(f, u, [], []);
        }
        m.deactivate();
      }
    }
  }
}, ka = function() {
  if (this.linked) {
    var e = this.prev, n = this.next;
    e === null ? bl = n : e.next = n, n === null ? Ni = e : n.prev = e, this.linked = !1;
  }
};
let Ai = al;
function bv(t) {
  var e = ja, n = Yr;
  Yr = null, ja = !0;
  try {
    for (var r; ; ) {
      if (ov(), Pe === null)
        return (
          /** @type {T} */
          r
        );
      Pe.flush();
    }
  } finally {
    ja = e, Yr = n;
  }
}
function Ev() {
  try {
    $h();
  } catch (t) {
    ar(t, Yl);
  }
}
let Bn = null;
function wc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (zt | sn)) && vs(r) && (Bn = /* @__PURE__ */ new Set(), ra(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Wu(r), (Bn == null ? void 0 : Bn.size) > 0)) {
        dr.clear();
        for (const i of Bn) {
          if (i.f & (zt | sn)) continue;
          const a = [i];
          let l = i.parent;
          for (; l !== null; )
            Bn.has(l) && (Bn.delete(l), a.push(l)), l = l.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const c = a[o];
            c.f & (zt | sn) || ra(c);
          }
        }
        Bn.clear();
      }
    }
    Bn = null;
  }
}
function xu(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const a = i.f;
      a & tn ? xu(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : a & (Gi | Ln) && !(a & pt) && Vo(i, e, r) && (wt(i, pt), Go(
        /** @type {Effect} */
        i
      ));
    }
}
function Vo(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (za.call(e, i))
        return !0;
      if (i.f & tn && Vo(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function Go(t) {
  Pe.schedule(t);
}
function wu(t, e) {
  if (!(t.f & Xn && t.f & Bt)) {
    t.f & pt ? e.d.push(t) : t.f & Sn && e.m.push(t), wt(t, Bt);
    for (var n = t.first; n !== null; )
      wu(n, e), n = n.next;
  }
}
function Ou(t) {
  wt(t, Bt);
  for (var e = t.first; e !== null; )
    Ou(e), e = e.next;
}
let Ws = /* @__PURE__ */ new Set();
const dr = /* @__PURE__ */ new Map();
let Ru = !1;
function yi(t, e) {
  var n = {
    f: 0,
    v: t,
    reactions: null,
    equals: hu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(t, e) {
  const n = yi(t);
  return zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Lu(t, e = !1, n = !0) {
  var i;
  const r = yi(t);
  return e || (r.equals = vu), fa && n && vt !== null && vt.l !== null && ((i = vt.l).s ?? (i.s = [])).push(r), r;
}
function V(t, e, n = !1) {
  Xe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Wn || Xe.f & Vs) && ds() && Xe.f & (tn | Ln | Gi | Vs) && (fr === null || !fr.has(t)) && rv();
  let r = n ? _e(e) : e;
  return na(t, r, Hs);
}
var ci = null, $l = 0;
function na(t, e, n = null) {
  if (!t.equals(e)) {
    Mr ? dr.set(t, e) : dr.has(t) || dr.set(t, t.v);
    var r = Ai.ensure();
    if (r.capture(t, e), t.f & tn) {
      const i = (
        /** @type {Derived} */
        t
      );
      t.f & pt && Fo(i), Kt === null && ko(i);
    }
    t.wv = Yu(), ci = null, $l = 0, Du(t, pt, n), ci = null, ds() && Ye !== null && Ye.f & Bt && !(Ye.f & (Xn | Zr)) && (wn === null ? Ov([t]) : wn.push(t)), !r.is_fork && Ws.size > 0 && !Ru && pv();
  }
  return e;
}
function pv() {
  Ru = !1;
  for (const t of Ws) {
    t.f & Bt && wt(t, Sn);
    let e;
    try {
      e = vs(t);
    } catch {
      e = !0;
    }
    e && ra(t);
  }
  Ws.clear();
}
function qa(t) {
  V(t, t.v + 1);
}
function Du(t, e, n) {
  var r = t.reactions;
  if (r !== null) {
    var i = ds(), a = r.length;
    if ($l += a, $l > 1e5 && ci === null && (ci = /* @__PURE__ */ new Set()), ci !== null) {
      if (ci.has(t)) return;
      ci.add(t);
    }
    for (var l = 0; l < a; l++) {
      var o = r[l], c = o.f;
      if (!(!i && o === Ye)) {
        var d = (c & pt) === 0;
        if (d && wt(o, e), c & Vs)
          Ws.add(
            /** @type {Effect} */
            o
          );
        else if (c & tn) {
          var u = (
            /** @type {Derived} */
            o
          );
          Kt == null || Kt.delete(u), Du(u, Sn, n);
        } else if (d) {
          var g = (
            /** @type {Effect} */
            o
          );
          c & Ln && Bn !== null && Bn.add(g), n !== null ? n.push(g) : Go(g);
        }
      }
    }
  }
}
function _e(t) {
  if (typeof t != "object" || t === null || cr in t || uu in t)
    return t;
  const e = Do(t);
  if (e !== Bh && e !== Fh)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ol(t), i = /* @__PURE__ */ fe(0), a = pi, l = (o) => {
    if (pi === a)
      return o();
    var c = Xe, d = pi;
    Mn(null), Lc(a);
    var u = o();
    return Mn(c), Lc(d), u;
  };
  return r && n.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && tv();
        var u = n.get(c);
        return u === void 0 ? l(() => {
          var g = /* @__PURE__ */ fe(d.value);
          return n.set(c, g), g;
        }) : V(u, d.value, !0), !0;
      },
      deleteProperty(o, c) {
        var d = n.get(c);
        if (d === void 0) {
          if (c in o) {
            const u = l(() => /* @__PURE__ */ fe(Lt));
            n.set(c, u), qa(i);
          }
        } else
          V(d, Lt), qa(i);
        return !0;
      },
      get(o, c, d) {
        var m;
        if (c === cr)
          return t;
        var u = n.get(c), g = c in o;
        if (u === void 0 && (!g || (m = zr(o, c)) != null && m.writable) && (u = l(() => {
          var h = _e(g ? o[c] : Lt), _ = /* @__PURE__ */ fe(h);
          return _;
        }), n.set(c, u)), u !== void 0) {
          var f = s(u);
          return f === Lt ? void 0 : f;
        }
        return Reflect.get(o, c, d);
      },
      getOwnPropertyDescriptor(o, c) {
        var f;
        (f = this.has) == null || f.call(this, o, c);
        var d = Reflect.getOwnPropertyDescriptor(o, c), u = n.get(c);
        if (u !== void 0) {
          var g = s(u);
          if (g === Lt)
            return;
          if (d && "value" in d)
            d.value = g;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(o, c) {
        var f;
        if (c === cr)
          return !0;
        var d = n.get(c), u = d !== void 0 && d.v !== Lt || Reflect.has(o, c);
        if (d !== void 0 || (Ye !== null || Xe !== null) && (!u || (f = zr(o, c)) != null && f.writable)) {
          d === void 0 && (d = l(() => {
            var m = u ? _e(o[c]) : Lt, h = /* @__PURE__ */ fe(m);
            return h;
          }), n.set(c, d));
          var g = s(d);
          if (g === Lt)
            return !1;
        }
        return u;
      },
      set(o, c, d, u) {
        var y;
        var g = n.get(c), f = c in o;
        if (r && c === "length")
          for (var m = d; m < /** @type {Source<number>} */
          g.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? V(h, Lt) : m in o && (h = l(() => /* @__PURE__ */ fe(Lt)), n.set(m + "", h));
          }
        if (g === void 0)
          (!f || (y = zr(o, c)) != null && y.writable) && (g = l(() => /* @__PURE__ */ fe(void 0)), V(g, _e(d)), n.set(c, g));
        else {
          f = g.v !== Lt;
          var _ = l(() => _e(d));
          V(g, _);
        }
        var b = Reflect.getOwnPropertyDescriptor(o, c);
        if (b != null && b.set && b.set.call(u, d), !f) {
          if (r && typeof c == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(c);
            Number.isInteger(p) && p >= E.v && V(E, p + 1);
          }
          qa(i);
        }
        return !0;
      },
      ownKeys(o) {
        s(i);
        var c = Reflect.ownKeys(o).filter((g) => {
          var f = n.get(g);
          return f === void 0 || f.v !== Lt;
        });
        for (var [d, u] of n)
          u.v !== Lt && !(d in o) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        nv();
      }
    }
  );
}
function Oc(t) {
  try {
    if (t !== null && typeof t == "object" && cr in t)
      return t[cr];
  } catch {
  }
  return t;
}
function Nu(t, e) {
  return Object.is(Oc(t), Oc(e));
}
var Ya, jo, Mu, Pu, Hu;
function Iv() {
  if (Ya === void 0) {
    Ya = window, jo = document, Mu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Pu = zr(e, "firstChild").get, Hu = zr(e, "nextSibling").get, Cc(t) && (t[zl] = void 0, t[Ms] = null, t[Xl] = void 0, t.__e = void 0), Cc(n) && (n[Pa] = void 0);
  }
}
function ur(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ci(t) {
  return (
    /** @type {TemplateNode | null} */
    Pu.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function us(t) {
  return (
    /** @type {TemplateNode | null} */
    Hu.call(t)
  );
}
function Ie(t, e) {
  return /* @__PURE__ */ Ci(t);
}
function ie(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ci(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ us(n) : n;
  }
}
function ln(t, e = !1) {
  return /* @__PURE__ */ Ci(t);
}
function ue(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ us(r);
  return r;
}
function Sv(t) {
  t.textContent = "";
}
function Uu() {
  return !1;
}
function ku(t, e, n) {
  return e == null || e === su ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(e, t, { is: n }) : document.createElementNS(e, t)
  );
}
function Av(t) {
  var e = Ye;
  if (e === null)
    return Xe.f |= Xr, t;
  if (!(e.f & Ti) && !(e.f & $i))
    throw t;
  ar(t, e);
}
function ar(t, e) {
  if (t === au)
    throw t;
  if (!(e !== null && e.f & zt)) {
    for (; e !== null; ) {
      if (e.f & Kl && !(e.f & (zt | Xa))) {
        if (!(e.f & Ti))
          throw t;
        try {
          e.b.error(t);
          return;
        } catch (n) {
          t = n;
        }
      }
      e = e.parent;
    }
    throw t;
  }
}
function Bu(t) {
  Ye === null && (Xe === null && Jh(), Qh()), Mr && Zh();
}
function yv(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Zn(t, e) {
  var n = Ye;
  n !== null && n.f & sn && (t |= sn);
  var r = {
    ctx: vt,
    deps: null,
    nodes: null,
    f: t | pt | Kn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  Pe == null || Pe.register_created_effect(r);
  var i = r;
  if (t & $i)
    Wa !== null ? Wa.push(r) : Ai.ensure().schedule(r);
  else if (e !== null) {
    try {
      ra(r);
    } catch (l) {
      throw Xt(r), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & ua) && (i = i.first, t & Ln && t & vr && i !== null && (i.f |= vr));
  }
  if (i !== null && (i.parent = n, n !== null && yv(i, n), Xe !== null && Xe.f & tn && !(t & Zr))) {
    var a = (
      /** @type {Derived} */
      Xe
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Wo() {
  return Xe !== null && !Wn;
}
function fs(t) {
  const e = Zn(os, null);
  return wt(e, Bt), e.teardown = t, e;
}
function De(t) {
  Bu();
  var e = (
    /** @type {Effect} */
    Ye.f
  ), n = !Xe && (e & Xn) !== 0 && vt !== null && !vt.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      vt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Fu(t);
}
function Fu(t) {
  return Zn($i | du, t);
}
function Vu(t) {
  return Bu(), Zn(os | du, t);
}
function Cv(t) {
  Ai.ensure();
  const e = Zn(Zr | ua, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ei(e, () => {
      Xt(e), r(void 0);
    }) : (Xt(e), r(void 0));
  });
}
function xi(t) {
  return Zn($i, t);
}
function Tv(t) {
  return Zn(Gi | ua, t);
}
function hs(t, e = 0) {
  return Zn(os | e, t);
}
function Ae(t, e = [], n = [], r = []) {
  Eu(r, e, n, (i) => {
    Zn(os, () => {
      t(...i.map(s));
    });
  });
}
function ha(t, e = 0) {
  var n = Zn(Ln | e, t);
  return n;
}
function Gu(t, e = 0) {
  var n = Zn(No | e, t);
  return n;
}
function fn(t) {
  return Zn(Xn | ua, t);
}
function ju(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Mr, r = Xe;
    Rc(!0), Mn(null);
    try {
      e.call(null);
    } catch (i) {
      ar(i, t.parent);
    } finally {
      Rc(n), Mn(r);
    }
  }
}
function qo(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Qr(() => {
      i.abort(cs);
    });
    var r = n.next;
    n.f & Zr ? n.parent = null : Xt(n, e), n = r;
  }
}
function xv(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Xn || Xt(e), e = n;
  }
}
function Xt(t, e = !0) {
  var n = !1;
  (e || t.f & Gh) && t.nodes !== null && t.nodes.end !== null && (wv(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= Xa, qo(t, e && !n), Za(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  ju(t), t.f ^= Xa, t.f |= zt;
  var i = t.parent;
  i !== null && i.first !== null && Wu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function wv(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ us(t);
    t.remove(), t = n;
  }
}
function Wu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ei(t, e, n = !0) {
  var r = [];
  t.f |= Mo, qu(t, r, !0);
  var i = () => {
    n && Xt(t), e && e();
  }, a = r.length;
  if (a > 0) {
    var l = () => --a || i();
    for (var o of r)
      o.out(l);
  } else
    i();
}
function qu(t, e, n) {
  if (!(t.f & sn)) {
    t.f ^= sn;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & Zr)) {
        var l = (i.f & vr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Xn) !== 0 && (t.f & Ln) !== 0;
        qu(i, e, l ? n : !1);
      }
      i = a;
    }
  }
}
function qs(t) {
  t.f &= ~Mo, Ku(t, !0);
}
function Ku(t, e) {
  if (!(t.f & Mo) && t.f & sn) {
    t.f ^= sn, t.f & Bt || (wt(t, pt), Ai.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & vr) !== 0 || (n.f & Xn) !== 0;
      Ku(n, i ? e : !1), n = r;
    }
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || e) && l.in();
  }
}
function Ko(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ us(n);
      e.append(n), n = i;
    }
}
let Mr = !1;
function Rc(t) {
  Mr = t;
}
let Xe = null, Wn = !1;
function Mn(t) {
  Xe = t;
}
let Ye = null;
function mr(t) {
  Ye = t;
}
let fr = null;
function zu(t) {
  Xe !== null && (Xe.f & Gs || Xe.f & tn) && (fr ?? (fr = /* @__PURE__ */ new Set())).add(t);
}
let hn = null, In = 0, wn = null;
function Ov(t) {
  wn = t;
}
let Xu = 1, hi = 0, pi = hi;
function Lc(t) {
  pi = t;
}
function Yu() {
  return ++Xu;
}
function vs(t) {
  var e = t.f;
  if (e & pt)
    return !0;
  if (e & Sn) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (vs(
        /** @type {Derived} */
        a
      ) && Iu(
        /** @type {Derived} */
        a
      ), a.wv > t.wv)
        return !0;
    }
    e & Kn && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Kt === null && wt(t, Bt);
  }
  return !1;
}
function Zu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(fr !== null && fr.has(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Zu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? wt(a, pt) : a.f & Bt && wt(a, Sn), Go(
        /** @type {Effect} */
        a
      ));
    }
}
function Qu(t) {
  var e = hn, n = In, r = wn, i = Xe, a = fr, l = vt, o = Wn, c = pi, d = t.f;
  hn = /** @type {null | Value[]} */
  null, In = 0, wn = null, Xe = d & (Xn | Zr) ? null : t, fr = null, ea(t.ctx), Wn = !1, pi = ++hi, t.ac !== null && (Qr(() => {
    t.ac.abort(cs);
  }), t.ac = null);
  try {
    t.f |= Gs;
    var u = (
      /** @type {Function} */
      t.fn
    ), g = u();
    t.f |= Ti;
    var f = Dc(t);
    if (ds() && wn !== null && !Wn && f !== null && !(t.f & (tn | Sn | pt)))
      for (var m = 0; m < /** @type {Source[]} */
      wn.length; m++)
        Zu(
          wn[m],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (hi++, i.deps !== null)
        for (let h = 0; h < n; h += 1)
          i.deps[h].rv = hi;
      if (e !== null)
        for (const h of e)
          h.rv = hi;
      wn !== null && (r === null ? r = wn : r.push(.../** @type {Source[]} */
      wn));
    }
    return t.f & Xr && (t.f ^= Xr), g;
  } catch (h) {
    return Dc(t), Av(h);
  } finally {
    t.f ^= Gs, hn = e, In = n, wn = r, Xe = i, fr = a, ea(l), Wn = o, pi = c;
  }
}
function Dc(t) {
  var i;
  var e = t.deps, n = Pe == null ? void 0 : Pe.is_fork;
  if (hn !== null) {
    var r;
    if (n || Za(t, In), e !== null && In > 0)
      for (e.length = In + hn.length, r = 0; r < hn.length; r++)
        e[In + r] = hn[r];
    else
      t.deps = e = hn;
    if (Wo() && t.f & Kn)
      for (r = In; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && In < e.length && (Za(t, In), e.length = In);
  return e;
}
function Rv(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = kh.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (hn === null || !za.call(hn, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & Kn && (a.f ^= Kn), a.v !== Lt && ko(a), a.ac !== null && Qr(() => {
      a.ac.abort(cs), a.ac = null, wt(a, pt);
    }), mv(a), Za(a, 0);
  }
}
function Za(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Rv(t, n[r]);
}
function ra(t) {
  var e = t.f;
  if (!(e & zt)) {
    wt(t, Bt);
    var n = Ye;
    Ye = t;
    try {
      e & (Ln | No) ? xv(t) : qo(t), ju(t);
      var r = Qu(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Xu;
      var i;
      lu && av && t.f & pt && t.deps;
    } finally {
      Ye = n;
    }
  }
}
async function Ju() {
  await Promise.resolve(), bv();
}
function s(t) {
  var e = t.f, n = (e & tn) !== 0;
  if (Xe !== null && !Wn) {
    var r = Ye !== null && (Ye.f & zt) !== 0;
    if (!r && (fr === null || !fr.has(t))) {
      var i = Xe.deps;
      if (Xe.f & Gs)
        t.rv < hi && (t.rv = hi, hn === null && i !== null && i[In] === t ? In++ : hn === null ? hn = [t] : hn.push(t));
      else {
        Xe.deps ?? (Xe.deps = []), za.call(Xe.deps, t) || Xe.deps.push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Xe] : za.call(a, Xe) || a.push(Xe);
      }
    }
  }
  if (Mr && dr.has(t))
    return dr.get(t);
  if (n) {
    var l = (
      /** @type {Derived} */
      t
    );
    if (Mr) {
      var o = l.v;
      return (!(l.f & Bt) && l.reactions !== null || ef(l)) && (o = Fo(l)), dr.set(l, o), o;
    }
    var c = (l.f & Kn) === 0 && !Wn && Xe !== null && (Xe.f & Kn) !== 0, d = (l.f & Ti) === 0;
    vs(l) && (c && (l.f |= Kn), Iu(l)), c && !d && (Su(l), $u(l));
  }
  if (Kt != null && Kt.has(t))
    return Kt.get(t);
  if (t.f & Xr)
    throw t.v;
  return t.v;
}
function $u(t) {
  if (t.f |= Kn, t.deps !== null)
    for (const n of t.deps) {
      var e = n.reactions;
      e === null ? n.reactions = [t] : za.call(e, t) || e.push(t), n.f & tn && !(n.f & Kn) && (Su(
        /** @type {Derived} */
        n
      ), $u(
        /** @type {Derived} */
        n
      ));
    }
}
function ef(t) {
  if (t.v === Lt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (dr.has(e) || e.f & tn && ef(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Qn(t) {
  var e = Wn;
  try {
    return Wn = !0, t();
  } finally {
    Wn = e;
  }
}
function tf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (cr in t)
      eo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && cr in n && eo(n);
      }
  }
}
function eo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        eo(t[r], e);
      } catch {
      }
    const n = Do(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ou(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const vi = Symbol("events"), nf = /* @__PURE__ */ new Set(), to = /* @__PURE__ */ new Set();
function zo(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || no.call(e, a), !a.cancelBubble)
      return Qr(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (i.__removed = !1, Dn(() => {
    i.__removed || e.addEventListener(t, i, r);
  })) : e.addEventListener(t, i, r), i;
}
function Lv(t, e, n, r = {}) {
  var i = zo(e, t, n, r);
  return () => {
    i.__removed = !0, t.removeEventListener(e, i, r);
  };
}
function or(t, e, n, r, i) {
  var a = { capture: r, passive: i }, l = zo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && fs(() => {
    l.__removed = !0, e.removeEventListener(t, l, a);
  });
}
function Pn(t, e, n) {
  (e[vi] ?? (e[vi] = {}))[t] = n;
}
function An(t) {
  for (var e = 0; e < t.length; e++)
    nf.add(t[e]);
  for (var n of to)
    n(t);
}
let pl = null, Il = !1;
function no(t) {
  var _, b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((_ = t.composedPath) == null ? void 0 : _.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  pl = t, Il || (Il = !0, setTimeout(() => {
    Il = !1, pl = null;
  }));
  var l = 0, o = pl === t && t[vi];
  if (o) {
    var c = i.indexOf(o);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[vi] = e;
      return;
    }
    var d = i.indexOf(e);
    if (d === -1)
      return;
    c <= d && (l = c);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    Lo(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var u = Xe, g = Ye;
    Mn(null), mr(null);
    try {
      for (var f, m = []; a !== null && a !== e; ) {
        try {
          var h = (b = a[vi]) == null ? void 0 : b[r];
          h != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a) && h.call(a, t);
        } catch (E) {
          f ? m.push(E) : f = E;
        }
        if (t.cancelBubble) break;
        l++, a = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (f) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      t[vi] = e, delete t.currentTarget, Mn(u), mr(g);
    }
  }
}
var ru;
const Sl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((ru = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ru.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Dv(t) {
  return (
    /** @type {string} */
    (Sl == null ? void 0 : Sl.createHTML(t)) ?? t
  );
}
function rf(t) {
  var e = ku("template");
  return e.innerHTML = Dv(t.replaceAll("<!>", "<!---->")), e.content;
}
function ia(t, e) {
  var n = (
    /** @type {Effect} */
    Ye
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = rf(a ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ci(i)));
    var l = (
      /** @type {TemplateNode} */
      r || Mu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ci(l)
      ), c = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ia(o, c);
    } else
      ia(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Nv(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        rf(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Ci(l)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ci(o);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ia(c, c), c;
  };
}
// @__NO_SIDE_EFFECTS__
function yt(t, e) {
  return /* @__PURE__ */ Nv(t, e, "svg");
}
function bt(t = "") {
  {
    var e = ur(t + "");
    return ia(e, e), e;
  }
}
function ge() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ur();
  return t.append(e, n), ia(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Mv(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Pv = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Hv(t) {
  return Pv.includes(t);
}
const Uv = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function kv(t) {
  return t = t.toLowerCase(), Uv[t] ?? t;
}
const Bv = ["touchstart", "touchmove"];
function Fv(t) {
  return Bv.includes(t);
}
function Vv(t) {
  let e = 0, n = yi(0), r;
  return () => {
    Wo() && (s(n), hs(() => (e === 0 && (r = Qn(() => t(() => qa(n)))), e += 1, () => {
      Dn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, qa(n));
      });
    })));
  };
}
var Gv = vr | ua;
function jv(t, e, n, r) {
  new Wv(t, e, n, r);
}
var On, Ro, Rn, gi, $t, bn, rn, En, rr, _i, Wr, Qi, as, Rr, sl, it, qv, Kv, ro, Vr, zv, io, Ba, Us, ao, so;
class Wv {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, i) {
    ze(this, it);
    /** @type {Boundary | null} */
    Tt(this, "parent");
    Tt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Tt(this, "transform_error");
    /** @type {TemplateNode} */
    ze(this, On);
    /** @type {TemplateNode | null} */
    ze(this, Ro, null);
    /** @type {BoundaryProps} */
    ze(this, Rn);
    /** @type {((anchor: Node) => void)} */
    ze(this, gi);
    /** @type {Effect} */
    ze(this, $t);
    /** @type {Effect | null} */
    ze(this, bn, null);
    /** @type {Effect | null} */
    ze(this, rn, null);
    /** @type {Effect | null} */
    ze(this, En, null);
    /** @type {DocumentFragment | null} */
    ze(this, rr, null);
    ze(this, _i, 0);
    ze(this, Wr, 0);
    ze(this, Qi, !1);
    /** @type {Map<Effect, number>} */
    ze(this, as, /* @__PURE__ */ new Map());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    ze(this, Rr, null);
    ze(this, sl, Vv(() => (Ke(this, Rr, yi(B(this, _i))), () => {
      Ke(this, Rr, null);
    })));
    var a;
    Ke(this, On, e), Ke(this, Rn, n), Ke(this, gi, (l) => {
      var o = (
        /** @type {Effect} */
        Ye
      );
      o.b = this, o.f |= Kl, r(l);
    }), this.parent = /** @type {Effect} */
    Ye.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((l) => l), Ke(this, $t, ha(() => {
      Be(this, it, io).call(this);
    }, Gv));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    _u(e, B(this, as));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!B(this, Rn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    Be(this, it, ao).call(this, e, n), Ke(this, _i, B(this, _i) + e), !(!B(this, Rr) || B(this, Qi)) && (Ke(this, Qi, !0), Dn(() => {
      Ke(this, Qi, !1), B(this, Rr) && na(B(this, Rr), B(this, _i));
    }));
  }
  get_effect_pending() {
    return B(this, sl).call(this), s(
      /** @type {Source<number>} */
      B(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (e === au || !B(this, Rn).onerror && !B(this, Rn).failed)
      throw e;
    Pe != null && Pe.is_fork ? (B(this, bn) && Pe.skip_effect(B(this, bn)), B(this, rn) && Pe.skip_effect(B(this, rn)), B(this, En) && Pe.skip_effect(B(this, En)), Pe.oncommit(() => {
      Be(this, it, Vr).call(this) || Be(this, it, so).call(this, e);
    })) : Be(this, it, so).call(this, e);
  }
}
On = new WeakMap(), Ro = new WeakMap(), Rn = new WeakMap(), gi = new WeakMap(), $t = new WeakMap(), bn = new WeakMap(), rn = new WeakMap(), En = new WeakMap(), rr = new WeakMap(), _i = new WeakMap(), Wr = new WeakMap(), Qi = new WeakMap(), as = new WeakMap(), Rr = new WeakMap(), sl = new WeakMap(), it = new WeakSet(), qv = function() {
  try {
    Ke(this, bn, fn(() => B(this, gi).call(this, B(this, On))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Kv = function(e) {
  const n = B(this, Rn).failed, { reset: r, invoke_onerror: i } = Be(this, it, ro).call(this, e);
  Dn(i), n && Ke(this, En, fn(() => {
    n(
      B(this, On),
      () => e,
      () => r
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
ro = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (!Be(this, it, Vr).call(this)) {
      if (n) {
        Kh();
        return;
      }
      n = !0, r && iv(), B(this, En) !== null && Ei(B(this, En), () => {
        Ke(this, En, null);
      }), Be(this, it, Us).call(this, () => {
        Be(this, it, io).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var l, o;
    if (!Be(this, it, Vr).call(this))
      try {
        r = !0, (o = (l = B(this, Rn)).onerror) == null || o.call(l, e, i), r = !1;
      } catch (c) {
        ar(c, B(this, $t) && B(this, $t).parent);
      }
  } };
}, Vr = function() {
  return (B(this, $t).f & (zt | Xa)) !== 0;
}, zv = function() {
  const e = B(this, Rn).pending;
  e && (this.is_pending = !0, Ke(this, rn, fn(() => e(B(this, On)))), Dn(() => {
    if (!Be(this, it, Vr).call(this)) {
      var n = Ke(this, rr, document.createDocumentFragment()), r = ur(), i = !1;
      if (n.append(r), Ke(this, bn, Be(this, it, Us).call(this, () => {
        try {
          return fn(() => B(this, gi).call(this, r));
        } catch (a) {
          try {
            this.error(a), i = !0;
          } catch (l) {
            ar(l, B(this, $t).parent);
          }
          return null;
        }
      })), B(this, bn) === null) {
        Ke(this, rr, null), i && Be(this, it, Ba).call(
          this,
          /** @type {Batch} */
          Pe
        );
        return;
      }
      B(this, Wr) === 0 && (B(this, On).before(n), Ke(this, rr, null), Ei(
        /** @type {Effect} */
        B(this, rn),
        () => {
          Ke(this, rn, null);
        }
      ), Be(this, it, Ba).call(
        this,
        /** @type {Batch} */
        Pe
      ));
    }
  }));
}, io = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ke(this, Wr, 0), Ke(this, _i, 0), Ke(this, bn, fn(() => {
      B(this, gi).call(this, B(this, On));
    })), B(this, Wr) > 0) {
      var e = Ke(this, rr, document.createDocumentFragment());
      Ko(B(this, bn), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        B(this, Rn).pending
      );
      Ke(this, rn, fn(() => n(B(this, On))));
    } else
      Be(this, it, Ba).call(
        this,
        /** @type {Batch} */
        Pe
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Ba = function(e) {
  this.is_pending = !1, e.transfer_reactions(B(this, as));
}, /**
 * @template T
 * @param {() => T} fn
 */
Us = function(e) {
  var n = Ye, r = Xe, i = vt;
  mr(B(this, $t)), Mn(B(this, $t)), ea(B(this, $t).ctx);
  try {
    return Ai.ensure(), e();
  } finally {
    mr(n), Mn(r), ea(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ao = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && Be(r = this.parent, it, ao).call(r, e, n);
    return;
  }
  Ke(this, Wr, B(this, Wr) + e), B(this, Wr) === 0 && (Be(this, it, Ba).call(this, n), B(this, rn) && Ei(B(this, rn), () => {
    Ke(this, rn, null);
  }), B(this, rr) && (B(this, On).before(B(this, rr)), Ke(this, rr, null)));
}, /**
 * @param {unknown} error
 */
so = function(e) {
  B(this, bn) && (Xt(B(this, bn)), Ke(this, bn, null)), B(this, rn) && (Xt(B(this, rn)), Ke(this, rn, null)), B(this, En) && (Xt(B(this, En)), Ke(this, En, null));
  let n = B(this, Rn).failed;
  const r = (i) => {
    if (Be(this, it, Vr).call(this)) return;
    const { reset: a, invoke_onerror: l } = Be(this, it, ro).call(this, i);
    l(), n && !Be(this, it, Vr).call(this) && Ke(this, En, Be(this, it, Us).call(this, () => {
      try {
        return fn(() => {
          var o = (
            /** @type {Effect} */
            Ye
          );
          o.b = this, o.f |= Kl, n(
            B(this, On),
            () => i,
            () => a
          );
        });
      } catch (o) {
        return ar(
          o,
          /** @type {Effect} */
          B(this, $t).parent
        ), null;
      }
    }));
  };
  Dn(() => {
    if (!Be(this, it, Vr).call(this)) {
      var i;
      try {
        i = this.transform_error(e);
      } catch (a) {
        ar(a, B(this, $t) && B(this, $t).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (a) => ar(a, B(this, $t) && B(this, $t).parent)
      ) : r(i);
    }
  });
};
let Ks = !0;
function Es(t) {
  Ks = t;
}
function Ze(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[Pa] ?? (t[Pa] = t.nodeValue)) && (t[Pa] = n, t.nodeValue = `${n}`);
}
function Xv(t, e) {
  return Yv(t, e);
}
const ps = /* @__PURE__ */ new Map();
function Yv(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: l = !0, transformError: o }) {
  Iv();
  var c = void 0, d = Cv(() => {
    var u = n ?? e.appendChild(ur());
    jv(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (m) => {
        Oe({});
        var h = (
          /** @type {ComponentContext} */
          vt
        );
        a && (h.c = a), i && (r.$$events = i), Ks = l, c = t(m, r) || Uo(), Ks = !0, Re();
      },
      o
    );
    var g = /* @__PURE__ */ new Set(), f = (m) => {
      for (var h = 0; h < m.length; h++) {
        var _ = m[h];
        if (!g.has(_)) {
          g.add(_);
          var b = Fv(_);
          for (const y of [e, document]) {
            var E = ps.get(y);
            E === void 0 && (E = /* @__PURE__ */ new Map(), ps.set(y, E));
            var p = E.get(_);
            p === void 0 ? (y.addEventListener(_, no, { passive: b }), E.set(_, 1)) : E.set(_, p + 1);
          }
        }
      }
    };
    return f(cl(nf)), to.add(f), () => {
      var b;
      for (var m of g)
        for (const E of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            ps.get(E)
          ), _ = (
            /** @type {number} */
            h.get(m)
          );
          --_ == 0 ? (E.removeEventListener(m, no), h.delete(m), h.size === 0 && ps.delete(E)) : h.set(m, _);
        }
      to.delete(f), u !== n && ((b = u.parentNode) == null || b.removeChild(u));
    };
  });
  return Zv.set(c, d), c;
}
let Zv = /* @__PURE__ */ new WeakMap();
var Vn, ir, pn, bi, ss, ls, ll;
class ul {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    Tt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    ze(this, Vn, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    ze(this, ir, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    ze(this, pn, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    ze(this, bi, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    ze(this, ss, !0);
    /**
     * @param {Batch} batch
     */
    ze(this, ls, (e) => {
      if (B(this, Vn).has(e)) {
        var n = (
          /** @type {Key} */
          B(this, Vn).get(e)
        ), r = B(this, ir).get(n);
        if (r)
          qs(r), B(this, bi).delete(n);
        else {
          var i = B(this, pn).get(n);
          i && (qs(i.effect), B(this, ir).set(n, i.effect), B(this, pn).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, l] of B(this, Vn)) {
          if (B(this, Vn).delete(a), a === e)
            break;
          const o = B(this, pn).get(l);
          o && (Xt(o.effect), B(this, pn).delete(l));
        }
        for (const [a, l] of B(this, ir)) {
          if (a === n || B(this, bi).has(a)) continue;
          const o = () => {
            if (Array.from(B(this, Vn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              Ko(l, d), d.append(ur()), B(this, pn).set(a, { effect: l, fragment: d });
            } else
              Xt(l);
            B(this, bi).delete(a), B(this, ir).delete(a);
          };
          B(this, ss) || !r ? (B(this, bi).add(a), Ei(l, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    ze(this, ll, (e) => {
      B(this, Vn).delete(e);
      const n = Array.from(B(this, Vn).values());
      for (const [r, i] of B(this, pn))
        n.includes(r) || (Xt(i.effect), B(this, pn).delete(r));
    });
    this.anchor = e, Ke(this, ss, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Pe
    ), i = Uu();
    if (n && !B(this, ir).has(e) && !B(this, pn).has(e))
      if (i) {
        var a = document.createDocumentFragment(), l = ur();
        a.append(l), B(this, pn).set(e, {
          effect: fn(() => n(l)),
          fragment: a
        });
      } else
        B(this, ir).set(
          e,
          fn(() => n(this.anchor))
        );
    if (B(this, Vn).set(r, e), i) {
      for (const [o, c] of B(this, ir))
        o === e ? r.unskip_effect(c) : r.skip_effect(c);
      for (const [o, c] of B(this, pn))
        o === e ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
      r.oncommit(B(this, ls)), r.ondiscard(B(this, ll));
    } else
      B(this, ls).call(this, r);
  }
}
Vn = new WeakMap(), ir = new WeakMap(), pn = new WeakMap(), bi = new WeakMap(), ss = new WeakMap(), ls = new WeakMap(), ll = new WeakMap();
function pe(t, e, ...n) {
  var r = new ul(t);
  ha(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, vr);
}
function st(t) {
  vt === null && Ho(), fa && vt.l !== null ? Qv(vt).m.push(t) : De(() => {
    const e = Qn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function gr(t) {
  vt === null && Ho(), st(() => () => Qn(t));
}
function Qv(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function Se(t, e, n = !1) {
  var r = new ul(t), i = n ? vr : 0;
  function a(l, o) {
    r.ensure(l, o);
  }
  ha(() => {
    var l = !1;
    e((o, c = 0) => {
      l = !0, a(c, o);
    }), l || a(-1, null);
  }, i);
}
function Fi(t, e) {
  return e;
}
function Jv(t, e, n) {
  for (var r = [], i = e.length, a, l = e.length, o = 0; o < i; o++) {
    let g = e[o];
    Ei(
      g,
      () => {
        if (a) {
          if (a.pending.delete(g), a.done.add(g), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            lo(t, cl(a.done)), f.delete(a), f.size === 0 && (t.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var c = r.length === 0 && n !== null && t.pending.size === 0;
    if (c) {
      var d = (
        /** @type {Element} */
        n
      ), u = (
        /** @type {Element} */
        d.parentNode
      );
      Sv(u), u.append(d), t.items.clear();
    }
    lo(t, e, !c);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function lo(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of t.pending.values())
      for (const o of l)
        r.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (r != null && r.has(a)) {
      a.f |= lr;
      const l = document.createDocumentFragment();
      Ko(a, l);
    } else
      Xt(e[i], n);
  }
}
var Nc;
function sr(t, e, n, r, i, a = null) {
  var l = t, o = /* @__PURE__ */ new Map(), c = (e & 4) !== 0;
  if (c) {
    var d = (
      /** @type {Element} */
      t
    );
    l = d.appendChild(ur());
  }
  var u = null, g = /* @__PURE__ */ Bo(() => {
    var p = n();
    return (
      /** @type {V[]} */
      ol(p) ? p : p == null ? [] : cl(p)
    );
  }), f = /* @__PURE__ */ new Map(), m = !0;
  function h(p) {
    if (!(E.effect.f & zt)) {
      E.pending.delete(p);
      var y = s(g);
      E.fallback = u, $v(E, y, l, e, r), u !== null && (y.length === 0 ? u.f & lr ? (u.f ^= lr, Fa(u, null, l)) : qs(u) : Ei(u, () => {
        u = null;
      }));
    }
  }
  function _(p) {
    E.pending.delete(p);
  }
  var b = ha(() => {
    for (var p = (
      /** @type {V[]} */
      s(g)
    ), y = p.length, A = /* @__PURE__ */ new Set(), x = (
      /** @type {Batch} */
      Pe
    ), I = Uu(), S = 0; S < y; S += 1) {
      var C = p[S], T = r(C, S), N = m ? null : o.get(T);
      N ? (N.v && na(N.v, C), N.i && na(N.i, S), I && x.unskip_effect(N.e)) : (N = em(
        o,
        m ? l : Nc ?? (Nc = ur()),
        C,
        T,
        S,
        i,
        e,
        n
      ), m || (N.e.f |= lr), o.set(T, N)), A.add(T);
    }
    if (y === 0 && a && !u && (m ? u = fn(() => a(l)) : (u = fn(() => a(Nc ?? (Nc = ur()))), u.f |= lr)), y > A.size && Yh(), !m)
      if (f.set(x, A), I) {
        for (const [$, q] of o)
          A.has($) || x.skip_effect(q.e);
        x.oncommit(h), x.ondiscard(_);
      } else
        h(x);
    s(g);
  }), E = { effect: b, items: o, pending: f, outrogroups: null, fallback: u };
  m = !1;
}
function Sa(t) {
  for (; t !== null && !(t.f & Xn); )
    t = t.next;
  return t;
}
function $v(t, e, n, r, i) {
  var N, $, q, X, R, O, D, K, F;
  var a = (r & 8) !== 0, l = e.length, o = t.items, c = Sa(t.effect.first), d, u = null, g, f = [], m = [], h, _, b, E;
  if (a)
    for (E = 0; E < l; E += 1)
      h = e[E], _ = i(h, E), b = /** @type {EachItem} */
      o.get(_).e, b.f & lr || (($ = (N = b.nodes) == null ? void 0 : N.a) == null || $.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(b));
  for (E = 0; E < l; E += 1) {
    if (h = e[E], _ = i(h, E), b = /** @type {EachItem} */
    o.get(_).e, t.outrogroups !== null)
      for (const G of t.outrogroups)
        G.pending.delete(b), G.done.delete(b);
    if (b.f & sn && (qs(b), a && ((X = (q = b.nodes) == null ? void 0 : q.a) == null || X.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(b))), b.f & lr)
      if (b.f ^= lr, b === c)
        Fa(b, null, n);
      else {
        var p = u ? u.next : c;
        b === t.effect.last && (t.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), kr(t, u, b), kr(t, b, p), Fa(b, p, n), u = b, f = [], m = [], c = Sa(u.next);
        continue;
      }
    if (b !== c) {
      if (d !== void 0 && d.has(b)) {
        if (f.length < m.length) {
          var y = m[0], A;
          u = y.prev;
          var x = f[0], I = f[f.length - 1];
          for (A = 0; A < f.length; A += 1)
            Fa(f[A], y, n);
          for (A = 0; A < m.length; A += 1)
            d.delete(m[A]);
          kr(t, x.prev, I.next), kr(t, u, x), kr(t, I, y), c = y, u = I, E -= 1, f = [], m = [];
        } else
          d.delete(b), Fa(b, c, n), kr(t, b.prev, b.next), kr(t, b, u === null ? t.effect.first : u.next), kr(t, u, b), u = b;
        continue;
      }
      for (f = [], m = []; c !== null && c !== b; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(c), m.push(c), c = Sa(c.next);
      if (c === null)
        continue;
    }
    b.f & lr || f.push(b), u = b, c = Sa(b.next);
  }
  if (t.outrogroups !== null) {
    for (const G of t.outrogroups)
      G.pending.size === 0 && (lo(t, cl(G.done)), (R = t.outrogroups) == null || R.delete(G));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (c !== null || d !== void 0) {
    var S = [];
    if (d !== void 0)
      for (b of d)
        b.f & sn || S.push(b);
    for (; c !== null; )
      !(c.f & sn) && c !== t.fallback && S.push(c), c = Sa(c.next);
    var C = S.length;
    if (C > 0) {
      var T = r & 4 && l === 0 ? n : null;
      if (a) {
        for (E = 0; E < C; E += 1)
          (D = (O = S[E].nodes) == null ? void 0 : O.a) == null || D.measure();
        for (E = 0; E < C; E += 1)
          (F = (K = S[E].nodes) == null ? void 0 : K.a) == null || F.fix();
      }
      Jv(t, S, T);
    }
  }
  a && Dn(() => {
    var G, H;
    if (g !== void 0)
      for (b of g)
        (H = (G = b.nodes) == null ? void 0 : G.a) == null || H.apply();
  });
}
function em(t, e, n, r, i, a, l, o) {
  var c = l & 1 ? l & 16 ? yi(n) : /* @__PURE__ */ Lu(n, !1, !1) : null, d = l & 2 ? yi(i) : null;
  return {
    v: c,
    i: d,
    e: fn(() => (a(e, c ?? n, d ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Fa(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, a = e && !(e.f & lr) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ us(r)
      );
      if (a.before(r), r === i)
        return;
      r = l;
    }
}
function kr(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function _r(t, e, n) {
  var r = new ul(t);
  ha(() => {
    var i = e() ?? null;
    r.ensure(i, i && ((a) => n(a, i)));
  }, vr);
}
const tm = () => performance.now(), Lr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => tm(),
  tasks: /* @__PURE__ */ new Set()
};
function af() {
  const t = Lr.now();
  Lr.tasks.forEach((e) => {
    e.c(t) || (Lr.tasks.delete(e), e.f());
  }), Lr.tasks.size !== 0 && Lr.tick(af);
}
function nm(t) {
  let e;
  return Lr.tasks.size === 0 && Lr.tick(af), {
    promise: new Promise((n) => {
      Lr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      Lr.tasks.delete(e);
    }
  };
}
function Is(t, e) {
  Qr(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function rm(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Mc(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const l = rm(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const im = (t) => t;
let sf = null;
function Pc(t) {
  sf = t;
}
function am(t, e, n) {
  var r = sf ?? /** @type {Effect} */
  Ye, i = (
    /** @type {EffectNodes} */
    r.nodes
  ), a, l, o, c = null;
  i.a ?? (i.a = {
    element: t,
    measure() {
      a = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), l = this.element.getBoundingClientRect(), a.left !== l.left || a.right !== l.right || a.top !== l.top || a.bottom !== l.bottom) {
        const d = e()(this.element, { from: a, to: l }, n == null ? void 0 : n());
        o = Xs(
          this.element,
          d,
          void 0,
          1,
          () => {
          },
          () => {
            o == null || o.abort(), o = void 0;
          }
        );
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: d, width: u, height: g } = getComputedStyle(t);
        if (d !== "absolute" && d !== "fixed") {
          var f = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: f.position,
            width: f.width,
            height: f.height,
            transform: f.transform
          }, f.position = "absolute", f.width = u, f.height = g;
          var m = t.getBoundingClientRect();
          if (a.left !== m.left || a.top !== m.top) {
            var h = `translate(${a.left - m.left}px, ${a.top - m.top}px)`;
            f.transform = f.transform ? `${f.transform} ${h}` : h;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var d = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        d.position = c.position, d.width = c.width, d.height = c.height, d.transform = c.transform;
      }
    }
  }), i.a.element = t;
}
function zs(t, e, n, r) {
  var y;
  var i = (t & 1) !== 0, a = (t & 2) !== 0, l = i && a, o = (t & 4) !== 0, c = l ? "both" : i ? "in" : "out", d, u = e.inert, g = e.style.overflow, f, m;
  function h() {
    return Qr(() => d ?? (d = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: c
    })));
  }
  var _ = {
    is_global: o,
    in() {
      var A;
      if (e.inert = u, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), f = Xs(
        e,
        h(),
        m,
        1,
        () => {
          Is(e, "introstart");
        },
        () => {
          Is(e, "introend"), f == null || f.abort(), f = d = void 0, e.style.overflow = g;
        }
      );
    },
    out(A) {
      if (!a) {
        A == null || A(), d = void 0;
        return;
      }
      e.inert = !0, m = Xs(
        e,
        h(),
        f,
        0,
        () => {
          Is(e, "outrostart");
        },
        () => {
          Is(e, "outroend"), A == null || A();
        }
      );
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Ye
  );
  if (((y = b.nodes).t ?? (y.t = [])).push(_), i && Ks) {
    var E = o;
    if (!E) {
      for (var p = (
        /** @type {Effect | null} */
        b.parent
      ); p && p.f & vr; )
        for (; (p = p.parent) && !(p.f & Ln); )
          ;
      E = !p || (p.f & Ti) !== 0;
    }
    E && xi(() => {
      Qn(() => _.in());
    });
  }
}
function Xs(t, e, n, r, i, a) {
  var l = r === 1, o = !1;
  if (ki(e)) {
    var c;
    return Dn(() => {
      if (!o) {
        var _ = e({ direction: l ? "in" : "out" });
        c = Xs(t, _, n, r, i, a);
      }
    }), {
      abort: () => {
        o = !0, c == null || c.abort();
      },
      deactivate: () => c == null ? void 0 : c.deactivate(),
      reset: () => c == null ? void 0 : c.reset(),
      t: () => (c == null ? void 0 : c.t()) ?? 1 - r
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration) && !(e != null && e.delay))
    return i(), a(), {
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: d = 0, css: u, tick: g, easing: f = im } = e;
  var m, h = () => 1 - r;
  return Dn(() => {
    if (!o) {
      var _ = [];
      if (l && n === void 0 && (g && g(0, 1), u)) {
        var b = Mc(u(0, 1));
        _.push(b, b);
      }
      m = t.animate(_, { duration: d, fill: "forwards" }), m.onfinish = () => {
        m.cancel(), i();
        var E = (n == null ? void 0 : n.t()) ?? 1 - r;
        n == null || n.abort();
        var p = r - E, y = (
          /** @type {number} */
          e.duration * Math.abs(p)
        ), A = [];
        if (y > 0) {
          var x = !1;
          if (u)
            for (var I = Math.ceil(y / 16.666666666666668), S = 0; S <= I; S += 1) {
              var C = E + p * f(S / I), T = Mc(u(C, 1 - C));
              A.push(T), x || (x = T.overflow === "hidden");
            }
          x && (t.style.overflow = "hidden"), h = () => {
            var N = (
              /** @type {number} */
              /** @type {globalThis.Animation} */
              m.currentTime
            );
            return E + p * f(N / y);
          }, g && nm(() => {
            if (m.playState !== "running") return !1;
            var N = h();
            return g(N, 1 - N), !0;
          });
        }
        m = t.animate(A, { duration: y, fill: "forwards" }), m.onfinish = () => {
          h = () => r, g == null || g(r, 1 - r), a();
        };
      };
    }
  }), {
    abort: () => {
      o = !0, m && (m.cancel(), m.effect = null, m.onfinish = ve);
    },
    deactivate: () => {
      a = ve;
    },
    reset: () => {
      r === 0 && (g == null || g(1, 0));
    },
    t: () => h()
  };
}
function Hc(t, e, n, r, i, a) {
  var l = null, o = (
    /** @type {TemplateNode} */
    t
  ), c = (
    /** @type {Effect} */
    Ye
  ), d = new ul(o, !1);
  ha(() => {
    const u = e() || null;
    var g = u === "svg" ? Hh : void 0;
    if (u === null) {
      d.ensure(null, null), Es(!0);
      return;
    }
    return d.ensure(u, (f) => {
      if (u) {
        var m = zh;
        if (l = ku(u, g), ia(l, l), r) {
          var h = null, _ = l.appendChild(ur());
          Pc(c), r(l, _), h == null || h.remove(), Pc(null);
        }
        Ye.nodes.end = l, m || f.before(l);
      }
    }), Es(!0), () => {
      u && Es(!1);
    };
  }, vr), fs(() => {
    Es(!0);
  });
}
function Fe(t, e, n) {
  xi(() => {
    var r = Qn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      hs(() => {
        var l = n();
        tf(l), i && Po(a, l) && (a = l, r.update(l));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function sm(t, e) {
  var n = void 0, r;
  Gu(() => {
    n !== (n = e()) && (r && (Xt(r), r = null), n && (r = fn(() => {
      xi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function lf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = lf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function lm() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = lf(t)) && (r && (r += " "), r += e);
  return r;
}
function Ys(t) {
  return typeof t == "object" ? lm(t) : t ?? "";
}
const Uc = [...` 	
\r\f \v\uFEFF`];
function om(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var o = l + a;
          (l === 0 || Uc.includes(r[l - 1])) && (o === r.length || Uc.includes(r[o])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(o + 1) : l = o;
        }
  }
  return r === "" ? null : r;
}
function kc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i of Object.keys(t)) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Al(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function cm(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var a = !1, l = 0, o = !1, c = [];
      r && c.push(...Object.keys(r).map(Al)), i && c.push(...Object.keys(i).map(Al));
      var d = 0, u = -1;
      const _ = t.length;
      for (var g = 0; g < _; g++) {
        var f = t[g];
        if (o ? f === "/" && t[g - 1] === "*" && (o = !1) : a ? a === f && (a = !1) : f === "/" && t[g + 1] === "*" ? o = !0 : f === '"' || f === "'" ? a = f : f === "(" ? l++ : f === ")" && l--, !o && a === !1 && l === 0) {
          if (f === ":" && u === -1)
            u = g;
          else if (f === ";" || g === _ - 1) {
            if (u !== -1) {
              var m = Al(t.substring(d, u).trim());
              if (!c.includes(m)) {
                f !== ";" && g++;
                var h = t.substring(d, g).trim();
                n += " " + h + ";";
              }
            }
            d = g + 1, u = -1;
          }
        }
      }
    }
    return r && (n += kc(r)), i && (n += kc(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Qa(t, e, n, r, i, a) {
  var l = (
    /** @type {any} */
    t[zl]
  );
  if (l !== n || l === void 0) {
    var o = om(n, r, a);
    o == null ? t.removeAttribute("class") : e ? t.className = o : t.setAttribute("class", o), t[zl] = n;
  } else if (a && i !== a)
    for (var c in a) {
      var d = !!a[c];
      (i == null || d !== !!i[c]) && t.classList.toggle(c, d);
    }
  return a;
}
function yl(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function ht(t, e, n, r) {
  var i = (
    /** @type {any} */
    t[Xl]
  );
  if (i !== e) {
    var a = cm(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t[Xl] = e;
  } else r && (Array.isArray(r) ? (yl(t, n == null ? void 0 : n[0], r[0]), yl(t, n == null ? void 0 : n[1], r[1], "important")) : yl(t, n, r));
  return r;
}
function of(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Bc(t, e) {
  var n = !("__defaultValue" in t);
  !n && t.__defaultValue === e || (t.__defaultValue = e, cf(t, !n || "__value" in t));
}
function cf(t, e) {
  var n = t.__defaultValue, r = t.multiple, i = r ? n ?? [] : null;
  if (!(r && !ol(i))) {
    var a = t.selectedIndex, l = e && r ? new Set(t.selectedOptions) : null;
    for (var o of t.options) {
      var c = co(o);
      of(
        o,
        r ? (
          /** @type {any[]} */
          i.includes(c)
        ) : Nu(c, n)
      );
    }
    if (e)
      if (l !== null)
        for (o of t.options) {
          var d = l.has(o);
          o.selected !== d && (o.selected = d);
        }
      else t.selectedIndex !== a && (t.selectedIndex = a);
  }
}
function oo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ol(e))
      return qh();
    for (var r of t.options)
      r.selected = e.includes(co(r));
    return;
  }
  for (r of t.options) {
    var i = co(r);
    if (Nu(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function dm(t) {
  var e = new MutationObserver((n) => {
    n.every(um) || ("__defaultValue" in t && cf(t, !1), "__value" in t && oo(t, t.__value));
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), fs(() => {
    e.disconnect();
  });
}
function co(t) {
  return "__value" in t ? t.__value : t.value;
}
function um(t) {
  if (
    /** @type {Element} */
    t.target.closest("selectedcontent") !== null
  )
    return !0;
  if (t.type === "childList") {
    var e = [...t.addedNodes, ...t.removedNodes];
    return e.length > 0 && e.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Aa = Symbol("class"), ya = Symbol("style"), df = Symbol("is custom element"), uf = Symbol("is html"), fm = dl ? "input" : "INPUT", hm = dl ? "option" : "OPTION", ff = dl ? "select" : "SELECT", hf = dl ? "progress" : "PROGRESS";
function Fc(t, e) {
  var n = Xo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== hf) || (t.value = e ?? "");
}
function hr(t, e, n, r) {
  var i = Xo(t), a = i[e];
  a !== (i[e] = n) && (e === "loading" && (t[jh] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && vf(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function vm(t, e, n, r, i = !1, a = !1) {
  var l = Xo(t), o = l[df], c = !l[uf], d = e || {}, u = t.nodeName === hm, g = t.nodeName === ff;
  try {
    for (var f in e)
      !(f in n) && f[0] + f[1] !== "$$" && (n[f] = null);
    n.class ? n.class = Ys(n.class) : (r || n[Aa]) && (n.class = null), n[ya] && (n.style ?? (n.style = null));
    var m = vf(t);
    if (t.nodeName === fm && "type" in n && ("value" in n || "__value" in n)) {
      var h = n.type;
      (h !== d.type || h === void 0 && t.hasAttribute("type")) && (d.type = h, hr(t, "type", h, a));
    }
    for (const x in n) {
      let I = n[x];
      if (u && x === "value" && I == null) {
        t.value = t.__value = "", d[x] = I;
        continue;
      }
      if (x === "class") {
        var _ = t.namespaceURI === "http://www.w3.org/1999/xhtml";
        Qa(t, _, I, r, e == null ? void 0 : e[Aa], n[Aa]), d[x] = I, d[Aa] = n[Aa];
        continue;
      }
      if (x === "style") {
        ht(t, I, e == null ? void 0 : e[ya], n[ya]), d[x] = I, d[ya] = n[ya];
        continue;
      }
      var b = d[x];
      if (!(I === b && !(I === void 0 && t.hasAttribute(x)))) {
        d[x] = I;
        var E = x[0] + x[1];
        if (E !== "$$")
          if (E === "on") {
            const S = {}, C = "$$" + x;
            let T = x.slice(2);
            var p = Hv(T);
            if (Mv(T) && (T = T.slice(0, -7), S.capture = !0), !p && b) {
              if (I != null) continue;
              t.removeEventListener(T, d[C], S), d[C] = null;
            }
            if (p)
              Pn(T, t, I), An([T]);
            else if (I != null) {
              let N = function($) {
                d[x].call(this, $);
              };
              d[C] = zo(T, t, N, S);
            }
          } else if (x === "style")
            hr(t, x, I);
          else if (x === "autofocus")
            dv(
              /** @type {HTMLElement} */
              t,
              !!I
            );
          else if (!o && (x === "__value" || x === "value" && I != null))
            t.__value = I, (b == null || // @ts-ignore
            t.value !== I || I === 0 && t.nodeName === hf) && (t.value = I);
          else if (x === "selected" && u)
            of(
              /** @type {HTMLOptionElement} */
              t,
              I
            );
          else {
            var y = x;
            c || (y = kv(y));
            var A = y === "defaultValue" || y === "defaultChecked";
            if (g && y === "defaultValue") continue;
            if (I == null && !o && !A)
              if (l[x] = null, y === "value" || y === "checked") {
                let S = (
                  /** @type {HTMLInputElement} */
                  t
                );
                const C = e === void 0;
                if (y === "value") {
                  let T = S.defaultValue;
                  S.removeAttribute(y), S.defaultValue = T, S.value = S.__value = C ? T : null;
                } else {
                  let T = S.defaultChecked;
                  S.removeAttribute(y), S.defaultChecked = T, S.checked = C ? T : !1;
                }
              } else
                t.removeAttribute(x);
            else A || (o || typeof I != "string") && m.has(y) ? (t[y] = I, y in l && (l[y] = Lt)) : typeof I != "function" && hr(t, y, I, a);
          }
      }
    }
  } finally {
  }
  return d;
}
function je(t, e, n = [], r = [], i = [], a, l = !1, o = !1) {
  Eu(i, n, r, (c) => {
    var d = void 0, u = {}, g = t.nodeName === ff, f = !1;
    if (Gu(() => {
      var h = e(...c.map(s)), _ = vm(
        t,
        d,
        h,
        a,
        l,
        o
      );
      if (f && g) {
        var b = (
          /** @type {HTMLSelectElement} */
          t
        );
        "defaultValue" in h && Bc(b, h.defaultValue), "value" in h && oo(b, h.value);
      }
      for (let p of Object.getOwnPropertySymbols(u))
        h[p] || Xt(u[p]);
      for (let p of Object.getOwnPropertySymbols(h)) {
        var E = h[p];
        p.description === Uh && (!d || E !== d[p]) && (u[p] && Xt(u[p]), u[p] = fn(() => sm(t, () => E))), _[p] = E;
      }
      d = _;
    }), g) {
      var m = (
        /** @type {HTMLSelectElement} */
        t
      );
      xi(() => {
        var h = (
          /** @type {Record<string | symbol, any>} */
          d
        );
        "defaultValue" in h && Bc(m, h.defaultValue), oo(m, h.value, !0), dm(m);
      });
    }
    f = !0;
  });
}
function Xo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Ms] ?? (t[Ms] = {
      [df]: t.nodeName.includes("-"),
      [uf]: t.namespaceURI === su
    })
  );
}
var Vc = /* @__PURE__ */ new Map();
function vf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Vc.get(e);
  if (n) return n;
  Vc.set(e, n = /* @__PURE__ */ new Set());
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = ou(i);
    for (var l in r)
      r[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && n.add(l);
    i = Do(i);
  }
  return n;
}
function Ja(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  bu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Cl(t) ? Tl(a) : a, n(a), Pe !== null && r.add(Pe), await Ju(), a !== (a = e())) {
      var l = t.selectionStart, o = t.selectionEnd, c = t.value.length;
      if (t.value = a ?? "", o !== null) {
        var d = t.value.length;
        l === o && o === c && d > c ? (t.selectionStart = d, t.selectionEnd = d) : (t.selectionStart = l, t.selectionEnd = Math.min(o, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qn(e) == null && t.value && (n(Cl(t) ? Tl(t.value) : t.value), Pe !== null && r.add(Pe)), hs(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Pe
      );
      if (r.has(a))
        return;
    }
    Cl(t) && i === Tl(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function mm(t, e, n = e) {
  bu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Qn(e) == null && n(t.checked), hs(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Cl(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Tl(t) {
  return t === "" ? null : +t;
}
function xl(t, e) {
  return t === e || (t == null ? void 0 : t[cr]) === e;
}
function ye(t = Uo(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    vt.r
  ), a = (
    /** @type {Effect} */
    Ye
  );
  return xi(() => {
    var l, o;
    return hs(() => {
      l = o, o = (r == null ? void 0 : r()) || [], Qn(() => {
        xl(n(...o), t) || (e(t, ...o), l && xl(n(...l), t) && e(null, ...l));
      });
    }), () => {
      let c = a;
      for (; c !== i && c.parent !== null && c.parent.f & Xa; )
        c = c.parent;
      const d = () => {
        o && xl(n(...o), t) && e(null, ...o);
      }, u = c.teardown;
      c.teardown = () => {
        d(), u == null || u();
      };
    };
  }), t;
}
function gm(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    vt
  ), n = e.l.u;
  if (!n) return;
  let r = () => tf(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ ta(() => {
      let o = !1;
      const c = e.s;
      for (const d in c)
        c[d] !== a[d] && (a[d] = c[d], o = !0);
      return o && i++, i;
    });
    r = () => s(l);
  }
  n.b.length && Vu(() => {
    Gc(e, r), Fs(n.b);
  }), De(() => {
    const i = Qn(() => n.m.map(Vh));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && De(() => {
    Gc(e, r), Fs(n.a);
  });
}
function Gc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Yo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = Qn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Mi = [];
function _m(t, e) {
  return {
    subscribe: Vt(t, e).subscribe
  };
}
function Vt(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(o) {
    if (Po(t, o) && (t = o, n)) {
      const c = !Mi.length;
      for (const d of r)
        d[1](), Mi.push(d, t);
      if (c) {
        for (let d = 0; d < Mi.length; d += 2)
          Mi[d][0](Mi[d + 1]);
        Mi.length = 0;
      }
    }
  }
  function a(o) {
    i(o(
      /** @type {T} */
      t
    ));
  }
  function l(o, c = ve) {
    const d = [o, c];
    return r.add(d), r.size === 1 && (n = e(i, a) || ve), o(
      /** @type {T} */
      t
    ), () => {
      r.delete(d), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: l };
}
function va(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return _m(n, (l, o) => {
    let c = !1;
    const d = [];
    let u = 0, g = ve;
    const f = () => {
      if (u)
        return;
      g();
      const h = e(r ? d[0] : d, l, o);
      a ? l(h) : g = typeof h == "function" ? h : ve;
    }, m = i.map(
      (h, _) => Yo(
        h,
        (b) => {
          d[_] = b, u &= ~(1 << _), c && f();
        },
        () => {
          u |= 1 << _;
        }
      )
    );
    return c = !0, f(), function() {
      Fs(m), g(), c = !1;
    };
  });
}
function mf(t) {
  let e;
  return Yo(t, (n) => e = n)(), e;
}
let Ss = !1, uo = Symbol("unmounted");
function zn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Lu(void 0),
    unsubscribe: ve
  });
  if (r.store !== t && !(uo in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = Yo(t, (a) => {
        i ? r.source.v = a : V(r.source, a);
      }), i = !1;
    }
  return t && uo in n ? mf(t) : s(r.source);
}
function qn(t, e) {
  return bm(t, e), e;
}
function br() {
  const t = {};
  function e() {
    fs(() => {
      for (var n in t)
        t[n].unsubscribe();
      Lo(t, uo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function bm(t, e) {
  try {
    t.set(e);
  } finally {
  }
}
function Em(t) {
  var e = Ss;
  try {
    return Ss = !1, [t(), Ss];
  } finally {
    Ss = e;
  }
}
const pm = {
  get(t, e) {
    if (!t.exclude.has(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.has(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.has(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.has(e));
  }
};
// @__NO_SIDE_EFFECTS__
function qe(t, e, n) {
  return new Proxy({ props: t, exclude: e }, pm);
}
const Im = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ki(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      ki(i) && (i = i());
      const a = zr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ki(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = zr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === cr || e === fu) return !1;
    for (let n of t.props)
      if (ki(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ki(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function rt(...t) {
  return new Proxy({ props: t }, Im);
}
function v(t, e, n, r) {
  var A;
  var i = !fa || (n & 2) !== 0, a = (n & 8) !== 0, l = (n & 16) !== 0, o = (
    /** @type {V} */
    r
  ), c = !0, d = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), u = () => l && i ? (d ?? (d = /* @__PURE__ */ ta(
    /** @type {() => V} */
    r
  )), s(d)) : (c && (c = !1, o = l ? Qn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o);
  let g;
  if (a) {
    var f = cr in t || fu in t;
    g = ((A = zr(t, e)) == null ? void 0 : A.set) ?? (f && e in t ? (x) => t[e] = x : void 0);
  }
  var m, h = !1;
  a ? [m, h] = Em(() => (
    /** @type {V} */
    t[e]
  )) : m = /** @type {V} */
  t[e], m === void 0 && r !== void 0 && (m = u(), g && (i && ev(), g(m)));
  var _;
  if (i ? _ = () => {
    var x = (
      /** @type {V} */
      t[e]
    );
    return x === void 0 ? u() : (c = !0, x);
  } : _ = () => {
    var x = (
      /** @type {V} */
      t[e]
    );
    return x !== void 0 && (o = /** @type {V} */
    void 0), x === void 0 ? o : x;
  }, i && !(n & 4))
    return _;
  if (g) {
    var b = t.$$legacy;
    return (
      /** @type {() => V} */
      function(x, I) {
        return arguments.length > 0 ? ((!i || !I || b || h) && g(I ? _() : x), x) : _();
      }
    );
  }
  var E = !1, p = (n & 1 ? ta : Bo)(() => (E = !1, _()));
  a && s(p);
  var y = (
    /** @type {Effect} */
    Ye
  );
  return (
    /** @type {() => V} */
    function(x, I) {
      if (arguments.length > 0) {
        const S = I ? s(p) : i && a ? _e(x) : x;
        return V(p, S), E = !0, o !== void 0 && (o = S), x;
      }
      return Mr && E || y.f & zt ? p.v : s(p);
    }
  );
}
const Sm = "5";
var iu;
typeof window < "u" && ((iu = window.__svelte ?? (window.__svelte = {})).v ?? (iu.v = /* @__PURE__ */ new Set())).add(Sm);
function Am(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ym = function(e) {
  return Cm(e) && !Tm(e);
};
function Cm(t) {
  return !!t && typeof t == "object";
}
function Tm(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Om(t);
}
var xm = typeof Symbol == "function" && Symbol.for, wm = xm ? Symbol.for("react.element") : 60103;
function Om(t) {
  return t.$$typeof === wm;
}
function Rm(t) {
  return Array.isArray(t) ? [] : {};
}
function $a(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? aa(Rm(t), t, e) : t;
}
function Lm(t, e, n) {
  return t.concat(e).map(function(r) {
    return $a(r, n);
  });
}
function Dm(t, e) {
  if (!e.customMerge)
    return aa;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : aa;
}
function Nm(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function jc(t) {
  return Object.keys(t).concat(Nm(t));
}
function gf(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Mm(t, e) {
  return gf(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Pm(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && jc(t).forEach(function(i) {
    r[i] = $a(t[i], n);
  }), jc(e).forEach(function(i) {
    Mm(t, i) || (gf(t, i) && n.isMergeableObject(e[i]) ? r[i] = Dm(i, n)(t[i], e[i], n) : r[i] = $a(e[i], n));
  }), r;
}
function aa(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Lm, n.isMergeableObject = n.isMergeableObject || ym, n.cloneUnlessOtherwiseSpecified = $a;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Pm(t, e, n) : $a(e, n);
}
aa.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return aa(r, i, n);
  }, {});
};
var Hm = aa, Um = Hm;
const km = /* @__PURE__ */ Am(Um);
var fo = function(t, e) {
  return fo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, fo(t, e);
};
function wi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  fo(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var et = function() {
  return et = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, et.apply(this, arguments);
};
function Bm(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Fm(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a);
    });
  }
  return new (n || (n = Promise))(function(a, l) {
    function o(u) {
      try {
        d(r.next(u));
      } catch (g) {
        l(g);
      }
    }
    function c(u) {
      try {
        d(r.throw(u));
      } catch (g) {
        l(g);
      }
    }
    function d(u) {
      u.done ? a(u.value) : i(u.value).then(o, c);
    }
    d((r = r.apply(t, e || [])).next());
  });
}
function _f(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return l.next = o(0), l.throw = o(1), l.return = o(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function o(d) {
    return function(u) {
      return c([d, u]);
    };
  }
  function c(d) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, d[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
      switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
        case 0:
        case 1:
          a = d;
          break;
        case 4:
          return n.label++, { value: d[1], done: !1 };
        case 5:
          n.label++, i = d[1], d = [0];
          continue;
        case 7:
          d = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            n = 0;
            continue;
          }
          if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
            n.label = d[1];
            break;
          }
          if (d[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = d;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(d);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      d = e.call(t, n);
    } catch (u) {
      d = [6, u], i = 0;
    } finally {
      r = a = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function es(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ho(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function ji(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Wi(t) {
  return this instanceof Wi ? (this.v = t, this) : new Wi(t);
}
function Vm(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", l), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function l(m) {
    return function(h) {
      return Promise.resolve(h).then(m, g);
    };
  }
  function o(m, h) {
    r[m] && (i[m] = function(_) {
      return new Promise(function(b, E) {
        a.push([m, _, b, E]) > 1 || c(m, _);
      });
    }, h && (i[m] = h(i[m])));
  }
  function c(m, h) {
    try {
      d(r[m](h));
    } catch (_) {
      f(a[0][3], _);
    }
  }
  function d(m) {
    m.value instanceof Wi ? Promise.resolve(m.value.v).then(u, g) : f(a[0][2], m);
  }
  function u(m) {
    c("next", m);
  }
  function g(m) {
    c("throw", m);
  }
  function f(m, h) {
    m(h), a.shift(), a.length && c(a[0][0], a[0][1]);
  }
}
function Gm(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof es == "function" ? es(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(l) {
      return new Promise(function(o, c) {
        l = t[a](l), i(o, c, l.done, l.value);
      });
    };
  }
  function i(a, l, o, c) {
    Promise.resolve(c).then(function(d) {
      a({ value: d, done: o });
    }, l);
  }
}
function wl(t, e) {
  var n = e && e.cache ? e.cache : Ym, r = e && e.serializer ? e.serializer : zm, i = e && e.strategy ? e.strategy : qm;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function jm(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Wm(t, e, n, r) {
  var i = jm(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function bf(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Ef(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function qm(t, e) {
  var n = t.length === 1 ? Wm : bf;
  return Ef(t, this, n, e.cache.create(), e.serializer);
}
function Km(t, e) {
  return Ef(t, this, bf, e.cache.create(), e.serializer);
}
var zm = function() {
  return JSON.stringify(arguments);
}, Xm = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), Ym = {
  create: function() {
    return new Xm();
  }
}, Ol = {
  variadic: Km
}, $e;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})($e || ($e = {}));
var At;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(At || (At = {}));
var sa;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(sa || (sa = {}));
function Wc(t) {
  return t.type === At.literal;
}
function Zm(t) {
  return t.type === At.argument;
}
function pf(t) {
  return t.type === At.number;
}
function If(t) {
  return t.type === At.date;
}
function Sf(t) {
  return t.type === At.time;
}
function Af(t) {
  return t.type === At.select;
}
function yf(t) {
  return t.type === At.plural;
}
function Qm(t) {
  return t.type === At.pound;
}
function Cf(t) {
  return t.type === At.tag;
}
function Tf(t) {
  return !!(t && typeof t == "object" && t.type === sa.number);
}
function vo(t) {
  return !!(t && typeof t == "object" && t.type === sa.dateTime);
}
var xf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Jm = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $m(t) {
  var e = {};
  return t.replace(Jm, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var eg = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function tg(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(eg).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = l[0], c = l.slice(1), d = 0, u = c; d < u.length; d++) {
      var g = u[d];
      if (g.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: c });
  }
  return n;
}
function ng(t) {
  return t.replace(/^(.*?)-/, "");
}
var qc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, wf = /^(@+)?(\+|#+)?[rs]?$/g, rg = /(\*)(0+)|(#+)(0+)|(0+)/g, Of = /^(0+)$/;
function Kc(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(wf, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Rf(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function ig(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Of.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function zc(t) {
  var e = {}, n = Rf(t);
  return n || e;
}
function ag(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = ng(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = et(et(et({}, e), { notation: "scientific" }), i.options.reduce(function(c, d) {
          return et(et({}, c), zc(d));
        }, {}));
        continue;
      case "engineering":
        e = et(et(et({}, e), { notation: "engineering" }), i.options.reduce(function(c, d) {
          return et(et({}, c), zc(d));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(rg, function(c, d, u, g, f, m) {
          if (d)
            e.minimumIntegerDigits = u.length;
          else {
            if (g && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Of.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (qc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(qc, function(c, d, u, g, f, m) {
        return u === "*" ? e.minimumFractionDigits = d.length : g && g[0] === "#" ? e.maximumFractionDigits = g.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = et(et({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = et(et({}, e), Kc(a)));
      continue;
    }
    if (wf.test(i.stem)) {
      e = et(et({}, e), Kc(i.stem));
      continue;
    }
    var l = Rf(i.stem);
    l && (e = et(et({}, e), l));
    var o = ig(i.stem);
    o && (e = et(et({}, e), o));
  }
  return e;
}
var As = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function sg(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var l = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), c = "a", d = lg(e);
      for ((d == "H" || d == "k") && (o = 0); o-- > 0; )
        n += c;
      for (; l-- > 0; )
        n = d + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function lg(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = As[r || ""] || As[n || ""] || As["".concat(n, "-001")] || As["001"];
  return i[0];
}
var Rl, og = new RegExp("^".concat(xf.source, "*")), cg = new RegExp("".concat(xf.source, "*$"));
function nt(t, e) {
  return { start: t, end: e };
}
var dg = !!String.prototype.startsWith && "_a".startsWith("a", 1), ug = !!String.fromCodePoint, fg = !!Object.fromEntries, hg = !!String.prototype.codePointAt, vg = !!String.prototype.trimStart, mg = !!String.prototype.trimEnd, gg = !!Number.isSafeInteger, _g = gg ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, mo = !0;
try {
  var bg = Df("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  mo = ((Rl = bg.exec("a")) === null || Rl === void 0 ? void 0 : Rl[0]) === "a";
} catch {
  mo = !1;
}
var Xc = dg ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), go = ug ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, l; i > a; ) {
      if (l = e[a++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      r += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return r;
  }
), Yc = (
  // native
  fg ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], l = a[0], o = a[1];
        n[l] = o;
      }
      return n;
    }
  )
), Lf = hg ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), Eg = vg ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(og, "");
  }
), pg = mg ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(cg, "");
  }
);
function Df(t, e) {
  return new RegExp(t, e);
}
var _o;
if (mo) {
  var Zc = Df("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  _o = function(e, n) {
    var r;
    Zc.lastIndex = n;
    var i = Zc.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  _o = function(e, n) {
    for (var r = []; ; ) {
      var i = Lf(e, n);
      if (i === void 0 || Nf(i) || yg(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return go.apply(void 0, r);
  };
var Ig = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var l = this.parseArgument(e, r);
          if (l.err)
            return l;
          i.push(l.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: At.pound,
              location: nt(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error($e.UNMATCHED_CLOSING_TAG, nt(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && bo(this.peek() || 0)) {
            var l = this.parseTag(e, n);
            if (l.err)
              return l;
            i.push(l.val);
          } else {
            var l = this.parseLiteral(e, n);
            if (l.err)
              return l;
            i.push(l.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: At.literal,
            value: "<".concat(i, "/>"),
            location: nt(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !bo(this.char()))
            return this.error($e.INVALID_TAG, nt(o, this.clonePosition()));
          var c = this.clonePosition(), d = this.parseTagName();
          return i !== d ? this.error($e.UNMATCHED_CLOSING_TAG, nt(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: At.tag,
              value: i,
              children: l,
              location: nt(r, this.clonePosition())
            },
            err: null
          } : this.error($e.INVALID_TAG, nt(o, this.clonePosition())));
        } else
          return this.error($e.UNCLOSED_TAG, nt(r, this.clonePosition()));
      } else
        return this.error($e.INVALID_TAG, nt(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Ag(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var l = this.tryParseUnquoted(e, n);
        if (l) {
          i += l;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          i += o;
          continue;
        }
        break;
      }
      var c = nt(r, this.clonePosition());
      return {
        val: { type: At.literal, value: i, location: c },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Sg(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return go.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), go(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE, nt(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error($e.EMPTY_ARGUMENT, nt(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error($e.MALFORMED_ARGUMENT, nt(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE, nt(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: At.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: nt(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE, nt(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error($e.MALFORMED_ARGUMENT, nt(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = _o(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), l = nt(e, a);
      return { value: r, location: l };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, l = this.clonePosition(), o = this.parseIdentifierIfPossible().value, c = this.clonePosition();
      switch (o) {
        case "":
          return this.error($e.EXPECT_ARGUMENT_TYPE, nt(l, c));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var d = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var u = this.clonePosition(), g = this.parseSimpleArgStyleIfPossible();
            if (g.err)
              return g;
            var f = pg(g.val);
            if (f.length === 0)
              return this.error($e.EXPECT_ARGUMENT_STYLE, nt(this.clonePosition(), this.clonePosition()));
            var m = nt(u, this.clonePosition());
            d = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var _ = nt(i, this.clonePosition());
          if (d && Xc(d == null ? void 0 : d.style, "::", 0)) {
            var b = Eg(d.style.slice(2));
            if (o === "number") {
              var g = this.parseNumberSkeletonFromString(b, d.styleLocation);
              return g.err ? g : {
                val: { type: At.number, value: r, location: _, style: g.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error($e.EXPECT_DATE_TIME_SKELETON, _);
              var E = b;
              this.locale && (E = sg(b, this.locale));
              var f = {
                type: sa.dateTime,
                pattern: E,
                location: d.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $m(E) : {}
              }, p = o === "date" ? At.date : At.time;
              return {
                val: { type: p, value: r, location: _, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? At.number : o === "date" ? At.date : At.time,
              value: r,
              location: _,
              style: (a = d == null ? void 0 : d.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var y = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error($e.EXPECT_SELECT_ARGUMENT_OPTIONS, nt(y, et({}, y)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), x = 0;
          if (o !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, nt(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var g = this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (g.err)
              return g;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), x = g.val;
          }
          var I = this.tryParsePluralOrSelectOptions(e, o, n, A);
          if (I.err)
            return I;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var S = nt(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: At.select,
              value: r,
              options: Yc(I.val),
              location: S
            },
            err: null
          } : {
            val: {
              type: At.plural,
              value: r,
              options: Yc(I.val),
              offset: x,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: S
            },
            err: null
          };
        }
        default:
          return this.error($e.INVALID_ARGUMENT_TYPE, nt(l, c));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error($e.EXPECT_ARGUMENT_CLOSING_BRACE, nt(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error($e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, nt(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = tg(e);
      } catch {
        return this.error($e.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: sa.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ag(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, l = !1, o = [], c = /* @__PURE__ */ new Set(), d = i.value, u = i.location; ; ) {
        if (d.length === 0) {
          var g = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger($e.EXPECT_PLURAL_ARGUMENT_SELECTOR, $e.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            u = nt(g, this.clonePosition()), d = this.message.slice(g.offset, this.offset());
          } else
            break;
        }
        if (c.has(d))
          return this.error(n === "select" ? $e.DUPLICATE_SELECT_ARGUMENT_SELECTOR : $e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
        d === "other" && (l = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? $e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : $e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, nt(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var _ = this.tryParseArgumentClose(m);
        if (_.err)
          return _;
        o.push([
          d,
          {
            value: h.val,
            location: nt(m, this.clonePosition())
          }
        ]), c.add(d), this.bumpSpace(), a = this.parseIdentifierIfPossible(), d = a.value, u = a.location;
      }
      return o.length === 0 ? this.error(n === "select" ? $e.EXPECT_SELECT_ARGUMENT_SELECTOR : $e.EXPECT_PLURAL_ARGUMENT_SELECTOR, nt(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error($e.MISSING_OTHER_CLAUSE, nt(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, l = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, l = l * 10 + (o - 48), this.bump();
        else
          break;
      }
      var c = nt(i, this.clonePosition());
      return a ? (l *= r, _g(l) ? { val: l, err: null } : this.error(n, c)) : this.error(e, c);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = Lf(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Xc(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Nf(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function bo(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Sg(t) {
  return bo(t) || t === 47;
}
function Ag(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Nf(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function yg(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Eo(t) {
  t.forEach(function(e) {
    if (delete e.location, Af(e) || yf(e))
      for (var n in e.options)
        delete e.options[n].location, Eo(e.options[n].value);
    else pf(e) && Tf(e.style) || (If(e) || Sf(e)) && vo(e.style) ? delete e.style.location : Cf(e) && Eo(e.children);
  });
}
function Cg(t, e) {
  e === void 0 && (e = {}), e = et({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Ig(t, e).parse();
  if (n.err) {
    var r = SyntaxError($e[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Eo(n.val), n.val;
}
var la;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(la || (la = {}));
var fl = (
  /** @class */
  function(t) {
    wi(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Qc = (
  /** @class */
  function(t) {
    wi(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), la.INVALID_VALUE, a) || this;
    }
    return e;
  }(fl)
), Tg = (
  /** @class */
  function(t) {
    wi(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), la.INVALID_VALUE, i) || this;
    }
    return e;
  }(fl)
), xg = (
  /** @class */
  function(t) {
    wi(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), la.MISSING_VALUE, r) || this;
    }
    return e;
  }(fl)
), an;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(an || (an = {}));
function wg(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== an.literal || n.type !== an.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Og(t) {
  return typeof t == "function";
}
function ks(t, e, n, r, i, a, l) {
  if (t.length === 1 && Wc(t[0]))
    return [
      {
        type: an.literal,
        value: t[0].value
      }
    ];
  for (var o = [], c = 0, d = t; c < d.length; c++) {
    var u = d[c];
    if (Wc(u)) {
      o.push({
        type: an.literal,
        value: u.value
      });
      continue;
    }
    if (Qm(u)) {
      typeof a == "number" && o.push({
        type: an.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var g = u.value;
    if (!(i && g in i))
      throw new xg(g, l);
    var f = i[g];
    if (Zm(u)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), o.push({
        type: typeof f == "string" ? an.literal : an.object,
        value: f
      });
      continue;
    }
    if (If(u)) {
      var m = typeof u.style == "string" ? r.date[u.style] : vo(u.style) ? u.style.parsedOptions : void 0;
      o.push({
        type: an.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Sf(u)) {
      var m = typeof u.style == "string" ? r.time[u.style] : vo(u.style) ? u.style.parsedOptions : r.time.medium;
      o.push({
        type: an.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (pf(u)) {
      var m = typeof u.style == "string" ? r.number[u.style] : Tf(u.style) ? u.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), o.push({
        type: an.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Cf(u)) {
      var h = u.children, _ = u.value, b = i[_];
      if (!Og(b))
        throw new Tg(_, "function", l);
      var E = ks(h, e, n, r, i, a), p = b(E.map(function(x) {
        return x.value;
      }));
      Array.isArray(p) || (p = [p]), o.push.apply(o, p.map(function(x) {
        return {
          type: typeof x == "string" ? an.literal : an.object,
          value: x
        };
      }));
    }
    if (Af(u)) {
      var y = u.options[f] || u.options.other;
      if (!y)
        throw new Qc(u.value, f, Object.keys(u.options), l);
      o.push.apply(o, ks(y.value, e, n, r, i));
      continue;
    }
    if (yf(u)) {
      var y = u.options["=".concat(f)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new fl(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, la.MISSING_INTL_API, l);
        var A = n.getPluralRules(e, { type: u.pluralType }).select(f - (u.offset || 0));
        y = u.options[A] || u.options.other;
      }
      if (!y)
        throw new Qc(u.value, f, Object.keys(u.options), l);
      o.push.apply(o, ks(y.value, e, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return wg(o);
}
function Rg(t, e) {
  return e ? et(et(et({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = et(et({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Lg(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Rg(t[r], e[r]), n;
  }, et({}, t)) : t;
}
function Ll(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function Dg(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: wl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, ji([void 0], n, !1)))();
    }, {
      cache: Ll(t.number),
      strategy: Ol.variadic
    }),
    getDateTimeFormat: wl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, ji([void 0], n, !1)))();
    }, {
      cache: Ll(t.dateTime),
      strategy: Ol.variadic
    }),
    getPluralRules: wl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, ji([void 0], n, !1)))();
    }, {
      cache: Ll(t.pluralRules),
      strategy: Ol.variadic
    })
  };
}
var Mf = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(c) {
        var d = a.formatToParts(c);
        if (d.length === 1)
          return d[0].value;
        var u = d.reduce(function(g, f) {
          return !g.length || f.type !== an.literal || typeof g[g.length - 1] != "string" ? g.push(f.value) : g[g.length - 1] += f.value, g;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(c) {
        return ks(a.ast, a.locales, a.formatters, a.formats, c, void 0, a.message);
      }, this.resolvedOptions = function() {
        var c;
        return {
          locale: ((c = a.resolvedLocale) === null || c === void 0 ? void 0 : c.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var o = Bm(l, ["formatters"]);
        this.ast = t.__parse(e, et(et({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Lg(t.formats, r), this.formatters = i && i.formatters || Dg(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Cg, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function Ng(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const a = n.slice(i, n.length).join(".");
        if (a in r) {
          r = r[a];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Kr = {}, Mg = (t, e, n) => n && (e in Kr || (Kr[e] = {}), t in Kr[e] || (Kr[e][t] = n), n), Pf = (t, e) => {
  if (e == null)
    return;
  if (e in Kr && t in Kr[e])
    return Kr[e][t];
  const n = gs(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Hg(i, t);
    if (a)
      return Mg(t, e, a);
  }
};
let Zo;
const ms = Vt({});
function Pg(t) {
  return Zo[t] || null;
}
function Hf(t) {
  return t in Zo;
}
function Hg(t, e) {
  if (!Hf(t))
    return null;
  const n = Pg(t);
  return Ng(n, e);
}
function Ug(t) {
  if (t == null)
    return;
  const e = gs(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Hf(r))
      return r;
  }
}
function Uf(t, ...e) {
  delete Kr[t], ms.update((n) => (n[t] = km.all([n[t] || {}, ...e]), n));
}
va(
  [ms],
  ([t]) => Object.keys(t)
);
ms.subscribe((t) => Zo = t);
const Bs = {};
function kg(t, e) {
  Bs[t].delete(e), Bs[t].size === 0 && delete Bs[t];
}
function kf(t) {
  return Bs[t];
}
function Bg(t) {
  return gs(t).map((e) => {
    const n = kf(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Zs(t) {
  return t == null ? !1 : gs(t).some(
    (e) => {
      var n;
      return (n = kf(e)) == null ? void 0 : n.size;
    }
  );
}
function Fg(t, e) {
  return Promise.all(
    e.map((r) => (kg(t, r), r().then((i) => i.default || i)))
  ).then((r) => Uf(t, ...r));
}
const Ca = {};
function Bf(t) {
  if (!Zs(t))
    return t in Ca ? Ca[t] : Promise.resolve();
  const e = Bg(t);
  return Ca[t] = Promise.all(
    e.map(
      ([n, r]) => Fg(n, r)
    )
  ).then(() => {
    if (Zs(t))
      return Bf(t);
    delete Ca[t];
  }), Ca[t];
}
var Jc = Object.getOwnPropertySymbols, Vg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, jg = (t, e) => {
  var n = {};
  for (var r in t)
    Vg.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Jc)
    for (var r of Jc(t))
      e.indexOf(r) < 0 && Gg.call(t, r) && (n[r] = t[r]);
  return n;
};
const Wg = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function qg({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${gs(
      t
    ).join('", "')}".${Zs(Jr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Kg = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Wg,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Va = Kg;
function oa() {
  return Va;
}
function zg(t) {
  const e = t, { formats: n } = e, r = jg(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Mf.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = qg : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Va, r, { initialLocale: i }), n && ("number" in n && Object.assign(Va.formats.number, n.number), "date" in n && Object.assign(Va.formats.date, n.date), "time" in n && Object.assign(Va.formats.time, n.time)), Oi.set(i);
}
const Dl = Vt(!1);
var Xg = Object.defineProperty, Yg = Object.defineProperties, Zg = Object.getOwnPropertyDescriptors, $c = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, ed = (t, e, n) => e in t ? Xg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $g = (t, e) => {
  for (var n in e || (e = {}))
    Qg.call(e, n) && ed(t, n, e[n]);
  if ($c)
    for (var n of $c(e))
      Jg.call(e, n) && ed(t, n, e[n]);
  return t;
}, e_ = (t, e) => Yg(t, Zg(e));
let po;
const Qs = Vt(null);
function td(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function gs(t, e = oa().fallbackLocale) {
  const n = td(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...td(e)])] : n;
}
function Jr() {
  return po ?? void 0;
}
Qs.subscribe((t) => {
  po = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const t_ = (t) => {
  if (t && Ug(t) && Zs(t)) {
    const { loadingDelay: e } = oa();
    let n;
    return typeof window < "u" && Jr() != null && e ? n = window.setTimeout(
      () => Dl.set(!0),
      e
    ) : Dl.set(!0), Bf(t).then(() => {
      Qs.set(t);
    }).finally(() => {
      clearTimeout(n), Dl.set(!1);
    });
  }
  return Qs.set(t);
}, Oi = e_($g({}, Qs), {
  set: t_
}), n_ = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], hl = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var r_ = Object.defineProperty, Js = Object.getOwnPropertySymbols, Ff = Object.prototype.hasOwnProperty, Vf = Object.prototype.propertyIsEnumerable, nd = (t, e, n) => e in t ? r_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Qo = (t, e) => {
  for (var n in e || (e = {}))
    Ff.call(e, n) && nd(t, n, e[n]);
  if (Js)
    for (var n of Js(e))
      Vf.call(e, n) && nd(t, n, e[n]);
  return t;
}, ma = (t, e) => {
  var n = {};
  for (var r in t)
    Ff.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Js)
    for (var r of Js(t))
      e.indexOf(r) < 0 && Vf.call(t, r) && (n[r] = t[r]);
  return n;
};
const ts = (t, e) => {
  const { formats: n } = oa();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, i_ = hl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ma(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ts("number", r)), new Intl.NumberFormat(n, i);
  }
), a_ = hl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ma(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ts("date", r) : Object.keys(i).length === 0 && (i = ts("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), s_ = hl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ma(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ts("time", r) : Object.keys(i).length === 0 && (i = ts("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), l_ = (t = {}) => {
  var e = t, {
    locale: n = Jr()
  } = e, r = ma(e, [
    "locale"
  ]);
  return i_(Qo({ locale: n }, r));
}, o_ = (t = {}) => {
  var e = t, {
    locale: n = Jr()
  } = e, r = ma(e, [
    "locale"
  ]);
  return a_(Qo({ locale: n }, r));
}, c_ = (t = {}) => {
  var e = t, {
    locale: n = Jr()
  } = e, r = ma(e, [
    "locale"
  ]);
  return s_(Qo({ locale: n }, r));
}, d_ = hl(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Jr()) => new Mf(t, e, oa().formats, {
    ignoreTag: oa().ignoreTag
  })
), u_ = (t, e = {}) => {
  var n, r, i, a;
  let l = e;
  typeof t == "object" && (l = t, t = l.id);
  const {
    values: o,
    locale: c = Jr(),
    default: d
  } = l;
  if (c == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let u = Pf(t, c);
  if (!u)
    u = (a = (i = (r = (n = oa()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: c, id: t, defaultValue: d })) != null ? i : d) != null ? a : t;
  else if (typeof u != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), u;
  if (!o)
    return u;
  let g = u;
  try {
    g = d_(u, c).format(o);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return g;
}, f_ = (t, e) => c_(e).format(t), h_ = (t, e) => o_(e).format(t), v_ = (t, e) => l_(e).format(t), m_ = (t, e = Jr()) => Pf(t, e), g_ = va([Oi, ms], () => u_);
va([Oi], () => f_);
va([Oi], () => h_);
va([Oi], () => v_);
va([Oi, ms], () => m_);
function __(t, e) {
  Object.entries(t).forEach(([a, l]) => {
    Uf(a, l);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? n_();
  console.log("Initial: Setting the language to", i), zg({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const l = a;
    if (!l.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", l.detail.language), Oi.set(l.detail.language);
  });
}
const b_ = "Ort", E_ = "Suche", p_ = "UUID", I_ = "File Name", S_ = "Autor", A_ = "Typ", y_ = "Version", C_ = "Datum", T_ = "Fertig", x_ = "Filtertypen", w_ = "Filter Hinzufügen", O_ = {
  location: b_,
  search: E_,
  uuid: p_,
  filename: I_,
  author: S_,
  type: A_,
  version: y_,
  date: C_,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: T_,
  filter_types: x_,
  add_filter: w_
}, R_ = "Location", L_ = "Search", D_ = "UUID", N_ = "Filename", M_ = "Author", P_ = "Type", H_ = "Version", U_ = "Date", k_ = "Done", B_ = "Filter Types", F_ = "Add Filter", V_ = {
  location: R_,
  search: L_,
  uuid: D_,
  filename: N_,
  author: M_,
  type: P_,
  version: H_,
  date: U_,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: k_,
  filter_types: B_,
  add_filter: F_
};
function He(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Qe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  t || console.warn("Tried to dispatch event without element.", e, n);
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Yn(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function lt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class $r {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Lv(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], l = a.get(r);
    l != null && (l(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, l) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function Z(t, e) {
  let n = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(t, i[1])) : n.push(a(t));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = n[i];
          if (a && a.update) {
            const l = r[i];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function G_(t = window) {
  return j_(t) ? { passive: !0 } : !1;
}
function j_(t = window) {
  let e = !1;
  try {
    const n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = () => {
    };
    t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
  } catch {
    e = !1;
  }
  return e;
}
const Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: G_
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Nl = "mdc-dom-focus-sentinel";
class W_ {
  constructor(e, n = {}) {
    this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */
  trapFocus() {
    const e = this.getFocusableElements(this.root);
    if (e.length === 0)
      throw new Error("FocusTrap: Element must have at least one focusable child.");
    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
  }
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */
  releaseFocus() {
    Array.from(this.root.querySelectorAll(`.${Nl}`)).forEach((e) => {
      e.parentElement.removeChild(e);
    }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
  }
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */
  wrapTabFocus(e) {
    const n = this.createSentinel(), r = this.createSentinel();
    n.addEventListener("focus", () => {
      const i = this.getFocusableElements(e);
      i.length > 0 && i[i.length - 1].focus();
    }), r.addEventListener("focus", () => {
      const i = this.getFocusableElements(e);
      i.length > 0 && i[0].focus();
    }), e.insertBefore(n, e.children[0]), e.appendChild(r);
  }
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */
  focusInitialElement(e, n) {
    let r = 0;
    n && (r = Math.max(e.indexOf(n), 0)), e[r].focus();
  }
  getFocusableElements(e) {
    return Array.from(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((r) => {
      const i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Nl) && !i;
      let l = !1;
      if (a) {
        const o = getComputedStyle(r);
        l = o.display === "none" || o.visibility === "hidden";
      }
      return a && !l;
    });
  }
  createSentinel() {
    const e = document.createElement("div");
    return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Nl), e;
  }
}
const q_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: W_
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ge = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, on = /* @__PURE__ */ new Set();
on.add(Ge.BACKSPACE);
on.add(Ge.ENTER);
on.add(Ge.SPACEBAR);
on.add(Ge.PAGE_UP);
on.add(Ge.PAGE_DOWN);
on.add(Ge.END);
on.add(Ge.HOME);
on.add(Ge.ARROW_LEFT);
on.add(Ge.ARROW_UP);
on.add(Ge.ARROW_RIGHT);
on.add(Ge.ARROW_DOWN);
on.add(Ge.DELETE);
on.add(Ge.ESCAPE);
on.add(Ge.TAB);
const vn = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, cn = /* @__PURE__ */ new Map();
cn.set(vn.BACKSPACE, Ge.BACKSPACE);
cn.set(vn.ENTER, Ge.ENTER);
cn.set(vn.SPACEBAR, Ge.SPACEBAR);
cn.set(vn.PAGE_UP, Ge.PAGE_UP);
cn.set(vn.PAGE_DOWN, Ge.PAGE_DOWN);
cn.set(vn.END, Ge.END);
cn.set(vn.HOME, Ge.HOME);
cn.set(vn.ARROW_LEFT, Ge.ARROW_LEFT);
cn.set(vn.ARROW_UP, Ge.ARROW_UP);
cn.set(vn.ARROW_RIGHT, Ge.ARROW_RIGHT);
cn.set(vn.ARROW_DOWN, Ge.ARROW_DOWN);
cn.set(vn.DELETE, Ge.DELETE);
cn.set(vn.ESCAPE, Ge.ESCAPE);
cn.set(vn.TAB, Ge.TAB);
const ei = /* @__PURE__ */ new Set();
ei.add(Ge.PAGE_UP);
ei.add(Ge.PAGE_DOWN);
ei.add(Ge.END);
ei.add(Ge.HOME);
ei.add(Ge.ARROW_LEFT);
ei.add(Ge.ARROW_UP);
ei.add(Ge.ARROW_RIGHT);
ei.add(Ge.ARROW_DOWN);
function Dt(t) {
  const { key: e } = t;
  if (on.has(e))
    return e;
  const n = cn.get(t.keyCode);
  return n || Ge.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function K_(t, e) {
  if (t.closest)
    return t.closest(e);
  let n = t;
  for (; n; ) {
    if (jf(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function jf(t, e) {
  return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e);
}
function z_(t) {
  const e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  const n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  const r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: K_,
  estimateScrollWidth: z_,
  matches: jf
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let ys;
function X_(t, e = !1) {
  const { CSS: n } = t;
  let r = ys;
  if (typeof ys == "boolean" && !e)
    return ys;
  if (!(n && typeof n.supports == "function"))
    return !1;
  const a = n.supports("--css-vars", "yes"), l = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || l, e || (ys = r), r;
}
function Y_(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  const { x: r, y: i } = e, a = r + n.left, l = i + n.top;
  let o, c;
  if (t.type === "touchstart") {
    const d = t;
    o = d.changedTouches[0].pageX - a, c = d.changedTouches[0].pageY - l;
  } else {
    const d = t;
    o = d.pageX - a, c = d.pageY - l;
  }
  return { x: o, y: c };
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Z_ = {};
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Q_ {
  constructor(e, n) {
    this.privateDoNotAccessOrElseWrappedAttributePrefix = n;
  }
  toString() {
    return this.privateDoNotAccessOrElseWrappedAttributePrefix;
  }
}
const J_ = Q_;
function $_(t) {
  return new J_(Z_, t);
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Cs(t) {
  return Object.isFrozen(t) && Object.isFrozen(t.raw);
}
function Ts(t) {
  return t.toString().indexOf("`") === -1;
}
Ts((t) => t``) || Ts((t) => t`\0`) || Ts((t) => t`\n`) || Ts((t) => t`\u0000`);
Cs`` && Cs`\0` && Cs`\n` && Cs`\u0000`;
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ta(t) {
  const e = t[0].toLowerCase();
  return $_(e);
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ot {
  static get cssClasses() {
    return {};
  }
  static get strings() {
    return {};
  }
  static get numbers() {
    return {};
  }
  static get defaultAdapter() {
    return {};
  }
  constructor(e = {}) {
    this.adapter = e;
  }
  init() {
  }
  destroy() {
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const eb = {
  // Ripple is a special case where the "root" component is really a "mixin" of
  // sorts,
  // given that it's an 'upgrade' to an existing component. That being said it
  // is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, tb = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, rd = {
  DEACTIVATION_TIMEOUT_MS: 225,
  // Corresponds to $mdc-ripple-translate-duration (i.e. activation
  // animation duration)
  FG_DEACTIVATION_MS: 150,
  // Corresponds to $mdc-ripple-fade-out-duration
  // (i.e. deactivation animation duration)
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const id = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ad = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
let xs = [];
class Rt extends Ot {
  static get cssClasses() {
    return eb;
  }
  static get strings() {
    return tb;
  }
  static get numbers() {
    return rd;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      browserSupportsCssVars: () => !0,
      computeBoundingRect: () => ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }),
      containsEventTarget: () => !0,
      deregisterDocumentInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      getWindowPageOffset: () => ({ x: 0, y: 0 }),
      isSurfaceActive: () => !0,
      isSurfaceDisabled: () => !0,
      isUnbounded: () => !0,
      registerDocumentInteractionHandler: () => {
      },
      registerInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      removeClass: () => {
      },
      updateCssVariable: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, Rt.defaultAdapter), e)), this.activationAnimationHasEnded = !1, this.activationTimer = 0, this.fgDeactivationRemovalTimer = 0, this.fgScale = "0", this.frame = { width: 0, height: 0 }, this.initialSize = 0, this.layoutFrame = 0, this.maxRadius = 0, this.unboundedCoords = { left: 0, top: 0 }, this.activationState = this.defaultActivationState(), this.activationTimerCallback = () => {
      this.activationAnimationHasEnded = !0, this.runDeactivationUXLogicIfReady();
    }, this.activateHandler = (n) => {
      this.activateImpl(n);
    }, this.deactivateHandler = () => {
      this.deactivateImpl();
    }, this.focusHandler = () => {
      this.handleFocus();
    }, this.blurHandler = () => {
      this.handleBlur();
    }, this.resizeHandler = () => {
      this.layout();
    };
  }
  init() {
    const e = this.supportsPressRipple();
    if (this.registerRootHandlers(e), e) {
      const { ROOT: n, UNBOUNDED: r } = Rt.cssClasses;
      requestAnimationFrame(() => {
        this.adapter.addClass(n), this.adapter.isUnbounded() && (this.adapter.addClass(r), this.layoutInternal());
      });
    }
  }
  destroy() {
    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(Rt.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(Rt.cssClasses.FG_DEACTIVATION));
      const { ROOT: e, UNBOUNDED: n } = Rt.cssClasses;
      requestAnimationFrame(() => {
        this.adapter.removeClass(e), this.adapter.removeClass(n), this.removeCssVars();
      });
    }
    this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
  }
  /**
   * @param event Optional event containing position information.
   */
  activate(e) {
    this.activateImpl(e);
  }
  deactivate() {
    this.deactivateImpl();
  }
  layout() {
    this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(() => {
      this.layoutInternal(), this.layoutFrame = 0;
    });
  }
  setUnbounded(e) {
    const { UNBOUNDED: n } = Rt.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  handleFocus() {
    requestAnimationFrame(() => {
      this.adapter.addClass(Rt.cssClasses.BG_FOCUSED);
    });
  }
  handleBlur() {
    requestAnimationFrame(() => {
      this.adapter.removeClass(Rt.cssClasses.BG_FOCUSED);
    });
  }
  /**
   * We compute this property so that we are not querying information about the
   * client until the point in time where the foundation requests it. This
   * prevents scenarios where client-side feature-detection may happen too
   * early, such as when components are rendered on the server and then
   * initialized at mount time on the client.
   */
  supportsPressRipple() {
    return this.adapter.browserSupportsCssVars();
  }
  defaultActivationState() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: !1,
      isActivated: !1,
      isProgrammatic: !1,
      wasActivatedByPointer: !1,
      wasElementMadeActive: !1
    };
  }
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */
  registerRootHandlers(e) {
    if (e) {
      for (const n of id)
        this.adapter.registerInteractionHandler(n, this.activateHandler);
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }
  registerDeactivationHandlers(e) {
    if (e.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      for (const n of ad)
        this.adapter.registerDocumentInteractionHandler(n, this.deactivateHandler);
  }
  deregisterRootHandlers() {
    for (const e of id)
      this.adapter.deregisterInteractionHandler(e, this.activateHandler);
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }
  deregisterDeactivationHandlers() {
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    for (const e of ad)
      this.adapter.deregisterDocumentInteractionHandler(e, this.deactivateHandler);
  }
  removeCssVars() {
    const e = Rt.strings;
    Object.keys(e).forEach((r) => {
      r.indexOf("VAR_") === 0 && this.adapter.updateCssVariable(e[r], null);
    });
  }
  activateImpl(e) {
    if (this.adapter.isSurfaceDisabled())
      return;
    const n = this.activationState;
    if (n.isActivated)
      return;
    const r = this.previousActivationEvent;
    if (r && e !== void 0 && r.type !== e.type)
      return;
    if (n.isActivated = !0, n.isProgrammatic = e === void 0, n.activationEvent = e, n.wasActivatedByPointer = n.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown"), e !== void 0 && xs.length > 0 && xs.some((l) => this.adapter.containsEventTarget(l))) {
      this.resetActivationState();
      return;
    }
    e !== void 0 && (xs.push(e.target), this.registerDeactivationHandlers(e)), n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(() => {
      xs = [], !n.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation()), n.wasElementMadeActive || (this.activationState = this.defaultActivationState());
    });
  }
  checkElementMadeActive(e) {
    return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }
  animateActivation() {
    const { VAR_FG_TRANSLATE_START: e, VAR_FG_TRANSLATE_END: n } = Rt.strings, { FG_DEACTIVATION: r, FG_ACTIVATION: i } = Rt.cssClasses, { DEACTIVATION_TIMEOUT_MS: a } = Rt.numbers;
    this.layoutInternal();
    let l = "", o = "";
    if (!this.adapter.isUnbounded()) {
      const { startPoint: c, endPoint: d } = this.getFgTranslationCoordinates();
      l = `${c.x}px, ${c.y}px`, o = `${d.x}px, ${d.y}px`;
    }
    this.adapter.updateCssVariable(e, l), this.adapter.updateCssVariable(n, o), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(i), this.activationTimer = setTimeout(() => {
      this.activationTimerCallback();
    }, a);
  }
  getFgTranslationCoordinates() {
    const { activationEvent: e, wasActivatedByPointer: n } = this.activationState;
    let r;
    n ? r = Y_(e, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
      x: this.frame.width / 2,
      y: this.frame.height / 2
    }, r = {
      x: r.x - this.initialSize / 2,
      y: r.y - this.initialSize / 2
    };
    const i = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint: r, endPoint: i };
  }
  runDeactivationUXLogicIfReady() {
    const { FG_DEACTIVATION: e } = Rt.cssClasses, { hasDeactivationUXRun: n, isActivated: r } = this.activationState;
    (n || !r) && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(e), this.fgDeactivationRemovalTimer = setTimeout(() => {
      this.adapter.removeClass(e);
    }, rd.FG_DEACTIVATION_MS));
  }
  rmBoundedActivationClasses() {
    const { FG_ACTIVATION: e } = Rt.cssClasses;
    this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }
  resetActivationState() {
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(() => this.previousActivationEvent = void 0, Rt.numbers.TAP_DELAY_MS);
  }
  deactivateImpl() {
    const e = this.activationState;
    if (!e.isActivated)
      return;
    const n = Object.assign({}, e);
    e.isProgrammatic ? (requestAnimationFrame(() => {
      this.animateDeactivation(n);
    }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(() => {
      this.activationState.hasDeactivationUXRun = !0, this.animateDeactivation(n), this.resetActivationState();
    }));
  }
  animateDeactivation({ wasActivatedByPointer: e, wasElementMadeActive: n }) {
    (e || n) && this.runDeactivationUXLogicIfReady();
  }
  layoutInternal() {
    this.frame = this.adapter.computeBoundingRect();
    const e = Math.max(this.frame.height, this.frame.width), n = () => Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + Rt.numbers.PADDING;
    this.maxRadius = this.adapter.isUnbounded() ? e : n();
    const r = Math.floor(e * Rt.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = `${this.maxRadius / this.initialSize}`, this.updateLayoutCssVars();
  }
  updateLayoutCssVars() {
    const { VAR_FG_SIZE: e, VAR_LEFT: n, VAR_TOP: r, VAR_FG_SCALE: i } = Rt.strings;
    this.adapter.updateCssVariable(e, `${this.initialSize}px`), this.adapter.updateCssVariable(i, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(n, `${this.unboundedCoords.left}px`), this.adapter.updateCssVariable(r, `${this.unboundedCoords.top}px`));
  }
}
const { applyPassive: sd } = Gf, { matches: nb } = ga;
function en(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: l, rippleElement: o, eventTarget: c, activeTarget: d, addClass: u = (h) => t.classList.add(h), removeClass: g = (h) => t.classList.remove(h), addStyle: f = (h, _) => t.style.setProperty(h, _), initPromise: m = Promise.resolve() } = {}) {
  let h, _ = new $r(), b = me("SMUI:addLayoutListener"), E, p = l, y = c, A = d;
  function x() {
    n ? (u("mdc-ripple-surface"), a === "primary" ? (u("smui-ripple-surface--primary"), g("smui-ripple-surface--secondary")) : a === "secondary" ? (g("smui-ripple-surface--primary"), u("smui-ripple-surface--secondary")) : (g("smui-ripple-surface--primary"), g("smui-ripple-surface--secondary"))) : (g("mdc-ripple-surface"), g("smui-ripple-surface--primary"), g("smui-ripple-surface--secondary")), h && p !== l && (p = l, l ? h.activate() : l === !1 && h.deactivate()), e && !h ? (h = new Rt({
      addClass: u,
      browserSupportsCssVars: () => X_(window),
      computeBoundingRect: () => (o || t).getBoundingClientRect(),
      containsEventTarget: (S) => t.contains(S),
      deregisterDocumentInteractionHandler: (S, C) => _.off(document.documentElement, S, C),
      deregisterInteractionHandler: (S, C) => _.off(c || t, S, C),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => {
        var S, C;
        return {
          x: (S = window.pageXOffset) !== null && S !== void 0 ? S : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? nb(d || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (S, C) => {
        const T = sd();
        _.on(document.documentElement, S, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (S, C) => {
        const T = sd();
        _.on(c || t, S, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (S) => _.on(window, "resize", S),
      removeClass: g,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, _.clear());
    }), h && (y !== c || A !== d) && (y = c, A = d, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && u("mdc-ripple-upgraded--unbounded");
  }
  x(), b && (E = b(I));
  function I() {
    h && h.layout();
  }
  return {
    update(S) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: l,
        rippleElement: o,
        eventTarget: c,
        activeTarget: d,
        addClass: u,
        removeClass: g,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, T) => t.style.setProperty(C, T), initPromise: Promise.resolve() }, S)), x();
    },
    destroy() {
      h && (h.destroy(), h = void 0, _.clear(), g("mdc-ripple-surface"), g("smui-ripple-surface--primary"), g("smui-ripple-surface--secondary")), E && E();
    }
  };
}
var rb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "component",
  "tag",
  "children"
]);
function Io(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, ti), a = v(e, "tag", 3, "span"), l = /* @__PURE__ */ qe(e, rb), o;
  const c = me("SMUI:label:context"), d = me("SMUI:label:tabindex");
  function u() {
    return o.getElement();
  }
  var g = { getElement: u }, f = ge(), m = ie(f);
  {
    let h = /* @__PURE__ */ de(() => He({
      "mdc-button__label": c === "button",
      "mdc-fab__label": c === "fab",
      "mdc-tab__text-label": c === "tab",
      "mdc-image-list__label": c === "image-list",
      "mdc-snackbar__label": c === "snackbar",
      "mdc-banner__text": c === "banner",
      "mdc-segmented-button__label": c === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": c === "data-table:pagination",
      "mdc-data-table__header-cell-label": c === "data-table:sortable-header-cell",
      "mdc-tooltip__label": c === "tooltip",
      [r()]: !0
    }));
    _r(m, i, (_, b) => {
      ye(
        b(_, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(h);
            }
          },
          () => c === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return d;
            }
          },
          () => l,
          {
            children: (E, p) => {
              var y = ge(), A = ie(y);
              pe(A, () => e.children ?? ve), w(E, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => o = E,
        () => o
      );
    });
  }
  return w(t, f), Re(g);
}
var ib = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "on",
  "component",
  "tag",
  "children"
]);
function So(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "on", 3, !1), a = v(e, "component", 3, ti), l = v(e, "tag", 3, "i"), o = /* @__PURE__ */ qe(e, ib), c;
  const d = /* @__PURE__ */ de(() => l() === "svg" || a() === cb), u = me("SMUI:icon:context");
  function g() {
    return c.getElement();
  }
  var f = { getElement: g }, m = ge(), h = ie(m);
  {
    let _ = /* @__PURE__ */ de(() => He({
      "mdc-button__icon": u === "button",
      "mdc-fab__icon": u === "fab",
      "mdc-icon-button__icon": u === "icon-button",
      "mdc-icon-button__icon--on": u === "icon-button" && i(),
      "mdc-tab__icon": u === "tab",
      "mdc-banner__icon": u === "banner",
      "mdc-segmented-button__icon": u === "segmented-button",
      [r()]: !0
    }));
    _r(h, a, (b, E) => {
      ye(
        E(b, rt(
          {
            get tag() {
              return l();
            },
            get use() {
              return n();
            },
            get class() {
              return s(_);
            },
            "aria-hidden": "true"
          },
          () => s(d) ? { focusable: "false", tabindex: "-1" } : {},
          () => o,
          {
            children: (p, y) => {
              var A = ge(), x = ie(A);
              pe(x, () => e.children ?? ve), w(p, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (p) => c = p,
        () => c
      );
    });
  }
  return w(t, m), Re(f);
}
var ab = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "tag", "children"]), sb = /* @__PURE__ */ yt("<svg><!></svg>");
function ti(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ab);
  const a = /* @__PURE__ */ de(() => [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(r()) > -1);
  let l;
  function o() {
    return l;
  }
  var c = { getElement: o }, d = ge(), u = ie(d);
  {
    var g = (h) => {
      var _ = sb();
      je(_, () => ({ ...i }));
      var b = Ie(_);
      pe(b, () => e.children ?? ve), ye(_, (E) => l = E, () => l), Fe(_, (E, p) => Z == null ? void 0 : Z(E, p), n), w(h, _);
    }, f = (h) => {
      var _ = ge(), b = ie(_);
      Hc(b, r, !1, (E, p) => {
        ye(E, (y) => l = y, () => l), Fe(E, (y, A) => Z == null ? void 0 : Z(y, A), n), je(E, () => ({ ...i }));
      }), w(h, _);
    }, m = (h) => {
      var _ = ge(), b = ie(_);
      Hc(b, r, !1, (E, p) => {
        ye(E, (x) => l = x, () => l), Fe(E, (x, I) => Z == null ? void 0 : Z(x, I), n), je(E, () => ({ ...i }));
        var y = ge(), A = ie(y);
        pe(A, () => e.children ?? ve), w(p, y);
      }), w(h, _);
    };
    Se(u, (h) => {
      r() === "svg" ? h(g) : s(a) ? h(f, 1) : h(m, -1);
    });
  }
  return w(t, d), Re(c);
}
var lb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), ob = /* @__PURE__ */ yt("<svg><!></svg>");
function cb(t, e) {
  Oe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, lb), i;
  function a() {
    return i;
  }
  var l = { getElement: a }, o = ob();
  je(o, () => ({ ...r }));
  var c = Ie(o);
  return pe(c, () => e.children ?? ve), ye(o, (d) => i = d, () => i), Fe(o, (d, u) => Z == null ? void 0 : Z(d, u), n), w(t, o), Re(l);
}
function ws(t, e) {
  Oe(e, !0);
  const [n, r] = br(), i = Vt(e.value);
  le(e.key, i), De(() => {
    qn(i, e.value);
  }), gr(() => {
    i.set(void 0);
  });
  var a = ge(), l = ie(a);
  pe(l, () => e.children ?? ve), w(t, a), Re(), r();
}
var db = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "ripple",
  "color",
  "variant",
  "touch",
  "href",
  "action",
  "defaultAction",
  "secondary",
  "component",
  "tag",
  "children"
]), ub = /* @__PURE__ */ he('<div class="mdc-button__touch"></div>'), fb = /* @__PURE__ */ he('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ca(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "ripple", 3, !0), l = v(e, "color", 3, "primary"), o = v(e, "variant", 3, "text"), c = v(e, "touch", 3, !1), d = v(e, "action", 3, "close"), u = v(e, "defaultAction", 3, !1), g = v(e, "secondary", 3, !1), f = v(e, "component", 3, ti), m = v(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ qe(e, db), _, b = _e({}), E = _e({}), p = me("SMUI:button:context");
  const y = /* @__PURE__ */ de(() => p === "dialog:action" && d() != null ? { "data-mdc-dialog-action": d() } : { action: d() }), A = /* @__PURE__ */ de(() => p === "dialog:action" && u() ? { "data-mdc-dialog-button-default": "" } : {}), x = /* @__PURE__ */ de(() => p === "banner" ? {} : { secondary: g() });
  let I = e.disabled;
  De(() => {
    if (I !== e.disabled) {
      if (_) {
        const O = $();
        "blur" in O && O.blur();
      }
      I = h.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function S(O) {
    b[O] || (b[O] = !0);
  }
  function C(O) {
    (!(O in b) || b[O]) && (b[O] = !1);
  }
  function T(O, D) {
    E[O] != D && (D === "" || D == null ? delete E[O] : E[O] = D);
  }
  function N() {
    p === "banner" && Qe($(), g() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function $() {
    return _.getElement();
  }
  var q = { getElement: $ }, X = ge(), R = ie(X);
  {
    let O = /* @__PURE__ */ de(() => [
      [
        en,
        {
          ripple: a(),
          unbounded: !1,
          color: l(),
          disabled: !!e.disabled,
          addClass: S,
          removeClass: C,
          addStyle: T
        }
      ],
      ...n()
    ]), D = /* @__PURE__ */ de(() => He({
      "mdc-button": !0,
      "mdc-button--raised": o() === "raised",
      "mdc-button--unelevated": o() === "unelevated",
      "mdc-button--outlined": o() === "outlined",
      "smui-button--color-secondary": l() === "secondary",
      "mdc-button--touch": c(),
      "mdc-card__action": p === "card:action",
      "mdc-card__action--button": p === "card:action",
      "mdc-dialog__button": p === "dialog:action",
      "mdc-top-app-bar__navigation-icon": p === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": p === "top-app-bar:action",
      "mdc-snackbar__action": p === "snackbar:actions",
      "mdc-banner__secondary-action": p === "banner" && g(),
      "mdc-banner__primary-action": p === "banner" && !g(),
      "mdc-tooltip--rich-action": p === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), K = /* @__PURE__ */ de(() => Object.entries(E).map(([F, G]) => `${F}: ${G};`).concat([i()]).join(" "));
    _r(R, f, (F, G) => {
      ye(
        G(F, rt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(O);
            },
            get class() {
              return s(D);
            },
            get style() {
              return s(K);
            }
          },
          () => s(y),
          () => s(A),
          () => s(x),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (H) => {
              var j;
              N(), (j = e.onclick) == null || j.call(e, H);
            },
            children: (H, j) => {
              var U = fb(), ae = ue(ie(U), 2);
              pe(ae, () => e.children ?? ve);
              var we = ue(ae);
              {
                var W = (z) => {
                  var L = ub();
                  w(z, L);
                };
                Se(we, (z) => {
                  c() && z(W);
                });
              }
              w(H, U);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => _ = H,
        () => _
      );
    });
  }
  return w(t, X), Re(q);
}
function Ao(t, e) {
  Oe(e, !0);
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "disabled", 3, !1), i = v(e, "variant", 3, "default"), a = v(e, "isAbortAction", 3, !1), l = v(e, "backgroundColor", 3, void 0), o = v(e, "ariaLabel", 3, void 0);
  {
    let c = /* @__PURE__ */ de(() => a() ? "background-color: #ff3e00;" : "background-color: " + l());
    ca(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get "aria-label"() {
        return o();
      },
      get style() {
        return s(c);
      },
      children: (d, u) => {
        var g = ge(), f = ie(g);
        pe(f, () => e.children ?? ve), w(d, g);
      },
      $$slots: { default: !0 }
    });
  }
  Re();
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Os = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, yr = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Jo extends Ot {
  static get cssClasses() {
    return Os;
  }
  static get strings() {
    return yr;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      hasClass: () => !1,
      notifyChange: () => {
      },
      removeClass: () => {
      },
      getAttr: () => null,
      setAttr: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, Jo.defaultAdapter), e)), this.hasToggledAriaLabel = !1;
  }
  init() {
    const e = this.adapter.getAttr(yr.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(yr.DATA_ARIA_LABEL_OFF);
    if (e && n) {
      if (this.adapter.getAttr(yr.ARIA_PRESSED) !== null)
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled ARIA label.");
      this.hasToggledAriaLabel = !0;
    } else
      this.adapter.setAttr(yr.ARIA_PRESSED, String(this.isOn()));
  }
  handleClick() {
    this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
  }
  isOn() {
    return this.adapter.hasClass(Os.ICON_BUTTON_ON);
  }
  toggle(e = !this.isOn()) {
    if (e ? this.adapter.addClass(Os.ICON_BUTTON_ON) : this.adapter.removeClass(Os.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
      const n = e ? this.adapter.getAttr(yr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(yr.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(yr.ARIA_LABEL, n || "");
    } else
      this.adapter.setAttr(yr.ARIA_PRESSED, `${e}`);
  }
}
var hb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "ripple",
  "color",
  "toggle",
  "pressed",
  "ariaLabelOn",
  "ariaLabelOff",
  "touch",
  "displayFlex",
  "size",
  "href",
  "action",
  "focusRing",
  "component",
  "tag",
  "children"
]), vb = /* @__PURE__ */ he('<span class="mdc-icon-button__focus-ring"></span>'), mb = /* @__PURE__ */ he('<div class="mdc-icon-button__touch"></div>'), gb = /* @__PURE__ */ he('<div class="mdc-icon-button__ripple"></div> <!> <!><!>', 1);
function _b(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(U) {
    return U === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), l = v(e, "style", 3, ""), o = v(e, "ripple", 3, !0), c = v(e, "toggle", 3, !1), d = v(e, "pressed", 15, n), u = v(e, "touch", 3, !1), g = v(e, "displayFlex", 3, !0), f = v(e, "size", 3, "normal"), m = v(e, "focusRing", 3, !0), h = v(e, "component", 3, ti), _ = v(e, "tag", 19, () => e.href == null ? "button" : "a"), b = /* @__PURE__ */ qe(e, hb), E, p, y = /* @__PURE__ */ fe(_e({})), A = _e({}), x = /* @__PURE__ */ fe(_e({})), I = me("SMUI:icon-button:context"), S = me("SMUI:icon-button:aria-describedby");
  const C = /* @__PURE__ */ de(() => {
    if (I === "data-table:pagination")
      switch (e.action) {
        case "first-page":
          return { "data-first-page": "true" };
        case "prev-page":
          return { "data-prev-page": "true" };
        case "next-page":
          return { "data-next-page": "true" };
        case "last-page":
          return { "data-last-page": "true" };
        default:
          return { "data-action": "true" };
      }
    else return I === "dialog:header" || I === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let T = !!e.disabled;
  De(() => {
    if (T != !!e.disabled) {
      if (E) {
        const U = F();
        "blur" in U && U.blur();
      }
      T = !!e.disabled;
    }
  }), le("SMUI:icon:context", "icon-button");
  let N = null;
  De(() => {
    E && F() && c() !== N && (c() && !p ? (p = new Jo({
      addClass: q,
      hasClass: $,
      notifyChange: (U) => {
        K(U), Qe(F(), "SMUIIconButtonToggleChange", U);
      },
      removeClass: X,
      getAttr: O,
      setAttr: D
    }), p.init()) : !c() && p && (p.destroy(), p = void 0, V(y, {}, !0), V(x, {}, !0)), N = c());
  }), De(() => {
    p && !r(d()) && p.isOn() !== d() && p.toggle(d());
  }), st(() => () => {
    p == null || p.destroy(), p = void 0;
  });
  function $(U) {
    return U in s(y) ? s(y)[U] : F().classList.contains(U);
  }
  function q(U) {
    s(y)[U] || (s(y)[U] = !0);
  }
  function X(U) {
    (!(U in s(y)) || s(y)[U]) && (s(y)[U] = !1);
  }
  function R(U, ae) {
    A[U] != ae && (ae === "" || ae == null ? delete A[U] : A[U] = ae);
  }
  function O(U) {
    return U in s(x) ? s(x)[U] ?? null : F().getAttribute(U);
  }
  function D(U, ae) {
    s(x)[U] !== ae && (s(x)[U] = ae);
  }
  function K(U) {
    d(U.isOn);
  }
  function F() {
    return E.getElement();
  }
  var G = { getElement: F }, H = ge(), j = ie(H);
  {
    let U = /* @__PURE__ */ de(() => [
      [
        en,
        {
          ripple: o(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: q,
          removeClass: X,
          addStyle: R
        }
      ],
      ...i()
    ]), ae = /* @__PURE__ */ de(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(d()) && d(),
      "mdc-icon-button--touch": u(),
      "mdc-icon-button--display-flex": g(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": I === "card:action",
      "mdc-card__action--icon": I === "card:action",
      "mdc-top-app-bar__navigation-icon": I === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": I === "top-app-bar:action",
      "mdc-snackbar__dismiss": I === "snackbar:actions",
      "mdc-data-table__pagination-button": I === "data-table:pagination",
      "mdc-data-table__sort-icon-button": I === "data-table:sortable-header-cell",
      "mdc-dialog__close": (I === "dialog:header" || I === "dialog:sheet") && e.action === "close",
      ...s(y),
      [a()]: !0
    })), we = /* @__PURE__ */ de(() => Object.entries(A).map(([L, Y]) => `${L}: ${Y};`).concat([l()]).join(" ")), W = /* @__PURE__ */ de(() => r(d()) ? null : d() ? "true" : "false"), z = /* @__PURE__ */ de(() => d() ? e.ariaLabelOn : e.ariaLabelOff);
    _r(j, h, (L, Y) => {
      ye(
        Y(L, rt(
          {
            get tag() {
              return _();
            },
            get use() {
              return s(U);
            },
            get class() {
              return s(ae);
            },
            get style() {
              return s(we);
            },
            get "aria-pressed"() {
              return s(W);
            },
            get "aria-label"() {
              return s(z);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return S;
            },
            get href() {
              return e.href;
            }
          },
          () => s(C),
          () => s(x),
          () => b,
          {
            onclick: (M) => {
              var ee;
              p && p.handleClick(), I === "top-app-bar:navigation" && Qe(F(), "SMUITopAppBarIconButtonNav"), (ee = e.onclick) == null || ee.call(e, M);
            },
            children: (M, ee) => {
              var oe = gb(), Q = ue(ie(oe), 2);
              {
                var re = (Me) => {
                  var Le = vb();
                  w(Me, Le);
                };
                Se(Q, (Me) => {
                  m() && Me(re);
                });
              }
              var Ce = ue(Q, 2);
              pe(Ce, () => e.children ?? ve);
              var Ne = ue(Ce);
              {
                var ke = (Me) => {
                  var Le = mb();
                  w(Me, Le);
                };
                Se(Ne, (Me) => {
                  u() && Me(ke);
                });
              }
              w(M, oe);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => E = M,
        () => E
      );
    });
  }
  return w(t, H), Re(G);
}
function bb(t, e) {
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "icon", 3, ""), i = v(e, "disabled", 3, !1), a = v(e, "ariaLabel", 3, void 0);
  _b(t, {
    get disabled() {
      return i();
    },
    get "aria-label"() {
      return a();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click: function(...l) {
        var o;
        (o = n()) == null || o.apply(this, l);
      }
    },
    children: (l, o) => {
      So(l, {
        class: "material-icons",
        children: (c, d) => {
          var u = bt();
          Ae(() => Ze(u, r())), w(c, u);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Eb = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_HIDE_REQUIRED_MARKER: "mdc-floating-label--hide-required-marker",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class xr extends Ot {
  static get cssClasses() {
    return Eb;
  }
  /**
   * See {@link MDCFloatingLabelAdapter} for typing information on parameters
   * and return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      getWidth: () => 0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, xr.defaultAdapter), e)), this.shakeAnimationEndHandler = () => {
      this.handleShakeAnimationEnd();
    };
  }
  init() {
    this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
  }
  destroy() {
    this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
  }
  /**
   * Returns the width of the label element.
   */
  getWidth() {
    return this.adapter.getWidth();
  }
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes
   *     shake class.
   */
  shake(e) {
    const { LABEL_SHAKE: n } = xr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes
   *     float and shake classes to dock the label.
   */
  float(e) {
    const { LABEL_FLOAT_ABOVE: n, LABEL_SHAKE: r } = xr.cssClasses;
    e ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(r));
  }
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that
   *     it is required.
   */
  setRequired(e) {
    const { LABEL_REQUIRED: n } = xr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  setHideRequiredMarker(e) {
    const { LABEL_HIDE_REQUIRED_MARKER: n } = xr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  getHideRequiredMarker() {
    const { LABEL_HIDE_REQUIRED_MARKER: e } = xr.cssClasses;
    return this.adapter.hasClass(e);
  }
  handleShakeAnimationEnd() {
    const { LABEL_SHAKE: e } = xr.cssClasses;
    this.adapter.removeClass(e);
  }
}
var pb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "for",
  "floatAbove",
  "required",
  "wrapped",
  "children"
]), Ib = /* @__PURE__ */ he("<span><!></span>"), Sb = /* @__PURE__ */ he("<label><!></label>");
function $s(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "floatAbove", 15, !1), l = v(e, "required", 15, !1), o = v(e, "wrapped", 3, !1), c = /* @__PURE__ */ qe(e, pb), d, u = /* @__PURE__ */ fe(void 0), g = new $r(), f = _e({}), m = _e({}), h = me("SMUI:generic:input:props") ?? {}, _ = a();
  De(() => {
    s(u) && _ !== a() && (_ = a(), s(u).float(a()));
  });
  let b = l();
  De(() => {
    s(u) && b !== l() && (b = l(), s(u).setRequired(l()));
  });
  const E = me("SMUI:floating-label:mount"), p = me("SMUI:floating-label:unmount");
  st(() => {
    V(
      u,
      new xr({
        addClass: A,
        removeClass: x,
        hasClass: y,
        getWidth: () => {
          var U, ae;
          const G = q(), H = G.cloneNode(!0);
          (U = G.parentNode) == null || U.appendChild(H), H.classList.add("smui-floating-label--remove-transition"), H.classList.add("smui-floating-label--force-size"), H.classList.remove("mdc-floating-label--float-above");
          const j = H.scrollWidth;
          return (ae = G.parentNode) == null || ae.removeChild(H), j;
        },
        registerInteractionHandler: (G, H) => g.on(q(), G, H),
        deregisterInteractionHandler: (G, H) => g.off(q(), G, H)
      }),
      !0
    );
    const F = {
      get element() {
        return q();
      },
      addStyle: I,
      removeStyle: S
    };
    return E && E(F), s(u).init(), () => {
      var G;
      p && p(F), (G = s(u)) == null || G.destroy(), V(u, void 0), g.clear();
    };
  });
  function y(F) {
    return F in f ? f[F] : q().classList.contains(F);
  }
  function A(F) {
    f[F] || (f[F] = !0);
  }
  function x(F) {
    (!(F in f) || f[F]) && (f[F] = !1);
  }
  function I(F, G) {
    m[F] != G && (G === "" || G == null ? delete m[F] : m[F] = G);
  }
  function S(F) {
    F in m && delete m[F];
  }
  function C(F) {
    var G;
    (G = s(u)) == null || G.shake(F);
  }
  function T(F) {
    a(F);
  }
  function N(F) {
    l(F);
  }
  function $() {
    if (s(u) == null)
      throw new Error("Instance is undefined.");
    return s(u).getWidth();
  }
  function q() {
    return d;
  }
  var X = { shake: C, float: T, setRequired: N, getWidth: $, getElement: q }, R = ge(), O = ie(R);
  {
    var D = (F) => {
      var G = Ib();
      je(G, (j, U) => ({ class: j, style: U, ...c }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": l(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([j, U]) => `${j}: ${U};`).concat([i()]).join(" ")
      ]);
      var H = Ie(G);
      pe(H, () => e.children ?? ve), ye(G, (j) => d = j, () => d), Fe(G, (j, U) => Z == null ? void 0 : Z(j, U), n), w(F, G);
    }, K = (F) => {
      var G = Sb();
      je(
        G,
        (j, U) => ({
          class: j,
          style: U,
          for: e.for || (h ? h.id : void 0),
          ...c
        }),
        [
          () => He({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": l(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([j, U]) => `${j}: ${U};`).concat([i()]).join(" ")
        ]
      );
      var H = Ie(G);
      pe(H, () => e.children ?? ve), ye(G, (j) => d = j, () => d), Fe(G, (j, U) => Z == null ? void 0 : Z(j, U), n), w(F, G);
    };
    Se(O, (F) => {
      o() ? F(D) : F(K, -1);
    });
  }
  return w(t, R), Re(X);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ai = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class $o extends Ot {
  static get cssClasses() {
    return ai;
  }
  /**
   * See {@link MDCLineRippleAdapter} for typing information on parameters and
   * return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      setStyle: () => {
      },
      registerEventHandler: () => {
      },
      deregisterEventHandler: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, $o.defaultAdapter), e)), this.transitionEndHandler = (n) => {
      this.handleTransitionEnd(n);
    };
  }
  init() {
    this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
  }
  destroy() {
    this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
  }
  activate() {
    this.adapter.removeClass(ai.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ai.LINE_RIPPLE_ACTIVE);
  }
  setRippleCenter(e) {
    this.adapter.setStyle("transform-origin", `${e}px center`);
  }
  deactivate() {
    this.adapter.addClass(ai.LINE_RIPPLE_DEACTIVATING);
  }
  handleTransitionEnd(e) {
    const n = this.adapter.hasClass(ai.LINE_RIPPLE_DEACTIVATING);
    e.propertyName === "opacity" && n && (this.adapter.removeClass(ai.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ai.LINE_RIPPLE_DEACTIVATING));
  }
}
var Ab = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "active"
]), yb = /* @__PURE__ */ he("<div></div>");
function Wf(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "active", 3, !1), l = /* @__PURE__ */ qe(e, Ab), o, c = /* @__PURE__ */ fe(void 0), d = new $r(), u = _e({}), g = _e({});
  st(() => (V(
    c,
    new $o({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: _,
      registerEventHandler: (I, S) => d.on(y(), I, S),
      deregisterEventHandler: (I, S) => d.off(y(), I, S)
    }),
    !0
  ), s(c).init(), () => {
    var I;
    (I = s(c)) == null || I.destroy(), V(c, void 0), d.clear();
  }));
  function f(I) {
    return I in u ? u[I] : y().classList.contains(I);
  }
  function m(I) {
    u[I] || (u[I] = !0);
  }
  function h(I) {
    (!(I in u) || u[I]) && (u[I] = !1);
  }
  function _(I, S) {
    g[I] != S && (S === "" || S == null ? delete g[I] : g[I] = S);
  }
  function b() {
    var I;
    (I = s(c)) == null || I.activate();
  }
  function E() {
    var I;
    (I = s(c)) == null || I.deactivate();
  }
  function p(I) {
    var S;
    (S = s(c)) == null || S.setRippleCenter(I);
  }
  function y() {
    return o;
  }
  var A = { activate: b, deactivate: E, setRippleCenter: p, getElement: y }, x = yb();
  return je(x, (I, S) => ({ class: I, style: S, ...l }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...u,
      [r()]: !0
    }),
    () => Object.entries(g).map(([I, S]) => `${I}: ${S};`).concat([i()]).join(" ")
  ]), ye(x, (I) => o = I, () => o), Fe(x, (I, S) => Z == null ? void 0 : Z(I, S), n), w(t, x), Re(A);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Cb = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ld = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Tb = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Ka extends Ot {
  static get strings() {
    return Cb;
  }
  static get cssClasses() {
    return Tb;
  }
  static get numbers() {
    return ld;
  }
  /**
   * See {@link MDCNotchedOutlineAdapter} for typing information on parameters
   * and return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      setNotchWidthProperty: () => {
      },
      removeNotchWidthProperty: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, Ka.defaultAdapter), e));
  }
  /**
   * Adds the outline notched selector and updates the notch width calculated
   * based off of notchWidth.
   */
  notch(e) {
    const { OUTLINE_NOTCHED: n } = Ka.cssClasses;
    e > 0 && (e += ld.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(n);
  }
  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const { OUTLINE_NOTCHED: e } = Ka.cssClasses;
    this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
  }
}
var xb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "notched",
  "noLabel",
  "children"
]), wb = /* @__PURE__ */ he('<div class="mdc-notched-outline__notch"><!></div>'), Ob = /* @__PURE__ */ he('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function qf(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "notched", 3, !1), a = v(e, "noLabel", 3, !1), l = /* @__PURE__ */ qe(e, xb), o, c = /* @__PURE__ */ fe(void 0), d = /* @__PURE__ */ fe(void 0), u = _e({}), g = _e({}), f;
  De(() => {
    s(d) !== f && (s(d) ? (s(d).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(d) && s(d).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(d));
  }), le("SMUI:floating-label:mount", (C) => {
    V(d, C, !0);
  }), le("SMUI:floating-label:unmount", () => {
    V(d, void 0);
  }), st(() => (V(
    c,
    new Ka({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (C) => _("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(c).init(), () => {
    var C;
    (C = s(c)) == null || C.destroy(), V(c, void 0);
  }));
  function m(C) {
    u[C] || (u[C] = !0);
  }
  function h(C) {
    (!(C in u) || u[C]) && (u[C] = !1);
  }
  function _(C, T) {
    g[C] != T && (T === "" || T == null ? delete g[C] : g[C] = T);
  }
  function b(C) {
    C in g && delete g[C];
  }
  function E(C) {
    var T;
    (T = s(c)) == null || T.notch(C);
  }
  function p() {
    var C;
    (C = s(c)) == null || C.closeNotch();
  }
  function y() {
    return o;
  }
  var A = { notch: E, closeNotch: p, getElement: y }, x = Ob();
  je(x, (C) => ({ class: C, ...l }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...u,
      [r()]: !0
    })
  ]);
  var I = ue(Ie(x), 2);
  {
    var S = (C) => {
      var T = wb(), N = Ie(T);
      pe(N, () => e.children ?? ve), Ae(($) => ht(T, $), [
        () => Object.entries(g).map(([$, q]) => `${$}: ${q};`).join(" ")
      ]), w(C, T);
    };
    Se(I, (C) => {
      a() || C(S);
    });
  }
  return ye(x, (C) => o = C, () => o), Fe(x, (C, T) => Z == null ? void 0 : Z(C, T), n), w(t, x), Re(A);
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ml = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Rb = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, od = {
  LABEL_SCALE: 0.75
}, Lb = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Db = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const cd = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Nb = {
  ROOT: "mdc-text-field__icon"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const dd = ["click", "keydown"];
class ec extends Ot {
  static get strings() {
    return cd;
  }
  static get cssClasses() {
    return Nb;
  }
  /**
   * See {@link MDCTextFieldIconAdapter} for typing information on parameters
   * and return types.
   */
  static get defaultAdapter() {
    return {
      getAttr: () => null,
      setAttr: () => {
      },
      removeAttr: () => {
      },
      setContent: () => {
      },
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      notifyIconAction: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, ec.defaultAdapter), e)), this.savedTabIndex = null, this.interactionHandler = (n) => {
      this.handleInteraction(n);
    };
  }
  init() {
    this.savedTabIndex = this.adapter.getAttr("tabindex");
    for (const e of dd)
      this.adapter.registerInteractionHandler(e, this.interactionHandler);
  }
  destroy() {
    for (const e of dd)
      this.adapter.deregisterInteractionHandler(e, this.interactionHandler);
  }
  setDisabled(e) {
    this.savedTabIndex && (e ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", cd.ICON_ROLE)));
  }
  setAriaLabel(e) {
    this.adapter.setAttr("aria-label", e);
  }
  setContent(e) {
    this.adapter.setContent(e);
  }
  handleInteraction(e) {
    const n = e.key === "Enter" || e.keyCode === 13, r = e.key === " ";
    (e.type === "click" || n || r) && (e.preventDefault(), this.adapter.notifyIconAction());
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ud = ["mousedown", "touchstart"], fd = ["click", "keydown"];
class Gr extends Ot {
  static get cssClasses() {
    return Rb;
  }
  static get strings() {
    return Ml;
  }
  static get numbers() {
    return od;
  }
  get shouldAlwaysFloat() {
    const e = this.getNativeInput().type;
    return Db.indexOf(e) >= 0;
  }
  get shouldFloat() {
    return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
  }
  get shouldShake() {
    return !this.isFocused && !this.isValid() && !!this.getValue();
  }
  /**
   * See {@link MDCTextFieldAdapter} for typing information on parameters and
   * return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !0,
      setInputAttr: () => {
      },
      removeInputAttr: () => {
      },
      registerTextFieldInteractionHandler: () => {
      },
      deregisterTextFieldInteractionHandler: () => {
      },
      registerInputInteractionHandler: () => {
      },
      deregisterInputInteractionHandler: () => {
      },
      registerValidationAttributeChangeHandler: () => new MutationObserver(() => {
      }),
      deregisterValidationAttributeChangeHandler: () => {
      },
      getNativeInput: () => null,
      isFocused: () => !1,
      activateLineRipple: () => {
      },
      deactivateLineRipple: () => {
      },
      setLineRippleTransformOrigin: () => {
      },
      shakeLabel: () => {
      },
      floatLabel: () => {
      },
      setLabelRequired: () => {
      },
      hasLabel: () => !1,
      getLabelWidth: () => 0,
      hasOutline: () => !1,
      notchOutline: () => {
      },
      closeOutline: () => {
      }
    };
  }
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */
  constructor(e, n = {}) {
    super(Object.assign(Object.assign({}, Gr.defaultAdapter), e)), this.isFocused = !1, this.receivedUserInput = !1, this.useNativeValidation = !0, this.validateOnValueChange = !0, this.helperText = n.helperText, this.characterCounter = n.characterCounter, this.leadingIcon = n.leadingIcon, this.trailingIcon = n.trailingIcon, this.valid = !this.adapter.hasClass(Gr.cssClasses.INVALID), this.inputFocusHandler = () => {
      this.activateFocus();
    }, this.inputBlurHandler = () => {
      this.deactivateFocus();
    }, this.inputInputHandler = () => {
      this.handleInput();
    }, this.setPointerXOffset = (r) => {
      this.setTransformOrigin(r);
    }, this.textFieldInteractionHandler = () => {
      this.handleTextFieldInteraction();
    }, this.validationAttributeChangeHandler = (r) => {
      this.handleValidationAttributeChange(r);
    };
  }
  init() {
    this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
    for (const e of ud)
      this.adapter.registerInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of fd)
      this.adapter.registerTextFieldInteractionHandler(e, this.textFieldInteractionHandler);
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
  }
  destroy() {
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    for (const e of ud)
      this.adapter.deregisterInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of fd)
      this.adapter.deregisterTextFieldInteractionHandler(e, this.textFieldInteractionHandler);
    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
  }
  /**
   * Handles user interactions with the Text Field.
   */
  handleTextFieldInteraction() {
    const e = this.adapter.getNativeInput();
    e && e.disabled || (this.receivedUserInput = !0);
  }
  /**
   * Handles validation attribute changes
   */
  handleValidationAttributeChange(e) {
    e.some((n) => Lb.indexOf(n) > -1 ? (this.styleValidity(!0), this.adapter.setLabelRequired(this.getNativeInput().required), !0) : !1), e.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
  }
  /**
   * Opens/closes the notched outline.
   */
  notchOutline(e) {
    if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
      if (e) {
        const n = this.adapter.getLabelWidth() * od.LABEL_SCALE;
        this.adapter.notchOutline(n);
      } else
        this.adapter.closeOutline();
  }
  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
  }
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */
  setTransformOrigin(e) {
    if (this.isDisabled() || this.adapter.hasOutline())
      return;
    const n = e.touches, r = n ? n[0] : e, i = r.target.getBoundingClientRect(), a = r.clientX - i.left;
    this.adapter.setLineRippleTransformOrigin(a);
  }
  /**
   * Handles input change of text input and text area.
   */
  handleInput() {
    this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
  }
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */
  autoCompleteFocus() {
    this.receivedUserInput || this.activateFocus();
  }
  /**
   * Deactivates the Text Field's focus state.
   */
  deactivateFocus() {
    this.isFocused = !1, this.adapter.deactivateLineRipple();
    const e = this.isValid();
    this.styleValidity(e), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
  }
  getValue() {
    return this.getNativeInput().value;
  }
  /**
   * @param value The value to set on the input Element.
   */
  setValue(e) {
    if (this.getValue() !== e && (this.getNativeInput().value = e), this.setcharacterCounter(e.length), this.validateOnValueChange) {
      const n = this.isValid();
      this.styleValidity(n);
    }
    this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
  }
  /**
   * @return The custom validity state, if set; otherwise, the result of a
   *     native validity check.
   */
  isValid() {
    return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
  }
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */
  setValid(e) {
    this.valid = e, this.styleValidity(e);
    const n = !e && !this.isFocused && !!this.getValue();
    this.adapter.hasLabel() && this.adapter.shakeLabel(n);
  }
  /**
   * @param shouldValidate Whether or not validity should be updated on
   *     value change.
   */
  setValidateOnValueChange(e) {
    this.validateOnValueChange = e;
  }
  /**
   * @return Whether or not validity should be updated on value change. `true`
   *     by default.
   */
  getValidateOnValueChange() {
    return this.validateOnValueChange;
  }
  /**
   * Enables or disables the use of native validation. Use this for custom
   * validation.
   * @param useNativeValidation Set this to false to ignore native input
   *     validation.
   */
  setUseNativeValidation(e) {
    this.useNativeValidation = e;
  }
  isDisabled() {
    return this.getNativeInput().disabled;
  }
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */
  setDisabled(e) {
    this.getNativeInput().disabled = e, this.styleDisabled(e);
  }
  /**
   * @param content Sets the content of the helper text.
   */
  setHelperTextContent(e) {
    this.helperText && this.helperText.setContent(e);
  }
  /**
   * Sets the aria label of the leading icon.
   */
  setLeadingIconAriaLabel(e) {
    this.leadingIcon && this.leadingIcon.setAriaLabel(e);
  }
  /**
   * Sets the text content of the leading icon.
   */
  setLeadingIconContent(e) {
    this.leadingIcon && this.leadingIcon.setContent(e);
  }
  /**
   * Sets the aria label of the trailing icon.
   */
  setTrailingIconAriaLabel(e) {
    this.trailingIcon && this.trailingIcon.setAriaLabel(e);
  }
  /**
   * Sets the text content of the trailing icon.
   */
  setTrailingIconContent(e) {
    this.trailingIcon && this.trailingIcon.setContent(e);
  }
  /**
   * Sets character counter values that shows characters used and the total
   * character limit.
   */
  setcharacterCounter(e) {
    if (!this.characterCounter)
      return;
    const n = this.getNativeInput().maxLength;
    if (n === -1)
      throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
    this.characterCounter.setCounterValue(e, n);
  }
  /**
   * @return True if the Text Field input fails in converting the user-supplied
   *     value.
   */
  isBadInput() {
    return this.getNativeInput().validity.badInput || !1;
  }
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */
  isNativeInputValid() {
    return this.getNativeInput().validity.valid;
  }
  /**
   * Styles the component based on the validity state.
   */
  styleValidity(e) {
    const { INVALID: n } = Gr.cssClasses;
    if (e ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
      if (this.helperText.setValidity(e), !this.helperText.isValidation())
        return;
      const i = this.helperText.isVisible(), a = this.helperText.getId();
      i && a ? this.adapter.setInputAttr(Ml.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Ml.ARIA_DESCRIBEDBY);
    }
  }
  /**
   * Styles the component based on the focused state.
   */
  styleFocused(e) {
    const { FOCUSED: n } = Gr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the component based on the disabled state.
   */
  styleDisabled(e) {
    const { DISABLED: n, INVALID: r } = Gr.cssClasses;
    e ? (this.adapter.addClass(n), this.adapter.removeClass(r)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(e), this.trailingIcon && this.trailingIcon.setDisabled(e);
  }
  /**
   * Styles the component based on the label floating state.
   */
  styleFloating(e) {
    const { LABEL_FLOATING: n } = Gr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * @return The native text input element from the host environment, or an
   *     object with the same shape for unit tests.
   */
  getNativeInput() {
    return (this.adapter ? this.adapter.getNativeInput() : null) || {
      disabled: !1,
      maxLength: -1,
      required: !1,
      type: "input",
      validity: {
        badInput: !1,
        valid: !0
      },
      value: ""
    };
  }
}
var Mb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "component",
  "tag",
  "_smuiClass",
  "_smuiClassMap",
  "_smuiContexts",
  "_smuiProps",
  "children"
]);
function _a(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, ti), a = v(e, "tag", 3, "div"), l = v(e, "_smuiClass", 3, ""), o = v(e, "_smuiClassMap", 23, () => ({})), c = v(e, "_smuiContexts", 19, () => ({})), d = v(e, "_smuiProps", 19, () => ({})), u = /* @__PURE__ */ qe(e, Mb), g;
  const f = [];
  Object.entries(o()).forEach(([E, p]) => {
    const y = me(p);
    y && "subscribe" in y && f.push(y.subscribe((A) => {
      o()[E] = A;
    }));
  });
  for (let E in c())
    c().hasOwnProperty(E) && le(E, c()[E]);
  gr(() => {
    for (const E of f)
      E();
  });
  function m() {
    return g.getElement();
  }
  var h = { getElement: m }, _ = ge(), b = ie(_);
  {
    let E = /* @__PURE__ */ de(() => He({
      [l()]: !0,
      ...o(),
      [r()]: !0
    }));
    _r(b, i, (p, y) => {
      ye(
        y(p, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(E);
            }
          },
          d,
          () => u,
          {
            children: (A, x) => {
              var I = ge(), S = ie(I);
              pe(S, () => e.children ?? ve), w(A, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => g = A,
        () => g
      );
    });
  }
  return w(t, _), Re(h);
}
var Pb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Hb(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, Pb), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (l, o) => {
        var c = ge(), d = ie(c);
        pe(d, () => e.children ?? ve), w(l, c);
      },
      $$slots: { default: !0 }
    })),
    (l) => r = l,
    () => r
  ), Re(a);
}
var Ub = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function kb(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, Ub), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (l, o) => {
          var c = ge(), d = ie(c);
          pe(d, () => e.children ?? ve), w(l, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), Re(a);
}
var Bb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Fb(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, Bb), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (l, o) => {
          var c = ge(), d = ie(c);
          pe(d, () => e.children ?? ve), w(l, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), Re(a);
}
var Vb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "type",
  "placeholder",
  "value",
  "files",
  "dirty",
  "invalid",
  "updateInvalid",
  "initialInvalid",
  "emptyValueNull",
  "emptyValueUndefined"
]), Gb = /* @__PURE__ */ he("<input/>");
function jb(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "type", 3, "text"), a = v(e, "placeholder", 3, " "), l = v(e, "value", 15), o = v(e, "files", 15, null), c = v(e, "dirty", 15, !1), d = v(e, "invalid", 15, !1), u = v(e, "updateInvalid", 3, !0), g = v(e, "initialInvalid", 3, !1), f = v(e, "emptyValueNull", 19, () => l() === null), m = v(e, "emptyValueUndefined", 19, () => l() === void 0), h = /* @__PURE__ */ qe(e, Vb), _, b = _e({}), E = _e({});
  De(() => {
    i() === "file" ? delete E.value : E.value = l() == null ? "" : l();
  }), st(() => {
    u() && g() && d(N().matches(":invalid"));
  });
  function p(O) {
    return O === "" ? Number.NaN : +O;
  }
  function y(O) {
    if (i() === "file") {
      o(O.currentTarget.files);
      return;
    }
    if (O.currentTarget.value === "" && f()) {
      l(null);
      return;
    }
    if (O.currentTarget.value === "" && m()) {
      l(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        l(p(O.currentTarget.value));
        break;
      default:
        l(O.currentTarget.value);
        break;
    }
  }
  function A(O) {
    (i() === "file" || i() === "range") && y(O), c(!0), u() && d(N().matches(":invalid"));
  }
  function x(O) {
    return O in b ? b[O] ?? null : N().getAttribute(O);
  }
  function I(O, D) {
    b[O] !== D && (b[O] = D);
  }
  function S(O) {
    (!(O in b) || b[O] != null) && (b[O] = void 0);
  }
  function C() {
    N().focus();
  }
  function T() {
    N().blur();
  }
  function N() {
    return _;
  }
  var $ = { getAttr: x, addAttr: I, removeAttr: S, focus: C, blur: T, getElement: N }, q = Gb(), X = (O) => {
    var D;
    i() !== "file" && y(O), (D = e.oninput) == null || D.call(e, O);
  }, R = (O) => {
    var D;
    A(O), (D = e.onchange) == null || D.call(e, O);
  };
  return je(
    q,
    (O) => ({
      class: O,
      type: i(),
      placeholder: a(),
      ...E,
      ...b,
      ...h,
      oninput: X,
      onchange: R
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), ye(q, (O) => _ = O, () => _), Fe(q, (O, D) => Z == null ? void 0 : Z(O, D), n), w(t, q), Re($);
}
var Wb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "value",
  "dirty",
  "invalid",
  "updateInvalid",
  "initialInvalid",
  "resizable"
]), qb = /* @__PURE__ */ he("<textarea></textarea>");
function Kb(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "value", 15, ""), l = v(e, "dirty", 15, !1), o = v(e, "invalid", 15, !1), c = v(e, "updateInvalid", 3, !0), d = v(e, "initialInvalid", 3, !1), u = v(e, "resizable", 3, !0), g = /* @__PURE__ */ qe(e, Wb), f, m = _e({});
  st(() => {
    c() && d() && o(A().matches(":invalid"));
  });
  function h() {
    l(!0), c() && o(A().matches(":invalid"));
  }
  function _(C) {
    return C in m ? m[C] ?? null : A().getAttribute(C);
  }
  function b(C, T) {
    m[C] !== T && (m[C] = T);
  }
  function E(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
  }
  function p() {
    A().focus();
  }
  function y() {
    A().blur();
  }
  function A() {
    return f;
  }
  var x = { getAttr: _, addAttr: b, removeAttr: E, focus: p, blur: y, getElement: A }, I = qb(), S = (C) => {
    var T;
    h(), (T = e.onchange) == null || T.call(e, C);
  };
  return je(
    I,
    (C) => ({
      class: C,
      style: `${u() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...g,
      onchange: S
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), ye(I, (C) => f = C, () => f), Fe(I, (C, T) => Z == null ? void 0 : Z(C, T), n), xi(() => Ja(I, a)), w(t, I), Re(x);
}
var zb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "ripple",
  "disabled",
  "required",
  "textarea",
  "variant",
  "noLabel",
  "label",
  "type",
  "value",
  "files",
  "invalid",
  "updateInvalid",
  "initialInvalid",
  "dirty",
  "prefix",
  "suffix",
  "validateOnValueChange",
  "useNativeValidation",
  "withLeadingIcon",
  "withTrailingIcon",
  "input",
  "floatingLabel",
  "lineRipple",
  "notchedOutline",
  "children",
  "leadingIcon",
  "trailingIcon",
  "internalCounter",
  "line",
  "helper"
]), Xb = /* @__PURE__ */ he('<span class="mdc-text-field__ripple"></span>'), hd = /* @__PURE__ */ he("<!> <!>", 1), Yb = /* @__PURE__ */ he("<span><!> <!></span>"), Zb = /* @__PURE__ */ he("<!> <!> <!>", 1), Qb = /* @__PURE__ */ he("<label><!> <!> <!> <!> <!> <!> <!></label>"), Jb = /* @__PURE__ */ he("<div><!> <!> <!> <!> <!></div>");
function yo(t, e) {
  Oe(e, !0);
  const { applyPassive: n } = Gf;
  let r = () => {
  };
  function i(ne) {
    return ne === r;
  }
  let a = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), o = v(e, "style", 3, ""), c = v(e, "ripple", 3, !0), d = v(e, "disabled", 3, !1), u = v(e, "required", 3, !1), g = v(e, "textarea", 3, !1), f = v(e, "variant", 19, () => g() ? "outlined" : "standard"), m = v(e, "noLabel", 3, !1), h = v(e, "type", 3, "text"), _ = v(e, "value", 15), b = v(e, "files", 15, r), E = v(e, "invalid", 15, r), p = v(e, "updateInvalid", 19, () => i(E())), y = v(e, "initialInvalid", 3, !1), A = v(e, "dirty", 15, !1), x = v(e, "validateOnValueChange", 19, p), I = v(e, "useNativeValidation", 19, p), S = v(e, "withLeadingIcon", 3, r), C = v(e, "withTrailingIcon", 3, r), T = v(e, "input", 7), N = v(e, "floatingLabel", 7), $ = v(e, "lineRipple", 7), q = v(e, "notchedOutline", 7), X = /* @__PURE__ */ qe(e, zb);
  const R = _() !== void 0 || _() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(E()) && E(!1);
  let O, D = /* @__PURE__ */ fe(void 0), K = new $r(), F = _e({}), G = _e({}), H = /* @__PURE__ */ fe(void 0), j = /* @__PURE__ */ fe(!1), U = /* @__PURE__ */ fe(_e(y())), ae = me("SMUI:addLayoutListener"), we, W, z = new Promise((ne) => W = ne), L, Y, M, ee;
  const oe = /* @__PURE__ */ de(() => T() && T().getElement());
  De(() => {
    (A() || s(U) || !p()) && s(D) && s(D).isValid() !== !E() && (p() ? E(!s(D).isValid()) : s(D).setValid(!E()));
  }), De(() => {
    s(D) && s(D).getValidateOnValueChange() !== x() && s(D).setValidateOnValueChange(i(x()) ? !1 : x());
  }), De(() => {
    s(D) && s(D).setUseNativeValidation(i(I()) ? !0 : I());
  }), De(() => {
    s(D) && s(D).setDisabled(d());
  });
  let Q = _();
  De(() => {
    if (s(D) && R && Q !== _()) {
      Q = _();
      const ne = `${_() == null ? "" : _()}`;
      s(D).getValue() !== ne && s(D).setValue(ne);
    }
  }), ae && (we = ae(k)), le("SMUI:textfield:leading-icon:mount", (ne) => {
    L = ne;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    L = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (ne) => {
    Y = ne;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    Y = void 0;
  }), le("SMUI:textfield:helper-text:id", (ne) => {
    V(H, ne, !0);
  }), le("SMUI:textfield:helper-text:mount", (ne) => {
    M = ne;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    V(H, void 0), M = void 0;
  }), le("SMUI:textfield:character-counter:mount", (ne) => {
    ee = ne;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    ee = void 0;
  }), st(() => {
    var ne;
    if (V(
      D,
      new Gr(
        {
          // getRootAdapterMethods_
          addClass: Ce,
          removeClass: Ne,
          hasClass: re,
          registerTextFieldInteractionHandler: (se, Ve) => K.on(J(), se, Ve),
          deregisterTextFieldInteractionHandler: (se, Ve) => K.off(J(), se, Ve),
          registerValidationAttributeChangeHandler: (se) => {
            const Ve = (mt) => mt.map((Yt) => Yt.attributeName).filter((Yt) => Yt), te = new MutationObserver((mt) => {
              I() && se(Ve(mt));
            }), xe = { attributes: !0 };
            return T() && te.observe(T().getElement(), xe), te;
          },
          deregisterValidationAttributeChangeHandler: (se) => {
            se.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var se;
            return ((se = T()) == null ? void 0 : se.getElement()) ?? null;
          },
          setInputAttr: (se, Ve) => {
            var te;
            (te = T()) == null || te.addAttr(se, Ve);
          },
          removeInputAttr: (se) => {
            var Ve;
            (Ve = T()) == null || Ve.removeAttr(se);
          },
          isFocused: () => {
            var se;
            return document.activeElement === ((se = T()) == null ? void 0 : se.getElement());
          },
          registerInputInteractionHandler: (se, Ve) => {
            var xe;
            const te = (xe = T()) == null ? void 0 : xe.getElement();
            if (te) {
              const mt = n();
              K.on(te, se, Ve, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (se, Ve) => {
            var xe;
            const te = (xe = T()) == null ? void 0 : xe.getElement();
            te && K.off(te, se, Ve);
          },
          // getLabelAdapterMethods_
          floatLabel: (se) => N() && N().float(se),
          getLabelWidth: () => N() ? N().getWidth() : 0,
          hasLabel: () => !!N(),
          shakeLabel: (se) => N() && N().shake(se),
          setLabelRequired: (se) => N() && N().setRequired(se),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => $() && $().activate(),
          deactivateLineRipple: () => $() && $().deactivate(),
          setLineRippleTransformOrigin: (se) => $() && $().setRippleCenter(se),
          // getOutlineAdapterMethods_
          closeOutline: () => q() && q().closeNotch(),
          hasOutline: () => !!q(),
          notchOutline: (se) => q() && q().notch(se)
        },
        {
          get helperText() {
            return M;
          },
          get characterCounter() {
            return ee;
          },
          get leadingIcon() {
            return L;
          },
          get trailingIcon() {
            return Y;
          }
        }
      ),
      !0
    ), R) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (ne = s(D)) == null || ne.init();
    } else
      Ju().then(() => {
        var se;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (se = s(D)) == null || se.init();
      });
    return W(), () => {
      var se;
      (se = s(D)) == null || se.destroy(), V(D, void 0), K.clear();
    };
  }), gr(() => {
    we && we();
  });
  function re(ne) {
    return ne in F ? F[ne] ?? null : J().classList.contains(ne);
  }
  function Ce(ne) {
    F[ne] || (F[ne] = !0);
  }
  function Ne(ne) {
    (!(ne in F) || F[ne]) && (F[ne] = !1);
  }
  function ke(ne, se) {
    G[ne] != se && (se === "" || se == null ? delete G[ne] : G[ne] = se);
  }
  function Me() {
    var ne;
    (ne = T()) == null || ne.focus();
  }
  function Le() {
    var ne;
    (ne = T()) == null || ne.blur();
  }
  function k() {
    if (s(D)) {
      const ne = s(D).shouldFloat;
      s(D).notchOutline(ne);
    }
  }
  function J() {
    return O;
  }
  var ce = { focus: Me, blur: Le, layout: k, getElement: J }, Ue = hd(), We = ie(Ue);
  {
    var It = (ne) => {
      var se = Qb();
      je(se, (tt, gt, dt) => ({ class: tt, style: gt, for: void 0, ...dt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": g(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !g(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(j) || _() != null && _() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? e.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": g() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...F,
          [l()]: !0
        }),
        () => Object.entries(G).map(([tt, gt]) => `${tt}: ${gt};`).concat([o()]).join(" "),
        () => Yn(X, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ve = Ie(se);
      {
        var te = (tt) => {
          var gt = hd(), dt = ie(gt);
          {
            var Qt = (Ht) => {
              var Gt = Xb();
              w(Ht, Gt);
            };
            Se(dt, (Ht) => {
              f() === "filled" && Ht(Qt);
            });
          }
          var Hn = ue(dt, 2);
          {
            var _t = (Ht) => {
              {
                let Gt = /* @__PURE__ */ de(() => s(j) || _() != null && _() !== "" && (typeof _() != "number" || !isNaN(_()))), ct = /* @__PURE__ */ de(() => lt(X, "label$"));
                ye(
                  $s(Ht, rt(
                    {
                      get floatAbove() {
                        return s(Gt);
                      },
                      get required() {
                        return u();
                      },
                      wrapped: !0
                    },
                    () => s(ct),
                    {
                      children: (jt, pr) => {
                        var yn = ge(), Ut = ie(yn);
                        {
                          var Jt = (mn) => {
                          }, Cn = (mn) => {
                            var Tn = bt();
                            Ae(() => Ze(Tn, e.label)), w(mn, Tn);
                          }, Un = (mn) => {
                            var Tn = ge(), un = ie(Tn);
                            pe(un, () => e.label), w(mn, Tn);
                          };
                          Se(Ut, (mn) => {
                            e.label == null ? mn(Jt) : typeof e.label == "string" ? mn(Cn, 1) : mn(Un, -1);
                          });
                        }
                        w(jt, yn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (jt) => N(jt),
                  () => N()
                );
              }
            };
            Se(Hn, (Ht) => {
              !m() && e.label != null && Ht(_t);
            });
          }
          w(tt, gt);
        };
        Se(Ve, (tt) => {
          !g() && f() !== "outlined" && tt(te);
        });
      }
      var xe = ue(Ve, 2);
      {
        var mt = (tt) => {
          {
            let gt = /* @__PURE__ */ de(() => m() || e.label == null), dt = /* @__PURE__ */ de(() => lt(X, "outline$"));
            ye(
              qf(tt, rt(
                {
                  get noLabel() {
                    return s(gt);
                  }
                },
                () => s(dt),
                {
                  children: (Qt, Hn) => {
                    var _t = ge(), Ht = ie(_t);
                    {
                      var Gt = (ct) => {
                        {
                          let jt = /* @__PURE__ */ de(() => s(j) || _() != null && _() !== "" && (typeof _() != "number" || !isNaN(_()))), pr = /* @__PURE__ */ de(() => lt(X, "label$"));
                          ye(
                            $s(ct, rt(
                              {
                                get floatAbove() {
                                  return s(jt);
                                },
                                get required() {
                                  return u();
                                },
                                wrapped: !0
                              },
                              () => s(pr),
                              {
                                children: (yn, Ut) => {
                                  var Jt = ge(), Cn = ie(Jt);
                                  {
                                    var Un = (un) => {
                                    }, mn = (un) => {
                                      var ri = bt();
                                      Ae(() => Ze(ri, e.label)), w(un, ri);
                                    }, Tn = (un) => {
                                      var ri = ge(), Ea = ie(ri);
                                      pe(Ea, () => e.label), w(un, ri);
                                    };
                                    Se(Cn, (un) => {
                                      e.label == null ? un(Un) : typeof e.label == "string" ? un(mn, 1) : un(Tn, -1);
                                    });
                                  }
                                  w(yn, Jt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (yn) => N(yn),
                            () => N()
                          );
                        }
                      };
                      Se(Ht, (ct) => {
                        !m() && e.label != null && ct(Gt);
                      });
                    }
                    w(Qt, _t);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Qt) => q(Qt),
              () => q()
            );
          }
        };
        Se(xe, (tt) => {
          (g() || f() === "outlined") && tt(mt);
        });
      }
      var Yt = ue(xe, 2);
      ws(Yt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (tt, gt) => {
          var dt = ge(), Qt = ie(dt);
          pe(Qt, () => e.leadingIcon ?? ve), w(tt, dt);
        },
        $$slots: { default: !0 }
      });
      var Pr = ue(Yt, 2);
      pe(Pr, () => e.children ?? ve);
      var St = ue(Pr, 2);
      {
        var Ft = (tt) => {
          var gt = Yb(), dt = Ie(gt);
          {
            let Hn = /* @__PURE__ */ de(() => lt(X, "input$"));
            ye(
              Kb(dt, rt(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return p();
                  },
                  get initialInvalid() {
                    return s(U);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => s(Hn),
                {
                  onblur: (_t) => {
                    var Ht;
                    V(j, !1), V(U, !0), Qe(J(), "blur", _t), (Ht = e.input$onblur) == null || Ht.call(e, _t);
                  },
                  onfocus: (_t) => {
                    var Ht;
                    V(j, !0), Qe(J(), "focus", _t), (Ht = e.input$onfocus) == null || Ht.call(e, _t);
                  },
                  get value() {
                    return _();
                  },
                  set value(_t) {
                    _(_t);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(_t) {
                    A(_t);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(_t) {
                    E(_t);
                  }
                }
              )),
              (_t) => T(_t),
              () => T()
            );
          }
          var Qt = ue(dt, 2);
          pe(Qt, () => e.internalCounter ?? ve), Ae((Hn) => Qa(gt, 1, Hn), [
            () => Ys(He({
              "mdc-text-field__resizer": !("input$resizable" in X) || e.input$resizable
            }))
          ]), w(tt, gt);
        }, Zt = (tt) => {
          var gt = Zb(), dt = ie(gt);
          {
            var Qt = (Gt) => {
              var ct = ge(), jt = ie(ct);
              {
                var pr = (Ut) => {
                  kb(Ut, {
                    children: (Jt, Cn) => {
                      var Un = bt();
                      Ae(() => Ze(Un, e.prefix)), w(Jt, Un);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (Ut) => {
                  var Jt = ge(), Cn = ie(Jt);
                  pe(Cn, () => e.prefix ?? ve), w(Ut, Jt);
                };
                Se(jt, (Ut) => {
                  typeof e.prefix == "string" ? Ut(pr) : Ut(yn, -1);
                });
              }
              w(Gt, ct);
            };
            Se(dt, (Gt) => {
              e.prefix != null && Gt(Qt);
            });
          }
          var Hn = ue(dt, 2);
          {
            let Gt = /* @__PURE__ */ de(() => lt(X, "input$"));
            ye(
              jb(Hn, rt(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return p();
                  },
                  get initialInvalid() {
                    return s(U);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Gt),
                {
                  onblur: (ct) => {
                    var jt;
                    V(j, !1), V(U, !0), Qe(J(), "blur", ct), (jt = e.input$onblur) == null || jt.call(e, ct);
                  },
                  onfocus: (ct) => {
                    var jt;
                    V(j, !0), Qe(J(), "focus", ct), (jt = e.input$onfocus) == null || jt.call(e, ct);
                  },
                  get value() {
                    return _();
                  },
                  set value(ct) {
                    _(ct);
                  },
                  get files() {
                    return b();
                  },
                  set files(ct) {
                    b(ct);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(ct) {
                    A(ct);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(ct) {
                    E(ct);
                  }
                }
              )),
              (ct) => T(ct),
              () => T()
            );
          }
          var _t = ue(Hn, 2);
          {
            var Ht = (Gt) => {
              var ct = ge(), jt = ie(ct);
              {
                var pr = (Ut) => {
                  Fb(Ut, {
                    children: (Jt, Cn) => {
                      var Un = bt();
                      Ae(() => Ze(Un, e.suffix)), w(Jt, Un);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (Ut) => {
                  var Jt = ge(), Cn = ie(Jt);
                  pe(Cn, () => e.suffix ?? ve), w(Ut, Jt);
                };
                Se(jt, (Ut) => {
                  typeof e.suffix == "string" ? Ut(pr) : Ut(yn, -1);
                });
              }
              w(Gt, ct);
            };
            Se(_t, (Gt) => {
              e.suffix != null && Gt(Ht);
            });
          }
          w(tt, gt);
        };
        Se(St, (tt) => {
          g() && typeof _() == "string" ? tt(Ft) : tt(Zt, -1);
        });
      }
      var $n = ue(St, 2);
      ws($n, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (tt, gt) => {
          var dt = ge(), Qt = ie(dt);
          pe(Qt, () => e.trailingIcon ?? ve), w(tt, dt);
        },
        $$slots: { default: !0 }
      });
      var at = ue($n, 2);
      {
        var Hr = (tt) => {
          {
            let gt = /* @__PURE__ */ de(() => lt(X, "ripple$"));
            ye(Wf(tt, rt(() => s(gt))), (dt) => $(dt), () => $());
          }
        };
        Se(at, (tt) => {
          !g() && f() !== "outlined" && c() && tt(Hr);
        });
      }
      ye(se, (tt) => O = tt, () => O), Fe(se, (tt, gt) => en == null ? void 0 : en(tt, gt), () => ({
        ripple: !g() && f() === "filled",
        unbounded: !1,
        addClass: Ce,
        removeClass: Ne,
        addStyle: ke,
        eventTarget: s(oe),
        activeTarget: s(oe),
        initPromise: z
      })), Fe(se, (tt, gt) => Z == null ? void 0 : Z(tt, gt), a), w(ne, se);
    }, dn = (ne) => {
      var se = Jb();
      je(se, (St, Ft, Zt) => ({ class: St, style: Ft, ...Zt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": g(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !g(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...F,
          [l()]: !0
        }),
        () => Object.entries(G).map(([St, Ft]) => `${St}: ${Ft};`).concat([o()]).join(" "),
        () => Yn(X, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ve = Ie(se);
      {
        var te = (St) => {
          var Ft = ge(), Zt = ie(Ft);
          pe(Zt, () => e.label ?? ve), w(St, Ft);
        };
        Se(Ve, (St) => {
          typeof e.label != "string" && St(te);
        });
      }
      var xe = ue(Ve, 2);
      ws(xe, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (St, Ft) => {
          var Zt = ge(), $n = ie(Zt);
          pe($n, () => e.leadingIcon ?? ve), w(St, Zt);
        },
        $$slots: { default: !0 }
      });
      var mt = ue(xe, 2);
      pe(mt, () => e.children ?? ve);
      var Yt = ue(mt, 2);
      ws(Yt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (St, Ft) => {
          var Zt = ge(), $n = ie(Zt);
          pe($n, () => e.trailingIcon ?? ve), w(St, Zt);
        },
        $$slots: { default: !0 }
      });
      var Pr = ue(Yt, 2);
      pe(Pr, () => e.line ?? ve), ye(se, (St) => O = St, () => O), Fe(se, (St, Ft) => en == null ? void 0 : en(St, Ft), () => ({
        ripple: c(),
        unbounded: !1,
        addClass: Ce,
        removeClass: Ne,
        addStyle: ke
      })), Fe(se, (St, Ft) => Z == null ? void 0 : Z(St, Ft), a), w(ne, se);
    };
    Se(We, (ne) => {
      R ? ne(It) : ne(dn, -1);
    });
  }
  var be = ue(We, 2);
  {
    var Te = (ne) => {
      {
        let se = /* @__PURE__ */ de(() => lt(X, "helperLine$"));
        Hb(ne, rt(() => s(se), {
          children: (Ve, te) => {
            var xe = ge(), mt = ie(xe);
            pe(mt, () => e.helper ?? ve), w(Ve, xe);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Se(be, (ne) => {
      e.helper && ne(Te);
    });
  }
  return w(t, Ue), Re(ce);
}
var $b = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "role",
  "tabindex",
  "disabled",
  "children"
]), eE = /* @__PURE__ */ he("<i><!></i>");
function tE(t, e) {
  Oe(e, !0);
  const n = () => zn(h, "$leadingStore", r), [r, i] = br();
  let a = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), o = v(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), c = v(e, "disabled", 3, !1), d = /* @__PURE__ */ qe(e, $b), u, g = /* @__PURE__ */ fe(void 0), f = new $r(), m = _e({});
  const h = me("SMUI:textfield:icon:leading"), _ = n();
  let b = /* @__PURE__ */ fe(void 0);
  const E = /* @__PURE__ */ de(() => ({ role: e.role, tabindex: o() })), p = me("SMUI:textfield:leading-icon:mount"), y = me("SMUI:textfield:leading-icon:unmount"), A = me("SMUI:textfield:trailing-icon:mount"), x = me("SMUI:textfield:trailing-icon:unmount");
  st(() => (V(
    g,
    new ec({
      getAttr: I,
      setAttr: S,
      removeAttr: C,
      setContent: (D) => {
        V(b, D, !0);
      },
      registerInteractionHandler: (D, K) => f.on(T(), D, K),
      deregisterInteractionHandler: (D, K) => f.off(T(), D, K),
      notifyIconAction: () => Qe(T(), "SMUITextFieldIcon")
    }),
    !0
  ), _ ? p && p(s(g)) : A && A(s(g)), s(g).init(), () => {
    var D;
    s(g) && (_ ? y && y(s(g)) : x && x(s(g))), (D = s(g)) == null || D.destroy(), V(g, void 0), f.clear();
  }));
  function I(D) {
    return D in m ? m[D] ?? null : T().getAttribute(D);
  }
  function S(D, K) {
    m[D] !== K && (m[D] = K);
  }
  function C(D) {
    (!(D in m) || m[D] != null) && (m[D] = void 0);
  }
  function T() {
    return u;
  }
  var N = { getElement: T }, $ = eE();
  je(
    $,
    (D) => ({
      class: D,
      "aria-hidden": o() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? c() ? "true" : "false" : void 0,
      ...s(E),
      ...m,
      ...d
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": _,
        "mdc-text-field__icon--trailing": !_,
        [l()]: !0
      })
    ]
  );
  var q = Ie($);
  {
    var X = (D) => {
      var K = ge(), F = ie(K);
      pe(F, () => e.children ?? ve), w(D, K);
    }, R = (D) => {
      var K = bt();
      Ae(() => Ze(K, s(b))), w(D, K);
    };
    Se(q, (D) => {
      s(b) == null ? D(X) : D(R, -1);
    });
  }
  ye($, (D) => u = D, () => u), Fe($, (D, K) => Z == null ? void 0 : Z(D, K), a), w(t, $);
  var O = Re(N);
  return i(), O;
}
function nE(t, e) {
  Oe(e, !0);
  let n = v(e, "placeholder", 3, ""), r = v(e, "label", 3, ""), i = v(e, "icon", 3, ""), a = v(e, "value", 15, ""), l = v(e, "variant", 3, "standard"), o = v(e, "styles", 3, ""), c = v(e, "required", 3, !1), d = v(e, "invalid", 3, !1), u = v(e, "oninput", 3, () => {
  });
  var g = ge(), f = ie(g);
  {
    var m = (_) => {
      {
        const b = (p) => {
          tE(p, {
            class: "material-icons",
            children: (y, A) => {
              var x = bt();
              Ae(() => Ze(x, i())), w(y, x);
            },
            $$slots: { default: !0 }
          });
        };
        let E = /* @__PURE__ */ de(() => `width: 100%; ${o()}`);
        yo(_, {
          get label() {
            return r();
          },
          get required() {
            return c();
          },
          get invalid() {
            return d();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(E);
          },
          get variant() {
            return l();
          },
          get oninput() {
            return u();
          },
          get value() {
            return a();
          },
          set value(p) {
            a(p);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (_) => {
      yo(_, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return l();
        },
        get required() {
          return c();
        },
        get invalid() {
          return d();
        },
        get oninput() {
          return u();
        },
        get value() {
          return a();
        },
        set value(b) {
          a(b);
        }
      });
    };
    Se(f, (_) => {
      i() ? _(m) : _(h, -1);
    });
  }
  w(t, g), Re();
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const vd = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function rE(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function iE(t, e) {
  if (rE(t) && e in vd) {
    const n = t.document.createElement("div"), { standard: r, prefixed: i } = vd[e];
    return r in n.style ? r : i;
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const aE = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, sE = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, xa = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
};
var xt;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(xt || (xt = {}));
var Ii;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Ii || (Ii = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class qt extends Ot {
  static get cssClasses() {
    return aE;
  }
  static get strings() {
    return sE;
  }
  static get numbers() {
    return xa;
  }
  static get Corner() {
    return Ii;
  }
  /**
   * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      hasAnchor: () => !1,
      isElementInContainer: () => !1,
      isFocused: () => !1,
      isRtl: () => !1,
      getInnerDimensions: () => ({ height: 0, width: 0 }),
      getAnchorDimensions: () => null,
      getViewportDimensions: () => ({ height: 0, width: 0 }),
      getBodyDimensions: () => ({ height: 0, width: 0 }),
      getWindowScroll: () => ({ x: 0, y: 0 }),
      setPosition: () => {
      },
      setMaxHeight: () => {
      },
      setTransformOrigin: () => {
      },
      saveFocus: () => {
      },
      restoreFocus: () => {
      },
      notifyClose: () => {
      },
      notifyClosing: () => {
      },
      notifyOpen: () => {
      },
      notifyOpening: () => {
      },
      registerWindowEventHandler: () => {
      },
      deregisterWindowEventHandler: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, qt.defaultAdapter), e)), this.isSurfaceOpen = !1, this.isQuickOpen = !1, this.isHoistedElement = !1, this.isFixedPosition = !1, this.isHorizontallyCenteredOnViewport = !1, this.maxHeight = 0, this.openBottomBias = 0, this.openAnimationEndTimerId = 0, this.closeAnimationEndTimerId = 0, this.animationRequestId = 0, this.anchorCorner = Ii.TOP_START, this.originCorner = Ii.TOP_START, this.anchorMargin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, this.position = { x: 0, y: 0 };
  }
  init() {
    const { ROOT: e, OPEN: n } = qt.cssClasses;
    if (!this.adapter.hasClass(e))
      throw new Error(`${e} class required in root element.`);
    this.adapter.hasClass(n) && (this.isSurfaceOpen = !0), this.resizeListener = this.handleResize.bind(this), this.adapter.registerWindowEventHandler("resize", this.resizeListener);
  }
  destroy() {
    clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId), this.adapter.deregisterWindowEventHandler("resize", this.resizeListener);
  }
  /**
   * @param corner Default anchor corner alignment of top-left menu surface
   *     corner.
   */
  setAnchorCorner(e) {
    this.anchorCorner = e;
  }
  /**
   * Flip menu corner horizontally.
   */
  flipCornerHorizontally() {
    this.originCorner = this.originCorner ^ xt.RIGHT;
  }
  /**
   * @param margin Set of margin values from anchor.
   */
  setAnchorMargin(e) {
    this.anchorMargin.top = e.top || 0, this.anchorMargin.right = e.right || 0, this.anchorMargin.bottom = e.bottom || 0, this.anchorMargin.left = e.left || 0;
  }
  /** Used to indicate if the menu-surface is hoisted to the body. */
  setIsHoisted(e) {
    this.isHoistedElement = e;
  }
  /**
   * Used to set the menu-surface calculations based on a fixed position menu.
   */
  setFixedPosition(e) {
    this.isFixedPosition = e;
  }
  /**
   * @return Returns true if menu is in fixed (`position: fixed`) position.
   */
  isFixed() {
    return this.isFixedPosition;
  }
  /** Sets the menu-surface position on the page. */
  setAbsolutePosition(e, n) {
    this.position.x = this.isFinite(e) ? e : 0, this.position.y = this.isFinite(n) ? n : 0;
  }
  /** Sets whether menu-surface should be horizontally centered to viewport. */
  setIsHorizontallyCenteredOnViewport(e) {
    this.isHorizontallyCenteredOnViewport = e;
  }
  setQuickOpen(e) {
    this.isQuickOpen = e;
  }
  /**
   * Sets maximum menu-surface height on open.
   * @param maxHeight The desired max-height. Set to 0 (default) to
   *     automatically calculate max height based on available viewport space.
   */
  setMaxHeight(e) {
    this.maxHeight = e;
  }
  /**
   * Set to a positive integer to influence the menu to preferentially open
   * below the anchor instead of above.
   * @param bias A value of `x` simulates an extra `x` pixels of available space
   *     below the menu during positioning calculations.
   */
  setOpenBottomBias(e) {
    this.openBottomBias = e;
  }
  isOpen() {
    return this.isSurfaceOpen;
  }
  /**
   * Open the menu surface.
   */
  open() {
    this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(qt.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(qt.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(() => {
      this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.addClass(qt.cssClasses.OPEN), this.openAnimationEndTimerId = setTimeout(() => {
        this.openAnimationEndTimerId = 0, this.adapter.removeClass(qt.cssClasses.ANIMATING_OPEN), this.adapter.notifyOpen();
      }, xa.TRANSITION_OPEN_DURATION);
    }), this.isSurfaceOpen = !0), this.adapter.registerWindowEventHandler("resize", this.resizeListener));
  }
  /**
   * Closes the menu surface.
   */
  close(e = !1) {
    if (this.isSurfaceOpen) {
      if (this.adapter.notifyClosing(), this.adapter.deregisterWindowEventHandler("resize", this.resizeListener), this.isQuickOpen) {
        this.isSurfaceOpen = !1, e || this.maybeRestoreFocus(), this.adapter.removeClass(qt.cssClasses.OPEN), this.adapter.removeClass(qt.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(qt.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(() => {
        this.adapter.removeClass(qt.cssClasses.OPEN), this.adapter.removeClass(qt.cssClasses.IS_OPEN_BELOW), this.closeAnimationEndTimerId = setTimeout(() => {
          this.closeAnimationEndTimerId = 0, this.adapter.removeClass(qt.cssClasses.ANIMATING_CLOSED), this.adapter.notifyClose();
        }, xa.TRANSITION_CLOSE_DURATION);
      }), this.isSurfaceOpen = !1, e || this.maybeRestoreFocus();
    }
  }
  /** Handle clicks and close if not within menu-surface element. */
  handleBodyClick(e) {
    const n = e.target;
    this.adapter.isElementInContainer(n) || this.close();
  }
  /** Handle keys that close the surface. */
  handleKeydown(e) {
    const { keyCode: n, key: r } = e;
    (r === "Escape" || n === 27) && this.close();
  }
  /** Handles resize events on the window. */
  handleResize() {
    this.dimensions = this.adapter.getInnerDimensions(), this.autoposition();
  }
  autoposition() {
    this.measurements = this.getAutoLayoutmeasurements();
    const e = this.getoriginCorner(), n = this.getMenuSurfaceMaxHeight(e), r = this.hasBit(e, xt.BOTTOM) ? "bottom" : "top";
    let i = this.hasBit(e, xt.RIGHT) ? "right" : "left";
    const a = this.getHorizontalOriginOffset(e), l = this.getVerticalOriginOffset(e), { anchorSize: o, surfaceSize: c } = this.measurements, d = {
      [i]: a,
      [r]: l
    };
    o.width / c.width > xa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (i = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(`${i} ${r}`), this.adapter.setPosition(d), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(e, xt.BOTTOM) || this.adapter.addClass(qt.cssClasses.IS_OPEN_BELOW);
  }
  /**
   * @return Measurements used to position menu surface popup.
   */
  getAutoLayoutmeasurements() {
    let e = this.adapter.getAnchorDimensions();
    const n = this.adapter.getBodyDimensions(), r = this.adapter.getViewportDimensions(), i = this.adapter.getWindowScroll();
    return e || (e = {
      top: this.position.y,
      right: this.position.x,
      bottom: this.position.y,
      left: this.position.x,
      width: 0,
      height: 0
    }), {
      anchorSize: e,
      bodySize: n,
      surfaceSize: this.dimensions,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: e.top,
        right: r.width - e.right,
        bottom: r.height - e.bottom,
        left: e.left
        // tslint:enable:object-literal-sort-keys
      },
      viewportSize: r,
      windowScroll: i
    };
  }
  /**
   * Computes the corner of the anchor from which to animate and position the
   * menu surface.
   *
   * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
   * context. E.g., menu surface will be positioned from right side on TOP_END.
   */
  getoriginCorner() {
    let e = this.originCorner;
    const { viewportDistance: n, anchorSize: r, surfaceSize: i } = this.measurements, { MARGIN_TO_EDGE: a } = qt.numbers, l = this.hasBit(this.anchorCorner, xt.BOTTOM);
    let o, c;
    l ? (o = n.top - a + this.anchorMargin.bottom, c = n.bottom - a - this.anchorMargin.bottom) : (o = n.top - a + this.anchorMargin.top, c = n.bottom - a + r.height - this.anchorMargin.top), !(c - i.height > 0) && o > c + this.openBottomBias && (e = this.setBit(e, xt.BOTTOM));
    const u = this.adapter.isRtl(), g = this.hasBit(this.anchorCorner, xt.FLIP_RTL), f = this.hasBit(this.anchorCorner, xt.RIGHT) || this.hasBit(e, xt.RIGHT);
    let m = !1;
    u && g ? m = !f : m = f;
    let h, _;
    m ? (h = n.left + r.width + this.anchorMargin.left, _ = n.right - this.anchorMargin.left) : (h = n.left + this.anchorMargin.left, _ = n.right + r.width - this.anchorMargin.left);
    const b = h - i.width > 0, E = _ - i.width > 0, p = this.hasBit(e, xt.FLIP_RTL) && this.hasBit(e, xt.RIGHT);
    return E && p && u || !b && p ? e = this.unsetBit(e, xt.RIGHT) : (b && m && u || b && !m && f || !E && h >= _) && (e = this.setBit(e, xt.RIGHT)), e;
  }
  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0
   *     indicates should not be set.
   */
  getMenuSurfaceMaxHeight(e) {
    if (this.maxHeight > 0)
      return this.maxHeight;
    const { viewportDistance: n } = this.measurements;
    let r = 0;
    const i = this.hasBit(e, xt.BOTTOM), a = this.hasBit(this.anchorCorner, xt.BOTTOM), { MARGIN_TO_EDGE: l } = qt.numbers;
    return i ? (r = n.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
  }
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  getHorizontalOriginOffset(e) {
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, xt.RIGHT), i = this.hasBit(this.anchorCorner, xt.RIGHT);
    if (r) {
      const a = i ? n.width - this.anchorMargin.left : this.anchorMargin.right;
      return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
    }
    return i ? n.width - this.anchorMargin.right : this.anchorMargin.left;
  }
  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  getVerticalOriginOffset(e) {
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, xt.BOTTOM), i = this.hasBit(this.anchorCorner, xt.BOTTOM);
    let a = 0;
    return r ? a = i ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = i ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
  }
  /**
   * Calculates the offsets for positioning the menu-surface when the
   * menu-surface has been hoisted to the body.
   */
  adjustPositionForHoistedElement(e) {
    const { windowScroll: n, viewportDistance: r, surfaceSize: i, viewportSize: a } = this.measurements, l = Object.keys(e);
    for (const o of l) {
      let c = e[o] || 0;
      if (this.isHorizontallyCenteredOnViewport && (o === "left" || o === "right")) {
        e[o] = (a.width - i.width) / 2;
        continue;
      }
      c += r[o], this.isFixedPosition || (o === "top" ? c += n.y : o === "bottom" ? c -= n.y : o === "left" ? c += n.x : c -= n.x), e[o] = c;
    }
  }
  /**
   * The last focused element when the menu surface was opened should regain
   * focus, if the user is focused on or within the menu surface when it is
   * closed.
   */
  maybeRestoreFocus() {
    const e = this.adapter.isFocused(), n = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, r = n.activeElement && this.adapter.isElementInContainer(n.activeElement);
    (e || r) && setTimeout(() => {
      this.adapter.restoreFocus();
    }, xa.TOUCH_EVENT_WAIT_MS);
  }
  hasBit(e, n) {
    return !!(e & n);
  }
  setBit(e, n) {
    return e | n;
  }
  unsetBit(e, n) {
    return e ^ n;
  }
  /**
   * isFinite that doesn't force conversion to number type.
   * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
   */
  isFinite(e) {
    return typeof e == "number" && isFinite(e);
  }
}
var lE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "static",
  "anchor",
  "fixed",
  "open",
  "managed",
  "fullWidth",
  "quickOpen",
  "anchorElement",
  "anchorCorner",
  "anchorMargin",
  "maxHeight",
  "horizontallyCenteredOnViewport",
  "openBottomBias",
  "neverRestoreFocus",
  "children"
]), oE = /* @__PURE__ */ he("<div><!></div>");
function cE(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "static", 3, !1), l = v(e, "anchor", 3, !0), o = v(e, "fixed", 3, !1), c = v(e, "open", 31, () => _e(a())), d = v(e, "managed", 3, !1), u = v(e, "fullWidth", 3, !1), g = v(e, "quickOpen", 3, !1), f = v(e, "anchorElement", 15), m = v(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = v(e, "maxHeight", 3, 0), _ = v(e, "horizontallyCenteredOnViewport", 3, !1), b = v(e, "openBottomBias", 3, 0), E = v(e, "neverRestoreFocus", 3, !1), p = /* @__PURE__ */ qe(e, lE), y, A = /* @__PURE__ */ fe(void 0), x = new $r(), I = _e({}), S = _e({}), C = /* @__PURE__ */ fe(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), De(() => {
    var Y, M;
    y && l() && !((Y = y.parentElement) != null && Y.classList.contains("mdc-menu-surface--anchor")) && ((M = y.parentElement) == null || M.classList.add("mdc-menu-surface--anchor"), f(y.parentElement ?? void 0));
  }), De(() => {
    s(A) && s(A).isOpen() !== c() && (c() ? s(A).open() : s(A).close());
  }), De(() => {
    s(A) && s(A).setQuickOpen(g());
  }), De(() => {
    s(A) && s(A).setFixedPosition(o());
  }), De(() => {
    s(A) && s(A).setMaxHeight(h());
  }), De(() => {
    s(A) && s(A).setIsHorizontallyCenteredOnViewport(_());
  });
  const T = Ii;
  De(() => {
    s(A) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(A).setAnchorCorner(T[e.anchorCorner]) : s(A).setAnchorCorner(e.anchorCorner));
  }), De(() => {
    s(A) && s(A).setAnchorMargin(m());
  }), De(() => {
    s(A) && s(A).setOpenBottomBias(b());
  });
  const N = me("SMUI:menu-surface:mount"), $ = me("SMUI:menu-surface:unmount");
  st(() => {
    V(
      A,
      new qt({
        addClass: X,
        removeClass: R,
        hasClass: q,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || c(a()), !c() && ae() && Qe(ae(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || c(a()), !c() && ae() && Qe(ae(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || c(!0), c() && ae() && Qe(ae(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          !c() && ae() && Qe(ae(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (M) => {
          var ee;
          return ((ee = ae()) == null ? void 0 : ee.contains(M)) ?? !1;
        },
        isRtl: () => ae() && getComputedStyle(ae()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (M) => {
          S["transform-origin"] = M;
        },
        isFocused: () => document.activeElement === ae(),
        saveFocus: () => {
          V(C, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          var M;
          !E() && (!y || (M = ae()) != null && M.contains(document.activeElement)) && s(C) && document.contains(s(C)) && "focus" in s(C) && s(C).focus();
        },
        getInnerDimensions: () => {
          var M, ee;
          return {
            width: ((M = ae()) == null ? void 0 : M.offsetWidth) ?? 0,
            height: ((ee = ae()) == null ? void 0 : ee.offsetHeight) ?? 0
          };
        },
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getViewportDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (M) => {
          S.left = "left" in M ? `${M.left}px` : "", S.right = "right" in M ? `${M.right}px` : "", S.top = "top" in M ? `${M.top}px` : "", S.bottom = "bottom" in M ? `${M.bottom}px` : "";
        },
        setMaxHeight: (M) => {
          S["max-height"] = M;
        },
        registerWindowEventHandler: (M, ee) => x.on(window, M, ee),
        deregisterWindowEventHandler: (M, ee) => x.off(window, M, ee)
      }),
      !0
    );
    const Y = {
      get open() {
        return c();
      },
      set open(M) {
        c(M);
      },
      closeProgrammatic: O
    };
    return N && N(Y), s(A).init(), () => {
      var ee, oe, Q, re;
      $ && $(Y), l() && ae() && ((ee = ae().parentElement) == null || ee.classList.remove("mdc-menu-surface--anchor"));
      const M = s(A).isHoistedElement;
      if ((oe = s(A)) == null || oe.destroy(), V(A, void 0), M)
        try {
          (re = (Q = ae()) == null ? void 0 : Q.parentNode) == null || re.removeChild(ae());
        } catch {
        }
    };
  });
  function q(Y) {
    return Y in I ? I[Y] : ae().classList.contains(Y);
  }
  function X(Y) {
    I[Y] || (I[Y] = !0);
  }
  function R(Y) {
    (!(Y in I) || I[Y]) && (I[Y] = !1);
  }
  function O(Y) {
    var M;
    (M = s(A)) == null || M.close(Y), c(!1);
  }
  function D(Y) {
    s(A) && c() && !d() && s(A).handleBodyClick(Y);
  }
  function K() {
    return c();
  }
  function F(Y) {
    c(Y);
  }
  function G(Y, M) {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).setAbsolutePosition(Y, M);
  }
  function H(Y) {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).setIsHoisted(Y);
  }
  function j() {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).isFixed();
  }
  function U() {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).flipCornerHorizontally();
  }
  function ae() {
    return y;
  }
  var we = {
    isOpen: K,
    setOpen: F,
    setAbsolutePosition: G,
    setIsHoisted: H,
    isFixed: j,
    flipCornerHorizontally: U,
    getElement: ae
  }, W = oE();
  or("click", jo.body, D, !0);
  var z = (Y) => {
    var M;
    s(A) && !d() && s(A).handleKeydown(Y), (M = e.onkeydown) == null || M.call(e, Y);
  };
  je(
    W,
    (Y, M) => ({
      class: Y,
      style: M,
      role: "dialog",
      ...p,
      onkeydown: z
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": o(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": u(),
        ...I,
        [r()]: !0
      }),
      () => Object.entries(S).map(([Y, M]) => `${Y}: ${M};`).concat([i()]).join(" ")
    ]
  );
  var L = Ie(W);
  return pe(L, () => e.children ?? ve), ye(W, (Y) => y = Y, () => y), Fe(W, (Y, M) => Z == null ? void 0 : Z(Y, M), n), w(t, W), Re(we);
}
function Pl(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ot = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
}, Pi = {
  [`${ot.LIST_ITEM_ACTIVATED_CLASS}`]: "mdc-deprecated-list-item--activated",
  [`${ot.LIST_ITEM_CLASS}`]: "mdc-deprecated-list-item",
  [`${ot.LIST_ITEM_DISABLED_CLASS}`]: "mdc-deprecated-list-item--disabled",
  [`${ot.LIST_ITEM_SELECTED_CLASS}`]: "mdc-deprecated-list-item--selected",
  [`${ot.LIST_ITEM_TEXT_CLASS}`]: "mdc-deprecated-list-item__text",
  [`${ot.LIST_ITEM_PRIMARY_TEXT_CLASS}`]: "mdc-deprecated-list-item__primary-text",
  [`${ot.ROOT}`]: "mdc-deprecated-list"
}, Br = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .${ot.LIST_ITEM_CLASS} button:not(:disabled),
    .${ot.LIST_ITEM_CLASS} a,
    .${Pi[ot.LIST_ITEM_CLASS]} button:not(:disabled),
    .${Pi[ot.LIST_ITEM_CLASS]} a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .${ot.LIST_ITEM_CLASS} button:not(:disabled),
    .${ot.LIST_ITEM_CLASS} a,
    .${ot.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),
    .${ot.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled),
    .${Pi[ot.LIST_ITEM_CLASS]} button:not(:disabled),
    .${Pi[ot.LIST_ITEM_CLASS]} a,
    .${Pi[ot.LIST_ITEM_CLASS]} input[type="radio"]:not(:disabled),
    .${Pi[ot.LIST_ITEM_CLASS]} input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ft = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const dE = ["input", "button", "textarea", "select"], xn = (t) => {
  const e = t.target;
  if (!e)
    return;
  const n = `${e.tagName}`.toLowerCase();
  dE.indexOf(n) === -1 && t.preventDefault();
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function uE() {
  return {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
}
function fE(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (let r = 0; r < t; r++) {
    const i = e(r).trim();
    if (!i)
      continue;
    const a = i[0].toLowerCase();
    n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
  }
  return n.forEach((r) => {
    r.sort((i, a) => i.index - a.index);
  }), n;
}
function Co(t, e) {
  const { nextChar: n, focusItemAtIndex: r, sortedIndexByFirstChar: i, focusedItemIndex: a, skipFocus: l, isItemAtIndexDisabled: o } = t;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(() => {
    zf(e);
  }, ft.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  let c;
  return e.typeaheadBuffer.length === 1 ? c = hE(i, a, o, e) : c = vE(i, o, e), c !== -1 && !l && r(c), c;
}
function hE(t, e, n, r) {
  const i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    const c = a[r.sortedIndexCursor].index;
    if (!n(c))
      return c;
  }
  r.currentFirstChar = i;
  let l = -1, o;
  for (o = 0; o < a.length; o++)
    if (!n(a[o].index)) {
      l = o;
      break;
    }
  for (; o < a.length; o++)
    if (a[o].index > e && !n(a[o].index)) {
      l = o;
      break;
    }
  return l !== -1 ? (r.sortedIndexCursor = l, a[r.sortedIndexCursor].index) : -1;
}
function vE(t, e, n) {
  const r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  const a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  let l = (n.sortedIndexCursor + 1) % i.length, o = -1;
  for (; l !== n.sortedIndexCursor; ) {
    const c = i[l], d = c.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, u = !e(c.index);
    if (d && u) {
      o = l;
      break;
    }
    l = (l + 1) % i.length;
  }
  return o !== -1 ? (n.sortedIndexCursor = o, i[n.sortedIndexCursor].index) : -1;
}
function Kf(t) {
  return t.typeaheadBuffer.length > 0;
}
function zf(t) {
  t.typeaheadBuffer = "";
}
function md(t, e) {
  const { event: n, isTargetListItem: r, focusedItemIndex: i, focusItemAtIndex: a, sortedIndexByFirstChar: l, isItemAtIndexDisabled: o } = t, c = Dt(n) === "ArrowLeft", d = Dt(n) === "ArrowUp", u = Dt(n) === "ArrowRight", g = Dt(n) === "ArrowDown", f = Dt(n) === "Home", m = Dt(n) === "End", h = Dt(n) === "Enter", _ = Dt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || c || d || u || g || f || m || h)
    return -1;
  if (!_ && n.key.length === 1) {
    xn(n);
    const p = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: o
    };
    return Co(p, e);
  }
  return _ ? (r && xn(n), r && Kf(e) ? Co({
    focusItemAtIndex: a,
    focusedItemIndex: i,
    nextChar: " ",
    sortedIndexByFirstChar: l,
    skipFocus: !1,
    isItemAtIndexDisabled: o
  }, e) : -1) : -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function mE(t) {
  return t instanceof Array;
}
const gE = ["Alt", "Control", "Meta", "Shift"];
function gd(t) {
  const e = new Set(t ? gE.filter((n) => t.getModifierState(n)) : []);
  return (n) => n.every((r) => e.has(r)) && n.length === e.size;
}
class tc extends Ot {
  static get strings() {
    return Br;
  }
  static get cssClasses() {
    return ot;
  }
  static get numbers() {
    return ft;
  }
  static get defaultAdapter() {
    return {
      addClassForElementIndex: () => {
      },
      focusItemAtIndex: () => {
      },
      getAttributeForElementIndex: () => null,
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      hasCheckboxAtIndex: () => !1,
      hasRadioAtIndex: () => !1,
      isCheckboxCheckedAtIndex: () => !1,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      listItemAtIndexHasClass: () => !1,
      notifyAction: () => {
      },
      notifySelectionChange: () => {
      },
      removeClassForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      setCheckedCheckboxOrRadioAtIndex: () => {
      },
      setTabIndexForListItemChildren: () => {
      },
      getPrimaryTextAtIndex: () => ""
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, tc.defaultAdapter), e)), this.wrapFocus = !1, this.isVertical = !0, this.isSingleSelectionList = !1, this.areDisabledItemsFocusable = !1, this.selectedIndex = ft.UNSET_INDEX, this.focusedItemIndex = ft.UNSET_INDEX, this.useActivatedClass = !1, this.useSelectedAttr = !1, this.ariaCurrentAttrValue = null, this.isCheckboxList = !1, this.isRadioList = !1, this.lastSelectedIndex = null, this.hasTypeahead = !1, this.typeaheadState = uE(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
  }
  layout() {
    this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? (this.isCheckboxList = !0, this.selectedIndex = []) : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
  }
  /** Returns the index of the item that was last focused. */
  getFocusedItemIndex() {
    return this.focusedItemIndex;
  }
  /** Toggles focus wrapping with keyboard navigation. */
  setWrapFocus(e) {
    this.wrapFocus = e;
  }
  /**
   * Toggles orientation direction for keyboard navigation (true for vertical,
   * false for horizontal).
   */
  setVerticalOrientation(e) {
    this.isVertical = e;
  }
  /** Toggles single-selection behavior. */
  setSingleSelection(e) {
    this.isSingleSelectionList = e, e && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
  }
  setDisabledItemsFocusable(e) {
    this.areDisabledItemsFocusable = e;
  }
  /**
   * Automatically determines whether the list is single selection list. If so,
   * initializes the internal state to match the selected item.
   */
  maybeInitializeSingleSelection() {
    const e = this.getSelectedIndexFromDOM();
    if (e === ft.UNSET_INDEX)
      return;
    this.adapter.listItemAtIndexHasClass(e, ot.LIST_ITEM_ACTIVATED_CLASS) && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = e;
  }
  /** @return Index of the first selected item based on the DOM state. */
  getSelectedIndexFromDOM() {
    let e = ft.UNSET_INDEX;
    const n = this.adapter.getListItemCount();
    for (let r = 0; r < n; r++) {
      const i = this.adapter.listItemAtIndexHasClass(r, ot.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, ot.LIST_ITEM_ACTIVATED_CLASS);
      if (i || a) {
        e = r;
        break;
      }
    }
    return e;
  }
  /**
   * Sets whether typeahead is enabled on the list.
   * @param hasTypeahead Whether typeahead is enabled.
   */
  setHasTypeahead(e) {
    this.hasTypeahead = e, e && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
  }
  /**
   * @return Whether typeahead is currently matching a user-specified prefix.
   */
  isTypeaheadInProgress() {
    return this.hasTypeahead && Kf(this.typeaheadState);
  }
  /** Toggle use of the "activated" CSS class. */
  setUseActivatedClass(e) {
    this.useActivatedClass = e;
  }
  /**
   * Toggles use of the selected attribute (true for aria-selected, false for
   * aria-checked).
   */
  setUseSelectedAttribute(e) {
    this.useSelectedAttr = e;
  }
  getSelectedIndex() {
    return this.selectedIndex;
  }
  setSelectedIndex(e, n = {}) {
    this.isIndexValid(e) && (this.isCheckboxList ? this.setCheckboxAtIndex(e, n) : this.isRadioList ? this.setRadioAtIndex(e, n) : this.setSingleSelectionAtIndex(e, n));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e) {
    e >= 0 && (this.focusedItemIndex = e, this.adapter.setAttributeForElementIndex(e, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(e, "0"));
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e) {
    e >= 0 && (this.adapter.setAttributeForElementIndex(e, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(e, "-1")), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedOrFocusedItem();
    }, 0);
  }
  isIndexDisabled(e) {
    return this.adapter.listItemAtIndexHasClass(e, ot.LIST_ITEM_DISABLED_CLASS);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, n, r) {
    var i;
    const a = Dt(e) === "ArrowLeft", l = Dt(e) === "ArrowUp", o = Dt(e) === "ArrowRight", c = Dt(e) === "ArrowDown", d = Dt(e) === "Home", u = Dt(e) === "End", g = Dt(e) === "Enter", f = Dt(e) === "Spacebar", m = this.isVertical && c || !this.isVertical && o, h = this.isVertical && l || !this.isVertical && a, _ = e.key === "A" || e.key === "a", b = gd(e);
    if (this.adapter.isRootFocused()) {
      if ((h || u) && b([]))
        e.preventDefault(), this.focusLastElement();
      else if ((m || d) && b([]))
        e.preventDefault(), this.focusFirstElement();
      else if (h && b(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        const p = this.focusLastElement();
        p !== -1 && this.setSelectedIndexOnAction(p, !1);
      } else if (m && b(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        const p = this.focusFirstElement();
        p !== -1 && this.setSelectedIndexOnAction(p, !1);
      }
      if (this.hasTypeahead) {
        const p = {
          event: e,
          focusItemAtIndex: (y) => {
            this.focusItemAtIndex(y);
          },
          focusedItemIndex: -1,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (y) => this.isIndexDisabled(y)
        };
        md(p, this.typeaheadState);
      }
      return;
    }
    let E = this.adapter.getFocusedElementIndex();
    if (!(E === -1 && (E = r, E < 0))) {
      if (m && b([]))
        xn(e), this.focusNextElement(E);
      else if (h && b([]))
        xn(e), this.focusPrevElement(E);
      else if (m && b(["Shift"]) && this.isCheckboxList) {
        xn(e);
        const p = this.focusNextElement(E);
        p !== -1 && this.setSelectedIndexOnAction(p, !1);
      } else if (h && b(["Shift"]) && this.isCheckboxList) {
        xn(e);
        const p = this.focusPrevElement(E);
        p !== -1 && this.setSelectedIndexOnAction(p, !1);
      } else if (d && b([]))
        xn(e), this.focusFirstElement();
      else if (u && b([]))
        xn(e), this.focusLastElement();
      else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
        if (xn(e), this.isIndexDisabled(E))
          return;
        this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
      } else if (u && b(["Control", "Shift"]) && this.isCheckboxList) {
        if (xn(e), this.isIndexDisabled(E))
          return;
        this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
      } else if (_ && b(["Control"]) && this.isCheckboxList)
        e.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex, !0);
      else if ((g || f) && (b([]) || b(["Alt"]))) {
        if (n) {
          const p = e.target;
          if (p && p.tagName === "A" && g || (xn(e), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
        }
      } else if ((g || f) && b(["Shift"]) && this.isCheckboxList) {
        const p = e.target;
        if (p && p.tagName === "A" && g || (xn(e), this.isIndexDisabled(E)))
          return;
        this.isTypeaheadInProgress() || (this.toggleCheckboxRange((i = this.lastSelectedIndex) !== null && i !== void 0 ? i : E, E, E), this.adapter.notifyAction(E));
      }
      if (this.hasTypeahead) {
        const p = {
          event: e,
          focusItemAtIndex: (y) => {
            this.focusItemAtIndex(y);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (y) => this.isIndexDisabled(y)
        };
        md(p, this.typeaheadState);
      }
    }
  }
  /**
   * Click handler for the list.
   *
   * @param index Index for the item that has been clicked.
   * @param isCheckboxAlreadyUpdatedInAdapter Whether the checkbox for
   *   the list item has already been updated in the adapter. This attribute
   *   should be set to `true` when e.g. the click event directly landed on
   *   the underlying native checkbox element which would cause the checked
   *   state to be already toggled within `adapter.isCheckboxCheckedAtIndex`.
   */
  handleClick(e, n, r) {
    var i;
    const a = gd(r);
    e !== ft.UNSET_INDEX && (this.isIndexDisabled(e) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(e, n), this.adapter.notifyAction(e)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((i = this.lastSelectedIndex) !== null && i !== void 0 ? i : e, e, e), this.adapter.notifyAction(e))));
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const n = this.adapter.getListItemCount();
    let r = e, i = null;
    do {
      if (r++, r >= n)
        if (this.wrapFocus)
          r = 0;
        else
          return e;
      if (r === i)
        return -1;
      i = i ?? r;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
    return this.focusItemAtIndex(r), r;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    const n = this.adapter.getListItemCount();
    let r = e, i = null;
    do {
      if (r--, r < 0)
        if (this.wrapFocus)
          r = n - 1;
        else
          return e;
      if (r === i)
        return -1;
      i = i ?? r;
    } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
    return this.focusItemAtIndex(r), r;
  }
  focusFirstElement() {
    return this.focusNextElement(-1);
  }
  focusLastElement() {
    return this.focusPrevElement(this.adapter.getListItemCount());
  }
  focusInitialElement() {
    const e = this.getFirstSelectedOrFocusedItemIndex();
    return e !== ft.UNSET_INDEX && this.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, n) {
    this.isIndexValid(e, !1) && (n ? (this.adapter.removeClassForElementIndex(e, ot.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Br.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e, ot.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Br.ARIA_DISABLED, "true")));
  }
  setSingleSelectionAtIndex(e, n = {}) {
    if (this.selectedIndex === e && !n.forceUpdate)
      return;
    let r = ot.LIST_ITEM_SELECTED_CLASS;
    this.useActivatedClass && (r = ot.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ft.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(e), this.setTabindexAtIndex(e), e !== ft.UNSET_INDEX && this.adapter.addClassForElementIndex(e, r), this.selectedIndex = e, n.isUserInteraction && !n.forceUpdate && this.adapter.notifySelectionChange([e]);
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex(e) {
    this.selectedIndex === ft.UNSET_INDEX && e !== ft.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(e, Br.ARIA_CURRENT));
    const n = this.ariaCurrentAttrValue !== null, r = n ? Br.ARIA_CURRENT : Br.ARIA_SELECTED;
    if (this.selectedIndex !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), e !== ft.UNSET_INDEX) {
      const i = n ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(e, r, i);
    }
  }
  /**
   * Returns the attribute to use for indicating selection status.
   */
  getSelectionAttribute() {
    return this.useSelectedAttr ? Br.ARIA_SELECTED : Br.ARIA_CHECKED;
  }
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it
   * is already checked.
   */
  setRadioAtIndex(e, n = {}) {
    const r = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(e, !0), !(this.selectedIndex === e && !n.forceUpdate) && (this.selectedIndex !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(e, r, "true"), this.selectedIndex = e, n.isUserInteraction && !n.forceUpdate && this.adapter.notifySelectionChange([e]));
  }
  setCheckboxAtIndex(e, n = {}) {
    const r = this.selectedIndex, i = n.isUserInteraction ? new Set(r === ft.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), l = [];
    for (let o = 0; o < this.adapter.getListItemCount(); o++) {
      if (n.omitDisabledItems && this.isIndexDisabled(o))
        continue;
      const c = i == null ? void 0 : i.has(o), d = e.indexOf(o) >= 0;
      d !== c && l.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, d), this.adapter.setAttributeForElementIndex(o, a, d ? "true" : "false");
    }
    this.selectedIndex = n.omitDisabledItems ? this.resolveSelectedIndices(e) : e, n.isUserInteraction && l.length && this.adapter.notifySelectionChange(l);
  }
  /**
   * Helper method for ensuring that the list of selected indices remains
   * accurate when calling setCheckboxAtIndex with omitDisabledItems set to
   * true.
   */
  resolveSelectedIndices(e) {
    const r = (this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex).filter((l) => this.isIndexDisabled(l)), i = e.filter((l) => !this.isIndexDisabled(l));
    return [
      .../* @__PURE__ */ new Set([
        ...i,
        ...r
      ])
    ].sort((l, o) => l - o);
  }
  /**
   * Toggles the state of all checkboxes in the given range (inclusive) based
   * on the state of the checkbox at the `toggleIndex`. To determine whether
   * to set the given range to checked or unchecked, read the value of the
   * checkbox at the `toggleIndex` and negate it. Then apply that new checked
   * state to all checkboxes in the range.
   * @param fromIndex The start of the range of checkboxes to toggle
   * @param toIndex The end of the range of checkboxes to toggle
   * @param toggleIndex The index that will be used to determine the new state
   *     of the given checkbox range.
   */
  toggleCheckboxRange(e, n, r) {
    this.lastSelectedIndex = r;
    const i = new Set(this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex), a = !(i != null && i.has(r)), [l, o] = [e, n].sort(), c = this.getSelectionAttribute(), d = [];
    for (let u = l; u <= o; u++) {
      if (this.isIndexDisabled(u))
        continue;
      const g = i.has(u);
      a !== g && (d.push(u), this.adapter.setCheckedCheckboxOrRadioAtIndex(u, a), this.adapter.setAttributeForElementIndex(u, c, `${a}`), a ? i.add(u) : i.delete(u));
    }
    d.length && (this.selectedIndex = [...i], this.adapter.notifySelectionChange(d));
  }
  setTabindexAtIndex(e) {
    this.focusedItemIndex === ft.UNSET_INDEX && e !== 0 && e !== ft.UNSET_INDEX ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== e && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== e && this.focusedItemIndex !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), e !== ft.UNSET_INDEX && this.adapter.setAttributeForElementIndex(e, "tabindex", "0");
  }
  /**
   * @return Return true if it is single selectin list, checkbox list or radio
   *     list.
   */
  isSelectableList() {
    return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
  }
  setTabindexToFirstSelectedOrFocusedItem() {
    const e = this.getFirstSelectedOrFocusedItemIndex();
    this.setTabindexAtIndex(e);
  }
  getFirstSelectedOrFocusedItemIndex() {
    const e = this.getFirstEnabledItem();
    if (this.adapter.getListItemCount() === 0)
      return ft.UNSET_INDEX;
    if (!this.isSelectableList())
      return Math.max(this.focusedItemIndex, e);
    if (typeof this.selectedIndex == "number" && this.selectedIndex !== ft.UNSET_INDEX)
      return this.areDisabledItemsFocusable && this.isIndexDisabled(this.selectedIndex) ? e : this.selectedIndex;
    if (mE(this.selectedIndex) && this.selectedIndex.length > 0) {
      const n = [...this.selectedIndex].sort((r, i) => r - i);
      for (const r of n)
        if (!(this.isIndexDisabled(r) && !this.areDisabledItemsFocusable))
          return r;
    }
    return e;
  }
  getFirstEnabledItem() {
    const e = this.adapter.getListItemCount();
    let n = 0;
    for (; n < e && this.isIndexDisabled(n); )
      n++;
    return n === e ? ft.UNSET_INDEX : n;
  }
  isIndexValid(e, n = !0) {
    if (e instanceof Array) {
      if (!this.isCheckboxList && n)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      return e.length === 0 ? !0 : e.some((r) => this.isIndexInRange(r));
    } else if (typeof e == "number") {
      if (this.isCheckboxList && n)
        throw new Error(`MDCListFoundation: Expected array of index for checkbox based list but got number: ${e}`);
      return this.isIndexInRange(e) || this.isSingleSelectionList && e === ft.UNSET_INDEX;
    } else
      return !1;
  }
  isIndexInRange(e) {
    const n = this.adapter.getListItemCount();
    return e >= 0 && e < n;
  }
  /**
   * Sets selected index on user action, toggles checkboxes in checkbox lists
   * by default, unless `isCheckboxAlreadyUpdatedInAdapter` is set to `true`.
   *
   * In cases where `isCheckboxAlreadyUpdatedInAdapter` is set to `true`, the
   * UI is just updated to reflect the value returned by the adapter.
   *
   * When calling this, make sure user interaction does not toggle disabled
   * list items.
   */
  setSelectedIndexOnAction(e, n) {
    this.lastSelectedIndex = e, this.isCheckboxList ? (this.toggleCheckboxAtIndex(e, n), this.adapter.notifySelectionChange([e])) : this.setSelectedIndex(e, { isUserInteraction: !0 });
  }
  toggleCheckboxAtIndex(e, n) {
    const r = this.getSelectionAttribute(), i = this.adapter.isCheckboxCheckedAtIndex(e);
    let a;
    n ? a = i : (a = !i, this.adapter.setCheckedCheckboxOrRadioAtIndex(e, a)), this.adapter.setAttributeForElementIndex(e, r, a ? "true" : "false");
    let l = this.selectedIndex === ft.UNSET_INDEX ? [] : this.selectedIndex.slice();
    a ? l.push(e) : l = l.filter((o) => o !== e), this.selectedIndex = l;
  }
  focusItemAtIndex(e) {
    this.adapter.focusItemAtIndex(e), this.focusedItemIndex = e;
  }
  getEnabledListItemCount() {
    const e = this.adapter.getListItemCount();
    let n = 0;
    for (let r = 0; r < e; r++)
      this.isIndexDisabled(r) || n++;
    return n;
  }
  checkboxListToggleAll(e, n) {
    const r = this.getEnabledListItemCount(), i = this.adapter.getListItemCount();
    if (e.filter((l) => !this.isIndexDisabled(l)).length >= r)
      this.setCheckboxAtIndex([], {
        isUserInteraction: n,
        omitDisabledItems: !0
      });
    else {
      const l = [];
      for (let o = 0; o < i; o++)
        (!this.isIndexDisabled(o) || e.indexOf(o) > -1) && l.push(o);
      this.setCheckboxAtIndex(l, {
        isUserInteraction: n,
        omitDisabledItems: !0
      });
    }
  }
  /**
   * Given the next desired character from the user, adds it to the typeahead
   * buffer. Then, attempts to find the next option matching the buffer. Wraps
   * around if at the end of options.
   *
   * @param nextChar The next character to add to the prefix buffer.
   * @param startingIndex The index from which to start matching. Only
   *     relevant when starting a new match sequence. To start a new match
   *     sequence, clear the buffer using `clearTypeaheadBuffer`, or wait for
   *     the buffer to clear after a set interval defined in list foundation.
   *     Defaults to the currently focused index.
   * @return The index of the matched item, or -1 if no match.
   */
  typeaheadMatchItem(e, n, r = !1) {
    const i = {
      focusItemAtIndex: (a) => {
        this.focusItemAtIndex(a);
      },
      focusedItemIndex: n || this.focusedItemIndex,
      nextChar: e,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      skipFocus: r,
      isItemAtIndexDisabled: (a) => this.isIndexDisabled(a)
    };
    return Co(i, this.typeaheadState);
  }
  /**
   * Initializes the MDCListTextAndIndex data structure by indexing the
   * current list items by primary text.
   *
   * @return The primary texts of all the list items sorted by first
   *     character.
   */
  typeaheadInitSortedIndex() {
    return fE(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  }
  /**
   * Clears the typeahead buffer.
   */
  clearTypeaheadBuffer() {
    zf(this.typeaheadState);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const qi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Hi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, _E = {
  FOCUS_ROOT_INDEX: -1
};
var Vi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Vi || (Vi = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class nc extends Ot {
  static get cssClasses() {
    return qi;
  }
  static get strings() {
    return Hi;
  }
  static get numbers() {
    return _E;
  }
  /**
   * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
   */
  static get defaultAdapter() {
    return {
      addClassToElementAtIndex: () => {
      },
      removeClassFromElementAtIndex: () => {
      },
      addAttributeToElementAtIndex: () => {
      },
      removeAttributeFromElementAtIndex: () => {
      },
      getAttributeFromElementAtIndex: () => null,
      elementContainsClass: () => !1,
      closeSurface: () => {
      },
      getElementIndex: () => -1,
      notifySelected: () => {
      },
      getMenuItemCount: () => 0,
      focusItemAtIndex: () => {
      },
      focusListRoot: () => {
      },
      getSelectedSiblingOfItemAtIndex: () => -1,
      isSelectableItemAtIndex: () => !1
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, nc.defaultAdapter), e)), this.defaultFocusState = Vi.LIST_ROOT, this.selectedIndex = -1;
  }
  destroy() {
    this.adapter.closeSurface();
  }
  handleKeydown(e) {
    const { key: n, keyCode: r } = e;
    (n === "Tab" || r === 9) && this.adapter.closeSurface(
      /** skipRestoreFocus */
      !0
    );
  }
  handleItemAction(e) {
    const n = this.adapter.getElementIndex(e);
    if (n < 0)
      return;
    this.adapter.notifySelected({ index: n });
    const r = this.adapter.getAttributeFromElementAtIndex(n, Hi.SKIP_RESTORE_FOCUS) === "true";
    this.adapter.closeSurface(r), this.adapter.isSelectableItemAtIndex(n) && this.setSelectedIndex(n);
  }
  handleMenuSurfaceOpened() {
    switch (this.defaultFocusState) {
      case Vi.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case Vi.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case Vi.NONE:
        break;
      default:
        this.adapter.focusListRoot();
        break;
    }
  }
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */
  setDefaultFocusState(e) {
    this.defaultFocusState = e;
  }
  /** @return Index of the currently selected list item within the menu. */
  getSelectedIndex() {
    return this.selectedIndex;
  }
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */
  setSelectedIndex(e) {
    if (this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e))
      throw new Error("MDCMenuFoundation: No selection group at specified index.");
    const n = this.adapter.getSelectedSiblingOfItemAtIndex(e);
    n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, Hi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, qi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(e, qi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = e;
  }
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */
  setEnabled(e, n) {
    this.validatedIndex(e), n ? (this.adapter.removeClassFromElementAtIndex(e, ot.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(e, ot.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_DISABLED_ATTR, "true"));
  }
  validatedIndex(e) {
    const n = this.adapter.getMenuItemCount();
    if (!(e >= 0 && e < n))
      throw new Error("MDCMenuFoundation: No list item at specified index.");
  }
}
var bE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "open",
  "anchorElement",
  "managed",
  "children"
]);
function EE(t, e) {
  Oe(e, !0);
  const { closest: n } = ga;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "open", 15, !1), l = v(e, "anchorElement", 15), o = v(e, "managed", 3, !1), c = /* @__PURE__ */ qe(e, bE), d, u = /* @__PURE__ */ fe(void 0), g = /* @__PURE__ */ fe(void 0), f = /* @__PURE__ */ fe(void 0);
  le("SMUI:menu-surface:mount", (C) => {
    s(g) || V(g, C, !0);
  });
  const m = me("SMUI:list:mount");
  le("SMUI:list:mount", (C) => {
    s(f) || V(f, C, !0), m && m(C);
  });
  const h = me("SMUI:menu:mount"), _ = me("SMUI:menu:unmount");
  st(() => (V(
    u,
    new nc({
      addClassToElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, T);
      },
      removeClassFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, T);
      },
      addAttributeToElementAtIndex: (C, T, N) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, T, N);
      },
      removeAttributeFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, T);
      },
      getAttributeFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, T);
      },
      elementContainsClass: (C, T) => C.classList.contains(T),
      closeSurface: (C) => {
        var T;
        !o() && I() && ((T = s(g)) == null || T.closeProgrammatic(C), Qe(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((T) => T.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Qe(I(), "SMUIMenuSelected", {
          index: C.index,
          item: s(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[C].element, `.${qi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const T = s(f).getOrderedList(), N = n(T[C].element, `.${qi.MENU_SELECTION_GROUP}`), $ = N == null ? void 0 : N.querySelector(`.${qi.MENU_SELECTED_LIST_ITEM}`);
        return $ ? T.map((q) => q.element).indexOf($) : -1;
      }
    }),
    !0
  ), h && h(s(u)), s(u).init(), () => {
    var C;
    _ && s(u) && _(s(u)), (C = s(u)) == null || C.destroy(), V(u, void 0);
  }));
  function b(C) {
    s(u) && s(u).handleKeydown(C);
  }
  function E() {
    return a();
  }
  function p(C) {
    a(C);
  }
  function y(C) {
    if (s(u) == null)
      throw new Error("Instance is undefined.");
    s(u).setDefaultFocusState(C);
  }
  function A() {
    if (s(u) == null)
      throw new Error("Instance is undefined.");
    return s(u).getSelectedIndex();
  }
  function x() {
    return d;
  }
  function I() {
    return d.getElement();
  }
  var S = {
    isOpen: E,
    setOpen: p,
    setDefaultFocusState: y,
    getSelectedIndex: A,
    getMenuSurface: x,
    getElement: I
  };
  {
    let C = /* @__PURE__ */ de(() => He({ "mdc-menu": !0, [i()]: !0 }));
    ye(
      cE(t, rt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(C);
          },
          get managed() {
            return o();
          }
        },
        () => c,
        {
          onkeydown: (T) => {
            var N;
            b(T), (N = e.onkeydown) == null || N.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var N;
            s(u) && s(u).handleMenuSurfaceOpened(), (N = e.onSMUIMenuSurfaceOpened) == null || N.call(e, T);
          },
          onSMUIListAction: (T) => {
            var N;
            s(u) && s(f) && s(u).handleItemAction(s(f).getOrderedList()[T.detail.index].element), (N = e.onSMUIListAction) == null || N.call(e, T);
          },
          get open() {
            return a();
          },
          set open(T) {
            a(T);
          },
          get anchorElement() {
            return l();
          },
          set anchorElement(T) {
            l(T);
          },
          children: (T, N) => {
            var $ = ge(), q = ie($);
            pe(q, () => e.children ?? ve), w(T, $);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => d = T,
      () => d
    );
  }
  return Re(S);
}
var pE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "nonInteractive",
  "dense",
  "textualList",
  "avatarList",
  "iconList",
  "imageList",
  "thumbnailList",
  "videoList",
  "twoLine",
  "threeLine",
  "vertical",
  "wrapFocus",
  "singleSelection",
  "disabledItemsFocusable",
  "selectedIndex",
  "radioList",
  "checkList",
  "hasTypeahead",
  "component",
  "tag",
  "children"
]);
function IE(t, e) {
  Oe(e, !0);
  const { closest: n, matches: r } = ga;
  let i = me("SMUI:list:nav"), a = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), o = v(e, "nonInteractive", 3, !1), c = v(e, "dense", 3, !1), d = v(e, "textualList", 3, !1), u = v(e, "avatarList", 3, !1), g = v(e, "iconList", 3, !1), f = v(e, "imageList", 3, !1), m = v(e, "thumbnailList", 3, !1), h = v(e, "videoList", 3, !1), _ = v(e, "twoLine", 3, !1), b = v(e, "threeLine", 3, !1), E = v(e, "vertical", 3, !0), p = v(e, "wrapFocus", 19, () => me("SMUI:list:wrapFocus") ?? !1), y = v(e, "singleSelection", 3, !1), A = v(e, "disabledItemsFocusable", 3, !1), x = v(e, "selectedIndex", 31, () => -1), I = v(e, "radioList", 3, !1), S = v(e, "checkList", 3, !1), C = v(e, "hasTypeahead", 3, !1), T = v(e, "component", 3, ti), N = v(e, "tag", 3, i ? "nav" : "ul"), $ = /* @__PURE__ */ qe(e, pE), q, X = /* @__PURE__ */ fe(void 0), R = [], O = me("SMUI:list:role");
  const D = /* @__PURE__ */ new WeakMap();
  let K = me("SMUI:dialog:selection"), F = me("SMUI:addLayoutListener"), G;
  le("SMUI:list:nonInteractive", o()), le("SMUI:separator:context", "list"), O || (y() ? (O = "listbox", le("SMUI:list:item:role", "option")) : I() ? (O = "radiogroup", le("SMUI:list:item:role", "radio")) : S() ? (O = "group", le("SMUI:list:item:role", "checkbox")) : (O = "list", le("SMUI:list:item:role", void 0))), De(() => {
    s(X) && s(X).setVerticalOrientation(E());
  }), De(() => {
    s(X) && s(X).setWrapFocus(p());
  }), De(() => {
    s(X) && s(X).setHasTypeahead(C());
  }), De(() => {
    s(X) && s(X).setSingleSelection(y());
  }), De(() => {
    s(X) && s(X).setDisabledItemsFocusable(A());
  }), De(() => {
    s(X) && y() && k() !== x() && s(X).setSelectedIndex(x());
  }), F && (G = F(ke)), le("SMUI:list:item:mount", (be) => {
    R.push(be), D.set(be.element, be), y() && be.selected && x(Ne(be.element));
  }), le("SMUI:list:item:unmount", (be) => {
    const Te = (be && R.findIndex((ne) => ne === be)) ?? -1;
    Te !== -1 && (R.splice(Te, 1), D.delete(be.element));
  });
  const H = me("SMUI:list:mount"), j = me("SMUI:list:unmount");
  st(() => {
    V(
      X,
      new tc({
        addClassForElementIndex: M,
        focusItemAtIndex: ce,
        getAttributeForElementIndex: (Te, ne) => {
          var se;
          return ((se = L()[Te]) == null ? void 0 : se.getAttr(ne)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? L().map((Te) => Te.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => R.length,
        getPrimaryTextAtIndex: Ce,
        hasCheckboxAtIndex: (Te) => {
          var ne;
          return ((ne = L()[Te]) == null ? void 0 : ne.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (Te) => {
          var ne;
          return ((ne = L()[Te]) == null ? void 0 : ne.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (Te) => {
          const ne = L()[Te];
          return ((ne == null ? void 0 : ne.hasCheckbox) && ne.checked) ?? !1;
        },
        isFocusInsideList: () => q != null && Ue() !== document.activeElement && Ue().contains(document.activeElement),
        isRootFocused: () => q != null && document.activeElement === Ue(),
        listItemAtIndexHasClass: Y,
        notifyAction: (Te) => {
          x(Te), q != null && Qe(Ue(), "SMUIListAction", { index: Te });
        },
        notifySelectionChange: (Te) => {
          q != null && Qe(Ue(), "SMUIListSelectionChange", { changedIndices: Te });
        },
        removeClassForElementIndex: ee,
        setAttributeForElementIndex: oe,
        setCheckedCheckboxOrRadioAtIndex: (Te, ne) => {
          L()[Te].checked = ne;
        },
        setTabIndexForListItemChildren: (Te, ne) => {
          const se = L()[Te];
          Array.prototype.forEach.call(se.element.querySelectorAll("button:not(:disabled), a"), (te) => {
            te.setAttribute("tabindex", ne);
          });
        }
      }),
      !0
    );
    const be = {
      get element() {
        return Ue();
      },
      get items() {
        return R;
      },
      get typeaheadInProgress() {
        if (!s(X))
          throw new Error("Instance is undefined.");
        return s(X).isTypeaheadInProgress();
      },
      typeaheadMatchItem(Te, ne) {
        if (!s(X))
          throw new Error("Instance is undefined.");
        return s(X).typeaheadMatchItem(
          Te,
          ne,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: L,
      focusItemAtIndex: ce,
      addClassForElementIndex: M,
      removeClassForElementIndex: ee,
      setAttributeForElementIndex: oe,
      removeAttributeForElementIndex: Q,
      getAttributeFromElementIndex: re,
      getPrimaryTextAtIndex: Ce
    };
    return H && H(be), s(X).init(), s(X).layout(), () => {
      var Te;
      j && j(be), (Te = s(X)) == null || Te.destroy(), V(X, void 0);
    };
  }), gr(() => {
    G && G();
  });
  function U(be) {
    s(X) && be.target && s(X).handleKeydown(be, be.target.classList.contains("mdc-deprecated-list-item"), Ne(be.target));
  }
  function ae(be) {
    s(X) && be.target && s(X).handleFocusIn(Ne(be.target));
  }
  function we(be) {
    s(X) && be.target && s(X).handleFocusOut(Ne(be.target));
  }
  function W(be) {
    s(X) && be.target && s(X).handleClick(Ne(be.target), !r(be.target, 'input[type="checkbox"], input[type="radio"]'), be);
  }
  function z(be) {
    if (I() || S()) {
      const Te = Ne(be.target);
      if (Te !== -1) {
        const ne = L()[Te];
        ne && (I() && !ne.checked || S()) && (r(be.detail.target, 'input[type="checkbox"], input[type="radio"]') || (ne.checked = !ne.checked), ne.activateRipple(), window.requestAnimationFrame(() => {
          ne.deactivateRipple();
        }));
      }
    }
  }
  function L() {
    return q == null ? [] : [...Ue().children].map((be) => D.get(be)).filter((be) => be && be._smui_list_item_accessor);
  }
  function Y(be, Te) {
    const ne = L()[be];
    return (ne && ne.hasClass(Te)) ?? !1;
  }
  function M(be, Te) {
    const ne = L()[be];
    ne && ne.addClass(Te);
  }
  function ee(be, Te) {
    const ne = L()[be];
    ne && ne.removeClass(Te);
  }
  function oe(be, Te, ne) {
    const se = L()[be];
    se && se.addAttr(Te, ne);
  }
  function Q(be, Te) {
    const ne = L()[be];
    ne && ne.removeAttr(Te);
  }
  function re(be, Te) {
    const ne = L()[be];
    return ne ? ne.getAttr(Te) : null;
  }
  function Ce(be) {
    const Te = L()[be];
    return (Te && Te.getPrimaryText()) ?? "";
  }
  function Ne(be) {
    const Te = n(be, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Te && r(Te, ".mdc-deprecated-list-item") ? L().map((ne) => ne == null ? void 0 : ne.element).indexOf(Te) : -1;
  }
  function ke() {
    if (!s(X))
      throw new Error("Instance is undefined.");
    return s(X).layout();
  }
  function Me(be, Te) {
    if (!s(X))
      throw new Error("Instance is undefined.");
    return s(X).setEnabled(be, Te);
  }
  function Le() {
    if (!s(X))
      throw new Error("Instance is undefined.");
    return s(X).isTypeaheadInProgress();
  }
  function k() {
    if (!s(X))
      throw new Error("Instance is undefined.");
    return s(X).getSelectedIndex();
  }
  function J() {
    if (!s(X))
      throw new Error("Instance is undefined.");
    return s(X).getFocusedItemIndex();
  }
  function ce(be) {
    const Te = L()[be];
    Te && "focus" in Te.element && Te.element.focus();
  }
  function Ue() {
    return q.getElement();
  }
  var We = {
    layout: ke,
    setEnabled: Me,
    getTypeaheadInProgress: Le,
    getSelectedIndex: k,
    getFocusedItemIndex: J,
    focusItemAtIndex: ce,
    getElement: Ue
  }, It = ge(), dn = ie(It);
  {
    let be = /* @__PURE__ */ de(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": o(),
      "mdc-deprecated-list--dense": c(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": u() || K,
      "mdc-deprecated-list--icon-list": g(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": _(),
      "smui-list--three-line": b() && !_(),
      [l()]: !0
    }));
    _r(dn, T, (Te, ne) => {
      ye(
        ne(Te, rt(
          {
            get tag() {
              return N();
            },
            get use() {
              return a();
            },
            get class() {
              return s(be);
            },
            get role() {
              return O;
            }
          },
          () => $,
          {
            onkeydown: (se) => {
              var Ve;
              U(se), (Ve = e.onkeydown) == null || Ve.call(e, se);
            },
            onfocusin: (se) => {
              var Ve;
              ae(se), (Ve = e.onfocusin) == null || Ve.call(e, se);
            },
            onfocusout: (se) => {
              var Ve;
              we(se), (Ve = e.onfocusout) == null || Ve.call(e, se);
            },
            onclick: (se) => {
              var Ve;
              W(se), (Ve = e.onclick) == null || Ve.call(e, se);
            },
            onSMUIAction: (se) => {
              var Ve;
              z(se), (Ve = e.onSMUIAction) == null || Ve.call(e, se);
            },
            children: (se, Ve) => {
              var te = ge(), xe = ie(te);
              pe(xe, () => e.children ?? ve), w(se, te);
            },
            $$slots: { default: !0 }
          }
        )),
        (se) => q = se,
        () => q
      );
    });
  }
  return w(t, It), Re(We);
}
let SE = 0;
var AE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "color",
  "nonInteractive",
  "ripple",
  "wrapper",
  "activated",
  "role",
  "selected",
  "disabled",
  "skipRestoreFocus",
  "tabindex",
  "inputId",
  "href",
  "component",
  "tag",
  "children"
]), yE = /* @__PURE__ */ he('<span class="mdc-deprecated-list-item__ripple"></span>'), CE = /* @__PURE__ */ he("<!><!>", 1);
function TE(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(M) {
    return M === n;
  }
  let i = me("SMUI:list:item:nav"), a = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), o = v(e, "style", 3, ""), c = v(e, "nonInteractive", 19, () => me("SMUI:list:nonInteractive") ?? !1), d = v(e, "ripple", 19, () => !c()), u = v(e, "wrapper", 3, !1), g = v(e, "activated", 15, !1), f = v(e, "role", 19, () => u() ? "presentation" : me("SMUI:list:item:role")), m = v(e, "selected", 15, !1), h = v(e, "disabled", 3, !1), _ = v(e, "skipRestoreFocus", 3, !1), b = v(e, "tabindex", 15, n), E = v(e, "inputId", 19, () => "SMUI-form-field-list-" + SE++), p = v(e, "component", 3, ti), y = v(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), A = /* @__PURE__ */ qe(e, AE);
  le("SMUI:list:nonInteractive", void 0), le("SMUI:list:item:role", void 0);
  let x, I = _e({}), S = _e({}), C = _e({}), T = /* @__PURE__ */ fe(void 0), N = /* @__PURE__ */ fe(void 0);
  const $ = /* @__PURE__ */ de(() => r(b()) ? !c() && !h() && (m() || s(T) && s(T).checked) ? 0 : -1 : b());
  le("SMUI:generic:input:props", { id: E() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (M) => {
    ("_smui_checkbox_accessor" in M || "_smui_radio_accessor" in M) && V(T, M, !0);
  }), le("SMUI:generic:input:unmount", () => {
    V(T, void 0);
  });
  const q = me("SMUI:list:item:mount"), X = me("SMUI:list:item:unmount");
  st(() => {
    if (!m() && !c() && x) {
      let ee = !0, oe = x.getElement();
      for (; oe.previousElementSibling; )
        if (oe = oe.previousElementSibling, oe.nodeType === 1 && oe.classList.contains("mdc-deprecated-list-item") && !oe.classList.contains("mdc-deprecated-list-item--disabled")) {
          ee = !1;
          break;
        }
      ee && V(N, window.requestAnimationFrame(() => j(oe)), !0);
    }
    const M = {
      _smui_list_item_accessor: !0,
      get element() {
        return W();
      },
      get selected() {
        return m();
      },
      set selected(ee) {
        m(ee);
      },
      hasClass: R,
      addClass: O,
      removeClass: D,
      getAttr: F,
      addAttr: G,
      removeAttr: H,
      getPrimaryText: we,
      // For inputs within item.
      get checked() {
        return (s(T) && s(T).checked) ?? !1;
      },
      set checked(ee) {
        s(T) && (s(T).checked = !!ee);
      },
      get hasCheckbox() {
        return !!(s(T) && "_smui_checkbox_accessor" in s(T));
      },
      get hasRadio() {
        return !!(s(T) && "_smui_radio_accessor" in s(T));
      },
      activateRipple() {
        s(T) && s(T).activateRipple();
      },
      deactivateRipple() {
        s(T) && s(T).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: ae,
      get tabindex() {
        return s($);
      },
      set tabindex(ee) {
        b(ee);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return g();
      },
      set activated(ee) {
        g(ee);
      }
    };
    return q && q(M), () => {
      X && X(M), s(N) && window.cancelAnimationFrame(s(N));
    };
  });
  function R(M) {
    return M in I ? I[M] : W().classList.contains(M);
  }
  function O(M) {
    I[M] || (I[M] = !0);
  }
  function D(M) {
    (!(M in I) || I[M]) && (I[M] = !1);
  }
  function K(M, ee) {
    S[M] != ee && (ee === "" || ee == null ? delete S[M] : S[M] = ee);
  }
  function F(M) {
    return M in C ? C[M] ?? null : W().getAttribute(M);
  }
  function G(M, ee) {
    C[M] !== ee && (C[M] = ee);
  }
  function H(M) {
    (!(M in C) || C[M] != null) && (C[M] = void 0);
  }
  function j(M) {
    let ee = !0;
    for (; M.nextElementSibling; )
      if (M = M.nextElementSibling, M.nodeType === 1 && M.classList.contains("mdc-deprecated-list-item")) {
        const oe = M.attributes.getNamedItem("tabindex");
        if (oe && oe.value === "0") {
          ee = !1;
          break;
        }
      }
    ee && b(0);
  }
  function U(M) {
    const ee = M.key === "Enter", oe = M.key === "Space";
    (ee || oe) && ae(M);
  }
  function ae(M) {
    h() || Qe(W(), "SMUIAction", M);
  }
  function we() {
    if (!x)
      return "";
    const M = x.getElement();
    if (!M)
      return "";
    const ee = M.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ee)
      return ee.textContent ?? "";
    const oe = M.querySelector(".mdc-deprecated-list-item__text");
    return oe ? oe.textContent ?? "" : M.textContent ?? "";
  }
  function W() {
    return x.getElement();
  }
  var z = { action: ae, getPrimaryText: we, getElement: W }, L = ge(), Y = ie(L);
  {
    let M = /* @__PURE__ */ de(() => [
      ...c() ? [] : [
        [
          en,
          {
            ripple: !s(T),
            unbounded: !1,
            color: (g() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: O,
            removeClass: D,
            addStyle: K
          }
        ]
      ],
      ...a()
    ]), ee = /* @__PURE__ */ de(() => He({
      "mdc-deprecated-list-item": !u(),
      "mdc-deprecated-list-item__wrapper": u(),
      "mdc-deprecated-list-item--activated": g(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": c(),
      ...I,
      [l()]: !0
    })), oe = /* @__PURE__ */ de(() => Object.entries(S).map(([re, Ce]) => `${re}: ${Ce};`).concat([o()]).join(" ")), Q = /* @__PURE__ */ de(() => _() || void 0);
    _r(Y, p, (re, Ce) => {
      ye(
        Ce(re, rt(
          {
            get tag() {
              return y();
            },
            get use() {
              return s(M);
            },
            get class() {
              return s(ee);
            },
            get style() {
              return s(oe);
            }
          },
          () => i && g() ? { "aria-current": "page" } : {},
          () => !i || u() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(T) && s(T).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Q);
            },
            get tabindex() {
              return s($);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => A,
          {
            onclick: (Ne) => {
              var ke;
              ae(Ne), (ke = e.onclick) == null || ke.call(e, Ne);
            },
            onkeydown: (Ne) => {
              var ke;
              U(Ne), (ke = e.onkeydown) == null || ke.call(e, Ne);
            },
            children: (Ne, ke) => {
              var Me = CE(), Le = ie(Me);
              {
                var k = (ce) => {
                  var Ue = yE();
                  w(ce, Ue);
                };
                Se(Le, (ce) => {
                  d() && ce(k);
                });
              }
              var J = ue(Le);
              pe(J, () => e.children ?? ve), w(Ne, Me);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ne) => x = Ne,
        () => x
      );
    });
  }
  return w(t, L), Re(z);
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ct = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, wa = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, si = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const li = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Cr = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class rc extends Ot {
  static get cssClasses() {
    return Cr;
  }
  static get strings() {
    return li;
  }
  /**
   * See {@link MDCSelectHelperTextAdapter} for typing information on parameters
   * and return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      setAttr: () => {
      },
      getAttr: () => null,
      removeAttr: () => {
      },
      setContent: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, rc.defaultAdapter), e));
  }
  /**
   * @return The ID of the helper text, or null if none is set.
   */
  getId() {
    return this.adapter.getAttr("id");
  }
  /**
   * @return Whether the helper text is currently visible.
   */
  isVisible() {
    return this.adapter.getAttr(li.ARIA_HIDDEN) !== "true";
  }
  /**
   * Sets the content of the helper text field.
   */
  setContent(e) {
    this.adapter.setContent(e);
  }
  /**
   * Sets the helper text to act as a validation message.
   * By default, validation messages are hidden when the select is valid and
   * visible when the select is invalid.
   *
   * @param isValidation True to make the helper text act as an error validation
   *     message.
   */
  setValidation(e) {
    e ? this.adapter.addClass(Cr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Cr.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * Sets the persistency of the validation helper text.
   * This keeps the validation message visible even if the select is valid,
   * though it will be displayed in the normal (grey) color.
   */
  setValidationMsgPersistent(e) {
    e ? this.adapter.addClass(Cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * @return Whether the helper text acts as a validation message.
   * By default, validation messages are hidden when the select is valid and
   * visible when the select is invalid.
   */
  getIsValidation() {
    return this.adapter.hasClass(Cr.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * @return Whether the validation helper text persists even if the input is
   * valid. If it is, it will be displayed in the normal (grey) color.
   */
  getIsValidationMsgPersistent() {
    return this.adapter.hasClass(Cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * When acting as a validation message, shows/hides the helper text and
   * triggers alerts as necessary based on the select's validity.
   */
  setValidity(e) {
    if (!this.adapter.hasClass(Cr.HELPER_TEXT_VALIDATION_MSG))
      return;
    const r = this.adapter.hasClass(Cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    if (!e || r) {
      this.showToScreenReader(), e ? this.adapter.removeAttr(li.ROLE) : this.adapter.setAttr(li.ROLE, "alert");
      return;
    }
    this.adapter.removeAttr(li.ROLE), this.hide();
  }
  /**
   * Makes the helper text visible to screen readers.
   */
  showToScreenReader() {
    this.adapter.removeAttr(li.ARIA_HIDDEN);
  }
  /**
   * Hides the help text from screen readers.
   */
  hide() {
    this.adapter.setAttr(li.ARIA_HIDDEN, "true");
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class ic extends Ot {
  static get cssClasses() {
    return Ct;
  }
  static get numbers() {
    return si;
  }
  static get strings() {
    return wa;
  }
  /**
   * See {@link MDCSelectAdapter} for typing information on parameters and
   * return types.
   */
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      activateBottomLine: () => {
      },
      deactivateBottomLine: () => {
      },
      getSelectedIndex: () => -1,
      setSelectedIndex: () => {
      },
      hasLabel: () => !1,
      floatLabel: () => {
      },
      getLabelWidth: () => 0,
      setLabelRequired: () => {
      },
      hasOutline: () => !1,
      notchOutline: () => {
      },
      closeOutline: () => {
      },
      setRippleCenter: () => {
      },
      notifyChange: () => {
      },
      setSelectedText: () => {
      },
      isSelectAnchorFocused: () => !1,
      getSelectAnchorAttr: () => "",
      setSelectAnchorAttr: () => {
      },
      removeSelectAnchorAttr: () => {
      },
      addMenuClass: () => {
      },
      removeMenuClass: () => {
      },
      openMenu: () => {
      },
      closeMenu: () => {
      },
      getAnchorElement: () => null,
      setMenuAnchorElement: () => {
      },
      setMenuAnchorCorner: () => {
      },
      setMenuWrapFocus: () => {
      },
      focusMenuItemAtIndex: () => {
      },
      getMenuItemCount: () => 0,
      getMenuItemValues: () => [],
      getMenuItemTextAtIndex: () => "",
      isTypeaheadInProgress: () => !1,
      typeaheadMatchItem: () => -1
    };
  }
  /* istanbul ignore next: optional argument is not a branch statement */
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */
  constructor(e, n = {}) {
    var r, i;
    super(Object.assign(Object.assign({}, ic.defaultAdapter), e)), this.disabled = !1, this.isMenuOpen = !1, this.useDefaultValidation = !0, this.customValidity = !0, this.lastSelectedIndex = si.UNSET_INDEX, this.clickDebounceTimeout = 0, this.recentlyClicked = !1, this.leadingIcon = n.leadingIcon, this.helperText = n.helperText, this.ariaDescribedbyIds = ((i = (r = this.adapter.getSelectAnchorAttr(wa.ARIA_DESCRIBEDBY)) === null || r === void 0 ? void 0 : r.split(" ")) === null || i === void 0 ? void 0 : i.filter((a) => {
      var l;
      return a !== ((l = this.helperText) === null || l === void 0 ? void 0 : l.getId()) && a !== "";
    })) || [];
  }
  /** Returns the index of the currently selected menu item, or -1 if none. */
  getSelectedIndex() {
    return this.adapter.getSelectedIndex();
  }
  setSelectedIndex(e, n = !1, r = !1) {
    e >= this.adapter.getMenuItemCount() || (this.adapter.setSelectedIndex(e), e === si.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== e && this.handleChange(), this.lastSelectedIndex = e);
  }
  setValue(e, n = !1) {
    const r = this.adapter.getMenuItemValues().indexOf(e);
    this.setSelectedIndex(
      r,
      /** closeMenu */
      !1,
      n
    );
  }
  getValue() {
    const e = this.adapter.getSelectedIndex(), n = this.adapter.getMenuItemValues();
    return e !== si.UNSET_INDEX ? n[e] : "";
  }
  getDisabled() {
    return this.disabled;
  }
  setDisabled(e) {
    this.disabled = e, this.disabled ? (this.adapter.addClass(Ct.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Ct.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
  }
  /** Opens the menu. */
  openMenu() {
    this.adapter.addClass(Ct.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
  }
  /**
   * @param content Sets the content of the helper text.
   */
  setHelperTextContent(e) {
    this.helperText && this.helperText.setContent(e);
  }
  /**
   * Re-calculates if the notched outline should be notched and if the label
   * should float.
   */
  layout() {
    if (this.adapter.hasLabel()) {
      const e = this.getValue().length > 0, n = this.adapter.hasClass(Ct.FOCUSED), r = e || n, i = this.adapter.hasClass(Ct.REQUIRED);
      this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(i);
    }
  }
  /**
   * Synchronizes the list of options with the state of the foundation. Call
   * this whenever menu options are dynamically updated.
   */
  layoutOptions() {
    const n = this.adapter.getMenuItemValues().indexOf(this.getValue());
    this.setSelectedIndex(
      n,
      /** closeMenu */
      !1,
      /** skipNotify */
      !0
    );
  }
  handleMenuOpened() {
    if (this.adapter.getMenuItemValues().length === 0)
      return;
    const e = this.getSelectedIndex(), n = e >= 0 ? e : 0;
    this.adapter.focusMenuItemAtIndex(n);
  }
  handleMenuClosing() {
    this.adapter.setSelectAnchorAttr("aria-expanded", "false");
  }
  handleMenuClosed() {
    this.adapter.removeClass(Ct.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
  }
  /**
   * Handles value changes, via change event or programmatic updates.
   */
  handleChange() {
    this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(Ct.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
  }
  handleMenuItemAction(e) {
    this.setSelectedIndex(
      e,
      /** closeMenu */
      !0
    );
  }
  /**
   * Handles focus events from select element.
   */
  handleFocus() {
    this.adapter.addClass(Ct.FOCUSED), this.layout(), this.adapter.activateBottomLine();
  }
  /**
   * Handles blur events from select element.
   */
  handleBlur() {
    this.isMenuOpen || this.blur();
  }
  handleClick(e) {
    if (!(this.disabled || this.recentlyClicked)) {
      if (this.setClickDebounceTimeout(), this.isMenuOpen) {
        this.adapter.closeMenu();
        return;
      }
      this.adapter.setRippleCenter(e), this.openMenu();
    }
  }
  /**
   * Handles keydown events on select element. Depending on the type of
   * character typed, does typeahead matching or opens menu.
   */
  handleKeydown(e) {
    if (this.isMenuOpen || !this.adapter.hasClass(Ct.FOCUSED))
      return;
    const n = Dt(e) === Ge.ENTER, r = Dt(e) === Ge.SPACEBAR, i = Dt(e) === Ge.ARROW_UP, a = Dt(e) === Ge.ARROW_DOWN;
    if (!(e.ctrlKey || e.metaKey) && (!r && e.key && e.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
      const o = r ? " " : e.key, c = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
      c >= 0 && this.setSelectedIndex(c), e.preventDefault();
      return;
    }
    !n && !r && !i && !a || (this.openMenu(), e.preventDefault());
  }
  /**
   * Opens/closes the notched outline.
   */
  notchOutline(e) {
    if (!this.adapter.hasOutline())
      return;
    const n = this.adapter.hasClass(Ct.FOCUSED);
    if (e) {
      const r = si.LABEL_SCALE, i = this.adapter.getLabelWidth() * r;
      this.adapter.notchOutline(i);
    } else n || this.adapter.closeOutline();
  }
  /**
   * Sets the aria label of the leading icon.
   */
  setLeadingIconAriaLabel(e) {
    this.leadingIcon && this.leadingIcon.setAriaLabel(e);
  }
  /**
   * Sets the text content of the leading icon.
   */
  setLeadingIconContent(e) {
    this.leadingIcon && this.leadingIcon.setContent(e);
  }
  getUseDefaultValidation() {
    return this.useDefaultValidation;
  }
  setUseDefaultValidation(e) {
    this.useDefaultValidation = e;
  }
  setValid(e) {
    this.useDefaultValidation || (this.customValidity = e), this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()), e ? (this.adapter.removeClass(Ct.INVALID), this.adapter.removeMenuClass(Ct.MENU_INVALID)) : (this.adapter.addClass(Ct.INVALID), this.adapter.addMenuClass(Ct.MENU_INVALID)), this.syncHelperTextValidity(e);
  }
  isValid() {
    return this.useDefaultValidation && this.adapter.hasClass(Ct.REQUIRED) && !this.adapter.hasClass(Ct.DISABLED) ? this.getSelectedIndex() !== si.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
  }
  setRequired(e) {
    e ? this.adapter.addClass(Ct.REQUIRED) : this.adapter.removeClass(Ct.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e);
  }
  getRequired() {
    return this.adapter.getSelectAnchorAttr("aria-required") === "true";
  }
  init() {
    const e = this.adapter.getAnchorElement();
    e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(Ii.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Ct.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Ct.INVALID)), this.layout(), this.layoutOptions();
  }
  /**
   * Unfocuses the select component.
   */
  blur() {
    this.adapter.removeClass(Ct.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(Ct.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
  }
  syncHelperTextValidity(e) {
    if (!this.helperText)
      return;
    this.helperText.setValidity(e);
    const n = this.helperText.isVisible(), r = this.helperText.getId();
    n && r ? this.adapter.setSelectAnchorAttr(wa.ARIA_DESCRIBEDBY, [...this.ariaDescribedbyIds, r].join(" ")) : this.ariaDescribedbyIds.length > 0 ? this.adapter.setSelectAnchorAttr(wa.ARIA_DESCRIBEDBY, this.ariaDescribedbyIds.join(" ")) : this.adapter.removeSelectAnchorAttr(wa.ARIA_DESCRIBEDBY);
  }
  setClickDebounceTimeout() {
    clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(() => {
      this.recentlyClicked = !1;
    }, si.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
  }
}
let xE = 0;
var wE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "id",
  "persistent",
  "validationMsg",
  "children"
]), OE = /* @__PURE__ */ he("<div><!></div>");
function RE(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "id", 19, () => "SMUI-select-helper-text-" + xE++), a = v(e, "persistent", 3, !1), l = v(e, "validationMsg", 3, !1), o = /* @__PURE__ */ qe(e, wE), c, d = /* @__PURE__ */ fe(void 0), u = _e({}), g = _e({}), f = /* @__PURE__ */ fe(void 0);
  const m = me("SMUI:select:helper-text:id"), h = me("SMUI:select:helper-text:mount"), _ = me("SMUI:select:helper-text:unmount");
  st(() => (V(
    d,
    new rc({
      addClass: E,
      removeClass: p,
      hasClass: b,
      getAttr: y,
      setAttr: A,
      removeAttr: x,
      setContent: (q) => {
        V(f, q, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(d)), s(d).init(), () => {
    var q;
    _ && s(d) && _(s(d)), (q = s(d)) == null || q.destroy(), V(d, void 0);
  }));
  function b(q) {
    return q in u ? u[q] : I().classList.contains(q);
  }
  function E(q) {
    u[q] || (u[q] = !0);
  }
  function p(q) {
    (!(q in u) || u[q]) && (u[q] = !1);
  }
  function y(q) {
    return q in g ? g[q] ?? null : I().getAttribute(q);
  }
  function A(q, X) {
    g[q] !== X && (g[q] = X);
  }
  function x(q) {
    (!(q in g) || g[q] != null) && (g[q] = void 0);
  }
  function I() {
    return c;
  }
  var S = { getElement: I }, C = OE();
  je(
    C,
    (q) => ({
      class: q,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...g,
      ...o
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": l(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var T = Ie(C);
  {
    var N = (q) => {
      var X = ge(), R = ie(X);
      pe(R, () => e.children ?? ve), w(q, X);
    }, $ = (q) => {
      var X = bt();
      Ae(() => Ze(X, s(f))), w(q, X);
    };
    Se(T, (q) => {
      s(f) == null ? q(N) : q($, -1);
    });
  }
  return ye(C, (q) => c = q, () => c), Fe(C, (q, X) => Z == null ? void 0 : Z(q, X), n), w(t, C), Re(S);
}
let LE = 0;
var DE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "ripple",
  "disabled",
  "variant",
  "noLabel",
  "label",
  "value",
  "key",
  "dirty",
  "invalid",
  "updateInvalid",
  "required",
  "inputId",
  "hiddenInput",
  "withLeadingIcon",
  "anchor$use",
  "anchor$class",
  "selectedTextContainer$use",
  "selectedTextContainer$class",
  "selectedText$use",
  "selectedText$class",
  "dropdownIcon$use",
  "dropdownIcon$class",
  "menu$class",
  "children",
  "leadingIcon",
  "helperText"
]), NE = /* @__PURE__ */ he("<input/>"), ME = /* @__PURE__ */ he('<span class="mdc-select__ripple"></span>'), PE = /* @__PURE__ */ he('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function HE(t, e) {
  Oe(e, !0);
  const n = () => zn(Ue, "$selectedTextStore", r), [r, i] = br();
  let a = () => {
  };
  function l(P) {
    return P === a;
  }
  let o = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "style", 3, ""), u = v(e, "ripple", 3, !0), g = v(e, "disabled", 3, !1), f = v(e, "variant", 3, "standard"), m = v(e, "noLabel", 3, !1), h = v(e, "label", 3, void 0), _ = v(e, "value", 15), b = v(e, "key", 3, (P) => P), E = v(e, "dirty", 15, !1), p = v(e, "invalid", 15, a), y = v(e, "updateInvalid", 19, () => l(p())), A = v(e, "required", 3, !1), x = v(e, "inputId", 19, () => "SMUI-select-" + LE++), I = v(e, "hiddenInput", 3, !1), S = v(e, "withLeadingIcon", 3, a), C = v(e, "anchor$use", 19, () => []), T = v(e, "anchor$class", 3, ""), N = v(e, "selectedTextContainer$use", 19, () => []), $ = v(e, "selectedTextContainer$class", 3, ""), q = v(e, "selectedText$use", 19, () => []), X = v(e, "selectedText$class", 3, ""), R = v(e, "dropdownIcon$use", 19, () => []), O = v(e, "dropdownIcon$class", 3, ""), D = v(e, "menu$class", 3, ""), K = /* @__PURE__ */ qe(e, DE);
  const F = l(p());
  l(p()) && p(!1);
  let G, H = /* @__PURE__ */ fe(void 0), j = _e({}), U = _e({}), ae, we = _e({}), W = /* @__PURE__ */ fe(-1);
  const z = /* @__PURE__ */ de(() => K.menu$id ?? x() + "-menu");
  let L = /* @__PURE__ */ fe(void 0), Y = me("SMUI:addLayoutListener"), M, ee = /* @__PURE__ */ fe(!1), oe = _e({}), Q = /* @__PURE__ */ fe(void 0), re = /* @__PURE__ */ fe(void 0), Ce = /* @__PURE__ */ fe(!1), Ne, ke = me("SMUI:select:context"), Me, Le, k, J, ce;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const Ue = Vt("");
  le("SMUI:select:selectedText", Ue);
  const We = Vt(_());
  De(() => {
    qn(We, _());
  }), le("SMUI:select:value", We), De(() => {
    s(H) && s(H).getValue() !== b()(_()) && s(H).setValue(b()(_()));
  });
  let It = s(W);
  De(() => {
    if (It !== s(W))
      if (It = s(W), s(H))
        s(H).setSelectedIndex(
          s(W),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const P = Yt();
        _() !== P[s(W)] && _(P[s(W)]);
      }
  }), De(() => {
    s(H) && s(H).getDisabled() !== g() && s(H).setDisabled(g());
  }), De(() => {
    s(H) && E() && s(H).isValid() !== !p() && (y() ? p(!s(H).isValid()) : s(H).setValid(!p()));
  }), De(() => {
    s(H) && s(H).getRequired() !== A() && s(H).setRequired(A());
  }), Y && (M = Y(at)), le("SMUI:select:leading-icon:mount", (P) => {
    Me = P;
  }), le("SMUI:select:leading-icon:unmount", () => {
    Me = void 0;
  }), le("SMUI:list:mount", (P) => {
    Ne = P;
  }), le("SMUI:select:helper-text:id", (P) => {
    V(L, P, !0);
  }), le("SMUI:select:helper-text:mount", (P) => {
    Le = P;
  }), le("SMUI:select:helper-text:unmount", () => {
    V(L, void 0), Le = void 0;
  }), st(() => (V(
    H,
    new ic(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (P) => {
          qn(Ue, P);
        },
        isSelectAnchorFocused: () => document.activeElement === ae,
        getSelectAnchorAttr: te,
        setSelectAnchorAttr: xe,
        removeSelectAnchorAttr: mt,
        addMenuClass: se,
        removeMenuClass: Ve,
        openMenu: () => {
          V(ee, !0);
        },
        closeMenu: () => {
          V(ee, !1);
        },
        getAnchorElement: () => ae,
        setMenuAnchorElement: (P) => {
          V(Q, P, !0);
        },
        setMenuAnchorCorner: (P) => {
          V(re, P, !0);
        },
        setMenuWrapFocus: (P) => {
          V(Ce, P, !0);
        },
        getSelectedIndex: () => s(W),
        setSelectedIndex: (P) => {
          It = P, V(W, P, !0), _(Yt()[s(W)]);
        },
        focusMenuItemAtIndex: (P) => {
          Ne.focusItemAtIndex(P);
        },
        getMenuItemCount: () => Ne.items.length,
        getMenuItemValues: () => Yt().map(b()),
        getMenuItemTextAtIndex: (P) => Ne.getPrimaryTextAtIndex(P),
        isTypeaheadInProgress: () => Ne.typeaheadInProgress,
        typeaheadMatchItem: (P, Ee) => Ne.typeaheadMatchItem(P, Ee),
        // getCommonAdapterMethods
        addClass: be,
        removeClass: Te,
        hasClass: dn,
        setRippleCenter: (P) => J && J.setRippleCenter(P),
        activateBottomLine: () => J && J.activate(),
        deactivateBottomLine: () => J && J.deactivate(),
        notifyChange: (P) => {
          var Ee;
          E(!0), y() && p(!((Ee = s(H)) != null && Ee.isValid())), Qe(Hr(), "SMUISelectChange", { value: _(), index: s(W) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ce,
        notchOutline: (P) => ce && ce.notch(P),
        closeOutline: () => ce && ce.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!k,
        floatLabel: (P) => k && k.float(P),
        getLabelWidth: () => k ? k.getWidth() : 0,
        setLabelRequired: (P) => k && k.setRequired(P)
      },
      {
        get helperText() {
          return Le;
        },
        get leadingIcon() {
          return Me;
        }
      }
    ),
    !0
  ), V(W, Yt().indexOf(_()), !0), s(H).init(), Zt(F), () => {
    var P;
    (P = s(H)) == null || P.destroy(), V(H, void 0);
  })), gr(() => {
    M && M();
  });
  function dn(P) {
    return P in j ? j[P] : Hr().classList.contains(P);
  }
  function be(P) {
    j[P] || (j[P] = !0);
  }
  function Te(P) {
    (!(P in j) || j[P]) && (j[P] = !1);
  }
  function ne(P, Ee) {
    U[P] != Ee && (Ee === "" || Ee == null ? delete U[P] : U[P] = Ee);
  }
  function se(P) {
    oe[P] || (oe[P] = !0);
  }
  function Ve(P) {
    (!(P in oe) || oe[P]) && (oe[P] = !1);
  }
  function te(P) {
    return P in we ? we[P] ?? null : Hr().getAttribute(P);
  }
  function xe(P, Ee) {
    we[P] !== Ee && (we[P] = Ee);
  }
  function mt(P) {
    (!(P in we) || we[P] != null) && (we[P] = void 0);
  }
  function Yt() {
    return Ne.getOrderedList().map((P) => P.getValue());
  }
  function Pr(P) {
    const Ee = P.currentTarget.getBoundingClientRect();
    return (St(P) ? P.touches[0].clientX : P.clientX) - Ee.left;
  }
  function St(P) {
    return "touches" in P;
  }
  function Ft() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function Zt(P) {
    var Ee;
    (Ee = s(H)) == null || Ee.setUseDefaultValidation(P);
  }
  function $n() {
    ae.focus();
  }
  function at() {
    var P;
    (P = s(H)) == null || P.layout();
  }
  function Hr() {
    return G;
  }
  var tt = {
    getUseDefaultValidation: Ft,
    setUseDefaultValidation: Zt,
    focus: $n,
    layout: at,
    getElement: Hr
  }, gt = PE(), dt = ie(gt);
  je(dt, (P, Ee, Et) => ({ class: P, style: Ee, ...Et }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": A(),
      "mdc-select--disabled": g(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": l(S()) ? e.leadingIcon : S(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": p(),
      "mdc-select--activated": s(ee),
      "mdc-data-table__pagination-rows-per-page-select": ke === "data-table:pagination",
      "mdc-data-table__pagination-rows-per-page-select--outlined": ke === "data-table:pagination" && f() === "outlined",
      ...j,
      [c()]: !0
    }),
    () => Object.entries(U).map(([P, Ee]) => `${P}: ${Ee};`).concat([d()]).join(" "),
    () => Yn(K, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Qt = Ie(dt);
  {
    var Hn = (P) => {
      var Ee = NE();
      je(
        Ee,
        (Et) => ({
          type: "hidden",
          required: A(),
          disabled: g(),
          value: _(),
          ...Et
        }),
        [() => lt(K, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), w(P, Ee);
    };
    Se(Qt, (P) => {
      I() && P(Hn);
    });
  }
  var _t = ue(Qt, 2), Ht = (P) => {
    var Ee;
    ae.focus(), s(H) && s(H).handleClick(Pr(P)), (Ee = e.anchor$onclick) == null || Ee.call(e, P);
  }, Gt = (P) => {
    var Ee;
    s(H) && s(H).handleKeydown(P), (Ee = e.onkeydown) == null || Ee.call(e, P);
  }, ct = (P) => {
    var Ee;
    s(H) && s(H).handleBlur(), Qe(Hr(), "blur", P), (Ee = e.anchor$onblur) == null || Ee.call(e, P);
  }, jt = (P) => {
    var Ee;
    s(H) && s(H).handleFocus(), Qe(Hr(), "focus", P), (Ee = e.anchor$onfocus) == null || Ee.call(e, P);
  };
  je(
    _t,
    (P, Ee) => ({
      class: P,
      "aria-required": A() ? "true" : void 0,
      "aria-disabled": g() ? "true" : void 0,
      "aria-controls": s(z),
      "aria-expanded": s(ee) ? "true" : "false",
      "aria-describedby": s(L),
      "aria-labelledby": x() + "-smui-label",
      role: "combobox",
      tabindex: "0",
      ...we,
      ...Ee,
      onclick: Ht,
      onkeydown: Gt,
      onblur: ct,
      onfocus: jt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => lt(K, "anchor$")
    ]
  );
  var pr = Ie(_t);
  {
    var yn = (P) => {
      var Ee = ME();
      w(P, Ee);
    };
    Se(pr, (P) => {
      f() === "filled" && P(yn);
    });
  }
  var Ut = ue(pr, 2);
  {
    var Jt = (P) => {
      {
        let Ee = /* @__PURE__ */ de(() => x() + "-smui-label"), Et = /* @__PURE__ */ de(() => n() !== ""), kt = /* @__PURE__ */ de(() => lt(K, "label$"));
        ye(
          $s(P, rt(
            {
              get id() {
                return s(Ee);
              },
              get floatAbove() {
                return s(Et);
              },
              get required() {
                return A();
              }
            },
            () => s(kt),
            {
              children: (Ir, Sr) => {
                var pa = ge(), Di = ie(pa);
                {
                  var ii = (er) => {
                  }, ml = (er) => {
                    var Ar = bt();
                    Ae(() => Ze(Ar, h())), w(er, Ar);
                  }, gl = (er) => {
                    var Ar = ge(), Sc = ie(Ar);
                    pe(Sc, h), w(er, Ar);
                  };
                  Se(Di, (er) => {
                    h() == null ? er(ii) : typeof h() == "string" ? er(ml, 1) : er(gl, -1);
                  });
                }
                w(Ir, pa);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ir) => k = Ir,
          () => k
        );
      }
    };
    Se(Ut, (P) => {
      f() !== "outlined" && !m() && h() != null && P(Jt);
    });
  }
  var Cn = ue(Ut, 2);
  {
    var Un = (P) => {
      {
        let Ee = /* @__PURE__ */ de(() => m() || h() == null), Et = /* @__PURE__ */ de(() => lt(K, "outline$"));
        ye(
          qf(P, rt(
            {
              get noLabel() {
                return s(Ee);
              }
            },
            () => s(Et),
            {
              children: (kt, Ir) => {
                var Sr = ge(), pa = ie(Sr);
                {
                  var Di = (ii) => {
                    {
                      let ml = /* @__PURE__ */ de(() => x() + "-smui-label"), gl = /* @__PURE__ */ de(() => n() !== ""), er = /* @__PURE__ */ de(() => lt(K, "label$"));
                      ye(
                        $s(ii, rt(
                          {
                            get id() {
                              return s(ml);
                            },
                            get floatAbove() {
                              return s(gl);
                            },
                            get required() {
                              return A();
                            }
                          },
                          () => s(er),
                          {
                            children: (Ar, Sc) => {
                              var Ac = ge(), Oh = ie(Ac);
                              {
                                var Rh = (Ur) => {
                                }, Lh = (Ur) => {
                                  var Ia = bt();
                                  Ae(() => Ze(Ia, h())), w(Ur, Ia);
                                }, Dh = (Ur) => {
                                  var Ia = ge(), Nh = ie(Ia);
                                  pe(Nh, h), w(Ur, Ia);
                                };
                                Se(Oh, (Ur) => {
                                  h() == null ? Ur(Rh) : typeof h() == "string" ? Ur(Lh, 1) : Ur(Dh, -1);
                                });
                              }
                              w(Ar, Ac);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Ar) => k = Ar,
                        () => k
                      );
                    }
                  };
                  Se(pa, (ii) => {
                    !m() && h() != null && ii(Di);
                  });
                }
                w(kt, Sr);
              },
              $$slots: { default: !0 }
            }
          )),
          (kt) => ce = kt,
          () => ce
        );
      }
    };
    Se(Cn, (P) => {
      f() === "outlined" && P(Un);
    });
  }
  var mn = ue(Cn, 2);
  pe(mn, () => e.leadingIcon ?? ve);
  var Tn = ue(mn, 2);
  je(Tn, (P, Ee) => ({ class: P, ...Ee }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [$()]: !0
    }),
    () => lt(K, "selectedTextContainer$")
  ]);
  var un = Ie(Tn);
  je(
    un,
    (P, Ee) => ({
      id: x() + "-smui-selected-text",
      class: P,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": x() + "-smui-label",
      ...Ee
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [X()]: !0
      }),
      () => lt(K, "selectedText$")
    ]
  );
  var ri = ln(un, !0);
  Fe(un, (P, Ee) => Z == null ? void 0 : Z(P, Ee), q), Fe(Tn, (P, Ee) => Z == null ? void 0 : Z(P, Ee), N);
  var Ea = ue(Tn, 2);
  je(Ea, (P, Ee) => ({ class: P, ...Ee }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [O()]: !0
    }),
    () => lt(K, "dropdownIcon$")
  ]), Fe(Ea, (P, Ee) => Z == null ? void 0 : Z(P, Ee), R);
  var Ah = ue(Ea, 2);
  {
    var yh = (P) => {
      {
        let Ee = /* @__PURE__ */ de(() => lt(K, "ripple$"));
        ye(Wf(P, rt(() => s(Ee))), (Et) => J = Et, () => J);
      }
    };
    Se(Ah, (P) => {
      f() !== "outlined" && u() && P(yh);
    });
  }
  ye(_t, (P) => ae = P, () => ae), Fe(_t, (P, Ee) => Z == null ? void 0 : Z(P, Ee), C);
  var Ch = ue(_t, 2);
  {
    let P = /* @__PURE__ */ de(() => He({
      "mdc-select__menu": !0,
      ...oe,
      [D()]: !0
    })), Ee = /* @__PURE__ */ de(() => lt(K, "menu$"));
    EE(Ch, rt(
      {
        get class() {
          return s(P);
        },
        get id() {
          return s(z);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(Q);
        },
        get anchorCorner() {
          return s(re);
        }
      },
      () => s(Ee),
      {
        onSMUIMenuSelected: (Et) => {
          var kt;
          s(H) && s(H).handleMenuItemAction(Et.detail.index), (kt = e.onSMUIMenuSelected) == null || kt.call(e, Et);
        },
        onSMUIMenuSurfaceClosing: (Et) => {
          var kt;
          s(H) && s(H).handleMenuClosing(), (kt = e.onSMUIMenuSurfaceClosing) == null || kt.call(e, Et);
        },
        onSMUIMenuSurfaceClosed: (Et) => {
          var kt;
          s(H) && s(H).handleMenuClosed(), (kt = e.onSMUIMenuSurfaceClosed) == null || kt.call(e, Et);
        },
        onSMUIMenuSurfaceOpened: (Et) => {
          var kt;
          s(H) && s(H).handleMenuOpened(), (kt = e.onSMUIMenuSurfaceOpened) == null || kt.call(e, Et);
        },
        get open() {
          return s(ee);
        },
        set open(Et) {
          V(ee, Et, !0);
        },
        children: (Et, kt) => {
          {
            let Ir = /* @__PURE__ */ de(() => lt(K, "list$"));
            IE(Et, rt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Ce);
                }
              },
              () => s(Ir),
              {
                get selectedIndex() {
                  return s(W);
                },
                set selectedIndex(Sr) {
                  V(W, Sr, !0);
                },
                children: (Sr, pa) => {
                  var Di = ge(), ii = ie(Di);
                  pe(ii, () => e.children ?? ve), w(Sr, Di);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ye(dt, (P) => G = P, () => G), Fe(dt, (P, Ee) => en == null ? void 0 : en(P, Ee), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: be,
    removeClass: Te,
    addStyle: ne
  })), Fe(dt, (P, Ee) => Pl == null ? void 0 : Pl(P, Ee), () => ({ addClass: be, removeClass: Te })), Fe(dt, (P, Ee) => Z == null ? void 0 : Z(P, Ee), o);
  var Th = ue(dt, 2);
  {
    var xh = (P) => {
      {
        let Ee = /* @__PURE__ */ de(() => lt(K, "helperText$"));
        RE(P, rt(() => s(Ee), {
          children: (Et, kt) => {
            var Ir = ge(), Sr = ie(Ir);
            pe(Sr, () => e.helperText ?? ve), w(Et, Ir);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Se(Th, (P) => {
      e.helperText && P(xh);
    });
  }
  Ae(() => Ze(ri, n())), w(t, gt);
  var wh = Re(tt);
  return i(), wh;
}
var UE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "value",
  "children"
]);
function kE(t, e) {
  Oe(e, !0);
  const n = () => zn(u, "$selectedValue", r), [r, i] = br();
  let a = v(e, "use", 19, () => []);
  v(e, "class", 3, "");
  let l = v(e, "value", 3, ""), o = /* @__PURE__ */ qe(e, UE), c;
  const d = me("SMUI:select:selectedText"), u = me("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const g = /* @__PURE__ */ de(() => l() != null && l() !== "" && n() === l());
  st(f), gr(f);
  function f() {
    s(g) && c && qn(d, c.getPrimaryText());
  }
  function m() {
    return c.getElement();
  }
  var h = { getElement: m };
  ye(
    TE(t, rt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return l();
        },
        get value() {
          return l();
        },
        get selected() {
          return s(g);
        }
      },
      () => o,
      {
        children: (b, E) => {
          var p = ge(), y = ie(p);
          pe(y, () => e.children ?? ve), w(b, p);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => c = b,
    () => c
  );
  var _ = Re(h);
  return i(), _;
}
function BE(t, e) {
  Oe(e, !0);
  let n = v(e, "data", 19, () => []);
  v(e, "placeholder", 3, "");
  let r = v(e, "label", 3, "");
  v(e, "description", 3, "");
  let i = v(e, "value", 15), a = v(e, "required", 3, !1);
  v(e, "size", 3, "sm");
  let l = v(e, "variant", 3, "standard"), o = v(e, "selectedOptionIndex", 31, () => -1), c = v(e, "disabled", 3, !1);
  function d(u) {
    return () => o(u);
  }
  HE(t, {
    get disabled() {
      return c();
    },
    key: (u) => `${u ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return l();
    },
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(u) {
      i(u);
    },
    children: (u, g) => {
      var f = ge(), m = ie(f);
      sr(m, 17, n, Fi, (h, _, b) => {
        {
          let E = /* @__PURE__ */ de(() => d(b));
          kE(h, {
            get onclick() {
              return s(E);
            },
            get value() {
              return s(_).value;
            },
            children: (p, y) => {
              var A = bt();
              Ae(() => Ze(A, s(_).label)), w(p, A);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(u, f);
    },
    $$slots: { default: !0 }
  }), Re();
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function FE(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function VE(t) {
  return t ? t.scrollTop === 0 : !1;
}
function GE(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function jE(t) {
  const e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, (n) => e.add(n.offsetTop)), e.size > 1;
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class WE {
  constructor() {
    this.rafIDs = /* @__PURE__ */ new Map();
  }
  /**
   * Requests an animation frame. Cancels any existing frame with the same key.
   * @param {string} key The key for this callback.
   * @param {FrameRequestCallback} callback The callback to be executed.
   */
  request(e, n) {
    this.cancel(e);
    const r = requestAnimationFrame((i) => {
      this.rafIDs.delete(e), n(i);
    });
    this.rafIDs.set(e, r);
  }
  /**
   * Cancels a queued callback with the given key.
   * @param {string} key The key for this callback.
   */
  cancel(e) {
    const n = this.rafIDs.get(e);
    n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
  }
  /**
   * Cancels all queued callback.
   */
  cancelAll() {
    this.rafIDs.forEach((e, n) => {
      this.cancel(n);
    });
  }
  /**
   * Returns the queue of unexecuted callback keys.
   */
  getQueue() {
    const e = [];
    return this.rafIDs.forEach((n, r) => {
      e.push(r);
    }), e;
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const ut = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, Oa = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, Hl = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var el;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(el || (el = {}));
class ac extends Ot {
  static get cssClasses() {
    return ut;
  }
  static get strings() {
    return Oa;
  }
  static get numbers() {
    return Hl;
  }
  static get defaultAdapter() {
    return {
      addBodyClass: () => {
      },
      addClass: () => {
      },
      areButtonsStacked: () => !1,
      clickDefaultButton: () => {
      },
      eventTargetMatches: () => !1,
      getActionFromEvent: () => "",
      getInitialFocusEl: () => null,
      hasClass: () => !1,
      isContentScrollable: () => !1,
      notifyClosed: () => {
      },
      notifyClosing: () => {
      },
      notifyOpened: () => {
      },
      notifyOpening: () => {
      },
      releaseFocus: () => {
      },
      removeBodyClass: () => {
      },
      removeClass: () => {
      },
      reverseButtons: () => {
      },
      trapFocus: () => {
      },
      registerContentEventHandler: () => {
      },
      deregisterContentEventHandler: () => {
      },
      isScrollableContentAtTop: () => !1,
      isScrollableContentAtBottom: () => !1,
      registerWindowEventHandler: () => {
      },
      deregisterWindowEventHandler: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, ac.defaultAdapter), e)), this.dialogOpen = !1, this.isFullscreen = !1, this.animationFrame = 0, this.animationTimer = 0, this.escapeKeyAction = Oa.CLOSE_ACTION, this.scrimClickAction = Oa.CLOSE_ACTION, this.autoStackButtons = !0, this.areButtonsStacked = !1, this.suppressDefaultPressSelector = Oa.SUPPRESS_DEFAULT_PRESS_SELECTOR, this.animFrame = new WE(), this.contentScrollHandler = () => {
      this.handleScrollEvent();
    }, this.windowResizeHandler = () => {
      this.layout();
    }, this.windowOrientationChangeHandler = () => {
      this.layout();
    };
  }
  init() {
    this.adapter.hasClass(ut.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(ut.FULLSCREEN);
  }
  destroy() {
    this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
  }
  open(e) {
    this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(ut.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), e && e.isAboveFullscreenDialog && this.adapter.addClass(ut.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(() => {
      this.adapter.addClass(ut.OPEN), (!e || !e.isScrimless) && this.adapter.addBodyClass(ut.SCROLL_LOCK), this.layout(), this.animationTimer = setTimeout(() => {
        this.handleAnimationTimerEnd(), this.adapter.trapFocus(this.adapter.getInitialFocusEl()), this.adapter.notifyOpened();
      }, Hl.DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  }
  close(e = "") {
    this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(e), this.adapter.addClass(ut.CLOSING), this.adapter.removeClass(ut.OPEN), this.adapter.removeBodyClass(ut.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(() => {
      this.adapter.releaseFocus(), this.handleAnimationTimerEnd(), this.adapter.notifyClosed(e);
    }, Hl.DIALOG_ANIMATION_CLOSE_TIME_MS));
  }
  /**
   * Used only in instances of showing a secondary dialog over a full-screen
   * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
   */
  showSurfaceScrim() {
    this.adapter.addClass(ut.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(() => {
      this.adapter.addClass(ut.SURFACE_SCRIM_SHOWN);
    });
  }
  /**
   * Used only in instances of showing a secondary dialog over a full-screen
   * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
   */
  hideSurfaceScrim() {
    this.adapter.removeClass(ut.SURFACE_SCRIM_SHOWN), this.adapter.addClass(ut.SURFACE_SCRIM_HIDING);
  }
  /**
   * Handles `transitionend` event triggered when surface scrim animation is
   * finished.
   */
  handleSurfaceScrimTransitionEnd() {
    this.adapter.removeClass(ut.SURFACE_SCRIM_HIDING), this.adapter.removeClass(ut.SURFACE_SCRIM_SHOWING);
  }
  isOpen() {
    return this.dialogOpen;
  }
  getEscapeKeyAction() {
    return this.escapeKeyAction;
  }
  setEscapeKeyAction(e) {
    this.escapeKeyAction = e;
  }
  getScrimClickAction() {
    return this.scrimClickAction;
  }
  setScrimClickAction(e) {
    this.scrimClickAction = e;
  }
  getAutoStackButtons() {
    return this.autoStackButtons;
  }
  setAutoStackButtons(e) {
    this.autoStackButtons = e;
  }
  getSuppressDefaultPressSelector() {
    return this.suppressDefaultPressSelector;
  }
  setSuppressDefaultPressSelector(e) {
    this.suppressDefaultPressSelector = e;
  }
  layout() {
    this.animFrame.request(el.POLL_LAYOUT_CHANGE, () => {
      this.layoutInternal();
    });
  }
  /** Handles click on the dialog root element. */
  handleClick(e) {
    if (this.adapter.eventTargetMatches(e.target, Oa.SCRIM_SELECTOR) && this.scrimClickAction !== "")
      this.close(this.scrimClickAction);
    else {
      const r = this.adapter.getActionFromEvent(e);
      r && this.close(r);
    }
  }
  /** Handles keydown on the dialog root element. */
  handleKeydown(e) {
    const n = e.key === "Enter" || e.keyCode === 13;
    if (!n || this.adapter.getActionFromEvent(e))
      return;
    const i = e.composedPath ? e.composedPath()[0] : e.target, a = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(i, this.suppressDefaultPressSelector) : !0;
    n && a && this.adapter.clickDefaultButton();
  }
  /** Handles keydown on the document. */
  handleDocumentKeydown(e) {
    (e.key === "Escape" || e.keyCode === 27) && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
  }
  /**
   * Handles scroll event on the dialog's content element -- showing a scroll
   * divider on the header or footer based on the scroll position. This handler
   * should only be registered on full-screen dialogs with scrollable content.
   */
  handleScrollEvent() {
    this.animFrame.request(el.POLL_SCROLL_POS, () => {
      this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter();
    });
  }
  layoutInternal() {
    this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
  }
  handleAnimationTimerEnd() {
    this.animationTimer = 0, this.adapter.removeClass(ut.OPENING), this.adapter.removeClass(ut.CLOSING);
  }
  /**
   * Runs the given logic on the next animation frame, using setTimeout to
   * factor in Firefox reflow behavior.
   */
  runNextAnimationFrame(e) {
    cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(() => {
      this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(e, 0);
    });
  }
  detectStackedButtons() {
    this.adapter.removeClass(ut.STACKED);
    const e = this.adapter.areButtonsStacked();
    e && this.adapter.addClass(ut.STACKED), e !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = e);
  }
  toggleScrollableClasses() {
    this.adapter.removeClass(ut.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(ut.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
  }
  toggleScrollDividerHeader() {
    this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(ut.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(ut.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(ut.SCROLL_DIVIDER_HEADER);
  }
  toggleScrollDividerFooter() {
    this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(ut.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(ut.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(ut.SCROLL_DIVIDER_FOOTER);
  }
}
var qE = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "open",
  "selection",
  "escapeKeyAction",
  "scrimClickAction",
  "autoStackButtons",
  "fullscreen",
  "sheet",
  "noContentPadding",
  "scrimRemoved",
  "container$class",
  "surface$class",
  "children",
  "over"
]), KE = /* @__PURE__ */ he("<div></div>"), zE = /* @__PURE__ */ he("<div><div><div><!> <!></div></div> <div></div></div> <!>", 1);
function sc(t, e) {
  Oe(e, !0);
  const n = () => zn(O, "$aboveFullscreenShown", r), [r, i] = br(), { FocusTrap: a } = q_, { closest: l, matches: o } = ga;
  let c = v(e, "use", 19, () => []), d = v(e, "class", 3, ""), u = v(e, "open", 15, !1), g = v(e, "selection", 3, !1), f = v(e, "escapeKeyAction", 3, "close"), m = v(e, "scrimClickAction", 3, "close"), h = v(e, "autoStackButtons", 3, !0), _ = v(e, "fullscreen", 3, !1), b = v(e, "sheet", 3, !1), E = v(e, "noContentPadding", 3, !1), p = v(e, "scrimRemoved", 3, !1), y = v(e, "container$class", 3, ""), A = v(e, "surface$class", 3, ""), x = /* @__PURE__ */ qe(e, qE), I, S = /* @__PURE__ */ fe(void 0), C = new $r(), T = _e({}), N, $ = Vt(!1), q = /* @__PURE__ */ fe(!!_()), X = me("SMUI:dialog:aboveFullscreen"), R = !!me("SMUI:dialog:chaining"), O = me("SMUI:dialog:aboveFullscreenShown") ?? Vt(!1), D = me("SMUI:addLayoutListener"), K, F = [], G = (te) => (F.push(te), () => {
    const xe = F.indexOf(te);
    xe >= 0 && F.splice(xe, 1);
  });
  le("SMUI:dialog:chaining", !0), le("SMUI:dialog:actions:reversed", $), le("SMUI:addLayoutListener", G), le("SMUI:dialog:selection", g()), le("SMUI:dialog:setFullscreenTitleless", (te) => {
    V(q, te, !0);
  }), le("SMUI:dialog:aboveFullscreen", X || _()), le("SMUI:dialog:aboveFullscreenShown", O), b() && le("SMUI:icon-button:context", "dialog:sheet"), De(() => {
    s(S) && s(S).getEscapeKeyAction() !== f() && s(S).setEscapeKeyAction(f());
  }), De(() => {
    s(S) && s(S).getScrimClickAction() !== m() && s(S).setScrimClickAction(m());
  }), De(() => {
    s(S) && s(S).getAutoStackButtons() !== h() && s(S).setAutoStackButtons(h());
  }), De(() => {
    h() || qn($, !0);
  }), D && (K = D(re)), De(() => {
    s(S) && s(S).isOpen() !== u() && (u() ? s(S).open({ isAboveFullscreenDialog: !!X }) : s(S).close());
  });
  let H = n();
  De(() => {
    _() && s(S) && H !== n() && (H = n(), n() ? s(S).showSurfaceScrim() : s(S).hideSurfaceScrim());
  }), st(() => (N = new a(I, { initialFocusEl: L() ?? void 0 }), V(
    S,
    new ac({
      addBodyClass: (te) => document.body.classList.add(te),
      addClass: U,
      areButtonsStacked: () => jE(we()),
      clickDefaultButton: () => {
        const te = W();
        te && te.click();
      },
      eventTargetMatches: (te, xe) => te ? o(te, xe) : !1,
      getActionFromEvent: (te) => {
        if (!te.target)
          return "";
        const xe = l(te.target, "[data-mdc-dialog-action]");
        return xe && xe.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: L,
      hasClass: j,
      isContentScrollable: () => FE(z()),
      notifyClosed: (te) => {
        u(!1), Qe(Ce(), "SMUIDialogClosed", te ? { action: te } : {});
      },
      notifyClosing: (te) => Qe(Ce(), "SMUIDialogClosing", te ? { action: te } : {}),
      notifyOpened: () => Qe(Ce(), "SMUIDialogOpened", {}),
      notifyOpening: () => Qe(Ce(), "SMUIDialogOpening", {}),
      releaseFocus: () => N.releaseFocus(),
      removeBodyClass: (te) => document.body.classList.remove(te),
      removeClass: ae,
      reverseButtons: () => {
        qn($, !0);
      },
      trapFocus: () => N.trapFocus(),
      registerContentEventHandler: (te, xe) => {
        const mt = z();
        mt instanceof HTMLElement && C.on(mt, te, xe);
      },
      deregisterContentEventHandler: (te, xe) => {
        const mt = z();
        mt instanceof HTMLElement && C.off(mt, te, xe);
      },
      isScrollableContentAtTop: () => VE(z()),
      isScrollableContentAtBottom: () => GE(z()),
      registerWindowEventHandler: (te, xe) => C.on(window, te, xe),
      deregisterWindowEventHandler: (te, xe) => C.off(window, te, xe)
    }),
    !0
  ), s(S).init(), () => {
    var te;
    (te = s(S)) == null || te.destroy(), V(S, void 0), C.clear();
  })), gr(() => {
    K && K();
  });
  function j(te) {
    return te in T ? T[te] : Ce().classList.contains(te);
  }
  function U(te) {
    T[te] || (T[te] = !0);
  }
  function ae(te) {
    (!(te in T) || T[te]) && (T[te] = !1);
  }
  function we() {
    return [].slice.call(Ce().querySelectorAll(".mdc-dialog__button"));
  }
  function W() {
    return Ce().querySelector("[data-mdc-dialog-button-default]");
  }
  function z() {
    return Ce().querySelector(".mdc-dialog__content");
  }
  function L() {
    return Ce().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Y() {
    X && qn(O, !0), requestAnimationFrame(() => {
      F.forEach((te) => te());
    });
  }
  function M() {
    F.forEach((te) => te());
  }
  function ee() {
    X && qn(O, !1);
  }
  function oe() {
    return u();
  }
  function Q(te) {
    u(te);
  }
  function re() {
    var te;
    return (te = s(S)) == null ? void 0 : te.layout();
  }
  function Ce() {
    return I;
  }
  var Ne = { isOpen: oe, setOpen: Q, layout: re, getElement: Ce }, ke = zE();
  or("resize", Ya, () => u() && s(S) && s(S).layout()), or("orientationchange", Ya, () => u() && s(S) && s(S).layout()), or("keydown", jo.body, (te) => s(S) && s(S).handleDocumentKeydown(te));
  var Me = ie(ke), Le = (te) => {
    var xe;
    Y(), (xe = e.onSMUIDialogOpening) == null || xe.call(e, te);
  }, k = (te) => {
    var xe;
    M(), (xe = e.onSMUIDialogOpened) == null || xe.call(e, te);
  }, J = (te) => {
    var xe;
    ee(), (xe = e.onSMUIDialogClosed) == null || xe.call(e, te);
  }, ce = (te) => {
    var xe;
    s(S) && s(S).handleClick(te), (xe = e.onclick) == null || xe.call(e, te);
  }, Ue = (te) => {
    var xe;
    s(S) && s(S).handleKeydown(te), (xe = e.onkeydown) == null || xe.call(e, te);
  };
  je(
    Me,
    (te, xe) => ({
      class: te,
      role: "alertdialog",
      "aria-modal": "true",
      ...xe,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: k,
      onSMUIDialogClosed: J,
      onclick: ce,
      onkeydown: Ue
    }),
    [
      () => He({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": _(),
        "mdc-dialog--fullscreen--titleless": s(q),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": E(),
        "mdc-dialog--chaining": R,
        "smui-dialog--selection": g(),
        ...T,
        [d()]: !0
      }),
      () => Yn(x, ["container$", "surface$"])
    ]
  );
  var We = Ie(Me);
  je(We, (te, xe) => ({ class: te, ...xe }), [
    () => He({ "mdc-dialog__container": !0, [y()]: !0 }),
    () => lt(x, "container$")
  ]);
  var It = Ie(We);
  je(
    It,
    (te, xe) => ({
      class: te,
      role: "alertdialog",
      "aria-modal": "true",
      tabindex: -1,
      ...xe
    }),
    [
      () => He({ "mdc-dialog__surface": !0, [A()]: !0 }),
      () => lt(x, "surface$")
    ]
  );
  var dn = Ie(It);
  pe(dn, () => e.children ?? ve);
  var be = ue(dn, 2);
  {
    var Te = (te) => {
      var xe = KE();
      Ae((mt) => Qa(xe, 1, mt), [
        () => Ys(He({
          "mdc-dialog__surface-scrim": !0,
          "mdc-dialog__scrim--removed": p()
        }))
      ]), or("transitionend", xe, () => s(S) && s(S).handleSurfaceScrimTransitionEnd()), w(te, xe);
    };
    Se(be, (te) => {
      _() && te(Te);
    });
  }
  var ne = ue(We, 2);
  ye(Me, (te) => I = te, () => I), Fe(Me, (te, xe) => Z == null ? void 0 : Z(te, xe), c);
  var se = ue(Me, 2);
  pe(se, () => e.over ?? ve), Ae((te) => Qa(ne, 1, te), [
    () => Ys(He({
      "mdc-dialog__scrim": !0,
      "mdc-dialog__scrim--removed": p()
    }))
  ]), w(t, ke);
  var Ve = Re(Ne);
  return i(), Ve;
}
var XE = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Xf(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, XE), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (l, o) => {
          var c = ge(), d = ie(c);
          pe(d, () => e.children ?? ve), w(l, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), Re(a);
}
var YE = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function lc(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, YE), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (l, o) => {
        var c = ge(), d = ie(c);
        pe(d, () => e.children ?? ve), w(l, c);
      },
      $$slots: { default: !0 }
    })),
    (l) => r = l,
    () => r
  ), Re(a);
}
var ZE = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function oc(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ qe(e, ZE), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    _a(t, rt(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => n,
      {
        children: (l, o) => {
          var c = ge(), d = ie(c);
          pe(d, () => e.children ?? ve), w(l, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), Re(a);
}
var QE = /* @__PURE__ */ he('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function JE(t, e) {
  Oe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onClose", 3, () => {
  });
  sc(t, {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    onSMUIDialogClosed: (i) => {
      n(!1), r()();
    },
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    get open() {
      return n();
    },
    set open(i) {
      n(i);
    },
    children: (i, a) => {
      var l = QE(), o = ie(l), c = Ie(o);
      pe(c, () => e.title ?? ve);
      var d = ue(o, 2);
      lc(d, {
        id: "large-scroll-content",
        children: (g, f) => {
          var m = ge(), h = ie(m);
          pe(h, () => e.content ?? ve), w(g, m);
        },
        $$slots: { default: !0 }
      });
      var u = ue(d, 2);
      oc(u, {
        children: (g, f) => {
          var m = ge(), h = ie(m);
          pe(h, () => e.actions ?? ve), w(g, m);
        },
        $$slots: { default: !0 }
      }), w(i, l);
    },
    $$slots: { default: !0 }
  }), Re();
}
const cc = Vt({
  component: null,
  props: {},
  isOpen: !1
}), $E = Vt([]);
$E.subscribe;
const _d = _e({ freeze: !1 });
function ep(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ fe(void 0), r = /* @__PURE__ */ fe(!1);
  const i = cc.subscribe((c) => {
    V(n, c, !0), V(r, c.isOpen, !0), _d.freeze = !1;
  });
  st(() => () => i()), De(() => {
    _d.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ge(), l = ie(a);
  {
    var o = (c) => {
      var d = ge(), u = ie(d);
      _r(u, () => s(n).component, (g, f) => {
        f(g, rt(() => s(n).props, {
          get open() {
            return s(r);
          },
          set open(m) {
            V(r, m, !0);
          }
        }));
      }), w(c, d);
    };
    Se(l, (c) => {
      s(n).isOpen && s(n).component && c(o);
    });
  }
  w(t, a), Re();
}
function Ul(t, e = {}) {
  return new Promise((n) => {
    cc.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function kl(t, e) {
  cc.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var tp = /* @__PURE__ */ he('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function Bl(t, e) {
  Oe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "message", 3, ""), a = v(e, "confirmActionText", 3, "OK"), l = v(e, "confirmActionColor", 3, "primary"), o = v(e, "cancelActionText", 3, "Cancel");
  function c() {
    kl("confirm");
  }
  function d() {
    kl("cancel");
  }
  cp(t, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return l();
    },
    get cancelActionText() {
      return o();
    },
    get color() {
      return e.color;
    },
    get headerColor() {
      return e.headerColor;
    },
    get confirmButtonColor() {
      return e.confirmButtonColor;
    },
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => kl("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return n();
    },
    set open(g) {
      n(g);
    },
    content: (g) => {
      var f = tp(), m = ln(f, !0);
      Ae(() => Ze(m, i())), w(g, f);
    },
    $$slots: { content: !0 }
  }), Re();
}
var np = /* @__PURE__ */ he('<div class="header svelte-154fm8w"><h4 id="leave-confirm-title" class="svelte-154fm8w"> </h4></div>'), rp = /* @__PURE__ */ he('<p class="message svelte-154fm8w" id="leave-confirm-content"> </p>'), ip = /* @__PURE__ */ he("<!> <!>", 1), ap = /* @__PURE__ */ he("<!> <!> <!>", 1);
function sp(t, e) {
  Oe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, "Unsaved changes"), i = v(e, "message", 3, "If you leave now, your unsaved changes will be lost."), a = v(e, "discardActionText", 3, "Discard changes"), l = v(e, "cancelActionText", 3, "Keep editing"), o = v(e, "onStay", 3, () => {
  }), c = v(e, "onLeave", 3, () => {
  });
  sc(t, {
    class: "leave-confirm-dialog",
    surface$style: "width: 100%; max-width: 480px;",
    "aria-labelledby": "leave-confirm-title",
    "aria-describedby": "leave-confirm-content",
    get open() {
      return n();
    },
    set open(d) {
      n(d);
    },
    children: (d, u) => {
      var g = ap(), f = ie(g);
      Xf(f, {
        children: (_, b) => {
          var E = np(), p = Ie(E), y = ln(p, !0);
          Ae(() => Ze(y, r())), w(_, E);
        },
        $$slots: { default: !0 }
      });
      var m = ue(f, 2);
      lc(m, {
        children: (_, b) => {
          var E = rp(), p = ln(E, !0);
          Ae(() => Ze(p, i())), w(_, E);
        },
        $$slots: { default: !0 }
      });
      var h = ue(m, 2);
      oc(h, {
        class: "leave-confirm-actions",
        children: (_, b) => {
          var E = ip(), p = ie(E);
          ca(p, {
            type: "button",
            get onclick() {
              return o();
            },
            children: (A, x) => {
              var I = bt();
              Ae(() => Ze(I, l())), w(A, I);
            },
            $$slots: { default: !0 }
          });
          var y = ue(p, 2);
          ca(y, {
            type: "button",
            get onclick() {
              return c();
            },
            style: "background-color: #FF203A; color: white;",
            children: (A, x) => {
              var I = bt();
              Ae(() => Ze(I, a())), w(A, I);
            },
            $$slots: { default: !0 }
          }), w(_, E);
        },
        $$slots: { default: !0 }
      }), w(d, g);
    },
    $$slots: { default: !0 }
  }), Re();
}
var lp = /* @__PURE__ */ he('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), bd = /* @__PURE__ */ he("<!> <!>", 1), op = /* @__PURE__ */ he('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function cp(t, e) {
  Oe(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "confirmActionText", 3, "Confirm"), a = v(e, "confirmActionColor", 3, "primary"), l = v(e, "cancelActionText", 3, "Cancel"), o = v(e, "width", 3, "80vw"), c = v(e, "maxWidth", 3, "85vw"), d = v(e, "height", 3, "85vh"), u = v(e, "maxHeight", 3, "85vh"), g = v(e, "confirmDisabled", 3, !1), f = v(e, "contentPadding", 3, "var(--dialog-h-padding, 1.5rem)"), m = v(e, "showCloseButton", 3, !0), h = v(e, "confirmClose", 3, !1), _ = v(e, "onClose", 3, () => {
  }), b = v(e, "onCancel", 3, () => {
  }), E = v(e, "onConfirm", 3, () => {
  }), p = /* @__PURE__ */ fe(!1), y = /* @__PURE__ */ fe(null), A = /* @__PURE__ */ fe(!1);
  function x(G) {
    h() ? (V(y, G, !0), V(p, !0)) : (V(A, !0), G());
  }
  function I(G) {
    if (s(A)) {
      V(A, !1);
      return;
    }
    G.detail.action === "confirm" ? E()() : x(_());
  }
  function S(G) {
    h() && G.target.classList.contains("mdc-dialog__scrim") && x(_());
  }
  function C(G) {
    h() && n() && G.key === "Escape" && !s(p) && (G.preventDefault(), x(_()));
  }
  function T() {
    V(A, !0), V(p, !1);
    const G = s(y) ?? _();
    V(y, null), G();
  }
  const N = /* @__PURE__ */ de(() => e.headerColor ?? e.color ?? "var(--oscd-plugin-brand, var(--mdc-theme-primary, #ff3e00))"), $ = /* @__PURE__ */ de(() => e.confirmButtonColor ?? e.color ?? "var(--oscd-plugin-action, var(--mdc-theme-primary, #ff3e00))"), q = /* @__PURE__ */ de(() => (e.headerColor ?? e.color) === void 0 ? "var(--oscd-plugin-on-brand, white)" : "white"), X = /* @__PURE__ */ de(() => (e.confirmButtonColor ?? e.color) === void 0 ? "var(--oscd-plugin-on-action, white)" : "white"), R = /* @__PURE__ */ de(() => g() ? "" : `background-color: ${a() === "primary" ? s($) : "#FF203A"}; color: ${a() === "primary" ? s(X) : "white"};`);
  var O = bd();
  or("keydown", Ya, C);
  var D = ie(O);
  {
    let G = /* @__PURE__ */ de(() => h() ? "" : "close"), H = /* @__PURE__ */ de(() => h() ? "" : "close"), j = /* @__PURE__ */ de(() => `width: ${o()}; max-width: ${c()}; height: ${d()}; max-height: ${u()}; --dialog-content-padding: ${f()};`);
    sc(D, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: I,
      get escapeKeyAction() {
        return s(G);
      },
      get scrimClickAction() {
        return s(H);
      },
      onclick: S,
      surface$class: "oscd-base-dialog__surface",
      get surface$style() {
        return s(j);
      },
      get open() {
        return n();
      },
      set open(U) {
        n(U);
      },
      children: (U, ae) => {
        var we = op(), W = ie(we);
        Xf(W, {
          children: (oe, Q) => {
            var re = lp(), Ce = Ie(re), Ne = ln(Ce, !0), ke = ue(Ce, 2);
            {
              var Me = (Le) => {
                LI(Le, {
                  tabindex: "-1",
                  onClick: () => x(_()),
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  get fillColor() {
                    return s(q);
                  }
                });
              };
              Se(ke, (Le) => {
                m() && Le(Me);
              });
            }
            Ae(() => {
              ht(re, `background-color: ${s(N)}; color: ${s(q)};`), Ze(Ne, r());
            }), w(oe, re);
          },
          $$slots: { default: !0 }
        });
        var z = ue(W, 2);
        lc(z, {
          id: "dialog__content",
          children: (oe, Q) => {
            var re = ge(), Ce = ie(re);
            pe(Ce, () => e.content ?? ve), w(oe, re);
          },
          $$slots: { default: !0 }
        });
        var L = ue(z, 2), Y = Ie(L);
        {
          var M = (oe) => {
            var Q = ge(), re = ie(Q);
            pe(re, () => e.actions, () => ({ requestClose: () => x(b()) })), w(oe, Q);
          }, ee = (oe) => {
            oc(oe, {
              class: "oscd-dialog__actions",
              children: (Q, re) => {
                var Ce = bd(), Ne = ie(Ce);
                {
                  var ke = (Le) => {
                    ca(Le, {
                      type: "button",
                      onclick: () => x(b()),
                      color: "secondary",
                      children: (k, J) => {
                        var ce = bt();
                        Ae(() => Ze(ce, l())), w(k, ce);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  Se(Ne, (Le) => {
                    l() && Le(ke);
                  });
                }
                var Me = ue(Ne, 2);
                ca(Me, {
                  type: "button",
                  action: "confirm",
                  get disabled() {
                    return g();
                  },
                  get style() {
                    return s(R);
                  },
                  children: (Le, k) => {
                    var J = bt();
                    Ae(() => Ze(J, i())), w(Le, J);
                  },
                  $$slots: { default: !0 }
                }), w(Q, Ce);
              },
              $$slots: { default: !0 }
            });
          };
          Se(Y, (oe) => {
            e.actions ? oe(M) : oe(ee, -1);
          });
        }
        w(U, we);
      },
      $$slots: { default: !0 }
    });
  }
  var K = ue(D, 2);
  {
    var F = (G) => {
      sp(G, {
        onStay: () => {
          V(p, !1);
        },
        onLeave: T,
        get open() {
          return s(p);
        },
        set open(H) {
          V(p, H, !0);
        }
      });
    };
    Se(K, (G) => {
      h() && G(F);
    });
  }
  w(t, O), Re();
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ed;
(function(t) {
  t.PRIMARY_ACTION = "mdc-evolution-chip__action--primary", t.TRAILING_ACTION = "mdc-evolution-chip__action--trailing", t.CHIP_ROOT = "mdc-evolution-chip";
})(Ed || (Ed = {}));
var da;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(da || (da = {}));
var pd;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.PRIMARY = 1] = "PRIMARY", t[t.TRAILING = 2] = "TRAILING";
})(pd || (pd = {}));
var Id;
(function(t) {
  t.INTERACTION = "MDCChipAction:interaction", t.NAVIGATION = "MDCChipAction:navigation";
})(Id || (Id = {}));
var Sd;
(function(t) {
  t[t.FOCUSABLE = 0] = "FOCUSABLE", t[t.FOCUSABLE_AND_FOCUSED = 1] = "FOCUSABLE_AND_FOCUSED", t[t.NOT_FOCUSABLE = 2] = "NOT_FOCUSABLE";
})(Sd || (Sd = {}));
var Ad;
(function(t) {
  t.ARIA_DISABLED = "aria-disabled", t.ARIA_HIDDEN = "aria-hidden", t.ARIA_SELECTED = "aria-selected", t.DATA_DELETABLE = "data-mdc-deletable", t.DISABLED = "disabled", t.ROLE = "role", t.TAB_INDEX = "tabindex";
})(Ad || (Ad = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const vl = /* @__PURE__ */ new Map();
vl.set(Ge.SPACEBAR, da.SPACEBAR_KEY);
vl.set(Ge.ENTER, da.ENTER_KEY);
vl.set(Ge.DELETE, da.DELETE_KEY);
vl.set(Ge.BACKSPACE, da.BACKSPACE_KEY);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
Ta`aria-`, Ta`data-`, Ta`disabled`, Ta`role`, Ta`tabindex`;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var yd;
(function(t) {
  t.SELECTING = "mdc-evolution-chip--selecting", t.DESELECTING = "mdc-evolution-chip--deselecting", t.SELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--selecting-with-primary-icon", t.DESELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--deselecting-with-primary-icon", t.DISABLED = "mdc-evolution-chip--disabled", t.ENTER = "mdc-evolution-chip--enter", t.EXIT = "mdc-evolution-chip--exit", t.SELECTED = "mdc-evolution-chip--selected", t.HIDDEN = "mdc-evolution-chip--hidden", t.WITH_PRIMARY_ICON = "mdc-evolution-chip--with-primary-icon";
})(yd || (yd = {}));
var Cd;
(function(t) {
  t.INTERACTION = "MDCChip:interaction", t.NAVIGATION = "MDCChip:navigation", t.ANIMATION = "MDCChip:animation";
})(Cd || (Cd = {}));
var Td;
(function(t) {
  t.DATA_REMOVED_ANNOUNCEMENT = "data-mdc-removed-announcement", t.DATA_ADDED_ANNOUNCEMENT = "data-mdc-added-announcement";
})(Td || (Td = {}));
var xd;
(function(t) {
  t.ENTER = "mdc-evolution-chip-enter", t.EXIT = "mdc-evolution-chip-exit";
})(xd || (xd = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var wd;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.LEFT = 1] = "LEFT", t[t.RIGHT = 2] = "RIGHT";
})(wd || (wd = {}));
var Od;
(function(t) {
  t.SELECTION = "selection", t.EXIT = "exit";
})(Od || (Od = {}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rd;
(function(t) {
  t.ARIA_MULTISELECTABLE = "aria-multiselectable";
})(Rd || (Rd = {}));
var Ld;
(function(t) {
  t.CHIP = "mdc-evolution-chip";
})(Ld || (Ld = {}));
var Dd;
(function(t) {
  t.INTERACTION = "MDCChipSet:interaction", t.REMOVAL = "MDCChipSet:removal", t.SELECTION = "MDCChipSet:selection";
})(Dd || (Dd = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Nd;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Nd || (Nd = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Md;
(function(t) {
  t[t.INCREMENT = 0] = "INCREMENT", t[t.DECREMENT = 1] = "DECREMENT";
})(Md || (Md = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Pd;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(Pd || (Pd = {}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Hd;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(Hd || (Hd = {}));
var Ud;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(Ud || (Ud = {}));
const nn = {
  ARROW_DOWN_KEY: "ArrowDown",
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  ARROW_UP_KEY: "ArrowUp",
  END_KEY: "End",
  HOME_KEY: "Home",
  IE_ARROW_DOWN_KEY: "Down",
  IE_ARROW_LEFT_KEY: "Left",
  IE_ARROW_RIGHT_KEY: "Right",
  IE_ARROW_UP_KEY: "Up"
}, Er = /* @__PURE__ */ new Set();
Er.add(nn.ARROW_LEFT_KEY);
Er.add(nn.ARROW_RIGHT_KEY);
Er.add(nn.ARROW_DOWN_KEY);
Er.add(nn.ARROW_UP_KEY);
Er.add(nn.END_KEY);
Er.add(nn.HOME_KEY);
Er.add(nn.IE_ARROW_LEFT_KEY);
Er.add(nn.IE_ARROW_RIGHT_KEY);
Er.add(nn.IE_ARROW_DOWN_KEY);
Er.add(nn.IE_ARROW_UP_KEY);
const ba = /* @__PURE__ */ new Set();
ba.add(nn.ARROW_UP_KEY);
ba.add(nn.ARROW_DOWN_KEY);
ba.add(nn.HOME_KEY);
ba.add(nn.END_KEY);
ba.add(nn.IE_ARROW_UP_KEY);
ba.add(nn.IE_ARROW_DOWN_KEY);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var kd;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(kd || (kd = {}));
const Wt = [];
for (let t = 0; t < 256; ++t)
  Wt.push((t + 256).toString(16).slice(1));
function dp(t, e = 0) {
  return (Wt[t[e + 0]] + Wt[t[e + 1]] + Wt[t[e + 2]] + Wt[t[e + 3]] + "-" + Wt[t[e + 4]] + Wt[t[e + 5]] + "-" + Wt[t[e + 6]] + Wt[t[e + 7]] + "-" + Wt[t[e + 8]] + Wt[t[e + 9]] + "-" + Wt[t[e + 10]] + Wt[t[e + 11]] + Wt[t[e + 12]] + Wt[t[e + 13]] + Wt[t[e + 14]] + Wt[t[e + 15]]).toLowerCase();
}
let Fl;
const up = new Uint8Array(16);
function fp() {
  if (!Fl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Fl = crypto.getRandomValues.bind(crypto);
  }
  return Fl(up);
}
const hp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Bd = { randomUUID: hp };
function vp(t, e, n) {
  var i;
  if (Bd.randomUUID && !e && !t)
    return Bd.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? fp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return dp(r);
}
var mp = /* @__PURE__ */ he('<span class="oscd-icon"><!></span>');
function Pt(t, e) {
  var n = mp(), r = Ie(n);
  pe(r, () => e.children ?? ve), w(t, n);
}
var gp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function _p(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = gp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var bp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function dc(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = bp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Ep = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function pp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Ep();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Ip = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Sp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Ip();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Ap = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Yf(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Ap();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var yp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Cp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = yp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Tp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Zf(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Tp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var xp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Qf(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = xp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var wp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Op(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = wp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Rp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Lp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Rp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
sv();
var Dp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Np(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Dp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Mp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Pp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Mp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Hp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function Up(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Hp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var kp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Bp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = kp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Fp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Vp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Fp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Gp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function jp(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Pt(t, {
    children: (r, i) => {
      var a = Gp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Wp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function qp(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Pt(t, {
    children: (r, i) => {
      var a = Wp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function zp(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Pt(t, {
    children: (r, i) => {
      var a = Kp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Xp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg>');
function Yp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Xp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Zp = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-624 288-432l51 51 105-105v390h72v-390l105 105 51-51-192-192ZM163-264q-33-48-50-103T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149.5-30q79.5 0 149 30t122 82.5Q804-699 834-629.5T864-480q0 58-17.5 113T797-264l-51-52q23-38 34.5-79t11.5-85q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 44 11.5 85.5T214-316l-51 52Z"></path></svg>');
function Qp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Pt(t, {
    children: (r, i) => {
      var a = Zp();
      Ae(() => ht(a, n())), w(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ he('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function $p(t, e) {
  Oe(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  function i(d) {
    r(d.target.value);
  }
  var a = Jp(), l = Ie(a), o = ue(l, 2), c = ln(o, !0);
  Ae(() => Ze(c, n())), Pn("change", l, i), Ja(l, r), w(t, a), Re();
}
An(["change"]);
var eI = /* @__PURE__ */ he('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function tI(t, e) {
  Oe(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  function i(d) {
    r(d.target.value);
  }
  var a = eI(), l = Ie(a), o = ue(l, 2), c = ln(o, !0);
  Ae(() => Ze(c, n())), Pn("change", l, i), Ja(l, r), w(t, a), Re();
}
An(["change"]);
var nI = /* @__PURE__ */ he('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function ns(t, e) {
  Oe(e, !0);
  let n = v(e, "content", 3, ""), r = v(e, "side", 3, "top"), i = v(e, "hoverDelay", 3, 0), a = v(e, "transitionDuration", 3, 80), l = v(e, "disabled", 3, !1), o = v(e, "offset", 3, 8), c = v(e, "backgroundColor", 3, "#000"), d = v(e, "paddingY", 3, 6), u = v(e, "paddingX", 3, 10), g = v(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let m = /* @__PURE__ */ fe(null), h = /* @__PURE__ */ fe(null), _ = /* @__PURE__ */ fe(null), b = /* @__PURE__ */ fe(null), E = /* @__PURE__ */ fe(!1), p = /* @__PURE__ */ fe(null), y = /* @__PURE__ */ fe(null);
  function A(D) {
    var ae;
    if (!D || !D.trim().startsWith("var(")) return D;
    const K = D.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!K) return D;
    const F = K[1], G = (ae = K[2]) == null ? void 0 : ae.trim(), H = s(m) ? getComputedStyle(s(m)).getPropertyValue(F) : "", j = getComputedStyle(document.documentElement).getPropertyValue(F), U = (H || j).trim();
    return U || G || D;
  }
  function x() {
    !n() || l() || (s(p) && clearTimeout(s(p)), i() > 0 ? V(p, setTimeout(() => V(E, !0), i()), !0) : V(E, !0));
  }
  function I() {
    s(p) && clearTimeout(s(p)), V(E, !1);
  }
  function S() {
    x();
  }
  function C() {
    I();
  }
  function T() {
    x();
  }
  function N() {
    I();
  }
  function $(D) {
    n() && ((D.key === "Enter" || D.key === " ") && (D.preventDefault(), x()), D.key === "Escape" && (D.preventDefault(), I()));
  }
  function q() {
    if (!s(h) || !s(b) || !s(m) || l()) return;
    const D = s(m).getBoundingClientRect(), K = s(b).getBoundingClientRect();
    let F = 0, G = 0;
    const H = o();
    switch (r()) {
      case "top":
        F = D.top - K.height - H, G = D.left + D.width / 2 - K.width / 2;
        break;
      case "bottom":
        F = D.bottom + H, G = D.left + D.width / 2 - K.width / 2;
        break;
      case "left":
        F = D.top + D.height / 2 - K.height / 2, G = D.left - K.width - H;
        break;
      case "right":
        F = D.top + D.height / 2 - K.height / 2, G = D.right + H;
        break;
    }
    s(h).style.top = `${F + window.scrollY}px`, s(h).style.left = `${G + window.scrollX}px`;
  }
  function X() {
    var D;
    (D = s(y)) == null || D.disconnect(), V(y, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), V(h, null), V(b, null), V(_, null), s(p) && clearTimeout(s(p));
  }
  gr(X), De(() => {
    if (!(!s(E) || !n() || l())) {
      if (!s(h)) {
        V(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), V(_, s(h).attachShadow({ mode: "open" }), !0);
        const D = document.createElement("style"), K = A(c()), F = A(g());
        D.textContent = `
        .bubble {
          --pad-y: ${d()}px;
          --pad-x: ${u()}px;
          --radius: 4px;
          --bg: ${K};
          --fg: ${F};
          background: var(--bg);
          color: var(--fg);
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: var(--bg);
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after { left: 50%; bottom: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.bottom::after { left: 50%; top: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.left::after { top: 50%; right: -4px; transform: translateY(-50%) rotate(45deg); }
        .bubble.right::after { top: 50%; left: -4px; transform: translateY(-50%) rotate(45deg); }
      `, s(_).appendChild(D), V(b, document.createElement("div"), !0), s(_).appendChild(s(b)), V(
          y,
          new MutationObserver(() => {
            s(E) && q();
          }),
          !0
        ), s(y).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", q());
    }
  }), De(() => {
    if (s(E) || !s(h))
      return;
    s(h).style.opacity = "0";
    const D = s(h), K = setTimeout(
      () => {
        D && D.parentNode && D.parentNode.removeChild(D), s(h) === D && X();
      },
      a()
    );
    return () => clearTimeout(K);
  });
  var R = nI(), O = Ie(R);
  pe(O, () => e.children ?? ve), ye(R, (D) => V(m, D), () => s(m)), Ae(() => {
    hr(R, "aria-describedby", n() && !l() ? f : void 0), hr(R, "aria-haspopup", n() ? "true" : void 0), hr(R, "aria-expanded", n() ? s(E) ? "true" : "false" : void 0);
  }), or("mouseenter", R, S), or("mouseleave", R, C), or("focus", R, T), or("blur", R, N), Pn("keydown", R, $), w(t, R), Re();
}
An(["keydown"]);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Tr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, oi = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
};
var _n;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(_n || (_n = {}));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ra = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
}, Fr = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Fd = {
  ANIM_END_LATCH_MS: 250
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class tl extends Ot {
  static get cssClasses() {
    return Ra;
  }
  static get strings() {
    return Fr;
  }
  static get numbers() {
    return Fd;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      forceLayout: () => {
      },
      hasNativeControl: () => !1,
      isAttachedToDOM: () => !1,
      isChecked: () => !1,
      isIndeterminate: () => !1,
      removeClass: () => {
      },
      removeNativeControlAttr: () => {
      },
      setNativeControlAttr: () => {
      },
      setNativeControlDisabled: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, tl.defaultAdapter), e)), this.currentCheckState = Fr.TRANSITION_STATE_INIT, this.currentAnimationClass = "", this.animEndLatchTimer = 0, this.enableAnimationEndHandler = !1;
  }
  init() {
    this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(Ra.UPGRADED);
  }
  destroy() {
    clearTimeout(this.animEndLatchTimer);
  }
  setDisabled(e) {
    this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(Ra.DISABLED) : this.adapter.removeClass(Ra.DISABLED);
  }
  /**
   * Handles the animationend event for the checkbox
   */
  handleAnimationEnd() {
    this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(() => {
      this.adapter.removeClass(this.currentAnimationClass), this.enableAnimationEndHandler = !1;
    }, Fd.ANIM_END_LATCH_MS));
  }
  /**
   * Handles the change event for the checkbox
   */
  handleChange() {
    this.transitionCheckState();
  }
  transitionCheckState() {
    if (!this.adapter.hasNativeControl())
      return;
    const e = this.currentCheckState, n = this.determineCheckState();
    if (e === n)
      return;
    this.updateAriaChecked();
    const { TRANSITION_STATE_UNCHECKED: r } = Fr, { SELECTED: i } = Ra;
    n === r ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(e, n), this.currentCheckState = n, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
  }
  determineCheckState() {
    const { TRANSITION_STATE_INDETERMINATE: e, TRANSITION_STATE_CHECKED: n, TRANSITION_STATE_UNCHECKED: r } = Fr;
    return this.adapter.isIndeterminate() ? e : this.adapter.isChecked() ? n : r;
  }
  getTransitionAnimationClass(e, n) {
    const { TRANSITION_STATE_INIT: r, TRANSITION_STATE_CHECKED: i, TRANSITION_STATE_UNCHECKED: a } = Fr, { ANIM_UNCHECKED_CHECKED: l, ANIM_UNCHECKED_INDETERMINATE: o, ANIM_CHECKED_UNCHECKED: c, ANIM_CHECKED_INDETERMINATE: d, ANIM_INDETERMINATE_CHECKED: u, ANIM_INDETERMINATE_UNCHECKED: g } = tl.cssClasses;
    switch (e) {
      case r:
        return n === a ? "" : n === i ? u : g;
      case a:
        return n === i ? l : o;
      case i:
        return n === a ? c : d;
      default:
        return n === i ? u : g;
    }
  }
  updateAriaChecked() {
    this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(Fr.ARIA_CHECKED_ATTR, Fr.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(Fr.ARIA_CHECKED_ATTR);
  }
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const gn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, kn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, La = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class uc extends Ot {
  static get cssClasses() {
    return gn;
  }
  static get strings() {
    return kn;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      attachResizeObserver: () => null,
      forceLayout: () => {
      },
      getWidth: () => 0,
      hasClass: () => !1,
      setBufferBarStyle: () => null,
      setPrimaryBarStyle: () => null,
      setStyle: () => {
      },
      removeAttribute: () => {
      },
      removeClass: () => {
      },
      setAttribute: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, uc.defaultAdapter), e)), this.observer = null;
  }
  init() {
    this.determinate = !this.adapter.hasClass(gn.INDETERMINATE_CLASS), this.adapter.addClass(gn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver((e) => {
      if (!this.determinate)
        for (const n of e)
          n.contentRect && this.calculateAndSetDimensions(n.contentRect.width);
    }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
  }
  setDeterminate(e) {
    if (this.determinate = e, this.determinate) {
      this.adapter.removeClass(gn.INDETERMINATE_CLASS), this.adapter.setAttribute(kn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(kn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(kn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
      return;
    }
    this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(gn.INDETERMINATE_CLASS), this.adapter.removeAttribute(kn.ARIA_VALUENOW), this.adapter.removeAttribute(kn.ARIA_VALUEMAX), this.adapter.removeAttribute(kn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
  }
  isDeterminate() {
    return this.determinate;
  }
  setProgress(e) {
    this.progress = e, this.determinate && (this.setPrimaryBarProgress(e), this.adapter.setAttribute(kn.ARIA_VALUENOW, e.toString()));
  }
  getProgress() {
    return this.progress;
  }
  setBuffer(e) {
    this.buffer = e, this.determinate && this.setBufferBarProgress(e);
  }
  getBuffer() {
    return this.buffer;
  }
  open() {
    this.adapter.removeClass(gn.CLOSED_CLASS), this.adapter.removeClass(gn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(kn.ARIA_HIDDEN);
  }
  close() {
    this.adapter.addClass(gn.CLOSED_CLASS), this.adapter.setAttribute(kn.ARIA_HIDDEN, "true");
  }
  isClosed() {
    return this.adapter.hasClass(gn.CLOSED_CLASS);
  }
  /**
   * Handles the transitionend event emitted after `close()` is called and the
   * opacity fades out. This is so that animations are removed only after the
   * progress indicator is completely hidden.
   */
  handleTransitionEnd() {
    this.adapter.hasClass(gn.CLOSED_CLASS) && this.adapter.addClass(gn.CLOSED_ANIMATION_OFF_CLASS);
  }
  destroy() {
    super.destroy(), this.observer && this.observer.disconnect();
  }
  restartAnimation() {
    this.adapter.removeClass(gn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(gn.ANIMATION_READY_CLASS);
  }
  setPrimaryBarProgress(e) {
    const n = `scaleX(${e})`, r = typeof window < "u" ? iE(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(r, n);
  }
  setBufferBarProgress(e) {
    const n = `${e * 100}%`;
    this.adapter.setBufferBarStyle(kn.FLEX_BASIS, n);
  }
  calculateAndSetDimensions(e) {
    const n = e * La.PRIMARY_HALF, r = e * La.PRIMARY_FULL, i = e * La.SECONDARY_QUARTER, a = e * La.SECONDARY_HALF, l = e * La.SECONDARY_FULL;
    this.adapter.setStyle("--mdc-linear-progress-primary-half", `${n}px`), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", `${-n}px`), this.adapter.setStyle("--mdc-linear-progress-primary-full", `${r}px`), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", `${-r}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", `${i}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", `${-i}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-half", `${a}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", `${-a}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-full", `${l}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", `${-l}px`), this.restartAnimation();
  }
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class fc extends Ot {
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      addClassAtRowIndex: () => {
      },
      getAttributeByHeaderCellIndex: () => "",
      getHeaderCellCount: () => 0,
      getHeaderCellElements: () => [],
      getRowCount: () => 0,
      getRowElements: () => [],
      getRowIdAtIndex: () => "",
      getRowIndexByChildElement: () => 0,
      getSelectedRowCount: () => 0,
      getTableContainerHeight: () => 0,
      getTableHeaderHeight: () => 0,
      isCheckboxAtRowIndexChecked: () => !1,
      isHeaderRowCheckboxChecked: () => !1,
      isRowsSelectable: () => !1,
      notifyRowSelectionChanged: () => {
      },
      notifySelectedAll: () => {
      },
      notifySortAction: () => {
      },
      notifyUnselectedAll: () => {
      },
      notifyRowClick: () => {
      },
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClass: () => {
      },
      removeClassAtRowIndex: () => {
      },
      removeClassNameByHeaderCellIndex: () => {
      },
      setAttributeAtRowIndex: () => {
      },
      setAttributeByHeaderCellIndex: () => {
      },
      setClassNameByHeaderCellIndex: () => {
      },
      setHeaderRowCheckboxChecked: () => {
      },
      setHeaderRowCheckboxIndeterminate: () => {
      },
      setProgressIndicatorStyles: () => {
      },
      setRowCheckboxCheckedAtIndex: () => {
      },
      setSortStatusLabelByHeaderCellIndex: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, fc.defaultAdapter), e));
  }
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows
   * are added or removed from table. Use this if registering checkbox is
   * synchronous.
   */
  layout() {
    this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
  }
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows
   * are added or removed from table. Use this if registering checkbox is
   * asynchronous.
   */
  async layoutAsync() {
    this.adapter.isRowsSelectable() && (await this.adapter.registerHeaderRowCheckbox(), await this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
  }
  /**
   * @return Returns array of row elements.
   */
  getRows() {
    return this.adapter.getRowElements();
  }
  /**
   * @return Array of header cell elements.
   */
  getHeaderCells() {
    return this.adapter.getHeaderCellElements();
  }
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */
  setSelectedRowIds(e) {
    for (let n = 0; n < this.adapter.getRowCount(); n++) {
      const r = this.adapter.getRowIdAtIndex(n);
      let i = !1;
      r && e.indexOf(r) >= 0 && (i = !0), this.adapter.setRowCheckboxCheckedAtIndex(n, i), this.selectRowAtIndex(n, i);
    }
    this.setHeaderRowCheckboxState();
  }
  /**
   * @return Returns array of all row ids.
   */
  getRowIds() {
    const e = [];
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      e.push(this.adapter.getRowIdAtIndex(n));
    return e;
  }
  /**
   * @return Returns array of selected row ids.
   */
  getSelectedRowIds() {
    const e = [];
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      this.adapter.isCheckboxAtRowIndexChecked(n) && e.push(this.adapter.getRowIdAtIndex(n));
    return e;
  }
  /**
   * Handles header row checkbox change event.
   */
  handleHeaderRowCheckboxChange() {
    const e = this.adapter.isHeaderRowCheckboxChecked();
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      this.adapter.setRowCheckboxCheckedAtIndex(n, e), this.selectRowAtIndex(n, e);
    e ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
  }
  /**
   * Handles change event originated from row checkboxes.
   */
  handleRowCheckboxChange(e) {
    const n = this.adapter.getRowIndexByChildElement(e.target);
    if (n === -1)
      return;
    const r = this.adapter.isCheckboxAtRowIndexChecked(n);
    this.selectRowAtIndex(n, r), this.setHeaderRowCheckboxState();
    const i = this.adapter.getRowIdAtIndex(n);
    this.adapter.notifyRowSelectionChanged({ rowId: i, rowIndex: n, selected: r });
  }
  /**
   * Handles sort action on sortable header cell.
   */
  handleSortAction(e) {
    const { columnId: n, columnIndex: r, headerCell: i } = e;
    for (let o = 0; o < this.adapter.getHeaderCellCount(); o++)
      o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, Tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, oi.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, _n.NONE));
    this.adapter.setClassNameByHeaderCellIndex(r, Tr.HEADER_CELL_SORTED);
    const a = this.adapter.getAttributeByHeaderCellIndex(r, oi.ARIA_SORT);
    let l = _n.NONE;
    a === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, Tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, oi.ARIA_SORT, _n.DESCENDING), l = _n.DESCENDING) : a === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, Tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, oi.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, oi.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, l), this.adapter.notifySortAction({
      columnId: n,
      columnIndex: r,
      headerCell: i,
      sortValue: l
    });
  }
  /**
   * Handles data table row click event.
   */
  handleRowClick({ rowId: e, row: n, altKey: r, ctrlKey: i, metaKey: a, shiftKey: l }) {
    this.adapter.notifyRowClick({
      rowId: e,
      row: n,
      altKey: r,
      ctrlKey: i,
      metaKey: a,
      shiftKey: l
    });
  }
  /**
   * Shows progress indicator blocking only the table body content when in
   * loading state.
   */
  showProgress() {
    const e = this.adapter.getTableHeaderHeight(), n = this.adapter.getTableContainerHeight() - e, r = e;
    this.adapter.setProgressIndicatorStyles({
      height: `${n}px`,
      top: `${r}px`
    }), this.adapter.addClass(Tr.IN_PROGRESS);
  }
  /**
   * Hides progress indicator when data table is finished loading.
   */
  hideProgress() {
    this.adapter.removeClass(Tr.IN_PROGRESS);
  }
  /**
   * Updates header row checkbox state based on number of rows selected.
   */
  setHeaderRowCheckboxState() {
    this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
  }
  /**
   * Sets the attributes of row element based on selection state.
   */
  selectRowAtIndex(e, n) {
    n ? (this.adapter.addClassAtRowIndex(e, Tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, oi.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(e, Tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, oi.ARIA_SELECTED, "false"));
  }
}
var rI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "stickyHeader",
  "sortable",
  "sort",
  "sortDirection",
  "sortAscendingAriaLabel",
  "sortDescendingAriaLabel",
  "container$use",
  "container$class",
  "table$use",
  "table$class",
  "children",
  "progress",
  "paginate"
]), iI = /* @__PURE__ */ he('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), aI = /* @__PURE__ */ he("<div><div><table><!></table></div> <!> <!></div>");
function sI(t, e) {
  Oe(e, !0);
  const n = () => zn(X, "$progressClosed", r), [r, i] = br(), { closest: a } = ga;
  let l = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), c = v(e, "stickyHeader", 3, !1), d = v(e, "sortable", 3, !1), u = v(e, "sort", 15, null), g = v(e, "sortDirection", 15, "ascending"), f = v(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = v(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = v(e, "container$use", 19, () => []), _ = v(e, "container$class", 3, ""), b = v(e, "table$use", 19, () => []), E = v(e, "table$class", 3, ""), p = /* @__PURE__ */ qe(e, rI), y, A = /* @__PURE__ */ fe(void 0), x, I = /* @__PURE__ */ fe(void 0), S = /* @__PURE__ */ fe(void 0), C = _e({}), T = /* @__PURE__ */ fe(_e({ height: "auto", top: "initial" })), N = me("SMUI:addLayoutListener"), $, q = !1, X = Vt(!1), R = Vt(u());
  De(() => {
    qn(R, u());
  });
  let O = Vt(g());
  De(() => {
    qn(O, g());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", X), le("SMUI:data-table:sortable", d()), le("SMUI:data-table:sort", R), le("SMUI:data-table:sortDirection", O), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", m()), N && ($ = N(we));
  let D;
  De(() => {
    e.progress && s(A) && D !== n() && (D = n(), n() ? s(A).hideProgress() : s(A).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    s(A) && q && s(A).layout();
  }), le("SMUI:data-table:header:mount", (k) => {
    V(I, k, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    V(I, void 0);
  }), le("SMUI:data-table:body:mount", (k) => {
    V(S, k, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    V(S, void 0);
  }), st(() => (V(
    A,
    new fc({
      addClass: F,
      removeClass: G,
      getHeaderCellElements: () => {
        var k;
        return ((k = s(I)) == null ? void 0 : k.cells.map((J) => J.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var k;
        return ((k = s(I)) == null ? void 0 : k.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (k, J) => {
        var ce;
        return ((ce = s(I)) == null ? void 0 : ce.orderedCells[k].getAttr(J)) ?? null;
      },
      setAttributeByHeaderCellIndex: (k, J, ce) => {
        var Ue;
        (Ue = s(I)) == null || Ue.orderedCells[k].addAttr(J, ce);
      },
      setClassNameByHeaderCellIndex: (k, J) => {
        var ce;
        (ce = s(I)) == null || ce.orderedCells[k].addClass(J);
      },
      removeClassNameByHeaderCellIndex: (k, J) => {
        var ce;
        (ce = s(I)) == null || ce.orderedCells[k].removeClass(J);
      },
      notifySortAction: (k) => {
        u(k.columnId), g(k.sortValue), Qe(W(), "SMUIDataTableSorted", k);
      },
      getTableContainerHeight: () => x.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const k = W().querySelector(".mdc-data-table__header-row");
        if (!k)
          throw new Error("MDCDataTable: Table header element not found.");
        return k.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (k) => {
        V(T, k, !0);
      },
      addClassAtRowIndex: (k, J) => {
        var ce;
        (ce = s(S)) == null || ce.orderedRows[k].addClass(J);
      },
      getRowCount: () => {
        var k;
        return ((k = s(S)) == null ? void 0 : k.rows.length) ?? 0;
      },
      getRowElements: () => {
        var k;
        return ((k = s(S)) == null ? void 0 : k.rows.map((J) => J.element)) ?? [];
      },
      getRowIdAtIndex: (k) => {
        var J;
        return ((J = s(S)) == null ? void 0 : J.orderedRows[k].rowId) ?? null;
      },
      getRowIndexByChildElement: (k) => {
        var J;
        return ((J = s(S)) == null ? void 0 : J.orderedRows.map((ce) => ce.element).indexOf(a(k, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var k;
        return ((k = s(S)) == null ? void 0 : k.rows.filter((J) => J.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (k) => {
        var ce;
        const J = (ce = s(S)) == null ? void 0 : ce.orderedRows[k].checkbox;
        return J ? J.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var J;
        const k = (J = s(I)) == null ? void 0 : J.checkbox;
        return k ? k.checked : !1;
      },
      isRowsSelectable: () => !!W().querySelector(".mdc-data-table__row-checkbox") || !!W().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (k) => {
        var ce;
        const J = (ce = s(S)) == null ? void 0 : ce.orderedRows[k.rowIndex];
        J && Qe(W(), "SMUIDataTableSelectionChanged", {
          row: J.element,
          rowId: J.rowId,
          rowIndex: k.rowIndex,
          selected: k.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), Qe(W(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), Qe(W(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (k) => Qe(W(), "SMUIDataTableClickRow", k),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (k, J) => {
        var ce;
        (ce = s(S)) == null || ce.orderedRows[k].removeClass(J);
      },
      setAttributeAtRowIndex: (k, J, ce) => {
        var Ue;
        (Ue = s(S)) == null || Ue.orderedRows[k].addAttr(J, ce);
      },
      setHeaderRowCheckboxChecked: (k) => {
        var ce;
        const J = (ce = s(I)) == null ? void 0 : ce.checkbox;
        J && (J.checked = k);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (k, J) => {
        var Ue;
        const ce = (Ue = s(S)) == null ? void 0 : Ue.orderedRows[k].checkbox;
        ce && (ce.checked = J);
      },
      setSortStatusLabelByHeaderCellIndex: (k, J) => {
      }
    }),
    !0
  ), s(A).init(), s(A).layout(), q = !0, () => {
    var k;
    (k = s(A)) == null || k.destroy(), V(A, void 0);
  })), gr(() => {
    $ && $();
  });
  function K(k) {
    s(A) && s(A).handleRowCheckboxChange(k);
  }
  function F(k) {
    C[k] || (C[k] = !0);
  }
  function G(k) {
    (!(k in C) || C[k]) && (C[k] = !1);
  }
  function H(k) {
    var ce;
    const J = (ce = s(I)) == null ? void 0 : ce.checkbox;
    J && (J.indeterminate = k);
  }
  function j(k) {
    if (!s(A) || !k.detail.target)
      return;
    const J = a(k.detail.target, ".mdc-data-table__header-cell--with-sort");
    J && ae(J);
  }
  function U(k) {
    if (!s(A) || !k.detail.target)
      return;
    const J = a(k.detail.target, ".mdc-data-table__row");
    J && s(A) && s(A).handleRowClick({ rowId: k.detail.rowId, row: J });
  }
  function ae(k) {
    var We, It;
    const J = ((We = s(I)) == null ? void 0 : We.orderedCells) ?? [], ce = J.map((dn) => dn.element).indexOf(k);
    if (ce === -1)
      return;
    const Ue = J[ce].columnId ?? null;
    (It = s(A)) == null || It.handleSortAction({ columnId: Ue, columnIndex: ce, headerCell: k });
  }
  function we() {
    var k;
    return (k = s(A)) == null ? void 0 : k.layout();
  }
  function W() {
    return y;
  }
  var z = { layout: we, getElement: W }, L = aI(), Y = (k) => {
    var J;
    s(A) && s(A).handleHeaderRowCheckboxChange(), (J = e.onSMUIDataTableHeaderCheckboxChange) == null || J.call(e, k);
  }, M = (k) => {
    var J;
    j(k), (J = e.onSMUIDataTableHeaderClick) == null || J.call(e, k);
  }, ee = (k) => {
    var J;
    U(k), (J = e.onSMUIDataTableRowClick) == null || J.call(e, k);
  }, oe = (k) => {
    var J;
    K(k), (J = e.onSMUIDataTableBodyCheckboxChange) == null || J.call(e, k);
  };
  je(
    L,
    (k, J) => ({
      class: k,
      ...J,
      onSMUIDataTableHeaderCheckboxChange: Y,
      onSMUIDataTableHeaderClick: M,
      onSMUIDataTableRowClick: ee,
      onSMUIDataTableBodyCheckboxChange: oe
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": c(),
        ...C,
        [o()]: !0
      }),
      () => Yn(p, ["container$", "table$"])
    ]
  );
  var Q = Ie(L);
  je(Q, (k, J) => ({ class: k, ...J }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [_()]: !0
    }),
    () => lt(p, "container$")
  ]);
  var re = Ie(Q);
  je(re, (k, J) => ({ class: k, ...J }), [
    () => He({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => lt(p, "table$")
  ]);
  var Ce = Ie(re);
  pe(Ce, () => e.children ?? ve), Fe(re, (k, J) => Z == null ? void 0 : Z(k, J), b), ye(Q, (k) => x = k, () => x), Fe(Q, (k, J) => Z == null ? void 0 : Z(k, J), h);
  var Ne = ue(Q, 2);
  {
    var ke = (k) => {
      var J = iI(), ce = ue(Ie(J), 2);
      pe(ce, () => e.progress ?? ve), Ae((Ue) => ht(J, Ue), [
        () => Object.entries(s(T)).map(([Ue, We]) => `${Ue}: ${We};`).join(" ")
      ]), w(k, J);
    };
    Se(Ne, (k) => {
      e.progress && k(ke);
    });
  }
  var Me = ue(Ne, 2);
  pe(Me, () => e.paginate ?? ve), ye(L, (k) => y = k, () => y), Fe(L, (k, J) => Z == null ? void 0 : Z(k, J), l), w(t, L);
  var Le = Re(z);
  return i(), Le;
}
var lI = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), oI = /* @__PURE__ */ he("<thead><!></thead>");
function cI(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, lI), i, a = /* @__PURE__ */ fe(void 0), l = [];
  const o = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const c = me("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (E) => {
    V(a, E, !0), c && c(E);
  });
  const d = me("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (E) => {
    V(a, void 0), d && d(E);
  }), le("SMUI:data-table:cell:mount", (E) => {
    l.push(E), o.set(E.element, E);
  }), le("SMUI:data-table:cell:unmount", (E) => {
    const p = l.findIndex((y) => y === E);
    p !== -1 && l.splice(p, 1), o.delete(E.element);
  });
  const u = me("SMUI:data-table:header:mount"), g = me("SMUI:data-table:header:unmount");
  st(() => {
    const E = {
      get cells() {
        return l;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return s(a);
      }
    };
    return u && u(E), () => {
      g && g(E);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((E) => o.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, _ = oI();
  je(_, () => ({ ...r }));
  var b = Ie(_);
  return pe(b, () => e.children ?? ve), ye(_, (E) => i = E, () => i), Fe(_, (E, p) => Z == null ? void 0 : Z(E, p), n), w(t, _), Re(h);
}
var dI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "children"
]), uI = /* @__PURE__ */ he("<tbody><!></tbody>");
function fI(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, dI), a, l = [];
  const o = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (_) => {
    l.push(_), o.set(_.element, _);
  }), le("SMUI:data-table:row:unmount", (_) => {
    const b = l.findIndex((E) => E === _);
    b !== -1 && l.splice(b, 1), o.delete(_.element);
  });
  const c = me("SMUI:data-table:body:mount"), d = me("SMUI:data-table:body:unmount");
  st(() => {
    const _ = {
      get rows() {
        return l;
      },
      get orderedRows() {
        return u();
      }
    };
    return c && c(_), () => {
      d && d(_);
    };
  });
  function u() {
    return [...g().querySelectorAll(".mdc-data-table__row")].map((_) => o.get(_)).filter((_) => _ && _._smui_data_table_row_accessor);
  }
  function g() {
    return a;
  }
  var f = { getElement: g }, m = uI();
  je(m, (_) => ({ class: _, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = Ie(m);
  return pe(h, () => e.children ?? ve), ye(m, (_) => a = _, () => a), Fe(m, (_, b) => Z == null ? void 0 : Z(_, b), n), w(t, m), Re(f);
}
let hI = 0;
var vI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "rowId",
  "children"
]), mI = /* @__PURE__ */ he("<tr><!></tr>");
function Rs(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "rowId", 19, () => "SMUI-data-table-row-" + hI++), a = /* @__PURE__ */ qe(e, vI), l, o = /* @__PURE__ */ fe(void 0), c = _e({}), d = _e({}), u = me("SMUI:data-table:row:header");
  const g = me("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (N) => {
    V(o, N, !0), g && g(N);
  });
  const f = me("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (N) => {
    V(o, void 0), f && f(N);
  });
  const m = me("SMUI:data-table:row:mount"), h = me("SMUI:data-table:row:unmount");
  st(() => {
    const N = u ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return x();
      },
      get checkbox() {
        return s(o);
      },
      get rowId() {
      },
      get selected() {
        return (s(o) && s(o).checked) ?? !1;
      },
      addClass: _,
      removeClass: b,
      getAttr: E,
      addAttr: p
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return x();
      },
      get checkbox() {
        return s(o);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(o) && s(o).checked) ?? !1;
      },
      addClass: _,
      removeClass: b,
      getAttr: E,
      addAttr: p
    };
    return m && m(N), () => {
      h && h(N);
    };
  });
  function _(N) {
    c[N] || (c[N] = !0);
  }
  function b(N) {
    (!(N in c) || c[N]) && (c[N] = !1);
  }
  function E(N) {
    return N in d ? d[N] ?? null : x().getAttribute(N);
  }
  function p(N, $) {
    d[N] !== $ && (d[N] = $);
  }
  function y(N) {
    Qe(x(), "SMUIDataTableHeaderClick", N);
  }
  function A(N) {
    Qe(x(), "SMUIDataTableRowClick", { rowId: i(), target: N.target });
  }
  function x() {
    return l;
  }
  var I = { getElement: x }, S = mI(), C = (N) => {
    var $;
    u ? y(N) : A(N), ($ = e.onclick) == null || $.call(e, N);
  };
  je(
    S,
    (N) => ({
      class: N,
      "aria-selected": s(o) ? s(o).checked ? "true" : "false" : void 0,
      ...d,
      ...a,
      onclick: C
    }),
    [
      () => He({
        "mdc-data-table__header-row": u,
        "mdc-data-table__row": !u,
        "mdc-data-table__row--selected": !u && s(o) && s(o).checked,
        ...c,
        [r()]: !0
      })
    ]
  );
  var T = Ie(S);
  return pe(T, () => e.children ?? ve), ye(S, (N) => l = N, () => l), Fe(S, (N, $) => Z == null ? void 0 : Z(N, $), n), w(t, S), Re(I);
}
let gI = 0;
var _I = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "numeric",
  "checkbox",
  "columnId",
  "sortable",
  "children"
]), bI = /* @__PURE__ */ he('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), EI = /* @__PURE__ */ he("<th><!></th>"), pI = /* @__PURE__ */ he("<td><!></td>");
function Da(t, e) {
  Oe(e, !0);
  const n = () => zn(E, "$sort", i), r = () => zn(p, "$sortDirection", i), [i, a] = br();
  let l = me("SMUI:data-table:row:header"), o = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "numeric", 3, !1), u = v(e, "checkbox", 3, !1), g = v(e, "columnId", 19, () => l ? "SMUI-data-table-column-" + gI++ : "SMUI-data-table-unused"), f = v(e, "sortable", 19, () => me("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, _I), h, _ = _e({}), b = _e({}), E = me("SMUI:data-table:sort"), p = me("SMUI:data-table:sortDirection"), y = me("SMUI:data-table:sortAscendingAriaLabel"), A = me("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", g() + "-status-label"));
  const x = me("SMUI:data-table:cell:mount"), I = me("SMUI:data-table:cell:unmount");
  st(() => {
    const H = l ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return g();
      },
      addClass: S,
      removeClass: C,
      getAttr: T,
      addAttr: N
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: C,
      getAttr: T,
      addAttr: N
    };
    return x && x(H), () => {
      I && I(H);
    };
  });
  function S(H) {
    _[H] || (_[H] = !0);
  }
  function C(H) {
    (!(H in _) || _[H]) && (_[H] = !1);
  }
  function T(H) {
    return H in b ? b[H] ?? null : X().getAttribute(H);
  }
  function N(H, j) {
    b[H] !== j && (b[H] = j);
  }
  function $(H) {
    Qe(X(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function q(H) {
    Qe(X(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function X() {
    return h;
  }
  var R = { getElement: X }, O = ge(), D = ie(O);
  {
    var K = (H) => {
      var j = EI(), U = (z) => {
        var L;
        u() && $(z), (L = e.onchange) == null || L.call(e, z);
      };
      je(
        j,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": g(),
          "aria-sort": f() ? n() === g() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: U
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": d(),
            "mdc-data-table__header-cell--checkbox": u(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === g(),
            ..._,
            [c()]: !0
          })
        ]
      );
      var ae = Ie(j);
      {
        var we = (z) => {
          var L = bI(), Y = Ie(L);
          pe(Y, () => e.children ?? ve);
          var M = ue(Y, 2), ee = ln(M, !0);
          Ae(() => {
            hr(M, "id", `${g() ?? ""}-status-label`), Ze(ee, n() === g() ? r() === "ascending" ? y : A : "");
          }), w(z, L);
        }, W = (z) => {
          var L = ge(), Y = ie(L);
          pe(Y, () => e.children ?? ve), w(z, L);
        };
        Se(ae, (z) => {
          f() ? z(we) : z(W, -1);
        });
      }
      ye(j, (z) => h = z, () => h), Fe(j, (z, L) => Z == null ? void 0 : Z(z, L), o), w(H, j);
    }, F = (H) => {
      var j = pI(), U = (we) => {
        var W;
        u() && q(we), (W = e.onchange) == null || W.call(e, we);
      };
      je(
        j,
        (we) => ({
          class: we,
          ...b,
          ...m,
          onchange: U
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": d(),
            "mdc-data-table__cell--checkbox": u(),
            ..._,
            [c()]: !0
          })
        ]
      );
      var ae = Ie(j);
      pe(ae, () => e.children ?? ve), ye(j, (we) => h = we, () => h), Fe(j, (we, W) => Z == null ? void 0 : Z(we, W), o), w(H, j);
    };
    Se(D, (H) => {
      l ? H(K) : H(F, -1);
    });
  }
  w(t, O);
  var G = Re(R);
  return a(), G;
}
var II = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "indeterminate",
  "closed",
  "progress",
  "buffer"
]), SI = /* @__PURE__ */ he('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function AI(t, e) {
  Oe(e, !0);
  const [n, r] = br();
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), l = v(e, "style", 3, ""), o = v(e, "indeterminate", 3, !1), c = v(e, "closed", 3, !1), d = v(e, "progress", 3, 0), u = v(e, "buffer", 3, void 0), g = /* @__PURE__ */ qe(e, II), f, m = /* @__PURE__ */ fe(void 0), h = _e({}), _ = _e({}), b = _e({}), E = _e({}), p = _e({}), y = me("SMUI:linear-progress:context"), A = me("SMUI:linear-progress:closed");
  De(() => {
    A && qn(A, c());
  }), De(() => {
    s(m) && s(m).isDeterminate() !== !o() && s(m).setDeterminate(!o());
  }), De(() => {
    s(m) && s(m).getProgress() !== d() && s(m).setProgress(d());
  }), De(() => {
    s(m) && (u() == null ? s(m).setBuffer(1) : s(m).setBuffer(u()));
  }), De(() => {
    s(m) && (c() ? s(m).close() : s(m).open());
  }), st(() => (V(
    m,
    new uc({
      addClass: I,
      forceLayout: () => {
        X().getBoundingClientRect();
      },
      setBufferBarStyle: $,
      setPrimaryBarStyle: q,
      hasClass: x,
      removeAttribute: T,
      removeClass: S,
      setAttribute: C,
      setStyle: N,
      attachResizeObserver: (j) => {
        const U = window.ResizeObserver;
        if (U) {
          const ae = new U(j);
          return ae.observe(X()), ae;
        }
        return null;
      },
      getWidth: () => X().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var j;
    (j = s(m)) == null || j.destroy(), V(m, void 0);
  }));
  function x(j) {
    return j in h ? h[j] : X().classList.contains(j);
  }
  function I(j) {
    h[j] || (h[j] = !0);
  }
  function S(j) {
    (!(j in h) || h[j]) && (h[j] = !1);
  }
  function C(j, U) {
    _[j] !== U && (_[j] = U);
  }
  function T(j) {
    (!(j in _) || _[j] != null) && (_[j] = void 0);
  }
  function N(j, U) {
    b[j] != U && (U === "" || U == null ? delete b[j] : b[j] = U);
  }
  function $(j, U) {
    E[j] != U && (U === "" || U == null ? delete E[j] : E[j] = U);
  }
  function q(j, U) {
    p[j] != U && (U === "" || U == null ? delete p[j] : p[j] = U);
  }
  function X() {
    return f;
  }
  var R = { getElement: X }, O = SI(), D = (j) => {
    var U;
    s(m) && s(m).handleTransitionEnd(), (U = e.ontransitionend) == null || U.call(e, j);
  };
  je(
    O,
    (j, U) => ({
      class: j,
      style: U,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": o() ? void 0 : d(),
      ..._,
      ...g,
      ontransitionend: D
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": o(),
        "mdc-linear-progress--closed": c(),
        "mdc-data-table__linear-progress": y === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([j, U]) => `${j}: ${U};`).concat([l()]).join(" ")
    ]
  );
  var K = Ie(O), F = Ie(K), G = ue(K, 2);
  ye(O, (j) => f = j, () => f), Fe(O, (j, U) => Z == null ? void 0 : Z(j, U), i), Ae(
    (j, U) => {
      ht(F, j), ht(G, U);
    },
    [
      () => Object.entries(E).map(([j, U]) => `${j}: ${U};`).join(" "),
      () => Object.entries(p).map(([j, U]) => `${j}: ${U};`).join(" ")
    ]
  ), w(t, O);
  var H = Re(R);
  return r(), H;
}
An(["click"]);
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vd;
(function(t) {
  t.PROCESSING = "mdc-switch--processing", t.SELECTED = "mdc-switch--selected", t.UNSELECTED = "mdc-switch--unselected";
})(Vd || (Vd = {}));
var Gd;
(function(t) {
  t.RIPPLE = ".mdc-switch__ripple";
})(Gd || (Gd = {}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const yI = {
  ROOT: "mdc-form-field"
}, CI = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class hc extends Ot {
  static get cssClasses() {
    return yI;
  }
  static get strings() {
    return CI;
  }
  static get defaultAdapter() {
    return {
      activateInputRipple: () => {
      },
      deactivateInputRipple: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerInteractionHandler: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, hc.defaultAdapter), e)), this.click = () => {
      this.handleClick();
    };
  }
  init() {
    this.adapter.registerInteractionHandler("click", this.click);
  }
  destroy() {
    this.adapter.deregisterInteractionHandler("click", this.click);
  }
  handleClick() {
    this.adapter.activateInputRipple(), requestAnimationFrame(() => {
      this.adapter.deactivateInputRipple();
    });
  }
}
let TI = 0;
var xI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "align",
  "justify",
  "noWrap",
  "inputId",
  "label$use",
  "label$class",
  "children",
  "label"
]), wI = /* @__PURE__ */ he("<div><!> <label><!></label></div>");
function OI(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "align", 3, "start"), a = v(e, "justify", 3, "normal"), l = v(e, "noWrap", 3, !1), o = v(e, "inputId", 19, () => "SMUI-form-field-" + TI++), c = v(e, "label$use", 19, () => []), d = v(e, "label$class", 3, ""), u = /* @__PURE__ */ qe(e, xI), g, f = /* @__PURE__ */ fe(void 0), m = new $r(), h, _ = /* @__PURE__ */ fe(void 0);
  le("SMUI:generic:input:props", { id: o() }), le("SMUI:generic:input:mount", (I) => {
    V(_, I, !0);
  }), le("SMUI:generic:input:unmount", () => {
    V(_, void 0);
  }), st(() => (V(
    f,
    new hc({
      activateInputRipple: () => {
        s(_) && s(_).activateRipple();
      },
      deactivateInputRipple: () => {
        s(_) && s(_).deactivateRipple();
      },
      deregisterInteractionHandler: (I, S) => m.off(h, I, S),
      registerInteractionHandler: (I, S) => m.on(h, I, S)
    }),
    !0
  ), s(f).init(), () => {
    var I;
    (I = s(f)) == null || I.destroy(), V(f, void 0), m.clear();
  }));
  function b() {
    return g;
  }
  var E = { getElement: b }, p = wI();
  je(p, (I, S) => ({ class: I, ...S }), [
    () => He({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--space-between": a() === "space-between",
      "mdc-form-field--nowrap": l(),
      [r()]: !0
    }),
    () => Yn(u, ["label$"])
  ]);
  var y = Ie(p);
  pe(y, () => e.children ?? ve);
  var A = ue(y, 2);
  je(A, (I, S) => ({ class: I, for: o(), ...S }), [
    () => He({ "mdc-label": !0, [d()]: !0 }),
    () => lt(u, "label$")
  ]);
  var x = Ie(A);
  return pe(x, () => e.label ?? ve), ye(A, (I) => h = I, () => h), Fe(A, (I, S) => Z == null ? void 0 : Z(I, S), c), ye(p, (I) => g = I, () => g), Fe(p, (I, S) => Z == null ? void 0 : Z(I, S), n), w(t, p), Re(E);
}
var RI = /* @__PURE__ */ he('<button class="icon-button svelte-jv2py4"><!></button>');
function LI(t, e) {
  Oe(e, !0);
  let n = v(e, "tooltipSide", 3, "top"), r = v(e, "showDelay", 3, 1e3), i = v(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = v(e, "size", 3, "20px"), l = /* @__PURE__ */ de(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  ns(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (o, c) => {
      var d = RI(), u = Ie(d);
      {
        var g = (S) => {
          Qf(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, f = (S) => {
          Lp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, m = (S) => {
          Zf(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, h = (S) => {
          Op(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, _ = (S) => {
          Up(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, b = (S) => {
          Bp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, E = (S) => {
          Vp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, p = (S) => {
          jp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, y = (S) => {
          Yp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, A = (S) => {
          Np(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, x = (S) => {
          Qp(S, {
            get svgStyles() {
              return s(l);
            }
          });
        }, I = (S) => {
          var C = bt();
          Ae(() => Ze(C, `Unsupported supported type: ${e.type ?? ""}`)), w(S, C);
        };
        Se(u, (S) => {
          e.type === "delete" ? S(g) : e.type === "duplicate" ? S(f, 1) : e.type === "edit" ? S(m, 2) : e.type === "visibility" ? S(h, 3) : e.type === "wand-stars" ? S(_, 4) : e.type === "link-off" ? S(b, 5) : e.type === "close" ? S(E, 6) : e.type === "star" ? S(p, 7) : e.type === "open_in_new" ? S(y, 8) : e.type === "info" ? S(A, 9) : e.type === "input-circle" ? S(x, 10) : S(I, -1);
        });
      }
      Ae(() => hr(d, "aria-label", e.tooltip)), Pn("click", d, (S) => {
        var C;
        S.stopPropagation(), (C = e.onClick) == null || C.call(e, S);
      }), w(o, d);
    },
    $$slots: { default: !0 }
  }), Re();
}
An(["click"]);
function To(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var DI = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
To({}, DI.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ls, jd = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ls = {}, To(Ls, jd.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), To(Ls, jd.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function NI(t) {
  return t * t * t;
}
function Jf(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function MI(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: l = Jf } = r, o = getComputedStyle(t), c = o.transform === "none" ? "" : o.transform, [d, u] = o.transformOrigin.split(" ").map(parseFloat);
  d /= t.clientWidth, u /= t.clientHeight;
  var g = PI(t), f = t.clientWidth / n.width / g, m = t.clientHeight / n.height / g, h = e.left + e.width * d, _ = e.top + e.height * u, b = n.left + n.width * d, E = n.top + n.height * u, p = (h - b) * f, y = (_ - E) * m, A = e.width / n.width, x = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(p * p + y * y)) : a,
    easing: l,
    css: (I, S) => {
      var C = S * p, T = S * y, N = I + S * A, $ = I + S * x;
      return `transform: ${c} translate(${C}px, ${T}px) scale(${N}, ${$});`;
    }
  };
}
function PI(t) {
  if ("currentCSSZoom" in t)
    return (
      /** @type {number} */
      t.currentCSSZoom
    );
  for (var e = t, n = 1; e !== null; )
    n *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return n;
}
function HI(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Wd(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function nl(t, { delay: e = 0, duration: n = 400, easing: r = HI, x: i = 0, y: a = 0, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), c = +o.opacity, d = o.transform === "none" ? "" : o.transform, u = c * (1 - l), [g, f] = Wd(i), [m, h] = Wd(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (_, b) => `
			transform: ${d} translate(${(1 - _) * g}${f}, ${(1 - _) * m}${h});
			opacity: ${c - u * b}`
  };
}
An([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var UI = /* @__PURE__ */ he('<div class="detail svelte-4xu36c"> </div>'), kI = /* @__PURE__ */ he('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function BI(t, e) {
  Oe(e, !0);
  let n = v(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "var(--oscd-status-success, #4CAF50)",
    error: "var(--oscd-status-error, #F44336)",
    info: "var(--oscd-status-info, #2196F3)",
    warn: "var(--oscd-status-warning, #FF9800)"
  };
  function a() {
    var b;
    (b = n()) == null || b();
  }
  var l = kI(), o = Ie(l), c = Ie(o);
  So(c, {
    class: "material-icons",
    children: (b, E) => {
      var p = bt();
      Ae(() => Ze(p, r[e.type])), w(b, p);
    },
    $$slots: { default: !0 }
  });
  var d = ue(o, 2), u = Ie(d), g = ln(u, !0), f = ue(u, 2);
  {
    var m = (b) => {
      var E = UI(), p = ln(E, !0);
      Ae(() => Ze(p, e.detail)), w(b, E);
    };
    Se(f, (b) => {
      e.detail && b(m);
    });
  }
  var h = ue(d, 2), _ = Ie(h);
  So(_, {
    class: "material-icons",
    children: (b, E) => {
      var p = bt("close");
      w(b, p);
    },
    $$slots: { default: !0 }
  }), Ae(() => {
    ht(l, `--color:${i[e.type] ?? ""}`), Ze(g, e.summary);
  }), Pn("click", h, a), zs(1, l, () => nl, () => ({ x: 0, y: 30, duration: 150, easing: NI })), zs(2, l, () => nl, () => ({ x: 50, y: 0, duration: 150, easing: Jf })), w(t, l), Re();
}
An(["click"]);
const FI = 4e3;
function VI() {
  let t = _e({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, l, o = FI) => {
    const c = e++, d = { id: c, summary: a, detail: l, type: i };
    return t.items = [...t.items, d], setTimeout(
      () => {
        n(c);
      },
      o
    ), c;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (i, a, l) => r("success", i, a, l),
    error: (i, a, l) => r("error", i, a, l),
    info: (i, a, l) => r("info", i, a, l),
    warn: (i, a, l) => r("warn", i, a, l),
    remove: n
  };
}
const Fn = VI();
var GI = /* @__PURE__ */ he("<div><!></div>"), jI = /* @__PURE__ */ he('<div class="toast-host svelte-11vwiay"></div>');
function WI(t, e) {
  Oe(e, !1);
  const n = Fn.toasts;
  gm();
  var r = jI();
  sr(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var l = GI(), o = Ie(l);
    BI(o, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Fn.remove(s(a).id)
    }), am(l, () => MI, null), w(i, l);
  }), w(t, r), Re();
}
var qI = /* @__PURE__ */ he('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), KI = /* @__PURE__ */ he('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), zI = /* @__PURE__ */ he('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function XI(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ de(() => !!e.value);
  var r = zI(), i = Ie(r), a = Ie(i);
  {
    var l = (f) => {
      ns(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var _ = qI(), b = Ie(_);
          dc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), Pn("click", _, (E) => {
            E.stopPropagation(), e.onRemove();
          }), w(m, _);
        },
        $$slots: { default: !0 }
      });
    }, o = (f) => {
      ns(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          qp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    Se(a, (f) => {
      s(n) ? f(l) : f(o, -1);
    });
  }
  var c = ue(i, 2), d = ln(c, !0), u = ue(c, 2);
  {
    var g = (f) => {
      var m = KI(), h = ue(ie(m), 2), _ = ln(h, !0), b = ue(h, 2), E = Ie(b);
      Pp(E, { svgStyles: "fill: gray;" }), Ae(() => Ze(_, e.value)), w(f, m);
    };
    Se(u, (f) => {
      s(n) && f(g);
    });
  }
  Ae(() => {
    Qa(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), Ze(d, e.label);
  }), Pn("click", r, (f) => {
    f.stopPropagation(), e.onOpen();
  }), w(t, r), Re();
}
An(["click"]);
var YI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "disabled",
  "touch",
  "indeterminate",
  "group",
  "checked",
  "value",
  "valueKey",
  "input$use",
  "input$class"
]), ZI = /* @__PURE__ */ he('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function QI(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), l = v(e, "style", 3, ""), o = v(e, "disabled", 15, !1), c = v(e, "touch", 3, !1), d = v(e, "indeterminate", 15, n), u = v(e, "group", 11, n), g = v(e, "checked", 15, n), f = v(e, "value", 3, null), m = v(e, "valueKey", 3, n), h = v(e, "input$use", 19, () => []), _ = v(e, "input$class", 3, ""), b = /* @__PURE__ */ qe(e, YI), E, p = /* @__PURE__ */ fe(void 0), y = /* @__PURE__ */ fe(void 0), A = _e({}), x = _e({}), I = _e({}), S = /* @__PURE__ */ fe(!1), C = _e(me("SMUI:generic:input:props") ?? {}), T = /* @__PURE__ */ fe(_e(r(u()) ? r(g()) ? !1 : !!g() : u().findIndex((Q) => Q === f()) !== -1)), N = me("SMUI:checkbox:context"), $ = me("SMUI:data-table:row:header"), q = g(), X = r(u()) ? [] : [...u()], R = s(T);
  De(() => {
    let Q = !1;
    if (!r(u()))
      if (R !== s(T)) {
        const re = u().findIndex((Ce) => Ce === f());
        s(T) && re === -1 ? u().push(f()) : !s(T) && re !== -1 && u().splice(re, 1), Q = !0;
      } else {
        const re = X.findIndex((Ne) => Ne === f()), Ce = u().findIndex((Ne) => Ne === f());
        re > -1 && Ce === -1 ? (V(T, !1), Q = !0) : Ce > -1 && re === -1 && (V(T, !0), Q = !0);
      }
    r(g()) ? R !== s(T) && (Q = !0) : (g() !== (d() ? null : s(T)) || s(T) !== R) && (g() === q && s(T) !== R ? (g(s(T)), r(d()) || d(!1)) : V(T, !!g()), Q = !0), s(y) && (r(d()) ? s(y).indeterminate && (s(y).indeterminate = !1, Q = !0) : !d() && s(y).indeterminate ? (s(y).indeterminate = !1, Q = !0) : d() && !s(y).indeterminate && (s(y).indeterminate = !0, V(T, !1), Q = !0)), q = g(), X = r(u()) ? [] : [...u()], R = s(T), Q && s(p) && s(p).handleChange();
  });
  const O = me("SMUI:generic:input:mount"), D = me("SMUI:generic:input:unmount"), K = me("SMUI:checkbox:mount"), F = me("SMUI:checkbox:unmount");
  st(() => {
    if (s(y) == null)
      throw new Error("Checkbox is not defined.");
    s(y).indeterminate = !r(d()) && d(), V(
      p,
      new tl({
        addClass: G,
        forceLayout: () => W().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!W().parentNode,
        isChecked: () => s(T),
        isIndeterminate: () => r(d()) ? !1 : d(),
        removeClass: H,
        removeNativeControlAttr: ae,
        setNativeControlAttr: U,
        setNativeControlDisabled: (re) => o(re)
      }),
      !0
    );
    const Q = {
      _smui_checkbox_accessor: !0,
      get element() {
        return W();
      },
      get checked() {
        return s(T);
      },
      set checked(re) {
        s(T) !== re && V(T, re, !0);
      },
      get indeterminate() {
        return r(d()) ? !1 : d();
      },
      set indeterminate(re) {
        d(re);
      },
      activateRipple() {
        o() || V(S, !0);
      },
      deactivateRipple() {
        V(S, !1);
      }
    };
    return O && O(Q), K && K(Q), s(p).init(), () => {
      var re;
      D && D(Q), F && F(Q), (re = s(p)) == null || re.destroy(), V(p, void 0);
    };
  });
  function G(Q) {
    A[Q] || (A[Q] = !0);
  }
  function H(Q) {
    (!(Q in A) || A[Q]) && (A[Q] = !1);
  }
  function j(Q, re) {
    x[Q] != re && (re === "" || re == null ? delete x[Q] : x[Q] = re);
  }
  function U(Q, re) {
    I[Q] !== re && (I[Q] = re);
  }
  function ae(Q) {
    (!(Q in I) || I[Q] != null) && (I[Q] = void 0);
  }
  function we() {
    return C && C.id;
  }
  function W() {
    return E;
  }
  var z = { getId: we, getElement: W }, L = ZI(), Y = (Q) => {
    var re;
    s(p) && s(p).handleAnimationEnd(), (re = e.onanimationend) == null || re.call(e, Q);
  };
  je(L, (Q, re, Ce) => ({ class: Q, style: re, ...Ce, onanimationend: Y }), [
    () => He({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": o(),
      "mdc-checkbox--touch": c(),
      "mdc-data-table__header-row-checkbox": N === "data-table" && $,
      "mdc-data-table__row-checkbox": N === "data-table" && !$,
      ...A,
      [a()]: !0
    }),
    () => Object.entries(x).map(([Q, re]) => `${Q}: ${re};`).concat([l()]).join(" "),
    () => Yn(b, ["input$"])
  ]);
  var M = Ie(L), ee = (Q) => {
    var re;
    Qe(W(), "blur", Q), (re = e.input$onblur) == null || re.call(e, Q);
  }, oe = (Q) => {
    var re;
    Qe(W(), "focus", Q), (re = e.input$onfocus) == null || re.call(e, Q);
  };
  return je(
    M,
    (Q, re, Ce, Ne) => ({
      class: Q,
      type: "checkbox",
      ...C,
      disabled: o(),
      value: re,
      "data-indeterminate": Ce,
      ...I,
      ...Ne,
      onblur: ee,
      onfocus: oe
    }),
    [
      () => He({ "mdc-checkbox__native-control": !0, [_()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(d()) && d() ? "true" : void 0,
      () => lt(b, "input$")
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), ye(M, (Q) => V(y, Q), () => s(y)), Fe(M, (Q, re) => Z == null ? void 0 : Z(Q, re), h), xi(() => mm(M, () => s(T), (Q) => V(T, Q))), ye(L, (Q) => E = Q, () => E), Fe(L, (Q, re) => Z == null ? void 0 : Z(Q, re), i), Fe(L, (Q, re) => en == null ? void 0 : en(Q, re), () => ({
    unbounded: !0,
    addClass: G,
    removeClass: H,
    addStyle: j,
    active: s(S),
    eventTarget: s(y)
  })), w(t, L), Re(z);
}
var JI = /* @__PURE__ */ he('<div style="display: flex; flex-direction: column;"></div>');
function $I(t, e) {
  Oe(e, !0);
  let n = v(e, "data", 19, () => []), r = v(e, "values", 31, () => _e([]));
  var i = JI();
  sr(i, 21, n, Fi, (a, l) => {
    OI(a, {
      label: (c) => {
        var d = bt();
        Ae(() => Ze(d, s(l).label)), w(c, d);
      },
      children: (c, d) => {
        QI(c, {
          get value() {
            return s(l).value;
          },
          get group() {
            return r();
          },
          set group(u) {
            r(u);
          }
        });
      },
      $$slots: { label: !0, default: !0 }
    });
  }), w(t, i), Re();
}
var e0 = /* @__PURE__ */ he('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), t0 = /* @__PURE__ */ he('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), n0 = /* @__PURE__ */ he('<div class="oscd-filters svelte-58jwwf"></div>');
function r0(t, e) {
  Oe(e, !0);
  let n = v(e, "filters", 15), r = /* @__PURE__ */ fe(null), i = [], a = [];
  function l(h) {
    var _;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (_ = h.options) == null ? void 0 : _.find((y) => y.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const E = h.value.map((y) => {
            var x;
            const A = (x = h.options) == null ? void 0 : x.find((I) => I.value === y);
            return A ? A.label : String(y);
          }), p = 1;
          return E.length <= p ? E.join(", ") : `${E.slice(0, p).join(", ")} +${E.length - p} more`;
        case "date":
          try {
            const y = new Date(h.value);
            return isNaN(y.getTime()) ? String(h.value) : y.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const y = new Date(h.value);
            return isNaN(y.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(y);
          } catch {
            return String(h.value);
          }
        default:
          return String(h.value);
      }
  }
  function o(h) {
    switch (h.type) {
      case "text":
      case "date":
      case "datetime":
        return h.value ?? "";
      case "number":
        return h.value ?? 0;
      case "select":
        return h.value ?? null;
      case "multiselect":
        return Array.isArray(h.value) ? [...h.value] : [];
      default:
        return h.value ?? "";
    }
  }
  function c(h) {
    s(r) === h ? V(r, null) : (V(r, h, !0), a[h] = o(n()[h]));
  }
  function d() {
    V(r, null), a[s(r)] = void 0;
  }
  function u(h) {
    var _;
    n(n().map((b, E) => E === h ? { ...b, value: a[h] } : b)), (_ = e.onfiltersChanged) == null || _.call(e, [...n()]), V(r, null);
  }
  function g(h) {
    var _;
    n(n().map((b, E) => E === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (_ = e.onfiltersChanged) == null || _.call(e, [...n()]), d();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || d();
  }
  st(() => {
    document.addEventListener("click", f);
  }), gr(() => {
    document.removeEventListener("click", f);
  }), De(() => {
  });
  var m = n0();
  sr(m, 23, n, (h) => h.key, (h, _, b) => {
    var E = t0(), p = Ie(E);
    {
      let x = /* @__PURE__ */ de(() => l(s(_)));
      XI(p, {
        get label() {
          return s(_).label;
        },
        get value() {
          return s(x);
        },
        onOpen: () => c(s(b)),
        onRemove: () => g(s(b))
      });
    }
    var y = ue(p, 2);
    {
      var A = (x) => {
        var I = e0(), S = ue(Ie(I), 2), C = ln(S), T = ue(S, 2), N = Ie(T);
        {
          var $ = (K) => {
            yo(K, {
              get label() {
                return s(_).label;
              },
              get placeholder() {
                return s(_).placeholder;
              },
              get type() {
                return s(_).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(b)];
              },
              set value(F) {
                a[s(b)] = F;
              }
            });
          }, q = (K) => {
            {
              let F = /* @__PURE__ */ de(() => {
                var G;
                return (G = s(_)) == null ? void 0 : G.options;
              });
              BE(K, {
                get label() {
                  return s(_).label;
                },
                get data() {
                  return s(F);
                },
                get value() {
                  return a[s(b)];
                },
                set value(G) {
                  a[s(b)] = G;
                }
              });
            }
          }, X = (K) => {
            {
              let F = /* @__PURE__ */ de(() => {
                var G;
                return (G = s(_)) == null ? void 0 : G.options;
              });
              $I(K, {
                get data() {
                  return s(F);
                },
                get values() {
                  return a[s(b)];
                },
                set values(G) {
                  a[s(b)] = G;
                }
              });
            }
          }, R = (K) => {
            $p(K, {
              get value() {
                return a[s(b)];
              },
              set value(F) {
                a[s(b)] = F;
              }
            });
          }, O = (K) => {
            tI(K, {
              get value() {
                return a[s(b)];
              },
              set value(F) {
                a[s(b)] = F;
              }
            });
          };
          Se(N, (K) => {
            s(_).type === "text" || s(_).type === "number" ? K($) : s(_).type === "select" ? K(q, 1) : s(_).type === "multiselect" ? K(X, 2) : s(_).type === "date" ? K(R, 3) : s(_).type === "datetime" && K(O, 4);
          });
        }
        var D = ue(T, 2);
        ca(D, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => u(s(b)),
          children: (K, F) => {
            var G = bt("Apply");
            w(K, G);
          },
          $$slots: { default: !0 }
        }), Ae(() => Ze(C, `Filter by ${s(_).label ?? ""}`)), Pn("click", I, (K) => K.stopPropagation()), zs(2, I, () => nl, () => ({ y: 5, duration: 120 })), zs(1, I, () => nl, () => ({ y: -5, duration: 120 })), w(x, I);
      };
      Se(y, (x) => {
        s(r) === s(b) && x(A);
      });
    }
    ye(E, (x, I) => i[I] = x, (x) => i == null ? void 0 : i[x], () => [s(b)]), w(h, E);
  }), w(t, m), Re();
}
An(["click"]);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const $f = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, i0 = {
  AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
  CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
let Vl;
function a0(t, e = !0) {
  if (e && typeof Vl < "u")
    return Vl;
  const n = t.createElement("div");
  n.classList.add($f.SCROLL_TEST), t.body.appendChild(n);
  const r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (Vl = r), r;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class vc {
  constructor(e) {
    this.adapter = e;
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class s0 extends vc {
  getScrollPositionRTL() {
    const e = this.adapter.getScrollAreaScrollLeft(), { right: n } = this.calculateScrollEdges();
    return Math.round(n - e);
  }
  scrollToRTL(e) {
    const n = this.calculateScrollEdges(), r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(n.right - e);
    return {
      finalScrollPosition: i,
      scrollDelta: i - r
    };
  }
  incrementScrollRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft(), r = this.clampScrollValue(n - e);
    return {
      finalScrollPosition: r,
      scrollDelta: r - n
    };
  }
  getAnimatingScrollPosition(e) {
    return e;
  }
  calculateScrollEdges() {
    const e = this.adapter.getScrollContentOffsetWidth(), n = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: e - n
    };
  }
  clampScrollValue(e) {
    const n = this.calculateScrollEdges();
    return Math.min(Math.max(n.left, e), n.right);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class l0 extends vc {
  getScrollPositionRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft();
    return Math.round(e - n);
  }
  scrollToRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft(), r = this.clampScrollValue(-e);
    return {
      finalScrollPosition: r,
      scrollDelta: r - n
    };
  }
  incrementScrollRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft(), r = this.clampScrollValue(n - e);
    return {
      finalScrollPosition: r,
      scrollDelta: r - n
    };
  }
  getAnimatingScrollPosition(e, n) {
    return e - n;
  }
  calculateScrollEdges() {
    const e = this.adapter.getScrollContentOffsetWidth();
    return {
      left: this.adapter.getScrollAreaOffsetWidth() - e,
      right: 0
    };
  }
  clampScrollValue(e) {
    const n = this.calculateScrollEdges();
    return Math.max(Math.min(n.right, e), n.left);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class o0 extends vc {
  getScrollPositionRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft();
    return Math.round(n - e);
  }
  scrollToRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft(), r = this.clampScrollValue(e);
    return {
      finalScrollPosition: r,
      scrollDelta: n - r
    };
  }
  incrementScrollRTL(e) {
    const n = this.adapter.getScrollAreaScrollLeft(), r = this.clampScrollValue(n + e);
    return {
      finalScrollPosition: r,
      scrollDelta: n - r
    };
  }
  getAnimatingScrollPosition(e, n) {
    return e + n;
  }
  calculateScrollEdges() {
    const e = this.adapter.getScrollContentOffsetWidth(), n = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: e - n,
      right: 0
    };
  }
  clampScrollValue(e) {
    const n = this.calculateScrollEdges();
    return Math.min(Math.max(n.right, e), n.left);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class jr extends Ot {
  static get cssClasses() {
    return $f;
  }
  static get strings() {
    return i0;
  }
  static get defaultAdapter() {
    return {
      eventTargetMatchesSelector: () => !1,
      addClass: () => {
      },
      removeClass: () => {
      },
      addScrollAreaClass: () => {
      },
      setScrollAreaStyleProperty: () => {
      },
      setScrollContentStyleProperty: () => {
      },
      getScrollContentStyleValue: () => "",
      setScrollAreaScrollLeft: () => {
      },
      getScrollAreaScrollLeft: () => 0,
      getScrollContentOffsetWidth: () => 0,
      getScrollAreaOffsetWidth: () => 0,
      computeScrollAreaClientRect: () => ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }),
      computeScrollContentClientRect: () => ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }),
      computeHorizontalScrollbarHeight: () => 0
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, jr.defaultAdapter), e)), this.isAnimating = !1;
  }
  init() {
    const e = this.adapter.computeHorizontalScrollbarHeight();
    this.adapter.setScrollAreaStyleProperty("margin-bottom", -e + "px"), this.adapter.addScrollAreaClass(jr.cssClasses.SCROLL_AREA_SCROLL);
  }
  /**
   * Computes the current visual scroll position
   */
  getScrollPosition() {
    if (this.isRTL())
      return this.computeCurrentScrollPositionRTL();
    const e = this.calculateCurrentTranslateX();
    return this.adapter.getScrollAreaScrollLeft() - e;
  }
  /**
   * Handles interaction events that occur during transition
   */
  handleInteraction() {
    this.isAnimating && this.stopScrollAnimation();
  }
  /**
   * Handles the transitionend event
   */
  handleTransitionEnd(e) {
    const n = e.target;
    !this.isAnimating || !this.adapter.eventTargetMatchesSelector(n, jr.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(jr.cssClasses.ANIMATING));
  }
  /**
   * Increment the scroll value by the scrollXIncrement using animation.
   * @param scrollXIncrement The value by which to increment the scroll position
   */
  incrementScroll(e) {
    e !== 0 && this.animate(this.getIncrementScrollOperation(e));
  }
  /**
   * Increment the scroll value by the scrollXIncrement without animation.
   * @param scrollXIncrement The value by which to increment the scroll position
   */
  incrementScrollImmediate(e) {
    if (e === 0)
      return;
    const n = this.getIncrementScrollOperation(e);
    n.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition));
  }
  /**
   * Scrolls to the given scrollX value
   */
  scrollTo(e) {
    if (this.isRTL()) {
      this.scrollToImplRTL(e);
      return;
    }
    this.scrollToImpl(e);
  }
  /**
   * @return Browser-specific {@link MDCTabScrollerRTL} instance.
   */
  getRTLScroller() {
    return this.rtlScrollerInstance || (this.rtlScrollerInstance = this.rtlScrollerFactory()), this.rtlScrollerInstance;
  }
  /**
   * @return translateX value from a CSS matrix transform function string.
   */
  calculateCurrentTranslateX() {
    const e = this.adapter.getScrollContentStyleValue("transform");
    if (e === "none")
      return 0;
    const n = /\((.+?)\)/.exec(e);
    if (!n)
      return 0;
    const r = n[1], [i, a, l, o, c, d] = r.split(",");
    return parseFloat(c);
  }
  /**
   * Calculates a safe scroll value that is > 0 and < the max scroll value
   * @param scrollX The distance to scroll
   */
  clampScrollValue(e) {
    const n = this.calculateScrollEdges();
    return Math.min(Math.max(n.left, e), n.right);
  }
  computeCurrentScrollPositionRTL() {
    const e = this.calculateCurrentTranslateX();
    return this.getRTLScroller().getScrollPositionRTL(e);
  }
  calculateScrollEdges() {
    const e = this.adapter.getScrollContentOffsetWidth(), n = this.adapter.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: e - n
    };
  }
  /**
   * Internal scroll method
   * @param scrollX The new scroll position
   */
  scrollToImpl(e) {
    const n = this.getScrollPosition(), r = this.clampScrollValue(e), i = r - n;
    this.animate({
      finalScrollPosition: r,
      scrollDelta: i
    });
  }
  /**
   * Internal RTL scroll method
   * @param scrollX The new scroll position
   */
  scrollToImplRTL(e) {
    const n = this.getRTLScroller().scrollToRTL(e);
    this.animate(n);
  }
  /**
   * Internal method to compute the increment scroll operation values.
   * @param scrollX The desired scroll position increment
   * @return MDCTabScrollerAnimation with the sanitized values for performing
   *     the scroll operation.
   */
  getIncrementScrollOperation(e) {
    if (this.isRTL())
      return this.getRTLScroller().incrementScrollRTL(e);
    const n = this.getScrollPosition(), r = e + n, i = this.clampScrollValue(r), a = i - n;
    return {
      finalScrollPosition: i,
      scrollDelta: a
    };
  }
  /**
   * Animates the tab scrolling
   * @param animation The animation to apply
   */
  animate(e) {
    e.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition), this.adapter.setScrollContentStyleProperty("transform", `translateX(${e.scrollDelta}px)`), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame(() => {
      this.adapter.addClass(jr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "none");
    }), this.isAnimating = !0);
  }
  /**
   * Stops scroll animation
   */
  stopScrollAnimation() {
    this.isAnimating = !1;
    const e = this.getAnimatingScrollPosition();
    this.adapter.removeClass(jr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(e);
  }
  /**
   * Gets the current scroll position during animation
   */
  getAnimatingScrollPosition() {
    const e = this.calculateCurrentTranslateX(), n = this.adapter.getScrollAreaScrollLeft();
    return this.isRTL() ? this.getRTLScroller().getAnimatingScrollPosition(n, e) : n - e;
  }
  /**
   * Determines the RTL Scroller to use
   */
  rtlScrollerFactory() {
    const e = this.adapter.getScrollAreaScrollLeft();
    this.adapter.setScrollAreaScrollLeft(e - 1);
    const n = this.adapter.getScrollAreaScrollLeft();
    if (n < 0)
      return this.adapter.setScrollAreaScrollLeft(e), new l0(this.adapter);
    const r = this.adapter.computeScrollAreaClientRect(), i = this.adapter.computeScrollContentClientRect(), a = Math.round(i.right - r.right);
    return this.adapter.setScrollAreaScrollLeft(e), a === n ? new o0(this.adapter) : new s0(this.adapter);
  }
  isRTL() {
    return this.adapter.getScrollContentStyleValue("direction") === "rtl";
  }
}
var c0 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "align",
  "scrollArea$use",
  "scrollArea$class",
  "scrollContent$use",
  "scrollContent$class",
  "children"
]), d0 = /* @__PURE__ */ he("<div><div><div><!></div></div></div>");
function u0(t, e) {
  Oe(e, !0);
  const { matches: n } = ga;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "align", 3, void 0), l = v(e, "scrollArea$use", 19, () => []), o = v(e, "scrollArea$class", 3, ""), c = v(e, "scrollContent$use", 19, () => []), d = v(e, "scrollContent$class", 3, ""), u = /* @__PURE__ */ qe(e, c0), g, f = /* @__PURE__ */ fe(void 0), m, h, _ = _e({}), b = _e({}), E = _e({}), p = _e({});
  st(() => (V(
    f,
    new jr({
      eventTargetMatchesSelector: (W, z) => n(W, z),
      addClass: y,
      removeClass: A,
      addScrollAreaClass: x,
      setScrollAreaStyleProperty: I,
      setScrollContentStyleProperty: S,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (W) => m.scrollLeft = W,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => a0(document)
    }),
    !0
  ), s(f).init(), () => {
    var W;
    (W = s(f)) == null || W.destroy(), V(f, void 0);
  }));
  function y(W) {
    _[W] || (_[W] = !0);
  }
  function A(W) {
    (!(W in _) || _[W]) && (_[W] = !1);
  }
  function x(W) {
    b[W] || (b[W] = !0);
  }
  function I(W, z) {
    E[W] != z && (z === "" || z == null ? delete E[W] : E[W] = z);
  }
  function S(W, z) {
    p[W] != z && (z === "" || z == null ? delete p[W] : p[W] = z);
  }
  function C(W) {
    return W in p ? p[W] : getComputedStyle(h).getPropertyValue(W);
  }
  function T() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function N() {
    return h.offsetWidth;
  }
  function $(W) {
    var z;
    (z = s(f)) == null || z.incrementScroll(W);
  }
  function q(W) {
    var z;
    (z = s(f)) == null || z.scrollTo(W);
  }
  function X() {
    return g;
  }
  var R = {
    getScrollPosition: T,
    getScrollContentWidth: N,
    incrementScroll: $,
    scrollTo: q,
    getElement: X
  }, O = d0();
  je(O, (W, z) => ({ class: W, ...z }), [
    () => He({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ..._,
      [i()]: !0
    }),
    () => Yn(u, ["scrollArea$", "scrollContent$"])
  ]);
  var D = Ie(O), K = (W) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onwheel) == null || z.call(e, W);
  }, F = (W) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$ontouchstart) == null || z.call(e, W);
  }, G = (W) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onpointerdown) == null || z.call(e, W);
  }, H = (W) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onmousedown) == null || z.call(e, W);
  }, j = (W) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onkeydown) == null || z.call(e, W);
  };
  je(
    D,
    (W, z, L) => ({
      class: W,
      style: z,
      ...L,
      onwheel: K,
      ontouchstart: F,
      onpointerdown: G,
      onmousedown: H,
      onkeydown: j
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [o()]: !0
      }),
      () => Object.entries(E).map(([W, z]) => `${W}: ${z};`).join(" "),
      () => lt(u, "scrollArea$")
    ]
  );
  var U = Ie(D), ae = (W) => {
    var z;
    s(f) && s(f).handleTransitionEnd(W), (z = e.scrollContent$ontransitionend) == null || z.call(e, W);
  };
  je(
    U,
    (W, z, L) => ({
      class: W,
      style: z,
      ...L,
      ontransitionend: ae
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-content": !0,
        [d()]: !0
      }),
      () => Object.entries(p).map(([W, z]) => `${W}: ${z};`).join(" "),
      () => lt(u, "scrollContent$")
    ]
  );
  var we = Ie(U);
  return pe(we, () => e.children ?? ve), ye(U, (W) => h = W, () => h), Fe(U, (W, z) => Z == null ? void 0 : Z(W, z), c), ye(D, (W) => m = W, () => m), Fe(D, (W, z) => Z == null ? void 0 : Z(W, z), l), ye(O, (W) => g = W, () => g), Fe(O, (W, z) => Z == null ? void 0 : Z(W, z), r), w(t, O), Re(R);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const f0 = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, h0 = {
  CONTENT_SELECTOR: ".mdc-tab-indicator__content"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class Gn extends Ot {
  static get cssClasses() {
    return f0;
  }
  static get strings() {
    return h0;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      computeContentClientRect: () => ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }),
      setContentStyleProperty: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, Gn.defaultAdapter), e));
  }
  computeContentClientRect() {
    return this.adapter.computeContentClientRect();
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class v0 extends Gn {
  activate() {
    this.adapter.addClass(Gn.cssClasses.ACTIVE);
  }
  deactivate() {
    this.adapter.removeClass(Gn.cssClasses.ACTIVE);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class qd extends Gn {
  activate(e) {
    if (!e) {
      this.adapter.addClass(Gn.cssClasses.ACTIVE);
      return;
    }
    const n = this.computeContentClientRect(), r = e.width / n.width, i = e.left - n.left;
    this.adapter.addClass(Gn.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", `translateX(${i}px) scaleX(${r})`), this.computeContentClientRect(), this.adapter.removeClass(Gn.cssClasses.NO_TRANSITION), this.adapter.addClass(Gn.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
  }
  deactivate() {
    this.adapter.removeClass(Gn.cssClasses.ACTIVE);
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ds = {
  ACTIVE: "mdc-tab--active"
}, Na = {
  ARIA_SELECTED: "aria-selected",
  CONTENT_SELECTOR: ".mdc-tab__content",
  INTERACTED_EVENT: "MDCTab:interacted",
  RIPPLE_SELECTOR: ".mdc-tab__ripple",
  TABINDEX: "tabIndex",
  TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
class mc extends Ot {
  static get cssClasses() {
    return Ds;
  }
  static get strings() {
    return Na;
  }
  static get defaultAdapter() {
    return {
      addClass: () => {
      },
      removeClass: () => {
      },
      hasClass: () => !1,
      setAttr: () => {
      },
      activateIndicator: () => {
      },
      deactivateIndicator: () => {
      },
      notifyInteracted: () => {
      },
      getOffsetLeft: () => 0,
      getOffsetWidth: () => 0,
      getContentOffsetLeft: () => 0,
      getContentOffsetWidth: () => 0,
      focus: () => {
      },
      isFocused: () => !1
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, mc.defaultAdapter), e)), this.focusOnActivate = !0;
  }
  handleClick() {
    this.adapter.notifyInteracted();
  }
  isActive() {
    return this.adapter.hasClass(Ds.ACTIVE);
  }
  /**
   * Sets whether the tab should focus itself when activated
   */
  setFocusOnActivate(e) {
    this.focusOnActivate = e;
  }
  /**
   * Activates the Tab
   */
  activate(e) {
    this.adapter.addClass(Ds.ACTIVE), this.adapter.setAttr(Na.ARIA_SELECTED, "true"), this.adapter.setAttr(Na.TABINDEX, "0"), this.adapter.activateIndicator(e), this.focusOnActivate && !this.adapter.isFocused() && this.adapter.focus();
  }
  /**
   * Deactivates the Tab
   */
  deactivate() {
    this.isActive() && (this.adapter.removeClass(Ds.ACTIVE), this.adapter.setAttr(Na.ARIA_SELECTED, "false"), this.adapter.setAttr(Na.TABINDEX, "-1"), this.adapter.deactivateIndicator());
  }
  /**
   * Returns the dimensions of the Tab
   */
  computeDimensions() {
    const e = this.adapter.getOffsetWidth(), n = this.adapter.getOffsetLeft(), r = this.adapter.getContentOffsetWidth(), i = this.adapter.getContentOffsetLeft();
    return {
      contentLeft: n + i,
      contentRight: n + i + r,
      rootLeft: n,
      rootRight: n + e
    };
  }
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Nt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, jn = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
const Ri = /* @__PURE__ */ new Set();
Ri.add(Nt.ARROW_LEFT_KEY);
Ri.add(Nt.ARROW_RIGHT_KEY);
Ri.add(Nt.END_KEY);
Ri.add(Nt.HOME_KEY);
Ri.add(Nt.ENTER_KEY);
Ri.add(Nt.SPACE_KEY);
const Li = /* @__PURE__ */ new Map();
Li.set(jn.ARROW_LEFT_KEYCODE, Nt.ARROW_LEFT_KEY);
Li.set(jn.ARROW_RIGHT_KEYCODE, Nt.ARROW_RIGHT_KEY);
Li.set(jn.END_KEYCODE, Nt.END_KEY);
Li.set(jn.HOME_KEYCODE, Nt.HOME_KEY);
Li.set(jn.ENTER_KEYCODE, Nt.ENTER_KEY);
Li.set(jn.SPACE_KEYCODE, Nt.SPACE_KEY);
class gc extends Ot {
  static get strings() {
    return Nt;
  }
  static get numbers() {
    return jn;
  }
  static get defaultAdapter() {
    return {
      scrollTo: () => {
      },
      incrementScroll: () => {
      },
      getScrollPosition: () => 0,
      getScrollContentWidth: () => 0,
      getOffsetWidth: () => 0,
      isRTL: () => !1,
      setActiveTab: () => {
      },
      activateTabAtIndex: () => {
      },
      deactivateTabAtIndex: () => {
      },
      focusTabAtIndex: () => {
      },
      getTabIndicatorClientRectAtIndex: () => ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }),
      getTabDimensionsAtIndex: () => ({
        rootLeft: 0,
        rootRight: 0,
        contentLeft: 0,
        contentRight: 0
      }),
      getPreviousActiveTabIndex: () => -1,
      getFocusedTabIndex: () => -1,
      getIndexOfTabById: () => -1,
      getTabListLength: () => 0,
      notifyTabActivated: () => {
      }
    };
  }
  constructor(e) {
    super(Object.assign(Object.assign({}, gc.defaultAdapter), e)), this.useAutomaticActivation = !1;
  }
  /**
   * Switches between automatic and manual activation modes.
   * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
   */
  setUseAutomaticActivation(e) {
    this.useAutomaticActivation = e;
  }
  activateTab(e) {
    const n = this.adapter.getPreviousActiveTabIndex();
    if (!this.indexIsInRange(e) || e === n)
      return;
    let r;
    n !== -1 && (this.adapter.deactivateTabAtIndex(n), r = this.adapter.getTabIndicatorClientRectAtIndex(n)), this.adapter.activateTabAtIndex(e, r), this.scrollIntoView(e), this.adapter.notifyTabActivated(e);
  }
  handleKeyDown(e) {
    const n = this.getKeyFromEvent(e);
    if (n === void 0 || (this.isActivationKey(n) || e.preventDefault(), this.useAutomaticActivation && this.isActivationKey(n)))
      return;
    const r = this.adapter.getFocusedTabIndex();
    if (this.isActivationKey(n)) {
      this.adapter.setActiveTab(r);
      return;
    }
    const i = this.determineTargetFromKey(r, n);
    this.adapter.focusTabAtIndex(i), this.scrollIntoView(i), this.useAutomaticActivation && this.adapter.setActiveTab(i);
  }
  /**
   * Handles the MDCTab:interacted event
   */
  handleTabInteraction(e) {
    this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId));
  }
  /**
   * Scrolls the tab at the given index into view
   * @param index The tab index to make visible
   */
  scrollIntoView(e) {
    if (this.indexIsInRange(e)) {
      if (e === 0) {
        this.adapter.scrollTo(0);
        return;
      }
      if (e === this.adapter.getTabListLength() - 1) {
        this.adapter.scrollTo(this.adapter.getScrollContentWidth());
        return;
      }
      if (this.isRTL()) {
        this.scrollIntoViewImplRTL(e);
        return;
      }
      this.scrollIntoViewImpl(e);
    }
  }
  /**
   * Private method for determining the index of the destination tab based on
   * what key was pressed
   * @param origin The original index from which to determine the destination
   * @param key The name of the key
   */
  determineTargetFromKey(e, n) {
    const r = this.isRTL(), i = this.adapter.getTabListLength() - 1, a = n === Nt.END_KEY, l = n === Nt.ARROW_LEFT_KEY && !r || n === Nt.ARROW_RIGHT_KEY && r, o = n === Nt.ARROW_RIGHT_KEY && !r || n === Nt.ARROW_LEFT_KEY && r;
    let c = e;
    return a ? c = i : l ? c -= 1 : o ? c += 1 : c = 0, c < 0 ? c = i : c > i && (c = 0), c;
  }
  /**
   * Calculates the scroll increment that will make the tab at the given index
   * visible
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   */
  calculateScrollIncrement(e, n, r, i) {
    const a = this.adapter.getTabDimensionsAtIndex(n), l = a.contentLeft - r - i, c = a.contentRight - r - jn.EXTRA_SCROLL_AMOUNT, d = l + jn.EXTRA_SCROLL_AMOUNT;
    return n < e ? Math.min(c, 0) : Math.max(d, 0);
  }
  /**
   * Calculates the scroll increment that will make the tab at the given index
   * visible in RTL
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   * @param scrollContentWidth The width of the scroll content
   */
  calculateScrollIncrementRTL(e, n, r, i, a) {
    const l = this.adapter.getTabDimensionsAtIndex(n), o = a - l.contentLeft - r, d = a - l.contentRight - r - i + jn.EXTRA_SCROLL_AMOUNT, u = o - jn.EXTRA_SCROLL_AMOUNT;
    return n > e ? Math.max(d, 0) : Math.min(u, 0);
  }
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab
   * Bar
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   */
  findAdjacentTabIndexClosestToEdge(e, n, r, i) {
    const a = n.rootLeft - r, l = n.rootRight - r - i, o = a + l, c = a < 0 || o < 0, d = l > 0 || o > 0;
    return c ? e - 1 : d ? e + 1 : -1;
  }
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab
   * Bar in RTL
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   * @param scrollContentWidth The width of the scroller content
   */
  findAdjacentTabIndexClosestToEdgeRTL(e, n, r, i, a) {
    const l = a - n.rootLeft - i - r, o = a - n.rootRight - r, c = l + o, d = l > 0 || c > 0, u = o < 0 || c < 0;
    return d ? e + 1 : u ? e - 1 : -1;
  }
  /**
   * Returns the key associated with a keydown event
   * @param event The keydown event
   */
  getKeyFromEvent(e) {
    return Ri.has(e.key) ? e.key : Li.get(e.keyCode);
  }
  isActivationKey(e) {
    return e === Nt.SPACE_KEY || e === Nt.ENTER_KEY;
  }
  /**
   * Returns whether a given index is inclusively between the ends
   * @param index The index to test
   */
  indexIsInRange(e) {
    return e >= 0 && e < this.adapter.getTabListLength();
  }
  /**
   * Returns the view's RTL property
   */
  isRTL() {
    return this.adapter.isRTL();
  }
  /**
   * Scrolls the tab at the given index into view for left-to-right user agents.
   * @param index The index of the tab to scroll into view
   */
  scrollIntoViewImpl(e) {
    const n = this.adapter.getScrollPosition(), r = this.adapter.getOffsetWidth(), i = this.adapter.getTabDimensionsAtIndex(e), a = this.findAdjacentTabIndexClosestToEdge(e, i, n, r);
    if (!this.indexIsInRange(a))
      return;
    const l = this.calculateScrollIncrement(e, a, n, r);
    this.adapter.incrementScroll(l);
  }
  /**
   * Scrolls the tab at the given index into view in RTL
   * @param index The tab index to make visible
   */
  scrollIntoViewImplRTL(e) {
    const n = this.adapter.getScrollPosition(), r = this.adapter.getOffsetWidth(), i = this.adapter.getTabDimensionsAtIndex(e), a = this.adapter.getScrollContentWidth(), l = this.findAdjacentTabIndexClosestToEdgeRTL(e, i, n, r, a);
    if (!this.indexIsInRange(l))
      return;
    const o = this.calculateScrollIncrementRTL(e, l, n, r, a);
    this.adapter.incrementScroll(o);
  }
}
var m0 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "tabs",
  "key",
  "focusOnActivate",
  "focusOnProgrammatic",
  "useAutomaticActivation",
  "active",
  "tabindex",
  "tab"
]), g0 = /* @__PURE__ */ he("<div><!></div>");
function _0(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "tabs", 19, () => []), a = v(e, "key", 3, (R) => R), l = v(e, "focusOnActivate", 3, !0), o = v(e, "focusOnProgrammatic", 3, !1), c = v(e, "useAutomaticActivation", 3, !0), d = v(e, "active", 15), u = v(e, "tabindex", 3, 0), g = /* @__PURE__ */ qe(e, m0), f, m = /* @__PURE__ */ fe(void 0), h, _ = /* @__PURE__ */ fe(_e(d() == null ? -1 : i().findIndex((R) => d() && a()(R) === a()(d())))), b = _e({}), E = /* @__PURE__ */ fe(/* @__PURE__ */ new WeakMap()), p = !1;
  le("SMUI:tab:focusOnActivate", l()), le("SMUI:tab:initialActive", {
    active: d() == null ? null : a()(d()),
    key: a()
  }), De(() => {
    (d() == null && s(_) !== -1 || d() != null && s(_) === -1 || d() != null && a()(d()) !== a()(i()[s(_)])) && (V(_, i().findIndex((R) => d() && a()(R) === a()(d())), !0), s(m) && (p = !o(), s(m).activateTab(s(_)), p = !1));
  }), De(() => {
    if (i().length) {
      const R = i()[0] instanceof Object ? s(E).get(i()[0]) : b[i()[0]];
      R && R.forceAccessible(s(_) === -1);
    }
  });
  let y = !1;
  De(() => {
    if (!s(m)) {
      y = !1;
      return;
    }
    y || (y = !0, s(m).setUseAutomaticActivation(c()));
  }), le("SMUI:tab:mount", (R) => {
    x(R.tabId, R);
  }), le("SMUI:tab:unmount", (R) => {
    I(R.tabId);
  }), st(() => (V(
    m,
    new gc({
      scrollTo: (R) => h.scrollTo(R),
      incrementScroll: (R) => h.incrementScroll(R),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (R) => {
        var O;
        d(i()[R]), V(_, R, !0), (O = s(m)) == null || O.activateTab(R);
      },
      activateTabAtIndex: (R, O) => {
        var D;
        return (D = A(i()[R])) == null ? void 0 : D.activate(O, p);
      },
      deactivateTabAtIndex: (R) => {
        var O;
        return (O = A(i()[R])) == null ? void 0 : O.deactivate();
      },
      focusTabAtIndex: (R) => {
        var O;
        return (O = A(i()[R])) == null ? void 0 : O.focus();
      },
      getTabIndicatorClientRectAtIndex: (R) => {
        var O;
        return ((O = A(i()[R])) == null ? void 0 : O.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (R) => {
        var O;
        return ((O = A(i()[R])) == null ? void 0 : O.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var R;
        for (let O = 0; O < i().length; O++)
          if ((R = A(i()[O])) != null && R.active)
            return O;
        return -1;
      },
      getFocusedTabIndex: () => {
        const R = i().map((D) => {
          var K;
          return (K = A(D)) == null ? void 0 : K.element;
        }), O = document.activeElement;
        return R.indexOf(O);
      },
      getIndexOfTabById: (R) => i().findIndex((O) => a()(O) === a()(R)),
      getTabListLength: () => i().length,
      notifyTabActivated: (R) => Qe(C(), "SMUITabBarActivated", { index: R })
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy(), V(m, void 0);
  }));
  function A(R) {
    return R instanceof Object ? s(E).get(R) : b[R];
  }
  function x(R, O) {
    R instanceof Object ? (s(E).set(R, O), V(E, s(E))) : b[R] = O;
  }
  function I(R) {
    R instanceof Object ? (s(E).delete(R), V(E, s(E))) : delete b[R];
  }
  function S(R) {
    var O;
    (O = s(m)) == null || O.scrollIntoView(R);
  }
  function C() {
    return f;
  }
  var T = { scrollIntoView: S, getElement: C }, N = g0(), $ = (R) => {
    var O;
    s(m) && s(m).handleKeyDown(R), (O = e.onkeydown) == null || O.call(e, R);
  }, q = (R) => {
    var O;
    s(m) && s(m).handleTabInteraction(R), (O = e.onSMUITabInteracted) == null || O.call(e, R);
  };
  je(
    N,
    (R, O) => ({
      class: R,
      role: "tablist",
      tabindex: u(),
      ...O,
      onkeydown: $,
      onSMUITabInteracted: q
    }),
    [
      () => He({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Yn(g, ["tabScroller$"])
    ]
  );
  var X = Ie(N);
  {
    let R = /* @__PURE__ */ de(() => lt(g, "tabScroller$"));
    ye(
      u0(X, rt(() => s(R), {
        children: (O, D) => {
          var K = ge(), F = ie(K);
          sr(F, 17, i, (G) => a()(G), (G, H) => {
            var j = ge(), U = ie(j);
            pe(U, () => e.tab, () => s(H)), w(G, j);
          }), w(O, K);
        },
        $$slots: { default: !0 }
      })),
      (O) => h = O,
      () => h
    );
  }
  return ye(N, (R) => f = R, () => f), Fe(N, (R, O) => Z == null ? void 0 : Z(R, O), n), w(t, N), Re(T);
}
var b0 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "active",
  "type",
  "transition",
  "content$use",
  "content$class",
  "children"
]), E0 = /* @__PURE__ */ he("<span><span><!></span></span>");
function p0(t, e) {
  Oe(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "active", 15, !1), a = v(e, "type", 3, "underline"), l = v(e, "transition", 3, "slide"), o = v(e, "content$use", 19, () => []), c = v(e, "content$class", 3, ""), d = /* @__PURE__ */ qe(e, b0), u, g = /* @__PURE__ */ fe(void 0), f, m = /* @__PURE__ */ fe(_e({})), h = /* @__PURE__ */ fe(_e({})), _ = _e([]), b = l();
  De(() => {
    var R;
    b !== l() && (b = l(), (R = s(g)) == null || R.destroy(), V(g, void 0), V(m, {}, !0), V(h, {}, !0), V(g, E(), !0), s(g).init());
  }), Vu(() => {
    _.length && requestAnimationFrame(() => {
      const R = _.shift() ?? [];
      for (const O of R)
        O();
    });
  }), st(() => (V(g, E(), !0), s(g).init(), () => {
    var R;
    (R = s(g)) == null || R.destroy(), V(g, void 0);
  }));
  function E() {
    const R = {
      fade: v0,
      slide: qd
    }[l()] || qd;
    return new R({
      addClass: (...O) => p(() => y(...O)),
      removeClass: (...O) => p(() => A(...O)),
      computeContentClientRect: C,
      setContentStyleProperty: (...O) => p(() => x(...O))
    });
  }
  function p(R) {
    _.length ? _[_.length - 1].push(R) : R();
  }
  function y(R) {
    s(m)[R] || (s(m)[R] = !0);
  }
  function A(R) {
    (!(R in s(m)) || s(m)[R]) && (s(m)[R] = !1);
  }
  function x(R, O) {
    s(h)[R] != O && (O === "" || O == null ? delete s(h)[R] : s(h)[R] = O);
  }
  function I(R) {
    var O;
    i(!0), (O = s(g)) == null || O.activate(R);
  }
  function S() {
    var R;
    i(!1), (R = s(g)) == null || R.deactivate();
  }
  function C() {
    return _.push([]), f.getBoundingClientRect();
  }
  function T() {
    return u;
  }
  var N = { activate: I, deactivate: S, computeContentClientRect: C, getElement: T }, $ = E0();
  je($, (R, O) => ({ class: R, ...O }), [
    () => He({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": l() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => Yn(d, ["content$"])
  ]);
  var q = Ie($);
  je(
    q,
    (R, O, D) => ({
      class: R,
      style: O,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...D
    }),
    [
      () => He({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [c()]: !0
      }),
      () => Object.entries(s(h)).map(([R, O]) => `${R}: ${O};`).join(" "),
      () => lt(d, "content$")
    ]
  );
  var X = Ie(q);
  return pe(X, () => e.children ?? ve), ye(q, (R) => f = R, () => f), Fe(q, (R, O) => Z == null ? void 0 : Z(R, O), o), ye($, (R) => u = R, () => u), Fe($, (R, O) => Z == null ? void 0 : Z(R, O), n), w(t, $), Re(N);
}
var I0 = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "tab",
  "ripple",
  "stacked",
  "minWidth",
  "indicatorSpanOnlyContent",
  "href",
  "content$use",
  "content$class",
  "component",
  "tag",
  "children",
  "tabIndicator"
]), S0 = /* @__PURE__ */ he('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function A0(t, e) {
  Oe(e, !0);
  const n = (z) => {
    {
      let L = /* @__PURE__ */ de(() => lt(_, "tabIndicator$"));
      ye(
        p0(z, rt(() => s(L), {
          get active() {
            return s(T);
          },
          set active(Y) {
            V(T, Y, !0);
          },
          children: (Y, M) => {
            var ee = ge(), oe = ie(ee);
            pe(oe, () => e.tabIndicator ?? ve), w(Y, ee);
          },
          $$slots: { default: !0 }
        })),
        (Y) => y = Y,
        () => y
      );
    }
  };
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "style", 3, ""), l = v(e, "ripple", 3, !0), o = v(e, "stacked", 3, !1), c = v(e, "minWidth", 3, !1), d = v(e, "indicatorSpanOnlyContent", 3, !1), u = v(e, "href", 3, void 0), g = v(e, "content$use", 19, () => []), f = v(e, "content$class", 3, ""), m = v(e, "component", 3, ti), h = v(e, "tag", 19, () => u() == null ? "button" : "a"), _ = /* @__PURE__ */ qe(e, I0), b, E = /* @__PURE__ */ fe(void 0), p, y, A = _e({}), x = _e({}), I = _e({}), S = me("SMUI:tab:focusOnActivate");
  const C = me("SMUI:tab:initialActive");
  let T = /* @__PURE__ */ fe(_e(C.active != null && C.key(e.tab) === C.active)), N = /* @__PURE__ */ fe(!1);
  if (le("SMUI:label:context", "tab"), le("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let $ = !1;
  De(() => {
    if (!s(E)) {
      $ = !1;
      return;
    }
    $ || ($ = !0, s(E).setFocusOnActivate(S));
  });
  const q = me("SMUI:tab:mount"), X = me("SMUI:tab:unmount");
  st(() => {
    V(
      E,
      new mc({
        setAttr: F,
        addClass: O,
        removeClass: D,
        hasClass: R,
        activateIndicator: (L) => y.activate(L),
        deactivateIndicator: () => y.deactivate(),
        notifyInteracted: () => Qe(U(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => U().offsetLeft,
        getOffsetWidth: () => U().offsetWidth,
        getContentOffsetLeft: () => p.offsetLeft,
        getContentOffsetWidth: () => p.offsetWidth,
        focus: j,
        isFocused: () => U() === document.activeElement
      }),
      !0
    );
    const z = {
      tabId: e.tab,
      get element() {
        return U();
      },
      get active() {
        return s(T);
      },
      forceAccessible(L) {
        V(N, L, !0);
      },
      computeIndicatorClientRect: () => y.computeContentClientRect(),
      computeDimensions: () => {
        if (s(E) == null)
          throw new Error("Instance is undefined.");
        return s(E).computeDimensions();
      },
      focus: j,
      activate: G,
      deactivate: H
    };
    return q && q(z), s(E).init(), () => {
      var L;
      X && X(z), (L = s(E)) == null || L.destroy(), V(E, void 0);
    };
  });
  function R(z) {
    return z in A ? A[z] : U().classList.contains(z);
  }
  function O(z) {
    A[z] || (A[z] = !0);
  }
  function D(z) {
    (!(z in A) || A[z]) && (A[z] = !1);
  }
  function K(z, L) {
    x[z] != L && (L === "" || L == null ? delete x[z] : x[z] = L);
  }
  function F(z, L) {
    I[z] !== L && (I[z] = L);
  }
  function G(z, L) {
    var Y, M, ee;
    V(T, !0), L && ((Y = s(E)) == null || Y.setFocusOnActivate(!1)), (M = s(E)) == null || M.activate(z), L && ((ee = s(E)) == null || ee.setFocusOnActivate(S));
  }
  function H() {
    var z;
    V(T, !1), (z = s(E)) == null || z.deactivate();
  }
  function j() {
    U().focus();
  }
  function U() {
    return b.getElement();
  }
  var ae = { activate: G, deactivate: H, focus: j, getElement: U }, we = ge(), W = ie(we);
  {
    let z = /* @__PURE__ */ de(() => [
      [
        en,
        {
          ripple: l(),
          unbounded: !1,
          addClass: O,
          removeClass: D,
          addStyle: K
        }
      ],
      ...r()
    ]), L = /* @__PURE__ */ de(() => He({
      "mdc-tab": !0,
      "mdc-tab--active": s(T),
      "mdc-tab--stacked": o(),
      "mdc-tab--min-width": c(),
      ...A,
      [i()]: !0
    })), Y = /* @__PURE__ */ de(() => Object.entries(x).map(([Q, re]) => `${Q}: ${re};`).concat([a()]).join(" ")), M = /* @__PURE__ */ de(() => s(T) ? "true" : "false"), ee = /* @__PURE__ */ de(() => s(T) || s(N) ? "0" : "-1"), oe = /* @__PURE__ */ de(() => Yn(_, ["content$", "tabIndicator$"]));
    _r(W, m, (Q, re) => {
      ye(
        re(Q, rt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(z);
            },
            get class() {
              return s(L);
            },
            get style() {
              return s(Y);
            },
            role: "tab",
            get "aria-selected"() {
              return s(M);
            },
            get tabindex() {
              return s(ee);
            },
            get href() {
              return u();
            }
          },
          () => I,
          () => s(oe),
          {
            onclick: (Ce) => {
              var Ne;
              (Ne = e.onclick) == null || Ne.call(e, Ce), !Ce.defaultPrevented && s(E) && s(E).handleClick();
            },
            children: (Ce, Ne) => {
              var ke = S0(), Me = ie(ke);
              je(Me, (We, It) => ({ class: We, ...It }), [
                () => He({ "mdc-tab__content": !0, [f()]: !0 }),
                () => lt(_, "content$")
              ]);
              var Le = Ie(Me);
              pe(Le, () => e.children ?? ve);
              var k = ue(Le, 2);
              {
                var J = (We) => {
                  n(We);
                };
                Se(k, (We) => {
                  d() && We(J);
                });
              }
              ye(Me, (We) => p = We, () => p), Fe(Me, (We, It) => Z == null ? void 0 : Z(We, It), g);
              var ce = ue(Me, 2);
              {
                var Ue = (We) => {
                  n(We);
                };
                Se(ce, (We) => {
                  d() || We(Ue);
                });
              }
              w(Ce, ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ce) => b = Ce,
        () => b
      );
    });
  }
  return w(t, we), Re(ae);
}
var y0 = /* @__PURE__ */ he('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), C0 = /* @__PURE__ */ he('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), T0 = /* @__PURE__ */ he('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function x0(t, e) {
  Oe(e, !0);
  let n = v(e, "filters", 31, () => _e([])), r = v(e, "onFilterChange", 3, (y) => {
  }), i = v(e, "activeNavigationTab", 31, () => _e(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = v(e, "searchText", 15, ""), l = v(e, "searchLabel", 3, "Search"), o = v(e, "searchPlaceholder", 3, "Type to search..."), c = v(e, "onSearchInput", 3, () => {
  }), d = v(e, "searchDisabled", 3, !1), u = /* @__PURE__ */ de(() => n().some((y) => y.value !== void 0 && y.value !== null && y.value !== "")), g = () => {
    n(n().map((y) => ({ ...y, value: void 0 }))), r()(n());
  };
  var f = T0(), m = Ie(f);
  {
    var h = (y) => {
      nE(y, {
        oninput: () => c()(),
        icon: "search",
        get label() {
          return l();
        },
        get placeholder() {
          return o();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(A) {
          a(A);
        }
      });
    };
    Se(m, (y) => {
      d() || y(h);
    });
  }
  var _ = ue(m, 2);
  {
    var b = (y) => {
      _0(y, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(x) {
          i(x);
        },
        tab: (x, I = ve) => {
          A0(x, {
            get tab() {
              return I();
            },
            minWidth: !0,
            children: (S, C) => {
              Io(S, {
                children: (T, N) => {
                  var $ = bt();
                  Ae(() => Ze($, I())), w(T, $);
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { tab: !0 }
      });
    };
    Se(_, (y) => {
      e.navigationTabs && y(b);
    });
  }
  var E = ue(_, 2);
  {
    var p = (y) => {
      var A = C0(), x = ue(Ie(A), 2);
      r0(x, {
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var I = ue(x, 2);
      {
        var S = (C) => {
          var T = y0();
          Pn("click", T, () => g()), w(C, T);
        };
        Se(I, (C) => {
          s(u) && C(S);
        });
      }
      w(y, A);
    };
    Se(E, (y) => {
      n() && n().length > 0 && y(p);
    });
  }
  w(t, f), Re();
}
An(["click"]);
An(["change", "click"]);
var w0 = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), O0 = /* @__PURE__ */ yt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), R0 = /* @__PURE__ */ he('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), L0 = /* @__PURE__ */ he('<input type="text" class="svelte-1mj71p3"/>'), D0 = /* @__PURE__ */ he('<input type="number" class="svelte-1mj71p3"/>'), Gl = /* @__PURE__ */ he("<!> <!>", 1), N0 = /* @__PURE__ */ he('<div class="cell-actions svelte-1mj71p3"></div>');
function Kd(t, e) {
  Oe(e, !0);
  const n = () => zn(b, "$sortColumn", a), r = () => zn(E, "$sortDirection", a), i = () => zn(_, "$filteredData", a), [a, l] = br();
  let o = v(e, "loadingDone", 15, !0), c = v(e, "label", 19, vp), d = v(e, "columnDefs", 19, () => []), u = v(e, "rowData", 31, () => _e([])), g = v(e, "rowActions", 19, () => []), f = v(e, "searchInputLabel", 3, "Search"), m = v(e, "emptyText", 3, "No data available"), h = _e({ name: "", color: "", number: "" }), _ = Vt([]), b = Vt(null), E = Vt(null), p = /* @__PURE__ */ de(() => d().some((I) => I.filter));
  e.store.store.subscribe((I) => {
    u([...I]), y();
  });
  function y() {
    let I = u().filter((S) => d().every((C) => {
      const T = h[C.field], N = C.filterValueGetter ? C.filterValueGetter(S) : S[C.field];
      return T ? C.filterType === "number" ? N == T : N.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    I = A(I), _.set(I);
  }
  function A(I) {
    let S, C;
    return b.subscribe((T) => S = T), E.subscribe((T) => C = T), !S || !C ? I : I.sort((T, N) => {
      let $ = T[S], q = N[S];
      return $ == null && ($ = ""), q == null && (q = ""), C === "asc" ? $.toString().localeCompare(q.toString()) : q.toString().localeCompare($.toString());
    });
  }
  function x(I) {
    b.update((S) => {
      if (S === I)
        E.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return E.set("asc"), I;
      return I;
    }), y();
  }
  _.set(u()), sI(t, {
    get "table$aria-label"() {
      return c();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (S) => {
      AI(S, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return o();
        },
        set closed(C) {
          o(C);
        }
      });
    },
    children: (S, C) => {
      var T = Gl(), N = ie(T);
      cI(N, {
        children: (q, X) => {
          var R = Gl(), O = ie(R);
          Rs(O, {
            class: "header-title-row",
            children: (F, G) => {
              var H = ge(), j = ie(H);
              sr(j, 17, d, Fi, (U, ae) => {
                Da(U, {
                  onclick: () => s(ae).sortable && x(s(ae).field),
                  get style() {
                    return s(ae).headerStyle;
                  },
                  children: (we, W) => {
                    var z = R0(), L = Ie(z), Y = Ie(L), M = ln(Y, !0), ee = ue(Y, 2);
                    {
                      var oe = (Q) => {
                        var re = ge(), Ce = ie(re);
                        {
                          var Ne = (ke) => {
                            var Me = ge(), Le = ie(Me);
                            {
                              var k = (ce) => {
                                var Ue = w0();
                                w(ce, Ue);
                              }, J = (ce) => {
                                var Ue = O0();
                                w(ce, Ue);
                              };
                              Se(Le, (ce) => {
                                r() === "asc" ? ce(k) : r() === "desc" && ce(J, 1);
                              });
                            }
                            w(ke, Me);
                          };
                          Se(Ce, (ke) => {
                            n() === s(ae).field && r() !== null && ke(Ne);
                          });
                        }
                        w(Q, re);
                      };
                      Se(ee, (Q) => {
                        s(ae).sortable && Q(oe);
                      });
                    }
                    Ae(() => {
                      ht(z, `min-width: ${s(ae).minWidth ?? 0 ?? ""}`), Ze(M, s(ae).headerName);
                    }), w(we, z);
                  },
                  $$slots: { default: !0 }
                });
              }), w(F, H);
            },
            $$slots: { default: !0 }
          });
          var D = ue(O, 2);
          {
            var K = (F) => {
              Rs(F, {
                class: "header-filter-row",
                children: (G, H) => {
                  var j = ge(), U = ie(j);
                  sr(U, 17, d, Fi, (ae, we) => {
                    Da(ae, {
                      children: (W, z) => {
                        var L = ge(), Y = ie(L);
                        {
                          var M = (ee) => {
                            var oe = Gl(), Q = ie(oe);
                            {
                              var re = (ke) => {
                                var Me = L0();
                                Ae(() => hr(Me, "placeholder", `${f()} ${s(we).headerName}`)), Pn("input", Me, () => y()), Ja(Me, () => h[s(we).field], (Le) => h[s(we).field] = Le), w(ke, Me);
                              };
                              Se(Q, (ke) => {
                                s(we).filterType === "text" && ke(re);
                              });
                            }
                            var Ce = ue(Q, 2);
                            {
                              var Ne = (ke) => {
                                var Me = D0();
                                Ae(() => hr(Me, "placeholder", `${f()} ${s(we).headerName}`)), Pn("input", Me, () => y()), Ja(Me, () => h[s(we).field], (Le) => h[s(we).field] = Le), w(ke, Me);
                              };
                              Se(Ce, (ke) => {
                                s(we).filterType === "number" && ke(Ne);
                              });
                            }
                            w(ee, oe);
                          };
                          Se(Y, (ee) => {
                            s(we).filter && ee(M);
                          });
                        }
                        w(W, L);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(G, j);
                },
                $$slots: { default: !0 }
              });
            };
            Se(D, (F) => {
              s(p) && F(K);
            });
          }
          w(q, R);
        },
        $$slots: { default: !0 }
      });
      var $ = ue(N, 2);
      fI($, {
        children: (q, X) => {
          var R = ge(), O = ie(R);
          {
            var D = (F) => {
              Rs(F, {
                children: (G, H) => {
                  Da(G, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return d().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (j, U) => {
                      var ae = bt();
                      Ae(() => Ze(ae, m())), w(j, ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, K = (F) => {
              var G = ge(), H = ie(G);
              sr(H, 1, i, Fi, (j, U) => {
                Rs(j, {
                  children: (ae, we) => {
                    var W = ge(), z = ie(W);
                    sr(z, 17, d, (L) => L.field, (L, Y) => {
                      var M = ge(), ee = ie(M);
                      {
                        var oe = (re) => {
                          Da(re, {
                            children: (Ce, Ne) => {
                              var ke = N0();
                              sr(ke, 21, g, Fi, (Me, Le) => {
                                var k = ge(), J = ie(k);
                                {
                                  var ce = (We) => {
                                    ns(We, {
                                      get content() {
                                        return s(Le).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (It, dn) => {
                                        {
                                          let be = /* @__PURE__ */ de(() => s(Le).disabled(s(U)));
                                          bb(It, {
                                            get iconComponent() {
                                              return s(Le).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Le).iconStyles;
                                            },
                                            callback: () => s(Le).callback(s(U)),
                                            get disabled() {
                                              return s(be);
                                            },
                                            get ariaLabel() {
                                              return s(Le).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Ue = (We) => {
                                    ns(We, {
                                      get content() {
                                        return s(Le).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (It, dn) => {
                                        {
                                          let be = /* @__PURE__ */ de(() => s(Le).disabled(s(U)));
                                          Ao(It, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Le).callback(s(U)),
                                            get disabled() {
                                              return s(be);
                                            },
                                            get ariaLabel() {
                                              return s(Le).ariaLabel;
                                            },
                                            children: (Te, ne) => {
                                              var se = ge(), Ve = ie(se);
                                              {
                                                var te = (at) => {
                                                  _p(at, { svgStyles: "margin: unset" });
                                                }, xe = (at) => {
                                                  dc(at, { svgStyles: "margin: unset" });
                                                }, mt = (at) => {
                                                  pp(at, { svgStyles: "margin: unset" });
                                                }, Yt = (at) => {
                                                  Sp(at, { svgStyles: "margin: unset" });
                                                }, Pr = (at) => {
                                                  Cp(at, { svgStyles: "margin: unset" });
                                                }, St = (at) => {
                                                  Zf(at, { svgStyles: "margin: unset" });
                                                }, Ft = (at) => {
                                                  Qf(at, { svgStyles: "margin: unset" });
                                                }, Zt = (at) => {
                                                  zp(at, { svgStyles: "margin: unset" });
                                                }, $n = (at) => {
                                                  Yf(at, { svgStyles: "margin: unset" });
                                                };
                                                Se(Ve, (at) => {
                                                  s(Le).icon === "add" ? at(te) : s(Le).icon === "cancel" ? at(xe, 1) : s(Le).icon === "download" ? at(mt, 2) : s(Le).icon === "find-in-page" ? at(Yt, 3) : s(Le).icon === "remove" ? at(Pr, 4) : s(Le).icon === "edit" ? at(St, 5) : s(Le).icon === "delete" ? at(Ft, 6) : s(Le).icon === "archive" ? at(Zt, 7) : at($n, -1);
                                                });
                                              }
                                              w(Te, se);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  Se(J, (We) => {
                                    s(Le).iconComponent ? We(ce) : We(Ue, -1);
                                  });
                                }
                                w(Me, k);
                              }), w(Ce, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        }, Q = (re) => {
                          Da(re, {
                            get numeric() {
                              return s(Y).numeric;
                            },
                            get style() {
                              return s(Y).cellStyle;
                            },
                            children: (Ce, Ne) => {
                              var ke = ge(), Me = ie(ke);
                              {
                                var Le = (ce) => {
                                  const Ue = /* @__PURE__ */ de(() => s(Y).cellRenderer);
                                  var We = ge(), It = ie(We);
                                  _r(It, () => s(Ue), (dn, be) => {
                                    be(dn, rt(
                                      {
                                        get row() {
                                          return s(U);
                                        },
                                        get value() {
                                          return s(U)[s(Y).field];
                                        },
                                        get col() {
                                          return s(Y);
                                        }
                                      },
                                      () => s(Y).cellRendererProps ?? {}
                                    ));
                                  }), w(ce, We);
                                }, k = (ce) => {
                                  var Ue = bt();
                                  Ae((We) => Ze(Ue, We), [
                                    () => s(Y).valueFormatter(s(U)[s(Y).field])
                                  ]), w(ce, Ue);
                                }, J = (ce) => {
                                  var Ue = bt();
                                  Ae(() => Ze(Ue, s(U)[s(Y).field] ?? "")), w(ce, Ue);
                                };
                                Se(Me, (ce) => {
                                  s(Y).cellRenderer ? ce(Le) : s(Y).valueFormatter ? ce(k, 1) : ce(J, -1);
                                });
                              }
                              w(Ce, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        Se(ee, (re) => {
                          s(Y).field === "actions" ? re(oe) : re(Q, -1);
                        });
                      }
                      w(L, M);
                    }), w(ae, W);
                  },
                  $$slots: { default: !0 }
                });
              }), w(F, G);
            };
            Se(O, (F) => {
              i().length === 0 ? F(D) : F(K, -1);
            });
          }
          w(q, R);
        },
        $$slots: { default: !0 }
      }), w(S, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Re(), l();
}
An(["input"]);
function Mt(t) {
  return typeof t == "function";
}
function _c(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var jl = _c(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function zd(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var bc = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var o = es(l), c = o.next(); !c.done; c = o.next()) {
              var d = c.value;
              d.remove(this);
            }
          } catch (_) {
            e = { error: _ };
          } finally {
            try {
              c && !c.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          l.remove(this);
      var u = this.initialTeardown;
      if (Mt(u))
        try {
          u();
        } catch (_) {
          a = _ instanceof jl ? _.errors : [_];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var f = es(g), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              Xd(h);
            } catch (_) {
              a = a ?? [], _ instanceof jl ? a = ji(ji([], ho(a)), ho(_.errors)) : a.push(_);
            }
          }
        } catch (_) {
          r = { error: _ };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new jl(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Xd(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && zd(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && zd(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
bc.EMPTY;
function eh(t) {
  return t instanceof bc || t && "closed" in t && Mt(t.remove) && Mt(t.add) && Mt(t.unsubscribe);
}
function Xd(t) {
  Mt(t) ? t() : t.unsubscribe();
}
var M0 = {
  Promise: void 0
}, P0 = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, ji([t, e], ho(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function th(t) {
  P0.setTimeout(function() {
    throw t;
  });
}
function Yd() {
}
function H0(t) {
  t();
}
var Ec = function(t) {
  wi(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, eh(n) && n.add(r)) : r.destination = B0, r;
  }
  return e.create = function(n, r, i) {
    return new rl(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(bc), U0 = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ns(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ns(r);
      }
    else
      Ns(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ns(n);
      }
  }, t;
}(), rl = function(t) {
  wi(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, l;
    return Mt(n) || !n ? l = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : l = n, a.destination = new U0(l), a;
  }
  return e;
}(Ec);
function Ns(t) {
  th(t);
}
function k0(t) {
  throw t;
}
var B0 = {
  closed: !0,
  next: Yd,
  error: k0,
  complete: Yd
}, pc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function F0(t) {
  return t;
}
function V0(t) {
  return t.length === 0 ? F0 : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Jn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = j0(e) ? e : new rl(e, n, r);
    return H0(function() {
      var l = i, o = l.operator, c = l.source;
      a.add(o ? o.call(a, c) : c ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Zd(n), new n(function(i, a) {
      var l = new rl({
        next: function(o) {
          try {
            e(o);
          } catch (c) {
            a(c), l.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(l);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[pc] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return V0(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Zd(e), new e(function(r, i) {
      var a;
      n.subscribe(function(l) {
        return a = l;
      }, function(l) {
        return i(l);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Zd(t) {
  var e;
  return (e = t ?? M0.Promise) !== null && e !== void 0 ? e : Promise;
}
function G0(t) {
  return t && Mt(t.next) && Mt(t.error) && Mt(t.complete);
}
function j0(t) {
  return t && t instanceof Ec || G0(t) && eh(t);
}
function W0(t) {
  return Mt(t == null ? void 0 : t.lift);
}
function _s(t) {
  return function(e) {
    if (W0(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function rs(t, e, n, r, i) {
  return new q0(t, e, n, r, i);
}
var q0 = function(t) {
  wi(e, t);
  function e(n, r, i, a, l, o) {
    var c = t.call(this, n) || this;
    return c.onFinalize = l, c.shouldUnsubscribe = o, c._next = r ? function(d) {
      try {
        r(d);
      } catch (u) {
        n.error(u);
      }
    } : t.prototype._next, c._error = a ? function(d) {
      try {
        a(d);
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Ec), K0 = new Jn(function(t) {
  return t.complete();
});
function z0(t) {
  return t && Mt(t.schedule);
}
function X0(t) {
  return t[t.length - 1];
}
function Y0(t) {
  return z0(X0(t)) ? t.pop() : void 0;
}
var nh = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function rh(t) {
  return Mt(t == null ? void 0 : t.then);
}
function ih(t) {
  return Mt(t[pc]);
}
function ah(t) {
  return Symbol.asyncIterator && Mt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function sh(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Z0() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var lh = Z0();
function oh(t) {
  return Mt(t == null ? void 0 : t[lh]);
}
function ch(t) {
  return Vm(this, arguments, function() {
    var n, r, i, a;
    return _f(this, function(l) {
      switch (l.label) {
        case 0:
          n = t.getReader(), l.label = 1;
        case 1:
          l.trys.push([1, , 9, 10]), l.label = 2;
        case 2:
          return [4, Wi(n.read())];
        case 3:
          return r = l.sent(), i = r.value, a = r.done, a ? [4, Wi(void 0)] : [3, 5];
        case 4:
          return [2, l.sent()];
        case 5:
          return [4, Wi(i)];
        case 6:
          return [4, l.sent()];
        case 7:
          return l.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function dh(t) {
  return Mt(t == null ? void 0 : t.getReader);
}
function bs(t) {
  if (t instanceof Jn)
    return t;
  if (t != null) {
    if (ih(t))
      return Q0(t);
    if (nh(t))
      return J0(t);
    if (rh(t))
      return $0(t);
    if (ah(t))
      return uh(t);
    if (oh(t))
      return eS(t);
    if (dh(t))
      return tS(t);
  }
  throw sh(t);
}
function Q0(t) {
  return new Jn(function(e) {
    var n = t[pc]();
    if (Mt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function J0(t) {
  return new Jn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function $0(t) {
  return new Jn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, th);
  });
}
function eS(t) {
  return new Jn(function(e) {
    var n, r;
    try {
      for (var i = es(t), a = i.next(); !a.done; a = i.next()) {
        var l = a.value;
        if (e.next(l), e.closed)
          return;
      }
    } catch (o) {
      n = { error: o };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function uh(t) {
  return new Jn(function(e) {
    nS(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function tS(t) {
  return uh(ch(t));
}
function nS(t, e) {
  var n, r, i, a;
  return Fm(this, void 0, void 0, function() {
    var l, o;
    return _f(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Gm(t), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done) return [3, 4];
          if (l = r.value, e.next(l), e.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return o = c.sent(), i = { error: o }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function Si(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function fh(t, e) {
  return e === void 0 && (e = 0), _s(function(n, r) {
    n.subscribe(rs(r, function(i) {
      return Si(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Si(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Si(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function hh(t, e) {
  return e === void 0 && (e = 0), _s(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function rS(t, e) {
  return bs(t).pipe(hh(e), fh(e));
}
function iS(t, e) {
  return bs(t).pipe(hh(e), fh(e));
}
function aS(t, e) {
  return new Jn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function sS(t, e) {
  return new Jn(function(n) {
    var r;
    return Si(n, e, function() {
      r = t[lh](), Si(n, e, function() {
        var i, a, l;
        try {
          i = r.next(), a = i.value, l = i.done;
        } catch (o) {
          n.error(o);
          return;
        }
        l ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return Mt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function vh(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Jn(function(n) {
    Si(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Si(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function lS(t, e) {
  return vh(ch(t), e);
}
function oS(t, e) {
  if (t != null) {
    if (ih(t))
      return rS(t, e);
    if (nh(t))
      return aS(t, e);
    if (rh(t))
      return iS(t, e);
    if (ah(t))
      return vh(t, e);
    if (oh(t))
      return sS(t, e);
    if (dh(t))
      return lS(t, e);
  }
  throw sh(t);
}
function mh(t, e) {
  return e ? oS(t, e) : bs(t);
}
function gh() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Y0(t);
  return mh(t, n);
}
var cS = _c(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Ga(t, e) {
  return new Promise(function(n, r) {
    var i = new rl({
      next: function(a) {
        n(a), i.unsubscribe();
      },
      error: r,
      complete: function() {
        r(new cS());
      }
    });
    t.subscribe(i);
  });
}
function Nn(t, e) {
  return _s(function(n, r) {
    var i = 0;
    n.subscribe(rs(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function dS(t, e, n, r, i, a, l, o) {
  var c = [], d = 0, u = 0, g = !1, f = function() {
    g && !c.length && !d && e.complete();
  }, m = function(_) {
    return d < r ? h(_) : c.push(_);
  }, h = function(_) {
    d++;
    var b = !1;
    bs(n(_, u++)).subscribe(rs(e, function(E) {
      e.next(E);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          d--;
          for (var E = function() {
            var p = c.shift();
            l || h(p);
          }; c.length && d < r; )
            E();
          f();
        } catch (p) {
          e.error(p);
        }
    }));
  };
  return t.subscribe(rs(e, m, function() {
    g = !0, f();
  })), function() {
  };
}
function xo(t, e, n) {
  return n === void 0 && (n = 1 / 0), Mt(e) ? xo(function(r, i) {
    return Nn(function(a, l) {
      return e(r, a, i, l);
    })(bs(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), _s(function(r, i) {
    return dS(r, i, t, n);
  }));
}
function _h(t, e) {
  return Mt(e) ? xo(t, e, 1) : xo(t, 1);
}
function Qd(t) {
  return t <= 0 ? function() {
    return K0;
  } : _s(function(e, n) {
    var r = 0;
    e.subscribe(rs(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
class uS {
  constructor(e, n, r, i, a, l, o, c, d, u) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = l, this._comment = o, this._archived = c, this._available = d, this._deleted = u;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._filename;
  }
  get author() {
    return this._author;
  }
  get type() {
    return this._type;
  }
  get date() {
    return this._date;
  }
  get version() {
    return this._version;
  }
  get comment() {
    return this._comment;
  }
  get archived() {
    return this._archived;
  }
  get available() {
    return this._available;
  }
  get deleted() {
    return this._deleted;
  }
}
function bh(t) {
  switch (t.responseType) {
    case "json": {
      if ("response" in t)
        return t.response;
      var e = t;
      return JSON.parse(e.responseText);
    }
    case "document":
      return t.responseXML;
    case "text":
    default: {
      if ("response" in t)
        return t.response;
      var e = t;
      return e.responseText;
    }
  }
}
var fS = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, l = n.responseType;
    this.status = a ?? 0, this.responseType = l ?? "";
    var o = n.getAllResponseHeaders();
    this.responseHeaders = o ? o.split(`
`).reduce(function(u, g) {
      var f = g.indexOf(": ");
      return u[g.slice(0, f)] = g.slice(f + 2), u;
    }, {}) : {}, this.response = bh(n);
    var c = e.loaded, d = e.total;
    this.loaded = c, this.total = d;
  }
  return t;
}(), il = _c(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = bh(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), hS = function() {
  function t(e, n) {
    return il.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(il.prototype), t;
}();
function vS(t, e) {
  return ni({ method: "GET", url: t, headers: e });
}
function mS(t, e, n) {
  return ni({ method: "POST", url: t, body: e, headers: n });
}
function gS(t, e) {
  return ni({ method: "DELETE", url: t, headers: e });
}
function _S(t, e, n) {
  return ni({ method: "PUT", url: t, body: e, headers: n });
}
function bS(t, e, n) {
  return ni({ method: "PATCH", url: t, body: e, headers: n });
}
var ES = Nn(function(t) {
  return t.response;
});
function pS(t, e) {
  return ES(ni({
    method: "GET",
    url: t,
    headers: e
  }));
}
var ni = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return SS(n);
  };
  return t.get = vS, t.post = mS, t.delete = gS, t.put = _S, t.patch = bS, t.getJSON = pS, t;
}(), IS = "upload", Jd = "download", Wl = "loadstart", ql = "progress", $d = "load";
function SS(t) {
  return new Jn(function(e) {
    var n, r, i = et({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, l = i.body, o = i.headers, c = i.url;
    if (!c)
      throw new TypeError("url is required");
    if (a) {
      var d;
      if (c.includes("?")) {
        var u = c.split("?");
        if (2 < u.length)
          throw new TypeError("invalid url");
        d = new URLSearchParams(u[1]), new URLSearchParams(a).forEach(function(K, F) {
          return d.set(F, K);
        }), c = u[0] + "?" + d;
      } else
        d = new URLSearchParams(a), c = c + "?" + d;
    }
    var g = {};
    if (o)
      for (var f in o)
        o.hasOwnProperty(f) && (g[f.toLowerCase()] = o[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in g) && (g["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, _ = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !m) && _ && b) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (g[b] = E);
    }
    var p = AS(l, g), y = et(et({}, i), {
      url: c,
      headers: g,
      body: p
    }), A;
    A = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var x = t.progressSubscriber, I = t.includeDownloadProgress, S = I === void 0 ? !1 : I, C = t.includeUploadProgress, T = C === void 0 ? !1 : C, N = function(K, F) {
        A.addEventListener(K, function() {
          var G, H = F();
          (G = x == null ? void 0 : x.error) === null || G === void 0 || G.call(x, H), e.error(H);
        });
      };
      N("timeout", function() {
        return new hS(A, y);
      }), N("abort", function() {
        return new il("aborted", A, y);
      });
      var $ = function(K, F) {
        return new fS(F, A, y, K + "_" + F.type);
      }, q = function(K, F, G) {
        K.addEventListener(F, function(H) {
          e.next($(G, H));
        });
      };
      T && [Wl, ql, $d].forEach(function(K) {
        return q(A.upload, K, IS);
      }), x && [Wl, ql].forEach(function(K) {
        return A.upload.addEventListener(K, function(F) {
          var G;
          return (G = x == null ? void 0 : x.next) === null || G === void 0 ? void 0 : G.call(x, F);
        });
      }), S && [Wl, ql].forEach(function(K) {
        return q(A, K, Jd);
      });
      var X = function(K) {
        var F = "ajax error" + (K ? " " + K : "");
        e.error(new il(F, A, y));
      };
      A.addEventListener("error", function(K) {
        var F;
        (F = x == null ? void 0 : x.error) === null || F === void 0 || F.call(x, K), X();
      }), A.addEventListener($d, function(K) {
        var F, G, H = A.status;
        if (H < 400) {
          (F = x == null ? void 0 : x.complete) === null || F === void 0 || F.call(x);
          var j = void 0;
          try {
            j = $(Jd, K);
          } catch (U) {
            e.error(U);
            return;
          }
          e.next(j), e.complete();
        } else
          (G = x == null ? void 0 : x.error) === null || G === void 0 || G.call(x, K), X(H);
      });
    }
    var R = y.user, O = y.method, D = y.async;
    R ? A.open(O, c, D, R, y.password) : A.open(O, c, D), D && (A.timeout = y.timeout, A.responseType = y.responseType), "withCredentials" in A && (A.withCredentials = y.withCredentials);
    for (var f in g)
      g.hasOwnProperty(f) && A.setRequestHeader(f, g[f]);
    return p ? A.send(p) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function AS(t, e) {
  var n;
  if (!t || typeof t == "string" || OS(t) || RS(t) || CS(t) || TS(t) || xS(t) || LS(t))
    return t;
  if (wS(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var yS = Object.prototype.toString;
function Ic(t, e) {
  return yS.call(t) === "[object " + e + "]";
}
function CS(t) {
  return Ic(t, "ArrayBuffer");
}
function TS(t) {
  return Ic(t, "File");
}
function xS(t) {
  return Ic(t, "Blob");
}
function wS(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function OS(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function RS(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function LS(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let DS = class {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
};
const NS = new DS("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), MS = [NS], PS = MS[0].getUrl();
let Eh = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? PS;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}, HS = class {
  constructor(e = new Eh()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: l, responseType: o }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${US(r)}` : ""}`,
      method: i,
      headers: a,
      body: l instanceof FormData ? l : JSON.stringify(l),
      responseType: o ?? "json"
    }), this.rxjsRequest = (n) => gh(n).pipe(
      Nn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      _h(
        (r) => ni(r).pipe(
          Nn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const Dr = (t) => encodeURIComponent(`${t}`), US = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Dr(e)}=${Dr(r)}`).join("&") : `${Dr(e)}=${Dr(n)}`
).join("&"), Ui = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class kS extends HS {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ui(e, "id", "deleteAllSclFileVersions"), Ui(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", Dr(e)).replace("{type}", Dr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ui(e, "id", "retrieveDataResourceByVersion"), Ui(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Dr(e)).replace("{version}", Dr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ui(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Dr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ui(e, "dataResourceSearch", "searchForResources");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
const di = class di {
  constructor() {
    Tt(this, "endpoint", "/compas-scl-data-service");
  }
  static getInstance() {
    return di.instance || (di.instance = new di()), di.instance;
  }
  async searchFiles(e) {
    const n = this.generateApiClient(this.endpoint), r = await Ga(
      n.searchForResources({ dataResourceSearch: this.mapToDataResourceSearch(e) })
    );
    return r != null && r.results ? r.results.map((i) => this.mapToFileSearchResult(i)) : [];
  }
  async getHistoryFiles(e) {
    const n = this.generateApiClient(this.endpoint), r = await Ga(
      n.retrieveDataResourceHistory({ id: e })
    );
    return r != null && r.versions ? r.versions.map((i) => this.mapToFileSearchResult(i)) : [];
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  async deleteResource(e, n) {
    const r = this.generateApiClient(this.endpoint);
    await Ga(r.deleteAllSclFileVersions({ id: n, type: e }));
  }
  async downloadSclData(e, n, r) {
    const i = this.generateApiClient(this.endpoint);
    return Ga(
      i.retrieveDataResourceByVersion({ id: e, version: r })
    );
  }
  mapToFileSearchResult(e) {
    return new uS(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available,
      e.deleted
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid,
      type: e.type,
      name: e.filename,
      author: e.author,
      from: e.from,
      to: e.to
    };
  }
  generateApiClient(e) {
    return new kS(new Eh({ basePath: e }));
  }
};
Tt(di, "instance");
let wo = di;
var qr;
class eu {
  constructor() {
    ze(this, qr, Vt([]));
  }
  get store() {
    return B(this, qr);
  }
  updateData(e) {
    B(this, qr).set(e);
  }
  addData(e) {
    B(this, qr).update((n) => [...n, e]);
  }
  removeData(e) {
    B(this, qr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return mf(B(this, qr)).find((n) => n.uuid === e);
  }
}
qr = new WeakMap();
class BS {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
}
const FS = new BS("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), VS = [FS], GS = VS[0].getUrl();
class ph {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? GS;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}
class jS {
  constructor(e = new ph()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: l, responseType: o }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${WS(r)}` : ""}`,
      method: i,
      headers: a,
      body: l instanceof FormData ? l : JSON.stringify(l),
      responseType: o ?? "json"
    }), this.rxjsRequest = (n) => gh(n).pipe(
      Nn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      _h(
        (r) => ni(r).pipe(
          Nn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Nr = (t) => encodeURIComponent(`${t}`), WS = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Nr(e)}=${Nr(r)}`).join("&") : `${Nr(e)}=${Nr(n)}`
).join("&"), Ma = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class qS extends jS {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: l, body: o }, c) {
    Ma(e, "id", "archiveResource"), Ma(n, "version", "archiveResource");
    const d = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...l != null ? { "X-filename": String(l) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Nr(e)).replace("{version}", Nr(n)),
      method: "POST",
      headers: d,
      body: o
    }, c == null ? void 0 : c.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    Ma(e, "id", "archiveSclResource"), Ma(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Nr(e)).replace("{version}", Nr(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    Ma(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Nr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, n) {
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class KS {
  constructor(e, n, r, i, a, l, o, c, d, u, g, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = l, this._type = o, this._voltage = c, this._modifiedAt = d, this._archivedAt = u, this._contentType = g, this._version = f, this._fields = m;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
const ui = class ui {
  constructor() {
    Tt(this, "baseUrl", "/compas-scl-data-service");
    Tt(this, "apiClient");
    this.apiClient = this.generateApiClient();
  }
  static getInstance() {
    return ui.instance || (ui.instance = new ui()), ui.instance;
  }
  searchArchive(e) {
    return this.apiClient.searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Qd(1),
      Nn((n) => n.resources),
      Nn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.apiClient.retrieveArchivedResourceHistory({ id: e }).pipe(
      Qd(1),
      Nn((n) => n.versions),
      Nn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return mh(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  archiveSclFile(e, n) {
    return this.apiClient.archiveSclResource({ id: e, version: n });
  }
  mapResourcesToArchiveSearchResults(e) {
    return e != null && e.length ? e.map((n) => this.mapToArchiveSearchResult(n)) : [];
  }
  mapToArchiveSearchResult(e) {
    return new KS(
      e.uuid,
      e.name,
      e.location,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      new Date(e.modifiedAt).toDateString(),
      new Date(e.archivedAt).toDateString(),
      e.contentType,
      e.version,
      e.fields
    );
  }
  generateApiClient() {
    const e = new ph({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new qS(e);
  }
};
Tt(ui, "instance");
let Oo = ui;
__({ en: V_, de: O_ });
var zS = /* @__PURE__ */ he("<h3> </h3>"), tu = /* @__PURE__ */ he("<!> <!>", 1), XS = /* @__PURE__ */ he('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="toolbar svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function YS(t, e) {
  Oe(e, !0);
  const n = () => zn(g_, "$_", r), [r, i] = br();
  v(e, "editCount", 19, () => -1);
  let a = v(e, "dataStore", 19, () => new eu()), l = v(e, "historyStore", 19, () => new eu());
  const o = wo.getInstance(), c = Oo.getInstance();
  let d = /* @__PURE__ */ fe(!0), u = /* @__PURE__ */ fe(!0), g = /* @__PURE__ */ fe(!1), f = /* @__PURE__ */ fe(""), m = /* @__PURE__ */ fe(void 0), h = /* @__PURE__ */ fe(_e([
    { key: "uuid", label: "UUID", type: "text" },
    {
      key: "type",
      label: "Type",
      type: "select",
      options: [
        { value: "SSD", label: "SSD" },
        { value: "IID", label: "IID" },
        { value: "ICD", label: "ICD" },
        { value: "SCD", label: "SCD" },
        { value: "CID", label: "CID" },
        { value: "SED", label: "SED" },
        { value: "ISD", label: "ISD" },
        { value: "STD", label: "STD" }
      ]
    },
    { key: "author", label: "Author", type: "text" },
    { key: "from", label: "Date from", type: "date" },
    { key: "to", label: "Date to", type: "date" }
  ]));
  const _ = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let b = /* @__PURE__ */ de(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("filename"),
      field: "filename",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("date"),
      field: "date",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: C
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    _
  ]), E = /* @__PURE__ */ de(() => [
    ...s(b),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const p = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (L) => R(L),
      disabled: (L) => !L.available,
      ariaLabel: "edit"
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (L) => q(L),
      disabled: () => !1,
      ariaLabel: "history"
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (L) => $(L),
      disabled: (L) => !L.available,
      ariaLabel: "download"
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (L) => T(L),
      disabled: () => !1,
      ariaLabel: "delete"
    },
    {
      icon: "archive",
      tooltip: "Archive",
      callback: (L) => N(L),
      disabled: () => !1,
      ariaLabel: "archive"
    }
  ], y = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (L) => $(L),
      disabled: (L) => !L.available,
      ariaLabel: "download"
    }
  ];
  let A;
  st(() => (I(), window.addEventListener("doc-saved", I), () => {
    clearTimeout(A), window.removeEventListener("doc-saved", I);
  }));
  function x(L = 200) {
    clearTimeout(A), A = setTimeout(() => I(), L);
  }
  async function I() {
    if (s(d)) {
      V(d, !1);
      try {
        const L = S(), Y = await o.searchFiles(L);
        a().updateData(Y.filter((M) => !M.deleted));
      } catch (L) {
        console.error("Failed to load resources:", L), Fn.error("Load Failed", "Could not load the resource list.");
      } finally {
        V(d, !0);
      }
    }
  }
  function S() {
    const L = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    for (const Y of s(h))
      if (Y.key in L && Y.type !== "date" && Y.value)
        L[Y.key] = Y.value;
      else if (Y.type === "date" && Y.value) {
        const M = new Date(Y.value);
        Y.key === "from" ? L.from = M.toISOString() : Y.key === "to" && (M.setHours(23, 59, 59, 999), L.to = M.toISOString());
      }
    return s(f).trim() && (L.filename = s(f).trim()), L;
  }
  function C(L) {
    return new Date(L).toLocaleDateString();
  }
  async function T(L) {
    var ee;
    const Y = !!e.docId && L.uuid === e.docId;
    if ((await Ul(Bl, {
      title: "Confirm Deletion",
      message: Y ? `"${L.filename}" is currently open in the editor.

Deleting it will remove it from CoMPAS. The document will stay open locally but its CoMPAS link will be cleared — you will be prompted to save it as a new entry next time.` : `Are you sure you want to delete the resource "${L.filename} (${L.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm")
      try {
        if (await o.deleteResource(L.type, L.uuid), Fn.success("Deleted resource", `Resource "${L.filename}" has been deleted.`), Y && e.doc) {
          const oe = e.docName ?? `${L.filename}.${L.type}`;
          (ee = window.document.getElementsByTagName("open-scd")[0]) == null || ee.dispatchEvent(new CustomEvent("open-doc", {
            bubbles: !0,
            composed: !0,
            detail: {
              localFile: !0,
              doc: e.doc,
              docName: oe,
              docId: ""
            }
          })), Fn.warn("CoMPAS link cleared", `"${L.filename}" was deleted. The document is still open locally and can be saved as a new CoMPAS entry.`);
        }
        I();
      } catch (oe) {
        console.error(`Failed to delete resource "${L.filename}":`, oe), Fn.error("Deletion failed", `Failed to delete resource "${L.filename}".`);
      }
  }
  async function N(L) {
    var M, ee;
    if ((await Ul(Bl, {
      title: "Confirm Archiving",
      message: `Archive latest version "${L.filename}" (v${L.version})? This keeps the file in History and does not delete it.`,
      confirmActionText: "Archive",
      cancelActionText: "Cancel"
    })).type === "confirm")
      try {
        await Ga(c.archiveSclFile(L.uuid, L.version)), Fn.success("Archived resource", `Resource "${L.filename}" has been archived.`), I();
      } catch (oe) {
        console.error(`Failed to archive resource "${L.filename}":`, oe);
        const Q = oe == null ? void 0 : oe.response, re = ((ee = (M = Q == null ? void 0 : Q.errorMessages) == null ? void 0 : M[0]) == null ? void 0 : ee.message) ?? `Failed to archive resource "${L.filename}".`;
        Fn.error("Archiving failed", re);
      }
  }
  async function $(L) {
    try {
      const Y = await o.downloadSclData(L.uuid, L.type, L.version), M = URL.createObjectURL(Y), ee = document.createElement("a");
      ee.href = M, ee.download = `${L.filename}.${L.type}`, ee.style.display = "none", document.body.appendChild(ee), ee.click(), document.body.removeChild(ee), URL.revokeObjectURL(M);
    } catch (Y) {
      console.error(`Failed to download "${L.filename}":`, Y), Fn.error("Download failed", `Could not download "${L.filename}".`);
    }
  }
  async function q(L) {
    V(m, L, !0), V(u, !1), V(g, !0);
    try {
      const Y = await o.getHistoryFiles(L.uuid);
      l().updateData(Y);
    } catch (Y) {
      console.error(`Failed to load history for "${L.filename}":`, Y), Fn.error("History failed", `Could not load history for "${L.filename}".`);
    } finally {
      V(u, !0);
    }
  }
  function X() {
    V(g, !1);
  }
  async function R(L) {
    var M;
    if ((await Ul(Bl, {
      title: "Open File",
      message: `Do you want to open "${L.filename}"?

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type === "confirm")
      try {
        const oe = await (await o.downloadSclData(L.uuid, L.type, L.version)).text(), Q = `${L.filename}.${L.type}`, re = new DOMParser().parseFromString(oe, "application/xml");
        (M = window.document.getElementsByTagName("open-scd")[0]) == null || M.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: re, docName: Q, docId: L.uuid }
        }));
      } catch (ee) {
        console.error(`Failed to open "${L.filename}":`, ee), Fn.error("Open failed", `Could not open "${L.filename}".`);
      }
  }
  var O = XS(), D = ie(O), K = Ie(D), F = Ie(K);
  JE(F, {
    onClose: X,
    get open() {
      return s(g);
    },
    set open(ee) {
      V(g, ee, !0);
    },
    title: (ee) => {
      var oe = zS(), Q = ln(oe, !0);
      Ae((re) => Ze(Q, re), [
        () => {
          var re;
          return n()("versionHistory.title", { values: { filename: (re = s(m)) == null ? void 0 : re.filename } });
        }
      ]), w(ee, oe);
    },
    content: (ee) => {
      {
        let oe = /* @__PURE__ */ de(() => n()("search"));
        Kd(ee, {
          get columnDefs() {
            return s(E);
          },
          get store() {
            return l();
          },
          get loadingDone() {
            return s(u);
          },
          get rowActions() {
            return y;
          },
          get searchInputLabel() {
            return s(oe);
          }
        });
      }
    },
    actions: (ee) => {
      Ao(ee, {
        callback: X,
        variant: "raised",
        children: (oe, Q) => {
          var re = tu(), Ce = ie(re);
          dc(Ce, {});
          var Ne = ue(Ce, 2);
          Io(Ne, {
            children: (ke, Me) => {
              var Le = bt();
              Ae((k) => Ze(Le, k), [() => n()("done")]), w(ke, Le);
            },
            $$slots: { default: !0 }
          }), w(oe, re);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var G = ue(F, 2), H = Ie(G);
  x0(H, {
    searchLabel: "Search file name...",
    onFilterChange: () => x(),
    onSearchInput: () => x(),
    get filters() {
      return s(h);
    },
    set filters(L) {
      V(h, L, !0);
    },
    get searchText() {
      return s(f);
    },
    set searchText(L) {
      V(f, L, !0);
    }
  });
  var j = ue(G, 2), U = Ie(j);
  {
    let L = /* @__PURE__ */ de(() => !s(d));
    Ao(U, {
      callback: () => I(),
      variant: "outlined",
      get disabled() {
        return s(L);
      },
      children: (Y, M) => {
        var ee = tu(), oe = ie(ee);
        Yf(oe, {});
        var Q = ue(oe, 2);
        Io(Q, {
          children: (re, Ce) => {
            var Ne = bt("Refresh");
            w(re, Ne);
          },
          $$slots: { default: !0 }
        }), w(Y, ee);
      },
      $$slots: { default: !0 }
    });
  }
  var ae = ue(j, 2), we = Ie(ae);
  {
    let L = /* @__PURE__ */ de(() => n()("search"));
    Kd(we, {
      emptyText: "No resources found.",
      get columnDefs() {
        return s(b);
      },
      get store() {
        return a();
      },
      get loadingDone() {
        return s(d);
      },
      get rowActions() {
        return p;
      },
      get searchInputLabel() {
        return s(L);
      }
    });
  }
  var W = ue(D, 2);
  WI(W, {});
  var z = ue(W, 2);
  ep(z, {}), w(t, O), Re(), i();
}
const Ih = "version-editor", Sh = "0.0.1";
var ZS = /* @__PURE__ */ he('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function QS(t, e) {
  Oe(e, !0);
  let n = v(e, "editCount", 19, () => -1), r = v(e, "dev", 3, !1);
  var i = ZS(), a = ie(i);
  {
    var l = (d) => {
      YS(d, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return n();
        },
        get docName() {
          return e.docName;
        },
        get docId() {
          return e.docId;
        },
        get host() {
          return e.host;
        },
        get locale() {
          return e.locale;
        }
      });
    };
    Se(a, (d) => {
      (e.doc || r()) && d(l);
    });
  }
  var o = ue(a, 2), c = ue(o, 2);
  Ae(() => {
    Fc(o, Ih), Fc(c, Sh);
  }), w(t, i), Re();
}
var Ji;
class iA extends HTMLElement {
  constructor() {
    super();
    ze(this, Ji);
    Ke(this, Ji, /* @__PURE__ */ fe(_e({
      doc: void 0,
      editCount: -1,
      host: this,
      locale: navigator.language ?? "en-US"
    })));
  }
  get _props() {
    return s(B(this, Ji));
  }
  set _props(n) {
    V(B(this, Ji), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" });
    const n = this.shadowRoot, r = JS();
    n.appendChild(r);
    const i = document.createElement("style");
    i.textContent = ":host { --primary-base: var(--primary); --white: #ffffff; --danger: var(--red); }", n.appendChild(i);
    const a = () => Xv(QS, { target: n, props: this._props });
    r.addEventListener("load", a, { once: !0 }), r.addEventListener("error", a, { once: !0 });
  }
  set doc(n) {
    this._props.doc = n;
  }
  set editCount(n) {
    this._props.editCount = n;
  }
  set docName(n) {
    this._props.docName = n;
  }
  set docId(n) {
    this._props.docId = n;
  }
  set locale(n) {
    this._props.locale = n;
  }
}
Ji = new WeakMap();
function JS() {
  const t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = new URL("./style.css", import.meta.url).href, t.id = `${Ih}-v${Sh}-style`, t;
}
export {
  iA as default
};
