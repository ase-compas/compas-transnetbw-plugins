var hd = Object.defineProperty;
var Ko = (t) => {
  throw TypeError(t);
};
var vd = (t, e, n) => e in t ? hd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var hi = (t, e, n) => vd(t, typeof e != "symbol" ? e + "" : e, n), Rs = (t, e, n) => e.has(t) || Ko("Cannot " + n);
var Q = (t, e, n) => (Rs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ye = (t, e, n) => e.has(t) ? Ko("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), De = (t, e, n, r) => (Rs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Gt = (t, e, n) => (Rs(t, e, "access private method"), n);
const Mt = Symbol(), md = "http://www.w3.org/1999/xhtml", gd = "http://www.w3.org/2000/svg", pd = "@attach", ru = !1;
var gs = Array.isArray, bd = Array.prototype.indexOf, Io = Array.from, Ya = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, iu = Object.getOwnPropertyDescriptors, _d = Object.prototype, yd = Array.prototype, Eo = Object.getPrototypeOf, Zo = Object.isExtensible;
function _i(t) {
  return typeof t == "function";
}
const ve = () => {
};
function Id(t) {
  return t();
}
function Qa(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function au() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const tn = 2, Ao = 4, ps = 8, Tr = 16, dr = 32, ai = 64, So = 128, An = 256, Ja = 512, qt = 1024, gn = 2048, wr = 4096, Dn = 8192, si = 16384, bs = 32768, Lr = 65536, Yo = 1 << 17, Ed = 1 << 18, ji = 1 << 19, su = 1 << 20, Zs = 1 << 21, _s = 1 << 22, Qr = 1 << 23, qn = Symbol("$state"), ou = Symbol("legacy props"), Ad = Symbol(""), yi = new class extends Error {
  constructor() {
    super(...arguments);
    hi(this, "name", "StaleReactionError");
    hi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function xo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function xd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cd() {
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
function Pd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Hd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Nd = !1;
function lu(t) {
  return t === this.v;
}
function Co(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function uu(t) {
  return !Co(t, this.v);
}
let qi = !1, Ud = !1;
function kd() {
  qi = !0;
}
let rt = null;
function Di(t) {
  rt = t;
}
function le(t) {
  return (
    /** @type {T} */
    cu().get(t)
  );
}
function ie(t, e) {
  return cu().set(t, e), e;
}
function Ce(t, e = !1, n) {
  rt = {
    p: rt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
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
function Aa() {
  return !qi || rt !== null && rt.l === null;
}
function cu(t) {
  return rt === null && xo(), rt.c ?? (rt.c = new Map(Bd(rt) || void 0));
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
let zr = [];
function du() {
  var t = zr;
  zr = [], Qa(t);
}
function ur(t) {
  if (zr.length === 0 && !da) {
    var e = zr;
    queueMicrotask(() => {
      e === zr && du();
    });
  }
  zr.push(t);
}
function Fd() {
  for (; zr.length > 0; )
    du();
}
const Vd = /* @__PURE__ */ new WeakMap();
function fu(t) {
  var e = ke;
  if (e === null)
    return Ne.f |= Qr, t;
  if (e.f & bs)
    Pi(t, e);
  else {
    if (!(e.f & So))
      throw !e.parent && t instanceof Error && hu(t), t;
    e.b.error(t);
  }
}
function Pi(t, e) {
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
  e && (Ya(t, "message", {
    value: e.message
  }), Ya(t, "stack", {
    value: e.stack
  }));
}
const Ma = /* @__PURE__ */ new Set();
let tt = null, ja = null, kt = null, Ys = /* @__PURE__ */ new Set(), Gn = [], ys = null, Qs = !1, da = !1;
var Ti, wi, Wr, ya, Li, Oi, Xr, Ri, Ia, Ea, Sn, Js, qa, $s;
const hs = class hs {
  constructor() {
    Ye(this, Sn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    hi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ye(this, Ti, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ye(this, wi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ye(this, Wr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ye(this, ya, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ye(this, Li, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ye(this, Oi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ye(this, Xr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ye(this, Ri, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ye(this, Ia, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ye(this, Ea, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    hi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Gn = [], ja = null, this.apply();
    for (const s of e)
      Gt(this, Sn, Js).call(this, s);
    if (Q(this, Wr) === 0) {
      var n = kt;
      Gt(this, Sn, $s).call(this);
      var r = Q(this, Oi), i = Q(this, Xr);
      De(this, Oi, []), De(this, Xr, []), De(this, Ri, []), ja = this, tt = null, kt = n, Qo(r), Qo(i), ja = null, (a = Q(this, ya)) == null || a.resolve();
    } else
      Gt(this, Sn, qa).call(this, Q(this, Oi)), Gt(this, Sn, qa).call(this, Q(this, Xr)), Gt(this, Sn, qa).call(this, Q(this, Ri));
    kt = null;
    for (const s of Q(this, Li))
      ga(s);
    De(this, Li, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    Q(this, Ti).has(e) || Q(this, Ti).set(e, n), this.current.set(e, e.v), kt == null || kt.set(e, e.v);
  }
  activate() {
    tt = this;
  }
  deactivate() {
    tt = null, kt = null;
  }
  flush() {
    if (Gn.length > 0) {
      if (this.activate(), vu(), tt !== null && tt !== this)
        return;
    } else Q(this, Wr) === 0 && Gt(this, Sn, $s).call(this);
    this.deactivate();
    for (const e of Ys)
      if (Ys.delete(e), e(), tt !== null)
        break;
  }
  increment() {
    De(this, Wr, Q(this, Wr) + 1);
  }
  decrement() {
    De(this, Wr, Q(this, Wr) - 1);
    for (const e of Q(this, Ia))
      Jt(e, gn), ni(e);
    for (const e of Q(this, Ea))
      Jt(e, wr), ni(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    Q(this, wi).add(e);
  }
  settled() {
    return (Q(this, ya) ?? De(this, ya, au())).promise;
  }
  static ensure() {
    if (tt === null) {
      const e = tt = new hs();
      Ma.add(tt), da || hs.enqueue(() => {
        tt === e && e.flush();
      });
    }
    return tt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ur(e);
  }
  apply() {
  }
};
Ti = new WeakMap(), wi = new WeakMap(), Wr = new WeakMap(), ya = new WeakMap(), Li = new WeakMap(), Oi = new WeakMap(), Xr = new WeakMap(), Ri = new WeakMap(), Ia = new WeakMap(), Ea = new WeakMap(), Sn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Js = function(e) {
  var u;
  e.f ^= qt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (dr | ai)) !== 0, a = i && (r & qt) !== 0, s = a || (r & Dn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= qt : r & Ao ? Q(this, Xr).push(n) : r & qt || (r & _s && ((u = n.b) != null && u.is_pending()) ? Q(this, Li).push(n) : As(n) && (n.f & Tr && Q(this, Ri).push(n), ga(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
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
qa = function(e) {
  for (const n of e)
    (n.f & gn ? Q(this, Ia) : Q(this, Ea)).push(n), Jt(n, qt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
$s = function() {
  var e;
  for (const n of Q(this, wi))
    n();
  if (Q(this, wi).clear(), Ma.size > 1) {
    Q(this, Ti).clear();
    let n = !0;
    for (const r of Ma) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [s, c] of this.current) {
        if (r.current.has(s))
          if (n && c !== r.current.get(s))
            r.current.set(s, c);
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
        if (Gn.length > 0) {
          tt = r, r.apply();
          for (const s of Gn)
            Gt(e = r, Sn, Js).call(e, s);
          Gn = [], r.deactivate();
        }
      }
    }
    tt = null;
  }
  Ma.delete(this);
};
let lr = hs;
function Gd(t) {
  var e = da;
  da = !0;
  try {
    for (var n; ; ) {
      if (Fd(), Gn.length === 0 && (tt == null || tt.flush(), Gn.length === 0))
        return ys = null, /** @type {T} */
        n;
      vu();
    }
  } finally {
    da = e;
  }
}
function vu() {
  var t = Si;
  Qs = !0;
  try {
    var e = 0;
    for (tl(!0); Gn.length > 0; ) {
      var n = lr.ensure();
      if (e++ > 1e3) {
        var r, i;
        jd();
      }
      n.process(Gn), Ar.clear();
    }
  } finally {
    Qs = !1, tl(t), ys = null;
  }
}
function jd() {
  try {
    wd();
  } catch (t) {
    Pi(t, ys);
  }
}
let ir = null;
function Qo(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (si | Dn)) && As(r) && (ir = [], ga(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ou(r) : r.fn = null), (ir == null ? void 0 : ir.length) > 0)) {
        Ar.clear();
        for (const i of ir)
          ga(i);
        ir = [];
      }
    }
    ir = null;
  }
}
function mu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & tn ? mu(
        /** @type {Derived} */
        n,
        e
      ) : r & (_s | Tr) && gu(n, e) && (Jt(n, gn), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function gu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & tn && gu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ni(t) {
  for (var e = ys = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Qs && e === ke && n & Tr)
      return;
    if (n & (ai | dr)) {
      if (!(n & qt)) return;
      e.f ^= qt;
    }
  }
  Gn.push(e);
}
function qd(t) {
  let e = 0, n = ri(0), r;
  return () => {
    of() && (o(n), Ca(() => (e === 0 && (r = Pn(() => t(() => fa(n)))), e += 1, () => {
      ur(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, fa(n));
      });
    })));
  };
}
var zd = Lr | ji | So;
function Wd(t, e, n) {
  new Xd(t, e, n);
}
var On, In, yo, Bn, Kr, Fn, En, ln, Vn, pr, Zr, br, Yr, _r, vs, ms, en, Kd, Zd, za, Wa, eo;
class Xd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ye(this, en);
    /** @type {Boundary | null} */
    hi(this, "parent");
    Ye(this, On, !1);
    /** @type {TemplateNode} */
    Ye(this, In);
    /** @type {TemplateNode | null} */
    Ye(this, yo, null);
    /** @type {BoundaryProps} */
    Ye(this, Bn);
    /** @type {((anchor: Node) => void)} */
    Ye(this, Kr);
    /** @type {Effect} */
    Ye(this, Fn);
    /** @type {Effect | null} */
    Ye(this, En, null);
    /** @type {Effect | null} */
    Ye(this, ln, null);
    /** @type {Effect | null} */
    Ye(this, Vn, null);
    /** @type {DocumentFragment | null} */
    Ye(this, pr, null);
    Ye(this, Zr, 0);
    Ye(this, br, 0);
    Ye(this, Yr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ye(this, _r, null);
    Ye(this, vs, () => {
      Q(this, _r) && Hi(Q(this, _r), Q(this, Zr));
    });
    Ye(this, ms, qd(() => (De(this, _r, ri(Q(this, Zr))), () => {
      De(this, _r, null);
    })));
    De(this, In, e), De(this, Bn, n), De(this, Kr, r), this.parent = /** @type {Effect} */
    ke.b, De(this, On, !!Q(this, Bn).pending), De(this, Fn, Mr(() => {
      ke.b = this;
      {
        try {
          De(this, En, jt(() => r(Q(this, In))));
        } catch (i) {
          this.error(i);
        }
        Q(this, br) > 0 ? Gt(this, en, Wa).call(this) : De(this, On, !1);
      }
    }, zd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return Q(this, On) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!Q(this, Bn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Gt(this, en, eo).call(this, e), De(this, Zr, Q(this, Zr) + e), Ys.add(Q(this, vs));
  }
  get_effect_pending() {
    return Q(this, ms).call(this), o(
      /** @type {Source<number>} */
      Q(this, _r)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = Q(this, Bn).onerror;
    let r = Q(this, Bn).failed;
    if (Q(this, Yr) || !n && !r)
      throw e;
    Q(this, En) && (Bt(Q(this, En)), De(this, En, null)), Q(this, ln) && (Bt(Q(this, ln)), De(this, ln, null)), Q(this, Vn) && (Bt(Q(this, Vn)), De(this, Vn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Hd();
        return;
      }
      i = !0, a && Dd(), lr.ensure(), De(this, Zr, 0), Q(this, Vn) !== null && Sr(Q(this, Vn), () => {
        De(this, Vn, null);
      }), De(this, On, this.has_pending_snippet()), De(this, En, Gt(this, en, za).call(this, () => (De(this, Yr, !1), jt(() => Q(this, Kr).call(this, Q(this, In)))))), Q(this, br) > 0 ? Gt(this, en, Wa).call(this) : De(this, On, !1);
    };
    var c = Ne;
    try {
      un(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Pi(l, Q(this, Fn) && Q(this, Fn).parent);
    } finally {
      un(c);
    }
    r && ur(() => {
      De(this, Vn, Gt(this, en, za).call(this, () => {
        De(this, Yr, !0);
        try {
          return jt(() => {
            r(
              Q(this, In),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Pi(
            l,
            /** @type {Effect} */
            Q(this, Fn).parent
          ), null;
        } finally {
          De(this, Yr, !1);
        }
      }));
    });
  }
}
On = new WeakMap(), In = new WeakMap(), yo = new WeakMap(), Bn = new WeakMap(), Kr = new WeakMap(), Fn = new WeakMap(), En = new WeakMap(), ln = new WeakMap(), Vn = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), br = new WeakMap(), Yr = new WeakMap(), _r = new WeakMap(), vs = new WeakMap(), ms = new WeakMap(), en = new WeakSet(), Kd = function() {
  try {
    De(this, En, jt(() => Q(this, Kr).call(this, Q(this, In))));
  } catch (e) {
    this.error(e);
  }
  De(this, On, !1);
}, Zd = function() {
  const e = Q(this, Bn).pending;
  e && (De(this, ln, jt(() => e(Q(this, In)))), lr.enqueue(() => {
    De(this, En, Gt(this, en, za).call(this, () => (lr.ensure(), jt(() => Q(this, Kr).call(this, Q(this, In)))))), Q(this, br) > 0 ? Gt(this, en, Wa).call(this) : (Sr(
      /** @type {Effect} */
      Q(this, ln),
      () => {
        De(this, ln, null);
      }
    ), De(this, On, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
za = function(e) {
  var n = ke, r = Ne, i = rt;
  Xn(Q(this, Fn)), un(Q(this, Fn)), Di(Q(this, Fn).ctx);
  try {
    return e();
  } catch (a) {
    return fu(a), null;
  } finally {
    Xn(n), un(r), Di(i);
  }
}, Wa = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    Q(this, Bn).pending
  );
  Q(this, En) !== null && (De(this, pr, document.createDocumentFragment()), Yd(Q(this, En), Q(this, pr))), Q(this, ln) === null && De(this, ln, jt(() => e(Q(this, In))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
eo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(n = this.parent, en, eo).call(n, e);
    return;
  }
  De(this, br, Q(this, br) + e), Q(this, br) === 0 && (De(this, On, !1), Q(this, ln) && Sr(Q(this, ln), () => {
    De(this, ln, null);
  }), Q(this, pr) && (Q(this, In).before(Q(this, pr)), De(this, pr, null)), ur(() => {
    lr.ensure().flush();
  }));
};
function Yd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xa(n)
    );
    e.append(n), n = i;
  }
}
function pu(t, e, n) {
  const r = Aa() ? Sa : To;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = tt, a = (
    /** @type {Effect} */
    ke
  ), s = Qd();
  Promise.all(e.map((c) => /* @__PURE__ */ Jd(c))).then((c) => {
    s();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & si || Pi(l, a);
    }
    i == null || i.deactivate(), to();
  }).catch((c) => {
    Pi(c, a);
  });
}
function Qd() {
  var t = ke, e = Ne, n = rt, r = tt;
  return function() {
    Xn(t), un(e), Di(n), r == null || r.activate();
  };
}
function to() {
  Xn(null), un(null), Di(null);
}
// @__NO_SIDE_EFFECTS__
function Sa(t) {
  var e = tn | gn, n = Ne !== null && Ne.f & tn ? (
    /** @type {Derived} */
    Ne
  ) : null;
  return ke === null || n !== null && n.f & An ? e |= An : ke.f |= ji, {
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
      Mt
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
  ), a = ri(
    /** @type {V} */
    Mt
  ), s = !Ne, c = /* @__PURE__ */ new Map();
  return cf(() => {
    var f;
    var l = au();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(to);
    } catch (m) {
      l.reject(m), to();
    }
    var u = (
      /** @type {Batch} */
      tt
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(yi), c.delete(u), c.set(u, l)));
    const h = (m, v = void 0) => {
      if (d || u.activate(), v)
        v !== yi && (a.f |= Qr, Hi(a, v));
      else {
        a.f & Qr && (a.f ^= Qr), Hi(a, m);
        for (const [g, b] of c) {
          if (c.delete(g), g === u) break;
          b.reject(yi);
        }
      }
      s && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), Is(() => {
    for (const l of c.values())
      l.reject(yi);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(a) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ Sa(t);
  return Du(e), e;
}
// @__NO_SIDE_EFFECTS__
function To(t) {
  const e = /* @__PURE__ */ Sa(t);
  return e.equals = uu, e;
}
function bu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Bt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $d(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & tn))
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
  Xn($d(t));
  try {
    bu(t), e = Uu(t);
  } finally {
    Xn(n);
  }
  return e;
}
function _u(t) {
  var e = wo(t);
  if (t.equals(e) || (t.v = e, t.wv = Hu()), !oi)
    if (kt !== null)
      kt.set(t, t.v);
    else {
      var n = (yr || t.f & An) && t.deps !== null ? wr : qt;
      Jt(t, n);
    }
}
const Ar = /* @__PURE__ */ new Map();
function ri(t, e) {
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
  const n = ri(t);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function yu(t, e = !1, n = !0) {
  var i;
  const r = ri(t);
  return e || (r.equals = uu), qi && n && rt !== null && rt.l !== null && ((i = rt.l).s ?? (i.s = [])).push(r), r;
}
function z(t, e, n = !1) {
  Ne !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || Ne.f & Yo) && Aa() && Ne.f & (tn | Tr | _s | Yo) && !(Qt != null && Qt.includes(t)) && Md();
  let r = n ? _e(e) : e;
  return Hi(t, r);
}
function Hi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    oi ? Ar.set(t, e) : Ar.set(t, n), t.v = e;
    var r = lr.ensure();
    r.capture(t, n), t.f & tn && (t.f & gn && wo(
      /** @type {Derived} */
      t
    ), Jt(t, t.f & An ? wr : qt)), t.wv = Hu(), Iu(t, gn), Aa() && ke !== null && ke.f & qt && !(ke.f & (dr | ai)) && (yn === null ? hf([t]) : yn.push(t));
  }
  return e;
}
function fa(t) {
  z(t, t.v + 1);
}
function Iu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Aa(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], c = s.f;
      if (!(!r && s === ke)) {
        var l = (c & gn) === 0;
        l && Jt(s, e), c & tn ? Iu(
          /** @type {Derived} */
          s,
          wr
        ) : l && (c & Tr && ir !== null && ir.push(
          /** @type {Effect} */
          s
        ), ni(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function _e(t) {
  if (typeof t != "object" || t === null || qn in t)
    return t;
  const e = Eo(t);
  if (e !== _d && e !== yd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = gs(t), i = /* @__PURE__ */ me(0), a = Jr, s = (c) => {
    if (Jr === a)
      return c();
    var l = Ne, u = Jr;
    un(null), rl(a);
    var d = c();
    return un(l), rl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Od();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ me(u.value);
          return n.set(l, h), h;
        }) : z(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = s(() => /* @__PURE__ */ me(Mt));
            n.set(l, d), fa(i);
          }
        } else
          z(u, Mt), fa(i);
        return !0;
      },
      get(c, l, u) {
        var m;
        if (l === qn)
          return t;
        var d = n.get(l), h = l in c;
        if (d === void 0 && (!h || (m = Er(c, l)) != null && m.writable) && (d = s(() => {
          var v = _e(h ? c[l] : Mt), g = /* @__PURE__ */ me(v);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Mt ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = o(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Mt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(c, l) {
        var f;
        if (l === qn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Mt || Reflect.has(c, l);
        if (u !== void 0 || ke !== null && (!d || (f = Er(c, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => {
            var m = d ? _e(c[l]) : Mt, v = /* @__PURE__ */ me(m);
            return v;
          }), n.set(l, u));
          var h = o(u);
          if (h === Mt)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var A;
        var h = n.get(l), f = l in c;
        if (r && l === "length")
          for (var m = u; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? z(v, Mt) : m in c && (v = s(() => /* @__PURE__ */ me(Mt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (A = Er(c, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ me(void 0)), z(h, _e(u)), n.set(l, h));
        else {
          f = h.v !== Mt;
          var g = s(() => _e(u));
          z(h, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(c, l);
        if (b != null && b.set && b.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= I.v && z(I, E + 1);
          }
          fa(i);
        }
        return !0;
      },
      ownKeys(c) {
        o(i);
        var l = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Mt;
        });
        for (var [u, d] of n)
          d.v !== Mt && !(u in c) && l.push(u);
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
    if (t !== null && typeof t == "object" && qn in t)
      return t[qn];
  } catch {
  }
  return t;
}
function ef(t, e) {
  return Object.is(Jo(t), Jo(e));
}
var $o, Eu, Au, Su, xu;
function tf() {
  if ($o === void 0) {
    $o = window, Eu = document, Au = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Su = Er(e, "firstChild").get, xu = Er(e, "nextSibling").get, Zo(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Zo(n) && (n.__t = void 0);
  }
}
function Or(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ni(t) {
  return Su.call(t);
}
// @__NO_SIDE_EFFECTS__
function xa(t) {
  return xu.call(t);
}
function ge(t, e) {
  return /* @__PURE__ */ Ni(t);
}
function K(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ni(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ xa(n) : n;
  }
}
function ye(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ xa(r);
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
    t.autofocus = !0, ur(() => {
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
function zi(t) {
  var e = Ne, n = ke;
  un(null), Xn(null);
  try {
    return t();
  } finally {
    un(e), Xn(n);
  }
}
function Oo(t, e, n, r = n) {
  t.addEventListener(e, () => zi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), af();
}
function Cu(t) {
  ke === null && Ne === null && Td(), Ne !== null && Ne.f & An && ke === null && Cd(), oi && xd();
}
function sf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kn(t, e, n, r = !0) {
  var i = ke;
  i !== null && i.f & Dn && (t |= Dn);
  var a = {
    ctx: rt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | gn,
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
      ga(a), a.f |= bs;
    } catch (l) {
      throw Bt(a), l;
    }
  else e !== null && ni(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & ji) && (s = s.first), s !== null && (s.parent = i, i !== null && sf(s, i), Ne !== null && Ne.f & tn && !(t & ai))) {
      var c = (
        /** @type {Derived} */
        Ne
      );
      (c.effects ?? (c.effects = [])).push(s);
    }
  }
  return a;
}
function of() {
  return Ne !== null && !Mn;
}
function Is(t) {
  const e = Kn(ps, null, !1);
  return Jt(e, qt), e.teardown = t, e;
}
function Ae(t) {
  Cu();
  var e = (
    /** @type {Effect} */
    ke.f
  ), n = !Ne && (e & dr) !== 0 && (e & bs) === 0;
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
  return Kn(Ao | su, t, !1);
}
function lf(t) {
  return Cu(), Kn(ps | su, t, !0);
}
function uf(t) {
  lr.ensure();
  const e = Kn(ai | ji, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sr(e, () => {
      Bt(e), r(void 0);
    }) : (Bt(e), r(void 0));
  });
}
function Rr(t) {
  return Kn(Ao, t, !1);
}
function cf(t) {
  return Kn(_s | ji, t, !0);
}
function Ca(t, e = 0) {
  return Kn(ps | e, t, !0);
}
function Oe(t, e = [], n = []) {
  pu(e, n, (r) => {
    Kn(ps, () => t(...r.map(o)), !0);
  });
}
function Mr(t, e = 0) {
  var n = Kn(Tr | e, t, !0);
  return n;
}
function jt(t, e = !0) {
  return Kn(dr | ji, t, !0, e);
}
function wu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = oi, r = Ne;
    nl(!0), un(null);
    try {
      e.call(null);
    } finally {
      nl(n), un(r);
    }
  }
}
function Lu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && zi(() => {
      i.abort(yi);
    });
    var r = n.next;
    n.f & ai ? n.parent = null : Bt(n, e), n = r;
  }
}
function df(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & dr || Bt(e), e = n;
  }
}
function Bt(t, e = !0) {
  var n = !1;
  (e || t.f & Ed) && t.nodes_start !== null && t.nodes_end !== null && (ff(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Lu(t, e && !n), $a(t, 0), Jt(t, si);
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
      /* @__PURE__ */ xa(t)
    );
    t.remove(), t = n;
  }
}
function Ou(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Sr(t, e) {
  var n = [];
  Ro(t, n, !0), Ru(n, () => {
    Bt(t), e && e();
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
  if (!(t.f & Dn)) {
    if (t.f ^= Dn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Lr) !== 0 || (r.f & dr) !== 0;
      Ro(r, e, a ? n : !1), r = i;
    }
  }
}
function Es(t) {
  Mu(t, !0);
}
function Mu(t, e) {
  if (t.f & Dn) {
    t.f ^= Dn, t.f & qt || (Jt(t, gn), ni(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Lr) !== 0 || (n.f & dr) !== 0;
      Mu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Si = !1;
function tl(t) {
  Si = t;
}
let oi = !1;
function nl(t) {
  oi = t;
}
let Ne = null, Mn = !1;
function un(t) {
  Ne = t;
}
let ke = null;
function Xn(t) {
  ke = t;
}
let Qt = null;
function Du(t) {
  Ne !== null && (Qt === null ? Qt = [t] : Qt.push(t));
}
let Kt = null, vn = 0, yn = null;
function hf(t) {
  yn = t;
}
let Pu = 1, ma = 0, Jr = ma;
function rl(t) {
  Jr = t;
}
let yr = !1;
function Hu() {
  return ++Pu;
}
function As(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & wr) {
    var n = t.deps, r = (e & An) !== 0;
    if (n !== null) {
      var i, a, s = (e & Ja) !== 0, c = r && ke !== null && !yr, l = n.length;
      if ((s || c) && (ke === null || !(ke.f & si))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        s && (u.f ^= Ja), c && d !== null && !(d.f & An) && (u.f ^= An);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], As(
          /** @type {Derived} */
          a
        ) && _u(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || ke !== null && !yr) && Jt(t, qt);
  }
  return !1;
}
function Nu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Qt != null && Qt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Nu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Jt(a, gn) : a.f & qt && Jt(a, wr), ni(
        /** @type {Effect} */
        a
      ));
    }
}
function Uu(t) {
  var g;
  var e = Kt, n = vn, r = yn, i = Ne, a = yr, s = Qt, c = rt, l = Mn, u = Jr, d = t.f;
  Kt = /** @type {null | Value[]} */
  null, vn = 0, yn = null, yr = (d & An) !== 0 && (Mn || !Si || Ne === null), Ne = d & (dr | ai) ? null : t, Qt = null, Di(t.ctx), Mn = !1, Jr = ++ma, t.ac !== null && (zi(() => {
    t.ac.abort(yi);
  }), t.ac = null);
  try {
    t.f |= Zs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Kt !== null) {
      var v;
      if ($a(t, vn), m !== null && vn > 0)
        for (m.length = vn + Kt.length, v = 0; v < Kt.length; v++)
          m[vn + v] = Kt[v];
      else
        t.deps = m = Kt;
      if (!yr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = vn; v < m.length; v++)
          ((g = m[v]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && vn < m.length && ($a(t, vn), m.length = vn);
    if (Aa() && yn !== null && !Mn && m !== null && !(t.f & (tn | wr | gn)))
      for (v = 0; v < /** @type {Source[]} */
      yn.length; v++)
        Nu(
          yn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ma++, yn !== null && (r === null ? r = yn : r.push(.../** @type {Source[]} */
    yn))), t.f & Qr && (t.f ^= Qr), f;
  } catch (b) {
    return fu(b);
  } finally {
    t.f ^= Zs, Kt = e, vn = n, yn = r, Ne = i, yr = a, Qt = s, Di(c), Mn = l, Jr = u;
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
  n === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !Kt.includes(e)) && (Jt(e, wr), e.f & (An | Ja) || (e.f ^= Ja), bu(
    /** @type {Derived} **/
    e
  ), $a(
    /** @type {Derived} **/
    e,
    0
  ));
}
function $a(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      vf(t, n[r]);
}
function ga(t) {
  var e = t.f;
  if (!(e & si)) {
    Jt(t, qt);
    var n = ke, r = Si;
    ke = t, Si = !0;
    try {
      e & Tr ? df(t) : Lu(t), wu(t);
      var i = Uu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Pu;
      var a;
      ru && Ud && t.f & gn && t.deps;
    } finally {
      Si = r, ke = n;
    }
  }
}
async function ku() {
  await Promise.resolve(), Gd();
}
function o(t) {
  var e = t.f, n = (e & tn) !== 0;
  if (Ne !== null && !Mn) {
    var r = ke !== null && (ke.f & si) !== 0;
    if (!r && !(Qt != null && Qt.includes(t))) {
      var i = Ne.deps;
      if (Ne.f & Zs)
        t.rv < ma && (t.rv = ma, Kt === null && i !== null && i[vn] === t ? vn++ : Kt === null ? Kt = [t] : (!yr || !Kt.includes(t)) && Kt.push(t));
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
    ), c = s.parent;
    c !== null && !(c.f & An) && (s.f ^= An);
  }
  if (oi) {
    if (Ar.has(t))
      return Ar.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & qt) && s.reactions !== null || Bu(s)) && (l = wo(s)), Ar.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, kt != null && kt.has(s))
      return kt.get(s);
    As(s) && _u(s);
  }
  if (kt != null && kt.has(t))
    return kt.get(t);
  if (t.f & Qr)
    throw t.v;
  return t.v;
}
function Bu(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ar.has(e) || e.f & tn && Bu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pn(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const mf = -7169;
function Jt(t, e) {
  t.f = t.f & mf | e;
}
function Fu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (qn in t)
      no(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && qn in n && no(n);
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
    if (r.capture || ua.call(e, a), !a.cancelBubble)
      return zi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ur(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function gf(t, e, n, r = {}) {
  var i = Mo(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function la(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = Mo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Is(() => {
    e.removeEventListener(t, s, a);
  });
}
function pn(t) {
  for (var e = 0; e < t.length; e++)
    Vu.add(t[e]);
  for (var n of ro)
    n(t);
}
let il = null;
function ua(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  il = t;
  var s = 0, c = il === t && t.__root;
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    Ya(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ne, h = ke;
    un(null), Xn(null);
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
            if (gs(g)) {
              var [b, ...I] = g;
              b.apply(a, [t, ...I]);
            } else
              g.call(a, t);
        } catch (A) {
          f ? m.push(A) : f = A;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let A of m)
          queueMicrotask(() => {
            throw A;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, un(d), Xn(h);
    }
  }
}
function Gu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ui(t, e) {
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
    /* @__PURE__ */ Ni(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Au ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ni(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ui(c, l);
    } else
      Ui(s, s);
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
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ni(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ni(c);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ui(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function cn(t, e) {
  return /* @__PURE__ */ pf(t, e, "svg");
}
function Dt(t = "") {
  {
    var e = Or(t + "");
    return Ui(e, e), e;
  }
}
function ee() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Or();
  return t.append(e, n), Ui(e, n), t;
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
let es = !0;
function al(t) {
  es = t;
}
function it(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function xf(t, e) {
  return Cf(t, e);
}
const vi = /* @__PURE__ */ new Map();
function Cf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  tf();
  var c = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!c.has(m)) {
        c.add(m);
        var v = Sf(m);
        e.addEventListener(m, ua, { passive: v });
        var g = vi.get(m);
        g === void 0 ? (document.addEventListener(m, ua, { passive: v }), vi.set(m, 1)) : vi.set(m, g + 1);
      }
    }
  };
  l(Io(Vu)), ro.add(l);
  var u = void 0, d = uf(() => {
    var h = n ?? e.appendChild(Or());
    return Wd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ce({});
          var m = (
            /** @type {ComponentContext} */
            rt
          );
          m.c = a;
        }
        i && (r.$$events = i), es = s, u = t(f, r) || {}, es = !0, a && Te();
      }
    ), () => {
      var v;
      for (var f of c) {
        e.removeEventListener(f, ua);
        var m = (
          /** @type {number} */
          vi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ua), vi.delete(f)) : vi.set(f, m);
      }
      ro.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Tf.set(u, d), u;
}
let Tf = /* @__PURE__ */ new WeakMap();
function Ee(t, e, ...n) {
  var r = t, i = ve, a;
  Mr(() => {
    i !== (i = e()) && (a && (Bt(a), a = null), a = jt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Lr);
}
function ct(t) {
  rt === null && xo(), qi && rt.l !== null ? wf(rt).m.push(t) : Ae(() => {
    const e = Pn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Cn(t) {
  rt === null && xo(), ct(() => () => Pn(t));
}
function wf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function re(t, e, n = !1) {
  var r = t, i = null, a = null, s = Mt, c = n ? Lr : 0, l = !1;
  const u = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && Es(m), v && Sr(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var g = Lo(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = Or())), s ? i ?? (i = v && jt(() => v(b))) : a ?? (a = v && jt(() => v(b))), g) {
        var I = (
          /** @type {Batch} */
          tt
        ), E = s ? i : a, A = s ? a : i;
        E && I.skipped_effects.delete(E), A && I.skipped_effects.add(A), I.add_callback(h);
      } else
        h();
    }
  };
  Mr(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
let $r = null;
function sl(t) {
  $r = t;
}
function Ii(t, e) {
  return e;
}
function Lf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Ro(e[s].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    nf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kn(t, e[0].prev, e[a - 1].next);
  }
  Ru(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), kn(t, d.prev, d.next)), Bt(d.e, !c);
    }
  });
}
function jn(t, e, n, r, i, a = null) {
  var s = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    s = u.appendChild(Or());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ To(() => {
    var I = n();
    return gs(I) ? I : I == null ? [] : Io(I);
  }), v, g;
  function b() {
    Of(
      g,
      v,
      c,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? Es(d) : d = jt(() => a(s)) : d !== null && Sr(d, () => {
      d = null;
    }));
  }
  Mr(() => {
    g ?? (g = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(m);
    var I = v.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var E, A, _, S;
      if (Lo()) {
        var x = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          tt
        );
        for (A = 0; A < I; A += 1) {
          _ = v[A], S = r(_, A);
          var C = c.items.get(S) ?? f.get(S);
          C ? e & 3 && ju(C, _, A, e) : (E = qu(
            null,
            c,
            null,
            null,
            _,
            S,
            A,
            i,
            e,
            n,
            !0
          ), f.set(S, E)), x.add(S);
        }
        for (const [y, O] of c.items)
          x.has(y) || T.skipped_effects.add(O.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Of(t, e, n, r, i, a, s, c, l) {
  var $, D, L, V;
  var u = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, g, b = null, I, E = [], A = [], _, S, x, T;
  if (u)
    for (T = 0; T < h; T += 1)
      _ = e[T], S = c(_, T), x = f.get(S), x !== void 0 && (($ = x.a) == null || $.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(x));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], S = c(_, T), x = f.get(S), x === void 0) {
      var C = r.get(S);
      if (C !== void 0) {
        r.delete(S), f.set(S, C);
        var y = b ? b.next : v;
        kn(n, b, C), kn(n, C, y), Ms(C, y, i), b = C;
      } else {
        var O = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = qu(
          O,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          S,
          T,
          a,
          s,
          l
        );
      }
      f.set(S, b), E = [], A = [], v = b.next;
      continue;
    }
    if (d && ju(x, _, T, s), x.e.f & Dn && (Es(x.e), u && ((D = x.a) == null || D.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(x))), x !== v) {
      if (g !== void 0 && g.has(x)) {
        if (E.length < A.length) {
          var N = A[0], P;
          b = N.prev;
          var U = E[0], pe = E[E.length - 1];
          for (P = 0; P < E.length; P += 1)
            Ms(E[P], N, i);
          for (P = 0; P < A.length; P += 1)
            g.delete(A[P]);
          kn(n, U.prev, pe.next), kn(n, b, U), kn(n, pe, N), v = N, b = pe, T -= 1, E = [], A = [];
        } else
          g.delete(x), Ms(x, v, i), kn(n, x.prev, x.next), kn(n, x, b === null ? n.first : b.next), kn(n, b, x), b = x;
        continue;
      }
      for (E = [], A = []; v !== null && v.k !== S; )
        v.e.f & Dn || (g ?? (g = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      x = v;
    }
    E.push(x), b = x, v = x.next;
  }
  if (v !== null || g !== void 0) {
    for (var F = g === void 0 ? [] : Io(g); v !== null; )
      v.e.f & Dn || F.push(v), v = v.next;
    var B = F.length;
    if (B > 0) {
      var H = s & 4 && h === 0 ? i : null;
      if (u) {
        for (T = 0; T < B; T += 1)
          (L = F[T].a) == null || L.measure();
        for (T = 0; T < B; T += 1)
          (V = F[T].a) == null || V.fix();
      }
      Lf(n, F, H);
    }
  }
  u && ur(() => {
    var Ie;
    if (I !== void 0)
      for (x of I)
        (Ie = x.a) == null || Ie.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var q of r.values())
    Bt(q.e);
  r.clear();
}
function ju(t, e, n, r) {
  r & 1 && Hi(t.v, e), r & 2 ? Hi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function qu(t, e, n, r, i, a, s, c, l, u, d) {
  var h = $r, f = (l & 1) !== 0, m = (l & 16) === 0, v = f ? m ? /* @__PURE__ */ yu(i, !1, !1) : ri(i) : i, g = l & 2 ? ri(s) : s, b = {
    i: g,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  $r = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Or());
    }
    return b.e = jt(() => c(
      /** @type {Node} */
      t,
      v,
      g,
      u
    ), Nd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    $r = h;
  }
}
function Ms(t, e, n) {
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
      /* @__PURE__ */ xa(a)
    );
    i.before(a), a = s;
  }
}
function kn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function li(t, e, n) {
  var r = t, i, a, s = null, c = null;
  function l() {
    a && (Sr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = c, c = null;
  }
  Mr(() => {
    if (i !== (i = e())) {
      var u = Lo();
      if (i) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = Or()), a && tt.skipped_effects.add(a)), c = jt(() => n(d, i));
      }
      u ? tt.add_callback(l) : l();
    }
  }, Lr);
}
function ol(t, e, n, r, i, a) {
  var s, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d, h = $r;
  Mr(() => {
    const f = e() || null;
    var m = f === "svg" ? gd : null;
    if (f !== s) {
      var v = $r;
      sl(h), d && (f === null ? Sr(d, () => {
        d = null, c = null;
      }) : f === c ? Es(d) : (Bt(d), al(!1))), f && f !== c && (d = jt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Ui(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(Or())
          );
          r(l, g);
        }
        ke.nodes_end = l, u.before(l);
      })), s = f, s && (c = s), al(!0), sl(v);
    }
  }, Lr);
}
function Ue(t, e, n) {
  Rr(() => {
    var r = Pn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ca(() => {
        var s = n();
        Fu(s), i && Co(a, s) && (a = s, r.update(s));
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
  Mr(() => {
    n !== (n = e()) && (r && (Bt(r), r = null), n && (r = jt(() => {
      Rr(() => (
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
          var c = s + a;
          (s === 0 || ll.includes(r[s - 1])) && (c === r.length || ll.includes(r[c])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(c + 1) : s = c;
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
function Ds(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Pf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(Ds)), i && l.push(...Object.keys(i).map(Ds));
      var u = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !c && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var m = Ds(t.substring(u, d).trim());
              if (!l.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(u, h).trim();
                n += " " + v + ";";
              }
            }
            u = h + 1, d = -1;
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
    var c = Df(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function Ps(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ft(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Pf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ps(t, n == null ? void 0 : n[0], r[0]), Ps(t, n == null ? void 0 : n[1], r[1], "important")) : Ps(t, n, r));
  return r;
}
function ts(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!gs(e))
      return Pd();
    for (var r of t.options)
      r.selected = e.includes(ha(r));
    return;
  }
  for (r of t.options) {
    var i = ha(r);
    if (ef(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Xu(t) {
  var e = new MutationObserver(() => {
    ts(t, t.__value);
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
  }), Is(() => {
    e.disconnect();
  });
}
function Hf(t, e, n = e) {
  var r = !0;
  Oo(t, "change", (i) => {
    var a = i ? "[selected]" : ":checked", s;
    if (t.multiple)
      s = [].map.call(t.querySelectorAll(a), ha);
    else {
      var c = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      s = c && ha(c);
    }
    n(s);
  }), Rr(() => {
    var i = e();
    if (ts(t, i, r), r && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = ha(a), n(i));
    }
    t.__value = i, r = !1;
  }), Xu(t);
}
function ha(t) {
  return "__value" in t ? t.__value : t.value;
}
const ta = Symbol("class"), na = Symbol("style"), Ku = Symbol("is custom element"), Zu = Symbol("is html");
function cl(t, e) {
  var n = Po(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Nf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function xr(t, e, n, r) {
  var i = Po(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Ad] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Yu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Uf(t, e, n, r, i = !1, a = !1) {
  var s = Po(t), c = s[Ku], l = !s[Zu], u = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = Wu(n.class) : n[ta] && (n.class = null), n[na] && (n.style ?? (n.style = null));
  var f = Yu(t);
  for (const A in n) {
    let _ = n[A];
    if (d && A === "value" && _ == null) {
      t.value = t.__value = "", u[A] = _;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Do(t, m, _, r, e == null ? void 0 : e[ta], n[ta]), u[A] = _, u[ta] = n[ta];
      continue;
    }
    if (A === "style") {
      Ft(t, _, e == null ? void 0 : e[na], n[na]), u[A] = _, u[na] = n[na];
      continue;
    }
    var v = u[A];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(A)))) {
      u[A] = _;
      var g = A[0] + A[1];
      if (g !== "$$")
        if (g === "on") {
          const S = {}, x = "$$" + A;
          let T = A.slice(2);
          var b = yf(T);
          if (bf(T) && (T = T.slice(0, -7), S.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, u[x], S), u[x] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, pn([T]);
            else {
              let C = function(y) {
                u[A].call(this, y);
              };
              u[x] = Mo(T, t, C, S);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (A === "style")
          xr(t, A, _);
        else if (A === "autofocus")
          rf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!c && (A === "__value" || A === "value" && _ != null))
          t.value = t.__value = _;
        else if (A === "selected" && d)
          Nf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = A;
          l || (I = Ef(I));
          var E = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !c && !E)
            if (s[A] = null, I === "value" || I === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (I === "value") {
                let T = S.defaultValue;
                S.removeAttribute(I), S.defaultValue = T, S.value = S.__value = x ? T : null;
              } else {
                let T = S.defaultChecked;
                S.removeAttribute(I), S.defaultChecked = T, S.checked = x ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else E || f.includes(I) && (c || typeof _ != "string") ? (t[I] = _, I in s && (s[I] = Mt)) : typeof _ != "function" && xr(t, I, _);
        }
    }
  }
  return u;
}
function We(t, e, n = [], r = [], i, a = !1, s = !1) {
  pu(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", h = !1;
    if (Mr(() => {
      var m = e(...c.map(o)), v = Uf(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && ts(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(u))
        m[b] || Bt(u[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === pd && (!l || g !== l[b]) && (u[b] && Bt(u[b]), u[b] = jt(() => Rf(t, () => g))), v[b] = g;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Rr(() => {
        ts(
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
function Po(t) {
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
const kf = () => performance.now(), sr = {
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
  const t = sr.now();
  sr.tasks.forEach((e) => {
    e.c(t) || (sr.tasks.delete(e), e.f());
  }), sr.tasks.size !== 0 && sr.tick(Qu);
}
function Bf(t) {
  let e;
  return sr.tasks.size === 0 && sr.tick(Qu), {
    promise: new Promise((n) => {
      sr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      sr.tasks.delete(e);
    }
  };
}
function Da(t, e) {
  zi(() => {
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
    $r
  ), i, a, s, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = rs(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: u, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = u, h.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = c.position, l.width = c.width, l.height = c.height, l.transform = c.transform;
      }
    }
  }), r.a.element = t;
}
function ns(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, c = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", u, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return zi(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: c,
    in() {
      var A;
      if (e.inert = d, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), Da(e, "introstart"), f = rs(e, v(), m, 1, () => {
        Da(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), u = void 0;
        return;
      }
      e.inert = !0, Da(e, "outrostart"), m = rs(e, v(), f, 0, () => {
        Da(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    ke
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && es) {
    var I = c;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Lr; )
        for (; (E = E.parent) && !(E.f & Tr); )
          ;
      I = !E || (E.f & bs) !== 0;
    }
    I && Rr(() => {
      Pn(() => g.in());
    });
  }
}
function rs(t, e, n, r, i) {
  var a = r === 1;
  if (_i(e)) {
    var s, c = !1;
    return ur(() => {
      if (!c) {
        var b = e({ direction: a ? "in" : "out" });
        s = rs(t, b, n, r, i);
      }
    }), {
      abort: () => {
        c = !0, s == null || s.abort();
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
  const { delay: l = 0, css: u, tick: d, easing: h = Vf } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), u)) {
    var m = fl(u(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var I = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), A = [];
    if (E > 0) {
      var _ = !1;
      if (u)
        for (var S = Math.ceil(E / 16.666666666666668), x = 0; x <= S; x += 1) {
          var T = b + I * h(x / S), C = fl(u(T, 1 - T));
          A.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var y = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + I * h(y / E);
      }, d && Bf(() => {
        if (g.playState !== "running") return !1;
        var y = v();
        return d(y, 1 - y), !0;
      });
    }
    g = t.animate(A, { duration: E, fill: "forwards" }), g.onfinish = () => {
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
function pa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Oo(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Hs(t) ? Ns(a) : a, n(a), tt !== null && r.add(tt), await ku(), a !== (a = e())) {
      var s = t.selectionStart, c = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        s === c && c === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Pn(e) == null && t.value && (n(Hs(t) ? Ns(t.value) : t.value), tt !== null && r.add(tt)), Ca(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ja ?? tt
      );
      if (r.has(a))
        return;
    }
    Hs(t) && i === Ns(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function jf(t, e, n = e) {
  Oo(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Pn(e) == null && n(t.checked), Ca(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Hs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ns(t) {
  return t === "" ? null : +t;
}
function hl(t, e) {
  return t === e || (t == null ? void 0 : t[qn]) === e;
}
function xe(t = {}, e, n, r) {
  return Rr(() => {
    var i, a;
    return Ca(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Pn(() => {
        t !== n(...a) && (e(t, ...a), i && hl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      ur(() => {
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
    const s = /* @__PURE__ */ Sa(() => {
      let c = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], c = !0);
      return c && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && lf(() => {
    vl(e, r), Qa(n.b);
  }), Ae(() => {
    const i = Pn(() => n.m.map(Id));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Ae(() => {
    vl(e, r), Qa(n.a);
  });
}
function vl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Ho(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = Pn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const mi = [];
function zf(t, e) {
  return {
    subscribe: $t(t, e).subscribe
  };
}
function $t(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Co(t, c) && (t = c, n)) {
      const l = !mi.length;
      for (const u of r)
        u[1](), mi.push(u, t);
      if (l) {
        for (let u = 0; u < mi.length; u += 2)
          mi[u][0](mi[u + 1]);
        mi.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function s(c, l = ve) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || ve), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Wi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return zf(n, (s, c) => {
    let l = !1;
    const u = [];
    let d = 0, h = ve;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? u[0] : u, s, c);
      a ? s(v) : h = typeof v == "function" ? v : ve;
    }, m = i.map(
      (v, g) => Ho(
        v,
        (b) => {
          u[g] = b, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      Qa(m), h(), l = !1;
    };
  });
}
function Ju(t) {
  let e;
  return Ho(t, (n) => e = n)(), e;
}
let Pa = !1, io = Symbol();
function zn(t, e, n) {
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
      r.unsubscribe = Ho(t, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return t && io in n ? Ju(t) : o(r.source);
}
function ii(t, e) {
  return t.set(e), e;
}
function fr() {
  const t = {};
  function e() {
    Is(() => {
      for (var n in t)
        t[n].unsubscribe();
      Ya(t, io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Wf(t) {
  var e = Pa;
  try {
    return Pa = !1, [t(), Pa];
  } finally {
    Pa = e;
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
function Je(t, e, n) {
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
      if (_i(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      _i(i) && (i = i());
      const a = Er(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (_i(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Er(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === qn || e === ou) return !1;
    for (let n of t.props)
      if (_i(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (_i(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function st(...t) {
  return new Proxy({ props: t }, Kf);
}
function p(t, e, n, r) {
  var A;
  var i = !qi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = s ? Pn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = qn in t || ou in t;
    d = ((A = Er(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = Wf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && Ld(), d(f)));
  var v;
  if (i ? v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (c = /** @type {V} */
    void 0), _ === void 0 ? c : _;
  }, i && !(n & 4))
    return v;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || g || m) && d(S ? v() : _), _) : v();
      }
    );
  }
  var b = !1, I = (n & 1 ? Sa : To)(() => (b = !1, v()));
  a && o(I);
  var E = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const x = S ? o(I) : i && a ? _e(_) : _;
        return z(I, x), b = !0, c !== void 0 && (c = x), _;
      }
      return oi && b || E.f & si ? I.v : o(I);
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
function ba(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ki(rh(t), t, e) : t;
}
function ih(t, e, n) {
  return t.concat(e).map(function(r) {
    return ba(r, n);
  });
}
function ah(t, e) {
  if (!e.customMerge)
    return ki;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ki;
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
    r[i] = ba(t[i], n);
  }), ml(e).forEach(function(i) {
    oh(t, i) || ($u(t, i) && n.isMergeableObject(e[i]) ? r[i] = ah(i, n)(t[i], e[i], n) : r[i] = ba(e[i], n));
  }), r;
}
function ki(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ih, n.isMergeableObject = n.isMergeableObject || Qf, n.cloneUnlessOtherwiseSpecified = ba;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : lh(t, e, n) : ba(e, n);
}
ki.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return ki(r, i, n);
  }, {});
};
var uh = ki, ch = uh;
const dh = /* @__PURE__ */ Yf(ch);
var ao = function(t, e) {
  return ao = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ao(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ao(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var oe = function() {
  return oe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oe.apply(this, arguments);
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
    function c(d) {
      try {
        u(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function No(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(u) {
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
function Pt(t) {
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
  } catch (c) {
    s = { error: c };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function Wn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function xi(t) {
  return this instanceof xi ? (this.v = t, this) : new xi(t);
}
function hh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function c(m, v) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, I) {
        a.push([m, g, b, I]) > 1 || l(m, g);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      u(r[m](v));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(m) {
    m.value instanceof xi ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
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
  return e ? e.call(t) : (t = typeof Pt == "function" ? Pt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(c, l) {
        s = t[a](s), i(c, l, s.done, s.value);
      });
    };
  }
  function i(a, s, c, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: c });
    }, s);
  }
}
function Us(t, e) {
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
}, ks = {
  variadic: bh
}, je;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(je || (je = {}));
var ft;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ft || (ft = {}));
var Bi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Bi || (Bi = {}));
function gl(t) {
  return t.type === ft.literal;
}
function Eh(t) {
  return t.type === ft.argument;
}
function rc(t) {
  return t.type === ft.number;
}
function ic(t) {
  return t.type === ft.date;
}
function ac(t) {
  return t.type === ft.time;
}
function sc(t) {
  return t.type === ft.select;
}
function oc(t) {
  return t.type === ft.plural;
}
function Ah(t) {
  return t.type === ft.pound;
}
function lc(t) {
  return t.type === ft.tag;
}
function uc(t) {
  return !!(t && typeof t == "object" && t.type === Bi.number);
}
function so(t) {
  return !!(t && typeof t == "object" && t.type === Bi.dateTime);
}
var cc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Sh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function xh(t) {
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
var Ch = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Th(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Ch).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = s[0], l = s.slice(1), u = 0, d = l; u < d.length; u++) {
      var h = d[u];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
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
        e = oe(oe(oe({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return oe(oe({}, l), _l(u));
        }, {}));
        continue;
      case "engineering":
        e = oe(oe(oe({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return oe(oe({}, l), _l(u));
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
        i.options[0].replace(Lh, function(l, u, d, h, f, m) {
          if (u)
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
      i.stem.replace(pl, function(l, u, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = u.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = oe(oe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = oe(oe({}, e), bl(a)));
      continue;
    }
    if (dc.test(i.stem)) {
      e = oe(oe({}, e), bl(i.stem));
      continue;
    }
    var s = hc(i.stem);
    s && (e = oe(oe({}, e), s));
    var c = Oh(i.stem);
    c && (e = oe(oe({}, e), c));
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
      var s = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Dh(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = u + n;
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
var Bs, Ph = new RegExp("^".concat(cc.source, "*")), Hh = new RegExp("".concat(cc.source, "*$"));
function ze(t, e) {
  return { start: t, end: e };
}
var Nh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Uh = !!String.fromCodePoint, kh = !!Object.fromEntries, Bh = !!String.prototype.codePointAt, Fh = !!String.prototype.trimStart, Vh = !!String.prototype.trimEnd, Gh = !!Number.isSafeInteger, jh = Gh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, oo = !0;
try {
  var qh = mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  oo = ((Bs = qh.exec("a")) === null || Bs === void 0 ? void 0 : Bs[0]) === "a";
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
        var a = i[r], s = a[0], c = a[1];
        n[s] = c;
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
    return e.replace(Ph, "");
  }
), Wh = Vh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Hh, "");
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: ft.pound,
              location: ze(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(je.UNMATCHED_CLOSING_TAG, ze(this.clonePosition(), this.clonePosition()));
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
            type: ft.literal,
            value: "<".concat(i, "/>"),
            location: ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !co(this.char()))
            return this.error(je.INVALID_TAG, ze(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(je.UNMATCHED_CLOSING_TAG, ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ft.tag,
              value: i,
              children: s,
              location: ze(r, this.clonePosition())
            },
            err: null
          } : this.error(je.INVALID_TAG, ze(c, this.clonePosition())));
        } else
          return this.error(je.UNCLOSED_TAG, ze(r, this.clonePosition()));
      } else
        return this.error(je.INVALID_TAG, ze(r, this.clonePosition()));
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var l = ze(r, this.clonePosition());
      return {
        val: { type: ft.literal, value: i, location: l },
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
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(je.EMPTY_ARGUMENT, ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(je.MALFORMED_ARGUMENT, ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ft.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(je.MALFORMED_ARGUMENT, ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = uo(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = ze(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(je.EXPECT_ARGUMENT_TYPE, ze(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = Wh(h.val);
            if (f.length === 0)
              return this.error(je.EXPECT_ARGUMENT_STYLE, ze(this.clonePosition(), this.clonePosition()));
            var m = ze(d, this.clonePosition());
            u = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var g = ze(i, this.clonePosition());
          if (u && yl(u == null ? void 0 : u.style, "::", 0)) {
            var b = zh(u.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(b, u.styleLocation);
              return h.err ? h : {
                val: { type: ft.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(je.EXPECT_DATE_TIME_SKELETON, g);
              var I = b;
              this.locale && (I = Mh(b, this.locale));
              var f = {
                type: Bi.dateTime,
                pattern: I,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? xh(I) : {}
              }, E = c === "date" ? ft.date : ft.time;
              return {
                val: { type: E, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ft.number : c === "date" ? ft.date : ft.time,
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
            return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS, ze(A, oe({}, A)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (c !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = h.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, c, n, _);
          if (x.err)
            return x;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = ze(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ft.select,
              value: r,
              options: Il(x.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ft.plural,
              value: r,
              options: Il(x.val),
              offset: S,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(je.INVALID_ARGUMENT_TYPE, ze(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ze(i, this.clonePosition()));
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
          type: Bi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Rh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_SELECTOR, je.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = ze(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? je.DUPLICATE_SELECT_ARGUMENT_SELECTOR : je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ze(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        c.push([
          u,
          {
            value: v.val,
            location: ze(m, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR : je.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(je.MISSING_OTHER_CLAUSE, ze(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, s = s * 10 + (c - 48), this.bump();
        else
          break;
      }
      var l = ze(i, this.clonePosition());
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
  e === void 0 && (e = {}), e = oe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Xh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(je[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || fo(n.val), n.val;
}
var Fi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Fi || (Fi = {}));
var Ss = (
  /** @class */
  function(t) {
    nt(e, t);
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
    nt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Fi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ss)
), Jh = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Fi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ss)
), $h = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Fi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ss)
), Xt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Xt || (Xt = {}));
function ev(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Xt.literal || n.type !== Xt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function tv(t) {
  return typeof t == "function";
}
function Xa(t, e, n, r, i, a, s) {
  if (t.length === 1 && gl(t[0]))
    return [
      {
        type: Xt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (gl(d)) {
      c.push({
        type: Xt.literal,
        value: d.value
      });
      continue;
    }
    if (Ah(d)) {
      typeof a == "number" && c.push({
        type: Xt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new $h(h, s);
    var f = i[h];
    if (Eh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Xt.literal : Xt.object,
        value: f
      });
      continue;
    }
    if (ic(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : so(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (ac(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : so(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (rc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : uc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: Xt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (lc(d)) {
      var v = d.children, g = d.value, b = i[g];
      if (!tv(b))
        throw new Jh(g, "function", s);
      var I = Xa(v, e, n, r, i, a), E = b(I.map(function(S) {
        return S.value;
      }));
      Array.isArray(E) || (E = [E]), c.push.apply(c, E.map(function(S) {
        return {
          type: typeof S == "string" ? Xt.literal : Xt.object,
          value: S
        };
      }));
    }
    if (sc(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Al(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Xa(A.value, e, n, r, i));
      continue;
    }
    if (oc(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new Ss(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Fi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[_] || d.options.other;
      }
      if (!A)
        throw new Al(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Xa(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return ev(c);
}
function nv(t, e) {
  return e ? oe(oe(oe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = oe(oe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function rv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = nv(t[r], e[r]), n;
  }, oe({}, t)) : t;
}
function Fs(t) {
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
    getNumberFormat: Us(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Fs(t.number),
      strategy: ks.variadic
    }),
    getDateTimeFormat: Us(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Fs(t.dateTime),
      strategy: ks.variadic
    }),
    getPluralRules: Us(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Fs(t.pluralRules),
      strategy: ks.variadic
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
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(h, f) {
          return !h.length || f.type !== Xt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Xa(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var c = fh(s, ["formatters"]);
        this.ast = t.__parse(e, oe(oe({}, c), { locale: this.resolvedLocale }));
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
const Ir = {}, sv = (t, e, n) => n && (e in Ir || (Ir[e] = {}), t in Ir[e] || (Ir[e][t] = n), n), bc = (t, e) => {
  if (e == null)
    return;
  if (e in Ir && t in Ir[e])
    return Ir[e][t];
  const n = wa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = lv(i, t);
    if (a)
      return sv(t, e, a);
  }
};
let Uo;
const Ta = $t({});
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
  const e = wa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (_c(r))
      return r;
  }
}
function yc(t, ...e) {
  delete Ir[t], Ta.update((n) => (n[t] = dh.all([n[t] || {}, ...e]), n));
}
Wi(
  [Ta],
  ([t]) => Object.keys(t)
);
Ta.subscribe((t) => Uo = t);
const Ka = {};
function cv(t, e) {
  Ka[t].delete(e), Ka[t].size === 0 && delete Ka[t];
}
function Ic(t) {
  return Ka[t];
}
function dv(t) {
  return wa(t).map((e) => {
    const n = Ic(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function is(t) {
  return t == null ? !1 : wa(t).some(
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
  if (!is(t))
    return t in ra ? ra[t] : Promise.resolve();
  const e = dv(t);
  return ra[t] = Promise.all(
    e.map(
      ([n, r]) => fv(n, r)
    )
  ).then(() => {
    if (is(t))
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
    `[svelte-i18n] The message "${e}" was not found in "${wa(
      t
    ).join('", "')}".${is(Dr()) ? `

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
}, ca = bv;
function Vi() {
  return ca;
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
  )), Object.assign(ca, r, { initialLocale: i }), n && ("number" in n && Object.assign(ca.formats.number, n.number), "date" in n && Object.assign(ca.formats.date, n.date), "time" in n && Object.assign(ca.formats.time, n.time)), ui.set(i);
}
const Vs = $t(!1);
var yv = Object.defineProperty, Iv = Object.defineProperties, Ev = Object.getOwnPropertyDescriptors, xl = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Sv = Object.prototype.propertyIsEnumerable, Cl = (t, e, n) => e in t ? yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, xv = (t, e) => {
  for (var n in e || (e = {}))
    Av.call(e, n) && Cl(t, n, e[n]);
  if (xl)
    for (var n of xl(e))
      Sv.call(e, n) && Cl(t, n, e[n]);
  return t;
}, Cv = (t, e) => Iv(t, Ev(e));
let ho;
const as = $t(null);
function Tl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function wa(t, e = Vi().fallbackLocale) {
  const n = Tl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Tl(e)])] : n;
}
function Dr() {
  return ho ?? void 0;
}
as.subscribe((t) => {
  ho = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Tv = (t) => {
  if (t && uv(t) && is(t)) {
    const { loadingDelay: e } = Vi();
    let n;
    return typeof window < "u" && Dr() != null && e ? n = window.setTimeout(
      () => Vs.set(!0),
      e
    ) : Vs.set(!0), Ec(t).then(() => {
      as.set(t);
    }).finally(() => {
      clearTimeout(n), Vs.set(!1);
    });
  }
  return as.set(t);
}, ui = Cv(xv({}, as), {
  set: Tv
}), wv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], xs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Lv = Object.defineProperty, ss = Object.getOwnPropertySymbols, Ac = Object.prototype.hasOwnProperty, Sc = Object.prototype.propertyIsEnumerable, wl = (t, e, n) => e in t ? Lv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ko = (t, e) => {
  for (var n in e || (e = {}))
    Ac.call(e, n) && wl(t, n, e[n]);
  if (ss)
    for (var n of ss(e))
      Sc.call(e, n) && wl(t, n, e[n]);
  return t;
}, Xi = (t, e) => {
  var n = {};
  for (var r in t)
    Ac.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ss)
    for (var r of ss(t))
      e.indexOf(r) < 0 && Sc.call(t, r) && (n[r] = t[r]);
  return n;
};
const _a = (t, e) => {
  const { formats: n } = Vi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Ov = xs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Xi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = _a("number", r)), new Intl.NumberFormat(n, i);
  }
), Rv = xs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Xi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = _a("date", r) : Object.keys(i).length === 0 && (i = _a("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Mv = xs(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Xi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = _a("time", r) : Object.keys(i).length === 0 && (i = _a("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Dv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Xi(e, [
    "locale"
  ]);
  return Ov(ko({ locale: n }, r));
}, Pv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Xi(e, [
    "locale"
  ]);
  return Rv(ko({ locale: n }, r));
}, Hv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Xi(e, [
    "locale"
  ]);
  return Mv(ko({ locale: n }, r));
}, Nv = xs(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Dr()) => new pc(t, e, Vi().formats, {
    ignoreTag: Vi().ignoreTag
  })
), Uv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: c,
    locale: l = Dr(),
    default: u
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Vi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = Nv(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, kv = (t, e) => Hv(e).format(t), Bv = (t, e) => Pv(e).format(t), Fv = (t, e) => Dv(e).format(t), Vv = (t, e = Dr()) => bc(t, e), Gv = Wi([ui, Ta], () => Uv);
Wi([ui], () => kv);
Wi([ui], () => Bv);
Wi([ui], () => Fv);
Wi([ui, Ta], () => Vv);
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
    console.log("Updating the language to", s.detail.language), ui.set(s.detail.language);
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
function Ge(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Qe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Gi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function mt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Ki {
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
var Na;
function ym(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Na;
  if (typeof Na == "boolean" && !e)
    return Na;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Na = r), r;
}
function Im(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, c, l;
  if (t.type === "touchstart") {
    var u = t;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - s;
  } else {
    var d = t;
    c = d.pageX - a, l = d.pageY - s;
  }
  return { x: c, y: l };
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
var zt = (
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
const xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    if (Cc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Cc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function xm(t) {
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
  estimateScrollWidth: xm,
  matches: Cc
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
var Cm = {
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
], Ua = [], wm = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
        return Cm;
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
          for (var a = Pt(Ol), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
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
          for (var a = Pt(Rl), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
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
        for (var i = Pt(Ol), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
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
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Pt(Rl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
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
            var c = n !== void 0 && Ua.length > 0 && Ua.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ua.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ua = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, c = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, c = a || !s;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var i = oe({}, r);
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
  }(zt)
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
}, nn = /* @__PURE__ */ new Set();
nn.add(Pe.BACKSPACE);
nn.add(Pe.ENTER);
nn.add(Pe.SPACEBAR);
nn.add(Pe.PAGE_UP);
nn.add(Pe.PAGE_DOWN);
nn.add(Pe.END);
nn.add(Pe.HOME);
nn.add(Pe.ARROW_LEFT);
nn.add(Pe.ARROW_UP);
nn.add(Pe.ARROW_RIGHT);
nn.add(Pe.ARROW_DOWN);
nn.add(Pe.DELETE);
nn.add(Pe.ESCAPE);
nn.add(Pe.TAB);
var dn = {
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
}, rn = /* @__PURE__ */ new Map();
rn.set(dn.BACKSPACE, Pe.BACKSPACE);
rn.set(dn.ENTER, Pe.ENTER);
rn.set(dn.SPACEBAR, Pe.SPACEBAR);
rn.set(dn.PAGE_UP, Pe.PAGE_UP);
rn.set(dn.PAGE_DOWN, Pe.PAGE_DOWN);
rn.set(dn.END, Pe.END);
rn.set(dn.HOME, Pe.HOME);
rn.set(dn.ARROW_LEFT, Pe.ARROW_LEFT);
rn.set(dn.ARROW_UP, Pe.ARROW_UP);
rn.set(dn.ARROW_RIGHT, Pe.ARROW_RIGHT);
rn.set(dn.ARROW_DOWN, Pe.ARROW_DOWN);
rn.set(dn.DELETE, Pe.DELETE);
rn.set(dn.ESCAPE, Pe.ESCAPE);
rn.set(dn.TAB, Pe.TAB);
var Pr = /* @__PURE__ */ new Set();
Pr.add(Pe.PAGE_UP);
Pr.add(Pe.PAGE_DOWN);
Pr.add(Pe.END);
Pr.add(Pe.HOME);
Pr.add(Pe.ARROW_LEFT);
Pr.add(Pe.ARROW_UP);
Pr.add(Pe.ARROW_RIGHT);
Pr.add(Pe.ARROW_DOWN);
function xt(t) {
  var e = t.key;
  if (nn.has(e))
    return e;
  var n = rn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Ml } = xc, { matches: Lm } = Cs;
function Zt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, g) => t.style.setProperty(v, g), initPromise: m = Promise.resolve() } = {}) {
  let v, g = new Ki(), b = le("SMUI:addLayoutListener"), I, E = s, A = l, _ = u;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new wm({
      addClass: d,
      browserSupportsCssVars: () => ym(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, C) => g.off(document.documentElement, T, C),
      deregisterInteractionHandler: (T, C) => g.off(l || t, T, C),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, C;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Lm(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, C) => {
        const y = Ml();
        g.on(document.documentElement, T, C, typeof y == "boolean" ? { capture: y } : y);
      },
      registerInteractionHandler: (T, C) => {
        const y = Ml();
        g.on(l || t, T, C, typeof y == "boolean" ? { capture: y } : y);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, g.clear());
    }), v && (A !== l || _ !== u) && (A = l, _ = u, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), b && (I = b(x));
  function x() {
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
        rippleElement: c,
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, y) => t.style.setProperty(C, y), initPromise: Promise.resolve() }, T)), S();
    },
    destroy() {
      v && (v.destroy(), v = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), I && I();
    }
  };
}
function vo(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Zi), s = p(e, "tag", 3, "i"), c = /* @__PURE__ */ Je(e, [
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
  const u = /* @__PURE__ */ fe(() => s() === "svg" || a() === Mm), d = le("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = ee(), v = K(m);
  {
    let g = /* @__PURE__ */ fe(() => Ge({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    li(v, a, (b, I) => {
      xe(
        I(b, st(
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
          () => o(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (E, A) => {
              var _ = ee(), S = K(_);
              Ee(S, () => e.children ?? ve), w(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return w(t, m), Te(f);
}
var Om = /* @__PURE__ */ cn("<svg><!></svg>");
function Zi(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function c() {
    return s;
  }
  var l = { getElement: c }, u = ee(), d = K(u);
  {
    var h = (m) => {
      var v = Om();
      We(v, () => ({ ...i }));
      var g = ge(v);
      Ee(g, () => e.children ?? ve), xe(v, (b) => s = b, () => s), Ue(v, (b, I) => W == null ? void 0 : W(b, I), n), w(m, v);
    }, f = (m) => {
      var v = ee(), g = K(v);
      {
        var b = (E) => {
          var A = ee(), _ = K(A);
          ol(_, r, !1, (S, x) => {
            xe(S, (T) => s = T, () => s), Ue(S, (T, C) => W == null ? void 0 : W(T, C), n), We(S, () => ({ ...i }));
          }), w(E, A);
        }, I = (E) => {
          var A = ee(), _ = K(A);
          ol(_, r, !1, (S, x) => {
            xe(S, (y) => s = y, () => s), Ue(S, (y, O) => W == null ? void 0 : W(y, O), n), We(S, () => ({ ...i }));
            var T = ee(), C = K(T);
            Ee(C, () => e.children ?? ve), w(x, T);
          }), w(E, A);
        };
        re(
          g,
          (E) => {
            o(a) ? E(b) : E(I, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    re(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, u), Te(l);
}
var Rm = /* @__PURE__ */ cn("<svg><!></svg>");
function Mm(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, c = Rm();
  We(c, () => ({ ...r }));
  var l = ge(c);
  return Ee(l, () => e.children ?? ve), xe(c, (u) => i = u, () => i), Ue(c, (u, d) => W == null ? void 0 : W(u, d), n), w(t, c), Te(s);
}
function ka(t, e) {
  Ce(e, !0);
  const [n, r] = fr(), i = $t(e.value);
  ie(e.key, i), Ae(() => {
    ii(i, e.value);
  }), Cn(() => {
    i.set(void 0);
  });
  var a = ee(), s = K(a);
  Ee(s, () => e.children ?? ve), w(t, a), Te(), r();
}
var Dm = /* @__PURE__ */ he('<div class="mdc-button__touch"></div>'), Pm = /* @__PURE__ */ he('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Tc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), s = p(e, "color", 3, "primary"), c = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), u = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Zi), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Je(e, [
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
  ]), g, b = _e({}), I = _e({}), E = le("SMUI:button:context");
  const A = /* @__PURE__ */ fe(() => E === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), _ = /* @__PURE__ */ fe(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ fe(() => E === "banner" ? {} : { secondary: h() });
  let x = e.disabled;
  Ae(() => {
    if (x !== e.disabled) {
      if (g) {
        const F = N();
        "blur" in F && F.blur();
      }
      x = v.disabled;
    }
  }), ie("SMUI:label:context", "button"), ie("SMUI:icon:context", "button");
  function T(F) {
    b[F] || (b[F] = !0);
  }
  function C(F) {
    (!(F in b) || b[F]) && (b[F] = !1);
  }
  function y(F, B) {
    I[F] != B && (B === "" || B == null ? delete I[F] : I[F] = B);
  }
  function O() {
    E === "banner" && Qe(N(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function N() {
    return g.getElement();
  }
  var P = { getElement: N }, U = ee(), pe = K(U);
  {
    let F = /* @__PURE__ */ fe(() => [
      [
        Zt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: C,
          addStyle: y
        }
      ],
      ...n()
    ]), B = /* @__PURE__ */ fe(() => Ge({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && h(),
      "mdc-banner__primary-action": E === "banner" && !h(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), H = /* @__PURE__ */ fe(() => Object.entries(I).map(([q, $]) => `${q}: ${$};`).concat([i()]).join(" "));
    li(pe, f, (q, $) => {
      xe(
        $(q, st(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(F);
            },
            get class() {
              return o(B);
            },
            get style() {
              return o(H);
            }
          },
          () => o(A),
          () => o(_),
          () => o(S),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (D) => {
              var L;
              O(), (L = e.onclick) == null || L.call(e, D);
            },
            children: (D, L) => {
              var V = Pm(), Ie = ye(K(V), 2);
              Ee(Ie, () => e.children ?? ve);
              var be = ye(Ie);
              {
                var ce = (Se) => {
                  var G = Dm();
                  w(Se, G);
                };
                re(be, (Se) => {
                  l() && Se(ce);
                });
              }
              w(D, V);
            },
            $$slots: { default: !0 }
          }
        )),
        (D) => g = D,
        () => g
      );
    });
  }
  return w(t, U), Te(P);
}
function Hm(t, e) {
  Ce(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), s = p(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Tc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return o(c);
      },
      children: (l, u) => {
        var d = ee(), h = K(d);
        Ee(h, () => e.children ?? ve), w(l, d);
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
var Ba = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, $n = {
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ba;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $n;
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
      var n = this.adapter.getAttr($n.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr($n.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ba.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ba.ICON_BUTTON_ON) : this.adapter.removeClass(Ba.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr($n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, "" + n);
    }, e;
  }(zt)
), Um = /* @__PURE__ */ he('<div class="mdc-icon-button__touch"></div>'), km = /* @__PURE__ */ he('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Bm(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), u = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Zi), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Je(e, [
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
  ]), b, I, E = /* @__PURE__ */ me(_e({})), A = _e({}), _ = /* @__PURE__ */ me(_e({})), S = le("SMUI:icon-button:context"), x = le("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ fe(() => {
    if (S === "data-table:pagination")
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
    else return S === "dialog:header" || S === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let C = !!e.disabled;
  Ae(() => {
    if (C != !!e.disabled) {
      if (b) {
        const L = H();
        "blur" in L && L.blur();
      }
      C = !!e.disabled;
    }
  }), ie("SMUI:icon:context", "icon-button");
  let y = null;
  Ae(() => {
    b && H() && l() !== y && (l() && !I ? (I = new Nm({
      addClass: N,
      hasClass: O,
      notifyChange: (L) => {
        B(L), Qe(H(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: P,
      getAttr: pe,
      setAttr: F
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, z(E, {}, !0), z(_, {}, !0)), y = l());
  }), Ae(() => {
    I && !r(u()) && I.isOn() !== u() && I.toggle(u());
  }), Cn(() => {
    I && I.destroy();
  });
  function O(L) {
    return L in o(E) ? o(E)[L] : H().classList.contains(L);
  }
  function N(L) {
    o(E)[L] || (o(E)[L] = !0);
  }
  function P(L) {
    (!(L in o(E)) || o(E)[L]) && (o(E)[L] = !1);
  }
  function U(L, V) {
    A[L] != V && (V === "" || V == null ? delete A[L] : A[L] = V);
  }
  function pe(L) {
    return L in o(_) ? o(_)[L] ?? null : H().getAttribute(L);
  }
  function F(L, V) {
    o(_)[L] !== V && (o(_)[L] = V);
  }
  function B(L) {
    u(L.isOn);
  }
  function H() {
    return b.getElement();
  }
  var q = { getElement: H }, $ = ee(), D = K($);
  {
    let L = /* @__PURE__ */ fe(() => [
      [
        Zt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: N,
          removeClass: P,
          addStyle: U
        }
      ],
      ...i()
    ]), V = /* @__PURE__ */ fe(() => Ge({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": S === "card:action",
      "mdc-card__action--icon": S === "card:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__dismiss": S === "snackbar:actions",
      "mdc-data-table__pagination-button": S === "data-table:pagination",
      "mdc-data-table__sort-icon-button": S === "data-table:sortable-header-cell",
      "mdc-dialog__close": (S === "dialog:header" || S === "dialog:sheet") && e.action === "close",
      ...o(E),
      [a()]: !0
    })), Ie = /* @__PURE__ */ fe(() => Object.entries(A).map(([Se, G]) => `${Se}: ${G};`).concat([s()]).join(" ")), be = /* @__PURE__ */ fe(() => r(u()) ? null : u() ? "true" : "false"), ce = /* @__PURE__ */ fe(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    li(D, m, (Se, G) => {
      xe(
        G(Se, st(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(V);
            },
            get style() {
              return o(Ie);
            },
            get "aria-pressed"() {
              return o(be);
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
              return x;
            },
            get href() {
              return e.href;
            }
          },
          () => o(T),
          () => o(_),
          () => g,
          {
            onclick: (J) => {
              var X;
              I && I.handleClick(), S === "top-app-bar:navigation" && Qe(H(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, J);
            },
            children: (J, X) => {
              var ue = km(), we = ye(K(ue), 2);
              Ee(we, () => e.children ?? ve);
              var Z = ye(we);
              {
                var te = (He) => {
                  var Le = Um();
                  w(He, Le);
                };
                re(Z, (He) => {
                  d() && He(te);
                });
              }
              w(J, ue);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => b = J,
        () => b
      );
    });
  }
  return w(t, $), Te(q);
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
        children: (c, l) => {
          var u = Dt();
          Oe(() => it(u, r())), w(c, u);
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
  }(zt)
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
var Vr = {
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vr;
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
      this.adapter.removeClass(Vr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Vr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Vr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Vr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Vr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Vr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(zt)
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
    nt(e, t);
    function e(n) {
      return t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
  }(zt)
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
var Gs = {
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
}, Pl = {
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
var Hl = ["mousedown", "touchstart"], Nl = ["click", "keydown"], Ym = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
        return Gs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Pl;
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
        for (var s = Pt(Hl), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Pt(Nl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Pt(Hl), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Pt(Nl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
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
          var r = this.adapter.getLabelWidth() * Pl.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(Gs.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Gs.ARIA_DESCRIBEDBY);
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
  }(zt)
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
        for (var i = Pt(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
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
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Pt(kl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
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
  }(zt)
), $m = /* @__PURE__ */ he("<span><!></span>"), eg = /* @__PURE__ */ he("<label><!></label>");
function os(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), s = p(e, "required", 15, !1), c = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ Je(e, [
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
  ]), u, d = /* @__PURE__ */ me(void 0), h = new Ki(), f = _e({}), m = _e({}), v = le("SMUI:generic:input:props") ?? {}, g = a();
  Ae(() => {
    o(d) && g !== a() && (g = a(), o(d).float(a()));
  });
  let b = s();
  Ae(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const I = le("SMUI:floating-label:mount"), E = le("SMUI:floating-label:unmount");
  ct(() => {
    z(
      d,
      new Gm({
        addClass: A,
        removeClass: _,
        getWidth: () => {
          var L, V;
          const q = N(), $ = q.cloneNode(!0);
          (L = q.parentNode) == null || L.appendChild($), $.classList.add("smui-floating-label--remove-transition"), $.classList.add("smui-floating-label--force-size"), $.classList.remove("mdc-floating-label--float-above");
          const D = $.scrollWidth;
          return (V = q.parentNode) == null || V.removeChild($), D;
        },
        registerInteractionHandler: (q, $) => h.on(N(), q, $),
        deregisterInteractionHandler: (q, $) => h.off(N(), q, $)
      }),
      !0
    );
    const H = {
      get element() {
        return N();
      },
      addStyle: S,
      removeStyle: x
    };
    return I && I(H), o(d).init(), () => {
      var q;
      E && E(H), (q = o(d)) == null || q.destroy(), h.clear();
    };
  });
  function A(H) {
    f[H] || (f[H] = !0);
  }
  function _(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function S(H, q) {
    m[H] != q && (q === "" || q == null ? delete m[H] : m[H] = q);
  }
  function x(H) {
    H in m && delete m[H];
  }
  function T(H) {
    var q;
    (q = o(d)) == null || q.shake(H);
  }
  function C(H) {
    a(H);
  }
  function y(H) {
    s(H);
  }
  function O() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function N() {
    return u;
  }
  var P = { shake: T, float: C, setRequired: y, getWidth: O, getElement: N }, U = ee(), pe = K(U);
  {
    var F = (H) => {
      var q = $m();
      We(q, (D, L) => ({ class: D, style: L, ...l }), [
        () => Ge({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
      ]);
      var $ = ge(q);
      Ee($, () => e.children ?? ve), xe(q, (D) => u = D, () => u), Ue(q, (D, L) => W == null ? void 0 : W(D, L), n), w(H, q);
    }, B = (H) => {
      var q = eg();
      We(
        q,
        (D, L) => ({
          class: D,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ge({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var $ = ge(q);
      Ee($, () => e.children ?? ve), xe(q, (D) => u = D, () => u), Ue(q, (D, L) => W == null ? void 0 : W(D, L), n), w(H, q);
    };
    re(pe, (H) => {
      c() ? H(F) : H(B, !1);
    });
  }
  return w(t, U), Te(P);
}
var tg = /* @__PURE__ */ he("<div></div>");
function wc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), s = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ me(void 0), u = new Ki(), d = _e({}), h = _e({});
  ct(() => (z(
    l,
    new jm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, T) => u.on(A(), x, T),
      deregisterEventHandler: (x, T) => u.off(A(), x, T)
    }),
    !0
  ), o(l).init(), () => {
    var x;
    (x = o(l)) == null || x.destroy(), u.clear();
  }));
  function f(x) {
    return x in d ? d[x] : A().classList.contains(x);
  }
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function v(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, T) {
    h[x] != T && (T === "" || T == null ? delete h[x] : h[x] = T);
  }
  function b() {
    var x;
    (x = o(l)) == null || x.activate();
  }
  function I() {
    var x;
    (x = o(l)) == null || x.deactivate();
  }
  function E(x) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(x);
  }
  function A() {
    return c;
  }
  var _ = { activate: b, deactivate: I, setRippleCenter: E, getElement: A }, S = tg();
  return We(S, (x, T) => ({ class: x, style: T, ...s }), [
    () => Ge({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([x, T]) => `${x}: ${T};`).concat([i()]).join(" ")
  ]), xe(S, (x) => c = x, () => c), Ue(S, (x, T) => W == null ? void 0 : W(x, T), n), w(t, S), Te(_);
}
var ng = /* @__PURE__ */ he('<div class="mdc-notched-outline__notch"><!></div>'), rg = /* @__PURE__ */ he('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Lc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), s = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ me(void 0), u = /* @__PURE__ */ me(void 0), d = _e({}), h = _e({}), f;
  Ae(() => {
    o(u) !== f && (o(u) ? (o(u).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(u) && o(u).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(u));
  }), ie("SMUI:floating-label:mount", (C) => {
    z(u, C, !0);
  }), ie("SMUI:floating-label:unmount", () => {
    z(u, void 0);
  }), ct(() => (z(
    l,
    new Wm({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (C) => g("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy();
  }));
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function v(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, y) {
    h[C] != y && (y === "" || y == null ? delete h[C] : h[C] = y);
  }
  function b(C) {
    C in h && delete h[C];
  }
  function I(C) {
    var y;
    (y = o(l)) == null || y.notch(C);
  }
  function E() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function A() {
    return c;
  }
  var _ = { notch: I, closeNotch: E, getElement: A }, S = rg();
  We(S, (C) => ({ class: C, ...s }), [
    () => Ge({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = ye(ge(S), 2);
  {
    var T = (C) => {
      var y = ng(), O = ge(y);
      Ee(O, () => e.children ?? ve), Oe((N) => Ft(y, N), [
        () => Object.entries(h).map(([N, P]) => `${N}: ${P};`).join(" ")
      ]), w(C, y);
    };
    re(x, (C) => {
      a() || C(T);
    });
  }
  return xe(S, (C) => c = C, () => c), Ue(S, (C, y) => W == null ? void 0 : W(C, y), n), w(t, S), Te(_);
}
function Bo(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Zi), a = p(e, "tag", 3, "div"), s = p(e, "_smuiClass", 3, ""), c = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), u = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Je(e, [
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
  Object.entries(c()).forEach(([I, E]) => {
    const A = le(E);
    A && "subscribe" in A && f.push(A.subscribe((_) => {
      c()[I] = _;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && ie(I, l()[I]);
  Cn(() => {
    for (const I of f)
      I();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, g = ee(), b = K(g);
  {
    let I = /* @__PURE__ */ fe(() => Ge({
      [s()]: !0,
      ...c(),
      [r()]: !0
    }));
    li(b, i, (E, A) => {
      xe(
        A(E, st(
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
          u,
          () => d,
          {
            children: (_, S) => {
              var x = ee(), T = K(x);
              Ee(T, () => e.children ?? ve), w(_, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return w(t, g), Te(v);
}
function ig(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, st({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, c) => {
        var l = ee(), u = K(l);
        Ee(u, () => e.children ?? ve), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function ag(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, st(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = ee(), u = K(l);
          Ee(u, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function sg(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Bo(t, st(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = ee(), u = K(l);
          Ee(u, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var og = /* @__PURE__ */ he("<input/>");
function lg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), s = p(e, "value", 15), c = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => s() === null), m = p(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Je(e, [
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
  ]), g, b = _e({}), I = _e({});
  Ae(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), ct(() => {
    d() && h() && u(O().matches(":invalid"));
  });
  function E(F) {
    return F === "" ? Number.NaN : +F;
  }
  function A(F) {
    if (i() === "file") {
      c(F.currentTarget.files);
      return;
    }
    if (F.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (F.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(F.currentTarget.value));
        break;
      default:
        s(F.currentTarget.value);
        break;
    }
  }
  function _(F) {
    (i() === "file" || i() === "range") && A(F), l(!0), d() && u(O().matches(":invalid"));
  }
  function S(F) {
    return F in b ? b[F] ?? null : O().getAttribute(F);
  }
  function x(F, B) {
    b[F] !== B && (b[F] = B);
  }
  function T(F) {
    (!(F in b) || b[F] != null) && (b[F] = void 0);
  }
  function C() {
    O().focus();
  }
  function y() {
    O().blur();
  }
  function O() {
    return g;
  }
  var N = { getAttr: S, addAttr: x, removeAttr: T, focus: C, blur: y, getElement: O }, P = og(), U = (F) => {
    var B;
    i() !== "file" && A(F), (B = e.oninput) == null || B.call(e, F);
  }, pe = (F) => {
    var B;
    _(F), (B = e.onchange) == null || B.call(e, F);
  };
  return We(
    P,
    (F) => ({
      class: F,
      type: i(),
      placeholder: a(),
      ...I,
      ...b,
      ...v,
      oninput: U,
      onchange: pe
    }),
    [
      () => Ge({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(P, (F) => g = F, () => g), Ue(P, (F, B) => W == null ? void 0 : W(F, B), n), w(t, P), Te(N);
}
var ug = /* @__PURE__ */ he("<textarea></textarea>");
function cg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), s = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), u = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ Je(e, [
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
  ]), f, m = _e({});
  ct(() => {
    l() && u() && c(_().matches(":invalid"));
  });
  function v() {
    s(!0), l() && c(_().matches(":invalid"));
  }
  function g(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, y) {
    m[C] !== y && (m[C] = y);
  }
  function I(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
  }
  function E() {
    _().focus();
  }
  function A() {
    _().blur();
  }
  function _() {
    return f;
  }
  var S = { getAttr: g, addAttr: b, removeAttr: I, focus: E, blur: A, getElement: _ }, x = ug(), T = (C) => {
    var y;
    v(), (y = e.onchange) == null || y.call(e, C);
  };
  return We(
    x,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Ge({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(x, (C) => f = C, () => f), Ue(x, (C, y) => W == null ? void 0 : W(C, y), n), Rr(() => pa(x, a)), w(t, x), Te(S);
}
var dg = /* @__PURE__ */ he('<span class="mdc-text-field__ripple"></span>'), fg = /* @__PURE__ */ he("<!> <!>", 1), hg = /* @__PURE__ */ he("<span><!> <!></span>"), vg = /* @__PURE__ */ he("<!> <!> <!>", 1), mg = /* @__PURE__ */ he("<label><!> <!> <!> <!> <!> <!> <!></label>"), gg = /* @__PURE__ */ he("<div><!> <!> <!> <!> <!></div>"), pg = /* @__PURE__ */ he("<!> <!>", 1);
function mo(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = xc;
  let r = () => {
  };
  function i(j) {
    return j === r;
  }
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), u = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), I = p(e, "invalid", 15, r), E = p(e, "updateInvalid", 19, () => i(I())), A = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), S = p(e, "validateOnValueChange", 19, E), x = p(e, "useNativeValidation", 19, E), T = p(e, "withLeadingIcon", 3, r), C = p(e, "withTrailingIcon", 3, r), y = p(e, "input", 7), O = p(e, "floatingLabel", 7), N = p(e, "lineRipple", 7), P = p(e, "notchedOutline", 7), U = /* @__PURE__ */ Je(e, [
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
  let F, B = /* @__PURE__ */ me(void 0), H = new Ki(), q = _e({}), $ = _e({}), D = /* @__PURE__ */ me(void 0), L = /* @__PURE__ */ me(!1), V = /* @__PURE__ */ me(_e(A())), Ie = le("SMUI:addLayoutListener"), be, ce, Se = new Promise((j) => ce = j), G, J, X, ue;
  const we = /* @__PURE__ */ fe(() => y() && y().getElement());
  Ae(() => {
    (_() || o(V) || !E()) && o(B) && o(B).isValid() !== !I() && (E() ? I(!o(B).isValid()) : o(B).setValid(!I()));
  }), Ae(() => {
    o(B) && o(B).getValidateOnValueChange() !== S() && o(B).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Ae(() => {
    o(B) && o(B).setUseNativeValidation(i(x()) ? !0 : x());
  }), Ae(() => {
    o(B) && o(B).setDisabled(u());
  });
  let Z = g();
  Ae(() => {
    if (o(B) && pe && Z !== g()) {
      Z = g();
      const j = `${g() == null ? "" : g()}`;
      o(B).getValue() !== j && o(B).setValue(j);
    }
  }), Ie && (be = Ie(M)), ie("SMUI:textfield:leading-icon:mount", (j) => {
    G = j;
  }), ie("SMUI:textfield:leading-icon:unmount", () => {
    G = void 0;
  }), ie("SMUI:textfield:trailing-icon:mount", (j) => {
    J = j;
  }), ie("SMUI:textfield:trailing-icon:unmount", () => {
    J = void 0;
  }), ie("SMUI:textfield:helper-text:id", (j) => {
    z(D, j, !0);
  }), ie("SMUI:textfield:helper-text:mount", (j) => {
    X = j;
  }), ie("SMUI:textfield:helper-text:unmount", () => {
    z(D, void 0), X = void 0;
  }), ie("SMUI:textfield:character-counter:mount", (j) => {
    ue = j;
  }), ie("SMUI:textfield:character-counter:unmount", () => {
    ue = void 0;
  }), ct(() => {
    var j;
    if (z(
      B,
      new Ym(
        {
          // getRootAdapterMethods_
          addClass: He,
          removeClass: Le,
          hasClass: te,
          registerTextFieldInteractionHandler: (Y, Me) => H.on(k(), Y, Me),
          deregisterTextFieldInteractionHandler: (Y, Me) => H.off(k(), Y, Me),
          registerValidationAttributeChangeHandler: (Y) => {
            const Me = (ht) => ht.map((Ht) => Ht.attributeName).filter((Ht) => Ht), lt = new MutationObserver((ht) => {
              x() && Y(Me(ht));
            }), pt = { attributes: !0 };
            return y() && lt.observe(y().getElement(), pt), lt;
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
            var lt;
            (lt = y()) == null || lt.addAttr(Y, Me);
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
            var pt;
            const lt = (pt = y()) == null ? void 0 : pt.getElement();
            if (lt) {
              const ht = n();
              H.on(lt, Y, Me, typeof ht == "boolean" ? { capture: ht } : ht);
            }
          },
          deregisterInputInteractionHandler: (Y, Me) => {
            var pt;
            const lt = (pt = y()) == null ? void 0 : pt.getElement();
            lt && H.off(lt, Y, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => O() && O().float(Y),
          getLabelWidth: () => O() ? O().getWidth() : 0,
          hasLabel: () => !!O(),
          shakeLabel: (Y) => O() && O().shake(Y),
          setLabelRequired: (Y) => O() && O().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => N() && N().activate(),
          deactivateLineRipple: () => N() && N().deactivate(),
          setLineRippleTransformOrigin: (Y) => N() && N().setRippleCenter(Y),
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
            return ue;
          },
          get leadingIcon() {
            return G;
          },
          get trailingIcon() {
            return J;
          }
        }
      ),
      !0
    ), pe) {
      if (y() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (j = o(B)) == null || j.init();
    } else
      ku().then(() => {
        var Y;
        if (y() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(B)) == null || Y.init();
      });
    return ce(), () => {
      var Y;
      (Y = o(B)) == null || Y.destroy(), H.clear();
    };
  }), Cn(() => {
    be && be();
  });
  function te(j) {
    return j in q ? q[j] ?? null : k().classList.contains(j);
  }
  function He(j) {
    q[j] || (q[j] = !0);
  }
  function Le(j) {
    (!(j in q) || q[j]) && (q[j] = !1);
  }
  function qe(j, Y) {
    $[j] != Y && (Y === "" || Y == null ? delete $[j] : $[j] = Y);
  }
  function $e() {
    var j;
    (j = y()) == null || j.focus();
  }
  function Be() {
    var j;
    (j = y()) == null || j.blur();
  }
  function M() {
    if (o(B)) {
      const j = o(B).shouldFloat;
      o(B).notchOutline(j);
    }
  }
  function k() {
    return F;
  }
  var ae = { focus: $e, blur: Be, layout: M, getElement: k }, Re = pg(), ot = K(Re);
  {
    var _t = (j) => {
      var Y = mg();
      We(Y, (Fe, Xe, Ke) => ({ class: Fe, style: Xe, for: void 0, ...Ke }), [
        () => Ge({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...q,
          [s()]: !0
        }),
        () => Object.entries($).map(([Fe, Xe]) => `${Fe}: ${Xe};`).concat([c()]).join(" "),
        () => Gi(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ge(Y);
      {
        var lt = (Fe) => {
          var Xe = fg(), Ke = K(Xe);
          {
            var Ot = (at) => {
              var St = dg();
              w(at, St);
            };
            re(Ke, (at) => {
              f() === "filled" && at(Ot);
            });
          }
          var fn = ye(Ke, 2);
          {
            var et = (at) => {
              {
                let St = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ze = /* @__PURE__ */ fe(() => mt(U, "label$"));
                xe(
                  os(at, st(
                    {
                      get floatAbove() {
                        return o(St);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ze),
                    {
                      children: (Ct, wn) => {
                        var Tt = ee(), bt = K(Tt);
                        {
                          var Rt = (Nt) => {
                          }, an = (Nt) => {
                            var sn = ee(), Wt = K(sn);
                            {
                              var Nn = (on) => {
                                var Vt = Dt();
                                Oe(() => it(Vt, e.label)), w(on, Vt);
                              }, Nr = (on) => {
                                var Vt = ee(), Un = K(Vt);
                                Ee(Un, () => e.label), w(on, Vt);
                              };
                              re(
                                Wt,
                                (on) => {
                                  typeof e.label == "string" ? on(Nn) : on(Nr, !1);
                                },
                                !0
                              );
                            }
                            w(Nt, sn);
                          };
                          re(bt, (Nt) => {
                            e.label == null ? Nt(Rt) : Nt(an, !1);
                          });
                        }
                        w(Ct, Tt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Ct) => O(Ct),
                  () => O()
                );
              }
            };
            re(fn, (at) => {
              !m() && e.label != null && at(et);
            });
          }
          w(Fe, Xe);
        };
        re(Me, (Fe) => {
          !h() && f() !== "outlined" && Fe(lt);
        });
      }
      var pt = ye(Me, 2);
      {
        var ht = (Fe) => {
          {
            let Xe = /* @__PURE__ */ fe(() => m() || e.label == null), Ke = /* @__PURE__ */ fe(() => mt(U, "outline$"));
            xe(
              Lc(Fe, st(
                {
                  get noLabel() {
                    return o(Xe);
                  }
                },
                () => o(Ke),
                {
                  children: (Ot, fn) => {
                    var et = ee(), at = K(et);
                    {
                      var St = (Ze) => {
                        {
                          let Ct = /* @__PURE__ */ fe(() => o(L) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), wn = /* @__PURE__ */ fe(() => mt(U, "label$"));
                          xe(
                            os(Ze, st(
                              {
                                get floatAbove() {
                                  return o(Ct);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(wn),
                              {
                                children: (Tt, bt) => {
                                  var Rt = ee(), an = K(Rt);
                                  {
                                    var Nt = (Wt) => {
                                    }, sn = (Wt) => {
                                      var Nn = ee(), Nr = K(Nn);
                                      {
                                        var on = (Un) => {
                                          var Ur = Dt();
                                          Oe(() => it(Ur, e.label)), w(Un, Ur);
                                        }, Vt = (Un) => {
                                          var Ur = ee(), ws = K(Ur);
                                          Ee(ws, () => e.label), w(Un, Ur);
                                        };
                                        re(
                                          Nr,
                                          (Un) => {
                                            typeof e.label == "string" ? Un(on) : Un(Vt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(Wt, Nn);
                                    };
                                    re(an, (Wt) => {
                                      e.label == null ? Wt(Nt) : Wt(sn, !1);
                                    });
                                  }
                                  w(Tt, Rt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Tt) => O(Tt),
                            () => O()
                          );
                        }
                      };
                      re(at, (Ze) => {
                        !m() && e.label != null && Ze(St);
                      });
                    }
                    w(Ot, et);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => P(Ot),
              () => P()
            );
          }
        };
        re(pt, (Fe) => {
          (h() || f() === "outlined") && Fe(ht);
        });
      }
      var Ht = ye(pt, 2);
      ka(Ht, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Fe, Xe) => {
          var Ke = ee(), Ot = K(Ke);
          Ee(Ot, () => e.leadingIcon ?? ve), w(Fe, Ke);
        },
        $$slots: { default: !0 }
      });
      var hr = ye(Ht, 2);
      Ee(hr, () => e.children ?? ve);
      var dt = ye(hr, 2);
      {
        var Lt = (Fe) => {
          var Xe = hg(), Ke = ge(Xe);
          {
            let fn = /* @__PURE__ */ fe(() => mt(U, "input$"));
            xe(
              cg(Ke, st(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(V);
                  },
                  get "aria-controls"() {
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => o(fn),
                {
                  onblur: (et) => {
                    var at;
                    z(L, !1), z(V, !0), Qe(k(), "blur", et), (at = e.input$onblur) == null || at.call(e, et);
                  },
                  onfocus: (et) => {
                    var at;
                    z(L, !0), Qe(k(), "focus", et), (at = e.input$onfocus) == null || at.call(e, et);
                  },
                  get value() {
                    return g();
                  },
                  set value(et) {
                    g(et);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(et) {
                    _(et);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(et) {
                    I(et);
                  }
                }
              )),
              (et) => y(et),
              () => y()
            );
          }
          var Ot = ye(Ke, 2);
          Ee(Ot, () => e.internalCounter ?? ve), Oe((fn) => Do(Xe, 1, fn), [
            () => Wu(Ge({
              "mdc-text-field__resizer": !("input$resizable" in U) || e.input$resizable
            }))
          ]), w(Fe, Xe);
        }, yt = (Fe) => {
          var Xe = vg(), Ke = K(Xe);
          {
            var Ot = (St) => {
              var Ze = ee(), Ct = K(Ze);
              {
                var wn = (bt) => {
                  ag(bt, {
                    children: (Rt, an) => {
                      var Nt = Dt();
                      Oe(() => it(Nt, e.prefix)), w(Rt, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tt = (bt) => {
                  var Rt = ee(), an = K(Rt);
                  Ee(an, () => e.prefix ?? ve), w(bt, Rt);
                };
                re(Ct, (bt) => {
                  typeof e.prefix == "string" ? bt(wn) : bt(Tt, !1);
                });
              }
              w(St, Ze);
            };
            re(Ke, (St) => {
              e.prefix != null && St(Ot);
            });
          }
          var fn = ye(Ke, 2);
          {
            let St = /* @__PURE__ */ fe(() => mt(U, "input$"));
            xe(
              lg(fn, st(
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
                    return E();
                  },
                  get initialInvalid() {
                    return o(V);
                  },
                  get "aria-controls"() {
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(St),
                {
                  onblur: (Ze) => {
                    var Ct;
                    z(L, !1), z(V, !0), Qe(k(), "blur", Ze), (Ct = e.input$onblur) == null || Ct.call(e, Ze);
                  },
                  onfocus: (Ze) => {
                    var Ct;
                    z(L, !0), Qe(k(), "focus", Ze), (Ct = e.input$onfocus) == null || Ct.call(e, Ze);
                  },
                  get value() {
                    return g();
                  },
                  set value(Ze) {
                    g(Ze);
                  },
                  get files() {
                    return b();
                  },
                  set files(Ze) {
                    b(Ze);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Ze) {
                    _(Ze);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Ze) {
                    I(Ze);
                  }
                }
              )),
              (Ze) => y(Ze),
              () => y()
            );
          }
          var et = ye(fn, 2);
          {
            var at = (St) => {
              var Ze = ee(), Ct = K(Ze);
              {
                var wn = (bt) => {
                  sg(bt, {
                    children: (Rt, an) => {
                      var Nt = Dt();
                      Oe(() => it(Nt, e.suffix)), w(Rt, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tt = (bt) => {
                  var Rt = ee(), an = K(Rt);
                  Ee(an, () => e.suffix ?? ve), w(bt, Rt);
                };
                re(Ct, (bt) => {
                  typeof e.suffix == "string" ? bt(wn) : bt(Tt, !1);
                });
              }
              w(St, Ze);
            };
            re(et, (St) => {
              e.suffix != null && St(at);
            });
          }
          w(Fe, Xe);
        };
        re(dt, (Fe) => {
          h() && typeof g() == "string" ? Fe(Lt) : Fe(yt, !1);
        });
      }
      var Tn = ye(dt, 2);
      ka(Tn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Fe, Xe) => {
          var Ke = ee(), Ot = K(Ke);
          Ee(Ot, () => e.trailingIcon ?? ve), w(Fe, Ke);
        },
        $$slots: { default: !0 }
      });
      var ci = ye(Tn, 2);
      {
        var Hn = (Fe) => {
          {
            let Xe = /* @__PURE__ */ fe(() => mt(U, "ripple$"));
            xe(wc(Fe, st(() => o(Xe))), (Ke) => N(Ke), () => N());
          }
        };
        re(ci, (Fe) => {
          !h() && f() !== "outlined" && l() && Fe(Hn);
        });
      }
      xe(Y, (Fe) => F = Fe, () => F), Ue(Y, (Fe, Xe) => Zt == null ? void 0 : Zt(Fe, Xe), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: He,
        removeClass: Le,
        addStyle: qe,
        eventTarget: o(we),
        activeTarget: o(we),
        initPromise: Se
      })), Ue(Y, (Fe, Xe) => W == null ? void 0 : W(Fe, Xe), a), w(j, Y);
    }, gt = (j) => {
      var Y = gg();
      We(Y, (dt, Lt, yt) => ({ class: dt, style: Lt, ...yt }), [
        () => Ge({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...q,
          [s()]: !0
        }),
        () => Object.entries($).map(([dt, Lt]) => `${dt}: ${Lt};`).concat([c()]).join(" "),
        () => Gi(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ge(Y);
      {
        var lt = (dt) => {
          var Lt = ee(), yt = K(Lt);
          Ee(yt, () => e.label ?? ve), w(dt, Lt);
        };
        re(Me, (dt) => {
          typeof e.label != "string" && dt(lt);
        });
      }
      var pt = ye(Me, 2);
      ka(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (dt, Lt) => {
          var yt = ee(), Tn = K(yt);
          Ee(Tn, () => e.leadingIcon ?? ve), w(dt, yt);
        },
        $$slots: { default: !0 }
      });
      var ht = ye(pt, 2);
      Ee(ht, () => e.children ?? ve);
      var Ht = ye(ht, 2);
      ka(Ht, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (dt, Lt) => {
          var yt = ee(), Tn = K(yt);
          Ee(Tn, () => e.trailingIcon ?? ve), w(dt, yt);
        },
        $$slots: { default: !0 }
      });
      var hr = ye(Ht, 2);
      Ee(hr, () => e.line ?? ve), xe(Y, (dt) => F = dt, () => F), Ue(Y, (dt, Lt) => Zt == null ? void 0 : Zt(dt, Lt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: He,
        removeClass: Le,
        addStyle: qe
      })), Ue(Y, (dt, Lt) => W == null ? void 0 : W(dt, Lt), a), w(j, Y);
    };
    re(ot, (j) => {
      pe ? j(_t) : j(gt, !1);
    });
  }
  var ne = ye(ot, 2);
  {
    var de = (j) => {
      {
        let Y = /* @__PURE__ */ fe(() => mt(U, "helperLine$"));
        ig(j, st(() => o(Y), {
          children: (Me, lt) => {
            var pt = ee(), ht = K(pt);
            Ee(ht, () => e.helper ?? ve), w(Me, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(ne, (j) => {
      e.helper && j(de);
    });
  }
  return w(t, Re), Te(ae);
}
var bg = /* @__PURE__ */ he("<i><!></i>");
function _g(t, e) {
  Ce(e, !0);
  const n = () => zn(v, "$leadingStore", r), [r, i] = fr();
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), u = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ me(void 0), f = new Ki(), m = _e({});
  const v = le("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ me(void 0);
  const I = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: c() })), E = le("SMUI:textfield:leading-icon:mount"), A = le("SMUI:textfield:leading-icon:unmount"), _ = le("SMUI:textfield:trailing-icon:mount"), S = le("SMUI:textfield:trailing-icon:unmount");
  ct(() => (z(
    h,
    new Jm({
      getAttr: x,
      setAttr: T,
      removeAttr: C,
      setContent: (B) => {
        z(b, B, !0);
      },
      registerInteractionHandler: (B, H) => f.on(y(), B, H),
      deregisterInteractionHandler: (B, H) => f.off(y(), B, H),
      notifyIconAction: () => Qe(y(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var B;
    o(h) && (g ? A && A(o(h)) : S && S(o(h))), (B = o(h)) == null || B.destroy(), f.clear();
  }));
  function x(B) {
    return B in m ? m[B] ?? null : y().getAttribute(B);
  }
  function T(B, H) {
    m[B] !== H && (m[B] = H);
  }
  function C(B) {
    (!(B in m) || m[B] != null) && (m[B] = void 0);
  }
  function y() {
    return d;
  }
  var O = { getElement: y }, N = bg();
  We(
    N,
    (B) => ({
      class: B,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...m,
      ...u
    }),
    [
      () => Ge({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var P = ge(N);
  {
    var U = (B) => {
      var H = ee(), q = K(H);
      Ee(q, () => e.children ?? ve), w(B, H);
    }, pe = (B) => {
      var H = Dt();
      Oe(() => it(H, o(b))), w(B, H);
    };
    re(P, (B) => {
      o(b) == null ? B(U) : B(pe, !1);
    });
  }
  xe(N, (B) => d = B, () => d), Ue(N, (B, H) => W == null ? void 0 : W(B, H), a), w(t, N);
  var F = Te(O);
  return i(), F;
}
function yg(t, e) {
  Ce(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), s = p(e, "variant", 3, "standard"), c = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), u = p(e, "oninput", 3, () => {
  });
  var d = ee(), h = K(d);
  {
    var f = (v) => {
      {
        const g = (I) => {
          _g(I, {
            class: "material-icons",
            children: (E, A) => {
              var _ = Dt();
              Oe(() => it(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ fe(() => `width: 100%; ${c()}`);
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
            return u();
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
          return u();
        },
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    re(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  w(t, d), Te();
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
}, Et;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Et || (Et = {}));
var ei;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ei || (ei = {}));
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
var mr, er, Ve = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
mr = {}, mr["" + Ve.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", mr["" + Ve.LIST_ITEM_CLASS] = "mdc-list-item", mr["" + Ve.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", mr["" + Ve.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", mr["" + Ve.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", mr["" + Ve.ROOT] = "mdc-list";
var gi = (er = {}, er["" + Ve.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", er["" + Ve.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", er["" + Ve.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", er["" + Ve.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", er["" + Ve.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", er["" + Ve.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", er["" + Ve.ROOT] = "mdc-deprecated-list", er), gr = {
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
    .` + Ve.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` a,
    .` + gi[Ve.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + gi[Ve.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ve.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` a,
    .` + Ve.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + gi[Ve.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + gi[Ve.LIST_ITEM_CLASS] + ` a,
    .` + gi[Ve.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + gi[Ve.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, It = {
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
var Ag = ["input", "button", "textarea", "select"], _n = function(t) {
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
function xg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(s) {
    s.sort(function(c, l) {
      return c.index - l.index;
    });
  }), n;
}
function go(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Rc(e);
  }, It.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Cg(i, a, c, e) : l = Tg(i, c, e), l !== -1 && !s && r(l), l;
}
function Cg(t, e, n, r) {
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
  var c = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      c = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      c = l;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function Tg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, c = -1; s !== n.sortedIndexCursor; ) {
    var l = i[s], u = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (u && d) {
      c = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function Oc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Rc(t) {
  t.typeaheadBuffer = "";
}
function Bl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = xt(n) === "ArrowLeft", u = xt(n) === "ArrowUp", d = xt(n) === "ArrowRight", h = xt(n) === "ArrowDown", f = xt(n) === "Home", m = xt(n) === "End", v = xt(n) === "Enter", g = xt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || h || f || m || v)
    return -1;
  var b = !g && n.key.length === 1;
  if (b) {
    _n(n);
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return go(I, e);
  }
  if (!g)
    return -1;
  r && _n(n);
  var E = r && Oc(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = It.UNSET_INDEX, r.focusedItemIndex = It.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Sg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ve;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return It;
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
      if (n !== It.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ve.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = It.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ve.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Ve.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(n, Ve.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, c = xt(n) === "ArrowLeft", l = xt(n) === "ArrowUp", u = xt(n) === "ArrowRight", d = xt(n) === "ArrowDown", h = xt(n) === "Home", f = xt(n) === "End", m = xt(n) === "Enter", v = xt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && u, b = this.isVertical && l || !this.isVertical && c, I = n.key === "A" || n.key === "a", E = Fl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (g && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusFirstElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
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
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (g && E([]))
          _n(n), this.focusNextElement(S);
        else if (b && E([]))
          _n(n), this.focusPrevElement(S);
        else if (g && E(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusNextElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusPrevElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && E([]))
          _n(n), this.focusFirstElement();
        else if (f && E([]))
          _n(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (I && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && m || (_n(n), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var x = n.target;
          if (x && x.tagName === "A" && m || (_n(n), this.isIndexDisabled(S)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : S, S, S), this.adapter.notifyAction(S));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(C) {
              a.focusItemAtIndex(C);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(C) {
              return a.isIndexDisabled(C);
            }
          };
          Bl(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Fl(i);
      n !== It.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, gr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, gr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ve.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ve.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== It.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== It.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === It.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, gr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? gr.ARIA_CURRENT : gr.ARIA_SELECTED;
      if (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== It.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? gr.ARIA_SELECTED : gr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === It.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), c = Cr([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), h = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Wn([], Cr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === It.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== It.UNSET_INDEX ? this.selectedIndex : wg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === It.UNSET_INDEX;
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
      var c = this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? c.push(n) : c = c.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = c;
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
        focusItemAtIndex: function(c) {
          a.focusItemAtIndex(c);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(c) {
          return a.isIndexDisabled(c);
        }
      };
      return go(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return xg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Rc(this.typeaheadState);
    }, e;
  }(zt)
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
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
        return ei;
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
      this.originCorner = this.originCorner ^ Et.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Et.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, Et.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, h = u.surfaceSize, f = (n = {}, n[s] = c, n[a] = l, n);
      d.width / h.width > ia.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Et.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Et.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && u > d + this.openBottomBias && (n = this.setBit(n, Et.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, Et.FLIP_RTL), v = this.hasBit(this.anchorCorner, Et.RIGHT) || this.hasBit(n, Et.RIGHT), g = !1;
      f && m ? g = !v : g = v;
      var b, I;
      g ? (b = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var E = b - s.width > 0, A = I - s.width > 0, _ = this.hasBit(n, Et.FLIP_RTL) && this.hasBit(n, Et.RIGHT);
      return A && _ && f || !E && _ ? n = this.unsetBit(n, Et.RIGHT) : (E && g && f || E && !g && v || !A && b >= I) && (n = this.setBit(n, Et.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Et.BOTTOM), s = this.hasBit(this.anchorCorner, Et.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Et.RIGHT), a = this.hasBit(this.anchorCorner, Et.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Et.BOTTOM), a = this.hasBit(this.anchorCorner, Et.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Pt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (u.width - l.width) / 2;
            continue;
          }
          v += c[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
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
  }(zt)
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
}, pi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dg = {
  FOCUS_ROOT_INDEX: -1
}, Ei;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
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
var Pg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ei.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pi;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, pi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Mc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ei.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ei.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ei.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, pi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ci.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ci.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(zt)
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
var vt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, js = {
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
}, Gr = {
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
var Hg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Gr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return js;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Gr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Gr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(vt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(vt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(vt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(vt.FOCUSED), i = n || r, a = this.adapter.hasClass(vt.REQUIRED);
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
      this.adapter.removeClass(vt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(vt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(vt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(vt.FOCUSED))) {
        var r = xt(n) === Pe.ENTER, i = xt(n) === Pe.SPACEBAR, a = xt(n) === Pe.ARROW_UP, s = xt(n) === Pe.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(vt.FOCUSED);
        if (n) {
          var i = Gr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(vt.INVALID), this.adapter.removeMenuClass(vt.MENU_INVALID)) : (this.adapter.addClass(vt.INVALID), this.adapter.addMenuClass(vt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(vt.REQUIRED) && !this.adapter.hasClass(vt.DISABLED) ? this.getSelectedIndex() !== Gr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(vt.REQUIRED) : this.adapter.removeClass(vt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(vt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(vt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(vt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(vt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(js.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(js.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Gr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(zt)
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
var jr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, tr = {
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
    nt(e, t);
    function e(n) {
      return t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jr;
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
      return this.adapter.getAttr(jr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(jr.ROLE) : this.adapter.setAttr(jr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(jr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(jr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(jr.ARIA_HIDDEN, "true");
    }, e;
  }(zt)
), Ug = /* @__PURE__ */ he("<div><!></div>");
function kg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), s = p(e, "anchor", 3, !0), c = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => _e(a())), u = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), I = p(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ Je(e, [
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
  ]), A, _ = /* @__PURE__ */ me(void 0), S = _e({}), x = _e({}), T = /* @__PURE__ */ me(void 0);
  ie("SMUI:list:role", "menu"), ie("SMUI:list:item:role", "menuitem"), Ae(() => {
    var G, J;
    A && s() && !((G = A.parentElement) != null && G.classList.contains("mdc-menu-surface--anchor")) && ((J = A.parentElement) == null || J.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Ae(() => {
    o(_) && o(_).isOpen() !== l() && (l() ? o(_).open() : o(_).close());
  }), Ae(() => {
    o(_) && o(_).setQuickOpen(h());
  }), Ae(() => {
    o(_) && o(_).setFixedPosition(c());
  }), Ae(() => {
    o(_) && o(_).setMaxHeight(v());
  }), Ae(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const C = ei;
  Ae(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(C[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), Ae(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), Ae(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const y = le("SMUI:menu-surface:mount"), O = le("SMUI:menu-surface:unmount");
  ct(() => {
    z(
      _,
      new Mc({
        addClass: P,
        removeClass: U,
        hasClass: N,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || Qe(V(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || Qe(V(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && Qe(V(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Qe(V(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (J) => V().contains(J),
        isRtl: () => getComputedStyle(V()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (J) => {
          x["transform-origin"] = J;
        },
        isFocused: () => document.activeElement === V(),
        saveFocus: () => {
          z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!A || V().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: V().offsetWidth,
          height: V().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (J) => {
          x.left = "left" in J ? `${J.left}px` : "", x.right = "right" in J ? `${J.right}px` : "", x.top = "top" in J ? `${J.top}px` : "", x.bottom = "bottom" in J ? `${J.bottom}px` : "";
        },
        setMaxHeight: (J) => {
          x["max-height"] = J;
        }
      }),
      !0
    );
    const G = {
      get open() {
        return l();
      },
      set open(J) {
        l(J);
      },
      closeProgrammatic: pe
    };
    return y && y(G), o(_).init(), () => {
      var X, ue;
      O && O(G);
      const J = o(_).isHoistedElement;
      (X = o(_)) == null || X.destroy(), J && ((ue = V().parentNode) == null || ue.removeChild(V()));
    };
  }), Cn(() => {
    var G;
    s() && V() && ((G = V().parentElement) == null || G.classList.remove("mdc-menu-surface--anchor"));
  });
  function N(G) {
    return G in S ? S[G] : V().classList.contains(G);
  }
  function P(G) {
    S[G] || (S[G] = !0);
  }
  function U(G) {
    (!(G in S) || S[G]) && (S[G] = !1);
  }
  function pe(G) {
    var J;
    (J = o(_)) == null || J.close(G), l(!1);
  }
  function F(G) {
    o(_) && l() && !u() && o(_).handleBodyClick(G);
  }
  function B() {
    return l();
  }
  function H(G) {
    l(G);
  }
  function q(G, J) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(G, J);
  }
  function $(G) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(G);
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
  function V() {
    return A;
  }
  var Ie = {
    isOpen: B,
    setOpen: H,
    setAbsolutePosition: q,
    setIsHoisted: $,
    isFixed: D,
    flipCornerHorizontally: L,
    getElement: V
  }, be = Ug();
  la("click", Eu.body, F, !0);
  var ce = (G) => {
    var J;
    o(_) && !u() && o(_).handleKeydown(G), (J = e.onkeydown) == null || J.call(e, G);
  };
  We(
    be,
    (G, J) => ({
      class: G,
      style: J,
      role: "dialog",
      ...E,
      onkeydown: ce
    }),
    [
      () => Ge({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(x).map(([G, J]) => `${G}: ${J};`).concat([i()]).join(" ")
    ]
  );
  var Se = ge(be);
  return Ee(Se, () => e.children ?? ve), xe(be, (G) => A = G, () => A), Ue(be, (G, J) => W == null ? void 0 : W(G, J), n), w(t, be), Te(Ie);
}
function qs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bg(t, e) {
  Ce(e, !0);
  const { closest: n } = Cs;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), s = p(e, "anchorElement", 15), c = p(e, "managed", 3, !1), l = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ me(void 0), h = /* @__PURE__ */ me(void 0), f = /* @__PURE__ */ me(void 0);
  ie("SMUI:menu-surface:mount", (C) => {
    o(h) || z(h, C, !0);
  });
  const m = le("SMUI:list:mount");
  ie("SMUI:list:mount", (C) => {
    o(f) || z(f, C, !0), m && m(C);
  });
  const v = le("SMUI:menu:mount"), g = le("SMUI:menu:unmount");
  ct(() => (z(
    d,
    new Pg({
      addClassToElementAtIndex: (C, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, y);
      },
      removeClassFromElementAtIndex: (C, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, y);
      },
      addAttributeToElementAtIndex: (C, y, O) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, y, O);
      },
      removeAttributeFromElementAtIndex: (C, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, y);
      },
      getAttributeFromElementAtIndex: (C, y) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, y);
      },
      elementContainsClass: (C, y) => C.classList.contains(y),
      closeSurface: (C) => {
        var y;
        c() || ((y = o(h)) == null || y.closeProgrammatic(C), Qe(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((y) => y.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Qe(x(), "SMUIMenuSelected", {
          index: C.index,
          item: o(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(o(f).getOrderedList()[C].element, `.${Ci.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const y = o(f).getOrderedList(), O = n(y[C].element, `.${Ci.MENU_SELECTION_GROUP}`), N = O == null ? void 0 : O.querySelector(`.${Ci.MENU_SELECTED_LIST_ITEM}`);
        return N ? y.map((P) => P.element).indexOf(N) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var C;
    g && o(d) && g(o(d)), (C = o(d)) == null || C.destroy();
  }));
  function b(C) {
    o(d) && o(d).handleKeydown(C);
  }
  function I() {
    return a();
  }
  function E(C) {
    a(C);
  }
  function A(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function S() {
    return u;
  }
  function x() {
    return u.getElement();
  }
  var T = {
    isOpen: I,
    setOpen: E,
    setDefaultFocusState: A,
    getSelectedIndex: _,
    getMenuSurface: S,
    getElement: x
  };
  {
    let C = /* @__PURE__ */ fe(() => Ge({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      kg(t, st(
        {
          get use() {
            return r();
          },
          get class() {
            return o(C);
          },
          get managed() {
            return c();
          }
        },
        () => l,
        {
          onkeydown: (y) => {
            var O;
            b(y), (O = e.onkeydown) == null || O.call(e, y);
          },
          onSMUIMenuSurfaceOpened: (y) => {
            var O;
            o(d) && o(d).handleMenuSurfaceOpened(), (O = e.onSMUIMenuSurfaceOpened) == null || O.call(e, y);
          },
          onSMUIListAction: (y) => {
            var O;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[y.detail.index].element), (O = e.onSMUIListAction) == null || O.call(e, y);
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
          children: (y, O) => {
            var N = ee(), P = K(N);
            Ee(P, () => e.children ?? ve), w(y, N);
          },
          $$slots: { default: !0 }
        }
      )),
      (y) => u = y,
      () => u
    );
  }
  return Te(T);
}
function Fg(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = Cs;
  let i = le("SMUI:list:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), u = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), v = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), I = p(e, "vertical", 3, !0), E = p(e, "wrapFocus", 19, () => le("SMUI:list:wrapFocus") ?? !1), A = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), S = p(e, "selectedIndex", 31, () => -1), x = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), C = p(e, "hasTypeahead", 3, !1), y = p(e, "component", 3, Zi), O = p(e, "tag", 3, i ? "nav" : "ul"), N = /* @__PURE__ */ Je(e, [
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
  ]), P, U = /* @__PURE__ */ me(void 0), pe = [], F = le("SMUI:list:role");
  const B = /* @__PURE__ */ new WeakMap();
  let H = le("SMUI:dialog:selection"), q = le("SMUI:addLayoutListener"), $;
  ie("SMUI:list:nonInteractive", c()), ie("SMUI:separator:context", "list"), F || (A() ? (F = "listbox", ie("SMUI:list:item:role", "option")) : x() ? (F = "radiogroup", ie("SMUI:list:item:role", "radio")) : T() ? (F = "group", ie("SMUI:list:item:role", "checkbox")) : (F = "list", ie("SMUI:list:item:role", void 0))), Ae(() => {
    o(U) && o(U).setVerticalOrientation(I());
  }), Ae(() => {
    o(U) && o(U).setWrapFocus(E());
  }), Ae(() => {
    o(U) && o(U).setHasTypeahead(C());
  }), Ae(() => {
    o(U) && o(U).setSingleSelection(A());
  }), Ae(() => {
    o(U) && o(U).setDisabledItemsFocusable(_());
  }), Ae(() => {
    o(U) && A() && M() !== S() && o(U).setSelectedIndex(S());
  }), q && ($ = q(qe)), ie("SMUI:list:item:mount", (ne) => {
    pe.push(ne), B.set(ne.element, ne), A() && ne.selected && S(Le(ne.element));
  }), ie("SMUI:list:item:unmount", (ne) => {
    const de = (ne && pe.findIndex((j) => j === ne)) ?? -1;
    de !== -1 && (pe.splice(de, 1), B.delete(ne.element));
  });
  const D = le("SMUI:list:mount"), L = le("SMUI:list:unmount");
  ct(() => {
    z(
      U,
      new Og({
        addClassForElementIndex: X,
        focusItemAtIndex: ae,
        getAttributeForElementIndex: (de, j) => {
          var Y;
          return ((Y = G()[de]) == null ? void 0 : Y.getAttr(j)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? G().map((de) => de.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => pe.length,
        getPrimaryTextAtIndex: He,
        hasCheckboxAtIndex: (de) => {
          var j;
          return ((j = G()[de]) == null ? void 0 : j.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (de) => {
          var j;
          return ((j = G()[de]) == null ? void 0 : j.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (de) => {
          const j = G()[de];
          return ((j == null ? void 0 : j.hasCheckbox) && j.checked) ?? !1;
        },
        isFocusInsideList: () => P != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => P != null && document.activeElement === Re(),
        listItemAtIndexHasClass: J,
        notifyAction: (de) => {
          S(de), P != null && Qe(Re(), "SMUIListAction", { index: de });
        },
        notifySelectionChange: (de) => {
          P != null && Qe(Re(), "SMUIListSelectionChange", { changedIndices: de });
        },
        removeClassForElementIndex: ue,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (de, j) => {
          G()[de].checked = j;
        },
        setTabIndexForListItemChildren: (de, j) => {
          const Y = G()[de];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", j);
          });
        }
      }),
      !0
    );
    const ne = {
      get element() {
        return Re();
      },
      get items() {
        return pe;
      },
      get typeaheadInProgress() {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).isTypeaheadInProgress();
      },
      typeaheadMatchItem(de, j) {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).typeaheadMatchItem(
          de,
          j,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: G,
      focusItemAtIndex: ae,
      addClassForElementIndex: X,
      removeClassForElementIndex: ue,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: Z,
      getAttributeFromElementIndex: te,
      getPrimaryTextAtIndex: He
    };
    return D && D(ne), o(U).init(), o(U).layout(), () => {
      var de;
      L && L(ne), (de = o(U)) == null || de.destroy();
    };
  }), Cn(() => {
    $ && $();
  });
  function V(ne) {
    o(U) && ne.target && o(U).handleKeydown(ne, ne.target.classList.contains("mdc-deprecated-list-item"), Le(ne.target));
  }
  function Ie(ne) {
    o(U) && ne.target && o(U).handleFocusIn(Le(ne.target));
  }
  function be(ne) {
    o(U) && ne.target && o(U).handleFocusOut(Le(ne.target));
  }
  function ce(ne) {
    o(U) && ne.target && o(U).handleClick(Le(ne.target), !r(ne.target, 'input[type="checkbox"], input[type="radio"]'), ne);
  }
  function Se(ne) {
    if (x() || T()) {
      const de = Le(ne.target);
      if (de !== -1) {
        const j = G()[de];
        j && (x() && !j.checked || T()) && (r(ne.detail.target, 'input[type="checkbox"], input[type="radio"]') || (j.checked = !j.checked), j.activateRipple(), window.requestAnimationFrame(() => {
          j.deactivateRipple();
        }));
      }
    }
  }
  function G() {
    return P == null ? [] : [...Re().children].map((ne) => B.get(ne)).filter((ne) => ne && ne._smui_list_item_accessor);
  }
  function J(ne, de) {
    const j = G()[ne];
    return (j && j.hasClass(de)) ?? !1;
  }
  function X(ne, de) {
    const j = G()[ne];
    j && j.addClass(de);
  }
  function ue(ne, de) {
    const j = G()[ne];
    j && j.removeClass(de);
  }
  function we(ne, de, j) {
    const Y = G()[ne];
    Y && Y.addAttr(de, j);
  }
  function Z(ne, de) {
    const j = G()[ne];
    j && j.removeAttr(de);
  }
  function te(ne, de) {
    const j = G()[ne];
    return j ? j.getAttr(de) : null;
  }
  function He(ne) {
    const de = G()[ne];
    return (de && de.getPrimaryText()) ?? "";
  }
  function Le(ne) {
    const de = n(ne, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return de && r(de, ".mdc-deprecated-list-item") ? G().map((j) => j == null ? void 0 : j.element).indexOf(de) : -1;
  }
  function qe() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).layout();
  }
  function $e(ne, de) {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).setEnabled(ne, de);
  }
  function Be() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).isTypeaheadInProgress();
  }
  function M() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getSelectedIndex();
  }
  function k() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getFocusedItemIndex();
  }
  function ae(ne) {
    const de = G()[ne];
    de && "focus" in de.element && de.element.focus();
  }
  function Re() {
    return P.getElement();
  }
  var ot = {
    layout: qe,
    setEnabled: $e,
    getTypeaheadInProgress: Be,
    getSelectedIndex: M,
    getFocusedItemIndex: k,
    focusItemAtIndex: ae,
    getElement: Re
  }, _t = ee(), gt = K(_t);
  {
    let ne = /* @__PURE__ */ fe(() => Ge({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [s()]: !0
    }));
    li(gt, y, (de, j) => {
      xe(
        j(de, st(
          {
            get tag() {
              return O();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ne);
            },
            get role() {
              return F;
            }
          },
          () => N,
          {
            onkeydown: (Y) => {
              var Me;
              V(Y), (Me = e.onkeydown) == null || Me.call(e, Y);
            },
            onfocusin: (Y) => {
              var Me;
              Ie(Y), (Me = e.onfocusin) == null || Me.call(e, Y);
            },
            onfocusout: (Y) => {
              var Me;
              be(Y), (Me = e.onfocusout) == null || Me.call(e, Y);
            },
            onclick: (Y) => {
              var Me;
              ce(Y), (Me = e.onclick) == null || Me.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Me;
              Se(Y), (Me = e.onSMUIAction) == null || Me.call(e, Y);
            },
            children: (Y, Me) => {
              var lt = ee(), pt = K(lt);
              Ee(pt, () => e.children ?? ve), w(Y, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => P = Y,
        () => P
      );
    });
  }
  return w(t, _t), Te(ot);
}
let Vg = 0;
var Gg = /* @__PURE__ */ he('<span class="mdc-deprecated-list-item__ripple"></span>'), jg = /* @__PURE__ */ he("<!><!>", 1);
function qg(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = le("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => le("SMUI:list:nonInteractive") ?? !1), u = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : le("SMUI:list:item:role")), m = p(e, "selected", 15, !1), v = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), I = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Vg++), E = p(e, "component", 3, Zi), A = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Je(e, [
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
  ie("SMUI:list:nonInteractive", void 0), ie("SMUI:list:item:role", void 0);
  let S, x = _e({}), T = _e({}), C = _e({}), y = /* @__PURE__ */ me(void 0), O = /* @__PURE__ */ me(void 0);
  const N = /* @__PURE__ */ fe(() => r(b()) ? !l() && !v() && (m() || o(y) && o(y).checked) ? 0 : -1 : b());
  ie("SMUI:generic:input:props", { id: I() }), ie("SMUI:separator:context", void 0), ie("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && z(y, X, !0);
  }), ie("SMUI:generic:input:unmount", () => {
    z(y, void 0);
  });
  const P = le("SMUI:list:item:mount"), U = le("SMUI:list:item:unmount");
  ct(() => {
    if (!m() && !l()) {
      let ue = !0, we = S.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          ue = !1;
          break;
        }
      ue && z(O, window.requestAnimationFrame(() => L(we)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return ce();
      },
      get selected() {
        return m();
      },
      set selected(ue) {
        m(ue);
      },
      hasClass: pe,
      addClass: F,
      removeClass: B,
      getAttr: q,
      addAttr: $,
      removeAttr: D,
      getPrimaryText: be,
      // For inputs within item.
      get checked() {
        return (o(y) && o(y).checked) ?? !1;
      },
      set checked(ue) {
        o(y) && (o(y).checked = !!ue);
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
      action: Ie,
      get tabindex() {
        return o(N);
      },
      set tabindex(ue) {
        b(ue);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(ue) {
        h(ue);
      }
    };
    return P && P(X), () => {
      U && U(X);
    };
  }), Cn(() => {
    o(O) && window.cancelAnimationFrame(o(O));
  });
  function pe(X) {
    return X in x ? x[X] : ce().classList.contains(X);
  }
  function F(X) {
    x[X] || (x[X] = !0);
  }
  function B(X) {
    (!(X in x) || x[X]) && (x[X] = !1);
  }
  function H(X, ue) {
    T[X] != ue && (ue === "" || ue == null ? delete T[X] : T[X] = ue);
  }
  function q(X) {
    return X in C ? C[X] ?? null : ce().getAttribute(X);
  }
  function $(X, ue) {
    C[X] !== ue && (C[X] = ue);
  }
  function D(X) {
    (!(X in C) || C[X] != null) && (C[X] = void 0);
  }
  function L(X) {
    let ue = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const we = X.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          ue = !1;
          break;
        }
      }
    ue && b(0);
  }
  function V(X) {
    const ue = X.key === "Enter", we = X.key === "Space";
    (ue || we) && Ie(X);
  }
  function Ie(X) {
    v() || Qe(ce(), "SMUIAction", X);
  }
  function be() {
    const X = ce(), ue = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ue)
      return ue.textContent ?? "";
    const we = X.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : X.textContent ?? "";
  }
  function ce() {
    return S.getElement();
  }
  var Se = { action: Ie, getPrimaryText: be, getElement: ce }, G = ee(), J = K(G);
  {
    let X = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Zt,
          {
            ripple: !o(y),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: F,
            removeClass: B,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), ue = /* @__PURE__ */ fe(() => Ge({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...x,
      [s()]: !0
    })), we = /* @__PURE__ */ fe(() => Object.entries(T).map(([te, He]) => `${te}: ${He};`).concat([c()]).join(" ")), Z = /* @__PURE__ */ fe(() => g() || void 0);
    li(J, E, (te, He) => {
      xe(
        He(te, st(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(X);
            },
            get class() {
              return o(ue);
            },
            get style() {
              return o(we);
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
              return o(Z);
            },
            get tabindex() {
              return o(N);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (Le) => {
              var qe;
              Ie(Le), (qe = e.onclick) == null || qe.call(e, Le);
            },
            onkeydown: (Le) => {
              var qe;
              V(Le), (qe = e.onkeydown) == null || qe.call(e, Le);
            },
            children: (Le, qe) => {
              var $e = jg(), Be = K($e);
              {
                var M = (ae) => {
                  var Re = Gg();
                  w(ae, Re);
                };
                re(Be, (ae) => {
                  u() && ae(M);
                });
              }
              var k = ye(Be);
              Ee(k, () => e.children ?? ve), w(Le, $e);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => S = Le,
        () => S
      );
    });
  }
  return w(t, G), Te(Se);
}
let zg = 0;
var Wg = /* @__PURE__ */ he("<div><!></div>");
function Xg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + zg++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ me(void 0), d = _e({}), h = _e({}), f = /* @__PURE__ */ me(void 0);
  const m = le("SMUI:select:helper-text:id"), v = le("SMUI:select:helper-text:mount"), g = le("SMUI:select:helper-text:unmount");
  ct(() => (z(
    u,
    new Ng({
      addClass: I,
      removeClass: E,
      hasClass: b,
      getAttr: A,
      setAttr: _,
      removeAttr: S,
      setContent: (P) => {
        z(f, P, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(u)), o(u).init(), () => {
    var P;
    g && o(u) && g(o(u)), (P = o(u)) == null || P.destroy();
  }));
  function b(P) {
    return P in d ? d[P] : x().classList.contains(P);
  }
  function I(P) {
    d[P] || (d[P] = !0);
  }
  function E(P) {
    (!(P in d) || d[P]) && (d[P] = !1);
  }
  function A(P) {
    return P in h ? h[P] ?? null : x().getAttribute(P);
  }
  function _(P, U) {
    h[P] !== U && (h[P] = U);
  }
  function S(P) {
    (!(P in h) || h[P] != null) && (h[P] = void 0);
  }
  function x() {
    return l;
  }
  var T = { getElement: x }, C = Wg();
  We(
    C,
    (P) => ({
      class: P,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => Ge({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var y = ge(C);
  {
    var O = (P) => {
      var U = ee(), pe = K(U);
      Ee(pe, () => e.children ?? ve), w(P, U);
    }, N = (P) => {
      var U = Dt();
      Oe(() => it(U, o(f))), w(P, U);
    };
    re(y, (P) => {
      o(f) == null ? P(O) : P(N, !1);
    });
  }
  return xe(C, (P) => l = P, () => l), Ue(C, (P, U) => W == null ? void 0 : W(P, U), n), w(t, C), Te(T);
}
let Kg = 0;
var Zg = /* @__PURE__ */ he("<input/>"), Yg = /* @__PURE__ */ he('<span class="mdc-select__ripple"></span>'), Qg = /* @__PURE__ */ he('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Jg(t, e) {
  Ce(e, !0);
  const n = () => zn(Re, "$selectedTextStore", r), [r, i] = fr();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (R) => R), I = p(e, "dirty", 15, !1), E = p(e, "invalid", 15, a), A = p(e, "updateInvalid", 19, () => s(E())), _ = p(e, "required", 3, !1), S = p(e, "inputId", 19, () => "SMUI-select-" + Kg++), x = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), C = p(e, "anchor$use", 19, () => []), y = p(e, "anchor$class", 3, ""), O = p(e, "selectedTextContainer$use", 19, () => []), N = p(e, "selectedTextContainer$class", 3, ""), P = p(e, "selectedText$use", 19, () => []), U = p(e, "selectedText$class", 3, ""), pe = p(e, "dropdownIcon$use", 19, () => []), F = p(e, "dropdownIcon$class", 3, ""), B = p(e, "menu$class", 3, ""), H = /* @__PURE__ */ Je(e, [
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
  const q = s(E());
  s(E()) && E(!1);
  let $, D = /* @__PURE__ */ me(void 0), L = _e({}), V = _e({}), Ie, be = _e({}), ce = /* @__PURE__ */ me(-1);
  const Se = /* @__PURE__ */ fe(() => H.menu$id ?? S() + "-menu");
  let G = /* @__PURE__ */ me(void 0), J = le("SMUI:addLayoutListener"), X, ue = /* @__PURE__ */ me(!1), we = _e({}), Z = /* @__PURE__ */ me(void 0), te = /* @__PURE__ */ me(void 0), He = /* @__PURE__ */ me(!1), Le, qe = le("SMUI:select:context"), $e, Be, M, k, ae;
  ie("SMUI:list:role", ""), ie("SMUI:list:nav", !1);
  const Re = $t("");
  ie("SMUI:select:selectedText", Re);
  const ot = $t(g());
  Ae(() => {
    ii(ot, g());
  }), ie("SMUI:select:value", ot), Ae(() => {
    o(D) && o(D).getValue() !== b()(g()) && o(D).setValue(b()(g()));
  });
  let _t = o(ce);
  Ae(() => {
    if (_t !== o(ce))
      if (_t = o(ce), o(D))
        o(D).setSelectedIndex(
          o(ce),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = Ht();
        g() !== R[o(ce)] && g(R[o(ce)]);
      }
  }), Ae(() => {
    o(D) && o(D).getDisabled() !== h() && o(D).setDisabled(h());
  }), Ae(() => {
    o(D) && I() && o(D).isValid() !== !E() && (A() ? E(!o(D).isValid()) : o(D).setValid(!E()));
  }), Ae(() => {
    o(D) && o(D).getRequired() !== _() && o(D).setRequired(_());
  }), J && (X = J(ci)), ie("SMUI:select:leading-icon:mount", (R) => {
    $e = R;
  }), ie("SMUI:select:leading-icon:unmount", () => {
    $e = void 0;
  }), ie("SMUI:list:mount", (R) => {
    Le = R;
  }), ie("SMUI:select:helper-text:id", (R) => {
    z(G, R, !0);
  }), ie("SMUI:select:helper-text:mount", (R) => {
    Be = R;
  }), ie("SMUI:select:helper-text:unmount", () => {
    z(G, void 0), Be = void 0;
  }), ct(() => (z(
    D,
    new Hg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          ii(Re, R);
        },
        isSelectAnchorFocused: () => document.activeElement === Ie,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: ht,
        addMenuClass: Y,
        removeMenuClass: Me,
        openMenu: () => {
          z(ue, !0);
        },
        closeMenu: () => {
          z(ue, !1);
        },
        getAnchorElement: () => Ie,
        setMenuAnchorElement: (R) => {
          z(Z, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          z(te, R, !0);
        },
        setMenuWrapFocus: (R) => {
          z(He, R, !0);
        },
        getSelectedIndex: () => o(ce),
        setSelectedIndex: (R) => {
          _t = R, z(ce, R, !0), g(Ht()[o(ce)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Ht().map(b()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, se) => Le.typeaheadMatchItem(R, se),
        // getCommonAdapterMethods
        addClass: ne,
        removeClass: de,
        hasClass: gt,
        setRippleCenter: (R) => k && k.setRippleCenter(R),
        activateBottomLine: () => k && k.activate(),
        deactivateBottomLine: () => k && k.deactivate(),
        notifyChange: (R) => {
          var se;
          I(!0), A() && E(!((se = o(D)) != null && se.isValid())), Qe(Hn(), "SMUISelectChange", { value: g(), index: o(ce) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ae,
        notchOutline: (R) => ae && ae.notch(R),
        closeOutline: () => ae && ae.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (R) => M && M.float(R),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (R) => M && M.setRequired(R)
      },
      {
        get helperText() {
          return Be;
        },
        get leadingIcon() {
          return $e;
        }
      }
    ),
    !0
  ), z(ce, Ht().indexOf(g()), !0), o(D).init(), yt(q), () => {
    var R;
    (R = o(D)) == null || R.destroy();
  })), Cn(() => {
    X && X();
  });
  function gt(R) {
    return R in L ? L[R] : Hn().classList.contains(R);
  }
  function ne(R) {
    L[R] || (L[R] = !0);
  }
  function de(R) {
    (!(R in L) || L[R]) && (L[R] = !1);
  }
  function j(R, se) {
    V[R] != se && (se === "" || se == null ? delete V[R] : V[R] = se);
  }
  function Y(R) {
    we[R] || (we[R] = !0);
  }
  function Me(R) {
    (!(R in we) || we[R]) && (we[R] = !1);
  }
  function lt(R) {
    return R in be ? be[R] ?? null : Hn().getAttribute(R);
  }
  function pt(R, se) {
    be[R] !== se && (be[R] = se);
  }
  function ht(R) {
    (!(R in be) || be[R] != null) && (be[R] = void 0);
  }
  function Ht() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function hr(R) {
    const se = R.currentTarget.getBoundingClientRect();
    return (dt(R) ? R.touches[0].clientX : R.clientX) - se.left;
  }
  function dt(R) {
    return "touches" in R;
  }
  function Lt() {
    if (o(D) == null)
      throw new Error("Instance is undefined.");
    return o(D).getUseDefaultValidation();
  }
  function yt(R) {
    var se;
    (se = o(D)) == null || se.setUseDefaultValidation(R);
  }
  function Tn() {
    Ie.focus();
  }
  function ci() {
    var R;
    (R = o(D)) == null || R.layout();
  }
  function Hn() {
    return $;
  }
  var Fe = {
    getUseDefaultValidation: Lt,
    setUseDefaultValidation: yt,
    focus: Tn,
    layout: ci,
    getElement: Hn
  }, Xe = Qg(), Ke = K(Xe);
  We(Ke, (R, se, ut) => ({ class: R, style: se, ...ut }), [
    () => Ge({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(ue),
      "mdc-data-table__pagination-rows-per-page-select": qe === "data-table:pagination",
      ...L,
      [l()]: !0
    }),
    () => Object.entries(V).map(([R, se]) => `${R}: ${se};`).concat([u()]).join(" "),
    () => Gi(H, [
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
  var Ot = ge(Ke);
  {
    var fn = (R) => {
      var se = Zg();
      We(
        se,
        (ut) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: g(),
          ...ut
        }),
        [() => mt(H, "input$")],
        void 0,
        void 0,
        !0
      ), w(R, se);
    };
    re(Ot, (R) => {
      x() && R(fn);
    });
  }
  var et = ye(Ot, 2), at = (R) => {
    var se;
    Ie.focus(), o(D) && o(D).handleClick(hr(R)), (se = e.anchor$onclick) == null || se.call(e, R);
  }, St = (R) => {
    var se;
    o(D) && o(D).handleKeydown(R), (se = e.onkeydown) == null || se.call(e, R);
  }, Ze = (R) => {
    var se;
    o(D) && o(D).handleBlur(), Qe(Hn(), "blur", R), (se = e.anchor$onblur) == null || se.call(e, R);
  }, Ct = (R) => {
    var se;
    o(D) && o(D).handleFocus(), Qe(Hn(), "focus", R), (se = e.anchor$onfocus) == null || se.call(e, R);
  };
  We(
    et,
    (R, se) => ({
      class: R,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Se),
      "aria-expanded": o(ue) ? "true" : "false",
      "aria-describedby": o(G),
      role: "combobox",
      tabindex: "0",
      ...be,
      ...se,
      onclick: at,
      onkeydown: St,
      onblur: Ze,
      onfocus: Ct
    }),
    [
      () => Ge({ "mdc-select__anchor": !0, [y()]: !0 }),
      () => mt(H, "anchor$")
    ]
  );
  var wn = ge(et);
  {
    var Tt = (R) => {
      var se = Yg();
      w(R, se);
    };
    re(wn, (R) => {
      f() === "filled" && R(Tt);
    });
  }
  var bt = ye(wn, 2);
  {
    var Rt = (R) => {
      {
        let se = /* @__PURE__ */ fe(() => S() + "-smui-label"), ut = /* @__PURE__ */ fe(() => n() !== ""), wt = /* @__PURE__ */ fe(() => mt(H, "label$"));
        xe(
          os(R, st(
            {
              get id() {
                return o(se);
              },
              get floatAbove() {
                return o(ut);
              },
              get required() {
                return _();
              }
            },
            () => o(wt),
            {
              children: (Qn, Jn) => {
                var Qi = ee(), di = K(Qi);
                {
                  var kr = (Br) => {
                  }, Ls = (Br) => {
                    var Oa = ee(), Ji = K(Oa);
                    {
                      var Wo = (vr) => {
                        var Fr = Dt();
                        Oe(() => it(Fr, v())), w(vr, Fr);
                      }, Ra = (vr) => {
                        var Fr = ee(), Os = K(Fr);
                        Ee(Os, v), w(vr, Fr);
                      };
                      re(
                        Ji,
                        (vr) => {
                          typeof v() == "string" ? vr(Wo) : vr(Ra, !1);
                        },
                        !0
                      );
                    }
                    w(Br, Oa);
                  };
                  re(di, (Br) => {
                    v() == null ? Br(kr) : Br(Ls, !1);
                  });
                }
                w(Qn, Qi);
              },
              $$slots: { default: !0 }
            }
          )),
          (Qn) => M = Qn,
          () => M
        );
      }
    };
    re(bt, (R) => {
      f() !== "outlined" && !m() && v() != null && R(Rt);
    });
  }
  var an = ye(bt, 2);
  {
    var Nt = (R) => {
      {
        let se = /* @__PURE__ */ fe(() => m() || v() == null), ut = /* @__PURE__ */ fe(() => mt(H, "outline$"));
        xe(
          Lc(R, st(
            {
              get noLabel() {
                return o(se);
              }
            },
            () => o(ut),
            {
              children: (wt, Qn) => {
                var Jn = ee(), Qi = K(Jn);
                {
                  var di = (kr) => {
                    {
                      let Ls = /* @__PURE__ */ fe(() => S() + "-smui-label"), Br = /* @__PURE__ */ fe(() => n() !== ""), Oa = /* @__PURE__ */ fe(() => mt(H, "label$"));
                      xe(
                        os(kr, st(
                          {
                            get id() {
                              return o(Ls);
                            },
                            get floatAbove() {
                              return o(Br);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Oa),
                          {
                            children: (Ji, Wo) => {
                              var Ra = ee(), vr = K(Ra);
                              {
                                var Fr = ($i) => {
                                }, Os = ($i) => {
                                  var Xo = ee(), ud = K(Xo);
                                  {
                                    var cd = (fi) => {
                                      var ea = Dt();
                                      Oe(() => it(ea, v())), w(fi, ea);
                                    }, dd = (fi) => {
                                      var ea = ee(), fd = K(ea);
                                      Ee(fd, v), w(fi, ea);
                                    };
                                    re(
                                      ud,
                                      (fi) => {
                                        typeof v() == "string" ? fi(cd) : fi(dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w($i, Xo);
                                };
                                re(vr, ($i) => {
                                  v() == null ? $i(Fr) : $i(Os, !1);
                                });
                              }
                              w(Ji, Ra);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Ji) => M = Ji,
                        () => M
                      );
                    }
                  };
                  re(Qi, (kr) => {
                    !m() && v() != null && kr(di);
                  });
                }
                w(wt, Jn);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => ae = wt,
          () => ae
        );
      }
    };
    re(an, (R) => {
      f() === "outlined" && R(Nt);
    });
  }
  var sn = ye(an, 2);
  Ee(sn, () => e.leadingIcon ?? ve);
  var Wt = ye(sn, 2);
  We(Wt, (R, se) => ({ class: R, ...se }), [
    () => Ge({
      "mdc-select__selected-text-container": !0,
      [N()]: !0
    }),
    () => mt(H, "selectedTextContainer$")
  ]);
  var Nn = ge(Wt);
  We(
    Nn,
    (R, se) => ({
      id: S() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...se
    }),
    [
      () => Ge({
        "mdc-select__selected-text": !0,
        [U()]: !0
      }),
      () => mt(H, "selectedText$")
    ]
  );
  var Nr = ge(Nn);
  Ue(Nn, (R, se) => W == null ? void 0 : W(R, se), P), Ue(Wt, (R, se) => W == null ? void 0 : W(R, se), O);
  var on = ye(Wt, 2);
  We(on, (R, se) => ({ class: R, ...se }), [
    () => Ge({
      "mdc-select__dropdown-icon": !0,
      [F()]: !0
    }),
    () => mt(H, "dropdownIcon$")
  ]), Ue(on, (R, se) => W == null ? void 0 : W(R, se), pe);
  var Vt = ye(on, 2);
  {
    var Un = (R) => {
      {
        let se = /* @__PURE__ */ fe(() => mt(H, "ripple$"));
        xe(wc(R, st(() => o(se))), (ut) => k = ut, () => k);
      }
    };
    re(Vt, (R) => {
      f() !== "outlined" && d() && R(Un);
    });
  }
  xe(et, (R) => Ie = R, () => Ie), Ue(et, (R, se) => W == null ? void 0 : W(R, se), C);
  var Ur = ye(et, 2);
  {
    let R = /* @__PURE__ */ fe(() => Ge({
      "mdc-select__menu": !0,
      ...we,
      [B()]: !0
    })), se = /* @__PURE__ */ fe(() => mt(H, "menu$"));
    Bg(Ur, st(
      {
        get class() {
          return o(R);
        },
        get id() {
          return o(Se);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Z);
        },
        get anchorCorner() {
          return o(te);
        }
      },
      () => o(se),
      {
        onSMUIMenuSelected: (ut) => {
          var wt;
          o(D) && o(D).handleMenuItemAction(ut.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, ut);
        },
        onSMUIMenuSurfaceClosing: (ut) => {
          var wt;
          o(D) && o(D).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, ut);
        },
        onSMUIMenuSurfaceClosed: (ut) => {
          var wt;
          o(D) && o(D).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, ut);
        },
        onSMUIMenuSurfaceOpened: (ut) => {
          var wt;
          o(D) && o(D).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, ut);
        },
        get open() {
          return o(ue);
        },
        set open(ut) {
          z(ue, ut, !0);
        },
        children: (ut, wt) => {
          {
            let Qn = /* @__PURE__ */ fe(() => mt(H, "list$"));
            Fg(ut, st(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(He);
                }
              },
              () => o(Qn),
              {
                get selectedIndex() {
                  return o(ce);
                },
                set selectedIndex(Jn) {
                  z(ce, Jn, !0);
                },
                children: (Jn, Qi) => {
                  var di = ee(), kr = K(di);
                  Ee(kr, () => e.children ?? ve), w(Jn, di);
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
  xe(Ke, (R) => $ = R, () => $), Ue(Ke, (R, se) => Zt == null ? void 0 : Zt(R, se), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ne,
    removeClass: de,
    addStyle: j
  })), Ue(Ke, (R, se) => qs == null ? void 0 : qs(R, se), () => ({ addClass: ne, removeClass: de })), Ue(Ke, (R, se) => W == null ? void 0 : W(R, se), c);
  var ws = ye(Ke, 2);
  {
    var od = (R) => {
      {
        let se = /* @__PURE__ */ fe(() => mt(H, "helperText$"));
        Xg(R, st(() => o(se), {
          children: (ut, wt) => {
            var Qn = ee(), Jn = K(Qn);
            Ee(Jn, () => e.helperText ?? ve), w(ut, Qn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(ws, (R) => {
      e.helperText && R(od);
    });
  }
  Oe(() => it(Nr, n())), w(t, Xe);
  var ld = Te(Fe);
  return i(), ld;
}
function $g(t, e) {
  Ce(e, !0);
  const n = () => zn(d, "$selectedValue", r), [r, i] = fr();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let s = p(e, "value", 3, ""), c = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = le("SMUI:select:selectedText"), d = le("SMUI:select:value");
  ie("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ fe(() => s() != null && s() !== "" && n() === s());
  ct(f), Cn(f);
  function f() {
    o(h) && l && ii(u, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  xe(
    qg(t, st(
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
      () => c,
      {
        children: (b, I) => {
          var E = ee(), A = K(E);
          Ee(A, () => e.children ?? ve), w(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var g = Te(v);
  return i(), g;
}
function ep(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let s = p(e, "variant", 3, "standard"), c = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
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
      var f = ee(), m = K(f);
      jn(m, 17, n, Ii, (v, g, b) => {
        {
          let I = /* @__PURE__ */ fe(() => u(b));
          $g(v, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(g).value;
            },
            children: (E, A) => {
              var _ = Dt();
              Oe(() => it(_, o(g).label)), w(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
}
const tp = $t([]);
tp.subscribe;
_e({ freeze: !1 });
const Ut = [];
for (let t = 0; t < 256; ++t)
  Ut.push((t + 256).toString(16).slice(1));
function np(t, e = 0) {
  return (Ut[t[e + 0]] + Ut[t[e + 1]] + Ut[t[e + 2]] + Ut[t[e + 3]] + "-" + Ut[t[e + 4]] + Ut[t[e + 5]] + "-" + Ut[t[e + 6]] + Ut[t[e + 7]] + "-" + Ut[t[e + 8]] + Ut[t[e + 9]] + "-" + Ut[t[e + 10]] + Ut[t[e + 11]] + Ut[t[e + 12]] + Ut[t[e + 13]] + Ut[t[e + 14]] + Ut[t[e + 15]]).toLowerCase();
}
let zs;
const rp = new Uint8Array(16);
function ip() {
  if (!zs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    zs = crypto.getRandomValues.bind(crypto);
  }
  return zs(rp);
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
function Zn(t, e) {
  var n = op(), r = ge(n);
  Ee(r, () => e.children ?? ve), w(t, n);
}
var lp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function up(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = lp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var cp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Dc(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = cp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var dp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function fp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = dp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var hp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function vp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = hp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var mp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function gp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = mp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var pp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function bp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = pp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var _p = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function yp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = _p();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var Ip = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = Ip();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
kd();
var Ap = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Sp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = Ap();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
var xp = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Cp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Zn(t, {
    children: (r, i) => {
      var a = xp();
      Oe(() => Ft(a, n())), w(r, a);
    }
  });
}
function Tp(t, e) {
  e(t.target.value);
}
var wp = /* @__PURE__ */ he('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Lp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = wp(), a = ge(i);
  a.__change = [Tp, r];
  var s = ye(a, 2), c = ge(s);
  Oe(() => it(c, n())), pa(a, r), w(t, i), Te();
}
pn(["change"]);
function Op(t, e) {
  e(t.target.value);
}
var Rp = /* @__PURE__ */ he('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Mp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Rp(), a = ge(i);
  a.__change = [Op, r];
  var s = ye(a, 2), c = ge(s);
  Oe(() => it(c, n())), pa(a, r), w(t, i), Te();
}
pn(["change"]);
function Dp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Pp = /* @__PURE__ */ he('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function ls(t, e) {
  Ce(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), s = p(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ me(null), u = /* @__PURE__ */ me(null), d = /* @__PURE__ */ me(null), h = /* @__PURE__ */ me(null), f = /* @__PURE__ */ me(!1), m = /* @__PURE__ */ me(null), v = /* @__PURE__ */ me(null);
  function g() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? z(m, setTimeout(() => z(f, !0), i()), !0) : z(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), z(f, !1);
  }
  function I() {
    g();
  }
  function E() {
    b();
  }
  function A() {
    g();
  }
  function _() {
    b();
  }
  function S() {
    if (!o(u) || !o(h) || !o(l) || s()) return;
    const y = o(l).getBoundingClientRect(), O = o(h).getBoundingClientRect();
    let N = 0, P = 0;
    const U = 8;
    switch (r()) {
      case "top":
        N = y.top - O.height - U, P = y.left + y.width / 2 - O.width / 2;
        break;
      case "bottom":
        N = y.bottom + U, P = y.left + y.width / 2 - O.width / 2;
        break;
      case "left":
        N = y.top + y.height / 2 - O.height / 2, P = y.left - O.width - U;
        break;
      case "right":
        N = y.top + y.height / 2 - O.height / 2, P = y.right + U;
        break;
    }
    o(u).style.top = `${N + window.scrollY}px`, o(u).style.left = `${P + window.scrollX}px`;
  }
  function x() {
    var y;
    (y = o(v)) == null || y.disconnect(), z(v, null), o(u) && o(u).parentNode && o(u).parentNode.removeChild(o(u)), z(u, null), z(h, null), z(d, null), o(m) && clearTimeout(o(m));
  }
  Cn(x), Ae(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(u)) {
        z(u, document.createElement("div"), !0), o(u).style.position = "absolute", o(u).style.zIndex = "9999", o(u).style.pointerEvents = "none", o(u).style.opacity = "0", o(u).style.transition = `opacity ${a()}ms ease`, o(u).id = c, o(u).setAttribute("role", "tooltip"), document.body.appendChild(o(u)), z(d, o(u).attachShadow({ mode: "open" }), !0);
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
            o(f) && S();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(u) && (o(u).style.opacity = "1", S());
    }
  }), Ae(() => {
    if (o(f) || !o(u))
      return;
    o(u).style.opacity = "0";
    const y = o(u), O = setTimeout(
      () => {
        y && y.parentNode && y.parentNode.removeChild(y), o(u) === y && x();
      },
      a()
    );
    return () => clearTimeout(O);
  });
  var T = Pp();
  T.__keydown = [Dp, n, g, b];
  var C = ge(T);
  Ee(C, () => e.children ?? ve), xe(T, (y) => z(l, y), () => o(l)), Oe(() => {
    xr(T, "aria-describedby", n() && !s() ? c : void 0), xr(T, "aria-haspopup", n() ? "true" : void 0), xr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), la("mouseenter", T, I), la("mouseleave", T, E), la("focus", T, A), la("blur", T, _), w(t, T), Te();
}
pn(["keydown"]);
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
}, bn = {
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
var Hp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = bn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bn;
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
          var i = bn.TRANSITION_STATE_UNCHECKED, a = aa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = bn.TRANSITION_STATE_INDETERMINATE, r = bn.TRANSITION_STATE_CHECKED, i = bn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = bn.TRANSITION_STATE_INIT, a = bn.TRANSITION_STATE_CHECKED, s = bn.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, l = c.ANIM_UNCHECKED_CHECKED, u = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, h = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? l : u;
        case a:
          return r === s ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(bn.ARIA_CHECKED_ATTR, bn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(bn.ARIA_CHECKED_ATTR);
    }, e;
  }(zt)
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
var hn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Ln = {
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ln;
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
      this.determinate = !this.adapter.hasClass(hn.INDETERMINATE_CLASS), this.adapter.addClass(hn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Pt(r), c = s.next(); !c.done; c = s.next()) {
              var l = c.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              c && !c.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(hn.INDETERMINATE_CLASS), this.adapter.setAttribute(Ln.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Ln.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Ln.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(hn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Ln.ARIA_VALUENOW), this.adapter.removeAttribute(Ln.ARIA_VALUEMAX), this.adapter.removeAttribute(Ln.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Ln.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(hn.CLOSED_CLASS), this.adapter.removeClass(hn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Ln.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(hn.CLOSED_CLASS), this.adapter.setAttribute(Ln.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(hn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(hn.CLOSED_CLASS) && this.adapter.addClass(hn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(hn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(hn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Mg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Ln.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * sa.PRIMARY_HALF, i = n * sa.PRIMARY_FULL, a = n * sa.SECONDARY_QUARTER, s = n * sa.SECONDARY_HALF, c = n * sa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(zt)
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
var nr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ql = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, qr = {
  ARIA_SELECTED: ql.ARIA_SELECTED,
  ARIA_SORT: ql.ARIA_SORT
}, mn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(mn || (mn = {}));
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
    nt(e, t);
    function e(n) {
      return t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, qr.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, mn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, qr.ARIA_SORT), l = mn.NONE;
      c === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : c === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(nr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, qr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, qr.ARIA_SELECTED, "false"));
    }, e;
  }(zt)
), kp = /* @__PURE__ */ he('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Bp = /* @__PURE__ */ he("<div><div><table><!></table></div> <!> <!></div>");
function Fp(t, e) {
  Ce(e, !0);
  const n = () => zn(U, "$progressClosed", r), [r, i] = fr(), { closest: a } = Cs;
  let s = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), u = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), I = p(e, "table$class", 3, ""), E = /* @__PURE__ */ Je(e, [
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
  ]), A, _ = /* @__PURE__ */ me(void 0), S, x = /* @__PURE__ */ me(void 0), T = /* @__PURE__ */ me(void 0), C = _e({}), y = /* @__PURE__ */ me(_e({ height: "auto", top: "initial" })), O = le("SMUI:addLayoutListener"), N, P = !1, U = $t(!1), pe = $t(d());
  Ae(() => {
    ii(pe, d());
  });
  let F = $t(h());
  Ae(() => {
    ii(F, h());
  }), ie("SMUI:checkbox:context", "data-table"), ie("SMUI:linear-progress:context", "data-table"), ie("SMUI:linear-progress:closed", U), ie("SMUI:data-table:sortable", u()), ie("SMUI:data-table:sort", pe), ie("SMUI:data-table:sortDirection", F), ie("SMUI:data-table:sortAscendingAriaLabel", f()), ie("SMUI:data-table:sortDescendingAriaLabel", m()), O && (N = O(be));
  let B;
  Ae(() => {
    e.progress && o(_) && B !== n() && (B = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), ie("SMUI:checkbox:mount", () => {
    o(_) && P && o(_).layout();
  }), ie("SMUI:data-table:header:mount", (M) => {
    z(x, M, !0);
  }), ie("SMUI:data-table:header:unmount", () => {
    z(x, void 0);
  }), ie("SMUI:data-table:body:mount", (M) => {
    z(T, M, !0);
  }), ie("SMUI:data-table:body:unmount", () => {
    z(T, void 0);
  }), ct(() => (z(
    _,
    new Up({
      addClass: q,
      removeClass: $,
      getHeaderCellElements: () => {
        var M;
        return ((M = o(x)) == null ? void 0 : M.cells.map((k) => k.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = o(x)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, k) => {
        var ae;
        return ((ae = o(x)) == null ? void 0 : ae.orderedCells[M].getAttr(k)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, k, ae) => {
        var Re;
        (Re = o(x)) == null || Re.orderedCells[M].addAttr(k, ae);
      },
      setClassNameByHeaderCellIndex: (M, k) => {
        var ae;
        (ae = o(x)) == null || ae.orderedCells[M].addClass(k);
      },
      removeClassNameByHeaderCellIndex: (M, k) => {
        var ae;
        (ae = o(x)) == null || ae.orderedCells[M].removeClass(k);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), Qe(ce(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = ce().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        z(y, M, !0);
      },
      addClassAtRowIndex: (M, k) => {
        var ae;
        (ae = o(T)) == null || ae.orderedRows[M].addClass(k);
      },
      getRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.map((k) => k.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var k;
        return ((k = o(T)) == null ? void 0 : k.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var k;
        return ((k = o(T)) == null ? void 0 : k.orderedRows.map((ae) => ae.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.filter((k) => k.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var ae;
        const k = (ae = o(T)) == null ? void 0 : ae.orderedRows[M].checkbox;
        return k ? k.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var k;
        const M = (k = o(x)) == null ? void 0 : k.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!ce().querySelector(".mdc-data-table__row-checkbox") || !!ce().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var ae;
        const k = (ae = o(T)) == null ? void 0 : ae.orderedRows[M.rowIndex];
        k && Qe(ce(), "SMUIDataTableSelectionChanged", {
          row: k.element,
          rowId: k.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        D(!1), Qe(ce(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        D(!1), Qe(ce(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => Qe(ce(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, k) => {
        var ae;
        (ae = o(T)) == null || ae.orderedRows[M].removeClass(k);
      },
      setAttributeAtRowIndex: (M, k, ae) => {
        var Re;
        (Re = o(T)) == null || Re.orderedRows[M].addAttr(k, ae);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var ae;
        const k = (ae = o(x)) == null ? void 0 : ae.checkbox;
        k && (k.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: D,
      setRowCheckboxCheckedAtIndex: (M, k) => {
        var Re;
        const ae = (Re = o(T)) == null ? void 0 : Re.orderedRows[M].checkbox;
        ae && (ae.checked = k);
      },
      setSortStatusLabelByHeaderCellIndex: (M, k) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), P = !0, () => {
    var M;
    (M = o(_)) == null || M.destroy();
  })), Cn(() => {
    N && N();
  });
  function H(M) {
    o(_) && o(_).handleRowCheckboxChange(M);
  }
  function q(M) {
    C[M] || (C[M] = !0);
  }
  function $(M) {
    (!(M in C) || C[M]) && (C[M] = !1);
  }
  function D(M) {
    var ae;
    const k = (ae = o(x)) == null ? void 0 : ae.checkbox;
    k && (k.indeterminate = M);
  }
  function L(M) {
    if (!o(_) || !M.detail.target)
      return;
    const k = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    k && Ie(k);
  }
  function V(M) {
    if (!o(_) || !M.detail.target)
      return;
    const k = a(M.detail.target, ".mdc-data-table__row");
    k && o(_) && o(_).handleRowClick({ rowId: M.detail.rowId, row: k });
  }
  function Ie(M) {
    var ot, _t;
    const k = ((ot = o(x)) == null ? void 0 : ot.orderedCells) ?? [], ae = k.map((gt) => gt.element).indexOf(M);
    if (ae === -1)
      return;
    const Re = k[ae].columnId ?? null;
    (_t = o(_)) == null || _t.handleSortAction({ columnId: Re, columnIndex: ae, headerCell: M });
  }
  function be() {
    var M;
    return (M = o(_)) == null ? void 0 : M.layout();
  }
  function ce() {
    return A;
  }
  var Se = { layout: be, getElement: ce }, G = Bp(), J = (M) => {
    var k;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (k = e.onSMUIDataTableHeaderCheckboxChange) == null || k.call(e, M);
  }, X = (M) => {
    var k;
    L(M), (k = e.onSMUIDataTableHeaderClick) == null || k.call(e, M);
  }, ue = (M) => {
    var k;
    V(M), (k = e.onSMUIDataTableRowClick) == null || k.call(e, M);
  }, we = (M) => {
    var k;
    H(M), (k = e.onSMUIDataTableBodyCheckboxChange) == null || k.call(e, M);
  };
  We(
    G,
    (M, k) => ({
      class: M,
      ...k,
      onSMUIDataTableHeaderCheckboxChange: J,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: ue,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => Ge({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [c()]: !0
      }),
      () => Gi(E, ["container$", "table$"])
    ]
  );
  var Z = ge(G);
  We(Z, (M, k) => ({ class: M, ...k }), [
    () => Ge({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => mt(E, "container$")
  ]);
  var te = ge(Z);
  We(te, (M, k) => ({ class: M, ...k }), [
    () => Ge({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => mt(E, "table$")
  ]);
  var He = ge(te);
  Ee(He, () => e.children ?? ve), Ue(te, (M, k) => W == null ? void 0 : W(M, k), b), xe(Z, (M) => S = M, () => S), Ue(Z, (M, k) => W == null ? void 0 : W(M, k), v);
  var Le = ye(Z, 2);
  {
    var qe = (M) => {
      var k = kp(), ae = ye(ge(k), 2);
      Ee(ae, () => e.progress ?? ve), Oe((Re) => Ft(k, Re), [
        () => Object.entries(o(y)).map(([Re, ot]) => `${Re}: ${ot};`).join(" ")
      ]), w(M, k);
    };
    re(Le, (M) => {
      e.progress && M(qe);
    });
  }
  var $e = ye(Le, 2);
  Ee($e, () => e.paginate ?? ve), xe(G, (M) => A = M, () => A), Ue(G, (M, k) => W == null ? void 0 : W(M, k), s), w(t, G);
  var Be = Te(Se);
  return i(), Be;
}
var Vp = /* @__PURE__ */ he("<thead><!></thead>");
function Gp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ me(void 0), s = [];
  const c = /* @__PURE__ */ new WeakMap();
  ie("SMUI:data-table:row:header", !0);
  const l = le("SMUI:checkbox:mount");
  ie("SMUI:checkbox:mount", (I) => {
    z(a, I, !0), l && l(I);
  });
  const u = le("SMUI:checkbox:unmount");
  ie("SMUI:checkbox:unmount", (I) => {
    z(a, void 0), u && u(I);
  }), ie("SMUI:data-table:cell:mount", (I) => {
    s.push(I), c.set(I.element, I);
  }), ie("SMUI:data-table:cell:unmount", (I) => {
    const E = s.findIndex((A) => A === I);
    E !== -1 && s.splice(E, 1), c.delete(I.element);
  });
  const d = le("SMUI:data-table:header:mount"), h = le("SMUI:data-table:header:unmount");
  ct(() => {
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
    ].map((I) => c.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, g = Vp();
  We(g, () => ({ ...r }));
  var b = ge(g);
  return Ee(b, () => e.children ?? ve), xe(g, (I) => i = I, () => i), Ue(g, (I, E) => W == null ? void 0 : W(I, E), n), w(t, g), Te(v);
}
var jp = /* @__PURE__ */ he("<tbody><!></tbody>");
function qp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const c = /* @__PURE__ */ new WeakMap();
  ie("SMUI:data-table:row:header", !1), ie("SMUI:data-table:row:mount", (g) => {
    s.push(g), c.set(g.element, g);
  }), ie("SMUI:data-table:row:unmount", (g) => {
    const b = s.findIndex((I) => I === g);
    b !== -1 && s.splice(b, 1), c.delete(g.element);
  });
  const l = le("SMUI:data-table:body:mount"), u = le("SMUI:data-table:body:unmount");
  ct(() => {
    const g = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      u && u(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => c.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = jp();
  We(m, (g) => ({ class: g, ...i }), [
    () => Ge({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = ge(m);
  return Ee(v, () => e.children ?? ve), xe(m, (g) => a = g, () => a), Ue(m, (g, b) => W == null ? void 0 : W(g, b), n), w(t, m), Te(f);
}
let zp = 0;
var Wp = /* @__PURE__ */ he("<tr><!></tr>");
function Fa(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + zp++), a = /* @__PURE__ */ Je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, c = /* @__PURE__ */ me(void 0), l = _e({}), u = _e({}), d = le("SMUI:data-table:row:header");
  const h = le("SMUI:checkbox:mount");
  ie("SMUI:checkbox:mount", (O) => {
    z(c, O, !0), h && h(O);
  });
  const f = le("SMUI:checkbox:unmount");
  ie("SMUI:checkbox:unmount", (O) => {
    z(c, void 0), f && f(O);
  });
  const m = le("SMUI:data-table:row:mount"), v = le("SMUI:data-table:row:unmount");
  ct(() => {
    const O = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: I,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: I,
      addAttr: E
    };
    return m && m(O), () => {
      v && v(O);
    };
  });
  function g(O) {
    l[O] || (l[O] = !0);
  }
  function b(O) {
    (!(O in l) || l[O]) && (l[O] = !1);
  }
  function I(O) {
    return O in u ? u[O] ?? null : S().getAttribute(O);
  }
  function E(O, N) {
    u[O] !== N && (u[O] = N);
  }
  function A(O) {
    Qe(S(), "SMUIDataTableHeaderClick", O);
  }
  function _(O) {
    Qe(S(), "SMUIDataTableRowClick", { rowId: i(), target: O.target });
  }
  function S() {
    return s;
  }
  var x = { getElement: S }, T = Wp(), C = (O) => {
    var N;
    d ? A(O) : _(O), (N = e.onclick) == null || N.call(e, O);
  };
  We(
    T,
    (O) => ({
      class: O,
      "aria-selected": o(c) ? o(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: C
    }),
    [
      () => Ge({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(c) && o(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var y = ge(T);
  return Ee(y, () => e.children ?? ve), xe(T, (O) => s = O, () => s), Ue(T, (O, N) => W == null ? void 0 : W(O, N), n), w(t, T), Te(x);
}
let Xp = 0;
var Kp = /* @__PURE__ */ he('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Zp = /* @__PURE__ */ he("<th><!></th>"), Yp = /* @__PURE__ */ he("<td><!></td>");
function oa(t, e) {
  Ce(e, !0);
  const n = () => zn(I, "$sort", i), r = () => zn(E, "$sortDirection", i), [i, a] = fr();
  let s = le("SMUI:data-table:row:header"), c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Xp++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => le("SMUI:data-table:sortable")), m = /* @__PURE__ */ Je(e, [
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
  ]), v, g = _e({}), b = _e({}), I = le("SMUI:data-table:sort"), E = le("SMUI:data-table:sortDirection"), A = le("SMUI:data-table:sortAscendingAriaLabel"), _ = le("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ie("SMUI:label:context", "data-table:sortable-header-cell"), ie("SMUI:icon-button:context", "data-table:sortable-header-cell"), ie("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const S = le("SMUI:data-table:cell:mount"), x = le("SMUI:data-table:cell:unmount");
  ct(() => {
    const D = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: C,
      getAttr: y,
      addAttr: O
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return U();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: C,
      getAttr: y,
      addAttr: O
    };
    return S && S(D), () => {
      x && x(D);
    };
  });
  function T(D) {
    g[D] || (g[D] = !0);
  }
  function C(D) {
    (!(D in g) || g[D]) && (g[D] = !1);
  }
  function y(D) {
    return D in b ? b[D] ?? null : U().getAttribute(D);
  }
  function O(D, L) {
    b[D] !== L && (b[D] = L);
  }
  function N(D) {
    Qe(U(), "SMUIDataTableHeaderCheckboxChange", D);
  }
  function P(D) {
    Qe(U(), "SMUIDataTableBodyCheckboxChange", D);
  }
  function U() {
    return v;
  }
  var pe = { getElement: U }, F = ee(), B = K(F);
  {
    var H = (D) => {
      var L = Zp(), V = (Se) => {
        var G;
        d() && N(Se), (G = e.onchange) == null || G.call(e, Se);
      };
      We(
        L,
        (Se) => ({
          class: Se,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: V
        }),
        [
          () => Ge({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ie = ge(L);
      {
        var be = (Se) => {
          var G = Kp(), J = ge(G);
          Ee(J, () => e.children ?? ve);
          var X = ye(J, 2), ue = ge(X);
          Oe(() => {
            xr(X, "id", `${h() ?? ""}-status-label`), it(ue, n() === h() ? r() === "ascending" ? A : _ : "");
          }), w(Se, G);
        }, ce = (Se) => {
          var G = ee(), J = K(G);
          Ee(J, () => e.children ?? ve), w(Se, G);
        };
        re(Ie, (Se) => {
          f() ? Se(be) : Se(ce, !1);
        });
      }
      xe(L, (Se) => v = Se, () => v), Ue(L, (Se, G) => W == null ? void 0 : W(Se, G), c), w(D, L);
    }, q = (D) => {
      var L = Yp(), V = (be) => {
        var ce;
        d() && P(be), (ce = e.onchange) == null || ce.call(e, be);
      };
      We(
        L,
        (be) => ({
          class: be,
          ...b,
          ...m,
          onchange: V
        }),
        [
          () => Ge({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ie = ge(L);
      Ee(Ie, () => e.children ?? ve), xe(L, (be) => v = be, () => v), Ue(L, (be, ce) => W == null ? void 0 : W(be, ce), c), w(D, L);
    };
    re(B, (D) => {
      s ? D(H) : D(q, !1);
    });
  }
  w(t, F);
  var $ = Te(pe);
  return a(), $;
}
pn(["click"]);
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
    nt(e, t);
    function e(n) {
      var r = t.call(this, oe(oe({}, e.defaultAdapter), n)) || this;
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
  }(zt)
);
let eb = 0;
var tb = /* @__PURE__ */ he("<div><!> <label><!></label></div>");
function nb(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), s = p(e, "inputId", 19, () => "SMUI-form-field-" + eb++), c = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ Je(e, [
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
  ]), u, d = /* @__PURE__ */ me(void 0), h = new Ki(), f, m = /* @__PURE__ */ me(void 0);
  ie("SMUI:generic:input:props", { id: s() }), ie("SMUI:generic:input:mount", (_) => {
    z(m, _, !0);
  }), ie("SMUI:generic:input:unmount", () => {
    z(m, void 0);
  }), ct(() => (z(
    d,
    new $p({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, S) => h.off(f, _, S),
      registerInteractionHandler: (_, S) => h.on(f, _, S)
    }),
    !0
  ), o(d).init(), () => {
    var _;
    (_ = o(d)) == null || _.destroy(), h.clear();
  }));
  function v() {
    return u;
  }
  var g = { getElement: v }, b = tb();
  We(b, (_, S) => ({ class: _, ...S }), [
    () => Ge({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Gi(l, ["label$"])
  ]);
  var I = ge(b);
  Ee(I, () => e.children ?? ve);
  var E = ye(I, 2);
  We(E, (_) => ({ for: s(), ..._ }), [() => mt(l, "label$")]);
  var A = ge(E);
  return Ee(A, () => e.label ?? ve), xe(E, (_) => f = _, () => f), Ue(E, (_, S) => W == null ? void 0 : W(_, S), c), xe(b, (_) => u = _, () => u), Ue(b, (_, S) => W == null ? void 0 : W(_, S), n), w(t, b), Te(g);
}
pn(["click"]);
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
var Va, zl = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Va = {}, po(Va, zl.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), po(Va, zl.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function ib(t) {
  return t * t * t;
}
function Pc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ab(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (x) => Math.sqrt(x) * 120, easing: s = Pc } = r, c = getComputedStyle(t), l = c.transform === "none" ? "" : c.transform, [u, d] = c.transformOrigin.split(" ").map(parseFloat);
  u /= t.clientWidth, d /= t.clientHeight;
  var h = sb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * u, g = e.top + e.height * d, b = n.left + n.width * u, I = n.top + n.height * d, E = (v - b) * f, A = (g - I) * m, _ = e.width / n.width, S = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + A * A)) : a,
    easing: s,
    css: (x, T) => {
      var C = T * E, y = T * A, O = x + T * _, N = x + T * S;
      return `transform: ${l} translate(${C}px, ${y}px) scale(${O}, ${N});`;
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
function us(t, { delay: e = 0, duration: n = 400, easing: r = ob, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const c = getComputedStyle(t), l = +c.opacity, u = c.transform === "none" ? "" : c.transform, d = l * (1 - s), [h, f] = Wl(i), [m, v] = Wl(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${u} translate(${(1 - g) * h}${f}, ${(1 - g) * m}${v});
			opacity: ${l - d * b}`
  };
}
pn([
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
  Ce(e, !0);
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
  var a = cb(), s = ge(a), c = ge(s);
  vo(c, {
    class: "material-icons",
    children: (g, b) => {
      var I = Dt();
      Oe(() => it(I, r[e.type])), w(g, I);
    },
    $$slots: { default: !0 }
  });
  var l = ye(s, 2), u = ge(l), d = ge(u), h = ye(u, 2);
  {
    var f = (g) => {
      var b = ub(), I = ge(b);
      Oe(() => it(I, e.detail)), w(g, b);
    };
    re(h, (g) => {
      e.detail && g(f);
    });
  }
  var m = ye(l, 2);
  m.__click = [lb, n];
  var v = ge(m);
  vo(v, {
    class: "material-icons",
    children: (g, b) => {
      var I = Dt("close");
      w(g, I);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Ft(a, `--color:${i[e.type] ?? ""}`), it(d, e.summary);
  }), ns(1, a, () => us, () => ({ x: 0, y: 30, duration: 150, easing: ib })), ns(2, a, () => us, () => ({ x: 50, y: 0, duration: 150, easing: Pc })), w(t, a), Te();
}
pn(["click"]);
const fb = 4e3;
function hb() {
  let t = _e({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, c = fb) => {
    const l = e++, u = { id: l, summary: a, detail: s, type: i };
    return t.items = [...t.items, u], setTimeout(
      () => {
        n(l);
      },
      c
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
const va = hb();
var vb = /* @__PURE__ */ he("<div><!></div>"), mb = /* @__PURE__ */ he('<div class="toast-host svelte-11vwiay"></div>');
function gb(t, e) {
  Ce(e, !1);
  const n = va.toasts;
  qf();
  var r = mb();
  jn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = vb(), c = ge(s);
    db(c, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => va.remove(o(a).id)
    }), Gf(s, () => ab, null), w(i, s);
  }), w(t, r), Te();
}
var pb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, bb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, _b = /* @__PURE__ */ he('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), yb = /* @__PURE__ */ he('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), Ib = /* @__PURE__ */ he('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Eb(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = Ib();
  r.__click = [pb, e];
  var i = ge(r), a = ge(i);
  {
    var s = (f) => {
      ls(f, {
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
    }, c = (f) => {
      ls(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          Cp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    re(a, (f) => {
      o(n) ? f(s) : f(c, !1);
    });
  }
  var l = ye(i, 2), u = ge(l), d = ye(l, 2);
  {
    var h = (f) => {
      var m = yb(), v = ye(K(m), 2), g = ge(v), b = ye(v, 2), I = ge(b);
      Sp(I, { svgStyles: "fill: gray;" }), Oe(() => it(g, e.value)), w(f, m);
    };
    re(d, (f) => {
      o(n) && f(h);
    });
  }
  Oe(() => {
    Do(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), it(u, e.label);
  }), w(t, r), Te();
}
pn(["click"]);
var Ab = /* @__PURE__ */ he('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Sb(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), u = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), h = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), v = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ Je(e, [
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
  ]), I, E = /* @__PURE__ */ me(void 0), A = /* @__PURE__ */ me(void 0), _ = _e({}), S = _e({}), x = _e({}), T = /* @__PURE__ */ me(!1), C = _e(le("SMUI:generic:input:props") ?? {}), y = /* @__PURE__ */ me(_e(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((Z) => Z === f()) !== -1)), O = le("SMUI:checkbox:context"), N = le("SMUI:data-table:row:header"), P = h(), U = r(d()) ? [] : [...d()], pe = o(y);
  Ae(() => {
    let Z = !1;
    if (!r(d()))
      if (pe !== o(y)) {
        const te = d().findIndex((He) => He === f());
        o(y) && te === -1 ? d().push(f()) : !o(y) && te !== -1 && d().splice(te, 1), Z = !0;
      } else {
        const te = U.findIndex((Le) => Le === f()), He = d().findIndex((Le) => Le === f());
        te > -1 && He === -1 ? (z(y, !1), Z = !0) : He > -1 && te === -1 && (z(y, !0), Z = !0);
      }
    r(h()) ? pe !== o(y) && (Z = !0) : (h() !== (u() ? null : o(y)) || o(y) !== pe) && (h() === P && o(y) !== pe ? (h(o(y)), r(u()) || u(!1)) : z(y, !!h()), Z = !0), o(A) && (r(u()) ? o(A).indeterminate && (o(A).indeterminate = !1, Z = !0) : !u() && o(A).indeterminate ? (o(A).indeterminate = !1, Z = !0) : u() && !o(A).indeterminate && (o(A).indeterminate = !0, z(y, !1), Z = !0)), P = h(), U = r(d()) ? [] : [...d()], pe = o(y), Z && o(E) && o(E).handleChange();
  });
  const F = le("SMUI:generic:input:mount"), B = le("SMUI:generic:input:unmount"), H = le("SMUI:checkbox:mount"), q = le("SMUI:checkbox:unmount");
  ct(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(u()) && u(), z(
      E,
      new Hp({
        addClass: $,
        forceLayout: () => ce().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ce().parentNode,
        isChecked: () => o(y),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: D,
        removeNativeControlAttr: Ie,
        setNativeControlAttr: V,
        setNativeControlDisabled: (te) => c(te)
      }),
      !0
    );
    const Z = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ce();
      },
      get checked() {
        return o(y);
      },
      set checked(te) {
        o(y) !== te && z(y, te, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(te) {
        u(te);
      },
      activateRipple() {
        c() || z(T, !0);
      },
      deactivateRipple() {
        z(T, !1);
      }
    };
    return F && F(Z), H && H(Z), o(E).init(), () => {
      var te;
      B && B(Z), q && q(Z), (te = o(E)) == null || te.destroy();
    };
  });
  function $(Z) {
    _[Z] || (_[Z] = !0);
  }
  function D(Z) {
    (!(Z in _) || _[Z]) && (_[Z] = !1);
  }
  function L(Z, te) {
    S[Z] != te && (te === "" || te == null ? delete S[Z] : S[Z] = te);
  }
  function V(Z, te) {
    x[Z] !== te && (x[Z] = te);
  }
  function Ie(Z) {
    (!(Z in x) || x[Z] != null) && (x[Z] = void 0);
  }
  function be() {
    return C && C.id;
  }
  function ce() {
    return I;
  }
  var Se = { getId: be, getElement: ce }, G = Ab(), J = (Z) => {
    var te;
    o(E) && o(E).handleAnimationEnd(), (te = e.onanimationend) == null || te.call(e, Z);
  };
  We(G, (Z, te, He) => ({ class: Z, style: te, ...He, onanimationend: J }), [
    () => Ge({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": O === "data-table" && N,
      "mdc-data-table__row-checkbox": O === "data-table" && !N,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(S).map(([Z, te]) => `${Z}: ${te};`).concat([s()]).join(" "),
    () => Gi(b, ["input$"])
  ]);
  var X = ge(G), ue = (Z) => {
    var te;
    Qe(ce(), "blur", Z), (te = e.input$onblur) == null || te.call(e, Z);
  }, we = (Z) => {
    var te;
    Qe(ce(), "focus", Z), (te = e.input$onfocus) == null || te.call(e, Z);
  };
  return We(
    X,
    (Z, te, He, Le) => ({
      class: Z,
      type: "checkbox",
      ...C,
      disabled: c(),
      value: te,
      "data-indeterminate": He,
      ...x,
      ...Le,
      onblur: ue,
      onfocus: we
    }),
    [
      () => Ge({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(u()) && u() ? "true" : void 0,
      () => mt(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), xe(X, (Z) => z(A, Z), () => o(A)), Ue(X, (Z, te) => W == null ? void 0 : W(Z, te), v), Rr(() => jf(X, () => o(y), (Z) => z(y, Z))), xe(G, (Z) => I = Z, () => I), Ue(G, (Z, te) => W == null ? void 0 : W(Z, te), i), Ue(G, (Z, te) => Zt == null ? void 0 : Zt(Z, te), () => ({
    unbounded: !0,
    addClass: $,
    removeClass: D,
    addStyle: L,
    active: o(T),
    eventTarget: o(A)
  })), w(t, G), Te(Se);
}
var xb = /* @__PURE__ */ he('<div style="display: flex; flex-direction: column;"></div>');
function Cb(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => _e([]));
  var i = xb();
  jn(i, 21, n, Ii, (a, s) => {
    nb(a, {
      label: (l) => {
        var u = Dt();
        Oe(() => it(u, o(s).label)), w(l, u);
      },
      children: (l, u) => {
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
  }), w(t, i), Te();
}
var Tb = (t) => t.stopPropagation(), wb = /* @__PURE__ */ he('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Lb = /* @__PURE__ */ he('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Ob = /* @__PURE__ */ he('<div class="oscd-filters svelte-58jwwf"></div>');
function Rb(t, e) {
  Ce(e, !0);
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
          const b = (g = v.options) == null ? void 0 : g.find((A) => A.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const I = v.value.map((A) => {
            var S;
            const _ = (S = v.options) == null ? void 0 : S.find((x) => x.value === A);
            return _ ? _.label : String(A);
          }), E = 1;
          return I.length <= E ? I.join(", ") : `${I.slice(0, E).join(", ")} +${I.length - E} more`;
        case "date":
          try {
            const A = new Date(v.value);
            return isNaN(A.getTime()) ? String(v.value) : A.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const A = new Date(v.value);
            return isNaN(A.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(A);
          } catch {
            return String(v.value);
          }
        default:
          return String(v.value);
      }
  }
  function c(v) {
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
    o(r) === v ? z(r, null) : (z(r, v, !0), a[v] = c(n()[v]));
  }
  function u() {
    z(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var g;
    n(n().map((b, I) => I === v ? { ...b, value: a[v] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), z(r, null);
  }
  function h(v) {
    var g;
    n(n().map((b, I) => I === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), u();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || u();
  }
  ct(() => {
    document.addEventListener("click", f);
  }), Cn(() => {
    document.removeEventListener("click", f);
  }), Ae(() => {
  });
  var m = Ob();
  jn(m, 23, n, (v) => v.key, (v, g, b) => {
    var I = Lb(), E = ge(I);
    {
      let S = /* @__PURE__ */ fe(() => s(o(g)));
      Eb(E, {
        get label() {
          return o(g).label;
        },
        get value() {
          return o(S);
        },
        onOpen: () => l(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var A = ye(E, 2);
    {
      var _ = (S) => {
        var x = wb();
        x.__click = [Tb];
        var T = ye(ge(x), 2), C = ge(T), y = ye(T, 2), O = ge(y);
        {
          var N = (pe) => {
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
              set value(F) {
                a[o(b)] = F;
              }
            });
          }, P = (pe) => {
            var F = ee(), B = K(F);
            {
              var H = ($) => {
                {
                  let D = /* @__PURE__ */ fe(() => {
                    var L;
                    return (L = o(g)) == null ? void 0 : L.options;
                  });
                  ep($, {
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
              }, q = ($) => {
                var D = ee(), L = K(D);
                {
                  var V = (be) => {
                    {
                      let ce = /* @__PURE__ */ fe(() => {
                        var Se;
                        return (Se = o(g)) == null ? void 0 : Se.options;
                      });
                      Cb(be, {
                        get data() {
                          return o(ce);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(Se) {
                          a[o(b)] = Se;
                        }
                      });
                    }
                  }, Ie = (be) => {
                    var ce = ee(), Se = K(ce);
                    {
                      var G = (X) => {
                        Lp(X, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(ue) {
                            a[o(b)] = ue;
                          }
                        });
                      }, J = (X) => {
                        var ue = ee(), we = K(ue);
                        {
                          var Z = (te) => {
                            Mp(te, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(He) {
                                a[o(b)] = He;
                              }
                            });
                          };
                          re(
                            we,
                            (te) => {
                              o(g).type === "datetime" && te(Z);
                            },
                            !0
                          );
                        }
                        w(X, ue);
                      };
                      re(
                        Se,
                        (X) => {
                          o(g).type === "date" ? X(G) : X(J, !1);
                        },
                        !0
                      );
                    }
                    w(be, ce);
                  };
                  re(
                    L,
                    (be) => {
                      o(g).type === "multiselect" ? be(V) : be(Ie, !1);
                    },
                    !0
                  );
                }
                w($, D);
              };
              re(
                B,
                ($) => {
                  o(g).type === "select" ? $(H) : $(q, !1);
                },
                !0
              );
            }
            w(pe, F);
          };
          re(O, (pe) => {
            o(g).type === "text" || o(g).type === "number" ? pe(N) : pe(P, !1);
          });
        }
        var U = ye(y, 2);
        Tc(U, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (pe, F) => {
            var B = Dt("Apply");
            w(pe, B);
          },
          $$slots: { default: !0 }
        }), Oe(() => it(C, `Filter by ${o(g).label ?? ""}`)), ns(2, x, () => us, () => ({ y: 5, duration: 120 })), ns(1, x, () => us, () => ({ y: -5, duration: 120 })), w(S, x);
      };
      re(A, (S) => {
        o(r) === o(b) && S(_);
      });
    }
    xe(I, (S, x) => i[x] = S, (S) => i == null ? void 0 : i[S], () => [o(b)]), w(v, I);
  }), w(t, m), Te();
}
pn(["click"]);
var Mb = (t, e) => e(), Db = /* @__PURE__ */ he('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), Pb = /* @__PURE__ */ he('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function Hb(t, e) {
  Ce(e, !0);
  let n = p(e, "filters", 31, () => _e([])), r = p(e, "onFilterChange", 3, (E) => {
  }), i = p(e, "searchText", 15, ""), a = p(e, "searchLabel", 3, "Search"), s = p(e, "searchPlaceholder", 3, "Type to search..."), c = p(e, "onSearchInput", 3, () => {
  }), l = p(e, "searchDisabled", 3, !1), u = /* @__PURE__ */ fe(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = Pb(), f = ge(h);
  {
    var m = (E) => {
      yg(E, {
        oninput: () => c()(),
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
        set value(A) {
          i(A);
        }
      });
    };
    re(f, (E) => {
      l() || E(m);
    });
  }
  var v = ye(f, 2), g = ye(ge(v), 2);
  Rb(g, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var b = ye(g, 2);
  {
    var I = (E) => {
      var A = Db();
      A.__click = [Mb, d], w(E, A);
    };
    re(b, (E) => {
      o(u) && E(I);
    });
  }
  w(t, h), Te();
}
pn(["click"]);
var Nb = /* @__PURE__ */ he('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Ub(t, e) {
  Ce(e, !0);
  const [n, r] = fr();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), c = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), u = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ Je(e, [
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
  ]), f, m = /* @__PURE__ */ me(void 0), v = _e({}), g = _e({}), b = _e({}), I = _e({}), E = _e({}), A = le("SMUI:linear-progress:context"), _ = le("SMUI:linear-progress:closed");
  Ae(() => {
    _ && ii(_, l());
  }), Ae(() => {
    o(m) && o(m).isDeterminate() !== !c() && o(m).setDeterminate(!c());
  }), Ae(() => {
    o(m) && o(m).getProgress() !== u() && o(m).setProgress(u());
  }), Ae(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), Ae(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), ct(() => (z(
    m,
    new Np({
      addClass: x,
      forceLayout: () => {
        U().getBoundingClientRect();
      },
      setBufferBarStyle: N,
      setPrimaryBarStyle: P,
      hasClass: S,
      removeAttribute: y,
      removeClass: T,
      setAttribute: C,
      setStyle: O,
      attachResizeObserver: (L) => {
        const V = window.ResizeObserver;
        if (V) {
          const Ie = new V(L);
          return Ie.observe(U()), Ie;
        }
        return null;
      },
      getWidth: () => U().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function S(L) {
    return L in v ? v[L] : U().classList.contains(L);
  }
  function x(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function C(L, V) {
    g[L] !== V && (g[L] = V);
  }
  function y(L) {
    (!(L in g) || g[L] != null) && (g[L] = void 0);
  }
  function O(L, V) {
    b[L] != V && (V === "" || V == null ? delete b[L] : b[L] = V);
  }
  function N(L, V) {
    I[L] != V && (V === "" || V == null ? delete I[L] : I[L] = V);
  }
  function P(L, V) {
    E[L] != V && (V === "" || V == null ? delete E[L] : E[L] = V);
  }
  function U() {
    return f;
  }
  var pe = { getElement: U }, F = Nb(), B = (L) => {
    var V;
    o(m) && o(m).handleTransitionEnd(), (V = e.ontransitionend) == null || V.call(e, L);
  };
  We(
    F,
    (L, V) => ({
      class: L,
      style: V,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...g,
      ...h,
      ontransitionend: B
    }),
    [
      () => Ge({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, V]) => `${L}: ${V};`).concat([s()]).join(" ")
    ]
  );
  var H = ge(F), q = ge(H), $ = ye(H, 2);
  xe(F, (L) => f = L, () => f), Ue(F, (L, V) => W == null ? void 0 : W(L, V), i), Oe(
    (L, V) => {
      Ft(q, L), Ft($, V);
    },
    [
      () => Object.entries(I).map(([L, V]) => `${L}: ${V};`).join(" "),
      () => Object.entries(E).map(([L, V]) => `${L}: ${V};`).join(" ")
    ]
  ), w(t, F);
  var D = Te(pe);
  return r(), D;
}
var kb = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Bb = /* @__PURE__ */ cn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Fb = /* @__PURE__ */ he('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Vb = (t, e) => e(), Gb = /* @__PURE__ */ he('<input type="text" class="svelte-1mj71p3"/>'), jb = (t, e) => e(), qb = /* @__PURE__ */ he('<input type="number" class="svelte-1mj71p3"/>'), zb = /* @__PURE__ */ he("<!> <!>", 1), Wb = /* @__PURE__ */ he("<!> <!>", 1), Xb = /* @__PURE__ */ he('<div class="cell-actions svelte-1mj71p3"></div>'), Kb = /* @__PURE__ */ he("<!> <!>", 1);
function Zb(t, e) {
  Ce(e, !0);
  const n = () => zn(b, "$sortColumn", a), r = () => zn(I, "$sortDirection", a), i = () => zn(g, "$filteredData", a), [a, s] = fr();
  let c = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, sp), u = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => _e([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), v = _e({ name: "", color: "", number: "" }), g = $t([]), b = $t(null), I = $t(null), E = /* @__PURE__ */ fe(() => u().some((x) => x.filter));
  e.store.store.subscribe((x) => {
    d([...x]), A();
  });
  function A() {
    let x = d().filter((T) => u().every((C) => {
      const y = v[C.field], O = C.filterValueGetter ? C.filterValueGetter(T) : T[C.field];
      return y ? C.filterType === "number" ? O == y : O.toString().toLowerCase().includes(y.toLowerCase()) : !0;
    }));
    x = _(x), g.set(x);
  }
  function _(x) {
    let T, C;
    return b.subscribe((y) => T = y), I.subscribe((y) => C = y), !T || !C ? x : x.sort((y, O) => {
      let N = y[T], P = O[T];
      return N == null && (N = ""), P == null && (P = ""), C === "asc" ? N.toString().localeCompare(P.toString()) : P.toString().localeCompare(N.toString());
    });
  }
  function S(x) {
    b.update((T) => {
      if (T === x)
        I.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return I.set("asc"), x;
      return x;
    }), A();
  }
  g.set(d()), Fp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (T) => {
      Ub(T, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(C) {
          c(C);
        }
      });
    },
    children: (T, C) => {
      var y = Kb(), O = K(y);
      Gp(O, {
        children: (P, U) => {
          var pe = Wb(), F = K(pe);
          Fa(F, {
            class: "header-title-row",
            children: (q, $) => {
              var D = ee(), L = K(D);
              jn(L, 17, u, Ii, (V, Ie) => {
                oa(V, {
                  onclick: () => o(Ie).sortable && S(o(Ie).field),
                  get style() {
                    return o(Ie).headerStyle;
                  },
                  children: (be, ce) => {
                    var Se = Fb(), G = ge(Se), J = ge(G), X = ge(J), ue = ye(J, 2);
                    {
                      var we = (Z) => {
                        var te = ee(), He = K(te);
                        {
                          var Le = (qe) => {
                            var $e = ee(), Be = K($e);
                            {
                              var M = (ae) => {
                                var Re = kb();
                                w(ae, Re);
                              }, k = (ae) => {
                                var Re = ee(), ot = K(Re);
                                {
                                  var _t = (gt) => {
                                    var ne = Bb();
                                    w(gt, ne);
                                  };
                                  re(
                                    ot,
                                    (gt) => {
                                      r() === "desc" && gt(_t);
                                    },
                                    !0
                                  );
                                }
                                w(ae, Re);
                              };
                              re(Be, (ae) => {
                                r() === "asc" ? ae(M) : ae(k, !1);
                              });
                            }
                            w(qe, $e);
                          };
                          re(He, (qe) => {
                            n() === o(Ie).field && r() !== null && qe(Le);
                          });
                        }
                        w(Z, te);
                      };
                      re(ue, (Z) => {
                        o(Ie).sortable && Z(we);
                      });
                    }
                    Oe(() => {
                      Ft(Se, `min-width: ${o(Ie).minWidth ?? 0 ?? ""}`), it(X, o(Ie).headerName);
                    }), w(be, Se);
                  },
                  $$slots: { default: !0 }
                });
              }), w(q, D);
            },
            $$slots: { default: !0 }
          });
          var B = ye(F, 2);
          {
            var H = (q) => {
              Fa(q, {
                class: "header-filter-row",
                children: ($, D) => {
                  var L = ee(), V = K(L);
                  jn(V, 17, u, Ii, (Ie, be) => {
                    oa(Ie, {
                      children: (ce, Se) => {
                        var G = ee(), J = K(G);
                        {
                          var X = (ue) => {
                            var we = zb(), Z = K(we);
                            {
                              var te = (qe) => {
                                var $e = Gb();
                                $e.__input = [Vb, A], Oe(() => xr($e, "placeholder", `${f()} ${o(be).headerName}`)), pa($e, () => v[o(be).field], (Be) => v[o(be).field] = Be), w(qe, $e);
                              };
                              re(Z, (qe) => {
                                o(be).filterType === "text" && qe(te);
                              });
                            }
                            var He = ye(Z, 2);
                            {
                              var Le = (qe) => {
                                var $e = qb();
                                $e.__input = [jb, A], Oe(() => xr($e, "placeholder", `${f()} ${o(be).headerName}`)), pa($e, () => v[o(be).field], (Be) => v[o(be).field] = Be), w(qe, $e);
                              };
                              re(He, (qe) => {
                                o(be).filterType === "number" && qe(Le);
                              });
                            }
                            w(ue, we);
                          };
                          re(J, (ue) => {
                            o(be).filter && ue(X);
                          });
                        }
                        w(ce, G);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w($, L);
                },
                $$slots: { default: !0 }
              });
            };
            re(B, (q) => {
              o(E) && q(H);
            });
          }
          w(P, pe);
        },
        $$slots: { default: !0 }
      });
      var N = ye(O, 2);
      qp(N, {
        children: (P, U) => {
          var pe = ee(), F = K(pe);
          {
            var B = (q) => {
              Fa(q, {
                children: ($, D) => {
                  oa($, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (L, V) => {
                      var Ie = Dt();
                      Oe(() => it(Ie, m())), w(L, Ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, H = (q) => {
              var $ = ee(), D = K($);
              jn(D, 1, i, Ii, (L, V) => {
                Fa(L, {
                  children: (Ie, be) => {
                    var ce = ee(), Se = K(ce);
                    jn(Se, 17, u, (G) => G.field, (G, J) => {
                      var X = ee(), ue = K(X);
                      {
                        var we = (te) => {
                          oa(te, {
                            children: (He, Le) => {
                              var qe = Xb();
                              jn(qe, 21, h, Ii, ($e, Be) => {
                                var M = ee(), k = K(M);
                                {
                                  var ae = (ot) => {
                                    ls(ot, {
                                      get content() {
                                        return o(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (_t, gt) => {
                                        {
                                          let ne = /* @__PURE__ */ fe(() => o(Be).disabled(o(V)));
                                          Fm(_t, {
                                            get iconComponent() {
                                              return o(Be).iconComponent;
                                            },
                                            get iconStyles() {
                                              return o(Be).iconStyles;
                                            },
                                            callback: () => o(Be).callback(o(V)),
                                            get disabled() {
                                              return o(ne);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (ot) => {
                                    ls(ot, {
                                      get content() {
                                        return o(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (_t, gt) => {
                                        {
                                          let ne = /* @__PURE__ */ fe(() => o(Be).disabled(o(V)));
                                          Hm(_t, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => o(Be).callback(o(V)),
                                            get disabled() {
                                              return o(ne);
                                            },
                                            children: (de, j) => {
                                              var Y = ee(), Me = K(Y);
                                              {
                                                var lt = (ht) => {
                                                  up(ht, { svgStyles: "margin: unset" });
                                                }, pt = (ht) => {
                                                  var Ht = ee(), hr = K(Ht);
                                                  {
                                                    var dt = (yt) => {
                                                      Dc(yt, { svgStyles: "margin: unset" });
                                                    }, Lt = (yt) => {
                                                      var Tn = ee(), ci = K(Tn);
                                                      {
                                                        var Hn = (Xe) => {
                                                          fp(Xe, { svgStyles: "margin: unset" });
                                                        }, Fe = (Xe) => {
                                                          var Ke = ee(), Ot = K(Ke);
                                                          {
                                                            var fn = (at) => {
                                                              vp(at, { svgStyles: "margin: unset" });
                                                            }, et = (at) => {
                                                              var St = ee(), Ze = K(St);
                                                              {
                                                                var Ct = (Tt) => {
                                                                  bp(Tt, { svgStyles: "margin: unset" });
                                                                }, wn = (Tt) => {
                                                                  var bt = ee(), Rt = K(bt);
                                                                  {
                                                                    var an = (sn) => {
                                                                      yp(sn, { svgStyles: "margin: unset" });
                                                                    }, Nt = (sn) => {
                                                                      var Wt = ee(), Nn = K(Wt);
                                                                      {
                                                                        var Nr = (Vt) => {
                                                                          Ep(Vt, { svgStyles: "margin: unset" });
                                                                        }, on = (Vt) => {
                                                                          gp(Vt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        re(
                                                                          Nn,
                                                                          (Vt) => {
                                                                            o(Be).icon === "delete" ? Vt(Nr) : Vt(on, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      w(sn, Wt);
                                                                    };
                                                                    re(
                                                                      Rt,
                                                                      (sn) => {
                                                                        o(Be).icon === "edit" ? sn(an) : sn(Nt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Tt, bt);
                                                                };
                                                                re(
                                                                  Ze,
                                                                  (Tt) => {
                                                                    o(Be).icon === "remove" ? Tt(Ct) : Tt(wn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(at, St);
                                                            };
                                                            re(
                                                              Ot,
                                                              (at) => {
                                                                o(Be).icon === "find-in-page" ? at(fn) : at(et, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Xe, Ke);
                                                        };
                                                        re(
                                                          ci,
                                                          (Xe) => {
                                                            o(Be).icon === "download" ? Xe(Hn) : Xe(Fe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(yt, Tn);
                                                    };
                                                    re(
                                                      hr,
                                                      (yt) => {
                                                        o(Be).icon === "cancel" ? yt(dt) : yt(Lt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(ht, Ht);
                                                };
                                                re(Me, (ht) => {
                                                  o(Be).icon === "add" ? ht(lt) : ht(pt, !1);
                                                });
                                              }
                                              w(de, Y);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  re(k, (ot) => {
                                    o(Be).iconComponent ? ot(ae) : ot(Re, !1);
                                  });
                                }
                                w($e, M);
                              }), w(He, qe);
                            },
                            $$slots: { default: !0 }
                          });
                        }, Z = (te) => {
                          oa(te, {
                            get numeric() {
                              return o(J).numeric;
                            },
                            get style() {
                              return o(J).cellStyle;
                            },
                            children: (He, Le) => {
                              var qe = ee(), $e = K(qe);
                              {
                                var Be = (k) => {
                                  const ae = /* @__PURE__ */ fe(() => o(J).cellRenderer);
                                  var Re = ee(), ot = K(Re);
                                  li(ot, () => o(ae), (_t, gt) => {
                                    gt(_t, st(
                                      {
                                        get row() {
                                          return o(V);
                                        },
                                        get value() {
                                          return o(V)[o(J).field];
                                        },
                                        get col() {
                                          return o(J);
                                        }
                                      },
                                      () => o(J).cellRendererProps ?? {}
                                    ));
                                  }), w(k, Re);
                                }, M = (k) => {
                                  var ae = ee(), Re = K(ae);
                                  {
                                    var ot = (gt) => {
                                      var ne = Dt();
                                      Oe((de) => it(ne, de), [
                                        () => o(J).valueFormatter(o(V)[o(J).field])
                                      ]), w(gt, ne);
                                    }, _t = (gt) => {
                                      var ne = Dt();
                                      Oe(() => it(ne, o(V)[o(J).field] ?? "")), w(gt, ne);
                                    };
                                    re(
                                      Re,
                                      (gt) => {
                                        o(J).valueFormatter ? gt(ot) : gt(_t, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(k, ae);
                                };
                                re($e, (k) => {
                                  o(J).cellRenderer ? k(Be) : k(M, !1);
                                });
                              }
                              w(He, qe);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        re(ue, (te) => {
                          o(J).field === "actions" ? te(we) : te(Z, !1);
                        });
                      }
                      w(G, X);
                    }), w(Ie, ce);
                  },
                  $$slots: { default: !0 }
                });
              }), w(q, $);
            };
            re(F, (q) => {
              i().length === 0 ? q(B) : q(H, !1);
            });
          }
          w(P, pe);
        },
        $$slots: { default: !0 }
      }), w(T, y);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
pn(["input"]);
function At(t) {
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
function cs(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var La = function() {
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
            for (var c = Pt(s), l = c.next(); !l.done; l = c.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              l && !l.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (At(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Ws ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Pt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              Xl(v);
            } catch (g) {
              a = a ?? [], g instanceof Ws ? a = Wn(Wn([], Cr(a)), Cr(g.errors)) : a.push(g);
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
    n === e ? this._parentage = null : Array.isArray(n) && cs(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && cs(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Hc = La.EMPTY;
function Nc(t) {
  return t instanceof La || t && "closed" in t && At(t.remove) && At(t.add) && At(t.unsubscribe);
}
function Xl(t) {
  At(t) ? t() : t.unsubscribe();
}
var Yb = {
  Promise: void 0
}, Qb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Wn([t, e], Cr(n)));
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
function Za(t) {
  t();
}
var Vo = function(t) {
  nt(e, t);
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
}(La), Jb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ga(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ga(r);
      }
    else
      Ga(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ga(n);
      }
  }, t;
}(), bo = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return At(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new Jb(s), a;
  }
  return e;
}(Vo);
function Ga(t) {
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
function Ts(t) {
  return t;
}
function t_(t) {
  return t.length === 0 ? Ts : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var xn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = r_(e) ? e : new bo(e, n, r);
    return Za(function() {
      var s = i, c = s.operator, l = s.source;
      a.add(c ? c.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
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
        next: function(c) {
          try {
            e(c);
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
  return t && At(t.next) && At(t.error) && At(t.complete);
}
function r_(t) {
  return t && t instanceof Vo || n_(t) && Nc(t);
}
function i_(t) {
  return At(t == null ? void 0 : t.lift);
}
function Yn(t) {
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
function cr(t, e, n, r, i) {
  return new a_(t, e, n, r, i);
}
var a_ = function(t) {
  nt(e, t);
  function e(n, r, i, a, s, c) {
    var l = t.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = c, l._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
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
  nt(e, t);
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
    Za(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Pt(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var l = c.value;
            l.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            c && !c.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    Za(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Za(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, c = i.observers;
    return a || s ? Hc : (this.currentObservers = null, c.push(n), new La(function() {
      r.currentObservers = null, cs(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new xn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Yl(n, r);
  }, e;
}(xn), Yl = function(t) {
  nt(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Hc;
  }, e;
}(_o), o_ = {
  now: function() {
    return Date.now();
  }
}, l_ = function(t) {
  nt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(La), Ql = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Wn([t, e], Cr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, u_ = function(t) {
  nt(e, t);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, cs(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
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
  nt(e, t);
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
  return t && At(t.schedule);
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
  return At(t == null ? void 0 : t.then);
}
function Gc(t) {
  return At(t[Go]);
}
function jc(t) {
  return Symbol.asyncIterator && At(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function qc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function v_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var zc = v_();
function Wc(t) {
  return At(t == null ? void 0 : t[zc]);
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
          return [4, xi(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, xi(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, xi(i)];
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
  return At(t == null ? void 0 : t.getReader);
}
function Yi(t) {
  if (t instanceof xn)
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
  return new xn(function(e) {
    var n = t[Go]();
    if (At(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function g_(t) {
  return new xn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function p_(t) {
  return new xn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Uc);
  });
}
function b_(t) {
  return new xn(function(e) {
    var n, r;
    try {
      for (var i = Pt(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
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
function Zc(t) {
  return new xn(function(e) {
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
    var s, c;
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
          return c = l.sent(), i = { error: c }, [3, 11];
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
function ti(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Yc(t, e) {
  return e === void 0 && (e = 0), Yn(function(n, r) {
    n.subscribe(cr(r, function(i) {
      return ti(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ti(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ti(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Qc(t, e) {
  return e === void 0 && (e = 0), Yn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function I_(t, e) {
  return Yi(t).pipe(Qc(e), Yc(e));
}
function E_(t, e) {
  return Yi(t).pipe(Qc(e), Yc(e));
}
function A_(t, e) {
  return new xn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function S_(t, e) {
  return new xn(function(n) {
    var r;
    return ti(n, e, function() {
      r = t[zc](), ti(n, e, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return At(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Jc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new xn(function(n) {
    ti(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ti(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function x_(t, e) {
  return Jc(Xc(t), e);
}
function C_(t, e) {
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
      return x_(t, e);
  }
  throw qc(t);
}
function $c(t, e) {
  return e ? C_(t, e) : Yi(t);
}
function ed() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Bc(t);
  return $c(t, n);
}
function Yt(t, e) {
  return Yn(function(n, r) {
    var i = 0;
    n.subscribe(cr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function T_(t, e, n, r, i, a, s, c) {
  var l = [], u = 0, d = 0, h = !1, f = function() {
    h && !l.length && !u && e.complete();
  }, m = function(g) {
    return u < r ? v(g) : l.push(g);
  }, v = function(g) {
    u++;
    var b = !1;
    Yi(n(g, d++)).subscribe(cr(e, function(I) {
      e.next(I);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          u--;
          for (var I = function() {
            var E = l.shift();
            s || v(E);
          }; l.length && u < r; )
            I();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(cr(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function ds(t, e, n) {
  return n === void 0 && (n = 1 / 0), At(e) ? ds(function(r, i) {
    return Yt(function(a, s) {
      return e(r, a, i, s);
    })(Yi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Yn(function(r, i) {
    return T_(r, i, t, n);
  }));
}
function w_(t) {
  return t === void 0 && (t = 1 / 0), ds(Ts, t);
}
function td(t, e) {
  return At(e) ? ds(t, e, 1) : ds(t, 1);
}
function L_(t, e) {
  return e === void 0 && (e = d_), Yn(function(n, r) {
    var i = null, a = null, s = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function l() {
      var u = s + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(cr(r, function(u) {
      a = u, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function O_(t, e) {
  return e === void 0 && (e = Ts), t = t ?? R_, Yn(function(n, r) {
    var i, a = !0;
    n.subscribe(cr(r, function(s) {
      var c = e(s);
      (a || !t(i, c)) && (a = !1, i = c, r.next(s));
    }));
  });
}
function R_(t, e) {
  return t === e;
}
function M_(t) {
  return Yn(function(e, n) {
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
  return Yn(function(i, a) {
    w_(r)($c(Wn([i], Cr(t)), n)).subscribe(a);
  });
}
function P_() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return D_.apply(void 0, Wn([], Cr(t)));
}
function H_(t, e) {
  return Yn(function(n, r) {
    var i = null, a = 0, s = !1, c = function() {
      return s && !i && r.complete();
    };
    n.subscribe(cr(r, function(l) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      Yi(t(l, d)).subscribe(i = cr(r, function(h) {
        return r.next(e ? e(l, h, d, u++) : h);
      }, function() {
        i = null, c();
      }));
    }, function() {
      s = !0, c();
    }));
  });
}
function $l(t, e, n) {
  var r = At(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Yn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var c = !0;
    i.subscribe(cr(a, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), a.next(l);
    }, function() {
      var l;
      c = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, l), a.error(l);
    }, function() {
      var l, u;
      c && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : Ts;
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
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = nd(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), fs = Fo(function(t) {
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
    return fs.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(fs.prototype), t;
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
var j_ = Yt(function(t) {
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
  return new xn(function(e) {
    var n, r, i = oe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(H, q) {
          return u.set(q, H);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && g && b) {
      var I = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      I && (h[b] = I);
    }
    var E = X_(s, h), A = oe(oe({}, i), {
      url: l,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, x = t.includeDownloadProgress, T = x === void 0 ? !1 : x, C = t.includeUploadProgress, y = C === void 0 ? !1 : C, O = function(H, q) {
        _.addEventListener(H, function() {
          var $, D = q();
          ($ = S == null ? void 0 : S.error) === null || $ === void 0 || $.call(S, D), e.error(D);
        });
      };
      O("timeout", function() {
        return new U_(_, A);
      }), O("abort", function() {
        return new fs("aborted", _, A);
      });
      var N = function(H, q) {
        return new N_(q, _, A, H + "_" + q.type);
      }, P = function(H, q, $) {
        H.addEventListener(q, function(D) {
          e.next(N($, D));
        });
      };
      y && [Xs, Ks, tu].forEach(function(H) {
        return P(_.upload, H, z_);
      }), S && [Xs, Ks].forEach(function(H) {
        return _.upload.addEventListener(H, function(q) {
          var $;
          return ($ = S == null ? void 0 : S.next) === null || $ === void 0 ? void 0 : $.call(S, q);
        });
      }), T && [Xs, Ks].forEach(function(H) {
        return P(_, H, eu);
      });
      var U = function(H) {
        var q = "ajax error" + (H ? " " + H : "");
        e.error(new fs(q, _, A));
      };
      _.addEventListener("error", function(H) {
        var q;
        (q = S == null ? void 0 : S.error) === null || q === void 0 || q.call(S, H), U();
      }), _.addEventListener(tu, function(H) {
        var q, $, D = _.status;
        if (D < 400) {
          (q = S == null ? void 0 : S.complete) === null || q === void 0 || q.call(S);
          var L = void 0;
          try {
            L = N(eu, H);
          } catch (V) {
            e.error(V);
            return;
          }
          e.next(L), e.complete();
        } else
          ($ = S == null ? void 0 : S.error) === null || $ === void 0 || $.call(S, H), U(D);
      });
    }
    var pe = A.user, F = A.method, B = A.async;
    pe ? _.open(F, l, B, pe, A.password) : _.open(F, l, B), B && (_.timeout = A.timeout, _.responseType = A.responseType), "withCredentials" in _ && (_.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return E ? _.send(E) : _.send(), function() {
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
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${oy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => ed(n).pipe(
      Yt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      td(
        (r) => Hr(r).pipe(
          Yt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Yt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const or = (t) => encodeURIComponent(`${t}`), oy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${or(e)}=${or(r)}`).join("&") : `${or(e)}=${or(n)}`
).join("&"), bi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ly extends sy {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    bi(e, "id", "deleteAllSclFileVersions"), bi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", or(e)).replace("{type}", or(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    bi(e, "id", "retrieveDataResourceByVersion"), bi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", or(e)).replace("{version}", or(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    bi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", or(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    bi(e, "dataResourceSearch", "searchForResources");
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
  constructor(e, n, r, i, a, s, c, l, u) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = s, this.available = c, this.deleted = l, this.location = u;
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
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${vy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => ed(n).pipe(
      Yt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      td(
        (r) => Hr(r).pipe(
          Yt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Yt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Rn = (t) => encodeURIComponent(`${t}`), vy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Rn(e)}=${Rn(r)}`).join("&") : `${Rn(e)}=${Rn(n)}`
).join("&"), rr = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class my extends hy {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    rr(e, "locationId", "assignResourceToLocation"), rr(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    rr(e, "location", "createLocation");
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
    rr(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    rr(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
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
    rr(e, "locationId", "unassignResourceFromLocation"), rr(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    rr(e, "locationId", "updateLocation"), rr(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
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
class Ai {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Ai.instance || (Ai.instance = new Ai()), Ai.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Yt((n) => n || []),
      Yt((n) => n.map((r) => zo.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Yt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Yt(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Yt((n) => n.results),
      Yt(
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
var ar;
class gy {
  constructor() {
    Ye(this, ar, $t([]));
  }
  get store() {
    return Q(this, ar);
  }
  set(e) {
    Q(this, ar).set(e);
  }
  update(e) {
    Q(this, ar).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    Q(this, ar).update((n) => [...n, e]);
  }
  remove(e) {
    Q(this, ar).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return Ju(Q(this, ar)).find((n) => n.uuid === e);
  }
}
ar = new WeakMap();
var py = (t, e, n) => {
  var r;
  return (r = e.onChange) == null ? void 0 : r.call(e, e.row, o(n));
}, by = /* @__PURE__ */ he("<option> </option>"), _y = /* @__PURE__ */ he(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function yy(t, e) {
  Ce(e, !0);
  let n = p(e, "locations", 19, () => []), r = /* @__PURE__ */ me(_e(e.value ?? ""));
  Ae(() => {
    z(r, e.value ?? "", !0);
  }), Ae(() => {
    var l;
    o(r) !== (e.value ?? "") && ((l = e.onChange) == null || l.call(e, e.row, o(r)));
  });
  var i = _y(), a = ge(i);
  a.__change = [py, e, r];
  var s = ge(a);
  s.value = s.__value = "";
  var c = ye(s);
  jn(c, 17, n, (l) => l.value, (l, u) => {
    var d = by(), h = ge(d), f = {};
    Oe(() => {
      it(h, o(u).label), f !== (f = o(u).value) && (d.value = (d.__value = o(u).value) ?? "");
    }), w(l, d);
  }), Hf(a, () => o(r), (l) => z(r, l)), w(t, i), Te();
}
pn(["change"]);
jv({ en: _m, de: im });
var Iy = /* @__PURE__ */ he('<div class="app-container svelte-1lw4l1e"><!> <!></div> <!>', 1);
function Ey(t, e) {
  Ce(e, !0);
  const n = () => zn(Gv, "$_", r), [r, i] = fr(), a = Ai.getInstance();
  let s = /* @__PURE__ */ me(_e([])), c = "", l = /* @__PURE__ */ me(!0), u = /* @__PURE__ */ me("");
  const d = new _o(), f = new _o().pipe(P_(d.pipe(L_(200)))).pipe(
    Yt(() => I(o(m))),
    O_((y, O) => JSON.stringify(y) === JSON.stringify(O)),
    $l(() => {
      z(l, !0);
    }),
    H_((y) => a.searchResources(y).pipe(
      $l((O) => {
        v.set(O.filter((N) => N.location !== c));
      }),
      M_(() => {
        z(l, !1);
      })
    ))
  );
  ct(() => {
    const y = f.subscribe();
    return a.getLocations().subscribe({
      next: (O) => {
        z(s, O.map((N) => ({ label: N.name, value: N.uuid })), !0), z(m, o(
          m
          // populate location filter options
        ).map((N) => N.key === "location" ? { ...N, options: o(s) } : N), !0);
      },
      error: (O) => {
        console.error("Error loading locations:", O), va.error("Failed to load locations.");
      }
    }), d.next(), () => y.unsubscribe();
  });
  let m = /* @__PURE__ */ me(_e([
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
    var O;
    return !o(s) || !y ? y || "" : ((O = o(s).find((N) => N.value === y)) == null ? void 0 : O.label) ?? y;
  }
  function I(y) {
    const O = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return y.forEach((N) => {
      if (N.value) {
        if (N.type === "date") {
          const P = new Date(N.value);
          N.key === "from" && (O.from = P.toISOString()), N.key === "to" && (P.setHours(23, 59, 59, 999), O.to = P.toISOString());
          return;
        }
        N.key in O && (O[N.key] = N.value);
      }
    }), o(u) && o(u).trim() !== "" && (O.name = o(u).trim()), O;
  }
  function E(y, O) {
    const N = y.location, P = O || null;
    if (N === P)
      return;
    const U = { ...y, location: P };
    v.update(U), (P ? a.assignResourceToLocation(P, y.uuid) : a.unassignResourceFromLocation(N ?? "", y.uuid)).subscribe({
      next: () => {
        d.next(), va.success("Resource location updated successfully.");
      },
      error: () => {
        va.error("Failed to update resource location.");
        const F = { ...y, location: N };
        v.update(F);
      }
    });
  }
  let A = /* @__PURE__ */ fe(() => [
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
        onChange: E
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
  Ae(() => {
  });
  var _ = Iy(), S = K(_), x = ge(S);
  Hb(x, {
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
      return o(u);
    },
    set searchText(y) {
      z(u, y, !0);
    }
  });
  var T = ye(x, 2);
  {
    let y = /* @__PURE__ */ fe(() => !o(l)), O = /* @__PURE__ */ fe(() => n()("search"));
    Zb(T, {
      get columnDefs() {
        return o(A);
      },
      get loadingDone() {
        return o(y);
      },
      get store() {
        return v;
      },
      get searchInputLabel() {
        return o(O);
      }
    });
  }
  var C = ye(S, 2);
  gb(C, {}), w(t, _), Te(), i();
}
const ad = "location-viewer", sd = "0.0.1";
var Ay = /* @__PURE__ */ he('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Sy(t, e) {
  Ce(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = Ay(), i = K(r);
  {
    var a = (l) => {
      Ey(l, {});
    };
    re(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = ye(i, 2), c = ye(s, 2);
  Oe(() => {
    cl(s, ad), cl(c, sd);
  }), w(t, r), Te();
}
var Mi;
class My extends HTMLElement {
  constructor() {
    super();
    Ye(this, Mi);
    De(this, Mi, /* @__PURE__ */ me(_e({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(Q(this, Mi));
  }
  set props(n) {
    z(Q(this, Mi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, xf(Sy, { target: this.shadowRoot, props: this.props });
    const n = xy();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Mi = new WeakMap();
function xy() {
  const t = `${ad}-v${sd}-style`, e = Cy(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Cy() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  My as default
};
