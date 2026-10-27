var xh = Object.defineProperty;
var fc = (t) => {
  throw TypeError(t);
};
var wh = (t, e, n) => e in t ? xh(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pt = (t, e, n) => wh(t, typeof e != "symbol" ? e + "" : e, n), pl = (t, e, n) => e.has(t) || fc("Cannot " + n);
var B = (t, e, n) => (pl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ke = (t, e, n) => e.has(t) ? fc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ge = (t, e, n, r) => (pl(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), De = (t, e, n) => (pl(t, e, "access private method"), n);
const $u = {}, Ct = Symbol("uninitialized"), ed = "http://www.w3.org/1999/xhtml", Oh = "http://www.w3.org/2000/svg", Rh = "@attach", td = !1;
var ll = Array.isArray, Lh = Array.prototype.indexOf, ja = Array.prototype.includes, ol = Array.from, Ao = Object.defineProperty, zr = Object.getOwnPropertyDescriptor, nd = Object.getOwnPropertyDescriptors, Nh = Object.prototype, Mh = Array.prototype, yo = Object.getPrototypeOf, hc = Object.isExtensible;
function Ui(t) {
  return typeof t == "function";
}
const he = () => {
};
function Dh(t) {
  return t();
}
function Hs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function rd() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const Jt = 2, Qi = 4, ns = 8, To = 1 << 24, Mn = 16, Yn = 32, Qr = 64, jl = 128, Co = 256, Xn = 512, Mt = 1024, mt = 2048, An = 4096, nn = 8192, jt = 16384, Ti = 32768, Wa = 1 << 25, hr = 65536, Us = 1 << 17, Ph = 1 << 18, ua = 1 << 19, id = 1 << 20, lr = 1 << 25, ks = 1 << 21, Vi = 1 << 22, Xr = 1 << 23, or = Symbol("$state"), ad = Symbol("component"), sd = Symbol("legacy props"), Hh = Symbol(""), Os = Symbol("attributes"), Wl = Symbol("class"), ql = Symbol("style"), La = Symbol("text"), Rs = Symbol("form reset"), rs = new class extends Error {
  constructor() {
    super(...arguments);
    pt(this, "name", "StaleReactionError");
    pt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Zu;
const cl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Zu = globalThis.document) != null && Zu.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Uh() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function kh() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Bh() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Fh = !1;
function ld(t) {
  return t === this.v;
}
function xo(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function od(t) {
  return !xo(t, this.v);
}
function wo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Vh() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Gh(t, e, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function jh(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wh() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qh(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kh() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zh(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xh() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yh() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zh() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qh() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let da = !1, Jh = !1;
function $h() {
  da = !0;
}
function ev(t) {
  let e = t.p;
  for (; e !== null && e.c === null; )
    e = e.p;
  return (e == null ? void 0 : e.c) ?? null;
}
function cd(t, e) {
  return t === null && wo(), t.c ?? (t.c = new Map(ev(t) || void 0));
}
let ut = null;
function Ji(t) {
  ut = t;
}
function ue(t) {
  return (
    /** @type {T} */
    cd(ut).get(t)
  );
}
function le(t, e) {
  return cd(ut).set(t, e), e;
}
function ye(t, e = !1, n) {
  ut = {
    p: ut,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      qe
    ),
    l: da && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    ut
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Pd(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, ut = e.p, Oo(t);
}
function Oo(t = {}) {
  return Ao(t, ad, { value: !0 }), t;
}
function is() {
  return !da || ut !== null && ut.l === null;
}
let di = [];
function ud() {
  var t = di;
  di = [], Hs(t);
}
function Dn(t) {
  if (di.length === 0 && !Ba) {
    var e = di;
    queueMicrotask(() => {
      e === di && ud();
    });
  }
  di.push(t);
}
function tv() {
  for (; di.length > 0; )
    ud();
}
const nv = -7169;
function yt(t, e) {
  t.f = t.f & nv | e;
}
function Ro(t) {
  t.f & Xn || t.deps === null ? yt(t, Mt) : yt(t, An);
}
function dd(t, e) {
  t.f & mt ? e.set(t, mt) : t.f & An && e.get(t) !== mt && e.set(t, An), yt(t, Mt);
}
function rv(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Dn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let vc = !1;
function iv() {
  vc || (vc = !0, document.addEventListener(
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
            (e = n[Rs]) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Jr(t) {
  var e = We, n = qe;
  Hn(null), vr(null);
  try {
    return t();
  } finally {
    Hn(e), vr(n);
  }
}
function fd(t, e, n, r = n) {
  t.addEventListener(e, () => Jr(n));
  const i = (
    /** @type {any} */
    t[Rs]
  );
  i ? t[Rs] = () => {
    i(), r(!0);
  } : t[Rs] = () => r(!0), iv();
}
function hd(t, e, n, r) {
  const i = is() ? $i : Lo;
  var a = t.filter((v) => !v.settled), s = e.map(i);
  if (n.length === 0 && a.length === 0) {
    r(s);
    return;
  }
  var o = (
    /** @type {Effect} */
    qe
  ), c = av(), u = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((v) => v.promise)) : null;
  function d(v) {
    if (!(o.f & jt)) {
      c();
      try {
        r([...s, ...v]);
      } catch (h) {
        sr(h, o);
      }
      Bs();
    }
  }
  var m = vd();
  if (n.length === 0) {
    u.then(() => d([])).finally(m);
    return;
  }
  function f() {
    Promise.all(n.map((v) => /* @__PURE__ */ sv(v))).then(d).catch((v) => sr(v, o)).finally(m);
  }
  u ? u.then(() => {
    if (o.f & jt) {
      m();
      return;
    }
    c(), f(), Bs();
  }) : f();
}
function av() {
  var t = (
    /** @type {Effect} */
    qe
  ), e = We, n = ut, r = (
    /** @type {Batch} */
    we
  );
  return function(a = !0) {
    vr(t), Hn(e), Ji(n), a && !(t.f & jt) && (r == null || r.activate(), r == null || r.apply());
  };
}
function Bs(t = !0) {
  vr(null), Hn(null), Ji(null), t && (we == null || we.deactivate());
}
function vd() {
  var t = (
    /** @type {Effect} */
    qe
  ), e = t.b, n = (
    /** @type {Batch} */
    we
  ), r = !!(e != null && e.is_rendered());
  return e == null || e.update_pending_count(1, n), n.increment(r, t), () => {
    e == null || e.update_pending_count(-1, n), n.decrement(r, t);
  };
}
// @__NO_SIDE_EFFECTS__
function $i(t) {
  var e = Jt | mt;
  return qe !== null && (qe.f |= ua), {
    ctx: ut,
    deps: null,
    effects: null,
    equals: ld,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ct
    ),
    wv: 0,
    parent: qe,
    ac: null
  };
}
const Na = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function sv(t, e, n) {
  let r = (
    /** @type {Effect | null} */
    qe
  );
  r === null && Vh();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Si(
    /** @type {V} */
    Ct
  ), s = !We, o = /* @__PURE__ */ new Set();
  return _v(() => {
    var v, h;
    var c = (
      /** @type {Effect} */
      qe
    ), u = rd();
    i = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, (g) => {
        g !== rs && u.reject(g);
      }).finally(Bs);
    } catch (g) {
      u.reject(g), Bs();
    }
    var d = (
      /** @type {Batch} */
      we
    );
    if (s) {
      if (c.f & Ti)
        var m = vd();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (v = r.b) != null && v.is_rendered()
      )
        (h = d.async_deriveds.get(c)) == null || h.reject(Na);
      else
        for (const g of o.values())
          g.reject(Na);
      o.add(u), d.async_deriveds.set(c, u);
    }
    const f = (g, p = void 0) => {
      m == null || m(), o.delete(u), p !== Na && (d.activate(), p ? (a.f |= Xr, ea(a, p)) : (a.f & Xr && (a.f ^= Xr), ea(a, g)), d.deactivate());
    };
    u.promise.then(f, (g) => f(null, g || "unknown"));
  }), ss(() => {
    for (const c of o)
      c.reject(Na);
  }), new Promise((c) => {
    function u(d) {
      function m() {
        d === i ? c(a) : u(i);
      }
      d.then(m, m);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ $i(t);
  return Gd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Lo(t) {
  const e = /* @__PURE__ */ $i(t);
  return e.equals = od, e;
}
function lv(t) {
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
function No(t) {
  var e, n = qe, r = t.parent;
  if (!Lr && r !== null && t.v !== Ct && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  r.f & (jt | nn))
    return Uh(), t.v;
  vr(r);
  try {
    lv(t), e = Kd(t);
  } finally {
    vr(n);
  }
  return e;
}
function md(t) {
  var e = No(t);
  if (!t.equals(e) && (t.wv = Wd(), (!(we != null && we.is_fork) || t.deps === null) && (we !== null ? (we.capture(t, e, !0), Yr == null || Yr.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    yt(t, Mt);
    return;
  }
  Lr || (Gt !== null ? (Po() || we != null && we.is_fork) && Gt.set(t, e) : Ro(t));
}
function ov(t) {
  var e;
  if (t.effects !== null)
    for (const n of t.effects)
      (n.teardown || n.ac) && ((e = n.teardown) == null || e.call(n), n.ac !== null && Jr(() => {
        n.ac.abort(rs), n.ac = null;
      }), n.fn !== null && (n.teardown = he), qa(n, 0), Ho(n));
}
function gd(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && e.fn !== null && ta(e);
}
let _l = null, Mi = null, we = null, Yr = null, Gt = null, Kl = null, Ba = !1, Il = !1, Fa = null, Ls = null;
var mc = 0;
let cv = 1;
var Wi, qi, Ki, Tr, zi, Cr, Ja, nr, rr, Xi, vi, Xe, zl, bd, Xl, Ma, Yl, pd, _d, Id, ki, uv, Da;
const il = class il {
  constructor() {
    Ke(this, Xe);
    pt(this, "id", cv++);
    /** True as soon as `#process` was called */
    pt(this, "started", !1);
    pt(this, "linked", !0);
    /** @type {Batch | null} */
    pt(this, "prev", null);
    /** @type {Batch | null} */
    pt(this, "next", null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    pt(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * The keys of this map are identical to `this.previous`
     * @type {Map<Value, [any, boolean]>}
     */
    pt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * The keys of this map are identical to `this.current`
     * @type {Map<Value, any>}
     */
    pt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Ke(this, Wi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Ke(this, qi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ke(this, Ki, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Ke(this, Tr, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ke(this, zi, null);
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
    Ke(this, Cr, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Ke(this, Ja, []);
    /**
     * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
     * @type {Map<Effect, number>}
     */
    Ke(this, nr, /* @__PURE__ */ new Map());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Ke(this, rr, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Ke(this, Xi, /* @__PURE__ */ new Set());
    pt(this, "is_fork", !1);
    Ke(this, vi, !1);
    Mi === null ? _l = Mi = this : (Mi.next = this, this.prev = Mi), Mi = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    B(this, rr).has(e) || B(this, rr).set(e, { d: [], m: [] }), B(this, Xi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, n = (r) => this.schedule(r)) {
    var r = B(this, rr).get(e);
    if (r) {
      B(this, rr).delete(e);
      for (var i of r.d)
        yt(i, mt), n(i);
      for (i of r.m)
        yt(i, An), n(i);
    }
    B(this, Xi).add(e);
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
    we = this;
  }
  deactivate() {
    we = null, Gt = null;
  }
  flush() {
    try {
      Il = !0, we = this, De(this, Xe, Ma).call(this);
    } finally {
      mc = 0, Kl = null, Fa = null, Ls = null, Il = !1, we = null, Gt = null, cr.clear();
    }
  }
  discard() {
    var e;
    for (const n of B(this, qi)) n(this);
    B(this, qi).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Na);
    De(this, Xe, Da).call(this), (e = B(this, zi)) == null || e.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    B(this, Ja).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, n) {
    if (Ge(this, Ki, B(this, Ki) + 1), e) {
      let r = B(this, Tr).get(n) ?? 0;
      B(this, Tr).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, n) {
    if (Ge(this, Ki, B(this, Ki) - 1), e) {
      let r = B(this, Tr).get(n) ?? 0;
      r === 1 ? B(this, Tr).delete(n) : B(this, Tr).set(n, r - 1);
    }
    B(this, vi) || (Ge(this, vi, !0), Dn(() => {
      Ge(this, vi, !1), this.linked && this.flush();
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
    (n === mt || B(this, nr).get(e) !== mt) && B(this, nr).set(e, n);
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    B(this, Wi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    B(this, qi).add(e);
  }
  settled() {
    return (B(this, zi) ?? Ge(this, zi, rd())).promise;
  }
  static ensure() {
    if (we === null) {
      const e = we = new il();
      !Il && !Ba && Dn(() => {
        e.started || e.flush();
      });
    }
    return we;
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
    if (Kl = e, (n = e.b) != null && n.is_pending && e.f & (Qi | ns | To) && !(e.f & Ti)) {
      e.b.defer_effect(e);
      return;
    }
    B(this, Cr).push(e);
  }
};
Wi = new WeakMap(), qi = new WeakMap(), Ki = new WeakMap(), Tr = new WeakMap(), zi = new WeakMap(), Cr = new WeakMap(), Ja = new WeakMap(), nr = new WeakMap(), rr = new WeakMap(), Xi = new WeakMap(), vi = new WeakMap(), Xe = new WeakSet(), zl = function() {
  if (this.is_fork) return !0;
  for (const e of B(this, Tr).keys())
    if (!De(this, Xe, bd).call(this, e))
      return !0;
  return !1;
}, /**
 * Whether `effect` is inside a branch that this batch skips
 * @param {Effect} effect
 */
bd = function(e) {
  for (var n = (
    /** @type {Effect | null} */
    e
  ); n !== null; n = n.parent)
    if (B(this, rr).has(n)) return !0;
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
Xl = function() {
  var e = [];
  for (const a of B(this, Cr))
    if (!(a.f & jt || !(a.f & (mt | An)))) {
      for (var n = a, r = !1; n.parent !== null; ) {
        n = n.parent;
        var i = n.f;
        if (i & (Qr | Yn)) {
          if (!(i & Mt)) {
            r = !0;
            break;
          }
          n.f ^= Mt;
        }
      }
      r || e.push(n);
    }
  return Ge(this, Cr, []), e;
}, Ma = function() {
  var o, c, u, d;
  this.started = !0;
  for (const [m, f] of B(this, nr))
    yt(m, f), this.schedule(m);
  this.apply();
  for (var e = Fa = [], n = [], r = Ls = []; B(this, Cr).length > 0; ) {
    mc++ > 1e3 && (De(this, Xe, Da).call(this), fv());
    for (const m of De(this, Xe, Xl).call(this))
      try {
        De(this, Xe, Yl).call(this, m, e, n);
      } catch (f) {
        throw Ad(m), De(this, Xe, zl).call(this) || this.discard(), f;
      }
  }
  if (we = null, r.length > 0) {
    var i = il.ensure();
    for (const m of r)
      i.schedule(m);
  }
  if (Fa = null, Ls = null, De(this, Xe, zl).call(this)) {
    De(this, Xe, ki).call(this, n), De(this, Xe, ki).call(this, e);
    for (const [m, f] of B(this, rr))
      Sd(m, f);
    r.length > 0 && /** @type {unknown} */
    De(o = we, Xe, Ma).call(o);
    return;
  }
  const a = De(this, Xe, pd).call(this);
  if (a) {
    De(this, Xe, ki).call(this, n), De(this, Xe, ki).call(this, e), De(c = a, Xe, Id).call(c, this);
    return;
  }
  B(this, nr).clear();
  for (const m of B(this, Wi)) m(this);
  B(this, Wi).clear(), Yr = this, gc(n), gc(e), Yr = null, (u = B(this, zi)) == null || u.resolve();
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    we
  );
  B(this, Ki) === 0 && (B(this, Cr).length === 0 || s !== null) && De(this, Xe, Da).call(this), s !== null && (cr.clear(), De(d = s, Xe, Ma).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Yl = function(e, n, r) {
  e.f ^= Mt;
  for (var i = e.first; i !== null; ) {
    var a = i.f, s = (a & (Yn | Qr)) !== 0, o = s && (a & Mt) !== 0, c = o || (a & nn) !== 0 || B(this, rr).has(i);
    if (!c && i.fn !== null) {
      s ? i.f ^= Mt : a & Qi ? n.push(i) : os(i) && (a & Mn && this.add_dirty_reaction(i, An), ta(i));
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
}, pd = function() {
  for (var e = this.prev; e !== null; e = e.prev)
    if (!e.is_fork && De(this, Xe, _d).call(this, e)) return e;
  return null;
}, /** @param {Batch} batch */
_d = function(e) {
  for (const [n, [, r]] of this.current)
    if (!r && e.current.has(n))
      return !0;
  return !1;
}, /**
 * @param {Batch} batch
 */
Id = function(e) {
  var r;
  for (const [i, a] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, a);
  for (const [i, a] of e.async_deriveds) {
    const s = this.async_deriveds.get(i);
    s && a.promise.then(s.resolve).catch(s.reject);
  }
  e.async_deriveds.clear(), this.transfer_reactions(B(e, nr));
  const n = (i) => {
    var a = i.reactions;
    if (a !== null && !(i.f & Jt && !(i.f & (mt | An))))
      for (const c of a) {
        var s = c.f;
        if (s & Jt)
          n(
            /** @type {Derived} */
            c
          );
        else {
          var o = (
            /** @type {Effect} */
            c
          );
          s & (Vi | Mn) && !this.async_deriveds.has(o) && (B(this, nr).delete(o), yt(o, mt), this.schedule(o));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => e.discard()), De(r = e, Xe, Da).call(r), we = this, De(this, Xe, Ma).call(this);
}, /**
 * @param {Effect[]} effects
 */
ki = function(e) {
  for (var n = 0; n < e.length; n += 1)
    dd(e[n], B(this, nr));
}, uv = function() {
  var m, f;
  for (let v = _l; v !== null; v = v.next) {
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
          for (const h of B(this, Xi))
            v.unskip_effect(h, (g) => {
              var p;
              g.f & (Mn | Vi) ? v.schedule(g) : De(p = v, Xe, ki).call(p, [g]);
            });
        v.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var c of n)
          Ed(c, a, s, o);
        o = /* @__PURE__ */ new Map();
        var u = [...v.current].filter(([h, g]) => {
          const p = this.current.get(h);
          return p ? p[0] !== g[0] || p[1] !== g[1] : !0;
        }).map(([h]) => h);
        if (u.length > 0)
          for (const h of B(this, Ja))
            !(h.f & (jt | nn | Us)) && Mo(h, u, o) && (h.f & (Vi | Mn) ? (yt(h, mt), v.schedule(h)) : v.add_dirty_reaction(h, mt));
        if (B(v, Cr).length > 0 && !B(v, vi)) {
          v.apply();
          for (var d of De(m = v, Xe, Xl).call(m))
            De(f = v, Xe, Yl).call(f, d, [], []);
        }
        v.deactivate();
      }
    }
  }
}, Da = function() {
  if (this.linked) {
    var e = this.prev, n = this.next;
    e === null ? _l = n : e.next = n, n === null ? Mi = e : n.prev = e, this.linked = !1;
  }
};
let Ei = il;
function dv(t) {
  var e = Ba, n = Yr;
  Yr = null, Ba = !0;
  try {
    for (var r; ; ) {
      if (tv(), we === null)
        return (
          /** @type {T} */
          r
        );
      we.flush();
    }
  } finally {
    Ba = e, Yr = n;
  }
}
function fv() {
  try {
    Kh();
  } catch (t) {
    sr(t, Kl);
  }
}
let jn = null;
function gc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (jt | nn)) && os(r) && (jn = /* @__PURE__ */ new Set(), ta(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Bd(r), (jn == null ? void 0 : jn.size) > 0)) {
        cr.clear();
        for (const i of jn) {
          if (i.f & (jt | nn)) continue;
          const a = [i];
          let s = i.parent;
          for (; s !== null; )
            jn.has(s) && (jn.delete(s), a.push(s)), s = s.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const c = a[o];
            c.f & (jt | nn) || ta(c);
          }
        }
        jn.clear();
      }
    }
    jn = null;
  }
}
function Ed(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const a = i.f;
      a & Jt ? Ed(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : a & (Vi | Mn) && !(a & mt) && Mo(i, e, r) && (yt(i, mt), Do(
        /** @type {Effect} */
        i
      ));
    }
}
function Mo(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (ja.call(e, i))
        return !0;
      if (i.f & Jt && Mo(
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
function Do(t) {
  we.schedule(t);
}
function Sd(t, e) {
  if (!(t.f & Yn && t.f & Mt)) {
    t.f & mt ? e.d.push(t) : t.f & An && e.m.push(t), yt(t, Mt);
    for (var n = t.first; n !== null; )
      Sd(n, e), n = n.next;
  }
}
function Ad(t) {
  yt(t, Mt);
  for (var e = t.first; e !== null; )
    Ad(e), e = e.next;
}
let Fs = /* @__PURE__ */ new Set();
const cr = /* @__PURE__ */ new Map();
let yd = !1;
function Si(t, e) {
  var n = {
    f: 0,
    v: t,
    reactions: null,
    equals: ld,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ce(t, e) {
  const n = Si(t);
  return Gd(n), n;
}
// @__NO_SIDE_EFFECTS__
function Td(t, e = !1, n = !0) {
  var i;
  const r = Si(t);
  return e || (r.equals = od), da && n && ut !== null && ut.l !== null && ((i = ut.l).s ?? (i.s = [])).push(r), r;
}
function q(t, e, n = !1) {
  We !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!zn || We.f & Us) && is() && We.f & (Jt | Mn | Vi | Us) && (dr === null || !dr.has(t)) && Zh();
  let r = n ? oe(e) : e;
  return ea(t, r, Ls);
}
var oi = null, Zl = 0;
function ea(t, e, n = null) {
  if (!t.equals(e)) {
    Lr ? cr.set(t, e) : cr.has(t) || cr.set(t, t.v);
    var r = Ei.ensure();
    if (r.capture(t, e), t.f & Jt) {
      const i = (
        /** @type {Derived} */
        t
      );
      t.f & mt && No(i), Gt === null && Ro(i);
    }
    t.wv = Wd(), oi = null, Zl = 0, Cd(t, mt, n), oi = null, is() && qe !== null && qe.f & Mt && !(qe.f & (Yn | Qr)) && (On === null ? Sv([t]) : On.push(t)), !r.is_fork && Fs.size > 0 && !yd && hv();
  }
  return e;
}
function hv() {
  yd = !1;
  for (const t of Fs) {
    t.f & Mt && yt(t, An);
    let e;
    try {
      e = os(t);
    } catch {
      e = !0;
    }
    e && ta(t);
  }
  Fs.clear();
}
function Va(t) {
  q(t, t.v + 1);
}
function Cd(t, e, n) {
  var r = t.reactions;
  if (r !== null) {
    var i = is(), a = r.length;
    if (Zl += a, Zl > 1e5 && oi === null && (oi = /* @__PURE__ */ new Set()), oi !== null) {
      if (oi.has(t)) return;
      oi.add(t);
    }
    for (var s = 0; s < a; s++) {
      var o = r[s], c = o.f;
      if (!(!i && o === qe)) {
        var u = (c & mt) === 0;
        if (u && yt(o, e), c & Us)
          Fs.add(
            /** @type {Effect} */
            o
          );
        else if (c & Jt) {
          var d = (
            /** @type {Derived} */
            o
          );
          Gt == null || Gt.delete(d), Cd(d, An, n);
        } else if (u) {
          var m = (
            /** @type {Effect} */
            o
          );
          c & Mn && jn !== null && jn.add(m), n !== null ? n.push(m) : Do(m);
        }
      }
    }
  }
}
function oe(t) {
  if (typeof t != "object" || t === null || or in t || ad in t)
    return t;
  const e = yo(t);
  if (e !== Nh && e !== Mh)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ll(t), i = /* @__PURE__ */ ce(0), a = _i, s = (o) => {
    if (_i === a)
      return o();
    var c = We, u = _i;
    Hn(null), Ic(a);
    var d = o();
    return Hn(c), Ic(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ ce(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Xh();
        var d = n.get(c);
        return d === void 0 ? s(() => {
          var m = /* @__PURE__ */ ce(u.value);
          return n.set(c, m), m;
        }) : q(d, u.value, !0), !0;
      },
      deleteProperty(o, c) {
        var u = n.get(c);
        if (u === void 0) {
          if (c in o) {
            const d = s(() => /* @__PURE__ */ ce(Ct));
            n.set(c, d), Va(i);
          }
        } else
          q(u, Ct), Va(i);
        return !0;
      },
      get(o, c, u) {
        var v;
        if (c === or)
          return t;
        var d = n.get(c), m = c in o;
        if (d === void 0 && (!m || (v = zr(o, c)) != null && v.writable) && (d = s(() => {
          var h = oe(m ? o[c] : Ct), g = /* @__PURE__ */ ce(h);
          return g;
        }), n.set(c, d)), d !== void 0) {
          var f = l(d);
          return f === Ct ? void 0 : f;
        }
        return Reflect.get(o, c, u);
      },
      getOwnPropertyDescriptor(o, c) {
        var f;
        (f = this.has) == null || f.call(this, o, c);
        var u = Reflect.getOwnPropertyDescriptor(o, c), d = n.get(c);
        if (d !== void 0) {
          var m = l(d);
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
      has(o, c) {
        var f;
        if (c === or)
          return !0;
        var u = n.get(c), d = u !== void 0 && u.v !== Ct || Reflect.has(o, c);
        if (u !== void 0 || (qe !== null || We !== null) && (!d || (f = zr(o, c)) != null && f.writable)) {
          u === void 0 && (u = s(() => {
            var v = d ? oe(o[c]) : Ct, h = /* @__PURE__ */ ce(v);
            return h;
          }), n.set(c, u));
          var m = l(u);
          if (m === Ct)
            return !1;
        }
        return d;
      },
      set(o, c, u, d) {
        var A;
        var m = n.get(c), f = c in o;
        if (r && c === "length")
          for (var v = u; v < /** @type {Source<number>} */
          m.v; v += 1) {
            var h = n.get(v + "");
            h !== void 0 ? q(h, Ct) : v in o && (h = s(() => /* @__PURE__ */ ce(Ct)), n.set(v + "", h));
          }
        if (m === void 0)
          (!f || (A = zr(o, c)) != null && A.writable) && (m = s(() => /* @__PURE__ */ ce(void 0)), q(m, oe(u)), n.set(c, m));
        else {
          f = m.v !== Ct;
          var g = s(() => oe(u));
          q(m, g);
        }
        var p = Reflect.getOwnPropertyDescriptor(o, c);
        if (p != null && p.set && p.set.call(d, u), !f) {
          if (r && typeof c == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), I = Number(c);
            Number.isInteger(I) && I >= _.v && q(_, I + 1);
          }
          Va(i);
        }
        return !0;
      },
      ownKeys(o) {
        l(i);
        var c = Reflect.ownKeys(o).filter((m) => {
          var f = n.get(m);
          return f === void 0 || f.v !== Ct;
        });
        for (var [u, d] of n)
          d.v !== Ct && !(u in o) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        Yh();
      }
    }
  );
}
function bc(t) {
  try {
    if (t !== null && typeof t == "object" && or in t)
      return t[or];
  } catch {
  }
  return t;
}
function xd(t, e) {
  return Object.is(bc(t), bc(e));
}
var pc, wd, Od, Rd, Ld;
function vv() {
  if (pc === void 0) {
    pc = window, wd = document, Od = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Rd = zr(e, "firstChild").get, Ld = zr(e, "nextSibling").get, hc(t) && (t[Wl] = void 0, t[Os] = null, t[ql] = void 0, t.__e = void 0), hc(n) && (n[La] = void 0);
  }
}
function ur(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ai(t) {
  return (
    /** @type {TemplateNode | null} */
    Rd.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function as(t) {
  return (
    /** @type {TemplateNode | null} */
    Ld.call(t)
  );
}
function be(t, e) {
  return /* @__PURE__ */ Ai(t);
}
function re(t, e = !1) {
  {
    var n = /* @__PURE__ */ Ai(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ as(n) : n;
  }
}
function Pn(t, e = !1) {
  return /* @__PURE__ */ Ai(t);
}
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ as(r);
  return r;
}
function mv(t) {
  t.textContent = "";
}
function Nd() {
  return !1;
}
function Md(t, e, n) {
  return e == null || e === ed ? (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(t, { is: n }) : document.createElement(t)
  ) : (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElementNS(e, t, { is: n }) : document.createElementNS(e, t)
  );
}
function gv(t) {
  var e = qe;
  if (e === null)
    return We.f |= Xr, t;
  if (!(e.f & Ti) && !(e.f & Qi))
    throw t;
  sr(t, e);
}
function sr(t, e) {
  if (t === $u)
    throw t;
  if (!(e !== null && e.f & jt)) {
    for (; e !== null; ) {
      if (e.f & jl && !(e.f & (jt | Wa))) {
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
function Dd(t) {
  qe === null && (We === null && qh(), Wh()), Lr && jh();
}
function bv(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Qn(t, e) {
  var n = qe;
  n !== null && n.f & nn && (t |= nn);
  var r = {
    ctx: ut,
    deps: null,
    nodes: null,
    f: t | mt | Xn,
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
  we == null || we.register_created_effect(r);
  var i = r;
  if (t & Qi)
    Fa !== null ? Fa.push(r) : Ei.ensure().schedule(r);
  else if (e !== null) {
    try {
      ta(r);
    } catch (s) {
      throw Wt(r), s;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & ua) && (i = i.first, t & Mn && t & hr && i !== null && (i.f |= hr));
  }
  if (i !== null && (i.parent = n, n !== null && bv(i, n), We !== null && We.f & Jt && !(t & Qr))) {
    var a = (
      /** @type {Derived} */
      We
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return r;
}
function Po() {
  return We !== null && !zn;
}
function ss(t) {
  const e = Qn(ns, null);
  return yt(e, Mt), e.teardown = t, e;
}
function Ce(t) {
  Dd();
  var e = (
    /** @type {Effect} */
    qe.f
  ), n = !We && (e & Yn) !== 0 && ut !== null && !ut.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ut
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Pd(t);
}
function Pd(t) {
  return Qn(Qi | id, t);
}
function Hd(t) {
  return Dd(), Qn(ns | id, t);
}
function pv(t) {
  Ei.ensure();
  const e = Qn(Qr | ua, t);
  return (n = {}) => new Promise((r) => {
    n.outro ? pi(e, () => {
      Wt(e), r(void 0);
    }) : (Wt(e), r(void 0));
  });
}
function Ci(t) {
  return Qn(Qi, t);
}
function _v(t) {
  return Qn(Vi | ua, t);
}
function ls(t, e = 0) {
  return Qn(ns | e, t);
}
function Le(t, e = [], n = [], r = []) {
  hd(r, e, n, (i) => {
    Qn(ns, () => {
      t(...i.map(l));
    });
  });
}
function fa(t, e = 0) {
  var n = Qn(Mn | e, t);
  return n;
}
function Ud(t, e = 0) {
  var n = Qn(To | e, t);
  return n;
}
function un(t) {
  return Qn(Yn | ua, t);
}
function kd(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Lr, r = We;
    _c(!0), Hn(null);
    try {
      e.call(null);
    } catch (i) {
      sr(i, t.parent);
    } finally {
      _c(n), Hn(r);
    }
  }
}
function Ho(t, e = !1) {
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
function Iv(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Yn || Wt(e), e = n;
  }
}
function Wt(t, e = !0) {
  var n = !1;
  (e || t.f & Ph) && t.nodes !== null && t.nodes.end !== null && (Ev(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), t.f |= Wa, Ho(t, e && !n), qa(t, 0);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const a of r)
      a.stop();
  kd(t), t.f ^= Wa, t.f |= jt;
  var i = t.parent;
  i !== null && i.first !== null && Bd(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function Ev(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ as(t);
    t.remove(), t = n;
  }
}
function Bd(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function pi(t, e, n = !0) {
  var r = [];
  t.f |= Co, Fd(t, r, !0);
  var i = () => {
    n && Wt(t), e && e();
  }, a = r.length;
  if (a > 0) {
    var s = () => --a || i();
    for (var o of r)
      o.out(s);
  } else
    i();
}
function Fd(t, e, n) {
  if (!(t.f & nn)) {
    t.f ^= nn;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & Qr)) {
        var s = (i.f & hr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Yn) !== 0 && (t.f & Mn) !== 0;
        Fd(i, e, s ? n : !1);
      }
      i = a;
    }
  }
}
function Vs(t) {
  t.f &= ~Co, Vd(t, !0);
}
function Vd(t, e) {
  if (!(t.f & Co) && t.f & nn) {
    t.f ^= nn, t.f & Mt || (yt(t, mt), Ei.ensure().schedule(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & hr) !== 0 || (n.f & Yn) !== 0;
      Vd(n, i ? e : !1), n = r;
    }
    var a = t.nodes && t.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || e) && s.in();
  }
}
function Uo(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ as(n);
      e.append(n), n = i;
    }
}
let Lr = !1;
function _c(t) {
  Lr = t;
}
let We = null, zn = !1;
function Hn(t) {
  We = t;
}
let qe = null;
function vr(t) {
  qe = t;
}
let dr = null;
function Gd(t) {
  We !== null && (We.f & ks || We.f & Jt) && (dr ?? (dr = /* @__PURE__ */ new Set())).add(t);
}
let dn = null, Sn = 0, On = null;
function Sv(t) {
  On = t;
}
let jd = 1, fi = 0, _i = fi;
function Ic(t) {
  _i = t;
}
function Wd() {
  return ++jd;
}
function os(t) {
  var e = t.f;
  if (e & mt)
    return !0;
  if (e & An) {
    for (var n = (
      /** @type {Value[]} */
      t.deps
    ), r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if (os(
        /** @type {Derived} */
        a
      ) && md(
        /** @type {Derived} */
        a
      ), a.wv > t.wv)
        return !0;
    }
    e & Xn && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Gt === null && yt(t, Mt);
  }
  return !1;
}
function qd(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(dr !== null && dr.has(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Jt ? qd(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? yt(a, mt) : a.f & Mt && yt(a, An), Do(
        /** @type {Effect} */
        a
      ));
    }
}
function Kd(t) {
  var e = dn, n = Sn, r = On, i = We, a = dr, s = ut, o = zn, c = _i, u = t.f;
  dn = /** @type {null | Value[]} */
  null, Sn = 0, On = null, We = u & (Yn | Qr) ? null : t, dr = null, Ji(t.ctx), zn = !1, _i = ++fi, t.ac !== null && (Jr(() => {
    t.ac.abort(rs);
  }), t.ac = null);
  try {
    t.f |= ks;
    var d = (
      /** @type {Function} */
      t.fn
    ), m = d();
    t.f |= Ti;
    var f = Ec(t);
    if (is() && On !== null && !zn && f !== null && !(t.f & (Jt | An | mt)))
      for (var v = 0; v < /** @type {Source[]} */
      On.length; v++)
        qd(
          On[v],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (fi++, i.deps !== null)
        for (let h = 0; h < n; h += 1)
          i.deps[h].rv = fi;
      if (e !== null)
        for (const h of e)
          h.rv = fi;
      On !== null && (r === null ? r = On : r.push(.../** @type {Source[]} */
      On));
    }
    return t.f & Xr && (t.f ^= Xr), m;
  } catch (h) {
    return Ec(t), gv(h);
  } finally {
    t.f ^= ks, dn = e, Sn = n, On = r, We = i, dr = a, Ji(s), zn = o, _i = c;
  }
}
function Ec(t) {
  var i;
  var e = t.deps, n = we == null ? void 0 : we.is_fork;
  if (dn !== null) {
    var r;
    if (n || qa(t, Sn), e !== null && Sn > 0)
      for (e.length = Sn + dn.length, r = 0; r < dn.length; r++)
        e[Sn + r] = dn[r];
    else
      t.deps = e = dn;
    if (Po() && t.f & Xn)
      for (r = Sn; r < e.length; r++)
        ((i = e[r]).reactions ?? (i.reactions = [])).push(t);
  } else !n && e !== null && Sn < e.length && (qa(t, Sn), e.length = Sn);
  return e;
}
function Av(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Lh.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && e.f & Jt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (dn === null || !ja.call(dn, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & Xn && (a.f ^= Xn), a.v !== Ct && Ro(a), a.ac !== null && Jr(() => {
      a.ac.abort(rs), a.ac = null, yt(a, mt);
    }), ov(a), qa(a, 0);
  }
}
function qa(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Av(t, n[r]);
}
function ta(t) {
  var e = t.f;
  if (!(e & jt)) {
    yt(t, Mt);
    var n = qe;
    qe = t;
    try {
      e & (Mn | To) ? Iv(t) : Ho(t), kd(t);
      var r = Kd(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = jd;
      var i;
      td && Jh && t.f & mt && t.deps;
    } finally {
      qe = n;
    }
  }
}
async function zd() {
  await Promise.resolve(), dv();
}
function l(t) {
  var e = t.f, n = (e & Jt) !== 0;
  if (We !== null && !zn) {
    var r = qe !== null && (qe.f & jt) !== 0;
    if (!r && (dr === null || !dr.has(t))) {
      var i = We.deps;
      if (We.f & ks)
        t.rv < fi && (t.rv = fi, dn === null && i !== null && i[Sn] === t ? Sn++ : dn === null ? dn = [t] : dn.push(t));
      else {
        We.deps ?? (We.deps = []), ja.call(We.deps, t) || We.deps.push(t);
        var a = t.reactions;
        a === null ? t.reactions = [We] : ja.call(a, We) || a.push(We);
      }
    }
  }
  if (Lr && cr.has(t))
    return cr.get(t);
  if (n) {
    var s = (
      /** @type {Derived} */
      t
    );
    if (Lr) {
      var o = s.v;
      return (!(s.f & Mt) && s.reactions !== null || Yd(s)) && (o = No(s)), cr.set(s, o), o;
    }
    var c = (s.f & Xn) === 0 && !zn && We !== null && (We.f & Xn) !== 0, u = (s.f & Ti) === 0;
    os(s) && (c && (s.f |= Xn), md(s)), c && !u && (gd(s), Xd(s));
  }
  if (Gt != null && Gt.has(t))
    return Gt.get(t);
  if (t.f & Xr)
    throw t.v;
  return t.v;
}
function Xd(t) {
  if (t.f |= Xn, t.deps !== null)
    for (const n of t.deps) {
      var e = n.reactions;
      e === null ? n.reactions = [t] : ja.call(e, t) || e.push(t), n.f & Jt && !(n.f & Xn) && (gd(
        /** @type {Derived} */
        n
      ), Xd(
        /** @type {Derived} */
        n
      ));
    }
}
function Yd(t) {
  if (t.v === Ct) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (cr.has(e) || e.f & Jt && Yd(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Jn(t) {
  var e = zn;
  try {
    return zn = !0, t();
  } finally {
    zn = e;
  }
}
function Zd(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (or in t)
      Ql(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && or in n && Ql(n);
      }
  }
}
function Ql(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ql(t[r], e);
      } catch {
      }
    const n = yo(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = nd(n);
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
const hi = Symbol("events"), Qd = /* @__PURE__ */ new Set(), Jl = /* @__PURE__ */ new Set();
function ko(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || $l.call(e, a), !a.cancelBubble)
      return Jr(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? (i.__removed = !1, Dn(() => {
    i.__removed || e.addEventListener(t, i, r);
  })) : e.addEventListener(t, i, r), i;
}
function yv(t, e, n, r = {}) {
  var i = ko(e, t, n, r);
  return () => {
    i.__removed = !0, t.removeEventListener(e, i, r);
  };
}
function Pa(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = ko(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ss(() => {
    s.__removed = !0, e.removeEventListener(t, s, a);
  });
}
function Zn(t, e, n) {
  (e[hi] ?? (e[hi] = {}))[t] = n;
}
function yn(t) {
  for (var e = 0; e < t.length; e++)
    Qd.add(t[e]);
  for (var n of Jl)
    n(t);
}
let El = null, Sl = !1;
function $l(t) {
  var g, p;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((g = t.composedPath) == null ? void 0 : g.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  El = t, Sl || (Sl = !0, setTimeout(() => {
    Sl = !1, El = null;
  }));
  var s = 0, o = El === t && t[hi];
  if (o) {
    var c = i.indexOf(o);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[hi] = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    c <= u && (s = c);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    Ao(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = We, m = qe;
    Hn(null), vr(null);
    try {
      for (var f, v = []; a !== null && a !== e; ) {
        try {
          var h = (p = a[hi]) == null ? void 0 : p[r];
          h != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a) && h.call(a, t);
        } catch (_) {
          f ? v.push(_) : f = _;
        }
        if (t.cancelBubble) break;
        s++, a = s < i.length ? (
          /** @type {Element} */
          i[s]
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
      t[hi] = e, delete t.currentTarget, Hn(d), vr(m);
    }
  }
}
var Qu;
const Al = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Qu = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Qu.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Tv(t) {
  return (
    /** @type {string} */
    (Al == null ? void 0 : Al.createHTML(t)) ?? t
  );
}
function Jd(t) {
  var e = Md("template");
  return e.innerHTML = Tv(t.replaceAll("<!>", "<!---->")), e.content;
}
function na(t, e) {
  var n = (
    /** @type {Effect} */
    qe
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Jd(a ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ai(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Od ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ai(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      na(o, c);
    } else
      na(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Cv(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Jd(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Ai(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ai(o);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return na(c, c), c;
  };
}
// @__NO_SIDE_EFFECTS__
function an(t, e) {
  return /* @__PURE__ */ Cv(t, e, "svg");
}
function Dt(t = "") {
  {
    var e = ur(t + "");
    return na(e, e), e;
  }
}
function ve() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = ur();
  return t.append(e, n), na(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function xv(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const wv = [
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
function Ov(t) {
  return wv.includes(t);
}
const Rv = {
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
function Lv(t) {
  return t = t.toLowerCase(), Rv[t] ?? t;
}
const Nv = ["touchstart", "touchmove"];
function Mv(t) {
  return Nv.includes(t);
}
function Dv(t) {
  let e = 0, n = Si(0), r;
  return () => {
    Po() && (l(n), ls(() => (e === 0 && (r = Jn(() => t(() => Va(n)))), e += 1, () => {
      Dn(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Va(n));
      });
    })));
  };
}
var Pv = hr | ua;
function Hv(t, e, n, r) {
  new Uv(t, e, n, r);
}
var Rn, So, Ln, mi, Yt, _n, en, In, ir, gi, qr, Yi, $a, xr, al, $e, kv, Bv, eo, Gr, Fv, to, Ha, Ns, no, ro;
class Uv {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, n, r, i) {
    Ke(this, $e);
    /** @type {Boundary | null} */
    pt(this, "parent");
    pt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    pt(this, "transform_error");
    /** @type {TemplateNode} */
    Ke(this, Rn);
    /** @type {TemplateNode | null} */
    Ke(this, So, null);
    /** @type {BoundaryProps} */
    Ke(this, Ln);
    /** @type {((anchor: Node) => void)} */
    Ke(this, mi);
    /** @type {Effect} */
    Ke(this, Yt);
    /** @type {Effect | null} */
    Ke(this, _n, null);
    /** @type {Effect | null} */
    Ke(this, en, null);
    /** @type {Effect | null} */
    Ke(this, In, null);
    /** @type {DocumentFragment | null} */
    Ke(this, ir, null);
    Ke(this, gi, 0);
    Ke(this, qr, 0);
    Ke(this, Yi, !1);
    /** @type {Map<Effect, number>} */
    Ke(this, $a, /* @__PURE__ */ new Map());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ke(this, xr, null);
    Ke(this, al, Dv(() => (Ge(this, xr, Si(B(this, gi))), () => {
      Ge(this, xr, null);
    })));
    var a;
    Ge(this, Rn, e), Ge(this, Ln, n), Ge(this, mi, (s) => {
      var o = (
        /** @type {Effect} */
        qe
      );
      o.b = this, o.f |= jl, r(s);
    }), this.parent = /** @type {Effect} */
    qe.b, this.transform_error = i ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), Ge(this, Yt, fa(() => {
      De(this, $e, to).call(this);
    }, Pv));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    dd(e, B(this, $a));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!B(this, Ln).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, n) {
    De(this, $e, no).call(this, e, n), Ge(this, gi, B(this, gi) + e), !(!B(this, xr) || B(this, Yi)) && (Ge(this, Yi, !0), Dn(() => {
      Ge(this, Yi, !1), B(this, xr) && ea(B(this, xr), B(this, gi));
    }));
  }
  get_effect_pending() {
    return B(this, al).call(this), l(
      /** @type {Source<number>} */
      B(this, xr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (e === $u || !B(this, Ln).onerror && !B(this, Ln).failed)
      throw e;
    we != null && we.is_fork ? (B(this, _n) && we.skip_effect(B(this, _n)), B(this, en) && we.skip_effect(B(this, en)), B(this, In) && we.skip_effect(B(this, In)), we.oncommit(() => {
      De(this, $e, Gr).call(this) || De(this, $e, ro).call(this, e);
    })) : De(this, $e, ro).call(this, e);
  }
}
Rn = new WeakMap(), So = new WeakMap(), Ln = new WeakMap(), mi = new WeakMap(), Yt = new WeakMap(), _n = new WeakMap(), en = new WeakMap(), In = new WeakMap(), ir = new WeakMap(), gi = new WeakMap(), qr = new WeakMap(), Yi = new WeakMap(), $a = new WeakMap(), xr = new WeakMap(), al = new WeakMap(), $e = new WeakSet(), kv = function() {
  try {
    Ge(this, _n, un(() => B(this, mi).call(this, B(this, Rn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Bv = function(e) {
  const n = B(this, Ln).failed, { reset: r, invoke_onerror: i } = De(this, $e, eo).call(this, e);
  Dn(i), n && Ge(this, In, un(() => {
    n(
      B(this, Rn),
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
eo = function(e) {
  var n = !1, r = !1;
  const i = () => {
    if (!De(this, $e, Gr).call(this)) {
      if (n) {
        Bh();
        return;
      }
      n = !0, r && Qh(), B(this, In) !== null && pi(B(this, In), () => {
        Ge(this, In, null);
      }), De(this, $e, Ns).call(this, () => {
        De(this, $e, to).call(this);
      });
    }
  };
  return { reset: i, invoke_onerror: () => {
    var s, o;
    if (!De(this, $e, Gr).call(this))
      try {
        r = !0, (o = (s = B(this, Ln)).onerror) == null || o.call(s, e, i), r = !1;
      } catch (c) {
        sr(c, B(this, Yt) && B(this, Yt).parent);
      }
  } };
}, Gr = function() {
  return (B(this, Yt).f & (jt | Wa)) !== 0;
}, Fv = function() {
  const e = B(this, Ln).pending;
  e && (this.is_pending = !0, Ge(this, en, un(() => e(B(this, Rn)))), Dn(() => {
    if (!De(this, $e, Gr).call(this)) {
      var n = Ge(this, ir, document.createDocumentFragment()), r = ur(), i = !1;
      if (n.append(r), Ge(this, _n, De(this, $e, Ns).call(this, () => {
        try {
          return un(() => B(this, mi).call(this, r));
        } catch (a) {
          try {
            this.error(a), i = !0;
          } catch (s) {
            sr(s, B(this, Yt).parent);
          }
          return null;
        }
      })), B(this, _n) === null) {
        Ge(this, ir, null), i && De(this, $e, Ha).call(
          this,
          /** @type {Batch} */
          we
        );
        return;
      }
      B(this, qr) === 0 && (B(this, Rn).before(n), Ge(this, ir, null), pi(
        /** @type {Effect} */
        B(this, en),
        () => {
          Ge(this, en, null);
        }
      ), De(this, $e, Ha).call(
        this,
        /** @type {Batch} */
        we
      ));
    }
  }));
}, to = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Ge(this, qr, 0), Ge(this, gi, 0), Ge(this, _n, un(() => {
      B(this, mi).call(this, B(this, Rn));
    })), B(this, qr) > 0) {
      var e = Ge(this, ir, document.createDocumentFragment());
      Uo(B(this, _n), e);
      const n = (
        /** @type {(anchor: Node) => void} */
        B(this, Ln).pending
      );
      Ge(this, en, un(() => n(B(this, Rn))));
    } else
      De(this, $e, Ha).call(
        this,
        /** @type {Batch} */
        we
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Ha = function(e) {
  this.is_pending = !1, e.transfer_reactions(B(this, $a));
}, /**
 * @template T
 * @param {() => T} fn
 */
Ns = function(e) {
  var n = qe, r = We, i = ut;
  vr(B(this, Yt)), Hn(B(this, Yt)), Ji(B(this, Yt).ctx);
  try {
    return Ei.ensure(), e();
  } finally {
    vr(n), Hn(r), Ji(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
no = function(e, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && De(r = this.parent, $e, no).call(r, e, n);
    return;
  }
  Ge(this, qr, B(this, qr) + e), B(this, qr) === 0 && (De(this, $e, Ha).call(this, n), B(this, en) && pi(B(this, en), () => {
    Ge(this, en, null);
  }), B(this, ir) && (B(this, Rn).before(B(this, ir)), Ge(this, ir, null)));
}, /**
 * @param {unknown} error
 */
ro = function(e) {
  B(this, _n) && (Wt(B(this, _n)), Ge(this, _n, null)), B(this, en) && (Wt(B(this, en)), Ge(this, en, null)), B(this, In) && (Wt(B(this, In)), Ge(this, In, null));
  let n = B(this, Ln).failed;
  const r = (i) => {
    if (De(this, $e, Gr).call(this)) return;
    const { reset: a, invoke_onerror: s } = De(this, $e, eo).call(this, i);
    s(), n && !De(this, $e, Gr).call(this) && Ge(this, In, De(this, $e, Ns).call(this, () => {
      try {
        return un(() => {
          var o = (
            /** @type {Effect} */
            qe
          );
          o.b = this, o.f |= jl, n(
            B(this, Rn),
            () => i,
            () => a
          );
        });
      } catch (o) {
        return sr(
          o,
          /** @type {Effect} */
          B(this, Yt).parent
        ), null;
      }
    }));
  };
  Dn(() => {
    if (!De(this, $e, Gr).call(this)) {
      var i;
      try {
        i = this.transform_error(e);
      } catch (a) {
        sr(a, B(this, Yt) && B(this, Yt).parent);
        return;
      }
      i !== null && typeof i == "object" && typeof /** @type {any} */
      i.then == "function" ? i.then(
        r,
        /** @param {unknown} e */
        (a) => sr(a, B(this, Yt) && B(this, Yt).parent)
      ) : r(i);
    }
  });
};
let Gs = !0;
function vs(t) {
  Gs = t;
}
function lt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? `${e}` : e;
  n !== /** @type {any} */
  (t[La] ?? (t[La] = t.nodeValue)) && (t[La] = n, t.nodeValue = `${n}`);
}
function Vv(t, e) {
  return Gv(t, e);
}
const ms = /* @__PURE__ */ new Map();
function Gv(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0, transformError: o }) {
  vv();
  var c = void 0, u = pv(() => {
    var d = n ?? e.appendChild(ur());
    Hv(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        ye({});
        var h = (
          /** @type {ComponentContext} */
          ut
        );
        a && (h.c = a), i && (r.$$events = i), Gs = s, c = t(v, r) || Oo(), Gs = !0, Te();
      },
      o
    );
    var m = /* @__PURE__ */ new Set(), f = (v) => {
      for (var h = 0; h < v.length; h++) {
        var g = v[h];
        if (!m.has(g)) {
          m.add(g);
          var p = Mv(g);
          for (const A of [e, document]) {
            var _ = ms.get(A);
            _ === void 0 && (_ = /* @__PURE__ */ new Map(), ms.set(A, _));
            var I = _.get(g);
            I === void 0 ? (A.addEventListener(g, $l, { passive: p }), _.set(g, 1)) : _.set(g, I + 1);
          }
        }
      }
    };
    return f(ol(Qd)), Jl.add(f), () => {
      var p;
      for (var v of m)
        for (const _ of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            ms.get(_)
          ), g = (
            /** @type {number} */
            h.get(v)
          );
          --g == 0 ? (_.removeEventListener(v, $l), h.delete(v), h.size === 0 && ms.delete(_)) : h.set(v, g);
        }
      Jl.delete(f), d !== n && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return jv.set(c, u), c;
}
let jv = /* @__PURE__ */ new WeakMap();
var Wn, ar, En, bi, es, ts, sl;
class ul {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    pt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Ke(this, Wn, /* @__PURE__ */ new Map());
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
    Ke(this, ar, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Ke(this, En, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Ke(this, bi, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Ke(this, es, !0);
    /**
     * @param {Batch} batch
     */
    Ke(this, ts, (e) => {
      if (B(this, Wn).has(e)) {
        var n = (
          /** @type {Key} */
          B(this, Wn).get(e)
        ), r = B(this, ar).get(n);
        if (r)
          Vs(r), B(this, bi).delete(n);
        else {
          var i = B(this, En).get(n);
          i && (Vs(i.effect), B(this, ar).set(n, i.effect), B(this, En).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [a, s] of B(this, Wn)) {
          if (B(this, Wn).delete(a), a === e)
            break;
          const o = B(this, En).get(s);
          o && (Wt(o.effect), B(this, En).delete(s));
        }
        for (const [a, s] of B(this, ar)) {
          if (a === n || B(this, bi).has(a)) continue;
          const o = () => {
            if (Array.from(B(this, Wn).values()).includes(a)) {
              var u = document.createDocumentFragment();
              Uo(s, u), u.append(ur()), B(this, En).set(a, { effect: s, fragment: u });
            } else
              Wt(s);
            B(this, bi).delete(a), B(this, ar).delete(a);
          };
          B(this, es) || !r ? (B(this, bi).add(a), pi(s, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Ke(this, sl, (e) => {
      B(this, Wn).delete(e);
      const n = Array.from(B(this, Wn).values());
      for (const [r, i] of B(this, En))
        n.includes(r) || (Wt(i.effect), B(this, En).delete(r));
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
      we
    ), i = Nd();
    if (n && !B(this, ar).has(e) && !B(this, En).has(e))
      if (i) {
        var a = document.createDocumentFragment(), s = ur();
        a.append(s), B(this, En).set(e, {
          effect: un(() => n(s)),
          fragment: a
        });
      } else
        B(this, ar).set(
          e,
          un(() => n(this.anchor))
        );
    if (B(this, Wn).set(r, e), i) {
      for (const [o, c] of B(this, ar))
        o === e ? r.unskip_effect(c) : r.skip_effect(c);
      for (const [o, c] of B(this, En))
        o === e ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
      r.oncommit(B(this, ts)), r.ondiscard(B(this, sl));
    } else
      B(this, ts).call(this, r);
  }
}
Wn = new WeakMap(), ar = new WeakMap(), En = new WeakMap(), bi = new WeakMap(), es = new WeakMap(), ts = new WeakMap(), sl = new WeakMap();
function Se(t, e, ...n) {
  var r = new ul(t);
  fa(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((a) => i(a, ...n)));
  }, hr);
}
function nt(t) {
  ut === null && wo(), da && ut.l !== null ? Wv(ut).m.push(t) : Ce(() => {
    const e = Jn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Nr(t) {
  ut === null && wo(), nt(() => () => Jn(t));
}
function Wv(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function pe(t, e, n = !1) {
  var r = new ul(t), i = n ? hr : 0;
  function a(s, o) {
    r.ensure(s, o);
  }
  fa(() => {
    var s = !1;
    e((o, c = 0) => {
      s = !0, a(c, o);
    }), s || a(-1, null);
  }, i);
}
function Bi(t, e) {
  return e;
}
function qv(t, e, n) {
  for (var r = [], i = e.length, a, s = e.length, o = 0; o < i; o++) {
    let m = e[o];
    pi(
      m,
      () => {
        if (a) {
          if (a.pending.delete(m), a.done.add(m), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            io(t, ol(a.done)), f.delete(a), f.size === 0 && (t.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var c = r.length === 0 && n !== null && t.pending.size === 0;
    if (c) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      mv(d), d.append(u), t.items.clear();
    }
    io(t, e, !c);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function io(t, e, n = !0) {
  var r;
  if (t.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const s of t.pending.values())
      for (const o of s)
        r.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    if (r != null && r.has(a)) {
      a.f |= lr;
      const s = document.createDocumentFragment();
      Uo(a, s);
    } else
      Wt(e[i], n);
  }
}
var Sc;
function Nn(t, e, n, r, i, a = null) {
  var s = t, o = /* @__PURE__ */ new Map(), c = (e & 4) !== 0;
  if (c) {
    var u = (
      /** @type {Element} */
      t
    );
    s = u.appendChild(ur());
  }
  var d = null, m = /* @__PURE__ */ Lo(() => {
    var I = n();
    return (
      /** @type {V[]} */
      ll(I) ? I : I == null ? [] : ol(I)
    );
  }), f = /* @__PURE__ */ new Map(), v = !0;
  function h(I) {
    if (!(_.effect.f & jt)) {
      _.pending.delete(I);
      var A = l(m);
      _.fallback = d, Kv(_, A, s, e, r), d !== null && (A.length === 0 ? d.f & lr ? (d.f ^= lr, Ua(d, null, s)) : Vs(d) : pi(d, () => {
        d = null;
      }));
    }
  }
  function g(I) {
    _.pending.delete(I);
  }
  var p = fa(() => {
    for (var I = (
      /** @type {V[]} */
      l(m)
    ), A = I.length, S = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      we
    ), E = Nd(), w = 0; w < A; w += 1) {
      var y = I[w], T = r(y, w), N = v ? null : o.get(T);
      N ? (N.v && ea(N.v, y), N.i && ea(N.i, w), E && C.unskip_effect(N.e)) : (N = zv(
        o,
        v ? s : Sc ?? (Sc = ur()),
        y,
        T,
        w,
        i,
        e,
        n
      ), v || (N.e.f |= lr), o.set(T, N)), S.add(T);
    }
    if (A === 0 && a && !d && (v ? d = un(() => a(s)) : (d = un(() => a(Sc ?? (Sc = ur()))), d.f |= lr)), A > S.size && Gh(), !v)
      if (f.set(C, S), E) {
        for (const [Z, W] of o)
          S.has(Z) || C.skip_effect(W.e);
        C.oncommit(h), C.ondiscard(g);
      } else
        h(C);
    l(m);
  }), _ = { effect: p, items: o, pending: f, outrogroups: null, fallback: d };
  v = !1;
}
function Ia(t) {
  for (; t !== null && !(t.f & Yn); )
    t = t.next;
  return t;
}
function Kv(t, e, n, r, i) {
  var N, Z, W, D, x, O, R, V, k;
  var a = (r & 8) !== 0, s = e.length, o = t.items, c = Ia(t.effect.first), u, d = null, m, f = [], v = [], h, g, p, _;
  if (a)
    for (_ = 0; _ < s; _ += 1)
      h = e[_], g = i(h, _), p = /** @type {EachItem} */
      o.get(g).e, p.f & lr || ((Z = (N = p.nodes) == null ? void 0 : N.a) == null || Z.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(p));
  for (_ = 0; _ < s; _ += 1) {
    if (h = e[_], g = i(h, _), p = /** @type {EachItem} */
    o.get(g).e, t.outrogroups !== null)
      for (const K of t.outrogroups)
        K.pending.delete(p), K.done.delete(p);
    if (p.f & nn && (Vs(p), a && ((D = (W = p.nodes) == null ? void 0 : W.a) == null || D.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(p))), p.f & lr)
      if (p.f ^= lr, p === c)
        Ua(p, null, n);
      else {
        var I = d ? d.next : c;
        p === t.effect.last && (t.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Br(t, d, p), Br(t, p, I), Ua(p, I, n), d = p, f = [], v = [], c = Ia(d.next);
        continue;
      }
    if (p !== c) {
      if (u !== void 0 && u.has(p)) {
        if (f.length < v.length) {
          var A = v[0], S;
          d = A.prev;
          var C = f[0], E = f[f.length - 1];
          for (S = 0; S < f.length; S += 1)
            Ua(f[S], A, n);
          for (S = 0; S < v.length; S += 1)
            u.delete(v[S]);
          Br(t, C.prev, E.next), Br(t, d, C), Br(t, E, A), c = A, d = E, _ -= 1, f = [], v = [];
        } else
          u.delete(p), Ua(p, c, n), Br(t, p.prev, p.next), Br(t, p, d === null ? t.effect.first : d.next), Br(t, d, p), d = p;
        continue;
      }
      for (f = [], v = []; c !== null && c !== p; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(c), v.push(c), c = Ia(c.next);
      if (c === null)
        continue;
    }
    p.f & lr || f.push(p), d = p, c = Ia(p.next);
  }
  if (t.outrogroups !== null) {
    for (const K of t.outrogroups)
      K.pending.size === 0 && (io(t, ol(K.done)), (x = t.outrogroups) == null || x.delete(K));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var w = [];
    if (u !== void 0)
      for (p of u)
        p.f & nn || w.push(p);
    for (; c !== null; )
      !(c.f & nn) && c !== t.fallback && w.push(c), c = Ia(c.next);
    var y = w.length;
    if (y > 0) {
      var T = r & 4 && s === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < y; _ += 1)
          (R = (O = w[_].nodes) == null ? void 0 : O.a) == null || R.measure();
        for (_ = 0; _ < y; _ += 1)
          (k = (V = w[_].nodes) == null ? void 0 : V.a) == null || k.fix();
      }
      qv(t, w, T);
    }
  }
  a && Dn(() => {
    var K, P;
    if (m !== void 0)
      for (p of m)
        (P = (K = p.nodes) == null ? void 0 : K.a) == null || P.apply();
  });
}
function zv(t, e, n, r, i, a, s, o) {
  var c = s & 1 ? s & 16 ? Si(n) : /* @__PURE__ */ Td(n, !1, !1) : null, u = s & 2 ? Si(i) : null;
  return {
    v: c,
    i: u,
    e: un(() => (a(e, c ?? n, u ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Ua(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, a = e && !(e.f & lr) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ as(r)
      );
      if (a.before(r), r === i)
        return;
      r = s;
    }
}
function Br(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Mr(t, e, n) {
  var r = new ul(t);
  fa(() => {
    var i = e() ?? null;
    r.ensure(i, i && ((a) => n(a, i)));
  }, hr);
}
const Xv = () => performance.now(), wr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Xv(),
  tasks: /* @__PURE__ */ new Set()
};
function $d() {
  const t = wr.now();
  wr.tasks.forEach((e) => {
    e.c(t) || (wr.tasks.delete(e), e.f());
  }), wr.tasks.size !== 0 && wr.tick($d);
}
function Yv(t) {
  let e;
  return wr.tasks.size === 0 && wr.tick($d), {
    promise: new Promise((n) => {
      wr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      wr.tasks.delete(e);
    }
  };
}
function gs(t, e) {
  Jr(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Zv(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ac(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Zv(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Qv = (t) => t;
let ef = null;
function yc(t) {
  ef = t;
}
function Jv(t, e, n) {
  var r = ef ?? /** @type {Effect} */
  qe, i = (
    /** @type {EffectNodes} */
    r.nodes
  ), a, s, o, c = null;
  i.a ?? (i.a = {
    element: t,
    measure() {
      a = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), s = this.element.getBoundingClientRect(), a.left !== s.left || a.right !== s.right || a.top !== s.top || a.bottom !== s.bottom) {
        const u = e()(this.element, { from: a, to: s }, n == null ? void 0 : n());
        o = Ws(
          this.element,
          u,
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
        var { position: u, width: d, height: m } = getComputedStyle(t);
        if (u !== "absolute" && u !== "fixed") {
          var f = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
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
      if (c) {
        var u = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        u.position = c.position, u.width = c.width, u.height = c.height, u.transform = c.transform;
      }
    }
  }), i.a.element = t;
}
function js(t, e, n, r) {
  var A;
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, o = (t & 4) !== 0, c = s ? "both" : i ? "in" : "out", u, d = e.inert, m = e.style.overflow, f, v;
  function h() {
    return Jr(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: c
    })));
  }
  var g = {
    is_global: o,
    in() {
      var S;
      if (e.inert = d, !i) {
        v == null || v.abort(), (S = v == null ? void 0 : v.reset) == null || S.call(v);
        return;
      }
      a || f == null || f.abort(), f = Ws(
        e,
        h(),
        v,
        1,
        () => {
          gs(e, "introstart");
        },
        () => {
          gs(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = m;
        }
      );
    },
    out(S) {
      if (!a) {
        S == null || S(), u = void 0;
        return;
      }
      e.inert = !0, v = Ws(
        e,
        h(),
        f,
        0,
        () => {
          gs(e, "outrostart");
        },
        () => {
          gs(e, "outroend"), S == null || S();
        }
      );
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, p = (
    /** @type {Effect & { nodes: EffectNodes }} */
    qe
  );
  if (((A = p.nodes).t ?? (A.t = [])).push(g), i && Gs) {
    var _ = o;
    if (!_) {
      for (var I = (
        /** @type {Effect | null} */
        p.parent
      ); I && I.f & hr; )
        for (; (I = I.parent) && !(I.f & Mn); )
          ;
      _ = !I || (I.f & Ti) !== 0;
    }
    _ && Ci(() => {
      Jn(() => g.in());
    });
  }
}
function Ws(t, e, n, r, i, a) {
  var s = r === 1, o = !1;
  if (Ui(e)) {
    var c;
    return Dn(() => {
      if (!o) {
        var g = e({ direction: s ? "in" : "out" });
        c = Ws(t, g, n, r, i, a);
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
      abort: he,
      deactivate: he,
      reset: he,
      t: () => r
    };
  const { delay: u = 0, css: d, tick: m, easing: f = Qv } = e;
  var v, h = () => 1 - r;
  return Dn(() => {
    if (!o) {
      var g = [];
      if (s && n === void 0 && (m && m(0, 1), d)) {
        var p = Ac(d(0, 1));
        g.push(p, p);
      }
      v = t.animate(g, { duration: u, fill: "forwards" }), v.onfinish = () => {
        v.cancel(), i();
        var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
        n == null || n.abort();
        var I = r - _, A = (
          /** @type {number} */
          e.duration * Math.abs(I)
        ), S = [];
        if (A > 0) {
          var C = !1;
          if (d)
            for (var E = Math.ceil(A / 16.666666666666668), w = 0; w <= E; w += 1) {
              var y = _ + I * f(w / E), T = Ac(d(y, 1 - y));
              S.push(T), C || (C = T.overflow === "hidden");
            }
          C && (t.style.overflow = "hidden"), h = () => {
            var N = (
              /** @type {number} */
              /** @type {globalThis.Animation} */
              v.currentTime
            );
            return _ + I * f(N / A);
          }, m && Yv(() => {
            if (v.playState !== "running") return !1;
            var N = h();
            return m(N, 1 - N), !0;
          });
        }
        v = t.animate(S, { duration: A, fill: "forwards" }), v.onfinish = () => {
          h = () => r, m == null || m(r, 1 - r), a();
        };
      };
    }
  }), {
    abort: () => {
      o = !0, v && (v.cancel(), v.effect = null, v.onfinish = he);
    },
    deactivate: () => {
      a = he;
    },
    reset: () => {
      r === 0 && (m == null || m(1, 0));
    },
    t: () => h()
  };
}
function Tc(t, e, n, r, i, a) {
  var s = null, o = (
    /** @type {TemplateNode} */
    t
  ), c = (
    /** @type {Effect} */
    qe
  ), u = new ul(o, !1);
  fa(() => {
    const d = e() || null;
    var m = d === "svg" ? Oh : void 0;
    if (d === null) {
      u.ensure(null, null), vs(!0);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        var v = Fh;
        if (s = Md(d, m), na(s, s), r) {
          var h = null, g = s.appendChild(ur());
          yc(c), r(s, g), h == null || h.remove(), yc(null);
        }
        qe.nodes.end = s, v || f.before(s);
      }
    }), vs(!0), () => {
      d && vs(!1);
    };
  }, hr), ss(() => {
    vs(!0);
  });
}
function Pe(t, e, n) {
  Ci(() => {
    var r = Jn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ls(() => {
        var s = n();
        Zd(s), i && xo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function $v(t, e) {
  var n = void 0, r;
  Ud(() => {
    n !== (n = e()) && (r && (Wt(r), r = null), n && (r = un(() => {
      Ci(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function tf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = tf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function em() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = tf(t)) && (r && (r += " "), r += e);
  return r;
}
function nf(t) {
  return typeof t == "object" ? em(t) : t ?? "";
}
const Cc = [...` 	
\r\f \v\uFEFF`];
function tm(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var o = s + a;
          (s === 0 || Cc.includes(r[s - 1])) && (o === r.length || Cc.includes(r[o])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(o + 1) : s = o;
        }
  }
  return r === "" ? null : r;
}
function xc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i of Object.keys(t)) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function yl(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function nm(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\/\*.*?\*\//g, "").trim();
      var a = !1, s = 0, o = !1, c = [];
      r && c.push(...Object.keys(r).map(yl)), i && c.push(...Object.keys(i).map(yl));
      var u = 0, d = -1;
      const g = t.length;
      for (var m = 0; m < g; m++) {
        var f = t[m];
        if (o ? f === "/" && t[m - 1] === "*" && (o = !1) : a ? a === f && (a = !1) : f === "/" && t[m + 1] === "*" ? o = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !o && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = m;
          else if (f === ";" || m === g - 1) {
            if (d !== -1) {
              var v = yl(t.substring(u, d).trim());
              if (!c.includes(v)) {
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
    return r && (n += xc(r)), i && (n += xc(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Bo(t, e, n, r, i, a) {
  var s = (
    /** @type {any} */
    t[Wl]
  );
  if (s !== n || s === void 0) {
    var o = tm(n, r, a);
    o == null ? t.removeAttribute("class") : e ? t.className = o : t.setAttribute("class", o), t[Wl] = n;
  } else if (a && i !== a)
    for (var c in a) {
      var u = !!a[c];
      (i == null || u !== !!i[c]) && t.classList.toggle(c, u);
    }
  return a;
}
function Tl(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ut(t, e, n, r) {
  var i = (
    /** @type {any} */
    t[ql]
  );
  if (i !== e) {
    var a = nm(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t[ql] = e;
  } else r && (Array.isArray(r) ? (Tl(t, n == null ? void 0 : n[0], r[0]), Tl(t, n == null ? void 0 : n[1], r[1], "important")) : Tl(t, n, r));
  return r;
}
function rf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function wc(t, e) {
  var n = !("__defaultValue" in t);
  !n && t.__defaultValue === e || (t.__defaultValue = e, af(t, !n || "__value" in t));
}
function af(t, e) {
  var n = t.__defaultValue, r = t.multiple, i = r ? n ?? [] : null;
  if (!(r && !ll(i))) {
    var a = t.selectedIndex, s = e && r ? new Set(t.selectedOptions) : null;
    for (var o of t.options) {
      var c = so(o);
      rf(
        o,
        r ? (
          /** @type {any[]} */
          i.includes(c)
        ) : xd(c, n)
      );
    }
    if (e)
      if (s !== null)
        for (o of t.options) {
          var u = s.has(o);
          o.selected !== u && (o.selected = u);
        }
      else t.selectedIndex !== a && (t.selectedIndex = a);
  }
}
function ao(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ll(e))
      return kh();
    for (var r of t.options)
      r.selected = e.includes(so(r));
    return;
  }
  for (r of t.options) {
    var i = so(r);
    if (xd(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function rm(t) {
  var e = new MutationObserver((n) => {
    n.every(im) || ("__defaultValue" in t && af(t, !1), "__value" in t && ao(t, t.__value));
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
function so(t) {
  return "__value" in t ? t.__value : t.value;
}
function im(t) {
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
const Ea = Symbol("class"), Sa = Symbol("style"), sf = Symbol("is custom element"), lf = Symbol("is html"), am = cl ? "input" : "INPUT", sm = cl ? "option" : "OPTION", of = cl ? "select" : "SELECT", cf = cl ? "progress" : "PROGRESS";
function Oc(t, e) {
  var n = Fo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== cf) || (t.value = e ?? "");
}
function Or(t, e, n, r) {
  var i = Fo(t), a = i[e];
  a !== (i[e] = n) && (e === "loading" && (t[Hh] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && uf(t).has(e) ? t[e] = n : t.setAttribute(e, n));
}
function lm(t, e, n, r, i = !1, a = !1) {
  var s = Fo(t), o = s[sf], c = !s[lf], u = e || {}, d = t.nodeName === sm, m = t.nodeName === of;
  try {
    for (var f in e)
      !(f in n) && f[0] + f[1] !== "$$" && (n[f] = null);
    n.class ? n.class = nf(n.class) : (r || n[Ea]) && (n.class = null), n[Sa] && (n.style ?? (n.style = null));
    var v = uf(t);
    if (t.nodeName === am && "type" in n && ("value" in n || "__value" in n)) {
      var h = n.type;
      (h !== u.type || h === void 0 && t.hasAttribute("type")) && (u.type = h, Or(t, "type", h, a));
    }
    for (const C in n) {
      let E = n[C];
      if (d && C === "value" && E == null) {
        t.value = t.__value = "", u[C] = E;
        continue;
      }
      if (C === "class") {
        var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
        Bo(t, g, E, r, e == null ? void 0 : e[Ea], n[Ea]), u[C] = E, u[Ea] = n[Ea];
        continue;
      }
      if (C === "style") {
        Ut(t, E, e == null ? void 0 : e[Sa], n[Sa]), u[C] = E, u[Sa] = n[Sa];
        continue;
      }
      var p = u[C];
      if (!(E === p && !(E === void 0 && t.hasAttribute(C)))) {
        u[C] = E;
        var _ = C[0] + C[1];
        if (_ !== "$$")
          if (_ === "on") {
            const w = {}, y = "$$" + C;
            let T = C.slice(2);
            var I = Ov(T);
            if (xv(T) && (T = T.slice(0, -7), w.capture = !0), !I && p) {
              if (E != null) continue;
              t.removeEventListener(T, u[y], w), u[y] = null;
            }
            if (I)
              Zn(T, t, E), yn([T]);
            else if (E != null) {
              let N = function(Z) {
                u[C].call(this, Z);
              };
              u[y] = ko(T, t, N, w);
            }
          } else if (C === "style")
            Or(t, C, E);
          else if (C === "autofocus")
            rv(
              /** @type {HTMLElement} */
              t,
              !!E
            );
          else if (!o && (C === "__value" || C === "value" && E != null))
            t.__value = E, (p == null || // @ts-ignore
            t.value !== E || E === 0 && t.nodeName === cf) && (t.value = E);
          else if (C === "selected" && d)
            rf(
              /** @type {HTMLOptionElement} */
              t,
              E
            );
          else {
            var A = C;
            c || (A = Lv(A));
            var S = A === "defaultValue" || A === "defaultChecked";
            if (m && A === "defaultValue") continue;
            if (E == null && !o && !S)
              if (s[C] = null, A === "value" || A === "checked") {
                let w = (
                  /** @type {HTMLInputElement} */
                  t
                );
                const y = e === void 0;
                if (A === "value") {
                  let T = w.defaultValue;
                  w.removeAttribute(A), w.defaultValue = T, w.value = w.__value = y ? T : null;
                } else {
                  let T = w.defaultChecked;
                  w.removeAttribute(A), w.defaultChecked = T, w.checked = y ? T : !1;
                }
              } else
                t.removeAttribute(C);
            else S || (o || typeof E != "string") && v.has(A) ? (t[A] = E, A in s && (s[A] = Ct)) : typeof E != "function" && Or(t, A, E, a);
          }
      }
    }
  } finally {
  }
  return u;
}
function Fe(t, e, n = [], r = [], i = [], a, s = !1, o = !1) {
  hd(i, n, r, (c) => {
    var u = void 0, d = {}, m = t.nodeName === of, f = !1;
    if (Ud(() => {
      var h = e(...c.map(l)), g = lm(
        t,
        u,
        h,
        a,
        s,
        o
      );
      if (f && m) {
        var p = (
          /** @type {HTMLSelectElement} */
          t
        );
        "defaultValue" in h && wc(p, h.defaultValue), "value" in h && ao(p, h.value);
      }
      for (let I of Object.getOwnPropertySymbols(d))
        h[I] || Wt(d[I]);
      for (let I of Object.getOwnPropertySymbols(h)) {
        var _ = h[I];
        I.description === Rh && (!u || _ !== u[I]) && (d[I] && Wt(d[I]), d[I] = un(() => $v(t, () => _))), g[I] = _;
      }
      u = g;
    }), m) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Ci(() => {
        var h = (
          /** @type {Record<string | symbol, any>} */
          u
        );
        "defaultValue" in h && wc(v, h.defaultValue), ao(v, h.value, !0), rm(v);
      });
    }
    f = !0;
  });
}
function Fo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[Os] ?? (t[Os] = {
      [sf]: t.nodeName.includes("-"),
      [lf]: t.namespaceURI === ed
    })
  );
}
var Rc = /* @__PURE__ */ new Map();
function uf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Rc.get(e);
  if (n) return n;
  Rc.set(e, n = /* @__PURE__ */ new Set());
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = nd(i);
    for (var s in r)
      r[s].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
    i = yo(i);
  }
  return n;
}
function Ka(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  fd(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Cl(t) ? xl(a) : a, n(a), we !== null && r.add(we), await zd(), a !== (a = e())) {
      var s = t.selectionStart, o = t.selectionEnd, c = t.value.length;
      if (t.value = a ?? "", o !== null) {
        var u = t.value.length;
        s === o && o === c && u > c ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(o, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Jn(e) == null && t.value && (n(Cl(t) ? xl(t.value) : t.value), we !== null && r.add(we)), ls(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        we
      );
      if (r.has(a))
        return;
    }
    Cl(t) && i === xl(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function om(t, e, n = e) {
  fd(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Jn(e) == null && n(t.checked), ls(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Cl(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function xl(t) {
  return t === "" ? null : +t;
}
function wl(t, e) {
  return t === e || (t == null ? void 0 : t[or]) === e;
}
function Ee(t = Oo(), e, n, r) {
  var i = (
    /** @type {ComponentContext} */
    ut.r
  ), a = (
    /** @type {Effect} */
    qe
  );
  return Ci(() => {
    var s, o;
    return ls(() => {
      s = o, o = (r == null ? void 0 : r()) || [], Jn(() => {
        wl(n(...o), t) || (e(t, ...o), s && wl(n(...s), t) && e(null, ...s));
      });
    }), () => {
      let c = a;
      for (; c !== i && c.parent !== null && c.parent.f & Wa; )
        c = c.parent;
      const u = () => {
        o && wl(n(...o), t) && e(null, ...o);
      }, d = c.teardown;
      c.teardown = () => {
        u(), d == null || d();
      };
    };
  }), t;
}
function cm(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ut
  ), n = e.l.u;
  if (!n) return;
  let r = () => Zd(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ $i(() => {
      let o = !1;
      const c = e.s;
      for (const u in c)
        c[u] !== a[u] && (a[u] = c[u], o = !0);
      return o && i++, i;
    });
    r = () => l(s);
  }
  n.b.length && Hd(() => {
    Lc(e, r), Hs(n.b);
  }), Ce(() => {
    const i = Jn(() => n.m.map(Dh));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Ce(() => {
    Lc(e, r), Hs(n.a);
  });
}
function Lc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) l(n);
  e();
}
function Vo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), he;
  const r = Jn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Di = [];
function um(t, e) {
  return {
    subscribe: rn(t, e).subscribe
  };
}
function rn(t, e = he) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(o) {
    if (xo(t, o) && (t = o, n)) {
      const c = !Di.length;
      for (const u of r)
        u[1](), Di.push(u, t);
      if (c) {
        for (let u = 0; u < Di.length; u += 2)
          Di[u][0](Di[u + 1]);
        Di.length = 0;
      }
    }
  }
  function a(o) {
    i(o(
      /** @type {T} */
      t
    ));
  }
  function s(o, c = he) {
    const u = [o, c];
    return r.add(u), r.size === 1 && (n = e(i, a) || he), o(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function ha(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return um(n, (s, o) => {
    let c = !1;
    const u = [];
    let d = 0, m = he;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? u[0] : u, s, o);
      a ? s(h) : m = typeof h == "function" ? h : he;
    }, v = i.map(
      (h, g) => Vo(
        h,
        (p) => {
          u[g] = p, d &= ~(1 << g), c && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return c = !0, f(), function() {
      Hs(v), m(), c = !1;
    };
  });
}
function dm(t) {
  let e;
  return Vo(t, (n) => e = n)(), e;
}
let bs = !1, lo = Symbol("unmounted");
function fr(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Td(void 0),
    unsubscribe: he
  });
  if (r.store !== t && !(lo in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = he;
    else {
      var i = !0;
      r.unsubscribe = Vo(t, (a) => {
        i ? r.source.v = a : q(r.source, a);
      }), i = !1;
    }
  return t && lo in n ? dm(t) : l(r.source);
}
function yi(t, e) {
  return fm(t, e), e;
}
function Dr() {
  const t = {};
  function e() {
    ss(() => {
      for (var n in t)
        t[n].unsubscribe();
      Ao(t, lo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function fm(t, e) {
  try {
    t.set(e);
  } finally {
  }
}
function hm(t) {
  var e = bs;
  try {
    return bs = !1, [t(), bs];
  } finally {
    bs = e;
  }
}
const vm = {
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
function ze(t, e, n) {
  return new Proxy({ props: t, exclude: e }, vm);
}
const mm = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ui(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Ui(i) && (i = i());
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
      if (Ui(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = zr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === or || e === sd) return !1;
    for (let n of t.props)
      if (Ui(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ui(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function it(...t) {
  return new Proxy({ props: t }, mm);
}
function b(t, e, n, r) {
  var S;
  var i = !da || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, o = (
    /** @type {V} */
    r
  ), c = !0, u = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), d = () => s && i ? (u ?? (u = /* @__PURE__ */ $i(
    /** @type {() => V} */
    r
  )), l(u)) : (c && (c = !1, o = s ? Jn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o);
  let m;
  if (a) {
    var f = or in t || sd in t;
    m = ((S = zr(t, e)) == null ? void 0 : S.set) ?? (f && e in t ? (C) => t[e] = C : void 0);
  }
  var v, h = !1;
  a ? [v, h] = hm(() => (
    /** @type {V} */
    t[e]
  )) : v = /** @type {V} */
  t[e], v === void 0 && r !== void 0 && (v = d(), m && (i && zh(), m(v)));
  var g;
  if (i ? g = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C === void 0 ? d() : (c = !0, C);
  } : g = () => {
    var C = (
      /** @type {V} */
      t[e]
    );
    return C !== void 0 && (o = /** @type {V} */
    void 0), C === void 0 ? o : C;
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
  var _ = !1, I = (n & 1 ? $i : Lo)(() => (_ = !1, g()));
  a && l(I);
  var A = (
    /** @type {Effect} */
    qe
  );
  return (
    /** @type {() => V} */
    function(C, E) {
      if (arguments.length > 0) {
        const w = E ? l(I) : i && a ? oe(C) : C;
        return q(I, w), _ = !0, o !== void 0 && (o = w), C;
      }
      return Lr && _ || A.f & jt ? I.v : l(I);
    }
  );
}
const gm = "5";
var Ju;
typeof window < "u" && ((Ju = window.__svelte ?? (window.__svelte = {})).v ?? (Ju.v = /* @__PURE__ */ new Set())).add(gm);
function bm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var pm = function(e) {
  return _m(e) && !Im(e);
};
function _m(t) {
  return !!t && typeof t == "object";
}
function Im(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Am(t);
}
var Em = typeof Symbol == "function" && Symbol.for, Sm = Em ? Symbol.for("react.element") : 60103;
function Am(t) {
  return t.$$typeof === Sm;
}
function ym(t) {
  return Array.isArray(t) ? [] : {};
}
function za(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ra(ym(t), t, e) : t;
}
function Tm(t, e, n) {
  return t.concat(e).map(function(r) {
    return za(r, n);
  });
}
function Cm(t, e) {
  if (!e.customMerge)
    return ra;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ra;
}
function xm(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Nc(t) {
  return Object.keys(t).concat(xm(t));
}
function df(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function wm(t, e) {
  return df(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Om(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Nc(t).forEach(function(i) {
    r[i] = za(t[i], n);
  }), Nc(e).forEach(function(i) {
    wm(t, i) || (df(t, i) && n.isMergeableObject(e[i]) ? r[i] = Cm(i, n)(t[i], e[i], n) : r[i] = za(e[i], n));
  }), r;
}
function ra(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Tm, n.isMergeableObject = n.isMergeableObject || pm, n.cloneUnlessOtherwiseSpecified = za;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Om(t, e, n) : za(e, n);
}
ra.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return ra(r, i, n);
  }, {});
};
var Rm = ra, Lm = Rm;
const Nm = /* @__PURE__ */ bm(Lm);
var oo = function(t, e) {
  return oo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, oo(t, e);
};
function vn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  oo(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var Ze = function() {
  return Ze = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ze.apply(this, arguments);
};
function Mm(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Dm(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function o(d) {
      try {
        u(r.next(d));
      } catch (m) {
        s(m);
      }
    }
    function c(d) {
      try {
        u(r.throw(d));
      } catch (m) {
        s(m);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(o, c);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function ff(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = o(0), s.throw = o(1), s.return = o(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(u) {
    return function(d) {
      return c([u, d]);
    };
  }
  function c(u) {
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
function ia(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function aa(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
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
function Rr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Gi(t) {
  return this instanceof Gi ? (this.v = t, this) : new Gi(t);
}
function Pm(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(v) {
    return function(h) {
      return Promise.resolve(h).then(v, m);
    };
  }
  function o(v, h) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(p, _) {
        a.push([v, g, p, _]) > 1 || c(v, g);
      });
    }, h && (i[v] = h(i[v])));
  }
  function c(v, h) {
    try {
      u(r[v](h));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(v) {
    v.value instanceof Gi ? Promise.resolve(v.value.v).then(d, m) : f(a[0][2], v);
  }
  function d(v) {
    c("next", v);
  }
  function m(v) {
    c("throw", v);
  }
  function f(v, h) {
    v(h), a.shift(), a.length && c(a[0][0], a[0][1]);
  }
}
function Hm(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof ia == "function" ? ia(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(o, c) {
        s = t[a](s), i(o, c, s.done, s.value);
      });
    };
  }
  function i(a, s, o, c) {
    Promise.resolve(c).then(function(u) {
      a({ value: u, done: o });
    }, s);
  }
}
function Ol(t, e) {
  var n = e && e.cache ? e.cache : jm, r = e && e.serializer ? e.serializer : Vm, i = e && e.strategy ? e.strategy : Bm;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Um(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function km(t, e, n, r) {
  var i = Um(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function hf(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function vf(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Bm(t, e) {
  var n = t.length === 1 ? km : hf;
  return vf(t, this, n, e.cache.create(), e.serializer);
}
function Fm(t, e) {
  return vf(t, this, hf, e.cache.create(), e.serializer);
}
var Vm = function() {
  return JSON.stringify(arguments);
}, Gm = (
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
), jm = {
  create: function() {
    return new Gm();
  }
}, Rl = {
  variadic: Fm
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var bt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(bt || (bt = {}));
var sa;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(sa || (sa = {}));
function Mc(t) {
  return t.type === bt.literal;
}
function Wm(t) {
  return t.type === bt.argument;
}
function mf(t) {
  return t.type === bt.number;
}
function gf(t) {
  return t.type === bt.date;
}
function bf(t) {
  return t.type === bt.time;
}
function pf(t) {
  return t.type === bt.select;
}
function _f(t) {
  return t.type === bt.plural;
}
function qm(t) {
  return t.type === bt.pound;
}
function If(t) {
  return t.type === bt.tag;
}
function Ef(t) {
  return !!(t && typeof t == "object" && t.type === sa.number);
}
function co(t) {
  return !!(t && typeof t == "object" && t.type === sa.dateTime);
}
var Sf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Km = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function zm(t) {
  var e = {};
  return t.replace(Km, function(n) {
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
var Xm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ym(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Xm).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], c = s.slice(1), u = 0, d = c; u < d.length; u++) {
      var m = d[u];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: c });
  }
  return n;
}
function Zm(t) {
  return t.replace(/^(.*?)-/, "");
}
var Dc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Af = /^(@+)?(\+|#+)?[rs]?$/g, Qm = /(\*)(0+)|(#+)(0+)|(0+)/g, yf = /^(0+)$/;
function Pc(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Af, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Tf(t) {
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
function Jm(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !yf.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Hc(t) {
  var e = {}, n = Tf(t);
  return n || e;
}
function $m(t) {
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
        e.style = "unit", e.unit = Zm(i.options[0]);
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
        e = Ze(Ze(Ze({}, e), { notation: "scientific" }), i.options.reduce(function(c, u) {
          return Ze(Ze({}, c), Hc(u));
        }, {}));
        continue;
      case "engineering":
        e = Ze(Ze(Ze({}, e), { notation: "engineering" }), i.options.reduce(function(c, u) {
          return Ze(Ze({}, c), Hc(u));
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
        i.options[0].replace(Qm, function(c, u, d, m, f, v) {
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
    if (yf.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Dc.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Dc, function(c, u, d, m, f, v) {
        return d === "*" ? e.minimumFractionDigits = u.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = Ze(Ze({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = Ze(Ze({}, e), Pc(a)));
      continue;
    }
    if (Af.test(i.stem)) {
      e = Ze(Ze({}, e), Pc(i.stem));
      continue;
    }
    var s = Tf(i.stem);
    s && (e = Ze(Ze({}, e), s));
    var o = Jm(i.stem);
    o && (e = Ze(Ze({}, e), o));
  }
  return e;
}
var ps = {
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
function eg(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), c = "a", u = tg(e);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += c;
      for (; s-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function tg(t) {
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
  var i = ps[r || ""] || ps[n || ""] || ps["".concat(n, "-001")] || ps["001"];
  return i[0];
}
var Ll, ng = new RegExp("^".concat(Sf.source, "*")), rg = new RegExp("".concat(Sf.source, "*$"));
function Je(t, e) {
  return { start: t, end: e };
}
var ig = !!String.prototype.startsWith && "_a".startsWith("a", 1), ag = !!String.fromCodePoint, sg = !!Object.fromEntries, lg = !!String.prototype.codePointAt, og = !!String.prototype.trimStart, cg = !!String.prototype.trimEnd, ug = !!Number.isSafeInteger, dg = ug ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, uo = !0;
try {
  var fg = xf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  uo = ((Ll = fg.exec("a")) === null || Ll === void 0 ? void 0 : Ll[0]) === "a";
} catch {
  uo = !1;
}
var Uc = ig ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), fo = ag ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, s; i > a; ) {
      if (s = e[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), kc = (
  // native
  sg ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], o = a[1];
        n[s] = o;
      }
      return n;
    }
  )
), Cf = lg ? (
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
), hg = og ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(ng, "");
  }
), vg = cg ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(rg, "");
  }
);
function xf(t, e) {
  return new RegExp(t, e);
}
var ho;
if (uo) {
  var Bc = xf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ho = function(e, n) {
    var r;
    Bc.lastIndex = n;
    var i = Bc.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ho = function(e, n) {
    for (var r = []; ; ) {
      var i = Cf(e, n);
      if (i === void 0 || wf(i) || pg(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return fo.apply(void 0, r);
  };
var mg = (
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
          var s = this.parseArgument(e, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: bt.pound,
              location: Je(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Je(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && vo(this.peek() || 0)) {
            var s = this.parseTag(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(e, n);
            if (s.err)
              return s;
            i.push(s.val);
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
            type: bt.literal,
            value: "<".concat(i, "/>"),
            location: Je(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !vo(this.char()))
            return this.error(Ye.INVALID_TAG, Je(o, this.clonePosition()));
          var c = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Ye.UNMATCHED_CLOSING_TAG, Je(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: bt.tag,
              value: i,
              children: s,
              location: Je(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Je(o, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Je(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Je(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && bg(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(e, n);
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
      var c = Je(r, this.clonePosition());
      return {
        val: { type: bt.literal, value: i, location: c },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !gg(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return fo.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), fo(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Je(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Je(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: bt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Je(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Je(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = ho(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Je(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, c = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Je(s, c));
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
            var f = vg(m.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Je(this.clonePosition(), this.clonePosition()));
            var v = Je(d, this.clonePosition());
            u = { style: f, styleLocation: v };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = Je(i, this.clonePosition());
          if (u && Uc(u == null ? void 0 : u.style, "::", 0)) {
            var p = hg(u.style.slice(2));
            if (o === "number") {
              var m = this.parseNumberSkeletonFromString(p, u.styleLocation);
              return m.err ? m : {
                val: { type: bt.number, value: r, location: g, style: m.val },
                err: null
              };
            } else {
              if (p.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var _ = p;
              this.locale && (_ = eg(p, this.locale));
              var f = {
                type: sa.dateTime,
                pattern: _,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? zm(_) : {}
              }, I = o === "date" ? bt.date : bt.time;
              return {
                val: { type: I, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? bt.number : o === "date" ? bt.date : bt.time,
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
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Je(A, Ze({}, A)));
          this.bumpSpace();
          var S = this.parseIdentifierIfPossible(), C = 0;
          if (o !== "select" && S.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Je(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), S = this.parseIdentifierIfPossible(), C = m.val;
          }
          var E = this.tryParsePluralOrSelectOptions(e, o, n, S);
          if (E.err)
            return E;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var w = Je(i, this.clonePosition());
          return o === "select" ? {
            val: {
              type: bt.select,
              value: r,
              options: kc(E.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: bt.plural,
              value: r,
              options: kc(E.val),
              offset: C,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: w
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Je(s, c));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Je(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Je(i, this.clonePosition()));
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
        r = Ym(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: sa.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? $m(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, o = [], c = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Je(m, this.clonePosition()), u = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (c.has(u))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (s = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Je(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        o.push([
          u,
          {
            value: h.val,
            location: Je(v, this.clonePosition())
          }
        ]), c.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return o.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Je(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(Ye.MISSING_OTHER_CLAUSE, Je(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, s = s * 10 + (o - 48), this.bump();
        else
          break;
      }
      var c = Je(i, this.clonePosition());
      return a ? (s *= r, dg(s) ? { val: s, err: null } : this.error(n, c)) : this.error(e, c);
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
      var n = Cf(this.message, e);
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
      if (Uc(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && wf(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function vo(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function gg(t) {
  return vo(t) || t === 47;
}
function bg(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function wf(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function pg(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function mo(t) {
  t.forEach(function(e) {
    if (delete e.location, pf(e) || _f(e))
      for (var n in e.options)
        delete e.options[n].location, mo(e.options[n].value);
    else mf(e) && Ef(e.style) || (gf(e) || bf(e)) && co(e.style) ? delete e.style.location : If(e) && mo(e.children);
  });
}
function _g(t, e) {
  e === void 0 && (e = {}), e = Ze({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new mg(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || mo(n.val), n.val;
}
var la;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(la || (la = {}));
var dl = (
  /** @class */
  function(t) {
    vn(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Fc = (
  /** @class */
  function(t) {
    vn(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), la.INVALID_VALUE, a) || this;
    }
    return e;
  }(dl)
), Ig = (
  /** @class */
  function(t) {
    vn(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), la.INVALID_VALUE, i) || this;
    }
    return e;
  }(dl)
), Eg = (
  /** @class */
  function(t) {
    vn(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), la.MISSING_VALUE, r) || this;
    }
    return e;
  }(dl)
), tn;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(tn || (tn = {}));
function Sg(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== tn.literal || n.type !== tn.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Ag(t) {
  return typeof t == "function";
}
function Ms(t, e, n, r, i, a, s) {
  if (t.length === 1 && Mc(t[0]))
    return [
      {
        type: tn.literal,
        value: t[0].value
      }
    ];
  for (var o = [], c = 0, u = t; c < u.length; c++) {
    var d = u[c];
    if (Mc(d)) {
      o.push({
        type: tn.literal,
        value: d.value
      });
      continue;
    }
    if (qm(d)) {
      typeof a == "number" && o.push({
        type: tn.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new Eg(m, s);
    var f = i[m];
    if (Wm(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), o.push({
        type: typeof f == "string" ? tn.literal : tn.object,
        value: f
      });
      continue;
    }
    if (gf(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : co(d.style) ? d.style.parsedOptions : void 0;
      o.push({
        type: tn.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (bf(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : co(d.style) ? d.style.parsedOptions : r.time.medium;
      o.push({
        type: tn.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (mf(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Ef(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), o.push({
        type: tn.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (If(d)) {
      var h = d.children, g = d.value, p = i[g];
      if (!Ag(p))
        throw new Ig(g, "function", s);
      var _ = Ms(h, e, n, r, i, a), I = p(_.map(function(C) {
        return C.value;
      }));
      Array.isArray(I) || (I = [I]), o.push.apply(o, I.map(function(C) {
        return {
          type: typeof C == "string" ? tn.literal : tn.object,
          value: C
        };
      }));
    }
    if (pf(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Fc(d.value, f, Object.keys(d.options), s);
      o.push.apply(o, Ms(A.value, e, n, r, i));
      continue;
    }
    if (_f(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new dl(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, la.MISSING_INTL_API, s);
        var S = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[S] || d.options.other;
      }
      if (!A)
        throw new Fc(d.value, f, Object.keys(d.options), s);
      o.push.apply(o, Ms(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Sg(o);
}
function yg(t, e) {
  return e ? Ze(Ze(Ze({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = Ze(Ze({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Tg(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = yg(t[r], e[r]), n;
  }, Ze({}, t)) : t;
}
function Nl(t) {
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
function Cg(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ol(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: Nl(t.number),
      strategy: Rl.variadic
    }),
    getDateTimeFormat: Ol(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: Nl(t.dateTime),
      strategy: Rl.variadic
    }),
    getPluralRules: Ol(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Rr([void 0], n, !1)))();
    }, {
      cache: Nl(t.pluralRules),
      strategy: Rl.variadic
    })
  };
}
var Of = (
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
        var u = a.formatToParts(c);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(m, f) {
          return !m.length || f.type !== tn.literal || typeof m[m.length - 1] != "string" ? m.push(f.value) : m[m.length - 1] += f.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(c) {
        return Ms(a.ast, a.locales, a.formatters, a.formats, c, void 0, a.message);
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
        var s = i || {};
        s.formatters;
        var o = Mm(s, ["formatters"]);
        this.ast = t.__parse(e, Ze(Ze({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Tg(t.formats, r), this.formatters = i && i.formatters || Cg(this.formatterCache);
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
    }, t.__parse = _g, t.formats = {
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
function xg(t, e) {
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
const Kr = {}, wg = (t, e, n) => n && (e in Kr || (Kr[e] = {}), t in Kr[e] || (Kr[e][t] = n), n), Rf = (t, e) => {
  if (e == null)
    return;
  if (e in Kr && t in Kr[e])
    return Kr[e][t];
  const n = us(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Rg(i, t);
    if (a)
      return wg(t, e, a);
  }
};
let Go;
const cs = rn({});
function Og(t) {
  return Go[t] || null;
}
function Lf(t) {
  return t in Go;
}
function Rg(t, e) {
  if (!Lf(t))
    return null;
  const n = Og(t);
  return xg(n, e);
}
function Lg(t) {
  if (t == null)
    return;
  const e = us(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Lf(r))
      return r;
  }
}
function Nf(t, ...e) {
  delete Kr[t], cs.update((n) => (n[t] = Nm.all([n[t] || {}, ...e]), n));
}
ha(
  [cs],
  ([t]) => Object.keys(t)
);
cs.subscribe((t) => Go = t);
const Ds = {};
function Ng(t, e) {
  Ds[t].delete(e), Ds[t].size === 0 && delete Ds[t];
}
function Mf(t) {
  return Ds[t];
}
function Mg(t) {
  return us(t).map((e) => {
    const n = Mf(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function qs(t) {
  return t == null ? !1 : us(t).some(
    (e) => {
      var n;
      return (n = Mf(e)) == null ? void 0 : n.size;
    }
  );
}
function Dg(t, e) {
  return Promise.all(
    e.map((r) => (Ng(t, r), r().then((i) => i.default || i)))
  ).then((r) => Nf(t, ...r));
}
const Aa = {};
function Df(t) {
  if (!qs(t))
    return t in Aa ? Aa[t] : Promise.resolve();
  const e = Mg(t);
  return Aa[t] = Promise.all(
    e.map(
      ([n, r]) => Dg(n, r)
    )
  ).then(() => {
    if (qs(t))
      return Df(t);
    delete Aa[t];
  }), Aa[t];
}
var Vc = Object.getOwnPropertySymbols, Pg = Object.prototype.hasOwnProperty, Hg = Object.prototype.propertyIsEnumerable, Ug = (t, e) => {
  var n = {};
  for (var r in t)
    Pg.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Vc)
    for (var r of Vc(t))
      e.indexOf(r) < 0 && Hg.call(t, r) && (n[r] = t[r]);
  return n;
};
const kg = {
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
function Bg({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${us(
      t
    ).join('", "')}".${qs($r()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Fg = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: kg,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ka = Fg;
function oa() {
  return ka;
}
function Vg(t) {
  const e = t, { formats: n } = e, r = Ug(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Of.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Bg : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ka, r, { initialLocale: i }), n && ("number" in n && Object.assign(ka.formats.number, n.number), "date" in n && Object.assign(ka.formats.date, n.date), "time" in n && Object.assign(ka.formats.time, n.time)), xi.set(i);
}
const Ml = rn(!1);
var Gg = Object.defineProperty, jg = Object.defineProperties, Wg = Object.getOwnPropertyDescriptors, Gc = Object.getOwnPropertySymbols, qg = Object.prototype.hasOwnProperty, Kg = Object.prototype.propertyIsEnumerable, jc = (t, e, n) => e in t ? Gg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, zg = (t, e) => {
  for (var n in e || (e = {}))
    qg.call(e, n) && jc(t, n, e[n]);
  if (Gc)
    for (var n of Gc(e))
      Kg.call(e, n) && jc(t, n, e[n]);
  return t;
}, Xg = (t, e) => jg(t, Wg(e));
let go;
const Ks = rn(null);
function Wc(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function us(t, e = oa().fallbackLocale) {
  const n = Wc(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Wc(e)])] : n;
}
function $r() {
  return go ?? void 0;
}
Ks.subscribe((t) => {
  go = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Yg = (t) => {
  if (t && Lg(t) && qs(t)) {
    const { loadingDelay: e } = oa();
    let n;
    return typeof window < "u" && $r() != null && e ? n = window.setTimeout(
      () => Ml.set(!0),
      e
    ) : Ml.set(!0), Df(t).then(() => {
      Ks.set(t);
    }).finally(() => {
      clearTimeout(n), Ml.set(!1);
    });
  }
  return Ks.set(t);
}, xi = Xg(zg({}, Ks), {
  set: Yg
}), Zg = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], fl = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Qg = Object.defineProperty, zs = Object.getOwnPropertySymbols, Pf = Object.prototype.hasOwnProperty, Hf = Object.prototype.propertyIsEnumerable, qc = (t, e, n) => e in t ? Qg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, jo = (t, e) => {
  for (var n in e || (e = {}))
    Pf.call(e, n) && qc(t, n, e[n]);
  if (zs)
    for (var n of zs(e))
      Hf.call(e, n) && qc(t, n, e[n]);
  return t;
}, va = (t, e) => {
  var n = {};
  for (var r in t)
    Pf.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && zs)
    for (var r of zs(t))
      e.indexOf(r) < 0 && Hf.call(t, r) && (n[r] = t[r]);
  return n;
};
const Xa = (t, e) => {
  const { formats: n } = oa();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Jg = fl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = va(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Xa("number", r)), new Intl.NumberFormat(n, i);
  }
), $g = fl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = va(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Xa("date", r) : Object.keys(i).length === 0 && (i = Xa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), eb = fl(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = va(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Xa("time", r) : Object.keys(i).length === 0 && (i = Xa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), tb = (t = {}) => {
  var e = t, {
    locale: n = $r()
  } = e, r = va(e, [
    "locale"
  ]);
  return Jg(jo({ locale: n }, r));
}, nb = (t = {}) => {
  var e = t, {
    locale: n = $r()
  } = e, r = va(e, [
    "locale"
  ]);
  return $g(jo({ locale: n }, r));
}, rb = (t = {}) => {
  var e = t, {
    locale: n = $r()
  } = e, r = va(e, [
    "locale"
  ]);
  return eb(jo({ locale: n }, r));
}, ib = fl(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = $r()) => new Of(t, e, oa().formats, {
    ignoreTag: oa().ignoreTag
  })
), ab = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: o,
    locale: c = $r(),
    default: u
  } = s;
  if (c == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Rf(t, c);
  if (!d)
    d = (a = (i = (r = (n = oa()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: c, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!o)
    return d;
  let m = d;
  try {
    m = ib(d, c).format(o);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, sb = (t, e) => rb(e).format(t), lb = (t, e) => nb(e).format(t), ob = (t, e) => tb(e).format(t), cb = (t, e = $r()) => Rf(t, e), ub = ha([xi, cs], () => ab);
ha([xi], () => sb);
ha([xi], () => lb);
ha([xi], () => ob);
ha([xi, cs], () => cb);
function db(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    Nf(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Zg();
  console.log("Initial: Setting the language to", i), Vg({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), xi.set(s.detail.language);
  });
}
const fb = "Suche", hb = "Filtertypen", vb = "Filter hinzufügen", mb = "Keine Ressourcen gefunden.", gb = "Loading...", bb = {
  search: fb,
  filter_types: hb,
  add_filter: vb,
  no_resources_found: mb,
  loading: gb
}, pb = "Search", _b = "Filter Types", Ib = "Add Filter", Eb = "No resources found.", Sb = "Loading...", Ab = {
  search: pb,
  filter_types: _b,
  add_filter: Ib,
  no_resources_found: Eb,
  loading: Sb
};
function Me(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function et(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  t || console.warn("Tried to dispatch event without element.", e, n);
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function mr(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function st(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class wi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, yv(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, s) => {
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
function yb(t = window) {
  return Tb(t) ? { passive: !0 } : !1;
}
function Tb(t = window) {
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
const Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: yb
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
const mn = {
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
ln.set(mn.BACKSPACE, He.BACKSPACE);
ln.set(mn.ENTER, He.ENTER);
ln.set(mn.SPACEBAR, He.SPACEBAR);
ln.set(mn.PAGE_UP, He.PAGE_UP);
ln.set(mn.PAGE_DOWN, He.PAGE_DOWN);
ln.set(mn.END, He.END);
ln.set(mn.HOME, He.HOME);
ln.set(mn.ARROW_LEFT, He.ARROW_LEFT);
ln.set(mn.ARROW_UP, He.ARROW_UP);
ln.set(mn.ARROW_RIGHT, He.ARROW_RIGHT);
ln.set(mn.ARROW_DOWN, He.ARROW_DOWN);
ln.set(mn.DELETE, He.DELETE);
ln.set(mn.ESCAPE, He.ESCAPE);
ln.set(mn.TAB, He.TAB);
const ei = /* @__PURE__ */ new Set();
ei.add(He.PAGE_UP);
ei.add(He.PAGE_DOWN);
ei.add(He.END);
ei.add(He.HOME);
ei.add(He.ARROW_LEFT);
ei.add(He.ARROW_UP);
ei.add(He.ARROW_RIGHT);
ei.add(He.ARROW_DOWN);
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
function Cb(t, e) {
  if (t.closest)
    return t.closest(e);
  let n = t;
  for (; n; ) {
    if (kf(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function kf(t, e) {
  return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e);
}
function xb(t) {
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
  closest: Cb,
  estimateScrollWidth: xb,
  matches: kf
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
let _s;
function wb(t, e = !1) {
  const { CSS: n } = t;
  let r = _s;
  if (typeof _s == "boolean" && !e)
    return _s;
  if (!(n && typeof n.supports == "function"))
    return !1;
  const a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (_s = r), r;
}
function Ob(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  const { x: r, y: i } = e, a = r + n.left, s = i + n.top;
  let o, c;
  if (t.type === "touchstart") {
    const u = t;
    o = u.changedTouches[0].pageX - a, c = u.changedTouches[0].pageY - s;
  } else {
    const u = t;
    o = u.pageX - a, c = u.pageY - s;
  }
  return { x: o, y: c };
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Rb = {};
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Lb {
  constructor(e, n) {
    this.privateDoNotAccessOrElseWrappedAttributePrefix = n;
  }
  toString() {
    return this.privateDoNotAccessOrElseWrappedAttributePrefix;
  }
}
const Nb = Lb;
function Mb(t) {
  return new Nb(Rb, t);
}
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Is(t) {
  return Object.isFrozen(t) && Object.isFrozen(t.raw);
}
function Es(t) {
  return t.toString().indexOf("`") === -1;
}
Es((t) => t``) || Es((t) => t`\0`) || Es((t) => t`\n`) || Es((t) => t`\u0000`);
Is`` && Is`\0` && Is`\n` && Is`\u0000`;
/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ya(t) {
  const e = t[0].toLowerCase();
  return Mb(e);
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
const Db = {
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
}, Pb = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Kc = {
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
const zc = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xc = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
let Ss = [];
class Tt extends Ot {
  static get cssClasses() {
    return Db;
  }
  static get strings() {
    return Pb;
  }
  static get numbers() {
    return Kc;
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
      for (const n of zc)
        this.adapter.registerInteractionHandler(n, this.activateHandler);
      this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
  }
  registerDeactivationHandlers(e) {
    if (e.type === "keydown")
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    else
      for (const n of Xc)
        this.adapter.registerDocumentInteractionHandler(n, this.deactivateHandler);
  }
  deregisterRootHandlers() {
    for (const e of zc)
      this.adapter.deregisterInteractionHandler(e, this.activateHandler);
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
  }
  deregisterDeactivationHandlers() {
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    for (const e of Xc)
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
    if (n.isActivated = !0, n.isProgrammatic = e === void 0, n.activationEvent = e, n.wasActivatedByPointer = n.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown"), e !== void 0 && Ss.length > 0 && Ss.some((s) => this.adapter.containsEventTarget(s))) {
      this.resetActivationState();
      return;
    }
    e !== void 0 && (Ss.push(e.target), this.registerDeactivationHandlers(e)), n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(() => {
      Ss = [], !n.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (n.wasElementMadeActive = this.checkElementMadeActive(e), n.wasElementMadeActive && this.animateActivation()), n.wasElementMadeActive || (this.activationState = this.defaultActivationState());
    });
  }
  checkElementMadeActive(e) {
    return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
  }
  animateActivation() {
    const { VAR_FG_TRANSLATE_START: e, VAR_FG_TRANSLATE_END: n } = Tt.strings, { FG_DEACTIVATION: r, FG_ACTIVATION: i } = Tt.cssClasses, { DEACTIVATION_TIMEOUT_MS: a } = Tt.numbers;
    this.layoutInternal();
    let s = "", o = "";
    if (!this.adapter.isUnbounded()) {
      const { startPoint: c, endPoint: u } = this.getFgTranslationCoordinates();
      s = `${c.x}px, ${c.y}px`, o = `${u.x}px, ${u.y}px`;
    }
    this.adapter.updateCssVariable(e, s), this.adapter.updateCssVariable(n, o), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(i), this.activationTimer = setTimeout(() => {
      this.activationTimerCallback();
    }, a);
  }
  getFgTranslationCoordinates() {
    const { activationEvent: e, wasActivatedByPointer: n } = this.activationState;
    let r;
    n ? r = Ob(e, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
    }, Kc.FG_DEACTIVATION_MS));
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
const { applyPassive: Yc } = Uf, { matches: Hb } = ds;
function Qt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: o, eventTarget: c, activeTarget: u, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: v = Promise.resolve() } = {}) {
  let h, g = new wi(), p = ue("SMUI:addLayoutListener"), _, I = s, A = c, S = u;
  function C() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && I !== s && (I = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new Tt({
      addClass: d,
      browserSupportsCssVars: () => wb(window),
      computeBoundingRect: () => (o || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, y) => g.off(document.documentElement, w, y),
      deregisterInteractionHandler: (w, y) => g.off(c || t, w, y),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, y;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (y = window.pageYOffset) !== null && y !== void 0 ? y : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Hb(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, y) => {
        const T = Yc();
        g.on(document.documentElement, w, y, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (w, y) => {
        const T = Yc();
        g.on(c || t, w, y, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: m,
      updateCssVariable: f
    }), v.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && v.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (A !== c || S !== u) && (A = c, S = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  C(), p && (_ = p(E));
  function E() {
    h && h.layout();
  }
  return {
    update(w) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: o,
        eventTarget: c,
        activeTarget: u,
        addClass: d,
        removeClass: m,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (y) => t.classList.add(y), removeClass: (y) => t.classList.remove(y), addStyle: (y, T) => t.style.setProperty(y, T), initPromise: Promise.resolve() }, w)), C();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
var Ub = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "component",
  "tag",
  "children"
]);
function kb(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "component", 3, ti), a = b(e, "tag", 3, "span"), s = /* @__PURE__ */ ze(e, Ub), o;
  const c = ue("SMUI:label:context"), u = ue("SMUI:label:tabindex");
  function d() {
    return o.getElement();
  }
  var m = { getElement: d }, f = ve(), v = re(f);
  {
    let h = /* @__PURE__ */ fe(() => Me({
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
    Mr(v, i, (g, p) => {
      Ee(
        p(g, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return l(h);
            }
          },
          () => c === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => s,
          {
            children: (_, I) => {
              var A = ve(), S = re(A);
              Se(S, () => e.children ?? he), L(_, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => o = _,
        () => o
      );
    });
  }
  return L(t, f), Te(m);
}
var Bb = /* @__PURE__ */ new Set([
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
function bo(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "on", 3, !1), a = b(e, "component", 3, ti), s = b(e, "tag", 3, "i"), o = /* @__PURE__ */ ze(e, Bb), c;
  const u = /* @__PURE__ */ fe(() => s() === "svg" || a() === Wb), d = ue("SMUI:icon:context");
  function m() {
    return c.getElement();
  }
  var f = { getElement: m }, v = ve(), h = re(v);
  {
    let g = /* @__PURE__ */ fe(() => Me({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Mr(h, a, (p, _) => {
      Ee(
        _(p, it(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return l(g);
            },
            "aria-hidden": "true"
          },
          () => l(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => o,
          {
            children: (I, A) => {
              var S = ve(), C = re(S);
              Se(C, () => e.children ?? he), L(I, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => c = I,
        () => c
      );
    });
  }
  return L(t, v), Te(f);
}
var Fb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "tag", "children"]), Vb = /* @__PURE__ */ an("<svg><!></svg>");
function ti(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, Fb);
  const a = /* @__PURE__ */ fe(() => [
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
  var c = { getElement: o }, u = ve(), d = re(u);
  {
    var m = (h) => {
      var g = Vb();
      Fe(g, () => ({ ...i }));
      var p = be(g);
      Se(p, () => e.children ?? he), Ee(g, (_) => s = _, () => s), Pe(g, (_, I) => X == null ? void 0 : X(_, I), n), L(h, g);
    }, f = (h) => {
      var g = ve(), p = re(g);
      Tc(p, r, !1, (_, I) => {
        Ee(_, (A) => s = A, () => s), Pe(_, (A, S) => X == null ? void 0 : X(A, S), n), Fe(_, () => ({ ...i }));
      }), L(h, g);
    }, v = (h) => {
      var g = ve(), p = re(g);
      Tc(p, r, !1, (_, I) => {
        Ee(_, (C) => s = C, () => s), Pe(_, (C, E) => X == null ? void 0 : X(C, E), n), Fe(_, () => ({ ...i }));
        var A = ve(), S = re(A);
        Se(S, () => e.children ?? he), L(I, A);
      }), L(h, g);
    };
    pe(d, (h) => {
      r() === "svg" ? h(m) : l(a) ? h(f, 1) : h(v, -1);
    });
  }
  return L(t, u), Te(c);
}
var Gb = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), jb = /* @__PURE__ */ an("<svg><!></svg>");
function Wb(t, e) {
  ye(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = b(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, Gb), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, o = jb();
  Fe(o, () => ({ ...r }));
  var c = be(o);
  return Se(c, () => e.children ?? he), Ee(o, (u) => i = u, () => i), Pe(o, (u, d) => X == null ? void 0 : X(u, d), n), L(t, o), Te(s);
}
function As(t, e) {
  ye(e, !0);
  const [n, r] = Dr(), i = rn(e.value);
  le(e.key, i), Ce(() => {
    yi(i, e.value);
  }), Nr(() => {
    i.set(void 0);
  });
  var a = ve(), s = re(a);
  Se(s, () => e.children ?? he), L(t, a), Te(), r();
}
var qb = /* @__PURE__ */ new Set([
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
]), Kb = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), zb = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Bf(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "ripple", 3, !0), s = b(e, "color", 3, "primary"), o = b(e, "variant", 3, "text"), c = b(e, "touch", 3, !1), u = b(e, "action", 3, "close"), d = b(e, "defaultAction", 3, !1), m = b(e, "secondary", 3, !1), f = b(e, "component", 3, ti), v = b(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ ze(e, qb), g, p = oe({}), _ = oe({}), I = ue("SMUI:button:context");
  const A = /* @__PURE__ */ fe(() => I === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), S = /* @__PURE__ */ fe(() => I === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), C = /* @__PURE__ */ fe(() => I === "banner" ? {} : { secondary: m() });
  let E = e.disabled;
  Ce(() => {
    if (E !== e.disabled) {
      if (g) {
        const O = Z();
        "blur" in O && O.blur();
      }
      E = h.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function w(O) {
    p[O] || (p[O] = !0);
  }
  function y(O) {
    (!(O in p) || p[O]) && (p[O] = !1);
  }
  function T(O, R) {
    _[O] != R && (R === "" || R == null ? delete _[O] : _[O] = R);
  }
  function N() {
    I === "banner" && et(Z(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Z() {
    return g.getElement();
  }
  var W = { getElement: Z }, D = ve(), x = re(D);
  {
    let O = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: y,
          addStyle: T
        }
      ],
      ...n()
    ]), R = /* @__PURE__ */ fe(() => Me({
      "mdc-button": !0,
      "mdc-button--raised": o() === "raised",
      "mdc-button--unelevated": o() === "unelevated",
      "mdc-button--outlined": o() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": c(),
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
    })), V = /* @__PURE__ */ fe(() => Object.entries(_).map(([k, K]) => `${k}: ${K};`).concat([i()]).join(" "));
    Mr(x, f, (k, K) => {
      Ee(
        K(k, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return l(O);
            },
            get class() {
              return l(R);
            },
            get style() {
              return l(V);
            }
          },
          () => l(A),
          () => l(S),
          () => l(C),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (P) => {
              var F;
              N(), (F = e.onclick) == null || F.call(e, P);
            },
            children: (P, F) => {
              var H = zb(), ne = _e(re(H), 2);
              Se(ne, () => e.children ?? he);
              var Ae = _e(ne);
              {
                var j = (z) => {
                  var J = Kb();
                  L(z, J);
                };
                pe(Ae, (z) => {
                  c() && z(j);
                });
              }
              L(P, H);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => g = P,
        () => g
      );
    });
  }
  return L(t, D), Te(W);
}
function Xb(t, e) {
  ye(e, !0);
  let n = b(e, "callback", 3, () => {
  }), r = b(e, "disabled", 3, !1), i = b(e, "variant", 3, "default"), a = b(e, "isAbortAction", 3, !1), s = b(e, "backgroundColor", 3, void 0), o = b(e, "ariaLabel", 3, void 0);
  {
    let c = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Bf(t, {
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
        return l(c);
      },
      children: (u, d) => {
        var m = ve(), f = re(m);
        Se(f, () => e.children ?? he), L(u, m);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
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
const ys = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Er = {
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
class Wo extends Ot {
  static get cssClasses() {
    return ys;
  }
  static get strings() {
    return Er;
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
    super(Object.assign(Object.assign({}, Wo.defaultAdapter), e)), this.hasToggledAriaLabel = !1;
  }
  init() {
    const e = this.adapter.getAttr(Er.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(Er.DATA_ARIA_LABEL_OFF);
    if (e && n) {
      if (this.adapter.getAttr(Er.ARIA_PRESSED) !== null)
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled ARIA label.");
      this.hasToggledAriaLabel = !0;
    } else
      this.adapter.setAttr(Er.ARIA_PRESSED, String(this.isOn()));
  }
  handleClick() {
    this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
  }
  isOn() {
    return this.adapter.hasClass(ys.ICON_BUTTON_ON);
  }
  toggle(e = !this.isOn()) {
    if (e ? this.adapter.addClass(ys.ICON_BUTTON_ON) : this.adapter.removeClass(ys.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
      const n = e ? this.adapter.getAttr(Er.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Er.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(Er.ARIA_LABEL, n || "");
    } else
      this.adapter.setAttr(Er.ARIA_PRESSED, `${e}`);
  }
}
var Yb = /* @__PURE__ */ new Set([
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
]), Zb = /* @__PURE__ */ de('<span class="mdc-icon-button__focus-ring"></span>'), Qb = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), Jb = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!> <!><!>', 1);
function $b(t, e) {
  ye(e, !0);
  let n = () => {
  };
  function r(H) {
    return H === n;
  }
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), s = b(e, "style", 3, ""), o = b(e, "ripple", 3, !0), c = b(e, "toggle", 3, !1), u = b(e, "pressed", 15, n), d = b(e, "touch", 3, !1), m = b(e, "displayFlex", 3, !0), f = b(e, "size", 3, "normal"), v = b(e, "focusRing", 3, !0), h = b(e, "component", 3, ti), g = b(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ ze(e, Yb), _, I, A = /* @__PURE__ */ ce(oe({})), S = oe({}), C = /* @__PURE__ */ ce(oe({})), E = ue("SMUI:icon-button:context"), w = ue("SMUI:icon-button:aria-describedby");
  const y = /* @__PURE__ */ fe(() => {
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
  let T = !!e.disabled;
  Ce(() => {
    if (T != !!e.disabled) {
      if (_) {
        const H = k();
        "blur" in H && H.blur();
      }
      T = !!e.disabled;
    }
  }), le("SMUI:icon:context", "icon-button");
  let N = null;
  Ce(() => {
    _ && k() && c() !== N && (c() && !I ? (I = new Wo({
      addClass: W,
      hasClass: Z,
      notifyChange: (H) => {
        V(H), et(k(), "SMUIIconButtonToggleChange", H);
      },
      removeClass: D,
      getAttr: O,
      setAttr: R
    }), I.init()) : !c() && I && (I.destroy(), I = void 0, q(A, {}, !0), q(C, {}, !0)), N = c());
  }), Ce(() => {
    I && !r(u()) && I.isOn() !== u() && I.toggle(u());
  }), nt(() => () => {
    I == null || I.destroy(), I = void 0;
  });
  function Z(H) {
    return H in l(A) ? l(A)[H] : k().classList.contains(H);
  }
  function W(H) {
    l(A)[H] || (l(A)[H] = !0);
  }
  function D(H) {
    (!(H in l(A)) || l(A)[H]) && (l(A)[H] = !1);
  }
  function x(H, ne) {
    S[H] != ne && (ne === "" || ne == null ? delete S[H] : S[H] = ne);
  }
  function O(H) {
    return H in l(C) ? l(C)[H] ?? null : k().getAttribute(H);
  }
  function R(H, ne) {
    l(C)[H] !== ne && (l(C)[H] = ne);
  }
  function V(H) {
    u(H.isOn);
  }
  function k() {
    return _.getElement();
  }
  var K = { getElement: k }, P = ve(), F = re(P);
  {
    let H = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: o(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: W,
          removeClass: D,
          addStyle: x
        }
      ],
      ...i()
    ]), ne = /* @__PURE__ */ fe(() => Me({
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
      ...l(A),
      [a()]: !0
    })), Ae = /* @__PURE__ */ fe(() => Object.entries(S).map(([J, ee]) => `${J}: ${ee};`).concat([s()]).join(" ")), j = /* @__PURE__ */ fe(() => r(u()) ? null : u() ? "true" : "false"), z = /* @__PURE__ */ fe(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    Mr(F, h, (J, ee) => {
      Ee(
        ee(J, it(
          {
            get tag() {
              return g();
            },
            get use() {
              return l(H);
            },
            get class() {
              return l(ne);
            },
            get style() {
              return l(Ae);
            },
            get "aria-pressed"() {
              return l(j);
            },
            get "aria-label"() {
              return l(z);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return w;
            },
            get href() {
              return e.href;
            }
          },
          () => l(y),
          () => l(C),
          () => p,
          {
            onclick: (G) => {
              var ie;
              I && I.handleClick(), E === "top-app-bar:navigation" && et(k(), "SMUITopAppBarIconButtonNav"), (ie = e.onclick) == null || ie.call(e, G);
            },
            children: (G, ie) => {
              var xe = Jb(), $ = _e(re(xe), 2);
              {
                var ae = (ke) => {
                  var Ne = Zb();
                  L(ke, Ne);
                };
                pe($, (ke) => {
                  v() && ke(ae);
                });
              }
              var Ue = _e($, 2);
              Se(Ue, () => e.children ?? he);
              var Oe = _e(Ue);
              {
                var Ve = (ke) => {
                  var Ne = Qb();
                  L(ke, Ne);
                };
                pe(Oe, (ke) => {
                  d() && ke(Ve);
                });
              }
              L(G, xe);
            },
            $$slots: { default: !0 }
          }
        )),
        (G) => _ = G,
        () => _
      );
    });
  }
  return L(t, P), Te(K);
}
function ep(t, e) {
  let n = b(e, "callback", 3, () => {
  }), r = b(e, "icon", 3, ""), i = b(e, "disabled", 3, !1), a = b(e, "ariaLabel", 3, void 0);
  $b(t, {
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
      bo(s, {
        class: "material-icons",
        children: (c, u) => {
          var d = Dt();
          Le(() => lt(d, r())), L(c, d);
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
const tp = {
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
class yr extends Ot {
  static get cssClasses() {
    return tp;
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
    super(Object.assign(Object.assign({}, yr.defaultAdapter), e)), this.shakeAnimationEndHandler = () => {
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
    const { LABEL_SHAKE: n } = yr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes
   *     float and shake classes to dock the label.
   */
  float(e) {
    const { LABEL_FLOAT_ABOVE: n, LABEL_SHAKE: r } = yr.cssClasses;
    e ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(r));
  }
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that
   *     it is required.
   */
  setRequired(e) {
    const { LABEL_REQUIRED: n } = yr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  setHideRequiredMarker(e) {
    const { LABEL_HIDE_REQUIRED_MARKER: n } = yr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  getHideRequiredMarker() {
    const { LABEL_HIDE_REQUIRED_MARKER: e } = yr.cssClasses;
    return this.adapter.hasClass(e);
  }
  handleShakeAnimationEnd() {
    const { LABEL_SHAKE: e } = yr.cssClasses;
    this.adapter.removeClass(e);
  }
}
var np = /* @__PURE__ */ new Set([
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
]), rp = /* @__PURE__ */ de("<span><!></span>"), ip = /* @__PURE__ */ de("<label><!></label>");
function Xs(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "floatAbove", 15, !1), s = b(e, "required", 15, !1), o = b(e, "wrapped", 3, !1), c = /* @__PURE__ */ ze(e, np), u, d = /* @__PURE__ */ ce(void 0), m = new wi(), f = oe({}), v = oe({}), h = ue("SMUI:generic:input:props") ?? {}, g = a();
  Ce(() => {
    l(d) && g !== a() && (g = a(), l(d).float(a()));
  });
  let p = s();
  Ce(() => {
    l(d) && p !== s() && (p = s(), l(d).setRequired(s()));
  });
  const _ = ue("SMUI:floating-label:mount"), I = ue("SMUI:floating-label:unmount");
  nt(() => {
    q(
      d,
      new yr({
        addClass: S,
        removeClass: C,
        hasClass: A,
        getWidth: () => {
          var H, ne;
          const K = W(), P = K.cloneNode(!0);
          (H = K.parentNode) == null || H.appendChild(P), P.classList.add("smui-floating-label--remove-transition"), P.classList.add("smui-floating-label--force-size"), P.classList.remove("mdc-floating-label--float-above");
          const F = P.scrollWidth;
          return (ne = K.parentNode) == null || ne.removeChild(P), F;
        },
        registerInteractionHandler: (K, P) => m.on(W(), K, P),
        deregisterInteractionHandler: (K, P) => m.off(W(), K, P)
      }),
      !0
    );
    const k = {
      get element() {
        return W();
      },
      addStyle: E,
      removeStyle: w
    };
    return _ && _(k), l(d).init(), () => {
      var K;
      I && I(k), (K = l(d)) == null || K.destroy(), q(d, void 0), m.clear();
    };
  });
  function A(k) {
    return k in f ? f[k] : W().classList.contains(k);
  }
  function S(k) {
    f[k] || (f[k] = !0);
  }
  function C(k) {
    (!(k in f) || f[k]) && (f[k] = !1);
  }
  function E(k, K) {
    v[k] != K && (K === "" || K == null ? delete v[k] : v[k] = K);
  }
  function w(k) {
    k in v && delete v[k];
  }
  function y(k) {
    var K;
    (K = l(d)) == null || K.shake(k);
  }
  function T(k) {
    a(k);
  }
  function N(k) {
    s(k);
  }
  function Z() {
    if (l(d) == null)
      throw new Error("Instance is undefined.");
    return l(d).getWidth();
  }
  function W() {
    return u;
  }
  var D = { shake: y, float: T, setRequired: N, getWidth: Z, getElement: W }, x = ve(), O = re(x);
  {
    var R = (k) => {
      var K = rp();
      Fe(K, (F, H) => ({ class: F, style: H, ...c }), [
        () => Me({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([F, H]) => `${F}: ${H};`).concat([i()]).join(" ")
      ]);
      var P = be(K);
      Se(P, () => e.children ?? he), Ee(K, (F) => u = F, () => u), Pe(K, (F, H) => X == null ? void 0 : X(F, H), n), L(k, K);
    }, V = (k) => {
      var K = ip();
      Fe(
        K,
        (F, H) => ({
          class: F,
          style: H,
          for: e.for || (h ? h.id : void 0),
          ...c
        }),
        [
          () => Me({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([F, H]) => `${F}: ${H};`).concat([i()]).join(" ")
        ]
      );
      var P = be(K);
      Se(P, () => e.children ?? he), Ee(K, (F) => u = F, () => u), Pe(K, (F, H) => X == null ? void 0 : X(F, H), n), L(k, K);
    };
    pe(O, (k) => {
      o() ? k(R) : k(V, -1);
    });
  }
  return L(t, x), Te(D);
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
const ii = {
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
class qo extends Ot {
  static get cssClasses() {
    return ii;
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
    super(Object.assign(Object.assign({}, qo.defaultAdapter), e)), this.transitionEndHandler = (n) => {
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
    this.adapter.removeClass(ii.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ii.LINE_RIPPLE_ACTIVE);
  }
  setRippleCenter(e) {
    this.adapter.setStyle("transform-origin", `${e}px center`);
  }
  deactivate() {
    this.adapter.addClass(ii.LINE_RIPPLE_DEACTIVATING);
  }
  handleTransitionEnd(e) {
    const n = this.adapter.hasClass(ii.LINE_RIPPLE_DEACTIVATING);
    e.propertyName === "opacity" && n && (this.adapter.removeClass(ii.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ii.LINE_RIPPLE_DEACTIVATING));
  }
}
var ap = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "style",
  "active"
]), sp = /* @__PURE__ */ de("<div></div>");
function Ff(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, ap), o, c = /* @__PURE__ */ ce(void 0), u = new wi(), d = oe({}), m = oe({});
  nt(() => (q(
    c,
    new qo({
      addClass: v,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (E, w) => u.on(A(), E, w),
      deregisterEventHandler: (E, w) => u.off(A(), E, w)
    }),
    !0
  ), l(c).init(), () => {
    var E;
    (E = l(c)) == null || E.destroy(), q(c, void 0), u.clear();
  }));
  function f(E) {
    return E in d ? d[E] : A().classList.contains(E);
  }
  function v(E) {
    d[E] || (d[E] = !0);
  }
  function h(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function g(E, w) {
    m[E] != w && (w === "" || w == null ? delete m[E] : m[E] = w);
  }
  function p() {
    var E;
    (E = l(c)) == null || E.activate();
  }
  function _() {
    var E;
    (E = l(c)) == null || E.deactivate();
  }
  function I(E) {
    var w;
    (w = l(c)) == null || w.setRippleCenter(E);
  }
  function A() {
    return o;
  }
  var S = { activate: p, deactivate: _, setRippleCenter: I, getElement: A }, C = sp();
  return Fe(C, (E, w) => ({ class: E, style: w, ...s }), [
    () => Me({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([E, w]) => `${E}: ${w};`).concat([i()]).join(" ")
  ]), Ee(C, (E) => o = E, () => o), Pe(C, (E, w) => X == null ? void 0 : X(E, w), n), L(t, C), Te(S);
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
const lp = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Zc = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, op = {
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
class Ga extends Ot {
  static get strings() {
    return lp;
  }
  static get cssClasses() {
    return op;
  }
  static get numbers() {
    return Zc;
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
    super(Object.assign(Object.assign({}, Ga.defaultAdapter), e));
  }
  /**
   * Adds the outline notched selector and updates the notch width calculated
   * based off of notchWidth.
   */
  notch(e) {
    const { OUTLINE_NOTCHED: n } = Ga.cssClasses;
    e > 0 && (e += Zc.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(n);
  }
  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const { OUTLINE_NOTCHED: e } = Ga.cssClasses;
    this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
  }
}
var cp = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "notched",
  "noLabel",
  "children"
]), up = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), dp = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Vf(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "notched", 3, !1), a = b(e, "noLabel", 3, !1), s = /* @__PURE__ */ ze(e, cp), o, c = /* @__PURE__ */ ce(void 0), u = /* @__PURE__ */ ce(void 0), d = oe({}), m = oe({}), f;
  Ce(() => {
    l(u) !== f && (l(u) ? (l(u).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      l(u) && l(u).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = l(u));
  }), le("SMUI:floating-label:mount", (y) => {
    q(u, y, !0);
  }), le("SMUI:floating-label:unmount", () => {
    q(u, void 0);
  }), nt(() => (q(
    c,
    new Ga({
      addClass: v,
      removeClass: h,
      setNotchWidthProperty: (y) => g("width", y + "px"),
      removeNotchWidthProperty: () => p("width")
    }),
    !0
  ), l(c).init(), () => {
    var y;
    (y = l(c)) == null || y.destroy(), q(c, void 0);
  }));
  function v(y) {
    d[y] || (d[y] = !0);
  }
  function h(y) {
    (!(y in d) || d[y]) && (d[y] = !1);
  }
  function g(y, T) {
    m[y] != T && (T === "" || T == null ? delete m[y] : m[y] = T);
  }
  function p(y) {
    y in m && delete m[y];
  }
  function _(y) {
    var T;
    (T = l(c)) == null || T.notch(y);
  }
  function I() {
    var y;
    (y = l(c)) == null || y.closeNotch();
  }
  function A() {
    return o;
  }
  var S = { notch: _, closeNotch: I, getElement: A }, C = dp();
  Fe(C, (y) => ({ class: y, ...s }), [
    () => Me({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var E = _e(be(C), 2);
  {
    var w = (y) => {
      var T = up(), N = be(T);
      Se(N, () => e.children ?? he), Le((Z) => Ut(T, Z), [
        () => Object.entries(m).map(([Z, W]) => `${Z}: ${W};`).join(" ")
      ]), L(y, T);
    };
    pe(E, (y) => {
      a() || y(w);
    });
  }
  return Ee(C, (y) => o = y, () => o), Pe(C, (y, T) => X == null ? void 0 : X(y, T), n), L(t, C), Te(S);
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
const Dl = {
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
}, fp = {
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
}, Qc = {
  LABEL_SCALE: 0.75
}, hp = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], vp = [
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
const Jc = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, mp = {
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
const $c = ["click", "keydown"];
class Ko extends Ot {
  static get strings() {
    return Jc;
  }
  static get cssClasses() {
    return mp;
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
    super(Object.assign(Object.assign({}, Ko.defaultAdapter), e)), this.savedTabIndex = null, this.interactionHandler = (n) => {
      this.handleInteraction(n);
    };
  }
  init() {
    this.savedTabIndex = this.adapter.getAttr("tabindex");
    for (const e of $c)
      this.adapter.registerInteractionHandler(e, this.interactionHandler);
  }
  destroy() {
    for (const e of $c)
      this.adapter.deregisterInteractionHandler(e, this.interactionHandler);
  }
  setDisabled(e) {
    this.savedTabIndex && (e ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Jc.ICON_ROLE)));
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
const eu = ["mousedown", "touchstart"], tu = ["click", "keydown"];
class jr extends Ot {
  static get cssClasses() {
    return fp;
  }
  static get strings() {
    return Dl;
  }
  static get numbers() {
    return Qc;
  }
  get shouldAlwaysFloat() {
    const e = this.getNativeInput().type;
    return vp.indexOf(e) >= 0;
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
    super(Object.assign(Object.assign({}, jr.defaultAdapter), e)), this.isFocused = !1, this.receivedUserInput = !1, this.useNativeValidation = !0, this.validateOnValueChange = !0, this.helperText = n.helperText, this.characterCounter = n.characterCounter, this.leadingIcon = n.leadingIcon, this.trailingIcon = n.trailingIcon, this.valid = !this.adapter.hasClass(jr.cssClasses.INVALID), this.inputFocusHandler = () => {
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
    for (const e of eu)
      this.adapter.registerInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of tu)
      this.adapter.registerTextFieldInteractionHandler(e, this.textFieldInteractionHandler);
    this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
  }
  destroy() {
    this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
    for (const e of eu)
      this.adapter.deregisterInputInteractionHandler(e, this.setPointerXOffset);
    for (const e of tu)
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
    e.some((n) => hp.indexOf(n) > -1 ? (this.styleValidity(!0), this.adapter.setLabelRequired(this.getNativeInput().required), !0) : !1), e.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
  }
  /**
   * Opens/closes the notched outline.
   */
  notchOutline(e) {
    if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
      if (e) {
        const n = this.adapter.getLabelWidth() * Qc.LABEL_SCALE;
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
    const { INVALID: n } = jr.cssClasses;
    if (e ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
      if (this.helperText.setValidity(e), !this.helperText.isValidation())
        return;
      const i = this.helperText.isVisible(), a = this.helperText.getId();
      i && a ? this.adapter.setInputAttr(Dl.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Dl.ARIA_DESCRIBEDBY);
    }
  }
  /**
   * Styles the component based on the focused state.
   */
  styleFocused(e) {
    const { FOCUSED: n } = jr.cssClasses;
    e ? this.adapter.addClass(n) : this.adapter.removeClass(n);
  }
  /**
   * Styles the component based on the disabled state.
   */
  styleDisabled(e) {
    const { DISABLED: n, INVALID: r } = jr.cssClasses;
    e ? (this.adapter.addClass(n), this.adapter.removeClass(r)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(e), this.trailingIcon && this.trailingIcon.setDisabled(e);
  }
  /**
   * Styles the component based on the label floating state.
   */
  styleFloating(e) {
    const { LABEL_FLOATING: n } = jr.cssClasses;
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
var gp = /* @__PURE__ */ new Set([
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
function zo(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "component", 3, ti), a = b(e, "tag", 3, "div"), s = b(e, "_smuiClass", 3, ""), o = b(e, "_smuiClassMap", 23, () => ({})), c = b(e, "_smuiContexts", 19, () => ({})), u = b(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ ze(e, gp), m;
  const f = [];
  Object.entries(o()).forEach(([_, I]) => {
    const A = ue(I);
    A && "subscribe" in A && f.push(A.subscribe((S) => {
      o()[_] = S;
    }));
  });
  for (let _ in c())
    c().hasOwnProperty(_) && le(_, c()[_]);
  Nr(() => {
    for (const _ of f)
      _();
  });
  function v() {
    return m.getElement();
  }
  var h = { getElement: v }, g = ve(), p = re(g);
  {
    let _ = /* @__PURE__ */ fe(() => Me({
      [s()]: !0,
      ...o(),
      [r()]: !0
    }));
    Mr(p, i, (I, A) => {
      Ee(
        A(I, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return l(_);
            }
          },
          u,
          () => d,
          {
            children: (S, C) => {
              var E = ve(), w = re(E);
              Se(w, () => e.children ?? he), L(S, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => m = S,
        () => m
      );
    });
  }
  return L(t, g), Te(h);
}
var bp = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function pp(t, e) {
  ye(e, !0);
  let n = /* @__PURE__ */ ze(e, bp), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    zo(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, o) => {
        var c = ve(), u = re(c);
        Se(u, () => e.children ?? he), L(s, c);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
var _p = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Ip(t, e) {
  ye(e, !0);
  let n = /* @__PURE__ */ ze(e, _p), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    zo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, o) => {
          var c = ve(), u = re(c);
          Se(u, () => e.children ?? he), L(s, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Ep = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "children"]);
function Sp(t, e) {
  ye(e, !0);
  let n = /* @__PURE__ */ ze(e, Ep), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    zo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, o) => {
          var c = ve(), u = re(c);
          Se(u, () => e.children ?? he), L(s, c);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Ap = /* @__PURE__ */ new Set([
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
]), yp = /* @__PURE__ */ de("<input/>");
function Tp(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "type", 3, "text"), a = b(e, "placeholder", 3, " "), s = b(e, "value", 15), o = b(e, "files", 15, null), c = b(e, "dirty", 15, !1), u = b(e, "invalid", 15, !1), d = b(e, "updateInvalid", 3, !0), m = b(e, "initialInvalid", 3, !1), f = b(e, "emptyValueNull", 19, () => s() === null), v = b(e, "emptyValueUndefined", 19, () => s() === void 0), h = /* @__PURE__ */ ze(e, Ap), g, p = oe({}), _ = oe({});
  Ce(() => {
    i() === "file" ? delete _.value : _.value = s() == null ? "" : s();
  }), nt(() => {
    d() && m() && u(N().matches(":invalid"));
  });
  function I(O) {
    return O === "" ? Number.NaN : +O;
  }
  function A(O) {
    if (i() === "file") {
      o(O.currentTarget.files);
      return;
    }
    if (O.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (O.currentTarget.value === "" && v()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(I(O.currentTarget.value));
        break;
      default:
        s(O.currentTarget.value);
        break;
    }
  }
  function S(O) {
    (i() === "file" || i() === "range") && A(O), c(!0), d() && u(N().matches(":invalid"));
  }
  function C(O) {
    return O in p ? p[O] ?? null : N().getAttribute(O);
  }
  function E(O, R) {
    p[O] !== R && (p[O] = R);
  }
  function w(O) {
    (!(O in p) || p[O] != null) && (p[O] = void 0);
  }
  function y() {
    N().focus();
  }
  function T() {
    N().blur();
  }
  function N() {
    return g;
  }
  var Z = { getAttr: C, addAttr: E, removeAttr: w, focus: y, blur: T, getElement: N }, W = yp(), D = (O) => {
    var R;
    i() !== "file" && A(O), (R = e.oninput) == null || R.call(e, O);
  }, x = (O) => {
    var R;
    S(O), (R = e.onchange) == null || R.call(e, O);
  };
  return Fe(
    W,
    (O) => ({
      class: O,
      type: i(),
      placeholder: a(),
      ..._,
      ...p,
      ...h,
      oninput: D,
      onchange: x
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), Ee(W, (O) => g = O, () => g), Pe(W, (O, R) => X == null ? void 0 : X(O, R), n), L(t, W), Te(Z);
}
var Cp = /* @__PURE__ */ new Set([
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
]), xp = /* @__PURE__ */ de("<textarea></textarea>");
function wp(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "value", 15, ""), s = b(e, "dirty", 15, !1), o = b(e, "invalid", 15, !1), c = b(e, "updateInvalid", 3, !0), u = b(e, "initialInvalid", 3, !1), d = b(e, "resizable", 3, !0), m = /* @__PURE__ */ ze(e, Cp), f, v = oe({});
  nt(() => {
    c() && u() && o(S().matches(":invalid"));
  });
  function h() {
    s(!0), c() && o(S().matches(":invalid"));
  }
  function g(y) {
    return y in v ? v[y] ?? null : S().getAttribute(y);
  }
  function p(y, T) {
    v[y] !== T && (v[y] = T);
  }
  function _(y) {
    (!(y in v) || v[y] != null) && (v[y] = void 0);
  }
  function I() {
    S().focus();
  }
  function A() {
    S().blur();
  }
  function S() {
    return f;
  }
  var C = { getAttr: g, addAttr: p, removeAttr: _, focus: I, blur: A, getElement: S }, E = xp(), w = (y) => {
    var T;
    h(), (T = e.onchange) == null || T.call(e, y);
  };
  return Fe(
    E,
    (y) => ({
      class: y,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...m,
      onchange: w
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(E, (y) => f = y, () => f), Pe(E, (y, T) => X == null ? void 0 : X(y, T), n), Ci(() => Ka(E, a)), L(t, E), Te(C);
}
var Op = /* @__PURE__ */ new Set([
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
]), Rp = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), nu = /* @__PURE__ */ de("<!> <!>", 1), Lp = /* @__PURE__ */ de("<span><!> <!></span>"), Np = /* @__PURE__ */ de("<!> <!> <!>", 1), Mp = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Dp = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>");
function po(t, e) {
  ye(e, !0);
  const { applyPassive: n } = Uf;
  let r = () => {
  };
  function i(Q) {
    return Q === r;
  }
  let a = b(e, "use", 19, () => []), s = b(e, "class", 3, ""), o = b(e, "style", 3, ""), c = b(e, "ripple", 3, !0), u = b(e, "disabled", 3, !1), d = b(e, "required", 3, !1), m = b(e, "textarea", 3, !1), f = b(e, "variant", 19, () => m() ? "outlined" : "standard"), v = b(e, "noLabel", 3, !1), h = b(e, "type", 3, "text"), g = b(e, "value", 15), p = b(e, "files", 15, r), _ = b(e, "invalid", 15, r), I = b(e, "updateInvalid", 19, () => i(_())), A = b(e, "initialInvalid", 3, !1), S = b(e, "dirty", 15, !1), C = b(e, "validateOnValueChange", 19, I), E = b(e, "useNativeValidation", 19, I), w = b(e, "withLeadingIcon", 3, r), y = b(e, "withTrailingIcon", 3, r), T = b(e, "input", 7), N = b(e, "floatingLabel", 7), Z = b(e, "lineRipple", 7), W = b(e, "notchedOutline", 7), D = /* @__PURE__ */ ze(e, Op);
  const x = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(p());
  i(p()) && p(null), i(_()) && _(!1);
  let O, R = /* @__PURE__ */ ce(void 0), V = new wi(), k = oe({}), K = oe({}), P = /* @__PURE__ */ ce(void 0), F = /* @__PURE__ */ ce(!1), H = /* @__PURE__ */ ce(oe(A())), ne = ue("SMUI:addLayoutListener"), Ae, j, z = new Promise((Q) => j = Q), J, ee, G, ie;
  const xe = /* @__PURE__ */ fe(() => T() && T().getElement());
  Ce(() => {
    (S() || l(H) || !I()) && l(R) && l(R).isValid() !== !_() && (I() ? _(!l(R).isValid()) : l(R).setValid(!_()));
  }), Ce(() => {
    l(R) && l(R).getValidateOnValueChange() !== C() && l(R).setValidateOnValueChange(i(C()) ? !1 : C());
  }), Ce(() => {
    l(R) && l(R).setUseNativeValidation(i(E()) ? !0 : E());
  }), Ce(() => {
    l(R) && l(R).setDisabled(u());
  });
  let $ = g();
  Ce(() => {
    if (l(R) && x && $ !== g()) {
      $ = g();
      const Q = `${g() == null ? "" : g()}`;
      l(R).getValue() !== Q && l(R).setValue(Q);
    }
  }), ne && (Ae = ne(U)), le("SMUI:textfield:leading-icon:mount", (Q) => {
    J = Q;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    J = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (Q) => {
    ee = Q;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), le("SMUI:textfield:helper-text:id", (Q) => {
    q(P, Q, !0);
  }), le("SMUI:textfield:helper-text:mount", (Q) => {
    G = Q;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    q(P, void 0), G = void 0;
  }), le("SMUI:textfield:character-counter:mount", (Q) => {
    ie = Q;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), nt(() => {
    var Q;
    if (q(
      R,
      new jr(
        {
          // getRootAdapterMethods_
          addClass: Ue,
          removeClass: Oe,
          hasClass: ae,
          registerTextFieldInteractionHandler: (te, Be) => V.on(Y(), te, Be),
          deregisterTextFieldInteractionHandler: (te, Be) => V.off(Y(), te, Be),
          registerValidationAttributeChangeHandler: (te) => {
            const Be = (Pt) => Pt.map((qt) => qt.attributeName).filter((qt) => qt), ht = new MutationObserver((Pt) => {
              E() && te(Be(Pt));
            }), It = { attributes: !0 };
            return T() && ht.observe(T().getElement(), It), ht;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = T()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Be) => {
            var ht;
            (ht = T()) == null || ht.addAttr(te, Be);
          },
          removeInputAttr: (te) => {
            var Be;
            (Be = T()) == null || Be.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = T()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Be) => {
            var It;
            const ht = (It = T()) == null ? void 0 : It.getElement();
            if (ht) {
              const Pt = n();
              V.on(ht, te, Be, typeof Pt == "boolean" ? { capture: Pt } : Pt);
            }
          },
          deregisterInputInteractionHandler: (te, Be) => {
            var It;
            const ht = (It = T()) == null ? void 0 : It.getElement();
            ht && V.off(ht, te, Be);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => N() && N().float(te),
          getLabelWidth: () => N() ? N().getWidth() : 0,
          hasLabel: () => !!N(),
          shakeLabel: (te) => N() && N().shake(te),
          setLabelRequired: (te) => N() && N().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => Z() && Z().activate(),
          deactivateLineRipple: () => Z() && Z().deactivate(),
          setLineRippleTransformOrigin: (te) => Z() && Z().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => W() && W().closeNotch(),
          hasOutline: () => !!W(),
          notchOutline: (te) => W() && W().notch(te)
        },
        {
          get helperText() {
            return G;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return J;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), x) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Q = l(R)) == null || Q.init();
    } else
      zd().then(() => {
        var te;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = l(R)) == null || te.init();
      });
    return j(), () => {
      var te;
      (te = l(R)) == null || te.destroy(), q(R, void 0), V.clear();
    };
  }), Nr(() => {
    Ae && Ae();
  });
  function ae(Q) {
    return Q in k ? k[Q] ?? null : Y().classList.contains(Q);
  }
  function Ue(Q) {
    k[Q] || (k[Q] = !0);
  }
  function Oe(Q) {
    (!(Q in k) || k[Q]) && (k[Q] = !1);
  }
  function Ve(Q, te) {
    K[Q] != te && (te === "" || te == null ? delete K[Q] : K[Q] = te);
  }
  function ke() {
    var Q;
    (Q = T()) == null || Q.focus();
  }
  function Ne() {
    var Q;
    (Q = T()) == null || Q.blur();
  }
  function U() {
    if (l(R)) {
      const Q = l(R).shouldFloat;
      l(R).notchOutline(Q);
    }
  }
  function Y() {
    return O;
  }
  var se = { focus: ke, blur: Ne, layout: U, getElement: Y }, Re = nu(), je = re(Re);
  {
    var St = (Q) => {
      var te = Mp();
      Fe(te, (Qe, dt, ot) => ({ class: Qe, style: dt, for: void 0, ...ot }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": l(F) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(y()) ? e.trailingIcon : y(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": _(),
          ...k,
          [s()]: !0
        }),
        () => Object.entries(K).map(([Qe, dt]) => `${Qe}: ${dt};`).concat([o()]).join(" "),
        () => mr(D, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = be(te);
      {
        var ht = (Qe) => {
          var dt = nu(), ot = re(dt);
          {
            var zt = (Rt) => {
              var kt = Rp();
              L(Rt, kt);
            };
            pe(ot, (Rt) => {
              f() === "filled" && Rt(zt);
            });
          }
          var Fn = _e(ot, 2);
          {
            var ft = (Rt) => {
              {
                let kt = /* @__PURE__ */ fe(() => l(F) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), at = /* @__PURE__ */ fe(() => st(D, "label$"));
                Ee(
                  Xs(Rt, it(
                    {
                      get floatAbove() {
                        return l(kt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => l(at),
                    {
                      children: (Bt, br) => {
                        var Tn = ve(), Lt = re(Tn);
                        {
                          var Xt = (gn) => {
                          }, Cn = (gn) => {
                            var xn = Dt();
                            Le(() => lt(xn, e.label)), L(gn, xn);
                          }, Vn = (gn) => {
                            var xn = ve(), on = re(xn);
                            Se(on, () => e.label), L(gn, xn);
                          };
                          pe(Lt, (gn) => {
                            e.label == null ? gn(Xt) : typeof e.label == "string" ? gn(Cn, 1) : gn(Vn, -1);
                          });
                        }
                        L(Bt, Tn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Bt) => N(Bt),
                  () => N()
                );
              }
            };
            pe(Fn, (Rt) => {
              !v() && e.label != null && Rt(ft);
            });
          }
          L(Qe, dt);
        };
        pe(Be, (Qe) => {
          !m() && f() !== "outlined" && Qe(ht);
        });
      }
      var It = _e(Be, 2);
      {
        var Pt = (Qe) => {
          {
            let dt = /* @__PURE__ */ fe(() => v() || e.label == null), ot = /* @__PURE__ */ fe(() => st(D, "outline$"));
            Ee(
              Vf(Qe, it(
                {
                  get noLabel() {
                    return l(dt);
                  }
                },
                () => l(ot),
                {
                  children: (zt, Fn) => {
                    var ft = ve(), Rt = re(ft);
                    {
                      var kt = (at) => {
                        {
                          let Bt = /* @__PURE__ */ fe(() => l(F) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), br = /* @__PURE__ */ fe(() => st(D, "label$"));
                          Ee(
                            Xs(at, it(
                              {
                                get floatAbove() {
                                  return l(Bt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => l(br),
                              {
                                children: (Tn, Lt) => {
                                  var Xt = ve(), Cn = re(Xt);
                                  {
                                    var Vn = (on) => {
                                    }, gn = (on) => {
                                      var ni = Dt();
                                      Le(() => lt(ni, e.label)), L(on, ni);
                                    }, xn = (on) => {
                                      var ni = ve(), ba = re(ni);
                                      Se(ba, () => e.label), L(on, ni);
                                    };
                                    pe(Cn, (on) => {
                                      e.label == null ? on(Vn) : typeof e.label == "string" ? on(gn, 1) : on(xn, -1);
                                    });
                                  }
                                  L(Tn, Xt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Tn) => N(Tn),
                            () => N()
                          );
                        }
                      };
                      pe(Rt, (at) => {
                        !v() && e.label != null && at(kt);
                      });
                    }
                    L(zt, ft);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (zt) => W(zt),
              () => W()
            );
          }
        };
        pe(It, (Qe) => {
          (m() || f() === "outlined") && Qe(Pt);
        });
      }
      var qt = _e(It, 2);
      As(qt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Qe, dt) => {
          var ot = ve(), zt = re(ot);
          Se(zt, () => e.leadingIcon ?? he), L(Qe, ot);
        },
        $$slots: { default: !0 }
      });
      var Hr = _e(qt, 2);
      Se(Hr, () => e.children ?? he);
      var gt = _e(Hr, 2);
      {
        var Ht = (Qe) => {
          var dt = Lp(), ot = be(dt);
          {
            let Fn = /* @__PURE__ */ fe(() => st(D, "input$"));
            Ee(
              wp(ot, it(
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
                    return l(H);
                  },
                  get "aria-controls"() {
                    return l(P);
                  },
                  get "aria-describedby"() {
                    return l(P);
                  }
                },
                () => l(Fn),
                {
                  onblur: (ft) => {
                    var Rt;
                    q(F, !1), q(H, !0), et(Y(), "blur", ft), (Rt = e.input$onblur) == null || Rt.call(e, ft);
                  },
                  onfocus: (ft) => {
                    var Rt;
                    q(F, !0), et(Y(), "focus", ft), (Rt = e.input$onfocus) == null || Rt.call(e, ft);
                  },
                  get value() {
                    return g();
                  },
                  set value(ft) {
                    g(ft);
                  },
                  get dirty() {
                    return S();
                  },
                  set dirty(ft) {
                    S(ft);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(ft) {
                    _(ft);
                  }
                }
              )),
              (ft) => T(ft),
              () => T()
            );
          }
          var zt = _e(ot, 2);
          Se(zt, () => e.internalCounter ?? he), Le((Fn) => Bo(dt, 1, Fn), [
            () => nf(Me({
              "mdc-text-field__resizer": !("input$resizable" in D) || e.input$resizable
            }))
          ]), L(Qe, dt);
        }, Kt = (Qe) => {
          var dt = Np(), ot = re(dt);
          {
            var zt = (kt) => {
              var at = ve(), Bt = re(at);
              {
                var br = (Lt) => {
                  Ip(Lt, {
                    children: (Xt, Cn) => {
                      var Vn = Dt();
                      Le(() => lt(Vn, e.prefix)), L(Xt, Vn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tn = (Lt) => {
                  var Xt = ve(), Cn = re(Xt);
                  Se(Cn, () => e.prefix ?? he), L(Lt, Xt);
                };
                pe(Bt, (Lt) => {
                  typeof e.prefix == "string" ? Lt(br) : Lt(Tn, -1);
                });
              }
              L(kt, at);
            };
            pe(ot, (kt) => {
              e.prefix != null && kt(zt);
            });
          }
          var Fn = _e(ot, 2);
          {
            let kt = /* @__PURE__ */ fe(() => st(D, "input$"));
            Ee(
              Tp(Fn, it(
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
                    return l(H);
                  },
                  get "aria-controls"() {
                    return l(P);
                  },
                  get "aria-describedby"() {
                    return l(P);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => l(kt),
                {
                  onblur: (at) => {
                    var Bt;
                    q(F, !1), q(H, !0), et(Y(), "blur", at), (Bt = e.input$onblur) == null || Bt.call(e, at);
                  },
                  onfocus: (at) => {
                    var Bt;
                    q(F, !0), et(Y(), "focus", at), (Bt = e.input$onfocus) == null || Bt.call(e, at);
                  },
                  get value() {
                    return g();
                  },
                  set value(at) {
                    g(at);
                  },
                  get files() {
                    return p();
                  },
                  set files(at) {
                    p(at);
                  },
                  get dirty() {
                    return S();
                  },
                  set dirty(at) {
                    S(at);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(at) {
                    _(at);
                  }
                }
              )),
              (at) => T(at),
              () => T()
            );
          }
          var ft = _e(Fn, 2);
          {
            var Rt = (kt) => {
              var at = ve(), Bt = re(at);
              {
                var br = (Lt) => {
                  Sp(Lt, {
                    children: (Xt, Cn) => {
                      var Vn = Dt();
                      Le(() => lt(Vn, e.suffix)), L(Xt, Vn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tn = (Lt) => {
                  var Xt = ve(), Cn = re(Xt);
                  Se(Cn, () => e.suffix ?? he), L(Lt, Xt);
                };
                pe(Bt, (Lt) => {
                  typeof e.suffix == "string" ? Lt(br) : Lt(Tn, -1);
                });
              }
              L(kt, at);
            };
            pe(ft, (kt) => {
              e.suffix != null && kt(Rt);
            });
          }
          L(Qe, dt);
        };
        pe(gt, (Qe) => {
          m() && typeof g() == "string" ? Qe(Ht) : Qe(Kt, -1);
        });
      }
      var er = _e(gt, 2);
      As(er, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Qe, dt) => {
          var ot = ve(), zt = re(ot);
          Se(zt, () => e.trailingIcon ?? he), L(Qe, ot);
        },
        $$slots: { default: !0 }
      });
      var tt = _e(er, 2);
      {
        var Ur = (Qe) => {
          {
            let dt = /* @__PURE__ */ fe(() => st(D, "ripple$"));
            Ee(Ff(Qe, it(() => l(dt))), (ot) => Z(ot), () => Z());
          }
        };
        pe(tt, (Qe) => {
          !m() && f() !== "outlined" && c() && Qe(Ur);
        });
      }
      Ee(te, (Qe) => O = Qe, () => O), Pe(te, (Qe, dt) => Qt == null ? void 0 : Qt(Qe, dt), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: Ue,
        removeClass: Oe,
        addStyle: Ve,
        eventTarget: l(xe),
        activeTarget: l(xe),
        initPromise: z
      })), Pe(te, (Qe, dt) => X == null ? void 0 : X(Qe, dt), a), L(Q, te);
    }, Bn = (Q) => {
      var te = Dp();
      Fe(te, (gt, Ht, Kt) => ({ class: gt, style: Ht, ...Kt }), [
        () => Me({
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
          ...k,
          [s()]: !0
        }),
        () => Object.entries(K).map(([gt, Ht]) => `${gt}: ${Ht};`).concat([o()]).join(" "),
        () => mr(D, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = be(te);
      {
        var ht = (gt) => {
          var Ht = ve(), Kt = re(Ht);
          Se(Kt, () => e.label ?? he), L(gt, Ht);
        };
        pe(Be, (gt) => {
          typeof e.label != "string" && gt(ht);
        });
      }
      var It = _e(Be, 2);
      As(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (gt, Ht) => {
          var Kt = ve(), er = re(Kt);
          Se(er, () => e.leadingIcon ?? he), L(gt, Kt);
        },
        $$slots: { default: !0 }
      });
      var Pt = _e(It, 2);
      Se(Pt, () => e.children ?? he);
      var qt = _e(Pt, 2);
      As(qt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (gt, Ht) => {
          var Kt = ve(), er = re(Kt);
          Se(er, () => e.trailingIcon ?? he), L(gt, Kt);
        },
        $$slots: { default: !0 }
      });
      var Hr = _e(qt, 2);
      Se(Hr, () => e.line ?? he), Ee(te, (gt) => O = gt, () => O), Pe(te, (gt, Ht) => Qt == null ? void 0 : Qt(gt, Ht), () => ({
        ripple: c(),
        unbounded: !1,
        addClass: Ue,
        removeClass: Oe,
        addStyle: Ve
      })), Pe(te, (gt, Ht) => X == null ? void 0 : X(gt, Ht), a), L(Q, te);
    };
    pe(je, (Q) => {
      x ? Q(St) : Q(Bn, -1);
    });
  }
  var me = _e(je, 2);
  {
    var Ie = (Q) => {
      {
        let te = /* @__PURE__ */ fe(() => st(D, "helperLine$"));
        pp(Q, it(() => l(te), {
          children: (Be, ht) => {
            var It = ve(), Pt = re(It);
            Se(Pt, () => e.helper ?? he), L(Be, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    pe(me, (Q) => {
      e.helper && Q(Ie);
    });
  }
  return L(t, Re), Te(se);
}
var Pp = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "role",
  "tabindex",
  "disabled",
  "children"
]), Hp = /* @__PURE__ */ de("<i><!></i>");
function Up(t, e) {
  ye(e, !0);
  const n = () => fr(h, "$leadingStore", r), [r, i] = Dr();
  let a = b(e, "use", 19, () => []), s = b(e, "class", 3, ""), o = b(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), c = b(e, "disabled", 3, !1), u = /* @__PURE__ */ ze(e, Pp), d, m = /* @__PURE__ */ ce(void 0), f = new wi(), v = oe({});
  const h = ue("SMUI:textfield:icon:leading"), g = n();
  let p = /* @__PURE__ */ ce(void 0);
  const _ = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: o() })), I = ue("SMUI:textfield:leading-icon:mount"), A = ue("SMUI:textfield:leading-icon:unmount"), S = ue("SMUI:textfield:trailing-icon:mount"), C = ue("SMUI:textfield:trailing-icon:unmount");
  nt(() => (q(
    m,
    new Ko({
      getAttr: E,
      setAttr: w,
      removeAttr: y,
      setContent: (R) => {
        q(p, R, !0);
      },
      registerInteractionHandler: (R, V) => f.on(T(), R, V),
      deregisterInteractionHandler: (R, V) => f.off(T(), R, V),
      notifyIconAction: () => et(T(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? I && I(l(m)) : S && S(l(m)), l(m).init(), () => {
    var R;
    l(m) && (g ? A && A(l(m)) : C && C(l(m))), (R = l(m)) == null || R.destroy(), q(m, void 0), f.clear();
  }));
  function E(R) {
    return R in v ? v[R] ?? null : T().getAttribute(R);
  }
  function w(R, V) {
    v[R] !== V && (v[R] = V);
  }
  function y(R) {
    (!(R in v) || v[R] != null) && (v[R] = void 0);
  }
  function T() {
    return d;
  }
  var N = { getElement: T }, Z = Hp();
  Fe(
    Z,
    (R) => ({
      class: R,
      "aria-hidden": o() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? c() ? "true" : "false" : void 0,
      ...l(_),
      ...v,
      ...u
    }),
    [
      () => Me({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var W = be(Z);
  {
    var D = (R) => {
      var V = ve(), k = re(V);
      Se(k, () => e.children ?? he), L(R, V);
    }, x = (R) => {
      var V = Dt();
      Le(() => lt(V, l(p))), L(R, V);
    };
    pe(W, (R) => {
      l(p) == null ? R(D) : R(x, -1);
    });
  }
  Ee(Z, (R) => d = R, () => d), Pe(Z, (R, V) => X == null ? void 0 : X(R, V), a), L(t, Z);
  var O = Te(N);
  return i(), O;
}
function kp(t, e) {
  ye(e, !0);
  let n = b(e, "placeholder", 3, ""), r = b(e, "label", 3, ""), i = b(e, "icon", 3, ""), a = b(e, "value", 15, ""), s = b(e, "variant", 3, "standard"), o = b(e, "styles", 3, ""), c = b(e, "required", 3, !1), u = b(e, "invalid", 3, !1), d = b(e, "oninput", 3, () => {
  });
  var m = ve(), f = re(m);
  {
    var v = (g) => {
      {
        const p = (I) => {
          Up(I, {
            class: "material-icons",
            children: (A, S) => {
              var C = Dt();
              Le(() => lt(C, i())), L(A, C);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ fe(() => `width: 100%; ${o()}`);
        po(g, {
          get label() {
            return r();
          },
          get required() {
            return c();
          },
          get invalid() {
            return u();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return l(_);
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
          set value(I) {
            a(I);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (g) => {
      po(g, {
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
          return c();
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
    pe(f, (g) => {
      i() ? g(v) : g(h, -1);
    });
  }
  L(t, m), Te();
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
const ru = {
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
function Bp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Fp(t, e) {
  if (Bp(t) && e in ru) {
    const n = t.document.createElement("div"), { standard: r, prefixed: i } = ru[e];
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
const Vp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Gp = {
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
}, Ta = {
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
var At;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(At || (At = {}));
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
class Vt extends Ot {
  static get cssClasses() {
    return Vp;
  }
  static get strings() {
    return Gp;
  }
  static get numbers() {
    return Ta;
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
    super(Object.assign(Object.assign({}, Vt.defaultAdapter), e)), this.isSurfaceOpen = !1, this.isQuickOpen = !1, this.isHoistedElement = !1, this.isFixedPosition = !1, this.isHorizontallyCenteredOnViewport = !1, this.maxHeight = 0, this.openBottomBias = 0, this.openAnimationEndTimerId = 0, this.closeAnimationEndTimerId = 0, this.animationRequestId = 0, this.anchorCorner = Ii.TOP_START, this.originCorner = Ii.TOP_START, this.anchorMargin = {
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
    this.originCorner = this.originCorner ^ At.RIGHT;
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
      }, Ta.TRANSITION_OPEN_DURATION);
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
        }, Ta.TRANSITION_CLOSE_DURATION);
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
    const e = this.getoriginCorner(), n = this.getMenuSurfaceMaxHeight(e), r = this.hasBit(e, At.BOTTOM) ? "bottom" : "top";
    let i = this.hasBit(e, At.RIGHT) ? "right" : "left";
    const a = this.getHorizontalOriginOffset(e), s = this.getVerticalOriginOffset(e), { anchorSize: o, surfaceSize: c } = this.measurements, u = {
      [i]: a,
      [r]: s
    };
    o.width / c.width > Ta.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (i = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(u), this.adapter.setTransformOrigin(`${i} ${r}`), this.adapter.setPosition(u), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(e, At.BOTTOM) || this.adapter.addClass(Vt.cssClasses.IS_OPEN_BELOW);
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
    const { viewportDistance: n, anchorSize: r, surfaceSize: i } = this.measurements, { MARGIN_TO_EDGE: a } = Vt.numbers, s = this.hasBit(this.anchorCorner, At.BOTTOM);
    let o, c;
    s ? (o = n.top - a + this.anchorMargin.bottom, c = n.bottom - a - this.anchorMargin.bottom) : (o = n.top - a + this.anchorMargin.top, c = n.bottom - a + r.height - this.anchorMargin.top), !(c - i.height > 0) && o > c + this.openBottomBias && (e = this.setBit(e, At.BOTTOM));
    const d = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, At.FLIP_RTL), f = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(e, At.RIGHT);
    let v = !1;
    d && m ? v = !f : v = f;
    let h, g;
    v ? (h = n.left + r.width + this.anchorMargin.left, g = n.right - this.anchorMargin.left) : (h = n.left + this.anchorMargin.left, g = n.right + r.width - this.anchorMargin.left);
    const p = h - i.width > 0, _ = g - i.width > 0, I = this.hasBit(e, At.FLIP_RTL) && this.hasBit(e, At.RIGHT);
    return _ && I && d || !p && I ? e = this.unsetBit(e, At.RIGHT) : (p && v && d || p && !v && f || !_ && h >= g) && (e = this.setBit(e, At.RIGHT)), e;
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
    const i = this.hasBit(e, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), { MARGIN_TO_EDGE: s } = Vt.numbers;
    return i ? (r = n.top + this.anchorMargin.top - s, a || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (r -= this.measurements.anchorSize.height)), r;
  }
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  getHorizontalOriginOffset(e) {
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, At.RIGHT), i = this.hasBit(this.anchorCorner, At.RIGHT);
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
    const { anchorSize: n } = this.measurements, r = this.hasBit(e, At.BOTTOM), i = this.hasBit(this.anchorCorner, At.BOTTOM);
    let a = 0;
    return r ? a = i ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = i ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
  }
  /**
   * Calculates the offsets for positioning the menu-surface when the
   * menu-surface has been hoisted to the body.
   */
  adjustPositionForHoistedElement(e) {
    const { windowScroll: n, viewportDistance: r, surfaceSize: i, viewportSize: a } = this.measurements, s = Object.keys(e);
    for (const o of s) {
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
    }, Ta.TOUCH_EVENT_WAIT_MS);
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
var jp = /* @__PURE__ */ new Set([
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
]), Wp = /* @__PURE__ */ de("<div><!></div>");
function qp(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "style", 3, ""), a = b(e, "static", 3, !1), s = b(e, "anchor", 3, !0), o = b(e, "fixed", 3, !1), c = b(e, "open", 31, () => oe(a())), u = b(e, "managed", 3, !1), d = b(e, "fullWidth", 3, !1), m = b(e, "quickOpen", 3, !1), f = b(e, "anchorElement", 15), v = b(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = b(e, "maxHeight", 3, 0), g = b(e, "horizontallyCenteredOnViewport", 3, !1), p = b(e, "openBottomBias", 3, 0), _ = b(e, "neverRestoreFocus", 3, !1), I = /* @__PURE__ */ ze(e, jp), A, S = /* @__PURE__ */ ce(void 0), C = new wi(), E = oe({}), w = oe({}), y = /* @__PURE__ */ ce(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), Ce(() => {
    var ee, G;
    A && s() && !((ee = A.parentElement) != null && ee.classList.contains("mdc-menu-surface--anchor")) && ((G = A.parentElement) == null || G.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Ce(() => {
    l(S) && l(S).isOpen() !== c() && (c() ? l(S).open() : l(S).close());
  }), Ce(() => {
    l(S) && l(S).setQuickOpen(m());
  }), Ce(() => {
    l(S) && l(S).setFixedPosition(o());
  }), Ce(() => {
    l(S) && l(S).setMaxHeight(h());
  }), Ce(() => {
    l(S) && l(S).setIsHorizontallyCenteredOnViewport(g());
  });
  const T = Ii;
  Ce(() => {
    l(S) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? l(S).setAnchorCorner(T[e.anchorCorner]) : l(S).setAnchorCorner(e.anchorCorner));
  }), Ce(() => {
    l(S) && l(S).setAnchorMargin(v());
  }), Ce(() => {
    l(S) && l(S).setOpenBottomBias(p());
  });
  const N = ue("SMUI:menu-surface:mount"), Z = ue("SMUI:menu-surface:unmount");
  nt(() => {
    q(
      S,
      new Vt({
        addClass: D,
        removeClass: x,
        hasClass: W,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || c(a()), !c() && ne() && et(ne(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || c(a()), !c() && ne() && et(ne(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || c(!0), c() && ne() && et(ne(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          !c() && ne() && et(ne(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (G) => {
          var ie;
          return ((ie = ne()) == null ? void 0 : ie.contains(G)) ?? !1;
        },
        isRtl: () => ne() && getComputedStyle(ne()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (G) => {
          w["transform-origin"] = G;
        },
        isFocused: () => document.activeElement === ne(),
        saveFocus: () => {
          q(y, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          var G;
          !_() && (!A || (G = ne()) != null && G.contains(document.activeElement)) && l(y) && document.contains(l(y)) && "focus" in l(y) && l(y).focus();
        },
        getInnerDimensions: () => {
          var G, ie;
          return {
            width: ((G = ne()) == null ? void 0 : G.offsetWidth) ?? 0,
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
        setPosition: (G) => {
          w.left = "left" in G ? `${G.left}px` : "", w.right = "right" in G ? `${G.right}px` : "", w.top = "top" in G ? `${G.top}px` : "", w.bottom = "bottom" in G ? `${G.bottom}px` : "";
        },
        setMaxHeight: (G) => {
          w["max-height"] = G;
        },
        registerWindowEventHandler: (G, ie) => C.on(window, G, ie),
        deregisterWindowEventHandler: (G, ie) => C.off(window, G, ie)
      }),
      !0
    );
    const ee = {
      get open() {
        return c();
      },
      set open(G) {
        c(G);
      },
      closeProgrammatic: O
    };
    return N && N(ee), l(S).init(), () => {
      var ie, xe, $, ae;
      Z && Z(ee), s() && ne() && ((ie = ne().parentElement) == null || ie.classList.remove("mdc-menu-surface--anchor"));
      const G = l(S).isHoistedElement;
      if ((xe = l(S)) == null || xe.destroy(), q(S, void 0), G)
        try {
          (ae = ($ = ne()) == null ? void 0 : $.parentNode) == null || ae.removeChild(ne());
        } catch {
        }
    };
  });
  function W(ee) {
    return ee in E ? E[ee] : ne().classList.contains(ee);
  }
  function D(ee) {
    E[ee] || (E[ee] = !0);
  }
  function x(ee) {
    (!(ee in E) || E[ee]) && (E[ee] = !1);
  }
  function O(ee) {
    var G;
    (G = l(S)) == null || G.close(ee), c(!1);
  }
  function R(ee) {
    l(S) && c() && !u() && l(S).handleBodyClick(ee);
  }
  function V() {
    return c();
  }
  function k(ee) {
    c(ee);
  }
  function K(ee, G) {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).setAbsolutePosition(ee, G);
  }
  function P(ee) {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).setIsHoisted(ee);
  }
  function F() {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).isFixed();
  }
  function H() {
    if (l(S) == null)
      throw new Error("Instance is not defined.");
    return l(S).flipCornerHorizontally();
  }
  function ne() {
    return A;
  }
  var Ae = {
    isOpen: V,
    setOpen: k,
    setAbsolutePosition: K,
    setIsHoisted: P,
    isFixed: F,
    flipCornerHorizontally: H,
    getElement: ne
  }, j = Wp();
  Pa("click", wd.body, R, !0);
  var z = (ee) => {
    var G;
    l(S) && !u() && l(S).handleKeydown(ee), (G = e.onkeydown) == null || G.call(e, ee);
  };
  Fe(
    j,
    (ee, G) => ({
      class: ee,
      style: G,
      role: "dialog",
      ...I,
      onkeydown: z
    }),
    [
      () => Me({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": o(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(w).map(([ee, G]) => `${ee}: ${G};`).concat([i()]).join(" ")
    ]
  );
  var J = be(j);
  return Se(J, () => e.children ?? he), Ee(j, (ee) => A = ee, () => A), Pe(j, (ee, G) => X == null ? void 0 : X(ee, G), n), L(t, j), Te(Ae);
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
}, Fr = {
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
const Kp = ["input", "button", "textarea", "select"], wn = (t) => {
  const e = t.target;
  if (!e)
    return;
  const n = `${e.tagName}`.toLowerCase();
  Kp.indexOf(n) === -1 && t.preventDefault();
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
function zp() {
  return {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
}
function Xp(t, e) {
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
function _o(t, e) {
  const { nextChar: n, focusItemAtIndex: r, sortedIndexByFirstChar: i, focusedItemIndex: a, skipFocus: s, isItemAtIndexDisabled: o } = t;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(() => {
    jf(e);
  }, ct.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  let c;
  return e.typeaheadBuffer.length === 1 ? c = Yp(i, a, o, e) : c = Zp(i, o, e), c !== -1 && !s && r(c), c;
}
function Yp(t, e, n, r) {
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
  let s = -1, o;
  for (o = 0; o < a.length; o++)
    if (!n(a[o].index)) {
      s = o;
      break;
    }
  for (; o < a.length; o++)
    if (a[o].index > e && !n(a[o].index)) {
      s = o;
      break;
    }
  return s !== -1 ? (r.sortedIndexCursor = s, a[r.sortedIndexCursor].index) : -1;
}
function Zp(t, e, n) {
  const r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  const a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  let s = (n.sortedIndexCursor + 1) % i.length, o = -1;
  for (; s !== n.sortedIndexCursor; ) {
    const c = i[s], u = c.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(c.index);
    if (u && d) {
      o = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return o !== -1 ? (n.sortedIndexCursor = o, i[n.sortedIndexCursor].index) : -1;
}
function Gf(t) {
  return t.typeaheadBuffer.length > 0;
}
function jf(t) {
  t.typeaheadBuffer = "";
}
function iu(t, e) {
  const { event: n, isTargetListItem: r, focusedItemIndex: i, focusItemAtIndex: a, sortedIndexByFirstChar: s, isItemAtIndexDisabled: o } = t, c = xt(n) === "ArrowLeft", u = xt(n) === "ArrowUp", d = xt(n) === "ArrowRight", m = xt(n) === "ArrowDown", f = xt(n) === "Home", v = xt(n) === "End", h = xt(n) === "Enter", g = xt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || c || u || d || m || f || v || h)
    return -1;
  if (!g && n.key.length === 1) {
    wn(n);
    const I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: o
    };
    return _o(I, e);
  }
  return g ? (r && wn(n), r && Gf(e) ? _o({
    focusItemAtIndex: a,
    focusedItemIndex: i,
    nextChar: " ",
    sortedIndexByFirstChar: s,
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
function Qp(t) {
  return t instanceof Array;
}
const Jp = ["Alt", "Control", "Meta", "Shift"];
function au(t) {
  const e = new Set(t ? Jp.filter((n) => t.getModifierState(n)) : []);
  return (n) => n.every((r) => e.has(r)) && n.length === e.size;
}
class Xo extends Ot {
  static get strings() {
    return Fr;
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
    super(Object.assign(Object.assign({}, Xo.defaultAdapter), e)), this.wrapFocus = !1, this.isVertical = !0, this.isSingleSelectionList = !1, this.areDisabledItemsFocusable = !1, this.selectedIndex = ct.UNSET_INDEX, this.focusedItemIndex = ct.UNSET_INDEX, this.useActivatedClass = !1, this.useSelectedAttr = !1, this.ariaCurrentAttrValue = null, this.isCheckboxList = !1, this.isRadioList = !1, this.lastSelectedIndex = null, this.hasTypeahead = !1, this.typeaheadState = zp(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
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
    return this.hasTypeahead && Gf(this.typeaheadState);
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
    const a = xt(e) === "ArrowLeft", s = xt(e) === "ArrowUp", o = xt(e) === "ArrowRight", c = xt(e) === "ArrowDown", u = xt(e) === "Home", d = xt(e) === "End", m = xt(e) === "Enter", f = xt(e) === "Spacebar", v = this.isVertical && c || !this.isVertical && o, h = this.isVertical && s || !this.isVertical && a, g = e.key === "A" || e.key === "a", p = au(e);
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
          focusItemAtIndex: (A) => {
            this.focusItemAtIndex(A);
          },
          focusedItemIndex: -1,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (A) => this.isIndexDisabled(A)
        };
        iu(I, this.typeaheadState);
      }
      return;
    }
    let _ = this.adapter.getFocusedElementIndex();
    if (!(_ === -1 && (_ = r, _ < 0))) {
      if (v && p([]))
        wn(e), this.focusNextElement(_);
      else if (h && p([]))
        wn(e), this.focusPrevElement(_);
      else if (v && p(["Shift"]) && this.isCheckboxList) {
        wn(e);
        const I = this.focusNextElement(_);
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      } else if (h && p(["Shift"]) && this.isCheckboxList) {
        wn(e);
        const I = this.focusPrevElement(_);
        I !== -1 && this.setSelectedIndexOnAction(I, !1);
      } else if (u && p([]))
        wn(e), this.focusFirstElement();
      else if (d && p([]))
        wn(e), this.focusLastElement();
      else if (u && p(["Control", "Shift"]) && this.isCheckboxList) {
        if (wn(e), this.isIndexDisabled(_))
          return;
        this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
      } else if (d && p(["Control", "Shift"]) && this.isCheckboxList) {
        if (wn(e), this.isIndexDisabled(_))
          return;
        this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
      } else if (g && p(["Control"]) && this.isCheckboxList)
        e.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex, !0);
      else if ((m || f) && (p([]) || p(["Alt"]))) {
        if (n) {
          const I = e.target;
          if (I && I.tagName === "A" && m || (wn(e), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
        }
      } else if ((m || f) && p(["Shift"]) && this.isCheckboxList) {
        const I = e.target;
        if (I && I.tagName === "A" && m || (wn(e), this.isIndexDisabled(_)))
          return;
        this.isTypeaheadInProgress() || (this.toggleCheckboxRange((i = this.lastSelectedIndex) !== null && i !== void 0 ? i : _, _, _), this.adapter.notifyAction(_));
      }
      if (this.hasTypeahead) {
        const I = {
          event: e,
          focusItemAtIndex: (A) => {
            this.focusItemAtIndex(A);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: n,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (A) => this.isIndexDisabled(A)
        };
        iu(I, this.typeaheadState);
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
    const a = au(r);
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
    this.isIndexValid(e, !1) && (n ? (this.adapter.removeClassForElementIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Fr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(e, rt.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(e, Fr.ARIA_DISABLED, "true")));
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
    this.selectedIndex === ct.UNSET_INDEX && e !== ct.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(e, Fr.ARIA_CURRENT));
    const n = this.ariaCurrentAttrValue !== null, r = n ? Fr.ARIA_CURRENT : Fr.ARIA_SELECTED;
    if (this.selectedIndex !== ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), e !== ct.UNSET_INDEX) {
      const i = n ? this.ariaCurrentAttrValue : "true";
      this.adapter.setAttributeForElementIndex(e, r, i);
    }
  }
  /**
   * Returns the attribute to use for indicating selection status.
   */
  getSelectionAttribute() {
    return this.useSelectedAttr ? Fr.ARIA_SELECTED : Fr.ARIA_CHECKED;
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
    const r = this.selectedIndex, i = n.isUserInteraction ? new Set(r === ct.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), s = [];
    for (let o = 0; o < this.adapter.getListItemCount(); o++) {
      if (n.omitDisabledItems && this.isIndexDisabled(o))
        continue;
      const c = i == null ? void 0 : i.has(o), u = e.indexOf(o) >= 0;
      u !== c && s.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, u), this.adapter.setAttributeForElementIndex(o, a, u ? "true" : "false");
    }
    this.selectedIndex = n.omitDisabledItems ? this.resolveSelectedIndices(e) : e, n.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
  }
  /**
   * Helper method for ensuring that the list of selected indices remains
   * accurate when calling setCheckboxAtIndex with omitDisabledItems set to
   * true.
   */
  resolveSelectedIndices(e) {
    const r = (this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex).filter((s) => this.isIndexDisabled(s)), i = e.filter((s) => !this.isIndexDisabled(s));
    return [
      .../* @__PURE__ */ new Set([
        ...i,
        ...r
      ])
    ].sort((s, o) => s - o);
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
    const i = new Set(this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex), a = !(i != null && i.has(r)), [s, o] = [e, n].sort(), c = this.getSelectionAttribute(), u = [];
    for (let d = s; d <= o; d++) {
      if (this.isIndexDisabled(d))
        continue;
      const m = i.has(d);
      a !== m && (u.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, `${a}`), a ? i.add(d) : i.delete(d));
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
    if (Qp(this.selectedIndex) && this.selectedIndex.length > 0) {
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
    let s = this.selectedIndex === ct.UNSET_INDEX ? [] : this.selectedIndex.slice();
    a ? s.push(e) : s = s.filter((o) => o !== e), this.selectedIndex = s;
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
    if (e.filter((s) => !this.isIndexDisabled(s)).length >= r)
      this.setCheckboxAtIndex([], {
        isUserInteraction: n,
        omitDisabledItems: !0
      });
    else {
      const s = [];
      for (let o = 0; o < i; o++)
        (!this.isIndexDisabled(o) || e.indexOf(o) > -1) && s.push(o);
      this.setCheckboxAtIndex(s, {
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
    return _o(i, this.typeaheadState);
  }
  /**
   * Initializes the MDCListTextAndIndex data structure by indexing the
   * current list items by primary text.
   *
   * @return The primary texts of all the list items sorted by first
   *     character.
   */
  typeaheadInitSortedIndex() {
    return Xp(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
  }
  /**
   * Clears the typeahead buffer.
   */
  clearTypeaheadBuffer() {
    jf(this.typeaheadState);
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
const ji = {
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
}, $p = {
  FOCUS_ROOT_INDEX: -1
};
var Fi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Fi || (Fi = {}));
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
class Yo extends Ot {
  static get cssClasses() {
    return ji;
  }
  static get strings() {
    return Hi;
  }
  static get numbers() {
    return $p;
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
    super(Object.assign(Object.assign({}, Yo.defaultAdapter), e)), this.defaultFocusState = Fi.LIST_ROOT, this.selectedIndex = -1;
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
      case Fi.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case Fi.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case Fi.NONE:
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
    n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, Hi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, ji.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(e, ji.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(e, Hi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = e;
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
var e_ = /* @__PURE__ */ new Set([
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
function t_(t, e) {
  ye(e, !0);
  const { closest: n } = ds;
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "open", 15, !1), s = b(e, "anchorElement", 15), o = b(e, "managed", 3, !1), c = /* @__PURE__ */ ze(e, e_), u, d = /* @__PURE__ */ ce(void 0), m = /* @__PURE__ */ ce(void 0), f = /* @__PURE__ */ ce(void 0);
  le("SMUI:menu-surface:mount", (y) => {
    l(m) || q(m, y, !0);
  });
  const v = ue("SMUI:list:mount");
  le("SMUI:list:mount", (y) => {
    l(f) || q(f, y, !0), v && v(y);
  });
  const h = ue("SMUI:menu:mount"), g = ue("SMUI:menu:unmount");
  nt(() => (q(
    d,
    new Yo({
      addClassToElementAtIndex: (y, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).addClassForElementIndex(y, T);
      },
      removeClassFromElementAtIndex: (y, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeClassForElementIndex(y, T);
      },
      addAttributeToElementAtIndex: (y, T, N) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).setAttributeForElementIndex(y, T, N);
      },
      removeAttributeFromElementAtIndex: (y, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeAttributeForElementIndex(y, T);
      },
      getAttributeFromElementAtIndex: (y, T) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getAttributeFromElementIndex(y, T);
      },
      elementContainsClass: (y, T) => y.classList.contains(T),
      closeSurface: (y) => {
        var T;
        !o() && E() && ((T = l(m)) == null || T.closeProgrammatic(y), et(E(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (y) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getOrderedList().map((T) => T.element).indexOf(y);
      },
      notifySelected: (y) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        et(E(), "SMUIMenuSelected", {
          index: y.index,
          item: l(f).getOrderedList()[y.index].element
        });
      },
      getMenuItemCount: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).items.length;
      },
      focusItemAtIndex: (y) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).focusItemAtIndex(y);
      },
      focusListRoot: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in l(f).element && l(f).element.focus();
      },
      isSelectableItemAtIndex: (y) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(l(f).getOrderedList()[y].element, `.${ji.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (y) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        const T = l(f).getOrderedList(), N = n(T[y].element, `.${ji.MENU_SELECTION_GROUP}`), Z = N == null ? void 0 : N.querySelector(`.${ji.MENU_SELECTED_LIST_ITEM}`);
        return Z ? T.map((W) => W.element).indexOf(Z) : -1;
      }
    }),
    !0
  ), h && h(l(d)), l(d).init(), () => {
    var y;
    g && l(d) && g(l(d)), (y = l(d)) == null || y.destroy(), q(d, void 0);
  }));
  function p(y) {
    l(d) && l(d).handleKeydown(y);
  }
  function _() {
    return a();
  }
  function I(y) {
    a(y);
  }
  function A(y) {
    if (l(d) == null)
      throw new Error("Instance is undefined.");
    l(d).setDefaultFocusState(y);
  }
  function S() {
    if (l(d) == null)
      throw new Error("Instance is undefined.");
    return l(d).getSelectedIndex();
  }
  function C() {
    return u;
  }
  function E() {
    return u.getElement();
  }
  var w = {
    isOpen: _,
    setOpen: I,
    setDefaultFocusState: A,
    getSelectedIndex: S,
    getMenuSurface: C,
    getElement: E
  };
  {
    let y = /* @__PURE__ */ fe(() => Me({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      qp(t, it(
        {
          get use() {
            return r();
          },
          get class() {
            return l(y);
          },
          get managed() {
            return o();
          }
        },
        () => c,
        {
          onkeydown: (T) => {
            var N;
            p(T), (N = e.onkeydown) == null || N.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var N;
            l(d) && l(d).handleMenuSurfaceOpened(), (N = e.onSMUIMenuSurfaceOpened) == null || N.call(e, T);
          },
          onSMUIListAction: (T) => {
            var N;
            l(d) && l(f) && l(d).handleItemAction(l(f).getOrderedList()[T.detail.index].element), (N = e.onSMUIListAction) == null || N.call(e, T);
          },
          get open() {
            return a();
          },
          set open(T) {
            a(T);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(T) {
            s(T);
          },
          children: (T, N) => {
            var Z = ve(), W = re(Z);
            Se(W, () => e.children ?? he), L(T, Z);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => u = T,
      () => u
    );
  }
  return Te(w);
}
var n_ = /* @__PURE__ */ new Set([
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
function r_(t, e) {
  ye(e, !0);
  const { closest: n, matches: r } = ds;
  let i = ue("SMUI:list:nav"), a = b(e, "use", 19, () => []), s = b(e, "class", 3, ""), o = b(e, "nonInteractive", 3, !1), c = b(e, "dense", 3, !1), u = b(e, "textualList", 3, !1), d = b(e, "avatarList", 3, !1), m = b(e, "iconList", 3, !1), f = b(e, "imageList", 3, !1), v = b(e, "thumbnailList", 3, !1), h = b(e, "videoList", 3, !1), g = b(e, "twoLine", 3, !1), p = b(e, "threeLine", 3, !1), _ = b(e, "vertical", 3, !0), I = b(e, "wrapFocus", 19, () => ue("SMUI:list:wrapFocus") ?? !1), A = b(e, "singleSelection", 3, !1), S = b(e, "disabledItemsFocusable", 3, !1), C = b(e, "selectedIndex", 31, () => -1), E = b(e, "radioList", 3, !1), w = b(e, "checkList", 3, !1), y = b(e, "hasTypeahead", 3, !1), T = b(e, "component", 3, ti), N = b(e, "tag", 3, i ? "nav" : "ul"), Z = /* @__PURE__ */ ze(e, n_), W, D = /* @__PURE__ */ ce(void 0), x = [], O = ue("SMUI:list:role");
  const R = /* @__PURE__ */ new WeakMap();
  let V = ue("SMUI:dialog:selection"), k = ue("SMUI:addLayoutListener"), K;
  le("SMUI:list:nonInteractive", o()), le("SMUI:separator:context", "list"), O || (A() ? (O = "listbox", le("SMUI:list:item:role", "option")) : E() ? (O = "radiogroup", le("SMUI:list:item:role", "radio")) : w() ? (O = "group", le("SMUI:list:item:role", "checkbox")) : (O = "list", le("SMUI:list:item:role", void 0))), Ce(() => {
    l(D) && l(D).setVerticalOrientation(_());
  }), Ce(() => {
    l(D) && l(D).setWrapFocus(I());
  }), Ce(() => {
    l(D) && l(D).setHasTypeahead(y());
  }), Ce(() => {
    l(D) && l(D).setSingleSelection(A());
  }), Ce(() => {
    l(D) && l(D).setDisabledItemsFocusable(S());
  }), Ce(() => {
    l(D) && A() && U() !== C() && l(D).setSelectedIndex(C());
  }), k && (K = k(Ve)), le("SMUI:list:item:mount", (me) => {
    x.push(me), R.set(me.element, me), A() && me.selected && C(Oe(me.element));
  }), le("SMUI:list:item:unmount", (me) => {
    const Ie = (me && x.findIndex((Q) => Q === me)) ?? -1;
    Ie !== -1 && (x.splice(Ie, 1), R.delete(me.element));
  });
  const P = ue("SMUI:list:mount"), F = ue("SMUI:list:unmount");
  nt(() => {
    q(
      D,
      new Xo({
        addClassForElementIndex: G,
        focusItemAtIndex: se,
        getAttributeForElementIndex: (Ie, Q) => {
          var te;
          return ((te = J()[Ie]) == null ? void 0 : te.getAttr(Q)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? J().map((Ie) => Ie.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => x.length,
        getPrimaryTextAtIndex: Ue,
        hasCheckboxAtIndex: (Ie) => {
          var Q;
          return ((Q = J()[Ie]) == null ? void 0 : Q.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (Ie) => {
          var Q;
          return ((Q = J()[Ie]) == null ? void 0 : Q.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (Ie) => {
          const Q = J()[Ie];
          return ((Q == null ? void 0 : Q.hasCheckbox) && Q.checked) ?? !1;
        },
        isFocusInsideList: () => W != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => W != null && document.activeElement === Re(),
        listItemAtIndexHasClass: ee,
        notifyAction: (Ie) => {
          C(Ie), W != null && et(Re(), "SMUIListAction", { index: Ie });
        },
        notifySelectionChange: (Ie) => {
          W != null && et(Re(), "SMUIListSelectionChange", { changedIndices: Ie });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: xe,
        setCheckedCheckboxOrRadioAtIndex: (Ie, Q) => {
          J()[Ie].checked = Q;
        },
        setTabIndexForListItemChildren: (Ie, Q) => {
          const te = J()[Ie];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (ht) => {
            ht.setAttribute("tabindex", Q);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Re();
      },
      get items() {
        return x;
      },
      get typeaheadInProgress() {
        if (!l(D))
          throw new Error("Instance is undefined.");
        return l(D).isTypeaheadInProgress();
      },
      typeaheadMatchItem(Ie, Q) {
        if (!l(D))
          throw new Error("Instance is undefined.");
        return l(D).typeaheadMatchItem(
          Ie,
          Q,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: J,
      focusItemAtIndex: se,
      addClassForElementIndex: G,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: xe,
      removeAttributeForElementIndex: $,
      getAttributeFromElementIndex: ae,
      getPrimaryTextAtIndex: Ue
    };
    return P && P(me), l(D).init(), l(D).layout(), () => {
      var Ie;
      F && F(me), (Ie = l(D)) == null || Ie.destroy(), q(D, void 0);
    };
  }), Nr(() => {
    K && K();
  });
  function H(me) {
    l(D) && me.target && l(D).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Oe(me.target));
  }
  function ne(me) {
    l(D) && me.target && l(D).handleFocusIn(Oe(me.target));
  }
  function Ae(me) {
    l(D) && me.target && l(D).handleFocusOut(Oe(me.target));
  }
  function j(me) {
    l(D) && me.target && l(D).handleClick(Oe(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function z(me) {
    if (E() || w()) {
      const Ie = Oe(me.target);
      if (Ie !== -1) {
        const Q = J()[Ie];
        Q && (E() && !Q.checked || w()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Q.checked = !Q.checked), Q.activateRipple(), window.requestAnimationFrame(() => {
          Q.deactivateRipple();
        }));
      }
    }
  }
  function J() {
    return W == null ? [] : [...Re().children].map((me) => R.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function ee(me, Ie) {
    const Q = J()[me];
    return (Q && Q.hasClass(Ie)) ?? !1;
  }
  function G(me, Ie) {
    const Q = J()[me];
    Q && Q.addClass(Ie);
  }
  function ie(me, Ie) {
    const Q = J()[me];
    Q && Q.removeClass(Ie);
  }
  function xe(me, Ie, Q) {
    const te = J()[me];
    te && te.addAttr(Ie, Q);
  }
  function $(me, Ie) {
    const Q = J()[me];
    Q && Q.removeAttr(Ie);
  }
  function ae(me, Ie) {
    const Q = J()[me];
    return Q ? Q.getAttr(Ie) : null;
  }
  function Ue(me) {
    const Ie = J()[me];
    return (Ie && Ie.getPrimaryText()) ?? "";
  }
  function Oe(me) {
    const Ie = n(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Ie && r(Ie, ".mdc-deprecated-list-item") ? J().map((Q) => Q == null ? void 0 : Q.element).indexOf(Ie) : -1;
  }
  function Ve() {
    if (!l(D))
      throw new Error("Instance is undefined.");
    return l(D).layout();
  }
  function ke(me, Ie) {
    if (!l(D))
      throw new Error("Instance is undefined.");
    return l(D).setEnabled(me, Ie);
  }
  function Ne() {
    if (!l(D))
      throw new Error("Instance is undefined.");
    return l(D).isTypeaheadInProgress();
  }
  function U() {
    if (!l(D))
      throw new Error("Instance is undefined.");
    return l(D).getSelectedIndex();
  }
  function Y() {
    if (!l(D))
      throw new Error("Instance is undefined.");
    return l(D).getFocusedItemIndex();
  }
  function se(me) {
    const Ie = J()[me];
    Ie && "focus" in Ie.element && Ie.element.focus();
  }
  function Re() {
    return W.getElement();
  }
  var je = {
    layout: Ve,
    setEnabled: ke,
    getTypeaheadInProgress: Ne,
    getSelectedIndex: U,
    getFocusedItemIndex: Y,
    focusItemAtIndex: se,
    getElement: Re
  }, St = ve(), Bn = re(St);
  {
    let me = /* @__PURE__ */ fe(() => Me({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": o(),
      "mdc-deprecated-list--dense": c(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || V,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": p() && !g(),
      [s()]: !0
    }));
    Mr(Bn, T, (Ie, Q) => {
      Ee(
        Q(Ie, it(
          {
            get tag() {
              return N();
            },
            get use() {
              return a();
            },
            get class() {
              return l(me);
            },
            get role() {
              return O;
            }
          },
          () => Z,
          {
            onkeydown: (te) => {
              var Be;
              H(te), (Be = e.onkeydown) == null || Be.call(e, te);
            },
            onfocusin: (te) => {
              var Be;
              ne(te), (Be = e.onfocusin) == null || Be.call(e, te);
            },
            onfocusout: (te) => {
              var Be;
              Ae(te), (Be = e.onfocusout) == null || Be.call(e, te);
            },
            onclick: (te) => {
              var Be;
              j(te), (Be = e.onclick) == null || Be.call(e, te);
            },
            onSMUIAction: (te) => {
              var Be;
              z(te), (Be = e.onSMUIAction) == null || Be.call(e, te);
            },
            children: (te, Be) => {
              var ht = ve(), It = re(ht);
              Se(It, () => e.children ?? he), L(te, ht);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => W = te,
        () => W
      );
    });
  }
  return L(t, St), Te(je);
}
let i_ = 0;
var a_ = /* @__PURE__ */ new Set([
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
]), s_ = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), l_ = /* @__PURE__ */ de("<!><!>", 1);
function o_(t, e) {
  ye(e, !0);
  let n = () => {
  };
  function r(G) {
    return G === n;
  }
  let i = ue("SMUI:list:item:nav"), a = b(e, "use", 19, () => []), s = b(e, "class", 3, ""), o = b(e, "style", 3, ""), c = b(e, "nonInteractive", 19, () => ue("SMUI:list:nonInteractive") ?? !1), u = b(e, "ripple", 19, () => !c()), d = b(e, "wrapper", 3, !1), m = b(e, "activated", 15, !1), f = b(e, "role", 19, () => d() ? "presentation" : ue("SMUI:list:item:role")), v = b(e, "selected", 15, !1), h = b(e, "disabled", 3, !1), g = b(e, "skipRestoreFocus", 3, !1), p = b(e, "tabindex", 15, n), _ = b(e, "inputId", 19, () => "SMUI-form-field-list-" + i_++), I = b(e, "component", 3, ti), A = b(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), S = /* @__PURE__ */ ze(e, a_);
  le("SMUI:list:nonInteractive", void 0), le("SMUI:list:item:role", void 0);
  let C, E = oe({}), w = oe({}), y = oe({}), T = /* @__PURE__ */ ce(void 0), N = /* @__PURE__ */ ce(void 0);
  const Z = /* @__PURE__ */ fe(() => r(p()) ? !c() && !h() && (v() || l(T) && l(T).checked) ? 0 : -1 : p());
  le("SMUI:generic:input:props", { id: _() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (G) => {
    ("_smui_checkbox_accessor" in G || "_smui_radio_accessor" in G) && q(T, G, !0);
  }), le("SMUI:generic:input:unmount", () => {
    q(T, void 0);
  });
  const W = ue("SMUI:list:item:mount"), D = ue("SMUI:list:item:unmount");
  nt(() => {
    if (!v() && !c() && C) {
      let ie = !0, xe = C.getElement();
      for (; xe.previousElementSibling; )
        if (xe = xe.previousElementSibling, xe.nodeType === 1 && xe.classList.contains("mdc-deprecated-list-item") && !xe.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && q(N, window.requestAnimationFrame(() => F(xe)), !0);
    }
    const G = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return v();
      },
      set selected(ie) {
        v(ie);
      },
      hasClass: x,
      addClass: O,
      removeClass: R,
      getAttr: k,
      addAttr: K,
      removeAttr: P,
      getPrimaryText: Ae,
      // For inputs within item.
      get checked() {
        return (l(T) && l(T).checked) ?? !1;
      },
      set checked(ie) {
        l(T) && (l(T).checked = !!ie);
      },
      get hasCheckbox() {
        return !!(l(T) && "_smui_checkbox_accessor" in l(T));
      },
      get hasRadio() {
        return !!(l(T) && "_smui_radio_accessor" in l(T));
      },
      activateRipple() {
        l(T) && l(T).activateRipple();
      },
      deactivateRipple() {
        l(T) && l(T).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: ne,
      get tabindex() {
        return l(Z);
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
    return W && W(G), () => {
      D && D(G), l(N) && window.cancelAnimationFrame(l(N));
    };
  });
  function x(G) {
    return G in E ? E[G] : j().classList.contains(G);
  }
  function O(G) {
    E[G] || (E[G] = !0);
  }
  function R(G) {
    (!(G in E) || E[G]) && (E[G] = !1);
  }
  function V(G, ie) {
    w[G] != ie && (ie === "" || ie == null ? delete w[G] : w[G] = ie);
  }
  function k(G) {
    return G in y ? y[G] ?? null : j().getAttribute(G);
  }
  function K(G, ie) {
    y[G] !== ie && (y[G] = ie);
  }
  function P(G) {
    (!(G in y) || y[G] != null) && (y[G] = void 0);
  }
  function F(G) {
    let ie = !0;
    for (; G.nextElementSibling; )
      if (G = G.nextElementSibling, G.nodeType === 1 && G.classList.contains("mdc-deprecated-list-item")) {
        const xe = G.attributes.getNamedItem("tabindex");
        if (xe && xe.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && p(0);
  }
  function H(G) {
    const ie = G.key === "Enter", xe = G.key === "Space";
    (ie || xe) && ne(G);
  }
  function ne(G) {
    h() || et(j(), "SMUIAction", G);
  }
  function Ae() {
    if (!C)
      return "";
    const G = C.getElement();
    if (!G)
      return "";
    const ie = G.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const xe = G.querySelector(".mdc-deprecated-list-item__text");
    return xe ? xe.textContent ?? "" : G.textContent ?? "";
  }
  function j() {
    return C.getElement();
  }
  var z = { action: ne, getPrimaryText: Ae, getElement: j }, J = ve(), ee = re(J);
  {
    let G = /* @__PURE__ */ fe(() => [
      ...c() ? [] : [
        [
          Qt,
          {
            ripple: !l(T),
            unbounded: !1,
            color: (m() || v()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: O,
            removeClass: R,
            addStyle: V
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ fe(() => Me({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": c(),
      ...E,
      [s()]: !0
    })), xe = /* @__PURE__ */ fe(() => Object.entries(w).map(([ae, Ue]) => `${ae}: ${Ue};`).concat([o()]).join(" ")), $ = /* @__PURE__ */ fe(() => g() || void 0);
    Mr(ee, I, (ae, Ue) => {
      Ee(
        Ue(ae, it(
          {
            get tag() {
              return A();
            },
            get use() {
              return l(G);
            },
            get class() {
              return l(ie);
            },
            get style() {
              return l(xe);
            }
          },
          () => i && m() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": l(T) && l(T).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return l($);
            },
            get tabindex() {
              return l(Z);
            },
            get href() {
              return e.href;
            }
          },
          () => y,
          () => S,
          {
            onclick: (Oe) => {
              var Ve;
              ne(Oe), (Ve = e.onclick) == null || Ve.call(e, Oe);
            },
            onkeydown: (Oe) => {
              var Ve;
              H(Oe), (Ve = e.onkeydown) == null || Ve.call(e, Oe);
            },
            children: (Oe, Ve) => {
              var ke = l_(), Ne = re(ke);
              {
                var U = (se) => {
                  var Re = s_();
                  L(se, Re);
                };
                pe(Ne, (se) => {
                  u() && se(U);
                });
              }
              var Y = _e(Ne);
              Se(Y, () => e.children ?? he), L(Oe, ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Oe) => C = Oe,
        () => C
      );
    });
  }
  return L(t, J), Te(z);
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
}, Ca = {
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
}, ai = {
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
const si = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Sr = {
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
class Zo extends Ot {
  static get cssClasses() {
    return Sr;
  }
  static get strings() {
    return si;
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
    super(Object.assign(Object.assign({}, Zo.defaultAdapter), e));
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
    return this.adapter.getAttr(si.ARIA_HIDDEN) !== "true";
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
    e ? this.adapter.addClass(Sr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Sr.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * Sets the persistency of the validation helper text.
   * This keeps the validation message visible even if the select is valid,
   * though it will be displayed in the normal (grey) color.
   */
  setValidationMsgPersistent(e) {
    e ? this.adapter.addClass(Sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * @return Whether the helper text acts as a validation message.
   * By default, validation messages are hidden when the select is valid and
   * visible when the select is invalid.
   */
  getIsValidation() {
    return this.adapter.hasClass(Sr.HELPER_TEXT_VALIDATION_MSG);
  }
  /**
   * @return Whether the validation helper text persists even if the input is
   * valid. If it is, it will be displayed in the normal (grey) color.
   */
  getIsValidationMsgPersistent() {
    return this.adapter.hasClass(Sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
  }
  /**
   * When acting as a validation message, shows/hides the helper text and
   * triggers alerts as necessary based on the select's validity.
   */
  setValidity(e) {
    if (!this.adapter.hasClass(Sr.HELPER_TEXT_VALIDATION_MSG))
      return;
    const r = this.adapter.hasClass(Sr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    if (!e || r) {
      this.showToScreenReader(), e ? this.adapter.removeAttr(si.ROLE) : this.adapter.setAttr(si.ROLE, "alert");
      return;
    }
    this.adapter.removeAttr(si.ROLE), this.hide();
  }
  /**
   * Makes the helper text visible to screen readers.
   */
  showToScreenReader() {
    this.adapter.removeAttr(si.ARIA_HIDDEN);
  }
  /**
   * Hides the help text from screen readers.
   */
  hide() {
    this.adapter.setAttr(si.ARIA_HIDDEN, "true");
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
class Qo extends Ot {
  static get cssClasses() {
    return _t;
  }
  static get numbers() {
    return ai;
  }
  static get strings() {
    return Ca;
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
    super(Object.assign(Object.assign({}, Qo.defaultAdapter), e)), this.disabled = !1, this.isMenuOpen = !1, this.useDefaultValidation = !0, this.customValidity = !0, this.lastSelectedIndex = ai.UNSET_INDEX, this.clickDebounceTimeout = 0, this.recentlyClicked = !1, this.leadingIcon = n.leadingIcon, this.helperText = n.helperText, this.ariaDescribedbyIds = ((i = (r = this.adapter.getSelectAnchorAttr(Ca.ARIA_DESCRIBEDBY)) === null || r === void 0 ? void 0 : r.split(" ")) === null || i === void 0 ? void 0 : i.filter((a) => {
      var s;
      return a !== ((s = this.helperText) === null || s === void 0 ? void 0 : s.getId()) && a !== "";
    })) || [];
  }
  /** Returns the index of the currently selected menu item, or -1 if none. */
  getSelectedIndex() {
    return this.adapter.getSelectedIndex();
  }
  setSelectedIndex(e, n = !1, r = !1) {
    e >= this.adapter.getMenuItemCount() || (this.adapter.setSelectedIndex(e), e === ai.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== e && this.handleChange(), this.lastSelectedIndex = e);
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
    return e !== ai.UNSET_INDEX ? n[e] : "";
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
    const n = this.adapter.hasClass(_t.FOCUSED);
    if (e) {
      const r = ai.LABEL_SCALE, i = this.adapter.getLabelWidth() * r;
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
    return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== ai.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
  }
  setRequired(e) {
    e ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", e.toString()), this.adapter.setLabelRequired(e);
  }
  getRequired() {
    return this.adapter.getSelectAnchorAttr("aria-required") === "true";
  }
  init() {
    const e = this.adapter.getAnchorElement();
    e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner(Ii.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
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
    n && r ? this.adapter.setSelectAnchorAttr(Ca.ARIA_DESCRIBEDBY, [...this.ariaDescribedbyIds, r].join(" ")) : this.ariaDescribedbyIds.length > 0 ? this.adapter.setSelectAnchorAttr(Ca.ARIA_DESCRIBEDBY, this.ariaDescribedbyIds.join(" ")) : this.adapter.removeSelectAnchorAttr(Ca.ARIA_DESCRIBEDBY);
  }
  setClickDebounceTimeout() {
    clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(() => {
      this.recentlyClicked = !1;
    }, ai.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
  }
}
let c_ = 0;
var u_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "id",
  "persistent",
  "validationMsg",
  "children"
]), d_ = /* @__PURE__ */ de("<div><!></div>");
function f_(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "id", 19, () => "SMUI-select-helper-text-" + c_++), a = b(e, "persistent", 3, !1), s = b(e, "validationMsg", 3, !1), o = /* @__PURE__ */ ze(e, u_), c, u = /* @__PURE__ */ ce(void 0), d = oe({}), m = oe({}), f = /* @__PURE__ */ ce(void 0);
  const v = ue("SMUI:select:helper-text:id"), h = ue("SMUI:select:helper-text:mount"), g = ue("SMUI:select:helper-text:unmount");
  nt(() => (q(
    u,
    new Zo({
      addClass: _,
      removeClass: I,
      hasClass: p,
      getAttr: A,
      setAttr: S,
      removeAttr: C,
      setContent: (W) => {
        q(f, W, !0);
      }
    }),
    !0
  ), v && v(i()), h && h(l(u)), l(u).init(), () => {
    var W;
    g && l(u) && g(l(u)), (W = l(u)) == null || W.destroy(), q(u, void 0);
  }));
  function p(W) {
    return W in d ? d[W] : E().classList.contains(W);
  }
  function _(W) {
    d[W] || (d[W] = !0);
  }
  function I(W) {
    (!(W in d) || d[W]) && (d[W] = !1);
  }
  function A(W) {
    return W in m ? m[W] ?? null : E().getAttribute(W);
  }
  function S(W, D) {
    m[W] !== D && (m[W] = D);
  }
  function C(W) {
    (!(W in m) || m[W] != null) && (m[W] = void 0);
  }
  function E() {
    return c;
  }
  var w = { getElement: E }, y = d_();
  Fe(
    y,
    (W) => ({
      class: W,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...m,
      ...o
    }),
    [
      () => Me({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var T = be(y);
  {
    var N = (W) => {
      var D = ve(), x = re(D);
      Se(x, () => e.children ?? he), L(W, D);
    }, Z = (W) => {
      var D = Dt();
      Le(() => lt(D, l(f))), L(W, D);
    };
    pe(T, (W) => {
      l(f) == null ? W(N) : W(Z, -1);
    });
  }
  return Ee(y, (W) => c = W, () => c), Pe(y, (W, D) => X == null ? void 0 : X(W, D), n), L(t, y), Te(w);
}
let h_ = 0;
var v_ = /* @__PURE__ */ new Set([
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
]), m_ = /* @__PURE__ */ de("<input/>"), g_ = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), b_ = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function p_(t, e) {
  ye(e, !0);
  const n = () => fr(Re, "$selectedTextStore", r), [r, i] = Dr();
  let a = () => {
  };
  function s(M) {
    return M === a;
  }
  let o = b(e, "use", 19, () => []), c = b(e, "class", 3, ""), u = b(e, "style", 3, ""), d = b(e, "ripple", 3, !0), m = b(e, "disabled", 3, !1), f = b(e, "variant", 3, "standard"), v = b(e, "noLabel", 3, !1), h = b(e, "label", 3, void 0), g = b(e, "value", 15), p = b(e, "key", 3, (M) => M), _ = b(e, "dirty", 15, !1), I = b(e, "invalid", 15, a), A = b(e, "updateInvalid", 19, () => s(I())), S = b(e, "required", 3, !1), C = b(e, "inputId", 19, () => "SMUI-select-" + h_++), E = b(e, "hiddenInput", 3, !1), w = b(e, "withLeadingIcon", 3, a), y = b(e, "anchor$use", 19, () => []), T = b(e, "anchor$class", 3, ""), N = b(e, "selectedTextContainer$use", 19, () => []), Z = b(e, "selectedTextContainer$class", 3, ""), W = b(e, "selectedText$use", 19, () => []), D = b(e, "selectedText$class", 3, ""), x = b(e, "dropdownIcon$use", 19, () => []), O = b(e, "dropdownIcon$class", 3, ""), R = b(e, "menu$class", 3, ""), V = /* @__PURE__ */ ze(e, v_);
  const k = s(I());
  s(I()) && I(!1);
  let K, P = /* @__PURE__ */ ce(void 0), F = oe({}), H = oe({}), ne, Ae = oe({}), j = /* @__PURE__ */ ce(-1);
  const z = /* @__PURE__ */ fe(() => V.menu$id ?? C() + "-menu");
  let J = /* @__PURE__ */ ce(void 0), ee = ue("SMUI:addLayoutListener"), G, ie = /* @__PURE__ */ ce(!1), xe = oe({}), $ = /* @__PURE__ */ ce(void 0), ae = /* @__PURE__ */ ce(void 0), Ue = /* @__PURE__ */ ce(!1), Oe, Ve = ue("SMUI:select:context"), ke, Ne, U, Y, se;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const Re = rn("");
  le("SMUI:select:selectedText", Re);
  const je = rn(g());
  Ce(() => {
    yi(je, g());
  }), le("SMUI:select:value", je), Ce(() => {
    l(P) && l(P).getValue() !== p()(g()) && l(P).setValue(p()(g()));
  });
  let St = l(j);
  Ce(() => {
    if (St !== l(j))
      if (St = l(j), l(P))
        l(P).setSelectedIndex(
          l(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const M = qt();
        g() !== M[l(j)] && g(M[l(j)]);
      }
  }), Ce(() => {
    l(P) && l(P).getDisabled() !== m() && l(P).setDisabled(m());
  }), Ce(() => {
    l(P) && _() && l(P).isValid() !== !I() && (A() ? I(!l(P).isValid()) : l(P).setValid(!I()));
  }), Ce(() => {
    l(P) && l(P).getRequired() !== S() && l(P).setRequired(S());
  }), ee && (G = ee(tt)), le("SMUI:select:leading-icon:mount", (M) => {
    ke = M;
  }), le("SMUI:select:leading-icon:unmount", () => {
    ke = void 0;
  }), le("SMUI:list:mount", (M) => {
    Oe = M;
  }), le("SMUI:select:helper-text:id", (M) => {
    q(J, M, !0);
  }), le("SMUI:select:helper-text:mount", (M) => {
    Ne = M;
  }), le("SMUI:select:helper-text:unmount", () => {
    q(J, void 0), Ne = void 0;
  }), nt(() => (q(
    P,
    new Qo(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (M) => {
          yi(Re, M);
        },
        isSelectAnchorFocused: () => document.activeElement === ne,
        getSelectAnchorAttr: ht,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: Pt,
        addMenuClass: te,
        removeMenuClass: Be,
        openMenu: () => {
          q(ie, !0);
        },
        closeMenu: () => {
          q(ie, !1);
        },
        getAnchorElement: () => ne,
        setMenuAnchorElement: (M) => {
          q($, M, !0);
        },
        setMenuAnchorCorner: (M) => {
          q(ae, M, !0);
        },
        setMenuWrapFocus: (M) => {
          q(Ue, M, !0);
        },
        getSelectedIndex: () => l(j),
        setSelectedIndex: (M) => {
          St = M, q(j, M, !0), g(qt()[l(j)]);
        },
        focusMenuItemAtIndex: (M) => {
          Oe.focusItemAtIndex(M);
        },
        getMenuItemCount: () => Oe.items.length,
        getMenuItemValues: () => qt().map(p()),
        getMenuItemTextAtIndex: (M) => Oe.getPrimaryTextAtIndex(M),
        isTypeaheadInProgress: () => Oe.typeaheadInProgress,
        typeaheadMatchItem: (M, ge) => Oe.typeaheadMatchItem(M, ge),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: Ie,
        hasClass: Bn,
        setRippleCenter: (M) => Y && Y.setRippleCenter(M),
        activateBottomLine: () => Y && Y.activate(),
        deactivateBottomLine: () => Y && Y.deactivate(),
        notifyChange: (M) => {
          var ge;
          _(!0), A() && I(!((ge = l(P)) != null && ge.isValid())), et(Ur(), "SMUISelectChange", { value: g(), index: l(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!se,
        notchOutline: (M) => se && se.notch(M),
        closeOutline: () => se && se.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!U,
        floatLabel: (M) => U && U.float(M),
        getLabelWidth: () => U ? U.getWidth() : 0,
        setLabelRequired: (M) => U && U.setRequired(M)
      },
      {
        get helperText() {
          return Ne;
        },
        get leadingIcon() {
          return ke;
        }
      }
    ),
    !0
  ), q(j, qt().indexOf(g()), !0), l(P).init(), Kt(k), () => {
    var M;
    (M = l(P)) == null || M.destroy(), q(P, void 0);
  })), Nr(() => {
    G && G();
  });
  function Bn(M) {
    return M in F ? F[M] : Ur().classList.contains(M);
  }
  function me(M) {
    F[M] || (F[M] = !0);
  }
  function Ie(M) {
    (!(M in F) || F[M]) && (F[M] = !1);
  }
  function Q(M, ge) {
    H[M] != ge && (ge === "" || ge == null ? delete H[M] : H[M] = ge);
  }
  function te(M) {
    xe[M] || (xe[M] = !0);
  }
  function Be(M) {
    (!(M in xe) || xe[M]) && (xe[M] = !1);
  }
  function ht(M) {
    return M in Ae ? Ae[M] ?? null : Ur().getAttribute(M);
  }
  function It(M, ge) {
    Ae[M] !== ge && (Ae[M] = ge);
  }
  function Pt(M) {
    (!(M in Ae) || Ae[M] != null) && (Ae[M] = void 0);
  }
  function qt() {
    return Oe.getOrderedList().map((M) => M.getValue());
  }
  function Hr(M) {
    const ge = M.currentTarget.getBoundingClientRect();
    return (gt(M) ? M.touches[0].clientX : M.clientX) - ge.left;
  }
  function gt(M) {
    return "touches" in M;
  }
  function Ht() {
    if (l(P) == null)
      throw new Error("Instance is undefined.");
    return l(P).getUseDefaultValidation();
  }
  function Kt(M) {
    var ge;
    (ge = l(P)) == null || ge.setUseDefaultValidation(M);
  }
  function er() {
    ne.focus();
  }
  function tt() {
    var M;
    (M = l(P)) == null || M.layout();
  }
  function Ur() {
    return K;
  }
  var Qe = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: Kt,
    focus: er,
    layout: tt,
    getElement: Ur
  }, dt = b_(), ot = re(dt);
  Fe(ot, (M, ge, vt) => ({ class: M, style: ge, ...vt }), [
    () => Me({
      "mdc-select": !0,
      "mdc-select--required": S(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": v() || h() == null,
      "mdc-select--invalid": I(),
      "mdc-select--activated": l(ie),
      "mdc-data-table__pagination-rows-per-page-select": Ve === "data-table:pagination",
      "mdc-data-table__pagination-rows-per-page-select--outlined": Ve === "data-table:pagination" && f() === "outlined",
      ...F,
      [c()]: !0
    }),
    () => Object.entries(H).map(([M, ge]) => `${M}: ${ge};`).concat([u()]).join(" "),
    () => mr(V, [
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
  var zt = be(ot);
  {
    var Fn = (M) => {
      var ge = m_();
      Fe(
        ge,
        (vt) => ({
          type: "hidden",
          required: S(),
          disabled: m(),
          value: g(),
          ...vt
        }),
        [() => st(V, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), L(M, ge);
    };
    pe(zt, (M) => {
      E() && M(Fn);
    });
  }
  var ft = _e(zt, 2), Rt = (M) => {
    var ge;
    ne.focus(), l(P) && l(P).handleClick(Hr(M)), (ge = e.anchor$onclick) == null || ge.call(e, M);
  }, kt = (M) => {
    var ge;
    l(P) && l(P).handleKeydown(M), (ge = e.onkeydown) == null || ge.call(e, M);
  }, at = (M) => {
    var ge;
    l(P) && l(P).handleBlur(), et(Ur(), "blur", M), (ge = e.anchor$onblur) == null || ge.call(e, M);
  }, Bt = (M) => {
    var ge;
    l(P) && l(P).handleFocus(), et(Ur(), "focus", M), (ge = e.anchor$onfocus) == null || ge.call(e, M);
  };
  Fe(
    ft,
    (M, ge) => ({
      class: M,
      "aria-required": S() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": l(z),
      "aria-expanded": l(ie) ? "true" : "false",
      "aria-describedby": l(J),
      "aria-labelledby": C() + "-smui-label",
      role: "combobox",
      tabindex: "0",
      ...Ae,
      ...ge,
      onclick: Rt,
      onkeydown: kt,
      onblur: at,
      onfocus: Bt
    }),
    [
      () => Me({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => st(V, "anchor$")
    ]
  );
  var br = be(ft);
  {
    var Tn = (M) => {
      var ge = g_();
      L(M, ge);
    };
    pe(br, (M) => {
      f() === "filled" && M(Tn);
    });
  }
  var Lt = _e(br, 2);
  {
    var Xt = (M) => {
      {
        let ge = /* @__PURE__ */ fe(() => C() + "-smui-label"), vt = /* @__PURE__ */ fe(() => n() !== ""), Nt = /* @__PURE__ */ fe(() => st(V, "label$"));
        Ee(
          Xs(M, it(
            {
              get id() {
                return l(ge);
              },
              get floatAbove() {
                return l(vt);
              },
              get required() {
                return S();
              }
            },
            () => l(Nt),
            {
              children: (pr, _r) => {
                var pa = ve(), Ni = re(pa);
                {
                  var ri = (tr) => {
                  }, gl = (tr) => {
                    var Ir = Dt();
                    Le(() => lt(Ir, h())), L(tr, Ir);
                  }, bl = (tr) => {
                    var Ir = ve(), uc = re(Ir);
                    Se(uc, h), L(tr, Ir);
                  };
                  pe(Ni, (tr) => {
                    h() == null ? tr(ri) : typeof h() == "string" ? tr(gl, 1) : tr(bl, -1);
                  });
                }
                L(pr, pa);
              },
              $$slots: { default: !0 }
            }
          )),
          (pr) => U = pr,
          () => U
        );
      }
    };
    pe(Lt, (M) => {
      f() !== "outlined" && !v() && h() != null && M(Xt);
    });
  }
  var Cn = _e(Lt, 2);
  {
    var Vn = (M) => {
      {
        let ge = /* @__PURE__ */ fe(() => v() || h() == null), vt = /* @__PURE__ */ fe(() => st(V, "outline$"));
        Ee(
          Vf(M, it(
            {
              get noLabel() {
                return l(ge);
              }
            },
            () => l(vt),
            {
              children: (Nt, pr) => {
                var _r = ve(), pa = re(_r);
                {
                  var Ni = (ri) => {
                    {
                      let gl = /* @__PURE__ */ fe(() => C() + "-smui-label"), bl = /* @__PURE__ */ fe(() => n() !== ""), tr = /* @__PURE__ */ fe(() => st(V, "label$"));
                      Ee(
                        Xs(ri, it(
                          {
                            get id() {
                              return l(gl);
                            },
                            get floatAbove() {
                              return l(bl);
                            },
                            get required() {
                              return S();
                            }
                          },
                          () => l(tr),
                          {
                            children: (Ir, uc) => {
                              var dc = ve(), Sh = re(dc);
                              {
                                var Ah = (kr) => {
                                }, yh = (kr) => {
                                  var _a = Dt();
                                  Le(() => lt(_a, h())), L(kr, _a);
                                }, Th = (kr) => {
                                  var _a = ve(), Ch = re(_a);
                                  Se(Ch, h), L(kr, _a);
                                };
                                pe(Sh, (kr) => {
                                  h() == null ? kr(Ah) : typeof h() == "string" ? kr(yh, 1) : kr(Th, -1);
                                });
                              }
                              L(Ir, dc);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Ir) => U = Ir,
                        () => U
                      );
                    }
                  };
                  pe(pa, (ri) => {
                    !v() && h() != null && ri(Ni);
                  });
                }
                L(Nt, _r);
              },
              $$slots: { default: !0 }
            }
          )),
          (Nt) => se = Nt,
          () => se
        );
      }
    };
    pe(Cn, (M) => {
      f() === "outlined" && M(Vn);
    });
  }
  var gn = _e(Cn, 2);
  Se(gn, () => e.leadingIcon ?? he);
  var xn = _e(gn, 2);
  Fe(xn, (M, ge) => ({ class: M, ...ge }), [
    () => Me({
      "mdc-select__selected-text-container": !0,
      [Z()]: !0
    }),
    () => st(V, "selectedTextContainer$")
  ]);
  var on = be(xn);
  Fe(
    on,
    (M, ge) => ({
      id: C() + "-smui-selected-text",
      class: M,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": C() + "-smui-label",
      ...ge
    }),
    [
      () => Me({
        "mdc-select__selected-text": !0,
        [D()]: !0
      }),
      () => st(V, "selectedText$")
    ]
  );
  var ni = Pn(on, !0);
  Pe(on, (M, ge) => X == null ? void 0 : X(M, ge), W), Pe(xn, (M, ge) => X == null ? void 0 : X(M, ge), N);
  var ba = _e(xn, 2);
  Fe(ba, (M, ge) => ({ class: M, ...ge }), [
    () => Me({
      "mdc-select__dropdown-icon": !0,
      [O()]: !0
    }),
    () => st(V, "dropdownIcon$")
  ]), Pe(ba, (M, ge) => X == null ? void 0 : X(M, ge), x);
  var gh = _e(ba, 2);
  {
    var bh = (M) => {
      {
        let ge = /* @__PURE__ */ fe(() => st(V, "ripple$"));
        Ee(Ff(M, it(() => l(ge))), (vt) => Y = vt, () => Y);
      }
    };
    pe(gh, (M) => {
      f() !== "outlined" && d() && M(bh);
    });
  }
  Ee(ft, (M) => ne = M, () => ne), Pe(ft, (M, ge) => X == null ? void 0 : X(M, ge), y);
  var ph = _e(ft, 2);
  {
    let M = /* @__PURE__ */ fe(() => Me({
      "mdc-select__menu": !0,
      ...xe,
      [R()]: !0
    })), ge = /* @__PURE__ */ fe(() => st(V, "menu$"));
    t_(ph, it(
      {
        get class() {
          return l(M);
        },
        get id() {
          return l(z);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return l($);
        },
        get anchorCorner() {
          return l(ae);
        }
      },
      () => l(ge),
      {
        onSMUIMenuSelected: (vt) => {
          var Nt;
          l(P) && l(P).handleMenuItemAction(vt.detail.index), (Nt = e.onSMUIMenuSelected) == null || Nt.call(e, vt);
        },
        onSMUIMenuSurfaceClosing: (vt) => {
          var Nt;
          l(P) && l(P).handleMenuClosing(), (Nt = e.onSMUIMenuSurfaceClosing) == null || Nt.call(e, vt);
        },
        onSMUIMenuSurfaceClosed: (vt) => {
          var Nt;
          l(P) && l(P).handleMenuClosed(), (Nt = e.onSMUIMenuSurfaceClosed) == null || Nt.call(e, vt);
        },
        onSMUIMenuSurfaceOpened: (vt) => {
          var Nt;
          l(P) && l(P).handleMenuOpened(), (Nt = e.onSMUIMenuSurfaceOpened) == null || Nt.call(e, vt);
        },
        get open() {
          return l(ie);
        },
        set open(vt) {
          q(ie, vt, !0);
        },
        children: (vt, Nt) => {
          {
            let pr = /* @__PURE__ */ fe(() => st(V, "list$"));
            r_(vt, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return l(Ue);
                }
              },
              () => l(pr),
              {
                get selectedIndex() {
                  return l(j);
                },
                set selectedIndex(_r) {
                  q(j, _r, !0);
                },
                children: (_r, pa) => {
                  var Ni = ve(), ri = re(Ni);
                  Se(ri, () => e.children ?? he), L(_r, Ni);
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
  Ee(ot, (M) => K = M, () => K), Pe(ot, (M, ge) => Qt == null ? void 0 : Qt(M, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: Ie,
    addStyle: Q
  })), Pe(ot, (M, ge) => Pl == null ? void 0 : Pl(M, ge), () => ({ addClass: me, removeClass: Ie })), Pe(ot, (M, ge) => X == null ? void 0 : X(M, ge), o);
  var _h = _e(ot, 2);
  {
    var Ih = (M) => {
      {
        let ge = /* @__PURE__ */ fe(() => st(V, "helperText$"));
        f_(M, it(() => l(ge), {
          children: (vt, Nt) => {
            var pr = ve(), _r = re(pr);
            Se(_r, () => e.helperText ?? he), L(vt, pr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    pe(_h, (M) => {
      e.helperText && M(Ih);
    });
  }
  Le(() => lt(ni, n())), L(t, dt);
  var Eh = Te(Qe);
  return i(), Eh;
}
var __ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "value",
  "children"
]);
function I_(t, e) {
  ye(e, !0);
  const n = () => fr(d, "$selectedValue", r), [r, i] = Dr();
  let a = b(e, "use", 19, () => []);
  b(e, "class", 3, "");
  let s = b(e, "value", 3, ""), o = /* @__PURE__ */ ze(e, __), c;
  const u = ue("SMUI:select:selectedText"), d = ue("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ fe(() => s() != null && s() !== "" && n() === s());
  nt(f), Nr(f);
  function f() {
    l(m) && c && yi(u, c.getPrimaryText());
  }
  function v() {
    return c.getElement();
  }
  var h = { getElement: v };
  Ee(
    o_(t, it(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return s();
        },
        get value() {
          return s();
        },
        get selected() {
          return l(m);
        }
      },
      () => o,
      {
        children: (p, _) => {
          var I = ve(), A = re(I);
          Se(A, () => e.children ?? he), L(p, I);
        },
        $$slots: { default: !0 }
      }
    )),
    (p) => c = p,
    () => c
  );
  var g = Te(h);
  return i(), g;
}
function E_(t, e) {
  ye(e, !0);
  let n = b(e, "data", 19, () => []);
  b(e, "placeholder", 3, "");
  let r = b(e, "label", 3, "");
  b(e, "description", 3, "");
  let i = b(e, "value", 15), a = b(e, "required", 3, !1);
  b(e, "size", 3, "sm");
  let s = b(e, "variant", 3, "standard"), o = b(e, "selectedOptionIndex", 31, () => -1), c = b(e, "disabled", 3, !1);
  function u(d) {
    return () => o(d);
  }
  p_(t, {
    get disabled() {
      return c();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return s();
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
      var f = ve(), v = re(f);
      Nn(v, 17, n, Bi, (h, g, p) => {
        {
          let _ = /* @__PURE__ */ fe(() => u(p));
          I_(h, {
            get onclick() {
              return l(_);
            },
            get value() {
              return l(g).value;
            },
            children: (I, A) => {
              var S = Dt();
              Le(() => lt(S, l(g).label)), L(I, S);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
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
var su;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(su || (su = {}));
const S_ = rn([]);
S_.subscribe;
oe({ freeze: !1 });
var A_ = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "variant",
  "square",
  "color",
  "elevation",
  "transition",
  "children"
]), y_ = /* @__PURE__ */ de("<div><!></div>");
function T_(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "variant", 3, "raised"), a = b(e, "square", 3, !1), s = b(e, "color", 3, "default"), o = b(e, "elevation", 3, 1), c = b(e, "transition", 3, !1), u = /* @__PURE__ */ ze(e, A_), d;
  function m() {
    return d;
  }
  var f = { getElement: m }, v = y_();
  Fe(v, (g) => ({ class: g, ...u }), [
    () => Me({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + o()]: o() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + s()]: s() !== "default",
      "smui-paper-transition": c(),
      [r()]: !0
    })
  ]);
  var h = be(v);
  return Se(h, () => e.children ?? he), Ee(v, (g) => d = g, () => d), Pe(v, (g, p) => X == null ? void 0 : X(g, p), n), L(t, v), Te(f);
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
var lu;
(function(t) {
  t.PRIMARY_ACTION = "mdc-evolution-chip__action--primary", t.TRAILING_ACTION = "mdc-evolution-chip__action--trailing", t.CHIP_ROOT = "mdc-evolution-chip";
})(lu || (lu = {}));
var ca;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(ca || (ca = {}));
var ou;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.PRIMARY = 1] = "PRIMARY", t[t.TRAILING = 2] = "TRAILING";
})(ou || (ou = {}));
var cu;
(function(t) {
  t.INTERACTION = "MDCChipAction:interaction", t.NAVIGATION = "MDCChipAction:navigation";
})(cu || (cu = {}));
var uu;
(function(t) {
  t[t.FOCUSABLE = 0] = "FOCUSABLE", t[t.FOCUSABLE_AND_FOCUSED = 1] = "FOCUSABLE_AND_FOCUSED", t[t.NOT_FOCUSABLE = 2] = "NOT_FOCUSABLE";
})(uu || (uu = {}));
var du;
(function(t) {
  t.ARIA_DISABLED = "aria-disabled", t.ARIA_HIDDEN = "aria-hidden", t.ARIA_SELECTED = "aria-selected", t.DATA_DELETABLE = "data-mdc-deletable", t.DISABLED = "disabled", t.ROLE = "role", t.TAB_INDEX = "tabindex";
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
const hl = /* @__PURE__ */ new Map();
hl.set(He.SPACEBAR, ca.SPACEBAR_KEY);
hl.set(He.ENTER, ca.ENTER_KEY);
hl.set(He.DELETE, ca.DELETE_KEY);
hl.set(He.BACKSPACE, ca.BACKSPACE_KEY);
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
ya`aria-`, ya`data-`, ya`disabled`, ya`role`, ya`tabindex`;
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
var fu;
(function(t) {
  t.SELECTING = "mdc-evolution-chip--selecting", t.DESELECTING = "mdc-evolution-chip--deselecting", t.SELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--selecting-with-primary-icon", t.DESELECTING_WITH_PRIMARY_ICON = "mdc-evolution-chip--deselecting-with-primary-icon", t.DISABLED = "mdc-evolution-chip--disabled", t.ENTER = "mdc-evolution-chip--enter", t.EXIT = "mdc-evolution-chip--exit", t.SELECTED = "mdc-evolution-chip--selected", t.HIDDEN = "mdc-evolution-chip--hidden", t.WITH_PRIMARY_ICON = "mdc-evolution-chip--with-primary-icon";
})(fu || (fu = {}));
var hu;
(function(t) {
  t.INTERACTION = "MDCChip:interaction", t.NAVIGATION = "MDCChip:navigation", t.ANIMATION = "MDCChip:animation";
})(hu || (hu = {}));
var vu;
(function(t) {
  t.DATA_REMOVED_ANNOUNCEMENT = "data-mdc-removed-announcement", t.DATA_ADDED_ANNOUNCEMENT = "data-mdc-added-announcement";
})(vu || (vu = {}));
var mu;
(function(t) {
  t.ENTER = "mdc-evolution-chip-enter", t.EXIT = "mdc-evolution-chip-exit";
})(mu || (mu = {}));
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
var gu;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.LEFT = 1] = "LEFT", t[t.RIGHT = 2] = "RIGHT";
})(gu || (gu = {}));
var bu;
(function(t) {
  t.SELECTION = "selection", t.EXIT = "exit";
})(bu || (bu = {}));
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
var pu;
(function(t) {
  t.ARIA_MULTISELECTABLE = "aria-multiselectable";
})(pu || (pu = {}));
var _u;
(function(t) {
  t.CHIP = "mdc-evolution-chip";
})(_u || (_u = {}));
var Iu;
(function(t) {
  t.INTERACTION = "MDCChipSet:interaction", t.REMOVAL = "MDCChipSet:removal", t.SELECTION = "MDCChipSet:selection";
})(Iu || (Iu = {}));
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
var Eu;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Eu || (Eu = {}));
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
var Su;
(function(t) {
  t[t.INCREMENT = 0] = "INCREMENT", t[t.DECREMENT = 1] = "DECREMENT";
})(Su || (Su = {}));
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
var Au;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(Au || (Au = {}));
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
var yu;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(yu || (yu = {}));
var Tu;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(Tu || (Tu = {}));
const $t = {
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
}, gr = /* @__PURE__ */ new Set();
gr.add($t.ARROW_LEFT_KEY);
gr.add($t.ARROW_RIGHT_KEY);
gr.add($t.ARROW_DOWN_KEY);
gr.add($t.ARROW_UP_KEY);
gr.add($t.END_KEY);
gr.add($t.HOME_KEY);
gr.add($t.IE_ARROW_LEFT_KEY);
gr.add($t.IE_ARROW_RIGHT_KEY);
gr.add($t.IE_ARROW_DOWN_KEY);
gr.add($t.IE_ARROW_UP_KEY);
const ma = /* @__PURE__ */ new Set();
ma.add($t.ARROW_UP_KEY);
ma.add($t.ARROW_DOWN_KEY);
ma.add($t.HOME_KEY);
ma.add($t.END_KEY);
ma.add($t.IE_ARROW_UP_KEY);
ma.add($t.IE_ARROW_DOWN_KEY);
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
var Cu;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Cu || (Cu = {}));
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function C_(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let Hl;
const x_ = new Uint8Array(16);
function w_() {
  if (!Hl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Hl = crypto.getRandomValues.bind(crypto);
  }
  return Hl(x_);
}
const O_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xu = { randomUUID: O_ };
function R_(t, e, n) {
  var i;
  if (xu.randomUUID && !e && !t)
    return xu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? w_();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return C_(r);
}
var L_ = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function $n(t, e) {
  var n = L_(), r = be(n);
  Se(r, () => e.children ?? he), L(t, n);
}
var N_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function M_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = N_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var D_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Wf(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = D_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var P_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function H_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = P_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var U_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function k_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = U_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var B_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function F_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = B_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var V_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function G_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = V_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var j_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function W_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = j_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var q_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function K_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = q_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
$h();
var z_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function X_(t, e) {
  let n = b(e, "svgStyles", 3, "");
  $n(t, {
    children: (r, i) => {
      var a = z_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var Y_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Z_(t, e) {
  let n = b(e, "svgStyles", 8, "");
  $n(t, {
    children: (r, i) => {
      var a = Y_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var Q_ = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function J_(t, e) {
  let n = b(e, "svgStyles", 8, "");
  $n(t, {
    children: (r, i) => {
      var a = Q_();
      Le(() => Ut(a, n())), L(r, a);
    }
  });
}
var $_ = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function eI(t, e) {
  ye(e, !0);
  let n = b(e, "label", 3, ""), r = b(e, "value", 15, "");
  function i(u) {
    r(u.target.value);
  }
  var a = $_(), s = be(a), o = _e(s, 2), c = Pn(o, !0);
  Le(() => lt(c, n())), Zn("change", s, i), Ka(s, r), L(t, a), Te();
}
yn(["change"]);
var tI = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function nI(t, e) {
  ye(e, !0);
  let n = b(e, "label", 3, ""), r = b(e, "value", 15, "");
  function i(u) {
    r(u.target.value);
  }
  var a = tI(), s = be(a), o = _e(s, 2), c = Pn(o, !0);
  Le(() => lt(c, n())), Zn("change", s, i), Ka(s, r), L(t, a), Te();
}
yn(["change"]);
var rI = /* @__PURE__ */ de('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function qf(t, e) {
  ye(e, !0);
  let n = b(e, "title", 3, ""), r = b(e, "open", 11, !1);
  T_(t, {
    children: (i, a) => {
      var s = rI(), o = be(s), c = Pn(o, !0), u = _e(o, 2), d = be(u);
      Se(d, () => e.content ?? he), Le(() => {
        s.open = r(), lt(c, n());
      }), L(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
var iI = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ys(t, e) {
  ye(e, !0);
  let n = b(e, "content", 3, ""), r = b(e, "side", 3, "top"), i = b(e, "hoverDelay", 3, 0), a = b(e, "transitionDuration", 3, 80), s = b(e, "disabled", 3, !1), o = b(e, "offset", 3, 8), c = b(e, "backgroundColor", 3, "#000"), u = b(e, "paddingY", 3, 6), d = b(e, "paddingX", 3, 10), m = b(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let v = /* @__PURE__ */ ce(null), h = /* @__PURE__ */ ce(null), g = /* @__PURE__ */ ce(null), p = /* @__PURE__ */ ce(null), _ = /* @__PURE__ */ ce(!1), I = /* @__PURE__ */ ce(null), A = /* @__PURE__ */ ce(null);
  function S(R) {
    var ne;
    if (!R || !R.trim().startsWith("var(")) return R;
    const V = R.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!V) return R;
    const k = V[1], K = (ne = V[2]) == null ? void 0 : ne.trim(), P = l(v) ? getComputedStyle(l(v)).getPropertyValue(k) : "", F = getComputedStyle(document.documentElement).getPropertyValue(k), H = (P || F).trim();
    return H || K || R;
  }
  function C() {
    !n() || s() || (l(I) && clearTimeout(l(I)), i() > 0 ? q(I, setTimeout(() => q(_, !0), i()), !0) : q(_, !0));
  }
  function E() {
    l(I) && clearTimeout(l(I)), q(_, !1);
  }
  function w() {
    C();
  }
  function y() {
    E();
  }
  function T() {
    C();
  }
  function N() {
    E();
  }
  function Z(R) {
    n() && ((R.key === "Enter" || R.key === " ") && (R.preventDefault(), C()), R.key === "Escape" && (R.preventDefault(), E()));
  }
  function W() {
    if (!l(h) || !l(p) || !l(v) || s()) return;
    const R = l(v).getBoundingClientRect(), V = l(p).getBoundingClientRect();
    let k = 0, K = 0;
    const P = o();
    switch (r()) {
      case "top":
        k = R.top - V.height - P, K = R.left + R.width / 2 - V.width / 2;
        break;
      case "bottom":
        k = R.bottom + P, K = R.left + R.width / 2 - V.width / 2;
        break;
      case "left":
        k = R.top + R.height / 2 - V.height / 2, K = R.left - V.width - P;
        break;
      case "right":
        k = R.top + R.height / 2 - V.height / 2, K = R.right + P;
        break;
    }
    l(h).style.top = `${k + window.scrollY}px`, l(h).style.left = `${K + window.scrollX}px`;
  }
  function D() {
    var R;
    (R = l(A)) == null || R.disconnect(), q(A, null), l(h) && l(h).parentNode && l(h).parentNode.removeChild(l(h)), q(h, null), q(p, null), q(g, null), l(I) && clearTimeout(l(I));
  }
  Nr(D), Ce(() => {
    if (!(!l(_) || !n() || s())) {
      if (!l(h)) {
        q(h, document.createElement("div"), !0), l(h).style.position = "absolute", l(h).style.zIndex = "9999", l(h).style.pointerEvents = "none", l(h).style.opacity = "0", l(h).style.transition = `opacity ${a()}ms ease`, l(h).id = f, l(h).setAttribute("role", "tooltip"), document.body.appendChild(l(h)), q(g, l(h).attachShadow({ mode: "open" }), !0);
        const R = document.createElement("style"), V = S(c()), k = S(m());
        R.textContent = `
        .bubble {
          --pad-y: ${u()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${V};
          --fg: ${k};
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
      `, l(g).appendChild(R), q(p, document.createElement("div"), !0), l(g).appendChild(l(p)), q(
          A,
          new MutationObserver(() => {
            l(_) && W();
          }),
          !0
        ), l(A).observe(document.body, { childList: !0, subtree: !0 });
      }
      l(p) && (l(p).className = `bubble ${r()}`, l(p).innerHTML = n()), l(h) && (l(h).style.opacity = "1", W());
    }
  }), Ce(() => {
    if (l(_) || !l(h))
      return;
    l(h).style.opacity = "0";
    const R = l(h), V = setTimeout(
      () => {
        R && R.parentNode && R.parentNode.removeChild(R), l(h) === R && D();
      },
      a()
    );
    return () => clearTimeout(V);
  });
  var x = iI(), O = be(x);
  Se(O, () => e.children ?? he), Ee(x, (R) => q(v, R), () => l(v)), Le(() => {
    Or(x, "aria-describedby", n() && !s() ? f : void 0), Or(x, "aria-haspopup", n() ? "true" : void 0), Or(x, "aria-expanded", n() ? l(_) ? "true" : "false" : void 0);
  }), Pa("mouseenter", x, w), Pa("mouseleave", x, y), Pa("focus", x, T), Pa("blur", x, N), Zn("keydown", x, Z), L(t, x), Te();
}
yn(["keydown"]);
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
const Ar = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, li = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
};
var pn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(pn || (pn = {}));
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
const xa = {
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
}, Vr = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, wu = {
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
    return xa;
  }
  static get strings() {
    return Vr;
  }
  static get numbers() {
    return wu;
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
    super(Object.assign(Object.assign({}, Zs.defaultAdapter), e)), this.currentCheckState = Vr.TRANSITION_STATE_INIT, this.currentAnimationClass = "", this.animEndLatchTimer = 0, this.enableAnimationEndHandler = !1;
  }
  init() {
    this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(xa.UPGRADED);
  }
  destroy() {
    clearTimeout(this.animEndLatchTimer);
  }
  setDisabled(e) {
    this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(xa.DISABLED) : this.adapter.removeClass(xa.DISABLED);
  }
  /**
   * Handles the animationend event for the checkbox
   */
  handleAnimationEnd() {
    this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(() => {
      this.adapter.removeClass(this.currentAnimationClass), this.enableAnimationEndHandler = !1;
    }, wu.ANIM_END_LATCH_MS));
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
    const { TRANSITION_STATE_UNCHECKED: r } = Vr, { SELECTED: i } = xa;
    n === r ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(e, n), this.currentCheckState = n, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
  }
  determineCheckState() {
    const { TRANSITION_STATE_INDETERMINATE: e, TRANSITION_STATE_CHECKED: n, TRANSITION_STATE_UNCHECKED: r } = Vr;
    return this.adapter.isIndeterminate() ? e : this.adapter.isChecked() ? n : r;
  }
  getTransitionAnimationClass(e, n) {
    const { TRANSITION_STATE_INIT: r, TRANSITION_STATE_CHECKED: i, TRANSITION_STATE_UNCHECKED: a } = Vr, { ANIM_UNCHECKED_CHECKED: s, ANIM_UNCHECKED_INDETERMINATE: o, ANIM_CHECKED_UNCHECKED: c, ANIM_CHECKED_INDETERMINATE: u, ANIM_INDETERMINATE_CHECKED: d, ANIM_INDETERMINATE_UNCHECKED: m } = Zs.cssClasses;
    switch (e) {
      case r:
        return n === a ? "" : n === i ? d : m;
      case a:
        return n === i ? s : o;
      case i:
        return n === a ? c : u;
      default:
        return n === i ? d : m;
    }
  }
  updateAriaChecked() {
    this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(Vr.ARIA_CHECKED_ATTR, Vr.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(Vr.ARIA_CHECKED_ATTR);
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
const bn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Gn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, wa = {
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
class Jo extends Ot {
  static get cssClasses() {
    return bn;
  }
  static get strings() {
    return Gn;
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
    super(Object.assign(Object.assign({}, Jo.defaultAdapter), e)), this.observer = null;
  }
  init() {
    this.determinate = !this.adapter.hasClass(bn.INDETERMINATE_CLASS), this.adapter.addClass(bn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver((e) => {
      if (!this.determinate)
        for (const n of e)
          n.contentRect && this.calculateAndSetDimensions(n.contentRect.width);
    }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
  }
  setDeterminate(e) {
    if (this.determinate = e, this.determinate) {
      this.adapter.removeClass(bn.INDETERMINATE_CLASS), this.adapter.setAttribute(Gn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Gn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Gn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
      return;
    }
    this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(bn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Gn.ARIA_VALUENOW), this.adapter.removeAttribute(Gn.ARIA_VALUEMAX), this.adapter.removeAttribute(Gn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
  }
  isDeterminate() {
    return this.determinate;
  }
  setProgress(e) {
    this.progress = e, this.determinate && (this.setPrimaryBarProgress(e), this.adapter.setAttribute(Gn.ARIA_VALUENOW, e.toString()));
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
    this.adapter.removeClass(bn.CLOSED_CLASS), this.adapter.removeClass(bn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Gn.ARIA_HIDDEN);
  }
  close() {
    this.adapter.addClass(bn.CLOSED_CLASS), this.adapter.setAttribute(Gn.ARIA_HIDDEN, "true");
  }
  isClosed() {
    return this.adapter.hasClass(bn.CLOSED_CLASS);
  }
  /**
   * Handles the transitionend event emitted after `close()` is called and the
   * opacity fades out. This is so that animations are removed only after the
   * progress indicator is completely hidden.
   */
  handleTransitionEnd() {
    this.adapter.hasClass(bn.CLOSED_CLASS) && this.adapter.addClass(bn.CLOSED_ANIMATION_OFF_CLASS);
  }
  destroy() {
    super.destroy(), this.observer && this.observer.disconnect();
  }
  restartAnimation() {
    this.adapter.removeClass(bn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(bn.ANIMATION_READY_CLASS);
  }
  setPrimaryBarProgress(e) {
    const n = `scaleX(${e})`, r = typeof window < "u" ? Fp(window, "transform") : "transform";
    this.adapter.setPrimaryBarStyle(r, n);
  }
  setBufferBarProgress(e) {
    const n = `${e * 100}%`;
    this.adapter.setBufferBarStyle(Gn.FLEX_BASIS, n);
  }
  calculateAndSetDimensions(e) {
    const n = e * wa.PRIMARY_HALF, r = e * wa.PRIMARY_FULL, i = e * wa.SECONDARY_QUARTER, a = e * wa.SECONDARY_HALF, s = e * wa.SECONDARY_FULL;
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
class $o extends Ot {
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
    super(Object.assign(Object.assign({}, $o.defaultAdapter), e));
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
      o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, Ar.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, li.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
    this.adapter.setClassNameByHeaderCellIndex(r, Ar.HEADER_CELL_SORTED);
    const a = this.adapter.getAttributeByHeaderCellIndex(r, li.ARIA_SORT);
    let s = pn.NONE;
    a === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, Ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, li.ARIA_SORT, pn.DESCENDING), s = pn.DESCENDING) : a === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, Ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, li.ARIA_SORT, pn.ASCENDING), s = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, li.ARIA_SORT, pn.ASCENDING), s = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, s), this.adapter.notifySortAction({
      columnId: n,
      columnIndex: r,
      headerCell: i,
      sortValue: s
    });
  }
  /**
   * Handles data table row click event.
   */
  handleRowClick({ rowId: e, row: n, altKey: r, ctrlKey: i, metaKey: a, shiftKey: s }) {
    this.adapter.notifyRowClick({
      rowId: e,
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
    const e = this.adapter.getTableHeaderHeight(), n = this.adapter.getTableContainerHeight() - e, r = e;
    this.adapter.setProgressIndicatorStyles({
      height: `${n}px`,
      top: `${r}px`
    }), this.adapter.addClass(Ar.IN_PROGRESS);
  }
  /**
   * Hides progress indicator when data table is finished loading.
   */
  hideProgress() {
    this.adapter.removeClass(Ar.IN_PROGRESS);
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
    n ? (this.adapter.addClassAtRowIndex(e, Ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, li.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(e, Ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(e, li.ARIA_SELECTED, "false"));
  }
}
var aI = /* @__PURE__ */ new Set([
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
]), sI = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), lI = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function oI(t, e) {
  ye(e, !0);
  const n = () => fr(D, "$progressClosed", r), [r, i] = Dr(), { closest: a } = ds;
  let s = b(e, "use", 19, () => []), o = b(e, "class", 3, ""), c = b(e, "stickyHeader", 3, !1), u = b(e, "sortable", 3, !1), d = b(e, "sort", 15, null), m = b(e, "sortDirection", 15, "ascending"), f = b(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = b(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = b(e, "container$use", 19, () => []), g = b(e, "container$class", 3, ""), p = b(e, "table$use", 19, () => []), _ = b(e, "table$class", 3, ""), I = /* @__PURE__ */ ze(e, aI), A, S = /* @__PURE__ */ ce(void 0), C, E = /* @__PURE__ */ ce(void 0), w = /* @__PURE__ */ ce(void 0), y = oe({}), T = /* @__PURE__ */ ce(oe({ height: "auto", top: "initial" })), N = ue("SMUI:addLayoutListener"), Z, W = !1, D = rn(!1), x = rn(d());
  Ce(() => {
    yi(x, d());
  });
  let O = rn(m());
  Ce(() => {
    yi(O, m());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", D), le("SMUI:data-table:sortable", u()), le("SMUI:data-table:sort", x), le("SMUI:data-table:sortDirection", O), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", v()), N && (Z = N(Ae));
  let R;
  Ce(() => {
    e.progress && l(S) && R !== n() && (R = n(), n() ? l(S).hideProgress() : l(S).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    l(S) && W && l(S).layout();
  }), le("SMUI:data-table:header:mount", (U) => {
    q(E, U, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    q(E, void 0);
  }), le("SMUI:data-table:body:mount", (U) => {
    q(w, U, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    q(w, void 0);
  }), nt(() => (q(
    S,
    new $o({
      addClass: k,
      removeClass: K,
      getHeaderCellElements: () => {
        var U;
        return ((U = l(E)) == null ? void 0 : U.cells.map((Y) => Y.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var U;
        return ((U = l(E)) == null ? void 0 : U.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (U, Y) => {
        var se;
        return ((se = l(E)) == null ? void 0 : se.orderedCells[U].getAttr(Y)) ?? null;
      },
      setAttributeByHeaderCellIndex: (U, Y, se) => {
        var Re;
        (Re = l(E)) == null || Re.orderedCells[U].addAttr(Y, se);
      },
      setClassNameByHeaderCellIndex: (U, Y) => {
        var se;
        (se = l(E)) == null || se.orderedCells[U].addClass(Y);
      },
      removeClassNameByHeaderCellIndex: (U, Y) => {
        var se;
        (se = l(E)) == null || se.orderedCells[U].removeClass(Y);
      },
      notifySortAction: (U) => {
        d(U.columnId), m(U.sortValue), et(j(), "SMUIDataTableSorted", U);
      },
      getTableContainerHeight: () => C.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const U = j().querySelector(".mdc-data-table__header-row");
        if (!U)
          throw new Error("MDCDataTable: Table header element not found.");
        return U.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (U) => {
        q(T, U, !0);
      },
      addClassAtRowIndex: (U, Y) => {
        var se;
        (se = l(w)) == null || se.orderedRows[U].addClass(Y);
      },
      getRowCount: () => {
        var U;
        return ((U = l(w)) == null ? void 0 : U.rows.length) ?? 0;
      },
      getRowElements: () => {
        var U;
        return ((U = l(w)) == null ? void 0 : U.rows.map((Y) => Y.element)) ?? [];
      },
      getRowIdAtIndex: (U) => {
        var Y;
        return ((Y = l(w)) == null ? void 0 : Y.orderedRows[U].rowId) ?? null;
      },
      getRowIndexByChildElement: (U) => {
        var Y;
        return ((Y = l(w)) == null ? void 0 : Y.orderedRows.map((se) => se.element).indexOf(a(U, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var U;
        return ((U = l(w)) == null ? void 0 : U.rows.filter((Y) => Y.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (U) => {
        var se;
        const Y = (se = l(w)) == null ? void 0 : se.orderedRows[U].checkbox;
        return Y ? Y.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Y;
        const U = (Y = l(E)) == null ? void 0 : Y.checkbox;
        return U ? U.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (U) => {
        var se;
        const Y = (se = l(w)) == null ? void 0 : se.orderedRows[U.rowIndex];
        Y && et(j(), "SMUIDataTableSelectionChanged", {
          row: Y.element,
          rowId: Y.rowId,
          rowIndex: U.rowIndex,
          selected: U.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), et(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), et(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (U) => et(j(), "SMUIDataTableClickRow", U),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (U, Y) => {
        var se;
        (se = l(w)) == null || se.orderedRows[U].removeClass(Y);
      },
      setAttributeAtRowIndex: (U, Y, se) => {
        var Re;
        (Re = l(w)) == null || Re.orderedRows[U].addAttr(Y, se);
      },
      setHeaderRowCheckboxChecked: (U) => {
        var se;
        const Y = (se = l(E)) == null ? void 0 : se.checkbox;
        Y && (Y.checked = U);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (U, Y) => {
        var Re;
        const se = (Re = l(w)) == null ? void 0 : Re.orderedRows[U].checkbox;
        se && (se.checked = Y);
      },
      setSortStatusLabelByHeaderCellIndex: (U, Y) => {
      }
    }),
    !0
  ), l(S).init(), l(S).layout(), W = !0, () => {
    var U;
    (U = l(S)) == null || U.destroy(), q(S, void 0);
  })), Nr(() => {
    Z && Z();
  });
  function V(U) {
    l(S) && l(S).handleRowCheckboxChange(U);
  }
  function k(U) {
    y[U] || (y[U] = !0);
  }
  function K(U) {
    (!(U in y) || y[U]) && (y[U] = !1);
  }
  function P(U) {
    var se;
    const Y = (se = l(E)) == null ? void 0 : se.checkbox;
    Y && (Y.indeterminate = U);
  }
  function F(U) {
    if (!l(S) || !U.detail.target)
      return;
    const Y = a(U.detail.target, ".mdc-data-table__header-cell--with-sort");
    Y && ne(Y);
  }
  function H(U) {
    if (!l(S) || !U.detail.target)
      return;
    const Y = a(U.detail.target, ".mdc-data-table__row");
    Y && l(S) && l(S).handleRowClick({ rowId: U.detail.rowId, row: Y });
  }
  function ne(U) {
    var je, St;
    const Y = ((je = l(E)) == null ? void 0 : je.orderedCells) ?? [], se = Y.map((Bn) => Bn.element).indexOf(U);
    if (se === -1)
      return;
    const Re = Y[se].columnId ?? null;
    (St = l(S)) == null || St.handleSortAction({ columnId: Re, columnIndex: se, headerCell: U });
  }
  function Ae() {
    var U;
    return (U = l(S)) == null ? void 0 : U.layout();
  }
  function j() {
    return A;
  }
  var z = { layout: Ae, getElement: j }, J = lI(), ee = (U) => {
    var Y;
    l(S) && l(S).handleHeaderRowCheckboxChange(), (Y = e.onSMUIDataTableHeaderCheckboxChange) == null || Y.call(e, U);
  }, G = (U) => {
    var Y;
    F(U), (Y = e.onSMUIDataTableHeaderClick) == null || Y.call(e, U);
  }, ie = (U) => {
    var Y;
    H(U), (Y = e.onSMUIDataTableRowClick) == null || Y.call(e, U);
  }, xe = (U) => {
    var Y;
    V(U), (Y = e.onSMUIDataTableBodyCheckboxChange) == null || Y.call(e, U);
  };
  Fe(
    J,
    (U, Y) => ({
      class: U,
      ...Y,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: G,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: xe
    }),
    [
      () => Me({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": c(),
        ...y,
        [o()]: !0
      }),
      () => mr(I, ["container$", "table$"])
    ]
  );
  var $ = be(J);
  Fe($, (U, Y) => ({ class: U, ...Y }), [
    () => Me({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => st(I, "container$")
  ]);
  var ae = be($);
  Fe(ae, (U, Y) => ({ class: U, ...Y }), [
    () => Me({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => st(I, "table$")
  ]);
  var Ue = be(ae);
  Se(Ue, () => e.children ?? he), Pe(ae, (U, Y) => X == null ? void 0 : X(U, Y), p), Ee($, (U) => C = U, () => C), Pe($, (U, Y) => X == null ? void 0 : X(U, Y), h);
  var Oe = _e($, 2);
  {
    var Ve = (U) => {
      var Y = sI(), se = _e(be(Y), 2);
      Se(se, () => e.progress ?? he), Le((Re) => Ut(Y, Re), [
        () => Object.entries(l(T)).map(([Re, je]) => `${Re}: ${je};`).join(" ")
      ]), L(U, Y);
    };
    pe(Oe, (U) => {
      e.progress && U(Ve);
    });
  }
  var ke = _e(Oe, 2);
  Se(ke, () => e.paginate ?? he), Ee(J, (U) => A = U, () => A), Pe(J, (U, Y) => X == null ? void 0 : X(U, Y), s), L(t, J);
  var Ne = Te(z);
  return i(), Ne;
}
var cI = /* @__PURE__ */ new Set(["$$slots", "$$events", "$$legacy", "use", "children"]), uI = /* @__PURE__ */ de("<thead><!></thead>");
function dI(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, cI), i, a = /* @__PURE__ */ ce(void 0), s = [];
  const o = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const c = ue("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (_) => {
    q(a, _, !0), c && c(_);
  });
  const u = ue("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (_) => {
    q(a, void 0), u && u(_);
  }), le("SMUI:data-table:cell:mount", (_) => {
    s.push(_), o.set(_.element, _);
  }), le("SMUI:data-table:cell:unmount", (_) => {
    const I = s.findIndex((A) => A === _);
    I !== -1 && s.splice(I, 1), o.delete(_.element);
  });
  const d = ue("SMUI:data-table:header:mount"), m = ue("SMUI:data-table:header:unmount");
  nt(() => {
    const _ = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return l(a);
      }
    };
    return d && d(_), () => {
      m && m(_);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => o.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var h = { getElement: v }, g = uI();
  Fe(g, () => ({ ...r }));
  var p = be(g);
  return Se(p, () => e.children ?? he), Ee(g, (_) => i = _, () => i), Pe(g, (_, I) => X == null ? void 0 : X(_, I), n), L(t, g), Te(h);
}
var fI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "children"
]), hI = /* @__PURE__ */ de("<tbody><!></tbody>");
function vI(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, fI), a, s = [];
  const o = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (g) => {
    s.push(g), o.set(g.element, g);
  }), le("SMUI:data-table:row:unmount", (g) => {
    const p = s.findIndex((_) => _ === g);
    p !== -1 && s.splice(p, 1), o.delete(g.element);
  });
  const c = ue("SMUI:data-table:body:mount"), u = ue("SMUI:data-table:body:unmount");
  nt(() => {
    const g = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return c && c(g), () => {
      u && u(g);
    };
  });
  function d() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((g) => o.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function m() {
    return a;
  }
  var f = { getElement: m }, v = hI();
  Fe(v, (g) => ({ class: g, ...i }), [
    () => Me({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = be(v);
  return Se(h, () => e.children ?? he), Ee(v, (g) => a = g, () => a), Pe(v, (g, p) => X == null ? void 0 : X(g, p), n), L(t, v), Te(f);
}
let mI = 0;
var gI = /* @__PURE__ */ new Set([
  "$$slots",
  "$$events",
  "$$legacy",
  "use",
  "class",
  "rowId",
  "children"
]), bI = /* @__PURE__ */ de("<tr><!></tr>");
function Ts(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "rowId", 19, () => "SMUI-data-table-row-" + mI++), a = /* @__PURE__ */ ze(e, gI), s, o = /* @__PURE__ */ ce(void 0), c = oe({}), u = oe({}), d = ue("SMUI:data-table:row:header");
  const m = ue("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (N) => {
    q(o, N, !0), m && m(N);
  });
  const f = ue("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (N) => {
    q(o, void 0), f && f(N);
  });
  const v = ue("SMUI:data-table:row:mount"), h = ue("SMUI:data-table:row:unmount");
  nt(() => {
    const N = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return C();
      },
      get checkbox() {
        return l(o);
      },
      get rowId() {
      },
      get selected() {
        return (l(o) && l(o).checked) ?? !1;
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
        return l(o);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (l(o) && l(o).checked) ?? !1;
      },
      addClass: g,
      removeClass: p,
      getAttr: _,
      addAttr: I
    };
    return v && v(N), () => {
      h && h(N);
    };
  });
  function g(N) {
    c[N] || (c[N] = !0);
  }
  function p(N) {
    (!(N in c) || c[N]) && (c[N] = !1);
  }
  function _(N) {
    return N in u ? u[N] ?? null : C().getAttribute(N);
  }
  function I(N, Z) {
    u[N] !== Z && (u[N] = Z);
  }
  function A(N) {
    et(C(), "SMUIDataTableHeaderClick", N);
  }
  function S(N) {
    et(C(), "SMUIDataTableRowClick", { rowId: i(), target: N.target });
  }
  function C() {
    return s;
  }
  var E = { getElement: C }, w = bI(), y = (N) => {
    var Z;
    d ? A(N) : S(N), (Z = e.onclick) == null || Z.call(e, N);
  };
  Fe(
    w,
    (N) => ({
      class: N,
      "aria-selected": l(o) ? l(o).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: y
    }),
    [
      () => Me({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && l(o) && l(o).checked,
        ...c,
        [r()]: !0
      })
    ]
  );
  var T = be(w);
  return Se(T, () => e.children ?? he), Ee(w, (N) => s = N, () => s), Pe(w, (N, Z) => X == null ? void 0 : X(N, Z), n), L(t, w), Te(E);
}
let pI = 0;
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
]), II = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), EI = /* @__PURE__ */ de("<th><!></th>"), SI = /* @__PURE__ */ de("<td><!></td>");
function Oa(t, e) {
  ye(e, !0);
  const n = () => fr(_, "$sort", i), r = () => fr(I, "$sortDirection", i), [i, a] = Dr();
  let s = ue("SMUI:data-table:row:header"), o = b(e, "use", 19, () => []), c = b(e, "class", 3, ""), u = b(e, "numeric", 3, !1), d = b(e, "checkbox", 3, !1), m = b(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + pI++ : "SMUI-data-table-unused"), f = b(e, "sortable", 19, () => ue("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, _I), h, g = oe({}), p = oe({}), _ = ue("SMUI:data-table:sort"), I = ue("SMUI:data-table:sortDirection"), A = ue("SMUI:data-table:sortAscendingAriaLabel"), S = ue("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const C = ue("SMUI:data-table:cell:mount"), E = ue("SMUI:data-table:cell:unmount");
  nt(() => {
    const P = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return D();
      },
      get columnId() {
        return m();
      },
      addClass: w,
      removeClass: y,
      getAttr: T,
      addAttr: N
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return D();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: y,
      getAttr: T,
      addAttr: N
    };
    return C && C(P), () => {
      E && E(P);
    };
  });
  function w(P) {
    g[P] || (g[P] = !0);
  }
  function y(P) {
    (!(P in g) || g[P]) && (g[P] = !1);
  }
  function T(P) {
    return P in p ? p[P] ?? null : D().getAttribute(P);
  }
  function N(P, F) {
    p[P] !== F && (p[P] = F);
  }
  function Z(P) {
    et(D(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function W(P) {
    et(D(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function D() {
    return h;
  }
  var x = { getElement: D }, O = ve(), R = re(O);
  {
    var V = (P) => {
      var F = EI(), H = (z) => {
        var J;
        d() && Z(z), (J = e.onchange) == null || J.call(e, z);
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
          onchange: H
        }),
        [
          () => Me({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === m(),
            ...g,
            [c()]: !0
          })
        ]
      );
      var ne = be(F);
      {
        var Ae = (z) => {
          var J = II(), ee = be(J);
          Se(ee, () => e.children ?? he);
          var G = _e(ee, 2), ie = Pn(G, !0);
          Le(() => {
            Or(G, "id", `${m() ?? ""}-status-label`), lt(ie, n() === m() ? r() === "ascending" ? A : S : "");
          }), L(z, J);
        }, j = (z) => {
          var J = ve(), ee = re(J);
          Se(ee, () => e.children ?? he), L(z, J);
        };
        pe(ne, (z) => {
          f() ? z(Ae) : z(j, -1);
        });
      }
      Ee(F, (z) => h = z, () => h), Pe(F, (z, J) => X == null ? void 0 : X(z, J), o), L(P, F);
    }, k = (P) => {
      var F = SI(), H = (Ae) => {
        var j;
        d() && W(Ae), (j = e.onchange) == null || j.call(e, Ae);
      };
      Fe(
        F,
        (Ae) => ({
          class: Ae,
          ...p,
          ...v,
          onchange: H
        }),
        [
          () => Me({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [c()]: !0
          })
        ]
      );
      var ne = be(F);
      Se(ne, () => e.children ?? he), Ee(F, (Ae) => h = Ae, () => h), Pe(F, (Ae, j) => X == null ? void 0 : X(Ae, j), o), L(P, F);
    };
    pe(R, (P) => {
      s ? P(V) : P(k, -1);
    });
  }
  L(t, O);
  var K = Te(x);
  return a(), K;
}
var AI = /* @__PURE__ */ new Set([
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
]), yI = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Kf(t, e) {
  ye(e, !0);
  const [n, r] = Dr();
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), s = b(e, "style", 3, ""), o = b(e, "indeterminate", 3, !1), c = b(e, "closed", 3, !1), u = b(e, "progress", 3, 0), d = b(e, "buffer", 3, void 0), m = /* @__PURE__ */ ze(e, AI), f, v = /* @__PURE__ */ ce(void 0), h = oe({}), g = oe({}), p = oe({}), _ = oe({}), I = oe({}), A = ue("SMUI:linear-progress:context"), S = ue("SMUI:linear-progress:closed");
  Ce(() => {
    S && yi(S, c());
  }), Ce(() => {
    l(v) && l(v).isDeterminate() !== !o() && l(v).setDeterminate(!o());
  }), Ce(() => {
    l(v) && l(v).getProgress() !== u() && l(v).setProgress(u());
  }), Ce(() => {
    l(v) && (d() == null ? l(v).setBuffer(1) : l(v).setBuffer(d()));
  }), Ce(() => {
    l(v) && (c() ? l(v).close() : l(v).open());
  }), nt(() => (q(
    v,
    new Jo({
      addClass: E,
      forceLayout: () => {
        D().getBoundingClientRect();
      },
      setBufferBarStyle: Z,
      setPrimaryBarStyle: W,
      hasClass: C,
      removeAttribute: T,
      removeClass: w,
      setAttribute: y,
      setStyle: N,
      attachResizeObserver: (F) => {
        const H = window.ResizeObserver;
        if (H) {
          const ne = new H(F);
          return ne.observe(D()), ne;
        }
        return null;
      },
      getWidth: () => D().offsetWidth
    }),
    !0
  ), l(v).init(), () => {
    var F;
    (F = l(v)) == null || F.destroy(), q(v, void 0);
  }));
  function C(F) {
    return F in h ? h[F] : D().classList.contains(F);
  }
  function E(F) {
    h[F] || (h[F] = !0);
  }
  function w(F) {
    (!(F in h) || h[F]) && (h[F] = !1);
  }
  function y(F, H) {
    g[F] !== H && (g[F] = H);
  }
  function T(F) {
    (!(F in g) || g[F] != null) && (g[F] = void 0);
  }
  function N(F, H) {
    p[F] != H && (H === "" || H == null ? delete p[F] : p[F] = H);
  }
  function Z(F, H) {
    _[F] != H && (H === "" || H == null ? delete _[F] : _[F] = H);
  }
  function W(F, H) {
    I[F] != H && (H === "" || H == null ? delete I[F] : I[F] = H);
  }
  function D() {
    return f;
  }
  var x = { getElement: D }, O = yI(), R = (F) => {
    var H;
    l(v) && l(v).handleTransitionEnd(), (H = e.ontransitionend) == null || H.call(e, F);
  };
  Fe(
    O,
    (F, H) => ({
      class: F,
      style: H,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": o() ? void 0 : u(),
      ...g,
      ...m,
      ontransitionend: R
    }),
    [
      () => Me({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": o(),
        "mdc-linear-progress--closed": c(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(p).map(([F, H]) => `${F}: ${H};`).concat([s()]).join(" ")
    ]
  );
  var V = be(O), k = be(V), K = _e(V, 2);
  Ee(O, (F) => f = F, () => f), Pe(O, (F, H) => X == null ? void 0 : X(F, H), i), Le(
    (F, H) => {
      Ut(k, F), Ut(K, H);
    },
    [
      () => Object.entries(_).map(([F, H]) => `${F}: ${H};`).join(" "),
      () => Object.entries(I).map(([F, H]) => `${F}: ${H};`).join(" ")
    ]
  ), L(t, O);
  var P = Te(x);
  return r(), P;
}
yn(["click"]);
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
var Ou;
(function(t) {
  t.PROCESSING = "mdc-switch--processing", t.SELECTED = "mdc-switch--selected", t.UNSELECTED = "mdc-switch--unselected";
})(Ou || (Ou = {}));
var Ru;
(function(t) {
  t.RIPPLE = ".mdc-switch__ripple";
})(Ru || (Ru = {}));
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
const TI = {
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
class ec extends Ot {
  static get cssClasses() {
    return TI;
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
    super(Object.assign(Object.assign({}, ec.defaultAdapter), e)), this.click = () => {
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
let xI = 0;
var wI = /* @__PURE__ */ new Set([
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
]), OI = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function RI(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "align", 3, "start"), a = b(e, "justify", 3, "normal"), s = b(e, "noWrap", 3, !1), o = b(e, "inputId", 19, () => "SMUI-form-field-" + xI++), c = b(e, "label$use", 19, () => []), u = b(e, "label$class", 3, ""), d = /* @__PURE__ */ ze(e, wI), m, f = /* @__PURE__ */ ce(void 0), v = new wi(), h, g = /* @__PURE__ */ ce(void 0);
  le("SMUI:generic:input:props", { id: o() }), le("SMUI:generic:input:mount", (E) => {
    q(g, E, !0);
  }), le("SMUI:generic:input:unmount", () => {
    q(g, void 0);
  }), nt(() => (q(
    f,
    new ec({
      activateInputRipple: () => {
        l(g) && l(g).activateRipple();
      },
      deactivateInputRipple: () => {
        l(g) && l(g).deactivateRipple();
      },
      deregisterInteractionHandler: (E, w) => v.off(h, E, w),
      registerInteractionHandler: (E, w) => v.on(h, E, w)
    }),
    !0
  ), l(f).init(), () => {
    var E;
    (E = l(f)) == null || E.destroy(), q(f, void 0), v.clear();
  }));
  function p() {
    return m;
  }
  var _ = { getElement: p }, I = OI();
  Fe(I, (E, w) => ({ class: E, ...w }), [
    () => Me({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--space-between": a() === "space-between",
      "mdc-form-field--nowrap": s(),
      [r()]: !0
    }),
    () => mr(d, ["label$"])
  ]);
  var A = be(I);
  Se(A, () => e.children ?? he);
  var S = _e(A, 2);
  Fe(S, (E, w) => ({ class: E, for: o(), ...w }), [
    () => Me({ "mdc-label": !0, [u()]: !0 }),
    () => st(d, "label$")
  ]);
  var C = be(S);
  return Se(C, () => e.label ?? he), Ee(S, (E) => h = E, () => h), Pe(S, (E, w) => X == null ? void 0 : X(E, w), c), Ee(I, (E) => m = E, () => m), Pe(I, (E, w) => X == null ? void 0 : X(E, w), n), L(t, I), Te(_);
}
yn(["click"]);
function Io(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var LI = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Io({}, LI.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Cs, Lu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Cs = {}, Io(Cs, Lu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Io(Cs, Lu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function NI(t) {
  return t * t * t;
}
function zf(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function MI(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (E) => Math.sqrt(E) * 120, easing: s = zf } = r, o = getComputedStyle(t), c = o.transform === "none" ? "" : o.transform, [u, d] = o.transformOrigin.split(" ").map(parseFloat);
  u /= t.clientWidth, d /= t.clientHeight;
  var m = DI(t), f = t.clientWidth / n.width / m, v = t.clientHeight / n.height / m, h = e.left + e.width * u, g = e.top + e.height * d, p = n.left + n.width * u, _ = n.top + n.height * d, I = (h - p) * f, A = (g - _) * v, S = e.width / n.width, C = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(I * I + A * A)) : a,
    easing: s,
    css: (E, w) => {
      var y = w * I, T = w * A, N = E + w * S, Z = E + w * C;
      return `transform: ${c} translate(${y}px, ${T}px) scale(${N}, ${Z});`;
    }
  };
}
function DI(t) {
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
function PI(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Nu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Qs(t, { delay: e = 0, duration: n = 400, easing: r = PI, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const o = getComputedStyle(t), c = +o.opacity, u = o.transform === "none" ? "" : o.transform, d = c * (1 - s), [m, f] = Nu(i), [v, h] = Nu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, p) => `
			transform: ${u} translate(${(1 - g) * m}${f}, ${(1 - g) * v}${h});
			opacity: ${c - d * p}`
  };
}
yn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var HI = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), UI = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function kI(t, e) {
  ye(e, !0);
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
  var s = UI(), o = be(s), c = be(o);
  bo(c, {
    class: "material-icons",
    children: (p, _) => {
      var I = Dt();
      Le(() => lt(I, r[e.type])), L(p, I);
    },
    $$slots: { default: !0 }
  });
  var u = _e(o, 2), d = be(u), m = Pn(d, !0), f = _e(d, 2);
  {
    var v = (p) => {
      var _ = HI(), I = Pn(_, !0);
      Le(() => lt(I, e.detail)), L(p, _);
    };
    pe(f, (p) => {
      e.detail && p(v);
    });
  }
  var h = _e(u, 2), g = be(h);
  bo(g, {
    class: "material-icons",
    children: (p, _) => {
      var I = Dt("close");
      L(p, I);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    Ut(s, `--color:${i[e.type] ?? ""}`), lt(m, e.summary);
  }), Zn("click", h, a), js(1, s, () => Qs, () => ({ x: 0, y: 30, duration: 150, easing: NI })), js(2, s, () => Qs, () => ({ x: 50, y: 0, duration: 150, easing: zf })), L(t, s), Te();
}
yn(["click"]);
const BI = 4e3;
function FI() {
  let t = oe({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, o = BI) => {
    const c = e++, u = { id: c, summary: a, detail: s, type: i };
    return t.items = [...t.items, u], setTimeout(
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
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: n
  };
}
const Ya = FI();
var VI = /* @__PURE__ */ de("<div><!></div>"), GI = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function jI(t, e) {
  ye(e, !1);
  const n = Ya.toasts;
  cm();
  var r = GI();
  Nn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = VI(), o = be(s);
    kI(o, {
      get summary() {
        return l(a).summary;
      },
      get detail() {
        return l(a).detail;
      },
      get type() {
        return l(a).type;
      },
      onClose: () => Ya.remove(l(a).id)
    }), Jv(s, () => MI, null), L(i, s);
  }), L(t, r), Te();
}
var WI = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), qI = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), KI = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function zI(t, e) {
  ye(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = KI(), i = be(r), a = be(i);
  {
    var s = (f) => {
      Ys(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (v, h) => {
          var g = WI(), p = be(g);
          Wf(p, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), Zn("click", g, (_) => {
            _.stopPropagation(), e.onRemove();
          }), L(v, g);
        },
        $$slots: { default: !0 }
      });
    }, o = (f) => {
      Ys(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (v, h) => {
          Z_(v, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    pe(a, (f) => {
      l(n) ? f(s) : f(o, -1);
    });
  }
  var c = _e(i, 2), u = Pn(c, !0), d = _e(c, 2);
  {
    var m = (f) => {
      var v = qI(), h = _e(re(v), 2), g = Pn(h, !0), p = _e(h, 2), _ = be(p);
      X_(_, { svgStyles: "fill: gray;" }), Le(() => lt(g, e.value)), L(f, v);
    };
    pe(d, (f) => {
      l(n) && f(m);
    });
  }
  Le(() => {
    Bo(r, 1, `filter-badge ${l(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), lt(u, e.label);
  }), Zn("click", r, (f) => {
    f.stopPropagation(), e.onOpen();
  }), L(t, r), Te();
}
yn(["click"]);
var XI = /* @__PURE__ */ new Set([
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
]), YI = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function ZI(t, e) {
  ye(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = b(e, "use", 19, () => []), a = b(e, "class", 3, ""), s = b(e, "style", 3, ""), o = b(e, "disabled", 15, !1), c = b(e, "touch", 3, !1), u = b(e, "indeterminate", 15, n), d = b(e, "group", 11, n), m = b(e, "checked", 15, n), f = b(e, "value", 3, null), v = b(e, "valueKey", 3, n), h = b(e, "input$use", 19, () => []), g = b(e, "input$class", 3, ""), p = /* @__PURE__ */ ze(e, XI), _, I = /* @__PURE__ */ ce(void 0), A = /* @__PURE__ */ ce(void 0), S = oe({}), C = oe({}), E = oe({}), w = /* @__PURE__ */ ce(!1), y = oe(ue("SMUI:generic:input:props") ?? {}), T = /* @__PURE__ */ ce(oe(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex(($) => $ === f()) !== -1)), N = ue("SMUI:checkbox:context"), Z = ue("SMUI:data-table:row:header"), W = m(), D = r(d()) ? [] : [...d()], x = l(T);
  Ce(() => {
    let $ = !1;
    if (!r(d()))
      if (x !== l(T)) {
        const ae = d().findIndex((Ue) => Ue === f());
        l(T) && ae === -1 ? d().push(f()) : !l(T) && ae !== -1 && d().splice(ae, 1), $ = !0;
      } else {
        const ae = D.findIndex((Oe) => Oe === f()), Ue = d().findIndex((Oe) => Oe === f());
        ae > -1 && Ue === -1 ? (q(T, !1), $ = !0) : Ue > -1 && ae === -1 && (q(T, !0), $ = !0);
      }
    r(m()) ? x !== l(T) && ($ = !0) : (m() !== (u() ? null : l(T)) || l(T) !== x) && (m() === W && l(T) !== x ? (m(l(T)), r(u()) || u(!1)) : q(T, !!m()), $ = !0), l(A) && (r(u()) ? l(A).indeterminate && (l(A).indeterminate = !1, $ = !0) : !u() && l(A).indeterminate ? (l(A).indeterminate = !1, $ = !0) : u() && !l(A).indeterminate && (l(A).indeterminate = !0, q(T, !1), $ = !0)), W = m(), D = r(d()) ? [] : [...d()], x = l(T), $ && l(I) && l(I).handleChange();
  });
  const O = ue("SMUI:generic:input:mount"), R = ue("SMUI:generic:input:unmount"), V = ue("SMUI:checkbox:mount"), k = ue("SMUI:checkbox:unmount");
  nt(() => {
    if (l(A) == null)
      throw new Error("Checkbox is not defined.");
    l(A).indeterminate = !r(u()) && u(), q(
      I,
      new Zs({
        addClass: K,
        forceLayout: () => j().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!j().parentNode,
        isChecked: () => l(T),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: P,
        removeNativeControlAttr: ne,
        setNativeControlAttr: H,
        setNativeControlDisabled: (ae) => o(ae)
      }),
      !0
    );
    const $ = {
      _smui_checkbox_accessor: !0,
      get element() {
        return j();
      },
      get checked() {
        return l(T);
      },
      set checked(ae) {
        l(T) !== ae && q(T, ae, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(ae) {
        u(ae);
      },
      activateRipple() {
        o() || q(w, !0);
      },
      deactivateRipple() {
        q(w, !1);
      }
    };
    return O && O($), V && V($), l(I).init(), () => {
      var ae;
      R && R($), k && k($), (ae = l(I)) == null || ae.destroy(), q(I, void 0);
    };
  });
  function K($) {
    S[$] || (S[$] = !0);
  }
  function P($) {
    (!($ in S) || S[$]) && (S[$] = !1);
  }
  function F($, ae) {
    C[$] != ae && (ae === "" || ae == null ? delete C[$] : C[$] = ae);
  }
  function H($, ae) {
    E[$] !== ae && (E[$] = ae);
  }
  function ne($) {
    (!($ in E) || E[$] != null) && (E[$] = void 0);
  }
  function Ae() {
    return y && y.id;
  }
  function j() {
    return _;
  }
  var z = { getId: Ae, getElement: j }, J = YI(), ee = ($) => {
    var ae;
    l(I) && l(I).handleAnimationEnd(), (ae = e.onanimationend) == null || ae.call(e, $);
  };
  Fe(J, ($, ae, Ue) => ({ class: $, style: ae, ...Ue, onanimationend: ee }), [
    () => Me({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": o(),
      "mdc-checkbox--touch": c(),
      "mdc-data-table__header-row-checkbox": N === "data-table" && Z,
      "mdc-data-table__row-checkbox": N === "data-table" && !Z,
      ...S,
      [a()]: !0
    }),
    () => Object.entries(C).map(([$, ae]) => `${$}: ${ae};`).concat([s()]).join(" "),
    () => mr(p, ["input$"])
  ]);
  var G = be(J), ie = ($) => {
    var ae;
    et(j(), "blur", $), (ae = e.input$onblur) == null || ae.call(e, $);
  }, xe = ($) => {
    var ae;
    et(j(), "focus", $), (ae = e.input$onfocus) == null || ae.call(e, $);
  };
  return Fe(
    G,
    ($, ae, Ue, Oe) => ({
      class: $,
      type: "checkbox",
      ...y,
      disabled: o(),
      value: ae,
      "data-indeterminate": Ue,
      ...E,
      ...Oe,
      onblur: ie,
      onfocus: xe
    }),
    [
      () => Me({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(v()) ? f() : v(),
      () => !r(u()) && u() ? "true" : void 0,
      () => st(p, "input$")
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), Ee(G, ($) => q(A, $), () => l(A)), Pe(G, ($, ae) => X == null ? void 0 : X($, ae), h), Ci(() => om(G, () => l(T), ($) => q(T, $))), Ee(J, ($) => _ = $, () => _), Pe(J, ($, ae) => X == null ? void 0 : X($, ae), i), Pe(J, ($, ae) => Qt == null ? void 0 : Qt($, ae), () => ({
    unbounded: !0,
    addClass: K,
    removeClass: P,
    addStyle: F,
    active: l(w),
    eventTarget: l(A)
  })), L(t, J), Te(z);
}
var QI = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function JI(t, e) {
  ye(e, !0);
  let n = b(e, "data", 19, () => []), r = b(e, "values", 31, () => oe([]));
  var i = QI();
  Nn(i, 21, n, Bi, (a, s) => {
    RI(a, {
      label: (c) => {
        var u = Dt();
        Le(() => lt(u, l(s).label)), L(c, u);
      },
      children: (c, u) => {
        ZI(c, {
          get value() {
            return l(s).value;
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
  }), L(t, i), Te();
}
var $I = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), eE = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), tE = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function nE(t, e) {
  ye(e, !0);
  let n = b(e, "filters", 15), r = /* @__PURE__ */ ce(null), i = [], a = [];
  function s(h) {
    var g;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const p = (g = h.options) == null ? void 0 : g.find((A) => A.value === h.value);
          return p ? p.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const _ = h.value.map((A) => {
            var C;
            const S = (C = h.options) == null ? void 0 : C.find((E) => E.value === A);
            return S ? S.label : String(A);
          }), I = 1;
          return _.length <= I ? _.join(", ") : `${_.slice(0, I).join(", ")} +${_.length - I} more`;
        case "date":
          try {
            const A = new Date(h.value);
            return isNaN(A.getTime()) ? String(h.value) : A.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const A = new Date(h.value);
            return isNaN(A.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(A);
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
    l(r) === h ? q(r, null) : (q(r, h, !0), a[h] = o(n()[h]));
  }
  function u() {
    q(r, null), a[l(r)] = void 0;
  }
  function d(h) {
    var g;
    n(n().map((p, _) => _ === h ? { ...p, value: a[h] } : p)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), q(r, null);
  }
  function m(h) {
    var g;
    n(n().map((p, _) => _ === h ? { ...p, value: void 0 } : p)), a[h] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), u();
  }
  function f(h) {
    i.some((p) => p && p.contains(h.target)) || u();
  }
  nt(() => {
    document.addEventListener("click", f);
  }), Nr(() => {
    document.removeEventListener("click", f);
  }), Ce(() => {
  });
  var v = tE();
  Nn(v, 23, n, (h) => h.key, (h, g, p) => {
    var _ = eE(), I = be(_);
    {
      let C = /* @__PURE__ */ fe(() => s(l(g)));
      zI(I, {
        get label() {
          return l(g).label;
        },
        get value() {
          return l(C);
        },
        onOpen: () => c(l(p)),
        onRemove: () => m(l(p))
      });
    }
    var A = _e(I, 2);
    {
      var S = (C) => {
        var E = $I(), w = _e(be(E), 2), y = Pn(w), T = _e(w, 2), N = be(T);
        {
          var Z = (V) => {
            po(V, {
              get label() {
                return l(g).label;
              },
              get placeholder() {
                return l(g).placeholder;
              },
              get type() {
                return l(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[l(p)];
              },
              set value(k) {
                a[l(p)] = k;
              }
            });
          }, W = (V) => {
            {
              let k = /* @__PURE__ */ fe(() => {
                var K;
                return (K = l(g)) == null ? void 0 : K.options;
              });
              E_(V, {
                get label() {
                  return l(g).label;
                },
                get data() {
                  return l(k);
                },
                get value() {
                  return a[l(p)];
                },
                set value(K) {
                  a[l(p)] = K;
                }
              });
            }
          }, D = (V) => {
            {
              let k = /* @__PURE__ */ fe(() => {
                var K;
                return (K = l(g)) == null ? void 0 : K.options;
              });
              JI(V, {
                get data() {
                  return l(k);
                },
                get values() {
                  return a[l(p)];
                },
                set values(K) {
                  a[l(p)] = K;
                }
              });
            }
          }, x = (V) => {
            eI(V, {
              get value() {
                return a[l(p)];
              },
              set value(k) {
                a[l(p)] = k;
              }
            });
          }, O = (V) => {
            nI(V, {
              get value() {
                return a[l(p)];
              },
              set value(k) {
                a[l(p)] = k;
              }
            });
          };
          pe(N, (V) => {
            l(g).type === "text" || l(g).type === "number" ? V(Z) : l(g).type === "select" ? V(W, 1) : l(g).type === "multiselect" ? V(D, 2) : l(g).type === "date" ? V(x, 3) : l(g).type === "datetime" && V(O, 4);
          });
        }
        var R = _e(T, 2);
        Bf(R, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(l(p)),
          children: (V, k) => {
            var K = Dt("Apply");
            L(V, K);
          },
          $$slots: { default: !0 }
        }), Le(() => lt(y, `Filter by ${l(g).label ?? ""}`)), Zn("click", E, (V) => V.stopPropagation()), js(2, E, () => Qs, () => ({ y: 5, duration: 120 })), js(1, E, () => Qs, () => ({ y: -5, duration: 120 })), L(C, E);
      };
      pe(A, (C) => {
        l(r) === l(p) && C(S);
      });
    }
    Ee(_, (C, E) => i[E] = C, (C) => i == null ? void 0 : i[C], () => [l(p)]), L(h, _);
  }), L(t, v), Te();
}
yn(["click"]);
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
const Xf = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, rE = {
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
let Ul;
function iE(t, e = !0) {
  if (e && typeof Ul < "u")
    return Ul;
  const n = t.createElement("div");
  n.classList.add(Xf.SCROLL_TEST), t.body.appendChild(n);
  const r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (Ul = r), r;
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
class tc {
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
class aE extends tc {
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
class sE extends tc {
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
class lE extends tc {
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
class Wr extends Ot {
  static get cssClasses() {
    return Xf;
  }
  static get strings() {
    return rE;
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
    super(Object.assign(Object.assign({}, Wr.defaultAdapter), e)), this.isAnimating = !1;
  }
  init() {
    const e = this.adapter.computeHorizontalScrollbarHeight();
    this.adapter.setScrollAreaStyleProperty("margin-bottom", -e + "px"), this.adapter.addScrollAreaClass(Wr.cssClasses.SCROLL_AREA_SCROLL);
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
    !this.isAnimating || !this.adapter.eventTargetMatchesSelector(n, Wr.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(Wr.cssClasses.ANIMATING));
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
    const r = n[1], [i, a, s, o, c, u] = r.split(",");
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
      this.adapter.addClass(Wr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "none");
    }), this.isAnimating = !0);
  }
  /**
   * Stops scroll animation
   */
  stopScrollAnimation() {
    this.isAnimating = !1;
    const e = this.getAnimatingScrollPosition();
    this.adapter.removeClass(Wr.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(e);
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
      return this.adapter.setScrollAreaScrollLeft(e), new sE(this.adapter);
    const r = this.adapter.computeScrollAreaClientRect(), i = this.adapter.computeScrollContentClientRect(), a = Math.round(i.right - r.right);
    return this.adapter.setScrollAreaScrollLeft(e), a === n ? new lE(this.adapter) : new aE(this.adapter);
  }
  isRTL() {
    return this.adapter.getScrollContentStyleValue("direction") === "rtl";
  }
}
var oE = /* @__PURE__ */ new Set([
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
]), cE = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function uE(t, e) {
  ye(e, !0);
  const { matches: n } = ds;
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "align", 3, void 0), s = b(e, "scrollArea$use", 19, () => []), o = b(e, "scrollArea$class", 3, ""), c = b(e, "scrollContent$use", 19, () => []), u = b(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ ze(e, oE), m, f = /* @__PURE__ */ ce(void 0), v, h, g = oe({}), p = oe({}), _ = oe({}), I = oe({});
  nt(() => (q(
    f,
    new Wr({
      eventTargetMatchesSelector: (j, z) => n(j, z),
      addClass: A,
      removeClass: S,
      addScrollAreaClass: C,
      setScrollAreaStyleProperty: E,
      setScrollContentStyleProperty: w,
      getScrollContentStyleValue: y,
      setScrollAreaScrollLeft: (j) => v.scrollLeft = j,
      getScrollAreaScrollLeft: () => v.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => v.offsetWidth,
      computeScrollAreaClientRect: () => v.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => iE(document)
    }),
    !0
  ), l(f).init(), () => {
    var j;
    (j = l(f)) == null || j.destroy(), q(f, void 0);
  }));
  function A(j) {
    g[j] || (g[j] = !0);
  }
  function S(j) {
    (!(j in g) || g[j]) && (g[j] = !1);
  }
  function C(j) {
    p[j] || (p[j] = !0);
  }
  function E(j, z) {
    _[j] != z && (z === "" || z == null ? delete _[j] : _[j] = z);
  }
  function w(j, z) {
    I[j] != z && (z === "" || z == null ? delete I[j] : I[j] = z);
  }
  function y(j) {
    return j in I ? I[j] : getComputedStyle(h).getPropertyValue(j);
  }
  function T() {
    if (l(f) == null)
      throw new Error("Instance is undefined.");
    return l(f).getScrollPosition();
  }
  function N() {
    return h.offsetWidth;
  }
  function Z(j) {
    var z;
    (z = l(f)) == null || z.incrementScroll(j);
  }
  function W(j) {
    var z;
    (z = l(f)) == null || z.scrollTo(j);
  }
  function D() {
    return m;
  }
  var x = {
    getScrollPosition: T,
    getScrollContentWidth: N,
    incrementScroll: Z,
    scrollTo: W,
    getElement: D
  }, O = cE();
  Fe(O, (j, z) => ({ class: j, ...z }), [
    () => Me({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => mr(d, ["scrollArea$", "scrollContent$"])
  ]);
  var R = be(O), V = (j) => {
    var z;
    l(f) && l(f).handleInteraction(), (z = e.scrollArea$onwheel) == null || z.call(e, j);
  }, k = (j) => {
    var z;
    l(f) && l(f).handleInteraction(), (z = e.scrollArea$ontouchstart) == null || z.call(e, j);
  }, K = (j) => {
    var z;
    l(f) && l(f).handleInteraction(), (z = e.scrollArea$onpointerdown) == null || z.call(e, j);
  }, P = (j) => {
    var z;
    l(f) && l(f).handleInteraction(), (z = e.scrollArea$onmousedown) == null || z.call(e, j);
  }, F = (j) => {
    var z;
    l(f) && l(f).handleInteraction(), (z = e.scrollArea$onkeydown) == null || z.call(e, j);
  };
  Fe(
    R,
    (j, z, J) => ({
      class: j,
      style: z,
      ...J,
      onwheel: V,
      ontouchstart: k,
      onpointerdown: K,
      onmousedown: P,
      onkeydown: F
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-area": !0,
        ...p,
        [o()]: !0
      }),
      () => Object.entries(_).map(([j, z]) => `${j}: ${z};`).join(" "),
      () => st(d, "scrollArea$")
    ]
  );
  var H = be(R), ne = (j) => {
    var z;
    l(f) && l(f).handleTransitionEnd(j), (z = e.scrollContent$ontransitionend) == null || z.call(e, j);
  };
  Fe(
    H,
    (j, z, J) => ({
      class: j,
      style: z,
      ...J,
      ontransitionend: ne
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-content": !0,
        [u()]: !0
      }),
      () => Object.entries(I).map(([j, z]) => `${j}: ${z};`).join(" "),
      () => st(d, "scrollContent$")
    ]
  );
  var Ae = be(H);
  return Se(Ae, () => e.children ?? he), Ee(H, (j) => h = j, () => h), Pe(H, (j, z) => X == null ? void 0 : X(j, z), c), Ee(R, (j) => v = j, () => v), Pe(R, (j, z) => X == null ? void 0 : X(j, z), s), Ee(O, (j) => m = j, () => m), Pe(O, (j, z) => X == null ? void 0 : X(j, z), r), L(t, O), Te(x);
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
const dE = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, fE = {
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
class qn extends Ot {
  static get cssClasses() {
    return dE;
  }
  static get strings() {
    return fE;
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
    super(Object.assign(Object.assign({}, qn.defaultAdapter), e));
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
class hE extends qn {
  activate() {
    this.adapter.addClass(qn.cssClasses.ACTIVE);
  }
  deactivate() {
    this.adapter.removeClass(qn.cssClasses.ACTIVE);
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
class Mu extends qn {
  activate(e) {
    if (!e) {
      this.adapter.addClass(qn.cssClasses.ACTIVE);
      return;
    }
    const n = this.computeContentClientRect(), r = e.width / n.width, i = e.left - n.left;
    this.adapter.addClass(qn.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", `translateX(${i}px) scaleX(${r})`), this.computeContentClientRect(), this.adapter.removeClass(qn.cssClasses.NO_TRANSITION), this.adapter.addClass(qn.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
  }
  deactivate() {
    this.adapter.removeClass(qn.cssClasses.ACTIVE);
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
const xs = {
  ACTIVE: "mdc-tab--active"
}, Ra = {
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
class nc extends Ot {
  static get cssClasses() {
    return xs;
  }
  static get strings() {
    return Ra;
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
    super(Object.assign(Object.assign({}, nc.defaultAdapter), e)), this.focusOnActivate = !0;
  }
  handleClick() {
    this.adapter.notifyInteracted();
  }
  isActive() {
    return this.adapter.hasClass(xs.ACTIVE);
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
    this.adapter.addClass(xs.ACTIVE), this.adapter.setAttr(Ra.ARIA_SELECTED, "true"), this.adapter.setAttr(Ra.TABINDEX, "0"), this.adapter.activateIndicator(e), this.focusOnActivate && !this.adapter.isFocused() && this.adapter.focus();
  }
  /**
   * Deactivates the Tab
   */
  deactivate() {
    this.isActive() && (this.adapter.removeClass(xs.ACTIVE), this.adapter.setAttr(Ra.ARIA_SELECTED, "false"), this.adapter.setAttr(Ra.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
}, Kn = {
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
const Oi = /* @__PURE__ */ new Set();
Oi.add(wt.ARROW_LEFT_KEY);
Oi.add(wt.ARROW_RIGHT_KEY);
Oi.add(wt.END_KEY);
Oi.add(wt.HOME_KEY);
Oi.add(wt.ENTER_KEY);
Oi.add(wt.SPACE_KEY);
const Ri = /* @__PURE__ */ new Map();
Ri.set(Kn.ARROW_LEFT_KEYCODE, wt.ARROW_LEFT_KEY);
Ri.set(Kn.ARROW_RIGHT_KEYCODE, wt.ARROW_RIGHT_KEY);
Ri.set(Kn.END_KEYCODE, wt.END_KEY);
Ri.set(Kn.HOME_KEYCODE, wt.HOME_KEY);
Ri.set(Kn.ENTER_KEYCODE, wt.ENTER_KEY);
Ri.set(Kn.SPACE_KEYCODE, wt.SPACE_KEY);
class rc extends Ot {
  static get strings() {
    return wt;
  }
  static get numbers() {
    return Kn;
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
    super(Object.assign(Object.assign({}, rc.defaultAdapter), e)), this.useAutomaticActivation = !1;
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
    const r = this.isRTL(), i = this.adapter.getTabListLength() - 1, a = n === wt.END_KEY, s = n === wt.ARROW_LEFT_KEY && !r || n === wt.ARROW_RIGHT_KEY && r, o = n === wt.ARROW_RIGHT_KEY && !r || n === wt.ARROW_LEFT_KEY && r;
    let c = e;
    return a ? c = i : s ? c -= 1 : o ? c += 1 : c = 0, c < 0 ? c = i : c > i && (c = 0), c;
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
    const a = this.adapter.getTabDimensionsAtIndex(n), s = a.contentLeft - r - i, c = a.contentRight - r - Kn.EXTRA_SCROLL_AMOUNT, u = s + Kn.EXTRA_SCROLL_AMOUNT;
    return n < e ? Math.min(c, 0) : Math.max(u, 0);
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
    const s = this.adapter.getTabDimensionsAtIndex(n), o = a - s.contentLeft - r, u = a - s.contentRight - r - i + Kn.EXTRA_SCROLL_AMOUNT, d = o - Kn.EXTRA_SCROLL_AMOUNT;
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
    const a = n.rootLeft - r, s = n.rootRight - r - i, o = a + s, c = a < 0 || o < 0, u = s > 0 || o > 0;
    return c ? e - 1 : u ? e + 1 : -1;
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
    const s = a - n.rootLeft - i - r, o = a - n.rootRight - r, c = s + o, u = s > 0 || c > 0, d = o < 0 || c < 0;
    return u ? e + 1 : d ? e - 1 : -1;
  }
  /**
   * Returns the key associated with a keydown event
   * @param event The keydown event
   */
  getKeyFromEvent(e) {
    return Oi.has(e.key) ? e.key : Ri.get(e.keyCode);
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
    const s = this.calculateScrollIncrement(e, a, n, r);
    this.adapter.incrementScroll(s);
  }
  /**
   * Scrolls the tab at the given index into view in RTL
   * @param index The tab index to make visible
   */
  scrollIntoViewImplRTL(e) {
    const n = this.adapter.getScrollPosition(), r = this.adapter.getOffsetWidth(), i = this.adapter.getTabDimensionsAtIndex(e), a = this.adapter.getScrollContentWidth(), s = this.findAdjacentTabIndexClosestToEdgeRTL(e, i, n, r, a);
    if (!this.indexIsInRange(s))
      return;
    const o = this.calculateScrollIncrementRTL(e, s, n, r, a);
    this.adapter.incrementScroll(o);
  }
}
var vE = /* @__PURE__ */ new Set([
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
]), mE = /* @__PURE__ */ de("<div><!></div>");
function gE(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "tabs", 19, () => []), a = b(e, "key", 3, (x) => x), s = b(e, "focusOnActivate", 3, !0), o = b(e, "focusOnProgrammatic", 3, !1), c = b(e, "useAutomaticActivation", 3, !0), u = b(e, "active", 15), d = b(e, "tabindex", 3, 0), m = /* @__PURE__ */ ze(e, vE), f, v = /* @__PURE__ */ ce(void 0), h, g = /* @__PURE__ */ ce(oe(u() == null ? -1 : i().findIndex((x) => u() && a()(x) === a()(u())))), p = oe({}), _ = /* @__PURE__ */ ce(/* @__PURE__ */ new WeakMap()), I = !1;
  le("SMUI:tab:focusOnActivate", s()), le("SMUI:tab:initialActive", {
    active: u() == null ? null : a()(u()),
    key: a()
  }), Ce(() => {
    (u() == null && l(g) !== -1 || u() != null && l(g) === -1 || u() != null && a()(u()) !== a()(i()[l(g)])) && (q(g, i().findIndex((x) => u() && a()(x) === a()(u())), !0), l(v) && (I = !o(), l(v).activateTab(l(g)), I = !1));
  }), Ce(() => {
    if (i().length) {
      const x = i()[0] instanceof Object ? l(_).get(i()[0]) : p[i()[0]];
      x && x.forceAccessible(l(g) === -1);
    }
  });
  let A = !1;
  Ce(() => {
    if (!l(v)) {
      A = !1;
      return;
    }
    A || (A = !0, l(v).setUseAutomaticActivation(c()));
  }), le("SMUI:tab:mount", (x) => {
    C(x.tabId, x);
  }), le("SMUI:tab:unmount", (x) => {
    E(x.tabId);
  }), nt(() => (q(
    v,
    new rc({
      scrollTo: (x) => h.scrollTo(x),
      incrementScroll: (x) => h.incrementScroll(x),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => y().offsetWidth,
      isRTL: () => getComputedStyle(y()).getPropertyValue("direction") === "rtl",
      setActiveTab: (x) => {
        var O;
        u(i()[x]), q(g, x, !0), (O = l(v)) == null || O.activateTab(x);
      },
      activateTabAtIndex: (x, O) => {
        var R;
        return (R = S(i()[x])) == null ? void 0 : R.activate(O, I);
      },
      deactivateTabAtIndex: (x) => {
        var O;
        return (O = S(i()[x])) == null ? void 0 : O.deactivate();
      },
      focusTabAtIndex: (x) => {
        var O;
        return (O = S(i()[x])) == null ? void 0 : O.focus();
      },
      getTabIndicatorClientRectAtIndex: (x) => {
        var O;
        return ((O = S(i()[x])) == null ? void 0 : O.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (x) => {
        var O;
        return ((O = S(i()[x])) == null ? void 0 : O.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var x;
        for (let O = 0; O < i().length; O++)
          if ((x = S(i()[O])) != null && x.active)
            return O;
        return -1;
      },
      getFocusedTabIndex: () => {
        const x = i().map((R) => {
          var V;
          return (V = S(R)) == null ? void 0 : V.element;
        }), O = document.activeElement;
        return x.indexOf(O);
      },
      getIndexOfTabById: (x) => i().findIndex((O) => a()(O) === a()(x)),
      getTabListLength: () => i().length,
      notifyTabActivated: (x) => et(y(), "SMUITabBarActivated", { index: x })
    }),
    !0
  ), l(v).init(), () => {
    var x;
    (x = l(v)) == null || x.destroy(), q(v, void 0);
  }));
  function S(x) {
    return x instanceof Object ? l(_).get(x) : p[x];
  }
  function C(x, O) {
    x instanceof Object ? (l(_).set(x, O), q(_, l(_))) : p[x] = O;
  }
  function E(x) {
    x instanceof Object ? (l(_).delete(x), q(_, l(_))) : delete p[x];
  }
  function w(x) {
    var O;
    (O = l(v)) == null || O.scrollIntoView(x);
  }
  function y() {
    return f;
  }
  var T = { scrollIntoView: w, getElement: y }, N = mE(), Z = (x) => {
    var O;
    l(v) && l(v).handleKeyDown(x), (O = e.onkeydown) == null || O.call(e, x);
  }, W = (x) => {
    var O;
    l(v) && l(v).handleTabInteraction(x), (O = e.onSMUITabInteracted) == null || O.call(e, x);
  };
  Fe(
    N,
    (x, O) => ({
      class: x,
      role: "tablist",
      tabindex: d(),
      ...O,
      onkeydown: Z,
      onSMUITabInteracted: W
    }),
    [
      () => Me({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => mr(m, ["tabScroller$"])
    ]
  );
  var D = be(N);
  {
    let x = /* @__PURE__ */ fe(() => st(m, "tabScroller$"));
    Ee(
      uE(D, it(() => l(x), {
        children: (O, R) => {
          var V = ve(), k = re(V);
          Nn(k, 17, i, (K) => a()(K), (K, P) => {
            var F = ve(), H = re(F);
            Se(H, () => e.tab, () => l(P)), L(K, F);
          }), L(O, V);
        },
        $$slots: { default: !0 }
      })),
      (O) => h = O,
      () => h
    );
  }
  return Ee(N, (x) => f = x, () => f), Pe(N, (x, O) => X == null ? void 0 : X(x, O), n), L(t, N), Te(T);
}
var bE = /* @__PURE__ */ new Set([
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
]), pE = /* @__PURE__ */ de("<span><span><!></span></span>");
function _E(t, e) {
  ye(e, !0);
  let n = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), i = b(e, "active", 15, !1), a = b(e, "type", 3, "underline"), s = b(e, "transition", 3, "slide"), o = b(e, "content$use", 19, () => []), c = b(e, "content$class", 3, ""), u = /* @__PURE__ */ ze(e, bE), d, m = /* @__PURE__ */ ce(void 0), f, v = /* @__PURE__ */ ce(oe({})), h = /* @__PURE__ */ ce(oe({})), g = oe([]), p = s();
  Ce(() => {
    var x;
    p !== s() && (p = s(), (x = l(m)) == null || x.destroy(), q(m, void 0), q(v, {}, !0), q(h, {}, !0), q(m, _(), !0), l(m).init());
  }), Hd(() => {
    g.length && requestAnimationFrame(() => {
      const x = g.shift() ?? [];
      for (const O of x)
        O();
    });
  }), nt(() => (q(m, _(), !0), l(m).init(), () => {
    var x;
    (x = l(m)) == null || x.destroy(), q(m, void 0);
  }));
  function _() {
    const x = {
      fade: hE,
      slide: Mu
    }[s()] || Mu;
    return new x({
      addClass: (...O) => I(() => A(...O)),
      removeClass: (...O) => I(() => S(...O)),
      computeContentClientRect: y,
      setContentStyleProperty: (...O) => I(() => C(...O))
    });
  }
  function I(x) {
    g.length ? g[g.length - 1].push(x) : x();
  }
  function A(x) {
    l(v)[x] || (l(v)[x] = !0);
  }
  function S(x) {
    (!(x in l(v)) || l(v)[x]) && (l(v)[x] = !1);
  }
  function C(x, O) {
    l(h)[x] != O && (O === "" || O == null ? delete l(h)[x] : l(h)[x] = O);
  }
  function E(x) {
    var O;
    i(!0), (O = l(m)) == null || O.activate(x);
  }
  function w() {
    var x;
    i(!1), (x = l(m)) == null || x.deactivate();
  }
  function y() {
    return g.push([]), f.getBoundingClientRect();
  }
  function T() {
    return d;
  }
  var N = { activate: E, deactivate: w, computeContentClientRect: y, getElement: T }, Z = pE();
  Fe(Z, (x, O) => ({ class: x, ...O }), [
    () => Me({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": s() === "fade",
      ...l(v),
      [r()]: !0
    }),
    () => mr(u, ["content$"])
  ]);
  var W = be(Z);
  Fe(
    W,
    (x, O, R) => ({
      class: x,
      style: O,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...R
    }),
    [
      () => Me({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [c()]: !0
      }),
      () => Object.entries(l(h)).map(([x, O]) => `${x}: ${O};`).join(" "),
      () => st(u, "content$")
    ]
  );
  var D = be(W);
  return Se(D, () => e.children ?? he), Ee(W, (x) => f = x, () => f), Pe(W, (x, O) => X == null ? void 0 : X(x, O), o), Ee(Z, (x) => d = x, () => d), Pe(Z, (x, O) => X == null ? void 0 : X(x, O), n), L(t, Z), Te(N);
}
var IE = /* @__PURE__ */ new Set([
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
]), EE = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function SE(t, e) {
  ye(e, !0);
  const n = (z) => {
    {
      let J = /* @__PURE__ */ fe(() => st(g, "tabIndicator$"));
      Ee(
        _E(z, it(() => l(J), {
          get active() {
            return l(T);
          },
          set active(ee) {
            q(T, ee, !0);
          },
          children: (ee, G) => {
            var ie = ve(), xe = re(ie);
            Se(xe, () => e.tabIndicator ?? he), L(ee, ie);
          },
          $$slots: { default: !0 }
        })),
        (ee) => A = ee,
        () => A
      );
    }
  };
  let r = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), a = b(e, "style", 3, ""), s = b(e, "ripple", 3, !0), o = b(e, "stacked", 3, !1), c = b(e, "minWidth", 3, !1), u = b(e, "indicatorSpanOnlyContent", 3, !1), d = b(e, "href", 3, void 0), m = b(e, "content$use", 19, () => []), f = b(e, "content$class", 3, ""), v = b(e, "component", 3, ti), h = b(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, IE), p, _ = /* @__PURE__ */ ce(void 0), I, A, S = oe({}), C = oe({}), E = oe({}), w = ue("SMUI:tab:focusOnActivate");
  const y = ue("SMUI:tab:initialActive");
  let T = /* @__PURE__ */ ce(oe(y.active != null && y.key(e.tab) === y.active)), N = /* @__PURE__ */ ce(!1);
  if (le("SMUI:label:context", "tab"), le("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let Z = !1;
  Ce(() => {
    if (!l(_)) {
      Z = !1;
      return;
    }
    Z || (Z = !0, l(_).setFocusOnActivate(w));
  });
  const W = ue("SMUI:tab:mount"), D = ue("SMUI:tab:unmount");
  nt(() => {
    q(
      _,
      new nc({
        setAttr: k,
        addClass: O,
        removeClass: R,
        hasClass: x,
        activateIndicator: (J) => A.activate(J),
        deactivateIndicator: () => A.deactivate(),
        notifyInteracted: () => et(H(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => H().offsetLeft,
        getOffsetWidth: () => H().offsetWidth,
        getContentOffsetLeft: () => I.offsetLeft,
        getContentOffsetWidth: () => I.offsetWidth,
        focus: F,
        isFocused: () => H() === document.activeElement
      }),
      !0
    );
    const z = {
      tabId: e.tab,
      get element() {
        return H();
      },
      get active() {
        return l(T);
      },
      forceAccessible(J) {
        q(N, J, !0);
      },
      computeIndicatorClientRect: () => A.computeContentClientRect(),
      computeDimensions: () => {
        if (l(_) == null)
          throw new Error("Instance is undefined.");
        return l(_).computeDimensions();
      },
      focus: F,
      activate: K,
      deactivate: P
    };
    return W && W(z), l(_).init(), () => {
      var J;
      D && D(z), (J = l(_)) == null || J.destroy(), q(_, void 0);
    };
  });
  function x(z) {
    return z in S ? S[z] : H().classList.contains(z);
  }
  function O(z) {
    S[z] || (S[z] = !0);
  }
  function R(z) {
    (!(z in S) || S[z]) && (S[z] = !1);
  }
  function V(z, J) {
    C[z] != J && (J === "" || J == null ? delete C[z] : C[z] = J);
  }
  function k(z, J) {
    E[z] !== J && (E[z] = J);
  }
  function K(z, J) {
    var ee, G, ie;
    q(T, !0), J && ((ee = l(_)) == null || ee.setFocusOnActivate(!1)), (G = l(_)) == null || G.activate(z), J && ((ie = l(_)) == null || ie.setFocusOnActivate(w));
  }
  function P() {
    var z;
    q(T, !1), (z = l(_)) == null || z.deactivate();
  }
  function F() {
    H().focus();
  }
  function H() {
    return p.getElement();
  }
  var ne = { activate: K, deactivate: P, focus: F, getElement: H }, Ae = ve(), j = re(Ae);
  {
    let z = /* @__PURE__ */ fe(() => [
      [
        Qt,
        {
          ripple: s(),
          unbounded: !1,
          addClass: O,
          removeClass: R,
          addStyle: V
        }
      ],
      ...r()
    ]), J = /* @__PURE__ */ fe(() => Me({
      "mdc-tab": !0,
      "mdc-tab--active": l(T),
      "mdc-tab--stacked": o(),
      "mdc-tab--min-width": c(),
      ...S,
      [i()]: !0
    })), ee = /* @__PURE__ */ fe(() => Object.entries(C).map(([$, ae]) => `${$}: ${ae};`).concat([a()]).join(" ")), G = /* @__PURE__ */ fe(() => l(T) ? "true" : "false"), ie = /* @__PURE__ */ fe(() => l(T) || l(N) ? "0" : "-1"), xe = /* @__PURE__ */ fe(() => mr(g, ["content$", "tabIndicator$"]));
    Mr(j, v, ($, ae) => {
      Ee(
        ae($, it(
          {
            get tag() {
              return h();
            },
            get use() {
              return l(z);
            },
            get class() {
              return l(J);
            },
            get style() {
              return l(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return l(G);
            },
            get tabindex() {
              return l(ie);
            },
            get href() {
              return d();
            }
          },
          () => E,
          () => l(xe),
          {
            onclick: (Ue) => {
              var Oe;
              (Oe = e.onclick) == null || Oe.call(e, Ue), !Ue.defaultPrevented && l(_) && l(_).handleClick();
            },
            children: (Ue, Oe) => {
              var Ve = EE(), ke = re(Ve);
              Fe(ke, (je, St) => ({ class: je, ...St }), [
                () => Me({ "mdc-tab__content": !0, [f()]: !0 }),
                () => st(g, "content$")
              ]);
              var Ne = be(ke);
              Se(Ne, () => e.children ?? he);
              var U = _e(Ne, 2);
              {
                var Y = (je) => {
                  n(je);
                };
                pe(U, (je) => {
                  u() && je(Y);
                });
              }
              Ee(ke, (je) => I = je, () => I), Pe(ke, (je, St) => X == null ? void 0 : X(je, St), m);
              var se = _e(ke, 2);
              {
                var Re = (je) => {
                  n(je);
                };
                pe(se, (je) => {
                  u() || je(Re);
                });
              }
              L(Ue, Ve);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ue) => p = Ue,
        () => p
      );
    });
  }
  return L(t, Ae), Te(ne);
}
var AE = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), yE = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), TE = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function CE(t, e) {
  ye(e, !0);
  let n = b(e, "filters", 31, () => oe([])), r = b(e, "onFilterChange", 3, (A) => {
  }), i = b(e, "activeNavigationTab", 31, () => oe(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = b(e, "searchText", 15, ""), s = b(e, "searchLabel", 3, "Search"), o = b(e, "searchPlaceholder", 3, "Type to search..."), c = b(e, "onSearchInput", 3, () => {
  }), u = b(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ fe(() => n().some((A) => A.value !== void 0 && A.value !== null && A.value !== "")), m = () => {
    n(n().map((A) => ({ ...A, value: void 0 }))), r()(n());
  };
  var f = TE(), v = be(f);
  {
    var h = (A) => {
      kp(A, {
        oninput: () => c()(),
        icon: "search",
        get label() {
          return s();
        },
        get placeholder() {
          return o();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(S) {
          a(S);
        }
      });
    };
    pe(v, (A) => {
      u() || A(h);
    });
  }
  var g = _e(v, 2);
  {
    var p = (A) => {
      gE(A, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(C) {
          i(C);
        },
        tab: (C, E = he) => {
          SE(C, {
            get tab() {
              return E();
            },
            minWidth: !0,
            children: (w, y) => {
              kb(w, {
                children: (T, N) => {
                  var Z = Dt();
                  Le(() => lt(Z, E())), L(T, Z);
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
    pe(g, (A) => {
      e.navigationTabs && A(p);
    });
  }
  var _ = _e(g, 2);
  {
    var I = (A) => {
      var S = yE(), C = _e(be(S), 2);
      nE(C, {
        onfiltersChanged: (y) => r()(y),
        get filters() {
          return n();
        },
        set filters(y) {
          n(y);
        }
      });
      var E = _e(C, 2);
      {
        var w = (y) => {
          var T = AE();
          Zn("click", T, () => m()), L(y, T);
        };
        pe(E, (y) => {
          l(d) && y(w);
        });
      }
      L(A, S);
    };
    pe(_, (A) => {
      n() && n().length > 0 && A(I);
    });
  }
  L(t, f), Te();
}
yn(["click"]);
yn(["change", "click"]);
var xE = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), wE = /* @__PURE__ */ an('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), OE = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), RE = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), LE = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), kl = /* @__PURE__ */ de("<!> <!>", 1), NE = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>');
function ME(t, e) {
  ye(e, !0);
  const n = () => fr(p, "$sortColumn", a), r = () => fr(_, "$sortDirection", a), i = () => fr(g, "$filteredData", a), [a, s] = Dr();
  let o = b(e, "loadingDone", 15, !0), c = b(e, "label", 19, R_), u = b(e, "columnDefs", 19, () => []), d = b(e, "rowData", 31, () => oe([])), m = b(e, "rowActions", 19, () => []), f = b(e, "searchInputLabel", 3, "Search"), v = b(e, "emptyText", 3, "No data available"), h = oe({ name: "", color: "", number: "" }), g = rn([]), p = rn(null), _ = rn(null), I = /* @__PURE__ */ fe(() => u().some((E) => E.filter));
  e.store.store.subscribe((E) => {
    d([...E]), A();
  });
  function A() {
    let E = d().filter((w) => u().every((y) => {
      const T = h[y.field], N = y.filterValueGetter ? y.filterValueGetter(w) : w[y.field];
      return T ? y.filterType === "number" ? N == T : N.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    E = S(E), g.set(E);
  }
  function S(E) {
    let w, y;
    return p.subscribe((T) => w = T), _.subscribe((T) => y = T), !w || !y ? E : E.sort((T, N) => {
      let Z = T[w], W = N[w];
      return Z == null && (Z = ""), W == null && (W = ""), y === "asc" ? Z.toString().localeCompare(W.toString()) : W.toString().localeCompare(Z.toString());
    });
  }
  function C(E) {
    p.update((w) => {
      if (w === E)
        _.update((y) => y === "asc" ? "desc" : y === "desc" ? null : "asc");
      else
        return _.set("asc"), E;
      return E;
    }), A();
  }
  g.set(d()), oI(t, {
    get "table$aria-label"() {
      return c();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (w) => {
      Kf(w, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return o();
        },
        set closed(y) {
          o(y);
        }
      });
    },
    children: (w, y) => {
      var T = kl(), N = re(T);
      dI(N, {
        children: (W, D) => {
          var x = kl(), O = re(x);
          Ts(O, {
            class: "header-title-row",
            children: (k, K) => {
              var P = ve(), F = re(P);
              Nn(F, 17, u, Bi, (H, ne) => {
                Oa(H, {
                  onclick: () => l(ne).sortable && C(l(ne).field),
                  get style() {
                    return l(ne).headerStyle;
                  },
                  children: (Ae, j) => {
                    var z = OE(), J = be(z), ee = be(J), G = Pn(ee, !0), ie = _e(ee, 2);
                    {
                      var xe = ($) => {
                        var ae = ve(), Ue = re(ae);
                        {
                          var Oe = (Ve) => {
                            var ke = ve(), Ne = re(ke);
                            {
                              var U = (se) => {
                                var Re = xE();
                                L(se, Re);
                              }, Y = (se) => {
                                var Re = wE();
                                L(se, Re);
                              };
                              pe(Ne, (se) => {
                                r() === "asc" ? se(U) : r() === "desc" && se(Y, 1);
                              });
                            }
                            L(Ve, ke);
                          };
                          pe(Ue, (Ve) => {
                            n() === l(ne).field && r() !== null && Ve(Oe);
                          });
                        }
                        L($, ae);
                      };
                      pe(ie, ($) => {
                        l(ne).sortable && $(xe);
                      });
                    }
                    Le(() => {
                      Ut(z, `min-width: ${l(ne).minWidth ?? 0 ?? ""}`), lt(G, l(ne).headerName);
                    }), L(Ae, z);
                  },
                  $$slots: { default: !0 }
                });
              }), L(k, P);
            },
            $$slots: { default: !0 }
          });
          var R = _e(O, 2);
          {
            var V = (k) => {
              Ts(k, {
                class: "header-filter-row",
                children: (K, P) => {
                  var F = ve(), H = re(F);
                  Nn(H, 17, u, Bi, (ne, Ae) => {
                    Oa(ne, {
                      children: (j, z) => {
                        var J = ve(), ee = re(J);
                        {
                          var G = (ie) => {
                            var xe = kl(), $ = re(xe);
                            {
                              var ae = (Ve) => {
                                var ke = RE();
                                Le(() => Or(ke, "placeholder", `${f()} ${l(Ae).headerName}`)), Zn("input", ke, () => A()), Ka(ke, () => h[l(Ae).field], (Ne) => h[l(Ae).field] = Ne), L(Ve, ke);
                              };
                              pe($, (Ve) => {
                                l(Ae).filterType === "text" && Ve(ae);
                              });
                            }
                            var Ue = _e($, 2);
                            {
                              var Oe = (Ve) => {
                                var ke = LE();
                                Le(() => Or(ke, "placeholder", `${f()} ${l(Ae).headerName}`)), Zn("input", ke, () => A()), Ka(ke, () => h[l(Ae).field], (Ne) => h[l(Ae).field] = Ne), L(Ve, ke);
                              };
                              pe(Ue, (Ve) => {
                                l(Ae).filterType === "number" && Ve(Oe);
                              });
                            }
                            L(ie, xe);
                          };
                          pe(ee, (ie) => {
                            l(Ae).filter && ie(G);
                          });
                        }
                        L(j, J);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(K, F);
                },
                $$slots: { default: !0 }
              });
            };
            pe(R, (k) => {
              l(I) && k(V);
            });
          }
          L(W, x);
        },
        $$slots: { default: !0 }
      });
      var Z = _e(N, 2);
      vI(Z, {
        children: (W, D) => {
          var x = ve(), O = re(x);
          {
            var R = (k) => {
              Ts(k, {
                children: (K, P) => {
                  Oa(K, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (F, H) => {
                      var ne = Dt();
                      Le(() => lt(ne, v())), L(F, ne);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, V = (k) => {
              var K = ve(), P = re(K);
              Nn(P, 1, i, Bi, (F, H) => {
                Ts(F, {
                  children: (ne, Ae) => {
                    var j = ve(), z = re(j);
                    Nn(z, 17, u, (J) => J.field, (J, ee) => {
                      var G = ve(), ie = re(G);
                      {
                        var xe = (ae) => {
                          Oa(ae, {
                            children: (Ue, Oe) => {
                              var Ve = NE();
                              Nn(Ve, 21, m, Bi, (ke, Ne) => {
                                var U = ve(), Y = re(U);
                                {
                                  var se = (je) => {
                                    Ys(je, {
                                      get content() {
                                        return l(Ne).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (St, Bn) => {
                                        {
                                          let me = /* @__PURE__ */ fe(() => l(Ne).disabled(l(H)));
                                          ep(St, {
                                            get iconComponent() {
                                              return l(Ne).iconComponent;
                                            },
                                            get iconStyles() {
                                              return l(Ne).iconStyles;
                                            },
                                            callback: () => l(Ne).callback(l(H)),
                                            get disabled() {
                                              return l(me);
                                            },
                                            get ariaLabel() {
                                              return l(Ne).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (je) => {
                                    Ys(je, {
                                      get content() {
                                        return l(Ne).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (St, Bn) => {
                                        {
                                          let me = /* @__PURE__ */ fe(() => l(Ne).disabled(l(H)));
                                          Xb(St, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => l(Ne).callback(l(H)),
                                            get disabled() {
                                              return l(me);
                                            },
                                            get ariaLabel() {
                                              return l(Ne).ariaLabel;
                                            },
                                            children: (Ie, Q) => {
                                              var te = ve(), Be = re(te);
                                              {
                                                var ht = (tt) => {
                                                  M_(tt, { svgStyles: "margin: unset" });
                                                }, It = (tt) => {
                                                  Wf(tt, { svgStyles: "margin: unset" });
                                                }, Pt = (tt) => {
                                                  H_(tt, { svgStyles: "margin: unset" });
                                                }, qt = (tt) => {
                                                  k_(tt, { svgStyles: "margin: unset" });
                                                }, Hr = (tt) => {
                                                  G_(tt, { svgStyles: "margin: unset" });
                                                }, gt = (tt) => {
                                                  W_(tt, { svgStyles: "margin: unset" });
                                                }, Ht = (tt) => {
                                                  K_(tt, { svgStyles: "margin: unset" });
                                                }, Kt = (tt) => {
                                                  J_(tt, { svgStyles: "margin: unset" });
                                                }, er = (tt) => {
                                                  F_(tt, { svgStyles: "margin: unset" });
                                                };
                                                pe(Be, (tt) => {
                                                  l(Ne).icon === "add" ? tt(ht) : l(Ne).icon === "cancel" ? tt(It, 1) : l(Ne).icon === "download" ? tt(Pt, 2) : l(Ne).icon === "find-in-page" ? tt(qt, 3) : l(Ne).icon === "remove" ? tt(Hr, 4) : l(Ne).icon === "edit" ? tt(gt, 5) : l(Ne).icon === "delete" ? tt(Ht, 6) : l(Ne).icon === "archive" ? tt(Kt, 7) : tt(er, -1);
                                                });
                                              }
                                              L(Ie, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  pe(Y, (je) => {
                                    l(Ne).iconComponent ? je(se) : je(Re, -1);
                                  });
                                }
                                L(ke, U);
                              }), L(Ue, Ve);
                            },
                            $$slots: { default: !0 }
                          });
                        }, $ = (ae) => {
                          Oa(ae, {
                            get numeric() {
                              return l(ee).numeric;
                            },
                            get style() {
                              return l(ee).cellStyle;
                            },
                            children: (Ue, Oe) => {
                              var Ve = ve(), ke = re(Ve);
                              {
                                var Ne = (se) => {
                                  const Re = /* @__PURE__ */ fe(() => l(ee).cellRenderer);
                                  var je = ve(), St = re(je);
                                  Mr(St, () => l(Re), (Bn, me) => {
                                    me(Bn, it(
                                      {
                                        get row() {
                                          return l(H);
                                        },
                                        get value() {
                                          return l(H)[l(ee).field];
                                        },
                                        get col() {
                                          return l(ee);
                                        }
                                      },
                                      () => l(ee).cellRendererProps ?? {}
                                    ));
                                  }), L(se, je);
                                }, U = (se) => {
                                  var Re = Dt();
                                  Le((je) => lt(Re, je), [
                                    () => l(ee).valueFormatter(l(H)[l(ee).field])
                                  ]), L(se, Re);
                                }, Y = (se) => {
                                  var Re = Dt();
                                  Le(() => lt(Re, l(H)[l(ee).field] ?? "")), L(se, Re);
                                };
                                pe(ke, (se) => {
                                  l(ee).cellRenderer ? se(Ne) : l(ee).valueFormatter ? se(U, 1) : se(Y, -1);
                                });
                              }
                              L(Ue, Ve);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        pe(ie, (ae) => {
                          l(ee).field === "actions" ? ae(xe) : ae($, -1);
                        });
                      }
                      L(J, G);
                    }), L(ne, j);
                  },
                  $$slots: { default: !0 }
                });
              }), L(k, K);
            };
            pe(O, (k) => {
              i().length === 0 ? k(R) : k(V, -1);
            });
          }
          L(W, x);
        },
        $$slots: { default: !0 }
      }), L(w, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
yn(["input"]);
function Et(t) {
  return typeof t == "function";
}
function ic(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Bl = ic(function(t) {
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
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var o = ia(s), c = o.next(); !c.done; c = o.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              c && !c.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (Et(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Bl ? g.errors : [g];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = ia(m), v = f.next(); !v.done; v = f.next()) {
            var h = v.value;
            try {
              Du(h);
            } catch (g) {
              a = a ?? [], g instanceof Bl ? a = Rr(Rr([], aa(a)), aa(g.errors)) : a.push(g);
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
        throw new Bl(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Du(e);
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
}(), Yf = fs.EMPTY;
function Zf(t) {
  return t instanceof fs || t && "closed" in t && Et(t.remove) && Et(t.add) && Et(t.unsubscribe);
}
function Du(t) {
  Et(t) ? t() : t.unsubscribe();
}
var DE = {
  Promise: void 0
}, PE = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Rr([t, e], aa(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Qf(t) {
  PE.setTimeout(function() {
    throw t;
  });
}
function Pu() {
}
function Ps(t) {
  t();
}
var ac = function(t) {
  vn(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Zf(n) && n.add(r)) : r.destination = kE, r;
  }
  return e.create = function(n, r, i) {
    return new Za(n, r, i);
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
}(fs), HE = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ws(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ws(r);
      }
    else
      ws(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ws(n);
      }
  }, t;
}(), Za = function(t) {
  vn(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return Et(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new HE(s), a;
  }
  return e;
}(ac);
function ws(t) {
  Qf(t);
}
function UE(t) {
  throw t;
}
var kE = {
  closed: !0,
  next: Pu,
  error: UE,
  complete: Pu
}, sc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ga(t) {
  return t;
}
function BE(t) {
  return t.length === 0 ? ga : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var hn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = VE(e) ? e : new Za(e, n, r);
    return Ps(function() {
      var s = i, o = s.operator, c = s.source;
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
    return n = Hu(n), new n(function(i, a) {
      var s = new Za({
        next: function(o) {
          try {
            e(o);
          } catch (c) {
            a(c), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[sc] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return BE(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Hu(e), new e(function(r, i) {
      var a;
      n.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Hu(t) {
  var e;
  return (e = t ?? DE.Promise) !== null && e !== void 0 ? e : Promise;
}
function FE(t) {
  return t && Et(t.next) && Et(t.error) && Et(t.complete);
}
function VE(t) {
  return t && t instanceof ac || FE(t) && Zf(t);
}
function GE(t) {
  return Et(t == null ? void 0 : t.lift);
}
function kn(t) {
  return function(e) {
    if (GE(e))
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
function Un(t, e, n, r, i) {
  return new jE(t, e, n, r, i);
}
var jE = function(t) {
  vn(e, t);
  function e(n, r, i, a, s, o) {
    var c = t.call(this, n) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = o, c._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, c._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
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
}(ac), WE = ic(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), vl = function(t) {
  vn(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Uu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new WE();
  }, e.prototype.next = function(n) {
    var r = this;
    Ps(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = ia(r.currentObservers), o = s.next(); !o.done; o = s.next()) {
            var c = o.value;
            c.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            o && !o.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Ps(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Ps(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, o = i.observers;
    return a || s ? Yf : (this.currentObservers = null, o.push(n), new fs(function() {
      r.currentObservers = null, Js(o, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new hn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Uu(n, r);
  }, e;
}(hn), Uu = function(t) {
  vn(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Yf;
  }, e;
}(vl), ku = function(t) {
  vn(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, a = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(vl), lc = {
  now: function() {
    return (lc.delegate || Date).now();
  },
  delegate: void 0
}, qE = function(t) {
  vn(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = lc);
    var a = t.call(this) || this;
    return a._bufferSize = n, a._windowTime = r, a._timestampProvider = i, a._buffer = [], a._infiniteTimeWindow = !0, a._infiniteTimeWindow = r === 1 / 0, a._bufferSize = Math.max(1, n), a._windowTime = Math.max(1, r), a;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, a = r._buffer, s = r._infiniteTimeWindow, o = r._timestampProvider, c = r._windowTime;
    i || (a.push(n), !s && a.push(o.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, a = i._infiniteTimeWindow, s = i._buffer, o = s.slice(), c = 0; c < o.length && !n.closed; c += a ? 1 : 2)
      n.next(o[c]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, a = n._buffer, s = n._infiniteTimeWindow, o = (s ? 1 : 2) * r;
    if (r < 1 / 0 && o < a.length && a.splice(0, a.length - o), !s) {
      for (var c = i.now(), u = 0, d = 1; d < a.length && a[d] <= c; d += 2)
        u = d;
      u && a.splice(0, u + 1);
    }
  }, e;
}(vl), KE = function(t) {
  vn(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(fs), Bu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Rr([t, e], aa(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, zE = function(t) {
  vn(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, s = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(s, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), Bu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Bu.clearInterval(r);
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
    } catch (s) {
      i = !0, a = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Js(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(KE), Fu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = lc.now, t;
}(), XE = function(t) {
  vn(e, t);
  function e(n, r) {
    r === void 0 && (r = Fu.now);
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
}(Fu), YE = new XE(zE), ZE = new hn(function(t) {
  return t.complete();
});
function QE(t) {
  return t && Et(t.schedule);
}
function Jf(t) {
  return t[t.length - 1];
}
function JE(t) {
  return Et(Jf(t)) ? t.pop() : void 0;
}
function ml(t) {
  return QE(Jf(t)) ? t.pop() : void 0;
}
var $f = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function eh(t) {
  return Et(t == null ? void 0 : t.then);
}
function th(t) {
  return Et(t[sc]);
}
function nh(t) {
  return Symbol.asyncIterator && Et(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function rh(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $E() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ih = $E();
function ah(t) {
  return Et(t == null ? void 0 : t[ih]);
}
function sh(t) {
  return Pm(this, arguments, function() {
    var n, r, i, a;
    return ff(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Gi(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Gi(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Gi(i)];
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
function lh(t) {
  return Et(t == null ? void 0 : t.getReader);
}
function Pr(t) {
  if (t instanceof hn)
    return t;
  if (t != null) {
    if (th(t))
      return e0(t);
    if ($f(t))
      return t0(t);
    if (eh(t))
      return n0(t);
    if (nh(t))
      return oh(t);
    if (ah(t))
      return r0(t);
    if (lh(t))
      return i0(t);
  }
  throw rh(t);
}
function e0(t) {
  return new hn(function(e) {
    var n = t[sc]();
    if (Et(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function t0(t) {
  return new hn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function n0(t) {
  return new hn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Qf);
  });
}
function r0(t) {
  return new hn(function(e) {
    var n, r;
    try {
      for (var i = ia(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
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
function oh(t) {
  return new hn(function(e) {
    a0(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function i0(t) {
  return oh(sh(t));
}
function a0(t, e) {
  var n, r, i, a;
  return Dm(this, void 0, void 0, function() {
    var s, o;
    return ff(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Hm(t), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
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
function Zr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function ch(t, e) {
  return e === void 0 && (e = 0), kn(function(n, r) {
    n.subscribe(Un(r, function(i) {
      return Zr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Zr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Zr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function uh(t, e) {
  return e === void 0 && (e = 0), kn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function s0(t, e) {
  return Pr(t).pipe(uh(e), ch(e));
}
function l0(t, e) {
  return Pr(t).pipe(uh(e), ch(e));
}
function o0(t, e) {
  return new hn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function c0(t, e) {
  return new hn(function(n) {
    var r;
    return Zr(n, e, function() {
      r = t[ih](), Zr(n, e, function() {
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
      return Et(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function dh(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new hn(function(n) {
    Zr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Zr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function u0(t, e) {
  return dh(sh(t), e);
}
function d0(t, e) {
  if (t != null) {
    if (th(t))
      return s0(t, e);
    if ($f(t))
      return o0(t, e);
    if (eh(t))
      return l0(t, e);
    if (nh(t))
      return dh(t, e);
    if (ah(t))
      return c0(t, e);
    if (lh(t))
      return u0(t, e);
  }
  throw rh(t);
}
function hs(t, e) {
  return e ? d0(t, e) : Pr(t);
}
function $s() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ml(t);
  return hs(t, n);
}
function fn(t, e) {
  return kn(function(n, r) {
    var i = 0;
    n.subscribe(Un(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var f0 = Array.isArray;
function h0(t, e) {
  return f0(e) ? t.apply(void 0, Rr([], aa(e))) : t(e);
}
function v0(t) {
  return fn(function(e) {
    return h0(t, e);
  });
}
var m0 = Array.isArray, g0 = Object.getPrototypeOf, b0 = Object.prototype, p0 = Object.keys;
function _0(t) {
  if (t.length === 1) {
    var e = t[0];
    if (m0(e))
      return { args: e, keys: null };
    if (I0(e)) {
      var n = p0(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function I0(t) {
  return t && typeof t == "object" && g0(t) === b0;
}
function E0(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Vu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ml(t), r = JE(t), i = _0(t), a = i.args, s = i.keys;
  if (a.length === 0)
    return hs([], n);
  var o = new hn(S0(a, n, s ? function(c) {
    return E0(s, c);
  } : ga));
  return r ? o.pipe(v0(r)) : o;
}
function S0(t, e, n) {
  return n === void 0 && (n = ga), function(r) {
    Gu(e, function() {
      for (var i = t.length, a = new Array(i), s = i, o = i, c = function(d) {
        Gu(e, function() {
          var m = hs(t[d], e), f = !1;
          m.subscribe(Un(r, function(v) {
            a[d] = v, f || (f = !0, o--), o || r.next(n(a.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, u = 0; u < i; u++)
        c(u);
    }, r);
  };
}
function Gu(t, e, n) {
  t ? Zr(n, t, e) : e();
}
function A0(t, e, n, r, i, a, s, o) {
  var c = [], u = 0, d = 0, m = !1, f = function() {
    m && !c.length && !u && e.complete();
  }, v = function(g) {
    return u < r ? h(g) : c.push(g);
  }, h = function(g) {
    u++;
    var p = !1;
    Pr(n(g, d++)).subscribe(Un(e, function(_) {
      e.next(_);
    }, function() {
      p = !0;
    }, void 0, function() {
      if (p)
        try {
          u--;
          for (var _ = function() {
            var I = c.shift();
            s || h(I);
          }; c.length && u < r; )
            _();
          f();
        } catch (I) {
          e.error(I);
        }
    }));
  };
  return t.subscribe(Un(e, v, function() {
    m = !0, f();
  })), function() {
  };
}
function el(t, e, n) {
  return n === void 0 && (n = 1 / 0), Et(e) ? el(function(r, i) {
    return fn(function(a, s) {
      return e(r, a, i, s);
    })(Pr(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), kn(function(r, i) {
    return A0(r, i, t, n);
  }));
}
function y0(t) {
  return el(ga, t);
}
function T0() {
  return y0(1);
}
function ju() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return T0()(hs(t, ml(t)));
}
function tl(t) {
  return kn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Un(n, void 0, void 0, function(s) {
      a = Pr(t(s, tl(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function C0(t, e) {
  return Et(e) ? el(t, e, 1) : el(t, 1);
}
function x0(t, e) {
  return e === void 0 && (e = YE), kn(function(n, r) {
    var i = null, a = null, s = null, o = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function c() {
      var u = s + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      o();
    }
    n.subscribe(Un(r, function(u) {
      a = u, s = e.now(), i || (i = e.schedule(c, t), r.add(i));
    }, function() {
      o(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function Qa(t) {
  return t <= 0 ? function() {
    return ZE;
  } : kn(function(e, n) {
    var r = 0;
    e.subscribe(Un(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function w0(t, e) {
  return e === void 0 && (e = ga), t = t ?? O0, kn(function(n, r) {
    var i, a = !0;
    n.subscribe(Un(r, function(s) {
      var o = e(s);
      (a || !t(i, o)) && (a = !1, i = o, r.next(s));
    }));
  });
}
function O0(t, e) {
  return t === e;
}
function R0(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new vl();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, a = t.resetOnComplete, s = a === void 0 ? !0 : a, o = t.resetOnRefCountZero, c = o === void 0 ? !0 : o;
  return function(u) {
    var d, m, f, v = 0, h = !1, g = !1, p = function() {
      m == null || m.unsubscribe(), m = void 0;
    }, _ = function() {
      p(), d = f = void 0, h = g = !1;
    }, I = function() {
      var A = d;
      _(), A == null || A.unsubscribe();
    };
    return kn(function(A, S) {
      v++, !g && !h && p();
      var C = f = f ?? n();
      S.add(function() {
        v--, v === 0 && !g && !h && (m = Fl(I, c));
      }), C.subscribe(S), !d && v > 0 && (d = new Za({
        next: function(E) {
          return C.next(E);
        },
        error: function(E) {
          g = !0, p(), m = Fl(_, i, E), C.error(E);
        },
        complete: function() {
          h = !0, p(), m = Fl(_, s), C.complete();
        }
      }), Pr(A).subscribe(d));
    })(u);
  };
}
function Fl(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Za({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return Pr(e.apply(void 0, Rr([], aa(n)))).subscribe(i);
  }
}
function Wu(t, e, n) {
  var r, i = !1;
  return r = t, R0({
    connector: function() {
      return new qE(r, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function qu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ml(t);
  return kn(function(r, i) {
    (n ? ju(t, r, n) : ju(t, r)).subscribe(i);
  });
}
function Ku(t, e) {
  return kn(function(n, r) {
    var i = null, a = 0, s = !1, o = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Un(r, function(c) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      Pr(t(c, d)).subscribe(i = Un(r, function(m) {
        return r.next(e ? e(c, m, d, u++) : m);
      }, function() {
        i = null, o();
      }));
    }, function() {
      s = !0, o();
    }));
  });
}
function zu(t, e, n) {
  var r = Et(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? kn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var o = !0;
    i.subscribe(Un(a, function(c) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, c), a.next(c);
    }, function() {
      var c;
      o = !1, (c = r.complete) === null || c === void 0 || c.call(r), a.complete();
    }, function(c) {
      var u;
      o = !1, (u = r.error) === null || u === void 0 || u.call(r, c), a.error(c);
    }, function() {
      var c, u;
      o && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : ga;
}
function fh(t) {
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
var L0 = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var o = n.getAllResponseHeaders();
    this.responseHeaders = o ? o.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = fh(n);
    var c = e.loaded, u = e.total;
    this.loaded = c, this.total = u;
  }
  return t;
}(), nl = ic(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = fh(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), N0 = function() {
  function t(e, n) {
    return nl.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(nl.prototype), t;
}();
function M0(t, e) {
  return Li({ method: "GET", url: t, headers: e });
}
function D0(t, e, n) {
  return Li({ method: "POST", url: t, body: e, headers: n });
}
function P0(t, e) {
  return Li({ method: "DELETE", url: t, headers: e });
}
function H0(t, e, n) {
  return Li({ method: "PUT", url: t, body: e, headers: n });
}
function U0(t, e, n) {
  return Li({ method: "PATCH", url: t, body: e, headers: n });
}
var k0 = fn(function(t) {
  return t.response;
});
function B0(t, e) {
  return k0(Li({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Li = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return V0(n);
  };
  return t.get = M0, t.post = D0, t.delete = P0, t.put = H0, t.patch = U0, t.getJSON = B0, t;
}(), F0 = "upload", Xu = "download", Vl = "loadstart", Gl = "progress", Yu = "load";
function V0(t) {
  return new hn(function(e) {
    var n, r, i = Ze({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, o = i.headers, c = i.url;
    if (!c)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (c.includes("?")) {
        var d = c.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(V, k) {
          return u.set(k, V);
        }), c = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), c = c + "?" + u;
    }
    var m = {};
    if (o)
      for (var f in o)
        o.hasOwnProperty(f) && (m[f.toLowerCase()] = o[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in m) && (m["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, g = i.xsrfCookieName, p = i.xsrfHeaderName;
    if ((h || !v) && g && p) {
      var _ = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      _ && (m[p] = _);
    }
    var I = G0(s, m), A = Ze(Ze({}, i), {
      url: c,
      headers: m,
      body: I
    }), S;
    S = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var C = t.progressSubscriber, E = t.includeDownloadProgress, w = E === void 0 ? !1 : E, y = t.includeUploadProgress, T = y === void 0 ? !1 : y, N = function(V, k) {
        S.addEventListener(V, function() {
          var K, P = k();
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, P), e.error(P);
        });
      };
      N("timeout", function() {
        return new N0(S, A);
      }), N("abort", function() {
        return new nl("aborted", S, A);
      });
      var Z = function(V, k) {
        return new L0(k, S, A, V + "_" + k.type);
      }, W = function(V, k, K) {
        V.addEventListener(k, function(P) {
          e.next(Z(K, P));
        });
      };
      T && [Vl, Gl, Yu].forEach(function(V) {
        return W(S.upload, V, F0);
      }), C && [Vl, Gl].forEach(function(V) {
        return S.upload.addEventListener(V, function(k) {
          var K;
          return (K = C == null ? void 0 : C.next) === null || K === void 0 ? void 0 : K.call(C, k);
        });
      }), w && [Vl, Gl].forEach(function(V) {
        return W(S, V, Xu);
      });
      var D = function(V) {
        var k = "ajax error" + (V ? " " + V : "");
        e.error(new nl(k, S, A));
      };
      S.addEventListener("error", function(V) {
        var k;
        (k = C == null ? void 0 : C.error) === null || k === void 0 || k.call(C, V), D();
      }), S.addEventListener(Yu, function(V) {
        var k, K, P = S.status;
        if (P < 400) {
          (k = C == null ? void 0 : C.complete) === null || k === void 0 || k.call(C);
          var F = void 0;
          try {
            F = Z(Xu, V);
          } catch (H) {
            e.error(H);
            return;
          }
          e.next(F), e.complete();
        } else
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, V), D(P);
      });
    }
    var x = A.user, O = A.method, R = A.async;
    x ? S.open(O, c, R, x, A.password) : S.open(O, c, R), R && (S.timeout = A.timeout, S.responseType = A.responseType), "withCredentials" in S && (S.withCredentials = A.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && S.setRequestHeader(f, m[f]);
    return I ? S.send(I) : S.send(), function() {
      S && S.readyState !== 4 && S.abort();
    };
  });
}
function G0(t, e) {
  var n;
  if (!t || typeof t == "string" || X0(t) || Y0(t) || W0(t) || q0(t) || K0(t) || Z0(t))
    return t;
  if (z0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var j0 = Object.prototype.toString;
function oc(t, e) {
  return j0.call(t) === "[object " + e + "]";
}
function W0(t) {
  return oc(t, "ArrayBuffer");
}
function q0(t) {
  return oc(t, "File");
}
function K0(t) {
  return oc(t, "Blob");
}
function z0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function X0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Y0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Z0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Q0 {
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
const J0 = new Q0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), $0 = [J0], eS = $0[0].getUrl();
class cc {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? eS;
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
class hh {
  constructor(e = new cc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: o }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${tS(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: o ?? "json"
    }), this.rxjsRequest = (n) => $s(n).pipe(
      fn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      C0(
        (r) => Li(r).pipe(
          fn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      fn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Zt = (t) => encodeURIComponent(`${t}`), tS = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Zt(e)}=${Zt(r)}`).join("&") : `${Zt(e)}=${Zt(n)}`
).join("&"), cn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class nS extends hh {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: s, body: o }, c) {
    cn(e, "id", "archiveResource"), cn(n, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...s != null ? { "X-filename": String(s) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Zt(e)).replace("{version}", Zt(n)),
      method: "POST",
      headers: u,
      body: o
    }, c == null ? void 0 : c.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    cn(e, "id", "archiveSclResource"), cn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Zt(e)).replace("{version}", Zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    cn(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Zt(e)),
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
class rS extends hh {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    cn(e, "locationId", "assignResourceToLocation"), cn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Zt(e)).replace("{uuid}", Zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    cn(e, "location", "createLocation");
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
    cn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Zt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    cn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Zt(e)),
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
    cn(e, "locationId", "unassignResourceFromLocation"), cn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Zt(e)).replace("{uuid}", Zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    cn(e, "locationId", "updateLocation"), cn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Zt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class iS {
  constructor(e, n, r, i, a, s, o, c, u, d, m, f, v) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = s, this._type = o, this._voltage = c, this._modifiedAt = u, this._archivedAt = d, this._contentType = m, this._version = f, this._fields = v;
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
const ci = class ci {
  constructor() {
    pt(this, "baseUrl", "/compas-scl-data-service");
    pt(this, "apiClient");
    this.apiClient = this.generateApiClient();
  }
  static getInstance() {
    return ci.instance || (ci.instance = new ci()), ci.instance;
  }
  searchArchive(e) {
    return this.apiClient.searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Qa(1),
      fn((n) => n.resources),
      fn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.apiClient.retrieveArchivedResourceHistory({ id: e }).pipe(
      Qa(1),
      fn((n) => n.versions),
      fn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return hs(
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
    return new iS(
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
    const e = new cc({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new nS(e);
  }
};
pt(ci, "instance");
let rl = ci;
const ui = class ui {
  constructor() {
    pt(this, "baseUrl", "/compas-scl-data-service");
  }
  static getInstance() {
    return ui.instance || (ui.instance = new ui()), ui.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Qa(1)
    );
  }
  generateApiClient() {
    const e = new cc({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new rS(e);
  }
};
pt(ui, "instance");
let Eo = ui;
function aS(t, e) {
  ye(e, !0);
  const n = rl.getInstance(), r = { store: rn([]) };
  let i = /* @__PURE__ */ ce(!1);
  const a = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Author",
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: o
    },
    {
      headerName: "Note",
      field: "note",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
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
  ], s = [
    {
      icon: "download",
      callback: (u) => c(u),
      disabled: () => !1
    }
  ];
  function o(u) {
    return new Date(u).toLocaleDateString();
  }
  nt(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Qa(1), zu((u) => {
      r.store.set(u), q(i, !0);
    })).subscribe();
  });
  function c(u) {
    var m;
    let d;
    u.fields && u.fields.length && (d = (m = u.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : m.value), n.findByUUIDAndVersion(d, u.type, u.version).pipe(
      Qa(1),
      zu((f) => {
        const v = window.URL.createObjectURL(f), h = document.createElement("a");
        h.href = v, h.download = u.filename, h.style.display = "none", document.body.appendChild(h), h.click(), document.body.removeChild(h), window.URL.revokeObjectURL(v);
      }),
      tl((f) => (console.error(f), Ya.error("Download failed", "An error occurred while trying to download the resource.", 5e3), $s(void 0)))
    ).subscribe();
  }
  ME(t, {
    get columnDefs() {
      return a;
    },
    get store() {
      return r;
    },
    get loadingDone() {
      return l(i);
    },
    get rowActions() {
      return s;
    }
  }), Te();
}
var sS = /* @__PURE__ */ de("<span><!></span>"), lS = /* @__PURE__ */ de("<!> <br/>", 1), oS = /* @__PURE__ */ de("<i> </i>"), cS = /* @__PURE__ */ de('<div class="result-container"><div class="content"><!></div></div>');
function uS(t, e) {
  ye(e, !0);
  let n = b(e, "searchResults", 19, () => []), r = b(e, "noResourcesLabel", 3, "No resources found.");
  var i = cS(), a = be(i), s = be(a);
  {
    var o = (u) => {
      var d = ve(), m = re(d);
      Nn(m, 17, n, (f) => f.uuid, (f, v) => {
        var h = lS(), g = re(h);
        qf(g, {
          get title() {
            return l(v).name;
          },
          open: !0,
          content: (_) => {
            var I = sS(), A = be(I);
            aS(A, {
              get searchResult() {
                return l(v);
              }
            }), L(_, I);
          },
          $$slots: { content: !0 }
        }), L(f, h);
      }), L(u, d);
    }, c = (u) => {
      var d = oS(), m = Pn(d, !0);
      Le(() => lt(m, r())), L(u, d);
    };
    pe(s, (u) => {
      n().length ? u(o) : u(c, -1);
    });
  }
  L(t, i), Te();
}
db({ en: Ab, de: bb });
var dS = /* @__PURE__ */ de("<span><!></span>"), fS = /* @__PURE__ */ de('<!> <div class="separator svelte-1gp5xzm"></div>', 1), hS = /* @__PURE__ */ de('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function vS(t, e) {
  ye(e, !0);
  const n = () => fr(ub, "$_", r), [r, i] = Dr(), a = rl.getInstance(), s = Eo.getInstance();
  let o = /* @__PURE__ */ ce(oe(/* @__PURE__ */ new Map())), c = /* @__PURE__ */ ce(!0), u = /* @__PURE__ */ ce(oe(/* @__PURE__ */ new Map())), d = /* @__PURE__ */ ce(oe([
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
  ])), m = /* @__PURE__ */ ce("");
  const f = new ku([]), v = new ku(""), h = v.pipe(
    qu(),
    // emit the initial value immediately
    Ku((D, x) => x === 0 ? [D] : v.pipe(x0(300)))
  ), g = s.listLocations().pipe(
    fn((D) => {
      const x = new Map(D.map((R) => [R.key, R.name])), O = l(d).find((R) => R.key === "location");
      return O && (O.options = D.map((R) => ({ value: R.key, label: R.name }))), q(u, x, !0), x;
    }),
    tl((D) => (console.error("Error fetching locations:", D), Ya.error("Failed to load locations."), $s(/* @__PURE__ */ new Map()))),
    Wu(1)
  );
  function p(D) {
    return D ? l(u).get(D) ?? D ?? "Unknown" : "Unknown";
  }
  function _(D, x) {
    const O = {
      uuid: void 0,
      type: void 0,
      name: void 0,
      location: void 0,
      from: void 0,
      to: void 0
    };
    return D.forEach((R) => {
      if (R.value) {
        if (R.type === "date") {
          const V = new Date(R.value);
          R.key === "from" && (O.from = V.toISOString()), R.key === "to" && (V.setHours(23, 59, 59, 999), O.to = V.toISOString());
          return;
        }
        R.key in O && (O[R.key] = R.value);
      }
    }), x && x.trim() !== "" && (O.name = x.trim()), O;
  }
  const A = Vu([f, h]).pipe(w0((D, x) => JSON.stringify(D) === JSON.stringify(x)), fn(([D, x]) => _(D, x))).pipe(
    Ku((D) => Vu({
      results: a.searchArchive(D).pipe(tl((x) => (console.error("Search error:", x), Ya.error("Search failed. Please try again later."), $s([])))),
      locations: g
    }).pipe(
      fn(({ results: x, locations: O }) => {
        const R = /* @__PURE__ */ new Map();
        for (const V of x) {
          const k = V.location ?? "Default";
          R.has(k) || R.set(k, []), R.get(k).push(V);
        }
        return { grouped: R, locations: O };
      }),
      fn((x) => ({ loading: !1, ...x })),
      qu({ loading: !0 })
      // loading state at start of each search
    )),
    Wu(1)
  );
  nt(() => {
    const D = A.subscribe((x) => {
      q(c, x.loading, !0), x.loading || (q(o, x.grouped, !0), q(u, x.locations, !0));
    });
    return () => D.unsubscribe();
  });
  var S = hS(), C = re(S), E = be(C), w = be(E);
  CE(w, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(l(d)),
    onSearchInput: () => v.next(l(m)),
    get filters() {
      return l(d);
    },
    set filters(D) {
      q(d, D, !0);
    },
    get searchText() {
      return l(m);
    },
    set searchText(D) {
      q(m, D, !0);
    }
  });
  var y = _e(E, 2), T = be(y);
  {
    var N = (D) => {
      Kf(D, { indeterminate: !0 });
    }, Z = (D) => {
      var x = ve(), O = re(x);
      {
        var R = (V) => {
          var k = ve(), K = re(k);
          Nn(K, 18, () => l(o), (P) => P, (P, F) => {
            var H = fS(), ne = re(H);
            {
              const Ae = (z) => {
                var J = dS(), ee = be(J);
                {
                  let G = /* @__PURE__ */ fe(() => n()("no_resources_found"));
                  uS(ee, {
                    get searchResults() {
                      return F[1];
                    },
                    get noResourcesLabel() {
                      return l(G);
                    }
                  });
                }
                L(z, J);
              };
              let j = /* @__PURE__ */ fe(() => p(F[0]));
              qf(ne, {
                open: !0,
                get title() {
                  return l(j);
                },
                content: Ae,
                $$slots: { content: !0 }
              });
            }
            L(P, H);
          }), L(V, k);
        };
        pe(O, (V) => {
          l(o).size && V(R);
        });
      }
      L(D, x);
    };
    pe(T, (D) => {
      l(c) ? D(N) : D(Z, -1);
    });
  }
  var W = _e(C, 2);
  jI(W, {}), L(t, S), Te(), i();
}
const vh = "archive-explorer", mh = "0.0.1";
var mS = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function gS(t, e) {
  ye(e, !0);
  let n = b(e, "dev", 3, !1);
  var r = mS(), i = re(r);
  {
    var a = (c) => {
      vS(c, {});
    };
    pe(i, (c) => {
      (e.doc || n()) && c(a);
    });
  }
  var s = _e(i, 2), o = _e(s, 2);
  Le(() => {
    Oc(s, vh), Oc(o, mh);
  }), L(t, r), Te();
}
var Zi;
class ES extends HTMLElement {
  constructor() {
    super();
    Ke(this, Zi);
    pt(this, "_doc");
    pt(this, "_editCount");
    Ge(this, Zi, /* @__PURE__ */ ce(oe({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return l(B(this, Zi));
  }
  set props(n) {
    q(B(this, Zi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount;
    const n = bS();
    this.shadowRoot.appendChild(n);
    const r = () => Vv(gS, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Zi = new WeakMap();
function bS() {
  const t = `${vh}-v${mh}-style`, e = pS(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function pS() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  ES as default
};
