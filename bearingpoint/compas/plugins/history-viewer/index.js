var Fd = Object.defineProperty;
var dl = (t) => {
  throw TypeError(t);
};
var kd = (t, e, n) => e in t ? Fd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var _i = (t, e, n) => kd(t, typeof e != "symbol" ? e + "" : e, n), Gs = (t, e, n) => e.has(t) || dl("Cannot " + n);
var ne = (t, e, n) => (Gs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Je = (t, e, n) => e.has(t) ? dl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Me = (t, e, n, r) => (Gs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), zt = (t, e, n) => (Gs(t, e, "access private method"), n);
const Ht = Symbol(), Bd = "http://www.w3.org/1999/xhtml", Vd = "http://www.w3.org/2000/svg", Gd = "@attach", Tu = !1;
var Ts = Array.isArray, jd = Array.prototype.indexOf, Uo = Array.from, ss = Object.defineProperty, xr = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, qd = Object.prototype, zd = Array.prototype, Fo = Object.getPrototypeOf, fl = Object.isExtensible;
function xi(t) {
  return typeof t == "function";
}
const he = () => {
};
function Wd(t) {
  return t();
}
function os(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ou() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, ko = 4, ws = 8, Lr = 16, fr = 32, ui = 64, Bo = 128, xn = 256, ls = 512, Xt = 1024, gn = 2048, Rr = 4096, Hn = 8192, ci = 16384, Os = 32768, Dr = 65536, hl = 1 << 17, Xd = 1 << 18, Yi = 1 << 19, Lu = 1 << 20, co = 1 << 21, Ls = 1 << 22, ti = 1 << 23, zn = Symbol("$state"), Ru = Symbol("legacy props"), Kd = Symbol(""), Ti = new class extends Error {
  constructor() {
    super(...arguments);
    _i(this, "name", "StaleReactionError");
    _i(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Vo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $d() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ef(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function af() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function sf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function of() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let lf = !1;
function Du(t) {
  return t === this.v;
}
function Go(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Mu(t) {
  return !Go(t, this.v);
}
let Qi = !1, uf = !1;
function cf() {
  Qi = !0;
}
let st = null;
function Vi(t) {
  st = t;
}
function ve(t) {
  return (
    /** @type {T} */
    Hu().get(t)
  );
}
function le(t, e) {
  return Hu().set(t, e), e;
}
function xe(t, e = !1, n) {
  st = {
    p: st,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    st
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Qu(r);
  }
  return t !== void 0 && (e.x = t), st = e.p, t ?? /** @type {T} */
  {};
}
function Da() {
  return !Qi || st !== null && st.l === null;
}
function Hu(t) {
  return st === null && Vo(), st.c ?? (st.c = new Map(df(st) || void 0));
}
function df(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Zr = [];
function Pu() {
  var t = Zr;
  Zr = [], os(t);
}
function dr(t) {
  if (Zr.length === 0 && !ba) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Pu();
    });
  }
  Zr.push(t);
}
function ff() {
  for (; Zr.length > 0; )
    Pu();
}
const hf = /* @__PURE__ */ new WeakMap();
function Nu(t) {
  var e = Ve;
  if (e === null)
    return Be.f |= ti, t;
  if (e.f & Os)
    Gi(t, e);
  else {
    if (!(e.f & Bo))
      throw !e.parent && t instanceof Error && Uu(t), t;
    e.b.error(t);
  }
}
function Gi(t, e) {
  for (; e !== null; ) {
    if (e.f & Bo)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Uu(t), t;
}
function Uu(t) {
  const e = hf.get(t);
  e && (ss(t, "message", {
    value: e.message
  }), ss(t, "stack", {
    value: e.stack
  }));
}
const Ga = /* @__PURE__ */ new Set();
let it = null, $a = null, Bt = null, fo = /* @__PURE__ */ new Set(), qn = [], Rs = null, ho = !1, ba = !1;
var Pi, Ni, Yr, Oa, Ui, Fi, Qr, ki, La, Ra, Tn, vo, es, mo;
const As = class As {
  constructor() {
    Je(this, Tn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    _i(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Je(this, Pi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Je(this, Ni, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Je(this, Yr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Je(this, Oa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Je(this, Ui, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Je(this, Fi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Je(this, Qr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Je(this, ki, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Je(this, La, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Je(this, Ra, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    _i(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], $a = null, this.apply();
    for (const s of e)
      zt(this, Tn, vo).call(this, s);
    if (ne(this, Yr) === 0) {
      var n = Bt;
      zt(this, Tn, mo).call(this);
      var r = ne(this, Fi), i = ne(this, Qr);
      Me(this, Fi, []), Me(this, Qr, []), Me(this, ki, []), $a = this, it = null, Bt = n, vl(r), vl(i), $a = null, (a = ne(this, Oa)) == null || a.resolve();
    } else
      zt(this, Tn, es).call(this, ne(this, Fi)), zt(this, Tn, es).call(this, ne(this, Qr)), zt(this, Tn, es).call(this, ne(this, ki));
    Bt = null;
    for (const s of ne(this, Ui))
      Ea(s);
    Me(this, Ui, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ne(this, Pi).has(e) || ne(this, Pi).set(e, n), this.current.set(e, e.v), Bt == null || Bt.set(e, e.v);
  }
  activate() {
    it = this;
  }
  deactivate() {
    it = null, Bt = null;
  }
  flush() {
    if (qn.length > 0) {
      if (this.activate(), Fu(), it !== null && it !== this)
        return;
    } else ne(this, Yr) === 0 && zt(this, Tn, mo).call(this);
    this.deactivate();
    for (const e of fo)
      if (fo.delete(e), e(), it !== null)
        break;
  }
  increment() {
    Me(this, Yr, ne(this, Yr) + 1);
  }
  decrement() {
    Me(this, Yr, ne(this, Yr) - 1);
    for (const e of ne(this, La))
      en(e, gn), si(e);
    for (const e of ne(this, Ra))
      en(e, Rr), si(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Ni).add(e);
  }
  settled() {
    return (ne(this, Oa) ?? Me(this, Oa, Ou())).promise;
  }
  static ensure() {
    if (it === null) {
      const e = it = new As();
      Ga.add(it), ba || As.enqueue(() => {
        it === e && e.flush();
      });
    }
    return it;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    dr(e);
  }
  apply() {
  }
};
Pi = new WeakMap(), Ni = new WeakMap(), Yr = new WeakMap(), Oa = new WeakMap(), Ui = new WeakMap(), Fi = new WeakMap(), Qr = new WeakMap(), ki = new WeakMap(), La = new WeakMap(), Ra = new WeakMap(), Tn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
vo = function(e) {
  var c;
  e.f ^= Xt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (fr | ui)) !== 0, a = i && (r & Xt) !== 0, s = a || (r & Hn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Xt : r & ko ? ne(this, Qr).push(n) : r & Xt || (r & Ls && ((c = n.b) != null && c.is_pending()) ? ne(this, Ui).push(n) : Hs(n) && (n.f & Lr && ne(this, ki).push(n), Ea(n)));
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
es = function(e) {
  for (const n of e)
    (n.f & gn ? ne(this, La) : ne(this, Ra)).push(n), en(n, Xt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
mo = function() {
  var e;
  for (const n of ne(this, Ni))
    n();
  if (ne(this, Ni).clear(), Ga.size > 1) {
    ne(this, Pi).clear();
    let n = !0;
    for (const r of Ga) {
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
          ku(s, a);
        if (qn.length > 0) {
          it = r, r.apply();
          for (const s of qn)
            zt(e = r, Tn, vo).call(e, s);
          qn = [], r.deactivate();
        }
      }
    }
    it = null;
  }
  Ga.delete(this);
};
let lr = As;
function vf(t) {
  var e = ba;
  ba = !0;
  try {
    for (var n; ; ) {
      if (ff(), qn.length === 0 && (it == null || it.flush(), qn.length === 0))
        return Rs = null, /** @type {T} */
        n;
      Fu();
    }
  } finally {
    ba = e;
  }
}
function Fu() {
  var t = Di;
  ho = !0;
  try {
    var e = 0;
    for (pl(!0); qn.length > 0; ) {
      var n = lr.ensure();
      if (e++ > 1e3) {
        var r, i;
        mf();
      }
      n.process(qn), Tr.clear();
    }
  } finally {
    ho = !1, pl(t), Rs = null;
  }
}
function mf() {
  try {
    $d();
  } catch (t) {
    Gi(t, Rs);
  }
}
let rr = null;
function vl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Hn)) && Hs(r) && (rr = [], Ea(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ec(r) : r.fn = null), (rr == null ? void 0 : rr.length) > 0)) {
        Tr.clear();
        for (const i of rr)
          Ea(i);
        rr = [];
      }
    }
    rr = null;
  }
}
function ku(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? ku(
        /** @type {Derived} */
        n,
        e
      ) : r & (Ls | Lr) && Bu(n, e) && (en(n, gn), si(
        /** @type {Effect} */
        n
      ));
    }
}
function Bu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && Bu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function si(t) {
  for (var e = Rs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ho && e === Ve && n & Lr)
      return;
    if (n & (ui | fr)) {
      if (!(n & Xt)) return;
      e.f ^= Xt;
    }
  }
  qn.push(e);
}
function gf(t) {
  let e = 0, n = oi(0), r;
  return () => {
    Df() && (o(n), Pa(() => (e === 0 && (r = Nn(() => t(() => _a(n)))), e += 1, () => {
      dr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(n));
      });
    })));
  };
}
var pf = Dr | Yi | Bo;
function bf(t, e, n) {
  new _f(t, e, n);
}
var Rn, An, No, Vn, Jr, Gn, Cn, on, jn, yr, $r, Ir, ei, Er, Cs, xs, tn, yf, If, ts, ns, go;
class _f {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Je(this, tn);
    /** @type {Boundary | null} */
    _i(this, "parent");
    Je(this, Rn, !1);
    /** @type {TemplateNode} */
    Je(this, An);
    /** @type {TemplateNode | null} */
    Je(this, No, null);
    /** @type {BoundaryProps} */
    Je(this, Vn);
    /** @type {((anchor: Node) => void)} */
    Je(this, Jr);
    /** @type {Effect} */
    Je(this, Gn);
    /** @type {Effect | null} */
    Je(this, Cn, null);
    /** @type {Effect | null} */
    Je(this, on, null);
    /** @type {Effect | null} */
    Je(this, jn, null);
    /** @type {DocumentFragment | null} */
    Je(this, yr, null);
    Je(this, $r, 0);
    Je(this, Ir, 0);
    Je(this, ei, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Je(this, Er, null);
    Je(this, Cs, () => {
      ne(this, Er) && ji(ne(this, Er), ne(this, $r));
    });
    Je(this, xs, gf(() => (Me(this, Er, oi(ne(this, $r))), () => {
      Me(this, Er, null);
    })));
    Me(this, An, e), Me(this, Vn, n), Me(this, Jr, r), this.parent = /** @type {Effect} */
    Ve.b, Me(this, Rn, !!ne(this, Vn).pending), Me(this, Gn, Hr(() => {
      Ve.b = this;
      {
        try {
          Me(this, Cn, Wt(() => r(ne(this, An))));
        } catch (i) {
          this.error(i);
        }
        ne(this, Ir) > 0 ? zt(this, tn, ns).call(this) : Me(this, Rn, !1);
      }
    }, pf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, Rn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, Vn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    zt(this, tn, go).call(this, e), Me(this, $r, ne(this, $r) + e), fo.add(ne(this, Cs));
  }
  get_effect_pending() {
    return ne(this, xs).call(this), o(
      /** @type {Source<number>} */
      ne(this, Er)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ne(this, Vn).onerror;
    let r = ne(this, Vn).failed;
    if (ne(this, ei) || !n && !r)
      throw e;
    ne(this, Cn) && (Vt(ne(this, Cn)), Me(this, Cn, null)), ne(this, on) && (Vt(ne(this, on)), Me(this, on, null)), ne(this, jn) && (Vt(ne(this, jn)), Me(this, jn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        of();
        return;
      }
      i = !0, a && af(), lr.ensure(), Me(this, $r, 0), ne(this, jn) !== null && wr(ne(this, jn), () => {
        Me(this, jn, null);
      }), Me(this, Rn, this.has_pending_snippet()), Me(this, Cn, zt(this, tn, ts).call(this, () => (Me(this, ei, !1), Wt(() => ne(this, Jr).call(this, ne(this, An)))))), ne(this, Ir) > 0 ? zt(this, tn, ns).call(this) : Me(this, Rn, !1);
    };
    var u = Be;
    try {
      ln(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Gi(l, ne(this, Gn) && ne(this, Gn).parent);
    } finally {
      ln(u);
    }
    r && dr(() => {
      Me(this, jn, zt(this, tn, ts).call(this, () => {
        Me(this, ei, !0);
        try {
          return Wt(() => {
            r(
              ne(this, An),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Gi(
            l,
            /** @type {Effect} */
            ne(this, Gn).parent
          ), null;
        } finally {
          Me(this, ei, !1);
        }
      }));
    });
  }
}
Rn = new WeakMap(), An = new WeakMap(), No = new WeakMap(), Vn = new WeakMap(), Jr = new WeakMap(), Gn = new WeakMap(), Cn = new WeakMap(), on = new WeakMap(), jn = new WeakMap(), yr = new WeakMap(), $r = new WeakMap(), Ir = new WeakMap(), ei = new WeakMap(), Er = new WeakMap(), Cs = new WeakMap(), xs = new WeakMap(), tn = new WeakSet(), yf = function() {
  try {
    Me(this, Cn, Wt(() => ne(this, Jr).call(this, ne(this, An))));
  } catch (e) {
    this.error(e);
  }
  Me(this, Rn, !1);
}, If = function() {
  const e = ne(this, Vn).pending;
  e && (Me(this, on, Wt(() => e(ne(this, An)))), lr.enqueue(() => {
    Me(this, Cn, zt(this, tn, ts).call(this, () => (lr.ensure(), Wt(() => ne(this, Jr).call(this, ne(this, An)))))), ne(this, Ir) > 0 ? zt(this, tn, ns).call(this) : (wr(
      /** @type {Effect} */
      ne(this, on),
      () => {
        Me(this, on, null);
      }
    ), Me(this, Rn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ts = function(e) {
  var n = Ve, r = Be, i = st;
  Xn(ne(this, Gn)), ln(ne(this, Gn)), Vi(ne(this, Gn).ctx);
  try {
    return e();
  } catch (a) {
    return Nu(a), null;
  } finally {
    Xn(n), ln(r), Vi(i);
  }
}, ns = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, Vn).pending
  );
  ne(this, Cn) !== null && (Me(this, yr, document.createDocumentFragment()), Ef(ne(this, Cn), ne(this, yr))), ne(this, on) === null && Me(this, on, Wt(() => e(ne(this, An))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
go = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && zt(n = this.parent, tn, go).call(n, e);
    return;
  }
  Me(this, Ir, ne(this, Ir) + e), ne(this, Ir) === 0 && (Me(this, Rn, !1), ne(this, on) && wr(ne(this, on), () => {
    Me(this, on, null);
  }), ne(this, yr) && (ne(this, An).before(ne(this, yr)), Me(this, yr, null)), dr(() => {
    lr.ensure().flush();
  }));
};
function Ef(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(n)
    );
    e.append(n), n = i;
  }
}
function Vu(t, e, n) {
  const r = Da() ? Ma : jo;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = it, a = (
    /** @type {Effect} */
    Ve
  ), s = Sf();
  Promise.all(e.map((u) => /* @__PURE__ */ Af(u))).then((u) => {
    s();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ci || Gi(l, a);
    }
    i == null || i.deactivate(), po();
  }).catch((u) => {
    Gi(u, a);
  });
}
function Sf() {
  var t = Ve, e = Be, n = st, r = it;
  return function() {
    Xn(t), ln(e), Vi(n), r == null || r.activate();
  };
}
function po() {
  Xn(null), ln(null), Vi(null);
}
// @__NO_SIDE_EFFECTS__
function Ma(t) {
  var e = nn | gn, n = Be !== null && Be.f & nn ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ve === null || n !== null && n.f & xn ? e |= xn : Ve.f |= Yi, {
    ctx: st,
    deps: null,
    effects: null,
    equals: Du,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Af(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && Zd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = oi(
    /** @type {V} */
    Ht
  ), s = !Be, u = /* @__PURE__ */ new Map();
  return Pf(() => {
    var f;
    var l = Ou();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(po);
    } catch (m) {
      l.reject(m), po();
    }
    var c = (
      /** @type {Batch} */
      it
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ti), u.delete(c), u.set(c, l)));
    const h = (m, v = void 0) => {
      if (d || c.activate(), v)
        v !== Ti && (a.f |= ti, ji(a, v));
      else {
        a.f & ti && (a.f ^= ti), ji(a, m);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Ti);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), Ds(() => {
    for (const l of u.values())
      l.reject(Ti);
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
function _e(t) {
  const e = /* @__PURE__ */ Ma(t);
  return rc(e), e;
}
// @__NO_SIDE_EFFECTS__
function jo(t) {
  const e = /* @__PURE__ */ Ma(t);
  return e.equals = Mu, e;
}
function Gu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Vt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Cf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & nn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function qo(t) {
  var e, n = Ve;
  Xn(Cf(t));
  try {
    Gu(t), e = oc(t);
  } finally {
    Xn(n);
  }
  return e;
}
function ju(t) {
  var e = qo(t);
  if (t.equals(e) || (t.v = e, t.wv = ac()), !fi)
    if (Bt !== null)
      Bt.set(t, t.v);
    else {
      var n = (Ar || t.f & xn) && t.deps !== null ? Rr : Xt;
      en(t, n);
    }
}
const Tr = /* @__PURE__ */ new Map();
function oi(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Du,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ie(t, e) {
  const n = oi(t);
  return rc(n), n;
}
// @__NO_SIDE_EFFECTS__
function qu(t, e = !1, n = !0) {
  var i;
  const r = oi(t);
  return e || (r.equals = Mu), Qi && n && st !== null && st.l !== null && ((i = st.l).s ?? (i.s = [])).push(r), r;
}
function Y(t, e, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Dn || Be.f & hl) && Da() && Be.f & (nn | Lr | Ls | hl) && !($t != null && $t.includes(t)) && rf();
  let r = n ? Ce(e) : e;
  return ji(t, r);
}
function ji(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Tr.set(t, e) : Tr.set(t, n), t.v = e;
    var r = lr.ensure();
    r.capture(t, n), t.f & nn && (t.f & gn && qo(
      /** @type {Derived} */
      t
    ), en(t, t.f & xn ? Rr : Xt)), t.wv = ac(), zu(t, gn), Da() && Ve !== null && Ve.f & Xt && !(Ve.f & (fr | ui)) && (Sn === null ? Ff([t]) : Sn.push(t));
  }
  return e;
}
function _a(t) {
  Y(t, t.v + 1);
}
function zu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Da(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], u = s.f;
      if (!(!r && s === Ve)) {
        var l = (u & gn) === 0;
        l && en(s, e), u & nn ? zu(
          /** @type {Derived} */
          s,
          Rr
        ) : l && (u & Lr && rr !== null && rr.push(
          /** @type {Effect} */
          s
        ), si(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ce(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Fo(t);
  if (e !== qd && e !== zd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ts(t), i = /* @__PURE__ */ Ie(0), a = ni, s = (u) => {
    if (ni === a)
      return u();
    var l = Be, c = ni;
    ln(null), _l(a);
    var d = u();
    return ln(l), _l(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ie(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && tf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ Ie(c.value);
          return n.set(l, h), h;
        }) : Y(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ Ie(Ht));
            n.set(l, d), _a(i);
          }
        } else
          Y(c, Ht), _a(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === zn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (m = xr(u, l)) != null && m.writable) && (d = s(() => {
          var v = Ce(h ? u[l] : Ht), p = /* @__PURE__ */ Ie(v);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Ht ? void 0 : f;
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
          if (h !== void 0 && f !== Ht)
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
        if (l === zn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ht || Reflect.has(u, l);
        if (c !== void 0 || Ve !== null && (!d || (f = xr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? Ce(u[l]) : Ht, v = /* @__PURE__ */ Ie(m);
            return v;
          }), n.set(l, c));
          var h = o(c);
          if (h === Ht)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var A;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? Y(v, Ht) : m in u && (v = s(() => /* @__PURE__ */ Ie(Ht)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (A = xr(u, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ Ie(void 0)), Y(h, Ce(c)), n.set(l, h));
        else {
          f = h.v !== Ht;
          var p = s(() => Ce(c));
          Y(h, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= I.v && Y(I, E + 1);
          }
          _a(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ht;
        });
        for (var [c, d] of n)
          d.v !== Ht && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        nf();
      }
    }
  );
}
function ml(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function xf(t, e) {
  return Object.is(ml(t), ml(e));
}
var us, zo, Wu, Xu, Ku;
function Tf() {
  if (us === void 0) {
    us = window, zo = document, Wu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Xu = xr(e, "firstChild").get, Ku = xr(e, "nextSibling").get, fl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), fl(n) && (n.__t = void 0);
  }
}
function Mr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function qi(t) {
  return Xu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  return Ku.call(t);
}
function de(t, e) {
  return /* @__PURE__ */ qi(t);
}
function W(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ qi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ha(n) : n;
  }
}
function ge(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ha(r);
  return r;
}
function wf(t) {
  t.textContent = "";
}
function Wo() {
  return !1;
}
function Of(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, dr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let gl = !1;
function Lf() {
  gl || (gl = !0, document.addEventListener(
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
function Ji(t) {
  var e = Be, n = Ve;
  ln(null), Xn(null);
  try {
    return t();
  } finally {
    ln(e), Xn(n);
  }
}
function Zu(t, e, n, r = n) {
  t.addEventListener(e, () => Ji(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Lf();
}
function Yu(t) {
  Ve === null && Be === null && Jd(), Be !== null && Be.f & xn && Ve === null && Qd(), fi && Yd();
}
function Rf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kn(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Hn && (t |= Hn);
  var a = {
    ctx: st,
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
      Ea(a), a.f |= Os;
    } catch (l) {
      throw Vt(a), l;
    }
  else e !== null && si(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Yi) && (s = s.first), s !== null && (s.parent = i, i !== null && Rf(s, i), Be !== null && Be.f & nn && !(t & ui))) {
      var u = (
        /** @type {Derived} */
        Be
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Df() {
  return Be !== null && !Dn;
}
function Ds(t) {
  const e = Kn(ws, null, !1);
  return en(e, Xt), e.teardown = t, e;
}
function we(t) {
  Yu();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !Be && (e & fr) !== 0 && (e & Os) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Qu(t);
}
function Qu(t) {
  return Kn(ko | Lu, t, !1);
}
function Mf(t) {
  return Yu(), Kn(ws | Lu, t, !0);
}
function Hf(t) {
  lr.ensure();
  const e = Kn(ui | Yi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? wr(e, () => {
      Vt(e), r(void 0);
    }) : (Vt(e), r(void 0));
  });
}
function di(t) {
  return Kn(ko, t, !1);
}
function Pf(t) {
  return Kn(Ls | Yi, t, !0);
}
function Pa(t, e = 0) {
  return Kn(ws | e, t, !0);
}
function Le(t, e = [], n = []) {
  Vu(e, n, (r) => {
    Kn(ws, () => t(...r.map(o)), !0);
  });
}
function Hr(t, e = 0) {
  var n = Kn(Lr | e, t, !0);
  return n;
}
function Wt(t, e = !0) {
  return Kn(fr | Yi, t, !0, e);
}
function Ju(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = Be;
    bl(!0), ln(null);
    try {
      e.call(null);
    } finally {
      bl(n), ln(r);
    }
  }
}
function $u(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ji(() => {
      i.abort(Ti);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : Vt(n, e), n = r;
  }
}
function Nf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & fr || Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || t.f & Xd) && t.nodes_start !== null && t.nodes_end !== null && (Uf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), $u(t, e && !n), cs(t, 0), en(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Ju(t);
  var i = t.parent;
  i !== null && i.first !== null && ec(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Uf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(t)
    );
    t.remove(), t = n;
  }
}
function ec(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function wr(t, e) {
  var n = [];
  Xo(t, n, !0), tc(n, () => {
    Vt(t), e && e();
  });
}
function tc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Xo(t, e, n) {
  if (!(t.f & Hn)) {
    if (t.f ^= Hn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Dr) !== 0 || (r.f & fr) !== 0;
      Xo(r, e, a ? n : !1), r = i;
    }
  }
}
function Ms(t) {
  nc(t, !0);
}
function nc(t, e) {
  if (t.f & Hn) {
    t.f ^= Hn, t.f & Xt || (en(t, gn), si(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Dr) !== 0 || (n.f & fr) !== 0;
      nc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Di = !1;
function pl(t) {
  Di = t;
}
let fi = !1;
function bl(t) {
  fi = t;
}
let Be = null, Dn = !1;
function ln(t) {
  Be = t;
}
let Ve = null;
function Xn(t) {
  Ve = t;
}
let $t = null;
function rc(t) {
  Be !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Qt = null, vn = 0, Sn = null;
function Ff(t) {
  Sn = t;
}
let ic = 1, Ia = 0, ni = Ia;
function _l(t) {
  ni = t;
}
let Ar = !1;
function ac() {
  return ++ic;
}
function Hs(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & Rr) {
    var n = t.deps, r = (e & xn) !== 0;
    if (n !== null) {
      var i, a, s = (e & ls) !== 0, u = r && Ve !== null && !Ar, l = n.length;
      if ((s || u) && (Ve === null || !(Ve.f & ci))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ls), u && d !== null && !(d.f & xn) && (c.f ^= xn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Hs(
          /** @type {Derived} */
          a
        ) && ju(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !Ar) && en(t, Xt);
  }
  return !1;
}
function sc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? sc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, gn) : a.f & Xt && en(a, Rr), si(
        /** @type {Effect} */
        a
      ));
    }
}
function oc(t) {
  var p;
  var e = Qt, n = vn, r = Sn, i = Be, a = Ar, s = $t, u = st, l = Dn, c = ni, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, vn = 0, Sn = null, Ar = (d & xn) !== 0 && (Dn || !Di || Be === null), Be = d & (fr | ui) ? null : t, $t = null, Vi(t.ctx), Dn = !1, ni = ++Ia, t.ac !== null && (Ji(() => {
    t.ac.abort(Ti);
  }), t.ac = null);
  try {
    t.f |= co;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Qt !== null) {
      var v;
      if (cs(t, vn), m !== null && vn > 0)
        for (m.length = vn + Qt.length, v = 0; v < Qt.length; v++)
          m[vn + v] = Qt[v];
      else
        t.deps = m = Qt;
      if (!Ar || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = vn; v < m.length; v++)
          ((p = m[v]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && vn < m.length && (cs(t, vn), m.length = vn);
    if (Da() && Sn !== null && !Dn && m !== null && !(t.f & (nn | Rr | gn)))
      for (v = 0; v < /** @type {Source[]} */
      Sn.length; v++)
        sc(
          Sn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ia++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), t.f & ti && (t.f ^= ti), f;
  } catch (b) {
    return Nu(b);
  } finally {
    t.f ^= co, Qt = e, vn = n, Sn = r, Be = i, Ar = a, $t = s, Vi(u), Dn = l, ni = c;
  }
}
function kf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = jd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & nn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && (en(e, Rr), e.f & (xn | ls) || (e.f ^= ls), Gu(
    /** @type {Derived} **/
    e
  ), cs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function cs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      kf(t, n[r]);
}
function Ea(t) {
  var e = t.f;
  if (!(e & ci)) {
    en(t, Xt);
    var n = Ve, r = Di;
    Ve = t, Di = !0;
    try {
      e & Lr ? Nf(t) : $u(t), Ju(t);
      var i = oc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ic;
      var a;
      Tu && uf && t.f & gn && t.deps;
    } finally {
      Di = r, Ve = n;
    }
  }
}
async function lc() {
  await Promise.resolve(), vf();
}
function o(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Be !== null && !Dn) {
    var r = Ve !== null && (Ve.f & ci) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Be.deps;
      if (Be.f & co)
        t.rv < Ia && (t.rv = Ia, Qt === null && i !== null && i[vn] === t ? vn++ : Qt === null ? Qt = [t] : (!Ar || !Qt.includes(t)) && Qt.push(t));
      else {
        (Be.deps ?? (Be.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Be] : a.includes(Be) || a.push(Be);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), u = s.parent;
    u !== null && !(u.f & xn) && (s.f ^= xn);
  }
  if (fi) {
    if (Tr.has(t))
      return Tr.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Xt) && s.reactions !== null || uc(s)) && (l = qo(s)), Tr.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Bt != null && Bt.has(s))
      return Bt.get(s);
    Hs(s) && ju(s);
  }
  if (Bt != null && Bt.has(t))
    return Bt.get(t);
  if (t.f & ti)
    throw t.v;
  return t.v;
}
function uc(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Tr.has(e) || e.f & nn && uc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Nn(t) {
  var e = Dn;
  try {
    return Dn = !0, t();
  } finally {
    Dn = e;
  }
}
const Bf = -7169;
function en(t, e) {
  t.f = t.f & Bf | e;
}
function cc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (zn in t)
      bo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && bo(n);
      }
  }
}
function bo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        bo(t[r], e);
      } catch {
      }
    const n = Fo(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wu(n);
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
const dc = /* @__PURE__ */ new Set(), _o = /* @__PURE__ */ new Set();
function Ko(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Ji(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? dr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Vf(t, e, n, r = {}) {
  var i = Ko(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ur(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = Ko(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ds(() => {
    e.removeEventListener(t, s, a);
  });
}
function On(t) {
  for (var e = 0; e < t.length; e++)
    dc.add(t[e]);
  for (var n of _o)
    n(t);
}
let yl = null;
function ga(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  yl = t;
  var s = 0, u = yl === t && t.__root;
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
    ss(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Be, h = Ve;
    ln(null), Xn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Ts(p)) {
              var [b, ...I] = p;
              b.apply(a, [t, ...I]);
            } else
              p.call(a, t);
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
      t.__root = e, delete t.currentTarget, ln(d), Xn(h);
    }
  }
}
function fc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function zi(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function fe(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = fc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ qi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Wu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qi(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      zi(u, l);
    } else
      zi(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Gf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        fc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ qi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return zi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ct(t, e) {
  return /* @__PURE__ */ Gf(t, e, "svg");
}
function Et(t = "") {
  {
    var e = Mr(t + "");
    return zi(e, e), e;
  }
}
function $() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Mr();
  return t.append(e, n), zi(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function jf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const qf = [
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
function zf(t) {
  return qf.includes(t);
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
function Xf(t) {
  return t = t.toLowerCase(), Wf[t] ?? t;
}
const Kf = ["touchstart", "touchmove"];
function Zf(t) {
  return Kf.includes(t);
}
let ds = !0;
function Il(t) {
  ds = t;
}
function Ye(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Yf(t, e) {
  return Qf(t, e);
}
const yi = /* @__PURE__ */ new Map();
function Qf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Tf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!u.has(m)) {
        u.add(m);
        var v = Zf(m);
        e.addEventListener(m, ga, { passive: v });
        var p = yi.get(m);
        p === void 0 ? (document.addEventListener(m, ga, { passive: v }), yi.set(m, 1)) : yi.set(m, p + 1);
      }
    }
  };
  l(Uo(dc)), _o.add(l);
  var c = void 0, d = Hf(() => {
    var h = n ?? e.appendChild(Mr());
    return bf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            st
          );
          m.c = a;
        }
        i && (r.$$events = i), ds = s, c = t(f, r) || {}, ds = !0, a && Te();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, ga);
        var m = (
          /** @type {number} */
          yi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ga), yi.delete(f)) : yi.set(f, m);
      }
      _o.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Jf.set(c, d), c;
}
let Jf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = he, a;
  Hr(() => {
    i !== (i = e()) && (a && (Vt(a), a = null), a = Wt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Dr);
}
function ot(t) {
  st === null && Vo(), Qi && st.l !== null ? $f(st).m.push(t) : we(() => {
    const e = Nn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function pn(t) {
  st === null && Vo(), ot(() => () => Nn(t));
}
function $f(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ie(t, e, n = !1) {
  var r = t, i = null, a = null, s = Ht, u = n ? Dr : 0, l = !1;
  const c = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && Ms(m), v && wr(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var p = Wo(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Mr())), s ? i ?? (i = v && Wt(() => v(b))) : a ?? (a = v && Wt(() => v(b))), p) {
        var I = (
          /** @type {Batch} */
          it
        ), E = s ? i : a, A = s ? a : i;
        E && I.skipped_effects.delete(E), A && I.skipped_effects.add(A), I.add_callback(h);
      } else
        h();
    }
  };
  Hr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let ri = null;
function El(t) {
  ri = t;
}
function wi(t, e) {
  return e;
}
function eh(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Xo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    wf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(t, e[0].prev, e[a - 1].next);
  }
  tc(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Bn(t, d.prev, d.next)), Vt(d.e, !u);
    }
  });
}
function ir(t, e, n, r, i, a = null) {
  var s = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(Mr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ jo(() => {
    var I = n();
    return Ts(I) ? I : I == null ? [] : Uo(I);
  }), v, p;
  function b() {
    th(
      p,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? Ms(d) : d = Wt(() => a(s)) : d !== null && wr(d, () => {
      d = null;
    }));
  }
  Hr(() => {
    p ?? (p = /** @type {Effect} */
    Ve), v = /** @type {V[]} */
    o(m);
    var I = v.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var E, A, _, S;
      if (Wo()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          it
        );
        for (A = 0; A < I; A += 1) {
          _ = v[A], S = r(_, A);
          var C = u.items.get(S) ?? f.get(S);
          C ? e & 3 && hc(C, _, A, e) : (E = vc(
            null,
            u,
            null,
            null,
            _,
            S,
            A,
            i,
            e,
            n,
            !0
          ), f.set(S, E)), y.add(S);
        }
        for (const [x, N] of u.items)
          y.has(x) || T.skipped_effects.add(N.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function th(t, e, n, r, i, a, s, u, l) {
  var te, H, O, B;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, p, b = null, I, E = [], A = [], _, S, y, T;
  if (c)
    for (T = 0; T < h; T += 1)
      _ = e[T], S = u(_, T), y = f.get(S), y !== void 0 && ((te = y.a) == null || te.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], S = u(_, T), y = f.get(S), y === void 0) {
      var C = r.get(S);
      if (C !== void 0) {
        r.delete(S), f.set(S, C);
        var x = b ? b.next : v;
        Bn(n, b, C), Bn(n, C, x), js(C, x, i), b = C;
      } else {
        var N = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = vc(
          N,
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
    if (d && hc(y, _, T, s), y.e.f & Hn && (Ms(y.e), c && ((H = y.a) == null || H.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(y))), y !== v) {
      if (p !== void 0 && p.has(y)) {
        if (E.length < A.length) {
          var X = A[0], k;
          b = X.prev;
          var U = E[0], ue = E[E.length - 1];
          for (k = 0; k < E.length; k += 1)
            js(E[k], X, i);
          for (k = 0; k < A.length; k += 1)
            p.delete(A[k]);
          Bn(n, U.prev, ue.next), Bn(n, b, U), Bn(n, ue, X), v = X, b = ue, T -= 1, E = [], A = [];
        } else
          p.delete(y), js(y, v, i), Bn(n, y.prev, y.next), Bn(n, y, b === null ? n.first : b.next), Bn(n, b, y), b = y;
        continue;
      }
      for (E = [], A = []; v !== null && v.k !== S; )
        v.e.f & Hn || (p ?? (p = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      y = v;
    }
    E.push(y), b = y, v = y.next;
  }
  if (v !== null || p !== void 0) {
    for (var j = p === void 0 ? [] : Uo(p); v !== null; )
      v.e.f & Hn || j.push(v), v = v.next;
    var V = j.length;
    if (V > 0) {
      var P = s & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < V; T += 1)
          (O = j[T].a) == null || O.measure();
        for (T = 0; T < V; T += 1)
          (B = j[T].a) == null || B.fix();
      }
      eh(n, j, P);
    }
  }
  c && dr(() => {
    var G;
    if (I !== void 0)
      for (y of I)
        (G = y.a) == null || G.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var Z of r.values())
    Vt(Z.e);
  r.clear();
}
function hc(t, e, n, r) {
  r & 1 && ji(t.v, e), r & 2 ? ji(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function vc(t, e, n, r, i, a, s, u, l, c, d) {
  var h = ri, f = (l & 1) !== 0, m = (l & 16) === 0, v = f ? m ? /* @__PURE__ */ qu(i, !1, !1) : oi(i) : i, p = l & 2 ? oi(s) : s, b = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ri = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Mr());
    }
    return b.e = Wt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), lf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ri = h;
  }
}
function js(t, e, n) {
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
      /* @__PURE__ */ Ha(a)
    );
    i.before(a), a = s;
  }
}
function Bn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function hr(t, e, n) {
  var r = t, i, a, s = null, u = null;
  function l() {
    a && (wr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Hr(() => {
    if (i !== (i = e())) {
      var c = Wo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Mr()), a && it.skipped_effects.add(a)), u = Wt(() => n(d, i));
      }
      c ? it.add_callback(l) : l();
    }
  }, Dr);
}
function Sl(t, e, n, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, h = ri;
  Hr(() => {
    const f = e() || null;
    var m = f === "svg" ? Vd : null;
    if (f !== s) {
      var v = ri;
      El(h), d && (f === null ? wr(d, () => {
        d = null, u = null;
      }) : f === u ? Ms(d) : (Vt(d), Il(!1))), f && f !== u && (d = Wt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), zi(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Mr())
          );
          r(l, p);
        }
        Ve.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), Il(!0), El(v);
    }
  }, Dr);
}
function Fe(t, e, n) {
  di(() => {
    var r = Nn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Pa(() => {
        var s = n();
        cc(s), i && Go(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function nh(t, e) {
  var n = void 0, r;
  Hr(() => {
    n !== (n = e()) && (r && (Vt(r), r = null), n && (r = Wt(() => {
      di(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function mc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = mc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function rh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = mc(t)) && (r && (r += " "), r += e);
  return r;
}
function gc(t) {
  return typeof t == "object" ? rh(t) : t ?? "";
}
const Al = [...` 	
\r\f \v\uFEFF`];
function ih(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || Al.includes(r[s - 1])) && (u === r.length || Al.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function Cl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function qs(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ah(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(qs)), i && l.push(...Object.keys(i).map(qs));
      var c = 0, d = -1;
      const p = t.length;
      for (var h = 0; h < p; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var m = qs(t.substring(c, d).trim());
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
    return r && (n += Cl(r)), i && (n += Cl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Zo(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var u = ih(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function zs(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function vt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = ah(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (zs(t, n == null ? void 0 : n[0], r[0]), zs(t, n == null ? void 0 : n[1], r[1], "important")) : zs(t, n, r));
  return r;
}
function yo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ts(e))
      return sf();
    for (var r of t.options)
      r.selected = e.includes(xl(r));
    return;
  }
  for (r of t.options) {
    var i = xl(r);
    if (xf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function sh(t) {
  var e = new MutationObserver(() => {
    yo(t, t.__value);
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
  }), Ds(() => {
    e.disconnect();
  });
}
function xl(t) {
  return "__value" in t ? t.__value : t.value;
}
const oa = Symbol("class"), la = Symbol("style"), pc = Symbol("is custom element"), bc = Symbol("is html");
function Tl(t, e) {
  var n = Yo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function oh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function cr(t, e, n, r) {
  var i = Yo(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Kd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && _c(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function lh(t, e, n, r, i = !1, a = !1) {
  var s = Yo(t), u = s[pc], l = !s[bc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = gc(n.class) : n[oa] && (n.class = null), n[la] && (n.style ?? (n.style = null));
  var f = _c(t);
  for (const A in n) {
    let _ = n[A];
    if (d && A === "value" && _ == null) {
      t.value = t.__value = "", c[A] = _;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Zo(t, m, _, r, e == null ? void 0 : e[oa], n[oa]), c[A] = _, c[oa] = n[oa];
      continue;
    }
    if (A === "style") {
      vt(t, _, e == null ? void 0 : e[la], n[la]), c[A] = _, c[la] = n[la];
      continue;
    }
    var v = c[A];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(A)))) {
      c[A] = _;
      var p = A[0] + A[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, y = "$$" + A;
          let T = A.slice(2);
          var b = zf(T);
          if (jf(T) && (T = T.slice(0, -7), S.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, c[y], S), c[y] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, On([T]);
            else {
              let C = function(x) {
                c[A].call(this, x);
              };
              c[y] = Ko(T, t, C, S);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (A === "style")
          cr(t, A, _);
        else if (A === "autofocus")
          Of(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (A === "__value" || A === "value" && _ != null))
          t.value = t.__value = _;
        else if (A === "selected" && d)
          oh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = A;
          l || (I = Xf(I));
          var E = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !u && !E)
            if (s[A] = null, I === "value" || I === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (I === "value") {
                let T = S.defaultValue;
                S.removeAttribute(I), S.defaultValue = T, S.value = S.__value = y ? T : null;
              } else {
                let T = S.defaultChecked;
                S.removeAttribute(I), S.defaultChecked = T, S.checked = y ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else E || f.includes(I) && (u || typeof _ != "string") ? (t[I] = _, I in s && (s[I] = Ht)) : typeof _ != "function" && cr(t, I, _);
        }
    }
  }
  return c;
}
function Ge(t, e, n = [], r = [], i, a = !1, s = !1) {
  Vu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Hr(() => {
      var m = e(...u.map(o)), v = lh(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && yo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Vt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Gd && (!l || p !== l[b]) && (c[b] && Vt(c[b]), c[b] = Wt(() => nh(t, () => p))), v[b] = p;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      di(() => {
        yo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), sh(f);
      });
    }
    h = !0;
  });
}
function Yo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [pc]: t.nodeName.includes("-"),
      [bc]: t.namespaceURI === Bd
    })
  );
}
var wl = /* @__PURE__ */ new Map();
function _c(t) {
  var e = t.getAttribute("is") || t.nodeName, n = wl.get(e);
  if (n) return n;
  wl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = wu(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = Fo(i);
  }
  return n;
}
const uh = () => performance.now(), ar = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => uh(),
  tasks: /* @__PURE__ */ new Set()
};
function yc() {
  const t = ar.now();
  ar.tasks.forEach((e) => {
    e.c(t) || (ar.tasks.delete(e), e.f());
  }), ar.tasks.size !== 0 && ar.tick(yc);
}
function ch(t) {
  let e;
  return ar.tasks.size === 0 && ar.tick(yc), {
    promise: new Promise((n) => {
      ar.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ar.tasks.delete(e);
    }
  };
}
function ja(t, e) {
  Ji(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function dh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ol(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = dh(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const fh = (t) => t;
function hh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ri
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = hs(this.element, l, void 0, 1, () => {
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
function fs(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, u = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Ji(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: u,
    in() {
      var A;
      if (e.inert = d, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), ja(e, "introstart"), f = hs(e, v(), m, 1, () => {
        ja(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), c = void 0;
        return;
      }
      e.inert = !0, ja(e, "outrostart"), m = hs(e, v(), f, 0, () => {
        ja(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ve
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && ds) {
    var I = u;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Dr; )
        for (; (E = E.parent) && !(E.f & Lr); )
          ;
      I = !E || (E.f & Os) !== 0;
    }
    I && di(() => {
      Nn(() => p.in());
    });
  }
}
function hs(t, e, n, r, i) {
  var a = r === 1;
  if (xi(e)) {
    var s, u = !1;
    return dr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        s = hs(t, b, n, r, i);
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
      abort: he,
      deactivate: he,
      reset: he,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: h = fh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = Ol(c(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var I = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), A = [];
    if (E > 0) {
      var _ = !1;
      if (c)
        for (var S = Math.ceil(E / 16.666666666666668), y = 0; y <= S; y += 1) {
          var T = b + I * h(y / S), C = Ol(c(T, 1 - T));
          A.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var x = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + I * h(x / E);
      }, d && ch(() => {
        if (p.playState !== "running") return !1;
        var x = v();
        return d(x, 1 - x), !0;
      });
    }
    p = t.animate(A, { duration: E, fill: "forwards" }), p.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = he);
    },
    deactivate: () => {
      i = he;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function Sa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Zu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Ws(t) ? Xs(a) : a, n(a), it !== null && r.add(it), await lc(), a !== (a = e())) {
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
  Nn(e) == null && t.value && (n(Ws(t) ? Xs(t.value) : t.value), it !== null && r.add(it)), Pa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        $a ?? it
      );
      if (r.has(a))
        return;
    }
    Ws(t) && i === Xs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function vh(t, e, n = e) {
  Zu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Nn(e) == null && n(t.checked), Pa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Ws(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Xs(t) {
  return t === "" ? null : +t;
}
function Ll(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function Oe(t = {}, e, n, r) {
  return di(() => {
    var i, a;
    return Pa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Nn(() => {
        t !== n(...a) && (e(t, ...a), i && Ll(n(...i), t) && e(null, ...i));
      });
    }), () => {
      dr(() => {
        a && Ll(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function mh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    st
  ), n = e.l.u;
  if (!n) return;
  let r = () => cc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ma(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && Mf(() => {
    Rl(e, r), os(n.b);
  }), we(() => {
    const i = Nn(() => n.m.map(Wd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && we(() => {
    Rl(e, r), os(n.a);
  });
}
function Rl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Qo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), he;
  const r = Nn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ii = [];
function gh(t, e) {
  return {
    subscribe: Ut(t, e).subscribe
  };
}
function Ut(t, e = he) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Go(t, u) && (t = u, n)) {
      const l = !Ii.length;
      for (const c of r)
        c[1](), Ii.push(c, t);
      if (l) {
        for (let c = 0; c < Ii.length; c += 2)
          Ii[c][0](Ii[c + 1]);
        Ii.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function s(u, l = he) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || he), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function $i(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return gh(n, (s, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = he;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? c[0] : c, s, u);
      a ? s(v) : h = typeof v == "function" ? v : he;
    }, m = i.map(
      (v, p) => Qo(
        v,
        (b) => {
          c[p] = b, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      os(m), h(), l = !1;
    };
  });
}
function Ic(t) {
  let e;
  return Qo(t, (n) => e = n)(), e;
}
let qa = !1, Io = Symbol();
function Pn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ qu(void 0),
    unsubscribe: he
  });
  if (r.store !== t && !(Io in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = he;
    else {
      var i = !0;
      r.unsubscribe = Qo(t, (a) => {
        i ? r.source.v = a : Y(r.source, a);
      }), i = !1;
    }
  return t && Io in n ? Ic(t) : o(r.source);
}
function Mn(t, e) {
  return t.set(e), e;
}
function Zn() {
  const t = {};
  function e() {
    Ds(() => {
      for (var n in t)
        t[n].unsubscribe();
      ss(t, Io, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function ph(t) {
  var e = qa;
  try {
    return qa = !1, [t(), qa];
  } finally {
    qa = e;
  }
}
const bh = {
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
function qe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    bh
  );
}
const _h = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (xi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      xi(i) && (i = i());
      const a = xr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (xi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = xr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === Ru) return !1;
    for (let n of t.props)
      if (xi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (xi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...t) {
  return new Proxy({ props: t }, _h);
}
function g(t, e, n, r) {
  var A;
  var i = !Qi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Nn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = zn in t || Ru in t;
    d = ((A = xr(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = ph(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && ef(), d(f)));
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
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || p || m) && d(S ? v() : _), _) : v();
      }
    );
  }
  var b = !1, I = (n & 1 ? Ma : jo)(() => (b = !1, v()));
  a && o(I);
  var E = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const y = S ? o(I) : i && a ? Ce(_) : _;
        return Y(I, y), b = !0, u !== void 0 && (u = y), _;
      }
      return fi && b || E.f & ci ? I.v : o(I);
    }
  );
}
const yh = "5";
var xu;
typeof window < "u" && ((xu = window.__svelte ?? (window.__svelte = {})).v ?? (xu.v = /* @__PURE__ */ new Set())).add(yh);
function Ih(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Eh = function(e) {
  return Sh(e) && !Ah(e);
};
function Sh(t) {
  return !!t && typeof t == "object";
}
function Ah(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Th(t);
}
var Ch = typeof Symbol == "function" && Symbol.for, xh = Ch ? Symbol.for("react.element") : 60103;
function Th(t) {
  return t.$$typeof === xh;
}
function wh(t) {
  return Array.isArray(t) ? [] : {};
}
function Aa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Wi(wh(t), t, e) : t;
}
function Oh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Aa(r, n);
  });
}
function Lh(t, e) {
  if (!e.customMerge)
    return Wi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Wi;
}
function Rh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Dl(t) {
  return Object.keys(t).concat(Rh(t));
}
function Ec(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Dh(t, e) {
  return Ec(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Mh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Dl(t).forEach(function(i) {
    r[i] = Aa(t[i], n);
  }), Dl(e).forEach(function(i) {
    Dh(t, i) || (Ec(t, i) && n.isMergeableObject(e[i]) ? r[i] = Lh(i, n)(t[i], e[i], n) : r[i] = Aa(e[i], n));
  }), r;
}
function Wi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Oh, n.isMergeableObject = n.isMergeableObject || Eh, n.cloneUnlessOtherwiseSpecified = Aa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Mh(t, e, n) : Aa(e, n);
}
Wi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Wi(r, i, n);
  }, {});
};
var Hh = Wi, Ph = Hh;
const Nh = /* @__PURE__ */ Ih(Ph);
var Eo = function(t, e) {
  return Eo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Eo(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Eo(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var be = function() {
  return be = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, be.apply(this, arguments);
};
function Uh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Sc(t, e, n, r) {
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
function Jo(t, e) {
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
function Or(t, e) {
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
function Wn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Mi(t) {
  return this instanceof Mi ? (this.v = t, this) : new Mi(t);
}
function Fh(t, e, n) {
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
    r[m] && (i[m] = function(p) {
      return new Promise(function(b, I) {
        a.push([m, p, b, I]) > 1 || l(m, p);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      c(r[m](v));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function c(m) {
    m.value instanceof Mi ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
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
function kh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Pt == "function" ? Pt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Ks(t, e) {
  var n = e && e.cache ? e.cache : Wh, r = e && e.serializer ? e.serializer : qh, i = e && e.strategy ? e.strategy : Gh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Bh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Vh(t, e, n, r) {
  var i = Bh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Ac(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Cc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Gh(t, e) {
  var n = t.length === 1 ? Vh : Ac;
  return Cc(t, this, n, e.cache.create(), e.serializer);
}
function jh(t, e) {
  return Cc(t, this, Ac, e.cache.create(), e.serializer);
}
var qh = function() {
  return JSON.stringify(arguments);
}, zh = (
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
), Wh = {
  create: function() {
    return new zh();
  }
}, Zs = {
  variadic: jh
}, ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ze || (ze = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var Xi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Xi || (Xi = {}));
function Ml(t) {
  return t.type === ht.literal;
}
function Xh(t) {
  return t.type === ht.argument;
}
function xc(t) {
  return t.type === ht.number;
}
function Tc(t) {
  return t.type === ht.date;
}
function wc(t) {
  return t.type === ht.time;
}
function Oc(t) {
  return t.type === ht.select;
}
function Lc(t) {
  return t.type === ht.plural;
}
function Kh(t) {
  return t.type === ht.pound;
}
function Rc(t) {
  return t.type === ht.tag;
}
function Dc(t) {
  return !!(t && typeof t == "object" && t.type === Xi.number);
}
function So(t) {
  return !!(t && typeof t == "object" && t.type === Xi.dateTime);
}
var Mc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Zh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Yh(t) {
  var e = {};
  return t.replace(Zh, function(n) {
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
var Qh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Jh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Qh).filter(function(f) {
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
function $h(t) {
  return t.replace(/^(.*?)-/, "");
}
var Hl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Hc = /^(@+)?(\+|#+)?[rs]?$/g, ev = /(\*)(0+)|(#+)(0+)|(0+)/g, Pc = /^(0+)$/;
function Pl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Hc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Nc(t) {
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
function tv(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Pc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Nl(t) {
  var e = {}, n = Nc(t);
  return n || e;
}
function nv(t) {
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
        e.style = "unit", e.unit = $h(i.options[0]);
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
        e = be(be(be({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return be(be({}, l), Nl(c));
        }, {}));
        continue;
      case "engineering":
        e = be(be(be({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return be(be({}, l), Nl(c));
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
        i.options[0].replace(ev, function(l, c, d, h, f, m) {
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
    if (Pc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Hl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Hl, function(l, c, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = be(be({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = be(be({}, e), Pl(a)));
      continue;
    }
    if (Hc.test(i.stem)) {
      e = be(be({}, e), Pl(i.stem));
      continue;
    }
    var s = Nc(i.stem);
    s && (e = be(be({}, e), s));
    var u = tv(i.stem);
    u && (e = be(be({}, e), u));
  }
  return e;
}
var za = {
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
function rv(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = iv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function iv(t) {
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
  var i = za[r || ""] || za[n || ""] || za["".concat(n, "-001")] || za["001"];
  return i[0];
}
var Ys, av = new RegExp("^".concat(Mc.source, "*")), sv = new RegExp("".concat(Mc.source, "*$"));
function Xe(t, e) {
  return { start: t, end: e };
}
var ov = !!String.prototype.startsWith && "_a".startsWith("a", 1), lv = !!String.fromCodePoint, uv = !!Object.fromEntries, cv = !!String.prototype.codePointAt, dv = !!String.prototype.trimStart, fv = !!String.prototype.trimEnd, hv = !!Number.isSafeInteger, vv = hv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ao = !0;
try {
  var mv = Fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ao = ((Ys = mv.exec("a")) === null || Ys === void 0 ? void 0 : Ys[0]) === "a";
} catch {
  Ao = !1;
}
var Ul = ov ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Co = lv ? String.fromCodePoint : (
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
), Fl = (
  // native
  uv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], u = a[1];
        n[s] = u;
      }
      return n;
    }
  )
), Uc = cv ? (
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
), gv = dv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(av, "");
  }
), pv = fv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(sv, "");
  }
);
function Fc(t, e) {
  return new RegExp(t, e);
}
var xo;
if (Ao) {
  var kl = Fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  xo = function(e, n) {
    var r;
    kl.lastIndex = n;
    var i = kl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  xo = function(e, n) {
    for (var r = []; ; ) {
      var i = Uc(e, n);
      if (i === void 0 || kc(i) || Iv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Co.apply(void 0, r);
  };
var bv = (
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
              type: ht.pound,
              location: Xe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ze.UNMATCHED_CLOSING_TAG, Xe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && To(this.peek() || 0)) {
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
            type: ht.literal,
            value: "<".concat(i, "/>"),
            location: Xe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !To(this.char()))
            return this.error(ze.INVALID_TAG, Xe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(ze.UNMATCHED_CLOSING_TAG, Xe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ht.tag,
              value: i,
              children: s,
              location: Xe(r, this.clonePosition())
            },
            err: null
          } : this.error(ze.INVALID_TAG, Xe(u, this.clonePosition())));
        } else
          return this.error(ze.UNCLOSED_TAG, Xe(r, this.clonePosition()));
      } else
        return this.error(ze.INVALID_TAG, Xe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && yv(this.char()); )
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
      var l = Xe(r, this.clonePosition());
      return {
        val: { type: ht.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !_v(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Co.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Co(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ze.EMPTY_ARGUMENT, Xe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ze.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ht.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Xe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(ze.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = xo(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Xe(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(ze.EXPECT_ARGUMENT_TYPE, Xe(s, l));
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
            var f = pv(h.val);
            if (f.length === 0)
              return this.error(ze.EXPECT_ARGUMENT_STYLE, Xe(this.clonePosition(), this.clonePosition()));
            var m = Xe(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var p = Xe(i, this.clonePosition());
          if (c && Ul(c == null ? void 0 : c.style, "::", 0)) {
            var b = gv(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return h.err ? h : {
                val: { type: ht.number, value: r, location: p, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(ze.EXPECT_DATE_TIME_SKELETON, p);
              var I = b;
              this.locale && (I = rv(b, this.locale));
              var f = {
                type: Xi.dateTime,
                pattern: I,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Yh(I) : {}
              }, E = u === "date" ? ht.date : ht.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? ht.number : u === "date" ? ht.date : ht.time,
              value: r,
              location: p,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Xe(A, be({}, A)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = h.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (y.err)
            return y;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = Xe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: ht.select,
              value: r,
              options: Fl(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Fl(y.val),
              offset: S,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(ze.INVALID_ARGUMENT_TYPE, Xe(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Xe(i, this.clonePosition()));
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
        r = Jh(e);
      } catch {
        return this.error(ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Xi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? nv(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Xe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Xe(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var p = this.tryParseArgumentClose(m);
        if (p.err)
          return p;
        u.push([
          c,
          {
            value: v.val,
            location: Xe(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(ze.MISSING_OTHER_CLAUSE, Xe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var l = Xe(i, this.clonePosition());
      return a ? (s *= r, vv(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Uc(this.message, e);
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
      if (Ul(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && kc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function To(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function _v(t) {
  return To(t) || t === 47;
}
function yv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function kc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Iv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function wo(t) {
  t.forEach(function(e) {
    if (delete e.location, Oc(e) || Lc(e))
      for (var n in e.options)
        delete e.options[n].location, wo(e.options[n].value);
    else xc(e) && Dc(e.style) || (Tc(e) || wc(e)) && So(e.style) ? delete e.style.location : Rc(e) && wo(e.children);
  });
}
function Ev(t, e) {
  e === void 0 && (e = {}), e = be({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new bv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || wo(n.val), n.val;
}
var Ki;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Ki || (Ki = {}));
var Ps = (
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
), Bl = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ki.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ps)
), Sv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ki.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ps)
), Av = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ki.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ps)
), Yt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Yt || (Yt = {}));
function Cv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Yt.literal || n.type !== Yt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function xv(t) {
  return typeof t == "function";
}
function rs(t, e, n, r, i, a, s) {
  if (t.length === 1 && Ml(t[0]))
    return [
      {
        type: Yt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Ml(d)) {
      u.push({
        type: Yt.literal,
        value: d.value
      });
      continue;
    }
    if (Kh(d)) {
      typeof a == "number" && u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new Av(h, s);
    var f = i[h];
    if (Xh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Yt.literal : Yt.object,
        value: f
      });
      continue;
    }
    if (Tc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : So(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (wc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : So(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (xc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Dc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Rc(d)) {
      var v = d.children, p = d.value, b = i[p];
      if (!xv(b))
        throw new Sv(p, "function", s);
      var I = rs(v, e, n, r, i, a), E = b(I.map(function(S) {
        return S.value;
      }));
      Array.isArray(E) || (E = [E]), u.push.apply(u, E.map(function(S) {
        return {
          type: typeof S == "string" ? Yt.literal : Yt.object,
          value: S
        };
      }));
    }
    if (Oc(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Bl(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, rs(A.value, e, n, r, i));
      continue;
    }
    if (Lc(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new Ps(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ki.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[_] || d.options.other;
      }
      if (!A)
        throw new Bl(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, rs(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Cv(u);
}
function Tv(t, e) {
  return e ? be(be(be({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = be(be({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function wv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Tv(t[r], e[r]), n;
  }, be({}, t)) : t;
}
function Qs(t) {
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
function Ov(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ks(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Qs(t.number),
      strategy: Zs.variadic
    }),
    getDateTimeFormat: Ks(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Qs(t.dateTime),
      strategy: Zs.variadic
    }),
    getPluralRules: Ks(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: Qs(t.pluralRules),
      strategy: Zs.variadic
    })
  };
}
var Bc = (
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
          return !h.length || f.type !== Yt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return rs(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = Uh(s, ["formatters"]);
        this.ast = t.__parse(e, be(be({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = wv(t.formats, r), this.formatters = i && i.formatters || Ov(this.formatterCache);
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
    }, t.__parse = Ev, t.formats = {
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
function Lv(t, e) {
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
const Cr = {}, Rv = (t, e, n) => n && (e in Cr || (Cr[e] = {}), t in Cr[e] || (Cr[e][t] = n), n), Vc = (t, e) => {
  if (e == null)
    return;
  if (e in Cr && t in Cr[e])
    return Cr[e][t];
  const n = Ua(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Mv(i, t);
    if (a)
      return Rv(t, e, a);
  }
};
let $o;
const Na = Ut({});
function Dv(t) {
  return $o[t] || null;
}
function Gc(t) {
  return t in $o;
}
function Mv(t, e) {
  if (!Gc(t))
    return null;
  const n = Dv(t);
  return Lv(n, e);
}
function Hv(t) {
  if (t == null)
    return;
  const e = Ua(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Gc(r))
      return r;
  }
}
function jc(t, ...e) {
  delete Cr[t], Na.update((n) => (n[t] = Nh.all([n[t] || {}, ...e]), n));
}
$i(
  [Na],
  ([t]) => Object.keys(t)
);
Na.subscribe((t) => $o = t);
const is = {};
function Pv(t, e) {
  is[t].delete(e), is[t].size === 0 && delete is[t];
}
function qc(t) {
  return is[t];
}
function Nv(t) {
  return Ua(t).map((e) => {
    const n = qc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function vs(t) {
  return t == null ? !1 : Ua(t).some(
    (e) => {
      var n;
      return (n = qc(e)) == null ? void 0 : n.size;
    }
  );
}
function Uv(t, e) {
  return Promise.all(
    e.map((r) => (Pv(t, r), r().then((i) => i.default || i)))
  ).then((r) => jc(t, ...r));
}
const ua = {};
function zc(t) {
  if (!vs(t))
    return t in ua ? ua[t] : Promise.resolve();
  const e = Nv(t);
  return ua[t] = Promise.all(
    e.map(
      ([n, r]) => Uv(n, r)
    )
  ).then(() => {
    if (vs(t))
      return zc(t);
    delete ua[t];
  }), ua[t];
}
var Vl = Object.getOwnPropertySymbols, Fv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, Bv = (t, e) => {
  var n = {};
  for (var r in t)
    Fv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Vl)
    for (var r of Vl(t))
      e.indexOf(r) < 0 && kv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Vv = {
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
function Gv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ua(
      t
    ).join('", "')}".${vs(Pr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const jv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Vv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, pa = jv;
function Zi() {
  return pa;
}
function qv(t) {
  const e = t, { formats: n } = e, r = Bv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Bc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Gv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(pa, r, { initialLocale: i }), n && ("number" in n && Object.assign(pa.formats.number, n.number), "date" in n && Object.assign(pa.formats.date, n.date), "time" in n && Object.assign(pa.formats.time, n.time)), hi.set(i);
}
const Js = Ut(!1);
var zv = Object.defineProperty, Wv = Object.defineProperties, Xv = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Zv = Object.prototype.propertyIsEnumerable, jl = (t, e, n) => e in t ? zv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Yv = (t, e) => {
  for (var n in e || (e = {}))
    Kv.call(e, n) && jl(t, n, e[n]);
  if (Gl)
    for (var n of Gl(e))
      Zv.call(e, n) && jl(t, n, e[n]);
  return t;
}, Qv = (t, e) => Wv(t, Xv(e));
let Oo;
const ms = Ut(null);
function ql(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ua(t, e = Zi().fallbackLocale) {
  const n = ql(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...ql(e)])] : n;
}
function Pr() {
  return Oo ?? void 0;
}
ms.subscribe((t) => {
  Oo = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Jv = (t) => {
  if (t && Hv(t) && vs(t)) {
    const { loadingDelay: e } = Zi();
    let n;
    return typeof window < "u" && Pr() != null && e ? n = window.setTimeout(
      () => Js.set(!0),
      e
    ) : Js.set(!0), zc(t).then(() => {
      ms.set(t);
    }).finally(() => {
      clearTimeout(n), Js.set(!1);
    });
  }
  return ms.set(t);
}, hi = Qv(Yv({}, ms), {
  set: Jv
}), $v = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ns = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var em = Object.defineProperty, gs = Object.getOwnPropertySymbols, Wc = Object.prototype.hasOwnProperty, Xc = Object.prototype.propertyIsEnumerable, zl = (t, e, n) => e in t ? em(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, el = (t, e) => {
  for (var n in e || (e = {}))
    Wc.call(e, n) && zl(t, n, e[n]);
  if (gs)
    for (var n of gs(e))
      Xc.call(e, n) && zl(t, n, e[n]);
  return t;
}, ea = (t, e) => {
  var n = {};
  for (var r in t)
    Wc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && gs)
    for (var r of gs(t))
      e.indexOf(r) < 0 && Xc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ca = (t, e) => {
  const { formats: n } = Zi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, tm = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ca("number", r)), new Intl.NumberFormat(n, i);
  }
), nm = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ca("date", r) : Object.keys(i).length === 0 && (i = Ca("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), rm = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ca("time", r) : Object.keys(i).length === 0 && (i = Ca("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), im = (t = {}) => {
  var e = t, {
    locale: n = Pr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return tm(el({ locale: n }, r));
}, am = (t = {}) => {
  var e = t, {
    locale: n = Pr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return nm(el({ locale: n }, r));
}, sm = (t = {}) => {
  var e = t, {
    locale: n = Pr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return rm(el({ locale: n }, r));
}, om = Ns(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Pr()) => new Bc(t, e, Zi().formats, {
    ignoreTag: Zi().ignoreTag
  })
), lm = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: u,
    locale: l = Pr(),
    default: c
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Vc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Zi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = om(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, um = (t, e) => sm(e).format(t), cm = (t, e) => am(e).format(t), dm = (t, e) => im(e).format(t), fm = (t, e = Pr()) => Vc(t, e), hm = $i([hi, Na], () => lm);
$i([hi], () => um);
$i([hi], () => cm);
$i([hi], () => dm);
$i([hi, Na], () => fm);
function vm(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    jc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? $v();
  console.log("Initial: Setting the language to", i), qv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), hi.set(s.detail.language);
  });
}
const mm = "Ort", gm = "Suche", pm = "UUID", bm = "File Name", _m = "Autor", ym = "Typ", Im = "Version", Em = "Datum", Sm = "Fertig", Am = "Filtertypen", Cm = "Filter Hinzufügen", xm = {
  location: mm,
  search: gm,
  uuid: pm,
  filename: bm,
  author: _m,
  type: ym,
  version: Im,
  date: Em,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Sm,
  filter_types: Am,
  add_filter: Cm
}, Tm = "Location", wm = "Search", Om = "UUID", Lm = "Filename", Rm = "Author", Dm = "Type", Mm = "Version", Hm = "Date", Pm = "Done", Nm = "Filter Types", Um = "Add Filter", Fm = {
  location: Tm,
  search: wm,
  uuid: Om,
  filename: Lm,
  author: Rm,
  type: Dm,
  version: Mm,
  date: Hm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: Pm,
  filter_types: Nm,
  add_filter: Um
};
function Ue(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function We(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function li(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ct(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class vi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Vf(e, n, r, i));
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
function Q(t, e) {
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
var Wa;
function km(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Wa;
  if (typeof Wa == "boolean" && !e)
    return Wa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Wa = r), r;
}
function Bm(t, e, n) {
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
var Gt = (
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
function Vm(t) {
  return t === void 0 && (t = window), Gm(t) ? { passive: !0 } : !1;
}
function Gm(t) {
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
const Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Vm
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
function jm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Zc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Zc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function qm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: jm,
  estimateScrollWidth: qm,
  matches: Zc
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
var zm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Wm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Wl = {
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
var Xl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Kl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], Xm = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return zm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wl;
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
          for (var a = Pt(Xl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Pt(Kl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Pt(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(Kl), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Xa.length > 0 && Xa.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Xa.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Xa = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = Bm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Wl.FG_DEACTIVATION_MS));
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
        var i = be({}, r);
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
  }(Gt)
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
var $s = "mdc-dom-focus-sentinel", Km = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + $s)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, t.prototype.focusInitialElement = function(e, n) {
      var r = 0;
      n && (r = Math.max(e.indexOf(n), 0)), e[r].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains($s) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add($s), e;
    }, t;
  }()
);
const Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Km
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
var Ne = {
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
}, rn = /* @__PURE__ */ new Set();
rn.add(Ne.BACKSPACE);
rn.add(Ne.ENTER);
rn.add(Ne.SPACEBAR);
rn.add(Ne.PAGE_UP);
rn.add(Ne.PAGE_DOWN);
rn.add(Ne.END);
rn.add(Ne.HOME);
rn.add(Ne.ARROW_LEFT);
rn.add(Ne.ARROW_UP);
rn.add(Ne.ARROW_RIGHT);
rn.add(Ne.ARROW_DOWN);
rn.add(Ne.DELETE);
rn.add(Ne.ESCAPE);
rn.add(Ne.TAB);
var cn = {
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
}, an = /* @__PURE__ */ new Map();
an.set(cn.BACKSPACE, Ne.BACKSPACE);
an.set(cn.ENTER, Ne.ENTER);
an.set(cn.SPACEBAR, Ne.SPACEBAR);
an.set(cn.PAGE_UP, Ne.PAGE_UP);
an.set(cn.PAGE_DOWN, Ne.PAGE_DOWN);
an.set(cn.END, Ne.END);
an.set(cn.HOME, Ne.HOME);
an.set(cn.ARROW_LEFT, Ne.ARROW_LEFT);
an.set(cn.ARROW_UP, Ne.ARROW_UP);
an.set(cn.ARROW_RIGHT, Ne.ARROW_RIGHT);
an.set(cn.ARROW_DOWN, Ne.ARROW_DOWN);
an.set(cn.DELETE, Ne.DELETE);
an.set(cn.ESCAPE, Ne.ESCAPE);
an.set(cn.TAB, Ne.TAB);
var Nr = /* @__PURE__ */ new Set();
Nr.add(Ne.PAGE_UP);
Nr.add(Ne.PAGE_DOWN);
Nr.add(Ne.END);
Nr.add(Ne.HOME);
Nr.add(Ne.ARROW_LEFT);
Nr.add(Ne.ARROW_UP);
Nr.add(Ne.ARROW_RIGHT);
Nr.add(Ne.ARROW_DOWN);
function At(t) {
  var e = t.key;
  if (rn.has(e))
    return e;
  var n = an.get(t.keyCode);
  return n || Ne.UNKNOWN;
}
const { applyPassive: Zl } = Kc, { matches: Ym } = Fa;
function Jt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, p) => t.style.setProperty(v, p), initPromise: m = Promise.resolve() } = {}) {
  let v, p = new vi(), b = ve("SMUI:addLayoutListener"), I, E = s, A = l, _ = c;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new Xm({
      addClass: d,
      browserSupportsCssVars: () => km(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, C) => p.off(document.documentElement, T, C),
      deregisterInteractionHandler: (T, C) => p.off(l || t, T, C),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, C;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Ym(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, C) => {
        const x = Zl();
        p.on(document.documentElement, T, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (T, C) => {
        const x = Zl();
        p.on(l || t, T, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (T) => p.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (A !== l || _ !== c) && (A = l, _ = c, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), b && (I = b(y));
  function y() {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, x) => t.style.setProperty(C, x), initPromise: Promise.resolve() }, T)), S();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), I && I();
    }
  };
}
function Qm(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, mi), a = g(e, "tag", 3, "span"), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = ve("SMUI:label:context"), c = ve("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = $(), m = W(f);
  {
    let v = /* @__PURE__ */ _e(() => Ue({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    hr(m, i, (p, b) => {
      Oe(
        b(p, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(v);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => s,
          {
            children: (I, E) => {
              var A = $(), _ = W(A);
              Se(_, () => e.children ?? he), w(I, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => u = I,
        () => u
      );
    });
  }
  return w(t, f), Te(h);
}
function Lo(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, mi), s = g(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const c = /* @__PURE__ */ _e(() => s() === "svg" || a() === eg), d = ve("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = $(), v = W(m);
  {
    let p = /* @__PURE__ */ _e(() => Ue({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    hr(v, a, (b, I) => {
      Oe(
        I(b, $e(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return o(p);
            },
            "aria-hidden": "true"
          },
          () => o(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (E, A) => {
              var _ = $(), S = W(_);
              Se(S, () => e.children ?? he), w(E, _);
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
var Jm = /* @__PURE__ */ Ct("<svg><!></svg>");
function mi(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ _e(() => [
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
  var l = { getElement: u }, c = $(), d = W(c);
  {
    var h = (m) => {
      var v = Jm();
      Ge(v, () => ({ ...i }));
      var p = de(v);
      Se(p, () => e.children ?? he), Oe(v, (b) => s = b, () => s), Fe(v, (b, I) => Q == null ? void 0 : Q(b, I), n), w(m, v);
    }, f = (m) => {
      var v = $(), p = W(v);
      {
        var b = (E) => {
          var A = $(), _ = W(A);
          Sl(_, r, !1, (S, y) => {
            Oe(S, (T) => s = T, () => s), Fe(S, (T, C) => Q == null ? void 0 : Q(T, C), n), Ge(S, () => ({ ...i }));
          }), w(E, A);
        }, I = (E) => {
          var A = $(), _ = W(A);
          Sl(_, r, !1, (S, y) => {
            Oe(S, (x) => s = x, () => s), Fe(S, (x, N) => Q == null ? void 0 : Q(x, N), n), Ge(S, () => ({ ...i }));
            var T = $(), C = W(T);
            Se(C, () => e.children ?? he), w(y, T);
          }), w(E, A);
        };
        ie(
          p,
          (E) => {
            o(a) ? E(b) : E(I, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ie(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, c), Te(l);
}
var $m = /* @__PURE__ */ Ct("<svg><!></svg>");
function eg(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = $m();
  Ge(u, () => ({ ...r }));
  var l = de(u);
  return Se(l, () => e.children ?? he), Oe(u, (c) => i = c, () => i), Fe(u, (c, d) => Q == null ? void 0 : Q(c, d), n), w(t, u), Te(s);
}
function Ka(t, e) {
  xe(e, !0);
  const [n, r] = Zn(), i = Ut(e.value);
  le(e.key, i), we(() => {
    Mn(i, e.value);
  }), pn(() => {
    i.set(void 0);
  });
  var a = $(), s = W(a);
  Se(s, () => e.children ?? he), w(t, a), Te(), r();
}
var tg = /* @__PURE__ */ fe('<div class="mdc-button__touch"></div>'), ng = /* @__PURE__ */ fe('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ps(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), u = g(e, "variant", 3, "text"), l = g(e, "touch", 3, !1), c = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), h = g(e, "secondary", 3, !1), f = g(e, "component", 3, mi), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ qe(e, [
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
  ]), p, b = Ce({}), I = Ce({}), E = ve("SMUI:button:context");
  const A = /* @__PURE__ */ _e(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ _e(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ _e(() => E === "banner" ? {} : { secondary: h() });
  let y = e.disabled;
  we(() => {
    if (y !== e.disabled) {
      if (p) {
        const j = X();
        "blur" in j && j.blur();
      }
      y = v.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function T(j) {
    b[j] || (b[j] = !0);
  }
  function C(j) {
    (!(j in b) || b[j]) && (b[j] = !1);
  }
  function x(j, V) {
    I[j] != V && (V === "" || V == null ? delete I[j] : I[j] = V);
  }
  function N() {
    E === "banner" && We(X(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function X() {
    return p.getElement();
  }
  var k = { getElement: X }, U = $(), ue = W(U);
  {
    let j = /* @__PURE__ */ _e(() => [
      [
        Jt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: C,
          addStyle: x
        }
      ],
      ...n()
    ]), V = /* @__PURE__ */ _e(() => Ue({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
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
    })), P = /* @__PURE__ */ _e(() => Object.entries(I).map(([Z, te]) => `${Z}: ${te};`).concat([i()]).join(" "));
    hr(ue, f, (Z, te) => {
      Oe(
        te(Z, $e(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(j);
            },
            get class() {
              return o(V);
            },
            get style() {
              return o(P);
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
            onclick: (H) => {
              var O;
              N(), (O = e.onclick) == null || O.call(e, H);
            },
            children: (H, O) => {
              var B = ng(), G = ge(W(B), 2);
              Se(G, () => e.children ?? he);
              var oe = ge(G);
              {
                var ee = (re) => {
                  var F = tg();
                  w(re, F);
                };
                ie(oe, (re) => {
                  l() && re(ee);
                });
              }
              w(H, B);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => p = H,
        () => p
      );
    });
  }
  return w(t, U), Te(k);
}
function Yc(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ _e(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    ps(t, {
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
        var d = $(), h = W(d);
        Se(h, () => e.children ?? he), w(l, d);
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
var Za = {
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
var rg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Za;
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
      return this.adapter.hasClass(Za.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Za.ICON_BUTTON_ON) : this.adapter.removeClass(Za.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr($n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, "" + n);
    }, e;
  }(Gt)
), ig = /* @__PURE__ */ fe('<div class="mdc-icon-button__touch"></div>'), ag = /* @__PURE__ */ fe('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function sg(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(O) {
    return O === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "ripple", 3, !0), l = g(e, "toggle", 3, !1), c = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), h = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, mi), v = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(e, [
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
  ]), b, I, E = /* @__PURE__ */ Ie(Ce({})), A = Ce({}), _ = /* @__PURE__ */ Ie(Ce({})), S = ve("SMUI:icon-button:context"), y = ve("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ _e(() => {
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
  we(() => {
    if (C != !!e.disabled) {
      if (b) {
        const O = P();
        "blur" in O && O.blur();
      }
      C = !!e.disabled;
    }
  }), le("SMUI:icon:context", "icon-button");
  let x = null;
  we(() => {
    b && P() && l() !== x && (l() && !I ? (I = new rg({
      addClass: X,
      hasClass: N,
      notifyChange: (O) => {
        V(O), We(P(), "SMUIIconButtonToggleChange", O);
      },
      removeClass: k,
      getAttr: ue,
      setAttr: j
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, Y(E, {}, !0), Y(_, {}, !0)), x = l());
  }), we(() => {
    I && !r(c()) && I.isOn() !== c() && I.toggle(c());
  }), pn(() => {
    I && I.destroy();
  });
  function N(O) {
    return O in o(E) ? o(E)[O] : P().classList.contains(O);
  }
  function X(O) {
    o(E)[O] || (o(E)[O] = !0);
  }
  function k(O) {
    (!(O in o(E)) || o(E)[O]) && (o(E)[O] = !1);
  }
  function U(O, B) {
    A[O] != B && (B === "" || B == null ? delete A[O] : A[O] = B);
  }
  function ue(O) {
    return O in o(_) ? o(_)[O] ?? null : P().getAttribute(O);
  }
  function j(O, B) {
    o(_)[O] !== B && (o(_)[O] = B);
  }
  function V(O) {
    c(O.isOn);
  }
  function P() {
    return b.getElement();
  }
  var Z = { getElement: P }, te = $(), H = W(te);
  {
    let O = /* @__PURE__ */ _e(() => [
      [
        Jt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: X,
          removeClass: k,
          addStyle: U
        }
      ],
      ...i()
    ]), B = /* @__PURE__ */ _e(() => Ue({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
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
    })), G = /* @__PURE__ */ _e(() => Object.entries(A).map(([re, F]) => `${re}: ${F};`).concat([s()]).join(" ")), oe = /* @__PURE__ */ _e(() => r(c()) ? null : c() ? "true" : "false"), ee = /* @__PURE__ */ _e(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    hr(H, m, (re, F) => {
      Oe(
        F(re, $e(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(O);
            },
            get class() {
              return o(B);
            },
            get style() {
              return o(G);
            },
            get "aria-pressed"() {
              return o(oe);
            },
            get "aria-label"() {
              return o(ee);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return y;
            },
            get href() {
              return e.href;
            }
          },
          () => o(T),
          () => o(_),
          () => p,
          {
            onclick: (ae) => {
              var K;
              I && I.handleClick(), S === "top-app-bar:navigation" && We(P(), "SMUITopAppBarIconButtonNav"), (K = e.onclick) == null || K.call(e, ae);
            },
            children: (ae, K) => {
              var ce = ag(), Ee = ge(W(ce), 2);
              Se(Ee, () => e.children ?? he);
              var z = ge(Ee);
              {
                var se = (Re) => {
                  var Ae = ig();
                  w(Re, Ae);
                };
                ie(z, (Re) => {
                  d() && Re(se);
                });
              }
              w(ae, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (ae) => b = ae,
        () => b
      );
    });
  }
  return w(t, te), Te(Z);
}
function og(t, e) {
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "icon", 3, ""), i = g(e, "disabled", 3, !1);
  sg(t, {
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
      Lo(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Et();
          Le(() => Ye(c, r())), w(u, c);
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
var lg = {
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
var ug = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lg;
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
  }(Gt)
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
var qr = {
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
var cg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qr;
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
      this.adapter.removeClass(qr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(qr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(qr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(qr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(qr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(qr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Gt)
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
var dg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Yl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fg = {
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
var hg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return dg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yl;
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
      n > 0 && (n += Yl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Gt)
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
var eo = {
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
}, vg = {
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
}, Ql = {
  LABEL_SCALE: 0.75
}, mg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], gg = [
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
var Jl = ["mousedown", "touchstart"], $l = ["click", "keydown"], pg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return eo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ql;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return gg.indexOf(n) >= 0;
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
        for (var s = Pt(Jl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Pt($l), d = c.next(); !d.done; d = c.next()) {
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
        for (var s = Pt(Jl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Pt($l), d = c.next(); !d.done; d = c.next()) {
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
        return mg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Ql.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(eo.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(eo.ARIA_DESCRIBEDBY);
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
  }(Gt)
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
var eu = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, bg = {
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
var tu = ["click", "keydown"], _g = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bg;
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
        for (var i = Pt(tu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(tu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", eu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Gt)
), yg = /* @__PURE__ */ fe("<span><!></span>"), Ig = /* @__PURE__ */ fe("<label><!></label>");
function bs(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), s = g(e, "required", 15, !1), u = g(e, "wrapped", 3, !1), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new vi(), f = Ce({}), m = Ce({}), v = ve("SMUI:generic:input:props") ?? {}, p = a();
  we(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let b = s();
  we(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const I = ve("SMUI:floating-label:mount"), E = ve("SMUI:floating-label:unmount");
  ot(() => {
    Y(
      d,
      new ug({
        addClass: A,
        removeClass: _,
        getWidth: () => {
          var O, B;
          const Z = X(), te = Z.cloneNode(!0);
          (O = Z.parentNode) == null || O.appendChild(te), te.classList.add("smui-floating-label--remove-transition"), te.classList.add("smui-floating-label--force-size"), te.classList.remove("mdc-floating-label--float-above");
          const H = te.scrollWidth;
          return (B = Z.parentNode) == null || B.removeChild(te), H;
        },
        registerInteractionHandler: (Z, te) => h.on(X(), Z, te),
        deregisterInteractionHandler: (Z, te) => h.off(X(), Z, te)
      }),
      !0
    );
    const P = {
      get element() {
        return X();
      },
      addStyle: S,
      removeStyle: y
    };
    return I && I(P), o(d).init(), () => {
      var Z;
      E && E(P), (Z = o(d)) == null || Z.destroy(), h.clear();
    };
  });
  function A(P) {
    f[P] || (f[P] = !0);
  }
  function _(P) {
    (!(P in f) || f[P]) && (f[P] = !1);
  }
  function S(P, Z) {
    m[P] != Z && (Z === "" || Z == null ? delete m[P] : m[P] = Z);
  }
  function y(P) {
    P in m && delete m[P];
  }
  function T(P) {
    var Z;
    (Z = o(d)) == null || Z.shake(P);
  }
  function C(P) {
    a(P);
  }
  function x(P) {
    s(P);
  }
  function N() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function X() {
    return c;
  }
  var k = { shake: T, float: C, setRequired: x, getWidth: N, getElement: X }, U = $(), ue = W(U);
  {
    var j = (P) => {
      var Z = yg();
      Ge(Z, (H, O) => ({ class: H, style: O, ...l }), [
        () => Ue({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([H, O]) => `${H}: ${O};`).concat([i()]).join(" ")
      ]);
      var te = de(Z);
      Se(te, () => e.children ?? he), Oe(Z, (H) => c = H, () => c), Fe(Z, (H, O) => Q == null ? void 0 : Q(H, O), n), w(P, Z);
    }, V = (P) => {
      var Z = Ig();
      Ge(
        Z,
        (H, O) => ({
          class: H,
          style: O,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ue({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([H, O]) => `${H}: ${O};`).concat([i()]).join(" ")
        ]
      );
      var te = de(Z);
      Se(te, () => e.children ?? he), Oe(Z, (H) => c = H, () => c), Fe(Z, (H, O) => Q == null ? void 0 : Q(H, O), n), w(P, Z);
    };
    ie(ue, (P) => {
      u() ? P(j) : P(V, !1);
    });
  }
  return w(t, U), Te(k);
}
var Eg = /* @__PURE__ */ fe("<div></div>");
function Qc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ Ie(void 0), c = new vi(), d = Ce({}), h = Ce({});
  ot(() => (Y(
    l,
    new cg({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (y, T) => c.on(A(), y, T),
      deregisterEventHandler: (y, T) => c.off(A(), y, T)
    }),
    !0
  ), o(l).init(), () => {
    var y;
    (y = o(l)) == null || y.destroy(), c.clear();
  }));
  function f(y) {
    return y in d ? d[y] : A().classList.contains(y);
  }
  function m(y) {
    d[y] || (d[y] = !0);
  }
  function v(y) {
    (!(y in d) || d[y]) && (d[y] = !1);
  }
  function p(y, T) {
    h[y] != T && (T === "" || T == null ? delete h[y] : h[y] = T);
  }
  function b() {
    var y;
    (y = o(l)) == null || y.activate();
  }
  function I() {
    var y;
    (y = o(l)) == null || y.deactivate();
  }
  function E(y) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(y);
  }
  function A() {
    return u;
  }
  var _ = { activate: b, deactivate: I, setRippleCenter: E, getElement: A }, S = Eg();
  return Ge(S, (y, T) => ({ class: y, style: T, ...s }), [
    () => Ue({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([y, T]) => `${y}: ${T};`).concat([i()]).join(" ")
  ]), Oe(S, (y) => u = y, () => u), Fe(S, (y, T) => Q == null ? void 0 : Q(y, T), n), w(t, S), Te(_);
}
var Sg = /* @__PURE__ */ fe('<div class="mdc-notched-outline__notch"><!></div>'), Ag = /* @__PURE__ */ fe('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Jc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ Ie(void 0), c = /* @__PURE__ */ Ie(void 0), d = Ce({}), h = Ce({}), f;
  we(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(c));
  }), le("SMUI:floating-label:mount", (C) => {
    Y(c, C, !0);
  }), le("SMUI:floating-label:unmount", () => {
    Y(c, void 0);
  }), ot(() => (Y(
    l,
    new hg({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (C) => p("width", C + "px"),
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
  function p(C, x) {
    h[C] != x && (x === "" || x == null ? delete h[C] : h[C] = x);
  }
  function b(C) {
    C in h && delete h[C];
  }
  function I(C) {
    var x;
    (x = o(l)) == null || x.notch(C);
  }
  function E() {
    var C;
    (C = o(l)) == null || C.closeNotch();
  }
  function A() {
    return u;
  }
  var _ = { notch: I, closeNotch: E, getElement: A }, S = Ag();
  Ge(S, (C) => ({ class: C, ...s }), [
    () => Ue({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var y = ge(de(S), 2);
  {
    var T = (C) => {
      var x = Sg(), N = de(x);
      Se(N, () => e.children ?? he), Le((X) => vt(x, X), [
        () => Object.entries(h).map(([X, k]) => `${X}: ${k};`).join(" ")
      ]), w(C, x);
    };
    ie(y, (C) => {
      a() || C(T);
    });
  }
  return Oe(S, (C) => u = C, () => u), Fe(S, (C, x) => Q == null ? void 0 : Q(C, x), n), w(t, S), Te(_);
}
function ta(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, mi), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), u = g(e, "_smuiClassMap", 23, () => ({})), l = g(e, "_smuiContexts", 19, () => ({})), c = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  Object.entries(u()).forEach(([I, E]) => {
    const A = ve(E);
    A && "subscribe" in A && f.push(A.subscribe((_) => {
      u()[I] = _;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && le(I, l()[I]);
  pn(() => {
    for (const I of f)
      I();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, p = $(), b = W(p);
  {
    let I = /* @__PURE__ */ _e(() => Ue({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    hr(b, i, (E, A) => {
      Oe(
        A(E, $e(
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
            children: (_, S) => {
              var y = $(), T = W(y);
              Se(T, () => e.children ?? he), w(_, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return w(t, p), Te(v);
}
function Cg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = $(), c = W(l);
        Se(c, () => e.children ?? he), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function xg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = W(l);
          Se(c, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Tg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = W(l);
          Se(c, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var wg = /* @__PURE__ */ fe("<input/>");
function Og(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), s = g(e, "value", 15), u = g(e, "files", 15, null), l = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), h = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => s() === null), m = g(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ qe(e, [
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
  ]), p, b = Ce({}), I = Ce({});
  we(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), ot(() => {
    d() && h() && c(N().matches(":invalid"));
  });
  function E(j) {
    return j === "" ? Number.NaN : +j;
  }
  function A(j) {
    if (i() === "file") {
      u(j.currentTarget.files);
      return;
    }
    if (j.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (j.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(j.currentTarget.value));
        break;
      default:
        s(j.currentTarget.value);
        break;
    }
  }
  function _(j) {
    (i() === "file" || i() === "range") && A(j), l(!0), d() && c(N().matches(":invalid"));
  }
  function S(j) {
    return j in b ? b[j] ?? null : N().getAttribute(j);
  }
  function y(j, V) {
    b[j] !== V && (b[j] = V);
  }
  function T(j) {
    (!(j in b) || b[j] != null) && (b[j] = void 0);
  }
  function C() {
    N().focus();
  }
  function x() {
    N().blur();
  }
  function N() {
    return p;
  }
  var X = { getAttr: S, addAttr: y, removeAttr: T, focus: C, blur: x, getElement: N }, k = wg(), U = (j) => {
    var V;
    i() !== "file" && A(j), (V = e.oninput) == null || V.call(e, j);
  }, ue = (j) => {
    var V;
    _(j), (V = e.onchange) == null || V.call(e, j);
  };
  return Ge(
    k,
    (j) => ({
      class: j,
      type: i(),
      placeholder: a(),
      ...I,
      ...b,
      ...v,
      oninput: U,
      onchange: ue
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Oe(k, (j) => p = j, () => p), Fe(k, (j, V) => Q == null ? void 0 : Q(j, V), n), w(t, k), Te(X);
}
var Lg = /* @__PURE__ */ fe("<textarea></textarea>");
function Rg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), s = g(e, "dirty", 15, !1), u = g(e, "invalid", 15, !1), l = g(e, "updateInvalid", 3, !0), c = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, m = Ce({});
  ot(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function v() {
    s(!0), l() && u(_().matches(":invalid"));
  }
  function p(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, x) {
    m[C] !== x && (m[C] = x);
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
  var S = { getAttr: p, addAttr: b, removeAttr: I, focus: E, blur: A, getElement: _ }, y = Lg(), T = (C) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, C);
  };
  return Ge(
    y,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Oe(y, (C) => f = C, () => f), Fe(y, (C, x) => Q == null ? void 0 : Q(C, x), n), di(() => Sa(y, a)), w(t, y), Te(S);
}
var Dg = /* @__PURE__ */ fe('<span class="mdc-text-field__ripple"></span>'), Mg = /* @__PURE__ */ fe("<!> <!>", 1), Hg = /* @__PURE__ */ fe("<span><!> <!></span>"), Pg = /* @__PURE__ */ fe("<!> <!> <!>", 1), Ng = /* @__PURE__ */ fe("<label><!> <!> <!> <!> <!> <!> <!></label>"), Ug = /* @__PURE__ */ fe("<div><!> <!> <!> <!> <!></div>"), Fg = /* @__PURE__ */ fe("<!> <!>", 1);
function Ro(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Kc;
  let r = () => {
  };
  function i(D) {
    return D === r;
  }
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "style", 3, ""), l = g(e, "ripple", 3, !0), c = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), h = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => h() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "type", 3, "text"), p = g(e, "value", 15), b = g(e, "files", 15, r), I = g(e, "invalid", 15, r), E = g(e, "updateInvalid", 19, () => i(I())), A = g(e, "initialInvalid", 3, !1), _ = g(e, "dirty", 15, !1), S = g(e, "validateOnValueChange", 19, E), y = g(e, "useNativeValidation", 19, E), T = g(e, "withLeadingIcon", 3, r), C = g(e, "withTrailingIcon", 3, r), x = g(e, "input", 7), N = g(e, "floatingLabel", 7), X = g(e, "lineRipple", 7), k = g(e, "notchedOutline", 7), U = /* @__PURE__ */ qe(e, [
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
  const ue = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(I()) && I(!1);
  let j, V = /* @__PURE__ */ Ie(void 0), P = new vi(), Z = Ce({}), te = Ce({}), H = /* @__PURE__ */ Ie(void 0), O = /* @__PURE__ */ Ie(!1), B = /* @__PURE__ */ Ie(Ce(A())), G = ve("SMUI:addLayoutListener"), oe, ee, re = new Promise((D) => ee = D), F, ae, K, ce;
  const Ee = /* @__PURE__ */ _e(() => x() && x().getElement());
  we(() => {
    (_() || o(B) || !E()) && o(V) && o(V).isValid() !== !I() && (E() ? I(!o(V).isValid()) : o(V).setValid(!I()));
  }), we(() => {
    o(V) && o(V).getValidateOnValueChange() !== S() && o(V).setValidateOnValueChange(i(S()) ? !1 : S());
  }), we(() => {
    o(V) && o(V).setUseNativeValidation(i(y()) ? !0 : y());
  }), we(() => {
    o(V) && o(V).setDisabled(c());
  });
  let z = p();
  we(() => {
    if (o(V) && ue && z !== p()) {
      z = p();
      const D = `${p() == null ? "" : p()}`;
      o(V).getValue() !== D && o(V).setValue(D);
    }
  }), G && (oe = G(R)), le("SMUI:textfield:leading-icon:mount", (D) => {
    F = D;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    F = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (D) => {
    ae = D;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    ae = void 0;
  }), le("SMUI:textfield:helper-text:id", (D) => {
    Y(H, D, !0);
  }), le("SMUI:textfield:helper-text:mount", (D) => {
    K = D;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    Y(H, void 0), K = void 0;
  }), le("SMUI:textfield:character-counter:mount", (D) => {
    ce = D;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    ce = void 0;
  }), ot(() => {
    var D;
    if (Y(
      V,
      new pg(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: Ae,
          hasClass: se,
          registerTextFieldInteractionHandler: (J, De) => P.on(q(), J, De),
          deregisterTextFieldInteractionHandler: (J, De) => P.off(q(), J, De),
          registerValidationAttributeChangeHandler: (J) => {
            const De = (wt) => wt.map((jt) => jt.attributeName).filter((jt) => jt), lt = new MutationObserver((wt) => {
              y() && J(De(wt));
            }), at = { attributes: !0 };
            return x() && lt.observe(x().getElement(), at), lt;
          },
          deregisterValidationAttributeChangeHandler: (J) => {
            J.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var J;
            return ((J = x()) == null ? void 0 : J.getElement()) ?? null;
          },
          setInputAttr: (J, De) => {
            var lt;
            (lt = x()) == null || lt.addAttr(J, De);
          },
          removeInputAttr: (J) => {
            var De;
            (De = x()) == null || De.removeAttr(J);
          },
          isFocused: () => {
            var J;
            return document.activeElement === ((J = x()) == null ? void 0 : J.getElement());
          },
          registerInputInteractionHandler: (J, De) => {
            var at;
            const lt = (at = x()) == null ? void 0 : at.getElement();
            if (lt) {
              const wt = n();
              P.on(lt, J, De, typeof wt == "boolean" ? { capture: wt } : wt);
            }
          },
          deregisterInputInteractionHandler: (J, De) => {
            var at;
            const lt = (at = x()) == null ? void 0 : at.getElement();
            lt && P.off(lt, J, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (J) => N() && N().float(J),
          getLabelWidth: () => N() ? N().getWidth() : 0,
          hasLabel: () => !!N(),
          shakeLabel: (J) => N() && N().shake(J),
          setLabelRequired: (J) => N() && N().setRequired(J),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => X() && X().activate(),
          deactivateLineRipple: () => X() && X().deactivate(),
          setLineRippleTransformOrigin: (J) => X() && X().setRippleCenter(J),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (J) => k() && k().notch(J)
        },
        {
          get helperText() {
            return K;
          },
          get characterCounter() {
            return ce;
          },
          get leadingIcon() {
            return F;
          },
          get trailingIcon() {
            return ae;
          }
        }
      ),
      !0
    ), ue) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (D = o(V)) == null || D.init();
    } else
      lc().then(() => {
        var J;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (J = o(V)) == null || J.init();
      });
    return ee(), () => {
      var J;
      (J = o(V)) == null || J.destroy(), P.clear();
    };
  }), pn(() => {
    oe && oe();
  });
  function se(D) {
    return D in Z ? Z[D] ?? null : q().classList.contains(D);
  }
  function Re(D) {
    Z[D] || (Z[D] = !0);
  }
  function Ae(D) {
    (!(D in Z) || Z[D]) && (Z[D] = !1);
  }
  function He(D, J) {
    te[D] != J && (J === "" || J == null ? delete te[D] : te[D] = J);
  }
  function Ke() {
    var D;
    (D = x()) == null || D.focus();
  }
  function dt() {
    var D;
    (D = x()) == null || D.blur();
  }
  function R() {
    if (o(V)) {
      const D = o(V).shouldFloat;
      o(V).notchOutline(D);
    }
  }
  function q() {
    return j;
  }
  var me = { focus: Ke, blur: dt, layout: R, getElement: q }, ke = Fg(), xt = W(ke);
  {
    var Tt = (D) => {
      var J = Ng();
      Ge(J, (Pe, tt, et) => ({ class: Pe, style: tt, for: void 0, ...et }), [
        () => Ue({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(O) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...Z,
          [s()]: !0
        }),
        () => Object.entries(te).map(([Pe, tt]) => `${Pe}: ${tt};`).concat([u()]).join(" "),
        () => li(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = de(J);
      {
        var lt = (Pe) => {
          var tt = Mg(), et = W(tt);
          {
            var Dt = (pt) => {
              var Ot = Dg();
              w(pt, Ot);
            };
            ie(et, (pt) => {
              f() === "filled" && pt(Dt);
            });
          }
          var fn = ge(et, 2);
          {
            var Ze = (pt) => {
              {
                let Ot = /* @__PURE__ */ _e(() => o(O) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Qe = /* @__PURE__ */ _e(() => ct(U, "label$"));
                Oe(
                  bs(pt, $e(
                    {
                      get floatAbove() {
                        return o(Ot);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Qe),
                    {
                      children: (Lt, qt) => {
                        var Zt = $(), _t = W(Zt);
                        {
                          var Mt = (bt) => {
                          }, sn = (bt) => {
                            var kr = $(), _n = W(kr);
                            {
                              var mr = (yn) => {
                                var Yn = Et();
                                Le(() => Ye(Yn, e.label)), w(yn, Yn);
                              }, na = (yn) => {
                                var Yn = $(), kn = W(Yn);
                                Se(kn, () => e.label), w(yn, Yn);
                              };
                              ie(
                                _n,
                                (yn) => {
                                  typeof e.label == "string" ? yn(mr) : yn(na, !1);
                                },
                                !0
                              );
                            }
                            w(bt, kr);
                          };
                          ie(_t, (bt) => {
                            e.label == null ? bt(Mt) : bt(sn, !1);
                          });
                        }
                        w(Lt, Zt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => N(Lt),
                  () => N()
                );
              }
            };
            ie(fn, (pt) => {
              !m() && e.label != null && pt(Ze);
            });
          }
          w(Pe, tt);
        };
        ie(De, (Pe) => {
          !h() && f() !== "outlined" && Pe(lt);
        });
      }
      var at = ge(De, 2);
      {
        var wt = (Pe) => {
          {
            let tt = /* @__PURE__ */ _e(() => m() || e.label == null), et = /* @__PURE__ */ _e(() => ct(U, "outline$"));
            Oe(
              Jc(Pe, $e(
                {
                  get noLabel() {
                    return o(tt);
                  }
                },
                () => o(et),
                {
                  children: (Dt, fn) => {
                    var Ze = $(), pt = W(Ze);
                    {
                      var Ot = (Qe) => {
                        {
                          let Lt = /* @__PURE__ */ _e(() => o(O) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), qt = /* @__PURE__ */ _e(() => ct(U, "label$"));
                          Oe(
                            bs(Qe, $e(
                              {
                                get floatAbove() {
                                  return o(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(qt),
                              {
                                children: (Zt, _t) => {
                                  var Mt = $(), sn = W(Mt);
                                  {
                                    var bt = (_n) => {
                                    }, kr = (_n) => {
                                      var mr = $(), na = W(mr);
                                      {
                                        var yn = (kn) => {
                                          var Br = Et();
                                          Le(() => Ye(Br, e.label)), w(kn, Br);
                                        }, Yn = (kn) => {
                                          var Br = $(), ks = W(Br);
                                          Se(ks, () => e.label), w(kn, Br);
                                        };
                                        ie(
                                          na,
                                          (kn) => {
                                            typeof e.label == "string" ? kn(yn) : kn(Yn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(_n, mr);
                                    };
                                    ie(sn, (_n) => {
                                      e.label == null ? _n(bt) : _n(kr, !1);
                                    });
                                  }
                                  w(Zt, Mt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Zt) => N(Zt),
                            () => N()
                          );
                        }
                      };
                      ie(pt, (Qe) => {
                        !m() && e.label != null && Qe(Ot);
                      });
                    }
                    w(Dt, Ze);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => k(Dt),
              () => k()
            );
          }
        };
        ie(at, (Pe) => {
          (h() || f() === "outlined") && Pe(wt);
        });
      }
      var jt = ge(at, 2);
      Ka(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Pe, tt) => {
          var et = $(), Dt = W(et);
          Se(Dt, () => e.leadingIcon ?? he), w(Pe, et);
        },
        $$slots: { default: !0 }
      });
      var vr = ge(jt, 2);
      Se(vr, () => e.children ?? he);
      var ft = ge(vr, 2);
      {
        var mt = (Pe) => {
          var tt = Hg(), et = de(tt);
          {
            let fn = /* @__PURE__ */ _e(() => ct(U, "input$"));
            Oe(
              Rg(et, $e(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(B);
                  },
                  get "aria-controls"() {
                    return o(H);
                  },
                  get "aria-describedby"() {
                    return o(H);
                  }
                },
                () => o(fn),
                {
                  onblur: (Ze) => {
                    var pt;
                    Y(O, !1), Y(B, !0), We(q(), "blur", Ze), (pt = e.input$onblur) == null || pt.call(e, Ze);
                  },
                  onfocus: (Ze) => {
                    var pt;
                    Y(O, !0), We(q(), "focus", Ze), (pt = e.input$onfocus) == null || pt.call(e, Ze);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ze) {
                    p(Ze);
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
              (Ze) => x(Ze),
              () => x()
            );
          }
          var Dt = ge(et, 2);
          Se(Dt, () => e.internalCounter ?? he), Le((fn) => Zo(tt, 1, fn), [
            () => gc(Ue({
              "mdc-text-field__resizer": !("input$resizable" in U) || e.input$resizable
            }))
          ]), w(Pe, tt);
        }, Ft = (Pe) => {
          var tt = Pg(), et = W(tt);
          {
            var Dt = (Ot) => {
              var Qe = $(), Lt = W(Qe);
              {
                var qt = (_t) => {
                  xg(_t, {
                    children: (Mt, sn) => {
                      var bt = Et();
                      Le(() => Ye(bt, e.prefix)), w(Mt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Zt = (_t) => {
                  var Mt = $(), sn = W(Mt);
                  Se(sn, () => e.prefix ?? he), w(_t, Mt);
                };
                ie(Lt, (_t) => {
                  typeof e.prefix == "string" ? _t(qt) : _t(Zt, !1);
                });
              }
              w(Ot, Qe);
            };
            ie(et, (Ot) => {
              e.prefix != null && Ot(Dt);
            });
          }
          var fn = ge(et, 2);
          {
            let Ot = /* @__PURE__ */ _e(() => ct(U, "input$"));
            Oe(
              Og(fn, $e(
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
                    return E();
                  },
                  get initialInvalid() {
                    return o(B);
                  },
                  get "aria-controls"() {
                    return o(H);
                  },
                  get "aria-describedby"() {
                    return o(H);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Ot),
                {
                  onblur: (Qe) => {
                    var Lt;
                    Y(O, !1), Y(B, !0), We(q(), "blur", Qe), (Lt = e.input$onblur) == null || Lt.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var Lt;
                    Y(O, !0), We(q(), "focus", Qe), (Lt = e.input$onfocus) == null || Lt.call(e, Qe);
                  },
                  get value() {
                    return p();
                  },
                  set value(Qe) {
                    p(Qe);
                  },
                  get files() {
                    return b();
                  },
                  set files(Qe) {
                    b(Qe);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Qe) {
                    _(Qe);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Qe) {
                    I(Qe);
                  }
                }
              )),
              (Qe) => x(Qe),
              () => x()
            );
          }
          var Ze = ge(fn, 2);
          {
            var pt = (Ot) => {
              var Qe = $(), Lt = W(Qe);
              {
                var qt = (_t) => {
                  Tg(_t, {
                    children: (Mt, sn) => {
                      var bt = Et();
                      Le(() => Ye(bt, e.suffix)), w(Mt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Zt = (_t) => {
                  var Mt = $(), sn = W(Mt);
                  Se(sn, () => e.suffix ?? he), w(_t, Mt);
                };
                ie(Lt, (_t) => {
                  typeof e.suffix == "string" ? _t(qt) : _t(Zt, !1);
                });
              }
              w(Ot, Qe);
            };
            ie(Ze, (Ot) => {
              e.suffix != null && Ot(pt);
            });
          }
          w(Pe, tt);
        };
        ie(ft, (Pe) => {
          h() && typeof p() == "string" ? Pe(mt) : Pe(Ft, !1);
        });
      }
      var Un = ge(ft, 2);
      Ka(Un, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Pe, tt) => {
          var et = $(), Dt = W(et);
          Se(Dt, () => e.trailingIcon ?? he), w(Pe, et);
        },
        $$slots: { default: !0 }
      });
      var gi = ge(Un, 2);
      {
        var Fn = (Pe) => {
          {
            let tt = /* @__PURE__ */ _e(() => ct(U, "ripple$"));
            Oe(Qc(Pe, $e(() => o(tt))), (et) => X(et), () => X());
          }
        };
        ie(gi, (Pe) => {
          !h() && f() !== "outlined" && l() && Pe(Fn);
        });
      }
      Oe(J, (Pe) => j = Pe, () => j), Fe(J, (Pe, tt) => Jt == null ? void 0 : Jt(Pe, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: He,
        eventTarget: o(Ee),
        activeTarget: o(Ee),
        initPromise: re
      })), Fe(J, (Pe, tt) => Q == null ? void 0 : Q(Pe, tt), a), w(D, J);
    }, dn = (D) => {
      var J = Ug();
      Ge(J, (ft, mt, Ft) => ({ class: ft, style: mt, ...Ft }), [
        () => Ue({
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
          ...Z,
          [s()]: !0
        }),
        () => Object.entries(te).map(([ft, mt]) => `${ft}: ${mt};`).concat([u()]).join(" "),
        () => li(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = de(J);
      {
        var lt = (ft) => {
          var mt = $(), Ft = W(mt);
          Se(Ft, () => e.label ?? he), w(ft, mt);
        };
        ie(De, (ft) => {
          typeof e.label != "string" && ft(lt);
        });
      }
      var at = ge(De, 2);
      Ka(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, mt) => {
          var Ft = $(), Un = W(Ft);
          Se(Un, () => e.leadingIcon ?? he), w(ft, Ft);
        },
        $$slots: { default: !0 }
      });
      var wt = ge(at, 2);
      Se(wt, () => e.children ?? he);
      var jt = ge(wt, 2);
      Ka(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, mt) => {
          var Ft = $(), Un = W(Ft);
          Se(Un, () => e.trailingIcon ?? he), w(ft, Ft);
        },
        $$slots: { default: !0 }
      });
      var vr = ge(jt, 2);
      Se(vr, () => e.line ?? he), Oe(J, (ft) => j = ft, () => j), Fe(J, (ft, mt) => Jt == null ? void 0 : Jt(ft, mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: He
      })), Fe(J, (ft, mt) => Q == null ? void 0 : Q(ft, mt), a), w(D, J);
    };
    ie(xt, (D) => {
      ue ? D(Tt) : D(dn, !1);
    });
  }
  var ye = ge(xt, 2);
  {
    var M = (D) => {
      {
        let J = /* @__PURE__ */ _e(() => ct(U, "helperLine$"));
        Cg(D, $e(() => o(J), {
          children: (De, lt) => {
            var at = $(), wt = W(at);
            Se(wt, () => e.helper ?? he), w(De, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ie(ye, (D) => {
      e.helper && D(M);
    });
  }
  return w(t, ke), Te(me);
}
var kg = /* @__PURE__ */ fe("<i><!></i>");
function Bg(t, e) {
  xe(e, !0);
  const n = () => Pn(v, "$leadingStore", r), [r, i] = Zn();
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = g(e, "disabled", 3, !1), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ Ie(void 0), f = new vi(), m = Ce({});
  const v = ve("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ Ie(void 0);
  const I = /* @__PURE__ */ _e(() => ({ role: e.role, tabindex: u() })), E = ve("SMUI:textfield:leading-icon:mount"), A = ve("SMUI:textfield:leading-icon:unmount"), _ = ve("SMUI:textfield:trailing-icon:mount"), S = ve("SMUI:textfield:trailing-icon:unmount");
  ot(() => (Y(
    h,
    new _g({
      getAttr: y,
      setAttr: T,
      removeAttr: C,
      setContent: (V) => {
        Y(b, V, !0);
      },
      registerInteractionHandler: (V, P) => f.on(x(), V, P),
      deregisterInteractionHandler: (V, P) => f.off(x(), V, P),
      notifyIconAction: () => We(x(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var V;
    o(h) && (p ? A && A(o(h)) : S && S(o(h))), (V = o(h)) == null || V.destroy(), f.clear();
  }));
  function y(V) {
    return V in m ? m[V] ?? null : x().getAttribute(V);
  }
  function T(V, P) {
    m[V] !== P && (m[V] = P);
  }
  function C(V) {
    (!(V in m) || m[V] != null) && (m[V] = void 0);
  }
  function x() {
    return d;
  }
  var N = { getElement: x }, X = kg();
  Ge(
    X,
    (V) => ({
      class: V,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...m,
      ...c
    }),
    [
      () => Ue({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var k = de(X);
  {
    var U = (V) => {
      var P = $(), Z = W(P);
      Se(Z, () => e.children ?? he), w(V, P);
    }, ue = (V) => {
      var P = Et();
      Le(() => Ye(P, o(b))), w(V, P);
    };
    ie(k, (V) => {
      o(b) == null ? V(U) : V(ue, !1);
    });
  }
  Oe(X, (V) => d = V, () => d), Fe(X, (V, P) => Q == null ? void 0 : Q(V, P), a), w(t, X);
  var j = Te(N);
  return i(), j;
}
function Vg(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), u = g(e, "styles", 3, ""), l = g(e, "required", 3, !1), c = g(e, "oninput", 3, () => {
  });
  var d = $(), h = W(d);
  {
    var f = (v) => {
      {
        const p = (I) => {
          Bg(I, {
            class: "material-icons",
            children: (E, A) => {
              var _ = Et();
              Le(() => Ye(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ _e(() => `width: 100%; ${u()}`);
        Ro(v, {
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
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      Ro(v, {
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
        set value(p) {
          a(p);
        }
      });
    };
    ie(h, (v) => {
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
var Gg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, jg = {
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
}, ca = {
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
}, It;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(It || (It = {}));
var ii;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ii || (ii = {}));
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
var pr, er, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
pr = {}, pr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", pr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", pr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", pr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", pr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", pr["" + je.ROOT] = "mdc-list";
var Ei = (er = {}, er["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", er["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", er["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", er["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", er["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", er["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", er["" + je.ROOT] = "mdc-deprecated-list", er), br = {
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
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + Ei[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` a,
    .` + Ei[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ei[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, yt = {
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
var qg = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    qg.indexOf(n) === -1 && t.preventDefault();
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
function zg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Wg(t, e) {
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
function Do(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    ed(e);
  }, yt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Xg(i, a, u, e) : l = Kg(i, u, e), l !== -1 && !s && r(l), l;
}
function Xg(t, e, n, r) {
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
function Kg(t, e, n) {
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
function $c(t) {
  return t.typeaheadBuffer.length > 0;
}
function ed(t) {
  t.typeaheadBuffer = "";
}
function nu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = At(n) === "ArrowLeft", c = At(n) === "ArrowUp", d = At(n) === "ArrowRight", h = At(n) === "ArrowDown", f = At(n) === "Home", m = At(n) === "End", v = At(n) === "Enter", p = At(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || m || v)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    En(n);
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Do(I, e);
  }
  if (!p)
    return -1;
  r && En(n);
  var E = r && $c(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Do(I, e);
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
function Zg(t) {
  return t instanceof Array;
}
var Yg = ["Alt", "Control", "Meta", "Shift"];
function ru(t) {
  var e = new Set(t ? Yg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Qg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = yt.UNSET_INDEX, r.focusedItemIndex = yt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = zg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yt;
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
      if (n !== yt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = yt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && $c(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, u = At(n) === "ArrowLeft", l = At(n) === "ArrowUp", c = At(n) === "ArrowRight", d = At(n) === "ArrowDown", h = At(n) === "Home", f = At(n) === "End", m = At(n) === "Enter", v = At(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, I = n.key === "A" || n.key === "a", E = ru(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || h) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
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
          nu(_, this.typeaheadState);
        }
        return;
      }
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (p && E([]))
          En(n), this.focusNextElement(S);
        else if (b && E([]))
          En(n), this.focusPrevElement(S);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          En(n);
          var A = this.focusNextElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          En(n);
          var A = this.focusPrevElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && E([]))
          En(n), this.focusFirstElement();
        else if (f && E([]))
          En(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (I && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var y = n.target;
            if (y && y.tagName === "A" && m || (En(n), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var y = n.target;
          if (y && y.tagName === "A" && m || (En(n), this.isIndexDisabled(S)))
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
          nu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = ru(i);
      n !== yt.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, br.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, br.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== yt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== yt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === yt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, br.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? br.ARIA_CURRENT : br.ARIA_SELECTED;
      if (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== yt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? br.ARIA_SELECTED : br.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === yt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Or([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Wn([], Or(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === yt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== yt.UNSET_INDEX ? this.selectedIndex : Zg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === yt.UNSET_INDEX;
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
      var u = this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Do(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Wg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ed(this.typeaheadState);
    }, e;
  }(Gt)
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
var td = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ii.TOP_START, r.originCorner = ii.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ii;
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
      this.originCorner = this.originCorner ^ It.RIGHT;
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
        }, ca.TRANSITION_OPEN_DURATION);
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
          }, ca.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, It.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, It.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[s] = u, n[a] = l, n);
      d.width / h.width > ca.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, It.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, It.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, It.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, It.FLIP_RTL), v = this.hasBit(this.anchorCorner, It.RIGHT) || this.hasBit(n, It.RIGHT), p = !1;
      f && m ? p = !v : p = v;
      var b, I;
      p ? (b = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var E = b - s.width > 0, A = I - s.width > 0, _ = this.hasBit(n, It.FLIP_RTL) && this.hasBit(n, It.RIGHT);
      return A && _ && f || !E && _ ? n = this.unsetBit(n, It.RIGHT) : (E && p && f || E && !p && v || !A && b >= I) && (n = this.setBit(n, It.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, It.BOTTOM), s = this.hasBit(this.anchorCorner, It.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, It.RIGHT), a = this.hasBit(this.anchorCorner, It.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, It.BOTTOM), a = this.hasBit(this.anchorCorner, It.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Pt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          v += u[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
        }
      } catch (p) {
        r = { error: p };
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
      }, ca.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Gt)
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
var iu = {
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
function Jg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function $g(t, e) {
  if (Jg(t) && e in iu) {
    var n = t.document.createElement("div"), r = iu[e], i = r.standard, a = r.prefixed, s = i in n.style;
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
var Hi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Si = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, ep = {
  FOCUS_ROOT_INDEX: -1
}, Oi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Oi || (Oi = {}));
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
var tp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Oi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ep;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Si.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, td.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Oi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Oi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Oi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Si.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Hi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Hi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Si.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Si.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Si.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Gt)
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
var gt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, to = {
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
}, zr = {
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
var np = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = zr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return to;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === zr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== zr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(gt.FOCUSED), i = n || r, a = this.adapter.hasClass(gt.REQUIRED);
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
      this.adapter.removeClass(gt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(gt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(gt.FOCUSED))) {
        var r = At(n) === Ne.ENTER, i = At(n) === Ne.SPACEBAR, a = At(n) === Ne.ARROW_UP, s = At(n) === Ne.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(gt.FOCUSED);
        if (n) {
          var i = zr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== zr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ii.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(to.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(to.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Gt)
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
var Wr = {
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
var rp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wr;
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
      return this.adapter.getAttr(Wr.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), n ? this.adapter.removeAttr(Wr.ROLE) : this.adapter.setAttr(Wr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Wr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Wr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Wr.ARIA_HIDDEN, "true");
    }, e;
  }(Gt)
), ip = /* @__PURE__ */ fe("<div><!></div>");
function ap(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), s = g(e, "anchor", 3, !0), u = g(e, "fixed", 3, !1), l = g(e, "open", 31, () => Ce(a())), c = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), h = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), b = g(e, "openBottomBias", 3, 0), I = g(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ qe(e, [
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
  ]), A, _ = /* @__PURE__ */ Ie(void 0), S = Ce({}), y = Ce({}), T = /* @__PURE__ */ Ie(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), we(() => {
    var F, ae;
    A && s() && !((F = A.parentElement) != null && F.classList.contains("mdc-menu-surface--anchor")) && ((ae = A.parentElement) == null || ae.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), we(() => {
    o(_) && o(_).isOpen() !== l() && (l() ? o(_).open() : o(_).close());
  }), we(() => {
    o(_) && o(_).setQuickOpen(h());
  }), we(() => {
    o(_) && o(_).setFixedPosition(u());
  }), we(() => {
    o(_) && o(_).setMaxHeight(v());
  }), we(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = ii;
  we(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(C[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), we(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), we(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const x = ve("SMUI:menu-surface:mount"), N = ve("SMUI:menu-surface:unmount");
  ot(() => {
    Y(
      _,
      new td({
        addClass: k,
        removeClass: U,
        hasClass: X,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || We(B(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || We(B(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && We(B(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || We(B(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ae) => B().contains(ae),
        isRtl: () => getComputedStyle(B()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ae) => {
          y["transform-origin"] = ae;
        },
        isFocused: () => document.activeElement === B(),
        saveFocus: () => {
          Y(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!A || B().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: B().offsetWidth,
          height: B().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ae) => {
          y.left = "left" in ae ? `${ae.left}px` : "", y.right = "right" in ae ? `${ae.right}px` : "", y.top = "top" in ae ? `${ae.top}px` : "", y.bottom = "bottom" in ae ? `${ae.bottom}px` : "";
        },
        setMaxHeight: (ae) => {
          y["max-height"] = ae;
        }
      }),
      !0
    );
    const F = {
      get open() {
        return l();
      },
      set open(ae) {
        l(ae);
      },
      closeProgrammatic: ue
    };
    return x && x(F), o(_).init(), () => {
      var K, ce;
      N && N(F);
      const ae = o(_).isHoistedElement;
      (K = o(_)) == null || K.destroy(), ae && ((ce = B().parentNode) == null || ce.removeChild(B()));
    };
  }), pn(() => {
    var F;
    s() && B() && ((F = B().parentElement) == null || F.classList.remove("mdc-menu-surface--anchor"));
  });
  function X(F) {
    return F in S ? S[F] : B().classList.contains(F);
  }
  function k(F) {
    S[F] || (S[F] = !0);
  }
  function U(F) {
    (!(F in S) || S[F]) && (S[F] = !1);
  }
  function ue(F) {
    var ae;
    (ae = o(_)) == null || ae.close(F), l(!1);
  }
  function j(F) {
    o(_) && l() && !c() && o(_).handleBodyClick(F);
  }
  function V() {
    return l();
  }
  function P(F) {
    l(F);
  }
  function Z(F, ae) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(F, ae);
  }
  function te(F) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(F);
  }
  function H() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).isFixed();
  }
  function O() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).flipCornerHorizontally();
  }
  function B() {
    return A;
  }
  var G = {
    isOpen: V,
    setOpen: P,
    setAbsolutePosition: Z,
    setIsHoisted: te,
    isFixed: H,
    flipCornerHorizontally: O,
    getElement: B
  }, oe = ip();
  ur("click", zo.body, j, !0);
  var ee = (F) => {
    var ae;
    o(_) && !c() && o(_).handleKeydown(F), (ae = e.onkeydown) == null || ae.call(e, F);
  };
  Ge(
    oe,
    (F, ae) => ({
      class: F,
      style: ae,
      role: "dialog",
      ...E,
      onkeydown: ee
    }),
    [
      () => Ue({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(y).map(([F, ae]) => `${F}: ${ae};`).concat([i()]).join(" ")
    ]
  );
  var re = de(oe);
  return Se(re, () => e.children ?? he), Oe(oe, (F) => A = F, () => A), Fe(oe, (F, ae) => Q == null ? void 0 : Q(F, ae), n), w(t, oe), Te(G);
}
function no(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function sp(t, e) {
  xe(e, !0);
  const { closest: n } = Fa;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), s = g(e, "anchorElement", 15), u = g(e, "managed", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = /* @__PURE__ */ Ie(void 0), f = /* @__PURE__ */ Ie(void 0);
  le("SMUI:menu-surface:mount", (C) => {
    o(h) || Y(h, C, !0);
  });
  const m = ve("SMUI:list:mount");
  le("SMUI:list:mount", (C) => {
    o(f) || Y(f, C, !0), m && m(C);
  });
  const v = ve("SMUI:menu:mount"), p = ve("SMUI:menu:unmount");
  ot(() => (Y(
    d,
    new tp({
      addClassToElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, x);
      },
      removeClassFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, x);
      },
      addAttributeToElementAtIndex: (C, x, N) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, x, N);
      },
      removeAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, x);
      },
      getAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, x);
      },
      elementContainsClass: (C, x) => C.classList.contains(x),
      closeSurface: (C) => {
        var x;
        u() || ((x = o(h)) == null || x.closeProgrammatic(C), We(y(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((x) => x.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        We(y(), "SMUIMenuSelected", {
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
        return !!n(o(f).getOrderedList()[C].element, `.${Hi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const x = o(f).getOrderedList(), N = n(x[C].element, `.${Hi.MENU_SELECTION_GROUP}`), X = N == null ? void 0 : N.querySelector(`.${Hi.MENU_SELECTED_LIST_ITEM}`);
        return X ? x.map((k) => k.element).indexOf(X) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var C;
    p && o(d) && p(o(d)), (C = o(d)) == null || C.destroy();
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
    return c;
  }
  function y() {
    return c.getElement();
  }
  var T = {
    isOpen: I,
    setOpen: E,
    setDefaultFocusState: A,
    getSelectedIndex: _,
    getMenuSurface: S,
    getElement: y
  };
  {
    let C = /* @__PURE__ */ _e(() => Ue({ "mdc-menu": !0, [i()]: !0 }));
    Oe(
      ap(t, $e(
        {
          get use() {
            return r();
          },
          get class() {
            return o(C);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (x) => {
            var N;
            b(x), (N = e.onkeydown) == null || N.call(e, x);
          },
          onSMUIMenuSurfaceOpened: (x) => {
            var N;
            o(d) && o(d).handleMenuSurfaceOpened(), (N = e.onSMUIMenuSurfaceOpened) == null || N.call(e, x);
          },
          onSMUIListAction: (x) => {
            var N;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[x.detail.index].element), (N = e.onSMUIListAction) == null || N.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(x) {
            s(x);
          },
          children: (x, N) => {
            var X = $(), k = W(X);
            Se(k, () => e.children ?? he), w(x, X);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => c = x,
      () => c
    );
  }
  return Te(T);
}
function op(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Fa;
  let i = ve("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "nonInteractive", 3, !1), l = g(e, "dense", 3, !1), c = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), h = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), v = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), I = g(e, "vertical", 3, !0), E = g(e, "wrapFocus", 19, () => ve("SMUI:list:wrapFocus") ?? !1), A = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), S = g(e, "selectedIndex", 31, () => -1), y = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), C = g(e, "hasTypeahead", 3, !1), x = g(e, "component", 3, mi), N = g(e, "tag", 3, i ? "nav" : "ul"), X = /* @__PURE__ */ qe(e, [
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
  ]), k, U = /* @__PURE__ */ Ie(void 0), ue = [], j = ve("SMUI:list:role");
  const V = /* @__PURE__ */ new WeakMap();
  let P = ve("SMUI:dialog:selection"), Z = ve("SMUI:addLayoutListener"), te;
  le("SMUI:list:nonInteractive", u()), le("SMUI:separator:context", "list"), j || (A() ? (j = "listbox", le("SMUI:list:item:role", "option")) : y() ? (j = "radiogroup", le("SMUI:list:item:role", "radio")) : T() ? (j = "group", le("SMUI:list:item:role", "checkbox")) : (j = "list", le("SMUI:list:item:role", void 0))), we(() => {
    o(U) && o(U).setVerticalOrientation(I());
  }), we(() => {
    o(U) && o(U).setWrapFocus(E());
  }), we(() => {
    o(U) && o(U).setHasTypeahead(C());
  }), we(() => {
    o(U) && o(U).setSingleSelection(A());
  }), we(() => {
    o(U) && o(U).setDisabledItemsFocusable(_());
  }), we(() => {
    o(U) && A() && R() !== S() && o(U).setSelectedIndex(S());
  }), Z && (te = Z(He)), le("SMUI:list:item:mount", (ye) => {
    ue.push(ye), V.set(ye.element, ye), A() && ye.selected && S(Ae(ye.element));
  }), le("SMUI:list:item:unmount", (ye) => {
    const M = (ye && ue.findIndex((D) => D === ye)) ?? -1;
    M !== -1 && (ue.splice(M, 1), V.delete(ye.element));
  });
  const H = ve("SMUI:list:mount"), O = ve("SMUI:list:unmount");
  ot(() => {
    Y(
      U,
      new Qg({
        addClassForElementIndex: K,
        focusItemAtIndex: me,
        getAttributeForElementIndex: (M, D) => {
          var J;
          return ((J = F()[M]) == null ? void 0 : J.getAttr(D)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? F().map((M) => M.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ue.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (M) => {
          var D;
          return ((D = F()[M]) == null ? void 0 : D.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (M) => {
          var D;
          return ((D = F()[M]) == null ? void 0 : D.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (M) => {
          const D = F()[M];
          return ((D == null ? void 0 : D.hasCheckbox) && D.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: ae,
        notifyAction: (M) => {
          S(M), k != null && We(ke(), "SMUIListAction", { index: M });
        },
        notifySelectionChange: (M) => {
          k != null && We(ke(), "SMUIListSelectionChange", { changedIndices: M });
        },
        removeClassForElementIndex: ce,
        setAttributeForElementIndex: Ee,
        setCheckedCheckboxOrRadioAtIndex: (M, D) => {
          F()[M].checked = D;
        },
        setTabIndexForListItemChildren: (M, D) => {
          const J = F()[M];
          Array.prototype.forEach.call(J.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", D);
          });
        }
      }),
      !0
    );
    const ye = {
      get element() {
        return ke();
      },
      get items() {
        return ue;
      },
      get typeaheadInProgress() {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).isTypeaheadInProgress();
      },
      typeaheadMatchItem(M, D) {
        if (!o(U))
          throw new Error("Instance is undefined.");
        return o(U).typeaheadMatchItem(
          M,
          D,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: F,
      focusItemAtIndex: me,
      addClassForElementIndex: K,
      removeClassForElementIndex: ce,
      setAttributeForElementIndex: Ee,
      removeAttributeForElementIndex: z,
      getAttributeFromElementIndex: se,
      getPrimaryTextAtIndex: Re
    };
    return H && H(ye), o(U).init(), o(U).layout(), () => {
      var M;
      O && O(ye), (M = o(U)) == null || M.destroy();
    };
  }), pn(() => {
    te && te();
  });
  function B(ye) {
    o(U) && ye.target && o(U).handleKeydown(ye, ye.target.classList.contains("mdc-deprecated-list-item"), Ae(ye.target));
  }
  function G(ye) {
    o(U) && ye.target && o(U).handleFocusIn(Ae(ye.target));
  }
  function oe(ye) {
    o(U) && ye.target && o(U).handleFocusOut(Ae(ye.target));
  }
  function ee(ye) {
    o(U) && ye.target && o(U).handleClick(Ae(ye.target), !r(ye.target, 'input[type="checkbox"], input[type="radio"]'), ye);
  }
  function re(ye) {
    if (y() || T()) {
      const M = Ae(ye.target);
      if (M !== -1) {
        const D = F()[M];
        D && (y() && !D.checked || T()) && (r(ye.detail.target, 'input[type="checkbox"], input[type="radio"]') || (D.checked = !D.checked), D.activateRipple(), window.requestAnimationFrame(() => {
          D.deactivateRipple();
        }));
      }
    }
  }
  function F() {
    return k == null ? [] : [...ke().children].map((ye) => V.get(ye)).filter((ye) => ye && ye._smui_list_item_accessor);
  }
  function ae(ye, M) {
    const D = F()[ye];
    return (D && D.hasClass(M)) ?? !1;
  }
  function K(ye, M) {
    const D = F()[ye];
    D && D.addClass(M);
  }
  function ce(ye, M) {
    const D = F()[ye];
    D && D.removeClass(M);
  }
  function Ee(ye, M, D) {
    const J = F()[ye];
    J && J.addAttr(M, D);
  }
  function z(ye, M) {
    const D = F()[ye];
    D && D.removeAttr(M);
  }
  function se(ye, M) {
    const D = F()[ye];
    return D ? D.getAttr(M) : null;
  }
  function Re(ye) {
    const M = F()[ye];
    return (M && M.getPrimaryText()) ?? "";
  }
  function Ae(ye) {
    const M = n(ye, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return M && r(M, ".mdc-deprecated-list-item") ? F().map((D) => D == null ? void 0 : D.element).indexOf(M) : -1;
  }
  function He() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).layout();
  }
  function Ke(ye, M) {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).setEnabled(ye, M);
  }
  function dt() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).isTypeaheadInProgress();
  }
  function R() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getSelectedIndex();
  }
  function q() {
    if (!o(U))
      throw new Error("Instance is undefined.");
    return o(U).getFocusedItemIndex();
  }
  function me(ye) {
    const M = F()[ye];
    M && "focus" in M.element && M.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var xt = {
    layout: He,
    setEnabled: Ke,
    getTypeaheadInProgress: dt,
    getSelectedIndex: R,
    getFocusedItemIndex: q,
    focusItemAtIndex: me,
    getElement: ke
  }, Tt = $(), dn = W(Tt);
  {
    let ye = /* @__PURE__ */ _e(() => Ue({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || P,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [s()]: !0
    }));
    hr(dn, x, (M, D) => {
      Oe(
        D(M, $e(
          {
            get tag() {
              return N();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ye);
            },
            get role() {
              return j;
            }
          },
          () => X,
          {
            onkeydown: (J) => {
              var De;
              B(J), (De = e.onkeydown) == null || De.call(e, J);
            },
            onfocusin: (J) => {
              var De;
              G(J), (De = e.onfocusin) == null || De.call(e, J);
            },
            onfocusout: (J) => {
              var De;
              oe(J), (De = e.onfocusout) == null || De.call(e, J);
            },
            onclick: (J) => {
              var De;
              ee(J), (De = e.onclick) == null || De.call(e, J);
            },
            onSMUIAction: (J) => {
              var De;
              re(J), (De = e.onSMUIAction) == null || De.call(e, J);
            },
            children: (J, De) => {
              var lt = $(), at = W(lt);
              Se(at, () => e.children ?? he), w(J, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => k = J,
        () => k
      );
    });
  }
  return w(t, Tt), Te(xt);
}
let lp = 0;
var up = /* @__PURE__ */ fe('<span class="mdc-deprecated-list-item__ripple"></span>'), cp = /* @__PURE__ */ fe("<!><!>", 1);
function dp(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(K) {
    return K === n;
  }
  let i = ve("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "style", 3, ""), l = g(e, "nonInteractive", 19, () => ve("SMUI:list:nonInteractive") ?? !1), c = g(e, "ripple", 19, () => !l()), d = g(e, "wrapper", 3, !1), h = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : ve("SMUI:list:item:role")), m = g(e, "selected", 15, !1), v = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), I = g(e, "inputId", 19, () => "SMUI-form-field-list-" + lp++), E = g(e, "component", 3, mi), A = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
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
  le("SMUI:list:nonInteractive", void 0), le("SMUI:list:item:role", void 0);
  let S, y = Ce({}), T = Ce({}), C = Ce({}), x = /* @__PURE__ */ Ie(void 0), N = /* @__PURE__ */ Ie(void 0);
  const X = /* @__PURE__ */ _e(() => r(b()) ? !l() && !v() && (m() || o(x) && o(x).checked) ? 0 : -1 : b());
  le("SMUI:generic:input:props", { id: I() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (K) => {
    ("_smui_checkbox_accessor" in K || "_smui_radio_accessor" in K) && Y(x, K, !0);
  }), le("SMUI:generic:input:unmount", () => {
    Y(x, void 0);
  });
  const k = ve("SMUI:list:item:mount"), U = ve("SMUI:list:item:unmount");
  ot(() => {
    if (!m() && !l()) {
      let ce = !0, Ee = S.getElement();
      for (; Ee.previousElementSibling; )
        if (Ee = Ee.previousElementSibling, Ee.nodeType === 1 && Ee.classList.contains("mdc-deprecated-list-item") && !Ee.classList.contains("mdc-deprecated-list-item--disabled")) {
          ce = !1;
          break;
        }
      ce && Y(N, window.requestAnimationFrame(() => O(Ee)), !0);
    }
    const K = {
      _smui_list_item_accessor: !0,
      get element() {
        return ee();
      },
      get selected() {
        return m();
      },
      set selected(ce) {
        m(ce);
      },
      hasClass: ue,
      addClass: j,
      removeClass: V,
      getAttr: Z,
      addAttr: te,
      removeAttr: H,
      getPrimaryText: oe,
      // For inputs within item.
      get checked() {
        return (o(x) && o(x).checked) ?? !1;
      },
      set checked(ce) {
        o(x) && (o(x).checked = !!ce);
      },
      get hasCheckbox() {
        return !!(o(x) && "_smui_checkbox_accessor" in o(x));
      },
      get hasRadio() {
        return !!(o(x) && "_smui_radio_accessor" in o(x));
      },
      activateRipple() {
        o(x) && o(x).activateRipple();
      },
      deactivateRipple() {
        o(x) && o(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: G,
      get tabindex() {
        return o(X);
      },
      set tabindex(ce) {
        b(ce);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(ce) {
        h(ce);
      }
    };
    return k && k(K), () => {
      U && U(K);
    };
  }), pn(() => {
    o(N) && window.cancelAnimationFrame(o(N));
  });
  function ue(K) {
    return K in y ? y[K] : ee().classList.contains(K);
  }
  function j(K) {
    y[K] || (y[K] = !0);
  }
  function V(K) {
    (!(K in y) || y[K]) && (y[K] = !1);
  }
  function P(K, ce) {
    T[K] != ce && (ce === "" || ce == null ? delete T[K] : T[K] = ce);
  }
  function Z(K) {
    return K in C ? C[K] ?? null : ee().getAttribute(K);
  }
  function te(K, ce) {
    C[K] !== ce && (C[K] = ce);
  }
  function H(K) {
    (!(K in C) || C[K] != null) && (C[K] = void 0);
  }
  function O(K) {
    let ce = !0;
    for (; K.nextElementSibling; )
      if (K = K.nextElementSibling, K.nodeType === 1 && K.classList.contains("mdc-deprecated-list-item")) {
        const Ee = K.attributes.getNamedItem("tabindex");
        if (Ee && Ee.value === "0") {
          ce = !1;
          break;
        }
      }
    ce && b(0);
  }
  function B(K) {
    const ce = K.key === "Enter", Ee = K.key === "Space";
    (ce || Ee) && G(K);
  }
  function G(K) {
    v() || We(ee(), "SMUIAction", K);
  }
  function oe() {
    const K = ee(), ce = K.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ce)
      return ce.textContent ?? "";
    const Ee = K.querySelector(".mdc-deprecated-list-item__text");
    return Ee ? Ee.textContent ?? "" : K.textContent ?? "";
  }
  function ee() {
    return S.getElement();
  }
  var re = { action: G, getPrimaryText: oe, getElement: ee }, F = $(), ae = W(F);
  {
    let K = /* @__PURE__ */ _e(() => [
      ...l() ? [] : [
        [
          Jt,
          {
            ripple: !o(x),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: j,
            removeClass: V,
            addStyle: P
          }
        ]
      ],
      ...a()
    ]), ce = /* @__PURE__ */ _e(() => Ue({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...y,
      [s()]: !0
    })), Ee = /* @__PURE__ */ _e(() => Object.entries(T).map(([se, Re]) => `${se}: ${Re};`).concat([u()]).join(" ")), z = /* @__PURE__ */ _e(() => p() || void 0);
    hr(ae, E, (se, Re) => {
      Oe(
        Re(se, $e(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(K);
            },
            get class() {
              return o(ce);
            },
            get style() {
              return o(Ee);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(x) && o(x).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(z);
            },
            get tabindex() {
              return o(X);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (Ae) => {
              var He;
              G(Ae), (He = e.onclick) == null || He.call(e, Ae);
            },
            onkeydown: (Ae) => {
              var He;
              B(Ae), (He = e.onkeydown) == null || He.call(e, Ae);
            },
            children: (Ae, He) => {
              var Ke = cp(), dt = W(Ke);
              {
                var R = (me) => {
                  var ke = up();
                  w(me, ke);
                };
                ie(dt, (me) => {
                  c() && me(R);
                });
              }
              var q = ge(dt);
              Se(q, () => e.children ?? he), w(Ae, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ae) => S = Ae,
        () => S
      );
    });
  }
  return w(t, F), Te(re);
}
let fp = 0;
var hp = /* @__PURE__ */ fe("<div><!></div>");
function vp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + fp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ Ie(void 0), d = Ce({}), h = Ce({}), f = /* @__PURE__ */ Ie(void 0);
  const m = ve("SMUI:select:helper-text:id"), v = ve("SMUI:select:helper-text:mount"), p = ve("SMUI:select:helper-text:unmount");
  ot(() => (Y(
    c,
    new rp({
      addClass: I,
      removeClass: E,
      hasClass: b,
      getAttr: A,
      setAttr: _,
      removeAttr: S,
      setContent: (k) => {
        Y(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(c)), o(c).init(), () => {
    var k;
    p && o(c) && p(o(c)), (k = o(c)) == null || k.destroy();
  }));
  function b(k) {
    return k in d ? d[k] : y().classList.contains(k);
  }
  function I(k) {
    d[k] || (d[k] = !0);
  }
  function E(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function A(k) {
    return k in h ? h[k] ?? null : y().getAttribute(k);
  }
  function _(k, U) {
    h[k] !== U && (h[k] = U);
  }
  function S(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function y() {
    return l;
  }
  var T = { getElement: y }, C = hp();
  Ge(
    C,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ue({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var x = de(C);
  {
    var N = (k) => {
      var U = $(), ue = W(U);
      Se(ue, () => e.children ?? he), w(k, U);
    }, X = (k) => {
      var U = Et();
      Le(() => Ye(U, o(f))), w(k, U);
    };
    ie(x, (k) => {
      o(f) == null ? k(N) : k(X, !1);
    });
  }
  return Oe(C, (k) => l = k, () => l), Fe(C, (k, U) => Q == null ? void 0 : Q(k, U), n), w(t, C), Te(T);
}
let mp = 0;
var gp = /* @__PURE__ */ fe("<input/>"), pp = /* @__PURE__ */ fe('<span class="mdc-select__ripple"></span>'), bp = /* @__PURE__ */ fe('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function _p(t, e) {
  xe(e, !0);
  const n = () => Pn(ke, "$selectedTextStore", r), [r, i] = Zn();
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), h = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (L) => L), I = g(e, "dirty", 15, !1), E = g(e, "invalid", 15, a), A = g(e, "updateInvalid", 19, () => s(E())), _ = g(e, "required", 3, !1), S = g(e, "inputId", 19, () => "SMUI-select-" + mp++), y = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), C = g(e, "anchor$use", 19, () => []), x = g(e, "anchor$class", 3, ""), N = g(e, "selectedTextContainer$use", 19, () => []), X = g(e, "selectedTextContainer$class", 3, ""), k = g(e, "selectedText$use", 19, () => []), U = g(e, "selectedText$class", 3, ""), ue = g(e, "dropdownIcon$use", 19, () => []), j = g(e, "dropdownIcon$class", 3, ""), V = g(e, "menu$class", 3, ""), P = /* @__PURE__ */ qe(e, [
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
  const Z = s(E());
  s(E()) && E(!1);
  let te, H = /* @__PURE__ */ Ie(void 0), O = Ce({}), B = Ce({}), G, oe = Ce({}), ee = /* @__PURE__ */ Ie(-1);
  const re = /* @__PURE__ */ _e(() => P.menu$id ?? S() + "-menu");
  let F = /* @__PURE__ */ Ie(void 0), ae = ve("SMUI:addLayoutListener"), K, ce = /* @__PURE__ */ Ie(!1), Ee = Ce({}), z = /* @__PURE__ */ Ie(void 0), se = /* @__PURE__ */ Ie(void 0), Re = /* @__PURE__ */ Ie(!1), Ae, He = ve("SMUI:select:context"), Ke, dt, R, q, me;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const ke = Ut("");
  le("SMUI:select:selectedText", ke);
  const xt = Ut(p());
  we(() => {
    Mn(xt, p());
  }), le("SMUI:select:value", xt), we(() => {
    o(H) && o(H).getValue() !== b()(p()) && o(H).setValue(b()(p()));
  });
  let Tt = o(ee);
  we(() => {
    if (Tt !== o(ee))
      if (Tt = o(ee), o(H))
        o(H).setSelectedIndex(
          o(ee),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const L = jt();
        p() !== L[o(ee)] && p(L[o(ee)]);
      }
  }), we(() => {
    o(H) && o(H).getDisabled() !== h() && o(H).setDisabled(h());
  }), we(() => {
    o(H) && I() && o(H).isValid() !== !E() && (A() ? E(!o(H).isValid()) : o(H).setValid(!E()));
  }), we(() => {
    o(H) && o(H).getRequired() !== _() && o(H).setRequired(_());
  }), ae && (K = ae(gi)), le("SMUI:select:leading-icon:mount", (L) => {
    Ke = L;
  }), le("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), le("SMUI:list:mount", (L) => {
    Ae = L;
  }), le("SMUI:select:helper-text:id", (L) => {
    Y(F, L, !0);
  }), le("SMUI:select:helper-text:mount", (L) => {
    dt = L;
  }), le("SMUI:select:helper-text:unmount", () => {
    Y(F, void 0), dt = void 0;
  }), ot(() => (Y(
    H,
    new np(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (L) => {
          Mn(ke, L);
        },
        isSelectAnchorFocused: () => document.activeElement === G,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: at,
        removeSelectAnchorAttr: wt,
        addMenuClass: J,
        removeMenuClass: De,
        openMenu: () => {
          Y(ce, !0);
        },
        closeMenu: () => {
          Y(ce, !1);
        },
        getAnchorElement: () => G,
        setMenuAnchorElement: (L) => {
          Y(z, L, !0);
        },
        setMenuAnchorCorner: (L) => {
          Y(se, L, !0);
        },
        setMenuWrapFocus: (L) => {
          Y(Re, L, !0);
        },
        getSelectedIndex: () => o(ee),
        setSelectedIndex: (L) => {
          Tt = L, Y(ee, L, !0), p(jt()[o(ee)]);
        },
        focusMenuItemAtIndex: (L) => {
          Ae.focusItemAtIndex(L);
        },
        getMenuItemCount: () => Ae.items.length,
        getMenuItemValues: () => jt().map(b()),
        getMenuItemTextAtIndex: (L) => Ae.getPrimaryTextAtIndex(L),
        isTypeaheadInProgress: () => Ae.typeaheadInProgress,
        typeaheadMatchItem: (L, pe) => Ae.typeaheadMatchItem(L, pe),
        // getCommonAdapterMethods
        addClass: ye,
        removeClass: M,
        hasClass: dn,
        setRippleCenter: (L) => q && q.setRippleCenter(L),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (L) => {
          var pe;
          I(!0), A() && E(!((pe = o(H)) != null && pe.isValid())), We(Fn(), "SMUISelectChange", { value: p(), index: o(ee) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!me,
        notchOutline: (L) => me && me.notch(L),
        closeOutline: () => me && me.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!R,
        floatLabel: (L) => R && R.float(L),
        getLabelWidth: () => R ? R.getWidth() : 0,
        setLabelRequired: (L) => R && R.setRequired(L)
      },
      {
        get helperText() {
          return dt;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), Y(ee, jt().indexOf(p()), !0), o(H).init(), Ft(Z), () => {
    var L;
    (L = o(H)) == null || L.destroy();
  })), pn(() => {
    K && K();
  });
  function dn(L) {
    return L in O ? O[L] : Fn().classList.contains(L);
  }
  function ye(L) {
    O[L] || (O[L] = !0);
  }
  function M(L) {
    (!(L in O) || O[L]) && (O[L] = !1);
  }
  function D(L, pe) {
    B[L] != pe && (pe === "" || pe == null ? delete B[L] : B[L] = pe);
  }
  function J(L) {
    Ee[L] || (Ee[L] = !0);
  }
  function De(L) {
    (!(L in Ee) || Ee[L]) && (Ee[L] = !1);
  }
  function lt(L) {
    return L in oe ? oe[L] ?? null : Fn().getAttribute(L);
  }
  function at(L, pe) {
    oe[L] !== pe && (oe[L] = pe);
  }
  function wt(L) {
    (!(L in oe) || oe[L] != null) && (oe[L] = void 0);
  }
  function jt() {
    return Ae.getOrderedList().map((L) => L.getValue());
  }
  function vr(L) {
    const pe = L.currentTarget.getBoundingClientRect();
    return (ft(L) ? L.touches[0].clientX : L.clientX) - pe.left;
  }
  function ft(L) {
    return "touches" in L;
  }
  function mt() {
    if (o(H) == null)
      throw new Error("Instance is undefined.");
    return o(H).getUseDefaultValidation();
  }
  function Ft(L) {
    var pe;
    (pe = o(H)) == null || pe.setUseDefaultValidation(L);
  }
  function Un() {
    G.focus();
  }
  function gi() {
    var L;
    (L = o(H)) == null || L.layout();
  }
  function Fn() {
    return te;
  }
  var Pe = {
    getUseDefaultValidation: mt,
    setUseDefaultValidation: Ft,
    focus: Un,
    layout: gi,
    getElement: Fn
  }, tt = bp(), et = W(tt);
  Ge(et, (L, pe, ut) => ({ class: L, style: pe, ...ut }), [
    () => Ue({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(ce),
      "mdc-data-table__pagination-rows-per-page-select": He === "data-table:pagination",
      ...O,
      [l()]: !0
    }),
    () => Object.entries(B).map(([L, pe]) => `${L}: ${pe};`).concat([c()]).join(" "),
    () => li(P, [
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
  var Dt = de(et);
  {
    var fn = (L) => {
      var pe = gp();
      Ge(
        pe,
        (ut) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: p(),
          ...ut
        }),
        [() => ct(P, "input$")],
        void 0,
        void 0,
        !0
      ), w(L, pe);
    };
    ie(Dt, (L) => {
      y() && L(fn);
    });
  }
  var Ze = ge(Dt, 2), pt = (L) => {
    var pe;
    G.focus(), o(H) && o(H).handleClick(vr(L)), (pe = e.anchor$onclick) == null || pe.call(e, L);
  }, Ot = (L) => {
    var pe;
    o(H) && o(H).handleKeydown(L), (pe = e.onkeydown) == null || pe.call(e, L);
  }, Qe = (L) => {
    var pe;
    o(H) && o(H).handleBlur(), We(Fn(), "blur", L), (pe = e.anchor$onblur) == null || pe.call(e, L);
  }, Lt = (L) => {
    var pe;
    o(H) && o(H).handleFocus(), We(Fn(), "focus", L), (pe = e.anchor$onfocus) == null || pe.call(e, L);
  };
  Ge(
    Ze,
    (L, pe) => ({
      class: L,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(re),
      "aria-expanded": o(ce) ? "true" : "false",
      "aria-describedby": o(F),
      role: "combobox",
      tabindex: "0",
      ...oe,
      ...pe,
      onclick: pt,
      onkeydown: Ot,
      onblur: Qe,
      onfocus: Lt
    }),
    [
      () => Ue({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => ct(P, "anchor$")
    ]
  );
  var qt = de(Ze);
  {
    var Zt = (L) => {
      var pe = pp();
      w(L, pe);
    };
    ie(qt, (L) => {
      f() === "filled" && L(Zt);
    });
  }
  var _t = ge(qt, 2);
  {
    var Mt = (L) => {
      {
        let pe = /* @__PURE__ */ _e(() => S() + "-smui-label"), ut = /* @__PURE__ */ _e(() => n() !== ""), Rt = /* @__PURE__ */ _e(() => ct(P, "label$"));
        Oe(
          bs(L, $e(
            {
              get id() {
                return o(pe);
              },
              get floatAbove() {
                return o(ut);
              },
              get required() {
                return _();
              }
            },
            () => o(Rt),
            {
              children: (Qn, Jn) => {
                var ra = $(), pi = W(ra);
                {
                  var Vr = (Gr) => {
                  }, Bs = (Gr) => {
                    var Ba = $(), ia = W(Ba);
                    {
                      var ul = (gr) => {
                        var jr = Et();
                        Le(() => Ye(jr, v())), w(gr, jr);
                      }, Va = (gr) => {
                        var jr = $(), Vs = W(jr);
                        Se(Vs, v), w(gr, jr);
                      };
                      ie(
                        ia,
                        (gr) => {
                          typeof v() == "string" ? gr(ul) : gr(Va, !1);
                        },
                        !0
                      );
                    }
                    w(Gr, Ba);
                  };
                  ie(pi, (Gr) => {
                    v() == null ? Gr(Vr) : Gr(Bs, !1);
                  });
                }
                w(Qn, ra);
              },
              $$slots: { default: !0 }
            }
          )),
          (Qn) => R = Qn,
          () => R
        );
      }
    };
    ie(_t, (L) => {
      f() !== "outlined" && !m() && v() != null && L(Mt);
    });
  }
  var sn = ge(_t, 2);
  {
    var bt = (L) => {
      {
        let pe = /* @__PURE__ */ _e(() => m() || v() == null), ut = /* @__PURE__ */ _e(() => ct(P, "outline$"));
        Oe(
          Jc(L, $e(
            {
              get noLabel() {
                return o(pe);
              }
            },
            () => o(ut),
            {
              children: (Rt, Qn) => {
                var Jn = $(), ra = W(Jn);
                {
                  var pi = (Vr) => {
                    {
                      let Bs = /* @__PURE__ */ _e(() => S() + "-smui-label"), Gr = /* @__PURE__ */ _e(() => n() !== ""), Ba = /* @__PURE__ */ _e(() => ct(P, "label$"));
                      Oe(
                        bs(Vr, $e(
                          {
                            get id() {
                              return o(Bs);
                            },
                            get floatAbove() {
                              return o(Gr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Ba),
                          {
                            children: (ia, ul) => {
                              var Va = $(), gr = W(Va);
                              {
                                var jr = (aa) => {
                                }, Vs = (aa) => {
                                  var cl = $(), Hd = W(cl);
                                  {
                                    var Pd = (bi) => {
                                      var sa = Et();
                                      Le(() => Ye(sa, v())), w(bi, sa);
                                    }, Nd = (bi) => {
                                      var sa = $(), Ud = W(sa);
                                      Se(Ud, v), w(bi, sa);
                                    };
                                    ie(
                                      Hd,
                                      (bi) => {
                                        typeof v() == "string" ? bi(Pd) : bi(Nd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(aa, cl);
                                };
                                ie(gr, (aa) => {
                                  v() == null ? aa(jr) : aa(Vs, !1);
                                });
                              }
                              w(ia, Va);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ia) => R = ia,
                        () => R
                      );
                    }
                  };
                  ie(ra, (Vr) => {
                    !m() && v() != null && Vr(pi);
                  });
                }
                w(Rt, Jn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Rt) => me = Rt,
          () => me
        );
      }
    };
    ie(sn, (L) => {
      f() === "outlined" && L(bt);
    });
  }
  var kr = ge(sn, 2);
  Se(kr, () => e.leadingIcon ?? he);
  var _n = ge(kr, 2);
  Ge(_n, (L, pe) => ({ class: L, ...pe }), [
    () => Ue({
      "mdc-select__selected-text-container": !0,
      [X()]: !0
    }),
    () => ct(P, "selectedTextContainer$")
  ]);
  var mr = de(_n);
  Ge(
    mr,
    (L, pe) => ({
      id: S() + "-smui-selected-text",
      class: L,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...pe
    }),
    [
      () => Ue({
        "mdc-select__selected-text": !0,
        [U()]: !0
      }),
      () => ct(P, "selectedText$")
    ]
  );
  var na = de(mr);
  Fe(mr, (L, pe) => Q == null ? void 0 : Q(L, pe), k), Fe(_n, (L, pe) => Q == null ? void 0 : Q(L, pe), N);
  var yn = ge(_n, 2);
  Ge(yn, (L, pe) => ({ class: L, ...pe }), [
    () => Ue({
      "mdc-select__dropdown-icon": !0,
      [j()]: !0
    }),
    () => ct(P, "dropdownIcon$")
  ]), Fe(yn, (L, pe) => Q == null ? void 0 : Q(L, pe), ue);
  var Yn = ge(yn, 2);
  {
    var kn = (L) => {
      {
        let pe = /* @__PURE__ */ _e(() => ct(P, "ripple$"));
        Oe(Qc(L, $e(() => o(pe))), (ut) => q = ut, () => q);
      }
    };
    ie(Yn, (L) => {
      f() !== "outlined" && d() && L(kn);
    });
  }
  Oe(Ze, (L) => G = L, () => G), Fe(Ze, (L, pe) => Q == null ? void 0 : Q(L, pe), C);
  var Br = ge(Ze, 2);
  {
    let L = /* @__PURE__ */ _e(() => Ue({
      "mdc-select__menu": !0,
      ...Ee,
      [V()]: !0
    })), pe = /* @__PURE__ */ _e(() => ct(P, "menu$"));
    sp(Br, $e(
      {
        get class() {
          return o(L);
        },
        get id() {
          return o(re);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(z);
        },
        get anchorCorner() {
          return o(se);
        }
      },
      () => o(pe),
      {
        onSMUIMenuSelected: (ut) => {
          var Rt;
          o(H) && o(H).handleMenuItemAction(ut.detail.index), (Rt = e.onSMUIMenuSelected) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceClosing: (ut) => {
          var Rt;
          o(H) && o(H).handleMenuClosing(), (Rt = e.onSMUIMenuSurfaceClosing) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceClosed: (ut) => {
          var Rt;
          o(H) && o(H).handleMenuClosed(), (Rt = e.onSMUIMenuSurfaceClosed) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceOpened: (ut) => {
          var Rt;
          o(H) && o(H).handleMenuOpened(), (Rt = e.onSMUIMenuSurfaceOpened) == null || Rt.call(e, ut);
        },
        get open() {
          return o(ce);
        },
        set open(ut) {
          Y(ce, ut, !0);
        },
        children: (ut, Rt) => {
          {
            let Qn = /* @__PURE__ */ _e(() => ct(P, "list$"));
            op(ut, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Re);
                }
              },
              () => o(Qn),
              {
                get selectedIndex() {
                  return o(ee);
                },
                set selectedIndex(Jn) {
                  Y(ee, Jn, !0);
                },
                children: (Jn, ra) => {
                  var pi = $(), Vr = W(pi);
                  Se(Vr, () => e.children ?? he), w(Jn, pi);
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
  Oe(et, (L) => te = L, () => te), Fe(et, (L, pe) => Jt == null ? void 0 : Jt(L, pe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ye,
    removeClass: M,
    addStyle: D
  })), Fe(et, (L, pe) => no == null ? void 0 : no(L, pe), () => ({ addClass: ye, removeClass: M })), Fe(et, (L, pe) => Q == null ? void 0 : Q(L, pe), u);
  var ks = ge(et, 2);
  {
    var Dd = (L) => {
      {
        let pe = /* @__PURE__ */ _e(() => ct(P, "helperText$"));
        vp(L, $e(() => o(pe), {
          children: (ut, Rt) => {
            var Qn = $(), Jn = W(Qn);
            Se(Jn, () => e.helperText ?? he), w(ut, Qn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ie(ks, (L) => {
      e.helperText && L(Dd);
    });
  }
  Le(() => Ye(na, n())), w(t, tt);
  var Md = Te(Pe);
  return i(), Md;
}
function yp(t, e) {
  xe(e, !0);
  const n = () => Pn(d, "$selectedValue", r), [r, i] = Zn();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let s = g(e, "value", 3, ""), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ve("SMUI:select:selectedText"), d = ve("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ _e(() => s() != null && s() !== "" && n() === s());
  ot(f), pn(f);
  function f() {
    o(h) && l && Mn(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  Oe(
    dp(t, $e(
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
          var E = $(), A = W(E);
          Se(A, () => e.children ?? he), w(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = Te(v);
  return i(), p;
}
function Ip(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []);
  g(e, "placeholder", 3, "");
  let r = g(e, "label", 3, "");
  g(e, "description", 3, "");
  let i = g(e, "value", 15), a = g(e, "required", 3, !1);
  g(e, "size", 3, "sm");
  let s = g(e, "variant", 3, "standard"), u = g(e, "selectedOptionIndex", 31, () => -1), l = g(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  _p(t, {
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
      var f = $(), m = W(f);
      ir(m, 17, n, wi, (v, p, b) => {
        {
          let I = /* @__PURE__ */ _e(() => c(b));
          yp(v, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(p).value;
            },
            children: (E, A) => {
              var _ = Et();
              Le(() => Ye(_, o(p).label)), w(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
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
function Ep(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Sp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Ap(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Cp(t) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, function(n) {
    return e.add(n.offsetTop);
  }), e.size > 1;
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
var xp = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, i);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, r) {
        e.cancel(r);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, r) {
        e.push(r);
      }), e;
    }, t;
  }()
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
var rt = {
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
}, da = {
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
}, ro = {
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
var _s;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(_s || (_s = {}));
var Tp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = da.CLOSE_ACTION, r.scrimClickAction = da.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = da.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new xp(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return da;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ro;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(rt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(rt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(rt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(rt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(rt.OPEN), r.adapter.addBodyClass(rt.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, ro.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(rt.CLOSING), this.adapter.removeClass(rt.OPEN), this.adapter.removeBodyClass(rt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, ro.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(rt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(rt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(rt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, e.prototype.layout = function() {
      var n = this;
      this.animFrame.request(_s.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, da.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(n);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(n);
        if (!i) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, s = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && s && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var r = n.key === "Escape" || n.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(_s.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(rt.OPENING), this.adapter.removeClass(rt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(rt.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(rt.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(rt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(rt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(rt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(rt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Gt)
), wp = /* @__PURE__ */ fe('<div class="mdc-dialog__surface-scrim"></div>'), Op = /* @__PURE__ */ fe('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function nd(t, e) {
  xe(e, !0);
  const n = () => Pn(k, "$aboveFullscreenShown", r), [r, i] = Zn(), { FocusTrap: a } = Zm, { closest: s, matches: u } = Fa;
  let l = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), d = g(e, "open", 15, !1), h = g(e, "selection", 3, !1), f = g(e, "escapeKeyAction", 3, "close"), m = g(e, "scrimClickAction", 3, "close"), v = g(e, "autoStackButtons", 3, !0), p = g(e, "fullscreen", 3, !1), b = g(e, "sheet", 3, !1), I = g(e, "noContentPadding", 3, !1), E = g(e, "container$class", 3, ""), A = g(e, "surface$class", 3, ""), _ = /* @__PURE__ */ qe(e, [
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
    "container$class",
    "surface$class",
    "children",
    "over"
  ]), S, y = /* @__PURE__ */ Ie(void 0), T = new vi(), C = Ce({}), x, N = Ut(!1), X = ve("SMUI:dialog:aboveFullscreen"), k = ve("SMUI:dialog:aboveFullscreenShown") ?? Ut(!1), U = ve("SMUI:addLayoutListener"), ue, j = [], V = (M) => (j.push(M), () => {
    const D = j.indexOf(M);
    D >= 0 && j.splice(D, 1);
  });
  le("SMUI:dialog:actions:reversed", N), le("SMUI:addLayoutListener", V), le("SMUI:dialog:selection", h()), le("SMUI:dialog:aboveFullscreen", X || p()), le("SMUI:dialog:aboveFullscreenShown", k), b() && le("SMUI:icon-button:context", "dialog:sheet"), we(() => {
    o(y) && o(y).getEscapeKeyAction() !== f() && o(y).setEscapeKeyAction(f());
  }), we(() => {
    o(y) && o(y).getScrimClickAction() !== m() && o(y).setScrimClickAction(m());
  }), we(() => {
    o(y) && o(y).getAutoStackButtons() !== v() && o(y).setAutoStackButtons(v());
  }), we(() => {
    v() || Mn(N, !0);
  }), U && (ue = U(ce)), we(() => {
    o(y) && o(y).isOpen() !== d() && (d() ? o(y).open({ isAboveFullscreenDialog: !!X }) : o(y).close());
  });
  let P = n();
  we(() => {
    p() && o(y) && P !== n() && (P = n(), n() ? o(y).showSurfaceScrim() : o(y).hideSurfaceScrim());
  }), ot(() => (x = new a(S, { initialFocusEl: oe() ?? void 0 }), Y(
    y,
    new Tp({
      addBodyClass: (M) => document.body.classList.add(M),
      addClass: te,
      areButtonsStacked: () => Cp(O()),
      clickDefaultButton: () => {
        const M = B();
        M && M.click();
      },
      eventTargetMatches: (M, D) => M ? u(M, D) : !1,
      getActionFromEvent: (M) => {
        if (!M.target)
          return "";
        const D = s(M.target, "[data-mdc-dialog-action]");
        return D && D.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: oe,
      hasClass: Z,
      isContentScrollable: () => Ep(G()),
      notifyClosed: (M) => {
        d(!1), We(Ee(), "SMUIDialogClosed", M ? { action: M } : {});
      },
      notifyClosing: (M) => We(Ee(), "SMUIDialogClosing", M ? { action: M } : {}),
      notifyOpened: () => We(Ee(), "SMUIDialogOpened", {}),
      notifyOpening: () => We(Ee(), "SMUIDialogOpening", {}),
      releaseFocus: () => x.releaseFocus(),
      removeBodyClass: (M) => document.body.classList.remove(M),
      removeClass: H,
      reverseButtons: () => {
        Mn(N, !0);
      },
      trapFocus: () => x.trapFocus(),
      registerContentEventHandler: (M, D) => {
        const J = G();
        J instanceof HTMLElement && T.on(J, M, D);
      },
      deregisterContentEventHandler: (M, D) => {
        const J = G();
        J instanceof HTMLElement && T.off(J, M, D);
      },
      isScrollableContentAtTop: () => Sp(G()),
      isScrollableContentAtBottom: () => Ap(G()),
      registerWindowEventHandler: (M, D) => T.on(window, M, D),
      deregisterWindowEventHandler: (M, D) => T.off(window, M, D)
    }),
    !0
  ), o(y).init(), () => {
    var M;
    (M = o(y)) == null || M.destroy(), T.clear();
  })), pn(() => {
    ue && ue();
  });
  function Z(M) {
    return M in C ? C[M] : Ee().classList.contains(M);
  }
  function te(M) {
    C[M] || (C[M] = !0);
  }
  function H(M) {
    (!(M in C) || C[M]) && (C[M] = !1);
  }
  function O() {
    return [].slice.call(Ee().querySelectorAll(".mdc-dialog__button"));
  }
  function B() {
    return Ee().querySelector("[data-mdc-dialog-button-default]");
  }
  function G() {
    return Ee().querySelector(".mdc-dialog__content");
  }
  function oe() {
    return Ee().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function ee() {
    X && Mn(k, !0), requestAnimationFrame(() => {
      j.forEach((M) => M());
    });
  }
  function re() {
    j.forEach((M) => M());
  }
  function F() {
    X && Mn(k, !1);
  }
  function ae() {
    return d();
  }
  function K(M) {
    d(M);
  }
  function ce() {
    var M;
    return (M = o(y)) == null ? void 0 : M.layout();
  }
  function Ee() {
    return S;
  }
  var z = { isOpen: ae, setOpen: K, layout: ce, getElement: Ee }, se = Op();
  ur("resize", us, () => d() && o(y) && o(y).layout()), ur("orientationchange", us, () => d() && o(y) && o(y).layout()), ur("keydown", zo.body, (M) => o(y) && o(y).handleDocumentKeydown(M));
  var Re = W(se), Ae = (M) => {
    var D;
    ee(), (D = e.onSMUIDialogOpening) == null || D.call(e, M);
  }, He = (M) => {
    var D;
    re(), (D = e.onSMUIDialogOpened) == null || D.call(e, M);
  }, Ke = (M) => {
    var D;
    F(), (D = e.onSMUIDialogClosed) == null || D.call(e, M);
  }, dt = (M) => {
    var D;
    o(y) && o(y).handleClick(M), (D = e.onclick) == null || D.call(e, M);
  }, R = (M) => {
    var D;
    o(y) && o(y).handleKeydown(M), (D = e.onkeydown) == null || D.call(e, M);
  };
  Ge(
    Re,
    (M, D) => ({
      class: M,
      role: "alertdialog",
      "aria-modal": "true",
      ...D,
      onSMUIDialogOpening: Ae,
      onSMUIDialogOpened: He,
      onSMUIDialogClosed: Ke,
      onclick: dt,
      onkeydown: R
    }),
    [
      () => Ue({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !v(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": I(),
        "smui-dialog--selection": h(),
        ...C,
        [c()]: !0
      }),
      () => li(_, ["container$", "surface$"])
    ]
  );
  var q = de(Re);
  Ge(q, (M, D) => ({ class: M, ...D }), [
    () => Ue({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => ct(_, "container$")
  ]);
  var me = de(q);
  Ge(me, (M, D) => ({ class: M, role: "alertdialog", "aria-modal": "true", ...D }), [
    () => Ue({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ct(_, "surface$")
  ]);
  var ke = de(me);
  Se(ke, () => e.children ?? he);
  var xt = ge(ke, 2);
  {
    var Tt = (M) => {
      var D = wp();
      ur("transitionend", D, () => o(y) && o(y).handleSurfaceScrimTransitionEnd()), w(M, D);
    };
    ie(xt, (M) => {
      p() && M(Tt);
    });
  }
  Oe(Re, (M) => S = M, () => S), Fe(Re, (M, D) => Q == null ? void 0 : Q(M, D), l);
  var dn = ge(Re, 2);
  Se(dn, () => e.over ?? he), w(t, se);
  var ye = Te(z);
  return i(), ye;
}
function Lp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = W(l);
          Se(c, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function tl(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = $(), c = W(l);
        Se(c, () => e.children ?? he), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function rd(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
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
        children: (s, u) => {
          var l = $(), c = W(l);
          Se(c, () => e.children ?? he), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Rp = /* @__PURE__ */ fe('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function Dp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "onClose", 3, () => {
  });
  nd(t, {
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
      var s = Rp(), u = W(s), l = de(u);
      Se(l, () => e.title ?? he);
      var c = ge(u, 2);
      tl(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var m = $(), v = W(m);
          Se(v, () => e.content ?? he), w(h, m);
        },
        $$slots: { default: !0 }
      });
      var d = ge(c, 2);
      rd(d, {
        children: (h, f) => {
          var m = $(), v = W(m);
          Se(v, () => e.actions ?? he), w(h, m);
        },
        $$slots: { default: !0 }
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
const nl = Ut({
  component: null,
  props: {},
  isOpen: !1
}), Mp = Ut([]);
Mp.subscribe;
const au = Ce({ freeze: !1 });
function Hp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ie(void 0), r = /* @__PURE__ */ Ie(!1);
  const i = nl.subscribe((l) => {
    Y(n, l, !0), Y(r, l.isOpen, !0), au.freeze = !1;
  });
  ot(() => () => i()), we(() => {
    au.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = $(), s = W(a);
  {
    var u = (l) => {
      var c = $(), d = W(c);
      hr(d, () => o(n).component, (h, f) => {
        f(h, $e(() => o(n).props, {
          get open() {
            return o(r);
          },
          set open(m) {
            Y(r, m, !0);
          }
        }));
      }), w(l, c);
    };
    ie(s, (l) => {
      o(n).isOpen && o(n).component && l(u);
    });
  }
  w(t, a), Te();
}
function su(t, e = {}) {
  return new Promise((n) => {
    nl.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function io(t, e) {
  nl.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Pp = /* @__PURE__ */ fe('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function ou(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "message", 3, ""), a = g(e, "confirmActionText", 3, "OK"), s = g(e, "confirmActionColor", 3, "primary"), u = g(e, "cancelActionText", 3, "Cancel"), l = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    io("confirm");
  }
  function d() {
    io("cancel");
  }
  kp(t, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return s();
    },
    get cancelActionText() {
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => io("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return n();
    },
    set open(f) {
      n(f);
    },
    content: (f) => {
      tl(f, {
        children: (m, v) => {
          var p = Pp(), b = de(p);
          Le(() => Ye(b, i())), w(m, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Te();
}
var Np = /* @__PURE__ */ fe('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Up = /* @__PURE__ */ fe("<!> <!>", 1), Fp = /* @__PURE__ */ fe('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function kp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "confirmActionText", 3, "Confirm"), a = g(e, "confirmActionColor", 3, "primary"), s = g(e, "cancelActionText", 3, "Cancel"), u = g(e, "width", 3, "80vw"), l = g(e, "maxWidth", 3, "85vw"), c = g(e, "height", 3, "85vh"), d = g(e, "maxHeight", 3, "85vh"), h = g(e, "confirmDisabled", 3, !1), f = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), m = g(e, "showCloseButton", 3, !0), v = g(e, "onClose", 3, () => {
  }), p = g(e, "onCancel", 3, () => {
  }), b = g(e, "onConfirm", 3, () => {
  });
  function I(A) {
    A.detail.action === "cancel" ? p()() : A.detail.action === "confirm" ? b()() : (A.detail.action, v()());
  }
  let E = /* @__PURE__ */ _e(() => {
    let A;
    return a() === "primary" ? A = f() : A = "#FF203A", h() ? "" : `background-color: ${A}; color: white;`;
  });
  {
    let A = /* @__PURE__ */ _e(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    nd(t, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: I,
      get surface$style() {
        return o(A);
      },
      get open() {
        return n();
      },
      set open(_) {
        n(_);
      },
      children: (_, S) => {
        var y = Fp(), T = W(y);
        Lp(T, {
          children: (X, k) => {
            var U = Np(), ue = de(U), j = de(ue), V = ge(ue, 2);
            {
              var P = (Z) => {
                Jb(Z, {
                  tabindex: "-1",
                  onClick: () => {
                    n(!1), v()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ie(V, (Z) => {
                m() && Z(P);
              });
            }
            Le(() => {
              vt(U, `background-color: ${f()};`), Ye(j, r());
            }), w(X, U);
          },
          $$slots: { default: !0 }
        });
        var C = ge(T, 2);
        tl(C, {
          id: "dialog__content",
          children: (X, k) => {
            var U = $(), ue = W(U);
            Se(ue, () => e.content ?? he), w(X, U);
          },
          $$slots: { default: !0 }
        });
        var x = ge(C, 2), N = de(x);
        rd(N, {
          class: "oscd-dialog__actions",
          children: (X, k) => {
            var U = Up(), ue = W(U);
            {
              var j = (P) => {
                ps(P, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (Z, te) => {
                    var H = Et();
                    Le(() => Ye(H, s())), w(Z, H);
                  },
                  $$slots: { default: !0 }
                });
              };
              ie(ue, (P) => {
                s() && P(j);
              });
            }
            var V = ge(ue, 2);
            ps(V, {
              type: "button",
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              children: (P, Z) => {
                var te = Et();
                Le(() => Ye(te, i())), w(P, te);
              },
              $$slots: { default: !0 }
            }), w(X, U);
          },
          $$slots: { default: !0 }
        }), w(_, y);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
}
const kt = [];
for (let t = 0; t < 256; ++t)
  kt.push((t + 256).toString(16).slice(1));
function Bp(t, e = 0) {
  return (kt[t[e + 0]] + kt[t[e + 1]] + kt[t[e + 2]] + kt[t[e + 3]] + "-" + kt[t[e + 4]] + kt[t[e + 5]] + "-" + kt[t[e + 6]] + kt[t[e + 7]] + "-" + kt[t[e + 8]] + kt[t[e + 9]] + "-" + kt[t[e + 10]] + kt[t[e + 11]] + kt[t[e + 12]] + kt[t[e + 13]] + kt[t[e + 14]] + kt[t[e + 15]]).toLowerCase();
}
let ao;
const Vp = new Uint8Array(16);
function Gp() {
  if (!ao) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ao = crypto.getRandomValues.bind(crypto);
  }
  return ao(Vp);
}
const jp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), lu = { randomUUID: jp };
function Kr(t, e, n) {
  var i;
  if (lu.randomUUID && !e && !t)
    return lu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Gp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Bp(r);
}
var qp = /* @__PURE__ */ fe('<span class="oscd-icon"><!></span>');
function Kt(t, e) {
  var n = qp(), r = de(n);
  Se(r, () => e.children ?? he), w(t, n);
}
var zp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Wp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = zp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Xp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function rl(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Xp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Zp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Kp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Yp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Qp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Yp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function $p(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Jp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var eb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function tb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = eb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var nb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function id(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = nb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var rb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function ad(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = rb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var ib = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function ab(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = ib();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var sb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function ob(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = sb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
cf();
var lb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function ub(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = lb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var cb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function db(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = cb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var fb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function hb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = fb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var vb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function mb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = vb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var gb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function pb(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = gb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var bb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function _b(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = bb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
function yb(t, e) {
  e(t.target.value);
}
var Ib = /* @__PURE__ */ fe('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Eb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Ib(), a = de(i);
  a.__change = [yb, r];
  var s = ge(a, 2), u = de(s);
  Le(() => Ye(u, n())), Sa(a, r), w(t, i), Te();
}
On(["change"]);
function Sb(t, e) {
  e(t.target.value);
}
var Ab = /* @__PURE__ */ fe('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Cb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Ab(), a = de(i);
  a.__change = [Sb, r];
  var s = ge(a, 2), u = de(s);
  Le(() => Ye(u, n())), Sa(a, r), w(t, i), Te();
}
On(["change"]);
function xb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Tb = /* @__PURE__ */ fe('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function xa(t, e) {
  xe(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), s = g(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ Ie(null), c = /* @__PURE__ */ Ie(null), d = /* @__PURE__ */ Ie(null), h = /* @__PURE__ */ Ie(null), f = /* @__PURE__ */ Ie(!1), m = /* @__PURE__ */ Ie(null), v = /* @__PURE__ */ Ie(null);
  function p() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? Y(m, setTimeout(() => Y(f, !0), i()), !0) : Y(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), Y(f, !1);
  }
  function I() {
    p();
  }
  function E() {
    b();
  }
  function A() {
    p();
  }
  function _() {
    b();
  }
  function S() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const x = o(l).getBoundingClientRect(), N = o(h).getBoundingClientRect();
    let X = 0, k = 0;
    const U = 8;
    switch (r()) {
      case "top":
        X = x.top - N.height - U, k = x.left + x.width / 2 - N.width / 2;
        break;
      case "bottom":
        X = x.bottom + U, k = x.left + x.width / 2 - N.width / 2;
        break;
      case "left":
        X = x.top + x.height / 2 - N.height / 2, k = x.left - N.width - U;
        break;
      case "right":
        X = x.top + x.height / 2 - N.height / 2, k = x.right + U;
        break;
    }
    o(c).style.top = `${X + window.scrollY}px`, o(c).style.left = `${k + window.scrollX}px`;
  }
  function y() {
    var x;
    (x = o(v)) == null || x.disconnect(), Y(v, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), Y(c, null), Y(h, null), Y(d, null), o(m) && clearTimeout(o(m));
  }
  pn(y), we(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(c)) {
        Y(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = u, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), Y(d, o(c).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style");
        x.textContent = `
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
      `, o(d).appendChild(x), Y(h, document.createElement("div"), !0), o(d).appendChild(o(h)), Y(
          v,
          new MutationObserver(() => {
            o(f) && S();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(c) && (o(c).style.opacity = "1", S());
    }
  }), we(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const x = o(c), N = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), o(c) === x && y();
      },
      a()
    );
    return () => clearTimeout(N);
  });
  var T = Tb();
  T.__keydown = [xb, n, p, b];
  var C = de(T);
  Se(C, () => e.children ?? he), Oe(T, (x) => Y(l, x), () => o(l)), Le(() => {
    cr(T, "aria-describedby", n() && !s() ? u : void 0), cr(T, "aria-haspopup", n() ? "true" : void 0), cr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), ur("mouseenter", T, I), ur("mouseleave", T, E), ur("focus", T, A), ur("blur", T, _), w(t, T), Te();
}
On(["keydown"]);
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
var fa = {
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
}, In = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, uu = {
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
var wb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = In.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return uu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(fa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(fa.DISABLED) : this.adapter.removeClass(fa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, uu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = In.TRANSITION_STATE_UNCHECKED, a = fa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = In.TRANSITION_STATE_INDETERMINATE, r = In.TRANSITION_STATE_CHECKED, i = In.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = In.TRANSITION_STATE_INIT, a = In.TRANSITION_STATE_CHECKED, s = In.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, h = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
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
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(In.ARIA_CHECKED_ATTR, In.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(In.ARIA_CHECKED_ATTR);
    }, e;
  }(Gt)
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
}, ha = {
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
var Ob = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
            for (var s = Pt(r), u = s.next(); !u.done; u = s.next()) {
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
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? $g(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Ln.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ha.PRIMARY_HALF, i = n * ha.PRIMARY_FULL, a = n * ha.SECONDARY_QUARTER, s = n * ha.SECONDARY_HALF, u = n * ha.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Gt)
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
}, cu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Xr = {
  ARIA_SELECTED: cu.ARIA_SELECTED,
  ARIA_SORT: cu.ARIA_SORT
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
var Lb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
      return Sc(this, void 0, void 0, function() {
        return Jo(this, function(n) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Xr.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, mn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Xr.ARIA_SORT), l = mn.NONE;
      u === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : u === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Xr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Xr.ARIA_SELECTED, "false"));
    }, e;
  }(Gt)
), Rb = /* @__PURE__ */ fe('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Db = /* @__PURE__ */ fe("<div><div><table><!></table></div> <!> <!></div>");
function Mb(t, e) {
  xe(e, !0);
  const n = () => Pn(U, "$progressClosed", r), [r, i] = Zn(), { closest: a } = Fa;
  let s = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "stickyHeader", 3, !1), c = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), h = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), b = g(e, "table$use", 19, () => []), I = g(e, "table$class", 3, ""), E = /* @__PURE__ */ qe(e, [
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
  ]), A, _ = /* @__PURE__ */ Ie(void 0), S, y = /* @__PURE__ */ Ie(void 0), T = /* @__PURE__ */ Ie(void 0), C = Ce({}), x = /* @__PURE__ */ Ie(Ce({ height: "auto", top: "initial" })), N = ve("SMUI:addLayoutListener"), X, k = !1, U = Ut(!1), ue = Ut(d());
  we(() => {
    Mn(ue, d());
  });
  let j = Ut(h());
  we(() => {
    Mn(j, h());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", U), le("SMUI:data-table:sortable", c()), le("SMUI:data-table:sort", ue), le("SMUI:data-table:sortDirection", j), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", m()), N && (X = N(oe));
  let V;
  we(() => {
    e.progress && o(_) && V !== n() && (V = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    o(_) && k && o(_).layout();
  }), le("SMUI:data-table:header:mount", (R) => {
    Y(y, R, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    Y(y, void 0);
  }), le("SMUI:data-table:body:mount", (R) => {
    Y(T, R, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    Y(T, void 0);
  }), ot(() => (Y(
    _,
    new Lb({
      addClass: Z,
      removeClass: te,
      getHeaderCellElements: () => {
        var R;
        return ((R = o(y)) == null ? void 0 : R.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = o(y)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, q) => {
        var me;
        return ((me = o(y)) == null ? void 0 : me.orderedCells[R].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, q, me) => {
        var ke;
        (ke = o(y)) == null || ke.orderedCells[R].addAttr(q, me);
      },
      setClassNameByHeaderCellIndex: (R, q) => {
        var me;
        (me = o(y)) == null || me.orderedCells[R].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (R, q) => {
        var me;
        (me = o(y)) == null || me.orderedCells[R].removeClass(q);
      },
      notifySortAction: (R) => {
        d(R.columnId), h(R.sortValue), We(ee(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = ee().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        Y(x, R, !0);
      },
      addClassAtRowIndex: (R, q) => {
        var me;
        (me = o(T)) == null || me.orderedRows[R].addClass(q);
      },
      getRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var q;
        return ((q = o(T)) == null ? void 0 : q.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var q;
        return ((q = o(T)) == null ? void 0 : q.orderedRows.map((me) => me.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var me;
        const q = (me = o(T)) == null ? void 0 : me.orderedRows[R].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const R = (q = o(y)) == null ? void 0 : q.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!ee().querySelector(".mdc-data-table__row-checkbox") || !!ee().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var me;
        const q = (me = o(T)) == null ? void 0 : me.orderedRows[R.rowIndex];
        q && We(ee(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), We(ee(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), We(ee(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => We(ee(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, q) => {
        var me;
        (me = o(T)) == null || me.orderedRows[R].removeClass(q);
      },
      setAttributeAtRowIndex: (R, q, me) => {
        var ke;
        (ke = o(T)) == null || ke.orderedRows[R].addAttr(q, me);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var me;
        const q = (me = o(y)) == null ? void 0 : me.checkbox;
        q && (q.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (R, q) => {
        var ke;
        const me = (ke = o(T)) == null ? void 0 : ke.orderedRows[R].checkbox;
        me && (me.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (R, q) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), k = !0, () => {
    var R;
    (R = o(_)) == null || R.destroy();
  })), pn(() => {
    X && X();
  });
  function P(R) {
    o(_) && o(_).handleRowCheckboxChange(R);
  }
  function Z(R) {
    C[R] || (C[R] = !0);
  }
  function te(R) {
    (!(R in C) || C[R]) && (C[R] = !1);
  }
  function H(R) {
    var me;
    const q = (me = o(y)) == null ? void 0 : me.checkbox;
    q && (q.indeterminate = R);
  }
  function O(R) {
    if (!o(_) || !R.detail.target)
      return;
    const q = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && G(q);
  }
  function B(R) {
    if (!o(_) || !R.detail.target)
      return;
    const q = a(R.detail.target, ".mdc-data-table__row");
    q && o(_) && o(_).handleRowClick({ rowId: R.detail.rowId, row: q });
  }
  function G(R) {
    var xt, Tt;
    const q = ((xt = o(y)) == null ? void 0 : xt.orderedCells) ?? [], me = q.map((dn) => dn.element).indexOf(R);
    if (me === -1)
      return;
    const ke = q[me].columnId ?? null;
    (Tt = o(_)) == null || Tt.handleSortAction({ columnId: ke, columnIndex: me, headerCell: R });
  }
  function oe() {
    var R;
    return (R = o(_)) == null ? void 0 : R.layout();
  }
  function ee() {
    return A;
  }
  var re = { layout: oe, getElement: ee }, F = Db(), ae = (R) => {
    var q;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, R);
  }, K = (R) => {
    var q;
    O(R), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, R);
  }, ce = (R) => {
    var q;
    B(R), (q = e.onSMUIDataTableRowClick) == null || q.call(e, R);
  }, Ee = (R) => {
    var q;
    P(R), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, R);
  };
  Ge(
    F,
    (R, q) => ({
      class: R,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: ae,
      onSMUIDataTableHeaderClick: K,
      onSMUIDataTableRowClick: ce,
      onSMUIDataTableBodyCheckboxChange: Ee
    }),
    [
      () => Ue({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => li(E, ["container$", "table$"])
    ]
  );
  var z = de(F);
  Ge(z, (R, q) => ({ class: R, ...q }), [
    () => Ue({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ct(E, "container$")
  ]);
  var se = de(z);
  Ge(se, (R, q) => ({ class: R, ...q }), [
    () => Ue({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ct(E, "table$")
  ]);
  var Re = de(se);
  Se(Re, () => e.children ?? he), Fe(se, (R, q) => Q == null ? void 0 : Q(R, q), b), Oe(z, (R) => S = R, () => S), Fe(z, (R, q) => Q == null ? void 0 : Q(R, q), v);
  var Ae = ge(z, 2);
  {
    var He = (R) => {
      var q = Rb(), me = ge(de(q), 2);
      Se(me, () => e.progress ?? he), Le((ke) => vt(q, ke), [
        () => Object.entries(o(x)).map(([ke, xt]) => `${ke}: ${xt};`).join(" ")
      ]), w(R, q);
    };
    ie(Ae, (R) => {
      e.progress && R(He);
    });
  }
  var Ke = ge(Ae, 2);
  Se(Ke, () => e.paginate ?? he), Oe(F, (R) => A = R, () => A), Fe(F, (R, q) => Q == null ? void 0 : Q(R, q), s), w(t, F);
  var dt = Te(re);
  return i(), dt;
}
var Hb = /* @__PURE__ */ fe("<thead><!></thead>");
function Pb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ Ie(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const l = ve("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (I) => {
    Y(a, I, !0), l && l(I);
  });
  const c = ve("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (I) => {
    Y(a, void 0), c && c(I);
  }), le("SMUI:data-table:cell:mount", (I) => {
    s.push(I), u.set(I.element, I);
  }), le("SMUI:data-table:cell:unmount", (I) => {
    const E = s.findIndex((A) => A === I);
    E !== -1 && s.splice(E, 1), u.delete(I.element);
  });
  const d = ve("SMUI:data-table:header:mount"), h = ve("SMUI:data-table:header:unmount");
  ot(() => {
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
  var v = { getElement: m }, p = Hb();
  Ge(p, () => ({ ...r }));
  var b = de(p);
  return Se(b, () => e.children ?? he), Oe(p, (I) => i = I, () => i), Fe(p, (I, E) => Q == null ? void 0 : Q(I, E), n), w(t, p), Te(v);
}
var Nb = /* @__PURE__ */ fe("<tbody><!></tbody>");
function Ub(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), le("SMUI:data-table:row:unmount", (p) => {
    const b = s.findIndex((I) => I === p);
    b !== -1 && s.splice(b, 1), u.delete(p.element);
  });
  const l = ve("SMUI:data-table:body:mount"), c = ve("SMUI:data-table:body:unmount");
  ot(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      c && c(p);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = Nb();
  Ge(m, (p) => ({ class: p, ...i }), [
    () => Ue({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = de(m);
  return Se(v, () => e.children ?? he), Oe(m, (p) => a = p, () => a), Fe(m, (p, b) => Q == null ? void 0 : Q(p, b), n), w(t, m), Te(f);
}
let Fb = 0;
var kb = /* @__PURE__ */ fe("<tr><!></tr>");
function so(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Fb++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ Ie(void 0), l = Ce({}), c = Ce({}), d = ve("SMUI:data-table:row:header");
  const h = ve("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (N) => {
    Y(u, N, !0), h && h(N);
  });
  const f = ve("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (N) => {
    Y(u, void 0), f && f(N);
  });
  const m = ve("SMUI:data-table:row:mount"), v = ve("SMUI:data-table:row:unmount");
  ot(() => {
    const N = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: I,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
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
      addClass: p,
      removeClass: b,
      getAttr: I,
      addAttr: E
    };
    return m && m(N), () => {
      v && v(N);
    };
  });
  function p(N) {
    l[N] || (l[N] = !0);
  }
  function b(N) {
    (!(N in l) || l[N]) && (l[N] = !1);
  }
  function I(N) {
    return N in c ? c[N] ?? null : S().getAttribute(N);
  }
  function E(N, X) {
    c[N] !== X && (c[N] = X);
  }
  function A(N) {
    We(S(), "SMUIDataTableHeaderClick", N);
  }
  function _(N) {
    We(S(), "SMUIDataTableRowClick", { rowId: i(), target: N.target });
  }
  function S() {
    return s;
  }
  var y = { getElement: S }, T = kb(), C = (N) => {
    var X;
    d ? A(N) : _(N), (X = e.onclick) == null || X.call(e, N);
  };
  Ge(
    T,
    (N) => ({
      class: N,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
    }),
    [
      () => Ue({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var x = de(T);
  return Se(x, () => e.children ?? he), Oe(T, (N) => s = N, () => s), Fe(T, (N, X) => Q == null ? void 0 : Q(N, X), n), w(t, T), Te(y);
}
let Bb = 0;
var Vb = /* @__PURE__ */ fe('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Gb = /* @__PURE__ */ fe("<th><!></th>"), jb = /* @__PURE__ */ fe("<td><!></td>");
function Ya(t, e) {
  xe(e, !0);
  const n = () => Pn(I, "$sort", i), r = () => Pn(E, "$sortDirection", i), [i, a] = Zn();
  let s = ve("SMUI:data-table:row:header"), u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), h = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Bb++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => ve("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
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
  ]), v, p = Ce({}), b = Ce({}), I = ve("SMUI:data-table:sort"), E = ve("SMUI:data-table:sortDirection"), A = ve("SMUI:data-table:sortAscendingAriaLabel"), _ = ve("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const S = ve("SMUI:data-table:cell:mount"), y = ve("SMUI:data-table:cell:unmount");
  ot(() => {
    const H = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return U();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: C,
      getAttr: x,
      addAttr: N
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return U();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: C,
      getAttr: x,
      addAttr: N
    };
    return S && S(H), () => {
      y && y(H);
    };
  });
  function T(H) {
    p[H] || (p[H] = !0);
  }
  function C(H) {
    (!(H in p) || p[H]) && (p[H] = !1);
  }
  function x(H) {
    return H in b ? b[H] ?? null : U().getAttribute(H);
  }
  function N(H, O) {
    b[H] !== O && (b[H] = O);
  }
  function X(H) {
    We(U(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function k(H) {
    We(U(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function U() {
    return v;
  }
  var ue = { getElement: U }, j = $(), V = W(j);
  {
    var P = (H) => {
      var O = Gb(), B = (re) => {
        var F;
        d() && X(re), (F = e.onchange) == null || F.call(e, re);
      };
      Ge(
        O,
        (re) => ({
          class: re,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Ue({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var G = de(O);
      {
        var oe = (re) => {
          var F = Vb(), ae = de(F);
          Se(ae, () => e.children ?? he);
          var K = ge(ae, 2), ce = de(K);
          Le(() => {
            cr(K, "id", `${h() ?? ""}-status-label`), Ye(ce, n() === h() ? r() === "ascending" ? A : _ : "");
          }), w(re, F);
        }, ee = (re) => {
          var F = $(), ae = W(F);
          Se(ae, () => e.children ?? he), w(re, F);
        };
        ie(G, (re) => {
          f() ? re(oe) : re(ee, !1);
        });
      }
      Oe(O, (re) => v = re, () => v), Fe(O, (re, F) => Q == null ? void 0 : Q(re, F), u), w(H, O);
    }, Z = (H) => {
      var O = jb(), B = (oe) => {
        var ee;
        d() && k(oe), (ee = e.onchange) == null || ee.call(e, oe);
      };
      Ge(
        O,
        (oe) => ({
          class: oe,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Ue({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var G = de(O);
      Se(G, () => e.children ?? he), Oe(O, (oe) => v = oe, () => v), Fe(O, (oe, ee) => Q == null ? void 0 : Q(oe, ee), u), w(H, O);
    };
    ie(V, (H) => {
      s ? H(P) : H(Z, !1);
    });
  }
  w(t, j);
  var te = Te(ue);
  return a(), te;
}
On(["click"]);
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
var qb = {
  ROOT: "mdc-form-field"
}, zb = {
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
var Wb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zb;
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
  }(Gt)
);
let Xb = 0;
var Kb = /* @__PURE__ */ fe("<div><!> <label><!></label></div>");
function Zb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + Xb++), u = g(e, "label$use", 19, () => []), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new vi(), f, m = /* @__PURE__ */ Ie(void 0);
  le("SMUI:generic:input:props", { id: s() }), le("SMUI:generic:input:mount", (_) => {
    Y(m, _, !0);
  }), le("SMUI:generic:input:unmount", () => {
    Y(m, void 0);
  }), ot(() => (Y(
    d,
    new Wb({
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
    return c;
  }
  var p = { getElement: v }, b = Kb();
  Ge(b, (_, S) => ({ class: _, ...S }), [
    () => Ue({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => li(l, ["label$"])
  ]);
  var I = de(b);
  Se(I, () => e.children ?? he);
  var E = ge(I, 2);
  Ge(E, (_) => ({ for: s(), ..._ }), [() => ct(l, "label$")]);
  var A = de(E);
  return Se(A, () => e.label ?? he), Oe(E, (_) => f = _, () => f), Fe(E, (_, S) => Q == null ? void 0 : Q(_, S), u), Oe(b, (_) => c = _, () => c), Fe(b, (_, S) => Q == null ? void 0 : Q(_, S), n), w(t, b), Te(p);
}
var Yb = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, Qb = /* @__PURE__ */ fe('<button class="icon-button svelte-jv2py4"><!></button>');
function Jb(t, e) {
  xe(e, !0);
  let n = g(e, "tooltipSide", 3, "top"), r = g(e, "showDelay", 3, 1e3), i = g(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = g(e, "size", 3, "25px"), s = /* @__PURE__ */ _e(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  xa(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (u, l) => {
      var c = Qb();
      c.__click = [Yb, e];
      var d = de(c);
      {
        var h = (m) => {
          ad(m, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (m) => {
          var v = $(), p = W(v);
          {
            var b = (E) => {
              ob(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (E) => {
              var A = $(), _ = W(A);
              {
                var S = (T) => {
                  id(T, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, y = (T) => {
                  var C = $(), x = W(C);
                  {
                    var N = (k) => {
                      ab(k, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, X = (k) => {
                      var U = $(), ue = W(U);
                      {
                        var j = (P) => {
                          db(P, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, V = (P) => {
                          var Z = $(), te = W(Z);
                          {
                            var H = (B) => {
                              hb(B, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, O = (B) => {
                              var G = $(), oe = W(G);
                              {
                                var ee = (F) => {
                                  mb(F, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, re = (F) => {
                                  var ae = $(), K = W(ae);
                                  {
                                    var ce = (z) => {
                                      pb(z, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Ee = (z) => {
                                      var se = Et();
                                      Le(() => Ye(se, `Unsupported supported type: ${e.type ?? ""}`)), w(z, se);
                                    };
                                    ie(
                                      K,
                                      (z) => {
                                        e.type === "star" ? z(ce) : z(Ee, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(F, ae);
                                };
                                ie(
                                  oe,
                                  (F) => {
                                    e.type === "close" ? F(ee) : F(re, !1);
                                  },
                                  !0
                                );
                              }
                              w(B, G);
                            };
                            ie(
                              te,
                              (B) => {
                                e.type === "link-off" ? B(H) : B(O, !1);
                              },
                              !0
                            );
                          }
                          w(P, Z);
                        };
                        ie(
                          ue,
                          (P) => {
                            e.type === "wand-stars" ? P(j) : P(V, !1);
                          },
                          !0
                        );
                      }
                      w(k, U);
                    };
                    ie(
                      x,
                      (k) => {
                        e.type === "visibility" ? k(N) : k(X, !1);
                      },
                      !0
                    );
                  }
                  w(T, C);
                };
                ie(
                  _,
                  (T) => {
                    e.type === "edit" ? T(S) : T(y, !1);
                  },
                  !0
                );
              }
              w(E, A);
            };
            ie(
              p,
              (E) => {
                e.type === "duplicate" ? E(b) : E(I, !1);
              },
              !0
            );
          }
          w(m, v);
        };
        ie(d, (m) => {
          e.type === "delete" ? m(h) : m(f, !1);
        });
      }
      Le(() => cr(c, "aria-label", e.tooltip)), w(u, c);
    },
    $$slots: { default: !0 }
  }), Te();
}
On(["click"]);
function Mo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var $b = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Mo({}, $b.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Qa, du = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Qa = {}, Mo(Qa, du.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Mo(Qa, du.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function e_(t) {
  return t * t * t;
}
function sd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function t_(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (y) => Math.sqrt(y) * 120, easing: s = sd } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var h = n_(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, I = n.top + n.height * d, E = (v - b) * f, A = (p - I) * m, _ = e.width / n.width, S = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + A * A)) : a,
    easing: s,
    css: (y, T) => {
      var C = T * E, x = T * A, N = y + T * _, X = y + T * S;
      return `transform: ${l} translate(${C}px, ${x}px) scale(${N}, ${X});`;
    }
  };
}
function n_(t) {
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
function r_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function fu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function ys(t, { delay: e = 0, duration: n = 400, easing: r = r_, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - s), [h, f] = fu(i), [m, v] = fu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${c} translate(${(1 - p) * h}${f}, ${(1 - p) * m}${v});
			opacity: ${l - d * b}`
  };
}
On([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function i_(t, e) {
  var n;
  (n = e()) == null || n();
}
var a_ = /* @__PURE__ */ fe('<div class="detail svelte-4xu36c"> </div>'), s_ = /* @__PURE__ */ fe('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function o_(t, e) {
  xe(e, !0);
  let n = g(e, "onClose", 3, () => {
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
  var a = s_(), s = de(a), u = de(s);
  Lo(u, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et();
      Le(() => Ye(I, r[e.type])), w(p, I);
    },
    $$slots: { default: !0 }
  });
  var l = ge(s, 2), c = de(l), d = de(c), h = ge(c, 2);
  {
    var f = (p) => {
      var b = a_(), I = de(b);
      Le(() => Ye(I, e.detail)), w(p, b);
    };
    ie(h, (p) => {
      e.detail && p(f);
    });
  }
  var m = ge(l, 2);
  m.__click = [i_, n];
  var v = de(m);
  Lo(v, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et("close");
      w(p, I);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    vt(a, `--color:${i[e.type] ?? ""}`), Ye(d, e.summary);
  }), fs(1, a, () => ys, () => ({ x: 0, y: 30, duration: 150, easing: e_ })), fs(2, a, () => ys, () => ({ x: 50, y: 0, duration: 150, easing: sd })), w(t, a), Te();
}
On(["click"]);
const l_ = 4e3;
function u_() {
  let t = Ce({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = l_) => {
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
const ya = u_();
var c_ = /* @__PURE__ */ fe("<div><!></div>"), d_ = /* @__PURE__ */ fe('<div class="toast-host svelte-11vwiay"></div>');
function f_(t, e) {
  xe(e, !1);
  const n = ya.toasts;
  mh();
  var r = d_();
  ir(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = c_(), u = de(s);
    o_(u, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => ya.remove(o(a).id)
    }), hh(s, () => t_, null), w(i, s);
  }), w(t, r), Te();
}
var h_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, v_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, m_ = /* @__PURE__ */ fe('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), g_ = /* @__PURE__ */ fe('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), p_ = /* @__PURE__ */ fe('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function b_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ _e(() => !!e.value);
  var r = p_();
  r.__click = [h_, e];
  var i = de(r), a = de(i);
  {
    var s = (f) => {
      xa(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var p = m_();
          p.__click = [v_, e];
          var b = de(p);
          rl(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      xa(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          _b(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ie(a, (f) => {
      o(n) ? f(s) : f(u, !1);
    });
  }
  var l = ge(i, 2), c = de(l), d = ge(l, 2);
  {
    var h = (f) => {
      var m = g_(), v = ge(W(m), 2), p = de(v), b = ge(v, 2), I = de(b);
      ub(I, { svgStyles: "fill: gray;" }), Le(() => Ye(p, e.value)), w(f, m);
    };
    ie(d, (f) => {
      o(n) && f(h);
    });
  }
  Le(() => {
    Zo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), Ye(c, e.label);
  }), w(t, r), Te();
}
On(["click"]);
var __ = /* @__PURE__ */ fe('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function y_(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(z) {
    return z === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "disabled", 15, !1), l = g(e, "touch", 3, !1), c = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), h = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), v = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), b = /* @__PURE__ */ qe(e, [
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
  ]), I, E = /* @__PURE__ */ Ie(void 0), A = /* @__PURE__ */ Ie(void 0), _ = Ce({}), S = Ce({}), y = Ce({}), T = /* @__PURE__ */ Ie(!1), C = Ce(ve("SMUI:generic:input:props") ?? {}), x = /* @__PURE__ */ Ie(Ce(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((z) => z === f()) !== -1)), N = ve("SMUI:checkbox:context"), X = ve("SMUI:data-table:row:header"), k = h(), U = r(d()) ? [] : [...d()], ue = o(x);
  we(() => {
    let z = !1;
    if (!r(d()))
      if (ue !== o(x)) {
        const se = d().findIndex((Re) => Re === f());
        o(x) && se === -1 ? d().push(f()) : !o(x) && se !== -1 && d().splice(se, 1), z = !0;
      } else {
        const se = U.findIndex((Ae) => Ae === f()), Re = d().findIndex((Ae) => Ae === f());
        se > -1 && Re === -1 ? (Y(x, !1), z = !0) : Re > -1 && se === -1 && (Y(x, !0), z = !0);
      }
    r(h()) ? ue !== o(x) && (z = !0) : (h() !== (c() ? null : o(x)) || o(x) !== ue) && (h() === k && o(x) !== ue ? (h(o(x)), r(c()) || c(!1)) : Y(x, !!h()), z = !0), o(A) && (r(c()) ? o(A).indeterminate && (o(A).indeterminate = !1, z = !0) : !c() && o(A).indeterminate ? (o(A).indeterminate = !1, z = !0) : c() && !o(A).indeterminate && (o(A).indeterminate = !0, Y(x, !1), z = !0)), k = h(), U = r(d()) ? [] : [...d()], ue = o(x), z && o(E) && o(E).handleChange();
  });
  const j = ve("SMUI:generic:input:mount"), V = ve("SMUI:generic:input:unmount"), P = ve("SMUI:checkbox:mount"), Z = ve("SMUI:checkbox:unmount");
  ot(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(c()) && c(), Y(
      E,
      new wb({
        addClass: te,
        forceLayout: () => ee().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ee().parentNode,
        isChecked: () => o(x),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: H,
        removeNativeControlAttr: G,
        setNativeControlAttr: B,
        setNativeControlDisabled: (se) => u(se)
      }),
      !0
    );
    const z = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ee();
      },
      get checked() {
        return o(x);
      },
      set checked(se) {
        o(x) !== se && Y(x, se, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(se) {
        c(se);
      },
      activateRipple() {
        u() || Y(T, !0);
      },
      deactivateRipple() {
        Y(T, !1);
      }
    };
    return j && j(z), P && P(z), o(E).init(), () => {
      var se;
      V && V(z), Z && Z(z), (se = o(E)) == null || se.destroy();
    };
  });
  function te(z) {
    _[z] || (_[z] = !0);
  }
  function H(z) {
    (!(z in _) || _[z]) && (_[z] = !1);
  }
  function O(z, se) {
    S[z] != se && (se === "" || se == null ? delete S[z] : S[z] = se);
  }
  function B(z, se) {
    y[z] !== se && (y[z] = se);
  }
  function G(z) {
    (!(z in y) || y[z] != null) && (y[z] = void 0);
  }
  function oe() {
    return C && C.id;
  }
  function ee() {
    return I;
  }
  var re = { getId: oe, getElement: ee }, F = __(), ae = (z) => {
    var se;
    o(E) && o(E).handleAnimationEnd(), (se = e.onanimationend) == null || se.call(e, z);
  };
  Ge(F, (z, se, Re) => ({ class: z, style: se, ...Re, onanimationend: ae }), [
    () => Ue({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": N === "data-table" && X,
      "mdc-data-table__row-checkbox": N === "data-table" && !X,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(S).map(([z, se]) => `${z}: ${se};`).concat([s()]).join(" "),
    () => li(b, ["input$"])
  ]);
  var K = de(F), ce = (z) => {
    var se;
    We(ee(), "blur", z), (se = e.input$onblur) == null || se.call(e, z);
  }, Ee = (z) => {
    var se;
    We(ee(), "focus", z), (se = e.input$onfocus) == null || se.call(e, z);
  };
  return Ge(
    K,
    (z, se, Re, Ae) => ({
      class: z,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: se,
      "data-indeterminate": Re,
      ...y,
      ...Ae,
      onblur: ce,
      onfocus: Ee
    }),
    [
      () => Ue({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => ct(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Oe(K, (z) => Y(A, z), () => o(A)), Fe(K, (z, se) => Q == null ? void 0 : Q(z, se), v), di(() => vh(K, () => o(x), (z) => Y(x, z))), Oe(F, (z) => I = z, () => I), Fe(F, (z, se) => Q == null ? void 0 : Q(z, se), i), Fe(F, (z, se) => Jt == null ? void 0 : Jt(z, se), () => ({
    unbounded: !0,
    addClass: te,
    removeClass: H,
    addStyle: O,
    active: o(T),
    eventTarget: o(A)
  })), w(t, F), Te(re);
}
var I_ = /* @__PURE__ */ fe('<div style="display: flex; flex-direction: column;"></div>');
function E_(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => Ce([]));
  var i = I_();
  ir(i, 21, n, wi, (a, s) => {
    Zb(a, {
      label: (l) => {
        var c = Et();
        Le(() => Ye(c, o(s).label)), w(l, c);
      },
      children: (l, c) => {
        y_(l, {
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
var S_ = (t) => t.stopPropagation(), A_ = /* @__PURE__ */ fe('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), C_ = /* @__PURE__ */ fe('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), x_ = /* @__PURE__ */ fe('<div class="oscd-filters svelte-58jwwf"></div>');
function T_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ Ie(null), i = [], a = [];
  function s(v) {
    var p;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const b = (p = v.options) == null ? void 0 : p.find((A) => A.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const I = v.value.map((A) => {
            var S;
            const _ = (S = v.options) == null ? void 0 : S.find((y) => y.value === A);
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
    o(r) === v ? Y(r, null) : (Y(r, v, !0), a[v] = u(n()[v]));
  }
  function c() {
    Y(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var p;
    n(n().map((b, I) => I === v ? { ...b, value: a[v] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), Y(r, null);
  }
  function h(v) {
    var p;
    n(n().map((b, I) => I === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), c();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || c();
  }
  ot(() => {
    document.addEventListener("click", f);
  }), pn(() => {
    document.removeEventListener("click", f);
  }), we(() => {
  });
  var m = x_();
  ir(m, 23, n, (v) => v.key, (v, p, b) => {
    var I = C_(), E = de(I);
    {
      let S = /* @__PURE__ */ _e(() => s(o(p)));
      b_(E, {
        get label() {
          return o(p).label;
        },
        get value() {
          return o(S);
        },
        onOpen: () => l(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var A = ge(E, 2);
    {
      var _ = (S) => {
        var y = A_();
        y.__click = [S_];
        var T = ge(de(y), 2), C = de(T), x = ge(T, 2), N = de(x);
        {
          var X = (ue) => {
            Ro(ue, {
              get label() {
                return o(p).label;
              },
              get placeholder() {
                return o(p).placeholder;
              },
              get type() {
                return o(p).type;
              },
              style: "width: 100%;",
              get value() {
                return a[o(b)];
              },
              set value(j) {
                a[o(b)] = j;
              }
            });
          }, k = (ue) => {
            var j = $(), V = W(j);
            {
              var P = (te) => {
                {
                  let H = /* @__PURE__ */ _e(() => {
                    var O;
                    return (O = o(p)) == null ? void 0 : O.options;
                  });
                  Ip(te, {
                    get label() {
                      return o(p).label;
                    },
                    get data() {
                      return o(H);
                    },
                    get value() {
                      return a[o(b)];
                    },
                    set value(O) {
                      a[o(b)] = O;
                    }
                  });
                }
              }, Z = (te) => {
                var H = $(), O = W(H);
                {
                  var B = (oe) => {
                    {
                      let ee = /* @__PURE__ */ _e(() => {
                        var re;
                        return (re = o(p)) == null ? void 0 : re.options;
                      });
                      E_(oe, {
                        get data() {
                          return o(ee);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(re) {
                          a[o(b)] = re;
                        }
                      });
                    }
                  }, G = (oe) => {
                    var ee = $(), re = W(ee);
                    {
                      var F = (K) => {
                        Eb(K, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(ce) {
                            a[o(b)] = ce;
                          }
                        });
                      }, ae = (K) => {
                        var ce = $(), Ee = W(ce);
                        {
                          var z = (se) => {
                            Cb(se, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Re) {
                                a[o(b)] = Re;
                              }
                            });
                          };
                          ie(
                            Ee,
                            (se) => {
                              o(p).type === "datetime" && se(z);
                            },
                            !0
                          );
                        }
                        w(K, ce);
                      };
                      ie(
                        re,
                        (K) => {
                          o(p).type === "date" ? K(F) : K(ae, !1);
                        },
                        !0
                      );
                    }
                    w(oe, ee);
                  };
                  ie(
                    O,
                    (oe) => {
                      o(p).type === "multiselect" ? oe(B) : oe(G, !1);
                    },
                    !0
                  );
                }
                w(te, H);
              };
              ie(
                V,
                (te) => {
                  o(p).type === "select" ? te(P) : te(Z, !1);
                },
                !0
              );
            }
            w(ue, j);
          };
          ie(N, (ue) => {
            o(p).type === "text" || o(p).type === "number" ? ue(X) : ue(k, !1);
          });
        }
        var U = ge(x, 2);
        ps(U, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (ue, j) => {
            var V = Et("Apply");
            w(ue, V);
          },
          $$slots: { default: !0 }
        }), Le(() => Ye(C, `Filter by ${o(p).label ?? ""}`)), fs(2, y, () => ys, () => ({ y: 5, duration: 120 })), fs(1, y, () => ys, () => ({ y: -5, duration: 120 })), w(S, y);
      };
      ie(A, (S) => {
        o(r) === o(b) && S(_);
      });
    }
    Oe(I, (S, y) => i[y] = S, (S) => i == null ? void 0 : i[S], () => [o(b)]), w(v, I);
  }), w(t, m), Te();
}
On(["click"]);
var w_ = (t, e) => e(), O_ = /* @__PURE__ */ fe('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), L_ = /* @__PURE__ */ fe('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function R_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 31, () => Ce([])), r = g(e, "onFilterChange", 3, (E) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), u = g(e, "onSearchInput", 3, () => {
  }), l = g(e, "searchDisabled", 3, !1), c = /* @__PURE__ */ _e(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = L_(), f = de(h);
  {
    var m = (E) => {
      Vg(E, {
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
        set value(A) {
          i(A);
        }
      });
    };
    ie(f, (E) => {
      l() || E(m);
    });
  }
  var v = ge(f, 2), p = ge(de(v), 2);
  T_(p, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var b = ge(p, 2);
  {
    var I = (E) => {
      var A = O_();
      A.__click = [w_, d], w(E, A);
    };
    ie(b, (E) => {
      o(c) && E(I);
    });
  }
  w(t, h), Te();
}
On(["click"]);
var D_ = /* @__PURE__ */ fe('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function M_(t, e) {
  xe(e, !0);
  const [n, r] = Zn();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "indeterminate", 3, !1), l = g(e, "closed", 3, !1), c = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ Ie(void 0), v = Ce({}), p = Ce({}), b = Ce({}), I = Ce({}), E = Ce({}), A = ve("SMUI:linear-progress:context"), _ = ve("SMUI:linear-progress:closed");
  we(() => {
    _ && Mn(_, l());
  }), we(() => {
    o(m) && o(m).isDeterminate() !== !u() && o(m).setDeterminate(!u());
  }), we(() => {
    o(m) && o(m).getProgress() !== c() && o(m).setProgress(c());
  }), we(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), we(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), ot(() => (Y(
    m,
    new Ob({
      addClass: y,
      forceLayout: () => {
        U().getBoundingClientRect();
      },
      setBufferBarStyle: X,
      setPrimaryBarStyle: k,
      hasClass: S,
      removeAttribute: x,
      removeClass: T,
      setAttribute: C,
      setStyle: N,
      attachResizeObserver: (O) => {
        const B = window.ResizeObserver;
        if (B) {
          const G = new B(O);
          return G.observe(U()), G;
        }
        return null;
      },
      getWidth: () => U().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var O;
    (O = o(m)) == null || O.destroy();
  }));
  function S(O) {
    return O in v ? v[O] : U().classList.contains(O);
  }
  function y(O) {
    v[O] || (v[O] = !0);
  }
  function T(O) {
    (!(O in v) || v[O]) && (v[O] = !1);
  }
  function C(O, B) {
    p[O] !== B && (p[O] = B);
  }
  function x(O) {
    (!(O in p) || p[O] != null) && (p[O] = void 0);
  }
  function N(O, B) {
    b[O] != B && (B === "" || B == null ? delete b[O] : b[O] = B);
  }
  function X(O, B) {
    I[O] != B && (B === "" || B == null ? delete I[O] : I[O] = B);
  }
  function k(O, B) {
    E[O] != B && (B === "" || B == null ? delete E[O] : E[O] = B);
  }
  function U() {
    return f;
  }
  var ue = { getElement: U }, j = D_(), V = (O) => {
    var B;
    o(m) && o(m).handleTransitionEnd(), (B = e.ontransitionend) == null || B.call(e, O);
  };
  Ge(
    j,
    (O, B) => ({
      class: O,
      style: B,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...h,
      ontransitionend: V
    }),
    [
      () => Ue({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([O, B]) => `${O}: ${B};`).concat([s()]).join(" ")
    ]
  );
  var P = de(j), Z = de(P), te = ge(P, 2);
  Oe(j, (O) => f = O, () => f), Fe(j, (O, B) => Q == null ? void 0 : Q(O, B), i), Le(
    (O, B) => {
      vt(Z, O), vt(te, B);
    },
    [
      () => Object.entries(I).map(([O, B]) => `${O}: ${B};`).join(" "),
      () => Object.entries(E).map(([O, B]) => `${O}: ${B};`).join(" ")
    ]
  ), w(t, j);
  var H = Te(ue);
  return r(), H;
}
var H_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), P_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), N_ = /* @__PURE__ */ fe('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), U_ = (t, e) => e(), F_ = /* @__PURE__ */ fe('<input type="text" class="svelte-1mj71p3"/>'), k_ = (t, e) => e(), B_ = /* @__PURE__ */ fe('<input type="number" class="svelte-1mj71p3"/>'), V_ = /* @__PURE__ */ fe("<!> <!>", 1), G_ = /* @__PURE__ */ fe("<!> <!>", 1), j_ = /* @__PURE__ */ fe('<div class="cell-actions svelte-1mj71p3"></div>'), q_ = /* @__PURE__ */ fe("<!> <!>", 1);
function hu(t, e) {
  xe(e, !0);
  const n = () => Pn(p, "$sortColumn", a), r = () => Pn(b, "$sortDirection", a), i = () => Pn(v, "$filteredData", a), [a, s] = Zn();
  let u = g(e, "loadingDone", 15, !0), l = g(e, "label", 19, Kr), c = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => Ce([])), h = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = Ce({ name: "", color: "", number: "" }), v = Ut([]), p = Ut(null), b = Ut(null), I = /* @__PURE__ */ _e(() => c().some((S) => S.filter));
  e.store.store.subscribe((S) => {
    d([...S]), E();
  });
  function E() {
    let S = d().filter((y) => c().every((T) => {
      const C = m[T.field], x = T.filterValueGetter ? T.filterValueGetter(y) : y[T.field];
      return C ? T.filterType === "number" ? x == C : x.toString().toLowerCase().includes(C.toLowerCase()) : !0;
    }));
    S = A(S), v.set(S);
  }
  function A(S) {
    let y, T;
    return p.subscribe((C) => y = C), b.subscribe((C) => T = C), !y || !T ? S : S.sort((C, x) => {
      let N = C[y], X = x[y];
      return N == null && (N = ""), X == null && (X = ""), T === "asc" ? N.toString().localeCompare(X.toString()) : X.toString().localeCompare(N.toString());
    });
  }
  function _(S) {
    p.update((y) => {
      if (y === S)
        b.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return b.set("asc"), S;
      return S;
    }), E();
  }
  v.set(d()), Mb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (y) => {
      M_(y, {
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
    children: (y, T) => {
      var C = q_(), x = W(C);
      Pb(x, {
        children: (X, k) => {
          var U = G_(), ue = W(U);
          so(ue, {
            class: "header-title-row",
            children: (P, Z) => {
              var te = $(), H = W(te);
              ir(H, 17, c, wi, (O, B) => {
                Ya(O, {
                  onclick: () => o(B).sortable && _(o(B).field),
                  get style() {
                    return o(B).headerStyle;
                  },
                  children: (G, oe) => {
                    var ee = N_(), re = de(ee), F = de(re), ae = de(F), K = ge(F, 2);
                    {
                      var ce = (Ee) => {
                        var z = $(), se = W(z);
                        {
                          var Re = (Ae) => {
                            var He = $(), Ke = W(He);
                            {
                              var dt = (q) => {
                                var me = H_();
                                w(q, me);
                              }, R = (q) => {
                                var me = $(), ke = W(me);
                                {
                                  var xt = (Tt) => {
                                    var dn = P_();
                                    w(Tt, dn);
                                  };
                                  ie(
                                    ke,
                                    (Tt) => {
                                      r() === "desc" && Tt(xt);
                                    },
                                    !0
                                  );
                                }
                                w(q, me);
                              };
                              ie(Ke, (q) => {
                                r() === "asc" ? q(dt) : q(R, !1);
                              });
                            }
                            w(Ae, He);
                          };
                          ie(se, (Ae) => {
                            n() === o(B).field && r() !== null && Ae(Re);
                          });
                        }
                        w(Ee, z);
                      };
                      ie(K, (Ee) => {
                        o(B).sortable && Ee(ce);
                      });
                    }
                    Le(() => {
                      vt(ee, `min-width: ${o(B).minWidth ?? 0 ?? ""}`), Ye(ae, o(B).headerName);
                    }), w(G, ee);
                  },
                  $$slots: { default: !0 }
                });
              }), w(P, te);
            },
            $$slots: { default: !0 }
          });
          var j = ge(ue, 2);
          {
            var V = (P) => {
              so(P, {
                class: "header-filter-row",
                children: (Z, te) => {
                  var H = $(), O = W(H);
                  ir(O, 17, c, wi, (B, G) => {
                    Ya(B, {
                      children: (oe, ee) => {
                        var re = $(), F = W(re);
                        {
                          var ae = (K) => {
                            var ce = V_(), Ee = W(ce);
                            {
                              var z = (Ae) => {
                                var He = F_();
                                He.__input = [U_, E], Le(() => cr(He, "placeholder", `${f()} ${o(G).headerName}`)), Sa(He, () => m[o(G).field], (Ke) => m[o(G).field] = Ke), w(Ae, He);
                              };
                              ie(Ee, (Ae) => {
                                o(G).filterType === "text" && Ae(z);
                              });
                            }
                            var se = ge(Ee, 2);
                            {
                              var Re = (Ae) => {
                                var He = B_();
                                He.__input = [k_, E], Le(() => cr(He, "placeholder", `${f()} ${o(G).headerName}`)), Sa(He, () => m[o(G).field], (Ke) => m[o(G).field] = Ke), w(Ae, He);
                              };
                              ie(se, (Ae) => {
                                o(G).filterType === "number" && Ae(Re);
                              });
                            }
                            w(K, ce);
                          };
                          ie(F, (K) => {
                            o(G).filter && K(ae);
                          });
                        }
                        w(oe, re);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(Z, H);
                },
                $$slots: { default: !0 }
              });
            };
            ie(j, (P) => {
              o(I) && P(V);
            });
          }
          w(X, U);
        },
        $$slots: { default: !0 }
      });
      var N = ge(x, 2);
      Ub(N, {
        children: (X, k) => {
          var U = $(), ue = W(U);
          ir(ue, 1, i, wi, (j, V) => {
            so(j, {
              children: (P, Z) => {
                var te = $(), H = W(te);
                ir(H, 17, c, (O) => O.field, (O, B) => {
                  var G = $(), oe = W(G);
                  {
                    var ee = (F) => {
                      Ya(F, {
                        children: (ae, K) => {
                          var ce = j_();
                          ir(ce, 21, h, wi, (Ee, z) => {
                            var se = $(), Re = W(se);
                            {
                              var Ae = (Ke) => {
                                xa(Ke, {
                                  get content() {
                                    return o(z).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, R) => {
                                    {
                                      let q = /* @__PURE__ */ _e(() => o(z).disabled(o(V)));
                                      og(dt, {
                                        get iconComponent() {
                                          return o(z).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(z).iconStyles;
                                        },
                                        callback: () => o(z).callback(o(V)),
                                        get disabled() {
                                          return o(q);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, He = (Ke) => {
                                xa(Ke, {
                                  get content() {
                                    return o(z).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, R) => {
                                    {
                                      let q = /* @__PURE__ */ _e(() => o(z).disabled(o(V)));
                                      Yc(dt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(z).callback(o(V)),
                                        get disabled() {
                                          return o(q);
                                        },
                                        children: (me, ke) => {
                                          var xt = $(), Tt = W(xt);
                                          {
                                            var dn = (M) => {
                                              Wp(M, { svgStyles: "margin: unset" });
                                            }, ye = (M) => {
                                              var D = $(), J = W(D);
                                              {
                                                var De = (at) => {
                                                  rl(at, { svgStyles: "margin: unset" });
                                                }, lt = (at) => {
                                                  var wt = $(), jt = W(wt);
                                                  {
                                                    var vr = (mt) => {
                                                      Zp(mt, { svgStyles: "margin: unset" });
                                                    }, ft = (mt) => {
                                                      var Ft = $(), Un = W(Ft);
                                                      {
                                                        var gi = (Pe) => {
                                                          Qp(Pe, { svgStyles: "margin: unset" });
                                                        }, Fn = (Pe) => {
                                                          var tt = $(), et = W(tt);
                                                          {
                                                            var Dt = (Ze) => {
                                                              tb(Ze, { svgStyles: "margin: unset" });
                                                            }, fn = (Ze) => {
                                                              var pt = $(), Ot = W(pt);
                                                              {
                                                                var Qe = (qt) => {
                                                                  id(qt, { svgStyles: "margin: unset" });
                                                                }, Lt = (qt) => {
                                                                  var Zt = $(), _t = W(Zt);
                                                                  {
                                                                    var Mt = (bt) => {
                                                                      ad(bt, { svgStyles: "margin: unset" });
                                                                    }, sn = (bt) => {
                                                                      $p(bt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ie(
                                                                      _t,
                                                                      (bt) => {
                                                                        o(z).icon === "delete" ? bt(Mt) : bt(sn, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(qt, Zt);
                                                                };
                                                                ie(
                                                                  Ot,
                                                                  (qt) => {
                                                                    o(z).icon === "edit" ? qt(Qe) : qt(Lt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(Ze, pt);
                                                            };
                                                            ie(
                                                              et,
                                                              (Ze) => {
                                                                o(z).icon === "remove" ? Ze(Dt) : Ze(fn, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Pe, tt);
                                                        };
                                                        ie(
                                                          Un,
                                                          (Pe) => {
                                                            o(z).icon === "find-in-page" ? Pe(gi) : Pe(Fn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(mt, Ft);
                                                    };
                                                    ie(
                                                      jt,
                                                      (mt) => {
                                                        o(z).icon === "download" ? mt(vr) : mt(ft, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(at, wt);
                                                };
                                                ie(
                                                  J,
                                                  (at) => {
                                                    o(z).icon === "cancel" ? at(De) : at(lt, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(M, D);
                                            };
                                            ie(Tt, (M) => {
                                              o(z).icon === "add" ? M(dn) : M(ye, !1);
                                            });
                                          }
                                          w(me, xt);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ie(Re, (Ke) => {
                                o(z).iconComponent ? Ke(Ae) : Ke(He, !1);
                              });
                            }
                            w(Ee, se);
                          }), w(ae, ce);
                        },
                        $$slots: { default: !0 }
                      });
                    }, re = (F) => {
                      Ya(F, {
                        get numeric() {
                          return o(B).numeric;
                        },
                        get style() {
                          return o(B).cellStyle;
                        },
                        children: (ae, K) => {
                          var ce = $(), Ee = W(ce);
                          {
                            var z = (Re) => {
                              const Ae = /* @__PURE__ */ _e(() => o(B).cellRenderer);
                              var He = $(), Ke = W(He);
                              hr(Ke, () => o(Ae), (dt, R) => {
                                R(dt, $e(
                                  {
                                    get row() {
                                      return o(V);
                                    },
                                    get value() {
                                      return o(V)[o(B).field];
                                    },
                                    get col() {
                                      return o(B);
                                    }
                                  },
                                  () => o(B).cellRendererProps ?? {}
                                ));
                              }), w(Re, He);
                            }, se = (Re) => {
                              var Ae = $(), He = W(Ae);
                              {
                                var Ke = (R) => {
                                  var q = Et();
                                  Le((me) => Ye(q, me), [
                                    () => o(B).valueFormatter(o(V)[o(B).field])
                                  ]), w(R, q);
                                }, dt = (R) => {
                                  var q = Et();
                                  Le(() => Ye(q, o(V)[o(B).field] ?? "")), w(R, q);
                                };
                                ie(
                                  He,
                                  (R) => {
                                    o(B).valueFormatter ? R(Ke) : R(dt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Re, Ae);
                            };
                            ie(Ee, (Re) => {
                              o(B).cellRenderer ? Re(z) : Re(se, !1);
                            });
                          }
                          w(ae, ce);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ie(oe, (F) => {
                      o(B).field === "actions" ? F(ee) : F(re, !1);
                    });
                  }
                  w(O, G);
                }), w(P, te);
              },
              $$slots: { default: !0 }
            });
          }), w(X, U);
        },
        $$slots: { default: !0 }
      }), w(y, C);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
On(["input"]);
function St(t) {
  return typeof t == "function";
}
function il(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var oo = il(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Is(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ka = function() {
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
            for (var u = Pt(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
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
      if (St(d))
        try {
          d();
        } catch (p) {
          a = p instanceof oo ? p.errors : [p];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Pt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              vu(v);
            } catch (p) {
              a = a ?? [], p instanceof oo ? a = Wn(Wn([], Or(a)), Or(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new oo(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        vu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Is(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Is(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), od = ka.EMPTY;
function ld(t) {
  return t instanceof ka || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function vu(t) {
  St(t) ? t() : t.unsubscribe();
}
var z_ = {
  Promise: void 0
}, W_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Wn([t, e], Or(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function ud(t) {
  W_.setTimeout(function() {
    throw t;
  });
}
function mu() {
}
function as(t) {
  t();
}
var al = function(t) {
  nt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ld(n) && n.add(r)) : r.destination = Z_, r;
  }
  return e.create = function(n, r, i) {
    return new Ho(n, r, i);
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
}(ka), X_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ja(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ja(r);
      }
    else
      Ja(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ja(n);
      }
  }, t;
}(), Ho = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return St(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new X_(s), a;
  }
  return e;
}(al);
function Ja(t) {
  ud(t);
}
function K_(t) {
  throw t;
}
var Z_ = {
  closed: !0,
  next: mu,
  error: K_,
  complete: mu
}, sl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Us(t) {
  return t;
}
function Y_(t) {
  return t.length === 0 ? Us : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var un = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = J_(e) ? e : new Ho(e, n, r);
    return as(function() {
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
    return n = gu(n), new n(function(i, a) {
      var s = new Ho({
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
  }, t.prototype[sl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Y_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = gu(e), new e(function(r, i) {
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
function gu(t) {
  var e;
  return (e = t ?? z_.Promise) !== null && e !== void 0 ? e : Promise;
}
function Q_(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function J_(t) {
  return t && t instanceof al || Q_(t) && ld(t);
}
function $_(t) {
  return St(t == null ? void 0 : t.lift);
}
function bn(t) {
  return function(e) {
    if ($_(e))
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
function wn(t, e, n, r, i) {
  return new ey(t, e, n, r, i);
}
var ey = function(t) {
  nt(e, t);
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
}(al), ty = il(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Po = function(t) {
  nt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new pu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ty();
  }, e.prototype.next = function(n) {
    var r = this;
    as(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Pt(r.currentObservers), u = s.next(); !u.done; u = s.next()) {
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
    as(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    as(function() {
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
    return a || s ? od : (this.currentObservers = null, u.push(n), new ka(function() {
      r.currentObservers = null, Is(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new un();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new pu(n, r);
  }, e;
}(un), pu = function(t) {
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : od;
  }, e;
}(Po), ny = {
  now: function() {
    return Date.now();
  }
}, ry = function(t) {
  nt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(ka), bu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Wn([t, e], Or(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, iy = function(t) {
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
    return i === void 0 && (i = 0), bu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && bu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Is(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(ry), _u = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = ny.now, t;
}(), ay = function(t) {
  nt(e, t);
  function e(n, r) {
    r === void 0 && (r = _u.now);
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
}(_u), ol = new ay(iy), sy = ol, oy = new un(function(t) {
  return t.complete();
});
function cd(t) {
  return t && St(t.schedule);
}
function dd(t) {
  return t[t.length - 1];
}
function fd(t) {
  return cd(dd(t)) ? t.pop() : void 0;
}
function ly(t, e) {
  return typeof dd(t) == "number" ? t.pop() : e;
}
var hd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function vd(t) {
  return St(t == null ? void 0 : t.then);
}
function md(t) {
  return St(t[sl]);
}
function gd(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function pd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function uy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var bd = uy();
function _d(t) {
  return St(t == null ? void 0 : t[bd]);
}
function yd(t) {
  return Fh(this, arguments, function() {
    var n, r, i, a;
    return Jo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Mi(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Mi(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Mi(i)];
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
function Id(t) {
  return St(t == null ? void 0 : t.getReader);
}
function Ur(t) {
  if (t instanceof un)
    return t;
  if (t != null) {
    if (md(t))
      return cy(t);
    if (hd(t))
      return dy(t);
    if (vd(t))
      return fy(t);
    if (gd(t))
      return Ed(t);
    if (_d(t))
      return hy(t);
    if (Id(t))
      return vy(t);
  }
  throw pd(t);
}
function cy(t) {
  return new un(function(e) {
    var n = t[sl]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function dy(t) {
  return new un(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function fy(t) {
  return new un(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, ud);
  });
}
function hy(t) {
  return new un(function(e) {
    var n, r;
    try {
      for (var i = Pt(t), a = i.next(); !a.done; a = i.next()) {
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
function Ed(t) {
  return new un(function(e) {
    my(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function vy(t) {
  return Ed(yd(t));
}
function my(t, e) {
  var n, r, i, a;
  return Sc(this, void 0, void 0, function() {
    var s, u;
    return Jo(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = kh(t), l.label = 1;
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
function ai(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Sd(t, e) {
  return e === void 0 && (e = 0), bn(function(n, r) {
    n.subscribe(wn(r, function(i) {
      return ai(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ai(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ai(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ad(t, e) {
  return e === void 0 && (e = 0), bn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function gy(t, e) {
  return Ur(t).pipe(Ad(e), Sd(e));
}
function py(t, e) {
  return Ur(t).pipe(Ad(e), Sd(e));
}
function by(t, e) {
  return new un(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function _y(t, e) {
  return new un(function(n) {
    var r;
    return ai(n, e, function() {
      r = t[bd](), ai(n, e, function() {
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
      return St(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new un(function(n) {
    ai(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ai(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function yy(t, e) {
  return Cd(yd(t), e);
}
function Iy(t, e) {
  if (t != null) {
    if (md(t))
      return gy(t, e);
    if (hd(t))
      return by(t, e);
    if (vd(t))
      return py(t, e);
    if (gd(t))
      return Cd(t, e);
    if (_d(t))
      return _y(t, e);
    if (Id(t))
      return yy(t, e);
  }
  throw pd(t);
}
function Fs(t, e) {
  return e ? Iy(t, e) : Ur(t);
}
function Ta() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = fd(t);
  return Fs(t, n);
}
function Ey(t) {
  return t instanceof Date && !isNaN(t);
}
function Nt(t, e) {
  return bn(function(n, r) {
    var i = 0;
    n.subscribe(wn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function Sy(t, e, n, r, i, a, s, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, m = function(p) {
    return c < r ? v(p) : l.push(p);
  }, v = function(p) {
    c++;
    var b = !1;
    Ur(n(p, d++)).subscribe(wn(e, function(I) {
      e.next(I);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var I = function() {
            var E = l.shift();
            s || v(E);
          }; l.length && c < r; )
            I();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(wn(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function wa(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? wa(function(r, i) {
    return Nt(function(a, s) {
      return e(r, a, i, s);
    })(Ur(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), bn(function(r, i) {
    return Sy(r, i, t, n);
  }));
}
function Ay(t) {
  return t === void 0 && (t = 1 / 0), wa(Us, t);
}
function Cy(t, e, n) {
  n === void 0 && (n = sy);
  var r = -1;
  return e != null && (cd(e) ? n = e : r = e), new un(function(i) {
    var a = Ey(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function yu(t, e) {
  return bn(function(n, r) {
    var i = 0;
    n.subscribe(wn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Es(t) {
  return bn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(wn(n, void 0, void 0, function(s) {
      a = Ur(t(s, Es(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function xd(t, e) {
  return St(e) ? wa(t, e, 1) : wa(t, 1);
}
function xy(t, e) {
  return e === void 0 && (e = ol), bn(function(n, r) {
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
    n.subscribe(wn(r, function(c) {
      a = c, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function _r(t) {
  return t <= 0 ? function() {
    return oy;
  } : bn(function(e, n) {
    var r = 0;
    e.subscribe(wn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Ty(t) {
  return Nt(function() {
    return t;
  });
}
function wy(t, e) {
  return wa(function(n, r) {
    return Ur(t(n, r)).pipe(_r(1), Ty(n));
  });
}
function Oy(t, e) {
  e === void 0 && (e = ol);
  var n = Cy(t, e);
  return wy(function() {
    return n;
  });
}
function Ly(t, e) {
  return e === void 0 && (e = Us), t = t ?? Ry, bn(function(n, r) {
    var i, a = !0;
    n.subscribe(wn(r, function(s) {
      var u = e(s);
      (a || !t(i, u)) && (a = !1, i = u, r.next(s));
    }));
  });
}
function Ry(t, e) {
  return t === e;
}
function Iu(t) {
  return bn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Dy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = fd(t), r = ly(t, 1 / 0);
  return bn(function(i, a) {
    Ay(r)(Fs(Wn([i], Or(t)), n)).subscribe(a);
  });
}
function My() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Dy.apply(void 0, Wn([], Or(t)));
}
function Eu(t, e) {
  return bn(function(n, r) {
    var i = null, a = 0, s = !1, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(wn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      Ur(t(l, d)).subscribe(i = wn(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = !0, u();
    }));
  });
}
function Ai(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? bn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var u = !0;
    i.subscribe(wn(a, function(l) {
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
  }) : Us;
}
class Hy {
  constructor(e, n, r, i, a, s, u, l, c) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = s, this._comment = u, this._archived = l, this._available = c;
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
}
function Td(t) {
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
var Py = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Td(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Ss = il(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Td(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Ny = function() {
  function t(e, n) {
    return Ss.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Ss.prototype), t;
}();
function Uy(t, e) {
  return Fr({ method: "GET", url: t, headers: e });
}
function Fy(t, e, n) {
  return Fr({ method: "POST", url: t, body: e, headers: n });
}
function ky(t, e) {
  return Fr({ method: "DELETE", url: t, headers: e });
}
function By(t, e, n) {
  return Fr({ method: "PUT", url: t, body: e, headers: n });
}
function Vy(t, e, n) {
  return Fr({ method: "PATCH", url: t, body: e, headers: n });
}
var Gy = Nt(function(t) {
  return t.response;
});
function jy(t, e) {
  return Gy(Fr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Fr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return zy(n);
  };
  return t.get = Uy, t.post = Fy, t.delete = ky, t.put = By, t.patch = Vy, t.getJSON = jy, t;
}(), qy = "upload", Su = "download", lo = "loadstart", uo = "progress", Au = "load";
function zy(t) {
  return new un(function(e) {
    var n, r, i = be({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(P, Z) {
          return c.set(Z, P);
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
    var v = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && p && b) {
      var I = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      I && (h[b] = I);
    }
    var E = Wy(s, h), A = be(be({}, i), {
      url: l,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, C = t.includeUploadProgress, x = C === void 0 ? !1 : C, N = function(P, Z) {
        _.addEventListener(P, function() {
          var te, H = Z();
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, H), e.error(H);
        });
      };
      N("timeout", function() {
        return new Ny(_, A);
      }), N("abort", function() {
        return new Ss("aborted", _, A);
      });
      var X = function(P, Z) {
        return new Py(Z, _, A, P + "_" + Z.type);
      }, k = function(P, Z, te) {
        P.addEventListener(Z, function(H) {
          e.next(X(te, H));
        });
      };
      x && [lo, uo, Au].forEach(function(P) {
        return k(_.upload, P, qy);
      }), S && [lo, uo].forEach(function(P) {
        return _.upload.addEventListener(P, function(Z) {
          var te;
          return (te = S == null ? void 0 : S.next) === null || te === void 0 ? void 0 : te.call(S, Z);
        });
      }), T && [lo, uo].forEach(function(P) {
        return k(_, P, Su);
      });
      var U = function(P) {
        var Z = "ajax error" + (P ? " " + P : "");
        e.error(new Ss(Z, _, A));
      };
      _.addEventListener("error", function(P) {
        var Z;
        (Z = S == null ? void 0 : S.error) === null || Z === void 0 || Z.call(S, P), U();
      }), _.addEventListener(Au, function(P) {
        var Z, te, H = _.status;
        if (H < 400) {
          (Z = S == null ? void 0 : S.complete) === null || Z === void 0 || Z.call(S);
          var O = void 0;
          try {
            O = X(Su, P);
          } catch (B) {
            e.error(B);
            return;
          }
          e.next(O), e.complete();
        } else
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, P), U(H);
      });
    }
    var ue = A.user, j = A.method, V = A.async;
    ue ? _.open(j, l, V, ue, A.password) : _.open(j, l, V), V && (_.timeout = A.timeout, _.responseType = A.responseType), "withCredentials" in _ && (_.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Wy(t, e) {
  var n;
  if (!t || typeof t == "string" || Jy(t) || $y(t) || Ky(t) || Zy(t) || Yy(t) || eI(t))
    return t;
  if (Qy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Xy = Object.prototype.toString;
function ll(t, e) {
  return Xy.call(t) === "[object " + e + "]";
}
function Ky(t) {
  return ll(t, "ArrayBuffer");
}
function Zy(t) {
  return ll(t, "File");
}
function Yy(t) {
  return ll(t, "Blob");
}
function Qy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Jy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function $y(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function eI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let tI = class {
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
const nI = new tI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), rI = [nI], iI = rI[0].getUrl();
let wd = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? iI;
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
}, aI = class {
  constructor(e = new wd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${sI(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Ta(n).pipe(
      Nt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      xd(
        (r) => Fr(r).pipe(
          Nt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const sr = (t) => encodeURIComponent(`${t}`), sI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${sr(e)}=${sr(r)}`).join("&") : `${sr(e)}=${sr(n)}`
).join("&"), Ci = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class oI extends aI {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ci(e, "id", "deleteAllSclFileVersions"), Ci(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/api/scl/{type}/{id}".replace("{id}", sr(e)).replace("{type}", sr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ci(e, "id", "retrieveDataResourceByVersion"), Ci(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", sr(e)).replace("{version}", sr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ci(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", sr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ci(e, "dataResourceSearch", "searchForResources");
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
class Li {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Li.instance || (Li.instance = new Li()), Li.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      yu((r) => !!r || !!r.results),
      Nt((r) => r.results),
      Nt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      yu((r) => !!r || !!r.versions),
      Nt((r) => r.versions),
      Nt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  deleteResource(e, n) {
    return this.generateApiClient(this.endpoint).deleteAllSclFileVersions({ id: n, type: e });
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return new Hy(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.filename || null,
      author: e.author || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  generateApiClient(e) {
    const n = new wd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new oI(n);
  }
}
var Sr;
class Cu {
  constructor() {
    Je(this, Sr, Ut([]));
  }
  get store() {
    return ne(this, Sr);
  }
  updateData(e) {
    ne(this, Sr).set(e);
  }
  addData(e) {
    ne(this, Sr).update((n) => [...n, e]);
  }
  removeData(e) {
    ne(this, Sr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Ic(ne(this, Sr)).find((n) => n.uuid === e);
  }
}
Sr = new WeakMap();
class lI {
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
const uI = new lI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), cI = [uI], dI = cI[0].getUrl();
class Od {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? dI;
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
class fI {
  constructor(e = new Od()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${hI(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Ta(n).pipe(
      Nt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      xd(
        (r) => Fr(r).pipe(
          Nt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const or = (t) => encodeURIComponent(`${t}`), hI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${or(e)}=${or(r)}`).join("&") : `${or(e)}=${or(n)}`
).join("&"), va = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class vI extends fI {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: s, body: u }, l) {
    va(e, "id", "archiveResource"), va(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...s != null ? { "X-filename": String(s) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", or(e)).replace("{version}", or(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    va(e, "id", "archiveSclResource"), va(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", or(e)).replace("{version}", or(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    va(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", or(e)),
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
class ma {
  constructor(e, n, r, i, a, s, u, l, c, d, h, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = s, this._type = u, this._voltage = l, this._modifiedAt = c, this._archivedAt = d, this._contentType = h, this._version = f, this._fields = m;
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
class Ri {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ma(
        Kr(),
        "Dummy name",
        "z1b2c3d4-e5f6-7890-1234-56789abcdef1",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new ma(
        Kr(),
        "Dummy name 2",
        "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return Ri.instance || (Ri.instance = new Ri()), Ri.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      _r(1),
      Nt((n) => n.resources),
      Nt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Es(() => Ta(this.dummySearchResults)),
      Oy(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      _r(1),
      Nt((n) => n.versions),
      Nt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Es(() => Ta([
        new ma(
          Kr(),
          "Dummy name",
          "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Kr() }]
        ),
        new ma(
          Kr(),
          "Dummy name",
          "3c4b2a7e-4c8b-49da-9627-5b783d85745f",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Kr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Fs(
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
    return this.generateApiClient().archiveSclResource({ id: e, version: n });
  }
  mapToArchiveSearchResult(e) {
    return new ma(
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
  formatDate(e) {
    if (!e)
      return "";
    const n = new Date(e);
    return isNaN(n.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(n);
  }
  generateApiClient() {
    const e = new Od({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new vI(e);
  }
}
vm({ en: Fm, de: xm });
var mI = /* @__PURE__ */ fe("<h3> </h3>"), gI = /* @__PURE__ */ fe("<div><!></div>"), pI = /* @__PURE__ */ fe("<!> <!>", 1), bI = /* @__PURE__ */ fe("<div><!></div>"), _I = /* @__PURE__ */ fe('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function yI(t, e) {
  xe(e, !0);
  const n = () => Pn(hm, "$_", r), [r, i] = Zn(), a = Li.getInstance(), s = Ri.getInstance();
  let u = /* @__PURE__ */ Ie(void 0);
  const l = new Po(), c = new Po(), d = c.pipe(
    My(l.pipe(xy(200))),
    Nt(() => x(o(y))),
    Ly((G, oe) => JSON.stringify(G) === JSON.stringify(oe)),
    Ai(() => {
      Y(m, !1);
    }),
    Eu((G) => a.searchFiles(G).pipe(
      Ai((oe) => {
        [...oe], h().updateData(oe);
      }),
      Iu(() => {
        Y(m, !0);
      })
    ))
  );
  let h = g(e, "dataStore", 19, () => new Cu()), f = g(e, "historyStore", 19, () => new Cu()), m = /* @__PURE__ */ Ie(!0), v = /* @__PURE__ */ Ie(!1), p = /* @__PURE__ */ Ie("");
  ot(() => {
    const G = d.subscribe();
    return c.next(), () => G.unsubscribe();
  });
  function b(G) {
    return new Date(G).toLocaleDateString();
  }
  const I = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let E = /* @__PURE__ */ _e(() => [
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
      valueFormatter: b
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    I
  ]), A = /* @__PURE__ */ _e(() => [
    ...o(E),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const _ = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (G) => k(G),
      disabled: (G) => !G.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (G) => N(G),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (G) => C(G),
      disabled: (G) => !G.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (G) => T(G),
      disabled: () => !1
    }
  ], S = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (G) => C(G),
      disabled: (G) => !G.available
    }
  ];
  let y = /* @__PURE__ */ Ie(Ce([
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
  async function T(G) {
    console.debug("deleteResource: ", G), (await su(ou, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${G.filename} (${G.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && s.archiveSclFile(G.uuid, G.version).pipe(_r(1)).subscribe({
      next: () => {
        l.next(null), ya.success("Deleted successfully", `Resource "${G.filename} (${G.uuid})" has been deleted.`);
      },
      error: (ee) => {
        console.error(`Failed to delete resource "${G.filename} (${G.uuid})":`, ee), ya.error("Deletion failed", `Failed to delete resource "${G.filename} (${G.uuid})".`);
      }
    });
  }
  function C(G) {
    console.log("Download file: ", G), a.downloadSclData(G.uuid, G.type, G.version).pipe(_r(1), Ai((oe) => {
      const ee = window.URL.createObjectURL(oe), re = document.createElement("a");
      re.href = ee, re.download = `${G.filename}.${G.type.toLowerCase()}`, re.style.display = "none", document.body.appendChild(re), re.click(), document.body.removeChild(re), window.URL.revokeObjectURL(ee);
    })).subscribe();
  }
  function x(G) {
    const oe = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return G.forEach((ee) => {
      if (ee.key in oe && ee.type !== "date" && ee.value)
        oe[ee.key] = ee.value;
      else if (ee.type === "date" && ee.value) {
        const re = new Date(ee.value);
        ee.key === "from" ? oe.from = re.toISOString() : ee.key === "to" && (re.setHours(23, 59, 59, 999), oe.to = re.toISOString());
      }
    }), o(p) && o(p).trim() !== "" && (oe.filename = o(p).trim()), oe;
  }
  function N(G) {
    Y(u, G, !0), a.getHistoryFiles(G.uuid).pipe(_r(1), Ai((oe) => {
      Y(v, !0), [...oe], f().updateData(oe);
    })).subscribe();
  }
  function X(G) {
    console.log("Dialog closed with result: ", G), Y(v, !1);
  }
  async function k(G) {
    if ((await su(ou, {
      title: "Open File",
      message: `Do you want to open "${G.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let ee = "";
    a.downloadSclData(G.uuid, G.type, G.version).pipe(
      _r(1),
      Ai((re) => {
        ee = window.URL.createObjectURL(re);
      }),
      Eu(() => Fs(fetch(ee).then((re) => {
        if (re.status === 200)
          return re.text();
        throw new Error(`Failed to load ${G.filename}: ${re.status} ${re.statusText}`);
      }))),
      _r(1),
      Es((re) => (ya.error("Open Document Failed", `Failed to open document "${G.filename}".`), console.error(re), Ta(void 0))),
      Ai((re) => {
        var K;
        if (!re)
          return;
        const F = G.filename, ae = new DOMParser().parseFromString(re, "application/xml");
        (K = window.document.getElementsByTagName("open-scd")[0]) == null || K.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: ae, docName: F }
        }));
      }),
      Iu(() => ee && window.URL.revokeObjectURL(ee))
    ).subscribe();
  }
  var U = _I(), ue = W(U), j = de(ue), V = de(j);
  Dp(V, {
    onClose: X,
    get open() {
      return o(v);
    },
    set open(re) {
      Y(v, re, !0);
    },
    title: (re) => {
      var F = mI(), ae = de(F);
      Le((K) => Ye(ae, K), [
        () => {
          var K;
          return n()("versionHistory.title", { values: { filename: (K = o(u)) == null ? void 0 : K.filename } });
        }
      ]), w(re, F);
    },
    content: (re) => {
      var F = gI(), ae = de(F);
      {
        let K = /* @__PURE__ */ _e(() => n()("search"));
        hu(ae, {
          get columnDefs() {
            return o(A);
          },
          get store() {
            return f();
          },
          get loadingDone() {
            return o(m);
          },
          get rowActions() {
            return S;
          },
          get searchInputLabel() {
            return o(K);
          }
        });
      }
      w(re, F);
    },
    actions: (re) => {
      var F = bI(), ae = de(F);
      Yc(ae, {
        callback: X,
        variant: "raised",
        children: (K, ce) => {
          var Ee = pI(), z = W(Ee);
          rl(z, {});
          var se = ge(z, 2);
          Qm(se, {
            children: (Re, Ae) => {
              var He = Et();
              Le((Ke) => Ye(He, Ke), [() => n()("done")]), w(Re, He);
            },
            $$slots: { default: !0 }
          }), w(K, Ee);
        },
        $$slots: { default: !0 }
      }), w(re, F);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var P = ge(V, 2), Z = de(P);
  R_(Z, {
    searchLabel: "Search file name...",
    onFilterChange: () => l.next(null),
    onSearchInput: () => l.next(null),
    get filters() {
      return o(y);
    },
    set filters(G) {
      Y(y, G, !0);
    },
    get searchText() {
      return o(p);
    },
    set searchText(G) {
      Y(p, G, !0);
    }
  });
  var te = ge(P, 2), H = de(te);
  {
    let G = /* @__PURE__ */ _e(() => n()("search"));
    hu(H, {
      get columnDefs() {
        return o(E);
      },
      get store() {
        return h();
      },
      get loadingDone() {
        return o(m);
      },
      get rowActions() {
        return _;
      },
      get searchInputLabel() {
        return o(G);
      }
    });
  }
  var O = ge(ue, 2);
  f_(O, {});
  var B = ge(O, 2);
  Hp(B, {}), w(t, U), Te(), i();
}
const Ld = "version-editor", Rd = "0.0.1";
var II = /* @__PURE__ */ fe('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function EI(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = II(), i = W(r);
  {
    var a = (l) => {
      yI(l, {});
    };
    ie(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = ge(i, 2), u = ge(s, 2);
  Le(() => {
    Tl(s, Ld), Tl(u, Rd);
  }), w(t, r), Te();
}
var Bi;
class LI extends HTMLElement {
  constructor() {
    super();
    Je(this, Bi);
    Me(this, Bi, /* @__PURE__ */ Ie(Ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(ne(this, Bi));
  }
  set props(n) {
    Y(ne(this, Bi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Yf(EI, { target: this.shadowRoot, props: this.props });
    const n = SI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Bi = new WeakMap();
function SI() {
  const t = `${Ld}-v${Rd}-style`, e = AI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function AI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  LI as default
};
