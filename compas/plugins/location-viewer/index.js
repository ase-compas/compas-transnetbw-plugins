var Ih = Object.defineProperty;
var oc = (t) => {
  throw TypeError(t);
};
var Eh = (t, e, n) => e in t ? Ih(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ze = (t, e, n) => Eh(t, typeof e != "symbol" ? e + "" : e, n), vl = (t, e, n) => e.has(t) || oc("Cannot " + n);
var D = (t, e, n) => (vl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), We = (t, e, n) => e.has(t) ? oc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ge = (t, e, n, r) => (vl(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Me = (t, e, n) => (vl(t, e, "access private method"), n);
const Gu = {}, Ct = Symbol("uninitialized"), ju = "http://www.w3.org/1999/xhtml", Sh = "http://www.w3.org/2000/svg", Ah = "@attach", Wu = !1;
var il = Array.isArray, yh = Array.prototype.indexOf, Ka = Array.prototype.includes, al = Array.from, po = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, qu = Object.getOwnPropertyDescriptors, Th = Object.prototype, Ch = Array.prototype, _o = Object.getPrototypeOf, cc = Object.isExtensible;
function ki(t) {
  return typeof t == "function";
}
const ve = () => {
};
function xh(t) {
  return t();
}
function Ps(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ku() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const Qt = 2, $i = 4, ns = 8, Io = 1 << 24, wn = 16, Kn = 32, Qr = 64, kl = 128, Eo = 256, qn = 512, Mt = 1024, gt = 2048, In = 4096, nn = 8192, jt = 16384, xi = 32768, za = 1 << 25, ur = 65536, Hs = 1 << 17, wh = 1 << 18, fa = 1 << 19, zu = 1 << 20, ir = 1 << 25, Us = 1 << 21, Gi = 1 << 22, Xr = 1 << 23, ar = Symbol("$state"), Yu = Symbol("component"), Xu = Symbol("legacy props"), Oh = Symbol(""), ws = Symbol("attributes"), Bl = Symbol("class"), Fl = Symbol("style"), Ma = Symbol("text"), Os = Symbol("form reset"), rs = new class extends Error {
  constructor() {
    super(...arguments);
    ze(this, "name", "StaleReactionError");
    ze(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Bu;
const sl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Bu = globalThis.document) != null && Bu.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Lh() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Rh() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Nh() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Mh = !1;
function Zu(t) {
  return t === this.v;
}
function So(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Qu(t) {
  return !So(t, this.v);
}
function Ao(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Dh() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ph(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Hh(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Uh() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kh(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bh() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fh(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vh() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gh() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jh() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Wh() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let ha = !1, qh = !1;
function Kh() {
  ha = !0;
}
function zh(t) {
  let e = t.p;
  for (; e !== null && e.c === null; )
    e = e.p;
  return (e == null ? void 0 : e.c) ?? null;
}
function Ju(t, e) {
  return t === null && Ao(), t.c ?? (t.c = new Map(zh(t) || void 0));
}
let dt = null;
function ea(t) {
  dt = t;
}
function ue(t) {
  return (
    /** @type {T} */
    Ju(dt).get(t)
  );
}
function le(t, e) {
  return Ju(dt).set(t, e), e;
}
function Ce(t, e = !1, n) {
  dt = {
    p: dt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      Ke
    ),
    l: ha && !e ? { s: null, u: null, $: [] } : null
  };
}
function xe(t) {
  var e = (
    /** @type {ComponentContext} */
    dt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ad(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, dt = e.p, yo(t);
}
function yo(t = {}) {
  return po(t, Yu, { value: !0 }), t;
}
function is() {
  return !ha || dt !== null && dt.l === null;
}
let fi = [];
function $u() {
  var t = fi;
  fi = [], Ps(t);
}
function On(t) {
  if (fi.length === 0 && !Va) {
    var e = fi;
    queueMicrotask(() => {
      e === fi && $u();
    });
  }
  fi.push(t);
}
function Yh() {
  for (; fi.length > 0; )
    $u();
}
const Xh = -7169;
function At(t, e) {
  t.f = t.f & Xh | e;
}
function To(t) {
  t.f & qn || t.deps === null ? At(t, Mt) : At(t, In);
}
function ed(t, e) {
  t.f & gt ? e.set(t, gt) : t.f & In && e.get(t) !== gt && e.set(t, In), At(t, Mt);
}
function Zh(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, On(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let uc = !1;
function Qh() {
  uc || (uc = !0, document.addEventListener(
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
            (e = n[Os]) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Jr(t) {
  var e = qe, n = Ke;
  Ln(null), dr(null);
  try {
    return t();
  } finally {
    Ln(e), dr(n);
  }
}
function Co(t, e, n, r = n) {
  t.addEventListener(e, () => Jr(n));
  const i = (
    /** @type {any} */
    t[Os]
  );
  i ? t[Os] = () => {
    i(), r(!0);
  } : t[Os] = () => r(!0), Qh();
}
function td(t, e, n, r) {
  const i = is() ? ta : xo;
  var a = t.filter((v) => !v.settled), l = e.map(i);
  if (n.length === 0 && a.length === 0) {
    r(l);
    return;
  }
  var c = (
    /** @type {Effect} */
    Ke
  ), o = Jh(), u = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((v) => v.promise)) : null;
  function d(v) {
    if (!(c.f & jt)) {
      o();
      try {
        r([...l, ...v]);
      } catch (h) {
        rr(h, c);
      }
      ks();
    }
  }
  var m = nd();
  if (n.length === 0) {
    u.then(() => d([])).finally(m);
    return;
  }
  function f() {
    Promise.all(n.map((v) => /* @__PURE__ */ $h(v))).then(d).catch((v) => rr(v, c)).finally(m);
  }
  u ? u.then(() => {
    if (c.f & jt) {
      m();
      return;
    }
    o(), f(), ks();
  }) : f();
}
function Jh() {
  var t = (
    /** @type {Effect} */
    Ke
  ), e = qe, n = dt, r = (
    /** @type {Batch} */
    Te
  );
  return function(a = !0) {
    dr(t), Ln(e), ea(n), a && !(t.f & jt) && (r == null || r.activate(), r == null || r.apply());
  };
}
function ks(t = !0) {
  dr(null), Ln(null), ea(null), t && (Te == null || Te.deactivate());
}
function nd() {
  var t = (
    /** @type {Effect} */
    Ke
  ), e = t.b, n = (
    /** @type {Batch} */
    Te
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function ta(t) {
  var e = Qt | gt;
  return Ke !== null && (Ke.f |= fa), {
    ctx: dt,
    deps: null,
    effects: null,
    equals: Zu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ct
    ),
    wv: 0,
    parent: Ke,
    ac: null
  };
}
const Da = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function $h(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    Ke
  );
  r === null && Dh();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = yi(
    /** @type {V} */
    Ct
  ), l = !qe, c = /* @__PURE__ */ new Set();
  return fv(() => {
    var v, h;
    var o = (
      /** @type {Effect} */
      Ke
    ), u = Ku();
    i = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, (g) => {
        g !== rs && u.reject(g);
      }).finally(ks);
    } catch (g) {
      u.reject(g), ks();
    }
    var d = (
      /** @type {Batch} */
      Te
    );
    if (l) {
      if (o.f & xi)
        var m = nd();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (v = r.b) != null && v.is_rendered()
      )
        (h = d.async_deriveds.get(o)) == null || h.reject(Da);
      else
        for (const g of c.values())
          g.reject(Da);
      c.add(u), d.async_deriveds.set(o, u);
    }
    const f = (g, p = void 0) => {
      m == null || m(), c.delete(u), p !== Da && (d.activate(), p ? (a.f |= Xr, na(a, p)) : (a.f & Xr && (a.f ^= Xr), na(a, g)), d.deactivate());
    };
    u.promise.then(f, (g) => f(null, g || "unknown"));
  }), ss(() => {
    for (const o of c)
      o.reject(Da);
  }), new Promise((o) => {
    function u(d) {
      function m() {
        d === i ? o(a) : u(i);
      }
      d.then(m, m);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  const e = /* @__PURE__ */ ta(t);
  return Ld(e), e;
}
// @__NO_SIDE_EFFECTS__
function xo(t) {
  const e = /* @__PURE__ */ ta(t);
  return e.equals = Qu, e;
}
function ev(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Wt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function wo(t) {
  var e, n = Ke, r = t.parent;
  if (!Nr && r !== null && t.v !== Ct && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  r.f & (jt | nn))
    return Lh(), t.v;
  dr(r);
  try {
    ev(t), e = Dd(t);
  } finally {
    dr(n);
  }
  return e;
}
function rd(t) {
  var e = wo(t);
  if (!t.equals(e) && (t.wv = Nd(), (!(Te != null && Te.is_fork) || t.deps === null) && (Te !== null ? (Te.capture(t, e, !0), Zr == null || Zr.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    At(t, Mt);
    return;
  }
  Nr || (Gt !== null ? (Ro() || Te != null && Te.is_fork) && Gt.set(t, e) : To(t));
}
function tv(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Jr(() => {
        n.ac.abort(rs), n.ac = null;
      }), n.fn !== null && (n.teardown = ve), Ya(n, 0), No(n));
}
function id(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && ra(e);
}
let ml = null, Mi = null, Te = null, Zr = null, Gt = null, Vl = null, Va = !1, gl = !1, Ga = null, Ls = null;
var dc = 0;
let nv = 1;
var Ki, zi, Yi, yr, Xi, Tr, Ja, $n, er, Zi, mi, Ye, Gl, ad, jl, Pa, Wl, sd, ld, od, Bi, rv, Ha;
const tl = class tl {
  constructor() {
    We(this, Ye);
    ze(this, "id", nv++);
    /** True as soon as `#process` was called */
    ze(this, "started", !1);
    ze(this, "linked", !0);
    /** @type {Batch | null} */
    ze(this, "prev", null);
    /** @type {Batch | null} */
    ze(this, "next", null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ze(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * The keys of this map are identical to `this.previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ze(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * The keys of this map are identical to `this.current`
     * @type {Map<Value, any>}
     */
    ze(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    We(this, Ki, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    We(this, zi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    We(this, Yi, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    We(this, yr, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    We(this, Xi, null);
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
    We(this, Tr, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    We(this, Ja, []);
    /**
     * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
     * @type {Map<Effect, number>}
     */
    We(this, $n, /* @__PURE__ */ new Map());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    We(this, er, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    We(this, Zi, /* @__PURE__ */ new Set());
    ze(this, "is_fork", !1);
    We(this, mi, !1);
    Mi === null ? ml = Mi = this : (Mi.next = this, this.prev = Mi), Mi = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    D(this, er).has(e) || D(this, er).set(e, { d: [], m: [] }), D(this, Zi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = D(this, er).get(e);
    if (r) {
      D(this, er).delete(e);
      for (var i of r.d)
        At(i, gt), n(i);
      for (i of r.m)
        At(i, In), n(i);
    }
    D(this, Zi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, n, r = !1) {
    e.v !== Ct && !this.previous.has(e) && this.previous.set(e, e.v), e.f & Xr || (this.current.set(e, [n, r]), Gt == null || Gt.set(e, n)), this.is_fork || (e.v = n);
  }
  activate() {
    Te = this;
  }
  deactivate() {
    Te = null, Gt = null;
  }
  flush() {
    try {
      gl = !0, Te = this, Me(this, Ye, Pa).call(this);
    } finally {
      dc = 0, Vl = null, Ga = null, Ls = null, gl = !1, Te = null, Gt = null, sr.clear();
    }
  }
  discard() {
    var e;
    for (const n of D(this, zi)) n(this);
    D(this, zi).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Da);
    Me(this, Ye, Ha).call(this), (e = D(this, Xi)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    D(this, Ja).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (Ge(this, Yi, D(this, Yi) + 1), e) {
      let r = D(this, yr).get(n) ?? 0;
      D(this, yr).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (Ge(this, Yi, D(this, Yi) - 1), e) {
      let r = D(this, yr).get(n) ?? 0;
      r === 1 ? D(this, yr).delete(n) : D(this, yr).set(n, r - 1);
    }
    D(this, mi) || (Ge(this, mi, !0), On(() => {
      Ge(this, mi, !1), this.linked && this.flush();
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
    (n === gt || D(this, $n).get(e) !== gt) && D(this, $n).set(e, n);
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    D(this, Ki).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    D(this, zi).add(e);
  }
  settled() {
    return (D(this, Xi) ?? Ge(this, Xi, Ku())).promise;
  }
  static ensure() {
    if (Te === null) {
      const e = Te = new tl();
      !gl && !Va && On(() => {
        e.started || e.flush();
      });
    }
    return Te;
  }
  apply() {
    {
      Gt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var n;
    if (Vl = e, (n = e.b) != null && n.is_pending && e.f & ($i | ns | Io) && !(e.f & xi)) {
      e.b.defer_effect(e);
      return;
    }
    D(this, Tr).push(e);
  }
};
Ki = new WeakMap(), zi = new WeakMap(), Yi = new WeakMap(), yr = new WeakMap(), Xi = new WeakMap(), Tr = new WeakMap(), Ja = new WeakMap(), $n = new WeakMap(), er = new WeakMap(), Zi = new WeakMap(), mi = new WeakMap(), Ye = new WeakSet(), Gl = function() {
  if (this.is_fork) return !0;
  for (const e of D(this, yr).keys())
    if (!Me(this, Ye, ad).call(this, e))
      return !0;
  return !1;
}, /**
 * Whether `effect` is inside a branch that this batch skips
 * @param {Effect} effect
 */
ad = function(e) {
  for (var n = (
    /** @type {Effect | null} */
    e
  ); n !== null; n = n.parent)
    if (D(this, er).has(n)) return !0;
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
jl = function() {
  var e = [];
  for (const a of D(this, Tr))
    if (!(a.f & jt || !(a.f & (gt | In)))) {
      for (var n = a, r = !1; n.parent !== null; ) {
        n = n.parent;
        var i = n.f;
        if (i & (Qr | Kn)) {
          if (!(i & Mt)) {
            r = !0;
            break;
          }
          n.f ^= Mt;
        }
      }
      r || e.push(n);
    }
  return Ge(this, Tr, []), e;
}, Pa = function() {
  var c, o, u, d;
  this.started = !0;
  for (const [m, f] of D(this, $n))
    At(m, f), this.schedule(m);
  this.apply();
  for (var e = Ga = [], n = [], r = Ls = []; D(this, Tr).length > 0; ) {
    dc++ > 1e3 && (Me(this, Ye, Ha).call(this), av());
    for (const m of Me(this, Ye, jl).call(this))
      try {
        Me(this, Ye, Wl).call(this, m, e, n);
      } catch (f) {
        throw dd(m), Me(this, Ye, Gl).call(this) || this.discard(), f;
      }
  }
  if (Te = null, r.length > 0) {
    var i = tl.ensure();
    for (const m of r)
      i.schedule(m);
  }
  if (Ga = null, Ls = null, Me(this, Ye, Gl).call(this)) {
    Me(this, Ye, Bi).call(this, n), Me(this, Ye, Bi).call(this, e);
    for (const [m, f] of D(this, er))
      ud(m, f);
    r.length > 0 && /** @type {unknown} */
    Me(c = Te, Ye, Pa).call(c);
    return;
  }
  const a = Me(this, Ye, sd).call(this);
  if (a) {
    Me(this, Ye, Bi).call(this, n), Me(this, Ye, Bi).call(this, e), Me(o = a, Ye, od).call(o, this);
    return;
  }
  D(this, $n).clear();
  for (const m of D(this, Ki)) m(this);
  D(this, Ki).clear(), Zr = this, fc(n), fc(e), Zr = null, (u = D(this, Xi)) == null || u.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    Te
  );
  D(this, Yi) === 0 && (D(this, Tr).length === 0 || l !== null) && Me(this, Ye, Ha).call(this), l !== null && (sr.clear(), Me(d = l, Ye, Pa).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Wl = function(e, n, r) {
  e.f ^= Mt;
  for (var i = e.first; i !== null; ) {
    var a = i.f, l = (a & (Kn | Qr)) !== 0, c = l && (a & Mt) !== 0, o = c || (a & nn) !== 0 || D(this, er).has(i);
    if (!o && i.fn !== null) {
      l ? i.f ^= Mt : a & $i ? n.push(i) : os(i) && (a & wn && this.add_dirty_reaction(i, In), ra(i));
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
}, sd = function() {
  for (var e = this.prev; e !== null; e = e.prev)
    if (!e.is_fork && Me(this, Ye, ld).call(this, e)) return e;
  return null;
}, /** @param {Batch} batch */
ld = function(e) {
  for (const [n, [, r]] of this.current)
    if (!r && e.current.has(n))
      return !0;
  return !1;
}, /**
 * @param {Batch} batch
 */
od = function(e) {
  var r;
  for (const [i, a] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of e.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && a.promise.then(l.resolve).catch(l.reject);
  }
  e.async_deriveds.clear(), this.transfer_reactions(D(e, $n));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !(i.f & Qt && !(i.f & (gt | In))))
      for (const o of a) {
        var l = o.f;
        if (l & Qt)
          n(
            /** @type {Derived} */
            o
          );
        else {
          var c = (
            /** @type {Effect} */
            o
          );
          l & (Gi | wn) && !this.async_deriveds.has(c) && (D(this, $n).delete(c), At(c, gt), this.schedule(c));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), Me(r = e, Ye, Ha).call(r), Te = this, Me(this, Ye, Pa).call(this);
}, /**
 * @param {Effect[]} effects
 */
Bi = function(e) {
  for (var n = 0; n < e.length; n += 1)
    ed(e[n], D(this, $n));
}, rv = function() {
  var m, f;
  for (let v = ml; v !== null; v = v.next) {
    var e = v.id < this.id, n = [];
    for (const [h, [g, p]] of this.current) {
      if (v.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          v.current.get(h)[0]
        );
        if (e && g !== r)
          v.current.set(h, [g, p]);
        else
          continue;
      }
      n.push(h);
    }
    if (e)
      for (const [h, g] of this.async_deriveds) {
        const p = v.async_deriveds.get(h);
        p && g.promise.then(p.resolve).catch(p.reject);
      }
    var i = [...v.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      v.current.get(h)[1]
    );
    if (!(!v.started || i.length === 0)) {
      var a = i.filter((h) => !this.current.has(h));
      if (a.length === 0)
        e && v.discard();
      else if (n.length > 0) {
        if (e)
          for (const h of D(this, Zi))
            v.unskip_effect(h, (g) => {
              var p;
              g.f & (wn | Gi) ? v.schedule(g) : Me(p = v, Ye, Bi).call(p, [g]);
            });
        v.activate();
        var l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
        for (var o of n)
          cd(o, a, l, c);
        c = /* @__PURE__ */ new Map();
        var u = [...v.current].filter(([h, g]) => {
          const p = this.current.get(h);
          return p ? p[0] !== g[0] || p[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (u.length > 0)
          for (const h of D(this, Ja))
            !(h.f & (jt | nn | Hs)) && Oo(h, u, c) && (h.f & (Gi | wn) ? (At(h, gt), v.schedule(h)) : v.add_dirty_reaction(h, gt));
        if (D(v, Tr).length > 0 && !D(v, mi)) {
          v.apply();
          for (var d of Me(m = v, Ye, jl).call(m))
            Me(f = v, Ye, Wl).call(f, d, [], []);
        }
        v.deactivate();
      }
    }
  }
}, Ha = function() {
  if (this.linked) {
    var e = this.prev, n = this.next;
    e === null ? ml = n : e.next = n, n === null ? Mi = e : n.prev = e, this.linked = !1;
  }
};
let Ai = tl;
function iv(t) {
  var e = Va, n = Zr;
  Zr = null, Va = !0;
  try {
    for (var r; ; ) {
      if (Yh(), Te === null)
        return (
          /** @type {T} */
          r
        );
      Te.flush();
    }
  } finally {
    Va = e, Zr = n;
  }
}
function av() {
  try {
    Bh();
  } catch (t) {
    rr(t, Vl);
  }
}
let kn = null;
function fc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (jt | nn)) && os(r) && (kn = /* @__PURE__ */ new Set(), ra(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && xd(r), (kn == null ? void 0 : kn.size) > 0)) {
        sr.clear();
        for (const i of kn) {
          if (i.f & (jt | nn)) continue;
          const a = [i];
          let l = i.parent;
          for (; l !== null; )
            kn.has(l) && (kn.delete(l), a.push(l)), l = l.parent;
          for (let c = a.length - 1; c >= 0; c--) {
            const o = a[c];
            o.f & (jt | nn) || ra(o);
          }
        }
        kn.clear();
      }
    }
    kn = null;
  }
}
function cd(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const a = i.f;
      a & Qt ? cd(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : a & (Gi | wn) && !(a & gt) && Oo(i, e, r) && (At(i, gt), Lo(
        /** @type {Effect} */
        i
      ));
    }
}
function Oo(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (Ka.call(e, i))
        return !0;
      if (i.f & Qt && Oo(
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
function Lo(t) {
  Te.schedule(t);
}
function ud(t, e) {
  if (!(t.f & Kn && t.f & Mt)) {
    t.f & gt ? e.d.push(t) : t.f & In && e.m.push(t), At(t, Mt);
    for (var n = t.first; n !== null; )
      ud(n, e), n = n.next;
  }
}
function dd(t) {
  At(t, Mt);
  for (var e = t.first; e !== null; )
    dd(e), e = e.next;
}
let Bs = /* @__PURE__ */ new Set();
const sr = /* @__PURE__ */ new Map();
let fd = !1;
function yi(t, e) {
  var n = {
    f: 0,
    v: t,
    reactions: null,
    equals: Zu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  const n = yi(t);
  return Ld(n), n;
}
// @__NO_SIDE_EFFECTS__
function hd(t, e = !1, n = !0) {
  var i;
  const r = yi(t);
  return e || (r.equals = Qu), ha && n && dt !== null && dt.l !== null && ((i = dt.l).s ?? (i.s = [])).push(r), r;
}
function j(t, e, n = !1) {
  qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Wn || qe.f & Hs) && is() && qe.f & (Qt | wn | Gi | Hs) && (or === null || !or.has(t)) && jh();
  let r = n ? oe(e) : e;
  return na(t, r, Ls);
}
var ui = null, ql = 0;
function na(t, e, n = null) {
  if (!t.equals(e)) {
    Nr ? sr.set(t, e) : sr.has(t) || sr.set(t, t.v);
    var r = Ai.ensure();
    if (r.capture(t, e), t.f & Qt) {
      const i = (
        /** @type {Derived} */
        t
      );
      t.f & gt && wo(i), Gt === null && To(i);
    }
    t.wv = Nd(), ui = null, ql = 0, vd(t, gt, n), ui = null, is() && Ke !== null && Ke.f & Mt && !(Ke.f & (Kn | Qr)) && (Tn === null ? mv([t]) : Tn.push(t)), !r.is_fork && Bs.size > 0 && !fd && sv();
  }
  return e;
}
function sv() {
  fd = !1;
  for (const t of Bs) {
    t.f & Mt && At(t, In);
    let e;
    try {
      e = os(t);
    } catch {
      e = !0;
    }
    e && ra(t);
  }
  Bs.clear();
}
function ja(t) {
  j(t, t.v + 1);
}
function vd(t, e, n) {
  var r = t.reactions;
  if (r !== null) {
    var i = is(), a = r.length;
    if (ql += a, ql > 1e5 && ui === null && (ui = /* @__PURE__ */ new Set()), ui !== null) {
      if (ui.has(t)) return;
      ui.add(t);
    }
    for (var l = 0; l < a; l++) {
      var c = r[l], o = c.f;
      if (!(!i && c === Ke)) {
        var u = (o & gt) === 0;
        if (u && At(c, e), o & Hs)
          Bs.add(
            /** @type {Effect} */
            c
          );
        else if (o & Qt) {
          var d = (
            /** @type {Derived} */
            c
          );
          Gt == null || Gt.delete(d), vd(d, In, n);
        } else if (u) {
          var m = (
            /** @type {Effect} */
            c
          );
          o & wn && kn !== null && kn.add(m), n !== null ? n.push(m) : Lo(m);
        }
      }
    }
  }
}
function oe(t) {
  if (typeof t != "object" || t === null || ar in t || Yu in t)
    return t;
  const e = _o(t);
  if (e !== Th && e !== Ch)
    return t;
  var n = /* @__PURE__ */ new Map(), r = il(t), i = /* @__PURE__ */ de(0), a = Ii, l = (c) => {
    if (Ii === a)
      return c();
    var o = qe, u = Ii;
    Ln(null), gc(a);
    var d = c();
    return Ln(o), gc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Vh();
        var d = n.get(o);
        return d === void 0 ? l(() => {
          var m = /* @__PURE__ */ de(u.value);
          return n.set(o, m), m;
        }) : j(d, u.value, !0), !0;
      },
      deleteProperty(c, o) {
        var u = n.get(o);
        if (u === void 0) {
          if (o in c) {
            const d = l(() => /* @__PURE__ */ de(Ct));
            n.set(o, d), ja(i);
          }
        } else
          j(u, Ct), ja(i);
        return !0;
      },
      get(c, o, u) {
        var v;
        if (o === ar)
          return t;
        var d = n.get(o), m = o in c;
        if (d === void 0 && (!m || (v = Yr(c, o)) != null && v.writable) && (d = l(() => {
          var h = oe(m ? c[o] : Ct), g = /* @__PURE__ */ de(h);
          return g;
        }), n.set(o, d)), d !== void 0) {
          var f = s(d);
          return f === Ct ? void 0 : f;
        }
        return Reflect.get(c, o, u);
      },
      getOwnPropertyDescriptor(c, o) {
        var f;
        (f = this.has) == null || f.call(this, c, o);
        var u = Reflect.getOwnPropertyDescriptor(c, o), d = n.get(o);
        if (d !== void 0) {
          var m = s(d);
          if (m === Ct)
            return;
          if (u && "value" in u)
            u.value = m;
          else
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return u;
      },
      has(c, o) {
        var f;
        if (o === ar)
          return !0;
        var u = n.get(o), d = u !== void 0 && u.v !== Ct || Reflect.has(c, o);
        if (u !== void 0 || (Ke !== null || qe !== null) && (!d || (f = Yr(c, o)) != null && f.writable)) {
          u === void 0 && (u = l(() => {
            var v = d ? oe(c[o]) : Ct, h = /* @__PURE__ */ de(v);
            return h;
          }), n.set(o, u));
          var m = s(u);
          if (m === Ct)
            return !1;
        }
        return d;
      },
      set(c, o, u, d) {
        var y;
        var m = n.get(o), f = o in c;
        if (r && o === "length")
          for (var v = u; v < /** @type {Source<number>} */
          m.v; v += 1) {
            var h = n.get(v + "");
            h !== void 0 ? j(h, Ct) : v in c && (h = l(() => /* @__PURE__ */ de(Ct)), n.set(v + "", h));
          }
        if (m === void 0)
          (!f || (y = Yr(c, o)) != null && y.writable) && (m = l(() => /* @__PURE__ */ de(void 0)), j(m, oe(u)), n.set(o, m));
        else {
          f = m.v !== Ct;
          var g = l(() => oe(u));
          j(m, g);
        }
        var p = Reflect.getOwnPropertyDescriptor(c, o);
        if (p != null && p.set && p.set.call(d, u), !f) {
          if (r && typeof o == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), I = Number(o);
            Number.isInteger(I) && I >= _.v && j(_, I + 1);
          }
          ja(i);
        }
        return !0;
      },
      ownKeys(c) {
        s(i);
        var o = Reflect.ownKeys(c).filter((m) => {
          var f = n.get(m);
          return f === void 0 || f.v !== Ct;
        });
        for (var [u, d] of n)
          d.v !== Ct && !(u in c) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Gh();
      }
    }
  );
}
function hc(t) {
  try {
    if (t !== null && typeof t == "object" && ar in t)
      return t[ar];
  } catch {
  }
  return t;
}
function md(t, e) {
  return Object.is(hc(t), hc(e));
}
var vc, gd, bd, pd, _d;
function lv() {
  if (vc === void 0) {
    vc = window, gd = document, bd = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    pd = Yr(e, "firstChild").get, _d = Yr(e, "nextSibling").get, cc(t) && (t[Bl] = void 0, t[ws] = null, t[Fl] = void 0, t.__e = void 0), cc(n) && (n[Ma] = void 0);
  }
}
function lr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ti(t) {
  return (
    /** @type {TemplateNode | null} */
    pd.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function as(t) {
  return (
    /** @type {TemplateNode | null} */
    _d.call(t)
  );
}
function Se(t, e) {
  return /* @__PURE__ */ Ti(t);
}
function re(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ti(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ as(n) : n;
  }
}
function zn(t, e = !1) {
  return /* @__PURE__ */ Ti(t);
}
function be(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ as(r);
  return r;
}
function ov(t) {
  t.textContent = "";
}
function Id() {
  return !1;
}
function Ed(t, e, n) {
  return e == null || e === ju ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(e, t, { is: n }) : document.createElementNS(e, t)
  );
}
function cv(t) {
  var e = Ke;
  if (e === null)
    return qe.f |= Xr, t;
  if (!(e.f & xi) && !(e.f & $i))
    throw t;
  rr(t, e);
}
function rr(t, e) {
  if (t === Gu)
    throw t;
  if (!(e !== null && e.f & jt)) {
    for (; e !== null; ) {
      if (e.f & kl && !(e.f & (jt | za))) {
        if (!(e.f & xi))
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
function Sd(t) {
  Ke === null && (qe === null && kh(), Uh()), Nr && Hh();
}
function uv(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Yn(t, e) {
  var n = Ke;
  n !== null && n.f & nn && (t |= nn);
  var r = {
    ctx: dt,
    deps: null,
    nodes: null,
    f: t | gt | qn,
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
  Te == null || Te.register_created_effect(r);
  var i = r;
  if (t & $i)
    Ga !== null ? Ga.push(r) : Ai.ensure().schedule(r);
  else if (e !== null) {
    try {
      ra(r);
    } catch (l) {
      throw Wt(r), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & fa) && (i = i.first, t & wn && t & ur && i !== null && (i.f |= ur));
  }
  if (i !== null && (i.parent = n, n !== null && uv(i, n), qe !== null && qe.f & Qt && !(t & Qr))) {
    var a = (
      /** @type {Derived} */
      qe
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Ro() {
  return qe !== null && !Wn;
}
function ss(t) {
  const e = Yn(ns, null);
  return At(e, Mt), e.teardown = t, e;
}
function Ae(t) {
  Sd();
  var e = (
    /** @type {Effect} */
    Ke.f
  ), n = !qe && (e & Kn) !== 0 && dt !== null && !dt.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      dt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ad(t);
}
function Ad(t) {
  return Yn($i | zu, t);
}
function yd(t) {
  return Sd(), Yn(ns | zu, t);
}
function dv(t) {
  Ai.ensure();
  const e = Yn(Qr | fa, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? _i(e, () => {
      Wt(e), r(void 0);
    }) : (Wt(e), r(void 0));
  });
}
function $r(t) {
  return Yn($i, t);
}
function fv(t) {
  return Yn(Gi | fa, t);
}
function ls(t, e = 0) {
  return Yn(ns | e, t);
}
function Ne(t, e = [], n = [], r = []) {
  td(r, e, n, (i) => {
    Yn(ns, () => {
      t(...i.map(s));
    });
  });
}
function va(t, e = 0) {
  var n = Yn(wn | e, t);
  return n;
}
function Td(t, e = 0) {
  var n = Yn(Io | e, t);
  return n;
}
function cn(t) {
  return Yn(Kn | fa, t);
}
function Cd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Nr, r = qe;
    mc(!0), Ln(null);
    try {
      e.call(null);
    } catch (i) {
      rr(i, t.parent);
    } finally {
      mc(n), Ln(r);
    }
  }
}
function No(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Jr(() => {
      i.abort(rs);
    });
    var r = n.next;
    n.f & Qr ? n.parent = null : Wt(n, e), n = r;
  }
}
function hv(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Kn || Wt(e), e = n;
  }
}
function Wt(t, e = !0) {
  var n = !1;
  (e || t.f & wh) && t.nodes !== null && t.nodes.end !== null && (vv(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= za, No(t, e && !n), Ya(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  Cd(t), t.f ^= za, t.f |= jt;
  var i = t.parent;
  i !== null && i.first !== null && xd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function vv(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ as(t);
    t.remove(), t = n;
  }
}
function xd(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function _i(t, e, n = !0) {
  var r = [];
  t.f |= Eo, wd(t, r, !0);
  var i = () => {
    n && Wt(t), e && e();
  }, a = r.length;
  if (a > 0) {
    var l = () => --a || i();
    for (var c of r)
      c.out(l);
  } else
    i();
}
function wd(t, e, n) {
  if (!(t.f & nn)) {
    t.f ^= nn;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const c of r)
        (c.is_global || n) && e.push(c);
    for (var i = t.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & Qr)) {
        var l = (i.f & ur) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Kn) !== 0 && (t.f & wn) !== 0;
        wd(i, e, l ? n : !1);
      }
      i = a;
    }
  }
}
function Fs(t) {
  t.f &= ~Eo, Od(t, !0);
}
function Od(t, e) {
  if (!(t.f & Eo) && t.f & nn) {
    t.f ^= nn, t.f & Mt || (At(t, gt), Ai.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ur) !== 0 || (n.f & Kn) !== 0;
      Od(n, i ? e : !1), n = r;
    }
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || e) && l.in();
  }
}
function Mo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ as(n);
      e.append(n), n = i;
    }
}
let Nr = !1;
function mc(t) {
  Nr = t;
}
let qe = null, Wn = !1;
function Ln(t) {
  qe = t;
}
let Ke = null;
function dr(t) {
  Ke = t;
}
let or = null;
function Ld(t) {
  qe !== null && (qe.f & Us || qe.f & Qt) && (or ?? (or = /* @__PURE__ */ new Set())).add(t);
}
let un = null, _n = 0, Tn = null;
function mv(t) {
  Tn = t;
}
let Rd = 1, hi = 0, Ii = hi;
function gc(t) {
  Ii = t;
}
function Nd() {
  return ++Rd;
}
function os(t) {
  var e = t.f;
  if (e & gt)
    return !0;
  if (e & In) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (os(
        /** @type {Derived} */
        a
      ) && rd(
        /** @type {Derived} */
        a
      ), a.wv > t.wv)
        return !0;
    }
    e & qn && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Gt === null && At(t, Mt);
  }
  return !1;
}
function Md(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(or !== null && or.has(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Qt ? Md(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? At(a, gt) : a.f & Mt && At(a, In), Lo(
        /** @type {Effect} */
        a
      ));
    }
}
function Dd(t) {
  var e = un, n = _n, r = Tn, i = qe, a = or, l = dt, c = Wn, o = Ii, u = t.f;
  un = /** @type {null | Value[]} */
  null, _n = 0, Tn = null, qe = u & (Kn | Qr) ? null : t, or = null, ea(t.ctx), Wn = !1, Ii = ++hi, t.ac !== null && (Jr(() => {
    t.ac.abort(rs);
  }), t.ac = null);
  try {
    t.f |= Us;
    var d = (
      /** @type {Function} */
      t.fn
    ), m = d();
    t.f |= xi;
    var f = bc(t);
    if (is() && Tn !== null && !Wn && f !== null && !(t.f & (Qt | In | gt)))
      for (var v = 0; v < /** @type {Source[]} */
      Tn.length; v++)
        Md(
          Tn[v],
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
      Tn !== null && (r === null ? r = Tn : r.push(.../** @type {Source[]} */
      Tn));
    }
    return t.f & Xr && (t.f ^= Xr), m;
  } catch (h) {
    return bc(t), cv(h);
  } finally {
    t.f ^= Us, un = e, _n = n, Tn = r, qe = i, or = a, ea(l), Wn = c, Ii = o;
  }
}
function bc(t) {
  var i;
  var e = t.deps, n = Te == null ? void 0 : Te.is_fork;
  if (un !== null) {
    var r;
    if (n || Ya(t, _n), e !== null && _n > 0)
      for (e.length = _n + un.length, r = 0; r < un.length; r++)
        e[_n + r] = un[r];
    else
      t.deps = e = un;
    if (Ro() && t.f & qn)
      for (r = _n; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && _n < e.length && (Ya(t, _n), e.length = _n);
  return e;
}
function gv(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = yh.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && e.f & Qt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (un === null || !Ka.call(un, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & qn && (a.f ^= qn), a.v !== Ct && To(a), a.ac !== null && Jr(() => {
      a.ac.abort(rs), a.ac = null, At(a, gt);
    }), tv(a), Ya(a, 0);
  }
}
function Ya(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      gv(t, n[r]);
}
function ra(t) {
  var e = t.f;
  if (!(e & jt)) {
    At(t, Mt);
    var n = Ke;
    Ke = t;
    try {
      e & (wn | Io) ? hv(t) : No(t), Cd(t);
      var r = Dd(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Rd;
      var i;
      Wu && qh && t.f & gt && t.deps;
    } finally {
      Ke = n;
    }
  }
}
async function Pd() {
  await Promise.resolve(), iv();
}
function s(t) {
  var e = t.f, n = (e & Qt) !== 0;
  if (qe !== null && !Wn) {
    var r = Ke !== null && (Ke.f & jt) !== 0;
    if (!r && (or === null || !or.has(t))) {
      var i = qe.deps;
      if (qe.f & Us)
        t.rv < hi && (t.rv = hi, un === null && i !== null && i[_n] === t ? _n++ : un === null ? un = [t] : un.push(t));
      else {
        qe.deps ?? (qe.deps = []), Ka.call(qe.deps, t) || qe.deps.push(t);
        var a = t.reactions;
        a === null ? t.reactions = [qe] : Ka.call(a, qe) || a.push(qe);
      }
    }
  }
  if (Nr && sr.has(t))
    return sr.get(t);
  if (n) {
    var l = (
      /** @type {Derived} */
      t
    );
    if (Nr) {
      var c = l.v;
      return (!(l.f & Mt) && l.reactions !== null || Ud(l)) && (c = wo(l)), sr.set(l, c), c;
    }
    var o = (l.f & qn) === 0 && !Wn && qe !== null && (qe.f & qn) !== 0, u = (l.f & xi) === 0;
    os(l) && (o && (l.f |= qn), rd(l)), o && !u && (id(l), Hd(l));
  }
  if (Gt != null && Gt.has(t))
    return Gt.get(t);
  if (t.f & Xr)
    throw t.v;
  return t.v;
}
function Hd(t) {
  if (t.f |= qn, t.deps !== null)
    for (const n of t.deps) {
      var e = n.reactions;
      e === null ? n.reactions = [t] : Ka.call(e, t) || e.push(t), n.f & Qt && !(n.f & qn) && (id(
        /** @type {Derived} */
        n
      ), Hd(
        /** @type {Derived} */
        n
      ));
    }
}
function Ud(t) {
  if (t.v === Ct) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (sr.has(e) || e.f & Qt && Ud(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Xn(t) {
  var e = Wn;
  try {
    return Wn = !0, t();
  } finally {
    Wn = e;
  }
}
function kd(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (ar in t)
      Kl(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && ar in n && Kl(n);
      }
  }
}
function Kl(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Kl(t[r], e);
      } catch {
      }
    const n = _o(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qu(n);
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
const vi = Symbol("events"), Bd = /* @__PURE__ */ new Set(), zl = /* @__PURE__ */ new Set();
function Do(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || Yl.call(e, a), !a.cancelBubble)
      return Jr(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (i.__removed = !1, On(() => {
    i.__removed || e.addEventListener(t, i, r);
  })) : e.addEventListener(t, i, r), i;
}
function bv(t, e, n, r = {}) {
  var i = Do(e, t, n, r);
  return () => {
    i.__removed = !0, t.removeEventListener(e, i, r);
  };
}
function Ua(t, e, n, r, i) {
  var a = { capture: r, passive: i }, l = Do(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ss(() => {
    l.__removed = !0, e.removeEventListener(t, l, a);
  });
}
function Rn(t, e, n) {
  (e[vi] ?? (e[vi] = {}))[t] = n;
}
function dn(t) {
  for (var e = 0; e < t.length; e++)
    Bd.add(t[e]);
  for (var n of zl)
    n(t);
}
let bl = null, pl = !1;
function Yl(t) {
  var g, p;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((g = t.composedPath) == null ? void 0 : g.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  bl = t, pl || (pl = !0, setTimeout(() => {
    pl = !1, bl = null;
  }));
  var l = 0, c = bl === t && t[vi];
  if (c) {
    var o = i.indexOf(c);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[vi] = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    o <= u && (l = o);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    po(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = qe, m = Ke;
    Ln(null), dr(null);
    try {
      for (var f, v = []; a !== null && a !== e; ) {
        try {
          var h = (p = a[vi]) == null ? void 0 : p[r];
          h != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a) && h.call(a, t);
        } catch (_) {
          f ? v.push(_) : f = _;
        }
        if (t.cancelBubble) break;
        l++, a = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (f) {
        for (let _ of v)
          queueMicrotask(() => {
            throw _;
          });
        throw f;
      }
    } finally {
      t[vi] = e, delete t.currentTarget, Ln(d), dr(m);
    }
  }
}
var Fu;
const _l = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Fu = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Fu.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function pv(t) {
  return (
    /** @type {string} */
    (_l == null ? void 0 : _l.createHTML(t)) ?? t
  );
}
function Fd(t) {
  var e = Ed("template");
  return e.innerHTML = pv(t.replaceAll("<!>", "<!---->")), e.content;
}
function ia(t, e) {
  var n = (
    /** @type {Effect} */
    Ke
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ge(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Fd(a ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ti(i)));
    var l = (
      /** @type {TemplateNode} */
      r || bd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ti(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ia(c, o);
    } else
      ia(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function _v(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        Fd(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ti(l)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ti(c);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ia(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function an(t, e) {
  return /* @__PURE__ */ _v(t, e, "svg");
}
function Dt(t = "") {
  {
    var e = lr(t + "");
    return ia(e, e), e;
  }
}
function me() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = lr();
  return t.append(e, n), ia(e, n), t;
}
function R(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Iv(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ev = [
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
function Sv(t) {
  return Ev.includes(t);
}
const Av = {
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
function yv(t) {
  return t = t.toLowerCase(), Av[t] ?? t;
}
const Tv = ["touchstart", "touchmove"];
function Cv(t) {
  return Tv.includes(t);
}
function xv(t) {
  let e = 0, n = yi(0), r;
  return () => {
    Ro() && (s(n), ls(() => (e === 0 && (r = Xn(() => t(() => ja(n)))), e += 1, () => {
      On(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ja(n));
      });
    })));
  };
}
var wv = ur | fa;
function Ov(t, e, n, r) {
  new Lv(t, e, n, r);
}
var Cn, bo, xn, gi, Xt, gn, $t, bn, tr, bi, Kr, Qi, $a, Cr, nl, et, Rv, Nv, Xl, jr, Mv, Zl, ka, Rs, Ql, Jl;
class Lv {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, i) {
    We(this, et);
    /** @type {Boundary | null} */
    ze(this, "parent");
    ze(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ze(this, "transform_error");
    /** @type {TemplateNode} */
    We(this, Cn);
    /** @type {TemplateNode | null} */
    We(this, bo, null);
    /** @type {BoundaryProps} */
    We(this, xn);
    /** @type {((anchor: Node) => void)} */
    We(this, gi);
    /** @type {Effect} */
    We(this, Xt);
    /** @type {Effect | null} */
    We(this, gn, null);
    /** @type {Effect | null} */
    We(this, $t, null);
    /** @type {Effect | null} */
    We(this, bn, null);
    /** @type {DocumentFragment | null} */
    We(this, tr, null);
    We(this, bi, 0);
    We(this, Kr, 0);
    We(this, Qi, !1);
    /** @type {Map<Effect, number>} */
    We(this, $a, /* @__PURE__ */ new Map());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    We(this, Cr, null);
    We(this, nl, xv(() => (Ge(this, Cr, yi(D(this, bi))), () => {
      Ge(this, Cr, null);
    })));
    var a;
    Ge(this, Cn, e), Ge(this, xn, n), Ge(this, gi, (l) => {
      var c = (
        /** @type {Effect} */
        Ke
      );
      c.b = this, c.f |= kl, r(l);
    }), this.parent = /** @type {Effect} */
    Ke.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((l) => l), Ge(this, Xt, va(() => {
      Me(this, et, Zl).call(this);
    }, wv));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    ed(e, D(this, $a));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!D(this, xn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    Me(this, et, Ql).call(this, e, n), Ge(this, bi, D(this, bi) + e), !(!D(this, Cr) || D(this, Qi)) && (Ge(this, Qi, !0), On(() => {
      Ge(this, Qi, !1), D(this, Cr) && na(D(this, Cr), D(this, bi));
    }));
  }
  get_effect_pending() {
    return D(this, nl).call(this), s(
      /** @type {Source<number>} */
      D(this, Cr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (e === Gu || !D(this, xn).onerror && !D(this, xn).failed)
      throw e;
    Te != null && Te.is_fork ? (D(this, gn) && Te.skip_effect(D(this, gn)), D(this, $t) && Te.skip_effect(D(this, $t)), D(this, bn) && Te.skip_effect(D(this, bn)), Te.oncommit(() => {
      Me(this, et, jr).call(this) || Me(this, et, Jl).call(this, e);
    })) : Me(this, et, Jl).call(this, e);
  }
}
Cn = new WeakMap(), bo = new WeakMap(), xn = new WeakMap(), gi = new WeakMap(), Xt = new WeakMap(), gn = new WeakMap(), $t = new WeakMap(), bn = new WeakMap(), tr = new WeakMap(), bi = new WeakMap(), Kr = new WeakMap(), Qi = new WeakMap(), $a = new WeakMap(), Cr = new WeakMap(), nl = new WeakMap(), et = new WeakSet(), Rv = function() {
  try {
    Ge(this, gn, cn(() => D(this, gi).call(this, D(this, Cn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Nv = function(e) {
  const n = D(this, xn).failed, { reset: r, invoke_onerror: i } = Me(this, et, Xl).call(this, e);
  On(i), n && Ge(this, bn, cn(() => {
    n(
      D(this, Cn),
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
Xl = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (!Me(this, et, jr).call(this)) {
      if (n) {
        Nh();
        return;
      }
      n = !0, r && Wh(), D(this, bn) !== null && _i(D(this, bn), () => {
        Ge(this, bn, null);
      }), Me(this, et, Rs).call(this, () => {
        Me(this, et, Zl).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var l, c;
    if (!Me(this, et, jr).call(this))
      try {
        r = !0, (c = (l = D(this, xn)).onerror) == null || c.call(l, e, i), r = !1;
      } catch (o) {
        rr(o, D(this, Xt) && D(this, Xt).parent);
      }
  } };
}, jr = function() {
  return (D(this, Xt).f & (jt | za)) !== 0;
}, Mv = function() {
  const e = D(this, xn).pending;
  e && (this.is_pending = !0, Ge(this, $t, cn(() => e(D(this, Cn)))), On(() => {
    if (!Me(this, et, jr).call(this)) {
      var n = Ge(this, tr, document.createDocumentFragment()), r = lr(), i = !1;
      if (n.append(r), Ge(this, gn, Me(this, et, Rs).call(this, () => {
        try {
          return cn(() => D(this, gi).call(this, r));
        } catch (a) {
          try {
            this.error(a), i = !0;
          } catch (l) {
            rr(l, D(this, Xt).parent);
          }
          return null;
        }
      })), D(this, gn) === null) {
        Ge(this, tr, null), i && Me(this, et, ka).call(
          this,
          /** @type {Batch} */
          Te
        );
        return;
      }
      D(this, Kr) === 0 && (D(this, Cn).before(n), Ge(this, tr, null), _i(
        /** @type {Effect} */
        D(this, $t),
        () => {
          Ge(this, $t, null);
        }
      ), Me(this, et, ka).call(
        this,
        /** @type {Batch} */
        Te
      ));
    }
  }));
}, Zl = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ge(this, Kr, 0), Ge(this, bi, 0), Ge(this, gn, cn(() => {
      D(this, gi).call(this, D(this, Cn));
    })), D(this, Kr) > 0) {
      var e = Ge(this, tr, document.createDocumentFragment());
      Mo(D(this, gn), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        D(this, xn).pending
      );
      Ge(this, $t, cn(() => n(D(this, Cn))));
    } else
      Me(this, et, ka).call(
        this,
        /** @type {Batch} */
        Te
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
ka = function(e) {
  this.is_pending = !1, e.transfer_reactions(D(this, $a));
}, /**
 * @template T
 * @param {() => T} fn
 */
Rs = function(e) {
  var n = Ke, r = qe, i = dt;
  dr(D(this, Xt)), Ln(D(this, Xt)), ea(D(this, Xt).ctx);
  try {
    return Ai.ensure(), e();
  } finally {
    dr(n), Ln(r), ea(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ql = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && Me(r = this.parent, et, Ql).call(r, e, n);
    return;
  }
  Ge(this, Kr, D(this, Kr) + e), D(this, Kr) === 0 && (Me(this, et, ka).call(this, n), D(this, $t) && _i(D(this, $t), () => {
    Ge(this, $t, null);
  }), D(this, tr) && (D(this, Cn).before(D(this, tr)), Ge(this, tr, null)));
}, /**
 * @param {unknown} error
 */
Jl = function(e) {
  D(this, gn) && (Wt(D(this, gn)), Ge(this, gn, null)), D(this, $t) && (Wt(D(this, $t)), Ge(this, $t, null)), D(this, bn) && (Wt(D(this, bn)), Ge(this, bn, null));
  let n = D(this, xn).failed;
  const r = (i) => {
    if (Me(this, et, jr).call(this)) return;
    const { reset: a, invoke_onerror: l } = Me(this, et, Xl).call(this, i);
    l(), n && !Me(this, et, jr).call(this) && Ge(this, bn, Me(this, et, Rs).call(this, () => {
      try {
        return cn(() => {
          var c = (
            /** @type {Effect} */
            Ke
          );
          c.b = this, c.f |= kl, n(
            D(this, Cn),
            () => i,
            () => a
          );
        });
      } catch (c) {
        return rr(
          c,
          /** @type {Effect} */
          D(this, Xt).parent
        ), null;
      }
    }));
  };
  On(() => {
    if (!Me(this, et, jr).call(this)) {
      var i;
      try {
        i = this.transform_error(e);
      } catch (a) {
        rr(a, D(this, Xt) && D(this, Xt).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (a) => rr(a, D(this, Xt) && D(this, Xt).parent)
      ) : r(i);
    }
  });
};
let Vs = !0;
function hs(t) {
  Vs = t;
}
function ut(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[Ma] ?? (t[Ma] = t.nodeValue)) && (t[Ma] = n, t.nodeValue = `${n}`);
}
function Dv(t, e) {
  return Pv(t, e);
}
const vs = /* @__PURE__ */ new Map();
function Pv(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: l = !0, transformError: c }) {
  lv();
  var o = void 0, u = dv(() => {
    var d = n ?? e.appendChild(lr());
    Ov(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        Ce({});
        var h = (
          /** @type {ComponentContext} */
          dt
        );
        a && (h.c = a), i && (r.$$events = i), Vs = l, o = t(v, r) || yo(), Vs = !0, xe();
      },
      c
    );
    var m = /* @__PURE__ */ new Set(), f = (v) => {
      for (var h = 0; h < v.length; h++) {
        var g = v[h];
        if (!m.has(g)) {
          m.add(g);
          var p = Cv(g);
          for (const y of [e, document]) {
            var _ = vs.get(y);
            _ === void 0 && (_ = /* @__PURE__ */ new Map(), vs.set(y, _));
            var I = _.get(g);
            I === void 0 ? (y.addEventListener(g, Yl, { passive: p }), _.set(g, 1)) : _.set(g, I + 1);
          }
        }
      }
    };
    return f(al(Bd)), zl.add(f), () => {
      var p;
      for (var v of m)
        for (const _ of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            vs.get(_)
          ), g = (
            /** @type {number} */
            h.get(v)
          );
          --g == 0 ? (_.removeEventListener(v, Yl), h.delete(v), h.size === 0 && vs.delete(_)) : h.set(v, g);
        }
      zl.delete(f), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return Hv.set(o, u), o;
}
let Hv = /* @__PURE__ */ new WeakMap();
var Bn, nr, pn, pi, es, ts, rl;
class ll {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    ze(this, "anchor");
    /** @type {Map<Batch, Key>} */
    We(this, Bn, /* @__PURE__ */ new Map());
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
    We(this, nr, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    We(this, pn, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    We(this, pi, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    We(this, es, !0);
    /**
     * @param {Batch} batch
     */
    We(this, ts, (e) => {
      if (D(this, Bn).has(e)) {
        var n = (
          /** @type {Key} */
          D(this, Bn).get(e)
        ), r = D(this, nr).get(n);
        if (r)
          Fs(r), D(this, pi).delete(n);
        else {
          var i = D(this, pn).get(n);
          i && (Fs(i.effect), D(this, nr).set(n, i.effect), D(this, pn).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, l] of D(this, Bn)) {
          if (D(this, Bn).delete(a), a === e)
            break;
          const c = D(this, pn).get(l);
          c && (Wt(c.effect), D(this, pn).delete(l));
        }
        for (const [a, l] of D(this, nr)) {
          if (a === n || D(this, pi).has(a)) continue;
          const c = () => {
            if (Array.from(D(this, Bn).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Mo(l, u), u.append(lr()), D(this, pn).set(a, { effect: l, fragment: u });
            } else
              Wt(l);
            D(this, pi).delete(a), D(this, nr).delete(a);
          };
          D(this, es) || !r ? (D(this, pi).add(a), _i(l, c, !1)) : c();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    We(this, rl, (e) => {
      D(this, Bn).delete(e);
      const n = Array.from(D(this, Bn).values());
      for (const [r, i] of D(this, pn))
        n.includes(r) || (Wt(i.effect), D(this, pn).delete(r));
    });
    this.anchor = e, Ge(this, es, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      Te
    ), i = Id();
    if (n && !D(this, nr).has(e) && !D(this, pn).has(e))
      if (i) {
        var a = document.createDocumentFragment(), l = lr();
        a.append(l), D(this, pn).set(e, {
          effect: cn(() => n(l)),
          fragment: a
        });
      } else
        D(this, nr).set(
          e,
          cn(() => n(this.anchor))
        );
    if (D(this, Bn).set(r, e), i) {
      for (const [c, o] of D(this, nr))
        c === e ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [c, o] of D(this, pn))
        c === e ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(D(this, ts)), r.ondiscard(D(this, rl));
    } else
      D(this, ts).call(this, r);
  }
}
Bn = new WeakMap(), nr = new WeakMap(), pn = new WeakMap(), pi = new WeakMap(), es = new WeakMap(), ts = new WeakMap(), rl = new WeakMap();
function Ee(t, e, ...n) {
  var r = new ll(t);
  va(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, ur);
}
function at(t) {
  dt === null && Ao(), ha && dt.l !== null ? Uv(dt).m.push(t) : Ae(() => {
    const e = Xn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Dr(t) {
  dt === null && Ao(), at(() => () => Xn(t));
}
function Uv(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function Ie(t, e, n = !1) {
  var r = new ll(t), i = n ? ur : 0;
  function a(l, c) {
    r.ensure(l, c);
  }
  va(() => {
    var l = !1;
    e((c, o = 0) => {
      l = !0, a(o, c);
    }), l || a(-1, null);
  }, i);
}
function Fi(t, e) {
  return e;
}
function kv(t, e, n) {
  for (var r = [], i = e.length, a, l = e.length, c = 0; c < i; c++) {
    let m = e[c];
    _i(
      m,
      () => {
        if (a) {
          if (a.pending.delete(m), a.done.add(m), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            $l(t, al(a.done)), f.delete(a), f.size === 0 && (t.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null && t.pending.size === 0;
    if (o) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      ov(d), d.append(u), t.items.clear();
    }
    $l(t, e, !o);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function $l(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of t.pending.values())
      for (const c of l)
        r.add(
          /** @type {EachItem} */
          t.items.get(c).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (r != null && r.has(a)) {
      a.f |= ir;
      const l = document.createDocumentFragment();
      Mo(a, l);
    } else
      Wt(e[i], n);
  }
}
var pc;
function Gn(t, e, n, r, i, a = null) {
  var l = t, c = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      t
    );
    l = u.appendChild(lr());
  }
  var d = null, m = /* @__PURE__ */ xo(() => {
    var I = n();
    return (
      /** @type {V[]} */
      il(I) ? I : I == null ? [] : al(I)
    );
  }), f = /* @__PURE__ */ new Map(), v = !0;
  function h(I) {
    if (!(_.effect.f & jt)) {
      _.pending.delete(I);
      var y = s(m);
      _.fallback = d, Bv(_, y, l, e, r), d !== null && (y.length === 0 ? d.f & ir ? (d.f ^= ir, Ba(d, null, l)) : Fs(d) : _i(d, () => {
        d = null;
      }));
    }
  }
  function g(I) {
    _.pending.delete(I);
  }
  var p = va(() => {
    for (var I = (
      /** @type {V[]} */
      s(m)
    ), y = I.length, A = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      Te
    ), E = Id(), x = 0; x < y; x += 1) {
      var T = I[x], S = r(T, x), L = v ? null : c.get(S);
      L ? (L.v && na(L.v, T), L.i && na(L.i, x), E && C.unskip_effect(L.e)) : (L = Fv(
        c,
        v ? l : pc ?? (pc = lr()),
        T,
        S,
        x,
        i,
        e,
        n
      ), v || (L.e.f |= ir), c.set(S, L)), A.add(S);
    }
    if (y === 0 && a && !d && (v ? d = cn(() => a(l)) : (d = cn(() => a(pc ?? (pc = lr()))), d.f |= ir)), y > A.size && Ph(), !v)
      if (f.set(C, A), E) {
        for (const [q, k] of c)
          A.has(q) || C.skip_effect(k.e);
        C.oncommit(h), C.ondiscard(g);
      } else
        h(C);
    s(m);
  }), _ = { effect: p, items: c, pending: f, outrogroups: null, fallback: d };
  v = !1;
}
function Sa(t) {
  for (; t !== null && !(t.f & Kn); )
    t = t.next;
  return t;
}
function Bv(t, e, n, r, i) {
  var L, q, k, Y, O, w, N, W, B;
  var a = (r & 8) !== 0, l = e.length, c = t.items, o = Sa(t.effect.first), u, d = null, m, f = [], v = [], h, g, p, _;
  if (a)
    for (_ = 0; _ < l; _ += 1)
      h = e[_], g = i(h, _), p = /** @type {EachItem} */
      c.get(g).e, p.f & ir || ((q = (L = p.nodes) == null ? void 0 : L.a) == null || q.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(p));
  for (_ = 0; _ < l; _ += 1) {
    if (h = e[_], g = i(h, _), p = /** @type {EachItem} */
    c.get(g).e, t.outrogroups !== null)
      for (const K of t.outrogroups)
        K.pending.delete(p), K.done.delete(p);
    if (p.f & nn && (Fs(p), a && ((Y = (k = p.nodes) == null ? void 0 : k.a) == null || Y.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(p))), p.f & ir)
      if (p.f ^= ir, p === o)
        Ba(p, null, n);
      else {
        var I = d ? d.next : o;
        p === t.effect.last && (t.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Fr(t, d, p), Fr(t, p, I), Ba(p, I, n), d = p, f = [], v = [], o = Sa(d.next);
        continue;
      }
    if (p !== o) {
      if (u !== void 0 && u.has(p)) {
        if (f.length < v.length) {
          var y = v[0], A;
          d = y.prev;
          var C = f[0], E = f[f.length - 1];
          for (A = 0; A < f.length; A += 1)
            Ba(f[A], y, n);
          for (A = 0; A < v.length; A += 1)
            u.delete(v[A]);
          Fr(t, C.prev, E.next), Fr(t, d, C), Fr(t, E, y), o = y, d = E, _ -= 1, f = [], v = [];
        } else
          u.delete(p), Ba(p, o, n), Fr(t, p.prev, p.next), Fr(t, p, d === null ? t.effect.first : d.next), Fr(t, d, p), d = p;
        continue;
      }
      for (f = [], v = []; o !== null && o !== p; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(o), v.push(o), o = Sa(o.next);
      if (o === null)
        continue;
    }
    p.f & ir || f.push(p), d = p, o = Sa(p.next);
  }
  if (t.outrogroups !== null) {
    for (const K of t.outrogroups)
      K.pending.size === 0 && ($l(t, al(K.done)), (O = t.outrogroups) == null || O.delete(K));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var x = [];
    if (u !== void 0)
      for (p of u)
        p.f & nn || x.push(p);
    for (; o !== null; )
      !(o.f & nn) && o !== t.fallback && x.push(o), o = Sa(o.next);
    var T = x.length;
    if (T > 0) {
      var S = r & 4 && l === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < T; _ += 1)
          (N = (w = x[_].nodes) == null ? void 0 : w.a) == null || N.measure();
        for (_ = 0; _ < T; _ += 1)
          (B = (W = x[_].nodes) == null ? void 0 : W.a) == null || B.fix();
      }
      kv(t, x, S);
    }
  }
  a && On(() => {
    var K, H;
    if (m !== void 0)
      for (p of m)
        (H = (K = p.nodes) == null ? void 0 : K.a) == null || H.apply();
  });
}
function Fv(t, e, n, r, i, a, l, c) {
  var o = l & 1 ? l & 16 ? yi(n) : /* @__PURE__ */ hd(n, !1, !1) : null, u = l & 2 ? yi(i) : null;
  return {
    v: o,
    i: u,
    e: cn(() => (a(e, o ?? n, u ?? i, c), () => {
      t.delete(r);
    }))
  };
}
function Ba(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, a = e && !(e.f & ir) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ as(r)
      );
      if (a.before(r), r === i)
        return;
      r = l;
    }
}
function Fr(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Pr(t, e, n) {
  var r = new ll(t);
  va(() => {
    var i = e() ?? null;
    r.ensure(i, i && ((a) => n(a, i)));
  }, ur);
}
const Vv = () => performance.now(), wr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Vv(),
  tasks: /* @__PURE__ */ new Set()
};
function Vd() {
  const t = wr.now();
  wr.tasks.forEach((e) => {
    e.c(t) || (wr.tasks.delete(e), e.f());
  }), wr.tasks.size !== 0 && wr.tick(Vd);
}
function Gv(t) {
  let e;
  return wr.tasks.size === 0 && wr.tick(Vd), {
    promise: new Promise((n) => {
      wr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      wr.tasks.delete(e);
    }
  };
}
function ms(t, e) {
  Jr(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function jv(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function _c(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const l = jv(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const Wv = (t) => t;
let Gd = null;
function Ic(t) {
  Gd = t;
}
function qv(t, e, n) {
  var r = Gd ?? /** @type {Effect} */
  Ke, i = (
    /** @type {EffectNodes} */
    r.nodes
  ), a, l, c, o = null;
  i.a ?? (i.a = {
    element: t,
    measure() {
      a = this.element.getBoundingClientRect();
    },
    apply() {
      if (c == null || c.abort(), l = this.element.getBoundingClientRect(), a.left !== l.left || a.right !== l.right || a.top !== l.top || a.bottom !== l.bottom) {
        const u = e()(this.element, { from: a, to: l }, n == null ? void 0 : n());
        c = js(
          this.element,
          u,
          void 0,
          1,
          () => {
          },
          () => {
            c == null || c.abort(), c = void 0;
          }
        );
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: u, width: d, height: m } = getComputedStyle(t);
        if (u !== "absolute" && u !== "fixed") {
          var f = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          o = {
            position: f.position,
            width: f.width,
            height: f.height,
            transform: f.transform
          }, f.position = "absolute", f.width = d, f.height = m;
          var v = t.getBoundingClientRect();
          if (a.left !== v.left || a.top !== v.top) {
            var h = `translate(${a.left - v.left}px, ${a.top - v.top}px)`;
            f.transform = f.transform ? `${f.transform} ${h}` : h;
          }
        }
      }
    },
    unfix() {
      if (o) {
        var u = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        u.position = o.position, u.width = o.width, u.height = o.height, u.transform = o.transform;
      }
    }
  }), i.a.element = t;
}
function Gs(t, e, n, r) {
  var y;
  var i = (t & 1) !== 0, a = (t & 2) !== 0, l = i && a, c = (t & 4) !== 0, o = l ? "both" : i ? "in" : "out", u, d = e.inert, m = e.style.overflow, f, v;
  function h() {
    return Jr(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: o
    })));
  }
  var g = {
    is_global: c,
    in() {
      var A;
      if (e.inert = d, !i) {
        v == null || v.abort(), (A = v == null ? void 0 : v.reset) == null || A.call(v);
        return;
      }
      a || f == null || f.abort(), f = js(
        e,
        h(),
        v,
        1,
        () => {
          ms(e, "introstart");
        },
        () => {
          ms(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = m;
        }
      );
    },
    out(A) {
      if (!a) {
        A == null || A(), u = void 0;
        return;
      }
      e.inert = !0, v = js(
        e,
        h(),
        f,
        0,
        () => {
          ms(e, "outrostart");
        },
        () => {
          ms(e, "outroend"), A == null || A();
        }
      );
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Ke
  );
  if (((y = p.nodes).t ?? (y.t = [])).push(g), i && Vs) {
    var _ = c;
    if (!_) {
      for (var I = (
        /** @type {Effect | null} */
        p.parent
      ); I && I.f & ur; )
        for (; (I = I.parent) && !(I.f & wn); )
          ;
      _ = !I || (I.f & xi) !== 0;
    }
    _ && $r(() => {
      Xn(() => g.in());
    });
  }
}
function js(t, e, n, r, i, a) {
  var l = r === 1, c = !1;
  if (ki(e)) {
    var o;
    return On(() => {
      if (!c) {
        var g = e({ direction: l ? "in" : "out" });
        o = js(t, g, n, r, i, a);
      }
    }), {
      abort: () => {
        c = !0, o == null || o.abort();
      },
      deactivate: () => o == null ? void 0 : o.deactivate(),
      reset: () => o == null ? void 0 : o.reset(),
      t: () => (o == null ? void 0 : o.t()) ?? 1 - r
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration) && !(e != null && e.delay))
    return i(), a(), {
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: u = 0, css: d, tick: m, easing: f = Wv } = e;
  var v, h = () => 1 - r;
  return On(() => {
    if (!c) {
      var g = [];
      if (l && n === void 0 && (m && m(0, 1), d)) {
        var p = _c(d(0, 1));
        g.push(p, p);
      }
      v = t.animate(g, { duration: u, fill: "forwards" }), v.onfinish = () => {
        v.cancel(), i();
        var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
        n == null || n.abort();
        var I = r - _, y = (
          /** @type {number} */
          e.duration * Math.abs(I)
        ), A = [];
        if (y > 0) {
          var C = !1;
          if (d)
            for (var E = Math.ceil(y / 16.666666666666668), x = 0; x <= E; x += 1) {
              var T = _ + I * f(x / E), S = _c(d(T, 1 - T));
              A.push(S), C || (C = S.overflow === "hidden");
            }
          C && (t.style.overflow = "hidden"), h = () => {
            var L = (
              /** @type {number} */
              /** @type {globalThis.Animation} */
              v.currentTime
            );
            return _ + I * f(L / y);
          }, m && Gv(() => {
            if (v.playState !== "running") return !1;
            var L = h();
            return m(L, 1 - L), !0;
          });
        }
        v = t.animate(A, { duration: y, fill: "forwards" }), v.onfinish = () => {
          h = () => r, m == null || m(r, 1 - r), a();
        };
      };
    }
  }), {
    abort: () => {
      c = !0, v && (v.cancel(), v.effect = null, v.onfinish = ve);
    },
    deactivate: () => {
      a = ve;
    },
    reset: () => {
      r === 0 && (m == null || m(1, 0));
    },
    t: () => h()
  };
}
function Ec(t, e, n, r, i, a) {
  var l = null, c = (
    /** @type {TemplateNode} */
    t
  ), o = (
    /** @type {Effect} */
    Ke
  ), u = new ll(c, !1);
  va(() => {
    const d = e() || null;
    var m = d === "svg" ? Sh : void 0;
    if (d === null) {
      u.ensure(null, null), hs(!0);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        var v = Mh;
        if (l = Ed(d, m), ia(l, l), r) {
          var h = null, g = l.appendChild(lr());
          Ic(o), r(l, g), h == null || h.remove(), Ic(null);
        }
        Ke.nodes.end = l, v || f.before(l);
      }
    }), hs(!0), () => {
      d && hs(!1);
    };
  }, ur), ss(() => {
    hs(!0);
  });
}
function Pe(t, e, n) {
  $r(() => {
    var r = Xn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ls(() => {
        var l = n();
        kd(l), i && So(a, l) && (a = l, r.update(l));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Kv(t, e) {
  var n = void 0, r;
  Td(() => {
    n !== (n = e()) && (r && (Wt(r), r = null), n && (r = cn(() => {
      $r(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function jd(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = jd(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function zv() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = jd(t)) && (r && (r += " "), r += e);
  return r;
}
function Wd(t) {
  return typeof t == "object" ? zv(t) : t ?? "";
}
const Sc = [...` 	
\r\f \v\uFEFF`];
function Yv(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var c = l + a;
          (l === 0 || Sc.includes(r[l - 1])) && (c === r.length || Sc.includes(r[c])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(c + 1) : l = c;
        }
  }
  return r === "" ? null : r;
}
function Ac(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i of Object.keys(t)) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Il(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Xv(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var a = !1, l = 0, c = !1, o = [];
      r && o.push(...Object.keys(r).map(Il)), i && o.push(...Object.keys(i).map(Il));
      var u = 0, d = -1;
      const g = t.length;
      for (var m = 0; m < g; m++) {
        var f = t[m];
        if (c ? f === "/" && t[m - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[m + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? l++ : f === ")" && l--, !c && a === !1 && l === 0) {
          if (f === ":" && d === -1)
            d = m;
          else if (f === ";" || m === g - 1) {
            if (d !== -1) {
              var v = Il(t.substring(u, d).trim());
              if (!o.includes(v)) {
                f !== ";" && m++;
                var h = t.substring(u, m).trim();
                n += " " + h + ";";
              }
            }
            u = m + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Ac(r)), i && (n += Ac(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Po(t, e, n, r, i, a) {
  var l = (
    /** @type {any} */
    t[Bl]
  );
  if (l !== n || l === void 0) {
    var c = Yv(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t[Bl] = n;
  } else if (a && i !== a)
    for (var o in a) {
      var u = !!a[o];
      (i == null || u !== !!i[o]) && t.classList.toggle(o, u);
    }
  return a;
}
function El(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ut(t, e, n, r) {
  var i = (
    /** @type {any} */
    t[Fl]
  );
  if (i !== e) {
    var a = Xv(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t[Fl] = e;
  } else r && (Array.isArray(r) ? (El(t, n == null ? void 0 : n[0], r[0]), El(t, n == null ? void 0 : n[1], r[1], "important")) : El(t, n, r));
  return r;
}
function qd(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function yc(t, e) {
  var n = !("__defaultValue" in t);
  !n && t.__defaultValue === e || (t.__defaultValue = e, Kd(t, !n || "__value" in t));
}
function Kd(t, e) {
  var n = t.__defaultValue, r = t.multiple, i = r ? n ?? [] : null;
  if (!(r && !il(i))) {
    var a = t.selectedIndex, l = e && r ? new Set(t.selectedOptions) : null;
    for (var c of t.options) {
      var o = ji(c);
      qd(
        c,
        r ? (
          /** @type {any[]} */
          i.includes(o)
        ) : md(o, n)
      );
    }
    if (e)
      if (l !== null)
        for (c of t.options) {
          var u = l.has(c);
          c.selected !== u && (c.selected = u);
        }
      else t.selectedIndex !== a && (t.selectedIndex = a);
  }
}
function Ws(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!il(e))
      return Rh();
    for (var r of t.options)
      r.selected = e.includes(ji(r));
    return;
  }
  for (r of t.options) {
    var i = ji(r);
    if (md(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function zd(t) {
  var e = new MutationObserver((n) => {
    n.every(Qv) || ("__defaultValue" in t && Kd(t, !1), "__value" in t && Ws(t, t.__value));
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
  }), ss(() => {
    e.disconnect();
  });
}
function Zv(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet(), i = !0;
  Co(t, "change", (a) => {
    var l = a ? "[selected]" : ":checked", c;
    if (t.multiple)
      c = [].map.call(t.querySelectorAll(l), ji);
    else {
      var o = t.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      c = o && ji(o);
    }
    n(c), t.__value = c, Te !== null && r.add(Te);
  }), $r(() => {
    var a = e();
    if (t === document.activeElement) {
      var l = (
        /** @type {Batch} */
        Te
      );
      if (r.has(l))
        return;
    }
    if (Ws(t, a, i), i && a === void 0) {
      var c = t.querySelector(":checked");
      c !== null && (a = ji(c), n(a));
    }
    t.__value = a, i = !1;
  });
}
function ji(t) {
  return "__value" in t ? t.__value : t.value;
}
function Qv(t) {
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
const Aa = Symbol("class"), ya = Symbol("style"), Yd = Symbol("is custom element"), Xd = Symbol("is html"), Jv = sl ? "input" : "INPUT", $v = sl ? "option" : "OPTION", Zd = sl ? "select" : "SELECT", Qd = sl ? "progress" : "PROGRESS";
function Tc(t, e) {
  var n = Ho(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== Qd) || (t.value = e ?? "");
}
function Lr(t, e, n, r) {
  var i = Ho(t), a = i[e];
  a !== (i[e] = n) && (e === "loading" && (t[Oh] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Jd(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function em(t, e, n, r, i = !1, a = !1) {
  var l = Ho(t), c = l[Yd], o = !l[Xd], u = e || {}, d = t.nodeName === $v, m = t.nodeName === Zd;
  try {
    for (var f in e)
      !(f in n) && f[0] + f[1] !== "$$" && (n[f] = null);
    n.class ? n.class = Wd(n.class) : (r || n[Aa]) && (n.class = null), n[ya] && (n.style ?? (n.style = null));
    var v = Jd(t);
    if (t.nodeName === Jv && "type" in n && ("value" in n || "__value" in n)) {
      var h = n.type;
      (h !== u.type || h === void 0 && t.hasAttribute("type")) && (u.type = h, Lr(t, "type", h, a));
    }
    for (const C in n) {
      let E = n[C];
      if (d && C === "value" && E == null) {
        t.value = t.__value = "", u[C] = E;
        continue;
      }
      if (C === "class") {
        var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
        Po(t, g, E, r, e == null ? void 0 : e[Aa], n[Aa]), u[C] = E, u[Aa] = n[Aa];
        continue;
      }
      if (C === "style") {
        Ut(t, E, e == null ? void 0 : e[ya], n[ya]), u[C] = E, u[ya] = n[ya];
        continue;
      }
      var p = u[C];
      if (!(E === p && !(E === void 0 && t.hasAttribute(C)))) {
        u[C] = E;
        var _ = C[0] + C[1];
        if (_ !== "$$")
          if (_ === "on") {
            const x = {}, T = "$$" + C;
            let S = C.slice(2);
            var I = Sv(S);
            if (Iv(S) && (S = S.slice(0, -7), x.capture = !0), !I && p) {
              if (E != null) continue;
              t.removeEventListener(S, u[T], x), u[T] = null;
            }
            if (I)
              Rn(S, t, E), dn([S]);
            else if (E != null) {
              let L = function(q) {
                u[C].call(this, q);
              };
              u[T] = Do(S, t, L, x);
            }
          } else if (C === "style")
            Lr(t, C, E);
          else if (C === "autofocus")
            Zh(
              /** @type {HTMLElement} */
              t,
              !!E
            );
          else if (!c && (C === "__value" || C === "value" && E != null))
            t.__value = E, (p == null || // @ts-ignore
            t.value !== E || E === 0 && t.nodeName === Qd) && (t.value = E);
          else if (C === "selected" && d)
            qd(
              /** @type {HTMLOptionElement} */
              t,
              E
            );
          else {
            var y = C;
            o || (y = yv(y));
            var A = y === "defaultValue" || y === "defaultChecked";
            if (m && y === "defaultValue") continue;
            if (E == null && !c && !A)
              if (l[C] = null, y === "value" || y === "checked") {
                let x = (
                  /** @type {HTMLInputElement} */
                  t
                );
                const T = e === void 0;
                if (y === "value") {
                  let S = x.defaultValue;
                  x.removeAttribute(y), x.defaultValue = S, x.value = x.__value = T ? S : null;
                } else {
                  let S = x.defaultChecked;
                  x.removeAttribute(y), x.defaultChecked = S, x.checked = T ? S : !1;
                }
              } else
                t.removeAttribute(C);
            else A || (c || typeof E != "string") && v.has(y) ? (t[y] = E, y in l && (l[y] = Ct)) : typeof E != "function" && Lr(t, y, E, a);
          }
      }
    }
  } finally {
  }
  return u;
}
function Fe(t, e, n = [], r = [], i = [], a, l = !1, c = !1) {
  td(i, n, r, (o) => {
    var u = void 0, d = {}, m = t.nodeName === Zd, f = !1;
    if (Td(() => {
      var h = e(...o.map(s)), g = em(
        t,
        u,
        h,
        a,
        l,
        c
      );
      if (f && m) {
        var p = (
          /** @type {HTMLSelectElement} */
          t
        );
        "defaultValue" in h && yc(p, h.defaultValue), "value" in h && Ws(p, h.value);
      }
      for (let I of Object.getOwnPropertySymbols(d))
        h[I] || Wt(d[I]);
      for (let I of Object.getOwnPropertySymbols(h)) {
        var _ = h[I];
        I.description === Ah && (!u || _ !== u[I]) && (d[I] && Wt(d[I]), d[I] = cn(() => Kv(t, () => _))), g[I] = _;
      }
      u = g;
    }), m) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      $r(() => {
        var h = (
          /** @type {Record<string | symbol, any>} */
          u
        );
        "defaultValue" in h && yc(v, h.defaultValue), Ws(v, h.value, !0), zd(v);
      });
    }
    f = !0;
  });
}
function Ho(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[ws] ?? (t[ws] = {
      [Yd]: t.nodeName.includes("-"),
      [Xd]: t.namespaceURI === ju
    })
  );
}
var Cc = /* @__PURE__ */ new Map();
function Jd(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Cc.get(e);
  if (n) return n;
  Cc.set(e, n = /* @__PURE__ */ new Set());
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = qu(i);
    for (var l in r)
      r[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && n.add(l);
    i = _o(i);
  }
  return n;
}
function Xa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Co(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Sl(t) ? Al(a) : a, n(a), Te !== null && r.add(Te), await Pd(), a !== (a = e())) {
      var l = t.selectionStart, c = t.selectionEnd, o = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        l === c && c === o && u > o ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = l, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Xn(e) == null && t.value && (n(Sl(t) ? Al(t.value) : t.value), Te !== null && r.add(Te)), ls(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Te
      );
      if (r.has(a))
        return;
    }
    Sl(t) && i === Al(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function tm(t, e, n = e) {
  Co(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Xn(e) == null && n(t.checked), ls(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Sl(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Al(t) {
  return t === "" ? null : +t;
}
function yl(t, e) {
  return t === e || (t == null ? void 0 : t[ar]) === e;
}
function _e(t = yo(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    dt.r
  ), a = (
    /** @type {Effect} */
    Ke
  );
  return $r(() => {
    var l, c;
    return ls(() => {
      l = c, c = (r == null ? void 0 : r()) || [], Xn(() => {
        yl(n(...c), t) || (e(t, ...c), l && yl(n(...l), t) && e(null, ...l));
      });
    }), () => {
      let o = a;
      for (; o !== i && o.parent !== null && o.parent.f & za; )
        o = o.parent;
      const u = () => {
        c && yl(n(...c), t) && e(null, ...c);
      }, d = o.teardown;
      o.teardown = () => {
        u(), d == null || d();
      };
    };
  }), t;
}
function nm(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    dt
  ), n = e.l.u;
  if (!n) return;
  let r = () => kd(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ ta(() => {
      let c = !1;
      const o = e.s;
      for (const u in o)
        o[u] !== a[u] && (a[u] = o[u], c = !0);
      return c && i++, i;
    });
    r = () => s(l);
  }
  n.b.length && yd(() => {
    xc(e, r), Ps(n.b);
  }), Ae(() => {
    const i = Xn(() => n.m.map(xh));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Ae(() => {
    xc(e, r), Ps(n.a);
  });
}
function xc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Uo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = Xn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Di = [];
function rm(t, e) {
  return {
    subscribe: rn(t, e).subscribe
  };
}
function rn(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (So(t, c) && (t = c, n)) {
      const o = !Di.length;
      for (const u of r)
        u[1](), Di.push(u, t);
      if (o) {
        for (let u = 0; u < Di.length; u += 2)
          Di[u][0](Di[u + 1]);
        Di.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function l(c, o = ve) {
    const u = [c, o];
    return r.add(u), r.size === 1 && (n = e(i, a) || ve), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: l };
}
function ma(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return rm(n, (l, c) => {
    let o = !1;
    const u = [];
    let d = 0, m = ve;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? u[0] : u, l, c);
      a ? l(h) : m = typeof h == "function" ? h : ve;
    }, v = i.map(
      (h, g) => Uo(
        h,
        (p) => {
          u[g] = p, d &= ~(1 << g), o && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return o = !0, f(), function() {
      Ps(v), m(), o = !1;
    };
  });
}
function $d(t) {
  let e;
  return Uo(t, (n) => e = n)(), e;
}
let gs = !1, eo = Symbol("unmounted");
function cr(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ hd(void 0),
    unsubscribe: ve
  });
  if (r.store !== t && !(eo in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = Uo(t, (a) => {
        i ? r.source.v = a : j(r.source, a);
      }), i = !1;
    }
  return t && eo in n ? $d(t) : s(r.source);
}
function Ci(t, e) {
  return im(t, e), e;
}
function Hr() {
  const t = {};
  function e() {
    ss(() => {
      for (var n in t)
        t[n].unsubscribe();
      po(t, eo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function im(t, e) {
  try {
    t.set(e);
  } finally {
  }
}
function am(t) {
  var e = gs;
  try {
    return gs = !1, [t(), gs];
  } finally {
    gs = e;
  }
}
const sm = {
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
function Xe(t, e, n) {
  return new Proxy({ props: t, exclude: e }, sm);
}
const lm = {
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
      const a = Yr(i, e);
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
        const i = Yr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === ar || e === Xu) return !1;
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
function it(...t) {
  return new Proxy({ props: t }, lm);
}
function b(t, e, n, r) {
  var A;
  var i = !ha || (n & 2) !== 0, a = (n & 8) !== 0, l = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), o = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => l && i ? (u ?? (u = /* @__PURE__ */ ta(
    /** @type {() => V} */
    r
  )), s(u)) : (o && (o = !1, c = l ? Xn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c);
  let m;
  if (a) {
    var f = ar in t || Xu in t;
    m = ((A = Yr(t, e)) == null ? void 0 : A.set) ?? (f && e in t ? (C) => t[e] = C : void 0);
  }
  var v, h = !1;
  a ? [v, h] = am(() => (
    /** @type {V} */
    t[e]
  )) : v = /** @type {V} */
  t[e], v === void 0 && r !== void 0 && (v = d(), m && (i && Fh(), m(v)));
  var g;
  if (i ? g = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C === void 0 ? d() : (o = !0, C);
  } : g = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C !== void 0 && (c = /** @type {V} */
    void 0), C === void 0 ? c : C;
  }, i && !(n & 4))
    return g;
  if (m) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(C, E) {
        return arguments.length > 0 ? ((!i || !E || p || h) && m(E ? g() : C), C) : g();
      }
    );
  }
  var _ = !1, I = (n & 1 ? ta : xo)(() => (_ = !1, g()));
  a && s(I);
  var y = (
    /** @type {Effect} */
    Ke
  );
  return (
    /** @type {() => V} */
    function(C, E) {
      if (arguments.length > 0) {
        const x = E ? s(I) : i && a ? oe(C) : C;
        return j(I, x), _ = !0, c !== void 0 && (c = x), C;
      }
      return Nr && _ || y.f & jt ? I.v : s(I);
    }
  );
}
const om = "5";
var Vu;
typeof window < "u" && ((Vu = window.__svelte ?? (window.__svelte = {})).v ?? (Vu.v = /* @__PURE__ */ new Set())).add(om);
function cm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var um = function(e) {
  return dm(e) && !fm(e);
};
function dm(t) {
  return !!t && typeof t == "object";
}
function fm(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || mm(t);
}
var hm = typeof Symbol == "function" && Symbol.for, vm = hm ? Symbol.for("react.element") : 60103;
function mm(t) {
  return t.$$typeof === vm;
}
function gm(t) {
  return Array.isArray(t) ? [] : {};
}
function Za(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? aa(gm(t), t, e) : t;
}
function bm(t, e, n) {
  return t.concat(e).map(function(r) {
    return Za(r, n);
  });
}
function pm(t, e) {
  if (!e.customMerge)
    return aa;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : aa;
}
function _m(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function wc(t) {
  return Object.keys(t).concat(_m(t));
}
function ef(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Im(t, e) {
  return ef(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Em(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && wc(t).forEach(function(i) {
    r[i] = Za(t[i], n);
  }), wc(e).forEach(function(i) {
    Im(t, i) || (ef(t, i) && n.isMergeableObject(e[i]) ? r[i] = pm(i, n)(t[i], e[i], n) : r[i] = Za(e[i], n));
  }), r;
}
function aa(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || bm, n.isMergeableObject = n.isMergeableObject || um, n.cloneUnlessOtherwiseSpecified = Za;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Em(t, e, n) : Za(e, n);
}
aa.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return aa(r, i, n);
  }, {});
};
var Sm = aa, Am = Sm;
const ym = /* @__PURE__ */ cm(Am);
var to = function(t, e) {
  return to = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, to(t, e);
};
function Mn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  to(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var Qe = function() {
  return Qe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qe.apply(this, arguments);
};
function Tm(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Cm(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a);
    });
  }
  return new (n || (n = Promise))(function(a, l) {
    function c(d) {
      try {
        u(r.next(d));
      } catch (m) {
        l(m);
      }
    }
    function o(d) {
      try {
        u(r.throw(d));
      } catch (m) {
        l(m);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, o);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function tf(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return l.next = c(0), l.throw = c(1), l.return = c(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function c(u) {
    return function(d) {
      return o([u, d]);
    };
  }
  function o(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, u[0] && (n = 0)), n; ) try {
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
      u = e.call(t, n);
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function sa(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function la(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (c) {
    l = { error: c };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function Rr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Wi(t) {
  return this instanceof Wi ? (this.v = t, this) : new Wi(t);
}
function xm(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", l), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function l(v) {
    return function(h) {
      return Promise.resolve(h).then(v, m);
    };
  }
  function c(v, h) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(p, _) {
        a.push([v, g, p, _]) > 1 || o(v, g);
      });
    }, h && (i[v] = h(i[v])));
  }
  function o(v, h) {
    try {
      u(r[v](h));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(v) {
    v.value instanceof Wi ? Promise.resolve(v.value.v).then(d, m) : f(a[0][2], v);
  }
  function d(v) {
    o("next", v);
  }
  function m(v) {
    o("throw", v);
  }
  function f(v, h) {
    v(h), a.shift(), a.length && o(a[0][0], a[0][1]);
  }
}
function wm(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof sa == "function" ? sa(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(l) {
      return new Promise(function(c, o) {
        l = t[a](l), i(c, o, l.done, l.value);
      });
    };
  }
  function i(a, l, c, o) {
    Promise.resolve(o).then(function(u) {
      a({ value: u, done: c });
    }, l);
  }
}
function Tl(t, e) {
  var n = e && e.cache ? e.cache : Pm, r = e && e.serializer ? e.serializer : Mm, i = e && e.strategy ? e.strategy : Rm;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Om(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Lm(t, e, n, r) {
  var i = Om(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function nf(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function rf(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Rm(t, e) {
  var n = t.length === 1 ? Lm : nf;
  return rf(t, this, n, e.cache.create(), e.serializer);
}
function Nm(t, e) {
  return rf(t, this, nf, e.cache.create(), e.serializer);
}
var Mm = function() {
  return JSON.stringify(arguments);
}, Dm = (
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
), Pm = {
  create: function() {
    return new Dm();
  }
}, Cl = {
  variadic: Nm
}, Ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ze || (Ze = {}));
var pt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(pt || (pt = {}));
var oa;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(oa || (oa = {}));
function Oc(t) {
  return t.type === pt.literal;
}
function Hm(t) {
  return t.type === pt.argument;
}
function af(t) {
  return t.type === pt.number;
}
function sf(t) {
  return t.type === pt.date;
}
function lf(t) {
  return t.type === pt.time;
}
function of(t) {
  return t.type === pt.select;
}
function cf(t) {
  return t.type === pt.plural;
}
function Um(t) {
  return t.type === pt.pound;
}
function uf(t) {
  return t.type === pt.tag;
}
function df(t) {
  return !!(t && typeof t == "object" && t.type === oa.number);
}
function no(t) {
  return !!(t && typeof t == "object" && t.type === oa.dateTime);
}
var ff = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, km = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Bm(t) {
  var e = {};
  return t.replace(km, function(n) {
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
var Fm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Vm(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Fm).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], l = a.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = l[0], o = l.slice(1), u = 0, d = o; u < d.length; u++) {
      var m = d[u];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: o });
  }
  return n;
}
function Gm(t) {
  return t.replace(/^(.*?)-/, "");
}
var Lc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, hf = /^(@+)?(\+|#+)?[rs]?$/g, jm = /(\*)(0+)|(#+)(0+)|(0+)/g, vf = /^(0+)$/;
function Rc(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(hf, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function mf(t) {
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
function Wm(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !vf.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Nc(t) {
  var e = {}, n = mf(t);
  return n || e;
}
function qm(t) {
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
        e.style = "unit", e.unit = Gm(i.options[0]);
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
        e = Qe(Qe(Qe({}, e), { notation: "scientific" }), i.options.reduce(function(o, u) {
          return Qe(Qe({}, o), Nc(u));
        }, {}));
        continue;
      case "engineering":
        e = Qe(Qe(Qe({}, e), { notation: "engineering" }), i.options.reduce(function(o, u) {
          return Qe(Qe({}, o), Nc(u));
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
        i.options[0].replace(jm, function(o, u, d, m, f, v) {
          if (u)
            e.minimumIntegerDigits = d.length;
          else {
            if (m && f)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (vf.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Lc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Lc, function(o, u, d, m, f, v) {
        return d === "*" ? e.minimumFractionDigits = u.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = Qe(Qe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = Qe(Qe({}, e), Rc(a)));
      continue;
    }
    if (hf.test(i.stem)) {
      e = Qe(Qe({}, e), Rc(i.stem));
      continue;
    }
    var l = mf(i.stem);
    l && (e = Qe(Qe({}, e), l));
    var c = Wm(i.stem);
    c && (e = Qe(Qe({}, e), c));
  }
  return e;
}
var bs = {
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
function Km(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var l = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), o = "a", u = zm(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += o;
      for (; l-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function zm(t) {
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
  var i = bs[r || ""] || bs[n || ""] || bs["".concat(n, "-001")] || bs["001"];
  return i[0];
}
var xl, Ym = new RegExp("^".concat(ff.source, "*")), Xm = new RegExp("".concat(ff.source, "*$"));
function $e(t, e) {
  return { start: t, end: e };
}
var Zm = !!String.prototype.startsWith && "_a".startsWith("a", 1), Qm = !!String.fromCodePoint, Jm = !!Object.fromEntries, $m = !!String.prototype.codePointAt, eg = !!String.prototype.trimStart, tg = !!String.prototype.trimEnd, ng = !!Number.isSafeInteger, rg = ng ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ro = !0;
try {
  var ig = bf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ro = ((xl = ig.exec("a")) === null || xl === void 0 ? void 0 : xl[0]) === "a";
} catch {
  ro = !1;
}
var Mc = Zm ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), io = Qm ? String.fromCodePoint : (
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
), Dc = (
  // native
  Jm ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], l = a[0], c = a[1];
        n[l] = c;
      }
      return n;
    }
  )
), gf = $m ? (
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
), ag = eg ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ym, "");
  }
), sg = tg ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Xm, "");
  }
);
function bf(t, e) {
  return new RegExp(t, e);
}
var ao;
if (ro) {
  var Pc = bf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ao = function(e, n) {
    var r;
    Pc.lastIndex = n;
    var i = Pc.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ao = function(e, n) {
    for (var r = []; ; ) {
      var i = gf(e, n);
      if (i === void 0 || pf(i) || ug(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return io.apply(void 0, r);
  };
var lg = (
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: pt.pound,
              location: $e(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ze.UNMATCHED_CLOSING_TAG, $e(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && so(this.peek() || 0)) {
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
            type: pt.literal,
            value: "<".concat(i, "/>"),
            location: $e(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var l = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !so(this.char()))
            return this.error(Ze.INVALID_TAG, $e(c, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Ze.UNMATCHED_CLOSING_TAG, $e(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: pt.tag,
              value: i,
              children: l,
              location: $e(r, this.clonePosition())
            },
            err: null
          } : this.error(Ze.INVALID_TAG, $e(c, this.clonePosition())));
        } else
          return this.error(Ze.UNCLOSED_TAG, $e(r, this.clonePosition()));
      } else
        return this.error(Ze.INVALID_TAG, $e(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && cg(this.char()); )
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var o = $e(r, this.clonePosition());
      return {
        val: { type: pt.literal, value: i, location: o },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !og(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return io.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), io(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, $e(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ze.EMPTY_ARGUMENT, $e(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ze.MALFORMED_ARGUMENT, $e(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, $e(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: pt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: $e(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, $e(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ze.MALFORMED_ARGUMENT, $e(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = ao(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), l = $e(e, a);
      return { value: r, location: l };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, l = this.clonePosition(), c = this.parseIdentifierIfPossible().value, o = this.clonePosition();
      switch (c) {
        case "":
          return this.error(Ze.EXPECT_ARGUMENT_TYPE, $e(l, o));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var f = sg(m.val);
            if (f.length === 0)
              return this.error(Ze.EXPECT_ARGUMENT_STYLE, $e(this.clonePosition(), this.clonePosition()));
            var v = $e(d, this.clonePosition());
            u = { style: f, styleLocation: v };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = $e(i, this.clonePosition());
          if (u && Mc(u == null ? void 0 : u.style, "::", 0)) {
            var p = ag(u.style.slice(2));
            if (c === "number") {
              var m = this.parseNumberSkeletonFromString(p, u.styleLocation);
              return m.err ? m : {
                val: { type: pt.number, value: r, location: g, style: m.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(Ze.EXPECT_DATE_TIME_SKELETON, g);
              var _ = p;
              this.locale && (_ = Km(p, this.locale));
              var f = {
                type: oa.dateTime,
                pattern: _,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Bm(_) : {}
              }, I = c === "date" ? pt.date : pt.time;
              return {
                val: { type: I, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? pt.number : c === "date" ? pt.date : pt.time,
              value: r,
              location: g,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var y = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ze.EXPECT_SELECT_ARGUMENT_OPTIONS, $e(y, Qe({}, y)));
          this.bumpSpace();
          var A = this.parseIdentifierIfPossible(), C = 0;
          if (c !== "select" && A.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $e(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), A = this.parseIdentifierIfPossible(), C = m.val;
          }
          var E = this.tryParsePluralOrSelectOptions(e, c, n, A);
          if (E.err)
            return E;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var x = $e(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: pt.select,
              value: r,
              options: Dc(E.val),
              location: x
            },
            err: null
          } : {
            val: {
              type: pt.plural,
              value: r,
              options: Dc(E.val),
              offset: C,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: x
            },
            err: null
          };
        }
        default:
          return this.error(Ze.INVALID_ARGUMENT_TYPE, $e(l, o));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, $e(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $e(i, this.clonePosition()));
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
        r = Vm(e);
      } catch {
        return this.error(Ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: oa.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? qm(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, l = !1, c = [], o = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = $e(m, this.clonePosition()), u = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (o.has(u))
          return this.error(n === "select" ? Ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (l = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $e(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        c.push([
          u,
          {
            value: h.val,
            location: $e(v, this.clonePosition())
          }
        ]), o.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, $e(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(Ze.MISSING_OTHER_CLAUSE, $e(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, l = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, l = l * 10 + (c - 48), this.bump();
        else
          break;
      }
      var o = $e(i, this.clonePosition());
      return a ? (l *= r, rg(l) ? { val: l, err: null } : this.error(n, o)) : this.error(e, o);
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
      var n = gf(this.message, e);
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
      if (Mc(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && pf(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function so(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function og(t) {
  return so(t) || t === 47;
}
function cg(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function pf(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function ug(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function lo(t) {
  t.forEach(function(e) {
    if (delete e.location, of(e) || cf(e))
      for (var n in e.options)
        delete e.options[n].location, lo(e.options[n].value);
    else af(e) && df(e.style) || (sf(e) || lf(e)) && no(e.style) ? delete e.style.location : uf(e) && lo(e.children);
  });
}
function dg(t, e) {
  e === void 0 && (e = {}), e = Qe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new lg(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || lo(n.val), n.val;
}
var ca;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(ca || (ca = {}));
var ol = (
  /** @class */
  function(t) {
    Mn(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Hc = (
  /** @class */
  function(t) {
    Mn(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ca.INVALID_VALUE, a) || this;
    }
    return e;
  }(ol)
), fg = (
  /** @class */
  function(t) {
    Mn(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ca.INVALID_VALUE, i) || this;
    }
    return e;
  }(ol)
), hg = (
  /** @class */
  function(t) {
    Mn(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ca.MISSING_VALUE, r) || this;
    }
    return e;
  }(ol)
), en;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(en || (en = {}));
function vg(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== en.literal || n.type !== en.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function mg(t) {
  return typeof t == "function";
}
function Ns(t, e, n, r, i, a, l) {
  if (t.length === 1 && Oc(t[0]))
    return [
      {
        type: en.literal,
        value: t[0].value
      }
    ];
  for (var c = [], o = 0, u = t; o < u.length; o++) {
    var d = u[o];
    if (Oc(d)) {
      c.push({
        type: en.literal,
        value: d.value
      });
      continue;
    }
    if (Um(d)) {
      typeof a == "number" && c.push({
        type: en.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new hg(m, l);
    var f = i[m];
    if (Hm(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? en.literal : en.object,
        value: f
      });
      continue;
    }
    if (sf(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : no(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (lf(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : no(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (af(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : df(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), c.push({
        type: en.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (uf(d)) {
      var h = d.children, g = d.value, p = i[g];
      if (!mg(p))
        throw new fg(g, "function", l);
      var _ = Ns(h, e, n, r, i, a), I = p(_.map(function(C) {
        return C.value;
      }));
      Array.isArray(I) || (I = [I]), c.push.apply(c, I.map(function(C) {
        return {
          type: typeof C == "string" ? en.literal : en.object,
          value: C
        };
      }));
    }
    if (of(d)) {
      var y = d.options[f] || d.options.other;
      if (!y)
        throw new Hc(d.value, f, Object.keys(d.options), l);
      c.push.apply(c, Ns(y.value, e, n, r, i));
      continue;
    }
    if (cf(d)) {
      var y = d.options["=".concat(f)];
      if (!y) {
        if (!Intl.PluralRules)
          throw new ol(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ca.MISSING_INTL_API, l);
        var A = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        y = d.options[A] || d.options.other;
      }
      if (!y)
        throw new Hc(d.value, f, Object.keys(d.options), l);
      c.push.apply(c, Ns(y.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return vg(c);
}
function gg(t, e) {
  return e ? Qe(Qe(Qe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = Qe(Qe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function bg(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = gg(t[r], e[r]), n;
  }, Qe({}, t)) : t;
}
function wl(t) {
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
function pg(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Tl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: wl(t.number),
      strategy: Cl.variadic
    }),
    getDateTimeFormat: Tl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: wl(t.dateTime),
      strategy: Cl.variadic
    }),
    getPluralRules: Tl(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: wl(t.pluralRules),
      strategy: Cl.variadic
    })
  };
}
var _f = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var u = a.formatToParts(o);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(m, f) {
          return !m.length || f.type !== en.literal || typeof m[m.length - 1] != "string" ? m.push(f.value) : m[m.length - 1] += f.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(o) {
        return Ns(a.ast, a.locales, a.formatters, a.formats, o, void 0, a.message);
      }, this.resolvedOptions = function() {
        var o;
        return {
          locale: ((o = a.resolvedLocale) === null || o === void 0 ? void 0 : o.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var l = i || {};
        l.formatters;
        var c = Tm(l, ["formatters"]);
        this.ast = t.__parse(e, Qe(Qe({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = bg(t.formats, r), this.formatters = i && i.formatters || pg(this.formatterCache);
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
    }, t.__parse = dg, t.formats = {
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
function _g(t, e) {
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
const zr = {}, Ig = (t, e, n) => n && (e in zr || (zr[e] = {}), t in zr[e] || (zr[e][t] = n), n), If = (t, e) => {
  if (e == null)
    return;
  if (e in zr && t in zr[e])
    return zr[e][t];
  const n = us(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Sg(i, t);
    if (a)
      return Ig(t, e, a);
  }
};
let ko;
const cs = rn({});
function Eg(t) {
  return ko[t] || null;
}
function Ef(t) {
  return t in ko;
}
function Sg(t, e) {
  if (!Ef(t))
    return null;
  const n = Eg(t);
  return _g(n, e);
}
function Ag(t) {
  if (t == null)
    return;
  const e = us(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Ef(r))
      return r;
  }
}
function Sf(t, ...e) {
  delete zr[t], cs.update((n) => (n[t] = ym.all([n[t] || {}, ...e]), n));
}
ma(
  [cs],
  ([t]) => Object.keys(t)
);
cs.subscribe((t) => ko = t);
const Ms = {};
function yg(t, e) {
  Ms[t].delete(e), Ms[t].size === 0 && delete Ms[t];
}
function Af(t) {
  return Ms[t];
}
function Tg(t) {
  return us(t).map((e) => {
    const n = Af(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function qs(t) {
  return t == null ? !1 : us(t).some(
    (e) => {
      var n;
      return (n = Af(e)) == null ? void 0 : n.size;
    }
  );
}
function Cg(t, e) {
  return Promise.all(
    e.map((r) => (yg(t, r), r().then((i) => i.default || i)))
  ).then((r) => Sf(t, ...r));
}
const Ta = {};
function yf(t) {
  if (!qs(t))
    return t in Ta ? Ta[t] : Promise.resolve();
  const e = Tg(t);
  return Ta[t] = Promise.all(
    e.map(
      ([n, r]) => Cg(n, r)
    )
  ).then(() => {
    if (qs(t))
      return yf(t);
    delete Ta[t];
  }), Ta[t];
}
var Uc = Object.getOwnPropertySymbols, xg = Object.prototype.hasOwnProperty, wg = Object.prototype.propertyIsEnumerable, Og = (t, e) => {
  var n = {};
  for (var r in t)
    xg.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Uc)
    for (var r of Uc(t))
      e.indexOf(r) < 0 && wg.call(t, r) && (n[r] = t[r]);
  return n;
};
const Lg = {
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
function Rg({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${us(
      t
    ).join('", "')}".${qs(ei()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Ng = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Lg,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Fa = Ng;
function ua() {
  return Fa;
}
function Mg(t) {
  const e = t, { formats: n } = e, r = Og(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      _f.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Rg : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Fa, r, { initialLocale: i }), n && ("number" in n && Object.assign(Fa.formats.number, n.number), "date" in n && Object.assign(Fa.formats.date, n.date), "time" in n && Object.assign(Fa.formats.time, n.time)), wi.set(i);
}
const Ol = rn(!1);
var Dg = Object.defineProperty, Pg = Object.defineProperties, Hg = Object.getOwnPropertyDescriptors, kc = Object.getOwnPropertySymbols, Ug = Object.prototype.hasOwnProperty, kg = Object.prototype.propertyIsEnumerable, Bc = (t, e, n) => e in t ? Dg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Bg = (t, e) => {
  for (var n in e || (e = {}))
    Ug.call(e, n) && Bc(t, n, e[n]);
  if (kc)
    for (var n of kc(e))
      kg.call(e, n) && Bc(t, n, e[n]);
  return t;
}, Fg = (t, e) => Pg(t, Hg(e));
let oo;
const Ks = rn(null);
function Fc(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function us(t, e = ua().fallbackLocale) {
  const n = Fc(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Fc(e)])] : n;
}
function ei() {
  return oo ?? void 0;
}
Ks.subscribe((t) => {
  oo = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Vg = (t) => {
  if (t && Ag(t) && qs(t)) {
    const { loadingDelay: e } = ua();
    let n;
    return typeof window < "u" && ei() != null && e ? n = window.setTimeout(
      () => Ol.set(!0),
      e
    ) : Ol.set(!0), yf(t).then(() => {
      Ks.set(t);
    }).finally(() => {
      clearTimeout(n), Ol.set(!1);
    });
  }
  return Ks.set(t);
}, wi = Fg(Bg({}, Ks), {
  set: Vg
}), Gg = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], cl = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var jg = Object.defineProperty, zs = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Cf = Object.prototype.propertyIsEnumerable, Vc = (t, e, n) => e in t ? jg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Bo = (t, e) => {
  for (var n in e || (e = {}))
    Tf.call(e, n) && Vc(t, n, e[n]);
  if (zs)
    for (var n of zs(e))
      Cf.call(e, n) && Vc(t, n, e[n]);
  return t;
}, ga = (t, e) => {
  var n = {};
  for (var r in t)
    Tf.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && zs)
    for (var r of zs(t))
      e.indexOf(r) < 0 && Cf.call(t, r) && (n[r] = t[r]);
  return n;
};
const Qa = (t, e) => {
  const { formats: n } = ua();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Wg = cl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ga(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Qa("number", r)), new Intl.NumberFormat(n, i);
  }
), qg = cl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ga(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Qa("date", r) : Object.keys(i).length === 0 && (i = Qa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kg = cl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ga(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Qa("time", r) : Object.keys(i).length === 0 && (i = Qa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), zg = (t = {}) => {
  var e = t, {
    locale: n = ei()
  } = e, r = ga(e, [
    "locale"
  ]);
  return Wg(Bo({ locale: n }, r));
}, Yg = (t = {}) => {
  var e = t, {
    locale: n = ei()
  } = e, r = ga(e, [
    "locale"
  ]);
  return qg(Bo({ locale: n }, r));
}, Xg = (t = {}) => {
  var e = t, {
    locale: n = ei()
  } = e, r = ga(e, [
    "locale"
  ]);
  return Kg(Bo({ locale: n }, r));
}, Zg = cl(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = ei()) => new _f(t, e, ua().formats, {
    ignoreTag: ua().ignoreTag
  })
), Qg = (t, e = {}) => {
  var n, r, i, a;
  let l = e;
  typeof t == "object" && (l = t, t = l.id);
  const {
    values: c,
    locale: o = ei(),
    default: u
  } = l;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = If(t, o);
  if (!d)
    d = (a = (i = (r = (n = ua()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: o, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let m = d;
  try {
    m = Zg(d, o).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, Jg = (t, e) => Xg(e).format(t), $g = (t, e) => Yg(e).format(t), eb = (t, e) => zg(e).format(t), tb = (t, e = ei()) => If(t, e), nb = ma([wi, cs], () => Qg);
ma([wi], () => Jg);
ma([wi], () => $g);
ma([wi], () => eb);
ma([wi, cs], () => tb);
function rb(t, e) {
  Object.entries(t).forEach(([a, l]) => {
    Sf(a, l);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Gg();
  console.log("Initial: Setting the language to", i), Mg({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const l = a;
    if (!l.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", l.detail.language), wi.set(l.detail.language);
  });
}
const ib = "Ort", ab = "Suche", sb = "UUID", lb = "Name", ob = "Autor", cb = "Typ", ub = "Version", db = "Geändert am", fb = "Von", hb = "Bis", vb = "Suchergebnis", mb = "Ort auswählen", gb = "Filter Hinzufügen", bb = "Filtertypen", pb = {
  location: ib,
  search: ab,
  uuid: sb,
  name: lb,
  author: ob,
  type: cb,
  version: ub,
  changed_at: db,
  from: fb,
  to: hb,
  search_result: vb,
  select_location: mb,
  add_filter: gb,
  filter_types: bb
}, _b = "Location", Ib = "Search", Eb = "UUID", Sb = "Name", Ab = "Author", yb = "Type", Tb = "Version", Cb = "Changed At", xb = "From", wb = "To", Ob = "Search Result", Lb = "Select Location", Rb = "Add Filter", Nb = "Filter Types", Mb = {
  location: _b,
  search: Ib,
  uuid: Eb,
  name: Sb,
  author: Ab,
  type: yb,
  version: Tb,
  changed_at: Cb,
  from: xb,
  to: wb,
  search_result: Ob,
  select_location: Lb,
  add_filter: Rb,
  filter_types: Nb
};
function De(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function tt(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  t || console.warn("Tried to dispatch event without element.", e, n);
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function fr(t, e) {
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
class Oi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, bv(e, n, r, i));
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
function X(t, e) {
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
function Db(t = window) {
  return Pb(t) ? { passive: !0 } : !1;
}
function Pb(t = window) {
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
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Db
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
const He = {
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
}, sn = /* @__PURE__ */ new Set();
sn.add(He.BACKSPACE);
sn.add(He.ENTER);
sn.add(He.SPACEBAR);
sn.add(He.PAGE_UP);
sn.add(He.PAGE_DOWN);
sn.add(He.END);
sn.add(He.HOME);
sn.add(He.ARROW_LEFT);
sn.add(He.ARROW_UP);
sn.add(He.ARROW_RIGHT);
sn.add(He.ARROW_DOWN);
sn.add(He.DELETE);
sn.add(He.ESCAPE);
sn.add(He.TAB);
const fn = {
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
}, ln = /* @__PURE__ */ new Map();
ln.set(fn.BACKSPACE, He.BACKSPACE);
ln.set(fn.ENTER, He.ENTER);
ln.set(fn.SPACEBAR, He.SPACEBAR);
ln.set(fn.PAGE_UP, He.PAGE_UP);
ln.set(fn.PAGE_DOWN, He.PAGE_DOWN);
ln.set(fn.END, He.END);
ln.set(fn.HOME, He.HOME);
ln.set(fn.ARROW_LEFT, He.ARROW_LEFT);
ln.set(fn.ARROW_UP, He.ARROW_UP);
ln.set(fn.ARROW_RIGHT, He.ARROW_RIGHT);
ln.set(fn.ARROW_DOWN, He.ARROW_DOWN);
ln.set(fn.DELETE, He.DELETE);
ln.set(fn.ESCAPE, He.ESCAPE);
ln.set(fn.TAB, He.TAB);
const ti = /* @__PURE__ */ new Set();
ti.add(He.PAGE_UP);
ti.add(He.PAGE_DOWN);
ti.add(He.END);
ti.add(He.HOME);
ti.add(He.ARROW_LEFT);
ti.add(He.ARROW_UP);
ti.add(He.ARROW_RIGHT);
ti.add(He.ARROW_DOWN);
function xt(t) {
  const { key: e } = t;
  if (sn.has(e))
    return e;
  const n = ln.get(t.keyCode);
  return n || He.UNKNOWN;
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
function Hb(t, e) {
  if (t.closest)
    return t.closest(e);
  let n = t;
  for (; n; ) {
    if (wf(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function wf(t, e) {
  return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e);
}
function Ub(t) {
  const e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  const n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  const r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Hb,
  estimateScrollWidth: Ub,
  matches: wf
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
let ps;
function kb(t, e = !1) {
  const { CSS: n } = t;
  let r = ps;
  if (typeof ps == "boolean" && !e)
    return ps;
  if (!(n && typeof n.supports == "function"))
    return !1;
  const a = n.supports("--css-vars", "yes"), l = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || l, e || (ps = r), r;
}
function Bb(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  const { x: r, y: i } = e, a = r + n.left, l = i + n.top;
  let c, o;
  if (t.type === "touchstart") {
    const u = t;
    c = u.changedTouches[0].pageX - a, o = u.changedTouches[0].pageY - l;
  } else {
    const u = t;
    c = u.pageX - a, o = u.pageY - l;
  }
  return { x: c, y: o };
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fb = {};
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Vb {
  constructor(e, n) {
    this.privateDoNotAccessOrElseWrappedAttributePrefix = n;
  }
  toString() {
    return this.privateDoNotAccessOrElseWrappedAttributePrefix;
  }
}
const Gb = Vb;
function jb(t) {
  return new Gb(Fb, t);
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function _s(t) {
  return Object.isFrozen(t) && Object.isFrozen(t.raw);
}
function Is(t) {
  return t.toString().indexOf("`") === -1;
}
Is((t) => t``) || Is((t) => t`\0`) || Is((t) => t`\n`) || Is((t) => t`\u0000`);
_s`` && _s`\0` && _s`\n` && _s`\u0000`;
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ca(t) {
  const e = t[0].toLowerCase();
  return jb(e);
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
const Wb = {
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
}, qb = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Gc = {
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
const jc = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Wc = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
let Es = [];
class Tt extends Ot {
  static get cssClasses() {
    return Wb;
  }
  static get strings() {
    return qb;
  }
  static get numbers() {
    return Gc;
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
    super(Object.assign(Object.assign({}, Tt.defaultAdapter), e)), this.activationAnimationHasEnded = !1, this.activationTimer = 0, this.fgDeactivationRemovalTimer = 0, this.fgScale = "0", this.frame = { width: 0, height: 0 }, this.initialSize = 0, this.layoutFrame = 0, this.maxRadius = 0, this.unboundedCoords = { left: 0, top: 0 }, this.activationState = this.defaultActivationState(), this.activationTimerCallback = () => {
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
      const { ROOT: n, UNBOUNDED: r } = Tt.cssClasses;
      requestAnimationFrame(() => {
        this.adapter.addClass(n), this.adapter.isUnbounded() && (this.adapter.addClass(r), this.layoutInternal());
      });
    }
  }
  destroy() {
    if (this.supportsPressRipple()) {
      this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(Tt.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(Tt.cssClasses.FG_DEACTIVATION));
      const { ROOT: e, UNBOUNDED: n } = Tt.cssClasses;
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
    const { UNBOUNDED: n } = Tt.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  handleFocus() {
    requestAnimationFrame(() => {
      this.adapter.addClass(Tt.cssClasses.BG_FOCUSED);
    });
  }
  handleBlur() {
    requestAnimationFrame(() => {
      this.adapter.removeClass(Tt.cssClasses.BG_FOCUSED);
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
      for (const n of jc)
        this.adapter.registerInteractionHandler(n, this.activateHandler);
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }
  registerDeactivationHandlers(e) {
    if (e.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      for (const n of Wc)
        this.adapter.registerDocumentInteractionHandler(n, this.deactivateHandler);
  }
  deregisterRootHandlers() {
    for (const e of jc)
      this.adapter.deregisterInteractionHandler(e, this.activateHandler);
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }
  deregisterDeactivationHandlers() {
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    for (const e of Wc)
      this.adapter.deregisterDocumentInteractionHandler(e, this.deactivateHandler);
  }
  removeCssVars() {
    const e = Tt.strings;
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
    if (n.isActivated = !0, n.isProgrammatic = e === void 0, n.activationEvent = e, n.wasActivatedByPointer = n.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown"), e !== void 0 && Es.length > 0 && Es.some((l) => this.adapter.containsEventTarget(l))) {
      this.resetActivationState();
      return;
    }
    e !== void 0 && (Es.push(e.target), this.registerDeactivationHandlers(e)), n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(() => {
      Es = [], !n.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation()), n.wasElementMadeActive || (this.activationState = this.defaultActivationState());
    });
  }
  checkElementMadeActive(e) {
    return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }
  animateActivation() {
    const { VAR_FG_TRANSLATE_START: e, VAR_FG_TRANSLATE_END: n } = Tt.strings, { FG_DEACTIVATION: r, FG_ACTIVATION: i } = Tt.cssClasses, { DEACTIVATION_TIMEOUT_MS: a } = Tt.numbers;
    this.layoutInternal();
    let l = "", c = "";
    if (!this.adapter.isUnbounded()) {
      const { startPoint: o, endPoint: u } = this.getFgTranslationCoordinates();
      l = `${o.x}px, ${o.y}px`, c = `${u.x}px, ${u.y}px`;
    }
    this.adapter.updateCssVariable(e, l), this.adapter.updateCssVariable(n, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(i), this.activationTimer = setTimeout(() => {
      this.activationTimerCallback();
    }, a);
  }
  getFgTranslationCoordinates() {
    const { activationEvent: e, wasActivatedByPointer: n } = this.activationState;
    let r;
    n ? r = Bb(e, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
    const { FG_DEACTIVATION: e } = Tt.cssClasses, { hasDeactivationUXRun: n, isActivated: r } = this.activationState;
    (n || !r) && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(e), this.fgDeactivationRemovalTimer = setTimeout(() => {
      this.adapter.removeClass(e);
    }, Gc.FG_DEACTIVATION_MS));
  }
  rmBoundedActivationClasses() {
    const { FG_ACTIVATION: e } = Tt.cssClasses;
    this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
  }
  resetActivationState() {
    this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(() => this.previousActivationEvent = void 0, Tt.numbers.TAP_DELAY_MS);
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
    const e = Math.max(this.frame.height, this.frame.width), n = () => Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + Tt.numbers.PADDING;
    this.maxRadius = this.adapter.isUnbounded() ? e : n();
    const r = Math.floor(e * Tt.numbers.INITIAL_ORIGIN_SCALE);
    this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = `${this.maxRadius / this.initialSize}`, this.updateLayoutCssVars();
  }
  updateLayoutCssVars() {
    const { VAR_FG_SIZE: e, VAR_LEFT: n, VAR_TOP: r, VAR_FG_SCALE: i } = Tt.strings;
    this.adapter.updateCssVariable(e, `${this.initialSize}px`), this.adapter.updateCssVariable(i, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
      left: Math.round(this.frame.width / 2 - this.initialSize / 2),
      top: Math.round(this.frame.height / 2 - this.initialSize / 2)
    }, this.adapter.updateCssVariable(n, `${this.unboundedCoords.left}px`), this.adapter.updateCssVariable(r, `${this.unboundedCoords.top}px`));
  }
}
const { applyPassive: qc } = xf, { matches: Kb } = ds;
function Zt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: l, rippleElement: c, eventTarget: o, activeTarget: u, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: v = Promise.resolve() } = {}) {
  let h, g = new Oi(), p = ue("SMUI:addLayoutListener"), _, I = l, y = o, A = u;
  function C() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && I !== l && (I = l, l ? h.activate() : l === !1 && h.deactivate()), e && !h ? (h = new Tt({
      addClass: d,
      browserSupportsCssVars: () => kb(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (x) => t.contains(x),
      deregisterDocumentInteractionHandler: (x, T) => g.off(document.documentElement, x, T),
      deregisterInteractionHandler: (x, T) => g.off(o || t, x, T),
      deregisterResizeHandler: (x) => window.removeEventListener("resize", x),
      getWindowPageOffset: () => {
        var x, T;
        return {
          x: (x = window.pageXOffset) !== null && x !== void 0 ? x : window.scrollX,
          y: (T = window.pageYOffset) !== null && T !== void 0 ? T : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? Kb(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (x, T) => {
        const S = qc();
        g.on(document.documentElement, x, T, typeof S == "boolean" ? { capture: S } : S);
      },
      registerInteractionHandler: (x, T) => {
        const S = qc();
        g.on(o || t, x, T, typeof S == "boolean" ? { capture: S } : S);
      },
      registerResizeHandler: (x) => g.on(window, "resize", x),
      removeClass: m,
      updateCssVariable: f
    }), v.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && v.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (y !== o || A !== u) && (y = o, A = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  C(), p && (_ = p(E));
  function E() {
    h && h.layout();
  }
  return {
    update(x) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: l,
        rippleElement: c,
        eventTarget: o,
        activeTarget: u,
        addClass: d,
        removeClass: m,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (T) => t.classList.add(T), removeClass: (T) => t.classList.remove(T), addStyle: (T, S) => t.style.setProperty(T, S), initPromise: Promise.resolve() }, x)), C();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
var zb = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "component",
  "tag",
  "children"
]);
function Yb(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "component", 3, ni), a = b(e, "tag", 3, "span"), l = /* @__PURE__ */ Xe(e, zb), c;
  const o = ue("SMUI:label:context"), u = ue("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var m = { getElement: d }, f = me(), v = re(f);
  {
    let h = /* @__PURE__ */ ce(() => De({
      "mdc-button__label": o === "button",
      "mdc-fab__label": o === "fab",
      "mdc-tab__text-label": o === "tab",
      "mdc-image-list__label": o === "image-list",
      "mdc-snackbar__label": o === "snackbar",
      "mdc-banner__text": o === "banner",
      "mdc-segmented-button__label": o === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": o === "data-table:pagination",
      "mdc-data-table__header-cell-label": o === "data-table:sortable-header-cell",
      "mdc-tooltip__label": o === "tooltip",
      [r()]: !0
    }));
    Pr(v, i, (g, p) => {
      _e(
        p(g, it(
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
          () => o === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => l,
          {
            children: (_, I) => {
              var y = me(), A = re(y);
              Ee(A, () => e.children ?? ve), R(_, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => c = _,
        () => c
      );
    });
  }
  return R(t, f), xe(m);
}
var Xb = /* @__PURE__ */ new Set([
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
function co(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "on", 3, !1), a = b(e, "component", 3, ni), l = b(e, "tag", 3, "i"), c = /* @__PURE__ */ Xe(e, Xb), o;
  const u = /* @__PURE__ */ ce(() => l() === "svg" || a() === ep), d = ue("SMUI:icon:context");
  function m() {
    return o.getElement();
  }
  var f = { getElement: m }, v = me(), h = re(v);
  {
    let g = /* @__PURE__ */ ce(() => De({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Pr(h, a, (p, _) => {
      _e(
        _(p, it(
          {
            get tag() {
              return l();
            },
            get use() {
              return n();
            },
            get class() {
              return s(g);
            },
            "aria-hidden": "true"
          },
          () => s(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (I, y) => {
              var A = me(), C = re(A);
              Ee(C, () => e.children ?? ve), R(I, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => o = I,
        () => o
      );
    });
  }
  return R(t, v), xe(f);
}
var Zb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "tag", "children"]), Qb = /* @__PURE__ */ an("<svg><!></svg>");
function ni(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "tag", 3, "div"), i = /* @__PURE__ */ Xe(e, Zb);
  const a = /* @__PURE__ */ ce(() => [
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
  function c() {
    return l;
  }
  var o = { getElement: c }, u = me(), d = re(u);
  {
    var m = (h) => {
      var g = Qb();
      Fe(g, () => ({ ...i }));
      var p = Se(g);
      Ee(p, () => e.children ?? ve), _e(g, (_) => l = _, () => l), Pe(g, (_, I) => X == null ? void 0 : X(_, I), n), R(h, g);
    }, f = (h) => {
      var g = me(), p = re(g);
      Ec(p, r, !1, (_, I) => {
        _e(_, (y) => l = y, () => l), Pe(_, (y, A) => X == null ? void 0 : X(y, A), n), Fe(_, () => ({ ...i }));
      }), R(h, g);
    }, v = (h) => {
      var g = me(), p = re(g);
      Ec(p, r, !1, (_, I) => {
        _e(_, (C) => l = C, () => l), Pe(_, (C, E) => X == null ? void 0 : X(C, E), n), Fe(_, () => ({ ...i }));
        var y = me(), A = re(y);
        Ee(A, () => e.children ?? ve), R(I, y);
      }), R(h, g);
    };
    Ie(d, (h) => {
      r() === "svg" ? h(m) : s(a) ? h(f, 1) : h(v, -1);
    });
  }
  return R(t, u), xe(o);
}
var Jb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), $b = /* @__PURE__ */ an("<svg><!></svg>");
function ep(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = b(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, Jb), i;
  function a() {
    return i;
  }
  var l = { getElement: a }, c = $b();
  Fe(c, () => ({ ...r }));
  var o = Se(c);
  return Ee(o, () => e.children ?? ve), _e(c, (u) => i = u, () => i), Pe(c, (u, d) => X == null ? void 0 : X(u, d), n), R(t, c), xe(l);
}
function Ss(t, e) {
  Ce(e, !0);
  const [n, r] = Hr(), i = rn(e.value);
  le(e.key, i), Ae(() => {
    Ci(i, e.value);
  }), Dr(() => {
    i.set(void 0);
  });
  var a = me(), l = re(a);
  Ee(l, () => e.children ?? ve), R(t, a), xe(), r();
}
var tp = /* @__PURE__ */ new Set([
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
]), np = /* @__PURE__ */ ge('<div class="mdc-button__touch"></div>'), rp = /* @__PURE__ */ ge('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Of(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "ripple", 3, !0), l = b(e, "color", 3, "primary"), c = b(e, "variant", 3, "text"), o = b(e, "touch", 3, !1), u = b(e, "action", 3, "close"), d = b(e, "defaultAction", 3, !1), m = b(e, "secondary", 3, !1), f = b(e, "component", 3, ni), v = b(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ Xe(e, tp), g, p = oe({}), _ = oe({}), I = ue("SMUI:button:context");
  const y = /* @__PURE__ */ ce(() => I === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), A = /* @__PURE__ */ ce(() => I === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), C = /* @__PURE__ */ ce(() => I === "banner" ? {} : { secondary: m() });
  let E = e.disabled;
  Ae(() => {
    if (E !== e.disabled) {
      if (g) {
        const w = q();
        "blur" in w && w.blur();
      }
      E = h.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function x(w) {
    p[w] || (p[w] = !0);
  }
  function T(w) {
    (!(w in p) || p[w]) && (p[w] = !1);
  }
  function S(w, N) {
    _[w] != N && (N === "" || N == null ? delete _[w] : _[w] = N);
  }
  function L() {
    I === "banner" && tt(q(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function q() {
    return g.getElement();
  }
  var k = { getElement: q }, Y = me(), O = re(Y);
  {
    let w = /* @__PURE__ */ ce(() => [
      [
        Zt,
        {
          ripple: a(),
          unbounded: !1,
          color: l(),
          disabled: !!e.disabled,
          addClass: x,
          removeClass: T,
          addStyle: S
        }
      ],
      ...n()
    ]), N = /* @__PURE__ */ ce(() => De({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": l() === "secondary",
      "mdc-button--touch": o(),
      "mdc-card__action": I === "card:action",
      "mdc-card__action--button": I === "card:action",
      "mdc-dialog__button": I === "dialog:action",
      "mdc-top-app-bar__navigation-icon": I === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": I === "top-app-bar:action",
      "mdc-snackbar__action": I === "snackbar:actions",
      "mdc-banner__secondary-action": I === "banner" && m(),
      "mdc-banner__primary-action": I === "banner" && !m(),
      "mdc-tooltip--rich-action": I === "tooltip:rich-actions",
      ...p,
      [r()]: !0
    })), W = /* @__PURE__ */ ce(() => Object.entries(_).map(([B, K]) => `${B}: ${K};`).concat([i()]).join(" "));
    Pr(O, f, (B, K) => {
      _e(
        K(B, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(w);
            },
            get class() {
              return s(N);
            },
            get style() {
              return s(W);
            }
          },
          () => s(y),
          () => s(A),
          () => s(C),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (H) => {
              var F;
              L(), (F = e.onclick) == null || F.call(e, H);
            },
            children: (H, F) => {
              var U = rp(), ne = be(re(U), 2);
              Ee(ne, () => e.children ?? ve);
              var ye = be(ne);
              {
                var G = (z) => {
                  var $ = np();
                  R(z, $);
                };
                Ie(ye, (z) => {
                  o() && z(G);
                });
              }
              R(H, U);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => g = H,
        () => g
      );
    });
  }
  return R(t, Y), xe(k);
}
function ip(t, e) {
  Ce(e, !0);
  let n = b(e, "callback", 3, () => {
  }), r = b(e, "disabled", 3, !1), i = b(e, "variant", 3, "default"), a = b(e, "isAbortAction", 3, !1), l = b(e, "backgroundColor", 3, void 0), c = b(e, "ariaLabel", 3, void 0);
  {
    let o = /* @__PURE__ */ ce(() => a() ? "background-color: #ff3e00;" : "background-color: " + l());
    Of(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get "aria-label"() {
        return c();
      },
      get style() {
        return s(o);
      },
      children: (u, d) => {
        var m = me(), f = re(m);
        Ee(f, () => e.children ?? ve), R(u, m);
      },
      $$slots: { default: !0 }
    });
  }
  xe();
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
const As = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, _r = {
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
class Fo extends Ot {
  static get cssClasses() {
    return As;
  }
  static get strings() {
    return _r;
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
    super(Object.assign(Object.assign({}, Fo.defaultAdapter), e)), this.hasToggledAriaLabel = !1;
  }
  init() {
    const e = this.adapter.getAttr(_r.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(_r.DATA_ARIA_LABEL_OFF);
    if (e && n) {
      if (this.adapter.getAttr(_r.ARIA_PRESSED) !== null)
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled ARIA label.");
      this.hasToggledAriaLabel = !0;
    } else
      this.adapter.setAttr(_r.ARIA_PRESSED, String(this.isOn()));
  }
  handleClick() {
    this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
  }
  isOn() {
    return this.adapter.hasClass(As.ICON_BUTTON_ON);
  }
  toggle(e = !this.isOn()) {
    if (e ? this.adapter.addClass(As.ICON_BUTTON_ON) : this.adapter.removeClass(As.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
      const n = e ? this.adapter.getAttr(_r.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(_r.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(_r.ARIA_LABEL, n || "");
    } else
      this.adapter.setAttr(_r.ARIA_PRESSED, `${e}`);
  }
}
var ap = /* @__PURE__ */ new Set([
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
]), sp = /* @__PURE__ */ ge('<span class="mdc-icon-button__focus-ring"></span>'), lp = /* @__PURE__ */ ge('<div class="mdc-icon-button__touch"></div>'), op = /* @__PURE__ */ ge('<div class="mdc-icon-button__ripple"></div> <!> <!><!>', 1);
function cp(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(U) {
    return U === n;
  }
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), l = b(e, "style", 3, ""), c = b(e, "ripple", 3, !0), o = b(e, "toggle", 3, !1), u = b(e, "pressed", 15, n), d = b(e, "touch", 3, !1), m = b(e, "displayFlex", 3, !0), f = b(e, "size", 3, "normal"), v = b(e, "focusRing", 3, !0), h = b(e, "component", 3, ni), g = b(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Xe(e, ap), _, I, y = /* @__PURE__ */ de(oe({})), A = oe({}), C = /* @__PURE__ */ de(oe({})), E = ue("SMUI:icon-button:context"), x = ue("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ce(() => {
    if (E === "data-table:pagination")
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
    else return E === "dialog:header" || E === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let S = !!e.disabled;
  Ae(() => {
    if (S != !!e.disabled) {
      if (_) {
        const U = B();
        "blur" in U && U.blur();
      }
      S = !!e.disabled;
    }
  }), le("SMUI:icon:context", "icon-button");
  let L = null;
  Ae(() => {
    _ && B() && o() !== L && (o() && !I ? (I = new Fo({
      addClass: k,
      hasClass: q,
      notifyChange: (U) => {
        W(U), tt(B(), "SMUIIconButtonToggleChange", U);
      },
      removeClass: Y,
      getAttr: w,
      setAttr: N
    }), I.init()) : !o() && I && (I.destroy(), I = void 0, j(y, {}, !0), j(C, {}, !0)), L = o());
  }), Ae(() => {
    I && !r(u()) && I.isOn() !== u() && I.toggle(u());
  }), at(() => () => {
    I == null || I.destroy(), I = void 0;
  });
  function q(U) {
    return U in s(y) ? s(y)[U] : B().classList.contains(U);
  }
  function k(U) {
    s(y)[U] || (s(y)[U] = !0);
  }
  function Y(U) {
    (!(U in s(y)) || s(y)[U]) && (s(y)[U] = !1);
  }
  function O(U, ne) {
    A[U] != ne && (ne === "" || ne == null ? delete A[U] : A[U] = ne);
  }
  function w(U) {
    return U in s(C) ? s(C)[U] ?? null : B().getAttribute(U);
  }
  function N(U, ne) {
    s(C)[U] !== ne && (s(C)[U] = ne);
  }
  function W(U) {
    u(U.isOn);
  }
  function B() {
    return _.getElement();
  }
  var K = { getElement: B }, H = me(), F = re(H);
  {
    let U = /* @__PURE__ */ ce(() => [
      [
        Zt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: k,
          removeClass: Y,
          addStyle: O
        }
      ],
      ...i()
    ]), ne = /* @__PURE__ */ ce(() => De({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": m(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": E === "card:action",
      "mdc-card__action--icon": E === "card:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__dismiss": E === "snackbar:actions",
      "mdc-data-table__pagination-button": E === "data-table:pagination",
      "mdc-data-table__sort-icon-button": E === "data-table:sortable-header-cell",
      "mdc-dialog__close": (E === "dialog:header" || E === "dialog:sheet") && e.action === "close",
      ...s(y),
      [a()]: !0
    })), ye = /* @__PURE__ */ ce(() => Object.entries(A).map(([$, ee]) => `${$}: ${ee};`).concat([l()]).join(" ")), G = /* @__PURE__ */ ce(() => r(u()) ? null : u() ? "true" : "false"), z = /* @__PURE__ */ ce(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    Pr(F, h, ($, ee) => {
      _e(
        ee($, it(
          {
            get tag() {
              return g();
            },
            get use() {
              return s(U);
            },
            get class() {
              return s(ne);
            },
            get style() {
              return s(ye);
            },
            get "aria-pressed"() {
              return s(G);
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
              return x;
            },
            get href() {
              return e.href;
            }
          },
          () => s(T),
          () => s(C),
          () => p,
          {
            onclick: (V) => {
              var ie;
              I && I.handleClick(), E === "top-app-bar:navigation" && tt(B(), "SMUITopAppBarIconButtonNav"), (ie = e.onclick) == null || ie.call(e, V);
            },
            children: (V, ie) => {
              var we = op(), J = be(re(we), 2);
              {
                var ae = (ke) => {
                  var Re = sp();
                  R(ke, Re);
                };
                Ie(J, (ke) => {
                  v() && ke(ae);
                });
              }
              var Ue = be(J, 2);
              Ee(Ue, () => e.children ?? ve);
              var Oe = be(Ue);
              {
                var Ve = (ke) => {
                  var Re = lp();
                  R(ke, Re);
                };
                Ie(Oe, (ke) => {
                  d() && ke(Ve);
                });
              }
              R(V, we);
            },
            $$slots: { default: !0 }
          }
        )),
        (V) => _ = V,
        () => _
      );
    });
  }
  return R(t, H), xe(K);
}
function up(t, e) {
  let n = b(e, "callback", 3, () => {
  }), r = b(e, "icon", 3, ""), i = b(e, "disabled", 3, !1), a = b(e, "ariaLabel", 3, void 0);
  cp(t, {
    get disabled() {
      return i();
    },
    get "aria-label"() {
      return a();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click: function(...l) {
        var c;
        (c = n()) == null || c.apply(this, l);
      }
    },
    children: (l, c) => {
      co(l, {
        class: "material-icons",
        children: (o, u) => {
          var d = Dt();
          Ne(() => ut(d, r())), R(o, d);
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
const dp = {
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
class Ar extends Ot {
  static get cssClasses() {
    return dp;
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
    super(Object.assign(Object.assign({}, Ar.defaultAdapter), e)), this.shakeAnimationEndHandler = () => {
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
    const { LABEL_SHAKE: n } = Ar.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes
   *     float and shake classes to dock the label.
   */
  float(e) {
    const { LABEL_FLOAT_ABOVE: n, LABEL_SHAKE: r } = Ar.cssClasses;
    e ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(r));
  }
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that
   *     it is required.
   */
  setRequired(e) {
    const { LABEL_REQUIRED: n } = Ar.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  setHideRequiredMarker(e) {
    const { LABEL_HIDE_REQUIRED_MARKER: n } = Ar.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  getHideRequiredMarker() {
    const { LABEL_HIDE_REQUIRED_MARKER: e } = Ar.cssClasses;
    return this.adapter.hasClass(e);
  }
  handleShakeAnimationEnd() {
    const { LABEL_SHAKE: e } = Ar.cssClasses;
    this.adapter.removeClass(e);
  }
}
var fp = /* @__PURE__ */ new Set([
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
]), hp = /* @__PURE__ */ ge("<span><!></span>"), vp = /* @__PURE__ */ ge("<label><!></label>");
function Ys(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "floatAbove", 15, !1), l = b(e, "required", 15, !1), c = b(e, "wrapped", 3, !1), o = /* @__PURE__ */ Xe(e, fp), u, d = /* @__PURE__ */ de(void 0), m = new Oi(), f = oe({}), v = oe({}), h = ue("SMUI:generic:input:props") ?? {}, g = a();
  Ae(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let p = l();
  Ae(() => {
    s(d) && p !== l() && (p = l(), s(d).setRequired(l()));
  });
  const _ = ue("SMUI:floating-label:mount"), I = ue("SMUI:floating-label:unmount");
  at(() => {
    j(
      d,
      new Ar({
        addClass: A,
        removeClass: C,
        hasClass: y,
        getWidth: () => {
          var U, ne;
          const K = k(), H = K.cloneNode(!0);
          (U = K.parentNode) == null || U.appendChild(H), H.classList.add("smui-floating-label--remove-transition"), H.classList.add("smui-floating-label--force-size"), H.classList.remove("mdc-floating-label--float-above");
          const F = H.scrollWidth;
          return (ne = K.parentNode) == null || ne.removeChild(H), F;
        },
        registerInteractionHandler: (K, H) => m.on(k(), K, H),
        deregisterInteractionHandler: (K, H) => m.off(k(), K, H)
      }),
      !0
    );
    const B = {
      get element() {
        return k();
      },
      addStyle: E,
      removeStyle: x
    };
    return _ && _(B), s(d).init(), () => {
      var K;
      I && I(B), (K = s(d)) == null || K.destroy(), j(d, void 0), m.clear();
    };
  });
  function y(B) {
    return B in f ? f[B] : k().classList.contains(B);
  }
  function A(B) {
    f[B] || (f[B] = !0);
  }
  function C(B) {
    (!(B in f) || f[B]) && (f[B] = !1);
  }
  function E(B, K) {
    v[B] != K && (K === "" || K == null ? delete v[B] : v[B] = K);
  }
  function x(B) {
    B in v && delete v[B];
  }
  function T(B) {
    var K;
    (K = s(d)) == null || K.shake(B);
  }
  function S(B) {
    a(B);
  }
  function L(B) {
    l(B);
  }
  function q() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function k() {
    return u;
  }
  var Y = { shake: T, float: S, setRequired: L, getWidth: q, getElement: k }, O = me(), w = re(O);
  {
    var N = (B) => {
      var K = hp();
      Fe(K, (F, U) => ({ class: F, style: U, ...o }), [
        () => De({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": l(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([F, U]) => `${F}: ${U};`).concat([i()]).join(" ")
      ]);
      var H = Se(K);
      Ee(H, () => e.children ?? ve), _e(K, (F) => u = F, () => u), Pe(K, (F, U) => X == null ? void 0 : X(F, U), n), R(B, K);
    }, W = (B) => {
      var K = vp();
      Fe(
        K,
        (F, U) => ({
          class: F,
          style: U,
          for: e.for || (h ? h.id : void 0),
          ...o
        }),
        [
          () => De({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": l(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([F, U]) => `${F}: ${U};`).concat([i()]).join(" ")
        ]
      );
      var H = Se(K);
      Ee(H, () => e.children ?? ve), _e(K, (F) => u = F, () => u), Pe(K, (F, U) => X == null ? void 0 : X(F, U), n), R(B, K);
    };
    Ie(w, (B) => {
      c() ? B(N) : B(W, -1);
    });
  }
  return R(t, O), xe(Y);
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
const si = {
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
class Vo extends Ot {
  static get cssClasses() {
    return si;
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
    super(Object.assign(Object.assign({}, Vo.defaultAdapter), e)), this.transitionEndHandler = (n) => {
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
    this.adapter.removeClass(si.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(si.LINE_RIPPLE_ACTIVE);
  }
  setRippleCenter(e) {
    this.adapter.setStyle("transform-origin", `${e}px center`);
  }
  deactivate() {
    this.adapter.addClass(si.LINE_RIPPLE_DEACTIVATING);
  }
  handleTransitionEnd(e) {
    const n = this.adapter.hasClass(si.LINE_RIPPLE_DEACTIVATING);
    e.propertyName === "opacity" && n && (this.adapter.removeClass(si.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(si.LINE_RIPPLE_DEACTIVATING));
  }
}
var mp = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "active"
]), gp = /* @__PURE__ */ ge("<div></div>");
function Lf(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "active", 3, !1), l = /* @__PURE__ */ Xe(e, mp), c, o = /* @__PURE__ */ de(void 0), u = new Oi(), d = oe({}), m = oe({});
  at(() => (j(
    o,
    new Vo({
      addClass: v,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (E, x) => u.on(y(), E, x),
      deregisterEventHandler: (E, x) => u.off(y(), E, x)
    }),
    !0
  ), s(o).init(), () => {
    var E;
    (E = s(o)) == null || E.destroy(), j(o, void 0), u.clear();
  }));
  function f(E) {
    return E in d ? d[E] : y().classList.contains(E);
  }
  function v(E) {
    d[E] || (d[E] = !0);
  }
  function h(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function g(E, x) {
    m[E] != x && (x === "" || x == null ? delete m[E] : m[E] = x);
  }
  function p() {
    var E;
    (E = s(o)) == null || E.activate();
  }
  function _() {
    var E;
    (E = s(o)) == null || E.deactivate();
  }
  function I(E) {
    var x;
    (x = s(o)) == null || x.setRippleCenter(E);
  }
  function y() {
    return c;
  }
  var A = { activate: p, deactivate: _, setRippleCenter: I, getElement: y }, C = gp();
  return Fe(C, (E, x) => ({ class: E, style: x, ...l }), [
    () => De({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([E, x]) => `${E}: ${x};`).concat([i()]).join(" ")
  ]), _e(C, (E) => c = E, () => c), Pe(C, (E, x) => X == null ? void 0 : X(E, x), n), R(t, C), xe(A);
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
const bp = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Kc = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, pp = {
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
class Wa extends Ot {
  static get strings() {
    return bp;
  }
  static get cssClasses() {
    return pp;
  }
  static get numbers() {
    return Kc;
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
    super(Object.assign(Object.assign({}, Wa.defaultAdapter), e));
  }
  /**
   * Adds the outline notched selector and updates the notch width calculated
   * based off of notchWidth.
   */
  notch(e) {
    const { OUTLINE_NOTCHED: n } = Wa.cssClasses;
    e > 0 && (e += Kc.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(n);
  }
  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const { OUTLINE_NOTCHED: e } = Wa.cssClasses;
    this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
  }
}
var _p = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "notched",
  "noLabel",
  "children"
]), Ip = /* @__PURE__ */ ge('<div class="mdc-notched-outline__notch"><!></div>'), Ep = /* @__PURE__ */ ge('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Rf(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "notched", 3, !1), a = b(e, "noLabel", 3, !1), l = /* @__PURE__ */ Xe(e, _p), c, o = /* @__PURE__ */ de(void 0), u = /* @__PURE__ */ de(void 0), d = oe({}), m = oe({}), f;
  Ae(() => {
    s(u) !== f && (s(u) ? (s(u).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(u) && s(u).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(u));
  }), le("SMUI:floating-label:mount", (T) => {
    j(u, T, !0);
  }), le("SMUI:floating-label:unmount", () => {
    j(u, void 0);
  }), at(() => (j(
    o,
    new Wa({
      addClass: v,
      removeClass: h,
      setNotchWidthProperty: (T) => g("width", T + "px"),
      removeNotchWidthProperty: () => p("width")
    }),
    !0
  ), s(o).init(), () => {
    var T;
    (T = s(o)) == null || T.destroy(), j(o, void 0);
  }));
  function v(T) {
    d[T] || (d[T] = !0);
  }
  function h(T) {
    (!(T in d) || d[T]) && (d[T] = !1);
  }
  function g(T, S) {
    m[T] != S && (S === "" || S == null ? delete m[T] : m[T] = S);
  }
  function p(T) {
    T in m && delete m[T];
  }
  function _(T) {
    var S;
    (S = s(o)) == null || S.notch(T);
  }
  function I() {
    var T;
    (T = s(o)) == null || T.closeNotch();
  }
  function y() {
    return c;
  }
  var A = { notch: _, closeNotch: I, getElement: y }, C = Ep();
  Fe(C, (T) => ({ class: T, ...l }), [
    () => De({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var E = be(Se(C), 2);
  {
    var x = (T) => {
      var S = Ip(), L = Se(S);
      Ee(L, () => e.children ?? ve), Ne((q) => Ut(S, q), [
        () => Object.entries(m).map(([q, k]) => `${q}: ${k};`).join(" ")
      ]), R(T, S);
    };
    Ie(E, (T) => {
      a() || T(x);
    });
  }
  return _e(C, (T) => c = T, () => c), Pe(C, (T, S) => X == null ? void 0 : X(T, S), n), R(t, C), xe(A);
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
const Ll = {
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
}, Sp = {
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
}, zc = {
  LABEL_SCALE: 0.75
}, Ap = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], yp = [
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
const Yc = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Tp = {
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
const Xc = ["click", "keydown"];
class Go extends Ot {
  static get strings() {
    return Yc;
  }
  static get cssClasses() {
    return Tp;
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
    super(Object.assign(Object.assign({}, Go.defaultAdapter), e)), this.savedTabIndex = null, this.interactionHandler = (n) => {
      this.handleInteraction(n);
    };
  }
  init() {
    this.savedTabIndex = this.adapter.getAttr("tabindex");
    for (const e of Xc)
      this.adapter.registerInteractionHandler(e, this.interactionHandler);
  }
  destroy() {
    for (const e of Xc)
      this.adapter.deregisterInteractionHandler(e, this.interactionHandler);
  }
  setDisabled(e) {
    this.savedTabIndex && (e ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Yc.ICON_ROLE)));
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
const Zc = ["mousedown", "touchstart"], Qc = ["click", "keydown"];
class Wr extends Ot {
  static get cssClasses() {
    return Sp;
  }
  static get strings() {
    return Ll;
  }
  static get numbers() {
    return zc;
  }
  get shouldAlwaysFloat() {
    const e = this.getNativeInput().type;
    return yp.indexOf(e) >= 0;
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
    super(Object.assign(Object.assign({}, Wr.defaultAdapter), e)), this.isFocused = !1, this.receivedUserInput = !1, this.useNativeValidation = !0, this.validateOnValueChange = !0, this.helperText = n.helperText, this.characterCounter = n.characterCounter, this.leadingIcon = n.leadingIcon, this.trailingIcon = n.trailingIcon, this.valid = !this.adapter.hasClass(Wr.cssClasses.INVALID), this.inputFocusHandler = () => {
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
    for (const e of Zc)
      this.adapter.registerInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of Qc)
      this.adapter.registerTextFieldInteractionHandler(e, this.textFieldInteractionHandler);
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
  }
  destroy() {
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    for (const e of Zc)
      this.adapter.deregisterInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of Qc)
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
    e.some((n) => Ap.indexOf(n) > -1 ? (this.styleValidity(!0), this.adapter.setLabelRequired(this.getNativeInput().required), !0) : !1), e.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
  }
  /**
   * Opens/closes the notched outline.
   */
  notchOutline(e) {
    if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
      if (e) {
        const n = this.adapter.getLabelWidth() * zc.LABEL_SCALE;
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
    const { INVALID: n } = Wr.cssClasses;
    if (e ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
      if (this.helperText.setValidity(e), !this.helperText.isValidation())
        return;
      const i = this.helperText.isVisible(), a = this.helperText.getId();
      i && a ? this.adapter.setInputAttr(Ll.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Ll.ARIA_DESCRIBEDBY);
    }
  }
  /**
   * Styles the component based on the focused state.
   */
  styleFocused(e) {
    const { FOCUSED: n } = Wr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the component based on the disabled state.
   */
  styleDisabled(e) {
    const { DISABLED: n, INVALID: r } = Wr.cssClasses;
    e ? (this.adapter.addClass(n), this.adapter.removeClass(r)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(e), this.trailingIcon && this.trailingIcon.setDisabled(e);
  }
  /**
   * Styles the component based on the label floating state.
   */
  styleFloating(e) {
    const { LABEL_FLOATING: n } = Wr.cssClasses;
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
var Cp = /* @__PURE__ */ new Set([
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
function jo(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "component", 3, ni), a = b(e, "tag", 3, "div"), l = b(e, "_smuiClass", 3, ""), c = b(e, "_smuiClassMap", 23, () => ({})), o = b(e, "_smuiContexts", 19, () => ({})), u = b(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Xe(e, Cp), m;
  const f = [];
  Object.entries(c()).forEach(([_, I]) => {
    const y = ue(I);
    y && "subscribe" in y && f.push(y.subscribe((A) => {
      c()[_] = A;
    }));
  });
  for (let _ in o())
    o().hasOwnProperty(_) && le(_, o()[_]);
  Dr(() => {
    for (const _ of f)
      _();
  });
  function v() {
    return m.getElement();
  }
  var h = { getElement: v }, g = me(), p = re(g);
  {
    let _ = /* @__PURE__ */ ce(() => De({
      [l()]: !0,
      ...c(),
      [r()]: !0
    }));
    Pr(p, i, (I, y) => {
      _e(
        y(I, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(_);
            }
          },
          u,
          () => d,
          {
            children: (A, C) => {
              var E = me(), x = re(E);
              Ee(x, () => e.children ?? ve), R(A, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => m = A,
        () => m
      );
    });
  }
  return R(t, g), xe(h);
}
var xp = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function wp(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, xp), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return _e(
    jo(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (l, c) => {
        var o = me(), u = re(o);
        Ee(u, () => e.children ?? ve), R(l, o);
      },
      $$slots: { default: !0 }
    })),
    (l) => r = l,
    () => r
  ), xe(a);
}
var Op = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Lp(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, Op), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return _e(
    jo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (l, c) => {
          var o = me(), u = re(o);
          Ee(u, () => e.children ?? ve), R(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), xe(a);
}
var Rp = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Np(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, Rp), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return _e(
    jo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (l, c) => {
          var o = me(), u = re(o);
          Ee(u, () => e.children ?? ve), R(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), xe(a);
}
var Mp = /* @__PURE__ */ new Set([
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
]), Dp = /* @__PURE__ */ ge("<input/>");
function Pp(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "type", 3, "text"), a = b(e, "placeholder", 3, " "), l = b(e, "value", 15), c = b(e, "files", 15, null), o = b(e, "dirty", 15, !1), u = b(e, "invalid", 15, !1), d = b(e, "updateInvalid", 3, !0), m = b(e, "initialInvalid", 3, !1), f = b(e, "emptyValueNull", 19, () => l() === null), v = b(e, "emptyValueUndefined", 19, () => l() === void 0), h = /* @__PURE__ */ Xe(e, Mp), g, p = oe({}), _ = oe({});
  Ae(() => {
    i() === "file" ? delete _.value : _.value = l() == null ? "" : l();
  }), at(() => {
    d() && m() && u(L().matches(":invalid"));
  });
  function I(w) {
    return w === "" ? Number.NaN : +w;
  }
  function y(w) {
    if (i() === "file") {
      c(w.currentTarget.files);
      return;
    }
    if (w.currentTarget.value === "" && f()) {
      l(null);
      return;
    }
    if (w.currentTarget.value === "" && v()) {
      l(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        l(I(w.currentTarget.value));
        break;
      default:
        l(w.currentTarget.value);
        break;
    }
  }
  function A(w) {
    (i() === "file" || i() === "range") && y(w), o(!0), d() && u(L().matches(":invalid"));
  }
  function C(w) {
    return w in p ? p[w] ?? null : L().getAttribute(w);
  }
  function E(w, N) {
    p[w] !== N && (p[w] = N);
  }
  function x(w) {
    (!(w in p) || p[w] != null) && (p[w] = void 0);
  }
  function T() {
    L().focus();
  }
  function S() {
    L().blur();
  }
  function L() {
    return g;
  }
  var q = { getAttr: C, addAttr: E, removeAttr: x, focus: T, blur: S, getElement: L }, k = Dp(), Y = (w) => {
    var N;
    i() !== "file" && y(w), (N = e.oninput) == null || N.call(e, w);
  }, O = (w) => {
    var N;
    A(w), (N = e.onchange) == null || N.call(e, w);
  };
  return Fe(
    k,
    (w) => ({
      class: w,
      type: i(),
      placeholder: a(),
      ..._,
      ...p,
      ...h,
      oninput: Y,
      onchange: O
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), _e(k, (w) => g = w, () => g), Pe(k, (w, N) => X == null ? void 0 : X(w, N), n), R(t, k), xe(q);
}
var Hp = /* @__PURE__ */ new Set([
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
]), Up = /* @__PURE__ */ ge("<textarea></textarea>");
function kp(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "value", 15, ""), l = b(e, "dirty", 15, !1), c = b(e, "invalid", 15, !1), o = b(e, "updateInvalid", 3, !0), u = b(e, "initialInvalid", 3, !1), d = b(e, "resizable", 3, !0), m = /* @__PURE__ */ Xe(e, Hp), f, v = oe({});
  at(() => {
    o() && u() && c(A().matches(":invalid"));
  });
  function h() {
    l(!0), o() && c(A().matches(":invalid"));
  }
  function g(T) {
    return T in v ? v[T] ?? null : A().getAttribute(T);
  }
  function p(T, S) {
    v[T] !== S && (v[T] = S);
  }
  function _(T) {
    (!(T in v) || v[T] != null) && (v[T] = void 0);
  }
  function I() {
    A().focus();
  }
  function y() {
    A().blur();
  }
  function A() {
    return f;
  }
  var C = { getAttr: g, addAttr: p, removeAttr: _, focus: I, blur: y, getElement: A }, E = Up(), x = (T) => {
    var S;
    h(), (S = e.onchange) == null || S.call(e, T);
  };
  return Fe(
    E,
    (T) => ({
      class: T,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...m,
      onchange: x
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), _e(E, (T) => f = T, () => f), Pe(E, (T, S) => X == null ? void 0 : X(T, S), n), $r(() => Xa(E, a)), R(t, E), xe(C);
}
var Bp = /* @__PURE__ */ new Set([
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
]), Fp = /* @__PURE__ */ ge('<span class="mdc-text-field__ripple"></span>'), Jc = /* @__PURE__ */ ge("<!> <!>", 1), Vp = /* @__PURE__ */ ge("<span><!> <!></span>"), Gp = /* @__PURE__ */ ge("<!> <!> <!>", 1), jp = /* @__PURE__ */ ge("<label><!> <!> <!> <!> <!> <!> <!></label>"), Wp = /* @__PURE__ */ ge("<div><!> <!> <!> <!> <!></div>");
function uo(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = xf;
  let r = () => {
  };
  function i(Q) {
    return Q === r;
  }
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), c = b(e, "style", 3, ""), o = b(e, "ripple", 3, !0), u = b(e, "disabled", 3, !1), d = b(e, "required", 3, !1), m = b(e, "textarea", 3, !1), f = b(e, "variant", 19, () => m() ? "outlined" : "standard"), v = b(e, "noLabel", 3, !1), h = b(e, "type", 3, "text"), g = b(e, "value", 15), p = b(e, "files", 15, r), _ = b(e, "invalid", 15, r), I = b(e, "updateInvalid", 19, () => i(_())), y = b(e, "initialInvalid", 3, !1), A = b(e, "dirty", 15, !1), C = b(e, "validateOnValueChange", 19, I), E = b(e, "useNativeValidation", 19, I), x = b(e, "withLeadingIcon", 3, r), T = b(e, "withTrailingIcon", 3, r), S = b(e, "input", 7), L = b(e, "floatingLabel", 7), q = b(e, "lineRipple", 7), k = b(e, "notchedOutline", 7), Y = /* @__PURE__ */ Xe(e, Bp);
  const O = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(p());
  i(p()) && p(null), i(_()) && _(!1);
  let w, N = /* @__PURE__ */ de(void 0), W = new Oi(), B = oe({}), K = oe({}), H = /* @__PURE__ */ de(void 0), F = /* @__PURE__ */ de(!1), U = /* @__PURE__ */ de(oe(y())), ne = ue("SMUI:addLayoutListener"), ye, G, z = new Promise((Q) => G = Q), $, ee, V, ie;
  const we = /* @__PURE__ */ ce(() => S() && S().getElement());
  Ae(() => {
    (A() || s(U) || !I()) && s(N) && s(N).isValid() !== !_() && (I() ? _(!s(N).isValid()) : s(N).setValid(!_()));
  }), Ae(() => {
    s(N) && s(N).getValidateOnValueChange() !== C() && s(N).setValidateOnValueChange(i(C()) ? !1 : C());
  }), Ae(() => {
    s(N) && s(N).setUseNativeValidation(i(E()) ? !0 : E());
  }), Ae(() => {
    s(N) && s(N).setDisabled(u());
  });
  let J = g();
  Ae(() => {
    if (s(N) && O && J !== g()) {
      J = g();
      const Q = `${g() == null ? "" : g()}`;
      s(N).getValue() !== Q && s(N).setValue(Q);
    }
  }), ne && (ye = ne(P)), le("SMUI:textfield:leading-icon:mount", (Q) => {
    $ = Q;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    $ = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (Q) => {
    ee = Q;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), le("SMUI:textfield:helper-text:id", (Q) => {
    j(H, Q, !0);
  }), le("SMUI:textfield:helper-text:mount", (Q) => {
    V = Q;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    j(H, void 0), V = void 0;
  }), le("SMUI:textfield:character-counter:mount", (Q) => {
    ie = Q;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), at(() => {
    var Q;
    if (j(
      N,
      new Wr(
        {
          // getRootAdapterMethods_
          addClass: Ue,
          removeClass: Oe,
          hasClass: ae,
          registerTextFieldInteractionHandler: (te, Be) => W.on(Z(), te, Be),
          deregisterTextFieldInteractionHandler: (te, Be) => W.off(Z(), te, Be),
          registerValidationAttributeChangeHandler: (te) => {
            const Be = (Pt) => Pt.map((qt) => qt.attributeName).filter((qt) => qt), vt = new MutationObserver((Pt) => {
              E() && te(Be(Pt));
            }), It = { attributes: !0 };
            return S() && vt.observe(S().getElement(), It), vt;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = S()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Be) => {
            var vt;
            (vt = S()) == null || vt.addAttr(te, Be);
          },
          removeInputAttr: (te) => {
            var Be;
            (Be = S()) == null || Be.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = S()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Be) => {
            var It;
            const vt = (It = S()) == null ? void 0 : It.getElement();
            if (vt) {
              const Pt = n();
              W.on(vt, te, Be, typeof Pt == "boolean" ? { capture: Pt } : Pt);
            }
          },
          deregisterInputInteractionHandler: (te, Be) => {
            var It;
            const vt = (It = S()) == null ? void 0 : It.getElement();
            vt && W.off(vt, te, Be);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => L() && L().float(te),
          getLabelWidth: () => L() ? L().getWidth() : 0,
          hasLabel: () => !!L(),
          shakeLabel: (te) => L() && L().shake(te),
          setLabelRequired: (te) => L() && L().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => q() && q().activate(),
          deactivateLineRipple: () => q() && q().deactivate(),
          setLineRippleTransformOrigin: (te) => q() && q().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (te) => k() && k().notch(te)
        },
        {
          get helperText() {
            return V;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return $;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), O) {
      if (S() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Q = s(N)) == null || Q.init();
    } else
      Pd().then(() => {
        var te;
        if (S() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(N)) == null || te.init();
      });
    return G(), () => {
      var te;
      (te = s(N)) == null || te.destroy(), j(N, void 0), W.clear();
    };
  }), Dr(() => {
    ye && ye();
  });
  function ae(Q) {
    return Q in B ? B[Q] ?? null : Z().classList.contains(Q);
  }
  function Ue(Q) {
    B[Q] || (B[Q] = !0);
  }
  function Oe(Q) {
    (!(Q in B) || B[Q]) && (B[Q] = !1);
  }
  function Ve(Q, te) {
    K[Q] != te && (te === "" || te == null ? delete K[Q] : K[Q] = te);
  }
  function ke() {
    var Q;
    (Q = S()) == null || Q.focus();
  }
  function Re() {
    var Q;
    (Q = S()) == null || Q.blur();
  }
  function P() {
    if (s(N)) {
      const Q = s(N).shouldFloat;
      s(N).notchOutline(Q);
    }
  }
  function Z() {
    return w;
  }
  var se = { focus: ke, blur: Re, layout: P, getElement: Z }, Le = Jc(), je = re(Le);
  {
    var Et = (Q) => {
      var te = jp();
      Fe(te, (Je, ft, ot) => ({ class: Je, style: ft, for: void 0, ...ot }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(F) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(x()) ? e.leadingIcon : x(),
          "mdc-text-field--with-trailing-icon": i(T()) ? e.trailingIcon : T(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": _(),
          ...B,
          [l()]: !0
        }),
        () => Object.entries(K).map(([Je, ft]) => `${Je}: ${ft};`).concat([c()]).join(" "),
        () => fr(Y, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = Se(te);
      {
        var vt = (Je) => {
          var ft = Jc(), ot = re(ft);
          {
            var zt = (Lt) => {
              var kt = Fp();
              R(Lt, kt);
            };
            Ie(ot, (Lt) => {
              f() === "filled" && Lt(zt);
            });
          }
          var Pn = be(ot, 2);
          {
            var ht = (Lt) => {
              {
                let kt = /* @__PURE__ */ ce(() => s(F) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), st = /* @__PURE__ */ ce(() => lt(Y, "label$"));
                _e(
                  Ys(Lt, it(
                    {
                      get floatAbove() {
                        return s(kt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(st),
                    {
                      children: (Bt, mr) => {
                        var En = me(), Rt = re(En);
                        {
                          var Yt = (hn) => {
                          }, Sn = (hn) => {
                            var An = Dt();
                            Ne(() => ut(An, e.label)), R(hn, An);
                          }, Hn = (hn) => {
                            var An = me(), on = re(An);
                            Ee(on, () => e.label), R(hn, An);
                          };
                          Ie(Rt, (hn) => {
                            e.label == null ? hn(Yt) : typeof e.label == "string" ? hn(Sn, 1) : hn(Hn, -1);
                          });
                        }
                        R(Bt, En);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Bt) => L(Bt),
                  () => L()
                );
              }
            };
            Ie(Pn, (Lt) => {
              !v() && e.label != null && Lt(ht);
            });
          }
          R(Je, ft);
        };
        Ie(Be, (Je) => {
          !m() && f() !== "outlined" && Je(vt);
        });
      }
      var It = be(Be, 2);
      {
        var Pt = (Je) => {
          {
            let ft = /* @__PURE__ */ ce(() => v() || e.label == null), ot = /* @__PURE__ */ ce(() => lt(Y, "outline$"));
            _e(
              Rf(Je, it(
                {
                  get noLabel() {
                    return s(ft);
                  }
                },
                () => s(ot),
                {
                  children: (zt, Pn) => {
                    var ht = me(), Lt = re(ht);
                    {
                      var kt = (st) => {
                        {
                          let Bt = /* @__PURE__ */ ce(() => s(F) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), mr = /* @__PURE__ */ ce(() => lt(Y, "label$"));
                          _e(
                            Ys(st, it(
                              {
                                get floatAbove() {
                                  return s(Bt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(mr),
                              {
                                children: (En, Rt) => {
                                  var Yt = me(), Sn = re(Yt);
                                  {
                                    var Hn = (on) => {
                                    }, hn = (on) => {
                                      var ii = Dt();
                                      Ne(() => ut(ii, e.label)), R(on, ii);
                                    }, An = (on) => {
                                      var ii = me(), _a = re(ii);
                                      Ee(_a, () => e.label), R(on, ii);
                                    };
                                    Ie(Sn, (on) => {
                                      e.label == null ? on(Hn) : typeof e.label == "string" ? on(hn, 1) : on(An, -1);
                                    });
                                  }
                                  R(En, Yt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (En) => L(En),
                            () => L()
                          );
                        }
                      };
                      Ie(Lt, (st) => {
                        !v() && e.label != null && st(kt);
                      });
                    }
                    R(zt, ht);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (zt) => k(zt),
              () => k()
            );
          }
        };
        Ie(It, (Je) => {
          (m() || f() === "outlined") && Je(Pt);
        });
      }
      var qt = be(It, 2);
      Ss(qt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Je, ft) => {
          var ot = me(), zt = re(ot);
          Ee(zt, () => e.leadingIcon ?? ve), R(Je, ot);
        },
        $$slots: { default: !0 }
      });
      var Ur = be(qt, 2);
      Ee(Ur, () => e.children ?? ve);
      var bt = be(Ur, 2);
      {
        var Ht = (Je) => {
          var ft = Vp(), ot = Se(ft);
          {
            let Pn = /* @__PURE__ */ ce(() => lt(Y, "input$"));
            _e(
              kp(ot, it(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return I();
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
                () => s(Pn),
                {
                  onblur: (ht) => {
                    var Lt;
                    j(F, !1), j(U, !0), tt(Z(), "blur", ht), (Lt = e.input$onblur) == null || Lt.call(e, ht);
                  },
                  onfocus: (ht) => {
                    var Lt;
                    j(F, !0), tt(Z(), "focus", ht), (Lt = e.input$onfocus) == null || Lt.call(e, ht);
                  },
                  get value() {
                    return g();
                  },
                  set value(ht) {
                    g(ht);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(ht) {
                    A(ht);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(ht) {
                    _(ht);
                  }
                }
              )),
              (ht) => S(ht),
              () => S()
            );
          }
          var zt = be(ot, 2);
          Ee(zt, () => e.internalCounter ?? ve), Ne((Pn) => Po(ft, 1, Pn), [
            () => Wd(De({
              "mdc-text-field__resizer": !("input$resizable" in Y) || e.input$resizable
            }))
          ]), R(Je, ft);
        }, Kt = (Je) => {
          var ft = Gp(), ot = re(ft);
          {
            var zt = (kt) => {
              var st = me(), Bt = re(st);
              {
                var mr = (Rt) => {
                  Lp(Rt, {
                    children: (Yt, Sn) => {
                      var Hn = Dt();
                      Ne(() => ut(Hn, e.prefix)), R(Yt, Hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, En = (Rt) => {
                  var Yt = me(), Sn = re(Yt);
                  Ee(Sn, () => e.prefix ?? ve), R(Rt, Yt);
                };
                Ie(Bt, (Rt) => {
                  typeof e.prefix == "string" ? Rt(mr) : Rt(En, -1);
                });
              }
              R(kt, st);
            };
            Ie(ot, (kt) => {
              e.prefix != null && kt(zt);
            });
          }
          var Pn = be(ot, 2);
          {
            let kt = /* @__PURE__ */ ce(() => lt(Y, "input$"));
            _e(
              Pp(Pn, it(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return I();
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
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(kt),
                {
                  onblur: (st) => {
                    var Bt;
                    j(F, !1), j(U, !0), tt(Z(), "blur", st), (Bt = e.input$onblur) == null || Bt.call(e, st);
                  },
                  onfocus: (st) => {
                    var Bt;
                    j(F, !0), tt(Z(), "focus", st), (Bt = e.input$onfocus) == null || Bt.call(e, st);
                  },
                  get value() {
                    return g();
                  },
                  set value(st) {
                    g(st);
                  },
                  get files() {
                    return p();
                  },
                  set files(st) {
                    p(st);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(st) {
                    A(st);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(st) {
                    _(st);
                  }
                }
              )),
              (st) => S(st),
              () => S()
            );
          }
          var ht = be(Pn, 2);
          {
            var Lt = (kt) => {
              var st = me(), Bt = re(st);
              {
                var mr = (Rt) => {
                  Np(Rt, {
                    children: (Yt, Sn) => {
                      var Hn = Dt();
                      Ne(() => ut(Hn, e.suffix)), R(Yt, Hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, En = (Rt) => {
                  var Yt = me(), Sn = re(Yt);
                  Ee(Sn, () => e.suffix ?? ve), R(Rt, Yt);
                };
                Ie(Bt, (Rt) => {
                  typeof e.suffix == "string" ? Rt(mr) : Rt(En, -1);
                });
              }
              R(kt, st);
            };
            Ie(ht, (kt) => {
              e.suffix != null && kt(Lt);
            });
          }
          R(Je, ft);
        };
        Ie(bt, (Je) => {
          m() && typeof g() == "string" ? Je(Ht) : Je(Kt, -1);
        });
      }
      var Qn = be(bt, 2);
      Ss(Qn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Je, ft) => {
          var ot = me(), zt = re(ot);
          Ee(zt, () => e.trailingIcon ?? ve), R(Je, ot);
        },
        $$slots: { default: !0 }
      });
      var nt = be(Qn, 2);
      {
        var kr = (Je) => {
          {
            let ft = /* @__PURE__ */ ce(() => lt(Y, "ripple$"));
            _e(Lf(Je, it(() => s(ft))), (ot) => q(ot), () => q());
          }
        };
        Ie(nt, (Je) => {
          !m() && f() !== "outlined" && o() && Je(kr);
        });
      }
      _e(te, (Je) => w = Je, () => w), Pe(te, (Je, ft) => Zt == null ? void 0 : Zt(Je, ft), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: Ue,
        removeClass: Oe,
        addStyle: Ve,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: z
      })), Pe(te, (Je, ft) => X == null ? void 0 : X(Je, ft), a), R(Q, te);
    }, Dn = (Q) => {
      var te = Wp();
      Fe(te, (bt, Ht, Kt) => ({ class: bt, style: Ht, ...Kt }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": _(),
          ...B,
          [l()]: !0
        }),
        () => Object.entries(K).map(([bt, Ht]) => `${bt}: ${Ht};`).concat([c()]).join(" "),
        () => fr(Y, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = Se(te);
      {
        var vt = (bt) => {
          var Ht = me(), Kt = re(Ht);
          Ee(Kt, () => e.label ?? ve), R(bt, Ht);
        };
        Ie(Be, (bt) => {
          typeof e.label != "string" && bt(vt);
        });
      }
      var It = be(Be, 2);
      Ss(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (bt, Ht) => {
          var Kt = me(), Qn = re(Kt);
          Ee(Qn, () => e.leadingIcon ?? ve), R(bt, Kt);
        },
        $$slots: { default: !0 }
      });
      var Pt = be(It, 2);
      Ee(Pt, () => e.children ?? ve);
      var qt = be(Pt, 2);
      Ss(qt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (bt, Ht) => {
          var Kt = me(), Qn = re(Kt);
          Ee(Qn, () => e.trailingIcon ?? ve), R(bt, Kt);
        },
        $$slots: { default: !0 }
      });
      var Ur = be(qt, 2);
      Ee(Ur, () => e.line ?? ve), _e(te, (bt) => w = bt, () => w), Pe(te, (bt, Ht) => Zt == null ? void 0 : Zt(bt, Ht), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: Ue,
        removeClass: Oe,
        addStyle: Ve
      })), Pe(te, (bt, Ht) => X == null ? void 0 : X(bt, Ht), a), R(Q, te);
    };
    Ie(je, (Q) => {
      O ? Q(Et) : Q(Dn, -1);
    });
  }
  var fe = be(je, 2);
  {
    var pe = (Q) => {
      {
        let te = /* @__PURE__ */ ce(() => lt(Y, "helperLine$"));
        wp(Q, it(() => s(te), {
          children: (Be, vt) => {
            var It = me(), Pt = re(It);
            Ee(Pt, () => e.helper ?? ve), R(Be, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Ie(fe, (Q) => {
      e.helper && Q(pe);
    });
  }
  return R(t, Le), xe(se);
}
var qp = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "role",
  "tabindex",
  "disabled",
  "children"
]), Kp = /* @__PURE__ */ ge("<i><!></i>");
function zp(t, e) {
  Ce(e, !0);
  const n = () => cr(h, "$leadingStore", r), [r, i] = Hr();
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), c = b(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = b(e, "disabled", 3, !1), u = /* @__PURE__ */ Xe(e, qp), d, m = /* @__PURE__ */ de(void 0), f = new Oi(), v = oe({});
  const h = ue("SMUI:textfield:icon:leading"), g = n();
  let p = /* @__PURE__ */ de(void 0);
  const _ = /* @__PURE__ */ ce(() => ({ role: e.role, tabindex: c() })), I = ue("SMUI:textfield:leading-icon:mount"), y = ue("SMUI:textfield:leading-icon:unmount"), A = ue("SMUI:textfield:trailing-icon:mount"), C = ue("SMUI:textfield:trailing-icon:unmount");
  at(() => (j(
    m,
    new Go({
      getAttr: E,
      setAttr: x,
      removeAttr: T,
      setContent: (N) => {
        j(p, N, !0);
      },
      registerInteractionHandler: (N, W) => f.on(S(), N, W),
      deregisterInteractionHandler: (N, W) => f.off(S(), N, W),
      notifyIconAction: () => tt(S(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? I && I(s(m)) : A && A(s(m)), s(m).init(), () => {
    var N;
    s(m) && (g ? y && y(s(m)) : C && C(s(m))), (N = s(m)) == null || N.destroy(), j(m, void 0), f.clear();
  }));
  function E(N) {
    return N in v ? v[N] ?? null : S().getAttribute(N);
  }
  function x(N, W) {
    v[N] !== W && (v[N] = W);
  }
  function T(N) {
    (!(N in v) || v[N] != null) && (v[N] = void 0);
  }
  function S() {
    return d;
  }
  var L = { getElement: S }, q = Kp();
  Fe(
    q,
    (N) => ({
      class: N,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...s(_),
      ...v,
      ...u
    }),
    [
      () => De({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [l()]: !0
      })
    ]
  );
  var k = Se(q);
  {
    var Y = (N) => {
      var W = me(), B = re(W);
      Ee(B, () => e.children ?? ve), R(N, W);
    }, O = (N) => {
      var W = Dt();
      Ne(() => ut(W, s(p))), R(N, W);
    };
    Ie(k, (N) => {
      s(p) == null ? N(Y) : N(O, -1);
    });
  }
  _e(q, (N) => d = N, () => d), Pe(q, (N, W) => X == null ? void 0 : X(N, W), a), R(t, q);
  var w = xe(L);
  return i(), w;
}
function Yp(t, e) {
  Ce(e, !0);
  let n = b(e, "placeholder", 3, ""), r = b(e, "label", 3, ""), i = b(e, "icon", 3, ""), a = b(e, "value", 15, ""), l = b(e, "variant", 3, "standard"), c = b(e, "styles", 3, ""), o = b(e, "required", 3, !1), u = b(e, "invalid", 3, !1), d = b(e, "oninput", 3, () => {
  });
  var m = me(), f = re(m);
  {
    var v = (g) => {
      {
        const p = (I) => {
          zp(I, {
            class: "material-icons",
            children: (y, A) => {
              var C = Dt();
              Ne(() => ut(C, i())), R(y, C);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ ce(() => `width: 100%; ${c()}`);
        uo(g, {
          get label() {
            return r();
          },
          get required() {
            return o();
          },
          get invalid() {
            return u();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(_);
          },
          get variant() {
            return l();
          },
          get oninput() {
            return d();
          },
          get value() {
            return a();
          },
          set value(I) {
            a(I);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (g) => {
      uo(g, {
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
          return o();
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
        set value(p) {
          a(p);
        }
      });
    };
    Ie(f, (g) => {
      i() ? g(v) : g(h, -1);
    });
  }
  R(t, m), xe();
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
const $c = {
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
function Xp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Zp(t, e) {
  if (Xp(t) && e in $c) {
    const n = t.document.createElement("div"), { standard: r, prefixed: i } = $c[e];
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
const Qp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Jp = {
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
var St;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(St || (St = {}));
var Ei;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Ei || (Ei = {}));
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
class Vt extends Ot {
  static get cssClasses() {
    return Qp;
  }
  static get strings() {
    return Jp;
  }
  static get numbers() {
    return xa;
  }
  static get Corner() {
    return Ei;
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
    super(Object.assign(Object.assign({}, Vt.defaultAdapter), e)), this.isSurfaceOpen = !1, this.isQuickOpen = !1, this.isHoistedElement = !1, this.isFixedPosition = !1, this.isHorizontallyCenteredOnViewport = !1, this.maxHeight = 0, this.openBottomBias = 0, this.openAnimationEndTimerId = 0, this.closeAnimationEndTimerId = 0, this.animationRequestId = 0, this.anchorCorner = Ei.TOP_START, this.originCorner = Ei.TOP_START, this.anchorMargin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, this.position = { x: 0, y: 0 };
  }
  init() {
    const { ROOT: e, OPEN: n } = Vt.cssClasses;
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
    this.originCorner = this.originCorner ^ St.RIGHT;
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
    this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(Vt.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(Vt.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(() => {
      this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.addClass(Vt.cssClasses.OPEN), this.openAnimationEndTimerId = setTimeout(() => {
        this.openAnimationEndTimerId = 0, this.adapter.removeClass(Vt.cssClasses.ANIMATING_OPEN), this.adapter.notifyOpen();
      }, xa.TRANSITION_OPEN_DURATION);
    }), this.isSurfaceOpen = !0), this.adapter.registerWindowEventHandler("resize", this.resizeListener));
  }
  /**
   * Closes the menu surface.
   */
  close(e = !1) {
    if (this.isSurfaceOpen) {
      if (this.adapter.notifyClosing(), this.adapter.deregisterWindowEventHandler("resize", this.resizeListener), this.isQuickOpen) {
        this.isSurfaceOpen = !1, e || this.maybeRestoreFocus(), this.adapter.removeClass(Vt.cssClasses.OPEN), this.adapter.removeClass(Vt.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(Vt.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(() => {
        this.adapter.removeClass(Vt.cssClasses.OPEN), this.adapter.removeClass(Vt.cssClasses.IS_OPEN_BELOW), this.closeAnimationEndTimerId = setTimeout(() => {
          this.closeAnimationEndTimerId = 0, this.adapter.removeClass(Vt.cssClasses.ANIMATING_CLOSED), this.adapter.notifyClose();
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
    const e = this.getoriginCorner(), n = this.getMenuSurfaceMaxHeight(e), r = this.hasBit(e, St.BOTTOM) ? "bottom" : "top";
    let i = this.hasBit(e, St.RIGHT) ? "right" : "left";
    const a = this.getHorizontalOriginOffset(e), l = this.getVerticalOriginOffset(e), { anchorSize: c, surfaceSize: o } = this.measurements, u = {
      [i]: a,
      [r]: l
    };
    c.width / o.width > xa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (i = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(u), this.adapter.setTransformOrigin(`${i} ${r}`), this.adapter.setPosition(u), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(e, St.BOTTOM) || this.adapter.addClass(Vt.cssClasses.IS_OPEN_BELOW);
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
    const { viewportDistance: n, anchorSize: r, surfaceSize: i } = this.measurements, { MARGIN_TO_EDGE: a } = Vt.numbers, l = this.hasBit(this.anchorCorner, St.BOTTOM);
    let c, o;
    l ? (c = n.top - a + this.anchorMargin.bottom, o = n.bottom - a - this.anchorMargin.bottom) : (c = n.top - a + this.anchorMargin.top, o = n.bottom - a + r.height - this.anchorMargin.top), !(o - i.height > 0) && c > o + this.openBottomBias && (e = this.setBit(e, St.BOTTOM));
    const d = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, St.FLIP_RTL), f = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(e, St.RIGHT);
    let v = !1;
    d && m ? v = !f : v = f;
    let h, g;
    v ? (h = n.left + r.width + this.anchorMargin.left, g = n.right - this.anchorMargin.left) : (h = n.left + this.anchorMargin.left, g = n.right + r.width - this.anchorMargin.left);
    const p = h - i.width > 0, _ = g - i.width > 0, I = this.hasBit(e, St.FLIP_RTL) && this.hasBit(e, St.RIGHT);
    return _ && I && d || !p && I ? e = this.unsetBit(e, St.RIGHT) : (p && v && d || p && !v && f || !_ && h >= g) && (e = this.setBit(e, St.RIGHT)), e;
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
    const i = this.hasBit(e, St.BOTTOM), a = this.hasBit(this.anchorCorner, St.BOTTOM), { MARGIN_TO_EDGE: l } = Vt.numbers;
    return i ? (r = n.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
  }
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  getHorizontalOriginOffset(e) {
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, St.RIGHT), i = this.hasBit(this.anchorCorner, St.RIGHT);
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
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, St.BOTTOM), i = this.hasBit(this.anchorCorner, St.BOTTOM);
    let a = 0;
    return r ? a = i ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = i ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
  }
  /**
   * Calculates the offsets for positioning the menu-surface when the
   * menu-surface has been hoisted to the body.
   */
  adjustPositionForHoistedElement(e) {
    const { windowScroll: n, viewportDistance: r, surfaceSize: i, viewportSize: a } = this.measurements, l = Object.keys(e);
    for (const c of l) {
      let o = e[c] || 0;
      if (this.isHorizontallyCenteredOnViewport && (c === "left" || c === "right")) {
        e[c] = (a.width - i.width) / 2;
        continue;
      }
      o += r[c], this.isFixedPosition || (c === "top" ? o += n.y : c === "bottom" ? o -= n.y : c === "left" ? o += n.x : o -= n.x), e[c] = o;
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
var $p = /* @__PURE__ */ new Set([
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
]), e_ = /* @__PURE__ */ ge("<div><!></div>");
function t_(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "static", 3, !1), l = b(e, "anchor", 3, !0), c = b(e, "fixed", 3, !1), o = b(e, "open", 31, () => oe(a())), u = b(e, "managed", 3, !1), d = b(e, "fullWidth", 3, !1), m = b(e, "quickOpen", 3, !1), f = b(e, "anchorElement", 15), v = b(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = b(e, "maxHeight", 3, 0), g = b(e, "horizontallyCenteredOnViewport", 3, !1), p = b(e, "openBottomBias", 3, 0), _ = b(e, "neverRestoreFocus", 3, !1), I = /* @__PURE__ */ Xe(e, $p), y, A = /* @__PURE__ */ de(void 0), C = new Oi(), E = oe({}), x = oe({}), T = /* @__PURE__ */ de(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), Ae(() => {
    var ee, V;
    y && l() && !((ee = y.parentElement) != null && ee.classList.contains("mdc-menu-surface--anchor")) && ((V = y.parentElement) == null || V.classList.add("mdc-menu-surface--anchor"), f(y.parentElement ?? void 0));
  }), Ae(() => {
    s(A) && s(A).isOpen() !== o() && (o() ? s(A).open() : s(A).close());
  }), Ae(() => {
    s(A) && s(A).setQuickOpen(m());
  }), Ae(() => {
    s(A) && s(A).setFixedPosition(c());
  }), Ae(() => {
    s(A) && s(A).setMaxHeight(h());
  }), Ae(() => {
    s(A) && s(A).setIsHorizontallyCenteredOnViewport(g());
  });
  const S = Ei;
  Ae(() => {
    s(A) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(A).setAnchorCorner(S[e.anchorCorner]) : s(A).setAnchorCorner(e.anchorCorner));
  }), Ae(() => {
    s(A) && s(A).setAnchorMargin(v());
  }), Ae(() => {
    s(A) && s(A).setOpenBottomBias(p());
  });
  const L = ue("SMUI:menu-surface:mount"), q = ue("SMUI:menu-surface:unmount");
  at(() => {
    j(
      A,
      new Vt({
        addClass: Y,
        removeClass: O,
        hasClass: k,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || o(a()), !o() && ne() && tt(ne(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || o(a()), !o() && ne() && tt(ne(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || o(!0), o() && ne() && tt(ne(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          !o() && ne() && tt(ne(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (V) => {
          var ie;
          return ((ie = ne()) == null ? void 0 : ie.contains(V)) ?? !1;
        },
        isRtl: () => ne() && getComputedStyle(ne()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (V) => {
          x["transform-origin"] = V;
        },
        isFocused: () => document.activeElement === ne(),
        saveFocus: () => {
          j(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          var V;
          !_() && (!y || (V = ne()) != null && V.contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
        },
        getInnerDimensions: () => {
          var V, ie;
          return {
            width: ((V = ne()) == null ? void 0 : V.offsetWidth) ?? 0,
            height: ((ie = ne()) == null ? void 0 : ie.offsetHeight) ?? 0
          };
        },
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getViewportDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (V) => {
          x.left = "left" in V ? `${V.left}px` : "", x.right = "right" in V ? `${V.right}px` : "", x.top = "top" in V ? `${V.top}px` : "", x.bottom = "bottom" in V ? `${V.bottom}px` : "";
        },
        setMaxHeight: (V) => {
          x["max-height"] = V;
        },
        registerWindowEventHandler: (V, ie) => C.on(window, V, ie),
        deregisterWindowEventHandler: (V, ie) => C.off(window, V, ie)
      }),
      !0
    );
    const ee = {
      get open() {
        return o();
      },
      set open(V) {
        o(V);
      },
      closeProgrammatic: w
    };
    return L && L(ee), s(A).init(), () => {
      var ie, we, J, ae;
      q && q(ee), l() && ne() && ((ie = ne().parentElement) == null || ie.classList.remove("mdc-menu-surface--anchor"));
      const V = s(A).isHoistedElement;
      if ((we = s(A)) == null || we.destroy(), j(A, void 0), V)
        try {
          (ae = (J = ne()) == null ? void 0 : J.parentNode) == null || ae.removeChild(ne());
        } catch {
        }
    };
  });
  function k(ee) {
    return ee in E ? E[ee] : ne().classList.contains(ee);
  }
  function Y(ee) {
    E[ee] || (E[ee] = !0);
  }
  function O(ee) {
    (!(ee in E) || E[ee]) && (E[ee] = !1);
  }
  function w(ee) {
    var V;
    (V = s(A)) == null || V.close(ee), o(!1);
  }
  function N(ee) {
    s(A) && o() && !u() && s(A).handleBodyClick(ee);
  }
  function W() {
    return o();
  }
  function B(ee) {
    o(ee);
  }
  function K(ee, V) {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).setAbsolutePosition(ee, V);
  }
  function H(ee) {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).setIsHoisted(ee);
  }
  function F() {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).isFixed();
  }
  function U() {
    if (s(A) == null)
      throw new Error("Instance is not defined.");
    return s(A).flipCornerHorizontally();
  }
  function ne() {
    return y;
  }
  var ye = {
    isOpen: W,
    setOpen: B,
    setAbsolutePosition: K,
    setIsHoisted: H,
    isFixed: F,
    flipCornerHorizontally: U,
    getElement: ne
  }, G = e_();
  Ua("click", gd.body, N, !0);
  var z = (ee) => {
    var V;
    s(A) && !u() && s(A).handleKeydown(ee), (V = e.onkeydown) == null || V.call(e, ee);
  };
  Fe(
    G,
    (ee, V) => ({
      class: ee,
      style: V,
      role: "dialog",
      ...I,
      onkeydown: z
    }),
    [
      () => De({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(x).map(([ee, V]) => `${ee}: ${V};`).concat([i()]).join(" ")
    ]
  );
  var $ = Se(G);
  return Ee($, () => e.children ?? ve), _e(G, (ee) => y = ee, () => y), Pe(G, (ee, V) => X == null ? void 0 : X(ee, V), n), R(t, G), xe(ye);
}
function Rl(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
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
const rt = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
}, Pi = {
  [`${rt.LIST_ITEM_ACTIVATED_CLASS}`]: "mdc-deprecated-list-item--activated",
  [`${rt.LIST_ITEM_CLASS}`]: "mdc-deprecated-list-item",
  [`${rt.LIST_ITEM_DISABLED_CLASS}`]: "mdc-deprecated-list-item--disabled",
  [`${rt.LIST_ITEM_SELECTED_CLASS}`]: "mdc-deprecated-list-item--selected",
  [`${rt.LIST_ITEM_TEXT_CLASS}`]: "mdc-deprecated-list-item__text",
  [`${rt.LIST_ITEM_PRIMARY_TEXT_CLASS}`]: "mdc-deprecated-list-item__primary-text",
  [`${rt.ROOT}`]: "mdc-deprecated-list"
}, Vr = {
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
    .${rt.LIST_ITEM_CLASS} button:not(:disabled),
    .${rt.LIST_ITEM_CLASS} a,
    .${Pi[rt.LIST_ITEM_CLASS]} button:not(:disabled),
    .${Pi[rt.LIST_ITEM_CLASS]} a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .${rt.LIST_ITEM_CLASS} button:not(:disabled),
    .${rt.LIST_ITEM_CLASS} a,
    .${rt.LIST_ITEM_CLASS} input[type="radio"]:not(:disabled),
    .${rt.LIST_ITEM_CLASS} input[type="checkbox"]:not(:disabled),
    .${Pi[rt.LIST_ITEM_CLASS]} button:not(:disabled),
    .${Pi[rt.LIST_ITEM_CLASS]} a,
    .${Pi[rt.LIST_ITEM_CLASS]} input[type="radio"]:not(:disabled),
    .${Pi[rt.LIST_ITEM_CLASS]} input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ct = {
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
const n_ = ["input", "button", "textarea", "select"], yn = (t) => {
  const e = t.target;
  if (!e)
    return;
  const n = `${e.tagName}`.toLowerCase();
  n_.indexOf(n) === -1 && t.preventDefault();
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
function r_() {
  return {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
}
function i_(t, e) {
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
function fo(t, e) {
  const { nextChar: n, focusItemAtIndex: r, sortedIndexByFirstChar: i, focusedItemIndex: a, skipFocus: l, isItemAtIndexDisabled: c } = t;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(() => {
    Mf(e);
  }, ct.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  let o;
  return e.typeaheadBuffer.length === 1 ? o = a_(i, a, c, e) : o = s_(i, c, e), o !== -1 && !l && r(o), o;
}
function a_(t, e, n, r) {
  const i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    const o = a[r.sortedIndexCursor].index;
    if (!n(o))
      return o;
  }
  r.currentFirstChar = i;
  let l = -1, c;
  for (c = 0; c < a.length; c++)
    if (!n(a[c].index)) {
      l = c;
      break;
    }
  for (; c < a.length; c++)
    if (a[c].index > e && !n(a[c].index)) {
      l = c;
      break;
    }
  return l !== -1 ? (r.sortedIndexCursor = l, a[r.sortedIndexCursor].index) : -1;
}
function s_(t, e, n) {
  const r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  const a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  let l = (n.sortedIndexCursor + 1) % i.length, c = -1;
  for (; l !== n.sortedIndexCursor; ) {
    const o = i[l], u = o.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(o.index);
    if (u && d) {
      c = l;
      break;
    }
    l = (l + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function Nf(t) {
  return t.typeaheadBuffer.length > 0;
}
function Mf(t) {
  t.typeaheadBuffer = "";
}
function eu(t, e) {
  const { event: n, isTargetListItem: r, focusedItemIndex: i, focusItemAtIndex: a, sortedIndexByFirstChar: l, isItemAtIndexDisabled: c } = t, o = xt(n) === "ArrowLeft", u = xt(n) === "ArrowUp", d = xt(n) === "ArrowRight", m = xt(n) === "ArrowDown", f = xt(n) === "Home", v = xt(n) === "End", h = xt(n) === "Enter", g = xt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || o || u || d || m || f || v || h)
    return -1;
  if (!g && n.key.length === 1) {
    yn(n);
    const I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return fo(I, e);
  }
  return g ? (r && yn(n), r && Nf(e) ? fo({
    focusItemAtIndex: a,
    focusedItemIndex: i,
    nextChar: " ",
    sortedIndexByFirstChar: l,
    skipFocus: !1,
    isItemAtIndexDisabled: c
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
function l_(t) {
  return t instanceof Array;
}
const o_ = ["Alt", "Control", "Meta", "Shift"];
function tu(t) {
  const e = new Set(t ? o_.filter((n) => t.getModifierState(n)) : []);
  return (n) => n.every((r) => e.has(r)) && n.length === e.size;
}
class Wo extends Ot {
  static get strings() {
    return Vr;
  }
  static get cssClasses() {
    return rt;
  }
  static get numbers() {
    return ct;
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
    super(Object.assign(Object.assign({}, Wo.defaultAdapter), e)), this.wrapFocus = !1, this.isVertical = !0, this.isSingleSelectionList = !1, this.areDisabledItemsFocusable = !1, this.selectedIndex = ct.UNSET_INDEX, this.focusedItemIndex = ct.UNSET_INDEX, this.useActivatedClass = !1, this.useSelectedAttr = !1, this.ariaCurrentAttrValue = null, this.isCheckboxList = !1, this.isRadioList = !1, this.lastSelectedIndex = null, this.hasTypeahead = !1, this.typeaheadState = r_(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
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
    if (e === ct.UNSET_INDEX)
      return;
    this.adapter.listItemAtIndexHasClass(e, rt.LIST_ITEM_ACTIVATED_CLASS) && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = e;
  }
  /** @return Index of the first selected item based on the DOM state. */
  getSelectedIndexFromDOM() {
    let e = ct.UNSET_INDEX;
    const n = this.adapter.getListItemCount();
    for (let r = 0; r < n; r++) {
      const i = this.adapter.listItemAtIndexHasClass(r, rt.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, rt.LIST_ITEM_ACTIVATED_CLASS);
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
    return this.hasTypeahead && Nf(this.typeaheadState);
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
    return this.adapter.listItemAtIndexHasClass(e, rt.LIST_ITEM_DISABLED_CLASS);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, n, r) {
    var i;
    const a = xt(e) === "ArrowLeft", l = xt(e) === "ArrowUp", c = xt(e) === "ArrowRight", o = xt(e) === "ArrowDown", u = xt(e) === "Home", d = xt(e) === "End", m = xt(e) === "Enter", f = xt(e) === "Spacebar", v = this.isVertical && o || !this.isVertical && c, h = this.isVertical && l || !this.isVertical && a, g = e.key === "A" || e.key === "a", p = tu(e);
    if (this.adapter.isRootFocused()) {
      if ((h || d) && p([]))
        e.preventDefault(), this.focusLastElement();
      else if ((v || u) && p([]))
        e.preventDefault(), this.focusFirstElement();
      else if (h && p(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        const I = this.focusLastElement();
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      } else if (v && p(["Shift"]) && this.isCheckboxList) {
        e.preventDefault();
        const I = this.focusFirstElement();
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      }
      if (this.hasTypeahead) {
        const I = {
          event: e,
          focusItemAtIndex: (y) => {
            this.focusItemAtIndex(y);
          },
          focusedItemIndex: -1,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (y) => this.isIndexDisabled(y)
        };
        eu(I, this.typeaheadState);
      }
      return;
    }
    let _ = this.adapter.getFocusedElementIndex();
    if (!(_ === -1 && (_ = r, _ < 0))) {
      if (v && p([]))
        yn(e), this.focusNextElement(_);
      else if (h && p([]))
        yn(e), this.focusPrevElement(_);
      else if (v && p(["Shift"]) && this.isCheckboxList) {
        yn(e);
        const I = this.focusNextElement(_);
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      } else if (h && p(["Shift"]) && this.isCheckboxList) {
        yn(e);
        const I = this.focusPrevElement(_);
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      } else if (u && p([]))
        yn(e), this.focusFirstElement();
      else if (d && p([]))
        yn(e), this.focusLastElement();
      else if (u && p(["Control", "Shift"]) && this.isCheckboxList) {
        if (yn(e), this.isIndexDisabled(_))
          return;
        this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
      } else if (d && p(["Control", "Shift"]) && this.isCheckboxList) {
        if (yn(e), this.isIndexDisabled(_))
          return;
        this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
      } else if (g && p(["Control"]) && this.isCheckboxList)
        e.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex, !0);
      else if ((m || f) && (p([]) || p(["Alt"]))) {
        if (n) {
          const I = e.target;
          if (I && I.tagName === "A" && m || (yn(e), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
        }
      } else if ((m || f) && p(["Shift"]) && this.isCheckboxList) {
        const I = e.target;
        if (I && I.tagName === "A" && m || (yn(e), this.isIndexDisabled(_)))
          return;
        this.isTypeaheadInProgress() || (this.toggleCheckboxRange((i = this.lastSelectedIndex) !== null && i !== void 0 ? i : _, _, _), this.adapter.notifyAction(_));
      }
      if (this.hasTypeahead) {
        const I = {
          event: e,
          focusItemAtIndex: (y) => {
            this.focusItemAtIndex(y);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (y) => this.isIndexDisabled(y)
        };
        eu(I, this.typeaheadState);
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
    const a = tu(r);
    e !== ct.UNSET_INDEX && (this.isIndexDisabled(e) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(e, n), this.adapter.notifyAction(e)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((i = this.lastSelectedIndex) !== null && i !== void 0 ? i : e, e, e), this.adapter.notifyAction(e))));
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
    return e !== ct.UNSET_INDEX && this.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, n) {
    this.isIndexValid(e, !1) && (n ? (this.adapter.removeClassForElementIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Vr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Vr.ARIA_DISABLED, "true")));
  }
  setSingleSelectionAtIndex(e, n = {}) {
    if (this.selectedIndex === e && !n.forceUpdate)
      return;
    let r = rt.LIST_ITEM_SELECTED_CLASS;
    this.useActivatedClass && (r = rt.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ct.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(e), this.setTabindexAtIndex(e), e !== ct.UNSET_INDEX && this.adapter.addClassForElementIndex(e, r), this.selectedIndex = e, n.isUserInteraction && !n.forceUpdate && this.adapter.notifySelectionChange([e]);
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex(e) {
    this.selectedIndex === ct.UNSET_INDEX && e !== ct.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(e, Vr.ARIA_CURRENT));
    const n = this.ariaCurrentAttrValue !== null, r = n ? Vr.ARIA_CURRENT : Vr.ARIA_SELECTED;
    if (this.selectedIndex !== ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), e !== ct.UNSET_INDEX) {
      const i = n ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(e, r, i);
    }
  }
  /**
   * Returns the attribute to use for indicating selection status.
   */
  getSelectionAttribute() {
    return this.useSelectedAttr ? Vr.ARIA_SELECTED : Vr.ARIA_CHECKED;
  }
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it
   * is already checked.
   */
  setRadioAtIndex(e, n = {}) {
    const r = this.getSelectionAttribute();
    this.adapter.setCheckedCheckboxOrRadioAtIndex(e, !0), !(this.selectedIndex === e && !n.forceUpdate) && (this.selectedIndex !== ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(e, r, "true"), this.selectedIndex = e, n.isUserInteraction && !n.forceUpdate && this.adapter.notifySelectionChange([e]));
  }
  setCheckboxAtIndex(e, n = {}) {
    const r = this.selectedIndex, i = n.isUserInteraction ? new Set(r === ct.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), l = [];
    for (let c = 0; c < this.adapter.getListItemCount(); c++) {
      if (n.omitDisabledItems && this.isIndexDisabled(c))
        continue;
      const o = i == null ? void 0 : i.has(c), u = e.indexOf(c) >= 0;
      u !== o && l.push(c), this.adapter.setCheckedCheckboxOrRadioAtIndex(c, u), this.adapter.setAttributeForElementIndex(c, a, u ? "true" : "false");
    }
    this.selectedIndex = n.omitDisabledItems ? this.resolveSelectedIndices(e) : e, n.isUserInteraction && l.length && this.adapter.notifySelectionChange(l);
  }
  /**
   * Helper method for ensuring that the list of selected indices remains
   * accurate when calling setCheckboxAtIndex with omitDisabledItems set to
   * true.
   */
  resolveSelectedIndices(e) {
    const r = (this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex).filter((l) => this.isIndexDisabled(l)), i = e.filter((l) => !this.isIndexDisabled(l));
    return [
      .../* @__PURE__ */ new Set([
        ...i,
        ...r
      ])
    ].sort((l, c) => l - c);
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
    const i = new Set(this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex), a = !(i != null && i.has(r)), [l, c] = [e, n].sort(), o = this.getSelectionAttribute(), u = [];
    for (let d = l; d <= c; d++) {
      if (this.isIndexDisabled(d))
        continue;
      const m = i.has(d);
      a !== m && (u.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, o, `${a}`), a ? i.add(d) : i.delete(d));
    }
    u.length && (this.selectedIndex = [...i], this.adapter.notifySelectionChange(u));
  }
  setTabindexAtIndex(e) {
    this.focusedItemIndex === ct.UNSET_INDEX && e !== 0 && e !== ct.UNSET_INDEX ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== e && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== e && this.focusedItemIndex !== ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), e !== ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(e, "tabindex", "0");
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
      return ct.UNSET_INDEX;
    if (!this.isSelectableList())
      return Math.max(this.focusedItemIndex, e);
    if (typeof this.selectedIndex == "number" && this.selectedIndex !== ct.UNSET_INDEX)
      return this.areDisabledItemsFocusable && this.isIndexDisabled(this.selectedIndex) ? e : this.selectedIndex;
    if (l_(this.selectedIndex) && this.selectedIndex.length > 0) {
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
    return n === e ? ct.UNSET_INDEX : n;
  }
  isIndexValid(e, n = !0) {
    if (e instanceof Array) {
      if (!this.isCheckboxList && n)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      return e.length === 0 ? !0 : e.some((r) => this.isIndexInRange(r));
    } else if (typeof e == "number") {
      if (this.isCheckboxList && n)
        throw new Error(`MDCListFoundation: Expected array of index for checkbox based list but got number: ${e}`);
      return this.isIndexInRange(e) || this.isSingleSelectionList && e === ct.UNSET_INDEX;
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
    let l = this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex.slice();
    a ? l.push(e) : l = l.filter((c) => c !== e), this.selectedIndex = l;
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
      for (let c = 0; c < i; c++)
        (!this.isIndexDisabled(c) || e.indexOf(c) > -1) && l.push(c);
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
    return fo(i, this.typeaheadState);
  }
  /**
   * Initializes the MDCListTextAndIndex data structure by indexing the
   * current list items by primary text.
   *
   * @return The primary texts of all the list items sorted by first
   *     character.
   */
  typeaheadInitSortedIndex() {
    return i_(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  }
  /**
   * Clears the typeahead buffer.
   */
  clearTypeaheadBuffer() {
    Mf(this.typeaheadState);
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
}, c_ = {
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
class qo extends Ot {
  static get cssClasses() {
    return qi;
  }
  static get strings() {
    return Hi;
  }
  static get numbers() {
    return c_;
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
    super(Object.assign(Object.assign({}, qo.defaultAdapter), e)), this.defaultFocusState = Vi.LIST_ROOT, this.selectedIndex = -1;
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
    this.validatedIndex(e), n ? (this.adapter.removeClassFromElementAtIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_DISABLED_ATTR, "true"));
  }
  validatedIndex(e) {
    const n = this.adapter.getMenuItemCount();
    if (!(e >= 0 && e < n))
      throw new Error("MDCMenuFoundation: No list item at specified index.");
  }
}
var u_ = /* @__PURE__ */ new Set([
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
function d_(t, e) {
  Ce(e, !0);
  const { closest: n } = ds;
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "open", 15, !1), l = b(e, "anchorElement", 15), c = b(e, "managed", 3, !1), o = /* @__PURE__ */ Xe(e, u_), u, d = /* @__PURE__ */ de(void 0), m = /* @__PURE__ */ de(void 0), f = /* @__PURE__ */ de(void 0);
  le("SMUI:menu-surface:mount", (T) => {
    s(m) || j(m, T, !0);
  });
  const v = ue("SMUI:list:mount");
  le("SMUI:list:mount", (T) => {
    s(f) || j(f, T, !0), v && v(T);
  });
  const h = ue("SMUI:menu:mount"), g = ue("SMUI:menu:unmount");
  at(() => (j(
    d,
    new qo({
      addClassToElementAtIndex: (T, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(T, S);
      },
      removeClassFromElementAtIndex: (T, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(T, S);
      },
      addAttributeToElementAtIndex: (T, S, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(T, S, L);
      },
      removeAttributeFromElementAtIndex: (T, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(T, S);
      },
      getAttributeFromElementAtIndex: (T, S) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(T, S);
      },
      elementContainsClass: (T, S) => T.classList.contains(S),
      closeSurface: (T) => {
        var S;
        !c() && E() && ((S = s(m)) == null || S.closeProgrammatic(T), tt(E(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((S) => S.element).indexOf(T);
      },
      notifySelected: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        tt(E(), "SMUIMenuSelected", {
          index: T.index,
          item: s(f).getOrderedList()[T.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(T);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[T].element, `.${qi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const S = s(f).getOrderedList(), L = n(S[T].element, `.${qi.MENU_SELECTION_GROUP}`), q = L == null ? void 0 : L.querySelector(`.${qi.MENU_SELECTED_LIST_ITEM}`);
        return q ? S.map((k) => k.element).indexOf(q) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var T;
    g && s(d) && g(s(d)), (T = s(d)) == null || T.destroy(), j(d, void 0);
  }));
  function p(T) {
    s(d) && s(d).handleKeydown(T);
  }
  function _() {
    return a();
  }
  function I(T) {
    a(T);
  }
  function y(T) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(T);
  }
  function A() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function C() {
    return u;
  }
  function E() {
    return u.getElement();
  }
  var x = {
    isOpen: _,
    setOpen: I,
    setDefaultFocusState: y,
    getSelectedIndex: A,
    getMenuSurface: C,
    getElement: E
  };
  {
    let T = /* @__PURE__ */ ce(() => De({ "mdc-menu": !0, [i()]: !0 }));
    _e(
      t_(t, it(
        {
          get use() {
            return r();
          },
          get class() {
            return s(T);
          },
          get managed() {
            return c();
          }
        },
        () => o,
        {
          onkeydown: (S) => {
            var L;
            p(S), (L = e.onkeydown) == null || L.call(e, S);
          },
          onSMUIMenuSurfaceOpened: (S) => {
            var L;
            s(d) && s(d).handleMenuSurfaceOpened(), (L = e.onSMUIMenuSurfaceOpened) == null || L.call(e, S);
          },
          onSMUIListAction: (S) => {
            var L;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[S.detail.index].element), (L = e.onSMUIListAction) == null || L.call(e, S);
          },
          get open() {
            return a();
          },
          set open(S) {
            a(S);
          },
          get anchorElement() {
            return l();
          },
          set anchorElement(S) {
            l(S);
          },
          children: (S, L) => {
            var q = me(), k = re(q);
            Ee(k, () => e.children ?? ve), R(S, q);
          },
          $$slots: { default: !0 }
        }
      )),
      (S) => u = S,
      () => u
    );
  }
  return xe(x);
}
var f_ = /* @__PURE__ */ new Set([
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
function h_(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = ds;
  let i = ue("SMUI:list:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), c = b(e, "nonInteractive", 3, !1), o = b(e, "dense", 3, !1), u = b(e, "textualList", 3, !1), d = b(e, "avatarList", 3, !1), m = b(e, "iconList", 3, !1), f = b(e, "imageList", 3, !1), v = b(e, "thumbnailList", 3, !1), h = b(e, "videoList", 3, !1), g = b(e, "twoLine", 3, !1), p = b(e, "threeLine", 3, !1), _ = b(e, "vertical", 3, !0), I = b(e, "wrapFocus", 19, () => ue("SMUI:list:wrapFocus") ?? !1), y = b(e, "singleSelection", 3, !1), A = b(e, "disabledItemsFocusable", 3, !1), C = b(e, "selectedIndex", 31, () => -1), E = b(e, "radioList", 3, !1), x = b(e, "checkList", 3, !1), T = b(e, "hasTypeahead", 3, !1), S = b(e, "component", 3, ni), L = b(e, "tag", 3, i ? "nav" : "ul"), q = /* @__PURE__ */ Xe(e, f_), k, Y = /* @__PURE__ */ de(void 0), O = [], w = ue("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let W = ue("SMUI:dialog:selection"), B = ue("SMUI:addLayoutListener"), K;
  le("SMUI:list:nonInteractive", c()), le("SMUI:separator:context", "list"), w || (y() ? (w = "listbox", le("SMUI:list:item:role", "option")) : E() ? (w = "radiogroup", le("SMUI:list:item:role", "radio")) : x() ? (w = "group", le("SMUI:list:item:role", "checkbox")) : (w = "list", le("SMUI:list:item:role", void 0))), Ae(() => {
    s(Y) && s(Y).setVerticalOrientation(_());
  }), Ae(() => {
    s(Y) && s(Y).setWrapFocus(I());
  }), Ae(() => {
    s(Y) && s(Y).setHasTypeahead(T());
  }), Ae(() => {
    s(Y) && s(Y).setSingleSelection(y());
  }), Ae(() => {
    s(Y) && s(Y).setDisabledItemsFocusable(A());
  }), Ae(() => {
    s(Y) && y() && P() !== C() && s(Y).setSelectedIndex(C());
  }), B && (K = B(Ve)), le("SMUI:list:item:mount", (fe) => {
    O.push(fe), N.set(fe.element, fe), y() && fe.selected && C(Oe(fe.element));
  }), le("SMUI:list:item:unmount", (fe) => {
    const pe = (fe && O.findIndex((Q) => Q === fe)) ?? -1;
    pe !== -1 && (O.splice(pe, 1), N.delete(fe.element));
  });
  const H = ue("SMUI:list:mount"), F = ue("SMUI:list:unmount");
  at(() => {
    j(
      Y,
      new Wo({
        addClassForElementIndex: V,
        focusItemAtIndex: se,
        getAttributeForElementIndex: (pe, Q) => {
          var te;
          return ((te = $()[pe]) == null ? void 0 : te.getAttr(Q)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? $().map((pe) => pe.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Ue,
        hasCheckboxAtIndex: (pe) => {
          var Q;
          return ((Q = $()[pe]) == null ? void 0 : Q.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (pe) => {
          var Q;
          return ((Q = $()[pe]) == null ? void 0 : Q.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (pe) => {
          const Q = $()[pe];
          return ((Q == null ? void 0 : Q.hasCheckbox) && Q.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && Le() !== document.activeElement && Le().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === Le(),
        listItemAtIndexHasClass: ee,
        notifyAction: (pe) => {
          C(pe), k != null && tt(Le(), "SMUIListAction", { index: pe });
        },
        notifySelectionChange: (pe) => {
          k != null && tt(Le(), "SMUIListSelectionChange", { changedIndices: pe });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (pe, Q) => {
          $()[pe].checked = Q;
        },
        setTabIndexForListItemChildren: (pe, Q) => {
          const te = $()[pe];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (vt) => {
            vt.setAttribute("tabindex", Q);
          });
        }
      }),
      !0
    );
    const fe = {
      get element() {
        return Le();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(Y))
          throw new Error("Instance is undefined.");
        return s(Y).isTypeaheadInProgress();
      },
      typeaheadMatchItem(pe, Q) {
        if (!s(Y))
          throw new Error("Instance is undefined.");
        return s(Y).typeaheadMatchItem(
          pe,
          Q,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: $,
      focusItemAtIndex: se,
      addClassForElementIndex: V,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: J,
      getAttributeFromElementIndex: ae,
      getPrimaryTextAtIndex: Ue
    };
    return H && H(fe), s(Y).init(), s(Y).layout(), () => {
      var pe;
      F && F(fe), (pe = s(Y)) == null || pe.destroy(), j(Y, void 0);
    };
  }), Dr(() => {
    K && K();
  });
  function U(fe) {
    s(Y) && fe.target && s(Y).handleKeydown(fe, fe.target.classList.contains("mdc-deprecated-list-item"), Oe(fe.target));
  }
  function ne(fe) {
    s(Y) && fe.target && s(Y).handleFocusIn(Oe(fe.target));
  }
  function ye(fe) {
    s(Y) && fe.target && s(Y).handleFocusOut(Oe(fe.target));
  }
  function G(fe) {
    s(Y) && fe.target && s(Y).handleClick(Oe(fe.target), !r(fe.target, 'input[type="checkbox"], input[type="radio"]'), fe);
  }
  function z(fe) {
    if (E() || x()) {
      const pe = Oe(fe.target);
      if (pe !== -1) {
        const Q = $()[pe];
        Q && (E() && !Q.checked || x()) && (r(fe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Q.checked = !Q.checked), Q.activateRipple(), window.requestAnimationFrame(() => {
          Q.deactivateRipple();
        }));
      }
    }
  }
  function $() {
    return k == null ? [] : [...Le().children].map((fe) => N.get(fe)).filter((fe) => fe && fe._smui_list_item_accessor);
  }
  function ee(fe, pe) {
    const Q = $()[fe];
    return (Q && Q.hasClass(pe)) ?? !1;
  }
  function V(fe, pe) {
    const Q = $()[fe];
    Q && Q.addClass(pe);
  }
  function ie(fe, pe) {
    const Q = $()[fe];
    Q && Q.removeClass(pe);
  }
  function we(fe, pe, Q) {
    const te = $()[fe];
    te && te.addAttr(pe, Q);
  }
  function J(fe, pe) {
    const Q = $()[fe];
    Q && Q.removeAttr(pe);
  }
  function ae(fe, pe) {
    const Q = $()[fe];
    return Q ? Q.getAttr(pe) : null;
  }
  function Ue(fe) {
    const pe = $()[fe];
    return (pe && pe.getPrimaryText()) ?? "";
  }
  function Oe(fe) {
    const pe = n(fe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return pe && r(pe, ".mdc-deprecated-list-item") ? $().map((Q) => Q == null ? void 0 : Q.element).indexOf(pe) : -1;
  }
  function Ve() {
    if (!s(Y))
      throw new Error("Instance is undefined.");
    return s(Y).layout();
  }
  function ke(fe, pe) {
    if (!s(Y))
      throw new Error("Instance is undefined.");
    return s(Y).setEnabled(fe, pe);
  }
  function Re() {
    if (!s(Y))
      throw new Error("Instance is undefined.");
    return s(Y).isTypeaheadInProgress();
  }
  function P() {
    if (!s(Y))
      throw new Error("Instance is undefined.");
    return s(Y).getSelectedIndex();
  }
  function Z() {
    if (!s(Y))
      throw new Error("Instance is undefined.");
    return s(Y).getFocusedItemIndex();
  }
  function se(fe) {
    const pe = $()[fe];
    pe && "focus" in pe.element && pe.element.focus();
  }
  function Le() {
    return k.getElement();
  }
  var je = {
    layout: Ve,
    setEnabled: ke,
    getTypeaheadInProgress: Re,
    getSelectedIndex: P,
    getFocusedItemIndex: Z,
    focusItemAtIndex: se,
    getElement: Le
  }, Et = me(), Dn = re(Et);
  {
    let fe = /* @__PURE__ */ ce(() => De({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": o(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || W,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": p() && !g(),
      [l()]: !0
    }));
    Pr(Dn, S, (pe, Q) => {
      _e(
        Q(pe, it(
          {
            get tag() {
              return L();
            },
            get use() {
              return a();
            },
            get class() {
              return s(fe);
            },
            get role() {
              return w;
            }
          },
          () => q,
          {
            onkeydown: (te) => {
              var Be;
              U(te), (Be = e.onkeydown) == null || Be.call(e, te);
            },
            onfocusin: (te) => {
              var Be;
              ne(te), (Be = e.onfocusin) == null || Be.call(e, te);
            },
            onfocusout: (te) => {
              var Be;
              ye(te), (Be = e.onfocusout) == null || Be.call(e, te);
            },
            onclick: (te) => {
              var Be;
              G(te), (Be = e.onclick) == null || Be.call(e, te);
            },
            onSMUIAction: (te) => {
              var Be;
              z(te), (Be = e.onSMUIAction) == null || Be.call(e, te);
            },
            children: (te, Be) => {
              var vt = me(), It = re(vt);
              Ee(It, () => e.children ?? ve), R(te, vt);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => k = te,
        () => k
      );
    });
  }
  return R(t, Et), xe(je);
}
let v_ = 0;
var m_ = /* @__PURE__ */ new Set([
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
]), g_ = /* @__PURE__ */ ge('<span class="mdc-deprecated-list-item__ripple"></span>'), b_ = /* @__PURE__ */ ge("<!><!>", 1);
function p_(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(V) {
    return V === n;
  }
  let i = ue("SMUI:list:item:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), c = b(e, "style", 3, ""), o = b(e, "nonInteractive", 19, () => ue("SMUI:list:nonInteractive") ?? !1), u = b(e, "ripple", 19, () => !o()), d = b(e, "wrapper", 3, !1), m = b(e, "activated", 15, !1), f = b(e, "role", 19, () => d() ? "presentation" : ue("SMUI:list:item:role")), v = b(e, "selected", 15, !1), h = b(e, "disabled", 3, !1), g = b(e, "skipRestoreFocus", 3, !1), p = b(e, "tabindex", 15, n), _ = b(e, "inputId", 19, () => "SMUI-form-field-list-" + v_++), I = b(e, "component", 3, ni), y = b(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), A = /* @__PURE__ */ Xe(e, m_);
  le("SMUI:list:nonInteractive", void 0), le("SMUI:list:item:role", void 0);
  let C, E = oe({}), x = oe({}), T = oe({}), S = /* @__PURE__ */ de(void 0), L = /* @__PURE__ */ de(void 0);
  const q = /* @__PURE__ */ ce(() => r(p()) ? !o() && !h() && (v() || s(S) && s(S).checked) ? 0 : -1 : p());
  le("SMUI:generic:input:props", { id: _() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (V) => {
    ("_smui_checkbox_accessor" in V || "_smui_radio_accessor" in V) && j(S, V, !0);
  }), le("SMUI:generic:input:unmount", () => {
    j(S, void 0);
  });
  const k = ue("SMUI:list:item:mount"), Y = ue("SMUI:list:item:unmount");
  at(() => {
    if (!v() && !o() && C) {
      let ie = !0, we = C.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && j(L, window.requestAnimationFrame(() => F(we)), !0);
    }
    const V = {
      _smui_list_item_accessor: !0,
      get element() {
        return G();
      },
      get selected() {
        return v();
      },
      set selected(ie) {
        v(ie);
      },
      hasClass: O,
      addClass: w,
      removeClass: N,
      getAttr: B,
      addAttr: K,
      removeAttr: H,
      getPrimaryText: ye,
      // For inputs within item.
      get checked() {
        return (s(S) && s(S).checked) ?? !1;
      },
      set checked(ie) {
        s(S) && (s(S).checked = !!ie);
      },
      get hasCheckbox() {
        return !!(s(S) && "_smui_checkbox_accessor" in s(S));
      },
      get hasRadio() {
        return !!(s(S) && "_smui_radio_accessor" in s(S));
      },
      activateRipple() {
        s(S) && s(S).activateRipple();
      },
      deactivateRipple() {
        s(S) && s(S).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: ne,
      get tabindex() {
        return s(q);
      },
      set tabindex(ie) {
        p(ie);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return m();
      },
      set activated(ie) {
        m(ie);
      }
    };
    return k && k(V), () => {
      Y && Y(V), s(L) && window.cancelAnimationFrame(s(L));
    };
  });
  function O(V) {
    return V in E ? E[V] : G().classList.contains(V);
  }
  function w(V) {
    E[V] || (E[V] = !0);
  }
  function N(V) {
    (!(V in E) || E[V]) && (E[V] = !1);
  }
  function W(V, ie) {
    x[V] != ie && (ie === "" || ie == null ? delete x[V] : x[V] = ie);
  }
  function B(V) {
    return V in T ? T[V] ?? null : G().getAttribute(V);
  }
  function K(V, ie) {
    T[V] !== ie && (T[V] = ie);
  }
  function H(V) {
    (!(V in T) || T[V] != null) && (T[V] = void 0);
  }
  function F(V) {
    let ie = !0;
    for (; V.nextElementSibling; )
      if (V = V.nextElementSibling, V.nodeType === 1 && V.classList.contains("mdc-deprecated-list-item")) {
        const we = V.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && p(0);
  }
  function U(V) {
    const ie = V.key === "Enter", we = V.key === "Space";
    (ie || we) && ne(V);
  }
  function ne(V) {
    h() || tt(G(), "SMUIAction", V);
  }
  function ye() {
    if (!C)
      return "";
    const V = C.getElement();
    if (!V)
      return "";
    const ie = V.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const we = V.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : V.textContent ?? "";
  }
  function G() {
    return C.getElement();
  }
  var z = { action: ne, getPrimaryText: ye, getElement: G }, $ = me(), ee = re($);
  {
    let V = /* @__PURE__ */ ce(() => [
      ...o() ? [] : [
        [
          Zt,
          {
            ripple: !s(S),
            unbounded: !1,
            color: (m() || v()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: w,
            removeClass: N,
            addStyle: W
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ ce(() => De({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": o(),
      ...E,
      [l()]: !0
    })), we = /* @__PURE__ */ ce(() => Object.entries(x).map(([ae, Ue]) => `${ae}: ${Ue};`).concat([c()]).join(" ")), J = /* @__PURE__ */ ce(() => g() || void 0);
    Pr(ee, I, (ae, Ue) => {
      _e(
        Ue(ae, it(
          {
            get tag() {
              return y();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(ie);
            },
            get style() {
              return s(we);
            }
          },
          () => i && m() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(S) && s(S).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(J);
            },
            get tabindex() {
              return s(q);
            },
            get href() {
              return e.href;
            }
          },
          () => T,
          () => A,
          {
            onclick: (Oe) => {
              var Ve;
              ne(Oe), (Ve = e.onclick) == null || Ve.call(e, Oe);
            },
            onkeydown: (Oe) => {
              var Ve;
              U(Oe), (Ve = e.onkeydown) == null || Ve.call(e, Oe);
            },
            children: (Oe, Ve) => {
              var ke = b_(), Re = re(ke);
              {
                var P = (se) => {
                  var Le = g_();
                  R(se, Le);
                };
                Ie(Re, (se) => {
                  u() && se(P);
                });
              }
              var Z = be(Re);
              Ee(Z, () => e.children ?? ve), R(Oe, ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Oe) => C = Oe,
        () => C
      );
    });
  }
  return R(t, $), xe(z);
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
const _t = {
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
}, li = {
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
const oi = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Ir = {
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
class Ko extends Ot {
  static get cssClasses() {
    return Ir;
  }
  static get strings() {
    return oi;
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
    super(Object.assign(Object.assign({}, Ko.defaultAdapter), e));
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
    return this.adapter.getAttr(oi.ARIA_HIDDEN) !== "true";
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
    e ? this.adapter.addClass(Ir.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Ir.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * Sets the persistency of the validation helper text.
   * This keeps the validation message visible even if the select is valid,
   * though it will be displayed in the normal (grey) color.
   */
  setValidationMsgPersistent(e) {
    e ? this.adapter.addClass(Ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * @return Whether the helper text acts as a validation message.
   * By default, validation messages are hidden when the select is valid and
   * visible when the select is invalid.
   */
  getIsValidation() {
    return this.adapter.hasClass(Ir.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * @return Whether the validation helper text persists even if the input is
   * valid. If it is, it will be displayed in the normal (grey) color.
   */
  getIsValidationMsgPersistent() {
    return this.adapter.hasClass(Ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * When acting as a validation message, shows/hides the helper text and
   * triggers alerts as necessary based on the select's validity.
   */
  setValidity(e) {
    if (!this.adapter.hasClass(Ir.HELPER_TEXT_VALIDATION_MSG))
      return;
    const r = this.adapter.hasClass(Ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    if (!e || r) {
      this.showToScreenReader(), e ? this.adapter.removeAttr(oi.ROLE) : this.adapter.setAttr(oi.ROLE, "alert");
      return;
    }
    this.adapter.removeAttr(oi.ROLE), this.hide();
  }
  /**
   * Makes the helper text visible to screen readers.
   */
  showToScreenReader() {
    this.adapter.removeAttr(oi.ARIA_HIDDEN);
  }
  /**
   * Hides the help text from screen readers.
   */
  hide() {
    this.adapter.setAttr(oi.ARIA_HIDDEN, "true");
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
class zo extends Ot {
  static get cssClasses() {
    return _t;
  }
  static get numbers() {
    return li;
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
    super(Object.assign(Object.assign({}, zo.defaultAdapter), e)), this.disabled = !1, this.isMenuOpen = !1, this.useDefaultValidation = !0, this.customValidity = !0, this.lastSelectedIndex = li.UNSET_INDEX, this.clickDebounceTimeout = 0, this.recentlyClicked = !1, this.leadingIcon = n.leadingIcon, this.helperText = n.helperText, this.ariaDescribedbyIds = ((i = (r = this.adapter.getSelectAnchorAttr(wa.ARIA_DESCRIBEDBY)) === null || r === void 0 ? void 0 : r.split(" ")) === null || i === void 0 ? void 0 : i.filter((a) => {
      var l;
      return a !== ((l = this.helperText) === null || l === void 0 ? void 0 : l.getId()) && a !== "";
    })) || [];
  }
  /** Returns the index of the currently selected menu item, or -1 if none. */
  getSelectedIndex() {
    return this.adapter.getSelectedIndex();
  }
  setSelectedIndex(e, n = !1, r = !1) {
    e >= this.adapter.getMenuItemCount() || (this.adapter.setSelectedIndex(e), e === li.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== e && this.handleChange(), this.lastSelectedIndex = e);
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
    return e !== li.UNSET_INDEX ? n[e] : "";
  }
  getDisabled() {
    return this.disabled;
  }
  setDisabled(e) {
    this.disabled = e, this.disabled ? (this.adapter.addClass(_t.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(_t.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
  }
  /** Opens the menu. */
  openMenu() {
    this.adapter.addClass(_t.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
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
      const e = this.getValue().length > 0, n = this.adapter.hasClass(_t.FOCUSED), r = e || n, i = this.adapter.hasClass(_t.REQUIRED);
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
    this.adapter.removeClass(_t.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
  }
  /**
   * Handles value changes, via change event or programmatic updates.
   */
  handleChange() {
    this.layout(), this.adapter.notifyChange(this.getValue()), this.adapter.hasClass(_t.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
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
    this.adapter.addClass(_t.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
    if (this.isMenuOpen || !this.adapter.hasClass(_t.FOCUSED))
      return;
    const n = xt(e) === He.ENTER, r = xt(e) === He.SPACEBAR, i = xt(e) === He.ARROW_UP, a = xt(e) === He.ARROW_DOWN;
    if (!(e.ctrlKey || e.metaKey) && (!r && e.key && e.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
      const c = r ? " " : e.key, o = this.adapter.typeaheadMatchItem(c, this.getSelectedIndex());
      o >= 0 && this.setSelectedIndex(o), e.preventDefault();
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
    const n = this.adapter.hasClass(_t.FOCUSED);
    if (e) {
      const r = li.LABEL_SCALE, i = this.adapter.getLabelWidth() * r;
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
    this.useDefaultValidation || (this.customValidity = e), this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()), e ? (this.adapter.removeClass(_t.INVALID), this.adapter.removeMenuClass(_t.MENU_INVALID)) : (this.adapter.addClass(_t.INVALID), this.adapter.addMenuClass(_t.MENU_INVALID)), this.syncHelperTextValidity(e);
  }
  isValid() {
    return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== li.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
  }
  setRequired(e) {
    e ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e);
  }
  getRequired() {
    return this.adapter.getSelectAnchorAttr("aria-required") === "true";
  }
  init() {
    const e = this.adapter.getAnchorElement();
    e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(Ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
  }
  /**
   * Unfocuses the select component.
   */
  blur() {
    this.adapter.removeClass(_t.FOCUSED), this.layout(), this.adapter.deactivateBottomLine(), this.adapter.hasClass(_t.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
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
    }, li.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
  }
}
let __ = 0;
var I_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "id",
  "persistent",
  "validationMsg",
  "children"
]), E_ = /* @__PURE__ */ ge("<div><!></div>");
function S_(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "id", 19, () => "SMUI-select-helper-text-" + __++), a = b(e, "persistent", 3, !1), l = b(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Xe(e, I_), o, u = /* @__PURE__ */ de(void 0), d = oe({}), m = oe({}), f = /* @__PURE__ */ de(void 0);
  const v = ue("SMUI:select:helper-text:id"), h = ue("SMUI:select:helper-text:mount"), g = ue("SMUI:select:helper-text:unmount");
  at(() => (j(
    u,
    new Ko({
      addClass: _,
      removeClass: I,
      hasClass: p,
      getAttr: y,
      setAttr: A,
      removeAttr: C,
      setContent: (k) => {
        j(f, k, !0);
      }
    }),
    !0
  ), v && v(i()), h && h(s(u)), s(u).init(), () => {
    var k;
    g && s(u) && g(s(u)), (k = s(u)) == null || k.destroy(), j(u, void 0);
  }));
  function p(k) {
    return k in d ? d[k] : E().classList.contains(k);
  }
  function _(k) {
    d[k] || (d[k] = !0);
  }
  function I(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function y(k) {
    return k in m ? m[k] ?? null : E().getAttribute(k);
  }
  function A(k, Y) {
    m[k] !== Y && (m[k] = Y);
  }
  function C(k) {
    (!(k in m) || m[k] != null) && (m[k] = void 0);
  }
  function E() {
    return o;
  }
  var x = { getElement: E }, T = E_();
  Fe(
    T,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...m,
      ...c
    }),
    [
      () => De({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": l(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var S = Se(T);
  {
    var L = (k) => {
      var Y = me(), O = re(Y);
      Ee(O, () => e.children ?? ve), R(k, Y);
    }, q = (k) => {
      var Y = Dt();
      Ne(() => ut(Y, s(f))), R(k, Y);
    };
    Ie(S, (k) => {
      s(f) == null ? k(L) : k(q, -1);
    });
  }
  return _e(T, (k) => o = k, () => o), Pe(T, (k, Y) => X == null ? void 0 : X(k, Y), n), R(t, T), xe(x);
}
let A_ = 0;
var y_ = /* @__PURE__ */ new Set([
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
]), T_ = /* @__PURE__ */ ge("<input/>"), C_ = /* @__PURE__ */ ge('<span class="mdc-select__ripple"></span>'), x_ = /* @__PURE__ */ ge('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function w_(t, e) {
  Ce(e, !0);
  const n = () => cr(Le, "$selectedTextStore", r), [r, i] = Hr();
  let a = () => {
  };
  function l(M) {
    return M === a;
  }
  let c = b(e, "use", 19, () => []), o = b(e, "class", 3, ""), u = b(e, "style", 3, ""), d = b(e, "ripple", 3, !0), m = b(e, "disabled", 3, !1), f = b(e, "variant", 3, "standard"), v = b(e, "noLabel", 3, !1), h = b(e, "label", 3, void 0), g = b(e, "value", 15), p = b(e, "key", 3, (M) => M), _ = b(e, "dirty", 15, !1), I = b(e, "invalid", 15, a), y = b(e, "updateInvalid", 19, () => l(I())), A = b(e, "required", 3, !1), C = b(e, "inputId", 19, () => "SMUI-select-" + A_++), E = b(e, "hiddenInput", 3, !1), x = b(e, "withLeadingIcon", 3, a), T = b(e, "anchor$use", 19, () => []), S = b(e, "anchor$class", 3, ""), L = b(e, "selectedTextContainer$use", 19, () => []), q = b(e, "selectedTextContainer$class", 3, ""), k = b(e, "selectedText$use", 19, () => []), Y = b(e, "selectedText$class", 3, ""), O = b(e, "dropdownIcon$use", 19, () => []), w = b(e, "dropdownIcon$class", 3, ""), N = b(e, "menu$class", 3, ""), W = /* @__PURE__ */ Xe(e, y_);
  const B = l(I());
  l(I()) && I(!1);
  let K, H = /* @__PURE__ */ de(void 0), F = oe({}), U = oe({}), ne, ye = oe({}), G = /* @__PURE__ */ de(-1);
  const z = /* @__PURE__ */ ce(() => W.menu$id ?? C() + "-menu");
  let $ = /* @__PURE__ */ de(void 0), ee = ue("SMUI:addLayoutListener"), V, ie = /* @__PURE__ */ de(!1), we = oe({}), J = /* @__PURE__ */ de(void 0), ae = /* @__PURE__ */ de(void 0), Ue = /* @__PURE__ */ de(!1), Oe, Ve = ue("SMUI:select:context"), ke, Re, P, Z, se;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const Le = rn("");
  le("SMUI:select:selectedText", Le);
  const je = rn(g());
  Ae(() => {
    Ci(je, g());
  }), le("SMUI:select:value", je), Ae(() => {
    s(H) && s(H).getValue() !== p()(g()) && s(H).setValue(p()(g()));
  });
  let Et = s(G);
  Ae(() => {
    if (Et !== s(G))
      if (Et = s(G), s(H))
        s(H).setSelectedIndex(
          s(G),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const M = qt();
        g() !== M[s(G)] && g(M[s(G)]);
      }
  }), Ae(() => {
    s(H) && s(H).getDisabled() !== m() && s(H).setDisabled(m());
  }), Ae(() => {
    s(H) && _() && s(H).isValid() !== !I() && (y() ? I(!s(H).isValid()) : s(H).setValid(!I()));
  }), Ae(() => {
    s(H) && s(H).getRequired() !== A() && s(H).setRequired(A());
  }), ee && (V = ee(nt)), le("SMUI:select:leading-icon:mount", (M) => {
    ke = M;
  }), le("SMUI:select:leading-icon:unmount", () => {
    ke = void 0;
  }), le("SMUI:list:mount", (M) => {
    Oe = M;
  }), le("SMUI:select:helper-text:id", (M) => {
    j($, M, !0);
  }), le("SMUI:select:helper-text:mount", (M) => {
    Re = M;
  }), le("SMUI:select:helper-text:unmount", () => {
    j($, void 0), Re = void 0;
  }), at(() => (j(
    H,
    new zo(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (M) => {
          Ci(Le, M);
        },
        isSelectAnchorFocused: () => document.activeElement === ne,
        getSelectAnchorAttr: vt,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: Pt,
        addMenuClass: te,
        removeMenuClass: Be,
        openMenu: () => {
          j(ie, !0);
        },
        closeMenu: () => {
          j(ie, !1);
        },
        getAnchorElement: () => ne,
        setMenuAnchorElement: (M) => {
          j(J, M, !0);
        },
        setMenuAnchorCorner: (M) => {
          j(ae, M, !0);
        },
        setMenuWrapFocus: (M) => {
          j(Ue, M, !0);
        },
        getSelectedIndex: () => s(G),
        setSelectedIndex: (M) => {
          Et = M, j(G, M, !0), g(qt()[s(G)]);
        },
        focusMenuItemAtIndex: (M) => {
          Oe.focusItemAtIndex(M);
        },
        getMenuItemCount: () => Oe.items.length,
        getMenuItemValues: () => qt().map(p()),
        getMenuItemTextAtIndex: (M) => Oe.getPrimaryTextAtIndex(M),
        isTypeaheadInProgress: () => Oe.typeaheadInProgress,
        typeaheadMatchItem: (M, he) => Oe.typeaheadMatchItem(M, he),
        // getCommonAdapterMethods
        addClass: fe,
        removeClass: pe,
        hasClass: Dn,
        setRippleCenter: (M) => Z && Z.setRippleCenter(M),
        activateBottomLine: () => Z && Z.activate(),
        deactivateBottomLine: () => Z && Z.deactivate(),
        notifyChange: (M) => {
          var he;
          _(!0), y() && I(!((he = s(H)) != null && he.isValid())), tt(kr(), "SMUISelectChange", { value: g(), index: s(G) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!se,
        notchOutline: (M) => se && se.notch(M),
        closeOutline: () => se && se.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (M) => P && P.float(M),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (M) => P && P.setRequired(M)
      },
      {
        get helperText() {
          return Re;
        },
        get leadingIcon() {
          return ke;
        }
      }
    ),
    !0
  ), j(G, qt().indexOf(g()), !0), s(H).init(), Kt(B), () => {
    var M;
    (M = s(H)) == null || M.destroy(), j(H, void 0);
  })), Dr(() => {
    V && V();
  });
  function Dn(M) {
    return M in F ? F[M] : kr().classList.contains(M);
  }
  function fe(M) {
    F[M] || (F[M] = !0);
  }
  function pe(M) {
    (!(M in F) || F[M]) && (F[M] = !1);
  }
  function Q(M, he) {
    U[M] != he && (he === "" || he == null ? delete U[M] : U[M] = he);
  }
  function te(M) {
    we[M] || (we[M] = !0);
  }
  function Be(M) {
    (!(M in we) || we[M]) && (we[M] = !1);
  }
  function vt(M) {
    return M in ye ? ye[M] ?? null : kr().getAttribute(M);
  }
  function It(M, he) {
    ye[M] !== he && (ye[M] = he);
  }
  function Pt(M) {
    (!(M in ye) || ye[M] != null) && (ye[M] = void 0);
  }
  function qt() {
    return Oe.getOrderedList().map((M) => M.getValue());
  }
  function Ur(M) {
    const he = M.currentTarget.getBoundingClientRect();
    return (bt(M) ? M.touches[0].clientX : M.clientX) - he.left;
  }
  function bt(M) {
    return "touches" in M;
  }
  function Ht() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function Kt(M) {
    var he;
    (he = s(H)) == null || he.setUseDefaultValidation(M);
  }
  function Qn() {
    ne.focus();
  }
  function nt() {
    var M;
    (M = s(H)) == null || M.layout();
  }
  function kr() {
    return K;
  }
  var Je = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: Kt,
    focus: Qn,
    layout: nt,
    getElement: kr
  }, ft = x_(), ot = re(ft);
  Fe(ot, (M, he, mt) => ({ class: M, style: he, ...mt }), [
    () => De({
      "mdc-select": !0,
      "mdc-select--required": A(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": l(x()) ? e.leadingIcon : x(),
      "mdc-select--no-label": v() || h() == null,
      "mdc-select--invalid": I(),
      "mdc-select--activated": s(ie),
      "mdc-data-table__pagination-rows-per-page-select": Ve === "data-table:pagination",
      "mdc-data-table__pagination-rows-per-page-select--outlined": Ve === "data-table:pagination" && f() === "outlined",
      ...F,
      [o()]: !0
    }),
    () => Object.entries(U).map(([M, he]) => `${M}: ${he};`).concat([u()]).join(" "),
    () => fr(W, [
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
  var zt = Se(ot);
  {
    var Pn = (M) => {
      var he = T_();
      Fe(
        he,
        (mt) => ({
          type: "hidden",
          required: A(),
          disabled: m(),
          value: g(),
          ...mt
        }),
        [() => lt(W, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), R(M, he);
    };
    Ie(zt, (M) => {
      E() && M(Pn);
    });
  }
  var ht = be(zt, 2), Lt = (M) => {
    var he;
    ne.focus(), s(H) && s(H).handleClick(Ur(M)), (he = e.anchor$onclick) == null || he.call(e, M);
  }, kt = (M) => {
    var he;
    s(H) && s(H).handleKeydown(M), (he = e.onkeydown) == null || he.call(e, M);
  }, st = (M) => {
    var he;
    s(H) && s(H).handleBlur(), tt(kr(), "blur", M), (he = e.anchor$onblur) == null || he.call(e, M);
  }, Bt = (M) => {
    var he;
    s(H) && s(H).handleFocus(), tt(kr(), "focus", M), (he = e.anchor$onfocus) == null || he.call(e, M);
  };
  Fe(
    ht,
    (M, he) => ({
      class: M,
      "aria-required": A() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": s(z),
      "aria-expanded": s(ie) ? "true" : "false",
      "aria-describedby": s($),
      "aria-labelledby": C() + "-smui-label",
      role: "combobox",
      tabindex: "0",
      ...ye,
      ...he,
      onclick: Lt,
      onkeydown: kt,
      onblur: st,
      onfocus: Bt
    }),
    [
      () => De({ "mdc-select__anchor": !0, [S()]: !0 }),
      () => lt(W, "anchor$")
    ]
  );
  var mr = Se(ht);
  {
    var En = (M) => {
      var he = C_();
      R(M, he);
    };
    Ie(mr, (M) => {
      f() === "filled" && M(En);
    });
  }
  var Rt = be(mr, 2);
  {
    var Yt = (M) => {
      {
        let he = /* @__PURE__ */ ce(() => C() + "-smui-label"), mt = /* @__PURE__ */ ce(() => n() !== ""), Nt = /* @__PURE__ */ ce(() => lt(W, "label$"));
        _e(
          Ys(M, it(
            {
              get id() {
                return s(he);
              },
              get floatAbove() {
                return s(mt);
              },
              get required() {
                return A();
              }
            },
            () => s(Nt),
            {
              children: (gr, br) => {
                var Ia = me(), Ni = re(Ia);
                {
                  var ai = (Jn) => {
                  }, fl = (Jn) => {
                    var pr = Dt();
                    Ne(() => ut(pr, h())), R(Jn, pr);
                  }, hl = (Jn) => {
                    var pr = me(), sc = re(pr);
                    Ee(sc, h), R(Jn, pr);
                  };
                  Ie(Ni, (Jn) => {
                    h() == null ? Jn(ai) : typeof h() == "string" ? Jn(fl, 1) : Jn(hl, -1);
                  });
                }
                R(gr, Ia);
              },
              $$slots: { default: !0 }
            }
          )),
          (gr) => P = gr,
          () => P
        );
      }
    };
    Ie(Rt, (M) => {
      f() !== "outlined" && !v() && h() != null && M(Yt);
    });
  }
  var Sn = be(Rt, 2);
  {
    var Hn = (M) => {
      {
        let he = /* @__PURE__ */ ce(() => v() || h() == null), mt = /* @__PURE__ */ ce(() => lt(W, "outline$"));
        _e(
          Rf(M, it(
            {
              get noLabel() {
                return s(he);
              }
            },
            () => s(mt),
            {
              children: (Nt, gr) => {
                var br = me(), Ia = re(br);
                {
                  var Ni = (ai) => {
                    {
                      let fl = /* @__PURE__ */ ce(() => C() + "-smui-label"), hl = /* @__PURE__ */ ce(() => n() !== ""), Jn = /* @__PURE__ */ ce(() => lt(W, "label$"));
                      _e(
                        Ys(ai, it(
                          {
                            get id() {
                              return s(fl);
                            },
                            get floatAbove() {
                              return s(hl);
                            },
                            get required() {
                              return A();
                            }
                          },
                          () => s(Jn),
                          {
                            children: (pr, sc) => {
                              var lc = me(), mh = re(lc);
                              {
                                var gh = (Br) => {
                                }, bh = (Br) => {
                                  var Ea = Dt();
                                  Ne(() => ut(Ea, h())), R(Br, Ea);
                                }, ph = (Br) => {
                                  var Ea = me(), _h = re(Ea);
                                  Ee(_h, h), R(Br, Ea);
                                };
                                Ie(mh, (Br) => {
                                  h() == null ? Br(gh) : typeof h() == "string" ? Br(bh, 1) : Br(ph, -1);
                                });
                              }
                              R(pr, lc);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (pr) => P = pr,
                        () => P
                      );
                    }
                  };
                  Ie(Ia, (ai) => {
                    !v() && h() != null && ai(Ni);
                  });
                }
                R(Nt, br);
              },
              $$slots: { default: !0 }
            }
          )),
          (Nt) => se = Nt,
          () => se
        );
      }
    };
    Ie(Sn, (M) => {
      f() === "outlined" && M(Hn);
    });
  }
  var hn = be(Sn, 2);
  Ee(hn, () => e.leadingIcon ?? ve);
  var An = be(hn, 2);
  Fe(An, (M, he) => ({ class: M, ...he }), [
    () => De({
      "mdc-select__selected-text-container": !0,
      [q()]: !0
    }),
    () => lt(W, "selectedTextContainer$")
  ]);
  var on = Se(An);
  Fe(
    on,
    (M, he) => ({
      id: C() + "-smui-selected-text",
      class: M,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": C() + "-smui-label",
      ...he
    }),
    [
      () => De({
        "mdc-select__selected-text": !0,
        [Y()]: !0
      }),
      () => lt(W, "selectedText$")
    ]
  );
  var ii = zn(on, !0);
  Pe(on, (M, he) => X == null ? void 0 : X(M, he), k), Pe(An, (M, he) => X == null ? void 0 : X(M, he), L);
  var _a = be(An, 2);
  Fe(_a, (M, he) => ({ class: M, ...he }), [
    () => De({
      "mdc-select__dropdown-icon": !0,
      [w()]: !0
    }),
    () => lt(W, "dropdownIcon$")
  ]), Pe(_a, (M, he) => X == null ? void 0 : X(M, he), O);
  var ch = be(_a, 2);
  {
    var uh = (M) => {
      {
        let he = /* @__PURE__ */ ce(() => lt(W, "ripple$"));
        _e(Lf(M, it(() => s(he))), (mt) => Z = mt, () => Z);
      }
    };
    Ie(ch, (M) => {
      f() !== "outlined" && d() && M(uh);
    });
  }
  _e(ht, (M) => ne = M, () => ne), Pe(ht, (M, he) => X == null ? void 0 : X(M, he), T);
  var dh = be(ht, 2);
  {
    let M = /* @__PURE__ */ ce(() => De({
      "mdc-select__menu": !0,
      ...we,
      [N()]: !0
    })), he = /* @__PURE__ */ ce(() => lt(W, "menu$"));
    d_(dh, it(
      {
        get class() {
          return s(M);
        },
        get id() {
          return s(z);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(J);
        },
        get anchorCorner() {
          return s(ae);
        }
      },
      () => s(he),
      {
        onSMUIMenuSelected: (mt) => {
          var Nt;
          s(H) && s(H).handleMenuItemAction(mt.detail.index), (Nt = e.onSMUIMenuSelected) == null || Nt.call(e, mt);
        },
        onSMUIMenuSurfaceClosing: (mt) => {
          var Nt;
          s(H) && s(H).handleMenuClosing(), (Nt = e.onSMUIMenuSurfaceClosing) == null || Nt.call(e, mt);
        },
        onSMUIMenuSurfaceClosed: (mt) => {
          var Nt;
          s(H) && s(H).handleMenuClosed(), (Nt = e.onSMUIMenuSurfaceClosed) == null || Nt.call(e, mt);
        },
        onSMUIMenuSurfaceOpened: (mt) => {
          var Nt;
          s(H) && s(H).handleMenuOpened(), (Nt = e.onSMUIMenuSurfaceOpened) == null || Nt.call(e, mt);
        },
        get open() {
          return s(ie);
        },
        set open(mt) {
          j(ie, mt, !0);
        },
        children: (mt, Nt) => {
          {
            let gr = /* @__PURE__ */ ce(() => lt(W, "list$"));
            h_(mt, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Ue);
                }
              },
              () => s(gr),
              {
                get selectedIndex() {
                  return s(G);
                },
                set selectedIndex(br) {
                  j(G, br, !0);
                },
                children: (br, Ia) => {
                  var Ni = me(), ai = re(Ni);
                  Ee(ai, () => e.children ?? ve), R(br, Ni);
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
  _e(ot, (M) => K = M, () => K), Pe(ot, (M, he) => Zt == null ? void 0 : Zt(M, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: fe,
    removeClass: pe,
    addStyle: Q
  })), Pe(ot, (M, he) => Rl == null ? void 0 : Rl(M, he), () => ({ addClass: fe, removeClass: pe })), Pe(ot, (M, he) => X == null ? void 0 : X(M, he), c);
  var fh = be(ot, 2);
  {
    var hh = (M) => {
      {
        let he = /* @__PURE__ */ ce(() => lt(W, "helperText$"));
        S_(M, it(() => s(he), {
          children: (mt, Nt) => {
            var gr = me(), br = re(gr);
            Ee(br, () => e.helperText ?? ve), R(mt, gr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    Ie(fh, (M) => {
      e.helperText && M(hh);
    });
  }
  Ne(() => ut(ii, n())), R(t, ft);
  var vh = xe(Je);
  return i(), vh;
}
var O_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "value",
  "children"
]);
function L_(t, e) {
  Ce(e, !0);
  const n = () => cr(d, "$selectedValue", r), [r, i] = Hr();
  let a = b(e, "use", 19, () => []);
  b(e, "class", 3, "");
  let l = b(e, "value", 3, ""), c = /* @__PURE__ */ Xe(e, O_), o;
  const u = ue("SMUI:select:selectedText"), d = ue("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ ce(() => l() != null && l() !== "" && n() === l());
  at(f), Dr(f);
  function f() {
    s(m) && o && Ci(u, o.getPrimaryText());
  }
  function v() {
    return o.getElement();
  }
  var h = { getElement: v };
  _e(
    p_(t, it(
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
          return s(m);
        }
      },
      () => c,
      {
        children: (p, _) => {
          var I = me(), y = re(I);
          Ee(y, () => e.children ?? ve), R(p, I);
        },
        $$slots: { default: !0 }
      }
    )),
    (p) => o = p,
    () => o
  );
  var g = xe(h);
  return i(), g;
}
function R_(t, e) {
  Ce(e, !0);
  let n = b(e, "data", 19, () => []);
  b(e, "placeholder", 3, "");
  let r = b(e, "label", 3, "");
  b(e, "description", 3, "");
  let i = b(e, "value", 15), a = b(e, "required", 3, !1);
  b(e, "size", 3, "sm");
  let l = b(e, "variant", 3, "standard"), c = b(e, "selectedOptionIndex", 31, () => -1), o = b(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
  }
  w_(t, {
    get disabled() {
      return o();
    },
    key: (d) => `${d ?? ""}`,
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
    set value(d) {
      i(d);
    },
    children: (d, m) => {
      var f = me(), v = re(f);
      Gn(v, 17, n, Fi, (h, g, p) => {
        {
          let _ = /* @__PURE__ */ ce(() => u(p));
          L_(h, {
            get onclick() {
              return s(_);
            },
            get value() {
              return s(g).value;
            },
            children: (I, y) => {
              var A = Dt();
              Ne(() => ut(A, s(g).label)), R(I, A);
            },
            $$slots: { default: !0 }
          });
        }
      }), R(d, f);
    },
    $$slots: { default: !0 }
  }), xe();
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
var nu;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(nu || (nu = {}));
const N_ = rn([]);
N_.subscribe;
oe({ freeze: !1 });
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
var ru;
(function(t) {
  t.PRIMARY_ACTION = "mdc-evolution-chip__action--primary", t.TRAILING_ACTION = "mdc-evolution-chip__action--trailing", t.CHIP_ROOT = "mdc-evolution-chip";
})(ru || (ru = {}));
var da;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(da || (da = {}));
var iu;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.PRIMARY = 1] = "PRIMARY", t[t.TRAILING = 2] = "TRAILING";
})(iu || (iu = {}));
var au;
(function(t) {
  t.INTERACTION = "MDCChipAction:interaction", t.NAVIGATION = "MDCChipAction:navigation";
})(au || (au = {}));
var su;
(function(t) {
  t[t.FOCUSABLE = 0] = "FOCUSABLE", t[t.FOCUSABLE_AND_FOCUSED = 1] = "FOCUSABLE_AND_FOCUSED", t[t.NOT_FOCUSABLE = 2] = "NOT_FOCUSABLE";
})(su || (su = {}));
var lu;
(function(t) {
  t.ARIA_DISABLED = "aria-disabled", t.ARIA_HIDDEN = "aria-hidden", t.ARIA_SELECTED = "aria-selected", t.DATA_DELETABLE = "data-mdc-deletable", t.DISABLED = "disabled", t.ROLE = "role", t.TAB_INDEX = "tabindex";
})(lu || (lu = {}));
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
const ul = /* @__PURE__ */ new Map();
ul.set(He.SPACEBAR, da.SPACEBAR_KEY);
ul.set(He.ENTER, da.ENTER_KEY);
ul.set(He.DELETE, da.DELETE_KEY);
ul.set(He.BACKSPACE, da.BACKSPACE_KEY);
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
Ca`aria-`, Ca`data-`, Ca`disabled`, Ca`role`, Ca`tabindex`;
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
var ou;
(function(t) {
  t.SELECTING = "mdc-evolution-chip--selecting", t.DESELECTING = "mdc-evolution-chip--deselecting", t.SELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--selecting-with-primary-icon", t.DESELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--deselecting-with-primary-icon", t.DISABLED = "mdc-evolution-chip--disabled", t.ENTER = "mdc-evolution-chip--enter", t.EXIT = "mdc-evolution-chip--exit", t.SELECTED = "mdc-evolution-chip--selected", t.HIDDEN = "mdc-evolution-chip--hidden", t.WITH_PRIMARY_ICON = "mdc-evolution-chip--with-primary-icon";
})(ou || (ou = {}));
var cu;
(function(t) {
  t.INTERACTION = "MDCChip:interaction", t.NAVIGATION = "MDCChip:navigation", t.ANIMATION = "MDCChip:animation";
})(cu || (cu = {}));
var uu;
(function(t) {
  t.DATA_REMOVED_ANNOUNCEMENT = "data-mdc-removed-announcement", t.DATA_ADDED_ANNOUNCEMENT = "data-mdc-added-announcement";
})(uu || (uu = {}));
var du;
(function(t) {
  t.ENTER = "mdc-evolution-chip-enter", t.EXIT = "mdc-evolution-chip-exit";
})(du || (du = {}));
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
var fu;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.LEFT = 1] = "LEFT", t[t.RIGHT = 2] = "RIGHT";
})(fu || (fu = {}));
var hu;
(function(t) {
  t.SELECTION = "selection", t.EXIT = "exit";
})(hu || (hu = {}));
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
var vu;
(function(t) {
  t.ARIA_MULTISELECTABLE = "aria-multiselectable";
})(vu || (vu = {}));
var mu;
(function(t) {
  t.CHIP = "mdc-evolution-chip";
})(mu || (mu = {}));
var gu;
(function(t) {
  t.INTERACTION = "MDCChipSet:interaction", t.REMOVAL = "MDCChipSet:removal", t.SELECTION = "MDCChipSet:selection";
})(gu || (gu = {}));
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
var bu;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(bu || (bu = {}));
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
var pu;
(function(t) {
  t[t.INCREMENT = 0] = "INCREMENT", t[t.DECREMENT = 1] = "DECREMENT";
})(pu || (pu = {}));
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
var _u;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(_u || (_u = {}));
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
var Iu;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(Iu || (Iu = {}));
var Eu;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(Eu || (Eu = {}));
const Jt = {
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
}, hr = /* @__PURE__ */ new Set();
hr.add(Jt.ARROW_LEFT_KEY);
hr.add(Jt.ARROW_RIGHT_KEY);
hr.add(Jt.ARROW_DOWN_KEY);
hr.add(Jt.ARROW_UP_KEY);
hr.add(Jt.END_KEY);
hr.add(Jt.HOME_KEY);
hr.add(Jt.IE_ARROW_LEFT_KEY);
hr.add(Jt.IE_ARROW_RIGHT_KEY);
hr.add(Jt.IE_ARROW_DOWN_KEY);
hr.add(Jt.IE_ARROW_UP_KEY);
const ba = /* @__PURE__ */ new Set();
ba.add(Jt.ARROW_UP_KEY);
ba.add(Jt.ARROW_DOWN_KEY);
ba.add(Jt.HOME_KEY);
ba.add(Jt.END_KEY);
ba.add(Jt.IE_ARROW_UP_KEY);
ba.add(Jt.IE_ARROW_DOWN_KEY);
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
var Su;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Su || (Su = {}));
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function M_(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let Nl;
const D_ = new Uint8Array(16);
function P_() {
  if (!Nl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Nl = crypto.getRandomValues.bind(crypto);
  }
  return Nl(D_);
}
const H_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Au = { randomUUID: H_ };
function U_(t, e, n) {
  var i;
  if (Au.randomUUID && !e && !t)
    return Au.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? P_();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return M_(r);
}
var k_ = /* @__PURE__ */ ge('<span class="oscd-icon"><!></span>');
function Zn(t, e) {
  var n = k_(), r = Se(n);
  Ee(r, () => e.children ?? ve), R(t, n);
}
var B_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function F_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = B_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var V_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Df(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = V_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var G_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function j_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = G_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var W_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function q_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = W_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var K_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function z_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = K_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var Y_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function X_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = Y_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var Z_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Q_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = Z_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var J_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function $_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = J_();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
Kh();
var eI = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function tI(t, e) {
  let n = b(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = eI();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var nI = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function rI(t, e) {
  let n = b(e, "svgStyles", 8, "");
  Zn(t, {
    children: (r, i) => {
      var a = nI();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var iI = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function aI(t, e) {
  let n = b(e, "svgStyles", 8, "");
  Zn(t, {
    children: (r, i) => {
      var a = iI();
      Ne(() => Ut(a, n())), R(r, a);
    }
  });
}
var sI = /* @__PURE__ */ ge('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function lI(t, e) {
  Ce(e, !0);
  let n = b(e, "label", 3, ""), r = b(e, "value", 15, "");
  function i(u) {
    r(u.target.value);
  }
  var a = sI(), l = Se(a), c = be(l, 2), o = zn(c, !0);
  Ne(() => ut(o, n())), Rn("change", l, i), Xa(l, r), R(t, a), xe();
}
dn(["change"]);
var oI = /* @__PURE__ */ ge('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function cI(t, e) {
  Ce(e, !0);
  let n = b(e, "label", 3, ""), r = b(e, "value", 15, "");
  function i(u) {
    r(u.target.value);
  }
  var a = oI(), l = Se(a), c = be(l, 2), o = zn(c, !0);
  Ne(() => ut(o, n())), Rn("change", l, i), Xa(l, r), R(t, a), xe();
}
dn(["change"]);
var uI = /* @__PURE__ */ ge('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Xs(t, e) {
  Ce(e, !0);
  let n = b(e, "content", 3, ""), r = b(e, "side", 3, "top"), i = b(e, "hoverDelay", 3, 0), a = b(e, "transitionDuration", 3, 80), l = b(e, "disabled", 3, !1), c = b(e, "offset", 3, 8), o = b(e, "backgroundColor", 3, "#000"), u = b(e, "paddingY", 3, 6), d = b(e, "paddingX", 3, 10), m = b(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let v = /* @__PURE__ */ de(null), h = /* @__PURE__ */ de(null), g = /* @__PURE__ */ de(null), p = /* @__PURE__ */ de(null), _ = /* @__PURE__ */ de(!1), I = /* @__PURE__ */ de(null), y = /* @__PURE__ */ de(null);
  function A(N) {
    var ne;
    if (!N || !N.trim().startsWith("var(")) return N;
    const W = N.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!W) return N;
    const B = W[1], K = (ne = W[2]) == null ? void 0 : ne.trim(), H = s(v) ? getComputedStyle(s(v)).getPropertyValue(B) : "", F = getComputedStyle(document.documentElement).getPropertyValue(B), U = (H || F).trim();
    return U || K || N;
  }
  function C() {
    !n() || l() || (s(I) && clearTimeout(s(I)), i() > 0 ? j(I, setTimeout(() => j(_, !0), i()), !0) : j(_, !0));
  }
  function E() {
    s(I) && clearTimeout(s(I)), j(_, !1);
  }
  function x() {
    C();
  }
  function T() {
    E();
  }
  function S() {
    C();
  }
  function L() {
    E();
  }
  function q(N) {
    n() && ((N.key === "Enter" || N.key === " ") && (N.preventDefault(), C()), N.key === "Escape" && (N.preventDefault(), E()));
  }
  function k() {
    if (!s(h) || !s(p) || !s(v) || l()) return;
    const N = s(v).getBoundingClientRect(), W = s(p).getBoundingClientRect();
    let B = 0, K = 0;
    const H = c();
    switch (r()) {
      case "top":
        B = N.top - W.height - H, K = N.left + N.width / 2 - W.width / 2;
        break;
      case "bottom":
        B = N.bottom + H, K = N.left + N.width / 2 - W.width / 2;
        break;
      case "left":
        B = N.top + N.height / 2 - W.height / 2, K = N.left - W.width - H;
        break;
      case "right":
        B = N.top + N.height / 2 - W.height / 2, K = N.right + H;
        break;
    }
    s(h).style.top = `${B + window.scrollY}px`, s(h).style.left = `${K + window.scrollX}px`;
  }
  function Y() {
    var N;
    (N = s(y)) == null || N.disconnect(), j(y, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), j(h, null), j(p, null), j(g, null), s(I) && clearTimeout(s(I));
  }
  Dr(Y), Ae(() => {
    if (!(!s(_) || !n() || l())) {
      if (!s(h)) {
        j(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), j(g, s(h).attachShadow({ mode: "open" }), !0);
        const N = document.createElement("style"), W = A(o()), B = A(m());
        N.textContent = `
        .bubble {
          --pad-y: ${u()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${W};
          --fg: ${B};
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
      `, s(g).appendChild(N), j(p, document.createElement("div"), !0), s(g).appendChild(s(p)), j(
          y,
          new MutationObserver(() => {
            s(_) && k();
          }),
          !0
        ), s(y).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(p) && (s(p).className = `bubble ${r()}`, s(p).innerHTML = n()), s(h) && (s(h).style.opacity = "1", k());
    }
  }), Ae(() => {
    if (s(_) || !s(h))
      return;
    s(h).style.opacity = "0";
    const N = s(h), W = setTimeout(
      () => {
        N && N.parentNode && N.parentNode.removeChild(N), s(h) === N && Y();
      },
      a()
    );
    return () => clearTimeout(W);
  });
  var O = uI(), w = Se(O);
  Ee(w, () => e.children ?? ve), _e(O, (N) => j(v, N), () => s(v)), Ne(() => {
    Lr(O, "aria-describedby", n() && !l() ? f : void 0), Lr(O, "aria-haspopup", n() ? "true" : void 0), Lr(O, "aria-expanded", n() ? s(_) ? "true" : "false" : void 0);
  }), Ua("mouseenter", O, x), Ua("mouseleave", O, T), Ua("focus", O, S), Ua("blur", O, L), Rn("keydown", O, q), R(t, O), xe();
}
dn(["keydown"]);
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
const Er = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ci = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
};
var mn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(mn || (mn = {}));
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
const Oa = {
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
}, Gr = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, yu = {
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
class Zs extends Ot {
  static get cssClasses() {
    return Oa;
  }
  static get strings() {
    return Gr;
  }
  static get numbers() {
    return yu;
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
    super(Object.assign(Object.assign({}, Zs.defaultAdapter), e)), this.currentCheckState = Gr.TRANSITION_STATE_INIT, this.currentAnimationClass = "", this.animEndLatchTimer = 0, this.enableAnimationEndHandler = !1;
  }
  init() {
    this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(Oa.UPGRADED);
  }
  destroy() {
    clearTimeout(this.animEndLatchTimer);
  }
  setDisabled(e) {
    this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(Oa.DISABLED) : this.adapter.removeClass(Oa.DISABLED);
  }
  /**
   * Handles the animationend event for the checkbox
   */
  handleAnimationEnd() {
    this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(() => {
      this.adapter.removeClass(this.currentAnimationClass), this.enableAnimationEndHandler = !1;
    }, yu.ANIM_END_LATCH_MS));
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
    const { TRANSITION_STATE_UNCHECKED: r } = Gr, { SELECTED: i } = Oa;
    n === r ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(e, n), this.currentCheckState = n, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
  }
  determineCheckState() {
    const { TRANSITION_STATE_INDETERMINATE: e, TRANSITION_STATE_CHECKED: n, TRANSITION_STATE_UNCHECKED: r } = Gr;
    return this.adapter.isIndeterminate() ? e : this.adapter.isChecked() ? n : r;
  }
  getTransitionAnimationClass(e, n) {
    const { TRANSITION_STATE_INIT: r, TRANSITION_STATE_CHECKED: i, TRANSITION_STATE_UNCHECKED: a } = Gr, { ANIM_UNCHECKED_CHECKED: l, ANIM_UNCHECKED_INDETERMINATE: c, ANIM_CHECKED_UNCHECKED: o, ANIM_CHECKED_INDETERMINATE: u, ANIM_INDETERMINATE_CHECKED: d, ANIM_INDETERMINATE_UNCHECKED: m } = Zs.cssClasses;
    switch (e) {
      case r:
        return n === a ? "" : n === i ? d : m;
      case a:
        return n === i ? l : c;
      case i:
        return n === a ? o : u;
      default:
        return n === i ? d : m;
    }
  }
  updateAriaChecked() {
    this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(Gr.ARIA_CHECKED_ATTR, Gr.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(Gr.ARIA_CHECKED_ATTR);
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
const vn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Un = {
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
class Yo extends Ot {
  static get cssClasses() {
    return vn;
  }
  static get strings() {
    return Un;
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
    super(Object.assign(Object.assign({}, Yo.defaultAdapter), e)), this.observer = null;
  }
  init() {
    this.determinate = !this.adapter.hasClass(vn.INDETERMINATE_CLASS), this.adapter.addClass(vn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver((e) => {
      if (!this.determinate)
        for (const n of e)
          n.contentRect && this.calculateAndSetDimensions(n.contentRect.width);
    }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
  }
  setDeterminate(e) {
    if (this.determinate = e, this.determinate) {
      this.adapter.removeClass(vn.INDETERMINATE_CLASS), this.adapter.setAttribute(Un.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Un.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Un.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
      return;
    }
    this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(vn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Un.ARIA_VALUENOW), this.adapter.removeAttribute(Un.ARIA_VALUEMAX), this.adapter.removeAttribute(Un.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
  }
  isDeterminate() {
    return this.determinate;
  }
  setProgress(e) {
    this.progress = e, this.determinate && (this.setPrimaryBarProgress(e), this.adapter.setAttribute(Un.ARIA_VALUENOW, e.toString()));
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
    this.adapter.removeClass(vn.CLOSED_CLASS), this.adapter.removeClass(vn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Un.ARIA_HIDDEN);
  }
  close() {
    this.adapter.addClass(vn.CLOSED_CLASS), this.adapter.setAttribute(Un.ARIA_HIDDEN, "true");
  }
  isClosed() {
    return this.adapter.hasClass(vn.CLOSED_CLASS);
  }
  /**
   * Handles the transitionend event emitted after `close()` is called and the
   * opacity fades out. This is so that animations are removed only after the
   * progress indicator is completely hidden.
   */
  handleTransitionEnd() {
    this.adapter.hasClass(vn.CLOSED_CLASS) && this.adapter.addClass(vn.CLOSED_ANIMATION_OFF_CLASS);
  }
  destroy() {
    super.destroy(), this.observer && this.observer.disconnect();
  }
  restartAnimation() {
    this.adapter.removeClass(vn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(vn.ANIMATION_READY_CLASS);
  }
  setPrimaryBarProgress(e) {
    const n = `scaleX(${e})`, r = typeof window < "u" ? Zp(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(r, n);
  }
  setBufferBarProgress(e) {
    const n = `${e * 100}%`;
    this.adapter.setBufferBarStyle(Un.FLEX_BASIS, n);
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
class Xo extends Ot {
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
    super(Object.assign(Object.assign({}, Xo.defaultAdapter), e));
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
    for (let c = 0; c < this.adapter.getHeaderCellCount(); c++)
      c !== r && (this.adapter.removeClassNameByHeaderCellIndex(c, Er.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(c, Er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(c, ci.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(c, mn.NONE));
    this.adapter.setClassNameByHeaderCellIndex(r, Er.HEADER_CELL_SORTED);
    const a = this.adapter.getAttributeByHeaderCellIndex(r, ci.ARIA_SORT);
    let l = mn.NONE;
    a === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, Er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, ci.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : a === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, Er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, ci.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, ci.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, l), this.adapter.notifySortAction({
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
    }), this.adapter.addClass(Er.IN_PROGRESS);
  }
  /**
   * Hides progress indicator when data table is finished loading.
   */
  hideProgress() {
    this.adapter.removeClass(Er.IN_PROGRESS);
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
    n ? (this.adapter.addClassAtRowIndex(e, Er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, ci.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(e, Er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, ci.ARIA_SELECTED, "false"));
  }
}
var dI = /* @__PURE__ */ new Set([
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
]), fI = /* @__PURE__ */ ge('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), hI = /* @__PURE__ */ ge("<div><div><table><!></table></div> <!> <!></div>");
function vI(t, e) {
  Ce(e, !0);
  const n = () => cr(Y, "$progressClosed", r), [r, i] = Hr(), { closest: a } = ds;
  let l = b(e, "use", 19, () => []), c = b(e, "class", 3, ""), o = b(e, "stickyHeader", 3, !1), u = b(e, "sortable", 3, !1), d = b(e, "sort", 15, null), m = b(e, "sortDirection", 15, "ascending"), f = b(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = b(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = b(e, "container$use", 19, () => []), g = b(e, "container$class", 3, ""), p = b(e, "table$use", 19, () => []), _ = b(e, "table$class", 3, ""), I = /* @__PURE__ */ Xe(e, dI), y, A = /* @__PURE__ */ de(void 0), C, E = /* @__PURE__ */ de(void 0), x = /* @__PURE__ */ de(void 0), T = oe({}), S = /* @__PURE__ */ de(oe({ height: "auto", top: "initial" })), L = ue("SMUI:addLayoutListener"), q, k = !1, Y = rn(!1), O = rn(d());
  Ae(() => {
    Ci(O, d());
  });
  let w = rn(m());
  Ae(() => {
    Ci(w, m());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", Y), le("SMUI:data-table:sortable", u()), le("SMUI:data-table:sort", O), le("SMUI:data-table:sortDirection", w), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", v()), L && (q = L(ye));
  let N;
  Ae(() => {
    e.progress && s(A) && N !== n() && (N = n(), n() ? s(A).hideProgress() : s(A).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    s(A) && k && s(A).layout();
  }), le("SMUI:data-table:header:mount", (P) => {
    j(E, P, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    j(E, void 0);
  }), le("SMUI:data-table:body:mount", (P) => {
    j(x, P, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    j(x, void 0);
  }), at(() => (j(
    A,
    new Xo({
      addClass: B,
      removeClass: K,
      getHeaderCellElements: () => {
        var P;
        return ((P = s(E)) == null ? void 0 : P.cells.map((Z) => Z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = s(E)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, Z) => {
        var se;
        return ((se = s(E)) == null ? void 0 : se.orderedCells[P].getAttr(Z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, Z, se) => {
        var Le;
        (Le = s(E)) == null || Le.orderedCells[P].addAttr(Z, se);
      },
      setClassNameByHeaderCellIndex: (P, Z) => {
        var se;
        (se = s(E)) == null || se.orderedCells[P].addClass(Z);
      },
      removeClassNameByHeaderCellIndex: (P, Z) => {
        var se;
        (se = s(E)) == null || se.orderedCells[P].removeClass(Z);
      },
      notifySortAction: (P) => {
        d(P.columnId), m(P.sortValue), tt(G(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => C.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = G().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        j(S, P, !0);
      },
      addClassAtRowIndex: (P, Z) => {
        var se;
        (se = s(x)) == null || se.orderedRows[P].addClass(Z);
      },
      getRowCount: () => {
        var P;
        return ((P = s(x)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = s(x)) == null ? void 0 : P.rows.map((Z) => Z.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var Z;
        return ((Z = s(x)) == null ? void 0 : Z.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var Z;
        return ((Z = s(x)) == null ? void 0 : Z.orderedRows.map((se) => se.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = s(x)) == null ? void 0 : P.rows.filter((Z) => Z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var se;
        const Z = (se = s(x)) == null ? void 0 : se.orderedRows[P].checkbox;
        return Z ? Z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Z;
        const P = (Z = s(E)) == null ? void 0 : Z.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!G().querySelector(".mdc-data-table__row-checkbox") || !!G().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var se;
        const Z = (se = s(x)) == null ? void 0 : se.orderedRows[P.rowIndex];
        Z && tt(G(), "SMUIDataTableSelectionChanged", {
          row: Z.element,
          rowId: Z.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), tt(G(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), tt(G(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => tt(G(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, Z) => {
        var se;
        (se = s(x)) == null || se.orderedRows[P].removeClass(Z);
      },
      setAttributeAtRowIndex: (P, Z, se) => {
        var Le;
        (Le = s(x)) == null || Le.orderedRows[P].addAttr(Z, se);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var se;
        const Z = (se = s(E)) == null ? void 0 : se.checkbox;
        Z && (Z.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (P, Z) => {
        var Le;
        const se = (Le = s(x)) == null ? void 0 : Le.orderedRows[P].checkbox;
        se && (se.checked = Z);
      },
      setSortStatusLabelByHeaderCellIndex: (P, Z) => {
      }
    }),
    !0
  ), s(A).init(), s(A).layout(), k = !0, () => {
    var P;
    (P = s(A)) == null || P.destroy(), j(A, void 0);
  })), Dr(() => {
    q && q();
  });
  function W(P) {
    s(A) && s(A).handleRowCheckboxChange(P);
  }
  function B(P) {
    T[P] || (T[P] = !0);
  }
  function K(P) {
    (!(P in T) || T[P]) && (T[P] = !1);
  }
  function H(P) {
    var se;
    const Z = (se = s(E)) == null ? void 0 : se.checkbox;
    Z && (Z.indeterminate = P);
  }
  function F(P) {
    if (!s(A) || !P.detail.target)
      return;
    const Z = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    Z && ne(Z);
  }
  function U(P) {
    if (!s(A) || !P.detail.target)
      return;
    const Z = a(P.detail.target, ".mdc-data-table__row");
    Z && s(A) && s(A).handleRowClick({ rowId: P.detail.rowId, row: Z });
  }
  function ne(P) {
    var je, Et;
    const Z = ((je = s(E)) == null ? void 0 : je.orderedCells) ?? [], se = Z.map((Dn) => Dn.element).indexOf(P);
    if (se === -1)
      return;
    const Le = Z[se].columnId ?? null;
    (Et = s(A)) == null || Et.handleSortAction({ columnId: Le, columnIndex: se, headerCell: P });
  }
  function ye() {
    var P;
    return (P = s(A)) == null ? void 0 : P.layout();
  }
  function G() {
    return y;
  }
  var z = { layout: ye, getElement: G }, $ = hI(), ee = (P) => {
    var Z;
    s(A) && s(A).handleHeaderRowCheckboxChange(), (Z = e.onSMUIDataTableHeaderCheckboxChange) == null || Z.call(e, P);
  }, V = (P) => {
    var Z;
    F(P), (Z = e.onSMUIDataTableHeaderClick) == null || Z.call(e, P);
  }, ie = (P) => {
    var Z;
    U(P), (Z = e.onSMUIDataTableRowClick) == null || Z.call(e, P);
  }, we = (P) => {
    var Z;
    W(P), (Z = e.onSMUIDataTableBodyCheckboxChange) == null || Z.call(e, P);
  };
  Fe(
    $,
    (P, Z) => ({
      class: P,
      ...Z,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: V,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => De({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": o(),
        ...T,
        [c()]: !0
      }),
      () => fr(I, ["container$", "table$"])
    ]
  );
  var J = Se($);
  Fe(J, (P, Z) => ({ class: P, ...Z }), [
    () => De({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => lt(I, "container$")
  ]);
  var ae = Se(J);
  Fe(ae, (P, Z) => ({ class: P, ...Z }), [
    () => De({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => lt(I, "table$")
  ]);
  var Ue = Se(ae);
  Ee(Ue, () => e.children ?? ve), Pe(ae, (P, Z) => X == null ? void 0 : X(P, Z), p), _e(J, (P) => C = P, () => C), Pe(J, (P, Z) => X == null ? void 0 : X(P, Z), h);
  var Oe = be(J, 2);
  {
    var Ve = (P) => {
      var Z = fI(), se = be(Se(Z), 2);
      Ee(se, () => e.progress ?? ve), Ne((Le) => Ut(Z, Le), [
        () => Object.entries(s(S)).map(([Le, je]) => `${Le}: ${je};`).join(" ")
      ]), R(P, Z);
    };
    Ie(Oe, (P) => {
      e.progress && P(Ve);
    });
  }
  var ke = be(Oe, 2);
  Ee(ke, () => e.paginate ?? ve), _e($, (P) => y = P, () => y), Pe($, (P, Z) => X == null ? void 0 : X(P, Z), l), R(t, $);
  var Re = xe(z);
  return i(), Re;
}
var mI = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), gI = /* @__PURE__ */ ge("<thead><!></thead>");
function bI(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, mI), i, a = /* @__PURE__ */ de(void 0), l = [];
  const c = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const o = ue("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (_) => {
    j(a, _, !0), o && o(_);
  });
  const u = ue("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (_) => {
    j(a, void 0), u && u(_);
  }), le("SMUI:data-table:cell:mount", (_) => {
    l.push(_), c.set(_.element, _);
  }), le("SMUI:data-table:cell:unmount", (_) => {
    const I = l.findIndex((y) => y === _);
    I !== -1 && l.splice(I, 1), c.delete(_.element);
  });
  const d = ue("SMUI:data-table:header:mount"), m = ue("SMUI:data-table:header:unmount");
  at(() => {
    const _ = {
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
    return d && d(_), () => {
      m && m(_);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => c.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var h = { getElement: v }, g = gI();
  Fe(g, () => ({ ...r }));
  var p = Se(g);
  return Ee(p, () => e.children ?? ve), _e(g, (_) => i = _, () => i), Pe(g, (_, I) => X == null ? void 0 : X(_, I), n), R(t, g), xe(h);
}
var pI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "children"
]), _I = /* @__PURE__ */ ge("<tbody><!></tbody>");
function II(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = /* @__PURE__ */ Xe(e, pI), a, l = [];
  const c = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (g) => {
    l.push(g), c.set(g.element, g);
  }), le("SMUI:data-table:row:unmount", (g) => {
    const p = l.findIndex((_) => _ === g);
    p !== -1 && l.splice(p, 1), c.delete(g.element);
  });
  const o = ue("SMUI:data-table:body:mount"), u = ue("SMUI:data-table:body:unmount");
  at(() => {
    const g = {
      get rows() {
        return l;
      },
      get orderedRows() {
        return d();
      }
    };
    return o && o(g), () => {
      u && u(g);
    };
  });
  function d() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((g) => c.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function m() {
    return a;
  }
  var f = { getElement: m }, v = _I();
  Fe(v, (g) => ({ class: g, ...i }), [
    () => De({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = Se(v);
  return Ee(h, () => e.children ?? ve), _e(v, (g) => a = g, () => a), Pe(v, (g, p) => X == null ? void 0 : X(g, p), n), R(t, v), xe(f);
}
let EI = 0;
var SI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "rowId",
  "children"
]), AI = /* @__PURE__ */ ge("<tr><!></tr>");
function ys(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "rowId", 19, () => "SMUI-data-table-row-" + EI++), a = /* @__PURE__ */ Xe(e, SI), l, c = /* @__PURE__ */ de(void 0), o = oe({}), u = oe({}), d = ue("SMUI:data-table:row:header");
  const m = ue("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (L) => {
    j(c, L, !0), m && m(L);
  });
  const f = ue("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (L) => {
    j(c, void 0), f && f(L);
  });
  const v = ue("SMUI:data-table:row:mount"), h = ue("SMUI:data-table:row:unmount");
  at(() => {
    const L = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return C();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: p,
      getAttr: _,
      addAttr: I
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return C();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: p,
      getAttr: _,
      addAttr: I
    };
    return v && v(L), () => {
      h && h(L);
    };
  });
  function g(L) {
    o[L] || (o[L] = !0);
  }
  function p(L) {
    (!(L in o) || o[L]) && (o[L] = !1);
  }
  function _(L) {
    return L in u ? u[L] ?? null : C().getAttribute(L);
  }
  function I(L, q) {
    u[L] !== q && (u[L] = q);
  }
  function y(L) {
    tt(C(), "SMUIDataTableHeaderClick", L);
  }
  function A(L) {
    tt(C(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function C() {
    return l;
  }
  var E = { getElement: C }, x = AI(), T = (L) => {
    var q;
    d ? y(L) : A(L), (q = e.onclick) == null || q.call(e, L);
  };
  Fe(
    x,
    (L) => ({
      class: L,
      "aria-selected": s(c) ? s(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: T
    }),
    [
      () => De({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(c) && s(c).checked,
        ...o,
        [r()]: !0
      })
    ]
  );
  var S = Se(x);
  return Ee(S, () => e.children ?? ve), _e(x, (L) => l = L, () => l), Pe(x, (L, q) => X == null ? void 0 : X(L, q), n), R(t, x), xe(E);
}
let yI = 0;
var TI = /* @__PURE__ */ new Set([
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
]), CI = /* @__PURE__ */ ge('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), xI = /* @__PURE__ */ ge("<th><!></th>"), wI = /* @__PURE__ */ ge("<td><!></td>");
function Ra(t, e) {
  Ce(e, !0);
  const n = () => cr(_, "$sort", i), r = () => cr(I, "$sortDirection", i), [i, a] = Hr();
  let l = ue("SMUI:data-table:row:header"), c = b(e, "use", 19, () => []), o = b(e, "class", 3, ""), u = b(e, "numeric", 3, !1), d = b(e, "checkbox", 3, !1), m = b(e, "columnId", 19, () => l ? "SMUI-data-table-column-" + yI++ : "SMUI-data-table-unused"), f = b(e, "sortable", 19, () => ue("SMUI:data-table:sortable")), v = /* @__PURE__ */ Xe(e, TI), h, g = oe({}), p = oe({}), _ = ue("SMUI:data-table:sort"), I = ue("SMUI:data-table:sortDirection"), y = ue("SMUI:data-table:sortAscendingAriaLabel"), A = ue("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const C = ue("SMUI:data-table:cell:mount"), E = ue("SMUI:data-table:cell:unmount");
  at(() => {
    const H = l ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return Y();
      },
      get columnId() {
        return m();
      },
      addClass: x,
      removeClass: T,
      getAttr: S,
      addAttr: L
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return Y();
      },
      get columnId() {
      },
      addClass: x,
      removeClass: T,
      getAttr: S,
      addAttr: L
    };
    return C && C(H), () => {
      E && E(H);
    };
  });
  function x(H) {
    g[H] || (g[H] = !0);
  }
  function T(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function S(H) {
    return H in p ? p[H] ?? null : Y().getAttribute(H);
  }
  function L(H, F) {
    p[H] !== F && (p[H] = F);
  }
  function q(H) {
    tt(Y(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function k(H) {
    tt(Y(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function Y() {
    return h;
  }
  var O = { getElement: Y }, w = me(), N = re(w);
  {
    var W = (H) => {
      var F = xI(), U = (z) => {
        var $;
        d() && q(z), ($ = e.onchange) == null || $.call(e, z);
      };
      Fe(
        F,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": m(),
          "aria-sort": f() ? n() === m() ? r() : "none" : void 0,
          ...p,
          ...v,
          onchange: U
        }),
        [
          () => De({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === m(),
            ...g,
            [o()]: !0
          })
        ]
      );
      var ne = Se(F);
      {
        var ye = (z) => {
          var $ = CI(), ee = Se($);
          Ee(ee, () => e.children ?? ve);
          var V = be(ee, 2), ie = zn(V, !0);
          Ne(() => {
            Lr(V, "id", `${m() ?? ""}-status-label`), ut(ie, n() === m() ? r() === "ascending" ? y : A : "");
          }), R(z, $);
        }, G = (z) => {
          var $ = me(), ee = re($);
          Ee(ee, () => e.children ?? ve), R(z, $);
        };
        Ie(ne, (z) => {
          f() ? z(ye) : z(G, -1);
        });
      }
      _e(F, (z) => h = z, () => h), Pe(F, (z, $) => X == null ? void 0 : X(z, $), c), R(H, F);
    }, B = (H) => {
      var F = wI(), U = (ye) => {
        var G;
        d() && k(ye), (G = e.onchange) == null || G.call(e, ye);
      };
      Fe(
        F,
        (ye) => ({
          class: ye,
          ...p,
          ...v,
          onchange: U
        }),
        [
          () => De({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [o()]: !0
          })
        ]
      );
      var ne = Se(F);
      Ee(ne, () => e.children ?? ve), _e(F, (ye) => h = ye, () => h), Pe(F, (ye, G) => X == null ? void 0 : X(ye, G), c), R(H, F);
    };
    Ie(N, (H) => {
      l ? H(W) : H(B, -1);
    });
  }
  R(t, w);
  var K = xe(O);
  return a(), K;
}
var OI = /* @__PURE__ */ new Set([
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
]), LI = /* @__PURE__ */ ge('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function RI(t, e) {
  Ce(e, !0);
  const [n, r] = Hr();
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), l = b(e, "style", 3, ""), c = b(e, "indeterminate", 3, !1), o = b(e, "closed", 3, !1), u = b(e, "progress", 3, 0), d = b(e, "buffer", 3, void 0), m = /* @__PURE__ */ Xe(e, OI), f, v = /* @__PURE__ */ de(void 0), h = oe({}), g = oe({}), p = oe({}), _ = oe({}), I = oe({}), y = ue("SMUI:linear-progress:context"), A = ue("SMUI:linear-progress:closed");
  Ae(() => {
    A && Ci(A, o());
  }), Ae(() => {
    s(v) && s(v).isDeterminate() !== !c() && s(v).setDeterminate(!c());
  }), Ae(() => {
    s(v) && s(v).getProgress() !== u() && s(v).setProgress(u());
  }), Ae(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Ae(() => {
    s(v) && (o() ? s(v).close() : s(v).open());
  }), at(() => (j(
    v,
    new Yo({
      addClass: E,
      forceLayout: () => {
        Y().getBoundingClientRect();
      },
      setBufferBarStyle: q,
      setPrimaryBarStyle: k,
      hasClass: C,
      removeAttribute: S,
      removeClass: x,
      setAttribute: T,
      setStyle: L,
      attachResizeObserver: (F) => {
        const U = window.ResizeObserver;
        if (U) {
          const ne = new U(F);
          return ne.observe(Y()), ne;
        }
        return null;
      },
      getWidth: () => Y().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var F;
    (F = s(v)) == null || F.destroy(), j(v, void 0);
  }));
  function C(F) {
    return F in h ? h[F] : Y().classList.contains(F);
  }
  function E(F) {
    h[F] || (h[F] = !0);
  }
  function x(F) {
    (!(F in h) || h[F]) && (h[F] = !1);
  }
  function T(F, U) {
    g[F] !== U && (g[F] = U);
  }
  function S(F) {
    (!(F in g) || g[F] != null) && (g[F] = void 0);
  }
  function L(F, U) {
    p[F] != U && (U === "" || U == null ? delete p[F] : p[F] = U);
  }
  function q(F, U) {
    _[F] != U && (U === "" || U == null ? delete _[F] : _[F] = U);
  }
  function k(F, U) {
    I[F] != U && (U === "" || U == null ? delete I[F] : I[F] = U);
  }
  function Y() {
    return f;
  }
  var O = { getElement: Y }, w = LI(), N = (F) => {
    var U;
    s(v) && s(v).handleTransitionEnd(), (U = e.ontransitionend) == null || U.call(e, F);
  };
  Fe(
    w,
    (F, U) => ({
      class: F,
      style: U,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...g,
      ...m,
      ontransitionend: N
    }),
    [
      () => De({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": o(),
        "mdc-data-table__linear-progress": y === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(p).map(([F, U]) => `${F}: ${U};`).concat([l()]).join(" ")
    ]
  );
  var W = Se(w), B = Se(W), K = be(W, 2);
  _e(w, (F) => f = F, () => f), Pe(w, (F, U) => X == null ? void 0 : X(F, U), i), Ne(
    (F, U) => {
      Ut(B, F), Ut(K, U);
    },
    [
      () => Object.entries(_).map(([F, U]) => `${F}: ${U};`).join(" "),
      () => Object.entries(I).map(([F, U]) => `${F}: ${U};`).join(" ")
    ]
  ), R(t, w);
  var H = xe(O);
  return r(), H;
}
dn(["click"]);
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
var Tu;
(function(t) {
  t.PROCESSING = "mdc-switch--processing", t.SELECTED = "mdc-switch--selected", t.UNSELECTED = "mdc-switch--unselected";
})(Tu || (Tu = {}));
var Cu;
(function(t) {
  t.RIPPLE = ".mdc-switch__ripple";
})(Cu || (Cu = {}));
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
const NI = {
  ROOT: "mdc-form-field"
}, MI = {
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
class Zo extends Ot {
  static get cssClasses() {
    return NI;
  }
  static get strings() {
    return MI;
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
    super(Object.assign(Object.assign({}, Zo.defaultAdapter), e)), this.click = () => {
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
let DI = 0;
var PI = /* @__PURE__ */ new Set([
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
]), HI = /* @__PURE__ */ ge("<div><!> <label><!></label></div>");
function UI(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "align", 3, "start"), a = b(e, "justify", 3, "normal"), l = b(e, "noWrap", 3, !1), c = b(e, "inputId", 19, () => "SMUI-form-field-" + DI++), o = b(e, "label$use", 19, () => []), u = b(e, "label$class", 3, ""), d = /* @__PURE__ */ Xe(e, PI), m, f = /* @__PURE__ */ de(void 0), v = new Oi(), h, g = /* @__PURE__ */ de(void 0);
  le("SMUI:generic:input:props", { id: c() }), le("SMUI:generic:input:mount", (E) => {
    j(g, E, !0);
  }), le("SMUI:generic:input:unmount", () => {
    j(g, void 0);
  }), at(() => (j(
    f,
    new Zo({
      activateInputRipple: () => {
        s(g) && s(g).activateRipple();
      },
      deactivateInputRipple: () => {
        s(g) && s(g).deactivateRipple();
      },
      deregisterInteractionHandler: (E, x) => v.off(h, E, x),
      registerInteractionHandler: (E, x) => v.on(h, E, x)
    }),
    !0
  ), s(f).init(), () => {
    var E;
    (E = s(f)) == null || E.destroy(), j(f, void 0), v.clear();
  }));
  function p() {
    return m;
  }
  var _ = { getElement: p }, I = HI();
  Fe(I, (E, x) => ({ class: E, ...x }), [
    () => De({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--space-between": a() === "space-between",
      "mdc-form-field--nowrap": l(),
      [r()]: !0
    }),
    () => fr(d, ["label$"])
  ]);
  var y = Se(I);
  Ee(y, () => e.children ?? ve);
  var A = be(y, 2);
  Fe(A, (E, x) => ({ class: E, for: c(), ...x }), [
    () => De({ "mdc-label": !0, [u()]: !0 }),
    () => lt(d, "label$")
  ]);
  var C = Se(A);
  return Ee(C, () => e.label ?? ve), _e(A, (E) => h = E, () => h), Pe(A, (E, x) => X == null ? void 0 : X(E, x), o), _e(I, (E) => m = E, () => m), Pe(I, (E, x) => X == null ? void 0 : X(E, x), n), R(t, I), xe(_);
}
dn(["click"]);
function ho(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var kI = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ho({}, kI.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ts, xu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ts = {}, ho(Ts, xu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ho(Ts, xu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function BI(t) {
  return t * t * t;
}
function Pf(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function FI(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (E) => Math.sqrt(E) * 120, easing: l = Pf } = r, c = getComputedStyle(t), o = c.transform === "none" ? "" : c.transform, [u, d] = c.transformOrigin.split(" ").map(parseFloat);
  u /= t.clientWidth, d /= t.clientHeight;
  var m = VI(t), f = t.clientWidth / n.width / m, v = t.clientHeight / n.height / m, h = e.left + e.width * u, g = e.top + e.height * d, p = n.left + n.width * u, _ = n.top + n.height * d, I = (h - p) * f, y = (g - _) * v, A = e.width / n.width, C = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(I * I + y * y)) : a,
    easing: l,
    css: (E, x) => {
      var T = x * I, S = x * y, L = E + x * A, q = E + x * C;
      return `transform: ${o} translate(${T}px, ${S}px) scale(${L}, ${q});`;
    }
  };
}
function VI(t) {
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
function GI(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function wu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Qs(t, { delay: e = 0, duration: n = 400, easing: r = GI, x: i = 0, y: a = 0, opacity: l = 0 } = {}) {
  const c = getComputedStyle(t), o = +c.opacity, u = c.transform === "none" ? "" : c.transform, d = o * (1 - l), [m, f] = wu(i), [v, h] = wu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, p) => `
			transform: ${u} translate(${(1 - g) * m}${f}, ${(1 - g) * v}${h});
			opacity: ${o - d * p}`
  };
}
dn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var jI = /* @__PURE__ */ ge('<div class="detail svelte-4xu36c"> </div>'), WI = /* @__PURE__ */ ge('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function qI(t, e) {
  Ce(e, !0);
  let n = b(e, "onClose", 3, () => {
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
    var p;
    (p = n()) == null || p();
  }
  var l = WI(), c = Se(l), o = Se(c);
  co(o, {
    class: "material-icons",
    children: (p, _) => {
      var I = Dt();
      Ne(() => ut(I, r[e.type])), R(p, I);
    },
    $$slots: { default: !0 }
  });
  var u = be(c, 2), d = Se(u), m = zn(d, !0), f = be(d, 2);
  {
    var v = (p) => {
      var _ = jI(), I = zn(_, !0);
      Ne(() => ut(I, e.detail)), R(p, _);
    };
    Ie(f, (p) => {
      e.detail && p(v);
    });
  }
  var h = be(u, 2), g = Se(h);
  co(g, {
    class: "material-icons",
    children: (p, _) => {
      var I = Dt("close");
      R(p, I);
    },
    $$slots: { default: !0 }
  }), Ne(() => {
    Ut(l, `--color:${i[e.type] ?? ""}`), ut(m, e.summary);
  }), Rn("click", h, a), Gs(1, l, () => Qs, () => ({ x: 0, y: 30, duration: 150, easing: BI })), Gs(2, l, () => Qs, () => ({ x: 50, y: 0, duration: 150, easing: Pf })), R(t, l), xe();
}
dn(["click"]);
const KI = 4e3;
function zI() {
  let t = oe({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, l, c = KI) => {
    const o = e++, u = { id: o, summary: a, detail: l, type: i };
    return t.items = [...t.items, u], setTimeout(
      () => {
        n(o);
      },
      c
    ), o;
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
const qa = zI();
var YI = /* @__PURE__ */ ge("<div><!></div>"), XI = /* @__PURE__ */ ge('<div class="toast-host svelte-11vwiay"></div>');
function ZI(t, e) {
  Ce(e, !1);
  const n = qa.toasts;
  nm();
  var r = XI();
  Gn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var l = YI(), c = Se(l);
    qI(c, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => qa.remove(s(a).id)
    }), qv(l, () => FI, null), R(i, l);
  }), R(t, r), xe();
}
var QI = /* @__PURE__ */ ge('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), JI = /* @__PURE__ */ ge('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), $I = /* @__PURE__ */ ge('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function eE(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ ce(() => !!e.value);
  var r = $I(), i = Se(r), a = Se(i);
  {
    var l = (f) => {
      Xs(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (v, h) => {
          var g = QI(), p = Se(g);
          Df(p, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), Rn("click", g, (_) => {
            _.stopPropagation(), e.onRemove();
          }), R(v, g);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      Xs(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (v, h) => {
          rI(v, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    Ie(a, (f) => {
      s(n) ? f(l) : f(c, -1);
    });
  }
  var o = be(i, 2), u = zn(o, !0), d = be(o, 2);
  {
    var m = (f) => {
      var v = JI(), h = be(re(v), 2), g = zn(h, !0), p = be(h, 2), _ = Se(p);
      tI(_, { svgStyles: "fill: gray;" }), Ne(() => ut(g, e.value)), R(f, v);
    };
    Ie(d, (f) => {
      s(n) && f(m);
    });
  }
  Ne(() => {
    Po(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), ut(u, e.label);
  }), Rn("click", r, (f) => {
    f.stopPropagation(), e.onOpen();
  }), R(t, r), xe();
}
dn(["click"]);
var tE = /* @__PURE__ */ new Set([
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
]), nE = /* @__PURE__ */ ge('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function rE(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(J) {
    return J === n;
  }
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), l = b(e, "style", 3, ""), c = b(e, "disabled", 15, !1), o = b(e, "touch", 3, !1), u = b(e, "indeterminate", 15, n), d = b(e, "group", 11, n), m = b(e, "checked", 15, n), f = b(e, "value", 3, null), v = b(e, "valueKey", 3, n), h = b(e, "input$use", 19, () => []), g = b(e, "input$class", 3, ""), p = /* @__PURE__ */ Xe(e, tE), _, I = /* @__PURE__ */ de(void 0), y = /* @__PURE__ */ de(void 0), A = oe({}), C = oe({}), E = oe({}), x = /* @__PURE__ */ de(!1), T = oe(ue("SMUI:generic:input:props") ?? {}), S = /* @__PURE__ */ de(oe(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex((J) => J === f()) !== -1)), L = ue("SMUI:checkbox:context"), q = ue("SMUI:data-table:row:header"), k = m(), Y = r(d()) ? [] : [...d()], O = s(S);
  Ae(() => {
    let J = !1;
    if (!r(d()))
      if (O !== s(S)) {
        const ae = d().findIndex((Ue) => Ue === f());
        s(S) && ae === -1 ? d().push(f()) : !s(S) && ae !== -1 && d().splice(ae, 1), J = !0;
      } else {
        const ae = Y.findIndex((Oe) => Oe === f()), Ue = d().findIndex((Oe) => Oe === f());
        ae > -1 && Ue === -1 ? (j(S, !1), J = !0) : Ue > -1 && ae === -1 && (j(S, !0), J = !0);
      }
    r(m()) ? O !== s(S) && (J = !0) : (m() !== (u() ? null : s(S)) || s(S) !== O) && (m() === k && s(S) !== O ? (m(s(S)), r(u()) || u(!1)) : j(S, !!m()), J = !0), s(y) && (r(u()) ? s(y).indeterminate && (s(y).indeterminate = !1, J = !0) : !u() && s(y).indeterminate ? (s(y).indeterminate = !1, J = !0) : u() && !s(y).indeterminate && (s(y).indeterminate = !0, j(S, !1), J = !0)), k = m(), Y = r(d()) ? [] : [...d()], O = s(S), J && s(I) && s(I).handleChange();
  });
  const w = ue("SMUI:generic:input:mount"), N = ue("SMUI:generic:input:unmount"), W = ue("SMUI:checkbox:mount"), B = ue("SMUI:checkbox:unmount");
  at(() => {
    if (s(y) == null)
      throw new Error("Checkbox is not defined.");
    s(y).indeterminate = !r(u()) && u(), j(
      I,
      new Zs({
        addClass: K,
        forceLayout: () => G().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!G().parentNode,
        isChecked: () => s(S),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: H,
        removeNativeControlAttr: ne,
        setNativeControlAttr: U,
        setNativeControlDisabled: (ae) => c(ae)
      }),
      !0
    );
    const J = {
      _smui_checkbox_accessor: !0,
      get element() {
        return G();
      },
      get checked() {
        return s(S);
      },
      set checked(ae) {
        s(S) !== ae && j(S, ae, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(ae) {
        u(ae);
      },
      activateRipple() {
        c() || j(x, !0);
      },
      deactivateRipple() {
        j(x, !1);
      }
    };
    return w && w(J), W && W(J), s(I).init(), () => {
      var ae;
      N && N(J), B && B(J), (ae = s(I)) == null || ae.destroy(), j(I, void 0);
    };
  });
  function K(J) {
    A[J] || (A[J] = !0);
  }
  function H(J) {
    (!(J in A) || A[J]) && (A[J] = !1);
  }
  function F(J, ae) {
    C[J] != ae && (ae === "" || ae == null ? delete C[J] : C[J] = ae);
  }
  function U(J, ae) {
    E[J] !== ae && (E[J] = ae);
  }
  function ne(J) {
    (!(J in E) || E[J] != null) && (E[J] = void 0);
  }
  function ye() {
    return T && T.id;
  }
  function G() {
    return _;
  }
  var z = { getId: ye, getElement: G }, $ = nE(), ee = (J) => {
    var ae;
    s(I) && s(I).handleAnimationEnd(), (ae = e.onanimationend) == null || ae.call(e, J);
  };
  Fe($, (J, ae, Ue) => ({ class: J, style: ae, ...Ue, onanimationend: ee }), [
    () => De({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": o(),
      "mdc-data-table__header-row-checkbox": L === "data-table" && q,
      "mdc-data-table__row-checkbox": L === "data-table" && !q,
      ...A,
      [a()]: !0
    }),
    () => Object.entries(C).map(([J, ae]) => `${J}: ${ae};`).concat([l()]).join(" "),
    () => fr(p, ["input$"])
  ]);
  var V = Se($), ie = (J) => {
    var ae;
    tt(G(), "blur", J), (ae = e.input$onblur) == null || ae.call(e, J);
  }, we = (J) => {
    var ae;
    tt(G(), "focus", J), (ae = e.input$onfocus) == null || ae.call(e, J);
  };
  return Fe(
    V,
    (J, ae, Ue, Oe) => ({
      class: J,
      type: "checkbox",
      ...T,
      disabled: c(),
      value: ae,
      "data-indeterminate": Ue,
      ...E,
      ...Oe,
      onblur: ie,
      onfocus: we
    }),
    [
      () => De({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(v()) ? f() : v(),
      () => !r(u()) && u() ? "true" : void 0,
      () => lt(p, "input$")
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), _e(V, (J) => j(y, J), () => s(y)), Pe(V, (J, ae) => X == null ? void 0 : X(J, ae), h), $r(() => tm(V, () => s(S), (J) => j(S, J))), _e($, (J) => _ = J, () => _), Pe($, (J, ae) => X == null ? void 0 : X(J, ae), i), Pe($, (J, ae) => Zt == null ? void 0 : Zt(J, ae), () => ({
    unbounded: !0,
    addClass: K,
    removeClass: H,
    addStyle: F,
    active: s(x),
    eventTarget: s(y)
  })), R(t, $), xe(z);
}
var iE = /* @__PURE__ */ ge('<div style="display: flex; flex-direction: column;"></div>');
function aE(t, e) {
  Ce(e, !0);
  let n = b(e, "data", 19, () => []), r = b(e, "values", 31, () => oe([]));
  var i = iE();
  Gn(i, 21, n, Fi, (a, l) => {
    UI(a, {
      label: (o) => {
        var u = Dt();
        Ne(() => ut(u, s(l).label)), R(o, u);
      },
      children: (o, u) => {
        rE(o, {
          get value() {
            return s(l).value;
          },
          get group() {
            return r();
          },
          set group(d) {
            r(d);
          }
        });
      },
      $$slots: { label: !0, default: !0 }
    });
  }), R(t, i), xe();
}
var sE = /* @__PURE__ */ ge('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), lE = /* @__PURE__ */ ge('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), oE = /* @__PURE__ */ ge('<div class="oscd-filters svelte-58jwwf"></div>');
function cE(t, e) {
  Ce(e, !0);
  let n = b(e, "filters", 15), r = /* @__PURE__ */ de(null), i = [], a = [];
  function l(h) {
    var g;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const p = (g = h.options) == null ? void 0 : g.find((y) => y.value === h.value);
          return p ? p.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const _ = h.value.map((y) => {
            var C;
            const A = (C = h.options) == null ? void 0 : C.find((E) => E.value === y);
            return A ? A.label : String(y);
          }), I = 1;
          return _.length <= I ? _.join(", ") : `${_.slice(0, I).join(", ")} +${_.length - I} more`;
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
  function c(h) {
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
  function o(h) {
    s(r) === h ? j(r, null) : (j(r, h, !0), a[h] = c(n()[h]));
  }
  function u() {
    j(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var g;
    n(n().map((p, _) => _ === h ? { ...p, value: a[h] } : p)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), j(r, null);
  }
  function m(h) {
    var g;
    n(n().map((p, _) => _ === h ? { ...p, value: void 0 } : p)), a[h] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), u();
  }
  function f(h) {
    i.some((p) => p && p.contains(h.target)) || u();
  }
  at(() => {
    document.addEventListener("click", f);
  }), Dr(() => {
    document.removeEventListener("click", f);
  }), Ae(() => {
  });
  var v = oE();
  Gn(v, 23, n, (h) => h.key, (h, g, p) => {
    var _ = lE(), I = Se(_);
    {
      let C = /* @__PURE__ */ ce(() => l(s(g)));
      eE(I, {
        get label() {
          return s(g).label;
        },
        get value() {
          return s(C);
        },
        onOpen: () => o(s(p)),
        onRemove: () => m(s(p))
      });
    }
    var y = be(I, 2);
    {
      var A = (C) => {
        var E = sE(), x = be(Se(E), 2), T = zn(x), S = be(x, 2), L = Se(S);
        {
          var q = (W) => {
            uo(W, {
              get label() {
                return s(g).label;
              },
              get placeholder() {
                return s(g).placeholder;
              },
              get type() {
                return s(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(p)];
              },
              set value(B) {
                a[s(p)] = B;
              }
            });
          }, k = (W) => {
            {
              let B = /* @__PURE__ */ ce(() => {
                var K;
                return (K = s(g)) == null ? void 0 : K.options;
              });
              R_(W, {
                get label() {
                  return s(g).label;
                },
                get data() {
                  return s(B);
                },
                get value() {
                  return a[s(p)];
                },
                set value(K) {
                  a[s(p)] = K;
                }
              });
            }
          }, Y = (W) => {
            {
              let B = /* @__PURE__ */ ce(() => {
                var K;
                return (K = s(g)) == null ? void 0 : K.options;
              });
              aE(W, {
                get data() {
                  return s(B);
                },
                get values() {
                  return a[s(p)];
                },
                set values(K) {
                  a[s(p)] = K;
                }
              });
            }
          }, O = (W) => {
            lI(W, {
              get value() {
                return a[s(p)];
              },
              set value(B) {
                a[s(p)] = B;
              }
            });
          }, w = (W) => {
            cI(W, {
              get value() {
                return a[s(p)];
              },
              set value(B) {
                a[s(p)] = B;
              }
            });
          };
          Ie(L, (W) => {
            s(g).type === "text" || s(g).type === "number" ? W(q) : s(g).type === "select" ? W(k, 1) : s(g).type === "multiselect" ? W(Y, 2) : s(g).type === "date" ? W(O, 3) : s(g).type === "datetime" && W(w, 4);
          });
        }
        var N = be(S, 2);
        Of(N, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(p)),
          children: (W, B) => {
            var K = Dt("Apply");
            R(W, K);
          },
          $$slots: { default: !0 }
        }), Ne(() => ut(T, `Filter by ${s(g).label ?? ""}`)), Rn("click", E, (W) => W.stopPropagation()), Gs(2, E, () => Qs, () => ({ y: 5, duration: 120 })), Gs(1, E, () => Qs, () => ({ y: -5, duration: 120 })), R(C, E);
      };
      Ie(y, (C) => {
        s(r) === s(p) && C(A);
      });
    }
    _e(_, (C, E) => i[E] = C, (C) => i == null ? void 0 : i[C], () => [s(p)]), R(h, _);
  }), R(t, v), xe();
}
dn(["click"]);
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
const Hf = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, uE = {
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
let Ml;
function dE(t, e = !0) {
  if (e && typeof Ml < "u")
    return Ml;
  const n = t.createElement("div");
  n.classList.add(Hf.SCROLL_TEST), t.body.appendChild(n);
  const r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (Ml = r), r;
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
class Qo {
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
class fE extends Qo {
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
class hE extends Qo {
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
class vE extends Qo {
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
class qr extends Ot {
  static get cssClasses() {
    return Hf;
  }
  static get strings() {
    return uE;
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
    super(Object.assign(Object.assign({}, qr.defaultAdapter), e)), this.isAnimating = !1;
  }
  init() {
    const e = this.adapter.computeHorizontalScrollbarHeight();
    this.adapter.setScrollAreaStyleProperty("margin-bottom", -e + "px"), this.adapter.addScrollAreaClass(qr.cssClasses.SCROLL_AREA_SCROLL);
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
    !this.isAnimating || !this.adapter.eventTargetMatchesSelector(n, qr.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(qr.cssClasses.ANIMATING));
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
    const r = n[1], [i, a, l, c, o, u] = r.split(",");
    return parseFloat(o);
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
      this.adapter.addClass(qr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "none");
    }), this.isAnimating = !0);
  }
  /**
   * Stops scroll animation
   */
  stopScrollAnimation() {
    this.isAnimating = !1;
    const e = this.getAnimatingScrollPosition();
    this.adapter.removeClass(qr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(e);
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
      return this.adapter.setScrollAreaScrollLeft(e), new hE(this.adapter);
    const r = this.adapter.computeScrollAreaClientRect(), i = this.adapter.computeScrollContentClientRect(), a = Math.round(i.right - r.right);
    return this.adapter.setScrollAreaScrollLeft(e), a === n ? new vE(this.adapter) : new fE(this.adapter);
  }
  isRTL() {
    return this.adapter.getScrollContentStyleValue("direction") === "rtl";
  }
}
var mE = /* @__PURE__ */ new Set([
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
]), gE = /* @__PURE__ */ ge("<div><div><div><!></div></div></div>");
function bE(t, e) {
  Ce(e, !0);
  const { matches: n } = ds;
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "align", 3, void 0), l = b(e, "scrollArea$use", 19, () => []), c = b(e, "scrollArea$class", 3, ""), o = b(e, "scrollContent$use", 19, () => []), u = b(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ Xe(e, mE), m, f = /* @__PURE__ */ de(void 0), v, h, g = oe({}), p = oe({}), _ = oe({}), I = oe({});
  at(() => (j(
    f,
    new qr({
      eventTargetMatchesSelector: (G, z) => n(G, z),
      addClass: y,
      removeClass: A,
      addScrollAreaClass: C,
      setScrollAreaStyleProperty: E,
      setScrollContentStyleProperty: x,
      getScrollContentStyleValue: T,
      setScrollAreaScrollLeft: (G) => v.scrollLeft = G,
      getScrollAreaScrollLeft: () => v.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => v.offsetWidth,
      computeScrollAreaClientRect: () => v.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => dE(document)
    }),
    !0
  ), s(f).init(), () => {
    var G;
    (G = s(f)) == null || G.destroy(), j(f, void 0);
  }));
  function y(G) {
    g[G] || (g[G] = !0);
  }
  function A(G) {
    (!(G in g) || g[G]) && (g[G] = !1);
  }
  function C(G) {
    p[G] || (p[G] = !0);
  }
  function E(G, z) {
    _[G] != z && (z === "" || z == null ? delete _[G] : _[G] = z);
  }
  function x(G, z) {
    I[G] != z && (z === "" || z == null ? delete I[G] : I[G] = z);
  }
  function T(G) {
    return G in I ? I[G] : getComputedStyle(h).getPropertyValue(G);
  }
  function S() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function L() {
    return h.offsetWidth;
  }
  function q(G) {
    var z;
    (z = s(f)) == null || z.incrementScroll(G);
  }
  function k(G) {
    var z;
    (z = s(f)) == null || z.scrollTo(G);
  }
  function Y() {
    return m;
  }
  var O = {
    getScrollPosition: S,
    getScrollContentWidth: L,
    incrementScroll: q,
    scrollTo: k,
    getElement: Y
  }, w = gE();
  Fe(w, (G, z) => ({ class: G, ...z }), [
    () => De({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => fr(d, ["scrollArea$", "scrollContent$"])
  ]);
  var N = Se(w), W = (G) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onwheel) == null || z.call(e, G);
  }, B = (G) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$ontouchstart) == null || z.call(e, G);
  }, K = (G) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onpointerdown) == null || z.call(e, G);
  }, H = (G) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onmousedown) == null || z.call(e, G);
  }, F = (G) => {
    var z;
    s(f) && s(f).handleInteraction(), (z = e.scrollArea$onkeydown) == null || z.call(e, G);
  };
  Fe(
    N,
    (G, z, $) => ({
      class: G,
      style: z,
      ...$,
      onwheel: W,
      ontouchstart: B,
      onpointerdown: K,
      onmousedown: H,
      onkeydown: F
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-area": !0,
        ...p,
        [c()]: !0
      }),
      () => Object.entries(_).map(([G, z]) => `${G}: ${z};`).join(" "),
      () => lt(d, "scrollArea$")
    ]
  );
  var U = Se(N), ne = (G) => {
    var z;
    s(f) && s(f).handleTransitionEnd(G), (z = e.scrollContent$ontransitionend) == null || z.call(e, G);
  };
  Fe(
    U,
    (G, z, $) => ({
      class: G,
      style: z,
      ...$,
      ontransitionend: ne
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-content": !0,
        [u()]: !0
      }),
      () => Object.entries(I).map(([G, z]) => `${G}: ${z};`).join(" "),
      () => lt(d, "scrollContent$")
    ]
  );
  var ye = Se(U);
  return Ee(ye, () => e.children ?? ve), _e(U, (G) => h = G, () => h), Pe(U, (G, z) => X == null ? void 0 : X(G, z), o), _e(N, (G) => v = G, () => v), Pe(N, (G, z) => X == null ? void 0 : X(G, z), l), _e(w, (G) => m = G, () => m), Pe(w, (G, z) => X == null ? void 0 : X(G, z), r), R(t, w), xe(O);
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
const pE = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, _E = {
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
class Vn extends Ot {
  static get cssClasses() {
    return pE;
  }
  static get strings() {
    return _E;
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
    super(Object.assign(Object.assign({}, Vn.defaultAdapter), e));
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
class IE extends Vn {
  activate() {
    this.adapter.addClass(Vn.cssClasses.ACTIVE);
  }
  deactivate() {
    this.adapter.removeClass(Vn.cssClasses.ACTIVE);
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
class Ou extends Vn {
  activate(e) {
    if (!e) {
      this.adapter.addClass(Vn.cssClasses.ACTIVE);
      return;
    }
    const n = this.computeContentClientRect(), r = e.width / n.width, i = e.left - n.left;
    this.adapter.addClass(Vn.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", `translateX(${i}px) scaleX(${r})`), this.computeContentClientRect(), this.adapter.removeClass(Vn.cssClasses.NO_TRANSITION), this.adapter.addClass(Vn.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
  }
  deactivate() {
    this.adapter.removeClass(Vn.cssClasses.ACTIVE);
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
const Cs = {
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
class Jo extends Ot {
  static get cssClasses() {
    return Cs;
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
    super(Object.assign(Object.assign({}, Jo.defaultAdapter), e)), this.focusOnActivate = !0;
  }
  handleClick() {
    this.adapter.notifyInteracted();
  }
  isActive() {
    return this.adapter.hasClass(Cs.ACTIVE);
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
    this.adapter.addClass(Cs.ACTIVE), this.adapter.setAttr(Na.ARIA_SELECTED, "true"), this.adapter.setAttr(Na.TABINDEX, "0"), this.adapter.activateIndicator(e), this.focusOnActivate && !this.adapter.isFocused() && this.adapter.focus();
  }
  /**
   * Deactivates the Tab
   */
  deactivate() {
    this.isActive() && (this.adapter.removeClass(Cs.ACTIVE), this.adapter.setAttr(Na.ARIA_SELECTED, "false"), this.adapter.setAttr(Na.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
const wt = {
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
const Li = /* @__PURE__ */ new Set();
Li.add(wt.ARROW_LEFT_KEY);
Li.add(wt.ARROW_RIGHT_KEY);
Li.add(wt.END_KEY);
Li.add(wt.HOME_KEY);
Li.add(wt.ENTER_KEY);
Li.add(wt.SPACE_KEY);
const Ri = /* @__PURE__ */ new Map();
Ri.set(jn.ARROW_LEFT_KEYCODE, wt.ARROW_LEFT_KEY);
Ri.set(jn.ARROW_RIGHT_KEYCODE, wt.ARROW_RIGHT_KEY);
Ri.set(jn.END_KEYCODE, wt.END_KEY);
Ri.set(jn.HOME_KEYCODE, wt.HOME_KEY);
Ri.set(jn.ENTER_KEYCODE, wt.ENTER_KEY);
Ri.set(jn.SPACE_KEYCODE, wt.SPACE_KEY);
class $o extends Ot {
  static get strings() {
    return wt;
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
    super(Object.assign(Object.assign({}, $o.defaultAdapter), e)), this.useAutomaticActivation = !1;
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
    const r = this.isRTL(), i = this.adapter.getTabListLength() - 1, a = n === wt.END_KEY, l = n === wt.ARROW_LEFT_KEY && !r || n === wt.ARROW_RIGHT_KEY && r, c = n === wt.ARROW_RIGHT_KEY && !r || n === wt.ARROW_LEFT_KEY && r;
    let o = e;
    return a ? o = i : l ? o -= 1 : c ? o += 1 : o = 0, o < 0 ? o = i : o > i && (o = 0), o;
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
    const a = this.adapter.getTabDimensionsAtIndex(n), l = a.contentLeft - r - i, o = a.contentRight - r - jn.EXTRA_SCROLL_AMOUNT, u = l + jn.EXTRA_SCROLL_AMOUNT;
    return n < e ? Math.min(o, 0) : Math.max(u, 0);
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
    const l = this.adapter.getTabDimensionsAtIndex(n), c = a - l.contentLeft - r, u = a - l.contentRight - r - i + jn.EXTRA_SCROLL_AMOUNT, d = c - jn.EXTRA_SCROLL_AMOUNT;
    return n > e ? Math.max(u, 0) : Math.min(d, 0);
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
    const a = n.rootLeft - r, l = n.rootRight - r - i, c = a + l, o = a < 0 || c < 0, u = l > 0 || c > 0;
    return o ? e - 1 : u ? e + 1 : -1;
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
    const l = a - n.rootLeft - i - r, c = a - n.rootRight - r, o = l + c, u = l > 0 || o > 0, d = c < 0 || o < 0;
    return u ? e + 1 : d ? e - 1 : -1;
  }
  /**
   * Returns the key associated with a keydown event
   * @param event The keydown event
   */
  getKeyFromEvent(e) {
    return Li.has(e.key) ? e.key : Ri.get(e.keyCode);
  }
  isActivationKey(e) {
    return e === wt.SPACE_KEY || e === wt.ENTER_KEY;
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
    const c = this.calculateScrollIncrementRTL(e, l, n, r, a);
    this.adapter.incrementScroll(c);
  }
}
var EE = /* @__PURE__ */ new Set([
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
]), SE = /* @__PURE__ */ ge("<div><!></div>");
function AE(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "tabs", 19, () => []), a = b(e, "key", 3, (O) => O), l = b(e, "focusOnActivate", 3, !0), c = b(e, "focusOnProgrammatic", 3, !1), o = b(e, "useAutomaticActivation", 3, !0), u = b(e, "active", 15), d = b(e, "tabindex", 3, 0), m = /* @__PURE__ */ Xe(e, EE), f, v = /* @__PURE__ */ de(void 0), h, g = /* @__PURE__ */ de(oe(u() == null ? -1 : i().findIndex((O) => u() && a()(O) === a()(u())))), p = oe({}), _ = /* @__PURE__ */ de(/* @__PURE__ */ new WeakMap()), I = !1;
  le("SMUI:tab:focusOnActivate", l()), le("SMUI:tab:initialActive", {
    active: u() == null ? null : a()(u()),
    key: a()
  }), Ae(() => {
    (u() == null && s(g) !== -1 || u() != null && s(g) === -1 || u() != null && a()(u()) !== a()(i()[s(g)])) && (j(g, i().findIndex((O) => u() && a()(O) === a()(u())), !0), s(v) && (I = !c(), s(v).activateTab(s(g)), I = !1));
  }), Ae(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(_).get(i()[0]) : p[i()[0]];
      O && O.forceAccessible(s(g) === -1);
    }
  });
  let y = !1;
  Ae(() => {
    if (!s(v)) {
      y = !1;
      return;
    }
    y || (y = !0, s(v).setUseAutomaticActivation(o()));
  }), le("SMUI:tab:mount", (O) => {
    C(O.tabId, O);
  }), le("SMUI:tab:unmount", (O) => {
    E(O.tabId);
  }), at(() => (j(
    v,
    new $o({
      scrollTo: (O) => h.scrollTo(O),
      incrementScroll: (O) => h.incrementScroll(O),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => T().offsetWidth,
      isRTL: () => getComputedStyle(T()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var w;
        u(i()[O]), j(g, O, !0), (w = s(v)) == null || w.activateTab(O);
      },
      activateTabAtIndex: (O, w) => {
        var N;
        return (N = A(i()[O])) == null ? void 0 : N.activate(w, I);
      },
      deactivateTabAtIndex: (O) => {
        var w;
        return (w = A(i()[O])) == null ? void 0 : w.deactivate();
      },
      focusTabAtIndex: (O) => {
        var w;
        return (w = A(i()[O])) == null ? void 0 : w.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var w;
        return ((w = A(i()[O])) == null ? void 0 : w.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var w;
        return ((w = A(i()[O])) == null ? void 0 : w.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let w = 0; w < i().length; w++)
          if ((O = A(i()[w])) != null && O.active)
            return w;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((N) => {
          var W;
          return (W = A(N)) == null ? void 0 : W.element;
        }), w = document.activeElement;
        return O.indexOf(w);
      },
      getIndexOfTabById: (O) => i().findIndex((w) => a()(w) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => tt(T(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(v).init(), () => {
    var O;
    (O = s(v)) == null || O.destroy(), j(v, void 0);
  }));
  function A(O) {
    return O instanceof Object ? s(_).get(O) : p[O];
  }
  function C(O, w) {
    O instanceof Object ? (s(_).set(O, w), j(_, s(_))) : p[O] = w;
  }
  function E(O) {
    O instanceof Object ? (s(_).delete(O), j(_, s(_))) : delete p[O];
  }
  function x(O) {
    var w;
    (w = s(v)) == null || w.scrollIntoView(O);
  }
  function T() {
    return f;
  }
  var S = { scrollIntoView: x, getElement: T }, L = SE(), q = (O) => {
    var w;
    s(v) && s(v).handleKeyDown(O), (w = e.onkeydown) == null || w.call(e, O);
  }, k = (O) => {
    var w;
    s(v) && s(v).handleTabInteraction(O), (w = e.onSMUITabInteracted) == null || w.call(e, O);
  };
  Fe(
    L,
    (O, w) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...w,
      onkeydown: q,
      onSMUITabInteracted: k
    }),
    [
      () => De({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => fr(m, ["tabScroller$"])
    ]
  );
  var Y = Se(L);
  {
    let O = /* @__PURE__ */ ce(() => lt(m, "tabScroller$"));
    _e(
      bE(Y, it(() => s(O), {
        children: (w, N) => {
          var W = me(), B = re(W);
          Gn(B, 17, i, (K) => a()(K), (K, H) => {
            var F = me(), U = re(F);
            Ee(U, () => e.tab, () => s(H)), R(K, F);
          }), R(w, W);
        },
        $$slots: { default: !0 }
      })),
      (w) => h = w,
      () => h
    );
  }
  return _e(L, (O) => f = O, () => f), Pe(L, (O, w) => X == null ? void 0 : X(O, w), n), R(t, L), xe(S);
}
var yE = /* @__PURE__ */ new Set([
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
]), TE = /* @__PURE__ */ ge("<span><span><!></span></span>");
function CE(t, e) {
  Ce(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "active", 15, !1), a = b(e, "type", 3, "underline"), l = b(e, "transition", 3, "slide"), c = b(e, "content$use", 19, () => []), o = b(e, "content$class", 3, ""), u = /* @__PURE__ */ Xe(e, yE), d, m = /* @__PURE__ */ de(void 0), f, v = /* @__PURE__ */ de(oe({})), h = /* @__PURE__ */ de(oe({})), g = oe([]), p = l();
  Ae(() => {
    var O;
    p !== l() && (p = l(), (O = s(m)) == null || O.destroy(), j(m, void 0), j(v, {}, !0), j(h, {}, !0), j(m, _(), !0), s(m).init());
  }), yd(() => {
    g.length && requestAnimationFrame(() => {
      const O = g.shift() ?? [];
      for (const w of O)
        w();
    });
  }), at(() => (j(m, _(), !0), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy(), j(m, void 0);
  }));
  function _() {
    const O = {
      fade: IE,
      slide: Ou
    }[l()] || Ou;
    return new O({
      addClass: (...w) => I(() => y(...w)),
      removeClass: (...w) => I(() => A(...w)),
      computeContentClientRect: T,
      setContentStyleProperty: (...w) => I(() => C(...w))
    });
  }
  function I(O) {
    g.length ? g[g.length - 1].push(O) : O();
  }
  function y(O) {
    s(v)[O] || (s(v)[O] = !0);
  }
  function A(O) {
    (!(O in s(v)) || s(v)[O]) && (s(v)[O] = !1);
  }
  function C(O, w) {
    s(h)[O] != w && (w === "" || w == null ? delete s(h)[O] : s(h)[O] = w);
  }
  function E(O) {
    var w;
    i(!0), (w = s(m)) == null || w.activate(O);
  }
  function x() {
    var O;
    i(!1), (O = s(m)) == null || O.deactivate();
  }
  function T() {
    return g.push([]), f.getBoundingClientRect();
  }
  function S() {
    return d;
  }
  var L = { activate: E, deactivate: x, computeContentClientRect: T, getElement: S }, q = TE();
  Fe(q, (O, w) => ({ class: O, ...w }), [
    () => De({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": l() === "fade",
      ...s(v),
      [r()]: !0
    }),
    () => fr(u, ["content$"])
  ]);
  var k = Se(q);
  Fe(
    k,
    (O, w, N) => ({
      class: O,
      style: w,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...N
    }),
    [
      () => De({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [o()]: !0
      }),
      () => Object.entries(s(h)).map(([O, w]) => `${O}: ${w};`).join(" "),
      () => lt(u, "content$")
    ]
  );
  var Y = Se(k);
  return Ee(Y, () => e.children ?? ve), _e(k, (O) => f = O, () => f), Pe(k, (O, w) => X == null ? void 0 : X(O, w), c), _e(q, (O) => d = O, () => d), Pe(q, (O, w) => X == null ? void 0 : X(O, w), n), R(t, q), xe(L);
}
var xE = /* @__PURE__ */ new Set([
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
]), wE = /* @__PURE__ */ ge('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function OE(t, e) {
  Ce(e, !0);
  const n = (z) => {
    {
      let $ = /* @__PURE__ */ ce(() => lt(g, "tabIndicator$"));
      _e(
        CE(z, it(() => s($), {
          get active() {
            return s(S);
          },
          set active(ee) {
            j(S, ee, !0);
          },
          children: (ee, V) => {
            var ie = me(), we = re(ie);
            Ee(we, () => e.tabIndicator ?? ve), R(ee, ie);
          },
          $$slots: { default: !0 }
        })),
        (ee) => y = ee,
        () => y
      );
    }
  };
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "style", 3, ""), l = b(e, "ripple", 3, !0), c = b(e, "stacked", 3, !1), o = b(e, "minWidth", 3, !1), u = b(e, "indicatorSpanOnlyContent", 3, !1), d = b(e, "href", 3, void 0), m = b(e, "content$use", 19, () => []), f = b(e, "content$class", 3, ""), v = b(e, "component", 3, ni), h = b(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ Xe(e, xE), p, _ = /* @__PURE__ */ de(void 0), I, y, A = oe({}), C = oe({}), E = oe({}), x = ue("SMUI:tab:focusOnActivate");
  const T = ue("SMUI:tab:initialActive");
  let S = /* @__PURE__ */ de(oe(T.active != null && T.key(e.tab) === T.active)), L = /* @__PURE__ */ de(!1);
  if (le("SMUI:label:context", "tab"), le("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let q = !1;
  Ae(() => {
    if (!s(_)) {
      q = !1;
      return;
    }
    q || (q = !0, s(_).setFocusOnActivate(x));
  });
  const k = ue("SMUI:tab:mount"), Y = ue("SMUI:tab:unmount");
  at(() => {
    j(
      _,
      new Jo({
        setAttr: B,
        addClass: w,
        removeClass: N,
        hasClass: O,
        activateIndicator: ($) => y.activate($),
        deactivateIndicator: () => y.deactivate(),
        notifyInteracted: () => tt(U(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => U().offsetLeft,
        getOffsetWidth: () => U().offsetWidth,
        getContentOffsetLeft: () => I.offsetLeft,
        getContentOffsetWidth: () => I.offsetWidth,
        focus: F,
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
        return s(S);
      },
      forceAccessible($) {
        j(L, $, !0);
      },
      computeIndicatorClientRect: () => y.computeContentClientRect(),
      computeDimensions: () => {
        if (s(_) == null)
          throw new Error("Instance is undefined.");
        return s(_).computeDimensions();
      },
      focus: F,
      activate: K,
      deactivate: H
    };
    return k && k(z), s(_).init(), () => {
      var $;
      Y && Y(z), ($ = s(_)) == null || $.destroy(), j(_, void 0);
    };
  });
  function O(z) {
    return z in A ? A[z] : U().classList.contains(z);
  }
  function w(z) {
    A[z] || (A[z] = !0);
  }
  function N(z) {
    (!(z in A) || A[z]) && (A[z] = !1);
  }
  function W(z, $) {
    C[z] != $ && ($ === "" || $ == null ? delete C[z] : C[z] = $);
  }
  function B(z, $) {
    E[z] !== $ && (E[z] = $);
  }
  function K(z, $) {
    var ee, V, ie;
    j(S, !0), $ && ((ee = s(_)) == null || ee.setFocusOnActivate(!1)), (V = s(_)) == null || V.activate(z), $ && ((ie = s(_)) == null || ie.setFocusOnActivate(x));
  }
  function H() {
    var z;
    j(S, !1), (z = s(_)) == null || z.deactivate();
  }
  function F() {
    U().focus();
  }
  function U() {
    return p.getElement();
  }
  var ne = { activate: K, deactivate: H, focus: F, getElement: U }, ye = me(), G = re(ye);
  {
    let z = /* @__PURE__ */ ce(() => [
      [
        Zt,
        {
          ripple: l(),
          unbounded: !1,
          addClass: w,
          removeClass: N,
          addStyle: W
        }
      ],
      ...r()
    ]), $ = /* @__PURE__ */ ce(() => De({
      "mdc-tab": !0,
      "mdc-tab--active": s(S),
      "mdc-tab--stacked": c(),
      "mdc-tab--min-width": o(),
      ...A,
      [i()]: !0
    })), ee = /* @__PURE__ */ ce(() => Object.entries(C).map(([J, ae]) => `${J}: ${ae};`).concat([a()]).join(" ")), V = /* @__PURE__ */ ce(() => s(S) ? "true" : "false"), ie = /* @__PURE__ */ ce(() => s(S) || s(L) ? "0" : "-1"), we = /* @__PURE__ */ ce(() => fr(g, ["content$", "tabIndicator$"]));
    Pr(G, v, (J, ae) => {
      _e(
        ae(J, it(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(z);
            },
            get class() {
              return s($);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(V);
            },
            get tabindex() {
              return s(ie);
            },
            get href() {
              return d();
            }
          },
          () => E,
          () => s(we),
          {
            onclick: (Ue) => {
              var Oe;
              (Oe = e.onclick) == null || Oe.call(e, Ue), !Ue.defaultPrevented && s(_) && s(_).handleClick();
            },
            children: (Ue, Oe) => {
              var Ve = wE(), ke = re(Ve);
              Fe(ke, (je, Et) => ({ class: je, ...Et }), [
                () => De({ "mdc-tab__content": !0, [f()]: !0 }),
                () => lt(g, "content$")
              ]);
              var Re = Se(ke);
              Ee(Re, () => e.children ?? ve);
              var P = be(Re, 2);
              {
                var Z = (je) => {
                  n(je);
                };
                Ie(P, (je) => {
                  u() && je(Z);
                });
              }
              _e(ke, (je) => I = je, () => I), Pe(ke, (je, Et) => X == null ? void 0 : X(je, Et), m);
              var se = be(ke, 2);
              {
                var Le = (je) => {
                  n(je);
                };
                Ie(se, (je) => {
                  u() || je(Le);
                });
              }
              R(Ue, Ve);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ue) => p = Ue,
        () => p
      );
    });
  }
  return R(t, ye), xe(ne);
}
var LE = /* @__PURE__ */ ge('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), RE = /* @__PURE__ */ ge('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), NE = /* @__PURE__ */ ge('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function ME(t, e) {
  Ce(e, !0);
  let n = b(e, "filters", 31, () => oe([])), r = b(e, "onFilterChange", 3, (y) => {
  }), i = b(e, "activeNavigationTab", 31, () => oe(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = b(e, "searchText", 15, ""), l = b(e, "searchLabel", 3, "Search"), c = b(e, "searchPlaceholder", 3, "Type to search..."), o = b(e, "onSearchInput", 3, () => {
  }), u = b(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ ce(() => n().some((y) => y.value !== void 0 && y.value !== null && y.value !== "")), m = () => {
    n(n().map((y) => ({ ...y, value: void 0 }))), r()(n());
  };
  var f = NE(), v = Se(f);
  {
    var h = (y) => {
      Yp(y, {
        oninput: () => o()(),
        icon: "search",
        get label() {
          return l();
        },
        get placeholder() {
          return c();
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
    Ie(v, (y) => {
      u() || y(h);
    });
  }
  var g = be(v, 2);
  {
    var p = (y) => {
      AE(y, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(C) {
          i(C);
        },
        tab: (C, E = ve) => {
          OE(C, {
            get tab() {
              return E();
            },
            minWidth: !0,
            children: (x, T) => {
              Yb(x, {
                children: (S, L) => {
                  var q = Dt();
                  Ne(() => ut(q, E())), R(S, q);
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
    Ie(g, (y) => {
      e.navigationTabs && y(p);
    });
  }
  var _ = be(g, 2);
  {
    var I = (y) => {
      var A = RE(), C = be(Se(A), 2);
      cE(C, {
        onfiltersChanged: (T) => r()(T),
        get filters() {
          return n();
        },
        set filters(T) {
          n(T);
        }
      });
      var E = be(C, 2);
      {
        var x = (T) => {
          var S = LE();
          Rn("click", S, () => m()), R(T, S);
        };
        Ie(E, (T) => {
          s(d) && T(x);
        });
      }
      R(y, A);
    };
    Ie(_, (y) => {
      n() && n().length > 0 && y(I);
    });
  }
  R(t, f), xe();
}
dn(["click"]);
dn(["change", "click"]);
var DE = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), PE = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), HE = /* @__PURE__ */ ge('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), UE = /* @__PURE__ */ ge('<input type="text" class="svelte-1mj71p3"/>'), kE = /* @__PURE__ */ ge('<input type="number" class="svelte-1mj71p3"/>'), Dl = /* @__PURE__ */ ge("<!> <!>", 1), BE = /* @__PURE__ */ ge('<div class="cell-actions svelte-1mj71p3"></div>');
function FE(t, e) {
  Ce(e, !0);
  const n = () => cr(p, "$sortColumn", a), r = () => cr(_, "$sortDirection", a), i = () => cr(g, "$filteredData", a), [a, l] = Hr();
  let c = b(e, "loadingDone", 15, !0), o = b(e, "label", 19, U_), u = b(e, "columnDefs", 19, () => []), d = b(e, "rowData", 31, () => oe([])), m = b(e, "rowActions", 19, () => []), f = b(e, "searchInputLabel", 3, "Search"), v = b(e, "emptyText", 3, "No data available"), h = oe({ name: "", color: "", number: "" }), g = rn([]), p = rn(null), _ = rn(null), I = /* @__PURE__ */ ce(() => u().some((E) => E.filter));
  e.store.store.subscribe((E) => {
    d([...E]), y();
  });
  function y() {
    let E = d().filter((x) => u().every((T) => {
      const S = h[T.field], L = T.filterValueGetter ? T.filterValueGetter(x) : x[T.field];
      return S ? T.filterType === "number" ? L == S : L.toString().toLowerCase().includes(S.toLowerCase()) : !0;
    }));
    E = A(E), g.set(E);
  }
  function A(E) {
    let x, T;
    return p.subscribe((S) => x = S), _.subscribe((S) => T = S), !x || !T ? E : E.sort((S, L) => {
      let q = S[x], k = L[x];
      return q == null && (q = ""), k == null && (k = ""), T === "asc" ? q.toString().localeCompare(k.toString()) : k.toString().localeCompare(q.toString());
    });
  }
  function C(E) {
    p.update((x) => {
      if (x === E)
        _.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return _.set("asc"), E;
      return E;
    }), y();
  }
  g.set(d()), vI(t, {
    get "table$aria-label"() {
      return o();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (x) => {
      RI(x, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(T) {
          c(T);
        }
      });
    },
    children: (x, T) => {
      var S = Dl(), L = re(S);
      bI(L, {
        children: (k, Y) => {
          var O = Dl(), w = re(O);
          ys(w, {
            class: "header-title-row",
            children: (B, K) => {
              var H = me(), F = re(H);
              Gn(F, 17, u, Fi, (U, ne) => {
                Ra(U, {
                  onclick: () => s(ne).sortable && C(s(ne).field),
                  get style() {
                    return s(ne).headerStyle;
                  },
                  children: (ye, G) => {
                    var z = HE(), $ = Se(z), ee = Se($), V = zn(ee, !0), ie = be(ee, 2);
                    {
                      var we = (J) => {
                        var ae = me(), Ue = re(ae);
                        {
                          var Oe = (Ve) => {
                            var ke = me(), Re = re(ke);
                            {
                              var P = (se) => {
                                var Le = DE();
                                R(se, Le);
                              }, Z = (se) => {
                                var Le = PE();
                                R(se, Le);
                              };
                              Ie(Re, (se) => {
                                r() === "asc" ? se(P) : r() === "desc" && se(Z, 1);
                              });
                            }
                            R(Ve, ke);
                          };
                          Ie(Ue, (Ve) => {
                            n() === s(ne).field && r() !== null && Ve(Oe);
                          });
                        }
                        R(J, ae);
                      };
                      Ie(ie, (J) => {
                        s(ne).sortable && J(we);
                      });
                    }
                    Ne(() => {
                      Ut(z, `min-width: ${s(ne).minWidth ?? 0 ?? ""}`), ut(V, s(ne).headerName);
                    }), R(ye, z);
                  },
                  $$slots: { default: !0 }
                });
              }), R(B, H);
            },
            $$slots: { default: !0 }
          });
          var N = be(w, 2);
          {
            var W = (B) => {
              ys(B, {
                class: "header-filter-row",
                children: (K, H) => {
                  var F = me(), U = re(F);
                  Gn(U, 17, u, Fi, (ne, ye) => {
                    Ra(ne, {
                      children: (G, z) => {
                        var $ = me(), ee = re($);
                        {
                          var V = (ie) => {
                            var we = Dl(), J = re(we);
                            {
                              var ae = (Ve) => {
                                var ke = UE();
                                Ne(() => Lr(ke, "placeholder", `${f()} ${s(ye).headerName}`)), Rn("input", ke, () => y()), Xa(ke, () => h[s(ye).field], (Re) => h[s(ye).field] = Re), R(Ve, ke);
                              };
                              Ie(J, (Ve) => {
                                s(ye).filterType === "text" && Ve(ae);
                              });
                            }
                            var Ue = be(J, 2);
                            {
                              var Oe = (Ve) => {
                                var ke = kE();
                                Ne(() => Lr(ke, "placeholder", `${f()} ${s(ye).headerName}`)), Rn("input", ke, () => y()), Xa(ke, () => h[s(ye).field], (Re) => h[s(ye).field] = Re), R(Ve, ke);
                              };
                              Ie(Ue, (Ve) => {
                                s(ye).filterType === "number" && Ve(Oe);
                              });
                            }
                            R(ie, we);
                          };
                          Ie(ee, (ie) => {
                            s(ye).filter && ie(V);
                          });
                        }
                        R(G, $);
                      },
                      $$slots: { default: !0 }
                    });
                  }), R(K, F);
                },
                $$slots: { default: !0 }
              });
            };
            Ie(N, (B) => {
              s(I) && B(W);
            });
          }
          R(k, O);
        },
        $$slots: { default: !0 }
      });
      var q = be(L, 2);
      II(q, {
        children: (k, Y) => {
          var O = me(), w = re(O);
          {
            var N = (B) => {
              ys(B, {
                children: (K, H) => {
                  Ra(K, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (F, U) => {
                      var ne = Dt();
                      Ne(() => ut(ne, v())), R(F, ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, W = (B) => {
              var K = me(), H = re(K);
              Gn(H, 1, i, Fi, (F, U) => {
                ys(F, {
                  children: (ne, ye) => {
                    var G = me(), z = re(G);
                    Gn(z, 17, u, ($) => $.field, ($, ee) => {
                      var V = me(), ie = re(V);
                      {
                        var we = (ae) => {
                          Ra(ae, {
                            children: (Ue, Oe) => {
                              var Ve = BE();
                              Gn(Ve, 21, m, Fi, (ke, Re) => {
                                var P = me(), Z = re(P);
                                {
                                  var se = (je) => {
                                    Xs(je, {
                                      get content() {
                                        return s(Re).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (Et, Dn) => {
                                        {
                                          let fe = /* @__PURE__ */ ce(() => s(Re).disabled(s(U)));
                                          up(Et, {
                                            get iconComponent() {
                                              return s(Re).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Re).iconStyles;
                                            },
                                            callback: () => s(Re).callback(s(U)),
                                            get disabled() {
                                              return s(fe);
                                            },
                                            get ariaLabel() {
                                              return s(Re).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Le = (je) => {
                                    Xs(je, {
                                      get content() {
                                        return s(Re).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (Et, Dn) => {
                                        {
                                          let fe = /* @__PURE__ */ ce(() => s(Re).disabled(s(U)));
                                          ip(Et, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Re).callback(s(U)),
                                            get disabled() {
                                              return s(fe);
                                            },
                                            get ariaLabel() {
                                              return s(Re).ariaLabel;
                                            },
                                            children: (pe, Q) => {
                                              var te = me(), Be = re(te);
                                              {
                                                var vt = (nt) => {
                                                  F_(nt, { svgStyles: "margin: unset" });
                                                }, It = (nt) => {
                                                  Df(nt, { svgStyles: "margin: unset" });
                                                }, Pt = (nt) => {
                                                  j_(nt, { svgStyles: "margin: unset" });
                                                }, qt = (nt) => {
                                                  q_(nt, { svgStyles: "margin: unset" });
                                                }, Ur = (nt) => {
                                                  X_(nt, { svgStyles: "margin: unset" });
                                                }, bt = (nt) => {
                                                  Q_(nt, { svgStyles: "margin: unset" });
                                                }, Ht = (nt) => {
                                                  $_(nt, { svgStyles: "margin: unset" });
                                                }, Kt = (nt) => {
                                                  aI(nt, { svgStyles: "margin: unset" });
                                                }, Qn = (nt) => {
                                                  z_(nt, { svgStyles: "margin: unset" });
                                                };
                                                Ie(Be, (nt) => {
                                                  s(Re).icon === "add" ? nt(vt) : s(Re).icon === "cancel" ? nt(It, 1) : s(Re).icon === "download" ? nt(Pt, 2) : s(Re).icon === "find-in-page" ? nt(qt, 3) : s(Re).icon === "remove" ? nt(Ur, 4) : s(Re).icon === "edit" ? nt(bt, 5) : s(Re).icon === "delete" ? nt(Ht, 6) : s(Re).icon === "archive" ? nt(Kt, 7) : nt(Qn, -1);
                                                });
                                              }
                                              R(pe, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  Ie(Z, (je) => {
                                    s(Re).iconComponent ? je(se) : je(Le, -1);
                                  });
                                }
                                R(ke, P);
                              }), R(Ue, Ve);
                            },
                            $$slots: { default: !0 }
                          });
                        }, J = (ae) => {
                          Ra(ae, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Ue, Oe) => {
                              var Ve = me(), ke = re(Ve);
                              {
                                var Re = (se) => {
                                  const Le = /* @__PURE__ */ ce(() => s(ee).cellRenderer);
                                  var je = me(), Et = re(je);
                                  Pr(Et, () => s(Le), (Dn, fe) => {
                                    fe(Dn, it(
                                      {
                                        get row() {
                                          return s(U);
                                        },
                                        get value() {
                                          return s(U)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), R(se, je);
                                }, P = (se) => {
                                  var Le = Dt();
                                  Ne((je) => ut(Le, je), [
                                    () => s(ee).valueFormatter(s(U)[s(ee).field])
                                  ]), R(se, Le);
                                }, Z = (se) => {
                                  var Le = Dt();
                                  Ne(() => ut(Le, s(U)[s(ee).field] ?? "")), R(se, Le);
                                };
                                Ie(ke, (se) => {
                                  s(ee).cellRenderer ? se(Re) : s(ee).valueFormatter ? se(P, 1) : se(Z, -1);
                                });
                              }
                              R(Ue, Ve);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        Ie(ie, (ae) => {
                          s(ee).field === "actions" ? ae(we) : ae(J, -1);
                        });
                      }
                      R($, V);
                    }), R(ne, G);
                  },
                  $$slots: { default: !0 }
                });
              }), R(B, K);
            };
            Ie(w, (B) => {
              i().length === 0 ? B(N) : B(W, -1);
            });
          }
          R(k, O);
        },
        $$slots: { default: !0 }
      }), R(x, S);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), l();
}
dn(["input"]);
function yt(t) {
  return typeof t == "function";
}
function ec(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Pl = ec(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Js(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var fs = function() {
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
            for (var c = sa(l), o = c.next(); !o.done; o = c.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              o && !o.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          l.remove(this);
      var d = this.initialTeardown;
      if (yt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Pl ? g.errors : [g];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = sa(m), v = f.next(); !v.done; v = f.next()) {
            var h = v.value;
            try {
              Lu(h);
            } catch (g) {
              a = a ?? [], g instanceof Pl ? a = Rr(Rr([], la(a)), la(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Pl(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Lu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Js(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Js(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Uf = fs.EMPTY;
function kf(t) {
  return t instanceof fs || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function Lu(t) {
  yt(t) ? t() : t.unsubscribe();
}
var VE = {
  Promise: void 0
}, GE = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Rr([t, e], la(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Bf(t) {
  GE.setTimeout(function() {
    throw t;
  });
}
function Ru() {
}
function Ds(t) {
  t();
}
var tc = function(t) {
  Mn(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, kf(n) && n.add(r)) : r.destination = qE, r;
  }
  return e.create = function(n, r, i) {
    return new vo(n, r, i);
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
}(fs), jE = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        xs(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        xs(r);
      }
    else
      xs(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        xs(n);
      }
  }, t;
}(), vo = function(t) {
  Mn(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, l;
    return yt(n) || !n ? l = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : l = n, a.destination = new jE(l), a;
  }
  return e;
}(tc);
function xs(t) {
  Bf(t);
}
function WE(t) {
  throw t;
}
var qE = {
  closed: !0,
  next: Ru,
  error: WE,
  complete: Ru
}, nc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function dl(t) {
  return t;
}
function KE(t) {
  return t.length === 0 ? dl : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Nn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = YE(e) ? e : new vo(e, n, r);
    return Ds(function() {
      var l = i, c = l.operator, o = l.source;
      a.add(c ? c.call(a, o) : o ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Nu(n), new n(function(i, a) {
      var l = new vo({
        next: function(c) {
          try {
            e(c);
          } catch (o) {
            a(o), l.unsubscribe();
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
  }, t.prototype[nc] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return KE(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Nu(e), new e(function(r, i) {
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
function Nu(t) {
  var e;
  return (e = t ?? VE.Promise) !== null && e !== void 0 ? e : Promise;
}
function zE(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function YE(t) {
  return t && t instanceof tc || zE(t) && kf(t);
}
function XE(t) {
  return yt(t == null ? void 0 : t.lift);
}
function vr(t) {
  return function(e) {
    if (XE(e))
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
function Mr(t, e, n, r, i) {
  return new ZE(t, e, n, r, i);
}
var ZE = function(t) {
  Mn(e, t);
  function e(n, r, i, a, l, c) {
    var o = t.call(this, n) || this;
    return o.onFinalize = l, o.shouldUnsubscribe = c, o._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, o._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, o._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, o;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(tc), QE = ec(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), mo = function(t) {
  Mn(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Mu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new QE();
  }, e.prototype.next = function(n) {
    var r = this;
    Ds(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var l = sa(r.currentObservers), c = l.next(); !c.done; c = l.next()) {
            var o = c.value;
            o.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            c && !c.done && (a = l.return) && a.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Ds(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Ds(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, a = i.hasError, l = i.isStopped, c = i.observers;
    return a || l ? Uf : (this.currentObservers = null, c.push(n), new fs(function() {
      r.currentObservers = null, Js(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, l = r.isStopped;
    i ? n.error(a) : l && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new Nn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Mu(n, r);
  }, e;
}(Nn), Mu = function(t) {
  Mn(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Uf;
  }, e;
}(mo), JE = {
  now: function() {
    return Date.now();
  }
}, $E = function(t) {
  Mn(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(fs), Du = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Rr([t, e], la(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, e0 = function(t) {
  Mn(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, l = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(l, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(l, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), Du.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Du.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, a;
    try {
      this.work(n);
    } catch (l) {
      i = !0, a = l || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Js(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}($E), Pu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = JE.now, t;
}(), t0 = function(t) {
  Mn(e, t);
  function e(n, r) {
    r === void 0 && (r = Pu.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(Pu), n0 = new t0(e0);
function r0(t) {
  return t && yt(t.schedule);
}
function Ff(t) {
  return t[t.length - 1];
}
function Vf(t) {
  return r0(Ff(t)) ? t.pop() : void 0;
}
function i0(t, e) {
  return typeof Ff(t) == "number" ? t.pop() : e;
}
var Gf = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function jf(t) {
  return yt(t == null ? void 0 : t.then);
}
function Wf(t) {
  return yt(t[nc]);
}
function qf(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Kf(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function a0() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var zf = a0();
function Yf(t) {
  return yt(t == null ? void 0 : t[zf]);
}
function Xf(t) {
  return xm(this, arguments, function() {
    var n, r, i, a;
    return tf(this, function(l) {
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
function Zf(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function pa(t) {
  if (t instanceof Nn)
    return t;
  if (t != null) {
    if (Wf(t))
      return s0(t);
    if (Gf(t))
      return l0(t);
    if (jf(t))
      return o0(t);
    if (qf(t))
      return Qf(t);
    if (Yf(t))
      return c0(t);
    if (Zf(t))
      return u0(t);
  }
  throw Kf(t);
}
function s0(t) {
  return new Nn(function(e) {
    var n = t[nc]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function l0(t) {
  return new Nn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function o0(t) {
  return new Nn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Bf);
  });
}
function c0(t) {
  return new Nn(function(e) {
    var n, r;
    try {
      for (var i = sa(t), a = i.next(); !a.done; a = i.next()) {
        var l = a.value;
        if (e.next(l), e.closed)
          return;
      }
    } catch (c) {
      n = { error: c };
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
function Qf(t) {
  return new Nn(function(e) {
    d0(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function u0(t) {
  return Qf(Xf(t));
}
function d0(t, e) {
  var n, r, i, a;
  return Cm(this, void 0, void 0, function() {
    var l, c;
    return tf(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), n = wm(t), o.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = o.sent(), !!r.done) return [3, 4];
          if (l = r.value, e.next(l), e.closed)
            return [2];
          o.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = o.sent(), i = { error: c }, [3, 11];
        case 6:
          return o.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          o.sent(), o.label = 8;
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
function Jf(t, e) {
  return e === void 0 && (e = 0), vr(function(n, r) {
    n.subscribe(Mr(r, function(i) {
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
function $f(t, e) {
  return e === void 0 && (e = 0), vr(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function f0(t, e) {
  return pa(t).pipe($f(e), Jf(e));
}
function h0(t, e) {
  return pa(t).pipe($f(e), Jf(e));
}
function v0(t, e) {
  return new Nn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function m0(t, e) {
  return new Nn(function(n) {
    var r;
    return Si(n, e, function() {
      r = t[zf](), Si(n, e, function() {
        var i, a, l;
        try {
          i = r.next(), a = i.value, l = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        l ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return yt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function eh(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Nn(function(n) {
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
function g0(t, e) {
  return eh(Xf(t), e);
}
function b0(t, e) {
  if (t != null) {
    if (Wf(t))
      return f0(t, e);
    if (Gf(t))
      return v0(t, e);
    if (jf(t))
      return h0(t, e);
    if (qf(t))
      return eh(t, e);
    if (Yf(t))
      return m0(t, e);
    if (Zf(t))
      return g0(t, e);
  }
  throw Kf(t);
}
function th(t, e) {
  return e ? b0(t, e) : pa(t);
}
function nh() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Vf(t);
  return th(t, n);
}
function tn(t, e) {
  return vr(function(n, r) {
    var i = 0;
    n.subscribe(Mr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function p0(t, e, n, r, i, a, l, c) {
  var o = [], u = 0, d = 0, m = !1, f = function() {
    m && !o.length && !u && e.complete();
  }, v = function(g) {
    return u < r ? h(g) : o.push(g);
  }, h = function(g) {
    u++;
    var p = !1;
    pa(n(g, d++)).subscribe(Mr(e, function(_) {
      e.next(_);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var _ = function() {
            var I = o.shift();
            l || h(I);
          }; o.length && u < r; )
            _();
          f();
        } catch (I) {
          e.error(I);
        }
    }));
  };
  return t.subscribe(Mr(e, v, function() {
    m = !0, f();
  })), function() {
  };
}
function $s(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? $s(function(r, i) {
    return tn(function(a, l) {
      return e(r, a, i, l);
    })(pa(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), vr(function(r, i) {
    return p0(r, i, t, n);
  }));
}
function _0(t) {
  return t === void 0 && (t = 1 / 0), $s(dl, t);
}
function rh(t, e) {
  return yt(e) ? $s(t, e, 1) : $s(t, 1);
}
function I0(t, e) {
  return e === void 0 && (e = n0), vr(function(n, r) {
    var i = null, a = null, l = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function o() {
      var u = l + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(Mr(r, function(u) {
      a = u, l = e.now(), i || (i = e.schedule(o, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function E0(t, e) {
  return e === void 0 && (e = dl), t = t ?? S0, vr(function(n, r) {
    var i, a = !0;
    n.subscribe(Mr(r, function(l) {
      var c = e(l);
      (a || !t(i, c)) && (a = !1, i = c, r.next(l));
    }));
  });
}
function S0(t, e) {
  return t === e;
}
function A0(t) {
  return vr(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function y0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Vf(t), r = i0(t, 1 / 0);
  return vr(function(i, a) {
    _0(r)(th(Rr([i], la(t)), n)).subscribe(a);
  });
}
function T0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return y0.apply(void 0, Rr([], la(t)));
}
function C0(t, e) {
  return vr(function(n, r) {
    var i = null, a = 0, l = !1, c = function() {
      return l && !i && r.complete();
    };
    n.subscribe(Mr(r, function(o) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      pa(t(o, d)).subscribe(i = Mr(r, function(m) {
        return r.next(e ? e(o, m, d, u++) : m);
      }, function() {
        i = null, c();
      }));
    }, function() {
      l = !0, c();
    }));
  });
}
function Hu(t, e, n) {
  var r = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? vr(function(i, a) {
    var l;
    (l = r.subscribe) === null || l === void 0 || l.call(r);
    var c = !0;
    i.subscribe(Mr(a, function(o) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, o), a.next(o);
    }, function() {
      var o;
      c = !1, (o = r.complete) === null || o === void 0 || o.call(r), a.complete();
    }, function(o) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, o), a.error(o);
    }, function() {
      var o, u;
      c && ((o = r.unsubscribe) === null || o === void 0 || o.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : dl;
}
function ih(t) {
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
var x0 = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, l = n.responseType;
    this.status = a ?? 0, this.responseType = l ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = ih(n);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return t;
}(), el = ec(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = ih(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), w0 = function() {
  function t(e, n) {
    return el.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(el.prototype), t;
}();
function O0(t, e) {
  return ri({ method: "GET", url: t, headers: e });
}
function L0(t, e, n) {
  return ri({ method: "POST", url: t, body: e, headers: n });
}
function R0(t, e) {
  return ri({ method: "DELETE", url: t, headers: e });
}
function N0(t, e, n) {
  return ri({ method: "PUT", url: t, body: e, headers: n });
}
function M0(t, e, n) {
  return ri({ method: "PATCH", url: t, body: e, headers: n });
}
var D0 = tn(function(t) {
  return t.response;
});
function P0(t, e) {
  return D0(ri({
    method: "GET",
    url: t,
    headers: e
  }));
}
var ri = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return U0(n);
  };
  return t.get = O0, t.post = L0, t.delete = R0, t.put = N0, t.patch = M0, t.getJSON = P0, t;
}(), H0 = "upload", Uu = "download", Hl = "loadstart", Ul = "progress", ku = "load";
function U0(t) {
  return new Nn(function(e) {
    var n, r, i = Qe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, l = i.body, c = i.headers, o = i.url;
    if (!o)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (o.includes("?")) {
        var d = o.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(W, B) {
          return u.set(B, W);
        }), o = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), o = o + "?" + u;
    }
    var m = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (m[f.toLowerCase()] = c[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in m) && (m["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, g = i.xsrfCookieName, p = i.xsrfHeaderName;
    if ((h || !v) && g && p) {
      var _ = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      _ && (m[p] = _);
    }
    var I = k0(l, m), y = Qe(Qe({}, i), {
      url: o,
      headers: m,
      body: I
    }), A;
    A = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var C = t.progressSubscriber, E = t.includeDownloadProgress, x = E === void 0 ? !1 : E, T = t.includeUploadProgress, S = T === void 0 ? !1 : T, L = function(W, B) {
        A.addEventListener(W, function() {
          var K, H = B();
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, H), e.error(H);
        });
      };
      L("timeout", function() {
        return new w0(A, y);
      }), L("abort", function() {
        return new el("aborted", A, y);
      });
      var q = function(W, B) {
        return new x0(B, A, y, W + "_" + B.type);
      }, k = function(W, B, K) {
        W.addEventListener(B, function(H) {
          e.next(q(K, H));
        });
      };
      S && [Hl, Ul, ku].forEach(function(W) {
        return k(A.upload, W, H0);
      }), C && [Hl, Ul].forEach(function(W) {
        return A.upload.addEventListener(W, function(B) {
          var K;
          return (K = C == null ? void 0 : C.next) === null || K === void 0 ? void 0 : K.call(C, B);
        });
      }), x && [Hl, Ul].forEach(function(W) {
        return k(A, W, Uu);
      });
      var Y = function(W) {
        var B = "ajax error" + (W ? " " + W : "");
        e.error(new el(B, A, y));
      };
      A.addEventListener("error", function(W) {
        var B;
        (B = C == null ? void 0 : C.error) === null || B === void 0 || B.call(C, W), Y();
      }), A.addEventListener(ku, function(W) {
        var B, K, H = A.status;
        if (H < 400) {
          (B = C == null ? void 0 : C.complete) === null || B === void 0 || B.call(C);
          var F = void 0;
          try {
            F = q(Uu, W);
          } catch (U) {
            e.error(U);
            return;
          }
          e.next(F), e.complete();
        } else
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, W), Y(H);
      });
    }
    var O = y.user, w = y.method, N = y.async;
    O ? A.open(w, o, N, O, y.password) : A.open(w, o, N), N && (A.timeout = y.timeout, A.responseType = y.responseType), "withCredentials" in A && (A.withCredentials = y.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && A.setRequestHeader(f, m[f]);
    return I ? A.send(I) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function k0(t, e) {
  var n;
  if (!t || typeof t == "string" || W0(t) || q0(t) || F0(t) || V0(t) || G0(t) || K0(t))
    return t;
  if (j0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var B0 = Object.prototype.toString;
function rc(t, e) {
  return B0.call(t) === "[object " + e + "]";
}
function F0(t) {
  return rc(t, "ArrayBuffer");
}
function V0(t) {
  return rc(t, "File");
}
function G0(t) {
  return rc(t, "Blob");
}
function j0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function W0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function q0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function K0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let z0 = class {
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
const Y0 = new z0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), X0 = [Y0], Z0 = X0[0].getUrl();
let ah = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Z0;
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
}, Q0 = class {
  constructor(e = new ah()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: l, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${J0(r)}` : ""}`,
      method: i,
      headers: a,
      body: l instanceof FormData ? l : JSON.stringify(l),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => nh(n).pipe(
      tn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      rh(
        (r) => ri(r).pipe(
          tn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      tn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const Or = (t) => encodeURIComponent(`${t}`), J0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Or(e)}=${Or(r)}`).join("&") : `${Or(e)}=${Or(n)}`
).join("&"), Ui = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class $0 extends Q0 {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ui(e, "id", "deleteAllSclFileVersions"), Ui(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", Or(e)).replace("{type}", Or(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ui(e, "id", "retrieveDataResourceByVersion"), Ui(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Or(e)).replace("{version}", Or(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ui(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Or(e)),
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
class ic {
  constructor(e, n, r, i, a, l, c, o, u) {
    ze(this, "uuid");
    ze(this, "name");
    ze(this, "author");
    ze(this, "type");
    ze(this, "changedAt");
    ze(this, "version");
    ze(this, "available");
    ze(this, "deleted");
    ze(this, "location");
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = l, this.available = c, this.deleted = o, this.location = u;
  }
  static from(e) {
    return new ic(
      e.uuid,
      e.name,
      e.author,
      e.type,
      e.changedAt,
      e.version,
      e.available,
      e.deleted,
      e.location
    );
  }
}
class eS {
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
const tS = new eS("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), nS = [tS], rS = nS[0].getUrl();
class sh {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? rS;
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
class iS {
  constructor(e = new sh()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: l, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${aS(r)}` : ""}`,
      method: i,
      headers: a,
      body: l instanceof FormData ? l : JSON.stringify(l),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => nh(n).pipe(
      tn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      rh(
        (r) => ri(r).pipe(
          tn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      tn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Fn = (t) => encodeURIComponent(`${t}`), aS = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Fn(e)}=${Fn(r)}`).join("&") : `${Fn(e)}=${Fn(n)}`
).join("&"), Sr = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class sS extends iS {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    Sr(e, "locationId", "assignResourceToLocation"), Sr(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Fn(e)).replace("{uuid}", Fn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    Sr(e, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: e }, n) {
    Sr(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Fn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    Sr(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Fn(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, r) {
    const i = {}, a = {};
    return e != null && (a.page = e), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, r) {
    Sr(e, "locationId", "unassignResourceFromLocation"), Sr(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Fn(e)).replace("{uuid}", Fn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    Sr(e, "locationId", "updateLocation"), Sr(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Fn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ac {
  constructor(e, n, r, i, a) {
    ze(this, "uuid");
    ze(this, "key");
    ze(this, "name");
    ze(this, "description");
    ze(this, "assignedResources");
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new ac(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
const di = class di {
  constructor() {
    ze(this, "endpoint", "/compas-scl-data-service");
    ze(this, "locationsApiClient");
    ze(this, "historyApiClient");
    this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return di.instance || (di.instance = new di()), di.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      tn((n) => n || []),
      tn((n) => n.map((r) => ac.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(tn(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(tn(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      tn((n) => n.results),
      tn(
        (n) => n.map((r) => ic.from(r))
      )
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.name || null,
      author: e.author || null,
      location: e.location || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  createLocationsApiClient(e) {
    const n = new sh({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new sS(n);
  }
  createHistoryApiClient(e) {
    const n = new ah({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new $0(n);
  }
};
ze(di, "instance");
let go = di;
var xr;
class lS {
  constructor() {
    We(this, xr, rn([]));
  }
  get store() {
    return D(this, xr);
  }
  set(e) {
    D(this, xr).set(e);
  }
  update(e) {
    D(this, xr).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    D(this, xr).update((n) => [...n, e]);
  }
  remove(e) {
    D(this, xr).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return $d(D(this, xr)).find((n) => n.uuid === e);
  }
}
xr = new WeakMap();
var oS = /* @__PURE__ */ ge("<option> </option>"), cS = /* @__PURE__ */ ge(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function uS(t, e) {
  Ce(e, !0);
  let n = b(e, "locations", 19, () => []), r = /* @__PURE__ */ de(oe(e.value ?? ""));
  Ae(() => {
    j(r, e.value ?? "", !0);
  }), Ae(() => {
    var o;
    s(r) !== (e.value ?? "") && ((o = e.onChange) == null || o.call(e, e.row, s(r)));
  });
  var i = cS(), a = Se(i), l = Se(a);
  l.value = l.__value = "";
  var c = be(l);
  Gn(c, 17, n, (o) => o.value, (o, u) => {
    var d = oS(), m = zn(d, !0), f = {};
    Ne(() => {
      ut(m, s(u).label), f !== (f = s(u).value) && (d.value = (d.__value = f) ?? "");
    }), R(o, d);
  }), zd(a), Rn("change", a, () => {
    var o;
    return (o = e.onChange) == null ? void 0 : o.call(e, e.row, s(r));
  }), Zv(a, () => s(r), (o) => j(r, o)), R(t, i), xe();
}
dn(["change"]);
rb({ en: Mb, de: pb });
var dS = /* @__PURE__ */ ge('<div class="app-container svelte-1lw4l1e"><!> <!></div> <!>', 1);
function fS(t, e) {
  Ce(e, !0);
  const n = () => cr(nb, "$_", r), [r, i] = Hr(), a = go.getInstance();
  let l = /* @__PURE__ */ de(oe([])), c = "", o = /* @__PURE__ */ de(!0), u = /* @__PURE__ */ de("");
  const d = new mo(), f = new mo().pipe(T0(d.pipe(I0(200)))).pipe(
    tn(() => _(s(v))),
    E0((S, L) => JSON.stringify(S) === JSON.stringify(L)),
    Hu(() => {
      j(o, !0);
    }),
    C0((S) => a.searchResources(S).pipe(
      Hu((L) => {
        h.set(L.filter((q) => q.location !== c && q.deleted === !1));
      }),
      A0(() => {
        j(o, !1);
      })
    ))
  );
  at(() => {
    const S = f.subscribe();
    return a.getLocations().subscribe({
      next: (L) => {
        j(l, L.map((q) => ({ label: q.name, value: q.uuid })), !0), j(v, s(
          v
          // populate location filter options
        ).map((q) => q.key === "location" ? { ...q, options: s(l) } : q), !0);
      },
      error: (L) => {
        console.error("Error loading locations:", L), qa.error("Failed to load locations.");
      }
    }), d.next(), () => S.unsubscribe();
  });
  let v = /* @__PURE__ */ de(oe([
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
    { key: "to", label: "Date to", type: "date" },
    { key: "location", label: "Location", type: "select" }
  ]));
  const h = new lS();
  function g(S) {
    return new Date(S).toLocaleDateString();
  }
  function p(S) {
    var L;
    return !s(l) || !S ? S || "" : ((L = s(l).find((q) => q.value === S)) == null ? void 0 : L.label) ?? S;
  }
  function _(S) {
    const L = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return S.forEach((q) => {
      if (q.value) {
        if (q.type === "date") {
          const k = new Date(q.value);
          q.key === "from" && (L.from = k.toISOString()), q.key === "to" && (k.setHours(23, 59, 59, 999), L.to = k.toISOString());
          return;
        }
        q.key in L && (L[q.key] = q.value);
      }
    }), s(u) && s(u).trim() !== "" && (L.name = s(u).trim()), L;
  }
  function I(S, L) {
    const q = S.location, k = L || null;
    if (q === k)
      return;
    const Y = { ...S, location: k };
    h.update(Y), (k ? a.assignResourceToLocation(k, S.uuid) : a.unassignResourceFromLocation(q ?? "", S.uuid)).subscribe({
      next: () => {
        d.next(), qa.success("Resource location updated successfully.");
      },
      error: () => {
        qa.error("Failed to update resource location.");
        const w = { ...S, location: q };
        h.update(w);
      }
    });
  }
  let y = /* @__PURE__ */ ce(() => [
    {
      headerName: n()("name"),
      field: "name",
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
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("location"),
      field: "location",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      cellRenderer: uS,
      cellRendererProps: {
        locations: s(l),
        onChange: I
      },
      filterValueGetter: (S) => p(S.location)
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: g
    }
  ]);
  Ae(() => {
  });
  var A = dS(), C = re(A), E = Se(C);
  ME(E, {
    searchLabel: "Search name...",
    onFilterChange: () => d.next(null),
    onSearchInput: () => d.next(null),
    get filters() {
      return s(v);
    },
    set filters(S) {
      j(v, S, !0);
    },
    get searchText() {
      return s(u);
    },
    set searchText(S) {
      j(u, S, !0);
    }
  });
  var x = be(E, 2);
  {
    let S = /* @__PURE__ */ ce(() => !s(o)), L = /* @__PURE__ */ ce(() => n()("search"));
    FE(x, {
      get columnDefs() {
        return s(y);
      },
      get loadingDone() {
        return s(S);
      },
      get store() {
        return h;
      },
      get searchInputLabel() {
        return s(L);
      }
    });
  }
  var T = be(C, 2);
  ZI(T, {}), R(t, A), xe(), i();
}
const lh = "location-viewer", oh = "0.0.1";
var hS = /* @__PURE__ */ ge('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function vS(t, e) {
  Ce(e, !0);
  let n = b(e, "dev", 3, !1);
  var r = hS(), i = re(r);
  {
    var a = (o) => {
      fS(o, {});
    };
    Ie(i, (o) => {
      (e.doc || n()) && o(a);
    });
  }
  var l = be(i, 2), c = be(l, 2);
  Ne(() => {
    Tc(l, lh), Tc(c, oh);
  }), R(t, r), xe();
}
var Ji;
class SS extends HTMLElement {
  constructor() {
    super();
    We(this, Ji);
    ze(this, "_doc");
    ze(this, "_editCount");
    Ge(this, Ji, /* @__PURE__ */ de(oe({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(D(this, Ji));
  }
  set props(n) {
    j(D(this, Ji), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = mS();
    this.shadowRoot.appendChild(n);
    const r = () => Dv(vS, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Ji = new WeakMap();
function mS() {
  const t = `${lh}-v${oh}-style`, e = gS(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function gS() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  SS as default
};
