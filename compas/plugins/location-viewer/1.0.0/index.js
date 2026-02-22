var hd = Object.defineProperty;
var Ko = (t) => {
  throw TypeError(t);
};
var vd = (t, e, n) => e in t ? hd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var fi = (t, e, n) => vd(t, typeof e != "symbol" ? e + "" : e, n), Os = (t, e, n) => e.has(t) || Ko("Cannot " + n);
var Q = (t, e, n) => (Os(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ke = (t, e, n) => e.has(t) ? Ko("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), De = (t, e, n, r) => (Os(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Ft = (t, e, n) => (Os(t, e, "access private method"), n);
const wt = Symbol(), md = "http://www.w3.org/1999/xhtml", gd = "http://www.w3.org/2000/svg", pd = "@attach", ru = !1;
var ms = Array.isArray, bd = Array.prototype.indexOf, Io = Array.from, Za = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, iu = Object.getOwnPropertyDescriptors, _d = Object.prototype, yd = Array.prototype, Eo = Object.getPrototypeOf, Zo = Object.isExtensible;
function bi(t) {
  return typeof t == "function";
}
const ve = () => {
};
function Id(t) {
  return t();
}
function Ya(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function au() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const $t = 2, Ao = 4, gs = 8, xr = 16, ur = 32, ii = 64, So = 128, In = 256, Qa = 512, Gt = 1024, fn = 2048, Tr = 4096, On = 8192, ai = 16384, ps = 32768, wr = 65536, Yo = 1 << 17, Ed = 1 << 18, Gi = 1 << 19, su = 1 << 20, Zs = 1 << 21, bs = 1 << 22, Yr = 1 << 23, Vn = Symbol("$state"), ou = Symbol("legacy props"), Ad = Symbol(""), _i = new class extends Error {
  constructor() {
    super(...arguments);
    fi(this, "name", "StaleReactionError");
    fi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Co(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Cd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function xd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Td(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function wd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ld(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Od() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Rd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Md() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Dd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Hd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Pd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Nd = !1;
function lu(t) {
  return t === this.v;
}
function xo(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function uu(t) {
  return !xo(t, this.v);
}
let ji = !1, Ud = !1;
function kd() {
  ji = !0;
}
let rt = null;
function Mi(t) {
  rt = t;
}
function ue(t) {
  return (
    /** @type {T} */
    cu().get(t)
  );
}
function te(t, e) {
  return cu().set(t, e), e;
}
function we(t, e = !1, n) {
  rt = {
    p: rt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ji && !e ? { s: null, u: null, $: [] } : null
  };
}
function Le(t) {
  var e = (
    /** @type {ComponentContext} */
    rt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Tu(r);
  }
  return t !== void 0 && (e.x = t), rt = e.p, t ?? /** @type {T} */
  {};
}
function Ea() {
  return !ji || rt !== null && rt.l === null;
}
function cu(t) {
  return rt === null && Co(), rt.c ?? (rt.c = new Map(Bd(rt) || void 0));
}
function Bd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let qr = [];
function du() {
  var t = qr;
  qr = [], Ya(t);
}
function or(t) {
  if (qr.length === 0 && !ca) {
    var e = qr;
    queueMicrotask(() => {
      e === qr && du();
    });
  }
  qr.push(t);
}
function Fd() {
  for (; qr.length > 0; )
    du();
}
const Vd = /* @__PURE__ */ new WeakMap();
function fu(t) {
  var e = ke;
  if (e === null)
    return Ne.f |= Yr, t;
  if (e.f & ps)
    Di(t, e);
  else {
    if (!(e.f & So))
      throw !e.parent && t instanceof Error && hu(t), t;
    e.b.error(t);
  }
}
function Di(t, e) {
  for (; e !== null; ) {
    if (e.f & So)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && hu(t), t;
}
function hu(t) {
  const e = Vd.get(t);
  e && (Za(t, "message", {
    value: e.message
  }), Za(t, "stack", {
    value: e.stack
  }));
}
const Ra = /* @__PURE__ */ new Set();
let et = null, Ga = null, Ht = null, Ys = /* @__PURE__ */ new Set(), Bn = [], _s = null, Qs = !1, ca = !1;
var xi, Ti, zr, _a, wi, Li, Wr, Oi, ya, Ia, En, Js, ja, $s;
const fs = class fs {
  constructor() {
    Ke(this, En);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    fi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ke(this, xi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ke(this, Ti, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ke(this, zr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ke(this, _a, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ke(this, wi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ke(this, Li, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ke(this, Wr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ke(this, Oi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ke(this, ya, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ke(this, Ia, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    fi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Bn = [], Ga = null, this.apply();
    for (const s of e)
      Ft(this, En, Js).call(this, s);
    if (Q(this, zr) === 0) {
      var n = Ht;
      Ft(this, En, $s).call(this);
      var r = Q(this, Li), i = Q(this, Wr);
      De(this, Li, []), De(this, Wr, []), De(this, Oi, []), Ga = this, et = null, Ht = n, Qo(r), Qo(i), Ga = null, (a = Q(this, _a)) == null || a.resolve();
    } else
      Ft(this, En, ja).call(this, Q(this, Li)), Ft(this, En, ja).call(this, Q(this, Wr)), Ft(this, En, ja).call(this, Q(this, Oi));
    Ht = null;
    for (const s of Q(this, wi))
      ma(s);
    De(this, wi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    Q(this, xi).has(e) || Q(this, xi).set(e, n), this.current.set(e, e.v), Ht == null || Ht.set(e, e.v);
  }
  activate() {
    et = this;
  }
  deactivate() {
    et = null, Ht = null;
  }
  flush() {
    if (Bn.length > 0) {
      if (this.activate(), vu(), et !== null && et !== this)
        return;
    } else Q(this, zr) === 0 && Ft(this, En, $s).call(this);
    this.deactivate();
    for (const e of Ys)
      if (Ys.delete(e), e(), et !== null)
        break;
  }
  increment() {
    De(this, zr, Q(this, zr) + 1);
  }
  decrement() {
    De(this, zr, Q(this, zr) - 1);
    for (const e of Q(this, ya))
      Yt(e, fn), ti(e);
    for (const e of Q(this, Ia))
      Yt(e, Tr), ti(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    Q(this, Ti).add(e);
  }
  settled() {
    return (Q(this, _a) ?? De(this, _a, au())).promise;
  }
  static ensure() {
    if (et === null) {
      const e = et = new fs();
      Ra.add(et), ca || fs.enqueue(() => {
        et === e && e.flush();
      });
    }
    return et;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    or(e);
  }
  apply() {
  }
};
xi = new WeakMap(), Ti = new WeakMap(), zr = new WeakMap(), _a = new WeakMap(), wi = new WeakMap(), Li = new WeakMap(), Wr = new WeakMap(), Oi = new WeakMap(), ya = new WeakMap(), Ia = new WeakMap(), En = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Js = function(e) {
  var c;
  e.f ^= Gt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (ur | ii)) !== 0, a = i && (r & Gt) !== 0, s = a || (r & On) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Gt : r & Ao ? Q(this, Wr).push(n) : r & Gt || (r & bs && ((c = n.b) != null && c.is_pending()) ? Q(this, wi).push(n) : Es(n) && (n.f & xr && Q(this, Oi).push(n), ma(n)));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ja = function(e) {
  for (const n of e)
    (n.f & fn ? Q(this, ya) : Q(this, Ia)).push(n), Yt(n, Gt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
$s = function() {
  var e;
  for (const n of Q(this, Ti))
    n();
  if (Q(this, Ti).clear(), Ra.size > 1) {
    Q(this, xi).clear();
    let n = !0;
    for (const r of Ra) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [s, u] of this.current) {
        if (r.current.has(s))
          if (n && u !== r.current.get(s))
            r.current.set(s, u);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          mu(s, a);
        if (Bn.length > 0) {
          et = r, r.apply();
          for (const s of Bn)
            Ft(e = r, En, Js).call(e, s);
          Bn = [], r.deactivate();
        }
      }
    }
    et = null;
  }
  Ra.delete(this);
};
let sr = fs;
function Gd(t) {
  var e = ca;
  ca = !0;
  try {
    for (var n; ; ) {
      if (Fd(), Bn.length === 0 && (et == null || et.flush(), Bn.length === 0))
        return _s = null, /** @type {T} */
        n;
      vu();
    }
  } finally {
    ca = e;
  }
}
function vu() {
  var t = Ai;
  Qs = !0;
  try {
    var e = 0;
    for (tl(!0); Bn.length > 0; ) {
      var n = sr.ensure();
      if (e++ > 1e3) {
        var r, i;
        jd();
      }
      n.process(Bn), Er.clear();
    }
  } finally {
    Qs = !1, tl(t), _s = null;
  }
}
function jd() {
  try {
    wd();
  } catch (t) {
    Di(t, _s);
  }
}
let nr = null;
function Qo(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ai | On)) && Es(r) && (nr = [], ma(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ou(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        Er.clear();
        for (const i of nr)
          ma(i);
        nr = [];
      }
    }
    nr = null;
  }
}
function mu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & $t ? mu(
        /** @type {Derived} */
        n,
        e
      ) : r & (bs | xr) && gu(n, e) && (Yt(n, fn), ti(
        /** @type {Effect} */
        n
      ));
    }
}
function gu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & $t && gu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ti(t) {
  for (var e = _s = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Qs && e === ke && n & xr)
      return;
    if (n & (ii | ur)) {
      if (!(n & Gt)) return;
      e.f ^= Gt;
    }
  }
  Bn.push(e);
}
function qd(t) {
  let e = 0, n = ni(0), r;
  return () => {
    of() && (o(n), Ca(() => (e === 0 && (r = Rn(() => t(() => da(n)))), e += 1, () => {
      or(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, da(n));
      });
    })));
  };
}
var zd = wr | Gi | So;
function Wd(t, e, n) {
  new Xd(t, e, n);
}
var Tn, _n, yo, Nn, Xr, Un, yn, rn, kn, gr, Kr, pr, Zr, br, hs, vs, Jt, Kd, Zd, qa, za, eo;
class Xd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ke(this, Jt);
    /** @type {Boundary | null} */
    fi(this, "parent");
    Ke(this, Tn, !1);
    /** @type {TemplateNode} */
    Ke(this, _n);
    /** @type {TemplateNode | null} */
    Ke(this, yo, null);
    /** @type {BoundaryProps} */
    Ke(this, Nn);
    /** @type {((anchor: Node) => void)} */
    Ke(this, Xr);
    /** @type {Effect} */
    Ke(this, Un);
    /** @type {Effect | null} */
    Ke(this, yn, null);
    /** @type {Effect | null} */
    Ke(this, rn, null);
    /** @type {Effect | null} */
    Ke(this, kn, null);
    /** @type {DocumentFragment | null} */
    Ke(this, gr, null);
    Ke(this, Kr, 0);
    Ke(this, pr, 0);
    Ke(this, Zr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ke(this, br, null);
    Ke(this, hs, () => {
      Q(this, br) && Hi(Q(this, br), Q(this, Kr));
    });
    Ke(this, vs, qd(() => (De(this, br, ni(Q(this, Kr))), () => {
      De(this, br, null);
    })));
    De(this, _n, e), De(this, Nn, n), De(this, Xr, r), this.parent = /** @type {Effect} */
    ke.b, De(this, Tn, !!Q(this, Nn).pending), De(this, Un, Rr(() => {
      ke.b = this;
      {
        try {
          De(this, yn, Vt(() => r(Q(this, _n))));
        } catch (i) {
          this.error(i);
        }
        Q(this, pr) > 0 ? Ft(this, Jt, za).call(this) : De(this, Tn, !1);
      }
    }, zd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return Q(this, Tn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!Q(this, Nn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Ft(this, Jt, eo).call(this, e), De(this, Kr, Q(this, Kr) + e), Ys.add(Q(this, hs));
  }
  get_effect_pending() {
    return Q(this, vs).call(this), o(
      /** @type {Source<number>} */
      Q(this, br)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = Q(this, Nn).onerror;
    let r = Q(this, Nn).failed;
    if (Q(this, Zr) || !n && !r)
      throw e;
    Q(this, yn) && (Nt(Q(this, yn)), De(this, yn, null)), Q(this, rn) && (Nt(Q(this, rn)), De(this, rn, null)), Q(this, kn) && (Nt(Q(this, kn)), De(this, kn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Pd();
        return;
      }
      i = !0, a && Dd(), sr.ensure(), De(this, Kr, 0), Q(this, kn) !== null && Ar(Q(this, kn), () => {
        De(this, kn, null);
      }), De(this, Tn, this.has_pending_snippet()), De(this, yn, Ft(this, Jt, qa).call(this, () => (De(this, Zr, !1), Vt(() => Q(this, Xr).call(this, Q(this, _n)))))), Q(this, pr) > 0 ? Ft(this, Jt, za).call(this) : De(this, Tn, !1);
    };
    var u = Ne;
    try {
      an(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Di(l, Q(this, Un) && Q(this, Un).parent);
    } finally {
      an(u);
    }
    r && or(() => {
      De(this, kn, Ft(this, Jt, qa).call(this, () => {
        De(this, Zr, !0);
        try {
          return Vt(() => {
            r(
              Q(this, _n),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Di(
            l,
            /** @type {Effect} */
            Q(this, Un).parent
          ), null;
        } finally {
          De(this, Zr, !1);
        }
      }));
    });
  }
}
Tn = new WeakMap(), _n = new WeakMap(), yo = new WeakMap(), Nn = new WeakMap(), Xr = new WeakMap(), Un = new WeakMap(), yn = new WeakMap(), rn = new WeakMap(), kn = new WeakMap(), gr = new WeakMap(), Kr = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), br = new WeakMap(), hs = new WeakMap(), vs = new WeakMap(), Jt = new WeakSet(), Kd = function() {
  try {
    De(this, yn, Vt(() => Q(this, Xr).call(this, Q(this, _n))));
  } catch (e) {
    this.error(e);
  }
  De(this, Tn, !1);
}, Zd = function() {
  const e = Q(this, Nn).pending;
  e && (De(this, rn, Vt(() => e(Q(this, _n)))), sr.enqueue(() => {
    De(this, yn, Ft(this, Jt, qa).call(this, () => (sr.ensure(), Vt(() => Q(this, Xr).call(this, Q(this, _n)))))), Q(this, pr) > 0 ? Ft(this, Jt, za).call(this) : (Ar(
      /** @type {Effect} */
      Q(this, rn),
      () => {
        De(this, rn, null);
      }
    ), De(this, Tn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
qa = function(e) {
  var n = ke, r = Ne, i = rt;
  qn(Q(this, Un)), an(Q(this, Un)), Mi(Q(this, Un).ctx);
  try {
    return e();
  } catch (a) {
    return fu(a), null;
  } finally {
    qn(n), an(r), Mi(i);
  }
}, za = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    Q(this, Nn).pending
  );
  Q(this, yn) !== null && (De(this, gr, document.createDocumentFragment()), Yd(Q(this, yn), Q(this, gr))), Q(this, rn) === null && De(this, rn, Vt(() => e(Q(this, _n))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
eo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ft(n = this.parent, Jt, eo).call(n, e);
    return;
  }
  De(this, pr, Q(this, pr) + e), Q(this, pr) === 0 && (De(this, Tn, !1), Q(this, rn) && Ar(Q(this, rn), () => {
    De(this, rn, null);
  }), Q(this, gr) && (Q(this, _n).before(Q(this, gr)), De(this, gr, null)), or(() => {
    sr.ensure().flush();
  }));
};
function Yd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sa(n)
    );
    e.append(n), n = i;
  }
}
function pu(t, e, n) {
  const r = Ea() ? Aa : To;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = et, a = (
    /** @type {Effect} */
    ke
  ), s = Qd();
  Promise.all(e.map((u) => /* @__PURE__ */ Jd(u))).then((u) => {
    s();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ai || Di(l, a);
    }
    i == null || i.deactivate(), to();
  }).catch((u) => {
    Di(u, a);
  });
}
function Qd() {
  var t = ke, e = Ne, n = rt, r = et;
  return function() {
    qn(t), an(e), Mi(n), r == null || r.activate();
  };
}
function to() {
  qn(null), an(null), Mi(null);
}
// @__NO_SIDE_EFFECTS__
function Aa(t) {
  var e = $t | fn, n = Ne !== null && Ne.f & $t ? (
    /** @type {Derived} */
    Ne
  ) : null;
  return ke === null || n !== null && n.f & In ? e |= In : ke.f |= Gi, {
    ctx: rt,
    deps: null,
    effects: null,
    equals: lu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      wt
    ),
    wv: 0,
    parent: n ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Jd(t, e) {
  let n = (
    /** @type {Effect | null} */
    ke
  );
  n === null && Sd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ni(
    /** @type {V} */
    wt
  ), s = !Ne, u = /* @__PURE__ */ new Map();
  return cf(() => {
    var f;
    var l = au();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(to);
    } catch (m) {
      l.reject(m), to();
    }
    var c = (
      /** @type {Batch} */
      et
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(_i), u.delete(c), u.set(c, l)));
    const h = (m, v = void 0) => {
      if (d || c.activate(), v)
        v !== _i && (a.f |= Yr, Hi(a, v));
      else {
        a.f & Yr && (a.f ^= Yr), Hi(a, m);
        for (const [g, b] of u) {
          if (u.delete(g), g === c) break;
          b.reject(_i);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), ys(() => {
    for (const l of u.values())
      l.reject(_i);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === i ? l(a) : c(i);
      }
      d.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ Aa(t);
  return Du(e), e;
}
// @__NO_SIDE_EFFECTS__
function To(t) {
  const e = /* @__PURE__ */ Aa(t);
  return e.equals = uu, e;
}
function bu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Nt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $d(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & $t))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function wo(t) {
  var e, n = ke;
  qn($d(t));
  try {
    bu(t), e = Uu(t);
  } finally {
    qn(n);
  }
  return e;
}
function _u(t) {
  var e = wo(t);
  if (t.equals(e) || (t.v = e, t.wv = Pu()), !si)
    if (Ht !== null)
      Ht.set(t, t.v);
    else {
      var n = (_r || t.f & In) && t.deps !== null ? Tr : Gt;
      Yt(t, n);
    }
}
const Er = /* @__PURE__ */ new Map();
function ni(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: lu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = ni(t);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function yu(t, e = !1, n = !0) {
  var i;
  const r = ni(t);
  return e || (r.equals = uu), ji && n && rt !== null && rt.l !== null && ((i = rt.l).s ?? (i.s = [])).push(r), r;
}
function z(t, e, n = !1) {
  Ne !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ln || Ne.f & Yo) && Ea() && Ne.f & ($t | xr | bs | Yo) && !(Zt != null && Zt.includes(t)) && Md();
  let r = n ? be(e) : e;
  return Hi(t, r);
}
function Hi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    si ? Er.set(t, e) : Er.set(t, n), t.v = e;
    var r = sr.ensure();
    r.capture(t, n), t.f & $t && (t.f & fn && wo(
      /** @type {Derived} */
      t
    ), Yt(t, t.f & In ? Tr : Gt)), t.wv = Pu(), Iu(t, fn), Ea() && ke !== null && ke.f & Gt && !(ke.f & (ur | ii)) && (bn === null ? hf([t]) : bn.push(t));
  }
  return e;
}
function da(t) {
  z(t, t.v + 1);
}
function Iu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ea(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], u = s.f;
      if (!(!r && s === ke)) {
        var l = (u & fn) === 0;
        l && Yt(s, e), u & $t ? Iu(
          /** @type {Derived} */
          s,
          Tr
        ) : l && (u & xr && nr !== null && nr.push(
          /** @type {Effect} */
          s
        ), ti(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function be(t) {
  if (typeof t != "object" || t === null || Vn in t)
    return t;
  const e = Eo(t);
  if (e !== _d && e !== yd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ms(t), i = /* @__PURE__ */ me(0), a = Qr, s = (u) => {
    if (Qr === a)
      return u();
    var l = Ne, c = Qr;
    an(null), rl(a);
    var d = u();
    return an(l), rl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Od();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ me(c.value);
          return n.set(l, h), h;
        }) : z(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ me(wt));
            n.set(l, d), da(i);
          }
        } else
          z(c, wt), da(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === Vn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (m = Ir(u, l)) != null && m.writable) && (d = s(() => {
          var v = be(h ? u[l] : wt), g = /* @__PURE__ */ me(v);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === wt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = o(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        var f;
        if (l === Vn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== wt || Reflect.has(u, l);
        if (c !== void 0 || ke !== null && (!d || (f = Ir(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? be(u[l]) : wt, v = /* @__PURE__ */ me(m);
            return v;
          }), n.set(l, c));
          var h = o(c);
          if (h === wt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var S;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? z(v, wt) : m in u && (v = s(() => /* @__PURE__ */ me(wt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (S = Ir(u, l)) != null && S.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), z(h, be(c)), n.set(l, h));
        else {
          f = h.v !== wt;
          var g = s(() => be(c));
          z(h, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= I.v && z(I, A + 1);
          }
          da(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== wt;
        });
        for (var [c, d] of n)
          d.v !== wt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Rd();
      }
    }
  );
}
function Jo(t) {
  try {
    if (t !== null && typeof t == "object" && Vn in t)
      return t[Vn];
  } catch {
  }
  return t;
}
function ef(t, e) {
  return Object.is(Jo(t), Jo(e));
}
var $o, Eu, Au, Su, Cu;
function tf() {
  if ($o === void 0) {
    $o = window, Eu = document, Au = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Su = Ir(e, "firstChild").get, Cu = Ir(e, "nextSibling").get, Zo(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Zo(n) && (n.__t = void 0);
  }
}
function Lr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pi(t) {
  return Su.call(t);
}
// @__NO_SIDE_EFFECTS__
function Sa(t) {
  return Cu.call(t);
}
function ge(t, e) {
  return /* @__PURE__ */ Pi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Pi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Sa(n) : n;
  }
}
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Sa(r);
  return r;
}
function nf(t) {
  t.textContent = "";
}
function Lo() {
  return !1;
}
function rf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, or(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let el = !1;
function af() {
  el || (el = !0, document.addEventListener(
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
            (e = n.__on_r) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function qi(t) {
  var e = Ne, n = ke;
  an(null), qn(null);
  try {
    return t();
  } finally {
    an(e), qn(n);
  }
}
function Oo(t, e, n, r = n) {
  t.addEventListener(e, () => qi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), af();
}
function xu(t) {
  ke === null && Ne === null && Td(), Ne !== null && Ne.f & In && ke === null && xd(), si && Cd();
}
function sf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function zn(t, e, n, r = !0) {
  var i = ke;
  i !== null && i.f & On && (t |= On);
  var a = {
    ctx: rt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | fn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ma(a), a.f |= ps;
    } catch (l) {
      throw Nt(a), l;
    }
  else e !== null && ti(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Gi) && (s = s.first), s !== null && (s.parent = i, i !== null && sf(s, i), Ne !== null && Ne.f & $t && !(t & ii))) {
      var u = (
        /** @type {Derived} */
        Ne
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function of() {
  return Ne !== null && !Ln;
}
function ys(t) {
  const e = zn(gs, null, !1);
  return Yt(e, Gt), e.teardown = t, e;
}
function Se(t) {
  xu();
  var e = (
    /** @type {Effect} */
    ke.f
  ), n = !Ne && (e & ur) !== 0 && (e & ps) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      rt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Tu(t);
}
function Tu(t) {
  return zn(Ao | su, t, !1);
}
function lf(t) {
  return xu(), zn(gs | su, t, !0);
}
function uf(t) {
  sr.ensure();
  const e = zn(ii | Gi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(e, () => {
      Nt(e), r(void 0);
    }) : (Nt(e), r(void 0));
  });
}
function Or(t) {
  return zn(Ao, t, !1);
}
function cf(t) {
  return zn(bs | Gi, t, !0);
}
function Ca(t, e = 0) {
  return zn(gs | e, t, !0);
}
function Oe(t, e = [], n = []) {
  pu(e, n, (r) => {
    zn(gs, () => t(...r.map(o)), !0);
  });
}
function Rr(t, e = 0) {
  var n = zn(xr | e, t, !0);
  return n;
}
function Vt(t, e = !0) {
  return zn(ur | Gi, t, !0, e);
}
function wu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = si, r = Ne;
    nl(!0), an(null);
    try {
      e.call(null);
    } finally {
      nl(n), an(r);
    }
  }
}
function Lu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && qi(() => {
      i.abort(_i);
    });
    var r = n.next;
    n.f & ii ? n.parent = null : Nt(n, e), n = r;
  }
}
function df(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ur || Nt(e), e = n;
  }
}
function Nt(t, e = !0) {
  var n = !1;
  (e || t.f & Ed) && t.nodes_start !== null && t.nodes_end !== null && (ff(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Lu(t, e && !n), Ja(t, 0), Yt(t, ai);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  wu(t);
  var i = t.parent;
  i !== null && i.first !== null && Ou(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function ff(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sa(t)
    );
    t.remove(), t = n;
  }
}
function Ou(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ar(t, e) {
  var n = [];
  Ro(t, n, !0), Ru(n, () => {
    Nt(t), e && e();
  });
}
function Ru(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ro(t, e, n) {
  if (!(t.f & On)) {
    if (t.f ^= On, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & wr) !== 0 || (r.f & ur) !== 0;
      Ro(r, e, a ? n : !1), r = i;
    }
  }
}
function Is(t) {
  Mu(t, !0);
}
function Mu(t, e) {
  if (t.f & On) {
    t.f ^= On, t.f & Gt || (Yt(t, fn), ti(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & wr) !== 0 || (n.f & ur) !== 0;
      Mu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ai = !1;
function tl(t) {
  Ai = t;
}
let si = !1;
function nl(t) {
  si = t;
}
let Ne = null, Ln = !1;
function an(t) {
  Ne = t;
}
let ke = null;
function qn(t) {
  ke = t;
}
let Zt = null;
function Du(t) {
  Ne !== null && (Zt === null ? Zt = [t] : Zt.push(t));
}
let Wt = null, cn = 0, bn = null;
function hf(t) {
  bn = t;
}
let Hu = 1, va = 0, Qr = va;
function rl(t) {
  Qr = t;
}
let _r = !1;
function Pu() {
  return ++Hu;
}
function Es(t) {
  var h;
  var e = t.f;
  if (e & fn)
    return !0;
  if (e & Tr) {
    var n = t.deps, r = (e & In) !== 0;
    if (n !== null) {
      var i, a, s = (e & Qa) !== 0, u = r && ke !== null && !_r, l = n.length;
      if ((s || u) && (ke === null || !(ke.f & ai))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Qa), u && d !== null && !(d.f & In) && (c.f ^= In);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Es(
          /** @type {Derived} */
          a
        ) && _u(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || ke !== null && !_r) && Yt(t, Gt);
  }
  return !1;
}
function Nu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Zt != null && Zt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? Nu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Yt(a, fn) : a.f & Gt && Yt(a, Tr), ti(
        /** @type {Effect} */
        a
      ));
    }
}
function Uu(t) {
  var g;
  var e = Wt, n = cn, r = bn, i = Ne, a = _r, s = Zt, u = rt, l = Ln, c = Qr, d = t.f;
  Wt = /** @type {null | Value[]} */
  null, cn = 0, bn = null, _r = (d & In) !== 0 && (Ln || !Ai || Ne === null), Ne = d & (ur | ii) ? null : t, Zt = null, Mi(t.ctx), Ln = !1, Qr = ++va, t.ac !== null && (qi(() => {
    t.ac.abort(_i);
  }), t.ac = null);
  try {
    t.f |= Zs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Wt !== null) {
      var v;
      if (Ja(t, cn), m !== null && cn > 0)
        for (m.length = cn + Wt.length, v = 0; v < Wt.length; v++)
          m[cn + v] = Wt[v];
      else
        t.deps = m = Wt;
      if (!_r || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = cn; v < m.length; v++)
          ((g = m[v]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && cn < m.length && (Ja(t, cn), m.length = cn);
    if (Ea() && bn !== null && !Ln && m !== null && !(t.f & ($t | Tr | fn)))
      for (v = 0; v < /** @type {Source[]} */
      bn.length; v++)
        Nu(
          bn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (va++, bn !== null && (r === null ? r = bn : r.push(.../** @type {Source[]} */
    bn))), t.f & Yr && (t.f ^= Yr), f;
  } catch (b) {
    return fu(b);
  } finally {
    t.f ^= Zs, Wt = e, cn = n, bn = r, Ne = i, _r = a, Zt = s, Mi(u), Ln = l, Qr = c;
  }
}
function vf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = bd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Wt === null || !Wt.includes(e)) && (Yt(e, Tr), e.f & (In | Qa) || (e.f ^= Qa), bu(
    /** @type {Derived} **/
    e
  ), Ja(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ja(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      vf(t, n[r]);
}
function ma(t) {
  var e = t.f;
  if (!(e & ai)) {
    Yt(t, Gt);
    var n = ke, r = Ai;
    ke = t, Ai = !0;
    try {
      e & xr ? df(t) : Lu(t), wu(t);
      var i = Uu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Hu;
      var a;
      ru && Ud && t.f & fn && t.deps;
    } finally {
      Ai = r, ke = n;
    }
  }
}
async function ku() {
  await Promise.resolve(), Gd();
}
function o(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (Ne !== null && !Ln) {
    var r = ke !== null && (ke.f & ai) !== 0;
    if (!r && !(Zt != null && Zt.includes(t))) {
      var i = Ne.deps;
      if (Ne.f & Zs)
        t.rv < va && (t.rv = va, Wt === null && i !== null && i[cn] === t ? cn++ : Wt === null ? Wt = [t] : (!_r || !Wt.includes(t)) && Wt.push(t));
      else {
        (Ne.deps ?? (Ne.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ne] : a.includes(Ne) || a.push(Ne);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), u = s.parent;
    u !== null && !(u.f & In) && (s.f ^= In);
  }
  if (si) {
    if (Er.has(t))
      return Er.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Gt) && s.reactions !== null || Bu(s)) && (l = wo(s)), Er.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Ht != null && Ht.has(s))
      return Ht.get(s);
    Es(s) && _u(s);
  }
  if (Ht != null && Ht.has(t))
    return Ht.get(t);
  if (t.f & Yr)
    throw t.v;
  return t.v;
}
function Bu(t) {
  if (t.v === wt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Er.has(e) || e.f & $t && Bu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Rn(t) {
  var e = Ln;
  try {
    return Ln = !0, t();
  } finally {
    Ln = e;
  }
}
const mf = -7169;
function Yt(t, e) {
  t.f = t.f & mf | e;
}
function Fu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Vn in t)
      no(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Vn in n && no(n);
      }
  }
}
function no(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        no(t[r], e);
      } catch {
      }
    const n = Eo(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = iu(n);
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
const Vu = /* @__PURE__ */ new Set(), ro = /* @__PURE__ */ new Set();
function Mo(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || la.call(e, a), !a.cancelBubble)
      return qi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? or(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function gf(t, e, n, r = {}) {
  var i = Mo(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function oa(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = Mo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ys(() => {
    e.removeEventListener(t, s, a);
  });
}
function hn(t) {
  for (var e = 0; e < t.length; e++)
    Vu.add(t[e]);
  for (var n of ro)
    n(t);
}
let il = null;
function la(t) {
  var A;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  il = t;
  var s = 0, u = il === t && t.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    Za(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ne, h = ke;
    an(null), qn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (ms(g)) {
              var [b, ...I] = g;
              b.apply(a, [t, ...I]);
            } else
              g.call(a, t);
        } catch (S) {
          f ? m.push(S) : f = S;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let S of m)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, an(d), qn(h);
    }
  }
}
function Gu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ni(t, e) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Gu(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Pi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Au ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pi(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ni(u, l);
    } else
      Ni(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function pf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Gu(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Pi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Pi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ni(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function sn(t, e) {
  return /* @__PURE__ */ pf(t, e, "svg");
}
function Pt(t = "") {
  {
    var e = Lr(t + "");
    return Ni(e, e), e;
  }
}
function $() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Lr();
  return t.append(e, n), Ni(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function bf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const _f = [
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
function yf(t) {
  return _f.includes(t);
}
const If = {
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
function Ef(t) {
  return t = t.toLowerCase(), If[t] ?? t;
}
const Af = ["touchstart", "touchmove"];
function Sf(t) {
  return Af.includes(t);
}
let $a = !0;
function al(t) {
  $a = t;
}
function at(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Cf(t, e) {
  return xf(t, e);
}
const hi = /* @__PURE__ */ new Map();
function xf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  tf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!u.has(m)) {
        u.add(m);
        var v = Sf(m);
        e.addEventListener(m, la, { passive: v });
        var g = hi.get(m);
        g === void 0 ? (document.addEventListener(m, la, { passive: v }), hi.set(m, 1)) : hi.set(m, g + 1);
      }
    }
  };
  l(Io(Vu)), ro.add(l);
  var c = void 0, d = uf(() => {
    var h = n ?? e.appendChild(Lr());
    return Wd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          we({});
          var m = (
            /** @type {ComponentContext} */
            rt
          );
          m.c = a;
        }
        i && (r.$$events = i), $a = s, c = t(f, r) || {}, $a = !0, a && Le();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, la);
        var m = (
          /** @type {number} */
          hi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, la), hi.delete(f)) : hi.set(f, m);
      }
      ro.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Tf.set(c, d), c;
}
let Tf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = ve, a;
  Rr(() => {
    i !== (i = e()) && (a && (Nt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, wr);
}
function lt(t) {
  rt === null && Co(), ji && rt.l !== null ? wf(rt).m.push(t) : Se(() => {
    const e = Rn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Sn(t) {
  rt === null && Co(), lt(() => () => Rn(t));
}
function wf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ne(t, e, n = !1) {
  var r = t, i = null, a = null, s = wt, u = n ? wr : 0, l = !1;
  const c = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && Is(m), v && Ar(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var g = Lo(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = Lr())), s ? i ?? (i = v && Vt(() => v(b))) : a ?? (a = v && Vt(() => v(b))), g) {
        var I = (
          /** @type {Batch} */
          et
        ), A = s ? i : a, S = s ? a : i;
        A && I.skipped_effects.delete(A), S && I.skipped_effects.add(S), I.add_callback(h);
      } else
        h();
    }
  };
  Rr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let Jr = null;
function sl(t) {
  Jr = t;
}
function yi(t, e) {
  return e;
}
function Lf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Ro(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    nf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Pn(t, e[0].prev, e[a - 1].next);
  }
  Ru(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Pn(t, d.prev, d.next)), Nt(d.e, !u);
    }
  });
}
function Fn(t, e, n, r, i, a = null) {
  var s = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(Lr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ To(() => {
    var I = n();
    return ms(I) ? I : I == null ? [] : Io(I);
  }), v, g;
  function b() {
    Of(
      g,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? Is(d) : d = Vt(() => a(s)) : d !== null && Ar(d, () => {
      d = null;
    }));
  }
  Rr(() => {
    g ?? (g = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(m);
    var I = v.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var A, S, _, E;
      if (Lo()) {
        var C = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          et
        );
        for (S = 0; S < I; S += 1) {
          _ = v[S], E = r(_, S);
          var x = u.items.get(E) ?? f.get(E);
          x ? e & 3 && ju(x, _, S, e) : (A = qu(
            null,
            u,
            null,
            null,
            _,
            E,
            S,
            i,
            e,
            n,
            !0
          ), f.set(E, A)), C.add(E);
        }
        for (const [y, R] of u.items)
          C.has(y) || T.skipped_effects.add(R.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Of(t, e, n, r, i, a, s, u, l) {
  var J, D, L, N;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, g, b = null, I, A = [], S = [], _, E, C, T;
  if (c)
    for (T = 0; T < h; T += 1)
      _ = e[T], E = u(_, T), C = f.get(E), C !== void 0 && ((J = C.a) == null || J.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(C));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], E = u(_, T), C = f.get(E), C === void 0) {
      var x = r.get(E);
      if (x !== void 0) {
        r.delete(E), f.set(E, x);
        var y = b ? b.next : v;
        Pn(n, b, x), Pn(n, x, y), Rs(x, y, i), b = x;
      } else {
        var R = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = qu(
          R,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          T,
          a,
          s,
          l
        );
      }
      f.set(E, b), A = [], S = [], v = b.next;
      continue;
    }
    if (d && ju(C, _, T, s), C.e.f & On && (Is(C.e), c && ((D = C.a) == null || D.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(C))), C !== v) {
      if (g !== void 0 && g.has(C)) {
        if (A.length < S.length) {
          var U = S[0], P;
          b = U.prev;
          var F = A[0], pe = A[A.length - 1];
          for (P = 0; P < A.length; P += 1)
            Rs(A[P], U, i);
          for (P = 0; P < S.length; P += 1)
            g.delete(S[P]);
          Pn(n, F.prev, pe.next), Pn(n, b, F), Pn(n, pe, U), v = U, b = pe, T -= 1, A = [], S = [];
        } else
          g.delete(C), Rs(C, v, i), Pn(n, C.prev, C.next), Pn(n, C, b === null ? n.first : b.next), Pn(n, b, C), b = C;
        continue;
      }
      for (A = [], S = []; v !== null && v.k !== E; )
        v.e.f & On || (g ?? (g = /* @__PURE__ */ new Set())).add(v), S.push(v), v = v.next;
      if (v === null)
        continue;
      C = v;
    }
    A.push(C), b = C, v = C.next;
  }
  if (v !== null || g !== void 0) {
    for (var G = g === void 0 ? [] : Io(g); v !== null; )
      v.e.f & On || G.push(v), v = v.next;
    var k = G.length;
    if (k > 0) {
      var H = s & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < k; T += 1)
          (L = G[T].a) == null || L.measure();
        for (T = 0; T < k; T += 1)
          (N = G[T].a) == null || N.fix();
      }
      Lf(n, G, H);
    }
  }
  c && or(() => {
    var Ee;
    if (I !== void 0)
      for (C of I)
        (Ee = C.a) == null || Ee.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var K of r.values())
    Nt(K.e);
  r.clear();
}
function ju(t, e, n, r) {
  r & 1 && Hi(t.v, e), r & 2 ? Hi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function qu(t, e, n, r, i, a, s, u, l, c, d) {
  var h = Jr, f = (l & 1) !== 0, m = (l & 16) === 0, v = f ? m ? /* @__PURE__ */ yu(i, !1, !1) : ni(i) : i, g = l & 2 ? ni(s) : s, b = {
    i: g,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  Jr = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Lr());
    }
    return b.e = Vt(() => u(
      /** @type {Node} */
      t,
      v,
      g,
      c
    ), Nd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    Jr = h;
  }
}
function Rs(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== null && a !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Sa(a)
    );
    i.before(a), a = s;
  }
}
function Pn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function oi(t, e, n) {
  var r = t, i, a, s = null, u = null;
  function l() {
    a && (Ar(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Rr(() => {
    if (i !== (i = e())) {
      var c = Lo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Lr()), a && et.skipped_effects.add(a)), u = Vt(() => n(d, i));
      }
      c ? et.add_callback(l) : l();
    }
  }, wr);
}
function ol(t, e, n, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, h = Jr;
  Rr(() => {
    const f = e() || null;
    var m = f === "svg" ? gd : null;
    if (f !== s) {
      var v = Jr;
      sl(h), d && (f === null ? Ar(d, () => {
        d = null, u = null;
      }) : f === u ? Is(d) : (Nt(d), al(!1))), f && f !== u && (d = Vt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Ni(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(Lr())
          );
          r(l, g);
        }
        ke.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), al(!0), sl(v);
    }
  }, wr);
}
function Ue(t, e, n) {
  Or(() => {
    var r = Rn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ca(() => {
        var s = n();
        Fu(s), i && xo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Rf(t, e) {
  var n = void 0, r;
  Rr(() => {
    n !== (n = e()) && (r && (Nt(r), r = null), n && (r = Vt(() => {
      Or(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function zu(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = zu(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Mf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = zu(t)) && (r && (r += " "), r += e);
  return r;
}
function Wu(t) {
  return typeof t == "object" ? Mf(t) : t ?? "";
}
const ll = [...` 	
\r\f \v\uFEFF`];
function Df(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || ll.includes(r[s - 1])) && (u === r.length || ll.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function ul(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Ms(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Hf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ms)), i && l.push(...Object.keys(i).map(Ms));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var m = Ms(t.substring(c, d).trim());
              if (!l.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += ul(r)), i && (n += ul(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Do(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var u = Df(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Ds(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ut(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Hf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ds(t, n == null ? void 0 : n[0], r[0]), Ds(t, n == null ? void 0 : n[1], r[1], "important")) : Ds(t, n, r));
  return r;
}
function es(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ms(e))
      return Hd();
    for (var r of t.options)
      r.selected = e.includes(fa(r));
    return;
  }
  for (r of t.options) {
    var i = fa(r);
    if (ef(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Xu(t) {
  var e = new MutationObserver(() => {
    es(t, t.__value);
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
  }), ys(() => {
    e.disconnect();
  });
}
function Pf(t, e, n = e) {
  var r = !0;
  Oo(t, "change", (i) => {
    var a = i ? "[selected]" : ":checked", s;
    if (t.multiple)
      s = [].map.call(t.querySelectorAll(a), fa);
    else {
      var u = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = u && fa(u);
    }
    n(s);
  }), Or(() => {
    var i = e();
    if (es(t, i, r), r && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = fa(a), n(i));
    }
    t.__value = i, r = !1;
  }), Xu(t);
}
function fa(t) {
  return "__value" in t ? t.__value : t.value;
}
const ta = Symbol("class"), na = Symbol("style"), Ku = Symbol("is custom element"), Zu = Symbol("is html");
function cl(t, e) {
  var n = Ho(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Nf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Sr(t, e, n, r) {
  var i = Ho(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Ad] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Yu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Uf(t, e, n, r, i = !1, a = !1) {
  var s = Ho(t), u = s[Ku], l = !s[Zu], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = Wu(n.class) : n[ta] && (n.class = null), n[na] && (n.style ?? (n.style = null));
  var f = Yu(t);
  for (const S in n) {
    let _ = n[S];
    if (d && S === "value" && _ == null) {
      t.value = t.__value = "", c[S] = _;
      continue;
    }
    if (S === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Do(t, m, _, r, e == null ? void 0 : e[ta], n[ta]), c[S] = _, c[ta] = n[ta];
      continue;
    }
    if (S === "style") {
      Ut(t, _, e == null ? void 0 : e[na], n[na]), c[S] = _, c[na] = n[na];
      continue;
    }
    var v = c[S];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(S)))) {
      c[S] = _;
      var g = S[0] + S[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, C = "$$" + S;
          let T = S.slice(2);
          var b = yf(T);
          if (bf(T) && (T = T.slice(0, -7), E.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, c[C], E), c[C] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, hn([T]);
            else {
              let x = function(y) {
                c[S].call(this, y);
              };
              c[C] = Mo(T, t, x, E);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (S === "style")
          Sr(t, S, _);
        else if (S === "autofocus")
          rf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (S === "__value" || S === "value" && _ != null))
          t.value = t.__value = _;
        else if (S === "selected" && d)
          Nf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = S;
          l || (I = Ef(I));
          var A = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !u && !A)
            if (s[S] = null, I === "value" || I === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const C = e === void 0;
              if (I === "value") {
                let T = E.defaultValue;
                E.removeAttribute(I), E.defaultValue = T, E.value = E.__value = C ? T : null;
              } else {
                let T = E.defaultChecked;
                E.removeAttribute(I), E.defaultChecked = T, E.checked = C ? T : !1;
              }
            } else
              t.removeAttribute(S);
          else A || f.includes(I) && (u || typeof _ != "string") ? (t[I] = _, I in s && (s[I] = wt)) : typeof _ != "function" && Sr(t, I, _);
        }
    }
  }
  return c;
}
function ze(t, e, n = [], r = [], i, a = !1, s = !1) {
  pu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Rr(() => {
      var m = e(...u.map(o)), v = Uf(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && es(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Nt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === pd && (!l || g !== l[b]) && (c[b] && Nt(c[b]), c[b] = Vt(() => Rf(t, () => g))), v[b] = g;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Or(() => {
        es(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Xu(f);
      });
    }
    h = !0;
  });
}
function Ho(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Ku]: t.nodeName.includes("-"),
      [Zu]: t.namespaceURI === md
    })
  );
}
var dl = /* @__PURE__ */ new Map();
function Yu(t) {
  var e = t.getAttribute("is") || t.nodeName, n = dl.get(e);
  if (n) return n;
  dl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = iu(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = Eo(i);
  }
  return n;
}
const kf = () => performance.now(), ir = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => kf(),
  tasks: /* @__PURE__ */ new Set()
};
function Qu() {
  const t = ir.now();
  ir.tasks.forEach((e) => {
    e.c(t) || (ir.tasks.delete(e), e.f());
  }), ir.tasks.size !== 0 && ir.tick(Qu);
}
function Bf(t) {
  let e;
  return ir.tasks.size === 0 && ir.tick(Qu), {
    promise: new Promise((n) => {
      ir.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ir.tasks.delete(e);
    }
  };
}
function Ma(t, e) {
  qi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Ff(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function fl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Ff(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Vf = (t) => t;
function Gf(t, e, n) {
  var r = (
    /** @type {EachItem} */
    Jr
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = ns(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = c, h.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = t;
}
function ts(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, u = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return qi(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: u,
    in() {
      var S;
      if (e.inert = d, !i) {
        m == null || m.abort(), (S = m == null ? void 0 : m.reset) == null || S.call(m);
        return;
      }
      a || f == null || f.abort(), Ma(e, "introstart"), f = ns(e, v(), m, 1, () => {
        Ma(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(S) {
      if (!a) {
        S == null || S(), c = void 0;
        return;
      }
      e.inert = !0, Ma(e, "outrostart"), m = ns(e, v(), f, 0, () => {
        Ma(e, "outroend"), S == null || S();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    ke
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && $a) {
    var I = u;
    if (!I) {
      for (var A = (
        /** @type {Effect | null} */
        b.parent
      ); A && A.f & wr; )
        for (; (A = A.parent) && !(A.f & xr); )
          ;
      I = !A || (A.f & ps) !== 0;
    }
    I && Or(() => {
      Rn(() => g.in());
    });
  }
}
function ns(t, e, n, r, i) {
  var a = r === 1;
  if (bi(e)) {
    var s, u = !1;
    return or(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        s = ns(t, b, n, r, i);
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: h = Vf } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = fl(c(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var I = r - b, A = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), S = [];
    if (A > 0) {
      var _ = !1;
      if (c)
        for (var E = Math.ceil(A / 16.666666666666668), C = 0; C <= E; C += 1) {
          var T = b + I * h(C / E), x = fl(c(T, 1 - T));
          S.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var y = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + I * h(y / A);
      }, d && Bf(() => {
        if (g.playState !== "running") return !1;
        var y = v();
        return d(y, 1 - y), !0;
      });
    }
    g = t.animate(S, { duration: A, fill: "forwards" }), g.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = ve);
    },
    deactivate: () => {
      i = ve;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function ga(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Oo(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Hs(t) ? Ps(a) : a, n(a), et !== null && r.add(et), await ku(), a !== (a = e())) {
      var s = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        s === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = s, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Rn(e) == null && t.value && (n(Hs(t) ? Ps(t.value) : t.value), et !== null && r.add(et)), Ca(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ga ?? et
      );
      if (r.has(a))
        return;
    }
    Hs(t) && i === Ps(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function jf(t, e, n = e) {
  Oo(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Rn(e) == null && n(t.checked), Ca(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Hs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ps(t) {
  return t === "" ? null : +t;
}
function hl(t, e) {
  return t === e || (t == null ? void 0 : t[Vn]) === e;
}
function xe(t = {}, e, n, r) {
  return Or(() => {
    var i, a;
    return Ca(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Rn(() => {
        t !== n(...a) && (e(t, ...a), i && hl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      or(() => {
        a && hl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function qf(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    rt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Fu(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Aa(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && lf(() => {
    vl(e, r), Ya(n.b);
  }), Se(() => {
    const i = Rn(() => n.m.map(Id));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Se(() => {
    vl(e, r), Ya(n.a);
  });
}
function vl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Po(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = Rn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const vi = [];
function zf(t, e) {
  return {
    subscribe: Qt(t, e).subscribe
  };
}
function Qt(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (xo(t, u) && (t = u, n)) {
      const l = !vi.length;
      for (const c of r)
        c[1](), vi.push(c, t);
      if (l) {
        for (let c = 0; c < vi.length; c += 2)
          vi[c][0](vi[c + 1]);
        vi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function s(u, l = ve) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || ve), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function zi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return zf(n, (s, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = ve;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? c[0] : c, s, u);
      a ? s(v) : h = typeof v == "function" ? v : ve;
    }, m = i.map(
      (v, g) => Po(
        v,
        (b) => {
          c[g] = b, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      Ya(m), h(), l = !1;
    };
  });
}
function Ju(t) {
  let e;
  return Po(t, (n) => e = n)(), e;
}
let Da = !1, io = Symbol();
function Gn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ yu(void 0),
    unsubscribe: ve
  });
  if (r.store !== t && !(io in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = Po(t, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return t && io in n ? Ju(t) : o(r.source);
}
function ri(t, e) {
  return t.set(e), e;
}
function cr() {
  const t = {};
  function e() {
    ys(() => {
      for (var n in t)
        t[n].unsubscribe();
      Za(t, io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Wf(t) {
  var e = Da;
  try {
    return Da = !1, [t(), Da];
  } finally {
    Da = e;
  }
}
const Xf = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function Ye(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Xf
  );
}
const Kf = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (bi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      bi(i) && (i = i());
      const a = Ir(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (bi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Ir(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Vn || e === ou) return !1;
    for (let n of t.props)
      if (bi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (bi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function it(...t) {
  return new Proxy({ props: t }, Kf);
}
function p(t, e, n, r) {
  var S;
  var i = !ji || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Rn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = Vn in t || ou in t;
    d = ((S = Ir(t, e)) == null ? void 0 : S.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = Wf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Ld(), d(f)));
  var v;
  if (i ? v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (u = /** @type {V} */
    void 0), _ === void 0 ? u : _;
  }, i && !(n & 4))
    return v;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, E) {
        return arguments.length > 0 ? ((!i || !E || g || m) && d(E ? v() : _), _) : v();
      }
    );
  }
  var b = !1, I = (n & 1 ? Aa : To)(() => (b = !1, v()));
  a && o(I);
  var A = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const C = E ? o(I) : i && a ? be(_) : _;
        return z(I, C), b = !0, u !== void 0 && (u = C), _;
      }
      return si && b || A.f & ai ? I.v : o(I);
    }
  );
}
const Zf = "5";
var nu;
typeof window < "u" && ((nu = window.__svelte ?? (window.__svelte = {})).v ?? (nu.v = /* @__PURE__ */ new Set())).add(Zf);
function Yf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qf = function(e) {
  return Jf(e) && !$f(e);
};
function Jf(t) {
  return !!t && typeof t == "object";
}
function $f(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || nh(t);
}
var eh = typeof Symbol == "function" && Symbol.for, th = eh ? Symbol.for("react.element") : 60103;
function nh(t) {
  return t.$$typeof === th;
}
function rh(t) {
  return Array.isArray(t) ? [] : {};
}
function pa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ui(rh(t), t, e) : t;
}
function ih(t, e, n) {
  return t.concat(e).map(function(r) {
    return pa(r, n);
  });
}
function ah(t, e) {
  if (!e.customMerge)
    return Ui;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Ui;
}
function sh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function ml(t) {
  return Object.keys(t).concat(sh(t));
}
function $u(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function oh(t, e) {
  return $u(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function lh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && ml(t).forEach(function(i) {
    r[i] = pa(t[i], n);
  }), ml(e).forEach(function(i) {
    oh(t, i) || ($u(t, i) && n.isMergeableObject(e[i]) ? r[i] = ah(i, n)(t[i], e[i], n) : r[i] = pa(e[i], n));
  }), r;
}
function Ui(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ih, n.isMergeableObject = n.isMergeableObject || Qf, n.cloneUnlessOtherwiseSpecified = pa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : lh(t, e, n) : pa(e, n);
}
Ui.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Ui(r, i, n);
  }, {});
};
var uh = Ui, ch = uh;
const dh = /* @__PURE__ */ Yf(ch);
var ao = function(t, e) {
  return ao = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ao(t, e);
};
function tt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ao(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var le = function() {
  return le = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, le.apply(this, arguments);
};
function fh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function ec(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function No(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = e.call(t, n);
    } catch (d) {
      c = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Lt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Cr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function jn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Si(t) {
  return this instanceof Si ? (this.v = t, this) : new Si(t);
}
function hh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function u(m, v) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, I) {
        a.push([m, g, b, I]) > 1 || l(m, g);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      c(r[m](v));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(m) {
    m.value instanceof Si ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function h(m) {
    l("throw", m);
  }
  function f(m, v) {
    m(v), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function vh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(u, l) {
        s = t[a](s), i(u, l, s.done, s.value);
      });
    };
  }
  function i(a, s, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, s);
  }
}
function Ns(t, e) {
  var n = e && e.cache ? e.cache : Ih, r = e && e.serializer ? e.serializer : _h, i = e && e.strategy ? e.strategy : ph;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function mh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function gh(t, e, n, r) {
  var i = mh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function tc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function nc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function ph(t, e) {
  var n = t.length === 1 ? gh : tc;
  return nc(t, this, n, e.cache.create(), e.serializer);
}
function bh(t, e) {
  return nc(t, this, tc, e.cache.create(), e.serializer);
}
var _h = function() {
  return JSON.stringify(arguments);
}, yh = (
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
), Ih = {
  create: function() {
    return new yh();
  }
}, Us = {
  variadic: bh
}, je;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(je || (je = {}));
var ct;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ct || (ct = {}));
var ki;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(ki || (ki = {}));
function gl(t) {
  return t.type === ct.literal;
}
function Eh(t) {
  return t.type === ct.argument;
}
function rc(t) {
  return t.type === ct.number;
}
function ic(t) {
  return t.type === ct.date;
}
function ac(t) {
  return t.type === ct.time;
}
function sc(t) {
  return t.type === ct.select;
}
function oc(t) {
  return t.type === ct.plural;
}
function Ah(t) {
  return t.type === ct.pound;
}
function lc(t) {
  return t.type === ct.tag;
}
function uc(t) {
  return !!(t && typeof t == "object" && t.type === ki.number);
}
function so(t) {
  return !!(t && typeof t == "object" && t.type === ki.dateTime);
}
var cc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ch(t) {
  var e = {};
  return t.replace(Sh, function(n) {
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
var xh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Th(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(xh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = s[0], l = s.slice(1), c = 0, d = l; c < d.length; c++) {
      var h = d[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function wh(t) {
  return t.replace(/^(.*?)-/, "");
}
var pl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, dc = /^(@+)?(\+|#+)?[rs]?$/g, Lh = /(\*)(0+)|(#+)(0+)|(0+)/g, fc = /^(0+)$/;
function bl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(dc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function hc(t) {
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
function Oh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !fc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function _l(t) {
  var e = {}, n = hc(t);
  return n || e;
}
function Rh(t) {
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
        e.style = "unit", e.unit = wh(i.options[0]);
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
        e = le(le(le({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return le(le({}, l), _l(c));
        }, {}));
        continue;
      case "engineering":
        e = le(le(le({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return le(le({}, l), _l(c));
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
        i.options[0].replace(Lh, function(l, c, d, h, f, m) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (fc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (pl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(pl, function(l, c, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = le(le({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = le(le({}, e), bl(a)));
      continue;
    }
    if (dc.test(i.stem)) {
      e = le(le({}, e), bl(i.stem));
      continue;
    }
    var s = hc(i.stem);
    s && (e = le(le({}, e), s));
    var u = Oh(i.stem);
    u && (e = le(le({}, e), u));
  }
  return e;
}
var Ha = {
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
function Mh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Dh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Dh(t) {
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
  var i = Ha[r || ""] || Ha[n || ""] || Ha["".concat(n, "-001")] || Ha["001"];
  return i[0];
}
var ks, Hh = new RegExp("^".concat(cc.source, "*")), Ph = new RegExp("".concat(cc.source, "*$"));
function qe(t, e) {
  return { start: t, end: e };
}
var Nh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Uh = !!String.fromCodePoint, kh = !!Object.fromEntries, Bh = !!String.prototype.codePointAt, Fh = !!String.prototype.trimStart, Vh = !!String.prototype.trimEnd, Gh = !!Number.isSafeInteger, jh = Gh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, oo = !0;
try {
  var qh = mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  oo = ((ks = qh.exec("a")) === null || ks === void 0 ? void 0 : ks[0]) === "a";
} catch {
  oo = !1;
}
var yl = Nh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), lo = Uh ? String.fromCodePoint : (
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
), Il = (
  // native
  kh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], u = a[1];
        n[s] = u;
      }
      return n;
    }
  )
), vc = Bh ? (
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
), zh = Fh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Hh, "");
  }
), Wh = Vh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Ph, "");
  }
);
function mc(t, e) {
  return new RegExp(t, e);
}
var uo;
if (oo) {
  var El = mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  uo = function(e, n) {
    var r;
    El.lastIndex = n;
    var i = El.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  uo = function(e, n) {
    for (var r = []; ; ) {
      var i = vc(e, n);
      if (i === void 0 || gc(i) || Yh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return lo.apply(void 0, r);
  };
var Xh = (
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
            var u = this.clonePosition();
            this.bump(), i.push({
              type: ct.pound,
              location: qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(je.UNMATCHED_CLOSING_TAG, qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && co(this.peek() || 0)) {
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
            type: ct.literal,
            value: "<".concat(i, "/>"),
            location: qe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !co(this.char()))
            return this.error(je.INVALID_TAG, qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(je.UNMATCHED_CLOSING_TAG, qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ct.tag,
              value: i,
              children: s,
              location: qe(r, this.clonePosition())
            },
            err: null
          } : this.error(je.INVALID_TAG, qe(u, this.clonePosition())));
        } else
          return this.error(je.UNCLOSED_TAG, qe(r, this.clonePosition()));
      } else
        return this.error(je.INVALID_TAG, qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Zh(this.char()); )
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
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = qe(r, this.clonePosition());
      return {
        val: { type: ct.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Kh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return lo.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), lo(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(je.EMPTY_ARGUMENT, qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(je.MALFORMED_ARGUMENT, qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ct.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(je.MALFORMED_ARGUMENT, qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = uo(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = qe(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(je.EXPECT_ARGUMENT_TYPE, qe(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = Wh(h.val);
            if (f.length === 0)
              return this.error(je.EXPECT_ARGUMENT_STYLE, qe(this.clonePosition(), this.clonePosition()));
            var m = qe(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var g = qe(i, this.clonePosition());
          if (c && yl(c == null ? void 0 : c.style, "::", 0)) {
            var b = zh(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return h.err ? h : {
                val: { type: ct.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(je.EXPECT_DATE_TIME_SKELETON, g);
              var I = b;
              this.locale && (I = Mh(b, this.locale));
              var f = {
                type: ki.dateTime,
                pattern: I,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Ch(I) : {}
              }, A = u === "date" ? ct.date : ct.time;
              return {
                val: { type: A, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? ct.number : u === "date" ? ct.date : ct.time,
              value: r,
              location: g,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var S = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS, qe(S, le({}, S)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), E = h.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (C.err)
            return C;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = qe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: ct.select,
              value: r,
              options: Il(C.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ct.plural,
              value: r,
              options: Il(C.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(je.INVALID_ARGUMENT_TYPE, qe(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, qe(i, this.clonePosition()));
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
        r = Th(e);
      } catch {
        return this.error(je.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: ki.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Rh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_SELECTOR, je.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = qe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? je.DUPLICATE_SELECT_ARGUMENT_SELECTOR : je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, qe(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: v.val,
            location: qe(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR : je.EXPECT_PLURAL_ARGUMENT_SELECTOR, qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(je.MISSING_OTHER_CLAUSE, qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, s = s * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = qe(i, this.clonePosition());
      return a ? (s *= r, jh(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = vc(this.message, e);
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
      if (yl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && gc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function co(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Kh(t) {
  return co(t) || t === 47;
}
function Zh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function gc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Yh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function fo(t) {
  t.forEach(function(e) {
    if (delete e.location, sc(e) || oc(e))
      for (var n in e.options)
        delete e.options[n].location, fo(e.options[n].value);
    else rc(e) && uc(e.style) || (ic(e) || ac(e)) && so(e.style) ? delete e.style.location : lc(e) && fo(e.children);
  });
}
function Qh(t, e) {
  e === void 0 && (e = {}), e = le({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Xh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(je[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || fo(n.val), n.val;
}
var Bi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Bi || (Bi = {}));
var As = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Al = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Bi.INVALID_VALUE, a) || this;
    }
    return e;
  }(As)
), Jh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Bi.INVALID_VALUE, i) || this;
    }
    return e;
  }(As)
), $h = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Bi.MISSING_VALUE, r) || this;
    }
    return e;
  }(As)
), zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(zt || (zt = {}));
function ev(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== zt.literal || n.type !== zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function tv(t) {
  return typeof t == "function";
}
function Wa(t, e, n, r, i, a, s) {
  if (t.length === 1 && gl(t[0]))
    return [
      {
        type: zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (gl(d)) {
      u.push({
        type: zt.literal,
        value: d.value
      });
      continue;
    }
    if (Ah(d)) {
      typeof a == "number" && u.push({
        type: zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new $h(h, s);
    var f = i[h];
    if (Eh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? zt.literal : zt.object,
        value: f
      });
      continue;
    }
    if (ic(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : so(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (ac(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : so(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (rc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : uc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (lc(d)) {
      var v = d.children, g = d.value, b = i[g];
      if (!tv(b))
        throw new Jh(g, "function", s);
      var I = Wa(v, e, n, r, i, a), A = b(I.map(function(E) {
        return E.value;
      }));
      Array.isArray(A) || (A = [A]), u.push.apply(u, A.map(function(E) {
        return {
          type: typeof E == "string" ? zt.literal : zt.object,
          value: E
        };
      }));
    }
    if (sc(d)) {
      var S = d.options[f] || d.options.other;
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Wa(S.value, e, n, r, i));
      continue;
    }
    if (oc(d)) {
      var S = d.options["=".concat(f)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new As(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        S = d.options[_] || d.options.other;
      }
      if (!S)
        throw new Al(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Wa(S.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return ev(u);
}
function nv(t, e) {
  return e ? le(le(le({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = le(le({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function rv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = nv(t[r], e[r]), n;
  }, le({}, t)) : t;
}
function Bs(t) {
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
function iv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ns(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, jn([void 0], n, !1)))();
    }, {
      cache: Bs(t.number),
      strategy: Us.variadic
    }),
    getDateTimeFormat: Ns(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, jn([void 0], n, !1)))();
    }, {
      cache: Bs(t.dateTime),
      strategy: Us.variadic
    }),
    getPluralRules: Ns(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, jn([void 0], n, !1)))();
    }, {
      cache: Bs(t.pluralRules),
      strategy: Us.variadic
    })
  };
}
var pc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = a.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var d = c.reduce(function(h, f) {
          return !h.length || f.type !== zt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Wa(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var u = fh(s, ["formatters"]);
        this.ast = t.__parse(e, le(le({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = rv(t.formats, r), this.formatters = i && i.formatters || iv(this.formatterCache);
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
    }, t.__parse = Qh, t.formats = {
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
function av(t, e) {
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
const yr = {}, sv = (t, e, n) => n && (e in yr || (yr[e] = {}), t in yr[e] || (yr[e][t] = n), n), bc = (t, e) => {
  if (e == null)
    return;
  if (e in yr && t in yr[e])
    return yr[e][t];
  const n = Ta(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = lv(i, t);
    if (a)
      return sv(t, e, a);
  }
};
let Uo;
const xa = Qt({});
function ov(t) {
  return Uo[t] || null;
}
function _c(t) {
  return t in Uo;
}
function lv(t, e) {
  if (!_c(t))
    return null;
  const n = ov(t);
  return av(n, e);
}
function uv(t) {
  if (t == null)
    return;
  const e = Ta(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (_c(r))
      return r;
  }
}
function yc(t, ...e) {
  delete yr[t], xa.update((n) => (n[t] = dh.all([n[t] || {}, ...e]), n));
}
zi(
  [xa],
  ([t]) => Object.keys(t)
);
xa.subscribe((t) => Uo = t);
const Xa = {};
function cv(t, e) {
  Xa[t].delete(e), Xa[t].size === 0 && delete Xa[t];
}
function Ic(t) {
  return Xa[t];
}
function dv(t) {
  return Ta(t).map((e) => {
    const n = Ic(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function rs(t) {
  return t == null ? !1 : Ta(t).some(
    (e) => {
      var n;
      return (n = Ic(e)) == null ? void 0 : n.size;
    }
  );
}
function fv(t, e) {
  return Promise.all(
    e.map((r) => (cv(t, r), r().then((i) => i.default || i)))
  ).then((r) => yc(t, ...r));
}
const ra = {};
function Ec(t) {
  if (!rs(t))
    return t in ra ? ra[t] : Promise.resolve();
  const e = dv(t);
  return ra[t] = Promise.all(
    e.map(
      ([n, r]) => fv(n, r)
    )
  ).then(() => {
    if (rs(t))
      return Ec(t);
    delete ra[t];
  }), ra[t];
}
var Sl = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, mv = (t, e) => {
  var n = {};
  for (var r in t)
    hv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Sl)
    for (var r of Sl(t))
      e.indexOf(r) < 0 && vv.call(t, r) && (n[r] = t[r]);
  return n;
};
const gv = {
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
function pv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ta(
      t
    ).join('", "')}".${rs(Mr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const bv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: gv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ua = bv;
function Fi() {
  return ua;
}
function _v(t) {
  const e = t, { formats: n } = e, r = mv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      pc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = pv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ua, r, { initialLocale: i }), n && ("number" in n && Object.assign(ua.formats.number, n.number), "date" in n && Object.assign(ua.formats.date, n.date), "time" in n && Object.assign(ua.formats.time, n.time)), li.set(i);
}
const Fs = Qt(!1);
var yv = Object.defineProperty, Iv = Object.defineProperties, Ev = Object.getOwnPropertyDescriptors, Cl = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Sv = Object.prototype.propertyIsEnumerable, xl = (t, e, n) => e in t ? yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Cv = (t, e) => {
  for (var n in e || (e = {}))
    Av.call(e, n) && xl(t, n, e[n]);
  if (Cl)
    for (var n of Cl(e))
      Sv.call(e, n) && xl(t, n, e[n]);
  return t;
}, xv = (t, e) => Iv(t, Ev(e));
let ho;
const is = Qt(null);
function Tl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ta(t, e = Fi().fallbackLocale) {
  const n = Tl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Tl(e)])] : n;
}
function Mr() {
  return ho ?? void 0;
}
is.subscribe((t) => {
  ho = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Tv = (t) => {
  if (t && uv(t) && rs(t)) {
    const { loadingDelay: e } = Fi();
    let n;
    return typeof window < "u" && Mr() != null && e ? n = window.setTimeout(
      () => Fs.set(!0),
      e
    ) : Fs.set(!0), Ec(t).then(() => {
      is.set(t);
    }).finally(() => {
      clearTimeout(n), Fs.set(!1);
    });
  }
  return is.set(t);
}, li = xv(Cv({}, is), {
  set: Tv
}), wv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ss = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Lv = Object.defineProperty, as = Object.getOwnPropertySymbols, Ac = Object.prototype.hasOwnProperty, Sc = Object.prototype.propertyIsEnumerable, wl = (t, e, n) => e in t ? Lv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ko = (t, e) => {
  for (var n in e || (e = {}))
    Ac.call(e, n) && wl(t, n, e[n]);
  if (as)
    for (var n of as(e))
      Sc.call(e, n) && wl(t, n, e[n]);
  return t;
}, Wi = (t, e) => {
  var n = {};
  for (var r in t)
    Ac.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && as)
    for (var r of as(t))
      e.indexOf(r) < 0 && Sc.call(t, r) && (n[r] = t[r]);
  return n;
};
const ba = (t, e) => {
  const { formats: n } = Fi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Ov = Ss(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Wi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ba("number", r)), new Intl.NumberFormat(n, i);
  }
), Rv = Ss(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Wi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ba("date", r) : Object.keys(i).length === 0 && (i = ba("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Mv = Ss(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Wi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ba("time", r) : Object.keys(i).length === 0 && (i = ba("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Dv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Wi(e, [
    "locale"
  ]);
  return Ov(ko({ locale: n }, r));
}, Hv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Wi(e, [
    "locale"
  ]);
  return Rv(ko({ locale: n }, r));
}, Pv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Wi(e, [
    "locale"
  ]);
  return Mv(ko({ locale: n }, r));
}, Nv = Ss(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Mr()) => new pc(t, e, Fi().formats, {
    ignoreTag: Fi().ignoreTag
  })
), Uv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: u,
    locale: l = Mr(),
    default: c
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Fi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Nv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, kv = (t, e) => Pv(e).format(t), Bv = (t, e) => Hv(e).format(t), Fv = (t, e) => Dv(e).format(t), Vv = (t, e = Mr()) => bc(t, e), Gv = zi([li, xa], () => Uv);
zi([li], () => kv);
zi([li], () => Bv);
zi([li], () => Fv);
zi([li, xa], () => Vv);
function jv(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    yc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? wv();
  console.log("Initial: Setting the language to", i), _v({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), li.set(s.detail.language);
  });
}
const qv = "Ort", zv = "Suche", Wv = "UUID", Xv = "Name", Kv = "Autor", Zv = "Typ", Yv = "Version", Qv = "Geändert am", Jv = "Von", $v = "Bis", em = "Suchergebnis", tm = "Ort auswählen", nm = "Filter Hinzufügen", rm = "Filtertypen", im = {
  location: qv,
  search: zv,
  uuid: Wv,
  name: Xv,
  author: Kv,
  type: Zv,
  version: Yv,
  changed_at: Qv,
  from: Jv,
  to: $v,
  search_result: em,
  select_location: tm,
  add_filter: nm,
  filter_types: rm
}, am = "Location", sm = "Search", om = "UUID", lm = "Name", um = "Author", cm = "Type", dm = "Version", fm = "Changed At", hm = "From", vm = "To", mm = "Search Result", gm = "Select Location", pm = "Add Filter", bm = "Filter Types", _m = {
  location: am,
  search: sm,
  uuid: om,
  name: lm,
  author: um,
  type: cm,
  version: dm,
  changed_at: fm,
  from: hm,
  to: vm,
  search_result: mm,
  select_location: gm,
  add_filter: pm,
  filter_types: bm
};
function Ve(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ze(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Vi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ht(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Xi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, gf(e, n, r, i));
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
function W(t, e) {
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
var Pa;
function ym(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Pa;
  if (typeof Pa == "boolean" && !e)
    return Pa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Pa = r), r;
}
function Im(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - s;
  }
  return { x: u, y: l };
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
var jt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  }()
);
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
function Em(t) {
  return t === void 0 && (t = window), Am(t) ? { passive: !0 } : !1;
}
function Am(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
  } catch {
    e = !1;
  }
  return e;
}
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Em
}, Symbol.toStringTag, { value: "Module" }));
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
function Sm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (xc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function xc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Cm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Sm,
  estimateScrollWidth: Cm,
  matches: xc
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
var xm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Tm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ll = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
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
var Ol = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Rl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Na = [], wm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(i) {
        r.activateImpl(i);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ll;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(s), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var r = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var r, i;
      if (n) {
        try {
          for (var a = Lt(Ol), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Lt(Rl), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Lt(Ol), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Lt(Rl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, s = a && n !== void 0 && a.type !== n.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && Na.length > 0 && Na.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Na.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Na = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Im(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, u = a || !s;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Ll.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = le({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, s = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(jt)
);
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
var Pe = {
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
}, en = /* @__PURE__ */ new Set();
en.add(Pe.BACKSPACE);
en.add(Pe.ENTER);
en.add(Pe.SPACEBAR);
en.add(Pe.PAGE_UP);
en.add(Pe.PAGE_DOWN);
en.add(Pe.END);
en.add(Pe.HOME);
en.add(Pe.ARROW_LEFT);
en.add(Pe.ARROW_UP);
en.add(Pe.ARROW_RIGHT);
en.add(Pe.ARROW_DOWN);
en.add(Pe.DELETE);
en.add(Pe.ESCAPE);
en.add(Pe.TAB);
var on = {
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
}, tn = /* @__PURE__ */ new Map();
tn.set(on.BACKSPACE, Pe.BACKSPACE);
tn.set(on.ENTER, Pe.ENTER);
tn.set(on.SPACEBAR, Pe.SPACEBAR);
tn.set(on.PAGE_UP, Pe.PAGE_UP);
tn.set(on.PAGE_DOWN, Pe.PAGE_DOWN);
tn.set(on.END, Pe.END);
tn.set(on.HOME, Pe.HOME);
tn.set(on.ARROW_LEFT, Pe.ARROW_LEFT);
tn.set(on.ARROW_UP, Pe.ARROW_UP);
tn.set(on.ARROW_RIGHT, Pe.ARROW_RIGHT);
tn.set(on.ARROW_DOWN, Pe.ARROW_DOWN);
tn.set(on.DELETE, Pe.DELETE);
tn.set(on.ESCAPE, Pe.ESCAPE);
tn.set(on.TAB, Pe.TAB);
var Dr = /* @__PURE__ */ new Set();
Dr.add(Pe.PAGE_UP);
Dr.add(Pe.PAGE_DOWN);
Dr.add(Pe.END);
Dr.add(Pe.HOME);
Dr.add(Pe.ARROW_LEFT);
Dr.add(Pe.ARROW_UP);
Dr.add(Pe.ARROW_RIGHT);
Dr.add(Pe.ARROW_DOWN);
function It(t) {
  var e = t.key;
  if (en.has(e))
    return e;
  var n = tn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Ml } = Cc, { matches: Lm } = Cs;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, g) => t.style.setProperty(v, g), initPromise: m = Promise.resolve() } = {}) {
  let v, g = new Xi(), b = ue("SMUI:addLayoutListener"), I, A = s, S = l, _ = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && A !== s && (A = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new wm({
      addClass: d,
      browserSupportsCssVars: () => ym(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, x) => g.off(document.documentElement, T, x),
      deregisterInteractionHandler: (T, x) => g.off(l || t, T, x),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, x;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Lm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const y = Ml();
        g.on(document.documentElement, T, x, typeof y == "boolean" ? { capture: y } : y);
      },
      registerInteractionHandler: (T, x) => {
        const y = Ml();
        g.on(l || t, T, x, typeof y == "boolean" ? { capture: y } : y);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, g.clear());
    }), v && (S !== l || _ !== c) && (S = l, _ = c, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), b && (I = b(C));
  function C() {
    v && v.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, y) => t.style.setProperty(x, y), initPromise: Promise.resolve() }, T)), E();
    },
    destroy() {
      v && (v.destroy(), v = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), I && I();
    }
  };
}
function vo(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Ki), s = p(e, "tag", 3, "i"), u = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), l;
  const c = /* @__PURE__ */ fe(() => s() === "svg" || a() === Mm), d = ue("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = $(), v = Z(m);
  {
    let g = /* @__PURE__ */ fe(() => Ve({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    oi(v, a, (b, I) => {
      xe(
        I(b, it(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return o(g);
            },
            "aria-hidden": "true"
          },
          () => o(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (A, S) => {
              var _ = $(), E = Z(_);
              Ae(E, () => e.children ?? ve), w(A, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => l = A,
        () => l
      );
    });
  }
  return w(t, m), Le(f);
}
var Om = /* @__PURE__ */ sn("<svg><!></svg>");
function Ki(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function u() {
    return s;
  }
  var l = { getElement: u }, c = $(), d = Z(c);
  {
    var h = (m) => {
      var v = Om();
      ze(v, () => ({ ...i }));
      var g = ge(v);
      Ae(g, () => e.children ?? ve), xe(v, (b) => s = b, () => s), Ue(v, (b, I) => W == null ? void 0 : W(b, I), n), w(m, v);
    }, f = (m) => {
      var v = $(), g = Z(v);
      {
        var b = (A) => {
          var S = $(), _ = Z(S);
          ol(_, r, !1, (E, C) => {
            xe(E, (T) => s = T, () => s), Ue(E, (T, x) => W == null ? void 0 : W(T, x), n), ze(E, () => ({ ...i }));
          }), w(A, S);
        }, I = (A) => {
          var S = $(), _ = Z(S);
          ol(_, r, !1, (E, C) => {
            xe(E, (y) => s = y, () => s), Ue(E, (y, R) => W == null ? void 0 : W(y, R), n), ze(E, () => ({ ...i }));
            var T = $(), x = Z(T);
            Ae(x, () => e.children ?? ve), w(C, T);
          }), w(A, S);
        };
        ne(
          g,
          (A) => {
            o(a) ? A(b) : A(I, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ne(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, c), Le(l);
}
var Rm = /* @__PURE__ */ sn("<svg><!></svg>");
function Mm(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = Rm();
  ze(u, () => ({ ...r }));
  var l = ge(u);
  return Ae(l, () => e.children ?? ve), xe(u, (c) => i = c, () => i), Ue(u, (c, d) => W == null ? void 0 : W(c, d), n), w(t, u), Le(s);
}
function Ua(t, e) {
  we(e, !0);
  const [n, r] = cr(), i = Qt(e.value);
  te(e.key, i), Se(() => {
    ri(i, e.value);
  }), Sn(() => {
    i.set(void 0);
  });
  var a = $(), s = Z(a);
  Ae(s, () => e.children ?? ve), w(t, a), Le(), r();
}
var Dm = /* @__PURE__ */ he('<div class="mdc-button__touch"></div>'), Hm = /* @__PURE__ */ he('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Tc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), s = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Ki), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Ye(e, [
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
  ]), g, b = be({}), I = be({}), A = ue("SMUI:button:context");
  const S = /* @__PURE__ */ fe(() => A === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ fe(() => A === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ fe(() => A === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  Se(() => {
    if (C !== e.disabled) {
      if (g) {
        const G = U();
        "blur" in G && G.blur();
      }
      C = v.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(G) {
    b[G] || (b[G] = !0);
  }
  function x(G) {
    (!(G in b) || b[G]) && (b[G] = !1);
  }
  function y(G, k) {
    I[G] != k && (k === "" || k == null ? delete I[G] : I[G] = k);
  }
  function R() {
    A === "banner" && Ze(U(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function U() {
    return g.getElement();
  }
  var P = { getElement: U }, F = $(), pe = Z(F);
  {
    let G = /* @__PURE__ */ fe(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: x,
          addStyle: y
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ fe(() => Ve({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": A === "card:action",
      "mdc-card__action--button": A === "card:action",
      "mdc-dialog__button": A === "dialog:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__action": A === "snackbar:actions",
      "mdc-banner__secondary-action": A === "banner" && h(),
      "mdc-banner__primary-action": A === "banner" && !h(),
      "mdc-tooltip__action": A === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), H = /* @__PURE__ */ fe(() => Object.entries(I).map(([K, J]) => `${K}: ${J};`).concat([i()]).join(" "));
    oi(pe, f, (K, J) => {
      xe(
        J(K, it(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(G);
            },
            get class() {
              return o(k);
            },
            get style() {
              return o(H);
            }
          },
          () => o(S),
          () => o(_),
          () => o(E),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (D) => {
              var L;
              R(), (L = e.onclick) == null || L.call(e, D);
            },
            children: (D, L) => {
              var N = Hm(), Ee = _e(Z(N), 2);
              Ae(Ee, () => e.children ?? ve);
              var Ie = _e(Ee);
              {
                var ce = (Ce) => {
                  var V = Dm();
                  w(Ce, V);
                };
                ne(Ie, (Ce) => {
                  l() && Ce(ce);
                });
              }
              w(D, N);
            },
            $$slots: { default: !0 }
          }
        )),
        (D) => g = D,
        () => g
      );
    });
  }
  return w(t, F), Le(P);
}
function Pm(t, e) {
  we(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), s = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Tc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return o(u);
      },
      children: (l, c) => {
        var d = $(), h = Z(d);
        Ae(h, () => e.children ?? ve), w(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Le();
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
var ka = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Qn = {
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
var Nm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Qn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(ka.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(ka.ICON_BUTTON_ON) : this.adapter.removeClass(ka.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Qn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, "" + n);
    }, e;
  }(jt)
), Um = /* @__PURE__ */ he('<div class="mdc-icon-button__touch"></div>'), km = /* @__PURE__ */ he('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Bm(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Ki), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ye(e, [
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
    "component",
    "tag",
    "children"
  ]), b, I, A = /* @__PURE__ */ me(be({})), S = be({}), _ = /* @__PURE__ */ me(be({})), E = ue("SMUI:icon-button:context"), C = ue("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ fe(() => {
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
  let x = !!e.disabled;
  Se(() => {
    if (x != !!e.disabled) {
      if (b) {
        const L = H();
        "blur" in L && L.blur();
      }
      x = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let y = null;
  Se(() => {
    b && H() && l() !== y && (l() && !I ? (I = new Nm({
      addClass: U,
      hasClass: R,
      notifyChange: (L) => {
        k(L), Ze(H(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: P,
      getAttr: pe,
      setAttr: G
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, z(A, {}, !0), z(_, {}, !0)), y = l());
  }), Se(() => {
    I && !r(c()) && I.isOn() !== c() && I.toggle(c());
  }), Sn(() => {
    I && I.destroy();
  });
  function R(L) {
    return L in o(A) ? o(A)[L] : H().classList.contains(L);
  }
  function U(L) {
    o(A)[L] || (o(A)[L] = !0);
  }
  function P(L) {
    (!(L in o(A)) || o(A)[L]) && (o(A)[L] = !1);
  }
  function F(L, N) {
    S[L] != N && (N === "" || N == null ? delete S[L] : S[L] = N);
  }
  function pe(L) {
    return L in o(_) ? o(_)[L] ?? null : H().getAttribute(L);
  }
  function G(L, N) {
    o(_)[L] !== N && (o(_)[L] = N);
  }
  function k(L) {
    c(L.isOn);
  }
  function H() {
    return b.getElement();
  }
  var K = { getElement: H }, J = $(), D = Z(J);
  {
    let L = /* @__PURE__ */ fe(() => [
      [
        Xt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: U,
          removeClass: P,
          addStyle: F
        }
      ],
      ...i()
    ]), N = /* @__PURE__ */ fe(() => Ve({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
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
      ...o(A),
      [a()]: !0
    })), Ee = /* @__PURE__ */ fe(() => Object.entries(S).map(([Ce, V]) => `${Ce}: ${V};`).concat([s()]).join(" ")), Ie = /* @__PURE__ */ fe(() => r(c()) ? null : c() ? "true" : "false"), ce = /* @__PURE__ */ fe(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    oi(D, m, (Ce, V) => {
      xe(
        V(Ce, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(N);
            },
            get style() {
              return o(Ee);
            },
            get "aria-pressed"() {
              return o(Ie);
            },
            get "aria-label"() {
              return o(ce);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return C;
            },
            get href() {
              return e.href;
            }
          },
          () => o(T),
          () => o(_),
          () => g,
          {
            onclick: (re) => {
              var X;
              I && I.handleClick(), E === "top-app-bar:navigation" && Ze(H(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, re);
            },
            children: (re, X) => {
              var ie = km(), Te = _e(Z(ie), 2);
              Ae(Te, () => e.children ?? ve);
              var q = _e(Te);
              {
                var ee = (Re) => {
                  var ye = Um();
                  w(Re, ye);
                };
                ne(q, (Re) => {
                  d() && Re(ee);
                });
              }
              w(re, ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => b = re,
        () => b
      );
    });
  }
  return w(t, J), Le(K);
}
function Fm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Bm(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var s;
        (s = n()) == null || s.apply(this, a);
      }
    },
    children: (a, s) => {
      vo(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Pt();
          Oe(() => at(c, r())), w(u, c);
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
var Vm = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
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
var Gm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var r = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(n) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var r = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(jt)
);
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
var Fr = {
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
var jm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(Fr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Fr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Fr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Fr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Fr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Fr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(jt)
);
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
var qm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Dl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, zm = {
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
var Wm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += Dl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(jt)
);
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
var Vs = {
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
}, Xm = {
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
}, Km = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Zm = [
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
var Pl = ["mousedown", "touchstart"], Nl = ["click", "keydown"], Ym = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = r.helperText, i.characterCounter = r.characterCounter, i.leadingIcon = r.leadingIcon, i.trailingIcon = r.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(a) {
        i.setTransformOrigin(a);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(a) {
        i.handleValidationAttributeChange(a);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Zm.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Lt(Pl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Lt(Nl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Lt(Pl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Lt(Nl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(i) {
        return Km.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Hl.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), s = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var r = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var r = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(Vs.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Vs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var r = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(n) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      n ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var r = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
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
    }, e;
  }(jt)
);
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
var Ul = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Qm = {
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
var kl = ["click", "keydown"], Jm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ul;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Lt(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Lt(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ul.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(jt)
), $m = /* @__PURE__ */ he("<span><!></span>"), eg = /* @__PURE__ */ he("<label><!></label>");
function ss(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), s = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ye(e, [
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
  ]), c, d = /* @__PURE__ */ me(void 0), h = new Xi(), f = be({}), m = be({}), v = ue("SMUI:generic:input:props") ?? {}, g = a();
  Se(() => {
    o(d) && g !== a() && (g = a(), o(d).float(a()));
  });
  let b = s();
  Se(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const I = ue("SMUI:floating-label:mount"), A = ue("SMUI:floating-label:unmount");
  lt(() => {
    z(
      d,
      new Gm({
        addClass: S,
        removeClass: _,
        getWidth: () => {
          var L, N;
          const K = U(), J = K.cloneNode(!0);
          (L = K.parentNode) == null || L.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const D = J.scrollWidth;
          return (N = K.parentNode) == null || N.removeChild(J), D;
        },
        registerInteractionHandler: (K, J) => h.on(U(), K, J),
        deregisterInteractionHandler: (K, J) => h.off(U(), K, J)
      }),
      !0
    );
    const H = {
      get element() {
        return U();
      },
      addStyle: E,
      removeStyle: C
    };
    return I && I(H), o(d).init(), () => {
      var K;
      A && A(H), (K = o(d)) == null || K.destroy(), h.clear();
    };
  });
  function S(H) {
    f[H] || (f[H] = !0);
  }
  function _(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function E(H, K) {
    m[H] != K && (K === "" || K == null ? delete m[H] : m[H] = K);
  }
  function C(H) {
    H in m && delete m[H];
  }
  function T(H) {
    var K;
    (K = o(d)) == null || K.shake(H);
  }
  function x(H) {
    a(H);
  }
  function y(H) {
    s(H);
  }
  function R() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function U() {
    return c;
  }
  var P = { shake: T, float: x, setRequired: y, getWidth: R, getElement: U }, F = $(), pe = Z(F);
  {
    var G = (H) => {
      var K = $m();
      ze(K, (D, L) => ({ class: D, style: L, ...l }), [
        () => Ve({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
      ]);
      var J = ge(K);
      Ae(J, () => e.children ?? ve), xe(K, (D) => c = D, () => c), Ue(K, (D, L) => W == null ? void 0 : W(D, L), n), w(H, K);
    }, k = (H) => {
      var K = eg();
      ze(
        K,
        (D, L) => ({
          class: D,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ve({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var J = ge(K);
      Ae(J, () => e.children ?? ve), xe(K, (D) => c = D, () => c), Ue(K, (D, L) => W == null ? void 0 : W(D, L), n), w(H, K);
    };
    ne(pe, (H) => {
      u() ? H(G) : H(k, !1);
    });
  }
  return w(t, F), Le(P);
}
var tg = /* @__PURE__ */ he("<div></div>");
function wc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), s = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ me(void 0), c = new Xi(), d = be({}), h = be({});
  lt(() => (z(
    l,
    new jm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (C, T) => c.on(S(), C, T),
      deregisterEventHandler: (C, T) => c.off(S(), C, T)
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in d ? d[C] : S().classList.contains(C);
  }
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function v(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, T) {
    h[C] != T && (T === "" || T == null ? delete h[C] : h[C] = T);
  }
  function b() {
    var C;
    (C = o(l)) == null || C.activate();
  }
  function I() {
    var C;
    (C = o(l)) == null || C.deactivate();
  }
  function A(C) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(C);
  }
  function S() {
    return u;
  }
  var _ = { activate: b, deactivate: I, setRippleCenter: A, getElement: S }, E = tg();
  return ze(E, (C, T) => ({ class: C, style: T, ...s }), [
    () => Ve({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, T]) => `${C}: ${T};`).concat([i()]).join(" ")
  ]), xe(E, (C) => u = C, () => u), Ue(E, (C, T) => W == null ? void 0 : W(C, T), n), w(t, E), Le(_);
}
var ng = /* @__PURE__ */ he('<div class="mdc-notched-outline__notch"><!></div>'), rg = /* @__PURE__ */ he('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Lc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), s = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ me(void 0), c = /* @__PURE__ */ me(void 0), d = be({}), h = be({}), f;
  Se(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(c));
  }), te("SMUI:floating-label:mount", (x) => {
    z(c, x, !0);
  }), te("SMUI:floating-label:unmount", () => {
    z(c, void 0);
  }), lt(() => (z(
    l,
    new Wm({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (x) => g("width", x + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), o(l).init(), () => {
    var x;
    (x = o(l)) == null || x.destroy();
  }));
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function v(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, y) {
    h[x] != y && (y === "" || y == null ? delete h[x] : h[x] = y);
  }
  function b(x) {
    x in h && delete h[x];
  }
  function I(x) {
    var y;
    (y = o(l)) == null || y.notch(x);
  }
  function A() {
    var x;
    (x = o(l)) == null || x.closeNotch();
  }
  function S() {
    return u;
  }
  var _ = { notch: I, closeNotch: A, getElement: S }, E = rg();
  ze(E, (x) => ({ class: x, ...s }), [
    () => Ve({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var C = _e(ge(E), 2);
  {
    var T = (x) => {
      var y = ng(), R = ge(y);
      Ae(R, () => e.children ?? ve), Oe((U) => Ut(y, U), [
        () => Object.entries(h).map(([U, P]) => `${U}: ${P};`).join(" ")
      ]), w(x, y);
    };
    ne(C, (x) => {
      a() || x(T);
    });
  }
  return xe(E, (x) => u = x, () => u), Ue(E, (x, y) => W == null ? void 0 : W(x, y), n), w(t, E), Le(_);
}
function Bo(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Ki), a = p(e, "tag", 3, "div"), s = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ye(e, [
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
  ]), h;
  const f = [];
  Object.entries(u()).forEach(([I, A]) => {
    const S = ue(A);
    S && "subscribe" in S && f.push(S.subscribe((_) => {
      u()[I] = _;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && te(I, l()[I]);
  Sn(() => {
    for (const I of f)
      I();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, g = $(), b = Z(g);
  {
    let I = /* @__PURE__ */ fe(() => Ve({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    oi(b, i, (A, S) => {
      xe(
        S(A, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(I);
            }
          },
          c,
          () => d,
          {
            children: (_, E) => {
              var C = $(), T = Z(C);
              Ae(T, () => e.children ?? ve), w(_, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return w(t, g), Le(v);
}
function ig(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = $(), c = Z(l);
        Ae(c, () => e.children ?? ve), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Le(a);
}
function ag(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = Z(l);
          Ae(c, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
function sg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = Z(l);
          Ae(c, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
var og = /* @__PURE__ */ he("<input/>");
function lg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), s = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => s() === null), m = p(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Ye(e, [
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
  ]), g, b = be({}), I = be({});
  Se(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), lt(() => {
    d() && h() && c(R().matches(":invalid"));
  });
  function A(G) {
    return G === "" ? Number.NaN : +G;
  }
  function S(G) {
    if (i() === "file") {
      u(G.currentTarget.files);
      return;
    }
    if (G.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (G.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(A(G.currentTarget.value));
        break;
      default:
        s(G.currentTarget.value);
        break;
    }
  }
  function _(G) {
    (i() === "file" || i() === "range") && S(G), l(!0), d() && c(R().matches(":invalid"));
  }
  function E(G) {
    return G in b ? b[G] ?? null : R().getAttribute(G);
  }
  function C(G, k) {
    b[G] !== k && (b[G] = k);
  }
  function T(G) {
    (!(G in b) || b[G] != null) && (b[G] = void 0);
  }
  function x() {
    R().focus();
  }
  function y() {
    R().blur();
  }
  function R() {
    return g;
  }
  var U = { getAttr: E, addAttr: C, removeAttr: T, focus: x, blur: y, getElement: R }, P = og(), F = (G) => {
    var k;
    i() !== "file" && S(G), (k = e.oninput) == null || k.call(e, G);
  }, pe = (G) => {
    var k;
    _(G), (k = e.onchange) == null || k.call(e, G);
  };
  return ze(
    P,
    (G) => ({
      class: G,
      type: i(),
      placeholder: a(),
      ...I,
      ...b,
      ...v,
      oninput: F,
      onchange: pe
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(P, (G) => g = G, () => g), Ue(P, (G, k) => W == null ? void 0 : W(G, k), n), w(t, P), Le(U);
}
var ug = /* @__PURE__ */ he("<textarea></textarea>");
function cg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), s = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ Ye(e, [
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
  ]), f, m = be({});
  lt(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function v() {
    s(!0), l() && u(_().matches(":invalid"));
  }
  function g(x) {
    return x in m ? m[x] ?? null : _().getAttribute(x);
  }
  function b(x, y) {
    m[x] !== y && (m[x] = y);
  }
  function I(x) {
    (!(x in m) || m[x] != null) && (m[x] = void 0);
  }
  function A() {
    _().focus();
  }
  function S() {
    _().blur();
  }
  function _() {
    return f;
  }
  var E = { getAttr: g, addAttr: b, removeAttr: I, focus: A, blur: S, getElement: _ }, C = ug(), T = (x) => {
    var y;
    v(), (y = e.onchange) == null || y.call(e, x);
  };
  return ze(
    C,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(C, (x) => f = x, () => f), Ue(C, (x, y) => W == null ? void 0 : W(x, y), n), Or(() => ga(C, a)), w(t, C), Le(E);
}
var dg = /* @__PURE__ */ he('<span class="mdc-text-field__ripple"></span>'), fg = /* @__PURE__ */ he("<!> <!>", 1), hg = /* @__PURE__ */ he("<span><!> <!></span>"), vg = /* @__PURE__ */ he("<!> <!> <!>", 1), mg = /* @__PURE__ */ he("<label><!> <!> <!> <!> <!> <!> <!></label>"), gg = /* @__PURE__ */ he("<div><!> <!> <!> <!> <!></div>"), pg = /* @__PURE__ */ he("<!> <!>", 1);
function mo(t, e) {
  we(e, !0);
  const { applyPassive: n } = Cc;
  let r = () => {
  };
  function i(j) {
    return j === r;
  }
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), I = p(e, "invalid", 15, r), A = p(e, "updateInvalid", 19, () => i(I())), S = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, A), C = p(e, "useNativeValidation", 19, A), T = p(e, "withLeadingIcon", 3, r), x = p(e, "withTrailingIcon", 3, r), y = p(e, "input", 7), R = p(e, "floatingLabel", 7), U = p(e, "lineRipple", 7), P = p(e, "notchedOutline", 7), F = /* @__PURE__ */ Ye(e, [
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
  ]);
  const pe = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(I()) && I(!1);
  let G, k = /* @__PURE__ */ me(void 0), H = new Xi(), K = be({}), J = be({}), D = /* @__PURE__ */ me(void 0), L = /* @__PURE__ */ me(!1), N = /* @__PURE__ */ me(be(S())), Ee = ue("SMUI:addLayoutListener"), Ie, ce, Ce = new Promise((j) => ce = j), V, re, X, ie;
  const Te = /* @__PURE__ */ fe(() => y() && y().getElement());
  Se(() => {
    (_() || o(N) || !A()) && o(k) && o(k).isValid() !== !I() && (A() ? I(!o(k).isValid()) : o(k).setValid(!I()));
  }), Se(() => {
    o(k) && o(k).getValidateOnValueChange() !== E() && o(k).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Se(() => {
    o(k) && o(k).setUseNativeValidation(i(C()) ? !0 : C());
  }), Se(() => {
    o(k) && o(k).setDisabled(c());
  });
  let q = g();
  Se(() => {
    if (o(k) && pe && q !== g()) {
      q = g();
      const j = `${g() == null ? "" : g()}`;
      o(k).getValue() !== j && o(k).setValue(j);
    }
  }), Ee && (Ie = Ee(M)), te("SMUI:textfield:leading-icon:mount", (j) => {
    V = j;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (j) => {
    re = j;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), te("SMUI:textfield:helper-text:id", (j) => {
    z(D, j, !0);
  }), te("SMUI:textfield:helper-text:mount", (j) => {
    X = j;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    z(D, void 0), X = void 0;
  }), te("SMUI:textfield:character-counter:mount", (j) => {
    ie = j;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), lt(() => {
    var j;
    if (z(
      k,
      new Ym(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: ye,
          hasClass: ee,
          registerTextFieldInteractionHandler: (Y, Me) => H.on(B(), Y, Me),
          deregisterTextFieldInteractionHandler: (Y, Me) => H.off(B(), Y, Me),
          registerValidationAttributeChangeHandler: (Y) => {
            const Me = (Et) => Et.map((kt) => kt.attributeName).filter((kt) => kt), st = new MutationObserver((Et) => {
              C() && Y(Me(Et));
            }), nt = { attributes: !0 };
            return y() && st.observe(y().getElement(), nt), st;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = y()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Me) => {
            var st;
            (st = y()) == null || st.addAttr(Y, Me);
          },
          removeInputAttr: (Y) => {
            var Me;
            (Me = y()) == null || Me.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = y()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Me) => {
            var nt;
            const st = (nt = y()) == null ? void 0 : nt.getElement();
            if (st) {
              const Et = n();
              H.on(st, Y, Me, typeof Et == "boolean" ? { capture: Et } : Et);
            }
          },
          deregisterInputInteractionHandler: (Y, Me) => {
            var nt;
            const st = (nt = y()) == null ? void 0 : nt.getElement();
            st && H.off(st, Y, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => R() && R().float(Y),
          getLabelWidth: () => R() ? R().getWidth() : 0,
          hasLabel: () => !!R(),
          shakeLabel: (Y) => R() && R().shake(Y),
          setLabelRequired: (Y) => R() && R().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => U() && U().activate(),
          deactivateLineRipple: () => U() && U().deactivate(),
          setLineRippleTransformOrigin: (Y) => U() && U().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => P() && P().closeNotch(),
          hasOutline: () => !!P(),
          notchOutline: (Y) => P() && P().notch(Y)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), pe) {
      if (y() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (j = o(k)) == null || j.init();
    } else
      ku().then(() => {
        var Y;
        if (y() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(k)) == null || Y.init();
      });
    return ce(), () => {
      var Y;
      (Y = o(k)) == null || Y.destroy(), H.clear();
    };
  }), Sn(() => {
    Ie && Ie();
  });
  function ee(j) {
    return j in K ? K[j] ?? null : B().classList.contains(j);
  }
  function Re(j) {
    K[j] || (K[j] = !0);
  }
  function ye(j) {
    (!(j in K) || K[j]) && (K[j] = !1);
  }
  function Be(j, Y) {
    J[j] != Y && (Y === "" || Y == null ? delete J[j] : J[j] = Y);
  }
  function Je() {
    var j;
    (j = y()) == null || j.focus();
  }
  function vt() {
    var j;
    (j = y()) == null || j.blur();
  }
  function M() {
    if (o(k)) {
      const j = o(k).shouldFloat;
      o(k).notchOutline(j);
    }
  }
  function B() {
    return G;
  }
  var oe = { focus: Je, blur: vt, layout: M, getElement: B }, Ge = pg(), Ot = Z(Ge);
  {
    var Rt = (j) => {
      var Y = mg();
      ze(Y, (He, $e, Qe) => ({ class: He, style: $e, for: void 0, ...Qe }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...K,
          [s()]: !0
        }),
        () => Object.entries(J).map(([He, $e]) => `${He}: ${$e};`).concat([u()]).join(" "),
        () => Vi(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ge(Y);
      {
        var st = (He) => {
          var $e = fg(), Qe = Z($e);
          {
            var xt = (mt) => {
              var At = dg();
              w(mt, At);
            };
            ne(Qe, (mt) => {
              f() === "filled" && mt(xt);
            });
          }
          var ln = _e(Qe, 2);
          {
            var We = (mt) => {
              {
                let At = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Xe = /* @__PURE__ */ fe(() => ht(F, "label$"));
                xe(
                  ss(mt, it(
                    {
                      get floatAbove() {
                        return o(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Xe),
                    {
                      children: (St, Bt) => {
                        var qt = $(), pt = Z(qt);
                        {
                          var Tt = (gt) => {
                          }, nn = (gt) => {
                            var Pr = $(), vn = Z(Pr);
                            {
                              var fr = (mn) => {
                                var Kn = Pt();
                                Oe(() => at(Kn, e.label)), w(mn, Kn);
                              }, Yi = (mn) => {
                                var Kn = $(), Hn = Z(Kn);
                                Ae(Hn, () => e.label), w(mn, Kn);
                              };
                              ne(
                                vn,
                                (mn) => {
                                  typeof e.label == "string" ? mn(fr) : mn(Yi, !1);
                                },
                                !0
                              );
                            }
                            w(gt, Pr);
                          };
                          ne(pt, (gt) => {
                            e.label == null ? gt(Tt) : gt(nn, !1);
                          });
                        }
                        w(St, qt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (St) => R(St),
                  () => R()
                );
              }
            };
            ne(ln, (mt) => {
              !m() && e.label != null && mt(We);
            });
          }
          w(He, $e);
        };
        ne(Me, (He) => {
          !h() && f() !== "outlined" && He(st);
        });
      }
      var nt = _e(Me, 2);
      {
        var Et = (He) => {
          {
            let $e = /* @__PURE__ */ fe(() => m() || e.label == null), Qe = /* @__PURE__ */ fe(() => ht(F, "outline$"));
            xe(
              Lc(He, it(
                {
                  get noLabel() {
                    return o($e);
                  }
                },
                () => o(Qe),
                {
                  children: (xt, ln) => {
                    var We = $(), mt = Z(We);
                    {
                      var At = (Xe) => {
                        {
                          let St = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Bt = /* @__PURE__ */ fe(() => ht(F, "label$"));
                          xe(
                            ss(Xe, it(
                              {
                                get floatAbove() {
                                  return o(St);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Bt),
                              {
                                children: (qt, pt) => {
                                  var Tt = $(), nn = Z(Tt);
                                  {
                                    var gt = (vn) => {
                                    }, Pr = (vn) => {
                                      var fr = $(), Yi = Z(fr);
                                      {
                                        var mn = (Hn) => {
                                          var Nr = Pt();
                                          Oe(() => at(Nr, e.label)), w(Hn, Nr);
                                        }, Kn = (Hn) => {
                                          var Nr = $(), Ts = Z(Nr);
                                          Ae(Ts, () => e.label), w(Hn, Nr);
                                        };
                                        ne(
                                          Yi,
                                          (Hn) => {
                                            typeof e.label == "string" ? Hn(mn) : Hn(Kn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(vn, fr);
                                    };
                                    ne(nn, (vn) => {
                                      e.label == null ? vn(gt) : vn(Pr, !1);
                                    });
                                  }
                                  w(qt, Tt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (qt) => R(qt),
                            () => R()
                          );
                        }
                      };
                      ne(mt, (Xe) => {
                        !m() && e.label != null && Xe(At);
                      });
                    }
                    w(xt, We);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => P(xt),
              () => P()
            );
          }
        };
        ne(nt, (He) => {
          (h() || f() === "outlined") && He(Et);
        });
      }
      var kt = _e(nt, 2);
      Ua(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (He, $e) => {
          var Qe = $(), xt = Z(Qe);
          Ae(xt, () => e.leadingIcon ?? ve), w(He, Qe);
        },
        $$slots: { default: !0 }
      });
      var dr = _e(kt, 2);
      Ae(dr, () => e.children ?? ve);
      var ut = _e(dr, 2);
      {
        var dt = (He) => {
          var $e = hg(), Qe = ge($e);
          {
            let ln = /* @__PURE__ */ fe(() => ht(F, "input$"));
            xe(
              cg(Qe, it(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return o(N);
                  },
                  get "aria-controls"() {
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => o(ln),
                {
                  onblur: (We) => {
                    var mt;
                    z(L, !1), z(N, !0), Ze(B(), "blur", We), (mt = e.input$onblur) == null || mt.call(e, We);
                  },
                  onfocus: (We) => {
                    var mt;
                    z(L, !0), Ze(B(), "focus", We), (mt = e.input$onfocus) == null || mt.call(e, We);
                  },
                  get value() {
                    return g();
                  },
                  set value(We) {
                    g(We);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(We) {
                    _(We);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(We) {
                    I(We);
                  }
                }
              )),
              (We) => y(We),
              () => y()
            );
          }
          var xt = _e(Qe, 2);
          Ae(xt, () => e.internalCounter ?? ve), Oe((ln) => Do($e, 1, ln), [
            () => Wu(Ve({
              "mdc-text-field__resizer": !("input$resizable" in F) || e.input$resizable
            }))
          ]), w(He, $e);
        }, Mt = (He) => {
          var $e = vg(), Qe = Z($e);
          {
            var xt = (At) => {
              var Xe = $(), St = Z(Xe);
              {
                var Bt = (pt) => {
                  ag(pt, {
                    children: (Tt, nn) => {
                      var gt = Pt();
                      Oe(() => at(gt, e.prefix)), w(Tt, gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, qt = (pt) => {
                  var Tt = $(), nn = Z(Tt);
                  Ae(nn, () => e.prefix ?? ve), w(pt, Tt);
                };
                ne(St, (pt) => {
                  typeof e.prefix == "string" ? pt(Bt) : pt(qt, !1);
                });
              }
              w(At, Xe);
            };
            ne(Qe, (At) => {
              e.prefix != null && At(xt);
            });
          }
          var ln = _e(Qe, 2);
          {
            let At = /* @__PURE__ */ fe(() => ht(F, "input$"));
            xe(
              lg(ln, it(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return o(N);
                  },
                  get "aria-controls"() {
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(At),
                {
                  onblur: (Xe) => {
                    var St;
                    z(L, !1), z(N, !0), Ze(B(), "blur", Xe), (St = e.input$onblur) == null || St.call(e, Xe);
                  },
                  onfocus: (Xe) => {
                    var St;
                    z(L, !0), Ze(B(), "focus", Xe), (St = e.input$onfocus) == null || St.call(e, Xe);
                  },
                  get value() {
                    return g();
                  },
                  set value(Xe) {
                    g(Xe);
                  },
                  get files() {
                    return b();
                  },
                  set files(Xe) {
                    b(Xe);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Xe) {
                    _(Xe);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Xe) {
                    I(Xe);
                  }
                }
              )),
              (Xe) => y(Xe),
              () => y()
            );
          }
          var We = _e(ln, 2);
          {
            var mt = (At) => {
              var Xe = $(), St = Z(Xe);
              {
                var Bt = (pt) => {
                  sg(pt, {
                    children: (Tt, nn) => {
                      var gt = Pt();
                      Oe(() => at(gt, e.suffix)), w(Tt, gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, qt = (pt) => {
                  var Tt = $(), nn = Z(Tt);
                  Ae(nn, () => e.suffix ?? ve), w(pt, Tt);
                };
                ne(St, (pt) => {
                  typeof e.suffix == "string" ? pt(Bt) : pt(qt, !1);
                });
              }
              w(At, Xe);
            };
            ne(We, (At) => {
              e.suffix != null && At(mt);
            });
          }
          w(He, $e);
        };
        ne(ut, (He) => {
          h() && typeof g() == "string" ? He(dt) : He(Mt, !1);
        });
      }
      var Mn = _e(ut, 2);
      Ua(Mn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (He, $e) => {
          var Qe = $(), xt = Z(Qe);
          Ae(xt, () => e.trailingIcon ?? ve), w(He, Qe);
        },
        $$slots: { default: !0 }
      });
      var ui = _e(Mn, 2);
      {
        var Dn = (He) => {
          {
            let $e = /* @__PURE__ */ fe(() => ht(F, "ripple$"));
            xe(wc(He, it(() => o($e))), (Qe) => U(Qe), () => U());
          }
        };
        ne(ui, (He) => {
          !h() && f() !== "outlined" && l() && He(Dn);
        });
      }
      xe(Y, (He) => G = He, () => G), Ue(Y, (He, $e) => Xt == null ? void 0 : Xt(He, $e), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: ye,
        addStyle: Be,
        eventTarget: o(Te),
        activeTarget: o(Te),
        initPromise: Ce
      })), Ue(Y, (He, $e) => W == null ? void 0 : W(He, $e), a), w(j, Y);
    }, Cn = (j) => {
      var Y = gg();
      ze(Y, (ut, dt, Mt) => ({ class: ut, style: dt, ...Mt }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...K,
          [s()]: !0
        }),
        () => Object.entries(J).map(([ut, dt]) => `${ut}: ${dt};`).concat([u()]).join(" "),
        () => Vi(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ge(Y);
      {
        var st = (ut) => {
          var dt = $(), Mt = Z(dt);
          Ae(Mt, () => e.label ?? ve), w(ut, dt);
        };
        ne(Me, (ut) => {
          typeof e.label != "string" && ut(st);
        });
      }
      var nt = _e(Me, 2);
      Ua(nt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ut, dt) => {
          var Mt = $(), Mn = Z(Mt);
          Ae(Mn, () => e.leadingIcon ?? ve), w(ut, Mt);
        },
        $$slots: { default: !0 }
      });
      var Et = _e(nt, 2);
      Ae(Et, () => e.children ?? ve);
      var kt = _e(Et, 2);
      Ua(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ut, dt) => {
          var Mt = $(), Mn = Z(Mt);
          Ae(Mn, () => e.trailingIcon ?? ve), w(ut, Mt);
        },
        $$slots: { default: !0 }
      });
      var dr = _e(kt, 2);
      Ae(dr, () => e.line ?? ve), xe(Y, (ut) => G = ut, () => G), Ue(Y, (ut, dt) => Xt == null ? void 0 : Xt(ut, dt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: ye,
        addStyle: Be
      })), Ue(Y, (ut, dt) => W == null ? void 0 : W(ut, dt), a), w(j, Y);
    };
    ne(Ot, (j) => {
      pe ? j(Rt) : j(Cn, !1);
    });
  }
  var de = _e(Ot, 2);
  {
    var se = (j) => {
      {
        let Y = /* @__PURE__ */ fe(() => ht(F, "helperLine$"));
        ig(j, it(() => o(Y), {
          children: (Me, st) => {
            var nt = $(), Et = Z(nt);
            Ae(Et, () => e.helper ?? ve), w(Me, nt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(de, (j) => {
      e.helper && j(se);
    });
  }
  return w(t, Ge), Le(oe);
}
var bg = /* @__PURE__ */ he("<i><!></i>");
function _g(t, e) {
  we(e, !0);
  const n = () => Gn(v, "$leadingStore", r), [r, i] = cr();
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ me(void 0), f = new Xi(), m = be({});
  const v = ue("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ me(void 0);
  const I = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: u() })), A = ue("SMUI:textfield:leading-icon:mount"), S = ue("SMUI:textfield:leading-icon:unmount"), _ = ue("SMUI:textfield:trailing-icon:mount"), E = ue("SMUI:textfield:trailing-icon:unmount");
  lt(() => (z(
    h,
    new Jm({
      getAttr: C,
      setAttr: T,
      removeAttr: x,
      setContent: (k) => {
        z(b, k, !0);
      },
      registerInteractionHandler: (k, H) => f.on(y(), k, H),
      deregisterInteractionHandler: (k, H) => f.off(y(), k, H),
      notifyIconAction: () => Ze(y(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? A && A(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var k;
    o(h) && (g ? S && S(o(h)) : E && E(o(h))), (k = o(h)) == null || k.destroy(), f.clear();
  }));
  function C(k) {
    return k in m ? m[k] ?? null : y().getAttribute(k);
  }
  function T(k, H) {
    m[k] !== H && (m[k] = H);
  }
  function x(k) {
    (!(k in m) || m[k] != null) && (m[k] = void 0);
  }
  function y() {
    return d;
  }
  var R = { getElement: y }, U = bg();
  ze(
    U,
    (k) => ({
      class: k,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...m,
      ...c
    }),
    [
      () => Ve({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var P = ge(U);
  {
    var F = (k) => {
      var H = $(), K = Z(H);
      Ae(K, () => e.children ?? ve), w(k, H);
    }, pe = (k) => {
      var H = Pt();
      Oe(() => at(H, o(b))), w(k, H);
    };
    ne(P, (k) => {
      o(b) == null ? k(F) : k(pe, !1);
    });
  }
  xe(U, (k) => d = k, () => d), Ue(U, (k, H) => W == null ? void 0 : W(k, H), a), w(t, U);
  var G = Le(R);
  return i(), G;
}
function yg(t, e) {
  we(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), s = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "oninput", 3, () => {
  });
  var d = $(), h = Z(d);
  {
    var f = (v) => {
      {
        const g = (I) => {
          _g(I, {
            class: "material-icons",
            children: (A, S) => {
              var _ = Pt();
              Oe(() => at(_, i())), w(A, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ fe(() => `width: 100%; ${u()}`);
        mo(v, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return o(b);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return c();
          },
          get value() {
            return a();
          },
          set value(I) {
            a(I);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      mo(v, {
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
        get oninput() {
          return c();
        },
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    ne(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  w(t, d), Le();
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
var Ig = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Eg = {
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
}, ia = {
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
}, _t;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(_t || (_t = {}));
var $r;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})($r || ($r = {}));
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
var vr, Jn, Fe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
vr = {}, vr["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", vr["" + Fe.LIST_ITEM_CLASS] = "mdc-list-item", vr["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", vr["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", vr["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", vr["" + Fe.ROOT] = "mdc-list";
var mi = (Jn = {}, Jn["" + Fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Jn["" + Fe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Jn["" + Fe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Jn["" + Fe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Jn["" + Fe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Jn["" + Fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Jn["" + Fe.ROOT] = "mdc-deprecated-list", Jn), mr = {
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
    .` + Fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` a,
    .` + mi[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Fe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` a,
    .` + Fe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Fe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + mi[Fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Fe.LIST_ITEM_CLASS] + ` a,
    .` + mi[Fe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + mi[Fe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, bt = {
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
var Ag = ["input", "button", "textarea", "select"], pn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Ag.indexOf(n) === -1 && t.preventDefault();
  }
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
function Sg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Cg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(s) {
    s.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function go(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Rc(e);
  }, bt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = xg(i, a, u, e) : l = Tg(i, u, e), l !== -1 && !s && r(l), l;
}
function xg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var s = a[r.sortedIndexCursor].index;
    if (!n(s))
      return s;
  }
  r.currentFirstChar = i;
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function Tg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, u = -1; s !== n.sortedIndexCursor; ) {
    var l = i[s], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function Oc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Rc(t) {
  t.typeaheadBuffer = "";
}
function Bl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = It(n) === "ArrowLeft", c = It(n) === "ArrowUp", d = It(n) === "ArrowRight", h = It(n) === "ArrowDown", f = It(n) === "Home", m = It(n) === "End", v = It(n) === "Enter", g = It(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || m || v)
    return -1;
  var b = !g && n.key.length === 1;
  if (b) {
    pn(n);
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return go(I, e);
  }
  if (!g)
    return -1;
  r && pn(n);
  var A = r && Oc(e);
  if (A) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return go(I, e);
  }
  return -1;
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
function wg(t) {
  return t instanceof Array;
}
var Lg = ["Alt", "Control", "Meta", "Shift"];
function Fl(t) {
  var e = new Set(t ? Lg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Og = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = bt.UNSET_INDEX, r.focusedItemIndex = bt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Sg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== bt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Fe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = bt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Fe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Oc(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, r) {
      r === void 0 && (r = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, r) : this.isRadioList ? this.setRadioAtIndex(n, r) : this.setSingleSelectionAtIndex(n, r));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var r = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, Fe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, u = It(n) === "ArrowLeft", l = It(n) === "ArrowUp", c = It(n) === "ArrowRight", d = It(n) === "ArrowDown", h = It(n) === "Home", f = It(n) === "End", m = It(n) === "Enter", v = It(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, I = n.key === "A" || n.key === "a", A = Fl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && A([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && A([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          Bl(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && A([]))
          pn(n), this.focusNextElement(E);
        else if (b && A([]))
          pn(n), this.focusPrevElement(E);
        else if (g && A(["Shift"]) && this.isCheckboxList) {
          pn(n);
          var S = this.focusNextElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (b && A(["Shift"]) && this.isCheckboxList) {
          pn(n);
          var S = this.focusPrevElement(E);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && A([]))
          pn(n), this.focusFirstElement();
        else if (f && A([]))
          pn(n), this.focusLastElement();
        else if (h && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (pn(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (pn(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (I && A(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && A([])) {
          if (r) {
            var C = n.target;
            if (C && C.tagName === "A" && m || (pn(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || v) && A(["Shift"]) && this.isCheckboxList) {
          var C = n.target;
          if (C && C.tagName === "A" && m || (pn(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(x) {
              a.focusItemAtIndex(x);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(x) {
              return a.isIndexDisabled(x);
            }
          };
          Bl(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Fl(i);
      n !== bt.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, r) {
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Fe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Fe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== bt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== bt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === bt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? mr.ARIA_CURRENT : mr.ARIA_SELECTED;
      if (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== bt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mr.ARIA_SELECTED : mr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === bt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Cr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = jn([], Cr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === bt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== bt.UNSET_INDEX ? this.selectedIndex : wg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
        return Math.min(n, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, r) {
      var i = this;
      if (r === void 0 && (r = !0), n instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === bt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), s;
      r ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, s)), this.adapter.setAttributeForElementIndex(n, i, s ? "true" : "false");
      var u = this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], s = 0; s < i; s++)
          (!this.isIndexDisabled(s) || n.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var s = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return go(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Cg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Rc(this.typeaheadState);
    }, e;
  }(jt)
);
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
var Mc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = $r.TOP_START, r.originCorner = $r.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ig;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Eg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = e.cssClasses, r = n.ROOT, i = n.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(n) {
      this.anchorCorner = n;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ _t.RIGHT;
    }, e.prototype.setAnchorMargin = function(n) {
      this.anchorMargin.top = n.top || 0, this.anchorMargin.right = n.right || 0, this.anchorMargin.bottom = n.bottom || 0, this.anchorMargin.left = n.left || 0;
    }, e.prototype.setIsHoisted = function(n) {
      this.isHoistedElement = n;
    }, e.prototype.setFixedPosition = function(n) {
      this.isFixedPosition = n;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(n, r) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(r) ? r : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(n) {
      this.isHorizontallyCenteredOnViewport = n;
    }, e.prototype.setQuickOpen = function(n) {
      this.isQuickOpen = n;
    }, e.prototype.setMaxHeight = function(n) {
      this.maxHeight = n;
    }, e.prototype.setOpenBottomBias = function(n) {
      this.openBottomBias = n;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var n = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        n.dimensions = n.adapter.getInnerDimensions(), n.autoposition(), n.adapter.addClass(e.cssClasses.OPEN), n.openAnimationEndTimerId = setTimeout(function() {
          n.openAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), n.adapter.notifyOpen();
        }, ia.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var r = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, ia.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var r = n.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.keyCode, i = n.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, _t.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, _t.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[s] = u, n[a] = l, n);
      d.width / h.width > ia.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, _t.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: i.width - n.right,
          bottom: i.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, _t.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, _t.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, _t.FLIP_RTL), v = this.hasBit(this.anchorCorner, _t.RIGHT) || this.hasBit(n, _t.RIGHT), g = !1;
      f && m ? g = !v : g = v;
      var b, I;
      g ? (b = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var A = b - s.width > 0, S = I - s.width > 0, _ = this.hasBit(n, _t.FLIP_RTL) && this.hasBit(n, _t.RIGHT);
      return S && _ && f || !A && _ ? n = this.unsetBit(n, _t.RIGHT) : (A && g && f || A && !g && v || !S && b >= I) && (n = this.setBit(n, _t.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, _t.BOTTOM), s = this.hasBit(this.anchorCorner, _t.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, _t.RIGHT), a = this.hasBit(this.anchorCorner, _t.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, _t.BOTTOM), a = this.hasBit(this.anchorCorner, _t.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Lt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          v += u[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
        }
      } catch (g) {
        r = { error: g };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, ia.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(jt)
);
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
var Vl = {
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
function Rg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Mg(t, e) {
  if (Rg(t) && e in Vl) {
    var n = t.document.createElement("div"), r = Vl[e], i = r.standard, a = r.prefixed, s = i in n.style;
    return s ? i : a;
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
var Ci = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, gi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dg = {
  FOCUS_ROOT_INDEX: -1
}, Ii;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
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
var Hg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ii.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key, i = n.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var r = this, i = this.adapter.getElementIndex(n);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, gi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Mc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ii.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ii.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ii.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(n) {
      this.defaultFocusState = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n) {
      if (this.validatedIndex(n), !this.adapter.isSelectableItemAtIndex(n))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, gi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ci.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ci.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, gi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, gi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Fe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, gi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(jt)
);
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
var ft = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Gs = {
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
}, Vr = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
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
var Pg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Vr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(n, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Vr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return n !== Vr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(ft.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ft.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ft.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(ft.FOCUSED), i = n || r, a = this.adapter.hasClass(ft.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), r = n.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), r = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(ft.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(ft.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ft.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(n) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(n), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(n) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(ft.FOCUSED))) {
        var r = It(n) === Pe.ENTER, i = It(n) === Pe.SPACEBAR, a = It(n) === Pe.ARROW_UP, s = It(n) === Pe.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(ft.FOCUSED);
        if (n) {
          var i = Vr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(n) {
      this.useDefaultValidation = n;
    }, e.prototype.setValid = function(n) {
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(ft.INVALID), this.adapter.removeMenuClass(ft.MENU_INVALID)) : (this.adapter.addClass(ft.INVALID), this.adapter.addMenuClass(ft.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ft.REQUIRED) && !this.adapter.hasClass(ft.DISABLED) ? this.getSelectedIndex() !== Vr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(ft.REQUIRED) : this.adapter.removeClass(ft.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner($r.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ft.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ft.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ft.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(ft.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Gs.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Gs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(jt)
);
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
var Gr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, $n = {
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
var Ng = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(Gr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Gr.ROLE) : this.adapter.setAttr(Gr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Gr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Gr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Gr.ARIA_HIDDEN, "true");
    }, e;
  }(jt)
), Ug = /* @__PURE__ */ he("<div><!></div>");
function kg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), s = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => be(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), I = p(e, "neverRestoreFocus", 3, !1), A = /* @__PURE__ */ Ye(e, [
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
  ]), S, _ = /* @__PURE__ */ me(void 0), E = be({}), C = be({}), T = /* @__PURE__ */ me(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), Se(() => {
    var V, re;
    S && s() && !((V = S.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((re = S.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Se(() => {
    o(_) && o(_).isOpen() !== l() && (l() ? o(_).open() : o(_).close());
  }), Se(() => {
    o(_) && o(_).setQuickOpen(h());
  }), Se(() => {
    o(_) && o(_).setFixedPosition(u());
  }), Se(() => {
    o(_) && o(_).setMaxHeight(v());
  }), Se(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const x = $r;
  Se(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(x[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), Se(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const y = ue("SMUI:menu-surface:mount"), R = ue("SMUI:menu-surface:unmount");
  lt(() => {
    z(
      _,
      new Mc({
        addClass: P,
        removeClass: F,
        hasClass: U,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ze(N(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ze(N(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ze(N(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ze(N(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => N().contains(re),
        isRtl: () => getComputedStyle(N()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          C["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === N(),
        saveFocus: () => {
          z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!S || N().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: N().offsetWidth,
          height: N().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (re) => {
          C.left = "left" in re ? `${re.left}px` : "", C.right = "right" in re ? `${re.right}px` : "", C.top = "top" in re ? `${re.top}px` : "", C.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          C["max-height"] = re;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: pe
    };
    return y && y(V), o(_).init(), () => {
      var X, ie;
      R && R(V);
      const re = o(_).isHoistedElement;
      (X = o(_)) == null || X.destroy(), re && ((ie = N().parentNode) == null || ie.removeChild(N()));
    };
  }), Sn(() => {
    var V;
    s() && N() && ((V = N().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function U(V) {
    return V in E ? E[V] : N().classList.contains(V);
  }
  function P(V) {
    E[V] || (E[V] = !0);
  }
  function F(V) {
    (!(V in E) || E[V]) && (E[V] = !1);
  }
  function pe(V) {
    var re;
    (re = o(_)) == null || re.close(V), l(!1);
  }
  function G(V) {
    o(_) && l() && !c() && o(_).handleBodyClick(V);
  }
  function k() {
    return l();
  }
  function H(V) {
    l(V);
  }
  function K(V, re) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(V, re);
  }
  function J(V) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(V);
  }
  function D() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).isFixed();
  }
  function L() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).flipCornerHorizontally();
  }
  function N() {
    return S;
  }
  var Ee = {
    isOpen: k,
    setOpen: H,
    setAbsolutePosition: K,
    setIsHoisted: J,
    isFixed: D,
    flipCornerHorizontally: L,
    getElement: N
  }, Ie = Ug();
  oa("click", Eu.body, G, !0);
  var ce = (V) => {
    var re;
    o(_) && !c() && o(_).handleKeydown(V), (re = e.onkeydown) == null || re.call(e, V);
  };
  ze(
    Ie,
    (V, re) => ({
      class: V,
      style: re,
      role: "dialog",
      ...A,
      onkeydown: ce
    }),
    [
      () => Ve({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(C).map(([V, re]) => `${V}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var Ce = ge(Ie);
  return Ae(Ce, () => e.children ?? ve), xe(Ie, (V) => S = V, () => S), Ue(Ie, (V, re) => W == null ? void 0 : W(V, re), n), w(t, Ie), Le(Ee);
}
function js(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bg(t, e) {
  we(e, !0);
  const { closest: n } = Cs;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), s = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ me(void 0), h = /* @__PURE__ */ me(void 0), f = /* @__PURE__ */ me(void 0);
  te("SMUI:menu-surface:mount", (x) => {
    o(h) || z(h, x, !0);
  });
  const m = ue("SMUI:list:mount");
  te("SMUI:list:mount", (x) => {
    o(f) || z(f, x, !0), m && m(x);
  });
  const v = ue("SMUI:menu:mount"), g = ue("SMUI:menu:unmount");
  lt(() => (z(
    d,
    new Hg({
      addClassToElementAtIndex: (x, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(x, y);
      },
      removeClassFromElementAtIndex: (x, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(x, y);
      },
      addAttributeToElementAtIndex: (x, y, R) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(x, y, R);
      },
      removeAttributeFromElementAtIndex: (x, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(x, y);
      },
      getAttributeFromElementAtIndex: (x, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(x, y);
      },
      elementContainsClass: (x, y) => x.classList.contains(y),
      closeSurface: (x) => {
        var y;
        u() || ((y = o(h)) == null || y.closeProgrammatic(x), Ze(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((y) => y.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Ze(C(), "SMUIMenuSelected", {
          index: x.index,
          item: o(f).getOrderedList()[x.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(x);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(o(f).getOrderedList()[x].element, `.${Ci.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const y = o(f).getOrderedList(), R = n(y[x].element, `.${Ci.MENU_SELECTION_GROUP}`), U = R == null ? void 0 : R.querySelector(`.${Ci.MENU_SELECTED_LIST_ITEM}`);
        return U ? y.map((P) => P.element).indexOf(U) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var x;
    g && o(d) && g(o(d)), (x = o(d)) == null || x.destroy();
  }));
  function b(x) {
    o(d) && o(d).handleKeydown(x);
  }
  function I() {
    return a();
  }
  function A(x) {
    a(x);
  }
  function S(x) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(x);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function C() {
    return c.getElement();
  }
  var T = {
    isOpen: I,
    setOpen: A,
    setDefaultFocusState: S,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: C
  };
  {
    let x = /* @__PURE__ */ fe(() => Ve({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      kg(t, it(
        {
          get use() {
            return r();
          },
          get class() {
            return o(x);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (y) => {
            var R;
            b(y), (R = e.onkeydown) == null || R.call(e, y);
          },
          onSMUIMenuSurfaceOpened: (y) => {
            var R;
            o(d) && o(d).handleMenuSurfaceOpened(), (R = e.onSMUIMenuSurfaceOpened) == null || R.call(e, y);
          },
          onSMUIListAction: (y) => {
            var R;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[y.detail.index].element), (R = e.onSMUIListAction) == null || R.call(e, y);
          },
          get open() {
            return a();
          },
          set open(y) {
            a(y);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(y) {
            s(y);
          },
          children: (y, R) => {
            var U = $(), P = Z(U);
            Ae(P, () => e.children ?? ve), w(y, U);
          },
          $$slots: { default: !0 }
        }
      )),
      (y) => c = y,
      () => c
    );
  }
  return Le(T);
}
function Fg(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = Cs;
  let i = ue("SMUI:list:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), v = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), I = p(e, "vertical", 3, !0), A = p(e, "wrapFocus", 19, () => ue("SMUI:list:wrapFocus") ?? !1), S = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), C = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), x = p(e, "hasTypeahead", 3, !1), y = p(e, "component", 3, Ki), R = p(e, "tag", 3, i ? "nav" : "ul"), U = /* @__PURE__ */ Ye(e, [
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
  ]), P, F = /* @__PURE__ */ me(void 0), pe = [], G = ue("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let H = ue("SMUI:dialog:selection"), K = ue("SMUI:addLayoutListener"), J;
  te("SMUI:list:nonInteractive", u()), te("SMUI:separator:context", "list"), G || (S() ? (G = "listbox", te("SMUI:list:item:role", "option")) : C() ? (G = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (G = "group", te("SMUI:list:item:role", "checkbox")) : (G = "list", te("SMUI:list:item:role", void 0))), Se(() => {
    o(F) && o(F).setVerticalOrientation(I());
  }), Se(() => {
    o(F) && o(F).setWrapFocus(A());
  }), Se(() => {
    o(F) && o(F).setHasTypeahead(x());
  }), Se(() => {
    o(F) && o(F).setSingleSelection(S());
  }), Se(() => {
    o(F) && o(F).setDisabledItemsFocusable(_());
  }), Se(() => {
    o(F) && S() && M() !== E() && o(F).setSelectedIndex(E());
  }), K && (J = K(Be)), te("SMUI:list:item:mount", (de) => {
    pe.push(de), k.set(de.element, de), S() && de.selected && E(ye(de.element));
  }), te("SMUI:list:item:unmount", (de) => {
    const se = (de && pe.findIndex((j) => j === de)) ?? -1;
    se !== -1 && (pe.splice(se, 1), k.delete(de.element));
  });
  const D = ue("SMUI:list:mount"), L = ue("SMUI:list:unmount");
  lt(() => {
    z(
      F,
      new Og({
        addClassForElementIndex: X,
        focusItemAtIndex: oe,
        getAttributeForElementIndex: (se, j) => {
          var Y;
          return ((Y = V()[se]) == null ? void 0 : Y.getAttr(j)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((se) => se.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => pe.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (se) => {
          var j;
          return ((j = V()[se]) == null ? void 0 : j.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (se) => {
          var j;
          return ((j = V()[se]) == null ? void 0 : j.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (se) => {
          const j = V()[se];
          return ((j == null ? void 0 : j.hasCheckbox) && j.checked) ?? !1;
        },
        isFocusInsideList: () => P != null && Ge() !== document.activeElement && Ge().contains(document.activeElement),
        isRootFocused: () => P != null && document.activeElement === Ge(),
        listItemAtIndexHasClass: re,
        notifyAction: (se) => {
          E(se), P != null && Ze(Ge(), "SMUIListAction", { index: se });
        },
        notifySelectionChange: (se) => {
          P != null && Ze(Ge(), "SMUIListSelectionChange", { changedIndices: se });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: Te,
        setCheckedCheckboxOrRadioAtIndex: (se, j) => {
          V()[se].checked = j;
        },
        setTabIndexForListItemChildren: (se, j) => {
          const Y = V()[se];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (st) => {
            st.setAttribute("tabindex", j);
          });
        }
      }),
      !0
    );
    const de = {
      get element() {
        return Ge();
      },
      get items() {
        return pe;
      },
      get typeaheadInProgress() {
        if (!o(F))
          throw new Error("Instance is undefined.");
        return o(F).isTypeaheadInProgress();
      },
      typeaheadMatchItem(se, j) {
        if (!o(F))
          throw new Error("Instance is undefined.");
        return o(F).typeaheadMatchItem(
          se,
          j,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: oe,
      addClassForElementIndex: X,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: Te,
      removeAttributeForElementIndex: q,
      getAttributeFromElementIndex: ee,
      getPrimaryTextAtIndex: Re
    };
    return D && D(de), o(F).init(), o(F).layout(), () => {
      var se;
      L && L(de), (se = o(F)) == null || se.destroy();
    };
  }), Sn(() => {
    J && J();
  });
  function N(de) {
    o(F) && de.target && o(F).handleKeydown(de, de.target.classList.contains("mdc-deprecated-list-item"), ye(de.target));
  }
  function Ee(de) {
    o(F) && de.target && o(F).handleFocusIn(ye(de.target));
  }
  function Ie(de) {
    o(F) && de.target && o(F).handleFocusOut(ye(de.target));
  }
  function ce(de) {
    o(F) && de.target && o(F).handleClick(ye(de.target), !r(de.target, 'input[type="checkbox"], input[type="radio"]'), de);
  }
  function Ce(de) {
    if (C() || T()) {
      const se = ye(de.target);
      if (se !== -1) {
        const j = V()[se];
        j && (C() && !j.checked || T()) && (r(de.detail.target, 'input[type="checkbox"], input[type="radio"]') || (j.checked = !j.checked), j.activateRipple(), window.requestAnimationFrame(() => {
          j.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return P == null ? [] : [...Ge().children].map((de) => k.get(de)).filter((de) => de && de._smui_list_item_accessor);
  }
  function re(de, se) {
    const j = V()[de];
    return (j && j.hasClass(se)) ?? !1;
  }
  function X(de, se) {
    const j = V()[de];
    j && j.addClass(se);
  }
  function ie(de, se) {
    const j = V()[de];
    j && j.removeClass(se);
  }
  function Te(de, se, j) {
    const Y = V()[de];
    Y && Y.addAttr(se, j);
  }
  function q(de, se) {
    const j = V()[de];
    j && j.removeAttr(se);
  }
  function ee(de, se) {
    const j = V()[de];
    return j ? j.getAttr(se) : null;
  }
  function Re(de) {
    const se = V()[de];
    return (se && se.getPrimaryText()) ?? "";
  }
  function ye(de) {
    const se = n(de, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return se && r(se, ".mdc-deprecated-list-item") ? V().map((j) => j == null ? void 0 : j.element).indexOf(se) : -1;
  }
  function Be() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).layout();
  }
  function Je(de, se) {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).setEnabled(de, se);
  }
  function vt() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).isTypeaheadInProgress();
  }
  function M() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).getSelectedIndex();
  }
  function B() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).getFocusedItemIndex();
  }
  function oe(de) {
    const se = V()[de];
    se && "focus" in se.element && se.element.focus();
  }
  function Ge() {
    return P.getElement();
  }
  var Ot = {
    layout: Be,
    setEnabled: Je,
    getTypeaheadInProgress: vt,
    getSelectedIndex: M,
    getFocusedItemIndex: B,
    focusItemAtIndex: oe,
    getElement: Ge
  }, Rt = $(), Cn = Z(Rt);
  {
    let de = /* @__PURE__ */ fe(() => Ve({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [s()]: !0
    }));
    oi(Cn, y, (se, j) => {
      xe(
        j(se, it(
          {
            get tag() {
              return R();
            },
            get use() {
              return a();
            },
            get class() {
              return o(de);
            },
            get role() {
              return G;
            }
          },
          () => U,
          {
            onkeydown: (Y) => {
              var Me;
              N(Y), (Me = e.onkeydown) == null || Me.call(e, Y);
            },
            onfocusin: (Y) => {
              var Me;
              Ee(Y), (Me = e.onfocusin) == null || Me.call(e, Y);
            },
            onfocusout: (Y) => {
              var Me;
              Ie(Y), (Me = e.onfocusout) == null || Me.call(e, Y);
            },
            onclick: (Y) => {
              var Me;
              ce(Y), (Me = e.onclick) == null || Me.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Me;
              Ce(Y), (Me = e.onSMUIAction) == null || Me.call(e, Y);
            },
            children: (Y, Me) => {
              var st = $(), nt = Z(st);
              Ae(nt, () => e.children ?? ve), w(Y, st);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => P = Y,
        () => P
      );
    });
  }
  return w(t, Rt), Le(Ot);
}
let Vg = 0;
var Gg = /* @__PURE__ */ he('<span class="mdc-deprecated-list-item__ripple"></span>'), jg = /* @__PURE__ */ he("<!><!>", 1);
function qg(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = ue("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => ue("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : ue("SMUI:list:item:role")), m = p(e, "selected", 15, !1), v = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), I = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Vg++), A = p(e, "component", 3, Ki), S = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Ye(e, [
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
  ]);
  te("SMUI:list:nonInteractive", void 0), te("SMUI:list:item:role", void 0);
  let E, C = be({}), T = be({}), x = be({}), y = /* @__PURE__ */ me(void 0), R = /* @__PURE__ */ me(void 0);
  const U = /* @__PURE__ */ fe(() => r(b()) ? !l() && !v() && (m() || o(y) && o(y).checked) ? 0 : -1 : b());
  te("SMUI:generic:input:props", { id: I() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && z(y, X, !0);
  }), te("SMUI:generic:input:unmount", () => {
    z(y, void 0);
  });
  const P = ue("SMUI:list:item:mount"), F = ue("SMUI:list:item:unmount");
  lt(() => {
    if (!m() && !l()) {
      let ie = !0, Te = E.getElement();
      for (; Te.previousElementSibling; )
        if (Te = Te.previousElementSibling, Te.nodeType === 1 && Te.classList.contains("mdc-deprecated-list-item") && !Te.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && z(R, window.requestAnimationFrame(() => L(Te)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return ce();
      },
      get selected() {
        return m();
      },
      set selected(ie) {
        m(ie);
      },
      hasClass: pe,
      addClass: G,
      removeClass: k,
      getAttr: K,
      addAttr: J,
      removeAttr: D,
      getPrimaryText: Ie,
      // For inputs within item.
      get checked() {
        return (o(y) && o(y).checked) ?? !1;
      },
      set checked(ie) {
        o(y) && (o(y).checked = !!ie);
      },
      get hasCheckbox() {
        return !!(o(y) && "_smui_checkbox_accessor" in o(y));
      },
      get hasRadio() {
        return !!(o(y) && "_smui_radio_accessor" in o(y));
      },
      activateRipple() {
        o(y) && o(y).activateRipple();
      },
      deactivateRipple() {
        o(y) && o(y).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ee,
      get tabindex() {
        return o(U);
      },
      set tabindex(ie) {
        b(ie);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(ie) {
        h(ie);
      }
    };
    return P && P(X), () => {
      F && F(X);
    };
  }), Sn(() => {
    o(R) && window.cancelAnimationFrame(o(R));
  });
  function pe(X) {
    return X in C ? C[X] : ce().classList.contains(X);
  }
  function G(X) {
    C[X] || (C[X] = !0);
  }
  function k(X) {
    (!(X in C) || C[X]) && (C[X] = !1);
  }
  function H(X, ie) {
    T[X] != ie && (ie === "" || ie == null ? delete T[X] : T[X] = ie);
  }
  function K(X) {
    return X in x ? x[X] ?? null : ce().getAttribute(X);
  }
  function J(X, ie) {
    x[X] !== ie && (x[X] = ie);
  }
  function D(X) {
    (!(X in x) || x[X] != null) && (x[X] = void 0);
  }
  function L(X) {
    let ie = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const Te = X.attributes.getNamedItem("tabindex");
        if (Te && Te.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && b(0);
  }
  function N(X) {
    const ie = X.key === "Enter", Te = X.key === "Space";
    (ie || Te) && Ee(X);
  }
  function Ee(X) {
    v() || Ze(ce(), "SMUIAction", X);
  }
  function Ie() {
    const X = ce(), ie = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const Te = X.querySelector(".mdc-deprecated-list-item__text");
    return Te ? Te.textContent ?? "" : X.textContent ?? "";
  }
  function ce() {
    return E.getElement();
  }
  var Ce = { action: Ee, getPrimaryText: Ie, getElement: ce }, V = $(), re = Z(V);
  {
    let X = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Xt,
          {
            ripple: !o(y),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: G,
            removeClass: k,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ fe(() => Ve({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [s()]: !0
    })), Te = /* @__PURE__ */ fe(() => Object.entries(T).map(([ee, Re]) => `${ee}: ${Re};`).concat([u()]).join(" ")), q = /* @__PURE__ */ fe(() => g() || void 0);
    oi(re, A, (ee, Re) => {
      xe(
        Re(ee, it(
          {
            get tag() {
              return S();
            },
            get use() {
              return o(X);
            },
            get class() {
              return o(ie);
            },
            get style() {
              return o(Te);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(y) && o(y).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(q);
            },
            get tabindex() {
              return o(U);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => _,
          {
            onclick: (ye) => {
              var Be;
              Ee(ye), (Be = e.onclick) == null || Be.call(e, ye);
            },
            onkeydown: (ye) => {
              var Be;
              N(ye), (Be = e.onkeydown) == null || Be.call(e, ye);
            },
            children: (ye, Be) => {
              var Je = jg(), vt = Z(Je);
              {
                var M = (oe) => {
                  var Ge = Gg();
                  w(oe, Ge);
                };
                ne(vt, (oe) => {
                  c() && oe(M);
                });
              }
              var B = _e(vt);
              Ae(B, () => e.children ?? ve), w(ye, Je);
            },
            $$slots: { default: !0 }
          }
        )),
        (ye) => E = ye,
        () => E
      );
    });
  }
  return w(t, V), Le(Ce);
}
let zg = 0;
var Wg = /* @__PURE__ */ he("<div><!></div>");
function Xg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + zg++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ me(void 0), d = be({}), h = be({}), f = /* @__PURE__ */ me(void 0);
  const m = ue("SMUI:select:helper-text:id"), v = ue("SMUI:select:helper-text:mount"), g = ue("SMUI:select:helper-text:unmount");
  lt(() => (z(
    c,
    new Ng({
      addClass: I,
      removeClass: A,
      hasClass: b,
      getAttr: S,
      setAttr: _,
      removeAttr: E,
      setContent: (P) => {
        z(f, P, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(c)), o(c).init(), () => {
    var P;
    g && o(c) && g(o(c)), (P = o(c)) == null || P.destroy();
  }));
  function b(P) {
    return P in d ? d[P] : C().classList.contains(P);
  }
  function I(P) {
    d[P] || (d[P] = !0);
  }
  function A(P) {
    (!(P in d) || d[P]) && (d[P] = !1);
  }
  function S(P) {
    return P in h ? h[P] ?? null : C().getAttribute(P);
  }
  function _(P, F) {
    h[P] !== F && (h[P] = F);
  }
  function E(P) {
    (!(P in h) || h[P] != null) && (h[P] = void 0);
  }
  function C() {
    return l;
  }
  var T = { getElement: C }, x = Wg();
  ze(
    x,
    (P) => ({
      class: P,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ve({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var y = ge(x);
  {
    var R = (P) => {
      var F = $(), pe = Z(F);
      Ae(pe, () => e.children ?? ve), w(P, F);
    }, U = (P) => {
      var F = Pt();
      Oe(() => at(F, o(f))), w(P, F);
    };
    ne(y, (P) => {
      o(f) == null ? P(R) : P(U, !1);
    });
  }
  return xe(x, (P) => l = P, () => l), Ue(x, (P, F) => W == null ? void 0 : W(P, F), n), w(t, x), Le(T);
}
let Kg = 0;
var Zg = /* @__PURE__ */ he("<input/>"), Yg = /* @__PURE__ */ he('<span class="mdc-select__ripple"></span>'), Qg = /* @__PURE__ */ he('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Jg(t, e) {
  we(e, !0);
  const n = () => Gn(Ge, "$selectedTextStore", r), [r, i] = cr();
  let a = () => {
  };
  function s(O) {
    return O === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (O) => O), I = p(e, "dirty", 15, !1), A = p(e, "invalid", 15, a), S = p(e, "updateInvalid", 19, () => s(A())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + Kg++), C = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), x = p(e, "anchor$use", 19, () => []), y = p(e, "anchor$class", 3, ""), R = p(e, "selectedTextContainer$use", 19, () => []), U = p(e, "selectedTextContainer$class", 3, ""), P = p(e, "selectedText$use", 19, () => []), F = p(e, "selectedText$class", 3, ""), pe = p(e, "dropdownIcon$use", 19, () => []), G = p(e, "dropdownIcon$class", 3, ""), k = p(e, "menu$class", 3, ""), H = /* @__PURE__ */ Ye(e, [
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
  ]);
  const K = s(A());
  s(A()) && A(!1);
  let J, D = /* @__PURE__ */ me(void 0), L = be({}), N = be({}), Ee, Ie = be({}), ce = /* @__PURE__ */ me(-1);
  const Ce = /* @__PURE__ */ fe(() => H.menu$id ?? E() + "-menu");
  let V = /* @__PURE__ */ me(void 0), re = ue("SMUI:addLayoutListener"), X, ie = /* @__PURE__ */ me(!1), Te = be({}), q = /* @__PURE__ */ me(void 0), ee = /* @__PURE__ */ me(void 0), Re = /* @__PURE__ */ me(!1), ye, Be = ue("SMUI:select:context"), Je, vt, M, B, oe;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const Ge = Qt("");
  te("SMUI:select:selectedText", Ge);
  const Ot = Qt(g());
  Se(() => {
    ri(Ot, g());
  }), te("SMUI:select:value", Ot), Se(() => {
    o(D) && o(D).getValue() !== b()(g()) && o(D).setValue(b()(g()));
  });
  let Rt = o(ce);
  Se(() => {
    if (Rt !== o(ce))
      if (Rt = o(ce), o(D))
        o(D).setSelectedIndex(
          o(ce),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const O = kt();
        g() !== O[o(ce)] && g(O[o(ce)]);
      }
  }), Se(() => {
    o(D) && o(D).getDisabled() !== h() && o(D).setDisabled(h());
  }), Se(() => {
    o(D) && I() && o(D).isValid() !== !A() && (S() ? A(!o(D).isValid()) : o(D).setValid(!A()));
  }), Se(() => {
    o(D) && o(D).getRequired() !== _() && o(D).setRequired(_());
  }), re && (X = re(ui)), te("SMUI:select:leading-icon:mount", (O) => {
    Je = O;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Je = void 0;
  }), te("SMUI:list:mount", (O) => {
    ye = O;
  }), te("SMUI:select:helper-text:id", (O) => {
    z(V, O, !0);
  }), te("SMUI:select:helper-text:mount", (O) => {
    vt = O;
  }), te("SMUI:select:helper-text:unmount", () => {
    z(V, void 0), vt = void 0;
  }), lt(() => (z(
    D,
    new Pg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (O) => {
          ri(Ge, O);
        },
        isSelectAnchorFocused: () => document.activeElement === Ee,
        getSelectAnchorAttr: st,
        setSelectAnchorAttr: nt,
        removeSelectAnchorAttr: Et,
        addMenuClass: Y,
        removeMenuClass: Me,
        openMenu: () => {
          z(ie, !0);
        },
        closeMenu: () => {
          z(ie, !1);
        },
        getAnchorElement: () => Ee,
        setMenuAnchorElement: (O) => {
          z(q, O, !0);
        },
        setMenuAnchorCorner: (O) => {
          z(ee, O, !0);
        },
        setMenuWrapFocus: (O) => {
          z(Re, O, !0);
        },
        getSelectedIndex: () => o(ce),
        setSelectedIndex: (O) => {
          Rt = O, z(ce, O, !0), g(kt()[o(ce)]);
        },
        focusMenuItemAtIndex: (O) => {
          ye.focusItemAtIndex(O);
        },
        getMenuItemCount: () => ye.items.length,
        getMenuItemValues: () => kt().map(b()),
        getMenuItemTextAtIndex: (O) => ye.getPrimaryTextAtIndex(O),
        isTypeaheadInProgress: () => ye.typeaheadInProgress,
        typeaheadMatchItem: (O, ae) => ye.typeaheadMatchItem(O, ae),
        // getCommonAdapterMethods
        addClass: de,
        removeClass: se,
        hasClass: Cn,
        setRippleCenter: (O) => B && B.setRippleCenter(O),
        activateBottomLine: () => B && B.activate(),
        deactivateBottomLine: () => B && B.deactivate(),
        notifyChange: (O) => {
          var ae;
          I(!0), S() && A(!((ae = o(D)) != null && ae.isValid())), Ze(Dn(), "SMUISelectChange", { value: g(), index: o(ce) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!oe,
        notchOutline: (O) => oe && oe.notch(O),
        closeOutline: () => oe && oe.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (O) => M && M.float(O),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (O) => M && M.setRequired(O)
      },
      {
        get helperText() {
          return vt;
        },
        get leadingIcon() {
          return Je;
        }
      }
    ),
    !0
  ), z(ce, kt().indexOf(g()), !0), o(D).init(), Mt(K), () => {
    var O;
    (O = o(D)) == null || O.destroy();
  })), Sn(() => {
    X && X();
  });
  function Cn(O) {
    return O in L ? L[O] : Dn().classList.contains(O);
  }
  function de(O) {
    L[O] || (L[O] = !0);
  }
  function se(O) {
    (!(O in L) || L[O]) && (L[O] = !1);
  }
  function j(O, ae) {
    N[O] != ae && (ae === "" || ae == null ? delete N[O] : N[O] = ae);
  }
  function Y(O) {
    Te[O] || (Te[O] = !0);
  }
  function Me(O) {
    (!(O in Te) || Te[O]) && (Te[O] = !1);
  }
  function st(O) {
    return O in Ie ? Ie[O] ?? null : Dn().getAttribute(O);
  }
  function nt(O, ae) {
    Ie[O] !== ae && (Ie[O] = ae);
  }
  function Et(O) {
    (!(O in Ie) || Ie[O] != null) && (Ie[O] = void 0);
  }
  function kt() {
    return ye.getOrderedList().map((O) => O.getValue());
  }
  function dr(O) {
    const ae = O.currentTarget.getBoundingClientRect();
    return (ut(O) ? O.touches[0].clientX : O.clientX) - ae.left;
  }
  function ut(O) {
    return "touches" in O;
  }
  function dt() {
    if (o(D) == null)
      throw new Error("Instance is undefined.");
    return o(D).getUseDefaultValidation();
  }
  function Mt(O) {
    var ae;
    (ae = o(D)) == null || ae.setUseDefaultValidation(O);
  }
  function Mn() {
    Ee.focus();
  }
  function ui() {
    var O;
    (O = o(D)) == null || O.layout();
  }
  function Dn() {
    return J;
  }
  var He = {
    getUseDefaultValidation: dt,
    setUseDefaultValidation: Mt,
    focus: Mn,
    layout: ui,
    getElement: Dn
  }, $e = Qg(), Qe = Z($e);
  ze(Qe, (O, ae, ot) => ({ class: O, style: ae, ...ot }), [
    () => Ve({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": A(),
      "mdc-select--activated": o(ie),
      "mdc-data-table__pagination-rows-per-page-select": Be === "data-table:pagination",
      ...L,
      [l()]: !0
    }),
    () => Object.entries(N).map(([O, ae]) => `${O}: ${ae};`).concat([c()]).join(" "),
    () => Vi(H, [
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
  var xt = ge(Qe);
  {
    var ln = (O) => {
      var ae = Zg();
      ze(
        ae,
        (ot) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: g(),
          ...ot
        }),
        [() => ht(H, "input$")],
        void 0,
        void 0,
        !0
      ), w(O, ae);
    };
    ne(xt, (O) => {
      C() && O(ln);
    });
  }
  var We = _e(xt, 2), mt = (O) => {
    var ae;
    Ee.focus(), o(D) && o(D).handleClick(dr(O)), (ae = e.anchor$onclick) == null || ae.call(e, O);
  }, At = (O) => {
    var ae;
    o(D) && o(D).handleKeydown(O), (ae = e.onkeydown) == null || ae.call(e, O);
  }, Xe = (O) => {
    var ae;
    o(D) && o(D).handleBlur(), Ze(Dn(), "blur", O), (ae = e.anchor$onblur) == null || ae.call(e, O);
  }, St = (O) => {
    var ae;
    o(D) && o(D).handleFocus(), Ze(Dn(), "focus", O), (ae = e.anchor$onfocus) == null || ae.call(e, O);
  };
  ze(
    We,
    (O, ae) => ({
      class: O,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Ce),
      "aria-expanded": o(ie) ? "true" : "false",
      "aria-describedby": o(V),
      role: "combobox",
      tabindex: "0",
      ...Ie,
      ...ae,
      onclick: mt,
      onkeydown: At,
      onblur: Xe,
      onfocus: St
    }),
    [
      () => Ve({ "mdc-select__anchor": !0, [y()]: !0 }),
      () => ht(H, "anchor$")
    ]
  );
  var Bt = ge(We);
  {
    var qt = (O) => {
      var ae = Yg();
      w(O, ae);
    };
    ne(Bt, (O) => {
      f() === "filled" && O(qt);
    });
  }
  var pt = _e(Bt, 2);
  {
    var Tt = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => E() + "-smui-label"), ot = /* @__PURE__ */ fe(() => n() !== ""), Ct = /* @__PURE__ */ fe(() => ht(H, "label$"));
        xe(
          ss(O, it(
            {
              get id() {
                return o(ae);
              },
              get floatAbove() {
                return o(ot);
              },
              get required() {
                return _();
              }
            },
            () => o(Ct),
            {
              children: (Zn, Yn) => {
                var Qi = $(), ci = Z(Qi);
                {
                  var Ur = (kr) => {
                  }, ws = (kr) => {
                    var La = $(), Ji = Z(La);
                    {
                      var Wo = (hr) => {
                        var Br = Pt();
                        Oe(() => at(Br, v())), w(hr, Br);
                      }, Oa = (hr) => {
                        var Br = $(), Ls = Z(Br);
                        Ae(Ls, v), w(hr, Br);
                      };
                      ne(
                        Ji,
                        (hr) => {
                          typeof v() == "string" ? hr(Wo) : hr(Oa, !1);
                        },
                        !0
                      );
                    }
                    w(kr, La);
                  };
                  ne(ci, (kr) => {
                    v() == null ? kr(Ur) : kr(ws, !1);
                  });
                }
                w(Zn, Qi);
              },
              $$slots: { default: !0 }
            }
          )),
          (Zn) => M = Zn,
          () => M
        );
      }
    };
    ne(pt, (O) => {
      f() !== "outlined" && !m() && v() != null && O(Tt);
    });
  }
  var nn = _e(pt, 2);
  {
    var gt = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => m() || v() == null), ot = /* @__PURE__ */ fe(() => ht(H, "outline$"));
        xe(
          Lc(O, it(
            {
              get noLabel() {
                return o(ae);
              }
            },
            () => o(ot),
            {
              children: (Ct, Zn) => {
                var Yn = $(), Qi = Z(Yn);
                {
                  var ci = (Ur) => {
                    {
                      let ws = /* @__PURE__ */ fe(() => E() + "-smui-label"), kr = /* @__PURE__ */ fe(() => n() !== ""), La = /* @__PURE__ */ fe(() => ht(H, "label$"));
                      xe(
                        ss(Ur, it(
                          {
                            get id() {
                              return o(ws);
                            },
                            get floatAbove() {
                              return o(kr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(La),
                          {
                            children: (Ji, Wo) => {
                              var Oa = $(), hr = Z(Oa);
                              {
                                var Br = ($i) => {
                                }, Ls = ($i) => {
                                  var Xo = $(), ud = Z(Xo);
                                  {
                                    var cd = (di) => {
                                      var ea = Pt();
                                      Oe(() => at(ea, v())), w(di, ea);
                                    }, dd = (di) => {
                                      var ea = $(), fd = Z(ea);
                                      Ae(fd, v), w(di, ea);
                                    };
                                    ne(
                                      ud,
                                      (di) => {
                                        typeof v() == "string" ? di(cd) : di(dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w($i, Xo);
                                };
                                ne(hr, ($i) => {
                                  v() == null ? $i(Br) : $i(Ls, !1);
                                });
                              }
                              w(Ji, Oa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Ji) => M = Ji,
                        () => M
                      );
                    }
                  };
                  ne(Qi, (Ur) => {
                    !m() && v() != null && Ur(ci);
                  });
                }
                w(Ct, Yn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ct) => oe = Ct,
          () => oe
        );
      }
    };
    ne(nn, (O) => {
      f() === "outlined" && O(gt);
    });
  }
  var Pr = _e(nn, 2);
  Ae(Pr, () => e.leadingIcon ?? ve);
  var vn = _e(Pr, 2);
  ze(vn, (O, ae) => ({ class: O, ...ae }), [
    () => Ve({
      "mdc-select__selected-text-container": !0,
      [U()]: !0
    }),
    () => ht(H, "selectedTextContainer$")
  ]);
  var fr = ge(vn);
  ze(
    fr,
    (O, ae) => ({
      id: E() + "-smui-selected-text",
      class: O,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ...ae
    }),
    [
      () => Ve({
        "mdc-select__selected-text": !0,
        [F()]: !0
      }),
      () => ht(H, "selectedText$")
    ]
  );
  var Yi = ge(fr);
  Ue(fr, (O, ae) => W == null ? void 0 : W(O, ae), P), Ue(vn, (O, ae) => W == null ? void 0 : W(O, ae), R);
  var mn = _e(vn, 2);
  ze(mn, (O, ae) => ({ class: O, ...ae }), [
    () => Ve({
      "mdc-select__dropdown-icon": !0,
      [G()]: !0
    }),
    () => ht(H, "dropdownIcon$")
  ]), Ue(mn, (O, ae) => W == null ? void 0 : W(O, ae), pe);
  var Kn = _e(mn, 2);
  {
    var Hn = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => ht(H, "ripple$"));
        xe(wc(O, it(() => o(ae))), (ot) => B = ot, () => B);
      }
    };
    ne(Kn, (O) => {
      f() !== "outlined" && d() && O(Hn);
    });
  }
  xe(We, (O) => Ee = O, () => Ee), Ue(We, (O, ae) => W == null ? void 0 : W(O, ae), x);
  var Nr = _e(We, 2);
  {
    let O = /* @__PURE__ */ fe(() => Ve({
      "mdc-select__menu": !0,
      ...Te,
      [k()]: !0
    })), ae = /* @__PURE__ */ fe(() => ht(H, "menu$"));
    Bg(Nr, it(
      {
        get class() {
          return o(O);
        },
        get id() {
          return o(Ce);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(q);
        },
        get anchorCorner() {
          return o(ee);
        }
      },
      () => o(ae),
      {
        onSMUIMenuSelected: (ot) => {
          var Ct;
          o(D) && o(D).handleMenuItemAction(ot.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, ot);
        },
        onSMUIMenuSurfaceClosing: (ot) => {
          var Ct;
          o(D) && o(D).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, ot);
        },
        onSMUIMenuSurfaceClosed: (ot) => {
          var Ct;
          o(D) && o(D).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, ot);
        },
        onSMUIMenuSurfaceOpened: (ot) => {
          var Ct;
          o(D) && o(D).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, ot);
        },
        get open() {
          return o(ie);
        },
        set open(ot) {
          z(ie, ot, !0);
        },
        children: (ot, Ct) => {
          {
            let Zn = /* @__PURE__ */ fe(() => ht(H, "list$"));
            Fg(ot, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Re);
                }
              },
              () => o(Zn),
              {
                get selectedIndex() {
                  return o(ce);
                },
                set selectedIndex(Yn) {
                  z(ce, Yn, !0);
                },
                children: (Yn, Qi) => {
                  var ci = $(), Ur = Z(ci);
                  Ae(Ur, () => e.children ?? ve), w(Yn, ci);
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
  xe(Qe, (O) => J = O, () => J), Ue(Qe, (O, ae) => Xt == null ? void 0 : Xt(O, ae), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: de,
    removeClass: se,
    addStyle: j
  })), Ue(Qe, (O, ae) => js == null ? void 0 : js(O, ae), () => ({ addClass: de, removeClass: se })), Ue(Qe, (O, ae) => W == null ? void 0 : W(O, ae), u);
  var Ts = _e(Qe, 2);
  {
    var od = (O) => {
      {
        let ae = /* @__PURE__ */ fe(() => ht(H, "helperText$"));
        Xg(O, it(() => o(ae), {
          children: (ot, Ct) => {
            var Zn = $(), Yn = Z(Zn);
            Ae(Yn, () => e.helperText ?? ve), w(ot, Zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(Ts, (O) => {
      e.helperText && O(od);
    });
  }
  Oe(() => at(Yi, n())), w(t, $e);
  var ld = Le(He);
  return i(), ld;
}
function $g(t, e) {
  we(e, !0);
  const n = () => Gn(d, "$selectedValue", r), [r, i] = cr();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let s = p(e, "value", 3, ""), u = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ue("SMUI:select:selectedText"), d = ue("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ fe(() => s() != null && s() !== "" && n() === s());
  lt(f), Sn(f);
  function f() {
    o(h) && l && ri(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  xe(
    qg(t, it(
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
          return o(h);
        }
      },
      () => u,
      {
        children: (b, I) => {
          var A = $(), S = Z(A);
          Ae(S, () => e.children ?? ve), w(b, A);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var g = Le(v);
  return i(), g;
}
function ep(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let s = p(e, "variant", 3, "standard"), u = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  Jg(t, {
    get disabled() {
      return l();
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
    children: (d, h) => {
      var f = $(), m = Z(f);
      Fn(m, 17, n, yi, (v, g, b) => {
        {
          let I = /* @__PURE__ */ fe(() => c(b));
          $g(v, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(g).value;
            },
            children: (A, S) => {
              var _ = Pt();
              Oe(() => at(_, o(g).label)), w(A, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Le();
}
const tp = Qt([]);
tp.subscribe;
be({ freeze: !1 });
const Dt = [];
for (let t = 0; t < 256; ++t)
  Dt.push((t + 256).toString(16).slice(1));
function np(t, e = 0) {
  return (Dt[t[e + 0]] + Dt[t[e + 1]] + Dt[t[e + 2]] + Dt[t[e + 3]] + "-" + Dt[t[e + 4]] + Dt[t[e + 5]] + "-" + Dt[t[e + 6]] + Dt[t[e + 7]] + "-" + Dt[t[e + 8]] + Dt[t[e + 9]] + "-" + Dt[t[e + 10]] + Dt[t[e + 11]] + Dt[t[e + 12]] + Dt[t[e + 13]] + Dt[t[e + 14]] + Dt[t[e + 15]]).toLowerCase();
}
let qs;
const rp = new Uint8Array(16);
function ip() {
  if (!qs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    qs = crypto.getRandomValues.bind(crypto);
  }
  return qs(rp);
}
const ap = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Gl = { randomUUID: ap };
function sp(t, e, n) {
  var i;
  if (Gl.randomUUID && !e && !t)
    return Gl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? ip();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return np(r);
}
var op = /* @__PURE__ */ he('<span class="oscd-icon"><!></span>');
function Wn(t, e) {
  var n = op(), r = ge(n);
  Ae(r, () => e.children ?? ve), w(t, n);
}
var lp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function up(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = lp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var cp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Dc(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = cp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var dp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function fp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = dp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var hp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function vp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = hp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var mp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function gp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = mp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var pp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function bp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = pp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var _p = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function yp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = _p();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var Ip = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = Ip();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
kd();
var Ap = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Sp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Wn(t, {
    children: (r, i) => {
      var a = Ap();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var Cp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function xp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Wn(t, {
    children: (r, i) => {
      var a = Cp();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
function Tp(t, e) {
  e(t.target.value);
}
var wp = /* @__PURE__ */ he('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Lp(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = wp(), a = ge(i);
  a.__change = [Tp, r];
  var s = _e(a, 2), u = ge(s);
  Oe(() => at(u, n())), ga(a, r), w(t, i), Le();
}
hn(["change"]);
function Op(t, e) {
  e(t.target.value);
}
var Rp = /* @__PURE__ */ he('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Mp(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Rp(), a = ge(i);
  a.__change = [Op, r];
  var s = _e(a, 2), u = ge(s);
  Oe(() => at(u, n())), ga(a, r), w(t, i), Le();
}
hn(["change"]);
function Dp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Hp = /* @__PURE__ */ he('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function os(t, e) {
  we(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), s = p(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ me(null), c = /* @__PURE__ */ me(null), d = /* @__PURE__ */ me(null), h = /* @__PURE__ */ me(null), f = /* @__PURE__ */ me(!1), m = /* @__PURE__ */ me(null), v = /* @__PURE__ */ me(null);
  function g() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? z(m, setTimeout(() => z(f, !0), i()), !0) : z(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), z(f, !1);
  }
  function I() {
    g();
  }
  function A() {
    b();
  }
  function S() {
    g();
  }
  function _() {
    b();
  }
  function E() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const y = o(l).getBoundingClientRect(), R = o(h).getBoundingClientRect();
    let U = 0, P = 0;
    const F = 8;
    switch (r()) {
      case "top":
        U = y.top - R.height - F, P = y.left + y.width / 2 - R.width / 2;
        break;
      case "bottom":
        U = y.bottom + F, P = y.left + y.width / 2 - R.width / 2;
        break;
      case "left":
        U = y.top + y.height / 2 - R.height / 2, P = y.left - R.width - F;
        break;
      case "right":
        U = y.top + y.height / 2 - R.height / 2, P = y.right + F;
        break;
    }
    o(c).style.top = `${U + window.scrollY}px`, o(c).style.left = `${P + window.scrollX}px`;
  }
  function C() {
    var y;
    (y = o(v)) == null || y.disconnect(), z(v, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), z(c, null), z(h, null), z(d, null), o(m) && clearTimeout(o(m));
  }
  Sn(C), Se(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(c)) {
        z(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = u, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), z(d, o(c).attachShadow({ mode: "open" }), !0);
        const y = document.createElement("style");
        y.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
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
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, o(d).appendChild(y), z(h, document.createElement("div"), !0), o(d).appendChild(o(h)), z(
          v,
          new MutationObserver(() => {
            o(f) && E();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(c) && (o(c).style.opacity = "1", E());
    }
  }), Se(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const y = o(c), R = setTimeout(
      () => {
        y && y.parentNode && y.parentNode.removeChild(y), o(c) === y && C();
      },
      a()
    );
    return () => clearTimeout(R);
  });
  var T = Hp();
  T.__keydown = [Dp, n, g, b];
  var x = ge(T);
  Ae(x, () => e.children ?? ve), xe(T, (y) => z(l, y), () => o(l)), Oe(() => {
    Sr(T, "aria-describedby", n() && !s() ? u : void 0), Sr(T, "aria-haspopup", n() ? "true" : void 0), Sr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), oa("mouseenter", T, I), oa("mouseleave", T, A), oa("focus", T, S), oa("blur", T, _), w(t, T), Le();
}
hn(["keydown"]);
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
var aa = {
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
}, gn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, jl = {
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
var Pp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = gn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          forceLayout: function() {
          },
          hasNativeControl: function() {
            return !1;
          },
          isAttachedToDOM: function() {
            return !1;
          },
          isChecked: function() {
            return !1;
          },
          isIndeterminate: function() {
            return !1;
          },
          removeClass: function() {
          },
          removeNativeControlAttr: function() {
          },
          setNativeControlAttr: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(aa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(aa.DISABLED) : this.adapter.removeClass(aa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, jl.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = gn.TRANSITION_STATE_UNCHECKED, a = aa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = gn.TRANSITION_STATE_INDETERMINATE, r = gn.TRANSITION_STATE_CHECKED, i = gn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = gn.TRANSITION_STATE_INIT, a = gn.TRANSITION_STATE_CHECKED, s = gn.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, h = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? l : c;
        case a:
          return r === s ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(gn.ARIA_CHECKED_ATTR, gn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(gn.ARIA_CHECKED_ATTR);
    }, e;
  }(jt)
);
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
var un = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, xn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, sa = {
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
var Np = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          attachResizeObserver: function() {
            return null;
          },
          forceLayout: function() {
          },
          getWidth: function() {
            return 0;
          },
          hasClass: function() {
            return !1;
          },
          setBufferBarStyle: function() {
            return null;
          },
          setPrimaryBarStyle: function() {
            return null;
          },
          setStyle: function() {
          },
          removeAttribute: function() {
          },
          removeClass: function() {
          },
          setAttribute: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this;
      this.determinate = !this.adapter.hasClass(un.INDETERMINATE_CLASS), this.adapter.addClass(un.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Lt(r), u = s.next(); !u.done; u = s.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(un.INDETERMINATE_CLASS), this.adapter.setAttribute(xn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(xn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(xn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(un.INDETERMINATE_CLASS), this.adapter.removeAttribute(xn.ARIA_VALUENOW), this.adapter.removeAttribute(xn.ARIA_VALUEMAX), this.adapter.removeAttribute(xn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(xn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(un.CLOSED_CLASS), this.adapter.removeClass(un.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(xn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(un.CLOSED_CLASS), this.adapter.setAttribute(xn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(un.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(un.CLOSED_CLASS) && this.adapter.addClass(un.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(un.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(un.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Mg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(xn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * sa.PRIMARY_HALF, i = n * sa.PRIMARY_FULL, a = n * sa.SECONDARY_QUARTER, s = n * sa.SECONDARY_HALF, u = n * sa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(jt)
);
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
var er = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ql = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, jr = {
  ARIA_SELECTED: ql.ARIA_SELECTED,
  ARIA_SORT: ql.ARIA_SORT
}, dn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(dn || (dn = {}));
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
var Up = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassAtRowIndex: function() {
          },
          getAttributeByHeaderCellIndex: function() {
            return "";
          },
          getHeaderCellCount: function() {
            return 0;
          },
          getHeaderCellElements: function() {
            return [];
          },
          getRowCount: function() {
            return 0;
          },
          getRowElements: function() {
            return [];
          },
          getRowIdAtIndex: function() {
            return "";
          },
          getRowIndexByChildElement: function() {
            return 0;
          },
          getSelectedRowCount: function() {
            return 0;
          },
          getTableContainerHeight: function() {
            return 0;
          },
          getTableHeaderHeight: function() {
            return 0;
          },
          isCheckboxAtRowIndexChecked: function() {
            return !1;
          },
          isHeaderRowCheckboxChecked: function() {
            return !1;
          },
          isRowsSelectable: function() {
            return !1;
          },
          notifyRowSelectionChanged: function() {
          },
          notifySelectedAll: function() {
          },
          notifySortAction: function() {
          },
          notifyUnselectedAll: function() {
          },
          notifyRowClick: function() {
          },
          registerHeaderRowCheckbox: function() {
          },
          registerRowCheckboxes: function() {
          },
          removeClass: function() {
          },
          removeClassAtRowIndex: function() {
          },
          removeClassNameByHeaderCellIndex: function() {
          },
          setAttributeAtRowIndex: function() {
          },
          setAttributeByHeaderCellIndex: function() {
          },
          setClassNameByHeaderCellIndex: function() {
          },
          setHeaderRowCheckboxChecked: function() {
          },
          setHeaderRowCheckboxIndeterminate: function() {
          },
          setProgressIndicatorStyles: function() {
          },
          setRowCheckboxCheckedAtIndex: function() {
          },
          setSortStatusLabelByHeaderCellIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return ec(this, void 0, void 0, function() {
        return No(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && n.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, n), this.selectRowAtIndex(r, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var r = this.adapter.getRowIndexByChildElement(n.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, er.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, jr.ARIA_SORT, dn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, dn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, jr.ARIA_SORT), l = dn.NONE;
      u === dn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, dn.DESCENDING), l = dn.DESCENDING) : u === dn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, dn.ASCENDING), l = dn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, dn.ASCENDING), l = dn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(n) {
      var r = n.rowId, i = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, i = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(er.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(er.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "false"));
    }, e;
  }(jt)
), kp = /* @__PURE__ */ he('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Bp = /* @__PURE__ */ he("<div><div><table><!></table></div> <!> <!></div>");
function Fp(t, e) {
  we(e, !0);
  const n = () => Gn(F, "$progressClosed", r), [r, i] = cr(), { closest: a } = Cs;
  let s = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), I = p(e, "table$class", 3, ""), A = /* @__PURE__ */ Ye(e, [
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
  ]), S, _ = /* @__PURE__ */ me(void 0), E, C = /* @__PURE__ */ me(void 0), T = /* @__PURE__ */ me(void 0), x = be({}), y = /* @__PURE__ */ me(be({ height: "auto", top: "initial" })), R = ue("SMUI:addLayoutListener"), U, P = !1, F = Qt(!1), pe = Qt(d());
  Se(() => {
    ri(pe, d());
  });
  let G = Qt(h());
  Se(() => {
    ri(G, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", F), te("SMUI:data-table:sortable", c()), te("SMUI:data-table:sort", pe), te("SMUI:data-table:sortDirection", G), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", m()), R && (U = R(Ie));
  let k;
  Se(() => {
    e.progress && o(_) && k !== n() && (k = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    o(_) && P && o(_).layout();
  }), te("SMUI:data-table:header:mount", (M) => {
    z(C, M, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    z(C, void 0);
  }), te("SMUI:data-table:body:mount", (M) => {
    z(T, M, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    z(T, void 0);
  }), lt(() => (z(
    _,
    new Up({
      addClass: K,
      removeClass: J,
      getHeaderCellElements: () => {
        var M;
        return ((M = o(C)) == null ? void 0 : M.cells.map((B) => B.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = o(C)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, B) => {
        var oe;
        return ((oe = o(C)) == null ? void 0 : oe.orderedCells[M].getAttr(B)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, B, oe) => {
        var Ge;
        (Ge = o(C)) == null || Ge.orderedCells[M].addAttr(B, oe);
      },
      setClassNameByHeaderCellIndex: (M, B) => {
        var oe;
        (oe = o(C)) == null || oe.orderedCells[M].addClass(B);
      },
      removeClassNameByHeaderCellIndex: (M, B) => {
        var oe;
        (oe = o(C)) == null || oe.orderedCells[M].removeClass(B);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), Ze(ce(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = ce().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        z(y, M, !0);
      },
      addClassAtRowIndex: (M, B) => {
        var oe;
        (oe = o(T)) == null || oe.orderedRows[M].addClass(B);
      },
      getRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.map((B) => B.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var B;
        return ((B = o(T)) == null ? void 0 : B.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var B;
        return ((B = o(T)) == null ? void 0 : B.orderedRows.map((oe) => oe.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.filter((B) => B.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var oe;
        const B = (oe = o(T)) == null ? void 0 : oe.orderedRows[M].checkbox;
        return B ? B.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var B;
        const M = (B = o(C)) == null ? void 0 : B.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!ce().querySelector(".mdc-data-table__row-checkbox") || !!ce().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var oe;
        const B = (oe = o(T)) == null ? void 0 : oe.orderedRows[M.rowIndex];
        B && Ze(ce(), "SMUIDataTableSelectionChanged", {
          row: B.element,
          rowId: B.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        D(!1), Ze(ce(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        D(!1), Ze(ce(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => Ze(ce(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, B) => {
        var oe;
        (oe = o(T)) == null || oe.orderedRows[M].removeClass(B);
      },
      setAttributeAtRowIndex: (M, B, oe) => {
        var Ge;
        (Ge = o(T)) == null || Ge.orderedRows[M].addAttr(B, oe);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var oe;
        const B = (oe = o(C)) == null ? void 0 : oe.checkbox;
        B && (B.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: D,
      setRowCheckboxCheckedAtIndex: (M, B) => {
        var Ge;
        const oe = (Ge = o(T)) == null ? void 0 : Ge.orderedRows[M].checkbox;
        oe && (oe.checked = B);
      },
      setSortStatusLabelByHeaderCellIndex: (M, B) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), P = !0, () => {
    var M;
    (M = o(_)) == null || M.destroy();
  })), Sn(() => {
    U && U();
  });
  function H(M) {
    o(_) && o(_).handleRowCheckboxChange(M);
  }
  function K(M) {
    x[M] || (x[M] = !0);
  }
  function J(M) {
    (!(M in x) || x[M]) && (x[M] = !1);
  }
  function D(M) {
    var oe;
    const B = (oe = o(C)) == null ? void 0 : oe.checkbox;
    B && (B.indeterminate = M);
  }
  function L(M) {
    if (!o(_) || !M.detail.target)
      return;
    const B = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    B && Ee(B);
  }
  function N(M) {
    if (!o(_) || !M.detail.target)
      return;
    const B = a(M.detail.target, ".mdc-data-table__row");
    B && o(_) && o(_).handleRowClick({ rowId: M.detail.rowId, row: B });
  }
  function Ee(M) {
    var Ot, Rt;
    const B = ((Ot = o(C)) == null ? void 0 : Ot.orderedCells) ?? [], oe = B.map((Cn) => Cn.element).indexOf(M);
    if (oe === -1)
      return;
    const Ge = B[oe].columnId ?? null;
    (Rt = o(_)) == null || Rt.handleSortAction({ columnId: Ge, columnIndex: oe, headerCell: M });
  }
  function Ie() {
    var M;
    return (M = o(_)) == null ? void 0 : M.layout();
  }
  function ce() {
    return S;
  }
  var Ce = { layout: Ie, getElement: ce }, V = Bp(), re = (M) => {
    var B;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (B = e.onSMUIDataTableHeaderCheckboxChange) == null || B.call(e, M);
  }, X = (M) => {
    var B;
    L(M), (B = e.onSMUIDataTableHeaderClick) == null || B.call(e, M);
  }, ie = (M) => {
    var B;
    N(M), (B = e.onSMUIDataTableRowClick) == null || B.call(e, M);
  }, Te = (M) => {
    var B;
    H(M), (B = e.onSMUIDataTableBodyCheckboxChange) == null || B.call(e, M);
  };
  ze(
    V,
    (M, B) => ({
      class: M,
      ...B,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: Te
    }),
    [
      () => Ve({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => Vi(A, ["container$", "table$"])
    ]
  );
  var q = ge(V);
  ze(q, (M, B) => ({ class: M, ...B }), [
    () => Ve({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => ht(A, "container$")
  ]);
  var ee = ge(q);
  ze(ee, (M, B) => ({ class: M, ...B }), [
    () => Ve({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ht(A, "table$")
  ]);
  var Re = ge(ee);
  Ae(Re, () => e.children ?? ve), Ue(ee, (M, B) => W == null ? void 0 : W(M, B), b), xe(q, (M) => E = M, () => E), Ue(q, (M, B) => W == null ? void 0 : W(M, B), v);
  var ye = _e(q, 2);
  {
    var Be = (M) => {
      var B = kp(), oe = _e(ge(B), 2);
      Ae(oe, () => e.progress ?? ve), Oe((Ge) => Ut(B, Ge), [
        () => Object.entries(o(y)).map(([Ge, Ot]) => `${Ge}: ${Ot};`).join(" ")
      ]), w(M, B);
    };
    ne(ye, (M) => {
      e.progress && M(Be);
    });
  }
  var Je = _e(ye, 2);
  Ae(Je, () => e.paginate ?? ve), xe(V, (M) => S = M, () => S), Ue(V, (M, B) => W == null ? void 0 : W(M, B), s), w(t, V);
  var vt = Le(Ce);
  return i(), vt;
}
var Vp = /* @__PURE__ */ he("<thead><!></thead>");
function Gp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Ye(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ me(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (I) => {
    z(a, I, !0), l && l(I);
  });
  const c = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (I) => {
    z(a, void 0), c && c(I);
  }), te("SMUI:data-table:cell:mount", (I) => {
    s.push(I), u.set(I.element, I);
  }), te("SMUI:data-table:cell:unmount", (I) => {
    const A = s.findIndex((S) => S === I);
    A !== -1 && s.splice(A, 1), u.delete(I.element);
  });
  const d = ue("SMUI:data-table:header:mount"), h = ue("SMUI:data-table:header:unmount");
  lt(() => {
    const I = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return o(a);
      }
    };
    return d && d(I), () => {
      h && h(I);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => u.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, g = Vp();
  ze(g, () => ({ ...r }));
  var b = ge(g);
  return Ae(b, () => e.children ?? ve), xe(g, (I) => i = I, () => i), Ue(g, (I, A) => W == null ? void 0 : W(I, A), n), w(t, g), Le(v);
}
var jp = /* @__PURE__ */ he("<tbody><!></tbody>");
function qp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (g) => {
    s.push(g), u.set(g.element, g);
  }), te("SMUI:data-table:row:unmount", (g) => {
    const b = s.findIndex((I) => I === g);
    b !== -1 && s.splice(b, 1), u.delete(g.element);
  });
  const l = ue("SMUI:data-table:body:mount"), c = ue("SMUI:data-table:body:unmount");
  lt(() => {
    const g = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      c && c(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = jp();
  ze(m, (g) => ({ class: g, ...i }), [
    () => Ve({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = ge(m);
  return Ae(v, () => e.children ?? ve), xe(m, (g) => a = g, () => a), Ue(m, (g, b) => W == null ? void 0 : W(g, b), n), w(t, m), Le(f);
}
let zp = 0;
var Wp = /* @__PURE__ */ he("<tr><!></tr>");
function zs(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + zp++), a = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ me(void 0), l = be({}), c = be({}), d = ue("SMUI:data-table:row:header");
  const h = ue("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (R) => {
    z(u, R, !0), h && h(R);
  });
  const f = ue("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (R) => {
    z(u, void 0), f && f(R);
  });
  const m = ue("SMUI:data-table:row:mount"), v = ue("SMUI:data-table:row:unmount");
  lt(() => {
    const R = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return E();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: I,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: I,
      addAttr: A
    };
    return m && m(R), () => {
      v && v(R);
    };
  });
  function g(R) {
    l[R] || (l[R] = !0);
  }
  function b(R) {
    (!(R in l) || l[R]) && (l[R] = !1);
  }
  function I(R) {
    return R in c ? c[R] ?? null : E().getAttribute(R);
  }
  function A(R, U) {
    c[R] !== U && (c[R] = U);
  }
  function S(R) {
    Ze(E(), "SMUIDataTableHeaderClick", R);
  }
  function _(R) {
    Ze(E(), "SMUIDataTableRowClick", { rowId: i(), target: R.target });
  }
  function E() {
    return s;
  }
  var C = { getElement: E }, T = Wp(), x = (R) => {
    var U;
    d ? S(R) : _(R), (U = e.onclick) == null || U.call(e, R);
  };
  ze(
    T,
    (R) => ({
      class: R,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: x
    }),
    [
      () => Ve({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var y = ge(T);
  return Ae(y, () => e.children ?? ve), xe(T, (R) => s = R, () => s), Ue(T, (R, U) => W == null ? void 0 : W(R, U), n), w(t, T), Le(C);
}
let Xp = 0;
var Kp = /* @__PURE__ */ he('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Zp = /* @__PURE__ */ he("<th><!></th>"), Yp = /* @__PURE__ */ he("<td><!></td>");
function Ba(t, e) {
  we(e, !0);
  const n = () => Gn(I, "$sort", i), r = () => Gn(A, "$sortDirection", i), [i, a] = cr();
  let s = ue("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Xp++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => ue("SMUI:data-table:sortable")), m = /* @__PURE__ */ Ye(e, [
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
  ]), v, g = be({}), b = be({}), I = ue("SMUI:data-table:sort"), A = ue("SMUI:data-table:sortDirection"), S = ue("SMUI:data-table:sortAscendingAriaLabel"), _ = ue("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const E = ue("SMUI:data-table:cell:mount"), C = ue("SMUI:data-table:cell:unmount");
  lt(() => {
    const D = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return F();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: x,
      getAttr: y,
      addAttr: R
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return F();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: y,
      addAttr: R
    };
    return E && E(D), () => {
      C && C(D);
    };
  });
  function T(D) {
    g[D] || (g[D] = !0);
  }
  function x(D) {
    (!(D in g) || g[D]) && (g[D] = !1);
  }
  function y(D) {
    return D in b ? b[D] ?? null : F().getAttribute(D);
  }
  function R(D, L) {
    b[D] !== L && (b[D] = L);
  }
  function U(D) {
    Ze(F(), "SMUIDataTableHeaderCheckboxChange", D);
  }
  function P(D) {
    Ze(F(), "SMUIDataTableBodyCheckboxChange", D);
  }
  function F() {
    return v;
  }
  var pe = { getElement: F }, G = $(), k = Z(G);
  {
    var H = (D) => {
      var L = Zp(), N = (Ce) => {
        var V;
        d() && U(Ce), (V = e.onchange) == null || V.call(e, Ce);
      };
      ze(
        L,
        (Ce) => ({
          class: Ce,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: N
        }),
        [
          () => Ve({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ee = ge(L);
      {
        var Ie = (Ce) => {
          var V = Kp(), re = ge(V);
          Ae(re, () => e.children ?? ve);
          var X = _e(re, 2), ie = ge(X);
          Oe(() => {
            Sr(X, "id", `${h() ?? ""}-status-label`), at(ie, n() === h() ? r() === "ascending" ? S : _ : "");
          }), w(Ce, V);
        }, ce = (Ce) => {
          var V = $(), re = Z(V);
          Ae(re, () => e.children ?? ve), w(Ce, V);
        };
        ne(Ee, (Ce) => {
          f() ? Ce(Ie) : Ce(ce, !1);
        });
      }
      xe(L, (Ce) => v = Ce, () => v), Ue(L, (Ce, V) => W == null ? void 0 : W(Ce, V), u), w(D, L);
    }, K = (D) => {
      var L = Yp(), N = (Ie) => {
        var ce;
        d() && P(Ie), (ce = e.onchange) == null || ce.call(e, Ie);
      };
      ze(
        L,
        (Ie) => ({
          class: Ie,
          ...b,
          ...m,
          onchange: N
        }),
        [
          () => Ve({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ee = ge(L);
      Ae(Ee, () => e.children ?? ve), xe(L, (Ie) => v = Ie, () => v), Ue(L, (Ie, ce) => W == null ? void 0 : W(Ie, ce), u), w(D, L);
    };
    ne(k, (D) => {
      s ? D(H) : D(K, !1);
    });
  }
  w(t, G);
  var J = Le(pe);
  return a(), J;
}
hn(["click"]);
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
var Qp = {
  ROOT: "mdc-form-field"
}, Jp = {
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
var $p = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var n = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        n.adapter.deactivateInputRipple();
      });
    }, e;
  }(jt)
);
let eb = 0;
var tb = /* @__PURE__ */ he("<div><!> <label><!></label></div>");
function nb(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), s = p(e, "inputId", 19, () => "SMUI-form-field-" + eb++), u = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ Ye(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "noWrap",
    "inputId",
    "label$use",
    "children",
    "label"
  ]), c, d = /* @__PURE__ */ me(void 0), h = new Xi(), f, m = /* @__PURE__ */ me(void 0);
  te("SMUI:generic:input:props", { id: s() }), te("SMUI:generic:input:mount", (_) => {
    z(m, _, !0);
  }), te("SMUI:generic:input:unmount", () => {
    z(m, void 0);
  }), lt(() => (z(
    d,
    new $p({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, E) => h.off(f, _, E),
      registerInteractionHandler: (_, E) => h.on(f, _, E)
    }),
    !0
  ), o(d).init(), () => {
    var _;
    (_ = o(d)) == null || _.destroy(), h.clear();
  }));
  function v() {
    return c;
  }
  var g = { getElement: v }, b = tb();
  ze(b, (_, E) => ({ class: _, ...E }), [
    () => Ve({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Vi(l, ["label$"])
  ]);
  var I = ge(b);
  Ae(I, () => e.children ?? ve);
  var A = _e(I, 2);
  ze(A, (_) => ({ for: s(), ..._ }), [() => ht(l, "label$")]);
  var S = ge(A);
  return Ae(S, () => e.label ?? ve), xe(A, (_) => f = _, () => f), Ue(A, (_, E) => W == null ? void 0 : W(_, E), u), xe(b, (_) => c = _, () => c), Ue(b, (_, E) => W == null ? void 0 : W(_, E), n), w(t, b), Le(g);
}
hn(["click"]);
function po(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var rb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
po({}, rb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Fa, zl = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Fa = {}, po(Fa, zl.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), po(Fa, zl.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function ib(t) {
  return t * t * t;
}
function Hc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ab(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: s = Hc } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var h = sb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * c, g = e.top + e.height * d, b = n.left + n.width * c, I = n.top + n.height * d, A = (v - b) * f, S = (g - I) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(A * A + S * S)) : a,
    easing: s,
    css: (C, T) => {
      var x = T * A, y = T * S, R = C + T * _, U = C + T * E;
      return `transform: ${l} translate(${x}px, ${y}px) scale(${R}, ${U});`;
    }
  };
}
function sb(t) {
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
function ob(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Wl(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function ls(t, { delay: e = 0, duration: n = 400, easing: r = ob, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - s), [h, f] = Wl(i), [m, v] = Wl(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * h}${f}, ${(1 - g) * m}${v});
			opacity: ${l - d * b}`
  };
}
hn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function lb(t, e) {
  var n;
  (n = e()) == null || n();
}
var ub = /* @__PURE__ */ he('<div class="detail svelte-4xu36c"> </div>'), cb = /* @__PURE__ */ he('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function db(t, e) {
  we(e, !0);
  let n = p(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#2196F3",
    warn: "#FF9800"
  };
  var a = cb(), s = ge(a), u = ge(s);
  vo(u, {
    class: "material-icons",
    children: (g, b) => {
      var I = Pt();
      Oe(() => at(I, r[e.type])), w(g, I);
    },
    $$slots: { default: !0 }
  });
  var l = _e(s, 2), c = ge(l), d = ge(c), h = _e(c, 2);
  {
    var f = (g) => {
      var b = ub(), I = ge(b);
      Oe(() => at(I, e.detail)), w(g, b);
    };
    ne(h, (g) => {
      e.detail && g(f);
    });
  }
  var m = _e(l, 2);
  m.__click = [lb, n];
  var v = ge(m);
  vo(v, {
    class: "material-icons",
    children: (g, b) => {
      var I = Pt("close");
      w(g, I);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Ut(a, `--color:${i[e.type] ?? ""}`), at(d, e.summary);
  }), ts(1, a, () => ls, () => ({ x: 0, y: 30, duration: 150, easing: ib })), ts(2, a, () => ls, () => ({ x: 50, y: 0, duration: 150, easing: Hc })), w(t, a), Le();
}
hn(["click"]);
const fb = 4e3;
function hb() {
  let t = be({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = fb) => {
    const l = e++, c = { id: l, summary: a, detail: s, type: i };
    return t.items = [...t.items, c], setTimeout(
      () => {
        n(l);
      },
      u
    ), l;
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
const ha = hb();
var vb = /* @__PURE__ */ he("<div><!></div>"), mb = /* @__PURE__ */ he('<div class="toast-host svelte-11vwiay"></div>');
function gb(t, e) {
  we(e, !1);
  const n = ha.toasts;
  qf();
  var r = mb();
  Fn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = vb(), u = ge(s);
    db(u, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => ha.remove(o(a).id)
    }), Gf(s, () => ab, null), w(i, s);
  }), w(t, r), Le();
}
var pb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, bb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, _b = /* @__PURE__ */ he('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), yb = /* @__PURE__ */ he('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), Ib = /* @__PURE__ */ he('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Eb(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = Ib();
  r.__click = [pb, e];
  var i = ge(r), a = ge(i);
  {
    var s = (f) => {
      os(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var g = _b();
          g.__click = [bb, e];
          var b = ge(g);
          Dc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      os(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          xp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ne(a, (f) => {
      o(n) ? f(s) : f(u, !1);
    });
  }
  var l = _e(i, 2), c = ge(l), d = _e(l, 2);
  {
    var h = (f) => {
      var m = yb(), v = _e(Z(m), 2), g = ge(v), b = _e(v, 2), I = ge(b);
      Sp(I, { svgStyles: "fill: gray;" }), Oe(() => at(g, e.value)), w(f, m);
    };
    ne(d, (f) => {
      o(n) && f(h);
    });
  }
  Oe(() => {
    Do(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), at(c, e.label);
  }), w(t, r), Le();
}
hn(["click"]);
var Ab = /* @__PURE__ */ he('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Sb(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(q) {
    return q === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), c = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), h = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), v = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ Ye(e, [
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
  ]), I, A = /* @__PURE__ */ me(void 0), S = /* @__PURE__ */ me(void 0), _ = be({}), E = be({}), C = be({}), T = /* @__PURE__ */ me(!1), x = be(ue("SMUI:generic:input:props") ?? {}), y = /* @__PURE__ */ me(be(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((q) => q === f()) !== -1)), R = ue("SMUI:checkbox:context"), U = ue("SMUI:data-table:row:header"), P = h(), F = r(d()) ? [] : [...d()], pe = o(y);
  Se(() => {
    let q = !1;
    if (!r(d()))
      if (pe !== o(y)) {
        const ee = d().findIndex((Re) => Re === f());
        o(y) && ee === -1 ? d().push(f()) : !o(y) && ee !== -1 && d().splice(ee, 1), q = !0;
      } else {
        const ee = F.findIndex((ye) => ye === f()), Re = d().findIndex((ye) => ye === f());
        ee > -1 && Re === -1 ? (z(y, !1), q = !0) : Re > -1 && ee === -1 && (z(y, !0), q = !0);
      }
    r(h()) ? pe !== o(y) && (q = !0) : (h() !== (c() ? null : o(y)) || o(y) !== pe) && (h() === P && o(y) !== pe ? (h(o(y)), r(c()) || c(!1)) : z(y, !!h()), q = !0), o(S) && (r(c()) ? o(S).indeterminate && (o(S).indeterminate = !1, q = !0) : !c() && o(S).indeterminate ? (o(S).indeterminate = !1, q = !0) : c() && !o(S).indeterminate && (o(S).indeterminate = !0, z(y, !1), q = !0)), P = h(), F = r(d()) ? [] : [...d()], pe = o(y), q && o(A) && o(A).handleChange();
  });
  const G = ue("SMUI:generic:input:mount"), k = ue("SMUI:generic:input:unmount"), H = ue("SMUI:checkbox:mount"), K = ue("SMUI:checkbox:unmount");
  lt(() => {
    if (o(S) == null)
      throw new Error("Checkbox is not defined.");
    o(S).indeterminate = !r(c()) && c(), z(
      A,
      new Pp({
        addClass: J,
        forceLayout: () => ce().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ce().parentNode,
        isChecked: () => o(y),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: D,
        removeNativeControlAttr: Ee,
        setNativeControlAttr: N,
        setNativeControlDisabled: (ee) => u(ee)
      }),
      !0
    );
    const q = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ce();
      },
      get checked() {
        return o(y);
      },
      set checked(ee) {
        o(y) !== ee && z(y, ee, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ee) {
        c(ee);
      },
      activateRipple() {
        u() || z(T, !0);
      },
      deactivateRipple() {
        z(T, !1);
      }
    };
    return G && G(q), H && H(q), o(A).init(), () => {
      var ee;
      k && k(q), K && K(q), (ee = o(A)) == null || ee.destroy();
    };
  });
  function J(q) {
    _[q] || (_[q] = !0);
  }
  function D(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function L(q, ee) {
    E[q] != ee && (ee === "" || ee == null ? delete E[q] : E[q] = ee);
  }
  function N(q, ee) {
    C[q] !== ee && (C[q] = ee);
  }
  function Ee(q) {
    (!(q in C) || C[q] != null) && (C[q] = void 0);
  }
  function Ie() {
    return x && x.id;
  }
  function ce() {
    return I;
  }
  var Ce = { getId: Ie, getElement: ce }, V = Ab(), re = (q) => {
    var ee;
    o(A) && o(A).handleAnimationEnd(), (ee = e.onanimationend) == null || ee.call(e, q);
  };
  ze(V, (q, ee, Re) => ({ class: q, style: ee, ...Re, onanimationend: re }), [
    () => Ve({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": R === "data-table" && U,
      "mdc-data-table__row-checkbox": R === "data-table" && !U,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([q, ee]) => `${q}: ${ee};`).concat([s()]).join(" "),
    () => Vi(b, ["input$"])
  ]);
  var X = ge(V), ie = (q) => {
    var ee;
    Ze(ce(), "blur", q), (ee = e.input$onblur) == null || ee.call(e, q);
  }, Te = (q) => {
    var ee;
    Ze(ce(), "focus", q), (ee = e.input$onfocus) == null || ee.call(e, q);
  };
  return ze(
    X,
    (q, ee, Re, ye) => ({
      class: q,
      type: "checkbox",
      ...x,
      disabled: u(),
      value: ee,
      "data-indeterminate": Re,
      ...C,
      ...ye,
      onblur: ie,
      onfocus: Te
    }),
    [
      () => Ve({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => ht(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), xe(X, (q) => z(S, q), () => o(S)), Ue(X, (q, ee) => W == null ? void 0 : W(q, ee), v), Or(() => jf(X, () => o(y), (q) => z(y, q))), xe(V, (q) => I = q, () => I), Ue(V, (q, ee) => W == null ? void 0 : W(q, ee), i), Ue(V, (q, ee) => Xt == null ? void 0 : Xt(q, ee), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: D,
    addStyle: L,
    active: o(T),
    eventTarget: o(S)
  })), w(t, V), Le(Ce);
}
var Cb = /* @__PURE__ */ he('<div style="display: flex; flex-direction: column;"></div>');
function xb(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => be([]));
  var i = Cb();
  Fn(i, 21, n, yi, (a, s) => {
    nb(a, {
      label: (l) => {
        var c = Pt();
        Oe(() => at(c, o(s).label)), w(l, c);
      },
      children: (l, c) => {
        Sb(l, {
          get value() {
            return o(s).value;
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
  }), w(t, i), Le();
}
var Tb = (t) => t.stopPropagation(), wb = /* @__PURE__ */ he('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Lb = /* @__PURE__ */ he('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Ob = /* @__PURE__ */ he('<div class="oscd-filters svelte-58jwwf"></div>');
function Rb(t, e) {
  we(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ me(null), i = [], a = [];
  function s(v) {
    var g;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const b = (g = v.options) == null ? void 0 : g.find((S) => S.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const I = v.value.map((S) => {
            var E;
            const _ = (E = v.options) == null ? void 0 : E.find((C) => C.value === S);
            return _ ? _.label : String(S);
          }), A = 1;
          return I.length <= A ? I.join(", ") : `${I.slice(0, A).join(", ")} +${I.length - A} more`;
        case "date":
          try {
            const S = new Date(v.value);
            return isNaN(S.getTime()) ? String(v.value) : S.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const S = new Date(v.value);
            return isNaN(S.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(S);
          } catch {
            return String(v.value);
          }
        default:
          return String(v.value);
      }
  }
  function u(v) {
    switch (v.type) {
      case "text":
      case "date":
      case "datetime":
        return v.value ?? "";
      case "number":
        return v.value ?? 0;
      case "select":
        return v.value ?? null;
      case "multiselect":
        return Array.isArray(v.value) ? [...v.value] : [];
      default:
        return v.value ?? "";
    }
  }
  function l(v) {
    o(r) === v ? z(r, null) : (z(r, v, !0), a[v] = u(n()[v]));
  }
  function c() {
    z(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var g;
    n(n().map((b, I) => I === v ? { ...b, value: a[v] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), z(r, null);
  }
  function h(v) {
    var g;
    n(n().map((b, I) => I === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), c();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || c();
  }
  lt(() => {
    document.addEventListener("click", f);
  }), Sn(() => {
    document.removeEventListener("click", f);
  }), Se(() => {
  });
  var m = Ob();
  Fn(m, 23, n, (v) => v.key, (v, g, b) => {
    var I = Lb(), A = ge(I);
    {
      let E = /* @__PURE__ */ fe(() => s(o(g)));
      Eb(A, {
        get label() {
          return o(g).label;
        },
        get value() {
          return o(E);
        },
        onOpen: () => l(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var S = _e(A, 2);
    {
      var _ = (E) => {
        var C = wb();
        C.__click = [Tb];
        var T = _e(ge(C), 2), x = ge(T), y = _e(T, 2), R = ge(y);
        {
          var U = (pe) => {
            mo(pe, {
              get label() {
                return o(g).label;
              },
              get placeholder() {
                return o(g).placeholder;
              },
              get type() {
                return o(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[o(b)];
              },
              set value(G) {
                a[o(b)] = G;
              }
            });
          }, P = (pe) => {
            var G = $(), k = Z(G);
            {
              var H = (J) => {
                {
                  let D = /* @__PURE__ */ fe(() => {
                    var L;
                    return (L = o(g)) == null ? void 0 : L.options;
                  });
                  ep(J, {
                    get label() {
                      return o(g).label;
                    },
                    get data() {
                      return o(D);
                    },
                    get value() {
                      return a[o(b)];
                    },
                    set value(L) {
                      a[o(b)] = L;
                    }
                  });
                }
              }, K = (J) => {
                var D = $(), L = Z(D);
                {
                  var N = (Ie) => {
                    {
                      let ce = /* @__PURE__ */ fe(() => {
                        var Ce;
                        return (Ce = o(g)) == null ? void 0 : Ce.options;
                      });
                      xb(Ie, {
                        get data() {
                          return o(ce);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(Ce) {
                          a[o(b)] = Ce;
                        }
                      });
                    }
                  }, Ee = (Ie) => {
                    var ce = $(), Ce = Z(ce);
                    {
                      var V = (X) => {
                        Lp(X, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(ie) {
                            a[o(b)] = ie;
                          }
                        });
                      }, re = (X) => {
                        var ie = $(), Te = Z(ie);
                        {
                          var q = (ee) => {
                            Mp(ee, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Re) {
                                a[o(b)] = Re;
                              }
                            });
                          };
                          ne(
                            Te,
                            (ee) => {
                              o(g).type === "datetime" && ee(q);
                            },
                            !0
                          );
                        }
                        w(X, ie);
                      };
                      ne(
                        Ce,
                        (X) => {
                          o(g).type === "date" ? X(V) : X(re, !1);
                        },
                        !0
                      );
                    }
                    w(Ie, ce);
                  };
                  ne(
                    L,
                    (Ie) => {
                      o(g).type === "multiselect" ? Ie(N) : Ie(Ee, !1);
                    },
                    !0
                  );
                }
                w(J, D);
              };
              ne(
                k,
                (J) => {
                  o(g).type === "select" ? J(H) : J(K, !1);
                },
                !0
              );
            }
            w(pe, G);
          };
          ne(R, (pe) => {
            o(g).type === "text" || o(g).type === "number" ? pe(U) : pe(P, !1);
          });
        }
        var F = _e(y, 2);
        Tc(F, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (pe, G) => {
            var k = Pt("Apply");
            w(pe, k);
          },
          $$slots: { default: !0 }
        }), Oe(() => at(x, `Filter by ${o(g).label ?? ""}`)), ts(2, C, () => ls, () => ({ y: 5, duration: 120 })), ts(1, C, () => ls, () => ({ y: -5, duration: 120 })), w(E, C);
      };
      ne(S, (E) => {
        o(r) === o(b) && E(_);
      });
    }
    xe(I, (E, C) => i[C] = E, (E) => i == null ? void 0 : i[E], () => [o(b)]), w(v, I);
  }), w(t, m), Le();
}
hn(["click"]);
var Mb = (t, e) => e(), Db = /* @__PURE__ */ he('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), Hb = /* @__PURE__ */ he('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function Pb(t, e) {
  we(e, !0);
  let n = p(e, "filters", 31, () => be([])), r = p(e, "onFilterChange", 3, (A) => {
  }), i = p(e, "searchText", 15, ""), a = p(e, "searchLabel", 3, "Search"), s = p(e, "searchPlaceholder", 3, "Type to search..."), u = p(e, "onSearchInput", 3, () => {
  }), l = p(e, "searchDisabled", 3, !1), c = /* @__PURE__ */ fe(() => n().some((A) => A.value !== void 0 && A.value !== null && A.value !== "")), d = () => {
    n(n().map((A) => ({ ...A, value: void 0 }))), r()(n());
  };
  var h = Hb(), f = ge(h);
  {
    var m = (A) => {
      yg(A, {
        oninput: () => u()(),
        icon: "search",
        get label() {
          return a();
        },
        get placeholder() {
          return s();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return i();
        },
        set value(S) {
          i(S);
        }
      });
    };
    ne(f, (A) => {
      l() || A(m);
    });
  }
  var v = _e(f, 2), g = _e(ge(v), 2);
  Rb(g, {
    onfiltersChanged: (A) => r()(A),
    get filters() {
      return n();
    },
    set filters(A) {
      n(A);
    }
  });
  var b = _e(g, 2);
  {
    var I = (A) => {
      var S = Db();
      S.__click = [Mb, d], w(A, S);
    };
    ne(b, (A) => {
      o(c) && A(I);
    });
  }
  w(t, h), Le();
}
hn(["click"]);
var Nb = /* @__PURE__ */ he('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Ub(t, e) {
  we(e, !0);
  const [n, r] = cr();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ye(e, [
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
  ]), f, m = /* @__PURE__ */ me(void 0), v = be({}), g = be({}), b = be({}), I = be({}), A = be({}), S = ue("SMUI:linear-progress:context"), _ = ue("SMUI:linear-progress:closed");
  Se(() => {
    _ && ri(_, l());
  }), Se(() => {
    o(m) && o(m).isDeterminate() !== !u() && o(m).setDeterminate(!u());
  }), Se(() => {
    o(m) && o(m).getProgress() !== c() && o(m).setProgress(c());
  }), Se(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), Se(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), lt(() => (z(
    m,
    new Np({
      addClass: C,
      forceLayout: () => {
        F().getBoundingClientRect();
      },
      setBufferBarStyle: U,
      setPrimaryBarStyle: P,
      hasClass: E,
      removeAttribute: y,
      removeClass: T,
      setAttribute: x,
      setStyle: R,
      attachResizeObserver: (L) => {
        const N = window.ResizeObserver;
        if (N) {
          const Ee = new N(L);
          return Ee.observe(F()), Ee;
        }
        return null;
      },
      getWidth: () => F().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function E(L) {
    return L in v ? v[L] : F().classList.contains(L);
  }
  function C(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function x(L, N) {
    g[L] !== N && (g[L] = N);
  }
  function y(L) {
    (!(L in g) || g[L] != null) && (g[L] = void 0);
  }
  function R(L, N) {
    b[L] != N && (N === "" || N == null ? delete b[L] : b[L] = N);
  }
  function U(L, N) {
    I[L] != N && (N === "" || N == null ? delete I[L] : I[L] = N);
  }
  function P(L, N) {
    A[L] != N && (N === "" || N == null ? delete A[L] : A[L] = N);
  }
  function F() {
    return f;
  }
  var pe = { getElement: F }, G = Nb(), k = (L) => {
    var N;
    o(m) && o(m).handleTransitionEnd(), (N = e.ontransitionend) == null || N.call(e, L);
  };
  ze(
    G,
    (L, N) => ({
      class: L,
      style: N,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: k
    }),
    [
      () => Ve({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": S === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, N]) => `${L}: ${N};`).concat([s()]).join(" ")
    ]
  );
  var H = ge(G), K = ge(H), J = _e(H, 2);
  xe(G, (L) => f = L, () => f), Ue(G, (L, N) => W == null ? void 0 : W(L, N), i), Oe(
    (L, N) => {
      Ut(K, L), Ut(J, N);
    },
    [
      () => Object.entries(I).map(([L, N]) => `${L}: ${N};`).join(" "),
      () => Object.entries(A).map(([L, N]) => `${L}: ${N};`).join(" ")
    ]
  ), w(t, G);
  var D = Le(pe);
  return r(), D;
}
var kb = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Bb = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Fb = /* @__PURE__ */ he('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Vb = (t, e) => e(), Gb = /* @__PURE__ */ he('<input type="text" class="svelte-1mj71p3"/>'), jb = (t, e) => e(), qb = /* @__PURE__ */ he('<input type="number" class="svelte-1mj71p3"/>'), zb = /* @__PURE__ */ he("<!> <!>", 1), Wb = /* @__PURE__ */ he("<!> <!>", 1), Xb = /* @__PURE__ */ he('<div class="cell-actions svelte-1mj71p3"></div>'), Kb = /* @__PURE__ */ he("<!> <!>", 1);
function Zb(t, e) {
  we(e, !0);
  const n = () => Gn(g, "$sortColumn", a), r = () => Gn(b, "$sortDirection", a), i = () => Gn(v, "$filteredData", a), [a, s] = cr();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, sp), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => be([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = be({ name: "", color: "", number: "" }), v = Qt([]), g = Qt(null), b = Qt(null), I = /* @__PURE__ */ fe(() => c().some((E) => E.filter));
  e.store.store.subscribe((E) => {
    d([...E]), A();
  });
  function A() {
    let E = d().filter((C) => c().every((T) => {
      const x = m[T.field], y = T.filterValueGetter ? T.filterValueGetter(C) : C[T.field];
      return x ? T.filterType === "number" ? y == x : y.toString().toLowerCase().includes(x.toLowerCase()) : !0;
    }));
    E = S(E), v.set(E);
  }
  function S(E) {
    let C, T;
    return g.subscribe((x) => C = x), b.subscribe((x) => T = x), !C || !T ? E : E.sort((x, y) => {
      let R = x[C], U = y[C];
      return R == null && (R = ""), U == null && (U = ""), T === "asc" ? R.toString().localeCompare(U.toString()) : U.toString().localeCompare(R.toString());
    });
  }
  function _(E) {
    g.update((C) => {
      if (C === E)
        b.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return b.set("asc"), E;
      return E;
    }), A();
  }
  v.set(d()), Fp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (C) => {
      Ub(C, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(T) {
          u(T);
        }
      });
    },
    children: (C, T) => {
      var x = Kb(), y = Z(x);
      Gp(y, {
        children: (U, P) => {
          var F = Wb(), pe = Z(F);
          zs(pe, {
            class: "header-title-row",
            children: (H, K) => {
              var J = $(), D = Z(J);
              Fn(D, 17, c, yi, (L, N) => {
                Ba(L, {
                  onclick: () => o(N).sortable && _(o(N).field),
                  get style() {
                    return o(N).headerStyle;
                  },
                  children: (Ee, Ie) => {
                    var ce = Fb(), Ce = ge(ce), V = ge(Ce), re = ge(V), X = _e(V, 2);
                    {
                      var ie = (Te) => {
                        var q = $(), ee = Z(q);
                        {
                          var Re = (ye) => {
                            var Be = $(), Je = Z(Be);
                            {
                              var vt = (B) => {
                                var oe = kb();
                                w(B, oe);
                              }, M = (B) => {
                                var oe = $(), Ge = Z(oe);
                                {
                                  var Ot = (Rt) => {
                                    var Cn = Bb();
                                    w(Rt, Cn);
                                  };
                                  ne(
                                    Ge,
                                    (Rt) => {
                                      r() === "desc" && Rt(Ot);
                                    },
                                    !0
                                  );
                                }
                                w(B, oe);
                              };
                              ne(Je, (B) => {
                                r() === "asc" ? B(vt) : B(M, !1);
                              });
                            }
                            w(ye, Be);
                          };
                          ne(ee, (ye) => {
                            n() === o(N).field && r() !== null && ye(Re);
                          });
                        }
                        w(Te, q);
                      };
                      ne(X, (Te) => {
                        o(N).sortable && Te(ie);
                      });
                    }
                    Oe(() => {
                      Ut(ce, `min-width: ${o(N).minWidth ?? 0 ?? ""}`), at(re, o(N).headerName);
                    }), w(Ee, ce);
                  },
                  $$slots: { default: !0 }
                });
              }), w(H, J);
            },
            $$slots: { default: !0 }
          });
          var G = _e(pe, 2);
          {
            var k = (H) => {
              zs(H, {
                class: "header-filter-row",
                children: (K, J) => {
                  var D = $(), L = Z(D);
                  Fn(L, 17, c, yi, (N, Ee) => {
                    Ba(N, {
                      children: (Ie, ce) => {
                        var Ce = $(), V = Z(Ce);
                        {
                          var re = (X) => {
                            var ie = zb(), Te = Z(ie);
                            {
                              var q = (ye) => {
                                var Be = Gb();
                                Be.__input = [Vb, A], Oe(() => Sr(Be, "placeholder", `${f()} ${o(Ee).headerName}`)), ga(Be, () => m[o(Ee).field], (Je) => m[o(Ee).field] = Je), w(ye, Be);
                              };
                              ne(Te, (ye) => {
                                o(Ee).filterType === "text" && ye(q);
                              });
                            }
                            var ee = _e(Te, 2);
                            {
                              var Re = (ye) => {
                                var Be = qb();
                                Be.__input = [jb, A], Oe(() => Sr(Be, "placeholder", `${f()} ${o(Ee).headerName}`)), ga(Be, () => m[o(Ee).field], (Je) => m[o(Ee).field] = Je), w(ye, Be);
                              };
                              ne(ee, (ye) => {
                                o(Ee).filterType === "number" && ye(Re);
                              });
                            }
                            w(X, ie);
                          };
                          ne(V, (X) => {
                            o(Ee).filter && X(re);
                          });
                        }
                        w(Ie, Ce);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(K, D);
                },
                $$slots: { default: !0 }
              });
            };
            ne(G, (H) => {
              o(I) && H(k);
            });
          }
          w(U, F);
        },
        $$slots: { default: !0 }
      });
      var R = _e(y, 2);
      qp(R, {
        children: (U, P) => {
          var F = $(), pe = Z(F);
          Fn(pe, 1, i, yi, (G, k) => {
            zs(G, {
              children: (H, K) => {
                var J = $(), D = Z(J);
                Fn(D, 17, c, (L) => L.field, (L, N) => {
                  var Ee = $(), Ie = Z(Ee);
                  {
                    var ce = (V) => {
                      Ba(V, {
                        children: (re, X) => {
                          var ie = Xb();
                          Fn(ie, 21, h, yi, (Te, q) => {
                            var ee = $(), Re = Z(ee);
                            {
                              var ye = (Je) => {
                                os(Je, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, M) => {
                                    {
                                      let B = /* @__PURE__ */ fe(() => o(q).disabled(o(k)));
                                      Fm(vt, {
                                        get iconComponent() {
                                          return o(q).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(q).iconStyles;
                                        },
                                        callback: () => o(q).callback(o(k)),
                                        get disabled() {
                                          return o(B);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Be = (Je) => {
                                os(Je, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, M) => {
                                    {
                                      let B = /* @__PURE__ */ fe(() => o(q).disabled(o(k)));
                                      Pm(vt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(q).callback(o(k)),
                                        get disabled() {
                                          return o(B);
                                        },
                                        children: (oe, Ge) => {
                                          var Ot = $(), Rt = Z(Ot);
                                          {
                                            var Cn = (se) => {
                                              up(se, { svgStyles: "margin: unset" });
                                            }, de = (se) => {
                                              var j = $(), Y = Z(j);
                                              {
                                                var Me = (nt) => {
                                                  Dc(nt, { svgStyles: "margin: unset" });
                                                }, st = (nt) => {
                                                  var Et = $(), kt = Z(Et);
                                                  {
                                                    var dr = (dt) => {
                                                      fp(dt, { svgStyles: "margin: unset" });
                                                    }, ut = (dt) => {
                                                      var Mt = $(), Mn = Z(Mt);
                                                      {
                                                        var ui = (He) => {
                                                          vp(He, { svgStyles: "margin: unset" });
                                                        }, Dn = (He) => {
                                                          var $e = $(), Qe = Z($e);
                                                          {
                                                            var xt = (We) => {
                                                              bp(We, { svgStyles: "margin: unset" });
                                                            }, ln = (We) => {
                                                              var mt = $(), At = Z(mt);
                                                              {
                                                                var Xe = (Bt) => {
                                                                  yp(Bt, { svgStyles: "margin: unset" });
                                                                }, St = (Bt) => {
                                                                  var qt = $(), pt = Z(qt);
                                                                  {
                                                                    var Tt = (gt) => {
                                                                      Ep(gt, { svgStyles: "margin: unset" });
                                                                    }, nn = (gt) => {
                                                                      gp(gt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ne(
                                                                      pt,
                                                                      (gt) => {
                                                                        o(q).icon === "delete" ? gt(Tt) : gt(nn, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Bt, qt);
                                                                };
                                                                ne(
                                                                  At,
                                                                  (Bt) => {
                                                                    o(q).icon === "edit" ? Bt(Xe) : Bt(St, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(We, mt);
                                                            };
                                                            ne(
                                                              Qe,
                                                              (We) => {
                                                                o(q).icon === "remove" ? We(xt) : We(ln, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(He, $e);
                                                        };
                                                        ne(
                                                          Mn,
                                                          (He) => {
                                                            o(q).icon === "find-in-page" ? He(ui) : He(Dn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(dt, Mt);
                                                    };
                                                    ne(
                                                      kt,
                                                      (dt) => {
                                                        o(q).icon === "download" ? dt(dr) : dt(ut, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(nt, Et);
                                                };
                                                ne(
                                                  Y,
                                                  (nt) => {
                                                    o(q).icon === "cancel" ? nt(Me) : nt(st, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(se, j);
                                            };
                                            ne(Rt, (se) => {
                                              o(q).icon === "add" ? se(Cn) : se(de, !1);
                                            });
                                          }
                                          w(oe, Ot);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ne(Re, (Je) => {
                                o(q).iconComponent ? Je(ye) : Je(Be, !1);
                              });
                            }
                            w(Te, ee);
                          }), w(re, ie);
                        },
                        $$slots: { default: !0 }
                      });
                    }, Ce = (V) => {
                      Ba(V, {
                        get numeric() {
                          return o(N).numeric;
                        },
                        get style() {
                          return o(N).cellStyle;
                        },
                        children: (re, X) => {
                          var ie = $(), Te = Z(ie);
                          {
                            var q = (Re) => {
                              const ye = /* @__PURE__ */ fe(() => o(N).cellRenderer);
                              var Be = $(), Je = Z(Be);
                              oi(Je, () => o(ye), (vt, M) => {
                                M(vt, it(
                                  {
                                    get row() {
                                      return o(k);
                                    },
                                    get value() {
                                      return o(k)[o(N).field];
                                    },
                                    get col() {
                                      return o(N);
                                    }
                                  },
                                  () => o(N).cellRendererProps ?? {}
                                ));
                              }), w(Re, Be);
                            }, ee = (Re) => {
                              var ye = $(), Be = Z(ye);
                              {
                                var Je = (M) => {
                                  var B = Pt();
                                  Oe((oe) => at(B, oe), [
                                    () => o(N).valueFormatter(o(k)[o(N).field])
                                  ]), w(M, B);
                                }, vt = (M) => {
                                  var B = Pt();
                                  Oe(() => at(B, o(k)[o(N).field] ?? "")), w(M, B);
                                };
                                ne(
                                  Be,
                                  (M) => {
                                    o(N).valueFormatter ? M(Je) : M(vt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Re, ye);
                            };
                            ne(Te, (Re) => {
                              o(N).cellRenderer ? Re(q) : Re(ee, !1);
                            });
                          }
                          w(re, ie);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ne(Ie, (V) => {
                      o(N).field === "actions" ? V(ce) : V(Ce, !1);
                    });
                  }
                  w(L, Ee);
                }), w(H, J);
              },
              $$slots: { default: !0 }
            });
          }), w(U, F);
        },
        $$slots: { default: !0 }
      }), w(C, x);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), s();
}
hn(["input"]);
function yt(t) {
  return typeof t == "function";
}
function Fo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ws = Fo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function us(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var wa = function() {
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
            for (var u = Lt(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              l && !l.done && (n = u.return) && n.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (yt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Ws ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Lt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              Xl(v);
            } catch (g) {
              a = a ?? [], g instanceof Ws ? a = jn(jn([], Cr(a)), Cr(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Ws(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Xl(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && us(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && us(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Pc = wa.EMPTY;
function Nc(t) {
  return t instanceof wa || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function Xl(t) {
  yt(t) ? t() : t.unsubscribe();
}
var Yb = {
  Promise: void 0
}, Qb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, jn([t, e], Cr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Uc(t) {
  Qb.setTimeout(function() {
    throw t;
  });
}
function Kl() {
}
function Ka(t) {
  t();
}
var Vo = function(t) {
  tt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Nc(n) && n.add(r)) : r.destination = e_, r;
  }
  return e.create = function(n, r, i) {
    return new bo(n, r, i);
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
}(wa), Jb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Va(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Va(r);
      }
    else
      Va(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Va(n);
      }
  }, t;
}(), bo = function(t) {
  tt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return yt(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new Jb(s), a;
  }
  return e;
}(Vo);
function Va(t) {
  Uc(t);
}
function $b(t) {
  throw t;
}
var e_ = {
  closed: !0,
  next: Kl,
  error: $b,
  complete: Kl
}, Go = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function xs(t) {
  return t;
}
function t_(t) {
  return t.length === 0 ? xs : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var An = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = r_(e) ? e : new bo(e, n, r);
    return Ka(function() {
      var s = i, u = s.operator, l = s.source;
      a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Zl(n), new n(function(i, a) {
      var s = new bo({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), s.unsubscribe();
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
  }, t.prototype[Go] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return t_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Zl(e), new e(function(r, i) {
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
function Zl(t) {
  var e;
  return (e = t ?? Yb.Promise) !== null && e !== void 0 ? e : Promise;
}
function n_(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function r_(t) {
  return t && t instanceof Vo || n_(t) && Nc(t);
}
function i_(t) {
  return yt(t == null ? void 0 : t.lift);
}
function Xn(t) {
  return function(e) {
    if (i_(e))
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
function lr(t, e, n, r, i) {
  return new a_(t, e, n, r, i);
}
var a_ = function(t) {
  tt(e, t);
  function e(n, r, i, a, s, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = u, l._next = r ? function(c) {
      try {
        r(c);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(c) {
      try {
        a(c);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Vo), s_ = Fo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), _o = function(t) {
  tt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Yl(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new s_();
  }, e.prototype.next = function(n) {
    var r = this;
    Ka(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Lt(r.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var l = u.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Ka(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Ka(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, u = i.observers;
    return a || s ? Pc : (this.currentObservers = null, u.push(n), new wa(function() {
      r.currentObservers = null, us(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new An();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Yl(n, r);
  }, e;
}(An), Yl = function(t) {
  tt(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Pc;
  }, e;
}(_o), o_ = {
  now: function() {
    return Date.now();
  }
}, l_ = function(t) {
  tt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(wa), Ql = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, jn([t, e], Cr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, u_ = function(t) {
  tt(e, t);
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
    return i === void 0 && (i = 0), Ql.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Ql.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, us(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(l_), Jl = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = o_.now, t;
}(), c_ = function(t) {
  tt(e, t);
  function e(n, r) {
    r === void 0 && (r = Jl.now);
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
}(Jl), d_ = new c_(u_);
function f_(t) {
  return t && yt(t.schedule);
}
function kc(t) {
  return t[t.length - 1];
}
function Bc(t) {
  return f_(kc(t)) ? t.pop() : void 0;
}
function h_(t, e) {
  return typeof kc(t) == "number" ? t.pop() : e;
}
var Fc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Vc(t) {
  return yt(t == null ? void 0 : t.then);
}
function Gc(t) {
  return yt(t[Go]);
}
function jc(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function qc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function v_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var zc = v_();
function Wc(t) {
  return yt(t == null ? void 0 : t[zc]);
}
function Xc(t) {
  return hh(this, arguments, function() {
    var n, r, i, a;
    return No(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Si(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Si(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Si(i)];
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
function Kc(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function Zi(t) {
  if (t instanceof An)
    return t;
  if (t != null) {
    if (Gc(t))
      return m_(t);
    if (Fc(t))
      return g_(t);
    if (Vc(t))
      return p_(t);
    if (jc(t))
      return Zc(t);
    if (Wc(t))
      return b_(t);
    if (Kc(t))
      return __(t);
  }
  throw qc(t);
}
function m_(t) {
  return new An(function(e) {
    var n = t[Go]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function g_(t) {
  return new An(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function p_(t) {
  return new An(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Uc);
  });
}
function b_(t) {
  return new An(function(e) {
    var n, r;
    try {
      for (var i = Lt(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
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
function Zc(t) {
  return new An(function(e) {
    y_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function __(t) {
  return Zc(Xc(t));
}
function y_(t, e) {
  var n, r, i, a;
  return ec(this, void 0, void 0, function() {
    var s, u;
    return No(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = vh(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = l.sent(), i = { error: u }, [3, 11];
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
          return e.complete(), [2];
      }
    });
  });
}
function ei(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Yc(t, e) {
  return e === void 0 && (e = 0), Xn(function(n, r) {
    n.subscribe(lr(r, function(i) {
      return ei(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ei(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ei(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Qc(t, e) {
  return e === void 0 && (e = 0), Xn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function I_(t, e) {
  return Zi(t).pipe(Qc(e), Yc(e));
}
function E_(t, e) {
  return Zi(t).pipe(Qc(e), Yc(e));
}
function A_(t, e) {
  return new An(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function S_(t, e) {
  return new An(function(n) {
    var r;
    return ei(n, e, function() {
      r = t[zc](), ei(n, e, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return yt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Jc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new An(function(n) {
    ei(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ei(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function C_(t, e) {
  return Jc(Xc(t), e);
}
function x_(t, e) {
  if (t != null) {
    if (Gc(t))
      return I_(t, e);
    if (Fc(t))
      return A_(t, e);
    if (Vc(t))
      return E_(t, e);
    if (jc(t))
      return Jc(t, e);
    if (Wc(t))
      return S_(t, e);
    if (Kc(t))
      return C_(t, e);
  }
  throw qc(t);
}
function $c(t, e) {
  return e ? x_(t, e) : Zi(t);
}
function ed() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Bc(t);
  return $c(t, n);
}
function Kt(t, e) {
  return Xn(function(n, r) {
    var i = 0;
    n.subscribe(lr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function T_(t, e, n, r, i, a, s, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? v(g) : l.push(g);
  }, v = function(g) {
    c++;
    var b = !1;
    Zi(n(g, d++)).subscribe(lr(e, function(I) {
      e.next(I);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var I = function() {
            var A = l.shift();
            s || v(A);
          }; l.length && c < r; )
            I();
          f();
        } catch (A) {
          e.error(A);
        }
    }));
  };
  return t.subscribe(lr(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function cs(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? cs(function(r, i) {
    return Kt(function(a, s) {
      return e(r, a, i, s);
    })(Zi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Xn(function(r, i) {
    return T_(r, i, t, n);
  }));
}
function w_(t) {
  return t === void 0 && (t = 1 / 0), cs(xs, t);
}
function td(t, e) {
  return yt(e) ? cs(t, e, 1) : cs(t, 1);
}
function L_(t, e) {
  return e === void 0 && (e = d_), Xn(function(n, r) {
    var i = null, a = null, s = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = a;
        a = null, r.next(c);
      }
    };
    function l() {
      var c = s + t, d = e.now();
      if (d < c) {
        i = this.schedule(void 0, c - d), r.add(i);
        return;
      }
      u();
    }
    n.subscribe(lr(r, function(c) {
      a = c, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function O_(t, e) {
  return e === void 0 && (e = xs), t = t ?? R_, Xn(function(n, r) {
    var i, a = !0;
    n.subscribe(lr(r, function(s) {
      var u = e(s);
      (a || !t(i, u)) && (a = !1, i = u, r.next(s));
    }));
  });
}
function R_(t, e) {
  return t === e;
}
function M_(t) {
  return Xn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function D_() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Bc(t), r = h_(t, 1 / 0);
  return Xn(function(i, a) {
    w_(r)($c(jn([i], Cr(t)), n)).subscribe(a);
  });
}
function H_() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return D_.apply(void 0, jn([], Cr(t)));
}
function P_(t, e) {
  return Xn(function(n, r) {
    var i = null, a = 0, s = !1, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(lr(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      Zi(t(l, d)).subscribe(i = lr(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = !0, u();
    }));
  });
}
function $l(t, e, n) {
  var r = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Xn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var u = !0;
    i.subscribe(lr(a, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var c;
      u = !1, (c = r.error) === null || c === void 0 || c.call(r, l), a.error(l);
    }, function() {
      var l, c;
      u && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : xs;
}
function nd(t) {
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
var N_ = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = nd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), ds = Fo(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = nd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), U_ = function() {
  function t(e, n) {
    return ds.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(ds.prototype), t;
}();
function k_(t, e) {
  return Hr({ method: "GET", url: t, headers: e });
}
function B_(t, e, n) {
  return Hr({ method: "POST", url: t, body: e, headers: n });
}
function F_(t, e) {
  return Hr({ method: "DELETE", url: t, headers: e });
}
function V_(t, e, n) {
  return Hr({ method: "PUT", url: t, body: e, headers: n });
}
function G_(t, e, n) {
  return Hr({ method: "PATCH", url: t, body: e, headers: n });
}
var j_ = Kt(function(t) {
  return t.response;
});
function q_(t, e) {
  return j_(Hr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Hr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return W_(n);
  };
  return t.get = k_, t.post = B_, t.delete = F_, t.put = V_, t.patch = G_, t.getJSON = q_, t;
}(), z_ = "upload", eu = "download", Xs = "loadstart", Ks = "progress", tu = "load";
function W_(t) {
  return new An(function(e) {
    var n, r, i = le({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(H, K) {
          return c.set(K, H);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var h = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (h[f.toLowerCase()] = u[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && g && b) {
      var I = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      I && (h[b] = I);
    }
    var A = X_(s, h), S = le(le({}, i), {
      url: l,
      headers: h,
      body: A
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, C = t.includeDownloadProgress, T = C === void 0 ? !1 : C, x = t.includeUploadProgress, y = x === void 0 ? !1 : x, R = function(H, K) {
        _.addEventListener(H, function() {
          var J, D = K();
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, D), e.error(D);
        });
      };
      R("timeout", function() {
        return new U_(_, S);
      }), R("abort", function() {
        return new ds("aborted", _, S);
      });
      var U = function(H, K) {
        return new N_(K, _, S, H + "_" + K.type);
      }, P = function(H, K, J) {
        H.addEventListener(K, function(D) {
          e.next(U(J, D));
        });
      };
      y && [Xs, Ks, tu].forEach(function(H) {
        return P(_.upload, H, z_);
      }), E && [Xs, Ks].forEach(function(H) {
        return _.upload.addEventListener(H, function(K) {
          var J;
          return (J = E == null ? void 0 : E.next) === null || J === void 0 ? void 0 : J.call(E, K);
        });
      }), T && [Xs, Ks].forEach(function(H) {
        return P(_, H, eu);
      });
      var F = function(H) {
        var K = "ajax error" + (H ? " " + H : "");
        e.error(new ds(K, _, S));
      };
      _.addEventListener("error", function(H) {
        var K;
        (K = E == null ? void 0 : E.error) === null || K === void 0 || K.call(E, H), F();
      }), _.addEventListener(tu, function(H) {
        var K, J, D = _.status;
        if (D < 400) {
          (K = E == null ? void 0 : E.complete) === null || K === void 0 || K.call(E);
          var L = void 0;
          try {
            L = U(eu, H);
          } catch (N) {
            e.error(N);
            return;
          }
          e.next(L), e.complete();
        } else
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, H), F(D);
      });
    }
    var pe = S.user, G = S.method, k = S.async;
    pe ? _.open(G, l, k, pe, S.password) : _.open(G, l, k), k && (_.timeout = S.timeout, _.responseType = S.responseType), "withCredentials" in _ && (_.withCredentials = S.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return A ? _.send(A) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function X_(t, e) {
  var n;
  if (!t || typeof t == "string" || $_(t) || ey(t) || Z_(t) || Y_(t) || Q_(t) || ty(t))
    return t;
  if (J_(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var K_ = Object.prototype.toString;
function jo(t, e) {
  return K_.call(t) === "[object " + e + "]";
}
function Z_(t) {
  return jo(t, "ArrayBuffer");
}
function Y_(t) {
  return jo(t, "File");
}
function Q_(t) {
  return jo(t, "Blob");
}
function J_(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function $_(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function ey(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function ty(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let ny = class {
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
const ry = new ny("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), iy = [ry], ay = iy[0].getUrl();
let rd = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? ay;
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
}, sy = class {
  constructor(e = new rd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${oy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => ed(n).pipe(
      Kt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      td(
        (r) => Hr(r).pipe(
          Kt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Kt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const ar = (t) => encodeURIComponent(`${t}`), oy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${ar(e)}=${ar(r)}`).join("&") : `${ar(e)}=${ar(n)}`
).join("&"), pi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ly extends sy {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    pi(e, "id", "deleteAllSclFileVersions"), pi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/{type}/{id}".replace("{id}", ar(e)).replace("{type}", ar(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    pi(e, "id", "retrieveDataResourceByVersion"), pi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", ar(e)).replace("{version}", ar(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    pi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", ar(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    pi(e, "dataResourceSearch", "searchForResources");
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
class qo {
  constructor(e, n, r, i, a, s, u, l, c) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = s, this.available = u, this.deleted = l, this.location = c;
  }
  static from(e) {
    return new qo(
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
class uy {
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
const cy = new uy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), dy = [cy], fy = dy[0].getUrl();
class id {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? fy;
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
class hy {
  constructor(e = new id()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${vy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => ed(n).pipe(
      Kt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      td(
        (r) => Hr(r).pipe(
          Kt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Kt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const wn = (t) => encodeURIComponent(`${t}`), vy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${wn(e)}=${wn(r)}`).join("&") : `${wn(e)}=${wn(n)}`
).join("&"), tr = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class my extends hy {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    tr(e, "locationId", "assignResourceToLocation"), tr(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", wn(e)).replace("{uuid}", wn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    tr(e, "location", "createLocation");
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
    tr(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    tr(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
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
    tr(e, "locationId", "unassignResourceFromLocation"), tr(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", wn(e)).replace("{uuid}", wn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    tr(e, "locationId", "updateLocation"), tr(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", wn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class zo {
  constructor(e, n, r, i, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new zo(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Ei {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Ei.instance || (Ei.instance = new Ei()), Ei.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Kt((n) => n || []),
      Kt((n) => n.map((r) => zo.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Kt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Kt(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Kt((n) => n.results),
      Kt(
        (n) => n.map((r) => qo.from(r))
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
    const n = new id({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new my(n);
  }
  createHistoryApiClient(e) {
    const n = new rd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new ly(n);
  }
}
var rr;
class gy {
  constructor() {
    Ke(this, rr, Qt([]));
  }
  get store() {
    return Q(this, rr);
  }
  set(e) {
    Q(this, rr).set(e);
  }
  update(e) {
    Q(this, rr).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    Q(this, rr).update((n) => [...n, e]);
  }
  remove(e) {
    Q(this, rr).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return Ju(Q(this, rr)).find((n) => n.uuid === e);
  }
}
rr = new WeakMap();
var py = (t, e, n) => {
  var r;
  return (r = e.onChange) == null ? void 0 : r.call(e, e.row, o(n));
}, by = /* @__PURE__ */ he("<option> </option>"), _y = /* @__PURE__ */ he(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function yy(t, e) {
  we(e, !0);
  let n = p(e, "locations", 19, () => []), r = /* @__PURE__ */ me(be(e.value ?? ""));
  Se(() => {
    z(r, e.value ?? "", !0);
  }), Se(() => {
    var l;
    o(r) !== (e.value ?? "") && ((l = e.onChange) == null || l.call(e, e.row, o(r)));
  });
  var i = _y(), a = ge(i);
  a.__change = [py, e, r];
  var s = ge(a);
  s.value = s.__value = "";
  var u = _e(s);
  Fn(u, 17, n, (l) => l.value, (l, c) => {
    var d = by(), h = ge(d), f = {};
    Oe(() => {
      at(h, o(c).label), f !== (f = o(c).value) && (d.value = (d.__value = o(c).value) ?? "");
    }), w(l, d);
  }), Pf(a, () => o(r), (l) => z(r, l)), w(t, i), Le();
}
hn(["change"]);
jv({ en: _m, de: im });
var Iy = /* @__PURE__ */ he('<div class="app-container svelte-1lw4l1e"><!> <!></div> <!>', 1);
function Ey(t, e) {
  we(e, !0);
  const n = () => Gn(Gv, "$_", r), [r, i] = cr(), a = Ei.getInstance();
  let s = /* @__PURE__ */ me(be([])), u = "", l = /* @__PURE__ */ me(!0), c = /* @__PURE__ */ me("");
  const d = new _o(), f = new _o().pipe(H_(d.pipe(L_(200)))).pipe(
    Kt(() => I(o(m))),
    O_((y, R) => JSON.stringify(y) === JSON.stringify(R)),
    $l(() => {
      z(l, !0);
    }),
    P_((y) => a.searchResources(y).pipe(
      $l((R) => {
        v.set(R.filter((U) => U.location !== u));
      }),
      M_(() => {
        z(l, !1);
      })
    ))
  );
  lt(() => {
    const y = f.subscribe();
    return a.getLocations().subscribe({
      next: (R) => {
        z(s, R.map((U) => ({ label: U.name, value: U.uuid })), !0), z(m, o(
          m
          // populate location filter options
        ).map((U) => U.key === "location" ? { ...U, options: o(s) } : U), !0);
      },
      error: (R) => {
        console.error("Error loading locations:", R), ha.error("Failed to load locations.");
      }
    }), d.next(), () => y.unsubscribe();
  });
  let m = /* @__PURE__ */ me(be([
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
  const v = new gy();
  function g(y) {
    return new Date(y).toLocaleDateString();
  }
  function b(y) {
    var R;
    return !o(s) || !y ? y || "" : ((R = o(s).find((U) => U.value === y)) == null ? void 0 : R.label) ?? y;
  }
  function I(y) {
    const R = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return y.forEach((U) => {
      if (U.value) {
        if (U.type === "date") {
          const P = new Date(U.value);
          U.key === "from" && (R.from = P.toISOString()), U.key === "to" && (P.setHours(23, 59, 59, 999), R.to = P.toISOString());
          return;
        }
        U.key in R && (R[U.key] = U.value);
      }
    }), o(c) && o(c).trim() !== "" && (R.name = o(c).trim()), R;
  }
  function A(y, R) {
    const U = y.location, P = R || null;
    if (U === P)
      return;
    const F = { ...y, location: P };
    v.update(F), (P ? a.assignResourceToLocation(P, y.uuid) : a.unassignResourceFromLocation(U ?? "", y.uuid)).subscribe({
      next: () => {
        d.next(), ha.success("Resource location updated successfully.");
      },
      error: () => {
        ha.error("Failed to update resource location.");
        const G = { ...y, location: U };
        v.update(G);
      }
    });
  }
  let S = /* @__PURE__ */ fe(() => [
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
      cellRenderer: yy,
      cellRendererProps: {
        locations: o(s),
        onChange: A
      },
      filterValueGetter: (y) => b(y.location)
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
  Se(() => {
  });
  var _ = Iy(), E = Z(_), C = ge(E);
  Pb(C, {
    searchLabel: "Search name...",
    onFilterChange: () => d.next(null),
    onSearchInput: () => d.next(null),
    get filters() {
      return o(m);
    },
    set filters(y) {
      z(m, y, !0);
    },
    get searchText() {
      return o(c);
    },
    set searchText(y) {
      z(c, y, !0);
    }
  });
  var T = _e(C, 2);
  {
    let y = /* @__PURE__ */ fe(() => !o(l)), R = /* @__PURE__ */ fe(() => n()("search"));
    Zb(T, {
      get columnDefs() {
        return o(S);
      },
      get loadingDone() {
        return o(y);
      },
      get store() {
        return v;
      },
      get searchInputLabel() {
        return o(R);
      }
    });
  }
  var x = _e(E, 2);
  gb(x, {}), w(t, _), Le(), i();
}
const ad = "location-viewer", sd = "0.0.1";
var Ay = /* @__PURE__ */ he('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Sy(t, e) {
  we(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = Ay(), i = Z(r);
  {
    var a = (l) => {
      Ey(l, {});
    };
    ne(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = _e(i, 2), u = _e(s, 2);
  Oe(() => {
    cl(s, ad), cl(u, sd);
  }), w(t, r), Le();
}
var Ri;
class My extends HTMLElement {
  constructor() {
    super();
    Ke(this, Ri);
    De(this, Ri, /* @__PURE__ */ me(be({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(Q(this, Ri));
  }
  set props(n) {
    z(Q(this, Ri), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Cf(Sy, { target: this.shadowRoot, props: this.props });
    const n = Cy();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Ri = new WeakMap();
function Cy() {
  const t = `${ad}-v${sd}-style`, e = xy(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function xy() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  My as default
};
