var Bd = Object.defineProperty;
var Jo = (e) => {
  throw TypeError(e);
};
var Ud = (e, t, n) => t in e ? Bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => Ud(e, typeof t != "symbol" ? t + "" : t, n), vs = (e, t, n) => t.has(e) || Jo("Cannot " + n);
var I = (e, t, n) => (vs(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ce = (e, t, n) => t.has(e) ? Jo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ie = (e, t, n, r) => (vs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ve = (e, t, n) => (vs(e, t, "access private method"), n);
const Pu = {}, gt = Symbol("uninitialized"), Hu = "http://www.w3.org/1999/xhtml", kd = "http://www.w3.org/2000/svg", Fd = "@attach", Du = !1;
var as = Array.isArray, Gd = Array.prototype.indexOf, ea = Array.prototype.includes, ss = Array.from, yo = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, Mu = Object.getOwnPropertyDescriptors, Vd = Object.prototype, jd = Array.prototype, So = Object.getPrototypeOf, $o = Object.isExtensible;
function Ni(e) {
  return typeof e == "function";
}
const ee = () => {
};
function Bu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Uu() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const wt = 2, ai = 4, os = 8, Ao = 1 << 24, hn = 16, mn = 32, hr = 64, ks = 128, Io = 256, gn = 512, mt = 1024, nt = 2048, $t = 4096, Dt = 8192, At = 16384, mi = 32768, ta = 1 << 25, $n = 65536, Ga = 1 << 17, Wd = 1 << 18, pi = 1 << 19, qd = 1 << 20, wn = 1 << 25, Va = 1 << 21, zr = 1 << 22, dr = 1 << 23, Rn = Symbol("$state"), ku = Symbol("component"), Fu = Symbol("legacy props"), Yd = Symbol(""), Da = Symbol("attributes"), Fs = Symbol("class"), Gs = Symbol("style"), Vi = Symbol("text"), Ma = Symbol("form reset"), da = new class extends Error {
  constructor() {
    super(...arguments);
    Je(this, "name", "StaleReactionError");
    Je(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Ru;
const ls = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Ru = globalThis.document) != null && Ru.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Kd() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function zd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Zd = !1;
function Gu(e) {
  return e === this.v;
}
function To(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vu(e) {
  return !To(e, this.v);
}
function Co(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Qd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Jd(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function $d(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ef() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function tf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function af() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function sf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function of() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function lf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let _i = !1, uf = !1;
function cf() {
  _i = !0;
}
function df(e) {
  let t = e.p;
  for (; t !== null && t.c === null; )
    t = t.p;
  return (t == null ? void 0 : t.c) ?? null;
}
function ju(e, t) {
  return e === null && Co(), e.c ?? (e.c = new Map(df(e) || void 0));
}
let et = null;
function si(e) {
  et = e;
}
function _e(e) {
  return (
    /** @type {T} */
    ju(et).get(e)
  );
}
function ue(e, t) {
  return ju(et).set(e, t), t;
}
function Le(e, t = !1, n) {
  et = {
    p: et,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      De
    ),
    l: _i && !t ? { s: null, u: null, $: [] } : null
  };
}
function Ne(e) {
  var t = (
    /** @type {ComponentContext} */
    et
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hc(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, et = t.p, xo(e);
}
function xo(e = {}) {
  return yo(e, ku, { value: !0 }), e;
}
function fa() {
  return !_i || et !== null && et.l === null;
}
let Tr = [];
function Wu() {
  var e = Tr;
  Tr = [], Bu(e);
}
function On(e) {
  if (Tr.length === 0 && !Xi) {
    var t = Tr;
    queueMicrotask(() => {
      t === Tr && Wu();
    });
  }
  Tr.push(e);
}
function ff() {
  for (; Tr.length > 0; )
    Wu();
}
const hf = -7169;
function ut(e, t) {
  e.f = e.f & hf | t;
}
function wo(e) {
  e.f & gn || e.deps === null ? ut(e, mt) : ut(e, $t);
}
function qu(e, t) {
  e.f & nt ? t.set(e, nt) : e.f & $t && t.get(e) !== nt && t.set(e, $t), ut(e, mt);
}
function vf(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, On(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let el = !1;
function gf() {
  el || (el = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n[Ma]) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function bi(e) {
  var t = xe, n = De;
  an(null), Hn(null);
  try {
    return e();
  } finally {
    an(t), Hn(n);
  }
}
function mf(e, t, n, r = n) {
  e.addEventListener(t, () => bi(n));
  const i = (
    /** @type {any} */
    e[Ma]
  );
  i ? e[Ma] = () => {
    i(), r(!0);
  } : e[Ma] = () => r(!0), gf();
}
function Yu(e, t, n, r) {
  const i = fa() ? na : Oo;
  var a = e.filter((h) => !h.settled), s = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(s);
    return;
  }
  var o = (
    /** @type {Effect} */
    De
  ), l = pf(), u = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function d(h) {
    if (!(o.f & At)) {
      l();
      try {
        r([...s, ...h]);
      } catch (v) {
        Cn(v, o);
      }
      ja();
    }
  }
  var f = Ku();
  if (n.length === 0) {
    u.then(() => d([])).finally(f);
    return;
  }
  function g() {
    Promise.all(n.map((h) => /* @__PURE__ */ _f(h))).then(d).catch((h) => Cn(h, o)).finally(f);
  }
  u ? u.then(() => {
    if (o.f & At) {
      f();
      return;
    }
    l(), g(), ja();
  }) : g();
}
function pf() {
  var e = (
    /** @type {Effect} */
    De
  ), t = xe, n = et, r = (
    /** @type {Batch} */
    oe
  );
  return function(a = !0) {
    Hn(e), an(t), si(n), a && !(e.f & At) && (r == null || r.activate(), r == null || r.apply());
  };
}
function ja(e = !0) {
  Hn(null), an(null), si(null), e && (oe == null || oe.deactivate());
}
function Ku() {
  var e = (
    /** @type {Effect} */
    De
  ), t = e.b, n = (
    /** @type {Batch} */
    oe
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  var t = wt | nt;
  return De !== null && (De.f |= pi), {
    ctx: et,
    deps: null,
    effects: null,
    equals: Gu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: De,
    ac: null
  };
}
const ji = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function _f(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    De
  );
  r === null && Qd();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Mr(
    /** @type {V} */
    gt
  ), s = !xe, o = /* @__PURE__ */ new Set();
  return Nf(() => {
    var h, v;
    var l = (
      /** @type {Effect} */
      De
    ), u = Uu();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (m) => {
        m !== da && u.reject(m);
      }).finally(ja);
    } catch (m) {
      u.reject(m), ja();
    }
    var d = (
      /** @type {Batch} */
      oe
    );
    if (s) {
      if (l.f & mi)
        var f = Ku();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (v = d.async_deriveds.get(l)) == null || v.reject(ji);
      else
        for (const m of o.values())
          m.reject(ji);
      o.add(u), d.async_deriveds.set(l, u);
    }
    const g = (m, _ = void 0) => {
      f == null || f(), o.delete(u), _ !== ji && (d.activate(), _ ? (a.f |= dr, oi(a, _)) : (a.f & dr && (a.f ^= dr), oi(a, m)), d.deactivate());
    };
    u.promise.then(g, (m) => g(null, m || "unknown"));
  }), va(() => {
    for (const l of o)
      l.reject(ji);
  }), new Promise((l) => {
    function u(d) {
      function f() {
        d === i ? l(a) : u(i);
      }
      d.then(f, f);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ na(e);
  return bc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  const t = /* @__PURE__ */ na(e);
  return t.equals = Vu, t;
}
function bf(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      It(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ro(e) {
  var t, n = De, r = e.parent;
  if (!er && r !== null && e.v !== gt && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  r.f & (At | Dt))
    return Kd(), e.v;
  Hn(r);
  try {
    bf(e), t = Ac(e);
  } finally {
    Hn(n);
  }
  return t;
}
function zu(e) {
  var t = Ro(e);
  if (!e.equals(t) && (e.wv = yc(), (!(oe != null && oe.is_fork) || e.deps === null) && (oe !== null ? (oe.capture(e, t, !0), fr == null || fr.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ut(e, mt);
    return;
  }
  er || (St !== null ? (Po() || oe != null && oe.is_fork) && St.set(e, t) : wo(e));
}
function Ef(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && bi(() => {
        n.ac.abort(da), n.ac = null;
      }), n.fn !== null && (n.teardown = ee), ra(n, 0), Ho(n));
}
function Xu(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && li(t);
}
let gs = null, Wr = null, oe = null, fr = null, St = null, Vs = null, Xi = !1, ms = !1, Zi = null, Ba = null;
var tl = 0;
let yf = 1;
var Jr, $r, ei, Kn, ti, zn, oa, Sn, An, ni, wr, Re, js, Zu, Ws, Wi, qs, Qu, Ju, $u, Kr, Sf, qi;
const ns = class ns {
  constructor() {
    Ce(this, Re);
    Je(this, "id", yf++);
    /** True as soon as `#process` was called */
    Je(this, "started", !1);
    Je(this, "linked", !0);
    /** @type {Batch | null} */
    Je(this, "prev", null);
    /** @type {Batch | null} */
    Je(this, "next", null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Je(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * The keys of this map are identical to `this.previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Je(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * The keys of this map are identical to `this.current`
     * @type {Map<Value, any>}
     */
    Je(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Ce(this, Jr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Ce(this, $r, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ce(this, ei, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Ce(this, Kn, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ce(this, ti, null);
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
    Ce(this, zn, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Ce(this, oa, []);
    /**
     * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
     * @type {Map<Effect, number>}
     */
    Ce(this, Sn, /* @__PURE__ */ new Map());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Ce(this, An, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Ce(this, ni, /* @__PURE__ */ new Set());
    Je(this, "is_fork", !1);
    Ce(this, wr, !1);
    Wr === null ? gs = Wr = this : (Wr.next = this, this.prev = Wr), Wr = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    I(this, An).has(t) || I(this, An).set(t, { d: [], m: [] }), I(this, ni).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = I(this, An).get(t);
    if (r) {
      I(this, An).delete(t);
      for (var i of r.d)
        ut(i, nt), n(i);
      for (i of r.m)
        ut(i, $t), n(i);
    }
    I(this, ni).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== gt && !this.previous.has(t) && this.previous.set(t, t.v), t.f & dr || (this.current.set(t, [n, r]), St == null || St.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    oe = this;
  }
  deactivate() {
    oe = null, St = null;
  }
  flush() {
    try {
      ms = !0, oe = this, ve(this, Re, Wi).call(this);
    } finally {
      tl = 0, Vs = null, Zi = null, Ba = null, ms = !1, oe = null, St = null, Ln.clear();
    }
  }
  discard() {
    var t;
    for (const n of I(this, $r)) n(this);
    I(this, $r).clear();
    for (const n of this.async_deriveds.values())
      n.reject(ji);
    ve(this, Re, qi).call(this), (t = I(this, ti)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    I(this, oa).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (Ie(this, ei, I(this, ei) + 1), t) {
      let r = I(this, Kn).get(n) ?? 0;
      I(this, Kn).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (Ie(this, ei, I(this, ei) - 1), t) {
      let r = I(this, Kn).get(n) ?? 0;
      r === 1 ? I(this, Kn).delete(n) : I(this, Kn).set(n, r - 1);
    }
    I(this, wr) || (Ie(this, wr, !0), On(() => {
      Ie(this, wr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Map<Effect, number>} dirty_reactions
   */
  transfer_reactions(t) {
    for (const [n, r] of t)
      this.add_dirty_reaction(n, r);
    t.clear();
  }
  /**
   * @param {Effect} effect
   * @param {number} status
   */
  add_dirty_reaction(t, n) {
    (n === nt || I(this, Sn).get(t) !== nt) && I(this, Sn).set(t, n);
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    I(this, Jr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    I(this, $r).add(t);
  }
  settled() {
    return (I(this, ti) ?? Ie(this, ti, Uu())).promise;
  }
  static ensure() {
    if (oe === null) {
      const t = oe = new ns();
      !ms && !Xi && On(() => {
        t.started || t.flush();
      });
    }
    return oe;
  }
  apply() {
    {
      St = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var n;
    if (Vs = t, (n = t.b) != null && n.is_pending && t.f & (ai | os | Ao) && !(t.f & mi)) {
      t.b.defer_effect(t);
      return;
    }
    I(this, zn).push(t);
  }
};
Jr = new WeakMap(), $r = new WeakMap(), ei = new WeakMap(), Kn = new WeakMap(), ti = new WeakMap(), zn = new WeakMap(), oa = new WeakMap(), Sn = new WeakMap(), An = new WeakMap(), ni = new WeakMap(), wr = new WeakMap(), Re = new WeakSet(), js = function() {
  if (this.is_fork) return !0;
  for (const t of I(this, Kn).keys())
    if (!ve(this, Re, Zu).call(this, t))
      return !0;
  return !1;
}, /**
 * Whether `effect` is inside a branch that this batch skips
 * @param {Effect} effect
 */
Zu = function(t) {
  for (var n = (
    /** @type {Effect | null} */
    t
  ); n !== null; n = n.parent)
    if (I(this, An).has(n)) return !0;
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
Ws = function() {
  var t = [];
  for (const a of I(this, zn))
    if (!(a.f & At || !(a.f & (nt | $t)))) {
      for (var n = a, r = !1; n.parent !== null; ) {
        n = n.parent;
        var i = n.f;
        if (i & (hr | mn)) {
          if (!(i & mt)) {
            r = !0;
            break;
          }
          n.f ^= mt;
        }
      }
      r || t.push(n);
    }
  return Ie(this, zn, []), t;
}, Wi = function() {
  var o, l, u, d;
  this.started = !0;
  for (const [f, g] of I(this, Sn))
    ut(f, g), this.schedule(f);
  this.apply();
  for (var t = Zi = [], n = [], r = Ba = []; I(this, zn).length > 0; ) {
    tl++ > 1e3 && (ve(this, Re, qi).call(this), If());
    for (const f of ve(this, Re, Ws).call(this))
      try {
        ve(this, Re, qs).call(this, f, t, n);
      } catch (g) {
        throw nc(f), ve(this, Re, js).call(this) || this.discard(), g;
      }
  }
  if (oe = null, r.length > 0) {
    var i = ns.ensure();
    for (const f of r)
      i.schedule(f);
  }
  if (Zi = null, Ba = null, ve(this, Re, js).call(this)) {
    ve(this, Re, Kr).call(this, n), ve(this, Re, Kr).call(this, t);
    for (const [f, g] of I(this, An))
      tc(f, g);
    r.length > 0 && /** @type {unknown} */
    ve(o = oe, Re, Wi).call(o);
    return;
  }
  const a = ve(this, Re, Qu).call(this);
  if (a) {
    ve(this, Re, Kr).call(this, n), ve(this, Re, Kr).call(this, t), ve(l = a, Re, $u).call(l, this);
    return;
  }
  I(this, Sn).clear();
  for (const f of I(this, Jr)) f(this);
  I(this, Jr).clear(), fr = this, nl(n), nl(t), fr = null, (u = I(this, ti)) == null || u.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    oe
  );
  I(this, ei) === 0 && (I(this, zn).length === 0 || s !== null) && ve(this, Re, qi).call(this), s !== null && (Ln.clear(), ve(d = s, Re, Wi).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
qs = function(t, n, r) {
  t.f ^= mt;
  for (var i = t.first; i !== null; ) {
    var a = i.f, s = (a & (mn | hr)) !== 0, o = s && (a & mt) !== 0, l = o || (a & Dt) !== 0 || I(this, An).has(i);
    if (!l && i.fn !== null) {
      s ? i.f ^= mt : a & ai ? n.push(i) : ma(i) && (a & hn && this.add_dirty_reaction(i, $t), li(i));
      var u = i.first;
      if (u !== null) {
        i = u;
        continue;
      }
    }
    for (; i !== null; ) {
      var d = i.next;
      if (d !== null) {
        i = d;
        break;
      }
      i = i.parent;
    }
  }
}, Qu = function() {
  for (var t = this.prev; t !== null; t = t.prev)
    if (!t.is_fork && ve(this, Re, Ju).call(this, t)) return t;
  return null;
}, /** @param {Batch} batch */
Ju = function(t) {
  for (const [n, [, r]] of this.current)
    if (!r && t.current.has(n))
      return !0;
  return !1;
}, /**
 * @param {Batch} batch
 */
$u = function(t) {
  var r;
  for (const [i, a] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of t.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && a.promise.then(s.resolve).catch(s.reject);
  }
  t.async_deriveds.clear(), this.transfer_reactions(I(t, Sn));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !(i.f & wt && !(i.f & (nt | $t))))
      for (const l of a) {
        var s = l.f;
        if (s & wt)
          n(
            /** @type {Derived} */
            l
          );
        else {
          var o = (
            /** @type {Effect} */
            l
          );
          s & (zr | hn) && !this.async_deriveds.has(o) && (I(this, Sn).delete(o), ut(o, nt), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), ve(r = t, Re, qi).call(r), oe = this, ve(this, Re, Wi).call(this);
}, /**
 * @param {Effect[]} effects
 */
Kr = function(t) {
  for (var n = 0; n < t.length; n += 1)
    qu(t[n], I(this, Sn));
}, Sf = function() {
  var f, g;
  for (let h = gs; h !== null; h = h.next) {
    var t = h.id < this.id, n = [];
    for (const [v, [m, _]] of this.current) {
      if (h.current.has(v)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(v)[0]
        );
        if (t && m !== r)
          h.current.set(v, [m, _]);
        else
          continue;
      }
      n.push(v);
    }
    if (t)
      for (const [v, m] of this.async_deriveds) {
        const _ = h.async_deriveds.get(v);
        _ && m.promise.then(_.resolve).catch(_.reject);
      }
    var i = [...h.current.keys()].filter(
      (v) => !/** @type {[any, boolean]} */
      h.current.get(v)[1]
    );
    if (!(!h.started || i.length === 0)) {
      var a = i.filter((v) => !this.current.has(v));
      if (a.length === 0)
        t && h.discard();
      else if (n.length > 0) {
        if (t)
          for (const v of I(this, ni))
            h.unskip_effect(v, (m) => {
              var _;
              m.f & (hn | zr) ? h.schedule(m) : ve(_ = h, Re, Kr).call(_, [m]);
            });
        h.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var l of n)
          ec(l, a, s, o);
        o = /* @__PURE__ */ new Map();
        var u = [...h.current].filter(([v, m]) => {
          const _ = this.current.get(v);
          return _ ? _[0] !== m[0] || _[1] !== m[1] : !0;
        }).map(([v]) => v);
        if (u.length > 0)
          for (const v of I(this, oa))
            !(v.f & (At | Dt | Ga)) && Lo(v, u, o) && (v.f & (zr | hn) ? (ut(v, nt), h.schedule(v)) : h.add_dirty_reaction(v, nt));
        if (I(h, zn).length > 0 && !I(h, wr)) {
          h.apply();
          for (var d of ve(f = h, Re, Ws).call(f))
            ve(g = h, Re, qs).call(g, d, [], []);
        }
        h.deactivate();
      }
    }
  }
}, qi = function() {
  if (this.linked) {
    var t = this.prev, n = this.next;
    t === null ? gs = n : t.next = n, n === null ? Wr = t : n.prev = t, this.linked = !1;
  }
};
let Dr = ns;
function Af(e) {
  var t = Xi, n = fr;
  fr = null, Xi = !0;
  try {
    for (var r; ; ) {
      if (ff(), oe === null)
        return (
          /** @type {T} */
          r
        );
      oe.flush();
    }
  } finally {
    Xi = t, fr = n;
  }
}
function If() {
  try {
    nf();
  } catch (e) {
    Cn(e, Vs);
  }
}
let un = null;
function nl(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (At | Dt)) && ma(r) && (un = /* @__PURE__ */ new Set(), li(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && mc(r), (un == null ? void 0 : un.size) > 0)) {
        Ln.clear();
        for (const i of un) {
          if (i.f & (At | Dt)) continue;
          const a = [i];
          let s = i.parent;
          for (; s !== null; )
            un.has(s) && (un.delete(s), a.push(s)), s = s.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            l.f & (At | Dt) || li(l);
          }
        }
        un.clear();
      }
    }
    un = null;
  }
}
function ec(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      a & wt ? ec(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : a & (zr | hn) && !(a & nt) && Lo(i, t, r) && (ut(i, nt), No(
        /** @type {Effect} */
        i
      ));
    }
}
function Lo(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (ea.call(t, i))
        return !0;
      if (i.f & wt && Lo(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function No(e) {
  oe.schedule(e);
}
function tc(e, t) {
  if (!(e.f & mn && e.f & mt)) {
    e.f & nt ? t.d.push(e) : e.f & $t && t.m.push(e), ut(e, mt);
    for (var n = e.first; n !== null; )
      tc(n, t), n = n.next;
  }
}
function nc(e) {
  ut(e, mt);
  for (var t = e.first; t !== null; )
    nc(t), t = t.next;
}
let Wa = /* @__PURE__ */ new Set();
const Ln = /* @__PURE__ */ new Map();
let rc = !1;
function Mr(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: Gu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  const n = Mr(e);
  return bc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ic(e, t = !1, n = !0) {
  var i;
  const r = Mr(e);
  return t || (r.equals = Vu), _i && n && et !== null && et.l !== null && ((i = et.l).s ?? (i.s = [])).push(r), r;
}
function j(e, t, n = !1) {
  xe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!vn || xe.f & Ga) && fa() && xe.f & (wt | hn | zr | Ga) && (Pn === null || !Pn.has(e)) && of();
  let r = n ? be(t) : t;
  return oi(e, r, Ba);
}
var Ar = null, Ys = 0;
function oi(e, t, n = null) {
  if (!e.equals(t)) {
    er ? Ln.set(e, t) : Ln.has(e) || Ln.set(e, e.v);
    var r = Dr.ensure();
    if (r.capture(e, t), e.f & wt) {
      const i = (
        /** @type {Derived} */
        e
      );
      e.f & nt && Ro(i), St === null && wo(i);
    }
    e.wv = yc(), Ar = null, Ys = 0, ac(e, nt, n), Ar = null, fa() && De !== null && De.f & mt && !(De.f & (mn | hr)) && (tn === null ? Df([e]) : tn.push(e)), !r.is_fork && Wa.size > 0 && !rc && Tf();
  }
  return t;
}
function Tf() {
  rc = !1;
  for (const e of Wa) {
    e.f & mt && ut(e, $t);
    let t;
    try {
      t = ma(e);
    } catch {
      t = !0;
    }
    t && li(e);
  }
  Wa.clear();
}
function Qi(e) {
  j(e, e.v + 1);
}
function ac(e, t, n) {
  var r = e.reactions;
  if (r !== null) {
    var i = fa(), a = r.length;
    if (Ys += a, Ys > 1e5 && Ar === null && (Ar = /* @__PURE__ */ new Set()), Ar !== null) {
      if (Ar.has(e)) return;
      Ar.add(e);
    }
    for (var s = 0; s < a; s++) {
      var o = r[s], l = o.f;
      if (!(!i && o === De)) {
        var u = (l & nt) === 0;
        if (u && ut(o, t), l & Ga)
          Wa.add(
            /** @type {Effect} */
            o
          );
        else if (l & wt) {
          var d = (
            /** @type {Derived} */
            o
          );
          St == null || St.delete(d), ac(d, $t, n);
        } else if (u) {
          var f = (
            /** @type {Effect} */
            o
          );
          l & hn && un !== null && un.add(f), n !== null ? n.push(f) : No(f);
        }
      }
    }
  }
}
function be(e) {
  if (typeof e != "object" || e === null || Rn in e || ku in e)
    return e;
  const t = So(e);
  if (t !== Vd && t !== jd)
    return e;
  var n = /* @__PURE__ */ new Map(), r = as(e), i = /* @__PURE__ */ Ee(0), a = Pr, s = (o) => {
    if (Pr === a)
      return o();
    var l = xe, u = Pr;
    an(null), al(a);
    var d = o();
    return an(l), al(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && af();
        var d = n.get(l);
        return d === void 0 ? s(() => {
          var f = /* @__PURE__ */ Ee(u.value);
          return n.set(l, f), f;
        }) : j(d, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in o) {
            const d = s(() => /* @__PURE__ */ Ee(gt));
            n.set(l, d), Qi(i);
          }
        } else
          j(u, gt), Qi(i);
        return !0;
      },
      get(o, l, u) {
        var h;
        if (l === Rn)
          return e;
        var d = n.get(l), f = l in o;
        if (d === void 0 && (!f || (h = cr(o, l)) != null && h.writable) && (d = s(() => {
          var v = be(f ? o[l] : gt), m = /* @__PURE__ */ Ee(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var g = c(d);
          return g === gt ? void 0 : g;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var g;
        (g = this.has) == null || g.call(this, o, l);
        var u = Reflect.getOwnPropertyDescriptor(o, l), d = n.get(l);
        if (d !== void 0) {
          var f = c(d);
          if (f === gt)
            return;
          if (u && "value" in u)
            u.value = f;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var g;
        if (l === Rn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== gt || Reflect.has(o, l);
        if (u !== void 0 || (De !== null || xe !== null) && (!d || (g = cr(o, l)) != null && g.writable)) {
          u === void 0 && (u = s(() => {
            var h = d ? be(o[l]) : gt, v = /* @__PURE__ */ Ee(h);
            return v;
          }), n.set(l, u));
          var f = c(u);
          if (f === gt)
            return !1;
        }
        return d;
      },
      set(o, l, u, d) {
        var w;
        var f = n.get(l), g = l in o;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? j(v, gt) : h in o && (v = s(() => /* @__PURE__ */ Ee(gt)), n.set(h + "", v));
          }
        if (f === void 0)
          (!g || (w = cr(o, l)) != null && w.writable) && (f = s(() => /* @__PURE__ */ Ee(void 0)), j(f, be(u)), n.set(l, f));
        else {
          g = f.v !== gt;
          var m = s(() => be(u));
          j(f, m);
        }
        var _ = Reflect.getOwnPropertyDescriptor(o, l);
        if (_ != null && _.set && _.set.call(d, u), !g) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= b.v && j(b, S + 1);
          }
          Qi(i);
        }
        return !0;
      },
      ownKeys(o) {
        c(i);
        var l = Reflect.ownKeys(o).filter((f) => {
          var g = n.get(f);
          return g === void 0 || g.v !== gt;
        });
        for (var [u, d] of n)
          d.v !== gt && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        sf();
      }
    }
  );
}
function rl(e) {
  try {
    if (e !== null && typeof e == "object" && Rn in e)
      return e[Rn];
  } catch {
  }
  return e;
}
function sc(e, t) {
  return Object.is(rl(e), rl(t));
}
var qa, oc, lc, uc, cc;
function Cf() {
  if (qa === void 0) {
    qa = window, oc = document, lc = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    uc = cr(t, "firstChild").get, cc = cr(t, "nextSibling").get, $o(e) && (e[Fs] = void 0, e[Da] = null, e[Gs] = void 0, e.__e = void 0), $o(n) && (n[Vi] = void 0);
  }
}
function Nn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return (
    /** @type {TemplateNode | null} */
    uc.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  return (
    /** @type {TemplateNode | null} */
    cc.call(e)
  );
}
function Se(e, t) {
  return /* @__PURE__ */ Br(e);
}
function W(e, t = !1) {
  {
    var n = /* @__PURE__ */ Br(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ha(n) : n;
  }
}
function Xr(e, t = !1) {
  return /* @__PURE__ */ Br(e);
}
function ne(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ha(r);
  return r;
}
function xf(e) {
  e.textContent = "";
}
function dc() {
  return !1;
}
function fc(e, t, n) {
  return t == null || t === Hu ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e)
  );
}
function wf(e) {
  var t = De;
  if (t === null)
    return xe.f |= dr, e;
  if (!(t.f & mi) && !(t.f & ai))
    throw e;
  Cn(e, t);
}
function Cn(e, t) {
  if (e === Pu)
    throw e;
  if (!(t !== null && t.f & At)) {
    for (; t !== null; ) {
      if (t.f & ks && !(t.f & (At | ta))) {
        if (!(t.f & mi))
          throw e;
        try {
          t.b.error(e);
          return;
        } catch (n) {
          e = n;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
function Of(e) {
  De === null && (xe === null && tf(), ef()), er && $d();
}
function Rf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Dn(e, t) {
  var n = De;
  n !== null && n.f & Dt && (e |= Dt);
  var r = {
    ctx: et,
    deps: null,
    nodes: null,
    f: e | nt | gn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  oe == null || oe.register_created_effect(r);
  var i = r;
  if (e & ai)
    Zi !== null ? Zi.push(r) : Dr.ensure().schedule(r);
  else if (t !== null) {
    try {
      li(r);
    } catch (s) {
      throw It(r), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & pi) && (i = i.first, e & hn && e & $n && i !== null && (i.f |= $n));
  }
  if (i !== null && (i.parent = n, n !== null && Rf(i, n), xe !== null && xe.f & wt && !(e & hr))) {
    var a = (
      /** @type {Derived} */
      xe
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Po() {
  return xe !== null && !vn;
}
function va(e) {
  const t = Dn(os, null);
  return ut(t, mt), t.teardown = e, t;
}
function We(e) {
  Of();
  var t = (
    /** @type {Effect} */
    De.f
  ), n = !xe && (t & mn) !== 0 && et !== null && !et.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      et
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return hc(e);
}
function hc(e) {
  return Dn(ai | qd, e);
}
function Lf(e) {
  Dr.ensure();
  const t = Dn(hr | pi, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Nr(t, () => {
      It(t), r(void 0);
    }) : (It(t), r(void 0));
  });
}
function ga(e) {
  return Dn(ai, e);
}
function Nf(e) {
  return Dn(zr | pi, e);
}
function us(e, t = 0) {
  return Dn(os | t, e);
}
function pe(e, t = [], n = [], r = []) {
  Yu(r, t, n, (i) => {
    Dn(os, () => {
      e(...i.map(c));
    });
  });
}
function Ei(e, t = 0) {
  var n = Dn(hn | t, e);
  return n;
}
function vc(e, t = 0) {
  var n = Dn(Ao | t, e);
  return n;
}
function Ut(e) {
  return Dn(mn | pi, e);
}
function gc(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = er, r = xe;
    il(!0), an(null);
    try {
      t.call(null);
    } catch (i) {
      Cn(i, e.parent);
    } finally {
      il(n), an(r);
    }
  }
}
function Ho(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && bi(() => {
      i.abort(da);
    });
    var r = n.next;
    n.f & hr ? n.parent = null : It(n, t), n = r;
  }
}
function Pf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & mn || It(t), t = n;
  }
}
function It(e, t = !0) {
  var n = !1;
  (t || e.f & Wd) && e.nodes !== null && e.nodes.end !== null && (Hf(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= ta, Ho(e, t && !n), ra(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  gc(e), e.f ^= ta, e.f |= At;
  var i = e.parent;
  i !== null && i.first !== null && mc(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Hf(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ ha(e);
    e.remove(), e = n;
  }
}
function mc(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Nr(e, t, n = !0) {
  var r = [];
  e.f |= Io, pc(e, r, !0);
  var i = () => {
    n && It(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var s = () => --a || i();
    for (var o of r)
      o.out(s);
  } else
    i();
}
function pc(e, t, n) {
  if (!(e.f & Dt)) {
    e.f ^= Dt;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & hr)) {
        var s = (i.f & $n) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & mn) !== 0 && (e.f & hn) !== 0;
        pc(i, t, s ? n : !1);
      }
      i = a;
    }
  }
}
function Ya(e) {
  e.f &= ~Io, _c(e, !0);
}
function _c(e, t) {
  if (!(e.f & Io) && e.f & Dt) {
    e.f ^= Dt, e.f & mt || (ut(e, nt), Dr.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & $n) !== 0 || (n.f & mn) !== 0;
      _c(n, i ? t : !1), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || t) && s.in();
  }
}
function Do(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ ha(n);
      t.append(n), n = i;
    }
}
let er = !1;
function il(e) {
  er = e;
}
let xe = null, vn = !1;
function an(e) {
  xe = e;
}
let De = null;
function Hn(e) {
  De = e;
}
let Pn = null;
function bc(e) {
  xe !== null && (xe.f & Va || xe.f & wt) && (Pn ?? (Pn = /* @__PURE__ */ new Set())).add(e);
}
let kt = null, Jt = 0, tn = null;
function Df(e) {
  tn = e;
}
let Ec = 1, Cr = 0, Pr = Cr;
function al(e) {
  Pr = e;
}
function yc() {
  return ++Ec;
}
function ma(e) {
  var t = e.f;
  if (t & nt)
    return !0;
  if (t & $t) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (ma(
        /** @type {Derived} */
        a
      ) && zu(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    t & gn && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    St === null && ut(e, mt);
  }
  return !1;
}
function Sc(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Pn !== null && Pn.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & wt ? Sc(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ut(a, nt) : a.f & mt && ut(a, $t), No(
        /** @type {Effect} */
        a
      ));
    }
}
function Ac(e) {
  var t = kt, n = Jt, r = tn, i = xe, a = Pn, s = et, o = vn, l = Pr, u = e.f;
  kt = /** @type {null | Value[]} */
  null, Jt = 0, tn = null, xe = u & (mn | hr) ? null : e, Pn = null, si(e.ctx), vn = !1, Pr = ++Cr, e.ac !== null && (bi(() => {
    e.ac.abort(da);
  }), e.ac = null);
  try {
    e.f |= Va;
    var d = (
      /** @type {Function} */
      e.fn
    ), f = d();
    e.f |= mi;
    var g = sl(e);
    if (fa() && tn !== null && !vn && g !== null && !(e.f & (wt | $t | nt)))
      for (var h = 0; h < /** @type {Source[]} */
      tn.length; h++)
        Sc(
          tn[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Cr++, i.deps !== null)
        for (let v = 0; v < n; v += 1)
          i.deps[v].rv = Cr;
      if (t !== null)
        for (const v of t)
          v.rv = Cr;
      tn !== null && (r === null ? r = tn : r.push(.../** @type {Source[]} */
      tn));
    }
    return e.f & dr && (e.f ^= dr), f;
  } catch (v) {
    return sl(e), wf(v);
  } finally {
    e.f ^= Va, kt = t, Jt = n, tn = r, xe = i, Pn = a, si(s), vn = o, Pr = l;
  }
}
function sl(e) {
  var i;
  var t = e.deps, n = oe == null ? void 0 : oe.is_fork;
  if (kt !== null) {
    var r;
    if (n || ra(e, Jt), t !== null && Jt > 0)
      for (t.length = Jt + kt.length, r = 0; r < kt.length; r++)
        t[Jt + r] = kt[r];
    else
      e.deps = t = kt;
    if (Po() && e.f & gn)
      for (r = Jt; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && Jt < t.length && (ra(e, Jt), t.length = Jt);
  return t;
}
function Mf(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Gd.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && t.f & wt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (kt === null || !ea.call(kt, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    a.f & gn && (a.f ^= gn), a.v !== gt && wo(a), a.ac !== null && bi(() => {
      a.ac.abort(da), a.ac = null, ut(a, nt);
    }), Ef(a), ra(a, 0);
  }
}
function ra(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Mf(e, n[r]);
}
function li(e) {
  var t = e.f;
  if (!(t & At)) {
    ut(e, mt);
    var n = De;
    De = e;
    try {
      t & (hn | Ao) ? Pf(e) : Ho(e), gc(e);
      var r = Ac(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Ec;
      var i;
      Du && uf && e.f & nt && e.deps;
    } finally {
      De = n;
    }
  }
}
async function Ic() {
  await Promise.resolve(), Af();
}
function c(e) {
  var t = e.f, n = (t & wt) !== 0;
  if (xe !== null && !vn) {
    var r = De !== null && (De.f & At) !== 0;
    if (!r && (Pn === null || !Pn.has(e))) {
      var i = xe.deps;
      if (xe.f & Va)
        e.rv < Cr && (e.rv = Cr, kt === null && i !== null && i[Jt] === e ? Jt++ : kt === null ? kt = [e] : kt.push(e));
      else {
        xe.deps ?? (xe.deps = []), ea.call(xe.deps, e) || xe.deps.push(e);
        var a = e.reactions;
        a === null ? e.reactions = [xe] : ea.call(a, xe) || a.push(xe);
      }
    }
  }
  if (er && Ln.has(e))
    return Ln.get(e);
  if (n) {
    var s = (
      /** @type {Derived} */
      e
    );
    if (er) {
      var o = s.v;
      return (!(s.f & mt) && s.reactions !== null || Cc(s)) && (o = Ro(s)), Ln.set(s, o), o;
    }
    var l = (s.f & gn) === 0 && !vn && xe !== null && (xe.f & gn) !== 0, u = (s.f & mi) === 0;
    ma(s) && (l && (s.f |= gn), zu(s)), l && !u && (Xu(s), Tc(s));
  }
  if (St != null && St.has(e))
    return St.get(e);
  if (e.f & dr)
    throw e.v;
  return e.v;
}
function Tc(e) {
  if (e.f |= gn, e.deps !== null)
    for (const n of e.deps) {
      var t = n.reactions;
      t === null ? n.reactions = [e] : ea.call(t, e) || t.push(e), n.f & wt && !(n.f & gn) && (Xu(
        /** @type {Derived} */
        n
      ), Tc(
        /** @type {Derived} */
        n
      ));
    }
}
function Cc(e) {
  if (e.v === gt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ln.has(t) || t.f & wt && Cc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function vr(e) {
  var t = vn;
  try {
    return vn = !0, e();
  } finally {
    vn = t;
  }
}
function Bf(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Rn in e)
      Ks(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Rn in n && Ks(n);
      }
  }
}
function Ks(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ks(e[r], t);
      } catch {
      }
    const n = So(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Mu(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
const xr = Symbol("events"), xc = /* @__PURE__ */ new Set(), zs = /* @__PURE__ */ new Set();
function Mo(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || Xs.call(t, a), !a.cancelBubble)
      return bi(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, On(() => {
    i.__removed || t.addEventListener(e, i, r);
  })) : t.addEventListener(e, i, r), i;
}
function Uf(e, t, n, r = {}) {
  var i = Mo(t, e, n, r);
  return () => {
    i.__removed = !0, e.removeEventListener(t, i, r);
  };
}
function or(e, t, n, r, i) {
  var a = { capture: r, passive: i }, s = Mo(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && va(() => {
    s.__removed = !0, t.removeEventListener(e, s, a);
  });
}
function Ka(e, t, n) {
  (t[xr] ?? (t[xr] = {}))[e] = n;
}
function en(e) {
  for (var t = 0; t < e.length; t++)
    xc.add(e[t]);
  for (var n of zs)
    n(e);
}
let ps = null, _s = !1;
function Xs(e) {
  var m, _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ps = e, _s || (_s = !0, setTimeout(() => {
    _s = !1, ps = null;
  }));
  var s = 0, o = ps === e && e[xr];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[xr] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    yo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = xe, f = De;
    an(null), Hn(null);
    try {
      for (var g, h = []; a !== null && a !== t; ) {
        try {
          var v = (_ = a[xr]) == null ? void 0 : _[r];
          v != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && v.call(a, e);
        } catch (b) {
          g ? h.push(b) : g = b;
        }
        if (e.cancelBubble) break;
        s++, a = s < i.length ? (
          /** @type {Element} */
          i[s]
        ) : null;
      }
      if (g) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw g;
      }
    } finally {
      e[xr] = t, delete e.currentTarget, an(d), Hn(f);
    }
  }
}
var Lu;
const bs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Lu = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Lu.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function kf(e) {
  return (
    /** @type {string} */
    (bs == null ? void 0 : bs.createHTML(e)) ?? e
  );
}
function wc(e) {
  var t = fc("template");
  return t.innerHTML = kf(e.replaceAll("<!>", "<!---->")), t.content;
}
function ui(e, t) {
  var n = (
    /** @type {Effect} */
    De
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wc(a ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Br(i)));
    var s = (
      /** @type {TemplateNode} */
      r || lc ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Br(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ui(o, l);
    } else
      ui(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ff(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        wc(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Br(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Br(o);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ui(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  return /* @__PURE__ */ Ff(e, t, "svg");
}
function yt(e = "") {
  {
    var t = Nn(e + "");
    return ui(t, t), t;
  }
}
function re() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Nn();
  return e.append(t, n), ui(t, n), e;
}
function T(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Gf(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Vf = [
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
function jf(e) {
  return Vf.includes(e);
}
const Wf = {
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
function qf(e) {
  return e = e.toLowerCase(), Wf[e] ?? e;
}
const Yf = ["touchstart", "touchmove"];
function Kf(e) {
  return Yf.includes(e);
}
function zf(e) {
  let t = 0, n = Mr(0), r;
  return () => {
    Po() && (c(n), us(() => (t === 0 && (r = vr(() => e(() => Qi(n)))), t += 1, () => {
      On(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Qi(n));
      });
    })));
  };
}
var Xf = $n | pi;
function Zf(e, t, n, r) {
  new Qf(e, t, n, r);
}
var nn, Eo, rn, Or, xt, Xt, Pt, Zt, In, Rr, sr, ri, la, Xn, rs, Ue, Jf, $f, Zs, rr, eh, Qs, Yi, Ua, Js, $s;
class Qf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    Ce(this, Ue);
    /** @type {Boundary | null} */
    Je(this, "parent");
    Je(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Je(this, "transform_error");
    /** @type {TemplateNode} */
    Ce(this, nn);
    /** @type {TemplateNode | null} */
    Ce(this, Eo, null);
    /** @type {BoundaryProps} */
    Ce(this, rn);
    /** @type {((anchor: Node) => void)} */
    Ce(this, Or);
    /** @type {Effect} */
    Ce(this, xt);
    /** @type {Effect | null} */
    Ce(this, Xt, null);
    /** @type {Effect | null} */
    Ce(this, Pt, null);
    /** @type {Effect | null} */
    Ce(this, Zt, null);
    /** @type {DocumentFragment | null} */
    Ce(this, In, null);
    Ce(this, Rr, 0);
    Ce(this, sr, 0);
    Ce(this, ri, !1);
    /** @type {Map<Effect, number>} */
    Ce(this, la, /* @__PURE__ */ new Map());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ce(this, Xn, null);
    Ce(this, rs, zf(() => (Ie(this, Xn, Mr(I(this, Rr))), () => {
      Ie(this, Xn, null);
    })));
    var a;
    Ie(this, nn, t), Ie(this, rn, n), Ie(this, Or, (s) => {
      var o = (
        /** @type {Effect} */
        De
      );
      o.b = this, o.f |= ks, r(s);
    }), this.parent = /** @type {Effect} */
    De.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), Ie(this, xt, Ei(() => {
      ve(this, Ue, Qs).call(this);
    }, Xf));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    qu(t, I(this, la));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!I(this, rn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    ve(this, Ue, Js).call(this, t, n), Ie(this, Rr, I(this, Rr) + t), !(!I(this, Xn) || I(this, ri)) && (Ie(this, ri, !0), On(() => {
      Ie(this, ri, !1), I(this, Xn) && oi(I(this, Xn), I(this, Rr));
    }));
  }
  get_effect_pending() {
    return I(this, rs).call(this), c(
      /** @type {Source<number>} */
      I(this, Xn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (t === Pu || !I(this, rn).onerror && !I(this, rn).failed)
      throw t;
    oe != null && oe.is_fork ? (I(this, Xt) && oe.skip_effect(I(this, Xt)), I(this, Pt) && oe.skip_effect(I(this, Pt)), I(this, Zt) && oe.skip_effect(I(this, Zt)), oe.oncommit(() => {
      ve(this, Ue, rr).call(this) || ve(this, Ue, $s).call(this, t);
    })) : ve(this, Ue, $s).call(this, t);
  }
}
nn = new WeakMap(), Eo = new WeakMap(), rn = new WeakMap(), Or = new WeakMap(), xt = new WeakMap(), Xt = new WeakMap(), Pt = new WeakMap(), Zt = new WeakMap(), In = new WeakMap(), Rr = new WeakMap(), sr = new WeakMap(), ri = new WeakMap(), la = new WeakMap(), Xn = new WeakMap(), rs = new WeakMap(), Ue = new WeakSet(), Jf = function() {
  try {
    Ie(this, Xt, Ut(() => I(this, Or).call(this, I(this, nn))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
$f = function(t) {
  const n = I(this, rn).failed, { reset: r, invoke_onerror: i } = ve(this, Ue, Zs).call(this, t);
  On(i), n && Ie(this, Zt, Ut(() => {
    n(
      I(this, nn),
      () => t,
      () => r
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
Zs = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (!ve(this, Ue, rr).call(this)) {
      if (n) {
        Xd();
        return;
      }
      n = !0, r && lf(), I(this, Zt) !== null && Nr(I(this, Zt), () => {
        Ie(this, Zt, null);
      }), ve(this, Ue, Ua).call(this, () => {
        ve(this, Ue, Qs).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var s, o;
    if (!ve(this, Ue, rr).call(this))
      try {
        r = !0, (o = (s = I(this, rn)).onerror) == null || o.call(s, t, i), r = !1;
      } catch (l) {
        Cn(l, I(this, xt) && I(this, xt).parent);
      }
  } };
}, rr = function() {
  return (I(this, xt).f & (At | ta)) !== 0;
}, eh = function() {
  const t = I(this, rn).pending;
  t && (this.is_pending = !0, Ie(this, Pt, Ut(() => t(I(this, nn)))), On(() => {
    if (!ve(this, Ue, rr).call(this)) {
      var n = Ie(this, In, document.createDocumentFragment()), r = Nn(), i = !1;
      if (n.append(r), Ie(this, Xt, ve(this, Ue, Ua).call(this, () => {
        try {
          return Ut(() => I(this, Or).call(this, r));
        } catch (a) {
          try {
            this.error(a), i = !0;
          } catch (s) {
            Cn(s, I(this, xt).parent);
          }
          return null;
        }
      })), I(this, Xt) === null) {
        Ie(this, In, null), i && ve(this, Ue, Yi).call(
          this,
          /** @type {Batch} */
          oe
        );
        return;
      }
      I(this, sr) === 0 && (I(this, nn).before(n), Ie(this, In, null), Nr(
        /** @type {Effect} */
        I(this, Pt),
        () => {
          Ie(this, Pt, null);
        }
      ), ve(this, Ue, Yi).call(
        this,
        /** @type {Batch} */
        oe
      ));
    }
  }));
}, Qs = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ie(this, sr, 0), Ie(this, Rr, 0), Ie(this, Xt, Ut(() => {
      I(this, Or).call(this, I(this, nn));
    })), I(this, sr) > 0) {
      var t = Ie(this, In, document.createDocumentFragment());
      Do(I(this, Xt), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        I(this, rn).pending
      );
      Ie(this, Pt, Ut(() => n(I(this, nn))));
    } else
      ve(this, Ue, Yi).call(
        this,
        /** @type {Batch} */
        oe
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Yi = function(t) {
  this.is_pending = !1, t.transfer_reactions(I(this, la));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ua = function(t) {
  var n = De, r = xe, i = et;
  Hn(I(this, xt)), an(I(this, xt)), si(I(this, xt).ctx);
  try {
    return Dr.ensure(), t();
  } finally {
    Hn(n), an(r), si(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Js = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && ve(r = this.parent, Ue, Js).call(r, t, n);
    return;
  }
  Ie(this, sr, I(this, sr) + t), I(this, sr) === 0 && (ve(this, Ue, Yi).call(this, n), I(this, Pt) && Nr(I(this, Pt), () => {
    Ie(this, Pt, null);
  }), I(this, In) && (I(this, nn).before(I(this, In)), Ie(this, In, null)));
}, /**
 * @param {unknown} error
 */
$s = function(t) {
  I(this, Xt) && (It(I(this, Xt)), Ie(this, Xt, null)), I(this, Pt) && (It(I(this, Pt)), Ie(this, Pt, null)), I(this, Zt) && (It(I(this, Zt)), Ie(this, Zt, null));
  let n = I(this, rn).failed;
  const r = (i) => {
    if (ve(this, Ue, rr).call(this)) return;
    const { reset: a, invoke_onerror: s } = ve(this, Ue, Zs).call(this, i);
    s(), n && !ve(this, Ue, rr).call(this) && Ie(this, Zt, ve(this, Ue, Ua).call(this, () => {
      try {
        return Ut(() => {
          var o = (
            /** @type {Effect} */
            De
          );
          o.b = this, o.f |= ks, n(
            I(this, nn),
            () => i,
            () => a
          );
        });
      } catch (o) {
        return Cn(
          o,
          /** @type {Effect} */
          I(this, xt).parent
        ), null;
      }
    }));
  };
  On(() => {
    if (!ve(this, Ue, rr).call(this)) {
      var i;
      try {
        i = this.transform_error(t);
      } catch (a) {
        Cn(a, I(this, xt) && I(this, xt).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (a) => Cn(a, I(this, xt) && I(this, xt).parent)
      ) : r(i);
    }
  });
};
function ot(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Vi] ?? (e[Vi] = e.nodeValue)) && (e[Vi] = n, e.nodeValue = `${n}`);
}
function th(e, t) {
  return nh(e, t);
}
const Sa = /* @__PURE__ */ new Map();
function nh(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: o }) {
  Cf();
  var l = void 0, u = Lf(() => {
    var d = n ?? t.appendChild(Nn());
    Zf(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (h) => {
        Le({});
        var v = (
          /** @type {ComponentContext} */
          et
        );
        a && (v.c = a), i && (r.$$events = i), l = e(h, r) || xo(), Ne();
      },
      o
    );
    var f = /* @__PURE__ */ new Set(), g = (h) => {
      for (var v = 0; v < h.length; v++) {
        var m = h[v];
        if (!f.has(m)) {
          f.add(m);
          var _ = Kf(m);
          for (const w of [t, document]) {
            var b = Sa.get(w);
            b === void 0 && (b = /* @__PURE__ */ new Map(), Sa.set(w, b));
            var S = b.get(m);
            S === void 0 ? (w.addEventListener(m, Xs, { passive: _ }), b.set(m, 1)) : b.set(m, S + 1);
          }
        }
      }
    };
    return g(ss(xc)), zs.add(g), () => {
      var _;
      for (var h of f)
        for (const b of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Sa.get(b)
          ), m = (
            /** @type {number} */
            v.get(h)
          );
          --m == 0 ? (b.removeEventListener(h, Xs), v.delete(h), v.size === 0 && Sa.delete(b)) : v.set(h, m);
        }
      zs.delete(g), d !== n && ((_ = d.parentNode) == null || _.removeChild(d));
    };
  });
  return rh.set(l, u), l;
}
let rh = /* @__PURE__ */ new WeakMap();
var cn, Tn, Qt, Lr, ua, ca, is;
class cs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Je(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Ce(this, cn, /* @__PURE__ */ new Map());
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
    Ce(this, Tn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Ce(this, Qt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Ce(this, Lr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Ce(this, ua, !0);
    /**
     * @param {Batch} batch
     */
    Ce(this, ca, (t) => {
      if (I(this, cn).has(t)) {
        var n = (
          /** @type {Key} */
          I(this, cn).get(t)
        ), r = I(this, Tn).get(n);
        if (r)
          Ya(r), I(this, Lr).delete(n);
        else {
          var i = I(this, Qt).get(n);
          i && (Ya(i.effect), I(this, Tn).set(n, i.effect), I(this, Qt).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, s] of I(this, cn)) {
          if (I(this, cn).delete(a), a === t)
            break;
          const o = I(this, Qt).get(s);
          o && (It(o.effect), I(this, Qt).delete(s));
        }
        for (const [a, s] of I(this, Tn)) {
          if (a === n || I(this, Lr).has(a)) continue;
          const o = () => {
            if (Array.from(I(this, cn).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Do(s, u), u.append(Nn()), I(this, Qt).set(a, { effect: s, fragment: u });
            } else
              It(s);
            I(this, Lr).delete(a), I(this, Tn).delete(a);
          };
          I(this, ua) || !r ? (I(this, Lr).add(a), Nr(s, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Ce(this, is, (t) => {
      I(this, cn).delete(t);
      const n = Array.from(I(this, cn).values());
      for (const [r, i] of I(this, Qt))
        n.includes(r) || (It(i.effect), I(this, Qt).delete(r));
    });
    this.anchor = t, Ie(this, ua, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      oe
    ), i = dc();
    if (n && !I(this, Tn).has(t) && !I(this, Qt).has(t))
      if (i) {
        var a = document.createDocumentFragment(), s = Nn();
        a.append(s), I(this, Qt).set(t, {
          effect: Ut(() => n(s)),
          fragment: a
        });
      } else
        I(this, Tn).set(
          t,
          Ut(() => n(this.anchor))
        );
    if (I(this, cn).set(r, t), i) {
      for (const [o, l] of I(this, Tn))
        o === t ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [o, l] of I(this, Qt))
        o === t ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(I(this, ca)), r.ondiscard(I(this, is));
    } else
      I(this, ca).call(this, r);
  }
}
cn = new WeakMap(), Tn = new WeakMap(), Qt = new WeakMap(), Lr = new WeakMap(), ua = new WeakMap(), ca = new WeakMap(), is = new WeakMap();
function le(e, t, ...n) {
  var r = new cs(e);
  Ei(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, $n);
}
function _t(e) {
  et === null && Co(), _i && et.l !== null ? ih(et).m.push(e) : We(() => {
    const t = vr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yi(e) {
  et === null && Co(), _t(() => () => vr(e));
}
function ih(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ge(e, t, n = !1) {
  var r = new cs(e), i = n ? $n : 0;
  function a(s, o) {
    r.ensure(s, o);
  }
  Ei(() => {
    var s = !1;
    t((o, l = 0) => {
      s = !0, a(l, o);
    }), s || a(-1, null);
  }, i);
}
function Aa(e, t) {
  return t;
}
function ah(e, t, n) {
  for (var r = [], i = t.length, a, s = t.length, o = 0; o < i; o++) {
    let f = t[o];
    Nr(
      f,
      () => {
        if (a) {
          if (a.pending.delete(f), a.done.add(f), a.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            eo(e, ss(a.done)), g.delete(a), g.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var l = r.length === 0 && n !== null && e.pending.size === 0;
    if (l) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      xf(d), d.append(u), e.items.clear();
    }
    eo(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function eo(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const s of e.pending.values())
      for (const o of s)
        r.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (r != null && r.has(a)) {
      a.f |= wn;
      const s = document.createDocumentFragment();
      Do(a, s);
    } else
      It(t[i], n);
  }
}
var ol;
function Pi(e, t, n, r, i, a = null) {
  var s = e, o = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(Nn());
  }
  var d = null, f = /* @__PURE__ */ Oo(() => {
    var S = n();
    return (
      /** @type {V[]} */
      as(S) ? S : S == null ? [] : ss(S)
    );
  }), g = /* @__PURE__ */ new Map(), h = !0;
  function v(S) {
    if (!(b.effect.f & At)) {
      b.pending.delete(S);
      var w = c(f);
      b.fallback = d, sh(b, w, s, t, r), d !== null && (w.length === 0 ? d.f & wn ? (d.f ^= wn, Ki(d, null, s)) : Ya(d) : Nr(d, () => {
        d = null;
      }));
    }
  }
  function m(S) {
    b.pending.delete(S);
  }
  var _ = Ei(() => {
    for (var S = (
      /** @type {V[]} */
      c(f)
    ), w = S.length, O = /* @__PURE__ */ new Set(), A = (
      /** @type {Batch} */
      oe
    ), E = dc(), y = 0; y < w; y += 1) {
      var C = S[y], N = r(C, y), D = h ? null : o.get(N);
      D ? (D.v && oi(D.v, C), D.i && oi(D.i, y), E && A.unskip_effect(D.e)) : (D = oh(
        o,
        h ? s : ol ?? (ol = Nn()),
        C,
        N,
        y,
        i,
        t,
        n
      ), h || (D.e.f |= wn), o.set(N, D)), O.add(N);
    }
    if (w === 0 && a && !d && (h ? d = Ut(() => a(s)) : (d = Ut(() => a(ol ?? (ol = Nn()))), d.f |= wn)), w > O.size && Jd(), !h)
      if (g.set(A, O), E) {
        for (const [G, Y] of o)
          O.has(G) || A.skip_effect(Y.e);
        A.oncommit(v), A.ondiscard(m);
      } else
        v(A);
    c(f);
  }), b = { effect: _, items: o, pending: g, outrogroups: null, fallback: d };
  h = !1;
}
function Hi(e) {
  for (; e !== null && !(e.f & mn); )
    e = e.next;
  return e;
}
function sh(e, t, n, r, i) {
  var D, G, Y, Q, ie, U, x, V, H;
  var a = (r & 8) !== 0, s = t.length, o = e.items, l = Hi(e.effect.first), u, d = null, f, g = [], h = [], v, m, _, b;
  if (a)
    for (b = 0; b < s; b += 1)
      v = t[b], m = i(v, b), _ = /** @type {EachItem} */
      o.get(m).e, _.f & wn || ((G = (D = _.nodes) == null ? void 0 : D.a) == null || G.measure(), (f ?? (f = /* @__PURE__ */ new Set())).add(_));
  for (b = 0; b < s; b += 1) {
    if (v = t[b], m = i(v, b), _ = /** @type {EachItem} */
    o.get(m).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(_), F.done.delete(_);
    if (_.f & Dt && (Ya(_), a && ((Q = (Y = _.nodes) == null ? void 0 : Y.a) == null || Q.unfix(), (f ?? (f = /* @__PURE__ */ new Set())).delete(_))), _.f & wn)
      if (_.f ^= wn, _ === l)
        Ki(_, null, n);
      else {
        var S = d ? d.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), nr(e, d, _), nr(e, _, S), Ki(_, S, n), d = _, g = [], h = [], l = Hi(d.next);
        continue;
      }
    if (_ !== l) {
      if (u !== void 0 && u.has(_)) {
        if (g.length < h.length) {
          var w = h[0], O;
          d = w.prev;
          var A = g[0], E = g[g.length - 1];
          for (O = 0; O < g.length; O += 1)
            Ki(g[O], w, n);
          for (O = 0; O < h.length; O += 1)
            u.delete(h[O]);
          nr(e, A.prev, E.next), nr(e, d, A), nr(e, E, w), l = w, d = E, b -= 1, g = [], h = [];
        } else
          u.delete(_), Ki(_, l, n), nr(e, _.prev, _.next), nr(e, _, d === null ? e.effect.first : d.next), nr(e, d, _), d = _;
        continue;
      }
      for (g = [], h = []; l !== null && l !== _; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(l), h.push(l), l = Hi(l.next);
      if (l === null)
        continue;
    }
    _.f & wn || g.push(_), d = _, l = Hi(_.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (eo(e, ss(F.done)), (ie = e.outrogroups) == null || ie.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var y = [];
    if (u !== void 0)
      for (_ of u)
        _.f & Dt || y.push(_);
    for (; l !== null; )
      !(l.f & Dt) && l !== e.fallback && y.push(l), l = Hi(l.next);
    var C = y.length;
    if (C > 0) {
      var N = r & 4 && s === 0 ? n : null;
      if (a) {
        for (b = 0; b < C; b += 1)
          (x = (U = y[b].nodes) == null ? void 0 : U.a) == null || x.measure();
        for (b = 0; b < C; b += 1)
          (H = (V = y[b].nodes) == null ? void 0 : V.a) == null || H.fix();
      }
      ah(e, y, N);
    }
  }
  a && On(() => {
    var F, k;
    if (f !== void 0)
      for (_ of f)
        (k = (F = _.nodes) == null ? void 0 : F.a) == null || k.apply();
  });
}
function oh(e, t, n, r, i, a, s, o) {
  var l = s & 1 ? s & 16 ? Mr(n) : /* @__PURE__ */ ic(n, !1, !1) : null, u = s & 2 ? Mr(i) : null;
  return {
    v: l,
    i: u,
    e: Ut(() => (a(t, l ?? n, u ?? i, o), () => {
      e.delete(r);
    }))
  };
}
function Ki(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & wn) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ha(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function nr(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Si(e, t, n) {
  var r = new cs(e);
  Ei(() => {
    var i = t() ?? null;
    r.ensure(i, i && ((a) => n(a, i)));
  }, $n);
}
function ll(e, t, n, r, i, a) {
  var s = null, o = (
    /** @type {TemplateNode} */
    e
  ), l = new cs(o, !1);
  Ei(() => {
    const u = t() || null;
    var d = u === "svg" ? kd : void 0;
    if (u === null) {
      l.ensure(null, null);
      return;
    }
    return l.ensure(u, (f) => {
      if (u) {
        var g = Zd;
        if (s = fc(u, d), ui(s, s), r) {
          var h = null, v = s.appendChild(Nn());
          r(s, v), h == null || h.remove();
        }
        De.nodes.end = s, g || f.before(s);
      }
    }), () => {
    };
  }, $n), va(() => {
  });
}
function $e(e, t, n) {
  ga(() => {
    var r = vr(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      us(() => {
        var s = n();
        Bf(s), i && To(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function lh(e, t) {
  var n = void 0, r;
  vc(() => {
    n !== (n = t()) && (r && (It(r), r = null), n && (r = Ut(() => {
      ga(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Oc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Oc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function uh() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Oc(e)) && (r && (r += " "), r += t);
  return r;
}
function za(e) {
  return typeof e == "object" ? uh(e) : e ?? "";
}
const ul = [...` 	
\r\f \v\uFEFF`];
function ch(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var o = s + a;
          (s === 0 || ul.includes(r[s - 1])) && (o === r.length || ul.includes(r[o])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(o + 1) : s = o;
        }
  }
  return r === "" ? null : r;
}
function cl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Es(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function dh(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
      var a = !1, s = 0, o = !1, l = [];
      r && l.push(...Object.keys(r).map(Es)), i && l.push(...Object.keys(i).map(Es));
      var u = 0, d = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var g = e[f];
        if (o ? g === "/" && e[f - 1] === "*" && (o = !1) : a ? a === g && (a = !1) : g === "/" && e[f + 1] === "*" ? o = !0 : g === '"' || g === "'" ? a = g : g === "(" ? s++ : g === ")" && s--, !o && a === !1 && s === 0) {
          if (g === ":" && d === -1)
            d = f;
          else if (g === ";" || f === m - 1) {
            if (d !== -1) {
              var h = Es(e.substring(u, d).trim());
              if (!l.includes(h)) {
                g !== ";" && f++;
                var v = e.substring(u, f).trim();
                n += " " + v + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += cl(r)), i && (n += cl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Xa(e, t, n, r, i, a) {
  var s = (
    /** @type {any} */
    e[Fs]
  );
  if (s !== n || s === void 0) {
    var o = ch(n, r, a);
    o == null ? e.removeAttribute("class") : t ? e.className = o : e.setAttribute("class", o), e[Fs] = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && e.classList.toggle(l, u);
    }
  return a;
}
function ys(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Ot(e, t, n, r) {
  var i = (
    /** @type {any} */
    e[Gs]
  );
  if (i !== t) {
    var a = dh(t, r);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e[Gs] = t;
  } else r && (Array.isArray(r) ? (ys(e, n == null ? void 0 : n[0], r[0]), ys(e, n == null ? void 0 : n[1], r[1], "important")) : ys(e, n, r));
  return r;
}
function Rc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function dl(e, t) {
  var n = !("__defaultValue" in e);
  !n && e.__defaultValue === t || (e.__defaultValue = t, Lc(e, !n || "__value" in e));
}
function Lc(e, t) {
  var n = e.__defaultValue, r = e.multiple, i = r ? n ?? [] : null;
  if (!(r && !as(i))) {
    var a = e.selectedIndex, s = t && r ? new Set(e.selectedOptions) : null;
    for (var o of e.options) {
      var l = no(o);
      Rc(
        o,
        r ? (
          /** @type {any[]} */
          i.includes(l)
        ) : sc(l, n)
      );
    }
    if (t)
      if (s !== null)
        for (o of e.options) {
          var u = s.has(o);
          o.selected !== u && (o.selected = u);
        }
      else e.selectedIndex !== a && (e.selectedIndex = a);
  }
}
function to(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!as(t))
      return zd();
    for (var r of e.options)
      r.selected = t.includes(no(r));
    return;
  }
  for (r of e.options) {
    var i = no(r);
    if (sc(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function fh(e) {
  var t = new MutationObserver((n) => {
    n.every(hh) || ("__defaultValue" in e && Lc(e, !1), "__value" in e && to(e, e.__value));
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), va(() => {
    t.disconnect();
  });
}
function no(e) {
  return "__value" in e ? e.__value : e.value;
}
function hh(e) {
  if (
    /** @type {Element} */
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const Di = Symbol("class"), Mi = Symbol("style"), Nc = Symbol("is custom element"), Pc = Symbol("is html"), vh = ls ? "input" : "INPUT", gh = ls ? "option" : "OPTION", Hc = ls ? "select" : "SELECT", Dc = ls ? "progress" : "PROGRESS";
function fl(e, t) {
  var n = Bo(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== Dc) || (e.value = t ?? "");
}
function Qn(e, t, n, r) {
  var i = Bo(e), a = i[t];
  a !== (i[t] = n) && (t === "loading" && (e[Yd] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Mc(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function mh(e, t, n, r, i = !1, a = !1) {
  var s = Bo(e), o = s[Nc], l = !s[Pc], u = t || {}, d = e.nodeName === gh, f = e.nodeName === Hc;
  try {
    for (var g in t)
      !(g in n) && g[0] + g[1] !== "$$" && (n[g] = null);
    n.class ? n.class = za(n.class) : (r || n[Di]) && (n.class = null), n[Mi] && (n.style ?? (n.style = null));
    var h = Mc(e);
    if (e.nodeName === vh && "type" in n && ("value" in n || "__value" in n)) {
      var v = n.type;
      (v !== u.type || v === void 0 && e.hasAttribute("type")) && (u.type = v, Qn(e, "type", v, a));
    }
    for (const A in n) {
      let E = n[A];
      if (d && A === "value" && E == null) {
        e.value = e.__value = "", u[A] = E;
        continue;
      }
      if (A === "class") {
        var m = e.namespaceURI === "http://www.w3.org/1999/xhtml";
        Xa(e, m, E, r, t == null ? void 0 : t[Di], n[Di]), u[A] = E, u[Di] = n[Di];
        continue;
      }
      if (A === "style") {
        Ot(e, E, t == null ? void 0 : t[Mi], n[Mi]), u[A] = E, u[Mi] = n[Mi];
        continue;
      }
      var _ = u[A];
      if (!(E === _ && !(E === void 0 && e.hasAttribute(A)))) {
        u[A] = E;
        var b = A[0] + A[1];
        if (b !== "$$")
          if (b === "on") {
            const y = {}, C = "$$" + A;
            let N = A.slice(2);
            var S = jf(N);
            if (Gf(N) && (N = N.slice(0, -7), y.capture = !0), !S && _) {
              if (E != null) continue;
              e.removeEventListener(N, u[C], y), u[C] = null;
            }
            if (S)
              Ka(N, e, E), en([N]);
            else if (E != null) {
              let D = function(G) {
                u[A].call(this, G);
              };
              u[C] = Mo(N, e, D, y);
            }
          } else if (A === "style")
            Qn(e, A, E);
          else if (A === "autofocus")
            vf(
              /** @type {HTMLElement} */
              e,
              !!E
            );
          else if (!o && (A === "__value" || A === "value" && E != null))
            e.__value = E, (_ == null || // @ts-ignore
            e.value !== E || E === 0 && e.nodeName === Dc) && (e.value = E);
          else if (A === "selected" && d)
            Rc(
              /** @type {HTMLOptionElement} */
              e,
              E
            );
          else {
            var w = A;
            l || (w = qf(w));
            var O = w === "defaultValue" || w === "defaultChecked";
            if (f && w === "defaultValue") continue;
            if (E == null && !o && !O)
              if (s[A] = null, w === "value" || w === "checked") {
                let y = (
                  /** @type {HTMLInputElement} */
                  e
                );
                const C = t === void 0;
                if (w === "value") {
                  let N = y.defaultValue;
                  y.removeAttribute(w), y.defaultValue = N, y.value = y.__value = C ? N : null;
                } else {
                  let N = y.defaultChecked;
                  y.removeAttribute(w), y.defaultChecked = N, y.checked = C ? N : !1;
                }
              } else
                e.removeAttribute(A);
            else O || (o || typeof E != "string") && h.has(w) ? (e[w] = E, w in s && (s[w] = gt)) : typeof E != "function" && Qn(e, w, E, a);
          }
      }
    }
  } finally {
  }
  return u;
}
function tt(e, t, n = [], r = [], i = [], a, s = !1, o = !1) {
  Yu(i, n, r, (l) => {
    var u = void 0, d = {}, f = e.nodeName === Hc, g = !1;
    if (vc(() => {
      var v = t(...l.map(c)), m = mh(
        e,
        u,
        v,
        a,
        s,
        o
      );
      if (g && f) {
        var _ = (
          /** @type {HTMLSelectElement} */
          e
        );
        "defaultValue" in v && dl(_, v.defaultValue), "value" in v && to(_, v.value);
      }
      for (let S of Object.getOwnPropertySymbols(d))
        v[S] || It(d[S]);
      for (let S of Object.getOwnPropertySymbols(v)) {
        var b = v[S];
        S.description === Fd && (!u || b !== u[S]) && (d[S] && It(d[S]), d[S] = Ut(() => lh(e, () => b))), m[S] = b;
      }
      u = m;
    }), f) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      ga(() => {
        var v = (
          /** @type {Record<string | symbol, any>} */
          u
        );
        "defaultValue" in v && dl(h, v.defaultValue), to(h, v.value, !0), fh(h);
      });
    }
    g = !0;
  });
}
function Bo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Da] ?? (e[Da] = {
      [Nc]: e.nodeName.includes("-"),
      [Pc]: e.namespaceURI === Hu
    })
  );
}
var hl = /* @__PURE__ */ new Map();
function Mc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = hl.get(t);
  if (n) return n;
  hl.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Mu(i);
    for (var s in r)
      r[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    i = So(i);
  }
  return n;
}
function ro(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  mf(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Ss(e) ? As(a) : a, n(a), oe !== null && r.add(oe), await Ic(), a !== (a = t())) {
      var s = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var u = e.value.length;
        s === o && o === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = s, e.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  vr(t) == null && e.value && (n(Ss(e) ? As(e.value) : e.value), oe !== null && r.add(oe)), us(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        oe
      );
      if (r.has(a))
        return;
    }
    Ss(e) && i === As(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ss(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function As(e) {
  return e === "" ? null : +e;
}
function Is(e, t) {
  return e === t || (e == null ? void 0 : e[Rn]) === t;
}
function ye(e = xo(), t, n, r) {
  var i = (
    /** @type {ComponentContext} */
    et.r
  ), a = (
    /** @type {Effect} */
    De
  );
  return ga(() => {
    var s, o;
    return us(() => {
      s = o, o = [], vr(() => {
        Is(n(...o), e) || (t(e, ...o), s && Is(n(...s), e) && t(null, ...s));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & ta; )
        l = l.parent;
      const u = () => {
        o && Is(n(...o), e) && t(null, ...o);
      }, d = l.teardown;
      l.teardown = () => {
        u(), d == null || d();
      };
    };
  }), e;
}
function Uo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ee;
  const r = vr(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const qr = [];
function ph(e, t) {
  return {
    subscribe: Mt(e, t).subscribe
  };
}
function Mt(e, t = ee) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(o) {
    if (To(e, o) && (e = o, n)) {
      const l = !qr.length;
      for (const u of r)
        u[1](), qr.push(u, e);
      if (l) {
        for (let u = 0; u < qr.length; u += 2)
          qr[u][0](qr[u + 1]);
        qr.length = 0;
      }
    }
  }
  function a(o) {
    i(o(
      /** @type {T} */
      e
    ));
  }
  function s(o, l = ee) {
    const u = [o, l];
    return r.add(u), r.size === 1 && (n = t(i, a) || ee), o(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Ai(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return ph(n, (s, o) => {
    let l = !1;
    const u = [];
    let d = 0, f = ee;
    const g = () => {
      if (d)
        return;
      f();
      const v = t(r ? u[0] : u, s, o);
      a ? s(v) : f = typeof v == "function" ? v : ee;
    }, h = i.map(
      (v, m) => Uo(
        v,
        (_) => {
          u[m] = _, d &= ~(1 << m), l && g();
        },
        () => {
          d |= 1 << m;
        }
      )
    );
    return l = !0, g(), function() {
      Bu(h), f(), l = !1;
    };
  });
}
function Bc(e) {
  let t;
  return Uo(e, (n) => t = n)(), t;
}
let Ia = !1, io = Symbol("unmounted");
function Jn(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ic(void 0),
    unsubscribe: ee
  });
  if (r.store !== e && !(io in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ee;
    else {
      var i = !0;
      r.unsubscribe = Uo(e, (a) => {
        i ? r.source.v = a : j(r.source, a);
      }), i = !1;
    }
  return e && io in n ? Bc(e) : c(r.source);
}
function lr(e, t) {
  return _h(e, t), t;
}
function gr() {
  const e = {};
  function t() {
    va(() => {
      for (var n in e)
        e[n].unsubscribe();
      yo(e, io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function _h(e, t) {
  try {
    e.set(t);
  } finally {
  }
}
function bh(e) {
  var t = Ia;
  try {
    return Ia = !1, [e(), Ia];
  } finally {
    Ia = t;
  }
}
const Eh = {
  get(e, t) {
    if (!e.exclude.has(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.has(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.has(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Xe(e, t, n) {
  return new Proxy({ props: e, exclude: t }, Eh);
}
const yh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ni(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      Ni(i) && (i = i());
      const a = cr(i, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Ni(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = cr(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Rn || t === Fu) return !1;
    for (let n of e.props)
      if (Ni(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Ni(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function pt(...e) {
  return new Proxy({ props: e }, yh);
}
function p(e, t, n, r) {
  var O;
  var i = !_i || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, o = (
    /** @type {V} */
    r
  ), l = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => s && i ? (u ?? (u = /* @__PURE__ */ na(
    /** @type {() => V} */
    r
  )), c(u)) : (l && (l = !1, o = s ? vr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o);
  let f;
  if (a) {
    var g = Rn in e || Fu in e;
    f = ((O = cr(e, t)) == null ? void 0 : O.set) ?? (g && t in e ? (A) => e[t] = A : void 0);
  }
  var h, v = !1;
  a ? [h, v] = bh(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && r !== void 0 && (h = d(), f && (i && rf(), f(h)));
  var m;
  if (i ? m = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? d() : (l = !0, A);
  } : m = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A !== void 0 && (o = /** @type {V} */
    void 0), A === void 0 ? o : A;
  }, i && !(n & 4))
    return m;
  if (f) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      function(A, E) {
        return arguments.length > 0 ? ((!i || !E || _ || v) && f(E ? m() : A), A) : m();
      }
    );
  }
  var b = !1, S = (n & 1 ? na : Oo)(() => (b = !1, m()));
  a && c(S);
  var w = (
    /** @type {Effect} */
    De
  );
  return (
    /** @type {() => V} */
    function(A, E) {
      if (arguments.length > 0) {
        const y = E ? c(S) : i && a ? be(A) : A;
        return j(S, y), b = !0, o !== void 0 && (o = y), A;
      }
      return er && b || w.f & At ? S.v : c(S);
    }
  );
}
const Sh = "5";
var Nu;
typeof window < "u" && ((Nu = window.__svelte ?? (window.__svelte = {})).v ?? (Nu.v = /* @__PURE__ */ new Set())).add(Sh);
function Ah(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ih = function(t) {
  return Th(t) && !Ch(t);
};
function Th(e) {
  return !!e && typeof e == "object";
}
function Ch(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Oh(e);
}
var xh = typeof Symbol == "function" && Symbol.for, wh = xh ? Symbol.for("react.element") : 60103;
function Oh(e) {
  return e.$$typeof === wh;
}
function Rh(e) {
  return Array.isArray(e) ? [] : {};
}
function ia(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ci(Rh(e), e, t) : e;
}
function Lh(e, t, n) {
  return e.concat(t).map(function(r) {
    return ia(r, n);
  });
}
function Nh(e, t) {
  if (!t.customMerge)
    return ci;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : ci;
}
function Ph(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function vl(e) {
  return Object.keys(e).concat(Ph(e));
}
function Uc(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Hh(e, t) {
  return Uc(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Dh(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && vl(e).forEach(function(i) {
    r[i] = ia(e[i], n);
  }), vl(t).forEach(function(i) {
    Hh(e, i) || (Uc(e, i) && n.isMergeableObject(t[i]) ? r[i] = Nh(i, n)(e[i], t[i], n) : r[i] = ia(t[i], n));
  }), r;
}
function ci(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Lh, n.isMergeableObject = n.isMergeableObject || Ih, n.cloneUnlessOtherwiseSpecified = ia;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Dh(e, t, n) : ia(t, n);
}
ci.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return ci(r, i, n);
  }, {});
};
var Mh = ci, Bh = Mh;
const Uh = /* @__PURE__ */ Ah(Bh);
var ao = function(e, t) {
  return ao = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ao(e, t);
};
function Ur(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ao(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var He = function() {
  return He = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, He.apply(this, arguments);
};
function kh(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Fh(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(d) {
      try {
        u(r.next(d));
      } catch (f) {
        s(f);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        s(f);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function kc(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = o(0), s.throw = o(1), s.return = o(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = u;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(u);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = t.call(e, n);
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function aa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function so(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function Zr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Qr(e) {
  return this instanceof Qr ? (this.v = e, this) : new Qr(e);
}
function Gh(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(h) {
    return function(v) {
      return Promise.resolve(v).then(h, f);
    };
  }
  function o(h, v) {
    r[h] && (i[h] = function(m) {
      return new Promise(function(_, b) {
        a.push([h, m, _, b]) > 1 || l(h, m);
      });
    }, v && (i[h] = v(i[h])));
  }
  function l(h, v) {
    try {
      u(r[h](v));
    } catch (m) {
      g(a[0][3], m);
    }
  }
  function u(h) {
    h.value instanceof Qr ? Promise.resolve(h.value.v).then(d, f) : g(a[0][2], h);
  }
  function d(h) {
    l("next", h);
  }
  function f(h) {
    l("throw", h);
  }
  function g(h, v) {
    h(v), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Vh(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof aa == "function" ? aa(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = e[a] && function(s) {
      return new Promise(function(o, l) {
        s = e[a](s), i(o, l, s.done, s.value);
      });
    };
  }
  function i(a, s, o, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: o });
    }, s);
  }
}
function Ts(e, t) {
  var n = t && t.cache ? t.cache : Xh, r = t && t.serializer ? t.serializer : Kh, i = t && t.strategy ? t.strategy : qh;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function jh(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Wh(e, t, n, r) {
  var i = jh(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Fc(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Gc(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function qh(e, t) {
  var n = e.length === 1 ? Wh : Fc;
  return Gc(e, this, n, t.cache.create(), t.serializer);
}
function Yh(e, t) {
  return Gc(e, this, Fc, t.cache.create(), t.serializer);
}
var Kh = function() {
  return JSON.stringify(arguments);
}, zh = (
  /** @class */
  function() {
    function e() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return e.prototype.get = function(t) {
      return this.cache[t];
    }, e.prototype.set = function(t, n) {
      this.cache[t] = n;
    }, e;
  }()
), Xh = {
  create: function() {
    return new zh();
  }
}, Cs = {
  variadic: Yh
}, Pe;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Pe || (Pe = {}));
var it;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(it || (it = {}));
var di;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(di || (di = {}));
function gl(e) {
  return e.type === it.literal;
}
function Zh(e) {
  return e.type === it.argument;
}
function Vc(e) {
  return e.type === it.number;
}
function jc(e) {
  return e.type === it.date;
}
function Wc(e) {
  return e.type === it.time;
}
function qc(e) {
  return e.type === it.select;
}
function Yc(e) {
  return e.type === it.plural;
}
function Qh(e) {
  return e.type === it.pound;
}
function Kc(e) {
  return e.type === it.tag;
}
function zc(e) {
  return !!(e && typeof e == "object" && e.type === di.number);
}
function oo(e) {
  return !!(e && typeof e == "object" && e.type === di.dateTime);
}
var Xc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Jh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $h(e) {
  var t = {};
  return e.replace(Jh, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
  }), t;
}
var ev = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function tv(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(ev).filter(function(g) {
    return g.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], l = s.slice(1), u = 0, d = l; u < d.length; u++) {
      var f = d[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: l });
  }
  return n;
}
function nv(e) {
  return e.replace(/^(.*?)-/, "");
}
var ml = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Zc = /^(@+)?(\+|#+)?[rs]?$/g, rv = /(\*)(0+)|(#+)(0+)|(0+)/g, Qc = /^(0+)$/;
function pl(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Zc, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Jc(e) {
  switch (e) {
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
function iv(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Qc.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function _l(e) {
  var t = {}, n = Jc(e);
  return n || t;
}
function av(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = nv(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = He(He(He({}, t), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return He(He({}, l), _l(u));
        }, {}));
        continue;
      case "engineering":
        t = He(He(He({}, t), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return He(He({}, l), _l(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(rv, function(l, u, d, f, g, h) {
          if (u)
            t.minimumIntegerDigits = d.length;
          else {
            if (f && g)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Qc.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ml.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ml, function(l, u, d, f, g, h) {
        return d === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : g && h ? (t.minimumFractionDigits = g.length, t.maximumFractionDigits = g.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = He(He({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = He(He({}, t), pl(a)));
      continue;
    }
    if (Zc.test(i.stem)) {
      t = He(He({}, t), pl(i.stem));
      continue;
    }
    var s = Jc(i.stem);
    s && (t = He(He({}, t), s));
    var o = iv(i.stem);
    o && (t = He(He({}, t), o));
  }
  return t;
}
var Ta = {
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
function sv(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = ov(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ov(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = Ta[r || ""] || Ta[n || ""] || Ta["".concat(n, "-001")] || Ta["001"];
  return i[0];
}
var xs, lv = new RegExp("^".concat(Xc.source, "*")), uv = new RegExp("".concat(Xc.source, "*$"));
function Be(e, t) {
  return { start: e, end: t };
}
var cv = !!String.prototype.startsWith && "_a".startsWith("a", 1), dv = !!String.fromCodePoint, fv = !!Object.fromEntries, hv = !!String.prototype.codePointAt, vv = !!String.prototype.trimStart, gv = !!String.prototype.trimEnd, mv = !!Number.isSafeInteger, pv = mv ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, lo = !0;
try {
  var _v = ed("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  lo = ((xs = _v.exec("a")) === null || xs === void 0 ? void 0 : xs[0]) === "a";
} catch {
  lo = !1;
}
var bl = cv ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), uo = dv ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, a = 0, s; i > a; ) {
      if (s = t[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), El = (
  // native
  fv ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], s = a[0], o = a[1];
        n[s] = o;
      }
      return n;
    }
  )
), $c = hv ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = t.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), bv = vv ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(lv, "");
  }
), Ev = gv ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(uv, "");
  }
);
function ed(e, t) {
  return new RegExp(e, t);
}
var co;
if (lo) {
  var yl = ed("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  co = function(t, n) {
    var r;
    yl.lastIndex = n;
    var i = yl.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  co = function(t, n) {
    for (var r = []; ; ) {
      var i = $c(t, n);
      if (i === void 0 || td(i) || Iv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return uo.apply(void 0, r);
  };
var yv = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var s = this.parseArgument(t, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: it.pound,
              location: Be(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Pe.UNMATCHED_CLOSING_TAG, Be(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && fo(this.peek() || 0)) {
            var s = this.parseTag(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(t, n);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: it.literal,
            value: "<".concat(i, "/>"),
            location: Be(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !fo(this.char()))
            return this.error(Pe.INVALID_TAG, Be(o, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Pe.UNMATCHED_CLOSING_TAG, Be(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: it.tag,
              value: i,
              children: s,
              location: Be(r, this.clonePosition())
            },
            err: null
          } : this.error(Pe.INVALID_TAG, Be(o, this.clonePosition())));
        } else
          return this.error(Pe.UNCLOSED_TAG, Be(r, this.clonePosition()));
      } else
        return this.error(Pe.INVALID_TAG, Be(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Av(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(t, n);
        if (s) {
          i += s;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          i += o;
          continue;
        }
        break;
      }
      var l = Be(r, this.clonePosition());
      return {
        val: { type: it.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Sv(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
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
          if (t === "plural" || t === "selectordinal")
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
      return uo.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), uo(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, Be(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Pe.EMPTY_ARGUMENT, Be(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Pe.MALFORMED_ARGUMENT, Be(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, Be(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: it.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Be(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, Be(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Pe.MALFORMED_ARGUMENT, Be(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = co(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Be(t, a);
      return { value: r, location: s };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Pe.EXPECT_ARGUMENT_TYPE, Be(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var g = Ev(f.val);
            if (g.length === 0)
              return this.error(Pe.EXPECT_ARGUMENT_STYLE, Be(this.clonePosition(), this.clonePosition()));
            var h = Be(d, this.clonePosition());
            u = { style: g, styleLocation: h };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var m = Be(i, this.clonePosition());
          if (u && bl(u == null ? void 0 : u.style, "::", 0)) {
            var _ = bv(u.style.slice(2));
            if (o === "number") {
              var f = this.parseNumberSkeletonFromString(_, u.styleLocation);
              return f.err ? f : {
                val: { type: it.number, value: r, location: m, style: f.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(Pe.EXPECT_DATE_TIME_SKELETON, m);
              var b = _;
              this.locale && (b = sv(_, this.locale));
              var g = {
                type: di.dateTime,
                pattern: b,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $h(b) : {}
              }, S = o === "date" ? it.date : it.time;
              return {
                val: { type: S, value: r, location: m, style: g },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? it.number : o === "date" ? it.date : it.time,
              value: r,
              location: m,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var w = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Pe.EXPECT_SELECT_ARGUMENT_OPTIONS, Be(w, He({}, w)));
          this.bumpSpace();
          var O = this.parseIdentifierIfPossible(), A = 0;
          if (o !== "select" && O.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Be(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Pe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), O = this.parseIdentifierIfPossible(), A = f.val;
          }
          var E = this.tryParsePluralOrSelectOptions(t, o, n, O);
          if (E.err)
            return E;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var y = Be(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: it.select,
              value: r,
              options: El(E.val),
              location: y
            },
            err: null
          } : {
            val: {
              type: it.plural,
              value: r,
              options: El(E.val),
              offset: A,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: y
            },
            err: null
          };
        }
        default:
          return this.error(Pe.INVALID_ARGUMENT_TYPE, Be(s, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Pe.EXPECT_ARGUMENT_CLOSING_BRACE, Be(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Pe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Be(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
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
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = tv(t);
      } catch {
        return this.error(Pe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: di.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? av(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, s = !1, o = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var g = this.tryParseDecimalInteger(Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Pe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (g.err)
              return g;
            d = Be(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? Pe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Pe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (s = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Pe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Be(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(t + 1, n, r);
        if (v.err)
          return v;
        var m = this.tryParseArgumentClose(h);
        if (m.err)
          return m;
        o.push([
          u,
          {
            value: v.val,
            location: Be(h, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return o.length === 0 ? this.error(n === "select" ? Pe.EXPECT_SELECT_ARGUMENT_SELECTOR : Pe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Be(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(Pe.MISSING_OTHER_CLAUSE, Be(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, s = s * 10 + (o - 48), this.bump();
        else
          break;
      }
      var l = Be(i, this.clonePosition());
      return a ? (s *= r, pv(s) ? { val: s, err: null } : this.error(n, l)) : this.error(t, l);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = $c(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (bl(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && td(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function fo(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Sv(e) {
  return fo(e) || e === 47;
}
function Av(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function td(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Iv(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ho(e) {
  e.forEach(function(t) {
    if (delete t.location, qc(t) || Yc(t))
      for (var n in t.options)
        delete t.options[n].location, ho(t.options[n].value);
    else Vc(t) && zc(t.style) || (jc(t) || Wc(t)) && oo(t.style) ? delete t.style.location : Kc(t) && ho(t.children);
  });
}
function Tv(e, t) {
  t === void 0 && (t = {}), t = He({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new yv(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Pe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ho(n.val), n.val;
}
var fi;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(fi || (fi = {}));
var ds = (
  /** @class */
  function(e) {
    Ur(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Sl = (
  /** @class */
  function(e) {
    Ur(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), fi.INVALID_VALUE, a) || this;
    }
    return t;
  }(ds)
), Cv = (
  /** @class */
  function(e) {
    Ur(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), fi.INVALID_VALUE, i) || this;
    }
    return t;
  }(ds)
), xv = (
  /** @class */
  function(e) {
    Ur(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), fi.MISSING_VALUE, r) || this;
    }
    return t;
  }(ds)
), Ht;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ht || (Ht = {}));
function wv(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ht.literal || n.type !== Ht.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function Ov(e) {
  return typeof e == "function";
}
function ka(e, t, n, r, i, a, s) {
  if (e.length === 1 && gl(e[0]))
    return [
      {
        type: Ht.literal,
        value: e[0].value
      }
    ];
  for (var o = [], l = 0, u = e; l < u.length; l++) {
    var d = u[l];
    if (gl(d)) {
      o.push({
        type: Ht.literal,
        value: d.value
      });
      continue;
    }
    if (Qh(d)) {
      typeof a == "number" && o.push({
        type: Ht.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = d.value;
    if (!(i && f in i))
      throw new xv(f, s);
    var g = i[f];
    if (Zh(d)) {
      (!g || typeof g == "string" || typeof g == "number") && (g = typeof g == "string" || typeof g == "number" ? String(g) : ""), o.push({
        type: typeof g == "string" ? Ht.literal : Ht.object,
        value: g
      });
      continue;
    }
    if (jc(d)) {
      var h = typeof d.style == "string" ? r.date[d.style] : oo(d.style) ? d.style.parsedOptions : void 0;
      o.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(t, h).format(g)
      });
      continue;
    }
    if (Wc(d)) {
      var h = typeof d.style == "string" ? r.time[d.style] : oo(d.style) ? d.style.parsedOptions : r.time.medium;
      o.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(t, h).format(g)
      });
      continue;
    }
    if (Vc(d)) {
      var h = typeof d.style == "string" ? r.number[d.style] : zc(d.style) ? d.style.parsedOptions : void 0;
      h && h.scale && (g = g * (h.scale || 1)), o.push({
        type: Ht.literal,
        value: n.getNumberFormat(t, h).format(g)
      });
      continue;
    }
    if (Kc(d)) {
      var v = d.children, m = d.value, _ = i[m];
      if (!Ov(_))
        throw new Cv(m, "function", s);
      var b = ka(v, t, n, r, i, a), S = _(b.map(function(A) {
        return A.value;
      }));
      Array.isArray(S) || (S = [S]), o.push.apply(o, S.map(function(A) {
        return {
          type: typeof A == "string" ? Ht.literal : Ht.object,
          value: A
        };
      }));
    }
    if (qc(d)) {
      var w = d.options[g] || d.options.other;
      if (!w)
        throw new Sl(d.value, g, Object.keys(d.options), s);
      o.push.apply(o, ka(w.value, t, n, r, i));
      continue;
    }
    if (Yc(d)) {
      var w = d.options["=".concat(g)];
      if (!w) {
        if (!Intl.PluralRules)
          throw new ds(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, fi.MISSING_INTL_API, s);
        var O = n.getPluralRules(t, { type: d.pluralType }).select(g - (d.offset || 0));
        w = d.options[O] || d.options.other;
      }
      if (!w)
        throw new Sl(d.value, g, Object.keys(d.options), s);
      o.push.apply(o, ka(w.value, t, n, r, i, g - (d.offset || 0)));
      continue;
    }
  }
  return wv(o);
}
function Rv(e, t) {
  return t ? He(He(He({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = He(He({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function Lv(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = Rv(e[r], t[r]), n;
  }, He({}, e)) : e;
}
function ws(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Nv(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ts(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Zr([void 0], n, !1)))();
    }, {
      cache: ws(e.number),
      strategy: Cs.variadic
    }),
    getDateTimeFormat: Ts(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Zr([void 0], n, !1)))();
    }, {
      cache: ws(e.dateTime),
      strategy: Cs.variadic
    }),
    getPluralRules: Ts(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Zr([void 0], n, !1)))();
    }, {
      cache: ws(e.pluralRules),
      strategy: Cs.variadic
    })
  };
}
var nd = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(f, g) {
          return !f.length || g.type !== Ht.literal || typeof f[f.length - 1] != "string" ? f.push(g.value) : f[f.length - 1] += g.value, f;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ka(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var o = kh(s, ["formatters"]);
        this.ast = e.__parse(t, He(He({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Lv(e.formats, r), this.formatters = i && i.formatters || Nv(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Tv, e.formats = {
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
    }, e;
  }()
);
function Pv(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
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
const ur = {}, Hv = (e, t, n) => n && (t in ur || (ur[t] = {}), e in ur[t] || (ur[t][e] = n), n), rd = (e, t) => {
  if (t == null)
    return;
  if (t in ur && e in ur[t])
    return ur[t][e];
  const n = _a(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Mv(i, e);
    if (a)
      return Hv(e, t, a);
  }
};
let ko;
const pa = Mt({});
function Dv(e) {
  return ko[e] || null;
}
function id(e) {
  return e in ko;
}
function Mv(e, t) {
  if (!id(e))
    return null;
  const n = Dv(e);
  return Pv(n, t);
}
function Bv(e) {
  if (e == null)
    return;
  const t = _a(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (id(r))
      return r;
  }
}
function ad(e, ...t) {
  delete ur[e], pa.update((n) => (n[e] = Uh.all([n[e] || {}, ...t]), n));
}
Ai(
  [pa],
  ([e]) => Object.keys(e)
);
pa.subscribe((e) => ko = e);
const Fa = {};
function Uv(e, t) {
  Fa[e].delete(t), Fa[e].size === 0 && delete Fa[e];
}
function sd(e) {
  return Fa[e];
}
function kv(e) {
  return _a(e).map((t) => {
    const n = sd(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Za(e) {
  return e == null ? !1 : _a(e).some(
    (t) => {
      var n;
      return (n = sd(t)) == null ? void 0 : n.size;
    }
  );
}
function Fv(e, t) {
  return Promise.all(
    t.map((r) => (Uv(e, r), r().then((i) => i.default || i)))
  ).then((r) => ad(e, ...r));
}
const Bi = {};
function od(e) {
  if (!Za(e))
    return e in Bi ? Bi[e] : Promise.resolve();
  const t = kv(e);
  return Bi[e] = Promise.all(
    t.map(
      ([n, r]) => Fv(n, r)
    )
  ).then(() => {
    if (Za(e))
      return od(e);
    delete Bi[e];
  }), Bi[e];
}
var Al = Object.getOwnPropertySymbols, Gv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, jv = (e, t) => {
  var n = {};
  for (var r in e)
    Gv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Al)
    for (var r of Al(e))
      t.indexOf(r) < 0 && Vv.call(e, r) && (n[r] = e[r]);
  return n;
};
const Wv = {
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
function qv({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${_a(
      e
    ).join('", "')}".${Za(mr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Yv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Wv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, zi = Yv;
function hi() {
  return zi;
}
function Kv(e) {
  const t = e, { formats: n } = t, r = jv(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      nd.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = qv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(zi, r, { initialLocale: i }), n && ("number" in n && Object.assign(zi.formats.number, n.number), "date" in n && Object.assign(zi.formats.date, n.date), "time" in n && Object.assign(zi.formats.time, n.time)), kr.set(i);
}
const Os = Mt(!1);
var zv = Object.defineProperty, Xv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, Il = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, Tl = (e, t, n) => t in e ? zv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $v = (e, t) => {
  for (var n in t || (t = {}))
    Qv.call(t, n) && Tl(e, n, t[n]);
  if (Il)
    for (var n of Il(t))
      Jv.call(t, n) && Tl(e, n, t[n]);
  return e;
}, eg = (e, t) => Xv(e, Zv(t));
let vo;
const Qa = Mt(null);
function Cl(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function _a(e, t = hi().fallbackLocale) {
  const n = Cl(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Cl(t)])] : n;
}
function mr() {
  return vo ?? void 0;
}
Qa.subscribe((e) => {
  vo = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const tg = (e) => {
  if (e && Bv(e) && Za(e)) {
    const { loadingDelay: t } = hi();
    let n;
    return typeof window < "u" && mr() != null && t ? n = window.setTimeout(
      () => Os.set(!0),
      t
    ) : Os.set(!0), od(e).then(() => {
      Qa.set(e);
    }).finally(() => {
      clearTimeout(n), Os.set(!1);
    });
  }
  return Qa.set(e);
}, kr = eg($v({}, Qa), {
  set: tg
}), ng = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], fs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var rg = Object.defineProperty, Ja = Object.getOwnPropertySymbols, ld = Object.prototype.hasOwnProperty, ud = Object.prototype.propertyIsEnumerable, xl = (e, t, n) => t in e ? rg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fo = (e, t) => {
  for (var n in t || (t = {}))
    ld.call(t, n) && xl(e, n, t[n]);
  if (Ja)
    for (var n of Ja(t))
      ud.call(t, n) && xl(e, n, t[n]);
  return e;
}, Ii = (e, t) => {
  var n = {};
  for (var r in e)
    ld.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ja)
    for (var r of Ja(e))
      t.indexOf(r) < 0 && ud.call(e, r) && (n[r] = e[r]);
  return n;
};
const sa = (e, t) => {
  const { formats: n } = hi();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, ig = fs(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ii(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = sa("number", r)), new Intl.NumberFormat(n, i);
  }
), ag = fs(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ii(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = sa("date", r) : Object.keys(i).length === 0 && (i = sa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), sg = fs(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ii(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = sa("time", r) : Object.keys(i).length === 0 && (i = sa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), og = (e = {}) => {
  var t = e, {
    locale: n = mr()
  } = t, r = Ii(t, [
    "locale"
  ]);
  return ig(Fo({ locale: n }, r));
}, lg = (e = {}) => {
  var t = e, {
    locale: n = mr()
  } = t, r = Ii(t, [
    "locale"
  ]);
  return ag(Fo({ locale: n }, r));
}, ug = (e = {}) => {
  var t = e, {
    locale: n = mr()
  } = t, r = Ii(t, [
    "locale"
  ]);
  return sg(Fo({ locale: n }, r));
}, cg = fs(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = mr()) => new nd(e, t, hi().formats, {
    ignoreTag: hi().ignoreTag
  })
), dg = (e, t = {}) => {
  var n, r, i, a;
  let s = t;
  typeof e == "object" && (s = e, e = s.id);
  const {
    values: o,
    locale: l = mr(),
    default: u
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = rd(e, l);
  if (!d)
    d = (a = (i = (r = (n = hi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!o)
    return d;
  let f = d;
  try {
    f = cg(d, l).format(o);
  } catch (g) {
    g instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      g.message
    );
  }
  return f;
}, fg = (e, t) => ug(t).format(e), hg = (e, t) => lg(t).format(e), vg = (e, t) => og(t).format(e), gg = (e, t = mr()) => rd(e, t), mg = Ai([kr, pa], () => dg);
Ai([kr], () => fg);
Ai([kr], () => hg);
Ai([kr], () => vg);
Ai([kr, pa], () => gg);
function pg(e, t) {
  Object.entries(e).forEach(([a, s]) => {
    ad(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? ng();
  console.log("Initial: Setting the language to", i), Kv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), kr.set(s.detail.language);
  });
}
const _g = "Suche", bg = "Standort hinzufügen", Eg = "Aktualisieren", yg = "Standort {name} löschen?", Sg = "Bestätigen", Ag = "Abbrechen", Ig = "Speichern", Tg = "Neuer Standort", Cg = "Standort: {name}", xg = "Name", wg = "Schlüssel", Og = "Beschreibung", Rg = "Standort-Tabelle", Lg = "UUID", Ng = "Zugewiesene Ressourcen", Pg = {
  search: _g,
  add_location: bg,
  refresh: Eg,
  delete_location: yg,
  confirm: Sg,
  cancel: Ag,
  save: Ig,
  new_location: Tg,
  location: Cg,
  name: xg,
  key: wg,
  description: Og,
  location_table: Rg,
  uuid: Lg,
  assigned_resources: Ng
}, Hg = "Search", Dg = "Add Location", Mg = "Refresh", Bg = "Delete location {name}?", Ug = "Confirm", kg = "Cancel", Fg = "Save", Gg = "New Location", Vg = "Location: {name}", jg = "Name", Wg = "Key", qg = "Description", Yg = "Location Table", Kg = "UUID", zg = "Assigned Resources", Xg = {
  search: Hg,
  add_location: Dg,
  refresh: Mg,
  delete_location: Bg,
  confirm: Ug,
  cancel: kg,
  save: Fg,
  new_location: Gg,
  location: Vg,
  name: jg,
  key: Wg,
  description: qg,
  location_table: Yg,
  uuid: Kg,
  assigned_resources: zg
};
function Ye(e) {
  return Object.entries(e).filter(([t, n]) => t !== "" && n).map(([t]) => t).join(" ");
}
function ct(e, t, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  e || console.warn("Tried to dispatch event without element.", t, n);
  const i = new CustomEvent(t, Object.assign(Object.assign({}, r), { detail: n }));
  return e == null || e.dispatchEvent(i), i;
}
function $a(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && t.indexOf(a.substring(0, s + 1)) !== -1 || t.indexOf(a) === -1 && (r[a] = e[a]);
  }
  return r;
}
function dn(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, t.length) === t && (r[a.substring(t.length)] = e[a]);
  }
  return r;
}
class Ti {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(t, n, r, i) {
    this.elementMap.has(t) || this.elementMap.set(t, {});
    const a = this.elementMap.get(t);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Uf(t, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(t, n, r) {
    const i = this.elementMap.get(t);
    if (i == null || !(n in i))
      return;
    const a = i[n], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(t)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((t, n) => {
      for (let [r, i] of Object.entries(t))
        i.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function q(e, t) {
  let n = [];
  if (t)
    for (let r = 0; r < t.length; r++) {
      const i = t[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(e, i[1])) : n.push(a(e));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = n[i];
          if (a && a.update) {
            const s = r[i];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
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
function Zg(e = window) {
  return Qg(e) ? { passive: !0 } : !1;
}
function Qg(e = window) {
  let t = !1;
  try {
    const n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return t = !0, !1;
      }
    }, r = () => {
    };
    e.document.addEventListener("test", r, n), e.document.removeEventListener("test", r, n);
  } catch {
    t = !1;
  }
  return t;
}
const cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Zg
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
const Rs = "mdc-dom-focus-sentinel";
class Jg {
  constructor(t, n = {}) {
    this.root = t, this.options = n, this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */
  trapFocus() {
    const t = this.getFocusableElements(this.root);
    if (t.length === 0)
      throw new Error("FocusTrap: Element must have at least one focusable child.");
    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(t, this.options.initialFocusEl);
  }
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */
  releaseFocus() {
    Array.from(this.root.querySelectorAll(`.${Rs}`)).forEach((t) => {
      t.parentElement.removeChild(t);
    }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
  }
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */
  wrapTabFocus(t) {
    const n = this.createSentinel(), r = this.createSentinel();
    n.addEventListener("focus", () => {
      const i = this.getFocusableElements(t);
      i.length > 0 && i[i.length - 1].focus();
    }), r.addEventListener("focus", () => {
      const i = this.getFocusableElements(t);
      i.length > 0 && i[0].focus();
    }), t.insertBefore(n, t.children[0]), t.appendChild(r);
  }
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */
  focusInitialElement(t, n) {
    let r = 0;
    n && (r = Math.max(t.indexOf(n), 0)), t[r].focus();
  }
  getFocusableElements(t) {
    return Array.from(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((r) => {
      const i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Rs) && !i;
      let s = !1;
      if (a) {
        const o = getComputedStyle(r);
        s = o.display === "none" || o.visibility === "hidden";
      }
      return a && !s;
    });
  }
  createSentinel() {
    const t = document.createElement("div");
    return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add(Rs), t;
  }
}
const $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Jg
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
const Ae = {
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
}, Gt = /* @__PURE__ */ new Set();
Gt.add(Ae.BACKSPACE);
Gt.add(Ae.ENTER);
Gt.add(Ae.SPACEBAR);
Gt.add(Ae.PAGE_UP);
Gt.add(Ae.PAGE_DOWN);
Gt.add(Ae.END);
Gt.add(Ae.HOME);
Gt.add(Ae.ARROW_LEFT);
Gt.add(Ae.ARROW_UP);
Gt.add(Ae.ARROW_RIGHT);
Gt.add(Ae.ARROW_DOWN);
Gt.add(Ae.DELETE);
Gt.add(Ae.ESCAPE);
Gt.add(Ae.TAB);
const Vt = {
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
}, jt = /* @__PURE__ */ new Map();
jt.set(Vt.BACKSPACE, Ae.BACKSPACE);
jt.set(Vt.ENTER, Ae.ENTER);
jt.set(Vt.SPACEBAR, Ae.SPACEBAR);
jt.set(Vt.PAGE_UP, Ae.PAGE_UP);
jt.set(Vt.PAGE_DOWN, Ae.PAGE_DOWN);
jt.set(Vt.END, Ae.END);
jt.set(Vt.HOME, Ae.HOME);
jt.set(Vt.ARROW_LEFT, Ae.ARROW_LEFT);
jt.set(Vt.ARROW_UP, Ae.ARROW_UP);
jt.set(Vt.ARROW_RIGHT, Ae.ARROW_RIGHT);
jt.set(Vt.ARROW_DOWN, Ae.ARROW_DOWN);
jt.set(Vt.DELETE, Ae.DELETE);
jt.set(Vt.ESCAPE, Ae.ESCAPE);
jt.set(Vt.TAB, Ae.TAB);
const pr = /* @__PURE__ */ new Set();
pr.add(Ae.PAGE_UP);
pr.add(Ae.PAGE_DOWN);
pr.add(Ae.END);
pr.add(Ae.HOME);
pr.add(Ae.ARROW_LEFT);
pr.add(Ae.ARROW_UP);
pr.add(Ae.ARROW_RIGHT);
pr.add(Ae.ARROW_DOWN);
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
function em(e, t) {
  if (e.closest)
    return e.closest(t);
  let n = e;
  for (; n; ) {
    if (dd(n, t))
      return n;
    n = n.parentElement;
  }
  return null;
}
function dd(e, t) {
  return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t);
}
function tm(e) {
  const t = e;
  if (t.offsetParent !== null)
    return t.scrollWidth;
  const n = t.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  const r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: em,
  estimateScrollWidth: tm,
  matches: dd
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
let Ca;
function nm(e, t = !1) {
  const { CSS: n } = e;
  let r = Ca;
  if (typeof Ca == "boolean" && !t)
    return Ca;
  if (!(n && typeof n.supports == "function"))
    return !1;
  const a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, t || (Ca = r), r;
}
function rm(e, t, n) {
  if (!e)
    return { x: 0, y: 0 };
  const { x: r, y: i } = t, a = r + n.left, s = i + n.top;
  let o, l;
  if (e.type === "touchstart") {
    const u = e;
    o = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - s;
  } else {
    const u = e;
    o = u.pageX - a, l = u.pageY - s;
  }
  return { x: o, y: l };
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const im = {};
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class am {
  constructor(t, n) {
    this.privateDoNotAccessOrElseWrappedAttributePrefix = n;
  }
  toString() {
    return this.privateDoNotAccessOrElseWrappedAttributePrefix;
  }
}
const sm = am;
function om(e) {
  return new sm(im, e);
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function xa(e) {
  return Object.isFrozen(e) && Object.isFrozen(e.raw);
}
function wa(e) {
  return e.toString().indexOf("`") === -1;
}
wa((e) => e``) || wa((e) => e`\0`) || wa((e) => e`\n`) || wa((e) => e`\u0000`);
xa`` && xa`\0` && xa`\n` && xa`\u0000`;
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ui(e) {
  const t = e[0].toLowerCase();
  return om(t);
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
class Mn {
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
  constructor(t = {}) {
    this.adapter = t;
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
const lm = {
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
}, um = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, wl = {
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
const Ol = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Rl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
let Oa = [];
class vt extends Mn {
  static get cssClasses() {
    return lm;
  }
  static get strings() {
    return um;
  }
  static get numbers() {
    return wl;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, vt.defaultAdapter), t)), this.activationAnimationHasEnded = !1, this.activationTimer = 0, this.fgDeactivationRemovalTimer = 0, this.fgScale = "0", this.frame = { width: 0, height: 0 }, this.initialSize = 0, this.layoutFrame = 0, this.maxRadius = 0, this.unboundedCoords = { left: 0, top: 0 }, this.activationState = this.defaultActivationState(), this.activationTimerCallback = () => {
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
    const t = this.supportsPressRipple();
    if (this.registerRootHandlers(t), t) {
      const { ROOT: n, UNBOUNDED: r } = vt.cssClasses;
      requestAnimationFrame(() => {
        this.adapter.addClass(n), this.adapter.isUnbounded() && (this.adapter.addClass(r), this.layoutInternal());
      });
    }
  }
  destroy() {
    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(vt.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(vt.cssClasses.FG_DEACTIVATION));
      const { ROOT: t, UNBOUNDED: n } = vt.cssClasses;
      requestAnimationFrame(() => {
        this.adapter.removeClass(t), this.adapter.removeClass(n), this.removeCssVars();
      });
    }
    this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
  }
  /**
   * @param event Optional event containing position information.
   */
  activate(t) {
    this.activateImpl(t);
  }
  deactivate() {
    this.deactivateImpl();
  }
  layout() {
    this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(() => {
      this.layoutInternal(), this.layoutFrame = 0;
    });
  }
  setUnbounded(t) {
    const { UNBOUNDED: n } = vt.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  handleFocus() {
    requestAnimationFrame(() => {
      this.adapter.addClass(vt.cssClasses.BG_FOCUSED);
    });
  }
  handleBlur() {
    requestAnimationFrame(() => {
      this.adapter.removeClass(vt.cssClasses.BG_FOCUSED);
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
  registerRootHandlers(t) {
    if (t) {
      for (const n of Ol)
        this.adapter.registerInteractionHandler(n, this.activateHandler);
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }
  registerDeactivationHandlers(t) {
    if (t.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      for (const n of Rl)
        this.adapter.registerDocumentInteractionHandler(n, this.deactivateHandler);
  }
  deregisterRootHandlers() {
    for (const t of Ol)
      this.adapter.deregisterInteractionHandler(t, this.activateHandler);
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }
  deregisterDeactivationHandlers() {
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    for (const t of Rl)
      this.adapter.deregisterDocumentInteractionHandler(t, this.deactivateHandler);
  }
  removeCssVars() {
    const t = vt.strings;
    Object.keys(t).forEach((r) => {
      r.indexOf("VAR_") === 0 && this.adapter.updateCssVariable(t[r], null);
    });
  }
  activateImpl(t) {
    if (this.adapter.isSurfaceDisabled())
      return;
    const n = this.activationState;
    if (n.isActivated)
      return;
    const r = this.previousActivationEvent;
    if (r && t !== void 0 && r.type !== t.type)
      return;
    if (n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown"), t !== void 0 && Oa.length > 0 && Oa.some((s) => this.adapter.containsEventTarget(s))) {
      this.resetActivationState();
      return;
    }
    t !== void 0 && (Oa.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(() => {
      Oa = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation()), n.wasElementMadeActive || (this.activationState = this.defaultActivationState());
    });
  }
  checkElementMadeActive(t) {
    return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }
  animateActivation() {
    const { VAR_FG_TRANSLATE_START: t, VAR_FG_TRANSLATE_END: n } = vt.strings, { FG_DEACTIVATION: r, FG_ACTIVATION: i } = vt.cssClasses, { DEACTIVATION_TIMEOUT_MS: a } = vt.numbers;
    this.layoutInternal();
    let s = "", o = "";
    if (!this.adapter.isUnbounded()) {
      const { startPoint: l, endPoint: u } = this.getFgTranslationCoordinates();
      s = `${l.x}px, ${l.y}px`, o = `${u.x}px, ${u.y}px`;
    }
    this.adapter.updateCssVariable(t, s), this.adapter.updateCssVariable(n, o), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(i), this.activationTimer = setTimeout(() => {
      this.activationTimerCallback();
    }, a);
  }
  getFgTranslationCoordinates() {
    const { activationEvent: t, wasActivatedByPointer: n } = this.activationState;
    let r;
    n ? r = rm(t, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
    const { FG_DEACTIVATION: t } = vt.cssClasses, { hasDeactivationUXRun: n, isActivated: r } = this.activationState;
    (n || !r) && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(t), this.fgDeactivationRemovalTimer = setTimeout(() => {
      this.adapter.removeClass(t);
    }, wl.FG_DEACTIVATION_MS));
  }
  rmBoundedActivationClasses() {
    const { FG_ACTIVATION: t } = vt.cssClasses;
    this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }
  resetActivationState() {
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(() => this.previousActivationEvent = void 0, vt.numbers.TAP_DELAY_MS);
  }
  deactivateImpl() {
    const t = this.activationState;
    if (!t.isActivated)
      return;
    const n = Object.assign({}, t);
    t.isProgrammatic ? (requestAnimationFrame(() => {
      this.animateDeactivation(n);
    }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(() => {
      this.activationState.hasDeactivationUXRun = !0, this.animateDeactivation(n), this.resetActivationState();
    }));
  }
  animateDeactivation({ wasActivatedByPointer: t, wasElementMadeActive: n }) {
    (t || n) && this.runDeactivationUXLogicIfReady();
  }
  layoutInternal() {
    this.frame = this.adapter.computeBoundingRect();
    const t = Math.max(this.frame.height, this.frame.width), n = () => Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + vt.numbers.PADDING;
    this.maxRadius = this.adapter.isUnbounded() ? t : n();
    const r = Math.floor(t * vt.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = `${this.maxRadius / this.initialSize}`, this.updateLayoutCssVars();
  }
  updateLayoutCssVars() {
    const { VAR_FG_SIZE: t, VAR_LEFT: n, VAR_TOP: r, VAR_FG_SCALE: i } = vt.strings;
    this.adapter.updateCssVariable(t, `${this.initialSize}px`), this.adapter.updateCssVariable(i, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(n, `${this.unboundedCoords.left}px`), this.adapter.updateCssVariable(r, `${this.unboundedCoords.top}px`));
  }
}
const { applyPassive: Ll } = cd, { matches: cm } = Go;
function ir(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: o, eventTarget: l, activeTarget: u, addClass: d = (v) => e.classList.add(v), removeClass: f = (v) => e.classList.remove(v), addStyle: g = (v, m) => e.style.setProperty(v, m), initPromise: h = Promise.resolve() } = {}) {
  let v, m = new Ti(), _ = _e("SMUI:addLayoutListener"), b, S = s, w = l, O = u;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), v && S !== s && (S = s, s ? v.activate() : s === !1 && v.deactivate()), t && !v ? (v = new vt({
      addClass: d,
      browserSupportsCssVars: () => nm(window),
      computeBoundingRect: () => (o || e).getBoundingClientRect(),
      containsEventTarget: (y) => e.contains(y),
      deregisterDocumentInteractionHandler: (y, C) => m.off(document.documentElement, y, C),
      deregisterInteractionHandler: (y, C) => m.off(l || e, y, C),
      deregisterResizeHandler: (y) => window.removeEventListener("resize", y),
      getWindowPageOffset: () => {
        var y, C;
        return {
          x: (y = window.pageXOffset) !== null && y !== void 0 ? y : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? cm(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (y, C) => {
        const N = Ll();
        m.on(document.documentElement, y, C, typeof N == "boolean" ? { capture: N } : N);
      },
      registerInteractionHandler: (y, C) => {
        const N = Ll();
        m.on(l || e, y, C, typeof N == "boolean" ? { capture: N } : N);
      },
      registerResizeHandler: (y) => m.on(window, "resize", y),
      removeClass: f,
      updateCssVariable: g
    }), h.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !t && h.then(() => {
      v && (v.destroy(), v = void 0, m.clear());
    }), v && (w !== l || O !== u) && (w = l, O = u, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !t && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), _ && (b = _(E));
  function E() {
    v && v.layout();
  }
  return {
    update(y) {
      ({
        ripple: t,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: o,
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: f,
        addStyle: g,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => e.classList.add(C), removeClass: (C) => e.classList.remove(C), addStyle: (C, N) => e.style.setProperty(C, N), initPromise: Promise.resolve() }, y)), A();
    },
    destroy() {
      v && (v.destroy(), v = void 0, m.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), b && b();
    }
  };
}
var dm = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "component",
  "tag",
  "children"
]);
function br(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "component", 3, ba), a = p(t, "tag", 3, "span"), s = /* @__PURE__ */ Xe(t, dm), o;
  const l = _e("SMUI:label:context"), u = _e("SMUI:label:tabindex");
  function d() {
    return o.getElement();
  }
  var f = { getElement: d }, g = re(), h = W(g);
  {
    let v = /* @__PURE__ */ me(() => Ye({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      "mdc-tooltip__label": l === "tooltip",
      [r()]: !0
    }));
    Si(h, i, (m, _) => {
      ye(
        _(m, pt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(v);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => s,
          {
            children: (b, S) => {
              var w = re(), O = W(w);
              le(O, () => t.children ?? ee), T(b, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => o = b,
        () => o
      );
    });
  }
  return T(e, g), Ne(f);
}
var fm = /* @__PURE__ */ new Set([
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
function hm(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "on", 3, !1), a = p(t, "component", 3, ba), s = p(t, "tag", 3, "i"), o = /* @__PURE__ */ Xe(t, fm), l;
  const u = /* @__PURE__ */ me(() => s() === "svg" || a() === _m), d = _e("SMUI:icon:context");
  function f() {
    return l.getElement();
  }
  var g = { getElement: f }, h = re(), v = W(h);
  {
    let m = /* @__PURE__ */ me(() => Ye({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Si(v, a, (_, b) => {
      ye(
        b(_, pt(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return c(m);
            },
            "aria-hidden": "true"
          },
          () => c(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => o,
          {
            children: (S, w) => {
              var O = re(), A = W(O);
              le(A, () => t.children ?? ee), T(S, O);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return T(e, h), Ne(g);
}
var vm = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "tag", "children"]), gm = /* @__PURE__ */ Ft("<svg><!></svg>");
function ba(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "tag", 3, "div"), i = /* @__PURE__ */ Xe(t, vm);
  const a = /* @__PURE__ */ me(() => [
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
  let s;
  function o() {
    return s;
  }
  var l = { getElement: o }, u = re(), d = W(u);
  {
    var f = (v) => {
      var m = gm();
      tt(m, () => ({ ...i }));
      var _ = Se(m);
      le(_, () => t.children ?? ee), ye(m, (b) => s = b, () => s), $e(m, (b, S) => q == null ? void 0 : q(b, S), n), T(v, m);
    }, g = (v) => {
      var m = re(), _ = W(m);
      ll(_, r, !1, (b, S) => {
        ye(b, (w) => s = w, () => s), $e(b, (w, O) => q == null ? void 0 : q(w, O), n), tt(b, () => ({ ...i }));
      }), T(v, m);
    }, h = (v) => {
      var m = re(), _ = W(m);
      ll(_, r, !1, (b, S) => {
        ye(b, (A) => s = A, () => s), $e(b, (A, E) => q == null ? void 0 : q(A, E), n), tt(b, () => ({ ...i }));
        var w = re(), O = W(w);
        le(O, () => t.children ?? ee), T(S, w);
      }), T(v, m);
    };
    ge(d, (v) => {
      r() === "svg" ? v(f) : c(a) ? v(g, 1) : v(h, -1);
    });
  }
  return T(e, u), Ne(l);
}
var mm = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), pm = /* @__PURE__ */ Ft("<svg><!></svg>");
function _m(e, t) {
  Le(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(t, "use", 19, () => []), r = /* @__PURE__ */ Xe(t, mm), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, o = pm();
  tt(o, () => ({ ...r }));
  var l = Se(o);
  return le(l, () => t.children ?? ee), ye(o, (u) => i = u, () => i), $e(o, (u, d) => q == null ? void 0 : q(u, d), n), T(e, o), Ne(s);
}
function Ra(e, t) {
  Le(t, !0);
  const [n, r] = gr(), i = Mt(t.value);
  ue(t.key, i), We(() => {
    lr(i, t.value);
  }), yi(() => {
    i.set(void 0);
  });
  var a = re(), s = W(a);
  le(s, () => t.children ?? ee), T(e, a), Ne(), r();
}
var bm = /* @__PURE__ */ new Set([
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
]), Em = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), ym = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Sm(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "style", 3, ""), a = p(t, "ripple", 3, !0), s = p(t, "color", 3, "primary"), o = p(t, "variant", 3, "text"), l = p(t, "touch", 3, !1), u = p(t, "action", 3, "close"), d = p(t, "defaultAction", 3, !1), f = p(t, "secondary", 3, !1), g = p(t, "component", 3, ba), h = p(t, "tag", 19, () => t.href == null ? "button" : "a"), v = /* @__PURE__ */ Xe(t, bm), m, _ = be({}), b = be({}), S = _e("SMUI:button:context");
  const w = /* @__PURE__ */ me(() => S === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), O = /* @__PURE__ */ me(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ me(() => S === "banner" ? {} : { secondary: f() });
  let E = t.disabled;
  We(() => {
    if (E !== t.disabled) {
      if (m) {
        const U = G();
        "blur" in U && U.blur();
      }
      E = v.disabled;
    }
  }), ue("SMUI:label:context", "button"), ue("SMUI:icon:context", "button");
  function y(U) {
    _[U] || (_[U] = !0);
  }
  function C(U) {
    (!(U in _) || _[U]) && (_[U] = !1);
  }
  function N(U, x) {
    b[U] != x && (x === "" || x == null ? delete b[U] : b[U] = x);
  }
  function D() {
    S === "banner" && ct(G(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function G() {
    return m.getElement();
  }
  var Y = { getElement: G }, Q = re(), ie = W(Q);
  {
    let U = /* @__PURE__ */ me(() => [
      [
        ir,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!t.disabled,
          addClass: y,
          removeClass: C,
          addStyle: N
        }
      ],
      ...n()
    ]), x = /* @__PURE__ */ me(() => Ye({
      "mdc-button": !0,
      "mdc-button--raised": o() === "raised",
      "mdc-button--unelevated": o() === "unelevated",
      "mdc-button--outlined": o() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && f(),
      "mdc-banner__primary-action": S === "banner" && !f(),
      "mdc-tooltip--rich-action": S === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), V = /* @__PURE__ */ me(() => Object.entries(b).map(([H, F]) => `${H}: ${F};`).concat([i()]).join(" "));
    Si(ie, g, (H, F) => {
      ye(
        F(H, pt(
          {
            get tag() {
              return h();
            },
            get use() {
              return c(U);
            },
            get class() {
              return c(x);
            },
            get style() {
              return c(V);
            }
          },
          () => c(w),
          () => c(O),
          () => c(A),
          {
            get href() {
              return t.href;
            }
          },
          () => v,
          {
            onclick: (k) => {
              var P;
              D(), (P = t.onclick) == null || P.call(t, k);
            },
            children: (k, P) => {
              var L = ym(), Z = ne(W(L), 2);
              le(Z, () => t.children ?? ee);
              var se = ne(Z);
              {
                var ce = (J) => {
                  var $ = Em();
                  T(J, $);
                };
                ge(se, (J) => {
                  l() && J(ce);
                });
              }
              T(k, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (k) => m = k,
        () => m
      );
    });
  }
  return T(e, Q), Ne(Y);
}
function Sr(e, t) {
  Le(t, !0);
  let n = p(t, "callback", 3, () => {
  }), r = p(t, "disabled", 3, !1), i = p(t, "variant", 3, "default"), a = p(t, "isAbortAction", 3, !1), s = p(t, "backgroundColor", 3, void 0), o = p(t, "ariaLabel", 3, void 0);
  {
    let l = /* @__PURE__ */ me(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Sm(e, {
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
        return c(l);
      },
      children: (u, d) => {
        var f = re(), g = W(f);
        le(g, () => t.children ?? ee), T(u, f);
      },
      $$slots: { default: !0 }
    });
  }
  Ne();
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
const La = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, jn = {
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
class Vo extends Mn {
  static get cssClasses() {
    return La;
  }
  static get strings() {
    return jn;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Vo.defaultAdapter), t)), this.hasToggledAriaLabel = !1;
  }
  init() {
    const t = this.adapter.getAttr(jn.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(jn.DATA_ARIA_LABEL_OFF);
    if (t && n) {
      if (this.adapter.getAttr(jn.ARIA_PRESSED) !== null)
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled ARIA label.");
      this.hasToggledAriaLabel = !0;
    } else
      this.adapter.setAttr(jn.ARIA_PRESSED, String(this.isOn()));
  }
  handleClick() {
    this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
  }
  isOn() {
    return this.adapter.hasClass(La.ICON_BUTTON_ON);
  }
  toggle(t = !this.isOn()) {
    if (t ? this.adapter.addClass(La.ICON_BUTTON_ON) : this.adapter.removeClass(La.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
      const n = t ? this.adapter.getAttr(jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(jn.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(jn.ARIA_LABEL, n || "");
    } else
      this.adapter.setAttr(jn.ARIA_PRESSED, `${t}`);
  }
}
var Am = /* @__PURE__ */ new Set([
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
]), Im = /* @__PURE__ */ de('<span class="mdc-icon-button__focus-ring"></span>'), Tm = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), Cm = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!> <!><!>', 1);
function xm(e, t) {
  Le(t, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = p(t, "use", 19, () => []), a = p(t, "class", 3, ""), s = p(t, "style", 3, ""), o = p(t, "ripple", 3, !0), l = p(t, "toggle", 3, !1), u = p(t, "pressed", 15, n), d = p(t, "touch", 3, !1), f = p(t, "displayFlex", 3, !0), g = p(t, "size", 3, "normal"), h = p(t, "focusRing", 3, !0), v = p(t, "component", 3, ba), m = p(t, "tag", 19, () => t.href == null ? "button" : "a"), _ = /* @__PURE__ */ Xe(t, Am), b, S, w = /* @__PURE__ */ Ee(be({})), O = be({}), A = /* @__PURE__ */ Ee(be({})), E = _e("SMUI:icon-button:context"), y = _e("SMUI:icon-button:aria-describedby");
  const C = /* @__PURE__ */ me(() => {
    if (E === "data-table:pagination")
      switch (t.action) {
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
    else return E === "dialog:header" || E === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let N = !!t.disabled;
  We(() => {
    if (N != !!t.disabled) {
      if (b) {
        const L = H();
        "blur" in L && L.blur();
      }
      N = !!t.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let D = null;
  We(() => {
    b && H() && l() !== D && (l() && !S ? (S = new Vo({
      addClass: Y,
      hasClass: G,
      notifyChange: (L) => {
        V(L), ct(H(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: Q,
      getAttr: U,
      setAttr: x
    }), S.init()) : !l() && S && (S.destroy(), S = void 0, j(w, {}, !0), j(A, {}, !0)), D = l());
  }), We(() => {
    S && !r(u()) && S.isOn() !== u() && S.toggle(u());
  }), _t(() => () => {
    S == null || S.destroy(), S = void 0;
  });
  function G(L) {
    return L in c(w) ? c(w)[L] : H().classList.contains(L);
  }
  function Y(L) {
    c(w)[L] || (c(w)[L] = !0);
  }
  function Q(L) {
    (!(L in c(w)) || c(w)[L]) && (c(w)[L] = !1);
  }
  function ie(L, Z) {
    O[L] != Z && (Z === "" || Z == null ? delete O[L] : O[L] = Z);
  }
  function U(L) {
    return L in c(A) ? c(A)[L] ?? null : H().getAttribute(L);
  }
  function x(L, Z) {
    c(A)[L] !== Z && (c(A)[L] = Z);
  }
  function V(L) {
    u(L.isOn);
  }
  function H() {
    return b.getElement();
  }
  var F = { getElement: H }, k = re(), P = W(k);
  {
    let L = /* @__PURE__ */ me(() => [
      [
        ir,
        {
          ripple: o(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: Y,
          removeClass: Q,
          addStyle: ie
        }
      ],
      ...i()
    ]), Z = /* @__PURE__ */ me(() => Ye({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": f(),
      "smui-icon-button--size-button": g() === "button",
      "smui-icon-button--size-mini": g() === "mini",
      "mdc-icon-button--reduced-size": g() === "mini" || g() === "button",
      "mdc-card__action": E === "card:action",
      "mdc-card__action--icon": E === "card:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__dismiss": E === "snackbar:actions",
      "mdc-data-table__pagination-button": E === "data-table:pagination",
      "mdc-data-table__sort-icon-button": E === "data-table:sortable-header-cell",
      "mdc-dialog__close": (E === "dialog:header" || E === "dialog:sheet") && t.action === "close",
      ...c(w),
      [a()]: !0
    })), se = /* @__PURE__ */ me(() => Object.entries(O).map(([$, ae]) => `${$}: ${ae};`).concat([s()]).join(" ")), ce = /* @__PURE__ */ me(() => r(u()) ? null : u() ? "true" : "false"), J = /* @__PURE__ */ me(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    Si(P, v, ($, ae) => {
      ye(
        ae($, pt(
          {
            get tag() {
              return m();
            },
            get use() {
              return c(L);
            },
            get class() {
              return c(Z);
            },
            get style() {
              return c(se);
            },
            get "aria-pressed"() {
              return c(ce);
            },
            get "aria-label"() {
              return c(J);
            },
            get "data-aria-label-on"() {
              return t.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return t.ariaLabelOff;
            },
            get "aria-describedby"() {
              return y;
            },
            get href() {
              return t.href;
            }
          },
          () => c(C),
          () => c(A),
          () => _,
          {
            onclick: (we) => {
              var Ge;
              S && S.handleClick(), E === "top-app-bar:navigation" && ct(H(), "SMUITopAppBarIconButtonNav"), (Ge = t.onclick) == null || Ge.call(t, we);
            },
            children: (we, Ge) => {
              var je = Cm(), Me = ne(W(je), 2);
              {
                var ke = (he) => {
                  var Te = Im();
                  T(he, Te);
                };
                ge(Me, (he) => {
                  h() && he(ke);
                });
              }
              var Oe = ne(Me, 2);
              le(Oe, () => t.children ?? ee);
              var Ze = ne(Oe);
              {
                var fe = (he) => {
                  var Te = Tm();
                  T(he, Te);
                };
                ge(Ze, (he) => {
                  d() && he(fe);
                });
              }
              T(we, je);
            },
            $$slots: { default: !0 }
          }
        )),
        (we) => b = we,
        () => b
      );
    });
  }
  return T(e, k), Ne(F);
}
function wm(e, t) {
  let n = p(t, "callback", 3, () => {
  }), r = p(t, "icon", 3, ""), i = p(t, "disabled", 3, !1), a = p(t, "ariaLabel", 3, void 0);
  xm(e, {
    get disabled() {
      return i();
    },
    get "aria-label"() {
      return a();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click: function(...s) {
        var o;
        (o = n()) == null || o.apply(this, s);
      }
    },
    children: (s, o) => {
      hm(s, {
        class: "material-icons",
        children: (l, u) => {
          var d = yt();
          pe(() => ot(d, r())), T(l, d);
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
const Om = {
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
class Yn extends Mn {
  static get cssClasses() {
    return Om;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Yn.defaultAdapter), t)), this.shakeAnimationEndHandler = () => {
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
  shake(t) {
    const { LABEL_SHAKE: n } = Yn.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes
   *     float and shake classes to dock the label.
   */
  float(t) {
    const { LABEL_FLOAT_ABOVE: n, LABEL_SHAKE: r } = Yn.cssClasses;
    t ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(r));
  }
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that
   *     it is required.
   */
  setRequired(t) {
    const { LABEL_REQUIRED: n } = Yn.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  setHideRequiredMarker(t) {
    const { LABEL_HIDE_REQUIRED_MARKER: n } = Yn.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  getHideRequiredMarker() {
    const { LABEL_HIDE_REQUIRED_MARKER: t } = Yn.cssClasses;
    return this.adapter.hasClass(t);
  }
  handleShakeAnimationEnd() {
    const { LABEL_SHAKE: t } = Yn.cssClasses;
    this.adapter.removeClass(t);
  }
}
var Rm = /* @__PURE__ */ new Set([
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
]), Lm = /* @__PURE__ */ de("<span><!></span>"), Nm = /* @__PURE__ */ de("<label><!></label>");
function Nl(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "style", 3, ""), a = p(t, "floatAbove", 15, !1), s = p(t, "required", 15, !1), o = p(t, "wrapped", 3, !1), l = /* @__PURE__ */ Xe(t, Rm), u, d = /* @__PURE__ */ Ee(void 0), f = new Ti(), g = be({}), h = be({}), v = _e("SMUI:generic:input:props") ?? {}, m = a();
  We(() => {
    c(d) && m !== a() && (m = a(), c(d).float(a()));
  });
  let _ = s();
  We(() => {
    c(d) && _ !== s() && (_ = s(), c(d).setRequired(s()));
  });
  const b = _e("SMUI:floating-label:mount"), S = _e("SMUI:floating-label:unmount");
  _t(() => {
    j(
      d,
      new Yn({
        addClass: O,
        removeClass: A,
        hasClass: w,
        getWidth: () => {
          var L, Z;
          const F = Y(), k = F.cloneNode(!0);
          (L = F.parentNode) == null || L.appendChild(k), k.classList.add("smui-floating-label--remove-transition"), k.classList.add("smui-floating-label--force-size"), k.classList.remove("mdc-floating-label--float-above");
          const P = k.scrollWidth;
          return (Z = F.parentNode) == null || Z.removeChild(k), P;
        },
        registerInteractionHandler: (F, k) => f.on(Y(), F, k),
        deregisterInteractionHandler: (F, k) => f.off(Y(), F, k)
      }),
      !0
    );
    const H = {
      get element() {
        return Y();
      },
      addStyle: E,
      removeStyle: y
    };
    return b && b(H), c(d).init(), () => {
      var F;
      S && S(H), (F = c(d)) == null || F.destroy(), j(d, void 0), f.clear();
    };
  });
  function w(H) {
    return H in g ? g[H] : Y().classList.contains(H);
  }
  function O(H) {
    g[H] || (g[H] = !0);
  }
  function A(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function E(H, F) {
    h[H] != F && (F === "" || F == null ? delete h[H] : h[H] = F);
  }
  function y(H) {
    H in h && delete h[H];
  }
  function C(H) {
    var F;
    (F = c(d)) == null || F.shake(H);
  }
  function N(H) {
    a(H);
  }
  function D(H) {
    s(H);
  }
  function G() {
    if (c(d) == null)
      throw new Error("Instance is undefined.");
    return c(d).getWidth();
  }
  function Y() {
    return u;
  }
  var Q = { shake: C, float: N, setRequired: D, getWidth: G, getElement: Y }, ie = re(), U = W(ie);
  {
    var x = (H) => {
      var F = Lm();
      tt(F, (P, L) => ({ class: P, style: L, ...l }), [
        () => Ye({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...g,
          [r()]: !0
        }),
        () => Object.entries(h).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
      ]);
      var k = Se(F);
      le(k, () => t.children ?? ee), ye(F, (P) => u = P, () => u), $e(F, (P, L) => q == null ? void 0 : q(P, L), n), T(H, F);
    }, V = (H) => {
      var F = Nm();
      tt(
        F,
        (P, L) => ({
          class: P,
          style: L,
          for: t.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ye({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...g,
            [r()]: !0
          }),
          () => Object.entries(h).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var k = Se(F);
      le(k, () => t.children ?? ee), ye(F, (P) => u = P, () => u), $e(F, (P, L) => q == null ? void 0 : q(P, L), n), T(H, F);
    };
    ge(U, (H) => {
      o() ? H(x) : H(V, -1);
    });
  }
  return T(e, ie), Ne(Q);
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
const Er = {
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
class jo extends Mn {
  static get cssClasses() {
    return Er;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, jo.defaultAdapter), t)), this.transitionEndHandler = (n) => {
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
    this.adapter.removeClass(Er.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Er.LINE_RIPPLE_ACTIVE);
  }
  setRippleCenter(t) {
    this.adapter.setStyle("transform-origin", `${t}px center`);
  }
  deactivate() {
    this.adapter.addClass(Er.LINE_RIPPLE_DEACTIVATING);
  }
  handleTransitionEnd(t) {
    const n = this.adapter.hasClass(Er.LINE_RIPPLE_DEACTIVATING);
    t.propertyName === "opacity" && n && (this.adapter.removeClass(Er.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Er.LINE_RIPPLE_DEACTIVATING));
  }
}
var Pm = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "active"
]), Hm = /* @__PURE__ */ de("<div></div>");
function Dm(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "style", 3, ""), a = p(t, "active", 3, !1), s = /* @__PURE__ */ Xe(t, Pm), o, l = /* @__PURE__ */ Ee(void 0), u = new Ti(), d = be({}), f = be({});
  _t(() => (j(
    l,
    new jo({
      addClass: h,
      removeClass: v,
      hasClass: g,
      setStyle: m,
      registerEventHandler: (E, y) => u.on(w(), E, y),
      deregisterEventHandler: (E, y) => u.off(w(), E, y)
    }),
    !0
  ), c(l).init(), () => {
    var E;
    (E = c(l)) == null || E.destroy(), j(l, void 0), u.clear();
  }));
  function g(E) {
    return E in d ? d[E] : w().classList.contains(E);
  }
  function h(E) {
    d[E] || (d[E] = !0);
  }
  function v(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function m(E, y) {
    f[E] != y && (y === "" || y == null ? delete f[E] : f[E] = y);
  }
  function _() {
    var E;
    (E = c(l)) == null || E.activate();
  }
  function b() {
    var E;
    (E = c(l)) == null || E.deactivate();
  }
  function S(E) {
    var y;
    (y = c(l)) == null || y.setRippleCenter(E);
  }
  function w() {
    return o;
  }
  var O = { activate: _, deactivate: b, setRippleCenter: S, getElement: w }, A = Hm();
  return tt(A, (E, y) => ({ class: E, style: y, ...s }), [
    () => Ye({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(f).map(([E, y]) => `${E}: ${y};`).concat([i()]).join(" ")
  ]), ye(A, (E) => o = E, () => o), $e(A, (E, y) => q == null ? void 0 : q(E, y), n), T(e, A), Ne(O);
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
const Mm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Pl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Bm = {
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
class Ji extends Mn {
  static get strings() {
    return Mm;
  }
  static get cssClasses() {
    return Bm;
  }
  static get numbers() {
    return Pl;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Ji.defaultAdapter), t));
  }
  /**
   * Adds the outline notched selector and updates the notch width calculated
   * based off of notchWidth.
   */
  notch(t) {
    const { OUTLINE_NOTCHED: n } = Ji.cssClasses;
    t > 0 && (t += Pl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(n);
  }
  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const { OUTLINE_NOTCHED: t } = Ji.cssClasses;
    this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
  }
}
var Um = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "notched",
  "noLabel",
  "children"
]), km = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), Fm = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Gm(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "notched", 3, !1), a = p(t, "noLabel", 3, !1), s = /* @__PURE__ */ Xe(t, Um), o, l = /* @__PURE__ */ Ee(void 0), u = /* @__PURE__ */ Ee(void 0), d = be({}), f = be({}), g;
  We(() => {
    c(u) !== g && (c(u) ? (c(u).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      c(u) && c(u).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), g = c(u));
  }), ue("SMUI:floating-label:mount", (C) => {
    j(u, C, !0);
  }), ue("SMUI:floating-label:unmount", () => {
    j(u, void 0);
  }), _t(() => (j(
    l,
    new Ji({
      addClass: h,
      removeClass: v,
      setNotchWidthProperty: (C) => m("width", C + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), c(l).init(), () => {
    var C;
    (C = c(l)) == null || C.destroy(), j(l, void 0);
  }));
  function h(C) {
    d[C] || (d[C] = !0);
  }
  function v(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function m(C, N) {
    f[C] != N && (N === "" || N == null ? delete f[C] : f[C] = N);
  }
  function _(C) {
    C in f && delete f[C];
  }
  function b(C) {
    var N;
    (N = c(l)) == null || N.notch(C);
  }
  function S() {
    var C;
    (C = c(l)) == null || C.closeNotch();
  }
  function w() {
    return o;
  }
  var O = { notch: b, closeNotch: S, getElement: w }, A = Fm();
  tt(A, (C) => ({ class: C, ...s }), [
    () => Ye({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var E = ne(Se(A), 2);
  {
    var y = (C) => {
      var N = km(), D = Se(N);
      le(D, () => t.children ?? ee), pe((G) => Ot(N, G), [
        () => Object.entries(f).map(([G, Y]) => `${G}: ${Y};`).join(" ")
      ]), T(C, N);
    };
    ge(E, (C) => {
      a() || C(y);
    });
  }
  return ye(A, (C) => o = C, () => o), $e(A, (C, N) => q == null ? void 0 : q(C, N), n), T(e, A), Ne(O);
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
const Ls = {
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
}, Vm = {
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
}, Hl = {
  LABEL_SCALE: 0.75
}, jm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Wm = [
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
const Dl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, qm = {
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
const Ml = ["click", "keydown"];
class Wo extends Mn {
  static get strings() {
    return Dl;
  }
  static get cssClasses() {
    return qm;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Wo.defaultAdapter), t)), this.savedTabIndex = null, this.interactionHandler = (n) => {
      this.handleInteraction(n);
    };
  }
  init() {
    this.savedTabIndex = this.adapter.getAttr("tabindex");
    for (const t of Ml)
      this.adapter.registerInteractionHandler(t, this.interactionHandler);
  }
  destroy() {
    for (const t of Ml)
      this.adapter.deregisterInteractionHandler(t, this.interactionHandler);
  }
  setDisabled(t) {
    this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Dl.ICON_ROLE)));
  }
  setAriaLabel(t) {
    this.adapter.setAttr("aria-label", t);
  }
  setContent(t) {
    this.adapter.setContent(t);
  }
  handleInteraction(t) {
    const n = t.key === "Enter" || t.keyCode === 13, r = t.key === " ";
    (t.type === "click" || n || r) && (t.preventDefault(), this.adapter.notifyIconAction());
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
const Bl = ["mousedown", "touchstart"], Ul = ["click", "keydown"];
class ar extends Mn {
  static get cssClasses() {
    return Vm;
  }
  static get strings() {
    return Ls;
  }
  static get numbers() {
    return Hl;
  }
  get shouldAlwaysFloat() {
    const t = this.getNativeInput().type;
    return Wm.indexOf(t) >= 0;
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
  constructor(t, n = {}) {
    super(Object.assign(Object.assign({}, ar.defaultAdapter), t)), this.isFocused = !1, this.receivedUserInput = !1, this.useNativeValidation = !0, this.validateOnValueChange = !0, this.helperText = n.helperText, this.characterCounter = n.characterCounter, this.leadingIcon = n.leadingIcon, this.trailingIcon = n.trailingIcon, this.valid = !this.adapter.hasClass(ar.cssClasses.INVALID), this.inputFocusHandler = () => {
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
    for (const t of Bl)
      this.adapter.registerInputInteractionHandler(t, this.setPointerXOffset);
    for (const t of Ul)
      this.adapter.registerTextFieldInteractionHandler(t, this.textFieldInteractionHandler);
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
  }
  destroy() {
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    for (const t of Bl)
      this.adapter.deregisterInputInteractionHandler(t, this.setPointerXOffset);
    for (const t of Ul)
      this.adapter.deregisterTextFieldInteractionHandler(t, this.textFieldInteractionHandler);
    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
  }
  /**
   * Handles user interactions with the Text Field.
   */
  handleTextFieldInteraction() {
    const t = this.adapter.getNativeInput();
    t && t.disabled || (this.receivedUserInput = !0);
  }
  /**
   * Handles validation attribute changes
   */
  handleValidationAttributeChange(t) {
    t.some((n) => jm.indexOf(n) > -1 ? (this.styleValidity(!0), this.adapter.setLabelRequired(this.getNativeInput().required), !0) : !1), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
  }
  /**
   * Opens/closes the notched outline.
   */
  notchOutline(t) {
    if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
      if (t) {
        const n = this.adapter.getLabelWidth() * Hl.LABEL_SCALE;
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
  setTransformOrigin(t) {
    if (this.isDisabled() || this.adapter.hasOutline())
      return;
    const n = t.touches, r = n ? n[0] : t, i = r.target.getBoundingClientRect(), a = r.clientX - i.left;
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
    const t = this.isValid();
    this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
  }
  getValue() {
    return this.getNativeInput().value;
  }
  /**
   * @param value The value to set on the input Element.
   */
  setValue(t) {
    if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
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
  setValid(t) {
    this.valid = t, this.styleValidity(t);
    const n = !t && !this.isFocused && !!this.getValue();
    this.adapter.hasLabel() && this.adapter.shakeLabel(n);
  }
  /**
   * @param shouldValidate Whether or not validity should be updated on
   *     value change.
   */
  setValidateOnValueChange(t) {
    this.validateOnValueChange = t;
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
  setUseNativeValidation(t) {
    this.useNativeValidation = t;
  }
  isDisabled() {
    return this.getNativeInput().disabled;
  }
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */
  setDisabled(t) {
    this.getNativeInput().disabled = t, this.styleDisabled(t);
  }
  /**
   * @param content Sets the content of the helper text.
   */
  setHelperTextContent(t) {
    this.helperText && this.helperText.setContent(t);
  }
  /**
   * Sets the aria label of the leading icon.
   */
  setLeadingIconAriaLabel(t) {
    this.leadingIcon && this.leadingIcon.setAriaLabel(t);
  }
  /**
   * Sets the text content of the leading icon.
   */
  setLeadingIconContent(t) {
    this.leadingIcon && this.leadingIcon.setContent(t);
  }
  /**
   * Sets the aria label of the trailing icon.
   */
  setTrailingIconAriaLabel(t) {
    this.trailingIcon && this.trailingIcon.setAriaLabel(t);
  }
  /**
   * Sets the text content of the trailing icon.
   */
  setTrailingIconContent(t) {
    this.trailingIcon && this.trailingIcon.setContent(t);
  }
  /**
   * Sets character counter values that shows characters used and the total
   * character limit.
   */
  setcharacterCounter(t) {
    if (!this.characterCounter)
      return;
    const n = this.getNativeInput().maxLength;
    if (n === -1)
      throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
    this.characterCounter.setCounterValue(t, n);
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
  styleValidity(t) {
    const { INVALID: n } = ar.cssClasses;
    if (t ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
      if (this.helperText.setValidity(t), !this.helperText.isValidation())
        return;
      const i = this.helperText.isVisible(), a = this.helperText.getId();
      i && a ? this.adapter.setInputAttr(Ls.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Ls.ARIA_DESCRIBEDBY);
    }
  }
  /**
   * Styles the component based on the focused state.
   */
  styleFocused(t) {
    const { FOCUSED: n } = ar.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the component based on the disabled state.
   */
  styleDisabled(t) {
    const { DISABLED: n, INVALID: r } = ar.cssClasses;
    t ? (this.adapter.addClass(n), this.adapter.removeClass(r)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
  }
  /**
   * Styles the component based on the label floating state.
   */
  styleFloating(t) {
    const { LABEL_FLOATING: n } = ar.cssClasses;
    t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
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
var Ym = /* @__PURE__ */ new Set([
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
function Ea(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "component", 3, ba), a = p(t, "tag", 3, "div"), s = p(t, "_smuiClass", 3, ""), o = p(t, "_smuiClassMap", 23, () => ({})), l = p(t, "_smuiContexts", 19, () => ({})), u = p(t, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Xe(t, Ym), f;
  const g = [];
  Object.entries(o()).forEach(([b, S]) => {
    const w = _e(S);
    w && "subscribe" in w && g.push(w.subscribe((O) => {
      o()[b] = O;
    }));
  });
  for (let b in l())
    l().hasOwnProperty(b) && ue(b, l()[b]);
  yi(() => {
    for (const b of g)
      b();
  });
  function h() {
    return f.getElement();
  }
  var v = { getElement: h }, m = re(), _ = W(m);
  {
    let b = /* @__PURE__ */ me(() => Ye({
      [s()]: !0,
      ...o(),
      [r()]: !0
    }));
    Si(_, i, (S, w) => {
      ye(
        w(S, pt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(b);
            }
          },
          u,
          () => d,
          {
            children: (O, A) => {
              var E = re(), y = W(E);
              le(y, () => t.children ?? ee), T(O, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (O) => f = O,
        () => f
      );
    });
  }
  return T(e, m), Ne(v);
}
var Km = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function zm(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ Xe(t, Km), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    Ea(e, pt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, o) => {
        var l = re(), u = W(l);
        le(u, () => t.children ?? ee), T(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ne(a);
}
var Xm = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Zm(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ Xe(t, Xm), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    Ea(e, pt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, o) => {
          var l = re(), u = W(l);
          le(u, () => t.children ?? ee), T(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ne(a);
}
var Qm = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Jm(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ Xe(t, Qm), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    Ea(e, pt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, o) => {
          var l = re(), u = W(l);
          le(u, () => t.children ?? ee), T(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ne(a);
}
var $m = /* @__PURE__ */ new Set([
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
]), ep = /* @__PURE__ */ de("<input/>");
function tp(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "type", 3, "text"), a = p(t, "placeholder", 3, " "), s = p(t, "value", 15), o = p(t, "files", 15, null), l = p(t, "dirty", 15, !1), u = p(t, "invalid", 15, !1), d = p(t, "updateInvalid", 3, !0), f = p(t, "initialInvalid", 3, !1), g = p(t, "emptyValueNull", 19, () => s() === null), h = p(t, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Xe(t, $m), m, _ = be({}), b = be({});
  We(() => {
    i() === "file" ? delete b.value : b.value = s() == null ? "" : s();
  }), _t(() => {
    d() && f() && u(D().matches(":invalid"));
  });
  function S(U) {
    return U === "" ? Number.NaN : +U;
  }
  function w(U) {
    if (i() === "file") {
      o(U.currentTarget.files);
      return;
    }
    if (U.currentTarget.value === "" && g()) {
      s(null);
      return;
    }
    if (U.currentTarget.value === "" && h()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(S(U.currentTarget.value));
        break;
      default:
        s(U.currentTarget.value);
        break;
    }
  }
  function O(U) {
    (i() === "file" || i() === "range") && w(U), l(!0), d() && u(D().matches(":invalid"));
  }
  function A(U) {
    return U in _ ? _[U] ?? null : D().getAttribute(U);
  }
  function E(U, x) {
    _[U] !== x && (_[U] = x);
  }
  function y(U) {
    (!(U in _) || _[U] != null) && (_[U] = void 0);
  }
  function C() {
    D().focus();
  }
  function N() {
    D().blur();
  }
  function D() {
    return m;
  }
  var G = { getAttr: A, addAttr: E, removeAttr: y, focus: C, blur: N, getElement: D }, Y = ep(), Q = (U) => {
    var x;
    i() !== "file" && w(U), (x = t.oninput) == null || x.call(t, U);
  }, ie = (U) => {
    var x;
    O(U), (x = t.onchange) == null || x.call(t, U);
  };
  return tt(
    Y,
    (U) => ({
      class: U,
      type: i(),
      placeholder: a(),
      ...b,
      ..._,
      ...v,
      oninput: Q,
      onchange: ie
    }),
    [
      () => Ye({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), ye(Y, (U) => m = U, () => m), $e(Y, (U, x) => q == null ? void 0 : q(U, x), n), T(e, Y), Ne(G);
}
var np = /* @__PURE__ */ new Set([
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
]), rp = /* @__PURE__ */ de("<textarea></textarea>");
function ip(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "style", 3, ""), a = p(t, "value", 15, ""), s = p(t, "dirty", 15, !1), o = p(t, "invalid", 15, !1), l = p(t, "updateInvalid", 3, !0), u = p(t, "initialInvalid", 3, !1), d = p(t, "resizable", 3, !0), f = /* @__PURE__ */ Xe(t, np), g, h = be({});
  _t(() => {
    l() && u() && o(O().matches(":invalid"));
  });
  function v() {
    s(!0), l() && o(O().matches(":invalid"));
  }
  function m(C) {
    return C in h ? h[C] ?? null : O().getAttribute(C);
  }
  function _(C, N) {
    h[C] !== N && (h[C] = N);
  }
  function b(C) {
    (!(C in h) || h[C] != null) && (h[C] = void 0);
  }
  function S() {
    O().focus();
  }
  function w() {
    O().blur();
  }
  function O() {
    return g;
  }
  var A = { getAttr: m, addAttr: _, removeAttr: b, focus: S, blur: w, getElement: O }, E = rp(), y = (C) => {
    var N;
    v(), (N = t.onchange) == null || N.call(t, C);
  };
  return tt(
    E,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...f,
      onchange: y
    }),
    [
      () => Ye({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), ye(E, (C) => g = C, () => g), $e(E, (C, N) => q == null ? void 0 : q(C, N), n), ga(() => ro(E, a)), T(e, E), Ne(A);
}
var ap = /* @__PURE__ */ new Set([
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
]), sp = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), kl = /* @__PURE__ */ de("<!> <!>", 1), op = /* @__PURE__ */ de("<span><!> <!></span>"), lp = /* @__PURE__ */ de("<!> <!> <!>", 1), up = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), cp = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>");
function Fl(e, t) {
  Le(t, !0);
  const { applyPassive: n } = cd;
  let r = () => {
  };
  function i(te) {
    return te === r;
  }
  let a = p(t, "use", 19, () => []), s = p(t, "class", 3, ""), o = p(t, "style", 3, ""), l = p(t, "ripple", 3, !0), u = p(t, "disabled", 3, !1), d = p(t, "required", 3, !1), f = p(t, "textarea", 3, !1), g = p(t, "variant", 19, () => f() ? "outlined" : "standard"), h = p(t, "noLabel", 3, !1), v = p(t, "type", 3, "text"), m = p(t, "value", 15), _ = p(t, "files", 15, r), b = p(t, "invalid", 15, r), S = p(t, "updateInvalid", 19, () => i(b())), w = p(t, "initialInvalid", 3, !1), O = p(t, "dirty", 15, !1), A = p(t, "validateOnValueChange", 19, S), E = p(t, "useNativeValidation", 19, S), y = p(t, "withLeadingIcon", 3, r), C = p(t, "withTrailingIcon", 3, r), N = p(t, "input", 7), D = p(t, "floatingLabel", 7), G = p(t, "lineRipple", 7), Y = p(t, "notchedOutline", 7), Q = /* @__PURE__ */ Xe(t, ap);
  const ie = m() !== void 0 || m() === void 0 && t.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(b()) && b(!1);
  let U, x = /* @__PURE__ */ Ee(void 0), V = new Ti(), H = be({}), F = be({}), k = /* @__PURE__ */ Ee(void 0), P = /* @__PURE__ */ Ee(!1), L = /* @__PURE__ */ Ee(be(w())), Z = _e("SMUI:addLayoutListener"), se, ce, J = new Promise((te) => ce = te), $, ae, we, Ge;
  const je = /* @__PURE__ */ me(() => N() && N().getElement());
  We(() => {
    (O() || c(L) || !S()) && c(x) && c(x).isValid() !== !b() && (S() ? b(!c(x).isValid()) : c(x).setValid(!b()));
  }), We(() => {
    c(x) && c(x).getValidateOnValueChange() !== A() && c(x).setValidateOnValueChange(i(A()) ? !1 : A());
  }), We(() => {
    c(x) && c(x).setUseNativeValidation(i(E()) ? !0 : E());
  }), We(() => {
    c(x) && c(x).setDisabled(u());
  });
  let Me = m();
  We(() => {
    if (c(x) && ie && Me !== m()) {
      Me = m();
      const te = `${m() == null ? "" : m()}`;
      c(x).getValue() !== te && c(x).setValue(te);
    }
  }), Z && (se = Z(R)), ue("SMUI:textfield:leading-icon:mount", (te) => {
    $ = te;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    $ = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (te) => {
    ae = te;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    ae = void 0;
  }), ue("SMUI:textfield:helper-text:id", (te) => {
    j(k, te, !0);
  }), ue("SMUI:textfield:helper-text:mount", (te) => {
    we = te;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    j(k, void 0), we = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (te) => {
    Ge = te;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    Ge = void 0;
  }), _t(() => {
    var te;
    if (j(
      x,
      new ar(
        {
          // getRootAdapterMethods_
          addClass: Oe,
          removeClass: Ze,
          hasClass: ke,
          registerTextFieldInteractionHandler: (z, Qe) => V.on(B(), z, Qe),
          deregisterTextFieldInteractionHandler: (z, Qe) => V.off(B(), z, Qe),
          registerValidationAttributeChangeHandler: (z) => {
            const Qe = (rt) => rt.map((on) => on.attributeName).filter((on) => on), M = new MutationObserver((rt) => {
              E() && z(Qe(rt));
            }), X = { attributes: !0 };
            return N() && M.observe(N().getElement(), X), M;
          },
          deregisterValidationAttributeChangeHandler: (z) => {
            z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var z;
            return ((z = N()) == null ? void 0 : z.getElement()) ?? null;
          },
          setInputAttr: (z, Qe) => {
            var M;
            (M = N()) == null || M.addAttr(z, Qe);
          },
          removeInputAttr: (z) => {
            var Qe;
            (Qe = N()) == null || Qe.removeAttr(z);
          },
          isFocused: () => {
            var z;
            return document.activeElement === ((z = N()) == null ? void 0 : z.getElement());
          },
          registerInputInteractionHandler: (z, Qe) => {
            var X;
            const M = (X = N()) == null ? void 0 : X.getElement();
            if (M) {
              const rt = n();
              V.on(M, z, Qe, typeof rt == "boolean" ? { capture: rt } : rt);
            }
          },
          deregisterInputInteractionHandler: (z, Qe) => {
            var X;
            const M = (X = N()) == null ? void 0 : X.getElement();
            M && V.off(M, z, Qe);
          },
          // getLabelAdapterMethods_
          floatLabel: (z) => D() && D().float(z),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (z) => D() && D().shake(z),
          setLabelRequired: (z) => D() && D().setRequired(z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => G() && G().activate(),
          deactivateLineRipple: () => G() && G().deactivate(),
          setLineRippleTransformOrigin: (z) => G() && G().setRippleCenter(z),
          // getOutlineAdapterMethods_
          closeOutline: () => Y() && Y().closeNotch(),
          hasOutline: () => !!Y(),
          notchOutline: (z) => Y() && Y().notch(z)
        },
        {
          get helperText() {
            return we;
          },
          get characterCounter() {
            return Ge;
          },
          get leadingIcon() {
            return $;
          },
          get trailingIcon() {
            return ae;
          }
        }
      ),
      !0
    ), ie) {
      if (N() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (te = c(x)) == null || te.init();
    } else
      Ic().then(() => {
        var z;
        if (N() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (z = c(x)) == null || z.init();
      });
    return ce(), () => {
      var z;
      (z = c(x)) == null || z.destroy(), j(x, void 0), V.clear();
    };
  }), yi(() => {
    se && se();
  });
  function ke(te) {
    return te in H ? H[te] ?? null : B().classList.contains(te);
  }
  function Oe(te) {
    H[te] || (H[te] = !0);
  }
  function Ze(te) {
    (!(te in H) || H[te]) && (H[te] = !1);
  }
  function fe(te, z) {
    F[te] != z && (z === "" || z == null ? delete F[te] : F[te] = z);
  }
  function he() {
    var te;
    (te = N()) == null || te.focus();
  }
  function Te() {
    var te;
    (te = N()) == null || te.blur();
  }
  function R() {
    if (c(x)) {
      const te = c(x).shouldFloat;
      c(x).notchOutline(te);
    }
  }
  function B() {
    return U;
  }
  var K = { focus: he, blur: Te, layout: R, getElement: B }, Fe = kl(), at = W(Fe);
  {
    var Wt = (te) => {
      var z = up();
      tt(z, (Ve, st, ft) => ({ class: Ve, style: st, for: void 0, ...ft }), [
        () => Ye({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": g() === "filled",
          "mdc-text-field--outlined": g() === "outlined",
          "smui-text-field--standard": g() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--label-floating": c(P) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": i(y()) ? t.leadingIcon : y(),
          "mdc-text-field--with-trailing-icon": i(C()) ? t.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": b(),
          ...H,
          [s()]: !0
        }),
        () => Object.entries(F).map(([Ve, st]) => `${Ve}: ${st};`).concat([o()]).join(" "),
        () => $a(Q, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Qe = Se(z);
      {
        var M = (Ve) => {
          var st = kl(), ft = W(st);
          {
            var Yt = (bt) => {
              var Lt = sp();
              T(bt, Lt);
            };
            ge(ft, (bt) => {
              g() === "filled" && bt(Yt);
            });
          }
          var Fn = ne(ft, 2);
          {
            var ht = (bt) => {
              {
                let Lt = /* @__PURE__ */ me(() => c(P) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), ze = /* @__PURE__ */ me(() => dn(Q, "label$"));
                ye(
                  Nl(bt, pt(
                    {
                      get floatAbove() {
                        return c(Lt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => c(ze),
                    {
                      children: (Nt, jr) => {
                        var bn = re(), Ct = W(bn);
                        {
                          var Bt = (En) => {
                          }, Gn = (En) => {
                            var _r = yt();
                            pe(() => ot(_r, t.label)), T(En, _r);
                          }, Vn = (En) => {
                            var _r = re(), yn = W(_r);
                            le(yn, () => t.label), T(En, _r);
                          };
                          ge(Ct, (En) => {
                            t.label == null ? En(Bt) : typeof t.label == "string" ? En(Gn, 1) : En(Vn, -1);
                          });
                        }
                        T(Nt, bn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Nt) => D(Nt),
                  () => D()
                );
              }
            };
            ge(Fn, (bt) => {
              !h() && t.label != null && bt(ht);
            });
          }
          T(Ve, st);
        };
        ge(Qe, (Ve) => {
          !f() && g() !== "outlined" && Ve(M);
        });
      }
      var X = ne(Qe, 2);
      {
        var rt = (Ve) => {
          {
            let st = /* @__PURE__ */ me(() => h() || t.label == null), ft = /* @__PURE__ */ me(() => dn(Q, "outline$"));
            ye(
              Gm(Ve, pt(
                {
                  get noLabel() {
                    return c(st);
                  }
                },
                () => c(ft),
                {
                  children: (Yt, Fn) => {
                    var ht = re(), bt = W(ht);
                    {
                      var Lt = (ze) => {
                        {
                          let Nt = /* @__PURE__ */ me(() => c(P) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), jr = /* @__PURE__ */ me(() => dn(Q, "label$"));
                          ye(
                            Nl(ze, pt(
                              {
                                get floatAbove() {
                                  return c(Nt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => c(jr),
                              {
                                children: (bn, Ct) => {
                                  var Bt = re(), Gn = W(Bt);
                                  {
                                    var Vn = (yn) => {
                                    }, En = (yn) => {
                                      var Li = yt();
                                      pe(() => ot(Li, t.label)), T(yn, Li);
                                    }, _r = (yn) => {
                                      var Li = re(), Md = W(Li);
                                      le(Md, () => t.label), T(yn, Li);
                                    };
                                    ge(Gn, (yn) => {
                                      t.label == null ? yn(Vn) : typeof t.label == "string" ? yn(En, 1) : yn(_r, -1);
                                    });
                                  }
                                  T(bn, Bt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (bn) => D(bn),
                            () => D()
                          );
                        }
                      };
                      ge(bt, (ze) => {
                        !h() && t.label != null && ze(Lt);
                      });
                    }
                    T(Yt, ht);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Yt) => Y(Yt),
              () => Y()
            );
          }
        };
        ge(X, (Ve) => {
          (f() || g() === "outlined") && Ve(rt);
        });
      }
      var on = ne(X, 2);
      Ra(on, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ve, st) => {
          var ft = re(), Yt = W(ft);
          le(Yt, () => t.leadingIcon ?? ee), T(Ve, ft);
        },
        $$slots: { default: !0 }
      });
      var Vr = ne(on, 2);
      le(Vr, () => t.children ?? ee);
      var lt = ne(Vr, 2);
      {
        var Tt = (Ve) => {
          var st = op(), ft = Se(st);
          {
            let Fn = /* @__PURE__ */ me(() => dn(Q, "input$"));
            ye(
              ip(ft, pt(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return c(L);
                  },
                  get "aria-controls"() {
                    return c(k);
                  },
                  get "aria-describedby"() {
                    return c(k);
                  }
                },
                () => c(Fn),
                {
                  onblur: (ht) => {
                    var bt;
                    j(P, !1), j(L, !0), ct(B(), "blur", ht), (bt = t.input$onblur) == null || bt.call(t, ht);
                  },
                  onfocus: (ht) => {
                    var bt;
                    j(P, !0), ct(B(), "focus", ht), (bt = t.input$onfocus) == null || bt.call(t, ht);
                  },
                  get value() {
                    return m();
                  },
                  set value(ht) {
                    m(ht);
                  },
                  get dirty() {
                    return O();
                  },
                  set dirty(ht) {
                    O(ht);
                  },
                  get invalid() {
                    return b();
                  },
                  set invalid(ht) {
                    b(ht);
                  }
                }
              )),
              (ht) => N(ht),
              () => N()
            );
          }
          var Yt = ne(ft, 2);
          le(Yt, () => t.internalCounter ?? ee), pe((Fn) => Xa(st, 1, Fn), [
            () => za(Ye({
              "mdc-text-field__resizer": !("input$resizable" in Q) || t.input$resizable
            }))
          ]), T(Ve, st);
        }, qt = (Ve) => {
          var st = lp(), ft = W(st);
          {
            var Yt = (Lt) => {
              var ze = re(), Nt = W(ze);
              {
                var jr = (Ct) => {
                  Zm(Ct, {
                    children: (Bt, Gn) => {
                      var Vn = yt();
                      pe(() => ot(Vn, t.prefix)), T(Bt, Vn);
                    },
                    $$slots: { default: !0 }
                  });
                }, bn = (Ct) => {
                  var Bt = re(), Gn = W(Bt);
                  le(Gn, () => t.prefix ?? ee), T(Ct, Bt);
                };
                ge(Nt, (Ct) => {
                  typeof t.prefix == "string" ? Ct(jr) : Ct(bn, -1);
                });
              }
              T(Lt, ze);
            };
            ge(ft, (Lt) => {
              t.prefix != null && Lt(Yt);
            });
          }
          var Fn = ne(ft, 2);
          {
            let Lt = /* @__PURE__ */ me(() => dn(Q, "input$"));
            ye(
              tp(Fn, pt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return c(L);
                  },
                  get "aria-controls"() {
                    return c(k);
                  },
                  get "aria-describedby"() {
                    return c(k);
                  }
                },
                () => h() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => c(Lt),
                {
                  onblur: (ze) => {
                    var Nt;
                    j(P, !1), j(L, !0), ct(B(), "blur", ze), (Nt = t.input$onblur) == null || Nt.call(t, ze);
                  },
                  onfocus: (ze) => {
                    var Nt;
                    j(P, !0), ct(B(), "focus", ze), (Nt = t.input$onfocus) == null || Nt.call(t, ze);
                  },
                  get value() {
                    return m();
                  },
                  set value(ze) {
                    m(ze);
                  },
                  get files() {
                    return _();
                  },
                  set files(ze) {
                    _(ze);
                  },
                  get dirty() {
                    return O();
                  },
                  set dirty(ze) {
                    O(ze);
                  },
                  get invalid() {
                    return b();
                  },
                  set invalid(ze) {
                    b(ze);
                  }
                }
              )),
              (ze) => N(ze),
              () => N()
            );
          }
          var ht = ne(Fn, 2);
          {
            var bt = (Lt) => {
              var ze = re(), Nt = W(ze);
              {
                var jr = (Ct) => {
                  Jm(Ct, {
                    children: (Bt, Gn) => {
                      var Vn = yt();
                      pe(() => ot(Vn, t.suffix)), T(Bt, Vn);
                    },
                    $$slots: { default: !0 }
                  });
                }, bn = (Ct) => {
                  var Bt = re(), Gn = W(Bt);
                  le(Gn, () => t.suffix ?? ee), T(Ct, Bt);
                };
                ge(Nt, (Ct) => {
                  typeof t.suffix == "string" ? Ct(jr) : Ct(bn, -1);
                });
              }
              T(Lt, ze);
            };
            ge(ht, (Lt) => {
              t.suffix != null && Lt(bt);
            });
          }
          T(Ve, st);
        };
        ge(lt, (Ve) => {
          f() && typeof m() == "string" ? Ve(Tt) : Ve(qt, -1);
        });
      }
      var tr = ne(lt, 2);
      Ra(tr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ve, st) => {
          var ft = re(), Yt = W(ft);
          le(Yt, () => t.trailingIcon ?? ee), T(Ve, ft);
        },
        $$slots: { default: !0 }
      });
      var qe = ne(tr, 2);
      {
        var Dd = (Ve) => {
          {
            let st = /* @__PURE__ */ me(() => dn(Q, "ripple$"));
            ye(Dm(Ve, pt(() => c(st))), (ft) => G(ft), () => G());
          }
        };
        ge(qe, (Ve) => {
          !f() && g() !== "outlined" && l() && Ve(Dd);
        });
      }
      ye(z, (Ve) => U = Ve, () => U), $e(z, (Ve, st) => ir == null ? void 0 : ir(Ve, st), () => ({
        ripple: !f() && g() === "filled",
        unbounded: !1,
        addClass: Oe,
        removeClass: Ze,
        addStyle: fe,
        eventTarget: c(je),
        activeTarget: c(je),
        initPromise: J
      })), $e(z, (Ve, st) => q == null ? void 0 : q(Ve, st), a), T(te, z);
    }, _n = (te) => {
      var z = cp();
      tt(z, (lt, Tt, qt) => ({ class: lt, style: Tt, ...qt }), [
        () => Ye({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": g() === "filled",
          "mdc-text-field--outlined": g() === "outlined",
          "smui-text-field--standard": g() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--with-leading-icon": t.leadingIcon,
          "mdc-text-field--with-trailing-icon": t.trailingIcon,
          "mdc-text-field--invalid": b(),
          ...H,
          [s()]: !0
        }),
        () => Object.entries(F).map(([lt, Tt]) => `${lt}: ${Tt};`).concat([o()]).join(" "),
        () => $a(Q, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Qe = Se(z);
      {
        var M = (lt) => {
          var Tt = re(), qt = W(Tt);
          le(qt, () => t.label ?? ee), T(lt, Tt);
        };
        ge(Qe, (lt) => {
          typeof t.label != "string" && lt(M);
        });
      }
      var X = ne(Qe, 2);
      Ra(X, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (lt, Tt) => {
          var qt = re(), tr = W(qt);
          le(tr, () => t.leadingIcon ?? ee), T(lt, qt);
        },
        $$slots: { default: !0 }
      });
      var rt = ne(X, 2);
      le(rt, () => t.children ?? ee);
      var on = ne(rt, 2);
      Ra(on, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (lt, Tt) => {
          var qt = re(), tr = W(qt);
          le(tr, () => t.trailingIcon ?? ee), T(lt, qt);
        },
        $$slots: { default: !0 }
      });
      var Vr = ne(on, 2);
      le(Vr, () => t.line ?? ee), ye(z, (lt) => U = lt, () => U), $e(z, (lt, Tt) => ir == null ? void 0 : ir(lt, Tt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Oe,
        removeClass: Ze,
        addStyle: fe
      })), $e(z, (lt, Tt) => q == null ? void 0 : q(lt, Tt), a), T(te, z);
    };
    ge(at, (te) => {
      ie ? te(Wt) : te(_n, -1);
    });
  }
  var kn = ne(at, 2);
  {
    var Ri = (te) => {
      {
        let z = /* @__PURE__ */ me(() => dn(Q, "helperLine$"));
        zm(te, pt(() => c(z), {
          children: (Qe, M) => {
            var X = re(), rt = W(X);
            le(rt, () => t.helper ?? ee), T(Qe, X);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ge(kn, (te) => {
      t.helper && te(Ri);
    });
  }
  return T(e, Fe), Ne(K);
}
var dp = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "role",
  "tabindex",
  "disabled",
  "children"
]), fp = /* @__PURE__ */ de("<i><!></i>");
function hp(e, t) {
  Le(t, !0);
  const n = () => Jn(v, "$leadingStore", r), [r, i] = gr();
  let a = p(t, "use", 19, () => []), s = p(t, "class", 3, ""), o = p(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), l = p(t, "disabled", 3, !1), u = /* @__PURE__ */ Xe(t, dp), d, f = /* @__PURE__ */ Ee(void 0), g = new Ti(), h = be({});
  const v = _e("SMUI:textfield:icon:leading"), m = n();
  let _ = /* @__PURE__ */ Ee(void 0);
  const b = /* @__PURE__ */ me(() => ({ role: t.role, tabindex: o() })), S = _e("SMUI:textfield:leading-icon:mount"), w = _e("SMUI:textfield:leading-icon:unmount"), O = _e("SMUI:textfield:trailing-icon:mount"), A = _e("SMUI:textfield:trailing-icon:unmount");
  _t(() => (j(
    f,
    new Wo({
      getAttr: E,
      setAttr: y,
      removeAttr: C,
      setContent: (x) => {
        j(_, x, !0);
      },
      registerInteractionHandler: (x, V) => g.on(N(), x, V),
      deregisterInteractionHandler: (x, V) => g.off(N(), x, V),
      notifyIconAction: () => ct(N(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? S && S(c(f)) : O && O(c(f)), c(f).init(), () => {
    var x;
    c(f) && (m ? w && w(c(f)) : A && A(c(f))), (x = c(f)) == null || x.destroy(), j(f, void 0), g.clear();
  }));
  function E(x) {
    return x in h ? h[x] ?? null : N().getAttribute(x);
  }
  function y(x, V) {
    h[x] !== V && (h[x] = V);
  }
  function C(x) {
    (!(x in h) || h[x] != null) && (h[x] = void 0);
  }
  function N() {
    return d;
  }
  var D = { getElement: N }, G = fp();
  tt(
    G,
    (x) => ({
      class: x,
      "aria-hidden": o() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? l() ? "true" : "false" : void 0,
      ...c(b),
      ...h,
      ...u
    }),
    [
      () => Ye({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var Y = Se(G);
  {
    var Q = (x) => {
      var V = re(), H = W(V);
      le(H, () => t.children ?? ee), T(x, V);
    }, ie = (x) => {
      var V = yt();
      pe(() => ot(V, c(_))), T(x, V);
    };
    ge(Y, (x) => {
      c(_) == null ? x(Q) : x(ie, -1);
    });
  }
  ye(G, (x) => d = x, () => d), $e(G, (x, V) => q == null ? void 0 : q(x, V), a), T(e, G);
  var U = Ne(D);
  return i(), U;
}
function Ns(e, t) {
  Le(t, !0);
  let n = p(t, "placeholder", 3, ""), r = p(t, "label", 3, ""), i = p(t, "icon", 3, ""), a = p(t, "value", 15, ""), s = p(t, "variant", 3, "standard"), o = p(t, "styles", 3, ""), l = p(t, "required", 3, !1), u = p(t, "invalid", 3, !1), d = p(t, "oninput", 3, () => {
  });
  var f = re(), g = W(f);
  {
    var h = (m) => {
      {
        const _ = (S) => {
          hp(S, {
            class: "material-icons",
            children: (w, O) => {
              var A = yt();
              pe(() => ot(A, i())), T(w, A);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ me(() => `width: 100%; ${o()}`);
        Fl(m, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get invalid() {
            return u();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return c(b);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return d();
          },
          get value() {
            return a();
          },
          set value(S) {
            a(S);
          },
          leadingIcon: _,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, v = (m) => {
      Fl(m, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return s();
        },
        get required() {
          return l();
        },
        get invalid() {
          return u();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(_) {
          a(_);
        }
      });
    };
    ge(g, (m) => {
      i() ? m(h) : m(v, -1);
    });
  }
  T(e, f), Ne();
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
const Gl = {
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
function vp(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function gp(e, t) {
  if (vp(e) && t in Gl) {
    const n = e.document.createElement("div"), { standard: r, prefixed: i } = Gl[t];
    return r in n.style ? r : i;
  }
  return t;
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
var Vl;
(function(e) {
  e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER", e[e.RIGHT = 4] = "RIGHT", e[e.FLIP_RTL = 8] = "FLIP_RTL";
})(Vl || (Vl = {}));
var jl;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 4] = "TOP_RIGHT", e[e.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", e[e.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", e[e.TOP_START = 8] = "TOP_START", e[e.TOP_END = 12] = "TOP_END", e[e.BOTTOM_START = 9] = "BOTTOM_START", e[e.BOTTOM_END = 13] = "BOTTOM_END";
})(jl || (jl = {}));
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
var Wl;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LIST_ROOT = 1] = "LIST_ROOT", e[e.FIRST_ITEM = 2] = "FIRST_ITEM", e[e.LAST_ITEM = 3] = "LAST_ITEM";
})(Wl || (Wl = {}));
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
function mp(e) {
  return e ? e.scrollHeight > e.offsetHeight : !1;
}
function pp(e) {
  return e ? e.scrollTop === 0 : !1;
}
function _p(e) {
  return e ? Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight : !1;
}
function bp(e) {
  const t = /* @__PURE__ */ new Set();
  return [].forEach.call(e, (n) => t.add(n.offsetTop)), t.size > 1;
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
class Ep {
  constructor() {
    this.rafIDs = /* @__PURE__ */ new Map();
  }
  /**
   * Requests an animation frame. Cancels any existing frame with the same key.
   * @param {string} key The key for this callback.
   * @param {FrameRequestCallback} callback The callback to be executed.
   */
  request(t, n) {
    this.cancel(t);
    const r = requestAnimationFrame((i) => {
      this.rafIDs.delete(t), n(i);
    });
    this.rafIDs.set(t, r);
  }
  /**
   * Cancels a queued callback with the given key.
   * @param {string} key The key for this callback.
   */
  cancel(t) {
    const n = this.rafIDs.get(t);
    n && (cancelAnimationFrame(n), this.rafIDs.delete(t));
  }
  /**
   * Cancels all queued callback.
   */
  cancelAll() {
    this.rafIDs.forEach((t, n) => {
      this.cancel(n);
    });
  }
  /**
   * Returns the queue of unexecuted callback keys.
   */
  getQueue() {
    const t = [];
    return this.rafIDs.forEach((n, r) => {
      t.push(r);
    }), t;
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
const Ke = {
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
}, ki = {
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
}, Ps = {
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
var es;
(function(e) {
  e.POLL_SCROLL_POS = "poll_scroll_position", e.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(es || (es = {}));
class qo extends Mn {
  static get cssClasses() {
    return Ke;
  }
  static get strings() {
    return ki;
  }
  static get numbers() {
    return Ps;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, qo.defaultAdapter), t)), this.dialogOpen = !1, this.isFullscreen = !1, this.animationFrame = 0, this.animationTimer = 0, this.escapeKeyAction = ki.CLOSE_ACTION, this.scrimClickAction = ki.CLOSE_ACTION, this.autoStackButtons = !0, this.areButtonsStacked = !1, this.suppressDefaultPressSelector = ki.SUPPRESS_DEFAULT_PRESS_SELECTOR, this.animFrame = new Ep(), this.contentScrollHandler = () => {
      this.handleScrollEvent();
    }, this.windowResizeHandler = () => {
      this.layout();
    }, this.windowOrientationChangeHandler = () => {
      this.layout();
    };
  }
  init() {
    this.adapter.hasClass(Ke.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Ke.FULLSCREEN);
  }
  destroy() {
    this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
  }
  open(t) {
    this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Ke.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Ke.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(() => {
      this.adapter.addClass(Ke.OPEN), (!t || !t.isScrimless) && this.adapter.addBodyClass(Ke.SCROLL_LOCK), this.layout(), this.animationTimer = setTimeout(() => {
        this.handleAnimationTimerEnd(), this.adapter.trapFocus(this.adapter.getInitialFocusEl()), this.adapter.notifyOpened();
      }, Ps.DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  }
  close(t = "") {
    this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Ke.CLOSING), this.adapter.removeClass(Ke.OPEN), this.adapter.removeBodyClass(Ke.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(() => {
      this.adapter.releaseFocus(), this.handleAnimationTimerEnd(), this.adapter.notifyClosed(t);
    }, Ps.DIALOG_ANIMATION_CLOSE_TIME_MS));
  }
  /**
   * Used only in instances of showing a secondary dialog over a full-screen
   * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
   */
  showSurfaceScrim() {
    this.adapter.addClass(Ke.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(() => {
      this.adapter.addClass(Ke.SURFACE_SCRIM_SHOWN);
    });
  }
  /**
   * Used only in instances of showing a secondary dialog over a full-screen
   * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
   */
  hideSurfaceScrim() {
    this.adapter.removeClass(Ke.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ke.SURFACE_SCRIM_HIDING);
  }
  /**
   * Handles `transitionend` event triggered when surface scrim animation is
   * finished.
   */
  handleSurfaceScrimTransitionEnd() {
    this.adapter.removeClass(Ke.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ke.SURFACE_SCRIM_SHOWING);
  }
  isOpen() {
    return this.dialogOpen;
  }
  getEscapeKeyAction() {
    return this.escapeKeyAction;
  }
  setEscapeKeyAction(t) {
    this.escapeKeyAction = t;
  }
  getScrimClickAction() {
    return this.scrimClickAction;
  }
  setScrimClickAction(t) {
    this.scrimClickAction = t;
  }
  getAutoStackButtons() {
    return this.autoStackButtons;
  }
  setAutoStackButtons(t) {
    this.autoStackButtons = t;
  }
  getSuppressDefaultPressSelector() {
    return this.suppressDefaultPressSelector;
  }
  setSuppressDefaultPressSelector(t) {
    this.suppressDefaultPressSelector = t;
  }
  layout() {
    this.animFrame.request(es.POLL_LAYOUT_CHANGE, () => {
      this.layoutInternal();
    });
  }
  /** Handles click on the dialog root element. */
  handleClick(t) {
    if (this.adapter.eventTargetMatches(t.target, ki.SCRIM_SELECTOR) && this.scrimClickAction !== "")
      this.close(this.scrimClickAction);
    else {
      const r = this.adapter.getActionFromEvent(t);
      r && this.close(r);
    }
  }
  /** Handles keydown on the dialog root element. */
  handleKeydown(t) {
    const n = t.key === "Enter" || t.keyCode === 13;
    if (!n || this.adapter.getActionFromEvent(t))
      return;
    const i = t.composedPath ? t.composedPath()[0] : t.target, a = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(i, this.suppressDefaultPressSelector) : !0;
    n && a && this.adapter.clickDefaultButton();
  }
  /** Handles keydown on the document. */
  handleDocumentKeydown(t) {
    (t.key === "Escape" || t.keyCode === 27) && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
  }
  /**
   * Handles scroll event on the dialog's content element -- showing a scroll
   * divider on the header or footer based on the scroll position. This handler
   * should only be registered on full-screen dialogs with scrollable content.
   */
  handleScrollEvent() {
    this.animFrame.request(es.POLL_SCROLL_POS, () => {
      this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter();
    });
  }
  layoutInternal() {
    this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
  }
  handleAnimationTimerEnd() {
    this.animationTimer = 0, this.adapter.removeClass(Ke.OPENING), this.adapter.removeClass(Ke.CLOSING);
  }
  /**
   * Runs the given logic on the next animation frame, using setTimeout to
   * factor in Firefox reflow behavior.
   */
  runNextAnimationFrame(t) {
    cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(() => {
      this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(t, 0);
    });
  }
  detectStackedButtons() {
    this.adapter.removeClass(Ke.STACKED);
    const t = this.adapter.areButtonsStacked();
    t && this.adapter.addClass(Ke.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
  }
  toggleScrollableClasses() {
    this.adapter.removeClass(Ke.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ke.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
  }
  toggleScrollDividerHeader() {
    this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ke.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ke.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ke.SCROLL_DIVIDER_HEADER);
  }
  toggleScrollDividerFooter() {
    this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ke.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ke.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ke.SCROLL_DIVIDER_FOOTER);
  }
}
var yp = /* @__PURE__ */ new Set([
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
]), Sp = /* @__PURE__ */ de("<div></div>"), Ap = /* @__PURE__ */ de("<div><div><div><!> <!></div></div> <div></div></div> <!>", 1);
function Ip(e, t) {
  Le(t, !0);
  const n = () => Jn(U, "$aboveFullscreenShown", r), [r, i] = gr(), { FocusTrap: a } = $g, { closest: s, matches: o } = Go;
  let l = p(t, "use", 19, () => []), u = p(t, "class", 3, ""), d = p(t, "open", 15, !1), f = p(t, "selection", 3, !1), g = p(t, "escapeKeyAction", 3, "close"), h = p(t, "scrimClickAction", 3, "close"), v = p(t, "autoStackButtons", 3, !0), m = p(t, "fullscreen", 3, !1), _ = p(t, "sheet", 3, !1), b = p(t, "noContentPadding", 3, !1), S = p(t, "scrimRemoved", 3, !1), w = p(t, "container$class", 3, ""), O = p(t, "surface$class", 3, ""), A = /* @__PURE__ */ Xe(t, yp), E, y = /* @__PURE__ */ Ee(void 0), C = new Ti(), N = be({}), D, G = Mt(!1), Y = /* @__PURE__ */ Ee(!!m()), Q = _e("SMUI:dialog:aboveFullscreen"), ie = !!_e("SMUI:dialog:chaining"), U = _e("SMUI:dialog:aboveFullscreenShown") ?? Mt(!1), x = _e("SMUI:addLayoutListener"), V, H = [], F = (M) => (H.push(M), () => {
    const X = H.indexOf(M);
    X >= 0 && H.splice(X, 1);
  });
  ue("SMUI:dialog:chaining", !0), ue("SMUI:dialog:actions:reversed", G), ue("SMUI:addLayoutListener", F), ue("SMUI:dialog:selection", f()), ue("SMUI:dialog:setFullscreenTitleless", (M) => {
    j(Y, M, !0);
  }), ue("SMUI:dialog:aboveFullscreen", Q || m()), ue("SMUI:dialog:aboveFullscreenShown", U), _() && ue("SMUI:icon-button:context", "dialog:sheet"), We(() => {
    c(y) && c(y).getEscapeKeyAction() !== g() && c(y).setEscapeKeyAction(g());
  }), We(() => {
    c(y) && c(y).getScrimClickAction() !== h() && c(y).setScrimClickAction(h());
  }), We(() => {
    c(y) && c(y).getAutoStackButtons() !== v() && c(y).setAutoStackButtons(v());
  }), We(() => {
    v() || lr(G, !0);
  }), x && (V = x(ke)), We(() => {
    c(y) && c(y).isOpen() !== d() && (d() ? c(y).open({ isAboveFullscreenDialog: !!Q }) : c(y).close());
  });
  let k = n();
  We(() => {
    m() && c(y) && k !== n() && (k = n(), n() ? c(y).showSurfaceScrim() : c(y).hideSurfaceScrim());
  }), _t(() => (D = new a(E, { initialFocusEl: $() ?? void 0 }), j(
    y,
    new qo({
      addBodyClass: (M) => document.body.classList.add(M),
      addClass: L,
      areButtonsStacked: () => bp(se()),
      clickDefaultButton: () => {
        const M = ce();
        M && M.click();
      },
      eventTargetMatches: (M, X) => M ? o(M, X) : !1,
      getActionFromEvent: (M) => {
        if (!M.target)
          return "";
        const X = s(M.target, "[data-mdc-dialog-action]");
        return X && X.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: $,
      hasClass: P,
      isContentScrollable: () => mp(J()),
      notifyClosed: (M) => {
        d(!1), ct(Oe(), "SMUIDialogClosed", M ? { action: M } : {});
      },
      notifyClosing: (M) => ct(Oe(), "SMUIDialogClosing", M ? { action: M } : {}),
      notifyOpened: () => ct(Oe(), "SMUIDialogOpened", {}),
      notifyOpening: () => ct(Oe(), "SMUIDialogOpening", {}),
      releaseFocus: () => D.releaseFocus(),
      removeBodyClass: (M) => document.body.classList.remove(M),
      removeClass: Z,
      reverseButtons: () => {
        lr(G, !0);
      },
      trapFocus: () => D.trapFocus(),
      registerContentEventHandler: (M, X) => {
        const rt = J();
        rt instanceof HTMLElement && C.on(rt, M, X);
      },
      deregisterContentEventHandler: (M, X) => {
        const rt = J();
        rt instanceof HTMLElement && C.off(rt, M, X);
      },
      isScrollableContentAtTop: () => pp(J()),
      isScrollableContentAtBottom: () => _p(J()),
      registerWindowEventHandler: (M, X) => C.on(window, M, X),
      deregisterWindowEventHandler: (M, X) => C.off(window, M, X)
    }),
    !0
  ), c(y).init(), () => {
    var M;
    (M = c(y)) == null || M.destroy(), j(y, void 0), C.clear();
  })), yi(() => {
    V && V();
  });
  function P(M) {
    return M in N ? N[M] : Oe().classList.contains(M);
  }
  function L(M) {
    N[M] || (N[M] = !0);
  }
  function Z(M) {
    (!(M in N) || N[M]) && (N[M] = !1);
  }
  function se() {
    return [].slice.call(Oe().querySelectorAll(".mdc-dialog__button"));
  }
  function ce() {
    return Oe().querySelector("[data-mdc-dialog-button-default]");
  }
  function J() {
    return Oe().querySelector(".mdc-dialog__content");
  }
  function $() {
    return Oe().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function ae() {
    Q && lr(U, !0), requestAnimationFrame(() => {
      H.forEach((M) => M());
    });
  }
  function we() {
    H.forEach((M) => M());
  }
  function Ge() {
    Q && lr(U, !1);
  }
  function je() {
    return d();
  }
  function Me(M) {
    d(M);
  }
  function ke() {
    var M;
    return (M = c(y)) == null ? void 0 : M.layout();
  }
  function Oe() {
    return E;
  }
  var Ze = { isOpen: je, setOpen: Me, layout: ke, getElement: Oe }, fe = Ap();
  or("resize", qa, () => d() && c(y) && c(y).layout()), or("orientationchange", qa, () => d() && c(y) && c(y).layout()), or("keydown", oc.body, (M) => c(y) && c(y).handleDocumentKeydown(M));
  var he = W(fe), Te = (M) => {
    var X;
    ae(), (X = t.onSMUIDialogOpening) == null || X.call(t, M);
  }, R = (M) => {
    var X;
    we(), (X = t.onSMUIDialogOpened) == null || X.call(t, M);
  }, B = (M) => {
    var X;
    Ge(), (X = t.onSMUIDialogClosed) == null || X.call(t, M);
  }, K = (M) => {
    var X;
    c(y) && c(y).handleClick(M), (X = t.onclick) == null || X.call(t, M);
  }, Fe = (M) => {
    var X;
    c(y) && c(y).handleKeydown(M), (X = t.onkeydown) == null || X.call(t, M);
  };
  tt(
    he,
    (M, X) => ({
      class: M,
      role: "alertdialog",
      "aria-modal": "true",
      ...X,
      onSMUIDialogOpening: Te,
      onSMUIDialogOpened: R,
      onSMUIDialogClosed: B,
      onclick: K,
      onkeydown: Fe
    }),
    [
      () => Ye({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !v(),
        "mdc-dialog--fullscreen": m(),
        "mdc-dialog--fullscreen--titleless": c(Y),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": b(),
        "mdc-dialog--chaining": ie,
        "smui-dialog--selection": f(),
        ...N,
        [u()]: !0
      }),
      () => $a(A, ["container$", "surface$"])
    ]
  );
  var at = Se(he);
  tt(at, (M, X) => ({ class: M, ...X }), [
    () => Ye({ "mdc-dialog__container": !0, [w()]: !0 }),
    () => dn(A, "container$")
  ]);
  var Wt = Se(at);
  tt(
    Wt,
    (M, X) => ({
      class: M,
      role: "alertdialog",
      "aria-modal": "true",
      tabindex: -1,
      ...X
    }),
    [
      () => Ye({ "mdc-dialog__surface": !0, [O()]: !0 }),
      () => dn(A, "surface$")
    ]
  );
  var _n = Se(Wt);
  le(_n, () => t.children ?? ee);
  var kn = ne(_n, 2);
  {
    var Ri = (M) => {
      var X = Sp();
      pe((rt) => Xa(X, 1, rt), [
        () => za(Ye({
          "mdc-dialog__surface-scrim": !0,
          "mdc-dialog__scrim--removed": S()
        }))
      ]), or("transitionend", X, () => c(y) && c(y).handleSurfaceScrimTransitionEnd()), T(M, X);
    };
    ge(kn, (M) => {
      m() && M(Ri);
    });
  }
  var te = ne(at, 2);
  ye(he, (M) => E = M, () => E), $e(he, (M, X) => q == null ? void 0 : q(M, X), l);
  var z = ne(he, 2);
  le(z, () => t.over ?? ee), pe((M) => Xa(te, 1, M), [
    () => za(Ye({
      "mdc-dialog__scrim": !0,
      "mdc-dialog__scrim--removed": S()
    }))
  ]), T(e, fe);
  var Qe = Ne(Ze);
  return i(), Qe;
}
var Tp = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Cp(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ Xe(t, Tp), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    Ea(e, pt({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, o) => {
        var l = re(), u = W(l);
        le(u, () => t.children ?? ee), T(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ne(a);
}
var xp = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function wp(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ Xe(t, xp), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return ye(
    Ea(e, pt(
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
        children: (s, o) => {
          var l = re(), u = W(l);
          le(u, () => t.children ?? ee), T(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ne(a);
}
var Op = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ql(e, t) {
  Le(t, !0);
  let n = p(t, "open", 15, !1), r = p(t, "onClose", 3, () => {
  });
  Ip(e, {
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
      var s = Op(), o = W(s), l = Se(o);
      le(l, () => t.title ?? ee);
      var u = ne(o, 2);
      Cp(u, {
        id: "large-scroll-content",
        children: (f, g) => {
          var h = re(), v = W(h);
          le(v, () => t.content ?? ee), T(f, h);
        },
        $$slots: { default: !0 }
      });
      var d = ne(u, 2);
      wp(d, {
        children: (f, g) => {
          var h = re(), v = W(h);
          le(v, () => t.actions ?? ee), T(f, h);
        },
        $$slots: { default: !0 }
      }), T(i, s);
    },
    $$slots: { default: !0 }
  }), Ne();
}
const Rp = Mt([]);
Rp.subscribe;
be({ freeze: !1 });
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
var Yl;
(function(e) {
  e.PRIMARY_ACTION = "mdc-evolution-chip__action--primary", e.TRAILING_ACTION = "mdc-evolution-chip__action--trailing", e.CHIP_ROOT = "mdc-evolution-chip";
})(Yl || (Yl = {}));
var vi;
(function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.CLICK = 1] = "CLICK", e[e.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", e[e.DELETE_KEY = 3] = "DELETE_KEY", e[e.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", e[e.ENTER_KEY = 5] = "ENTER_KEY";
})(vi || (vi = {}));
var Kl;
(function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.PRIMARY = 1] = "PRIMARY", e[e.TRAILING = 2] = "TRAILING";
})(Kl || (Kl = {}));
var zl;
(function(e) {
  e.INTERACTION = "MDCChipAction:interaction", e.NAVIGATION = "MDCChipAction:navigation";
})(zl || (zl = {}));
var Xl;
(function(e) {
  e[e.FOCUSABLE = 0] = "FOCUSABLE", e[e.FOCUSABLE_AND_FOCUSED = 1] = "FOCUSABLE_AND_FOCUSED", e[e.NOT_FOCUSABLE = 2] = "NOT_FOCUSABLE";
})(Xl || (Xl = {}));
var Zl;
(function(e) {
  e.ARIA_DISABLED = "aria-disabled", e.ARIA_HIDDEN = "aria-hidden", e.ARIA_SELECTED = "aria-selected", e.DATA_DELETABLE = "data-mdc-deletable", e.DISABLED = "disabled", e.ROLE = "role", e.TAB_INDEX = "tabindex";
})(Zl || (Zl = {}));
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
const hs = /* @__PURE__ */ new Map();
hs.set(Ae.SPACEBAR, vi.SPACEBAR_KEY);
hs.set(Ae.ENTER, vi.ENTER_KEY);
hs.set(Ae.DELETE, vi.DELETE_KEY);
hs.set(Ae.BACKSPACE, vi.BACKSPACE_KEY);
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
Ui`aria-`, Ui`data-`, Ui`disabled`, Ui`role`, Ui`tabindex`;
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
var Ql;
(function(e) {
  e.SELECTING = "mdc-evolution-chip--selecting", e.DESELECTING = "mdc-evolution-chip--deselecting", e.SELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--selecting-with-primary-icon", e.DESELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--deselecting-with-primary-icon", e.DISABLED = "mdc-evolution-chip--disabled", e.ENTER = "mdc-evolution-chip--enter", e.EXIT = "mdc-evolution-chip--exit", e.SELECTED = "mdc-evolution-chip--selected", e.HIDDEN = "mdc-evolution-chip--hidden", e.WITH_PRIMARY_ICON = "mdc-evolution-chip--with-primary-icon";
})(Ql || (Ql = {}));
var Jl;
(function(e) {
  e.INTERACTION = "MDCChip:interaction", e.NAVIGATION = "MDCChip:navigation", e.ANIMATION = "MDCChip:animation";
})(Jl || (Jl = {}));
var $l;
(function(e) {
  e.DATA_REMOVED_ANNOUNCEMENT = "data-mdc-removed-announcement", e.DATA_ADDED_ANNOUNCEMENT = "data-mdc-added-announcement";
})($l || ($l = {}));
var eu;
(function(e) {
  e.ENTER = "mdc-evolution-chip-enter", e.EXIT = "mdc-evolution-chip-exit";
})(eu || (eu = {}));
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
var tu;
(function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT";
})(tu || (tu = {}));
var nu;
(function(e) {
  e.SELECTION = "selection", e.EXIT = "exit";
})(nu || (nu = {}));
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
var ru;
(function(e) {
  e.ARIA_MULTISELECTABLE = "aria-multiselectable";
})(ru || (ru = {}));
var iu;
(function(e) {
  e.CHIP = "mdc-evolution-chip";
})(iu || (iu = {}));
var au;
(function(e) {
  e.INTERACTION = "MDCChipSet:interaction", e.REMOVAL = "MDCChipSet:removal", e.SELECTION = "MDCChipSet:selection";
})(au || (au = {}));
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
var su;
(function(e) {
  e.POLITE = "polite", e.ASSERTIVE = "assertive";
})(su || (su = {}));
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
var ou;
(function(e) {
  e[e.INCREMENT = 0] = "INCREMENT", e[e.DECREMENT = 1] = "DECREMENT";
})(ou || (ou = {}));
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
var lu;
(function(e) {
  e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.CLICK = 1] = "CLICK", e[e.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", e[e.DELETE_KEY = 3] = "DELETE_KEY", e[e.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", e[e.ENTER_KEY = 5] = "ENTER_KEY";
})(lu || (lu = {}));
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
var uu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(uu || (uu = {}));
var cu;
(function(e) {
  e.PRIMARY = "primary", e.TRAILING = "trailing", e.NONE = "none";
})(cu || (cu = {}));
const Rt = {
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
}, Bn = /* @__PURE__ */ new Set();
Bn.add(Rt.ARROW_LEFT_KEY);
Bn.add(Rt.ARROW_RIGHT_KEY);
Bn.add(Rt.ARROW_DOWN_KEY);
Bn.add(Rt.ARROW_UP_KEY);
Bn.add(Rt.END_KEY);
Bn.add(Rt.HOME_KEY);
Bn.add(Rt.IE_ARROW_LEFT_KEY);
Bn.add(Rt.IE_ARROW_RIGHT_KEY);
Bn.add(Rt.IE_ARROW_DOWN_KEY);
Bn.add(Rt.IE_ARROW_UP_KEY);
const Ci = /* @__PURE__ */ new Set();
Ci.add(Rt.ARROW_UP_KEY);
Ci.add(Rt.ARROW_DOWN_KEY);
Ci.add(Rt.HOME_KEY);
Ci.add(Rt.END_KEY);
Ci.add(Rt.IE_ARROW_UP_KEY);
Ci.add(Rt.IE_ARROW_DOWN_KEY);
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
var du;
(function(e) {
  e[e.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", e[e.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(du || (du = {}));
const Et = [];
for (let e = 0; e < 256; ++e)
  Et.push((e + 256).toString(16).slice(1));
function Lp(e, t = 0) {
  return (Et[e[t + 0]] + Et[e[t + 1]] + Et[e[t + 2]] + Et[e[t + 3]] + "-" + Et[e[t + 4]] + Et[e[t + 5]] + "-" + Et[e[t + 6]] + Et[e[t + 7]] + "-" + Et[e[t + 8]] + Et[e[t + 9]] + "-" + Et[e[t + 10]] + Et[e[t + 11]] + Et[e[t + 12]] + Et[e[t + 13]] + Et[e[t + 14]] + Et[e[t + 15]]).toLowerCase();
}
let Hs;
const Np = new Uint8Array(16);
function Pp() {
  if (!Hs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Hs = crypto.getRandomValues.bind(crypto);
  }
  return Hs(Np);
}
const Hp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), fu = { randomUUID: Hp };
function Dp(e, t, n) {
  var i;
  if (fu.randomUUID && !t && !e)
    return fu.randomUUID();
  e = e || {};
  const r = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? Pp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    if (n = n || 0, n < 0 || n + 16 > t.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[n + a] = r[a];
    return t;
  }
  return Lp(r);
}
var Mp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Un(e, t) {
  var n = Mp(), r = Se(n);
  le(r, () => t.children ?? ee), T(e, n);
}
var Bp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function fd(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Bp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var Up = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function go(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Up();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var kp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Fp(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = kp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var Gp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Vp(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Gp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var jp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function hd(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = jp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var Wp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function hu(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Wp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var qp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Yp(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = qp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function zp(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Kp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
var Xp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Zp(e, t) {
  let n = p(t, "svgStyles", 3, "");
  Un(e, {
    children: (r, i) => {
      var a = Xp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
cf();
var Qp = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Jp(e, t) {
  let n = p(t, "svgStyles", 8, "");
  Un(e, {
    children: (r, i) => {
      var a = Qp();
      pe(() => Ot(a, n())), T(r, a);
    }
  });
}
en(["change"]);
var $p = /* @__PURE__ */ de('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), e_ = /* @__PURE__ */ de('<div class="svelte-14uvd2z"><!></div>');
function vu(e, t) {
  let n = p(t, "loadingDone", 3, !0), r = p(t, "message", 3, "Loading...");
  var i = e_(), a = Se(i);
  {
    var s = (o) => {
      var l = $p(), u = Se(l), d = ne(Se(u), 2), f = Xr(d, !0);
      pe(() => ot(f, r())), T(o, l);
    };
    ge(a, (o) => {
      n() || o(s);
    });
  }
  T(e, i);
}
en(["change"]);
var t_ = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function gu(e, t) {
  Le(t, !0);
  let n = p(t, "content", 3, ""), r = p(t, "side", 3, "top"), i = p(t, "hoverDelay", 3, 0), a = p(t, "transitionDuration", 3, 80), s = p(t, "disabled", 3, !1), o = p(t, "offset", 3, 8), l = p(t, "backgroundColor", 3, "#000"), u = p(t, "paddingY", 3, 6), d = p(t, "paddingX", 3, 10), f = p(t, "textColor", 3, "#fff");
  const g = `tt-${Math.random().toString(36).slice(2)}`;
  let h = /* @__PURE__ */ Ee(null), v = /* @__PURE__ */ Ee(null), m = /* @__PURE__ */ Ee(null), _ = /* @__PURE__ */ Ee(null), b = /* @__PURE__ */ Ee(!1), S = /* @__PURE__ */ Ee(null), w = /* @__PURE__ */ Ee(null);
  function O(x) {
    var Z;
    if (!x || !x.trim().startsWith("var(")) return x;
    const V = x.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!V) return x;
    const H = V[1], F = (Z = V[2]) == null ? void 0 : Z.trim(), k = c(h) ? getComputedStyle(c(h)).getPropertyValue(H) : "", P = getComputedStyle(document.documentElement).getPropertyValue(H), L = (k || P).trim();
    return L || F || x;
  }
  function A() {
    !n() || s() || (c(S) && clearTimeout(c(S)), i() > 0 ? j(S, setTimeout(() => j(b, !0), i()), !0) : j(b, !0));
  }
  function E() {
    c(S) && clearTimeout(c(S)), j(b, !1);
  }
  function y() {
    A();
  }
  function C() {
    E();
  }
  function N() {
    A();
  }
  function D() {
    E();
  }
  function G(x) {
    n() && ((x.key === "Enter" || x.key === " ") && (x.preventDefault(), A()), x.key === "Escape" && (x.preventDefault(), E()));
  }
  function Y() {
    if (!c(v) || !c(_) || !c(h) || s()) return;
    const x = c(h).getBoundingClientRect(), V = c(_).getBoundingClientRect();
    let H = 0, F = 0;
    const k = o();
    switch (r()) {
      case "top":
        H = x.top - V.height - k, F = x.left + x.width / 2 - V.width / 2;
        break;
      case "bottom":
        H = x.bottom + k, F = x.left + x.width / 2 - V.width / 2;
        break;
      case "left":
        H = x.top + x.height / 2 - V.height / 2, F = x.left - V.width - k;
        break;
      case "right":
        H = x.top + x.height / 2 - V.height / 2, F = x.right + k;
        break;
    }
    c(v).style.top = `${H + window.scrollY}px`, c(v).style.left = `${F + window.scrollX}px`;
  }
  function Q() {
    var x;
    (x = c(w)) == null || x.disconnect(), j(w, null), c(v) && c(v).parentNode && c(v).parentNode.removeChild(c(v)), j(v, null), j(_, null), j(m, null), c(S) && clearTimeout(c(S));
  }
  yi(Q), We(() => {
    if (!(!c(b) || !n() || s())) {
      if (!c(v)) {
        j(v, document.createElement("div"), !0), c(v).style.position = "absolute", c(v).style.zIndex = "9999", c(v).style.pointerEvents = "none", c(v).style.opacity = "0", c(v).style.transition = `opacity ${a()}ms ease`, c(v).id = g, c(v).setAttribute("role", "tooltip"), document.body.appendChild(c(v)), j(m, c(v).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style"), V = O(l()), H = O(f());
        x.textContent = `
        .bubble {
          --pad-y: ${u()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${V};
          --fg: ${H};
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
      `, c(m).appendChild(x), j(_, document.createElement("div"), !0), c(m).appendChild(c(_)), j(
          w,
          new MutationObserver(() => {
            c(b) && Y();
          }),
          !0
        ), c(w).observe(document.body, { childList: !0, subtree: !0 });
      }
      c(_) && (c(_).className = `bubble ${r()}`, c(_).innerHTML = n()), c(v) && (c(v).style.opacity = "1", Y());
    }
  }), We(() => {
    if (c(b) || !c(v))
      return;
    c(v).style.opacity = "0";
    const x = c(v), V = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), c(v) === x && Q();
      },
      a()
    );
    return () => clearTimeout(V);
  });
  var ie = t_(), U = Se(ie);
  le(U, () => t.children ?? ee), ye(ie, (x) => j(h, x), () => c(h)), pe(() => {
    Qn(ie, "aria-describedby", n() && !s() ? g : void 0), Qn(ie, "aria-haspopup", n() ? "true" : void 0), Qn(ie, "aria-expanded", n() ? c(b) ? "true" : "false" : void 0);
  }), or("mouseenter", ie, y), or("mouseleave", ie, C), or("focus", ie, N), or("blur", ie, D), Ka("keydown", ie, G), T(e, ie), Ne();
}
en(["keydown"]);
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
const Wn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, yr = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
};
var zt;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(zt || (zt = {}));
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
const Kt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, ln = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, Fi = {
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
class Yo extends Mn {
  static get cssClasses() {
    return Kt;
  }
  static get strings() {
    return ln;
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Yo.defaultAdapter), t)), this.observer = null;
  }
  init() {
    this.determinate = !this.adapter.hasClass(Kt.INDETERMINATE_CLASS), this.adapter.addClass(Kt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver((t) => {
      if (!this.determinate)
        for (const n of t)
          n.contentRect && this.calculateAndSetDimensions(n.contentRect.width);
    }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
  }
  setDeterminate(t) {
    if (this.determinate = t, this.determinate) {
      this.adapter.removeClass(Kt.INDETERMINATE_CLASS), this.adapter.setAttribute(ln.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(ln.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(ln.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
      return;
    }
    this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Kt.INDETERMINATE_CLASS), this.adapter.removeAttribute(ln.ARIA_VALUENOW), this.adapter.removeAttribute(ln.ARIA_VALUEMAX), this.adapter.removeAttribute(ln.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
  }
  isDeterminate() {
    return this.determinate;
  }
  setProgress(t) {
    this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(ln.ARIA_VALUENOW, t.toString()));
  }
  getProgress() {
    return this.progress;
  }
  setBuffer(t) {
    this.buffer = t, this.determinate && this.setBufferBarProgress(t);
  }
  getBuffer() {
    return this.buffer;
  }
  open() {
    this.adapter.removeClass(Kt.CLOSED_CLASS), this.adapter.removeClass(Kt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(ln.ARIA_HIDDEN);
  }
  close() {
    this.adapter.addClass(Kt.CLOSED_CLASS), this.adapter.setAttribute(ln.ARIA_HIDDEN, "true");
  }
  isClosed() {
    return this.adapter.hasClass(Kt.CLOSED_CLASS);
  }
  /**
   * Handles the transitionend event emitted after `close()` is called and the
   * opacity fades out. This is so that animations are removed only after the
   * progress indicator is completely hidden.
   */
  handleTransitionEnd() {
    this.adapter.hasClass(Kt.CLOSED_CLASS) && this.adapter.addClass(Kt.CLOSED_ANIMATION_OFF_CLASS);
  }
  destroy() {
    super.destroy(), this.observer && this.observer.disconnect();
  }
  restartAnimation() {
    this.adapter.removeClass(Kt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Kt.ANIMATION_READY_CLASS);
  }
  setPrimaryBarProgress(t) {
    const n = `scaleX(${t})`, r = typeof window < "u" ? gp(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(r, n);
  }
  setBufferBarProgress(t) {
    const n = `${t * 100}%`;
    this.adapter.setBufferBarStyle(ln.FLEX_BASIS, n);
  }
  calculateAndSetDimensions(t) {
    const n = t * Fi.PRIMARY_HALF, r = t * Fi.PRIMARY_FULL, i = t * Fi.SECONDARY_QUARTER, a = t * Fi.SECONDARY_HALF, s = t * Fi.SECONDARY_FULL;
    this.adapter.setStyle("--mdc-linear-progress-primary-half", `${n}px`), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", `${-n}px`), this.adapter.setStyle("--mdc-linear-progress-primary-full", `${r}px`), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", `${-r}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", `${i}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", `${-i}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-half", `${a}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", `${-a}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-full", `${s}px`), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", `${-s}px`), this.restartAnimation();
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
class Ko extends Mn {
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
  constructor(t) {
    super(Object.assign(Object.assign({}, Ko.defaultAdapter), t));
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
  setSelectedRowIds(t) {
    for (let n = 0; n < this.adapter.getRowCount(); n++) {
      const r = this.adapter.getRowIdAtIndex(n);
      let i = !1;
      r && t.indexOf(r) >= 0 && (i = !0), this.adapter.setRowCheckboxCheckedAtIndex(n, i), this.selectRowAtIndex(n, i);
    }
    this.setHeaderRowCheckboxState();
  }
  /**
   * @return Returns array of all row ids.
   */
  getRowIds() {
    const t = [];
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      t.push(this.adapter.getRowIdAtIndex(n));
    return t;
  }
  /**
   * @return Returns array of selected row ids.
   */
  getSelectedRowIds() {
    const t = [];
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      this.adapter.isCheckboxAtRowIndexChecked(n) && t.push(this.adapter.getRowIdAtIndex(n));
    return t;
  }
  /**
   * Handles header row checkbox change event.
   */
  handleHeaderRowCheckboxChange() {
    const t = this.adapter.isHeaderRowCheckboxChecked();
    for (let n = 0; n < this.adapter.getRowCount(); n++)
      this.adapter.setRowCheckboxCheckedAtIndex(n, t), this.selectRowAtIndex(n, t);
    t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
  }
  /**
   * Handles change event originated from row checkboxes.
   */
  handleRowCheckboxChange(t) {
    const n = this.adapter.getRowIndexByChildElement(t.target);
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
  handleSortAction(t) {
    const { columnId: n, columnIndex: r, headerCell: i } = t;
    for (let o = 0; o < this.adapter.getHeaderCellCount(); o++)
      o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, Wn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Wn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, yr.ARIA_SORT, zt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, zt.NONE));
    this.adapter.setClassNameByHeaderCellIndex(r, Wn.HEADER_CELL_SORTED);
    const a = this.adapter.getAttributeByHeaderCellIndex(r, yr.ARIA_SORT);
    let s = zt.NONE;
    a === zt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, Wn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, yr.ARIA_SORT, zt.DESCENDING), s = zt.DESCENDING) : a === zt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, Wn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, yr.ARIA_SORT, zt.ASCENDING), s = zt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, yr.ARIA_SORT, zt.ASCENDING), s = zt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, s), this.adapter.notifySortAction({
      columnId: n,
      columnIndex: r,
      headerCell: i,
      sortValue: s
    });
  }
  /**
   * Handles data table row click event.
   */
  handleRowClick({ rowId: t, row: n, altKey: r, ctrlKey: i, metaKey: a, shiftKey: s }) {
    this.adapter.notifyRowClick({
      rowId: t,
      row: n,
      altKey: r,
      ctrlKey: i,
      metaKey: a,
      shiftKey: s
    });
  }
  /**
   * Shows progress indicator blocking only the table body content when in
   * loading state.
   */
  showProgress() {
    const t = this.adapter.getTableHeaderHeight(), n = this.adapter.getTableContainerHeight() - t, r = t;
    this.adapter.setProgressIndicatorStyles({
      height: `${n}px`,
      top: `${r}px`
    }), this.adapter.addClass(Wn.IN_PROGRESS);
  }
  /**
   * Hides progress indicator when data table is finished loading.
   */
  hideProgress() {
    this.adapter.removeClass(Wn.IN_PROGRESS);
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
  selectRowAtIndex(t, n) {
    n ? (this.adapter.addClassAtRowIndex(t, Wn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Wn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, yr.ARIA_SELECTED, "false"));
  }
}
var n_ = /* @__PURE__ */ new Set([
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
]), r_ = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), i_ = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function a_(e, t) {
  Le(t, !0);
  const n = () => Jn(Q, "$progressClosed", r), [r, i] = gr(), { closest: a } = Go;
  let s = p(t, "use", 19, () => []), o = p(t, "class", 3, ""), l = p(t, "stickyHeader", 3, !1), u = p(t, "sortable", 3, !1), d = p(t, "sort", 15, null), f = p(t, "sortDirection", 15, "ascending"), g = p(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = p(t, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(t, "container$use", 19, () => []), m = p(t, "container$class", 3, ""), _ = p(t, "table$use", 19, () => []), b = p(t, "table$class", 3, ""), S = /* @__PURE__ */ Xe(t, n_), w, O = /* @__PURE__ */ Ee(void 0), A, E = /* @__PURE__ */ Ee(void 0), y = /* @__PURE__ */ Ee(void 0), C = be({}), N = /* @__PURE__ */ Ee(be({ height: "auto", top: "initial" })), D = _e("SMUI:addLayoutListener"), G, Y = !1, Q = Mt(!1), ie = Mt(d());
  We(() => {
    lr(ie, d());
  });
  let U = Mt(f());
  We(() => {
    lr(U, f());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", Q), ue("SMUI:data-table:sortable", u()), ue("SMUI:data-table:sort", ie), ue("SMUI:data-table:sortDirection", U), ue("SMUI:data-table:sortAscendingAriaLabel", g()), ue("SMUI:data-table:sortDescendingAriaLabel", h()), D && (G = D(se));
  let x;
  We(() => {
    t.progress && c(O) && x !== n() && (x = n(), n() ? c(O).hideProgress() : c(O).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    c(O) && Y && c(O).layout();
  }), ue("SMUI:data-table:header:mount", (R) => {
    j(E, R, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    j(E, void 0);
  }), ue("SMUI:data-table:body:mount", (R) => {
    j(y, R, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    j(y, void 0);
  }), _t(() => (j(
    O,
    new Ko({
      addClass: H,
      removeClass: F,
      getHeaderCellElements: () => {
        var R;
        return ((R = c(E)) == null ? void 0 : R.cells.map((B) => B.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = c(E)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, B) => {
        var K;
        return ((K = c(E)) == null ? void 0 : K.orderedCells[R].getAttr(B)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, B, K) => {
        var Fe;
        (Fe = c(E)) == null || Fe.orderedCells[R].addAttr(B, K);
      },
      setClassNameByHeaderCellIndex: (R, B) => {
        var K;
        (K = c(E)) == null || K.orderedCells[R].addClass(B);
      },
      removeClassNameByHeaderCellIndex: (R, B) => {
        var K;
        (K = c(E)) == null || K.orderedCells[R].removeClass(B);
      },
      notifySortAction: (R) => {
        d(R.columnId), f(R.sortValue), ct(ce(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = ce().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        j(N, R, !0);
      },
      addClassAtRowIndex: (R, B) => {
        var K;
        (K = c(y)) == null || K.orderedRows[R].addClass(B);
      },
      getRowCount: () => {
        var R;
        return ((R = c(y)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = c(y)) == null ? void 0 : R.rows.map((B) => B.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var B;
        return ((B = c(y)) == null ? void 0 : B.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var B;
        return ((B = c(y)) == null ? void 0 : B.orderedRows.map((K) => K.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = c(y)) == null ? void 0 : R.rows.filter((B) => B.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var K;
        const B = (K = c(y)) == null ? void 0 : K.orderedRows[R].checkbox;
        return B ? B.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var B;
        const R = (B = c(E)) == null ? void 0 : B.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!ce().querySelector(".mdc-data-table__row-checkbox") || !!ce().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var K;
        const B = (K = c(y)) == null ? void 0 : K.orderedRows[R.rowIndex];
        B && ct(ce(), "SMUIDataTableSelectionChanged", {
          row: B.element,
          rowId: B.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        k(!1), ct(ce(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        k(!1), ct(ce(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => ct(ce(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, B) => {
        var K;
        (K = c(y)) == null || K.orderedRows[R].removeClass(B);
      },
      setAttributeAtRowIndex: (R, B, K) => {
        var Fe;
        (Fe = c(y)) == null || Fe.orderedRows[R].addAttr(B, K);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var K;
        const B = (K = c(E)) == null ? void 0 : K.checkbox;
        B && (B.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: k,
      setRowCheckboxCheckedAtIndex: (R, B) => {
        var Fe;
        const K = (Fe = c(y)) == null ? void 0 : Fe.orderedRows[R].checkbox;
        K && (K.checked = B);
      },
      setSortStatusLabelByHeaderCellIndex: (R, B) => {
      }
    }),
    !0
  ), c(O).init(), c(O).layout(), Y = !0, () => {
    var R;
    (R = c(O)) == null || R.destroy(), j(O, void 0);
  })), yi(() => {
    G && G();
  });
  function V(R) {
    c(O) && c(O).handleRowCheckboxChange(R);
  }
  function H(R) {
    C[R] || (C[R] = !0);
  }
  function F(R) {
    (!(R in C) || C[R]) && (C[R] = !1);
  }
  function k(R) {
    var K;
    const B = (K = c(E)) == null ? void 0 : K.checkbox;
    B && (B.indeterminate = R);
  }
  function P(R) {
    if (!c(O) || !R.detail.target)
      return;
    const B = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    B && Z(B);
  }
  function L(R) {
    if (!c(O) || !R.detail.target)
      return;
    const B = a(R.detail.target, ".mdc-data-table__row");
    B && c(O) && c(O).handleRowClick({ rowId: R.detail.rowId, row: B });
  }
  function Z(R) {
    var at, Wt;
    const B = ((at = c(E)) == null ? void 0 : at.orderedCells) ?? [], K = B.map((_n) => _n.element).indexOf(R);
    if (K === -1)
      return;
    const Fe = B[K].columnId ?? null;
    (Wt = c(O)) == null || Wt.handleSortAction({ columnId: Fe, columnIndex: K, headerCell: R });
  }
  function se() {
    var R;
    return (R = c(O)) == null ? void 0 : R.layout();
  }
  function ce() {
    return w;
  }
  var J = { layout: se, getElement: ce }, $ = i_(), ae = (R) => {
    var B;
    c(O) && c(O).handleHeaderRowCheckboxChange(), (B = t.onSMUIDataTableHeaderCheckboxChange) == null || B.call(t, R);
  }, we = (R) => {
    var B;
    P(R), (B = t.onSMUIDataTableHeaderClick) == null || B.call(t, R);
  }, Ge = (R) => {
    var B;
    L(R), (B = t.onSMUIDataTableRowClick) == null || B.call(t, R);
  }, je = (R) => {
    var B;
    V(R), (B = t.onSMUIDataTableBodyCheckboxChange) == null || B.call(t, R);
  };
  tt(
    $,
    (R, B) => ({
      class: R,
      ...B,
      onSMUIDataTableHeaderCheckboxChange: ae,
      onSMUIDataTableHeaderClick: we,
      onSMUIDataTableRowClick: Ge,
      onSMUIDataTableBodyCheckboxChange: je
    }),
    [
      () => Ye({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [o()]: !0
      }),
      () => $a(S, ["container$", "table$"])
    ]
  );
  var Me = Se($);
  tt(Me, (R, B) => ({ class: R, ...B }), [
    () => Ye({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => dn(S, "container$")
  ]);
  var ke = Se(Me);
  tt(ke, (R, B) => ({ class: R, ...B }), [
    () => Ye({ "mdc-data-table__table": !0, [b()]: !0 }),
    () => dn(S, "table$")
  ]);
  var Oe = Se(ke);
  le(Oe, () => t.children ?? ee), $e(ke, (R, B) => q == null ? void 0 : q(R, B), _), ye(Me, (R) => A = R, () => A), $e(Me, (R, B) => q == null ? void 0 : q(R, B), v);
  var Ze = ne(Me, 2);
  {
    var fe = (R) => {
      var B = r_(), K = ne(Se(B), 2);
      le(K, () => t.progress ?? ee), pe((Fe) => Ot(B, Fe), [
        () => Object.entries(c(N)).map(([Fe, at]) => `${Fe}: ${at};`).join(" ")
      ]), T(R, B);
    };
    ge(Ze, (R) => {
      t.progress && R(fe);
    });
  }
  var he = ne(Ze, 2);
  le(he, () => t.paginate ?? ee), ye($, (R) => w = R, () => w), $e($, (R, B) => q == null ? void 0 : q(R, B), s), T(e, $);
  var Te = Ne(J);
  return i(), Te;
}
var s_ = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), o_ = /* @__PURE__ */ de("<thead><!></thead>");
function l_(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = /* @__PURE__ */ Xe(t, s_), i, a = /* @__PURE__ */ Ee(void 0), s = [];
  const o = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (b) => {
    j(a, b, !0), l && l(b);
  });
  const u = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (b) => {
    j(a, void 0), u && u(b);
  }), ue("SMUI:data-table:cell:mount", (b) => {
    s.push(b), o.set(b.element, b);
  }), ue("SMUI:data-table:cell:unmount", (b) => {
    const S = s.findIndex((w) => w === b);
    S !== -1 && s.splice(S, 1), o.delete(b.element);
  });
  const d = _e("SMUI:data-table:header:mount"), f = _e("SMUI:data-table:header:unmount");
  _t(() => {
    const b = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return g();
      },
      get checkbox() {
        return c(a);
      }
    };
    return d && d(b), () => {
      f && f(b);
    };
  });
  function g() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((b) => o.get(b)).filter((b) => b && b._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var v = { getElement: h }, m = o_();
  tt(m, () => ({ ...r }));
  var _ = Se(m);
  return le(_, () => t.children ?? ee), ye(m, (b) => i = b, () => i), $e(m, (b, S) => q == null ? void 0 : q(b, S), n), T(e, m), Ne(v);
}
var u_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "children"
]), c_ = /* @__PURE__ */ de("<tbody><!></tbody>");
function d_(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = /* @__PURE__ */ Xe(t, u_), a, s = [];
  const o = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !1), ue("SMUI:data-table:row:mount", (m) => {
    s.push(m), o.set(m.element, m);
  }), ue("SMUI:data-table:row:unmount", (m) => {
    const _ = s.findIndex((b) => b === m);
    _ !== -1 && s.splice(_, 1), o.delete(m.element);
  });
  const l = _e("SMUI:data-table:body:mount"), u = _e("SMUI:data-table:body:unmount");
  _t(() => {
    const m = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(m), () => {
      u && u(m);
    };
  });
  function d() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((m) => o.get(m)).filter((m) => m && m._smui_data_table_row_accessor);
  }
  function f() {
    return a;
  }
  var g = { getElement: f }, h = c_();
  tt(h, (m) => ({ class: m, ...i }), [
    () => Ye({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = Se(h);
  return le(v, () => t.children ?? ee), ye(h, (m) => a = m, () => a), $e(h, (m, _) => q == null ? void 0 : q(m, _), n), T(e, h), Ne(g);
}
let f_ = 0;
var h_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "rowId",
  "children"
]), v_ = /* @__PURE__ */ de("<tr><!></tr>");
function Na(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "rowId", 19, () => "SMUI-data-table-row-" + f_++), a = /* @__PURE__ */ Xe(t, h_), s, o = /* @__PURE__ */ Ee(void 0), l = be({}), u = be({}), d = _e("SMUI:data-table:row:header");
  const f = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (D) => {
    j(o, D, !0), f && f(D);
  });
  const g = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (D) => {
    j(o, void 0), g && g(D);
  });
  const h = _e("SMUI:data-table:row:mount"), v = _e("SMUI:data-table:row:unmount");
  _t(() => {
    const D = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return A();
      },
      get checkbox() {
        return c(o);
      },
      get rowId() {
      },
      get selected() {
        return (c(o) && c(o).checked) ?? !1;
      },
      addClass: m,
      removeClass: _,
      getAttr: b,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return A();
      },
      get checkbox() {
        return c(o);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (c(o) && c(o).checked) ?? !1;
      },
      addClass: m,
      removeClass: _,
      getAttr: b,
      addAttr: S
    };
    return h && h(D), () => {
      v && v(D);
    };
  });
  function m(D) {
    l[D] || (l[D] = !0);
  }
  function _(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function b(D) {
    return D in u ? u[D] ?? null : A().getAttribute(D);
  }
  function S(D, G) {
    u[D] !== G && (u[D] = G);
  }
  function w(D) {
    ct(A(), "SMUIDataTableHeaderClick", D);
  }
  function O(D) {
    ct(A(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function A() {
    return s;
  }
  var E = { getElement: A }, y = v_(), C = (D) => {
    var G;
    d ? w(D) : O(D), (G = t.onclick) == null || G.call(t, D);
  };
  tt(
    y,
    (D) => ({
      class: D,
      "aria-selected": c(o) ? c(o).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: C
    }),
    [
      () => Ye({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && c(o) && c(o).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var N = Se(y);
  return le(N, () => t.children ?? ee), ye(y, (D) => s = D, () => s), $e(y, (D, G) => q == null ? void 0 : q(D, G), n), T(e, y), Ne(E);
}
let g_ = 0;
var m_ = /* @__PURE__ */ new Set([
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
]), p_ = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), __ = /* @__PURE__ */ de("<th><!></th>"), b_ = /* @__PURE__ */ de("<td><!></td>");
function Gi(e, t) {
  Le(t, !0);
  const n = () => Jn(b, "$sort", i), r = () => Jn(S, "$sortDirection", i), [i, a] = gr();
  let s = _e("SMUI:data-table:row:header"), o = p(t, "use", 19, () => []), l = p(t, "class", 3, ""), u = p(t, "numeric", 3, !1), d = p(t, "checkbox", 3, !1), f = p(t, "columnId", 19, () => s ? "SMUI-data-table-column-" + g_++ : "SMUI-data-table-unused"), g = p(t, "sortable", 19, () => _e("SMUI:data-table:sortable")), h = /* @__PURE__ */ Xe(t, m_), v, m = be({}), _ = be({}), b = _e("SMUI:data-table:sort"), S = _e("SMUI:data-table:sortDirection"), w = _e("SMUI:data-table:sortAscendingAriaLabel"), O = _e("SMUI:data-table:sortDescendingAriaLabel");
  g() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const A = _e("SMUI:data-table:cell:mount"), E = _e("SMUI:data-table:cell:unmount");
  _t(() => {
    const k = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return Q();
      },
      get columnId() {
        return f();
      },
      addClass: y,
      removeClass: C,
      getAttr: N,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return Q();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: C,
      getAttr: N,
      addAttr: D
    };
    return A && A(k), () => {
      E && E(k);
    };
  });
  function y(k) {
    m[k] || (m[k] = !0);
  }
  function C(k) {
    (!(k in m) || m[k]) && (m[k] = !1);
  }
  function N(k) {
    return k in _ ? _[k] ?? null : Q().getAttribute(k);
  }
  function D(k, P) {
    _[k] !== P && (_[k] = P);
  }
  function G(k) {
    ct(Q(), "SMUIDataTableHeaderCheckboxChange", k);
  }
  function Y(k) {
    ct(Q(), "SMUIDataTableBodyCheckboxChange", k);
  }
  function Q() {
    return v;
  }
  var ie = { getElement: Q }, U = re(), x = W(U);
  {
    var V = (k) => {
      var P = __(), L = (J) => {
        var $;
        d() && G(J), ($ = t.onchange) == null || $.call(t, J);
      };
      tt(
        P,
        (J) => ({
          class: J,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": g() ? n() === f() ? r() : "none" : void 0,
          ..._,
          ...h,
          onchange: L
        }),
        [
          () => Ye({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": g(),
            "mdc-data-table__header-cell--sorted": g() && n() === f(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var Z = Se(P);
      {
        var se = (J) => {
          var $ = p_(), ae = Se($);
          le(ae, () => t.children ?? ee);
          var we = ne(ae, 2), Ge = Xr(we, !0);
          pe(() => {
            Qn(we, "id", `${f() ?? ""}-status-label`), ot(Ge, n() === f() ? r() === "ascending" ? w : O : "");
          }), T(J, $);
        }, ce = (J) => {
          var $ = re(), ae = W($);
          le(ae, () => t.children ?? ee), T(J, $);
        };
        ge(Z, (J) => {
          g() ? J(se) : J(ce, -1);
        });
      }
      ye(P, (J) => v = J, () => v), $e(P, (J, $) => q == null ? void 0 : q(J, $), o), T(k, P);
    }, H = (k) => {
      var P = b_(), L = (se) => {
        var ce;
        d() && Y(se), (ce = t.onchange) == null || ce.call(t, se);
      };
      tt(
        P,
        (se) => ({
          class: se,
          ..._,
          ...h,
          onchange: L
        }),
        [
          () => Ye({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var Z = Se(P);
      le(Z, () => t.children ?? ee), ye(P, (se) => v = se, () => v), $e(P, (se, ce) => q == null ? void 0 : q(se, ce), o), T(k, P);
    };
    ge(x, (k) => {
      s ? k(V) : k(H, -1);
    });
  }
  T(e, U);
  var F = Ne(ie);
  return a(), F;
}
var E_ = /* @__PURE__ */ new Set([
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
]), y_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function S_(e, t) {
  Le(t, !0);
  const [n, r] = gr();
  let i = p(t, "use", 19, () => []), a = p(t, "class", 3, ""), s = p(t, "style", 3, ""), o = p(t, "indeterminate", 3, !1), l = p(t, "closed", 3, !1), u = p(t, "progress", 3, 0), d = p(t, "buffer", 3, void 0), f = /* @__PURE__ */ Xe(t, E_), g, h = /* @__PURE__ */ Ee(void 0), v = be({}), m = be({}), _ = be({}), b = be({}), S = be({}), w = _e("SMUI:linear-progress:context"), O = _e("SMUI:linear-progress:closed");
  We(() => {
    O && lr(O, l());
  }), We(() => {
    c(h) && c(h).isDeterminate() !== !o() && c(h).setDeterminate(!o());
  }), We(() => {
    c(h) && c(h).getProgress() !== u() && c(h).setProgress(u());
  }), We(() => {
    c(h) && (d() == null ? c(h).setBuffer(1) : c(h).setBuffer(d()));
  }), We(() => {
    c(h) && (l() ? c(h).close() : c(h).open());
  }), _t(() => (j(
    h,
    new Yo({
      addClass: E,
      forceLayout: () => {
        Q().getBoundingClientRect();
      },
      setBufferBarStyle: G,
      setPrimaryBarStyle: Y,
      hasClass: A,
      removeAttribute: N,
      removeClass: y,
      setAttribute: C,
      setStyle: D,
      attachResizeObserver: (P) => {
        const L = window.ResizeObserver;
        if (L) {
          const Z = new L(P);
          return Z.observe(Q()), Z;
        }
        return null;
      },
      getWidth: () => Q().offsetWidth
    }),
    !0
  ), c(h).init(), () => {
    var P;
    (P = c(h)) == null || P.destroy(), j(h, void 0);
  }));
  function A(P) {
    return P in v ? v[P] : Q().classList.contains(P);
  }
  function E(P) {
    v[P] || (v[P] = !0);
  }
  function y(P) {
    (!(P in v) || v[P]) && (v[P] = !1);
  }
  function C(P, L) {
    m[P] !== L && (m[P] = L);
  }
  function N(P) {
    (!(P in m) || m[P] != null) && (m[P] = void 0);
  }
  function D(P, L) {
    _[P] != L && (L === "" || L == null ? delete _[P] : _[P] = L);
  }
  function G(P, L) {
    b[P] != L && (L === "" || L == null ? delete b[P] : b[P] = L);
  }
  function Y(P, L) {
    S[P] != L && (L === "" || L == null ? delete S[P] : S[P] = L);
  }
  function Q() {
    return g;
  }
  var ie = { getElement: Q }, U = y_(), x = (P) => {
    var L;
    c(h) && c(h).handleTransitionEnd(), (L = t.ontransitionend) == null || L.call(t, P);
  };
  tt(
    U,
    (P, L) => ({
      class: P,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": o() ? void 0 : u(),
      ...m,
      ...f,
      ontransitionend: x
    }),
    [
      () => Ye({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": o(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": w === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(_).map(([P, L]) => `${P}: ${L};`).concat([s()]).join(" ")
    ]
  );
  var V = Se(U), H = Se(V), F = ne(V, 2);
  ye(U, (P) => g = P, () => g), $e(U, (P, L) => q == null ? void 0 : q(P, L), i), pe(
    (P, L) => {
      Ot(H, P), Ot(F, L);
    },
    [
      () => Object.entries(b).map(([P, L]) => `${P}: ${L};`).join(" "),
      () => Object.entries(S).map(([P, L]) => `${P}: ${L};`).join(" ")
    ]
  ), T(e, U);
  var k = Ne(ie);
  return r(), k;
}
en(["click"]);
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
var mu;
(function(e) {
  e.PROCESSING = "mdc-switch--processing", e.SELECTED = "mdc-switch--selected", e.UNSELECTED = "mdc-switch--unselected";
})(mu || (mu = {}));
var pu;
(function(e) {
  e.RIPPLE = ".mdc-switch__ripple";
})(pu || (pu = {}));
en(["click"]);
function mo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var A_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
mo({}, A_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Pa, _u = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Pa = {}, mo(Pa, _u.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), mo(Pa, _u.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
en([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
en(["click"]);
const I_ = 4e3;
function T_() {
  let e = be({ items: [] }), t = 0;
  const n = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, r = (i, a, s, o = I_) => {
    const l = t++, u = { id: l, summary: a, detail: s, type: i };
    return e.items = [...e.items, u], setTimeout(
      () => {
        n(l);
      },
      o
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return e;
    },
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: n
  };
}
T_();
en(["click"]);
en(["click"]);
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
const sn = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space"
}, xi = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
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
const wi = /* @__PURE__ */ new Set();
wi.add(sn.ARROW_LEFT_KEY);
wi.add(sn.ARROW_RIGHT_KEY);
wi.add(sn.END_KEY);
wi.add(sn.HOME_KEY);
wi.add(sn.ENTER_KEY);
wi.add(sn.SPACE_KEY);
const Oi = /* @__PURE__ */ new Map();
Oi.set(xi.ARROW_LEFT_KEYCODE, sn.ARROW_LEFT_KEY);
Oi.set(xi.ARROW_RIGHT_KEYCODE, sn.ARROW_RIGHT_KEY);
Oi.set(xi.END_KEYCODE, sn.END_KEY);
Oi.set(xi.HOME_KEYCODE, sn.HOME_KEY);
Oi.set(xi.ENTER_KEYCODE, sn.ENTER_KEY);
Oi.set(xi.SPACE_KEYCODE, sn.SPACE_KEY);
en(["click"]);
en(["change", "click"]);
var C_ = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), x_ = /* @__PURE__ */ Ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), w_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), O_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), R_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), Ds = /* @__PURE__ */ de("<!> <!>", 1), L_ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>');
function N_(e, t) {
  Le(t, !0);
  const n = () => Jn(_, "$sortColumn", a), r = () => Jn(b, "$sortDirection", a), i = () => Jn(m, "$filteredData", a), [a, s] = gr();
  let o = p(t, "loadingDone", 15, !0), l = p(t, "label", 19, Dp), u = p(t, "columnDefs", 19, () => []), d = p(t, "rowData", 31, () => be([])), f = p(t, "rowActions", 19, () => []), g = p(t, "searchInputLabel", 3, "Search"), h = p(t, "emptyText", 3, "No data available"), v = be({ name: "", color: "", number: "" }), m = Mt([]), _ = Mt(null), b = Mt(null), S = /* @__PURE__ */ me(() => u().some((E) => E.filter));
  t.store.store.subscribe((E) => {
    d([...E]), w();
  });
  function w() {
    let E = d().filter((y) => u().every((C) => {
      const N = v[C.field], D = C.filterValueGetter ? C.filterValueGetter(y) : y[C.field];
      return N ? C.filterType === "number" ? D == N : D.toString().toLowerCase().includes(N.toLowerCase()) : !0;
    }));
    E = O(E), m.set(E);
  }
  function O(E) {
    let y, C;
    return _.subscribe((N) => y = N), b.subscribe((N) => C = N), !y || !C ? E : E.sort((N, D) => {
      let G = N[y], Y = D[y];
      return G == null && (G = ""), Y == null && (Y = ""), C === "asc" ? G.toString().localeCompare(Y.toString()) : Y.toString().localeCompare(G.toString());
    });
  }
  function A(E) {
    _.update((y) => {
      if (y === E)
        b.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return b.set("asc"), E;
      return E;
    }), w();
  }
  m.set(d()), a_(e, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (y) => {
      S_(y, {
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
    children: (y, C) => {
      var N = Ds(), D = W(N);
      l_(D, {
        children: (Y, Q) => {
          var ie = Ds(), U = W(ie);
          Na(U, {
            class: "header-title-row",
            children: (H, F) => {
              var k = re(), P = W(k);
              Pi(P, 17, u, Aa, (L, Z) => {
                Gi(L, {
                  onclick: () => c(Z).sortable && A(c(Z).field),
                  get style() {
                    return c(Z).headerStyle;
                  },
                  children: (se, ce) => {
                    var J = w_(), $ = Se(J), ae = Se($), we = Xr(ae, !0), Ge = ne(ae, 2);
                    {
                      var je = (Me) => {
                        var ke = re(), Oe = W(ke);
                        {
                          var Ze = (fe) => {
                            var he = re(), Te = W(he);
                            {
                              var R = (K) => {
                                var Fe = C_();
                                T(K, Fe);
                              }, B = (K) => {
                                var Fe = x_();
                                T(K, Fe);
                              };
                              ge(Te, (K) => {
                                r() === "asc" ? K(R) : r() === "desc" && K(B, 1);
                              });
                            }
                            T(fe, he);
                          };
                          ge(Oe, (fe) => {
                            n() === c(Z).field && r() !== null && fe(Ze);
                          });
                        }
                        T(Me, ke);
                      };
                      ge(Ge, (Me) => {
                        c(Z).sortable && Me(je);
                      });
                    }
                    pe(() => {
                      Ot(J, `min-width: ${c(Z).minWidth ?? 0 ?? ""}`), ot(we, c(Z).headerName);
                    }), T(se, J);
                  },
                  $$slots: { default: !0 }
                });
              }), T(H, k);
            },
            $$slots: { default: !0 }
          });
          var x = ne(U, 2);
          {
            var V = (H) => {
              Na(H, {
                class: "header-filter-row",
                children: (F, k) => {
                  var P = re(), L = W(P);
                  Pi(L, 17, u, Aa, (Z, se) => {
                    Gi(Z, {
                      children: (ce, J) => {
                        var $ = re(), ae = W($);
                        {
                          var we = (Ge) => {
                            var je = Ds(), Me = W(je);
                            {
                              var ke = (fe) => {
                                var he = O_();
                                pe(() => Qn(he, "placeholder", `${g()} ${c(se).headerName}`)), Ka("input", he, () => w()), ro(he, () => v[c(se).field], (Te) => v[c(se).field] = Te), T(fe, he);
                              };
                              ge(Me, (fe) => {
                                c(se).filterType === "text" && fe(ke);
                              });
                            }
                            var Oe = ne(Me, 2);
                            {
                              var Ze = (fe) => {
                                var he = R_();
                                pe(() => Qn(he, "placeholder", `${g()} ${c(se).headerName}`)), Ka("input", he, () => w()), ro(he, () => v[c(se).field], (Te) => v[c(se).field] = Te), T(fe, he);
                              };
                              ge(Oe, (fe) => {
                                c(se).filterType === "number" && fe(Ze);
                              });
                            }
                            T(Ge, je);
                          };
                          ge(ae, (Ge) => {
                            c(se).filter && Ge(we);
                          });
                        }
                        T(ce, $);
                      },
                      $$slots: { default: !0 }
                    });
                  }), T(F, P);
                },
                $$slots: { default: !0 }
              });
            };
            ge(x, (H) => {
              c(S) && H(V);
            });
          }
          T(Y, ie);
        },
        $$slots: { default: !0 }
      });
      var G = ne(D, 2);
      d_(G, {
        children: (Y, Q) => {
          var ie = re(), U = W(ie);
          {
            var x = (H) => {
              Na(H, {
                children: (F, k) => {
                  Gi(F, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (P, L) => {
                      var Z = yt();
                      pe(() => ot(Z, h())), T(P, Z);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, V = (H) => {
              var F = re(), k = W(F);
              Pi(k, 1, i, Aa, (P, L) => {
                Na(P, {
                  children: (Z, se) => {
                    var ce = re(), J = W(ce);
                    Pi(J, 17, u, ($) => $.field, ($, ae) => {
                      var we = re(), Ge = W(we);
                      {
                        var je = (ke) => {
                          Gi(ke, {
                            children: (Oe, Ze) => {
                              var fe = L_();
                              Pi(fe, 21, f, Aa, (he, Te) => {
                                var R = re(), B = W(R);
                                {
                                  var K = (at) => {
                                    gu(at, {
                                      get content() {
                                        return c(Te).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (Wt, _n) => {
                                        {
                                          let kn = /* @__PURE__ */ me(() => c(Te).disabled(c(L)));
                                          wm(Wt, {
                                            get iconComponent() {
                                              return c(Te).iconComponent;
                                            },
                                            get iconStyles() {
                                              return c(Te).iconStyles;
                                            },
                                            callback: () => c(Te).callback(c(L)),
                                            get disabled() {
                                              return c(kn);
                                            },
                                            get ariaLabel() {
                                              return c(Te).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Fe = (at) => {
                                    gu(at, {
                                      get content() {
                                        return c(Te).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (Wt, _n) => {
                                        {
                                          let kn = /* @__PURE__ */ me(() => c(Te).disabled(c(L)));
                                          Sr(Wt, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => c(Te).callback(c(L)),
                                            get disabled() {
                                              return c(kn);
                                            },
                                            get ariaLabel() {
                                              return c(Te).ariaLabel;
                                            },
                                            children: (Ri, te) => {
                                              var z = re(), Qe = W(z);
                                              {
                                                var M = (qe) => {
                                                  fd(qe, { svgStyles: "margin: unset" });
                                                }, X = (qe) => {
                                                  go(qe, { svgStyles: "margin: unset" });
                                                }, rt = (qe) => {
                                                  Fp(qe, { svgStyles: "margin: unset" });
                                                }, on = (qe) => {
                                                  Vp(qe, { svgStyles: "margin: unset" });
                                                }, Vr = (qe) => {
                                                  Yp(qe, { svgStyles: "margin: unset" });
                                                }, lt = (qe) => {
                                                  zp(qe, { svgStyles: "margin: unset" });
                                                }, Tt = (qe) => {
                                                  Zp(qe, { svgStyles: "margin: unset" });
                                                }, qt = (qe) => {
                                                  Jp(qe, { svgStyles: "margin: unset" });
                                                }, tr = (qe) => {
                                                  hd(qe, { svgStyles: "margin: unset" });
                                                };
                                                ge(Qe, (qe) => {
                                                  c(Te).icon === "add" ? qe(M) : c(Te).icon === "cancel" ? qe(X, 1) : c(Te).icon === "download" ? qe(rt, 2) : c(Te).icon === "find-in-page" ? qe(on, 3) : c(Te).icon === "remove" ? qe(Vr, 4) : c(Te).icon === "edit" ? qe(lt, 5) : c(Te).icon === "delete" ? qe(Tt, 6) : c(Te).icon === "archive" ? qe(qt, 7) : qe(tr, -1);
                                                });
                                              }
                                              T(Ri, z);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ge(B, (at) => {
                                    c(Te).iconComponent ? at(K) : at(Fe, -1);
                                  });
                                }
                                T(he, R);
                              }), T(Oe, fe);
                            },
                            $$slots: { default: !0 }
                          });
                        }, Me = (ke) => {
                          Gi(ke, {
                            get numeric() {
                              return c(ae).numeric;
                            },
                            get style() {
                              return c(ae).cellStyle;
                            },
                            children: (Oe, Ze) => {
                              var fe = re(), he = W(fe);
                              {
                                var Te = (K) => {
                                  const Fe = /* @__PURE__ */ me(() => c(ae).cellRenderer);
                                  var at = re(), Wt = W(at);
                                  Si(Wt, () => c(Fe), (_n, kn) => {
                                    kn(_n, pt(
                                      {
                                        get row() {
                                          return c(L);
                                        },
                                        get value() {
                                          return c(L)[c(ae).field];
                                        },
                                        get col() {
                                          return c(ae);
                                        }
                                      },
                                      () => c(ae).cellRendererProps ?? {}
                                    ));
                                  }), T(K, at);
                                }, R = (K) => {
                                  var Fe = yt();
                                  pe((at) => ot(Fe, at), [
                                    () => c(ae).valueFormatter(c(L)[c(ae).field])
                                  ]), T(K, Fe);
                                }, B = (K) => {
                                  var Fe = yt();
                                  pe(() => ot(Fe, c(L)[c(ae).field] ?? "")), T(K, Fe);
                                };
                                ge(he, (K) => {
                                  c(ae).cellRenderer ? K(Te) : c(ae).valueFormatter ? K(R, 1) : K(B, -1);
                                });
                              }
                              T(Oe, fe);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ge(Ge, (ke) => {
                          c(ae).field === "actions" ? ke(je) : ke(Me, -1);
                        });
                      }
                      T($, we);
                    }), T(Z, ce);
                  },
                  $$slots: { default: !0 }
                });
              }), T(H, F);
            };
            ge(U, (H) => {
              i().length === 0 ? H(x) : H(V, -1);
            });
          }
          T(Y, ie);
        },
        $$slots: { default: !0 }
      }), T(y, N);
    },
    $$slots: { progress: !0, default: !0 }
  }), Ne(), s();
}
en(["input"]);
var P_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "variant",
  "padded",
  "children"
]), H_ = /* @__PURE__ */ de("<div><!></div>");
function D_(e, t) {
  Le(t, !0);
  let n = p(t, "use", 19, () => []), r = p(t, "class", 3, ""), i = p(t, "variant", 3, "raised"), a = p(t, "padded", 3, !1), s = /* @__PURE__ */ Xe(t, P_), o;
  function l() {
    return o;
  }
  var u = { getElement: l }, d = H_();
  tt(d, (g) => ({ class: g, ...s }), [
    () => Ye({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = Se(d);
  return le(f, () => t.children ?? ee), ye(d, (g) => o = g, () => o), $e(d, (g, h) => q == null ? void 0 : q(g, h), n), T(e, d), Ne(u);
}
function dt(e) {
  return typeof e == "function";
}
function vd(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ms = vd(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function bu(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var zo = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var o = aa(s), l = o.next(); !l.done; l = o.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (m) {
            t = { error: m };
          } finally {
            try {
              l && !l.done && (n = o.return) && n.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (dt(d))
        try {
          d();
        } catch (m) {
          a = m instanceof Ms ? m.errors : [m];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var g = aa(f), h = g.next(); !h.done; h = g.next()) {
            var v = h.value;
            try {
              Eu(v);
            } catch (m) {
              a = a ?? [], m instanceof Ms ? a = Zr(Zr([], so(a)), so(m.errors)) : a.push(m);
            }
          }
        } catch (m) {
          r = { error: m };
        } finally {
          try {
            h && !h.done && (i = g.return) && i.call(g);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Ms(a);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Eu(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && bu(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && bu(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
zo.EMPTY;
function gd(e) {
  return e instanceof zo || e && "closed" in e && dt(e.remove) && dt(e.add) && dt(e.unsubscribe);
}
function Eu(e) {
  dt(e) ? e() : e.unsubscribe();
}
var M_ = {
  Promise: void 0
}, B_ = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Zr([e, t], so(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function md(e) {
  B_.setTimeout(function() {
    throw e;
  });
}
function yu() {
}
function U_(e) {
  e();
}
var Xo = function(e) {
  Ur(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, gd(n) && n.add(r)) : r.destination = G_, r;
  }
  return t.create = function(n, r, i) {
    return new po(n, r, i);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(zo), k_ = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        Ha(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Ha(r);
      }
    else
      Ha(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Ha(n);
      }
  }, e;
}(), po = function(e) {
  Ur(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, s;
    return dt(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new k_(s), a;
  }
  return t;
}(Xo);
function Ha(e) {
  md(e);
}
function F_(e) {
  throw e;
}
var G_ = {
  closed: !0,
  next: yu,
  error: F_,
  complete: yu
}, Zo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pd(e) {
  return e;
}
function V_(e) {
  return e.length === 0 ? pd : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var pn = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, a = W_(t) ? t : new po(t, n, r);
    return U_(function() {
      var s = i, o = s.operator, l = s.source;
      a.add(o ? o.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Su(n), new n(function(i, a) {
      var s = new po({
        next: function(o) {
          try {
            t(o);
          } catch (l) {
            a(l), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(s);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[Zo] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return V_(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Su(t), new t(function(r, i) {
      var a;
      n.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Su(e) {
  var t;
  return (t = e ?? M_.Promise) !== null && t !== void 0 ? t : Promise;
}
function j_(e) {
  return e && dt(e.next) && dt(e.error) && dt(e.complete);
}
function W_(e) {
  return e && e instanceof Xo || j_(e) && gd(e);
}
function q_(e) {
  return dt(e == null ? void 0 : e.lift);
}
function Fr(e) {
  return function(t) {
    if (q_(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function gi(e, t, n, r, i) {
  return new Y_(e, t, n, r, i);
}
var Y_ = function(e) {
  Ur(t, e);
  function t(n, r, i, a, s, o) {
    var l = e.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = o, l._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : e.prototype._next, l._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, l;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Xo), K_ = new pn(function(e) {
  return e.complete();
});
function z_(e) {
  return e && dt(e.schedule);
}
function X_(e) {
  return e[e.length - 1];
}
function Z_(e) {
  return z_(X_(e)) ? e.pop() : void 0;
}
var _d = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function bd(e) {
  return dt(e == null ? void 0 : e.then);
}
function Ed(e) {
  return dt(e[Zo]);
}
function yd(e) {
  return Symbol.asyncIterator && dt(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Sd(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Q_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ad = Q_();
function Id(e) {
  return dt(e == null ? void 0 : e[Ad]);
}
function Td(e) {
  return Gh(this, arguments, function() {
    var n, r, i, a;
    return kc(this, function(s) {
      switch (s.label) {
        case 0:
          n = e.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Qr(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Qr(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Qr(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
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
function Cd(e) {
  return dt(e == null ? void 0 : e.getReader);
}
function ya(e) {
  if (e instanceof pn)
    return e;
  if (e != null) {
    if (Ed(e))
      return J_(e);
    if (_d(e))
      return $_(e);
    if (bd(e))
      return e0(e);
    if (yd(e))
      return xd(e);
    if (Id(e))
      return t0(e);
    if (Cd(e))
      return n0(e);
  }
  throw Sd(e);
}
function J_(e) {
  return new pn(function(t) {
    var n = e[Zo]();
    if (dt(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function $_(e) {
  return new pn(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function e0(e) {
  return new pn(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, md);
  });
}
function t0(e) {
  return new pn(function(t) {
    var n, r;
    try {
      for (var i = aa(e), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (t.next(s), t.closed)
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
    t.complete();
  });
}
function xd(e) {
  return new pn(function(t) {
    r0(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function n0(e) {
  return xd(Td(e));
}
function r0(e, t) {
  var n, r, i, a;
  return Fh(this, void 0, void 0, function() {
    var s, o;
    return kc(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Vh(e), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (s = r.value, t.next(s), t.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return o = l.sent(), i = { error: o }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function Hr(e, t, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(a), !i)
    return a;
}
function wd(e, t) {
  return t === void 0 && (t = 0), Fr(function(n, r) {
    n.subscribe(gi(r, function(i) {
      return Hr(r, e, function() {
        return r.next(i);
      }, t);
    }, function() {
      return Hr(r, e, function() {
        return r.complete();
      }, t);
    }, function(i) {
      return Hr(r, e, function() {
        return r.error(i);
      }, t);
    }));
  });
}
function Od(e, t) {
  return t === void 0 && (t = 0), Fr(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function i0(e, t) {
  return ya(e).pipe(Od(t), wd(t));
}
function a0(e, t) {
  return ya(e).pipe(Od(t), wd(t));
}
function s0(e, t) {
  return new pn(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function o0(e, t) {
  return new pn(function(n) {
    var r;
    return Hr(n, t, function() {
      r = e[Ad](), Hr(n, t, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (o) {
          n.error(o);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return dt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Rd(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new pn(function(n) {
    Hr(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      Hr(n, t, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function l0(e, t) {
  return Rd(Td(e), t);
}
function u0(e, t) {
  if (e != null) {
    if (Ed(e))
      return i0(e, t);
    if (_d(e))
      return s0(e, t);
    if (bd(e))
      return a0(e, t);
    if (yd(e))
      return Rd(e, t);
    if (Id(e))
      return o0(e, t);
    if (Cd(e))
      return l0(e, t);
  }
  throw Sd(e);
}
function c0(e, t) {
  return t ? u0(e, t) : ya(e);
}
function d0() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Z_(e);
  return c0(e, n);
}
function xn(e, t) {
  return Fr(function(n, r) {
    var i = 0;
    n.subscribe(gi(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function f0(e, t, n, r, i, a, s, o) {
  var l = [], u = 0, d = 0, f = !1, g = function() {
    f && !l.length && !u && t.complete();
  }, h = function(m) {
    return u < r ? v(m) : l.push(m);
  }, v = function(m) {
    u++;
    var _ = !1;
    ya(n(m, d++)).subscribe(gi(t, function(b) {
      t.next(b);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          u--;
          for (var b = function() {
            var S = l.shift();
            s || v(S);
          }; l.length && u < r; )
            b();
          g();
        } catch (S) {
          t.error(S);
        }
    }));
  };
  return e.subscribe(gi(t, h, function() {
    f = !0, g();
  })), function() {
  };
}
function _o(e, t, n) {
  return n === void 0 && (n = 1 / 0), dt(t) ? _o(function(r, i) {
    return xn(function(a, s) {
      return t(r, a, i, s);
    })(ya(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), Fr(function(r, i) {
    return f0(r, i, e, n);
  }));
}
function h0(e, t) {
  return dt(t) ? _o(e, t, 1) : _o(e, 1);
}
function Au(e) {
  return e <= 0 ? function() {
    return K_;
  } : Fr(function(t, n) {
    var r = 0;
    t.subscribe(gi(n, function(i) {
      ++r <= e && (n.next(i), e <= r && n.complete());
    }));
  });
}
function Iu(e) {
  return Fr(function(t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Tu(e, t, n) {
  var r = dt(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Fr(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var o = !0;
    i.subscribe(gi(a, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), a.next(l);
    }, function() {
      var l;
      o = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var u;
      o = !1, (u = r.error) === null || u === void 0 || u.call(r, l), a.error(l);
    }, function() {
      var l, u;
      o && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : pd;
}
function Ld(e) {
  switch (e.responseType) {
    case "json": {
      if ("response" in e)
        return e.response;
      var t = e;
      return JSON.parse(t.responseText);
    }
    case "document":
      return e.responseXML;
    case "text":
    default: {
      if ("response" in e)
        return e.response;
      var t = e;
      return t.responseText;
    }
  }
}
var v0 = /* @__PURE__ */ function() {
  function e(t, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var o = n.getAllResponseHeaders();
    this.responseHeaders = o ? o.split(`
`).reduce(function(d, f) {
      var g = f.indexOf(": ");
      return d[f.slice(0, g)] = f.slice(g + 2), d;
    }, {}) : {}, this.response = Ld(n);
    var l = t.loaded, u = t.total;
    this.loaded = l, this.total = u;
  }
  return e;
}(), ts = vd(function(e) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Ld(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), g0 = function() {
  function e(t, n) {
    return ts.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(ts.prototype), e;
}();
function m0(e, t) {
  return Gr({ method: "GET", url: e, headers: t });
}
function p0(e, t, n) {
  return Gr({ method: "POST", url: e, body: t, headers: n });
}
function _0(e, t) {
  return Gr({ method: "DELETE", url: e, headers: t });
}
function b0(e, t, n) {
  return Gr({ method: "PUT", url: e, body: t, headers: n });
}
function E0(e, t, n) {
  return Gr({ method: "PATCH", url: e, body: t, headers: n });
}
var y0 = xn(function(e) {
  return e.response;
});
function S0(e, t) {
  return y0(Gr({
    method: "GET",
    url: e,
    headers: t
  }));
}
var Gr = function() {
  var e = function(t) {
    var n = typeof t == "string" ? {
      url: t
    } : t;
    return I0(n);
  };
  return e.get = m0, e.post = p0, e.delete = _0, e.put = b0, e.patch = E0, e.getJSON = S0, e;
}(), A0 = "upload", Cu = "download", Bs = "loadstart", Us = "progress", xu = "load";
function I0(e) {
  return new pn(function(t) {
    var n, r, i = He({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, s = i.body, o = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(V, H) {
          return u.set(H, V);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var f = {};
    if (o)
      for (var g in o)
        o.hasOwnProperty(g) && (f[g.toLowerCase()] = o[g]);
    var h = i.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, m = i.xsrfCookieName, _ = i.xsrfHeaderName;
    if ((v || !h) && m && _) {
      var b = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + m + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      b && (f[_] = b);
    }
    var S = T0(s, f), w = He(He({}, i), {
      url: l,
      headers: f,
      body: S
    }), O;
    O = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var A = e.progressSubscriber, E = e.includeDownloadProgress, y = E === void 0 ? !1 : E, C = e.includeUploadProgress, N = C === void 0 ? !1 : C, D = function(V, H) {
        O.addEventListener(V, function() {
          var F, k = H();
          (F = A == null ? void 0 : A.error) === null || F === void 0 || F.call(A, k), t.error(k);
        });
      };
      D("timeout", function() {
        return new g0(O, w);
      }), D("abort", function() {
        return new ts("aborted", O, w);
      });
      var G = function(V, H) {
        return new v0(H, O, w, V + "_" + H.type);
      }, Y = function(V, H, F) {
        V.addEventListener(H, function(k) {
          t.next(G(F, k));
        });
      };
      N && [Bs, Us, xu].forEach(function(V) {
        return Y(O.upload, V, A0);
      }), A && [Bs, Us].forEach(function(V) {
        return O.upload.addEventListener(V, function(H) {
          var F;
          return (F = A == null ? void 0 : A.next) === null || F === void 0 ? void 0 : F.call(A, H);
        });
      }), y && [Bs, Us].forEach(function(V) {
        return Y(O, V, Cu);
      });
      var Q = function(V) {
        var H = "ajax error" + (V ? " " + V : "");
        t.error(new ts(H, O, w));
      };
      O.addEventListener("error", function(V) {
        var H;
        (H = A == null ? void 0 : A.error) === null || H === void 0 || H.call(A, V), Q();
      }), O.addEventListener(xu, function(V) {
        var H, F, k = O.status;
        if (k < 400) {
          (H = A == null ? void 0 : A.complete) === null || H === void 0 || H.call(A);
          var P = void 0;
          try {
            P = G(Cu, V);
          } catch (L) {
            t.error(L);
            return;
          }
          t.next(P), t.complete();
        } else
          (F = A == null ? void 0 : A.error) === null || F === void 0 || F.call(A, V), Q(k);
      });
    }
    var ie = w.user, U = w.method, x = w.async;
    ie ? O.open(U, l, x, ie, w.password) : O.open(U, l, x), x && (O.timeout = w.timeout, O.responseType = w.responseType), "withCredentials" in O && (O.withCredentials = w.withCredentials);
    for (var g in f)
      f.hasOwnProperty(g) && O.setRequestHeader(g, f[g]);
    return S ? O.send(S) : O.send(), function() {
      O && O.readyState !== 4 && O.abort();
    };
  });
}
function T0(e, t) {
  var n;
  if (!e || typeof e == "string" || L0(e) || N0(e) || x0(e) || w0(e) || O0(e) || P0(e))
    return e;
  if (R0(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (n = t["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var C0 = Object.prototype.toString;
function Qo(e, t) {
  return C0.call(e) === "[object " + t + "]";
}
function x0(e) {
  return Qo(e, "ArrayBuffer");
}
function w0(e) {
  return Qo(e, "File");
}
function O0(e) {
  return Qo(e, "Blob");
}
function R0(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function L0(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function N0(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function P0(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
class H0 {
  constructor(t, n, r) {
    this.url = t, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(t) {
    Object.assign(this.variableConfiguration, t);
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
    let t = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        t = t.replace(r, this.variableConfiguration[n]);
      }
    return t;
  }
}
const D0 = new H0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), M0 = [D0], B0 = M0[0].getUrl();
class Nd {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? B0;
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
    const { apiKey: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
  get accessToken() {
    const { accessToken: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
}
class U0 {
  constructor(t = new Nd()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: o }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${k0(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: o ?? "json"
    }), this.rxjsRequest = (n) => d0(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      h0(
        (r) => Gr(r).pipe(
          xn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, n) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      xn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const fn = (e) => encodeURIComponent(`${e}`), k0 = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${fn(t)}=${fn(r)}`).join("&") : `${fn(t)}=${fn(n)}`
).join("&"), qn = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class F0 extends U0 {
  assignResourceToLocation({ locationId: t, uuid: n }, r) {
    qn(t, "locationId", "assignResourceToLocation"), qn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", fn(t)).replace("{uuid}", fn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: t }, n) {
    qn(t, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: t
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: t }, n) {
    qn(t, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", fn(t)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: t }, n) {
    qn(t, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", fn(t)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: t, pageSize: n }, r) {
    const i = {}, a = {};
    return t != null && (a.page = t), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: t, uuid: n }, r) {
    qn(t, "locationId", "unassignResourceFromLocation"), qn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", fn(t)).replace("{uuid}", fn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: t, location: n }, r) {
    qn(t, "locationId", "updateLocation"), qn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", fn(t)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class $i {
  constructor(t, n, r, i, a) {
    Je(this, "uuid");
    Je(this, "key");
    Je(this, "name");
    Je(this, "description");
    Je(this, "assignedResources");
    this.uuid = a, this.key = t, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(t) {
    return new $i(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
const Ir = class Ir {
  constructor() {
    Je(this, "endpoint", "/compas-scl-data-service");
    Je(this, "locationsApiClient");
    this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Ir.instance || (Ir.instance = new Ir()), Ir.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      xn((n) => n || []),
      xn((n) => n.map((r) => $i.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      xn((n) => $i.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(xn(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      xn((n) => $i.from(n))
    );
  }
  createApiClient(t) {
    const n = new Nd({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new F0(n);
  }
};
Je(Ir, "instance");
let bo = Ir;
var Zn;
class G0 {
  constructor() {
    Ce(this, Zn, Mt([]));
  }
  get store() {
    return I(this, Zn);
  }
  set(t) {
    I(this, Zn).set(t);
  }
  update(t) {
    I(this, Zn).update((n) => n.map((r) => r.uuid === t.uuid ? t : r));
  }
  add(t) {
    I(this, Zn).update((n) => [...n, t]);
  }
  remove(t) {
    I(this, Zn).update((n) => n.filter((r) => r.uuid !== t));
  }
  findById(t) {
    return Bc(I(this, Zn)).find((n) => n.uuid === t);
  }
}
Zn = new WeakMap();
pg({ en: Xg, de: Pg });
var wu = /* @__PURE__ */ de("<h3> </h3>"), Yr = /* @__PURE__ */ de("<!> <!>", 1), Ou = /* @__PURE__ */ de("<div><!> <!></div>"), V0 = /* @__PURE__ */ de("<!> <!> <!> <!>", 1), j0 = /* @__PURE__ */ de("<div><!></div>"), W0 = /* @__PURE__ */ de('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), q0 = /* @__PURE__ */ de('<div class="location-manager-container"><!> <!> <!> <div class="table-container svelte-1dmbgtb"><div class="table-actions svelte-1dmbgtb"><!> <!></div> <!></div></div>');
function Y0(e, t) {
  Le(t, !0);
  const n = () => Jn(mg, "$_", r), [r, i] = gr(), a = bo.getInstance(), s = new G0(), o = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let l = /* @__PURE__ */ Ee(!1), u = /* @__PURE__ */ Ee(be(o.Closed)), d = /* @__PURE__ */ Ee(!1), f = /* @__PURE__ */ Ee(be(g()));
  function g() {
    return {
      uuid: void 0,
      key: "",
      name: "",
      description: "",
      assignedResources: void 0
    };
  }
  let h = /* @__PURE__ */ me(() => [
    {
      headerName: n()("key"),
      field: "key",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("name"),
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("description"),
      field: "description",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("assigned_resources"),
      field: "assignedResources",
      numeric: !0,
      filter: !1,
      filterType: "number",
      sortable: !0
    },
    {
      headerName: "",
      field: "actions",
      numeric: !1,
      filter: !1,
      filterType: "text",
      minWidth: "100px",
      sortable: !1
    }
  ]), v = /* @__PURE__ */ Ee(!0);
  _t(() => {
    setTimeout(
      () => {
        j(v, !1);
      },
      1e3
    );
  });
  const m = [
    {
      icon: "edit",
      callback: (G) => _(G),
      disabled: () => !1,
      ariaLabel: "Edit location"
    },
    {
      icon: "delete",
      callback: (G) => S(G),
      disabled: () => !1,
      ariaLabel: "Delete location"
    }
  ];
  function _(G) {
    j(f, { ...G }, !0), j(d, !0), j(u, o.Update, !0);
  }
  function b() {
    j(f, { ...g() }, !0), j(d, !0), j(u, o.Create, !0);
  }
  function S(G) {
    j(f, { ...G }, !0), j(d, !0), j(u, o.Remove, !0);
  }
  function w() {
    var G;
    try {
      const Y = ((G = c(f)) == null ? void 0 : G.uuid) !== void 0 && c(f).uuid !== "";
      (Y ? a.updateLocation({
        locationId: c(f).uuid,
        location: c(f)
      }) : a.createLocation(c(f))).pipe(
        Au(1),
        Tu((ie) => {
          Y ? s.update(ie) : s.add(ie);
        }),
        Iu(A)
      ).subscribe();
    } catch (Y) {
      console.error("Error saving location", Y);
    }
  }
  function O() {
    a.deleteLocation(c(f).uuid).subscribe({
      next: () => {
        s.remove(c(f).uuid), A();
      }
    });
  }
  function A() {
    j(u, o.Closed, !0), j(d, !1), j(f, { ...g() }, !0);
  }
  function E() {
    j(l, !1), a.getLocations().pipe(
      Au(1),
      Tu((G) => {
        s.set(G);
      }),
      Iu(() => {
        j(l, !0);
      })
    ).subscribe();
  }
  _t(() => {
    E();
  });
  var y = re(), C = W(y);
  {
    var N = (G) => {
      {
        let Y = /* @__PURE__ */ me(() => !c(v));
        vu(G, {
          get loadingDone() {
            return c(Y);
          }
        });
      }
    }, D = (G) => {
      var Y = q0(), Q = Se(Y);
      vu(Q, {
        get loadingDone() {
          return c(l);
        }
      });
      var ie = ne(Q, 2);
      {
        const P = (se) => {
          var ce = wu(), J = Xr(ce, !0);
          pe(($) => ot(J, $), [
            () => {
              var $;
              return n()("delete_location", { values: { name: ($ = c(f)) == null ? void 0 : $.name } });
            }
          ]), T(se, ce);
        }, L = (se) => {
          var ce = Ou(), J = Se(ce);
          Sr(J, {
            callback: O,
            variant: "raised",
            children: (ae, we) => {
              var Ge = Yr(), je = W(Ge);
              hu(je, {});
              var Me = ne(je, 2);
              br(Me, {
                children: (ke, Oe) => {
                  var Ze = yt();
                  pe((fe) => ot(Ze, fe), [() => n()("confirm")]), T(ke, Ze);
                },
                $$slots: { default: !0 }
              }), T(ae, Ge);
            },
            $$slots: { default: !0 }
          });
          var $ = ne(J, 2);
          Sr($, {
            callback: A,
            variant: "raised",
            isAbortAction: !0,
            children: (ae, we) => {
              var Ge = Yr(), je = W(Ge);
              go(je, {});
              var Me = ne(je, 2);
              br(Me, {
                children: (ke, Oe) => {
                  var Ze = yt();
                  pe((fe) => ot(Ze, fe), [() => n()("cancel")]), T(ke, Ze);
                },
                $$slots: { default: !0 }
              }), T(ae, Ge);
            },
            $$slots: { default: !0 }
          }), T(se, ce);
        };
        let Z = /* @__PURE__ */ me(() => c(u) === o.Remove);
        ql(ie, {
          get open() {
            return c(Z);
          },
          onClose: A,
          title: P,
          actions: L,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var U = ne(ie, 2);
      {
        const P = (ce) => {
          var J = wu(), $ = Xr(J, !0);
          pe((ae) => ot($, ae), [
            () => {
              var ae;
              return c(u) === o.Update ? n()("location", { values: { name: (ae = c(f)) == null ? void 0 : ae.name } }) : n()("new_location");
            }
          ]), T(ce, J);
        }, L = (ce) => {
          var J = j0(), $ = Se(J);
          {
            var ae = (we) => {
              var Ge = V0(), je = W(Ge);
              {
                var Me = (fe) => {
                  br(fe, {
                    children: (he, Te) => {
                      var R = yt();
                      pe(() => ot(R, c(f).uuid)), T(he, R);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ge(je, (fe) => {
                  c(u) === o.Update && fe(Me);
                });
              }
              var ke = ne(je, 2);
              {
                let fe = /* @__PURE__ */ me(() => n()("name"));
                Ns(ke, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).name;
                  },
                  set value(he) {
                    c(f).name = he;
                  }
                });
              }
              var Oe = ne(ke, 2);
              {
                let fe = /* @__PURE__ */ me(() => n()("key"));
                Ns(Oe, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).key;
                  },
                  set value(he) {
                    c(f).key = he;
                  }
                });
              }
              var Ze = ne(Oe, 2);
              {
                let fe = /* @__PURE__ */ me(() => n()("description"));
                Ns(Ze, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).description;
                  },
                  set value(he) {
                    c(f).description = he;
                  }
                });
              }
              T(we, Ge);
            };
            ge($, (we) => {
              c(f) && we(ae);
            });
          }
          T(ce, J);
        }, Z = (ce) => {
          var J = Ou(), $ = Se(J);
          Sr($, {
            callback: w,
            variant: "raised",
            children: (we, Ge) => {
              var je = Yr(), Me = W(je);
              hu(Me, {});
              var ke = ne(Me, 2);
              br(ke, {
                children: (Oe, Ze) => {
                  var fe = yt();
                  pe((he) => ot(fe, he), [() => n()("save")]), T(Oe, fe);
                },
                $$slots: { default: !0 }
              }), T(we, je);
            },
            $$slots: { default: !0 }
          });
          var ae = ne($, 2);
          Sr(ae, {
            callback: A,
            variant: "raised",
            isAbortAction: !0,
            children: (we, Ge) => {
              var je = Yr(), Me = W(je);
              go(Me, {});
              var ke = ne(Me, 2);
              br(ke, {
                children: (Oe, Ze) => {
                  var fe = yt();
                  pe((he) => ot(fe, he), [() => n()("cancel")]), T(Oe, fe);
                },
                $$slots: { default: !0 }
              }), T(we, je);
            },
            $$slots: { default: !0 }
          }), T(ce, J);
        };
        let se = /* @__PURE__ */ me(() => c(u) === o.Update || c(u) === o.Create);
        ql(U, {
          get open() {
            return c(se);
          },
          onClose: A,
          title: P,
          content: L,
          actions: Z,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var x = ne(U, 2), V = Se(x), H = Se(V);
      Sr(H, {
        callback: b,
        variant: "raised",
        children: (P, L) => {
          var Z = Yr(), se = W(Z);
          fd(se, {});
          var ce = ne(se, 2);
          br(ce, {
            children: (J, $) => {
              var ae = yt();
              pe((we) => ot(ae, we), [() => n()("add_location")]), T(J, ae);
            },
            $$slots: { default: !0 }
          }), T(P, Z);
        },
        $$slots: { default: !0 }
      });
      var F = ne(H, 2);
      Sr(F, {
        callback: E,
        variant: "raised",
        children: (P, L) => {
          var Z = Yr(), se = W(Z);
          hd(se, {});
          var ce = ne(se, 2);
          br(ce, {
            children: (J, $) => {
              var ae = yt();
              pe((we) => ot(ae, we), [() => n()("refresh")]), T(J, ae);
            },
            $$slots: { default: !0 }
          }), T(P, Z);
        },
        $$slots: { default: !0 }
      });
      var k = ne(V, 2);
      D_(k, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (P, L) => {
          var Z = W0(), se = W(Z), ce = Xr(se, !0), J = ne(se, 2);
          {
            let $ = /* @__PURE__ */ me(() => n()("search"));
            N_(J, {
              get columnDefs() {
                return c(h);
              },
              get store() {
                return s;
              },
              get loadingDone() {
                return c(l);
              },
              get rowActions() {
                return m;
              },
              get searchInputLabel() {
                return c($);
              }
            });
          }
          pe(($) => ot(ce, $), [() => n()("location_table")]), T(P, Z);
        },
        $$slots: { default: !0 }
      }), T(G, Y);
    };
    ge(C, (G) => {
      c(v) ? G(N) : G(D, -1);
    });
  }
  T(e, y), Ne(), i();
}
const Pd = "location-manager", Hd = "0.0.1";
var K0 = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function z0(e, t) {
  Le(t, !0);
  let n = p(t, "dev", 3, !1);
  var r = K0(), i = W(r);
  {
    var a = (l) => {
      Y0(l, {});
    };
    ge(i, (l) => {
      (t.doc || n()) && l(a);
    });
  }
  var s = ne(i, 2), o = ne(s, 2);
  pe(() => {
    fl(s, Pd), fl(o, Hd);
  }), T(e, r), Ne();
}
var ii;
class $0 extends HTMLElement {
  constructor() {
    super();
    Ce(this, ii);
    Je(this, "_doc");
    Je(this, "_editCount");
    Ie(this, ii, /* @__PURE__ */ Ee(be({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return c(I(this, ii));
  }
  set props(n) {
    j(I(this, ii), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = X0();
    this.shadowRoot.appendChild(n);
    const r = () => th(z0, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
ii = new WeakMap();
function X0() {
  const e = `${Pd}-v${Hd}-style`, t = Z0(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function Z0() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  $0 as default
};
