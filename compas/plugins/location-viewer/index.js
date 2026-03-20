var Cd = Object.defineProperty;
var rl = (t) => {
  throw TypeError(t);
};
var xd = (t, e, n) => e in t ? Cd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var yi = (t, e, n) => xd(t, typeof e != "symbol" ? e + "" : e, n), Bo = (t, e, n) => e.has(t) || rl("Cannot " + n);
var ne = (t, e, n) => (Bo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tt = (t, e, n) => e.has(t) ? rl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (Bo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (Bo(t, e, "access private method"), n);
const Nt = Symbol(), Td = "http://www.w3.org/1999/xhtml", wd = "http://www.w3.org/2000/svg", Ld = "@attach", hu = !1;
var Co = Array.isArray, Od = Array.prototype.indexOf, Ls = Array.from, io = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, vu = Object.getOwnPropertyDescriptors, Rd = Object.prototype, Md = Array.prototype, Os = Object.getPrototypeOf, il = Object.isExtensible;
function xi(t) {
  return typeof t == "function";
}
const pe = () => {
};
function Dd(t) {
  return t();
}
function ao(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function mu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, Rs = 4, xo = 8, Mr = 16, gr = 32, di = 64, Ms = 128, An = 256, oo = 512, Xt = 1024, bn = 2048, Dr = 4096, Hn = 8192, fi = 16384, To = 32768, Pr = 65536, al = 1 << 17, Pd = 1 << 18, Yi = 1 << 19, gu = 1 << 20, is = 1 << 21, wo = 1 << 22, ri = 1 << 23, zn = Symbol("$state"), pu = Symbol("legacy props"), Nd = Symbol(""), Ti = new class extends Error {
  constructor() {
    super(...arguments);
    yi(this, "name", "StaleReactionError");
    yi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ds(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Hd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ud(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function zd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Kd = !1;
function bu(t) {
  return t === this.v;
}
function Ps(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function _u(t) {
  return !Ps(t, this.v);
}
let Zi = !1, Yd = !1;
function Zd() {
  Zi = !0;
}
let lt = null;
function Fi(t) {
  lt = t;
}
function he(t) {
  return (
    /** @type {T} */
    yu().get(t)
  );
}
function ae(t, e) {
  return yu().set(t, e), e;
}
function xe(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Zi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Uu(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function La() {
  return !Zi || lt !== null && lt.l === null;
}
function yu(t) {
  return lt === null && Ds(), lt.c ?? (lt.c = new Map(Qd(lt) || void 0));
}
function Qd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Qr = [];
function Iu() {
  var t = Qr;
  Qr = [], ao(t);
}
function hr(t) {
  if (Qr.length === 0 && !pa) {
    var e = Qr;
    queueMicrotask(() => {
      e === Qr && Iu();
    });
  }
  Qr.push(t);
}
function Jd() {
  for (; Qr.length > 0; )
    Iu();
}
const $d = /* @__PURE__ */ new WeakMap();
function Eu(t) {
  var e = Ge;
  if (e === null)
    return Ve.f |= ri, t;
  if (e.f & To)
    Vi(t, e);
  else {
    if (!(e.f & Ms))
      throw !e.parent && t instanceof Error && Su(t), t;
    e.b.error(t);
  }
}
function Vi(t, e) {
  for (; e !== null; ) {
    if (e.f & Ms)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Su(t), t;
}
function Su(t) {
  const e = $d.get(t);
  e && (io(t, "message", {
    value: e.message
  }), io(t, "stack", {
    value: e.stack
  }));
}
const Ba = /* @__PURE__ */ new Set();
let ot = null, Qa = null, Ft = null, as = /* @__PURE__ */ new Set(), qn = [], Lo = null, os = !1, pa = !1;
var Pi, Ni, Jr, xa, Hi, Ui, $r, ki, Ta, wa, Cn, ss, Ja, ls;
const Eo = class Eo {
  constructor() {
    tt(this, Cn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    yi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    tt(this, Pi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    tt(this, Ni, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    tt(this, Jr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    tt(this, xa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    tt(this, Hi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    tt(this, Ui, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    tt(this, $r, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    tt(this, ki, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    tt(this, Ta, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    tt(this, wa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    yi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], Qa = null, this.apply();
    for (const o of e)
      Wt(this, Cn, ss).call(this, o);
    if (ne(this, Jr) === 0) {
      var n = Ft;
      Wt(this, Cn, ls).call(this);
      var r = ne(this, Ui), i = ne(this, $r);
      He(this, Ui, []), He(this, $r, []), He(this, ki, []), Qa = this, ot = null, Ft = n, ol(r), ol(i), Qa = null, (a = ne(this, xa)) == null || a.resolve();
    } else
      Wt(this, Cn, Ja).call(this, ne(this, Ui)), Wt(this, Cn, Ja).call(this, ne(this, $r)), Wt(this, Cn, Ja).call(this, ne(this, ki));
    Ft = null;
    for (const o of ne(this, Hi))
      Ea(o);
    He(this, Hi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ne(this, Pi).has(e) || ne(this, Pi).set(e, n), this.current.set(e, e.v), Ft == null || Ft.set(e, e.v);
  }
  activate() {
    ot = this;
  }
  deactivate() {
    ot = null, Ft = null;
  }
  flush() {
    if (qn.length > 0) {
      if (this.activate(), Au(), ot !== null && ot !== this)
        return;
    } else ne(this, Jr) === 0 && Wt(this, Cn, ls).call(this);
    this.deactivate();
    for (const e of as)
      if (as.delete(e), e(), ot !== null)
        break;
  }
  increment() {
    He(this, Jr, ne(this, Jr) + 1);
  }
  decrement() {
    He(this, Jr, ne(this, Jr) - 1);
    for (const e of ne(this, Ta))
      $t(e, bn), li(e);
    for (const e of ne(this, wa))
      $t(e, Dr), li(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Ni).add(e);
  }
  settled() {
    return (ne(this, xa) ?? He(this, xa, mu())).promise;
  }
  static ensure() {
    if (ot === null) {
      const e = ot = new Eo();
      Ba.add(ot), pa || Eo.enqueue(() => {
        ot === e && e.flush();
      });
    }
    return ot;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    hr(e);
  }
  apply() {
  }
};
Pi = new WeakMap(), Ni = new WeakMap(), Jr = new WeakMap(), xa = new WeakMap(), Hi = new WeakMap(), Ui = new WeakMap(), $r = new WeakMap(), ki = new WeakMap(), Ta = new WeakMap(), wa = new WeakMap(), Cn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ss = function(e) {
  var c;
  e.f ^= Xt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (gr | di)) !== 0, a = i && (r & Xt) !== 0, o = a || (r & Hn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Xt : r & Rs ? ne(this, $r).push(n) : r & Xt || (r & wo && ((c = n.b) != null && c.is_pending()) ? ne(this, Hi).push(n) : Mo(n) && (n.f & Mr && ne(this, ki).push(n), Ea(n)));
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
Ja = function(e) {
  for (const n of e)
    (n.f & bn ? ne(this, Ta) : ne(this, wa)).push(n), $t(n, Xt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ls = function() {
  var e;
  for (const n of ne(this, Ni))
    n();
  if (ne(this, Ni).clear(), Ba.size > 1) {
    ne(this, Pi).clear();
    let n = !0;
    for (const r of Ba) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, u] of this.current) {
        if (r.current.has(o))
          if (n && u !== r.current.get(o))
            r.current.set(o, u);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          Cu(o, a);
        if (qn.length > 0) {
          ot = r, r.apply();
          for (const o of qn)
            Wt(e = r, Cn, ss).call(e, o);
          qn = [], r.deactivate();
        }
      }
    }
    ot = null;
  }
  Ba.delete(this);
};
let fr = Eo;
function ef(t) {
  var e = pa;
  pa = !0;
  try {
    for (var n; ; ) {
      if (Jd(), qn.length === 0 && (ot == null || ot.flush(), qn.length === 0))
        return Lo = null, /** @type {T} */
        n;
      Au();
    }
  } finally {
    pa = e;
  }
}
function Au() {
  var t = Ri;
  os = !0;
  try {
    var e = 0;
    for (cl(!0); qn.length > 0; ) {
      var n = fr.ensure();
      if (e++ > 1e3) {
        var r, i;
        tf();
      }
      n.process(qn), Lr.clear();
    }
  } finally {
    os = !1, cl(t), Lo = null;
  }
}
function tf() {
  try {
    Fd();
  } catch (t) {
    Vi(t, Lo);
  }
}
let sr = null;
function ol(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (fi | Hn)) && Mo(r) && (sr = [], Ea(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Vu(r) : r.fn = null), (sr == null ? void 0 : sr.length) > 0)) {
        Lr.clear();
        for (const i of sr)
          Ea(i);
        sr = [];
      }
    }
    sr = null;
  }
}
function Cu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? Cu(
        /** @type {Derived} */
        n,
        e
      ) : r & (wo | Mr) && xu(n, e) && ($t(n, bn), li(
        /** @type {Effect} */
        n
      ));
    }
}
function xu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && xu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function li(t) {
  for (var e = Lo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (os && e === Ge && n & Mr)
      return;
    if (n & (di | gr)) {
      if (!(n & Xt)) return;
      e.f ^= Xt;
    }
  }
  qn.push(e);
}
function nf(t) {
  let e = 0, n = ui(0), r;
  return () => {
    _f() && (s(n), Ma(() => (e === 0 && (r = Un(() => t(() => ba(n)))), e += 1, () => {
      hr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ba(n));
      });
    })));
  };
}
var rf = Pr | Yi | Ms;
function af(t, e, n) {
  new of(t, e, n);
}
var Rn, En, ws, Gn, ei, jn, Sn, un, Wn, Sr, ti, Ar, ni, Cr, So, Ao, tn, sf, lf, $a, eo, us;
class of {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    tt(this, tn);
    /** @type {Boundary | null} */
    yi(this, "parent");
    tt(this, Rn, !1);
    /** @type {TemplateNode} */
    tt(this, En);
    /** @type {TemplateNode | null} */
    tt(this, ws, null);
    /** @type {BoundaryProps} */
    tt(this, Gn);
    /** @type {((anchor: Node) => void)} */
    tt(this, ei);
    /** @type {Effect} */
    tt(this, jn);
    /** @type {Effect | null} */
    tt(this, Sn, null);
    /** @type {Effect | null} */
    tt(this, un, null);
    /** @type {Effect | null} */
    tt(this, Wn, null);
    /** @type {DocumentFragment | null} */
    tt(this, Sr, null);
    tt(this, ti, 0);
    tt(this, Ar, 0);
    tt(this, ni, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    tt(this, Cr, null);
    tt(this, So, () => {
      ne(this, Cr) && Gi(ne(this, Cr), ne(this, ti));
    });
    tt(this, Ao, nf(() => (He(this, Cr, ui(ne(this, ti))), () => {
      He(this, Cr, null);
    })));
    He(this, En, e), He(this, Gn, n), He(this, ei, r), this.parent = /** @type {Effect} */
    Ge.b, He(this, Rn, !!ne(this, Gn).pending), He(this, jn, Ur(() => {
      Ge.b = this;
      {
        try {
          He(this, Sn, qt(() => r(ne(this, En))));
        } catch (i) {
          this.error(i);
        }
        ne(this, Ar) > 0 ? Wt(this, tn, eo).call(this) : He(this, Rn, !1);
      }
    }, rf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, Rn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, Gn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, tn, us).call(this, e), He(this, ti, ne(this, ti) + e), as.add(ne(this, So));
  }
  get_effect_pending() {
    return ne(this, Ao).call(this), s(
      /** @type {Source<number>} */
      ne(this, Cr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ne(this, Gn).onerror;
    let r = ne(this, Gn).failed;
    if (ne(this, ni) || !n && !r)
      throw e;
    ne(this, Sn) && (Vt(ne(this, Sn)), He(this, Sn, null)), ne(this, un) && (Vt(ne(this, un)), He(this, un, null)), ne(this, Wn) && (Vt(ne(this, Wn)), He(this, Wn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Xd();
        return;
      }
      i = !0, a && qd(), fr.ensure(), He(this, ti, 0), ne(this, Wn) !== null && Or(ne(this, Wn), () => {
        He(this, Wn, null);
      }), He(this, Rn, this.has_pending_snippet()), He(this, Sn, Wt(this, tn, $a).call(this, () => (He(this, ni, !1), qt(() => ne(this, ei).call(this, ne(this, En)))))), ne(this, Ar) > 0 ? Wt(this, tn, eo).call(this) : He(this, Rn, !1);
    };
    var u = Ve;
    try {
      cn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Vi(l, ne(this, jn) && ne(this, jn).parent);
    } finally {
      cn(u);
    }
    r && hr(() => {
      He(this, Wn, Wt(this, tn, $a).call(this, () => {
        He(this, ni, !0);
        try {
          return qt(() => {
            r(
              ne(this, En),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Vi(
            l,
            /** @type {Effect} */
            ne(this, jn).parent
          ), null;
        } finally {
          He(this, ni, !1);
        }
      }));
    });
  }
}
Rn = new WeakMap(), En = new WeakMap(), ws = new WeakMap(), Gn = new WeakMap(), ei = new WeakMap(), jn = new WeakMap(), Sn = new WeakMap(), un = new WeakMap(), Wn = new WeakMap(), Sr = new WeakMap(), ti = new WeakMap(), Ar = new WeakMap(), ni = new WeakMap(), Cr = new WeakMap(), So = new WeakMap(), Ao = new WeakMap(), tn = new WeakSet(), sf = function() {
  try {
    He(this, Sn, qt(() => ne(this, ei).call(this, ne(this, En))));
  } catch (e) {
    this.error(e);
  }
  He(this, Rn, !1);
}, lf = function() {
  const e = ne(this, Gn).pending;
  e && (He(this, un, qt(() => e(ne(this, En)))), fr.enqueue(() => {
    He(this, Sn, Wt(this, tn, $a).call(this, () => (fr.ensure(), qt(() => ne(this, ei).call(this, ne(this, En)))))), ne(this, Ar) > 0 ? Wt(this, tn, eo).call(this) : (Or(
      /** @type {Effect} */
      ne(this, un),
      () => {
        He(this, un, null);
      }
    ), He(this, Rn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
$a = function(e) {
  var n = Ge, r = Ve, i = lt;
  Yn(ne(this, jn)), cn(ne(this, jn)), Fi(ne(this, jn).ctx);
  try {
    return e();
  } catch (a) {
    return Eu(a), null;
  } finally {
    Yn(n), cn(r), Fi(i);
  }
}, eo = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, Gn).pending
  );
  ne(this, Sn) !== null && (He(this, Sr, document.createDocumentFragment()), uf(ne(this, Sn), ne(this, Sr))), ne(this, un) === null && He(this, un, qt(() => e(ne(this, En))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
us = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, tn, us).call(n, e);
    return;
  }
  He(this, Ar, ne(this, Ar) + e), ne(this, Ar) === 0 && (He(this, Rn, !1), ne(this, un) && Or(ne(this, un), () => {
    He(this, un, null);
  }), ne(this, Sr) && (ne(this, En).before(ne(this, Sr)), He(this, Sr, null)), hr(() => {
    fr.ensure().flush();
  }));
};
function uf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ra(n)
    );
    e.append(n), n = i;
  }
}
function Tu(t, e, n) {
  const r = La() ? Oa : Ns;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ot, a = (
    /** @type {Effect} */
    Ge
  ), o = cf();
  Promise.all(e.map((u) => /* @__PURE__ */ df(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & fi || Vi(l, a);
    }
    i == null || i.deactivate(), cs();
  }).catch((u) => {
    Vi(u, a);
  });
}
function cf() {
  var t = Ge, e = Ve, n = lt, r = ot;
  return function() {
    Yn(t), cn(e), Fi(n), r == null || r.activate();
  };
}
function cs() {
  Yn(null), cn(null), Fi(null);
}
// @__NO_SIDE_EFFECTS__
function Oa(t) {
  var e = nn | bn, n = Ve !== null && Ve.f & nn ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return Ge === null || n !== null && n.f & An ? e |= An : Ge.f |= Yi, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: bu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Nt
    ),
    wv: 0,
    parent: n ?? Ge,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function df(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ge
  );
  n === null && Hd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ui(
    /** @type {V} */
    Nt
  ), o = !Ve, u = /* @__PURE__ */ new Map();
  return If(() => {
    var f;
    var l = mu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(cs);
    } catch (m) {
      l.reject(m), cs();
    }
    var c = (
      /** @type {Batch} */
      ot
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ti), u.delete(c), u.set(c, l)));
    const v = (m, h = void 0) => {
      if (d || c.activate(), h)
        h !== Ti && (a.f |= ri, Gi(a, h));
      else {
        a.f & ri && (a.f ^= ri), Gi(a, m);
        for (const [g, b] of u) {
          if (u.delete(g), g === c) break;
          b.reject(Ti);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), Oo(() => {
    for (const l of u.values())
      l.reject(Ti);
  }), new Promise((l) => {
    function c(d) {
      function v() {
        d === i ? l(a) : c(i);
      }
      d.then(v, v);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function fe(t) {
  const e = /* @__PURE__ */ Oa(t);
  return Wu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ns(t) {
  const e = /* @__PURE__ */ Oa(t);
  return e.equals = _u, e;
}
function wu(t) {
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
function ff(t) {
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
function Hs(t) {
  var e, n = Ge;
  Yn(ff(t));
  try {
    wu(t), e = Ku(t);
  } finally {
    Yn(n);
  }
  return e;
}
function Lu(t) {
  var e = Hs(t);
  if (t.equals(e) || (t.v = e, t.wv = zu()), !hi)
    if (Ft !== null)
      Ft.set(t, t.v);
    else {
      var n = (xr || t.f & An) && t.deps !== null ? Dr : Xt;
      $t(t, n);
    }
}
const Lr = /* @__PURE__ */ new Map();
function ui(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: bu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = ui(t);
  return Wu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ou(t, e = !1, n = !0) {
  var i;
  const r = ui(t);
  return e || (r.equals = _u), Zi && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function K(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Dn || Ve.f & al) && La() && Ve.f & (nn | Mr | wo | al) && !(Jt != null && Jt.includes(t)) && Wd();
  let r = n ? ue(e) : e;
  return Gi(t, r);
}
function Gi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    hi ? Lr.set(t, e) : Lr.set(t, n), t.v = e;
    var r = fr.ensure();
    r.capture(t, n), t.f & nn && (t.f & bn && Hs(
      /** @type {Derived} */
      t
    ), $t(t, t.f & An ? Dr : Xt)), t.wv = zu(), Ru(t, bn), La() && Ge !== null && Ge.f & Xt && !(Ge.f & (gr | di)) && (In === null ? Af([t]) : In.push(t));
  }
  return e;
}
function ba(t) {
  K(t, t.v + 1);
}
function Ru(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = La(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ge)) {
        var l = (u & bn) === 0;
        l && $t(o, e), u & nn ? Ru(
          /** @type {Derived} */
          o,
          Dr
        ) : l && (u & Mr && sr !== null && sr.push(
          /** @type {Effect} */
          o
        ), li(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ue(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Os(t);
  if (e !== Rd && e !== Md)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Co(t), i = /* @__PURE__ */ ve(0), a = ii, o = (u) => {
    if (ii === a)
      return u();
    var l = Ve, c = ii;
    cn(null), fl(a);
    var d = u();
    return cn(l), fl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Gd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var v = /* @__PURE__ */ ve(c.value);
          return n.set(l, v), v;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ve(Nt));
            n.set(l, d), ba(i);
          }
        } else
          K(c, Nt), ba(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === zn)
          return t;
        var d = n.get(l), v = l in u;
        if (d === void 0 && (!v || (m = wr(u, l)) != null && m.writable) && (d = o(() => {
          var h = ue(v ? u[l] : Nt), g = /* @__PURE__ */ ve(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Nt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var v = n.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== Nt)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Nt || Reflect.has(u, l);
        if (c !== void 0 || Ge !== null && (!d || (f = wr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var m = d ? ue(u[l]) : Nt, h = /* @__PURE__ */ ve(m);
            return h;
          }), n.set(l, c));
          var v = s(c);
          if (v === Nt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var I;
        var v = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? K(h, Nt) : m in u && (h = o(() => /* @__PURE__ */ ve(Nt)), n.set(m + "", h));
          }
        if (v === void 0)
          (!f || (I = wr(u, l)) != null && I.writable) && (v = o(() => /* @__PURE__ */ ve(void 0)), K(v, ue(c)), n.set(l, v));
        else {
          f = v.v !== Nt;
          var g = o(() => ue(c));
          K(v, g);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= y.v && K(y, S + 1);
          }
          ba(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = n.get(v);
          return f === void 0 || f.v !== Nt;
        });
        for (var [c, d] of n)
          d.v !== Nt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        jd();
      }
    }
  );
}
function sl(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function hf(t, e) {
  return Object.is(sl(t), sl(e));
}
var ll, Mu, Du, Pu, Nu;
function vf() {
  if (ll === void 0) {
    ll = window, Mu = document, Du = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Pu = wr(e, "firstChild").get, Nu = wr(e, "nextSibling").get, il(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), il(n) && (n.__t = void 0);
  }
}
function Nr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ji(t) {
  return Pu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ra(t) {
  return Nu.call(t);
}
function me(t, e) {
  return /* @__PURE__ */ ji(t);
}
function Q(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ji(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ra(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ra(r);
  return r;
}
function mf(t) {
  t.textContent = "";
}
function Us() {
  return !1;
}
function gf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, hr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let ul = !1;
function pf() {
  ul || (ul = !0, document.addEventListener(
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
function Qi(t) {
  var e = Ve, n = Ge;
  cn(null), Yn(null);
  try {
    return t();
  } finally {
    cn(e), Yn(n);
  }
}
function ks(t, e, n, r = n) {
  t.addEventListener(e, () => Qi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), pf();
}
function Hu(t) {
  Ge === null && Ve === null && Bd(), Ve !== null && Ve.f & An && Ge === null && kd(), hi && Ud();
}
function bf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Qn(t, e, n, r = !0) {
  var i = Ge;
  i !== null && i.f & Hn && (t |= Hn);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | bn,
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
      Ea(a), a.f |= To;
    } catch (l) {
      throw Vt(a), l;
    }
  else e !== null && li(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Yi) && (o = o.first), o !== null && (o.parent = i, i !== null && bf(o, i), Ve !== null && Ve.f & nn && !(t & di))) {
      var u = (
        /** @type {Derived} */
        Ve
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function _f() {
  return Ve !== null && !Dn;
}
function Oo(t) {
  const e = Qn(xo, null, !1);
  return $t(e, Xt), e.teardown = t, e;
}
function Ce(t) {
  Hu();
  var e = (
    /** @type {Effect} */
    Ge.f
  ), n = !Ve && (e & gr) !== 0 && (e & To) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Uu(t);
}
function Uu(t) {
  return Qn(Rs | gu, t, !1);
}
function ku(t) {
  return Hu(), Qn(xo | gu, t, !0);
}
function yf(t) {
  fr.ensure();
  const e = Qn(di | Yi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Or(e, () => {
      Vt(e), r(void 0);
    }) : (Vt(e), r(void 0));
  });
}
function Hr(t) {
  return Qn(Rs, t, !1);
}
function If(t) {
  return Qn(wo | Yi, t, !0);
}
function Ma(t, e = 0) {
  return Qn(xo | e, t, !0);
}
function Re(t, e = [], n = []) {
  Tu(e, n, (r) => {
    Qn(xo, () => t(...r.map(s)), !0);
  });
}
function Ur(t, e = 0) {
  var n = Qn(Mr | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return Qn(gr | Yi, t, !0, e);
}
function Bu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = hi, r = Ve;
    dl(!0), cn(null);
    try {
      e.call(null);
    } finally {
      dl(n), cn(r);
    }
  }
}
function Fu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Qi(() => {
      i.abort(Ti);
    });
    var r = n.next;
    n.f & di ? n.parent = null : Vt(n, e), n = r;
  }
}
function Ef(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & gr || Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || t.f & Pd) && t.nodes_start !== null && t.nodes_end !== null && (Sf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Fu(t, e && !n), so(t, 0), $t(t, fi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Bu(t);
  var i = t.parent;
  i !== null && i.first !== null && Vu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Sf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ra(t)
    );
    t.remove(), t = n;
  }
}
function Vu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Or(t, e) {
  var n = [];
  Bs(t, n, !0), Gu(n, () => {
    Vt(t), e && e();
  });
}
function Gu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Bs(t, e, n) {
  if (!(t.f & Hn)) {
    if (t.f ^= Hn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Pr) !== 0 || (r.f & gr) !== 0;
      Bs(r, e, a ? n : !1), r = i;
    }
  }
}
function Ro(t) {
  ju(t, !0);
}
function ju(t, e) {
  if (t.f & Hn) {
    t.f ^= Hn, t.f & Xt || ($t(t, bn), li(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Pr) !== 0 || (n.f & gr) !== 0;
      ju(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ri = !1;
function cl(t) {
  Ri = t;
}
let hi = !1;
function dl(t) {
  hi = t;
}
let Ve = null, Dn = !1;
function cn(t) {
  Ve = t;
}
let Ge = null;
function Yn(t) {
  Ge = t;
}
let Jt = null;
function Wu(t) {
  Ve !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Zt = null, gn = 0, In = null;
function Af(t) {
  In = t;
}
let qu = 1, Ia = 0, ii = Ia;
function fl(t) {
  ii = t;
}
let xr = !1;
function zu() {
  return ++qu;
}
function Mo(t) {
  var v;
  var e = t.f;
  if (e & bn)
    return !0;
  if (e & Dr) {
    var n = t.deps, r = (e & An) !== 0;
    if (n !== null) {
      var i, a, o = (e & oo) !== 0, u = r && Ge !== null && !xr, l = n.length;
      if ((o || u) && (Ge === null || !(Ge.f & fi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= oo), u && d !== null && !(d.f & An) && (c.f ^= An);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Mo(
          /** @type {Derived} */
          a
        ) && Lu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ge !== null && !xr) && $t(t, Xt);
  }
  return !1;
}
function Xu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt != null && Jt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? Xu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, bn) : a.f & Xt && $t(a, Dr), li(
        /** @type {Effect} */
        a
      ));
    }
}
function Ku(t) {
  var g;
  var e = Zt, n = gn, r = In, i = Ve, a = xr, o = Jt, u = lt, l = Dn, c = ii, d = t.f;
  Zt = /** @type {null | Value[]} */
  null, gn = 0, In = null, xr = (d & An) !== 0 && (Dn || !Ri || Ve === null), Ve = d & (gr | di) ? null : t, Jt = null, Fi(t.ctx), Dn = !1, ii = ++Ia, t.ac !== null && (Qi(() => {
    t.ac.abort(Ti);
  }), t.ac = null);
  try {
    t.f |= is;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (Zt !== null) {
      var h;
      if (so(t, gn), m !== null && gn > 0)
        for (m.length = gn + Zt.length, h = 0; h < Zt.length; h++)
          m[gn + h] = Zt[h];
      else
        t.deps = m = Zt;
      if (!xr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = gn; h < m.length; h++)
          ((g = m[h]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && gn < m.length && (so(t, gn), m.length = gn);
    if (La() && In !== null && !Dn && m !== null && !(t.f & (nn | Dr | bn)))
      for (h = 0; h < /** @type {Source[]} */
      In.length; h++)
        Xu(
          In[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ia++, In !== null && (r === null ? r = In : r.push(.../** @type {Source[]} */
    In))), t.f & ri && (t.f ^= ri), f;
  } catch (b) {
    return Eu(b);
  } finally {
    t.f ^= is, Zt = e, gn = n, In = r, Ve = i, xr = a, Jt = o, Fi(u), Dn = l, ii = c;
  }
}
function Cf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Od.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & nn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Zt === null || !Zt.includes(e)) && ($t(e, Dr), e.f & (An | oo) || (e.f ^= oo), wu(
    /** @type {Derived} **/
    e
  ), so(
    /** @type {Derived} **/
    e,
    0
  ));
}
function so(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Cf(t, n[r]);
}
function Ea(t) {
  var e = t.f;
  if (!(e & fi)) {
    $t(t, Xt);
    var n = Ge, r = Ri;
    Ge = t, Ri = !0;
    try {
      e & Mr ? Ef(t) : Fu(t), Bu(t);
      var i = Ku(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = qu;
      var a;
      hu && Yd && t.f & bn && t.deps;
    } finally {
      Ri = r, Ge = n;
    }
  }
}
async function Yu() {
  await Promise.resolve(), ef();
}
function s(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Ve !== null && !Dn) {
    var r = Ge !== null && (Ge.f & fi) !== 0;
    if (!r && !(Jt != null && Jt.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & is)
        t.rv < Ia && (t.rv = Ia, Zt === null && i !== null && i[gn] === t ? gn++ : Zt === null ? Zt = [t] : (!xr || !Zt.includes(t)) && Zt.push(t));
      else {
        (Ve.deps ?? (Ve.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ve] : a.includes(Ve) || a.push(Ve);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & An) && (o.f ^= An);
  }
  if (hi) {
    if (Lr.has(t))
      return Lr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Xt) && o.reactions !== null || Zu(o)) && (l = Hs(o)), Lr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ft != null && Ft.has(o))
      return Ft.get(o);
    Mo(o) && Lu(o);
  }
  if (Ft != null && Ft.has(t))
    return Ft.get(t);
  if (t.f & ri)
    throw t.v;
  return t.v;
}
function Zu(t) {
  if (t.v === Nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Lr.has(e) || e.f & nn && Zu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Un(t) {
  var e = Dn;
  try {
    return Dn = !0, t();
  } finally {
    Dn = e;
  }
}
const xf = -7169;
function $t(t, e) {
  t.f = t.f & xf | e;
}
function Qu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (zn in t)
      ds(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && ds(n);
      }
  }
}
function ds(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ds(t[r], e);
      } catch {
      }
    const n = Os(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = vu(n);
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
const Ju = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set();
function Fs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ma.call(e, a), !a.cancelBubble)
      return Qi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? hr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Tf(t, e, n, r = {}) {
  var i = Fs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function va(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Fs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Oo(() => {
    e.removeEventListener(t, o, a);
  });
}
function dn(t) {
  for (var e = 0; e < t.length; e++)
    Ju.add(t[e]);
  for (var n of fs)
    n(t);
}
let hl = null;
function ma(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  hl = t;
  var o = 0, u = hl === t && t.__root;
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
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    io(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ve, v = Ge;
    cn(null), Yn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Co(g)) {
              var [b, ...y] = g;
              b.apply(a, [t, ...y]);
            } else
              g.call(a, t);
        } catch (I) {
          f ? m.push(I) : f = I;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let I of m)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, cn(d), Yn(v);
    }
  }
}
function $u(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Wi(t, e) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function be(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = $u(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ ji(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Du ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ji(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Wi(u, l);
    } else
      Wi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function wf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        $u(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ ji(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ji(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Wi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function fn(t, e) {
  return /* @__PURE__ */ wf(t, e, "svg");
}
function Rt(t = "") {
  {
    var e = Nr(t + "");
    return Wi(e, e), e;
  }
}
function re() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Nr();
  return t.append(e, n), Wi(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Lf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Of = [
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
function Rf(t) {
  return Of.includes(t);
}
const Mf = {
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
function Df(t) {
  return t = t.toLowerCase(), Mf[t] ?? t;
}
const Pf = ["touchstart", "touchmove"];
function Nf(t) {
  return Pf.includes(t);
}
let lo = !0;
function vl(t) {
  lo = t;
}
function st(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Hf(t, e) {
  return Uf(t, e);
}
const Ii = /* @__PURE__ */ new Map();
function Uf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  vf();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!u.has(m)) {
        u.add(m);
        var h = Nf(m);
        e.addEventListener(m, ma, { passive: h });
        var g = Ii.get(m);
        g === void 0 ? (document.addEventListener(m, ma, { passive: h }), Ii.set(m, 1)) : Ii.set(m, g + 1);
      }
    }
  };
  l(Ls(Ju)), fs.add(l);
  var c = void 0, d = yf(() => {
    var v = n ?? e.appendChild(Nr());
    return af(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            lt
          );
          m.c = a;
        }
        i && (r.$$events = i), lo = o, c = t(f, r) || {}, lo = !0, a && Te();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, ma);
        var m = (
          /** @type {number} */
          Ii.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ma), Ii.delete(f)) : Ii.set(f, m);
      }
      fs.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return kf.set(c, d), c;
}
let kf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = pe, a;
  Ur(() => {
    i !== (i = e()) && (a && (Vt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Pr);
}
function it(t) {
  lt === null && Ds(), Zi && lt.l !== null ? Bf(lt).m.push(t) : Ce(() => {
    const e = Un(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Tn(t) {
  lt === null && Ds(), it(() => () => Un(t));
}
function Bf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = Nt, u = n ? Pr : 0, l = !1;
  const c = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, h = o ? a : i;
    m && Ro(m), h && Or(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (o !== (o = m)) {
      var g = Us(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = Nr())), o ? i ?? (i = h && qt(() => h(b))) : a ?? (a = h && qt(() => h(b))), g) {
        var y = (
          /** @type {Batch} */
          ot
        ), S = o ? i : a, I = o ? a : i;
        S && y.skipped_effects.delete(S), I && y.skipped_effects.add(I), y.add_callback(v);
      } else
        v();
    }
  };
  Ur(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let ai = null;
function ml(t) {
  ai = t;
}
function wi(t, e) {
  return e;
}
function Ff(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Bs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    mf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Vn(t, e[0].prev, e[a - 1].next);
  }
  Gu(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Vn(t, d.prev, d.next)), Vt(d.e, !u);
    }
  });
}
function Pn(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Nr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Ns(() => {
    var y = n();
    return Co(y) ? y : y == null ? [] : Ls(y);
  }), h, g;
  function b() {
    Vf(
      g,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Ro(d) : d = qt(() => a(o)) : d !== null && Or(d, () => {
      d = null;
    }));
  }
  Ur(() => {
    g ?? (g = /** @type {Effect} */
    Ge), h = /** @type {V[]} */
    s(m);
    var y = h.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var S, I, _, E;
      if (Us()) {
        var x = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          ot
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], E = r(_, I);
          var C = u.items.get(E) ?? f.get(E);
          C ? e & 3 && ec(C, _, I, e) : (S = tc(
            null,
            u,
            null,
            null,
            _,
            E,
            I,
            i,
            e,
            n,
            !0
          ), f.set(E, S)), x.add(E);
        }
        for (const [A, M] of u.items)
          x.has(A) || w.skipped_effects.add(M.e);
        w.add_callback(b);
      } else
        b();
      s(m);
    }
  });
}
function Vf(t, e, n, r, i, a, o, u, l) {
  var J, P, R, W;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, g, b = null, y, S = [], I = [], _, E, x, w;
  if (c)
    for (w = 0; w < v; w += 1)
      _ = e[w], E = u(_, w), x = f.get(E), x !== void 0 && ((J = x.a) == null || J.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(x));
  for (w = 0; w < v; w += 1) {
    if (_ = e[w], E = u(_, w), x = f.get(E), x === void 0) {
      var C = r.get(E);
      if (C !== void 0) {
        r.delete(E), f.set(E, C);
        var A = b ? b.next : h;
        Vn(n, b, C), Vn(n, C, A), Fo(C, A, i), b = C;
      } else {
        var M = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = tc(
          M,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          w,
          a,
          o,
          l
        );
      }
      f.set(E, b), S = [], I = [], h = b.next;
      continue;
    }
    if (d && ec(x, _, w, o), x.e.f & Hn && (Ro(x.e), c && ((P = x.a) == null || P.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(x))), x !== h) {
      if (g !== void 0 && g.has(x)) {
        if (S.length < I.length) {
          var G = I[0], k;
          b = G.prev;
          var j = S[0], O = S[S.length - 1];
          for (k = 0; k < S.length; k += 1)
            Fo(S[k], G, i);
          for (k = 0; k < I.length; k += 1)
            g.delete(I[k]);
          Vn(n, j.prev, O.next), Vn(n, b, j), Vn(n, O, G), h = G, b = O, w -= 1, S = [], I = [];
        } else
          g.delete(x), Fo(x, h, i), Vn(n, x.prev, x.next), Vn(n, x, b === null ? n.first : b.next), Vn(n, b, x), b = x;
        continue;
      }
      for (S = [], I = []; h !== null && h.k !== E; )
        h.e.f & Hn || (g ?? (g = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    S.push(x), b = x, h = x.next;
  }
  if (h !== null || g !== void 0) {
    for (var T = g === void 0 ? [] : Ls(g); h !== null; )
      h.e.f & Hn || T.push(h), h = h.next;
    var H = T.length;
    if (H > 0) {
      var U = o & 4 && v === 0 ? i : null;
      if (c) {
        for (w = 0; w < H; w += 1)
          (R = T[w].a) == null || R.measure();
        for (w = 0; w < H; w += 1)
          (W = T[w].a) == null || W.fix();
      }
      Ff(n, T, U);
    }
  }
  c && hr(() => {
    var Ae;
    if (y !== void 0)
      for (x of y)
        (Ae = x.a) == null || Ae.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var z of r.values())
    Vt(z.e);
  r.clear();
}
function ec(t, e, n, r) {
  r & 1 && Gi(t.v, e), r & 2 ? Gi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function tc(t, e, n, r, i, a, o, u, l, c, d) {
  var v = ai, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ Ou(i, !1, !1) : ui(i) : i, g = l & 2 ? ui(o) : o, b = {
    i: g,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ai = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Nr());
    }
    return b.e = qt(() => u(
      /** @type {Node} */
      t,
      h,
      g,
      c
    ), Kd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ai = v;
  }
}
function Fo(t, e, n) {
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
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ra(a)
    );
    i.before(a), a = o;
  }
}
function Vn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function pr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Or(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Ur(() => {
    if (i !== (i = e())) {
      var c = Us();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Nr()), a && ot.skipped_effects.add(a)), u = qt(() => n(d, i));
      }
      c ? ot.add_callback(l) : l();
    }
  }, Pr);
}
function gl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, v = ai;
  Ur(() => {
    const f = e() || null;
    var m = f === "svg" ? wd : null;
    if (f !== o) {
      var h = ai;
      ml(v), d && (f === null ? Or(d, () => {
        d = null, u = null;
      }) : f === u ? Ro(d) : (Vt(d), vl(!1))), f && f !== u && (d = qt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Wi(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(Nr())
          );
          r(l, g);
        }
        Ge.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), vl(!0), ml(h);
    }
  }, Pr);
}
function De(t, e, n) {
  Hr(() => {
    var r = Un(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ma(() => {
        var o = n();
        Qu(o), i && Ps(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Gf(t, e) {
  var n = void 0, r;
  Ur(() => {
    n !== (n = e()) && (r && (Vt(r), r = null), n && (r = qt(() => {
      Hr(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function nc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = nc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function jf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = nc(t)) && (r && (r += " "), r += e);
  return r;
}
function rc(t) {
  return typeof t == "object" ? jf(t) : t ?? "";
}
const pl = [...` 	
\r\f \v\uFEFF`];
function Wf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || pl.includes(r[o - 1])) && (u === r.length || pl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function bl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Vo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function qf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Vo)), i && l.push(...Object.keys(i).map(Vo));
      var c = 0, d = -1;
      const g = t.length;
      for (var v = 0; v < g; v++) {
        var f = t[v];
        if (u ? f === "/" && t[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === g - 1) {
            if (d !== -1) {
              var m = Vo(t.substring(c, d).trim());
              if (!l.includes(m)) {
                f !== ";" && v++;
                var h = t.substring(c, v).trim();
                n += " " + h + ";";
              }
            }
            c = v + 1, d = -1;
          }
        }
      }
    }
    return r && (n += bl(r)), i && (n += bl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Vs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = Wf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Go(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Gt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = qf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Go(t, n == null ? void 0 : n[0], r[0]), Go(t, n == null ? void 0 : n[1], r[1], "important")) : Go(t, n, r));
  return r;
}
function uo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Co(e))
      return zd();
    for (var r of t.options)
      r.selected = e.includes(_a(r));
    return;
  }
  for (r of t.options) {
    var i = _a(r);
    if (hf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ic(t) {
  var e = new MutationObserver(() => {
    uo(t, t.__value);
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
  }), Oo(() => {
    e.disconnect();
  });
}
function zf(t, e, n = e) {
  var r = !0;
  ks(t, "change", (i) => {
    var a = i ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(a), _a);
    else {
      var u = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = u && _a(u);
    }
    n(o);
  }), Hr(() => {
    var i = e();
    if (uo(t, i, r), r && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = _a(a), n(i));
    }
    t.__value = i, r = !1;
  }), ic(t);
}
function _a(t) {
  return "__value" in t ? t.__value : t.value;
}
const oa = Symbol("class"), sa = Symbol("style"), ac = Symbol("is custom element"), oc = Symbol("is html");
function _l(t, e) {
  var n = Gs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Xf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Rr(t, e, n, r) {
  var i = Gs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Nd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && sc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Kf(t, e, n, r, i = !1, a = !1) {
  var o = Gs(t), u = o[ac], l = !o[oc], c = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = rc(n.class) : n[oa] && (n.class = null), n[sa] && (n.style ?? (n.style = null));
  var f = sc(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vs(t, m, _, r, e == null ? void 0 : e[oa], n[oa]), c[I] = _, c[oa] = n[oa];
      continue;
    }
    if (I === "style") {
      Gt(t, _, e == null ? void 0 : e[sa], n[sa]), c[I] = _, c[sa] = n[sa];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var g = I[0] + I[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, x = "$$" + I;
          let w = I.slice(2);
          var b = Rf(w);
          if (Lf(w) && (w = w.slice(0, -7), E.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(w, c[x], E), c[x] = null;
          }
          if (_ != null)
            if (b)
              t[`__${w}`] = _, dn([w]);
            else {
              let C = function(A) {
                c[I].call(this, A);
              };
              c[x] = Fs(w, t, C, E);
            }
          else b && (t[`__${w}`] = void 0);
        } else if (I === "style")
          Rr(t, I, _);
        else if (I === "autofocus")
          gf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          Xf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = Df(y));
          var S = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !S)
            if (o[I] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (y === "value") {
                let w = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = w, E.value = E.__value = x ? w : null;
              } else {
                let w = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = w, E.checked = x ? w : !1;
              }
            } else
              t.removeAttribute(I);
          else S || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Nt)) : typeof _ != "function" && Rr(t, y, _);
        }
    }
  }
  return c;
}
function Ue(t, e, n = [], r = [], i, a = !1, o = !1) {
  Tu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", v = !1;
    if (Ur(() => {
      var m = e(...u.map(s)), h = Kf(
        t,
        l,
        m,
        i,
        a,
        o
      );
      v && d && "value" in m && uo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Vt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === Ld && (!l || g !== l[b]) && (c[b] && Vt(c[b]), c[b] = qt(() => Gf(t, () => g))), h[b] = g;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Hr(() => {
        uo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ic(f);
      });
    }
    v = !0;
  });
}
function Gs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [ac]: t.nodeName.includes("-"),
      [oc]: t.namespaceURI === Td
    })
  );
}
var yl = /* @__PURE__ */ new Map();
function sc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = yl.get(e);
  if (n) return n;
  yl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = vu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Os(i);
  }
  return n;
}
const Yf = () => performance.now(), cr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Yf(),
  tasks: /* @__PURE__ */ new Set()
};
function lc() {
  const t = cr.now();
  cr.tasks.forEach((e) => {
    e.c(t) || (cr.tasks.delete(e), e.f());
  }), cr.tasks.size !== 0 && cr.tick(lc);
}
function Zf(t) {
  let e;
  return cr.tasks.size === 0 && cr.tick(lc), {
    promise: new Promise((n) => {
      cr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      cr.tasks.delete(e);
    }
  };
}
function Fa(t, e) {
  Qi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Qf(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Il(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = Qf(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const Jf = (t) => t;
function $f(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ai
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = fo(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = c, v.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${m}` : m;
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
function co(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return Qi(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: u,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), Fa(e, "introstart"), f = fo(e, h(), m, 1, () => {
        Fa(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = v;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, Fa(e, "outrostart"), m = fo(e, h(), f, 0, () => {
        Fa(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ge
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && lo) {
    var y = u;
    if (!y) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Pr; )
        for (; (S = S.parent) && !(S.f & Mr); )
          ;
      y = !S || (S.f & To) !== 0;
    }
    y && Hr(() => {
      Un(() => g.in());
    });
  }
}
function fo(t, e, n, r, i) {
  var a = r === 1;
  if (xi(e)) {
    var o, u = !1;
    return hr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = fo(t, b, n, r, i);
      }
    }), {
      abort: () => {
        u = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: v = Jf } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = Il(c(0, 1));
    f.push(m, m);
  }
  var h = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, S = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (S > 0) {
      var _ = !1;
      if (c)
        for (var E = Math.ceil(S / 16.666666666666668), x = 0; x <= E; x += 1) {
          var w = b + y * v(x / E), C = Il(c(w, 1 - w));
          I.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + y * v(A / S);
      }, d && Zf(() => {
        if (g.playState !== "running") return !1;
        var A = h();
        return d(A, 1 - A), !0;
      });
    }
    g = t.animate(I, { duration: S, fill: "forwards" }), g.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = pe);
    },
    deactivate: () => {
      i = pe;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function Sa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  ks(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = jo(t) ? Wo(a) : a, n(a), ot !== null && r.add(ot), await Yu(), a !== (a = e())) {
      var o = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        o === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Un(e) == null && t.value && (n(jo(t) ? Wo(t.value) : t.value), ot !== null && r.add(ot)), Ma(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qa ?? ot
      );
      if (r.has(a))
        return;
    }
    jo(t) && i === Wo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function eh(t, e, n = e) {
  ks(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Un(e) == null && n(t.checked), Ma(() => {
    var r = e();
    t.checked = !!r;
  });
}
function jo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Wo(t) {
  return t === "" ? null : +t;
}
function El(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function Ee(t = {}, e, n, r) {
  return Hr(() => {
    var i, a;
    return Ma(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Un(() => {
        t !== n(...a) && (e(t, ...a), i && El(n(...i), t) && e(null, ...i));
      });
    }), () => {
      hr(() => {
        a && El(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function th(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Qu(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Oa(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && ku(() => {
    Sl(e, r), ao(n.b);
  }), Ce(() => {
    const i = Un(() => n.m.map(Dd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Ce(() => {
    Sl(e, r), ao(n.a);
  });
}
function Sl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function js(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Un(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ei = [];
function nh(t, e) {
  return {
    subscribe: en(t, e).subscribe
  };
}
function en(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Ps(t, u) && (t = u, n)) {
      const l = !Ei.length;
      for (const c of r)
        c[1](), Ei.push(c, t);
      if (l) {
        for (let c = 0; c < Ei.length; c += 2)
          Ei[c][0](Ei[c + 1]);
        Ei.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = pe) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || pe), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function Ji(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return nh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, v = pe;
    const f = () => {
      if (d)
        return;
      v();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : v = typeof h == "function" ? h : pe;
    }, m = i.map(
      (h, g) => js(
        h,
        (b) => {
          c[g] = b, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      ao(m), v(), l = !1;
    };
  });
}
function uc(t) {
  let e;
  return js(t, (n) => e = n)(), e;
}
let Va = !1, hs = Symbol();
function Xn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ou(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(hs in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = js(t, (a) => {
        i ? r.source.v = a : K(r.source, a);
      }), i = !1;
    }
  return t && hs in n ? uc(t) : s(r.source);
}
function ci(t, e) {
  return t.set(e), e;
}
function br() {
  const t = {};
  function e() {
    Oo(() => {
      for (var n in t)
        t[n].unsubscribe();
      io(t, hs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function rh(t) {
  var e = Va;
  try {
    return Va = !1, [t(), Va];
  } finally {
    Va = e;
  }
}
const ih = {
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
function Xe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    ih
  );
}
const ah = {
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
      const a = wr(i, e);
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
        const i = wr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === pu) return !1;
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
function nt(...t) {
  return new Proxy({ props: t }, ah);
}
function p(t, e, n, r) {
  var I;
  var i = !Zi || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Un(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var v = zn in t || pu in t;
    d = ((I = wr(t, e)) == null ? void 0 : I.set) ?? (v && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = rh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Vd(), d(f)));
  var h;
  if (i ? h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (u = /** @type {V} */
    void 0), _ === void 0 ? u : _;
  }, i && !(n & 4))
    return h;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, E) {
        return arguments.length > 0 ? ((!i || !E || g || m) && d(E ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Oa : Ns)(() => (b = !1, h()));
  a && s(y);
  var S = (
    /** @type {Effect} */
    Ge
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const x = E ? s(y) : i && a ? ue(_) : _;
        return K(y, x), b = !0, u !== void 0 && (u = x), _;
      }
      return hi && b || S.f & fi ? y.v : s(y);
    }
  );
}
const oh = "5";
var fu;
typeof window < "u" && ((fu = window.__svelte ?? (window.__svelte = {})).v ?? (fu.v = /* @__PURE__ */ new Set())).add(oh);
function sh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lh = function(e) {
  return uh(e) && !ch(e);
};
function uh(t) {
  return !!t && typeof t == "object";
}
function ch(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || hh(t);
}
var dh = typeof Symbol == "function" && Symbol.for, fh = dh ? Symbol.for("react.element") : 60103;
function hh(t) {
  return t.$$typeof === fh;
}
function vh(t) {
  return Array.isArray(t) ? [] : {};
}
function Aa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? qi(vh(t), t, e) : t;
}
function mh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Aa(r, n);
  });
}
function gh(t, e) {
  if (!e.customMerge)
    return qi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : qi;
}
function ph(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Al(t) {
  return Object.keys(t).concat(ph(t));
}
function cc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function bh(t, e) {
  return cc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function _h(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Al(t).forEach(function(i) {
    r[i] = Aa(t[i], n);
  }), Al(e).forEach(function(i) {
    bh(t, i) || (cc(t, i) && n.isMergeableObject(e[i]) ? r[i] = gh(i, n)(t[i], e[i], n) : r[i] = Aa(e[i], n));
  }), r;
}
function qi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || mh, n.isMergeableObject = n.isMergeableObject || lh, n.cloneUnlessOtherwiseSpecified = Aa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : _h(t, e, n) : Aa(e, n);
}
qi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return qi(r, i, n);
  }, {});
};
var yh = qi, Ih = yh;
const Eh = /* @__PURE__ */ sh(Ih);
var vs = function(t, e) {
  return vs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, vs(t, e);
};
function We(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vs(t, e);
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
function Sh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function dc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (v) {
        o(v);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (v) {
        o(v);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Ws(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
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
function Ht(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function vr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Kn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Mi(t) {
  return this instanceof Mi ? (this.v = t, this) : new Mi(t);
}
function Ah(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(m) {
    return function(h) {
      return Promise.resolve(h).then(m, v);
    };
  }
  function u(m, h) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, y) {
        a.push([m, g, b, y]) > 1 || l(m, g);
      });
    }, h && (i[m] = h(i[m])));
  }
  function l(m, h) {
    try {
      c(r[m](h));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(m) {
    m.value instanceof Mi ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function v(m) {
    l("throw", m);
  }
  function f(m, h) {
    m(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Ch(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ht == "function" ? Ht(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(u, l) {
        o = t[a](o), i(u, l, o.done, o.value);
      });
    };
  }
  function i(a, o, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, o);
  }
}
function qo(t, e) {
  var n = e && e.cache ? e.cache : Mh, r = e && e.serializer ? e.serializer : Oh, i = e && e.strategy ? e.strategy : wh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function xh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Th(t, e, n, r) {
  var i = xh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function fc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function hc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function wh(t, e) {
  var n = t.length === 1 ? Th : fc;
  return hc(t, this, n, e.cache.create(), e.serializer);
}
function Lh(t, e) {
  return hc(t, this, fc, e.cache.create(), e.serializer);
}
var Oh = function() {
  return JSON.stringify(arguments);
}, Rh = (
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
), Mh = {
  create: function() {
    return new Rh();
  }
}, zo = {
  variadic: Lh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var zi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(zi || (zi = {}));
function Cl(t) {
  return t.type === vt.literal;
}
function Dh(t) {
  return t.type === vt.argument;
}
function vc(t) {
  return t.type === vt.number;
}
function mc(t) {
  return t.type === vt.date;
}
function gc(t) {
  return t.type === vt.time;
}
function pc(t) {
  return t.type === vt.select;
}
function bc(t) {
  return t.type === vt.plural;
}
function Ph(t) {
  return t.type === vt.pound;
}
function _c(t) {
  return t.type === vt.tag;
}
function yc(t) {
  return !!(t && typeof t == "object" && t.type === zi.number);
}
function ms(t) {
  return !!(t && typeof t == "object" && t.type === zi.dateTime);
}
var Ic = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Nh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Hh(t) {
  var e = {};
  return t.replace(Nh, function(n) {
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
var Uh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function kh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Uh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var v = d[c];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Bh(t) {
  return t.replace(/^(.*?)-/, "");
}
var xl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ec = /^(@+)?(\+|#+)?[rs]?$/g, Fh = /(\*)(0+)|(#+)(0+)|(0+)/g, Sc = /^(0+)$/;
function Tl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Ec, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Ac(t) {
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
function Vh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Sc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function wl(t) {
  var e = {}, n = Ac(t);
  return n || e;
}
function Gh(t) {
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
        e.style = "unit", e.unit = Bh(i.options[0]);
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
          return le(le({}, l), wl(c));
        }, {}));
        continue;
      case "engineering":
        e = le(le(le({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return le(le({}, l), wl(c));
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
        i.options[0].replace(Fh, function(l, c, d, v, f, m) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (v && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Sc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (xl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(xl, function(l, c, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = le(le({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = le(le({}, e), Tl(a)));
      continue;
    }
    if (Ec.test(i.stem)) {
      e = le(le({}, e), Tl(i.stem));
      continue;
    }
    var o = Ac(i.stem);
    o && (e = le(le({}, e), o));
    var u = Vh(i.stem);
    u && (e = le(le({}, e), u));
  }
  return e;
}
var Ga = {
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
function jh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Wh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Wh(t) {
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
  var i = Ga[r || ""] || Ga[n || ""] || Ga["".concat(n, "-001")] || Ga["001"];
  return i[0];
}
var Xo, qh = new RegExp("^".concat(Ic.source, "*")), zh = new RegExp("".concat(Ic.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var Xh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Kh = !!String.fromCodePoint, Yh = !!Object.fromEntries, Zh = !!String.prototype.codePointAt, Qh = !!String.prototype.trimStart, Jh = !!String.prototype.trimEnd, $h = !!Number.isSafeInteger, ev = $h ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, gs = !0;
try {
  var tv = xc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  gs = ((Xo = tv.exec("a")) === null || Xo === void 0 ? void 0 : Xo[0]) === "a";
} catch {
  gs = !1;
}
var Ll = Xh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), ps = Kh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, o; i > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Ol = (
  // native
  Yh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Cc = Zh ? (
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
), nv = Qh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(qh, "");
  }
), rv = Jh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(zh, "");
  }
);
function xc(t, e) {
  return new RegExp(t, e);
}
var bs;
if (gs) {
  var Rl = xc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bs = function(e, n) {
    var r;
    Rl.lastIndex = n;
    var i = Rl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  bs = function(e, n) {
    for (var r = []; ; ) {
      var i = Cc(e, n);
      if (i === void 0 || Tc(i) || sv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return ps.apply(void 0, r);
  };
var iv = (
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
          var o = this.parseArgument(e, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: vt.pound,
              location: Ze(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && _s(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
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
            type: vt.literal,
            value: "<".concat(i, "/>"),
            location: Ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !_s(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && ov(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Ze(r, this.clonePosition());
      return {
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !av(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return ps.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), ps(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: vt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = bs(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Ze(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var f = rv(v.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var m = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = Ze(i, this.clonePosition());
          if (c && Ll(c == null ? void 0 : c.style, "::", 0)) {
            var b = nv(c.style.slice(2));
            if (u === "number") {
              var v = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return v.err ? v : {
                val: { type: vt.number, value: r, location: g, style: v.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var y = b;
              this.locale && (y = jh(b, this.locale));
              var f = {
                type: zi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Hh(y) : {}
              }, S = u === "date" ? vt.date : vt.time;
              return {
                val: { type: S, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? vt.number : u === "date" ? vt.date : vt.time,
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
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(I, le({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), E = v.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (x.err)
            return x;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var w = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: Ol(x.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: Ol(x.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: w
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Ze(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ze(i, this.clonePosition()));
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
        r = kh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: zi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Gh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(v, this.clonePosition()), c = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: h.val,
            location: Ze(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Ze(i, this.clonePosition());
      return a ? (o *= r, ev(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Cc(this.message, e);
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
      if (Ll(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Tc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function _s(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function av(t) {
  return _s(t) || t === 47;
}
function ov(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Tc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function sv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ys(t) {
  t.forEach(function(e) {
    if (delete e.location, pc(e) || bc(e))
      for (var n in e.options)
        delete e.options[n].location, ys(e.options[n].value);
    else vc(e) && yc(e.style) || (mc(e) || gc(e)) && ms(e.style) ? delete e.style.location : _c(e) && ys(e.children);
  });
}
function lv(t, e) {
  e === void 0 && (e = {}), e = le({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new iv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ys(n.val), n.val;
}
var Xi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Xi || (Xi = {}));
var Do = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Ml = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Xi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Do)
), uv = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Xi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Do)
), cv = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Xi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Do)
), Yt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Yt || (Yt = {}));
function dv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Yt.literal || n.type !== Yt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function fv(t) {
  return typeof t == "function";
}
function to(t, e, n, r, i, a, o) {
  if (t.length === 1 && Cl(t[0]))
    return [
      {
        type: Yt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Cl(d)) {
      u.push({
        type: Yt.literal,
        value: d.value
      });
      continue;
    }
    if (Ph(d)) {
      typeof a == "number" && u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new cv(v, o);
    var f = i[v];
    if (Dh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Yt.literal : Yt.object,
        value: f
      });
      continue;
    }
    if (mc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : ms(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (gc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : ms(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (vc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : yc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (_c(d)) {
      var h = d.children, g = d.value, b = i[g];
      if (!fv(b))
        throw new uv(g, "function", o);
      var y = to(h, e, n, r, i, a), S = b(y.map(function(E) {
        return E.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(E) {
        return {
          type: typeof E == "string" ? Yt.literal : Yt.object,
          value: E
        };
      }));
    }
    if (pc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Ml(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, to(I.value, e, n, r, i));
      continue;
    }
    if (bc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new Do(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Xi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new Ml(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, to(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return dv(u);
}
function hv(t, e) {
  return e ? le(le(le({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = le(le({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function vv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = hv(t[r], e[r]), n;
  }, le({}, t)) : t;
}
function Ko(t) {
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
function mv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Ko(t.number),
      strategy: zo.variadic
    }),
    getDateTimeFormat: qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Ko(t.dateTime),
      strategy: zo.variadic
    }),
    getPluralRules: qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Ko(t.pluralRules),
      strategy: zo.variadic
    })
  };
}
var wc = (
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
        var d = c.reduce(function(v, f) {
          return !v.length || f.type !== Yt.literal || typeof v[v.length - 1] != "string" ? v.push(f.value) : v[v.length - 1] += f.value, v;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return to(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var o = i || {};
        o.formatters;
        var u = Sh(o, ["formatters"]);
        this.ast = t.__parse(e, le(le({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = vv(t.formats, r), this.formatters = i && i.formatters || mv(this.formatterCache);
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
    }, t.__parse = lv, t.formats = {
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
function gv(t, e) {
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
const Tr = {}, pv = (t, e, n) => n && (e in Tr || (Tr[e] = {}), t in Tr[e] || (Tr[e][t] = n), n), Lc = (t, e) => {
  if (e == null)
    return;
  if (e in Tr && t in Tr[e])
    return Tr[e][t];
  const n = Pa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = _v(i, t);
    if (a)
      return pv(t, e, a);
  }
};
let qs;
const Da = en({});
function bv(t) {
  return qs[t] || null;
}
function Oc(t) {
  return t in qs;
}
function _v(t, e) {
  if (!Oc(t))
    return null;
  const n = bv(t);
  return gv(n, e);
}
function yv(t) {
  if (t == null)
    return;
  const e = Pa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Oc(r))
      return r;
  }
}
function Rc(t, ...e) {
  delete Tr[t], Da.update((n) => (n[t] = Eh.all([n[t] || {}, ...e]), n));
}
Ji(
  [Da],
  ([t]) => Object.keys(t)
);
Da.subscribe((t) => qs = t);
const no = {};
function Iv(t, e) {
  no[t].delete(e), no[t].size === 0 && delete no[t];
}
function Mc(t) {
  return no[t];
}
function Ev(t) {
  return Pa(t).map((e) => {
    const n = Mc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function ho(t) {
  return t == null ? !1 : Pa(t).some(
    (e) => {
      var n;
      return (n = Mc(e)) == null ? void 0 : n.size;
    }
  );
}
function Sv(t, e) {
  return Promise.all(
    e.map((r) => (Iv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Rc(t, ...r));
}
const la = {};
function Dc(t) {
  if (!ho(t))
    return t in la ? la[t] : Promise.resolve();
  const e = Ev(t);
  return la[t] = Promise.all(
    e.map(
      ([n, r]) => Sv(n, r)
    )
  ).then(() => {
    if (ho(t))
      return Dc(t);
    delete la[t];
  }), la[t];
}
var Dl = Object.getOwnPropertySymbols, Av = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, xv = (t, e) => {
  var n = {};
  for (var r in t)
    Av.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Dl)
    for (var r of Dl(t))
      e.indexOf(r) < 0 && Cv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Tv = {
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
function wv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Pa(
      t
    ).join('", "')}".${ho(kr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Lv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Tv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ga = Lv;
function Ki() {
  return ga;
}
function Ov(t) {
  const e = t, { formats: n } = e, r = xv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      wc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = wv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ga, r, { initialLocale: i }), n && ("number" in n && Object.assign(ga.formats.number, n.number), "date" in n && Object.assign(ga.formats.date, n.date), "time" in n && Object.assign(ga.formats.time, n.time)), vi.set(i);
}
const Yo = en(!1);
var Rv = Object.defineProperty, Mv = Object.defineProperties, Dv = Object.getOwnPropertyDescriptors, Pl = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Nv = Object.prototype.propertyIsEnumerable, Nl = (t, e, n) => e in t ? Rv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Hv = (t, e) => {
  for (var n in e || (e = {}))
    Pv.call(e, n) && Nl(t, n, e[n]);
  if (Pl)
    for (var n of Pl(e))
      Nv.call(e, n) && Nl(t, n, e[n]);
  return t;
}, Uv = (t, e) => Mv(t, Dv(e));
let Is;
const vo = en(null);
function Hl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Pa(t, e = Ki().fallbackLocale) {
  const n = Hl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Hl(e)])] : n;
}
function kr() {
  return Is ?? void 0;
}
vo.subscribe((t) => {
  Is = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const kv = (t) => {
  if (t && yv(t) && ho(t)) {
    const { loadingDelay: e } = Ki();
    let n;
    return typeof window < "u" && kr() != null && e ? n = window.setTimeout(
      () => Yo.set(!0),
      e
    ) : Yo.set(!0), Dc(t).then(() => {
      vo.set(t);
    }).finally(() => {
      clearTimeout(n), Yo.set(!1);
    });
  }
  return vo.set(t);
}, vi = Uv(Hv({}, vo), {
  set: kv
}), Bv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Fv = Object.defineProperty, mo = Object.getOwnPropertySymbols, Pc = Object.prototype.hasOwnProperty, Nc = Object.prototype.propertyIsEnumerable, Ul = (t, e, n) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, zs = (t, e) => {
  for (var n in e || (e = {}))
    Pc.call(e, n) && Ul(t, n, e[n]);
  if (mo)
    for (var n of mo(e))
      Nc.call(e, n) && Ul(t, n, e[n]);
  return t;
}, $i = (t, e) => {
  var n = {};
  for (var r in t)
    Pc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && mo)
    for (var r of mo(t))
      e.indexOf(r) < 0 && Nc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ca = (t, e) => {
  const { formats: n } = Ki();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Vv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ca("number", r)), new Intl.NumberFormat(n, i);
  }
), Gv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ca("date", r) : Object.keys(i).length === 0 && (i = Ca("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), jv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ca("time", r) : Object.keys(i).length === 0 && (i = Ca("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Wv = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return Vv(zs({ locale: n }, r));
}, qv = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return Gv(zs({ locale: n }, r));
}, zv = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return jv(zs({ locale: n }, r));
}, Xv = Po(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = kr()) => new wc(t, e, Ki().formats, {
    ignoreTag: Ki().ignoreTag
  })
), Kv = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = kr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Lc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Ki()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let v = d;
  try {
    v = Xv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, Yv = (t, e) => zv(e).format(t), Zv = (t, e) => qv(e).format(t), Qv = (t, e) => Wv(e).format(t), Jv = (t, e = kr()) => Lc(t, e), $v = Ji([vi, Da], () => Kv);
Ji([vi], () => Yv);
Ji([vi], () => Zv);
Ji([vi], () => Qv);
Ji([vi, Da], () => Jv);
function em(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Rc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Bv();
  console.log("Initial: Setting the language to", i), Ov({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), vi.set(o.detail.language);
  });
}
const tm = "Ort", nm = "Suche", rm = "UUID", im = "Name", am = "Autor", om = "Typ", sm = "Version", lm = "Geändert am", um = "Von", cm = "Bis", dm = "Suchergebnis", fm = "Ort auswählen", hm = "Filter Hinzufügen", vm = "Filtertypen", mm = {
  location: tm,
  search: nm,
  uuid: rm,
  name: im,
  author: am,
  type: om,
  version: sm,
  changed_at: lm,
  from: um,
  to: cm,
  search_result: dm,
  select_location: fm,
  add_filter: hm,
  filter_types: vm
}, gm = "Location", pm = "Search", bm = "UUID", _m = "Name", ym = "Author", Im = "Type", Em = "Version", Sm = "Changed At", Am = "From", Cm = "To", xm = "Search Result", Tm = "Select Location", wm = "Add Filter", Lm = "Filter Types", Om = {
  location: gm,
  search: pm,
  uuid: bm,
  name: _m,
  author: ym,
  type: Im,
  version: Em,
  changed_at: Sm,
  from: Am,
  to: Cm,
  search_result: xm,
  select_location: Tm,
  add_filter: wm,
  filter_types: Lm
};
function Pe(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Je(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Zn(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function rt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ea {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Tf(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], o = a.get(r);
    o != null && (o(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function q(t, e) {
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
            const o = r[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
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
var ja;
function Rm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = ja;
  if (typeof ja == "boolean" && !e)
    return ja;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (ja = r), r;
}
function Mm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - o;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - o;
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
var Tt = (
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
function Dm(t) {
  return t === void 0 && (t = window), Pm(t) ? { passive: !0 } : !1;
}
function Pm(t) {
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
const Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Dm
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
function Nm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Uc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Uc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Hm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Nm,
  estimateScrollWidth: Hm,
  matches: Uc
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
var Um = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, km = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, kl = {
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
var Bl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Fl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Wa = [], Bm = (
  /** @class */
  function(t) {
    We(e, t);
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
        return Um;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return km;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return kl;
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
        var i = e.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
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
          for (var a = Ht(Bl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
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
          for (var a = Ht(Fl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Ht(Bl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
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
        for (var i = Ht(Fl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
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
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && Wa.length > 0 && Wa.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Wa.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Wa = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        d = m.x + "px, " + m.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Mm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, kl.FG_DEACTIVATION_MS));
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
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Tt)
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
var ke = {
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
rn.add(ke.BACKSPACE);
rn.add(ke.ENTER);
rn.add(ke.SPACEBAR);
rn.add(ke.PAGE_UP);
rn.add(ke.PAGE_DOWN);
rn.add(ke.END);
rn.add(ke.HOME);
rn.add(ke.ARROW_LEFT);
rn.add(ke.ARROW_UP);
rn.add(ke.ARROW_RIGHT);
rn.add(ke.ARROW_DOWN);
rn.add(ke.DELETE);
rn.add(ke.ESCAPE);
rn.add(ke.TAB);
var hn = {
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
an.set(hn.BACKSPACE, ke.BACKSPACE);
an.set(hn.ENTER, ke.ENTER);
an.set(hn.SPACEBAR, ke.SPACEBAR);
an.set(hn.PAGE_UP, ke.PAGE_UP);
an.set(hn.PAGE_DOWN, ke.PAGE_DOWN);
an.set(hn.END, ke.END);
an.set(hn.HOME, ke.HOME);
an.set(hn.ARROW_LEFT, ke.ARROW_LEFT);
an.set(hn.ARROW_UP, ke.ARROW_UP);
an.set(hn.ARROW_RIGHT, ke.ARROW_RIGHT);
an.set(hn.ARROW_DOWN, ke.ARROW_DOWN);
an.set(hn.DELETE, ke.DELETE);
an.set(hn.ESCAPE, ke.ESCAPE);
an.set(hn.TAB, ke.TAB);
var Br = /* @__PURE__ */ new Set();
Br.add(ke.PAGE_UP);
Br.add(ke.PAGE_DOWN);
Br.add(ke.END);
Br.add(ke.HOME);
Br.add(ke.ARROW_LEFT);
Br.add(ke.ARROW_UP);
Br.add(ke.ARROW_RIGHT);
Br.add(ke.ARROW_DOWN);
function Ct(t) {
  var e = t.key;
  if (rn.has(e))
    return e;
  var n = an.get(t.keyCode);
  return n || ke.UNKNOWN;
}
const { applyPassive: Vl } = Hc, { matches: Fm } = Na;
function zt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: m = Promise.resolve() } = {}) {
  let h, g = new ea(), b = he("SMUI:addLayoutListener"), y, S = o, I = l, _ = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && S !== o && (S = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Bm({
      addClass: d,
      browserSupportsCssVars: () => Rm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, C) => g.off(document.documentElement, w, C),
      deregisterInteractionHandler: (w, C) => g.off(l || t, w, C),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, C;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Fm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, C) => {
        const A = Vl();
        g.on(document.documentElement, w, C, typeof A == "boolean" ? { capture: A } : A);
      },
      registerInteractionHandler: (w, C) => {
        const A = Vl();
        g.on(l || t, w, C, typeof A == "boolean" ? { capture: A } : A);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: v,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (I !== l || _ !== c) && (I = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), b && (y = b(x));
  function x() {
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
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, A) => t.style.setProperty(C, A), initPromise: Promise.resolve() }, w)), E();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Vm(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Fr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = he("SMUI:label:context"), c = he("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var v = { getElement: d }, f = re(), m = Q(f);
  {
    let h = /* @__PURE__ */ fe(() => Pe({
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
    pr(m, i, (g, b) => {
      Ee(
        b(g, nt(
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
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => o,
          {
            children: (y, S) => {
              var I = re(), _ = Q(I);
              Se(_, () => e.children ?? pe), L(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return L(t, f), Te(v);
}
function Es(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Fr), o = p(e, "tag", 3, "i"), u = /* @__PURE__ */ Xe(e, [
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
  const c = /* @__PURE__ */ fe(() => o() === "svg" || a() === Wm), d = he("SMUI:icon:context");
  function v() {
    return l.getElement();
  }
  var f = { getElement: v }, m = re(), h = Q(m);
  {
    let g = /* @__PURE__ */ fe(() => Pe({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    pr(h, a, (b, y) => {
      Ee(
        y(b, nt(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(g);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (S, I) => {
              var _ = re(), E = Q(_);
              Se(E, () => e.children ?? pe), L(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return L(t, m), Te(f);
}
var Gm = /* @__PURE__ */ fn("<svg><!></svg>");
function Fr(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  let o;
  function u() {
    return o;
  }
  var l = { getElement: u }, c = re(), d = Q(c);
  {
    var v = (m) => {
      var h = Gm();
      Ue(h, () => ({ ...i }));
      var g = me(h);
      Se(g, () => e.children ?? pe), Ee(h, (b) => o = b, () => o), De(h, (b, y) => q == null ? void 0 : q(b, y), n), L(m, h);
    }, f = (m) => {
      var h = re(), g = Q(h);
      {
        var b = (S) => {
          var I = re(), _ = Q(I);
          gl(_, r, !1, (E, x) => {
            Ee(E, (w) => o = w, () => o), De(E, (w, C) => q == null ? void 0 : q(w, C), n), Ue(E, () => ({ ...i }));
          }), L(S, I);
        }, y = (S) => {
          var I = re(), _ = Q(I);
          gl(_, r, !1, (E, x) => {
            Ee(E, (A) => o = A, () => o), De(E, (A, M) => q == null ? void 0 : q(A, M), n), Ue(E, () => ({ ...i }));
            var w = re(), C = Q(w);
            Se(C, () => e.children ?? pe), L(x, w);
          }), L(S, I);
        };
        oe(
          g,
          (S) => {
            s(a) ? S(b) : S(y, !1);
          },
          !0
        );
      }
      L(m, h);
    };
    oe(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return L(t, c), Te(l);
}
var jm = /* @__PURE__ */ fn("<svg><!></svg>");
function Wm(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = jm();
  Ue(u, () => ({ ...r }));
  var l = me(u);
  return Se(l, () => e.children ?? pe), Ee(u, (c) => i = c, () => i), De(u, (c, d) => q == null ? void 0 : q(c, d), n), L(t, u), Te(o);
}
function qa(t, e) {
  xe(e, !0);
  const [n, r] = br(), i = en(e.value);
  ae(e.key, i), Ce(() => {
    ci(i, e.value);
  }), Tn(() => {
    i.set(void 0);
  });
  var a = re(), o = Q(a);
  Se(o, () => e.children ?? pe), L(t, a), Te(), r();
}
var qm = /* @__PURE__ */ be('<div class="mdc-button__touch"></div>'), zm = /* @__PURE__ */ be('<div class="mdc-button__ripple"></div> <!><!>', 1);
function kc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), v = p(e, "secondary", 3, !1), f = p(e, "component", 3, Fr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ Xe(e, [
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
  ]), g, b = ue({}), y = ue({}), S = he("SMUI:button:context");
  const I = /* @__PURE__ */ fe(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ fe(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ fe(() => S === "banner" ? {} : { secondary: v() });
  let x = e.disabled;
  Ce(() => {
    if (x !== e.disabled) {
      if (g) {
        const T = G();
        "blur" in T && T.blur();
      }
      x = h.disabled;
    }
  }), ae("SMUI:label:context", "button"), ae("SMUI:icon:context", "button");
  function w(T) {
    b[T] || (b[T] = !0);
  }
  function C(T) {
    (!(T in b) || b[T]) && (b[T] = !1);
  }
  function A(T, H) {
    y[T] != H && (H === "" || H == null ? delete y[T] : y[T] = H);
  }
  function M() {
    S === "banner" && Je(G(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function G() {
    return g.getElement();
  }
  var k = { getElement: G }, j = re(), O = Q(j);
  {
    let T = /* @__PURE__ */ fe(() => [
      [
        zt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: C,
          addStyle: A
        }
      ],
      ...n()
    ]), H = /* @__PURE__ */ fe(() => Pe({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && v(),
      "mdc-banner__primary-action": S === "banner" && !v(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ fe(() => Object.entries(y).map(([z, J]) => `${z}: ${J};`).concat([i()]).join(" "));
    pr(O, f, (z, J) => {
      Ee(
        J(z, nt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(T);
            },
            get class() {
              return s(H);
            },
            get style() {
              return s(U);
            }
          },
          () => s(I),
          () => s(_),
          () => s(E),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (P) => {
              var R;
              M(), (R = e.onclick) == null || R.call(e, P);
            },
            children: (P, R) => {
              var W = zm(), Ae = Ie(Q(W), 2);
              Se(Ae, () => e.children ?? pe);
              var _e = Ie(Ae);
              {
                var F = (V) => {
                  var B = qm();
                  L(V, B);
                };
                oe(_e, (V) => {
                  l() && V(F);
                });
              }
              L(P, W);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => g = P,
        () => g
      );
    });
  }
  return L(t, j), Te(k);
}
function Xm(t, e) {
  xe(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    kc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(u);
      },
      children: (l, c) => {
        var d = re(), v = Q(d);
        Se(v, () => e.children ?? pe), L(l, d);
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
var za = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, nr = {
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
var Km = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return za;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return nr;
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
      var n = this.adapter.getAttr(nr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(nr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(nr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(nr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(za.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(za.ICON_BUTTON_ON) : this.adapter.removeClass(za.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(nr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(nr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(nr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(nr.ARIA_PRESSED, "" + n);
    }, e;
  }(Tt)
), Ym = /* @__PURE__ */ be('<div class="mdc-icon-button__touch"></div>'), Zm = /* @__PURE__ */ be('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Qm(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), v = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Fr), h = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Xe(e, [
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
  ]), b, y, S = /* @__PURE__ */ ve(ue({})), I = ue({}), _ = /* @__PURE__ */ ve(ue({})), E = he("SMUI:icon-button:context"), x = he("SMUI:icon-button:aria-describedby");
  const w = /* @__PURE__ */ fe(() => {
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
  let C = !!e.disabled;
  Ce(() => {
    if (C != !!e.disabled) {
      if (b) {
        const R = U();
        "blur" in R && R.blur();
      }
      C = !!e.disabled;
    }
  }), ae("SMUI:icon:context", "icon-button");
  let A = null;
  Ce(() => {
    b && U() && l() !== A && (l() && !y ? (y = new Km({
      addClass: G,
      hasClass: M,
      notifyChange: (R) => {
        H(R), Je(U(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: k,
      getAttr: O,
      setAttr: T
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, K(S, {}, !0), K(_, {}, !0)), A = l());
  }), Ce(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), Tn(() => {
    y && y.destroy();
  });
  function M(R) {
    return R in s(S) ? s(S)[R] : U().classList.contains(R);
  }
  function G(R) {
    s(S)[R] || (s(S)[R] = !0);
  }
  function k(R) {
    (!(R in s(S)) || s(S)[R]) && (s(S)[R] = !1);
  }
  function j(R, W) {
    I[R] != W && (W === "" || W == null ? delete I[R] : I[R] = W);
  }
  function O(R) {
    return R in s(_) ? s(_)[R] ?? null : U().getAttribute(R);
  }
  function T(R, W) {
    s(_)[R] !== W && (s(_)[R] = W);
  }
  function H(R) {
    c(R.isOn);
  }
  function U() {
    return b.getElement();
  }
  var z = { getElement: U }, J = re(), P = Q(J);
  {
    let R = /* @__PURE__ */ fe(() => [
      [
        zt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: G,
          removeClass: k,
          addStyle: j
        }
      ],
      ...i()
    ]), W = /* @__PURE__ */ fe(() => Pe({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": v(),
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
      ...s(S),
      [a()]: !0
    })), Ae = /* @__PURE__ */ fe(() => Object.entries(I).map(([V, B]) => `${V}: ${B};`).concat([o()]).join(" ")), _e = /* @__PURE__ */ fe(() => r(c()) ? null : c() ? "true" : "false"), F = /* @__PURE__ */ fe(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    pr(P, m, (V, B) => {
      Ee(
        B(V, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(W);
            },
            get style() {
              return s(Ae);
            },
            get "aria-pressed"() {
              return s(_e);
            },
            get "aria-label"() {
              return s(F);
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
          () => s(w),
          () => s(_),
          () => g,
          {
            onclick: (ee) => {
              var Z;
              y && y.handleClick(), E === "top-app-bar:navigation" && Je(U(), "SMUITopAppBarIconButtonNav"), (Z = e.onclick) == null || Z.call(e, ee);
            },
            children: (ee, Z) => {
              var ce = Zm(), we = Ie(Q(ce), 2);
              Se(we, () => e.children ?? pe);
              var $ = Ie(we);
              {
                var ie = (Me) => {
                  var Le = Ym();
                  L(Me, Le);
                };
                oe($, (Me) => {
                  d() && Me(ie);
                });
              }
              L(ee, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return L(t, J), Te(z);
}
function Jm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Qm(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = n()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      Es(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Rt();
          Re(() => st(c, r())), L(u, c);
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
var $m = {
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
var eg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $m;
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
  }(Tt)
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
var Xr = {
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
var tg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xr;
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
      this.adapter.removeClass(Xr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Xr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Xr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Xr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Xr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Xr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Tt)
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
var ng = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Gl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, rg = {
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
var ig = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ng;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gl;
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
      n > 0 && (n += Gl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Tt)
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
var Zo = {
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
}, ag = {
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
}, jl = {
  LABEL_SCALE: 0.75
}, og = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], sg = [
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
var Wl = ["mousedown", "touchstart"], ql = ["click", "keydown"], lg = (
  /** @class */
  function(t) {
    We(e, t);
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
        return ag;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return sg.indexOf(n) >= 0;
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
        for (var o = Ht(Wl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ht(ql), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
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
        for (var o = Ht(Wl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ht(ql), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
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
        return og.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * jl.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
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
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Zo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Zo.ARIA_DESCRIBEDBY);
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
  }(Tt)
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
var zl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, ug = {
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
var Xl = ["click", "keydown"], cg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ug;
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
        for (var i = Ht(Xl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
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
        for (var i = Ht(Xl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", zl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Tt)
), dg = /* @__PURE__ */ be("<span><!></span>"), fg = /* @__PURE__ */ be("<label><!></label>");
function go(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ Xe(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ea(), f = ue({}), m = ue({}), h = he("SMUI:generic:input:props") ?? {}, g = a();
  Ce(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let b = o();
  Ce(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = he("SMUI:floating-label:mount"), S = he("SMUI:floating-label:unmount");
  it(() => {
    K(
      d,
      new eg({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var R, W;
          const z = G(), J = z.cloneNode(!0);
          (R = z.parentNode) == null || R.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const P = J.scrollWidth;
          return (W = z.parentNode) == null || W.removeChild(J), P;
        },
        registerInteractionHandler: (z, J) => v.on(G(), z, J),
        deregisterInteractionHandler: (z, J) => v.off(G(), z, J)
      }),
      !0
    );
    const U = {
      get element() {
        return G();
      },
      addStyle: E,
      removeStyle: x
    };
    return y && y(U), s(d).init(), () => {
      var z;
      S && S(U), (z = s(d)) == null || z.destroy(), v.clear();
    };
  });
  function I(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function E(U, z) {
    m[U] != z && (z === "" || z == null ? delete m[U] : m[U] = z);
  }
  function x(U) {
    U in m && delete m[U];
  }
  function w(U) {
    var z;
    (z = s(d)) == null || z.shake(U);
  }
  function C(U) {
    a(U);
  }
  function A(U) {
    o(U);
  }
  function M() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function G() {
    return c;
  }
  var k = { shake: w, float: C, setRequired: A, getWidth: M, getElement: G }, j = re(), O = Q(j);
  {
    var T = (U) => {
      var z = dg();
      Ue(z, (P, R) => ({ class: P, style: R, ...l }), [
        () => Pe({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([P, R]) => `${P}: ${R};`).concat([i()]).join(" ")
      ]);
      var J = me(z);
      Se(J, () => e.children ?? pe), Ee(z, (P) => c = P, () => c), De(z, (P, R) => q == null ? void 0 : q(P, R), n), L(U, z);
    }, H = (U) => {
      var z = fg();
      Ue(
        z,
        (P, R) => ({
          class: P,
          style: R,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => Pe({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([P, R]) => `${P}: ${R};`).concat([i()]).join(" ")
        ]
      );
      var J = me(z);
      Se(J, () => e.children ?? pe), Ee(z, (P) => c = P, () => c), De(z, (P, R) => q == null ? void 0 : q(P, R), n), L(U, z);
    };
    oe(O, (U) => {
      u() ? U(T) : U(H, !1);
    });
  }
  return L(t, j), Te(k);
}
var hg = /* @__PURE__ */ be("<div></div>");
function Bc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = new ea(), d = ue({}), v = ue({});
  it(() => (K(
    l,
    new tg({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, w) => c.on(I(), x, w),
      deregisterEventHandler: (x, w) => c.off(I(), x, w)
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy(), c.clear();
  }));
  function f(x) {
    return x in d ? d[x] : I().classList.contains(x);
  }
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function h(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, w) {
    v[x] != w && (w === "" || w == null ? delete v[x] : v[x] = w);
  }
  function b() {
    var x;
    (x = s(l)) == null || x.activate();
  }
  function y() {
    var x;
    (x = s(l)) == null || x.deactivate();
  }
  function S(x) {
    var w;
    (w = s(l)) == null || w.setRippleCenter(x);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: S, getElement: I }, E = hg();
  return Ue(E, (x, w) => ({ class: x, style: w, ...o }), [
    () => Pe({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([x, w]) => `${x}: ${w};`).concat([i()]).join(" ")
  ]), Ee(E, (x) => u = x, () => u), De(E, (x, w) => q == null ? void 0 : q(x, w), n), L(t, E), Te(_);
}
var vg = /* @__PURE__ */ be('<div class="mdc-notched-outline__notch"><!></div>'), mg = /* @__PURE__ */ be('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Fc(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = /* @__PURE__ */ ve(void 0), d = ue({}), v = ue({}), f;
  Ce(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), ae("SMUI:floating-label:mount", (C) => {
    K(c, C, !0);
  }), ae("SMUI:floating-label:unmount", () => {
    K(c, void 0);
  }), it(() => (K(
    l,
    new ig({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (C) => g("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy();
  }));
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function h(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, A) {
    v[C] != A && (A === "" || A == null ? delete v[C] : v[C] = A);
  }
  function b(C) {
    C in v && delete v[C];
  }
  function y(C) {
    var A;
    (A = s(l)) == null || A.notch(C);
  }
  function S() {
    var C;
    (C = s(l)) == null || C.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: S, getElement: I }, E = mg();
  Ue(E, (C) => ({ class: C, ...o }), [
    () => Pe({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = Ie(me(E), 2);
  {
    var w = (C) => {
      var A = vg(), M = me(A);
      Se(M, () => e.children ?? pe), Re((G) => Gt(A, G), [
        () => Object.entries(v).map(([G, k]) => `${G}: ${k};`).join(" ")
      ]), L(C, A);
    };
    oe(x, (C) => {
      a() || C(w);
    });
  }
  return Ee(E, (C) => u = C, () => u), De(E, (C, A) => q == null ? void 0 : q(C, A), n), L(t, E), Te(_);
}
function Xs(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Fr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Xe(e, [
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
  ]), v;
  const f = [];
  Object.entries(u()).forEach(([y, S]) => {
    const I = he(S);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ae(y, l()[y]);
  Tn(() => {
    for (const y of f)
      y();
  });
  function m() {
    return v.getElement();
  }
  var h = { getElement: m }, g = re(), b = Q(g);
  {
    let y = /* @__PURE__ */ fe(() => Pe({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    pr(b, i, (S, I) => {
      Ee(
        I(S, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(y);
            }
          },
          c,
          () => d,
          {
            children: (_, E) => {
              var x = re(), w = Q(x);
              Se(w, () => e.children ?? pe), L(_, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => v = _,
        () => v
      );
    });
  }
  return L(t, g), Te(h);
}
function gg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Xs(t, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Q(l);
        Se(c, () => e.children ?? pe), L(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Te(a);
}
function pg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Xs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Q(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
function bg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Xs(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Q(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
var _g = /* @__PURE__ */ be("<input/>");
function yg(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), v = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), m = p(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ Xe(e, [
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
  ]), g, b = ue({}), y = ue({});
  Ce(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), it(() => {
    d() && v() && c(M().matches(":invalid"));
  });
  function S(T) {
    return T === "" ? Number.NaN : +T;
  }
  function I(T) {
    if (i() === "file") {
      u(T.currentTarget.files);
      return;
    }
    if (T.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (T.currentTarget.value === "" && m()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(S(T.currentTarget.value));
        break;
      default:
        o(T.currentTarget.value);
        break;
    }
  }
  function _(T) {
    (i() === "file" || i() === "range") && I(T), l(!0), d() && c(M().matches(":invalid"));
  }
  function E(T) {
    return T in b ? b[T] ?? null : M().getAttribute(T);
  }
  function x(T, H) {
    b[T] !== H && (b[T] = H);
  }
  function w(T) {
    (!(T in b) || b[T] != null) && (b[T] = void 0);
  }
  function C() {
    M().focus();
  }
  function A() {
    M().blur();
  }
  function M() {
    return g;
  }
  var G = { getAttr: E, addAttr: x, removeAttr: w, focus: C, blur: A, getElement: M }, k = _g(), j = (T) => {
    var H;
    i() !== "file" && I(T), (H = e.oninput) == null || H.call(e, T);
  }, O = (T) => {
    var H;
    _(T), (H = e.onchange) == null || H.call(e, T);
  };
  return Ue(
    k,
    (T) => ({
      class: T,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: j,
      onchange: O
    }),
    [
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(k, (T) => g = T, () => g), De(k, (T, H) => q == null ? void 0 : q(T, H), n), L(t, k), Te(G);
}
var Ig = /* @__PURE__ */ be("<textarea></textarea>");
function Eg(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), v = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = ue({});
  it(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function g(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, A) {
    m[C] !== A && (m[C] = A);
  }
  function y(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
  }
  function S() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var E = { getAttr: g, addAttr: b, removeAttr: y, focus: S, blur: I, getElement: _ }, x = Ig(), w = (C) => {
    var A;
    h(), (A = e.onchange) == null || A.call(e, C);
  };
  return Ue(
    x,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: w
    }),
    [
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(x, (C) => f = C, () => f), De(x, (C, A) => q == null ? void 0 : q(C, A), n), Hr(() => Sa(x, a)), L(t, x), Te(E);
}
var Sg = /* @__PURE__ */ be('<span class="mdc-text-field__ripple"></span>'), Ag = /* @__PURE__ */ be("<!> <!>", 1), Cg = /* @__PURE__ */ be("<span><!> <!></span>"), xg = /* @__PURE__ */ be("<!> <!> <!>", 1), Tg = /* @__PURE__ */ be("<label><!> <!> <!> <!> <!> <!> <!></label>"), wg = /* @__PURE__ */ be("<div><!> <!> <!> <!> <!></div>"), Lg = /* @__PURE__ */ be("<!> <!>", 1);
function Ss(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Hc;
  let r = () => {
  };
  function i(Y) {
    return Y === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), v = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => v() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), y = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(y())), I = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, S), x = p(e, "useNativeValidation", 19, S), w = p(e, "withLeadingIcon", 3, r), C = p(e, "withTrailingIcon", 3, r), A = p(e, "input", 7), M = p(e, "floatingLabel", 7), G = p(e, "lineRipple", 7), k = p(e, "notchedOutline", 7), j = /* @__PURE__ */ Xe(e, [
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
  const O = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let T, H = /* @__PURE__ */ ve(void 0), U = new ea(), z = ue({}), J = ue({}), P = /* @__PURE__ */ ve(void 0), R = /* @__PURE__ */ ve(!1), W = /* @__PURE__ */ ve(ue(I())), Ae = he("SMUI:addLayoutListener"), _e, F, V = new Promise((Y) => F = Y), B, ee, Z, ce;
  const we = /* @__PURE__ */ fe(() => A() && A().getElement());
  Ce(() => {
    (_() || s(W) || !S()) && s(H) && s(H).isValid() !== !y() && (S() ? y(!s(H).isValid()) : s(H).setValid(!y()));
  }), Ce(() => {
    s(H) && s(H).getValidateOnValueChange() !== E() && s(H).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Ce(() => {
    s(H) && s(H).setUseNativeValidation(i(x()) ? !0 : x());
  }), Ce(() => {
    s(H) && s(H).setDisabled(c());
  });
  let $ = g();
  Ce(() => {
    if (s(H) && O && $ !== g()) {
      $ = g();
      const Y = `${g() == null ? "" : g()}`;
      s(H).getValue() !== Y && s(H).setValue(Y);
    }
  }), Ae && (_e = Ae(N)), ae("SMUI:textfield:leading-icon:mount", (Y) => {
    B = Y;
  }), ae("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
  }), ae("SMUI:textfield:trailing-icon:mount", (Y) => {
    ee = Y;
  }), ae("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), ae("SMUI:textfield:helper-text:id", (Y) => {
    K(P, Y, !0);
  }), ae("SMUI:textfield:helper-text:mount", (Y) => {
    Z = Y;
  }), ae("SMUI:textfield:helper-text:unmount", () => {
    K(P, void 0), Z = void 0;
  }), ae("SMUI:textfield:character-counter:mount", (Y) => {
    ce = Y;
  }), ae("SMUI:textfield:character-counter:unmount", () => {
    ce = void 0;
  }), it(() => {
    var Y;
    if (K(
      H,
      new lg(
        {
          // getRootAdapterMethods_
          addClass: Me,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: (te, Ne) => U.on(X(), te, Ne),
          deregisterTextFieldInteractionHandler: (te, Ne) => U.off(X(), te, Ne),
          registerValidationAttributeChangeHandler: (te) => {
            const Ne = (mt) => mt.map((Ut) => Ut.attributeName).filter((Ut) => Ut), dt = new MutationObserver((mt) => {
              x() && te(Ne(mt));
            }), bt = { attributes: !0 };
            return A() && dt.observe(A().getElement(), bt), dt;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = A()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Ne) => {
            var dt;
            (dt = A()) == null || dt.addAttr(te, Ne);
          },
          removeInputAttr: (te) => {
            var Ne;
            (Ne = A()) == null || Ne.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = A()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = A()) == null ? void 0 : bt.getElement();
            if (dt) {
              const mt = n();
              U.on(dt, te, Ne, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = A()) == null ? void 0 : bt.getElement();
            dt && U.off(dt, te, Ne);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => M() && M().float(te),
          getLabelWidth: () => M() ? M().getWidth() : 0,
          hasLabel: () => !!M(),
          shakeLabel: (te) => M() && M().shake(te),
          setLabelRequired: (te) => M() && M().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => G() && G().activate(),
          deactivateLineRipple: () => G() && G().deactivate(),
          setLineRippleTransformOrigin: (te) => G() && G().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (te) => k() && k().notch(te)
        },
        {
          get helperText() {
            return Z;
          },
          get characterCounter() {
            return ce;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), O) {
      if (A() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Y = s(H)) == null || Y.init();
    } else
      Yu().then(() => {
        var te;
        if (A() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(H)) == null || te.init();
      });
    return F(), () => {
      var te;
      (te = s(H)) == null || te.destroy(), U.clear();
    };
  }), Tn(() => {
    _e && _e();
  });
  function ie(Y) {
    return Y in z ? z[Y] ?? null : X().classList.contains(Y);
  }
  function Me(Y) {
    z[Y] || (z[Y] = !0);
  }
  function Le(Y) {
    (!(Y in z) || z[Y]) && (z[Y] = !1);
  }
  function je(Y, te) {
    J[Y] != te && (te === "" || te == null ? delete J[Y] : J[Y] = te);
  }
  function Ke() {
    var Y;
    (Y = A()) == null || Y.focus();
  }
  function Be() {
    var Y;
    (Y = A()) == null || Y.blur();
  }
  function N() {
    if (s(H)) {
      const Y = s(H).shouldFloat;
      s(H).notchOutline(Y);
    }
  }
  function X() {
    return T;
  }
  var de = { focus: Ke, blur: Be, layout: N, getElement: X }, Oe = Lg(), Fe = Q(Oe);
  {
    var ct = (Y) => {
      var te = Tg();
      Ue(te, (qe, Qe, $e) => ({ class: qe, style: Qe, for: void 0, ...$e }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(R) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(J).map(([qe, Qe]) => `${qe}: ${Qe};`).concat([u()]).join(" "),
        () => Zn(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = me(te);
      {
        var dt = (qe) => {
          var Qe = Ag(), $e = Q(Qe);
          {
            var Dt = (ut) => {
              var At = Sg();
              L(ut, At);
            };
            oe($e, (ut) => {
              f() === "filled" && ut(Dt);
            });
          }
          var vn = Ie($e, 2);
          {
            var at = (ut) => {
              {
                let At = /* @__PURE__ */ fe(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), et = /* @__PURE__ */ fe(() => rt(j, "label$"));
                Ee(
                  go(ut, nt(
                    {
                      get floatAbove() {
                        return s(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(et),
                    {
                      children: (wt, Ln) => {
                        var Lt = re(), _t = Q(Lt);
                        {
                          var Pt = (kt) => {
                          }, on = (kt) => {
                            var sn = re(), Kt = Q(sn);
                            {
                              var Bn = (ln) => {
                                var jt = Rt();
                                Re(() => st(jt, e.label)), L(ln, jt);
                              }, Gr = (ln) => {
                                var jt = re(), Fn = Q(jt);
                                Se(Fn, () => e.label), L(ln, jt);
                              };
                              oe(
                                Kt,
                                (ln) => {
                                  typeof e.label == "string" ? ln(Bn) : ln(Gr, !1);
                                },
                                !0
                              );
                            }
                            L(kt, sn);
                          };
                          oe(_t, (kt) => {
                            e.label == null ? kt(Pt) : kt(on, !1);
                          });
                        }
                        L(wt, Lt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (wt) => M(wt),
                  () => M()
                );
              }
            };
            oe(vn, (ut) => {
              !m() && e.label != null && ut(at);
            });
          }
          L(qe, Qe);
        };
        oe(Ne, (qe) => {
          !v() && f() !== "outlined" && qe(dt);
        });
      }
      var bt = Ie(Ne, 2);
      {
        var mt = (qe) => {
          {
            let Qe = /* @__PURE__ */ fe(() => m() || e.label == null), $e = /* @__PURE__ */ fe(() => rt(j, "outline$"));
            Ee(
              Fc(qe, nt(
                {
                  get noLabel() {
                    return s(Qe);
                  }
                },
                () => s($e),
                {
                  children: (Dt, vn) => {
                    var at = re(), ut = Q(at);
                    {
                      var At = (et) => {
                        {
                          let wt = /* @__PURE__ */ fe(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ln = /* @__PURE__ */ fe(() => rt(j, "label$"));
                          Ee(
                            go(et, nt(
                              {
                                get floatAbove() {
                                  return s(wt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Ln),
                              {
                                children: (Lt, _t) => {
                                  var Pt = re(), on = Q(Pt);
                                  {
                                    var kt = (Kt) => {
                                    }, sn = (Kt) => {
                                      var Bn = re(), Gr = Q(Bn);
                                      {
                                        var ln = (Fn) => {
                                          var jr = Rt();
                                          Re(() => st(jr, e.label)), L(Fn, jr);
                                        }, jt = (Fn) => {
                                          var jr = re(), Ho = Q(jr);
                                          Se(Ho, () => e.label), L(Fn, jr);
                                        };
                                        oe(
                                          Gr,
                                          (Fn) => {
                                            typeof e.label == "string" ? Fn(ln) : Fn(jt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      L(Kt, Bn);
                                    };
                                    oe(on, (Kt) => {
                                      e.label == null ? Kt(kt) : Kt(sn, !1);
                                    });
                                  }
                                  L(Lt, Pt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Lt) => M(Lt),
                            () => M()
                          );
                        }
                      };
                      oe(ut, (et) => {
                        !m() && e.label != null && et(At);
                      });
                    }
                    L(Dt, at);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => k(Dt),
              () => k()
            );
          }
        };
        oe(bt, (qe) => {
          (v() || f() === "outlined") && qe(mt);
        });
      }
      var Ut = Ie(bt, 2);
      qa(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (qe, Qe) => {
          var $e = re(), Dt = Q($e);
          Se(Dt, () => e.leadingIcon ?? pe), L(qe, $e);
        },
        $$slots: { default: !0 }
      });
      var _r = Ie(Ut, 2);
      Se(_r, () => e.children ?? pe);
      var ht = Ie(_r, 2);
      {
        var Mt = (qe) => {
          var Qe = Cg(), $e = me(Qe);
          {
            let vn = /* @__PURE__ */ fe(() => rt(j, "input$"));
            Ee(
              Eg($e, nt(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => s(vn),
                {
                  onblur: (at) => {
                    var ut;
                    K(R, !1), K(W, !0), Je(X(), "blur", at), (ut = e.input$onblur) == null || ut.call(e, at);
                  },
                  onfocus: (at) => {
                    var ut;
                    K(R, !0), Je(X(), "focus", at), (ut = e.input$onfocus) == null || ut.call(e, at);
                  },
                  get value() {
                    return g();
                  },
                  set value(at) {
                    g(at);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(at) {
                    _(at);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(at) {
                    y(at);
                  }
                }
              )),
              (at) => A(at),
              () => A()
            );
          }
          var Dt = Ie($e, 2);
          Se(Dt, () => e.internalCounter ?? pe), Re((vn) => Vs(Qe, 1, vn), [
            () => rc(Pe({
              "mdc-text-field__resizer": !("input$resizable" in j) || e.input$resizable
            }))
          ]), L(qe, Qe);
        }, yt = (qe) => {
          var Qe = xg(), $e = Q(Qe);
          {
            var Dt = (At) => {
              var et = re(), wt = Q(et);
              {
                var Ln = (_t) => {
                  pg(_t, {
                    children: (Pt, on) => {
                      var kt = Rt();
                      Re(() => st(kt, e.prefix)), L(Pt, kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = re(), on = Q(Pt);
                  Se(on, () => e.prefix ?? pe), L(_t, Pt);
                };
                oe(wt, (_t) => {
                  typeof e.prefix == "string" ? _t(Ln) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            oe($e, (At) => {
              e.prefix != null && At(Dt);
            });
          }
          var vn = Ie($e, 2);
          {
            let At = /* @__PURE__ */ fe(() => rt(j, "input$"));
            Ee(
              yg(vn, nt(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(At),
                {
                  onblur: (et) => {
                    var wt;
                    K(R, !1), K(W, !0), Je(X(), "blur", et), (wt = e.input$onblur) == null || wt.call(e, et);
                  },
                  onfocus: (et) => {
                    var wt;
                    K(R, !0), Je(X(), "focus", et), (wt = e.input$onfocus) == null || wt.call(e, et);
                  },
                  get value() {
                    return g();
                  },
                  set value(et) {
                    g(et);
                  },
                  get files() {
                    return b();
                  },
                  set files(et) {
                    b(et);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(et) {
                    _(et);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(et) {
                    y(et);
                  }
                }
              )),
              (et) => A(et),
              () => A()
            );
          }
          var at = Ie(vn, 2);
          {
            var ut = (At) => {
              var et = re(), wt = Q(et);
              {
                var Ln = (_t) => {
                  bg(_t, {
                    children: (Pt, on) => {
                      var kt = Rt();
                      Re(() => st(kt, e.suffix)), L(Pt, kt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = re(), on = Q(Pt);
                  Se(on, () => e.suffix ?? pe), L(_t, Pt);
                };
                oe(wt, (_t) => {
                  typeof e.suffix == "string" ? _t(Ln) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            oe(at, (At) => {
              e.suffix != null && At(ut);
            });
          }
          L(qe, Qe);
        };
        oe(ht, (qe) => {
          v() && typeof g() == "string" ? qe(Mt) : qe(yt, !1);
        });
      }
      var wn = Ie(ht, 2);
      qa(wn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (qe, Qe) => {
          var $e = re(), Dt = Q($e);
          Se(Dt, () => e.trailingIcon ?? pe), L(qe, $e);
        },
        $$slots: { default: !0 }
      });
      var pi = Ie(wn, 2);
      {
        var kn = (qe) => {
          {
            let Qe = /* @__PURE__ */ fe(() => rt(j, "ripple$"));
            Ee(Bc(qe, nt(() => s(Qe))), ($e) => G($e), () => G());
          }
        };
        oe(pi, (qe) => {
          !v() && f() !== "outlined" && l() && qe(kn);
        });
      }
      Ee(te, (qe) => T = qe, () => T), De(te, (qe, Qe) => zt == null ? void 0 : zt(qe, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: je,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: V
      })), De(te, (qe, Qe) => q == null ? void 0 : q(qe, Qe), a), L(Y, te);
    }, pt = (Y) => {
      var te = wg();
      Ue(te, (ht, Mt, yt) => ({ class: ht, style: Mt, ...yt }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(J).map(([ht, Mt]) => `${ht}: ${Mt};`).concat([u()]).join(" "),
        () => Zn(j, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = me(te);
      {
        var dt = (ht) => {
          var Mt = re(), yt = Q(Mt);
          Se(yt, () => e.label ?? pe), L(ht, Mt);
        };
        oe(Ne, (ht) => {
          typeof e.label != "string" && ht(dt);
        });
      }
      var bt = Ie(Ne, 2);
      qa(bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ht, Mt) => {
          var yt = re(), wn = Q(yt);
          Se(wn, () => e.leadingIcon ?? pe), L(ht, yt);
        },
        $$slots: { default: !0 }
      });
      var mt = Ie(bt, 2);
      Se(mt, () => e.children ?? pe);
      var Ut = Ie(mt, 2);
      qa(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ht, Mt) => {
          var yt = re(), wn = Q(yt);
          Se(wn, () => e.trailingIcon ?? pe), L(ht, yt);
        },
        $$slots: { default: !0 }
      });
      var _r = Ie(Ut, 2);
      Se(_r, () => e.line ?? pe), Ee(te, (ht) => T = ht, () => T), De(te, (ht, Mt) => zt == null ? void 0 : zt(ht, Mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: je
      })), De(te, (ht, Mt) => q == null ? void 0 : q(ht, Mt), a), L(Y, te);
    };
    oe(Fe, (Y) => {
      O ? Y(ct) : Y(pt, !1);
    });
  }
  var se = Ie(Fe, 2);
  {
    var ye = (Y) => {
      {
        let te = /* @__PURE__ */ fe(() => rt(j, "helperLine$"));
        gg(Y, nt(() => s(te), {
          children: (Ne, dt) => {
            var bt = re(), mt = Q(bt);
            Se(mt, () => e.helper ?? pe), L(Ne, bt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(se, (Y) => {
      e.helper && Y(ye);
    });
  }
  return L(t, Oe), Te(de);
}
var Og = /* @__PURE__ */ be("<i><!></i>");
function Rg(t, e) {
  xe(e, !0);
  const n = () => Xn(h, "$leadingStore", r), [r, i] = br();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ ve(void 0), f = new ea(), m = ue({});
  const h = he("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: u() })), S = he("SMUI:textfield:leading-icon:mount"), I = he("SMUI:textfield:leading-icon:unmount"), _ = he("SMUI:textfield:trailing-icon:mount"), E = he("SMUI:textfield:trailing-icon:unmount");
  it(() => (K(
    v,
    new cg({
      getAttr: x,
      setAttr: w,
      removeAttr: C,
      setContent: (H) => {
        K(b, H, !0);
      },
      registerInteractionHandler: (H, U) => f.on(A(), H, U),
      deregisterInteractionHandler: (H, U) => f.off(A(), H, U),
      notifyIconAction: () => Je(A(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(v)) : _ && _(s(v)), s(v).init(), () => {
    var H;
    s(v) && (g ? I && I(s(v)) : E && E(s(v))), (H = s(v)) == null || H.destroy(), f.clear();
  }));
  function x(H) {
    return H in m ? m[H] ?? null : A().getAttribute(H);
  }
  function w(H, U) {
    m[H] !== U && (m[H] = U);
  }
  function C(H) {
    (!(H in m) || m[H] != null) && (m[H] = void 0);
  }
  function A() {
    return d;
  }
  var M = { getElement: A }, G = Og();
  Ue(
    G,
    (H) => ({
      class: H,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...m,
      ...c
    }),
    [
      () => Pe({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var k = me(G);
  {
    var j = (H) => {
      var U = re(), z = Q(U);
      Se(z, () => e.children ?? pe), L(H, U);
    }, O = (H) => {
      var U = Rt();
      Re(() => st(U, s(b))), L(H, U);
    };
    oe(k, (H) => {
      s(b) == null ? H(j) : H(O, !1);
    });
  }
  Ee(G, (H) => d = H, () => d), De(G, (H, U) => q == null ? void 0 : q(H, U), a), L(t, G);
  var T = Te(M);
  return i(), T;
}
function Mg(t, e) {
  xe(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "invalid", 3, !1), d = p(e, "oninput", 3, () => {
  });
  var v = re(), f = Q(v);
  {
    var m = (g) => {
      {
        const b = (S) => {
          Rg(S, {
            class: "material-icons",
            children: (I, _) => {
              var E = Rt();
              Re(() => st(E, i())), L(I, E);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ fe(() => `width: 100%; ${u()}`);
        Ss(g, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get invalid() {
            return c();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(y);
          },
          get variant() {
            return o();
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
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (g) => {
      Ss(g, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return o();
        },
        get required() {
          return l();
        },
        get invalid() {
          return c();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(b) {
          a(b);
        }
      });
    };
    oe(f, (g) => {
      i() ? g(m) : g(h, !1);
    });
  }
  L(t, v), Te();
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
var Dg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Pg = {
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
}, ua = {
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
var oi;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(oi || (oi = {}));
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
var Ir, rr, ze = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ir = {}, Ir["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ir["" + ze.LIST_ITEM_CLASS] = "mdc-list-item", Ir["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ir["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ir["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ir["" + ze.ROOT] = "mdc-list";
var Si = (rr = {}, rr["" + ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", rr["" + ze.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", rr["" + ze.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", rr["" + ze.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", rr["" + ze.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", rr["" + ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", rr["" + ze.ROOT] = "mdc-deprecated-list", rr), Er = {
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
    .` + ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` a,
    .` + Si[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Si[ze.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` a,
    .` + ze.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ze.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Si[ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Si[ze.LIST_ITEM_CLASS] + ` a,
    .` + Si[ze.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Si[ze.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Ng = ["input", "button", "textarea", "select"], yn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Ng.indexOf(n) === -1 && t.preventDefault();
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
function Hg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Ug(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function As(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Gc(e);
  }, It.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = kg(i, a, u, e) : l = Bg(i, u, e), l !== -1 && !o && r(l), l;
}
function kg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var o = a[r.sortedIndexCursor].index;
    if (!n(o))
      return o;
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
function Bg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, u = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function Vc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Gc(t) {
  t.typeaheadBuffer = "";
}
function Kl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Ct(n) === "ArrowLeft", c = Ct(n) === "ArrowUp", d = Ct(n) === "ArrowRight", v = Ct(n) === "ArrowDown", f = Ct(n) === "Home", m = Ct(n) === "End", h = Ct(n) === "Enter", g = Ct(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || v || f || m || h)
    return -1;
  var b = !g && n.key.length === 1;
  if (b) {
    yn(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return As(y, e);
  }
  if (!g)
    return -1;
  r && yn(n);
  var S = r && Vc(e);
  if (S) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return As(y, e);
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
function Fg(t) {
  return t instanceof Array;
}
var Vg = ["Alt", "Control", "Meta", "Shift"];
function Yl(t) {
  var e = new Set(t ? Vg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Gg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = It.UNSET_INDEX, r.focusedItemIndex = It.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Hg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ze;
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
        var r = this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = It.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, ze.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, ze.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Vc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, ze.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = Ct(n) === "ArrowLeft", l = Ct(n) === "ArrowUp", c = Ct(n) === "ArrowRight", d = Ct(n) === "ArrowDown", v = Ct(n) === "Home", f = Ct(n) === "End", m = Ct(n) === "Enter", h = Ct(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", S = Yl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || v) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(w) {
              a.focusItemAtIndex(w);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(w) {
              return a.isIndexDisabled(w);
            }
          };
          Kl(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && S([]))
          yn(n), this.focusNextElement(E);
        else if (b && S([]))
          yn(n), this.focusPrevElement(E);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          yn(n);
          var I = this.focusNextElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          yn(n);
          var I = this.focusPrevElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (v && S([]))
          yn(n), this.focusFirstElement();
        else if (f && S([]))
          yn(n), this.focusLastElement();
        else if (v && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (yn(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (yn(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (y && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && S([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && m || (yn(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || h) && S(["Shift"]) && this.isCheckboxList) {
          var x = n.target;
          if (x && x.tagName === "A" && m || (yn(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
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
          Kl(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = Yl(i);
      n !== It.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Er.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Er.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = ze.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ze.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== It.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== It.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === It.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Er.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Er.ARIA_CURRENT : Er.ARIA_SELECTED;
      if (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== It.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Er.ARIA_SELECTED : Er.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === It.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = vr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          o !== m && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Kn([], vr(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === It.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== It.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== It.UNSET_INDEX ? this.selectedIndex : Fg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), o;
      r ? o = a : (o = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, o)), this.adapter.setAttributeForElementIndex(n, i, o ? "true" : "false");
      var u = this.selectedIndex === It.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], o = 0; o < i; o++)
          (!this.isIndexDisabled(o) || n.indexOf(o) > -1) && a.push(o);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var o = {
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
      return As(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ug(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Gc(this.typeaheadState);
    }, e;
  }(Tt)
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
var jc = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = oi.TOP_START, r.originCorner = oi.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Dg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Pg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ua;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return oi;
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
        }, ua.TRANSITION_OPEN_DURATION);
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
          }, ua.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Et.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Et.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, v = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / v.width > ua.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Et.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Et.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var v = d - o.height > 0;
      !v && c > d + this.openBottomBias && (n = this.setBit(n, Et.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, Et.FLIP_RTL), h = this.hasBit(this.anchorCorner, Et.RIGHT) || this.hasBit(n, Et.RIGHT), g = !1;
      f && m ? g = !h : g = h;
      var b, y;
      g ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var S = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, Et.FLIP_RTL) && this.hasBit(n, Et.RIGHT);
      return I && _ && f || !S && _ ? n = this.unsetBit(n, Et.RIGHT) : (S && g && f || S && !g && h || !I && b >= y) && (n = this.setBit(n, Et.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Et.BOTTOM), o = this.hasBit(this.anchorCorner, Et.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Et.RIGHT), a = this.hasBit(this.anchorCorner, Et.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Et.BOTTOM), a = this.hasBit(this.anchorCorner, Et.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var v = Ht(d), f = v.next(); !f.done; f = v.next()) {
          var m = f.value, h = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          h += u[m], this.isFixedPosition || (m === "top" ? h += o.y : m === "bottom" ? h -= o.y : m === "left" ? h += o.x : h -= o.x), n[m] = h;
        }
      } catch (g) {
        r = { error: g };
      } finally {
        try {
          f && !f.done && (i = v.return) && i.call(v);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, ua.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Tt)
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
var Zl = {
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
function jg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Wg(t, e) {
  if (jg(t) && e in Zl) {
    var n = t.document.createElement("div"), r = Zl[e], i = r.standard, a = r.prefixed, o = i in n.style;
    return o ? i : a;
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
var Di = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ai = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, qg = {
  FOCUS_ROOT_INDEX: -1
}, Li;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Li || (Li = {}));
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
var zg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Li.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Di;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return qg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ai.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, jc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Li.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Li.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Li.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ai.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Di.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Di.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Tt)
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
}, Qo = {
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
}, Kr = {
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
var Xg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Kr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qo;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Kr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Kr.UNSET_INDEX ? r[n] : "";
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
        var r = Ct(n) === ke.ENTER, i = Ct(n) === ke.SPACEBAR, a = Ct(n) === ke.ARROW_UP, o = Ct(n) === ke.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(gt.FOCUSED);
        if (n) {
          var i = Kr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Kr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(oi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Qo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Qo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Kr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Tt)
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
var Yr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, ir = {
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
var Kg = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Yr;
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
      return this.adapter.getAttr(Yr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(ir.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(ir.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Yr.ROLE) : this.adapter.setAttr(Yr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Yr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Yr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Yr.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
), Yg = /* @__PURE__ */ be("<div><!></div>");
function Zg(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ue(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), v = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), y = p(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ Xe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E = ue({}), x = ue({}), w = /* @__PURE__ */ ve(void 0);
  ae("SMUI:list:role", "menu"), ae("SMUI:list:item:role", "menuitem"), Ce(() => {
    var B, ee;
    I && o() && !((B = I.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && ((ee = I.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Ce(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Ce(() => {
    s(_) && s(_).setQuickOpen(v());
  }), Ce(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Ce(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Ce(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const C = oi;
  Ce(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(C[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Ce(() => {
    s(_) && s(_).setAnchorMargin(m());
  }), Ce(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const A = he("SMUI:menu-surface:mount"), M = he("SMUI:menu-surface:unmount");
  it(() => {
    K(
      _,
      new jc({
        addClass: k,
        removeClass: j,
        hasClass: G,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Je(W(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Je(W(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Je(W(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Je(W(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => W().contains(ee),
        isRtl: () => getComputedStyle(W()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          x["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === W(),
        saveFocus: () => {
          K(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || W().contains(document.activeElement)) && s(w) && document.contains(s(w)) && "focus" in s(w) && s(w).focus();
        },
        getInnerDimensions: () => ({
          width: W().offsetWidth,
          height: W().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ee) => {
          x.left = "left" in ee ? `${ee.left}px` : "", x.right = "right" in ee ? `${ee.right}px` : "", x.top = "top" in ee ? `${ee.top}px` : "", x.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          x["max-height"] = ee;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: O
    };
    return A && A(B), s(_).init(), () => {
      var Z, ce;
      M && M(B);
      const ee = s(_).isHoistedElement;
      (Z = s(_)) == null || Z.destroy(), ee && ((ce = W().parentNode) == null || ce.removeChild(W()));
    };
  }), Tn(() => {
    var B;
    o() && W() && ((B = W().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function G(B) {
    return B in E ? E[B] : W().classList.contains(B);
  }
  function k(B) {
    E[B] || (E[B] = !0);
  }
  function j(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function O(B) {
    var ee;
    (ee = s(_)) == null || ee.close(B), l(!1);
  }
  function T(B) {
    s(_) && l() && !c() && s(_).handleBodyClick(B);
  }
  function H() {
    return l();
  }
  function U(B) {
    l(B);
  }
  function z(B, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(B, ee);
  }
  function J(B) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(B);
  }
  function P() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function R() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function W() {
    return I;
  }
  var Ae = {
    isOpen: H,
    setOpen: U,
    setAbsolutePosition: z,
    setIsHoisted: J,
    isFixed: P,
    flipCornerHorizontally: R,
    getElement: W
  }, _e = Yg();
  va("click", Mu.body, T, !0);
  var F = (B) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(B), (ee = e.onkeydown) == null || ee.call(e, B);
  };
  Ue(
    _e,
    (B, ee) => ({
      class: B,
      style: ee,
      role: "dialog",
      ...S,
      onkeydown: F
    }),
    [
      () => Pe({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(x).map(([B, ee]) => `${B}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var V = me(_e);
  return Se(V, () => e.children ?? pe), Ee(_e, (B) => I = B, () => I), De(_e, (B, ee) => q == null ? void 0 : q(B, ee), n), L(t, _e), Te(Ae);
}
function Jo(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Qg(t, e) {
  xe(e, !0);
  const { closest: n } = Na;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ ve(void 0), v = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  ae("SMUI:menu-surface:mount", (C) => {
    s(v) || K(v, C, !0);
  });
  const m = he("SMUI:list:mount");
  ae("SMUI:list:mount", (C) => {
    s(f) || K(f, C, !0), m && m(C);
  });
  const h = he("SMUI:menu:mount"), g = he("SMUI:menu:unmount");
  it(() => (K(
    d,
    new zg({
      addClassToElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, A);
      },
      removeClassFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, A);
      },
      addAttributeToElementAtIndex: (C, A, M) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, A, M);
      },
      removeAttributeFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, A);
      },
      getAttributeFromElementAtIndex: (C, A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, A);
      },
      elementContainsClass: (C, A) => C.classList.contains(A),
      closeSurface: (C) => {
        var A;
        u() || ((A = s(v)) == null || A.closeProgrammatic(C), Je(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((A) => A.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Je(x(), "SMUIMenuSelected", {
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
        return !!n(s(f).getOrderedList()[C].element, `.${Di.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const A = s(f).getOrderedList(), M = n(A[C].element, `.${Di.MENU_SELECTION_GROUP}`), G = M == null ? void 0 : M.querySelector(`.${Di.MENU_SELECTED_LIST_ITEM}`);
        return G ? A.map((k) => k.element).indexOf(G) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var C;
    g && s(d) && g(s(d)), (C = s(d)) == null || C.destroy();
  }));
  function b(C) {
    s(d) && s(d).handleKeydown(C);
  }
  function y() {
    return a();
  }
  function S(C) {
    a(C);
  }
  function I(C) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(C);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function x() {
    return c.getElement();
  }
  var w = {
    isOpen: y,
    setOpen: S,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: x
  };
  {
    let C = /* @__PURE__ */ fe(() => Pe({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      Zg(t, nt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(C);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (A) => {
            var M;
            b(A), (M = e.onkeydown) == null || M.call(e, A);
          },
          onSMUIMenuSurfaceOpened: (A) => {
            var M;
            s(d) && s(d).handleMenuSurfaceOpened(), (M = e.onSMUIMenuSurfaceOpened) == null || M.call(e, A);
          },
          onSMUIListAction: (A) => {
            var M;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[A.detail.index].element), (M = e.onSMUIListAction) == null || M.call(e, A);
          },
          get open() {
            return a();
          },
          set open(A) {
            a(A);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(A) {
            o(A);
          },
          children: (A, M) => {
            var G = re(), k = Q(G);
            Se(k, () => e.children ?? pe), L(A, G);
          },
          $$slots: { default: !0 }
        }
      )),
      (A) => c = A,
      () => c
    );
  }
  return Te(w);
}
function Jg(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Na;
  let i = he("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), v = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), h = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), y = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => he("SMUI:list:wrapFocus") ?? !1), I = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), x = p(e, "radioList", 3, !1), w = p(e, "checkList", 3, !1), C = p(e, "hasTypeahead", 3, !1), A = p(e, "component", 3, Fr), M = p(e, "tag", 3, i ? "nav" : "ul"), G = /* @__PURE__ */ Xe(e, [
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
  ]), k, j = /* @__PURE__ */ ve(void 0), O = [], T = he("SMUI:list:role");
  const H = /* @__PURE__ */ new WeakMap();
  let U = he("SMUI:dialog:selection"), z = he("SMUI:addLayoutListener"), J;
  ae("SMUI:list:nonInteractive", u()), ae("SMUI:separator:context", "list"), T || (I() ? (T = "listbox", ae("SMUI:list:item:role", "option")) : x() ? (T = "radiogroup", ae("SMUI:list:item:role", "radio")) : w() ? (T = "group", ae("SMUI:list:item:role", "checkbox")) : (T = "list", ae("SMUI:list:item:role", void 0))), Ce(() => {
    s(j) && s(j).setVerticalOrientation(y());
  }), Ce(() => {
    s(j) && s(j).setWrapFocus(S());
  }), Ce(() => {
    s(j) && s(j).setHasTypeahead(C());
  }), Ce(() => {
    s(j) && s(j).setSingleSelection(I());
  }), Ce(() => {
    s(j) && s(j).setDisabledItemsFocusable(_());
  }), Ce(() => {
    s(j) && I() && N() !== E() && s(j).setSelectedIndex(E());
  }), z && (J = z(je)), ae("SMUI:list:item:mount", (se) => {
    O.push(se), H.set(se.element, se), I() && se.selected && E(Le(se.element));
  }), ae("SMUI:list:item:unmount", (se) => {
    const ye = (se && O.findIndex((Y) => Y === se)) ?? -1;
    ye !== -1 && (O.splice(ye, 1), H.delete(se.element));
  });
  const P = he("SMUI:list:mount"), R = he("SMUI:list:unmount");
  it(() => {
    K(
      j,
      new Gg({
        addClassForElementIndex: Z,
        focusItemAtIndex: de,
        getAttributeForElementIndex: (ye, Y) => {
          var te;
          return ((te = B()[ye]) == null ? void 0 : te.getAttr(Y)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((ye) => ye.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Me,
        hasCheckboxAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ye) => {
          const Y = B()[ye];
          return ((Y == null ? void 0 : Y.hasCheckbox) && Y.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && Oe() !== document.activeElement && Oe().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === Oe(),
        listItemAtIndexHasClass: ee,
        notifyAction: (ye) => {
          E(ye), k != null && Je(Oe(), "SMUIListAction", { index: ye });
        },
        notifySelectionChange: (ye) => {
          k != null && Je(Oe(), "SMUIListSelectionChange", { changedIndices: ye });
        },
        removeClassForElementIndex: ce,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ye, Y) => {
          B()[ye].checked = Y;
        },
        setTabIndexForListItemChildren: (ye, Y) => {
          const te = B()[ye];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (dt) => {
            dt.setAttribute("tabindex", Y);
          });
        }
      }),
      !0
    );
    const se = {
      get element() {
        return Oe();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ye, Y) {
        if (!s(j))
          throw new Error("Instance is undefined.");
        return s(j).typeaheadMatchItem(
          ye,
          Y,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: de,
      addClassForElementIndex: Z,
      removeClassForElementIndex: ce,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: $,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Me
    };
    return P && P(se), s(j).init(), s(j).layout(), () => {
      var ye;
      R && R(se), (ye = s(j)) == null || ye.destroy();
    };
  }), Tn(() => {
    J && J();
  });
  function W(se) {
    s(j) && se.target && s(j).handleKeydown(se, se.target.classList.contains("mdc-deprecated-list-item"), Le(se.target));
  }
  function Ae(se) {
    s(j) && se.target && s(j).handleFocusIn(Le(se.target));
  }
  function _e(se) {
    s(j) && se.target && s(j).handleFocusOut(Le(se.target));
  }
  function F(se) {
    s(j) && se.target && s(j).handleClick(Le(se.target), !r(se.target, 'input[type="checkbox"], input[type="radio"]'), se);
  }
  function V(se) {
    if (x() || w()) {
      const ye = Le(se.target);
      if (ye !== -1) {
        const Y = B()[ye];
        Y && (x() && !Y.checked || w()) && (r(se.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Y.checked = !Y.checked), Y.activateRipple(), window.requestAnimationFrame(() => {
          Y.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return k == null ? [] : [...Oe().children].map((se) => H.get(se)).filter((se) => se && se._smui_list_item_accessor);
  }
  function ee(se, ye) {
    const Y = B()[se];
    return (Y && Y.hasClass(ye)) ?? !1;
  }
  function Z(se, ye) {
    const Y = B()[se];
    Y && Y.addClass(ye);
  }
  function ce(se, ye) {
    const Y = B()[se];
    Y && Y.removeClass(ye);
  }
  function we(se, ye, Y) {
    const te = B()[se];
    te && te.addAttr(ye, Y);
  }
  function $(se, ye) {
    const Y = B()[se];
    Y && Y.removeAttr(ye);
  }
  function ie(se, ye) {
    const Y = B()[se];
    return Y ? Y.getAttr(ye) : null;
  }
  function Me(se) {
    const ye = B()[se];
    return (ye && ye.getPrimaryText()) ?? "";
  }
  function Le(se) {
    const ye = n(se, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ye && r(ye, ".mdc-deprecated-list-item") ? B().map((Y) => Y == null ? void 0 : Y.element).indexOf(ye) : -1;
  }
  function je() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).layout();
  }
  function Ke(se, ye) {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).setEnabled(se, ye);
  }
  function Be() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).isTypeaheadInProgress();
  }
  function N() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getSelectedIndex();
  }
  function X() {
    if (!s(j))
      throw new Error("Instance is undefined.");
    return s(j).getFocusedItemIndex();
  }
  function de(se) {
    const ye = B()[se];
    ye && "focus" in ye.element && ye.element.focus();
  }
  function Oe() {
    return k.getElement();
  }
  var Fe = {
    layout: je,
    setEnabled: Ke,
    getTypeaheadInProgress: Be,
    getSelectedIndex: N,
    getFocusedItemIndex: X,
    focusItemAtIndex: de,
    getElement: Oe
  }, ct = re(), pt = Q(ct);
  {
    let se = /* @__PURE__ */ fe(() => Pe({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [o()]: !0
    }));
    pr(pt, A, (ye, Y) => {
      Ee(
        Y(ye, nt(
          {
            get tag() {
              return M();
            },
            get use() {
              return a();
            },
            get class() {
              return s(se);
            },
            get role() {
              return T;
            }
          },
          () => G,
          {
            onkeydown: (te) => {
              var Ne;
              W(te), (Ne = e.onkeydown) == null || Ne.call(e, te);
            },
            onfocusin: (te) => {
              var Ne;
              Ae(te), (Ne = e.onfocusin) == null || Ne.call(e, te);
            },
            onfocusout: (te) => {
              var Ne;
              _e(te), (Ne = e.onfocusout) == null || Ne.call(e, te);
            },
            onclick: (te) => {
              var Ne;
              F(te), (Ne = e.onclick) == null || Ne.call(e, te);
            },
            onSMUIAction: (te) => {
              var Ne;
              V(te), (Ne = e.onSMUIAction) == null || Ne.call(e, te);
            },
            children: (te, Ne) => {
              var dt = re(), bt = Q(dt);
              Se(bt, () => e.children ?? pe), L(te, dt);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => k = te,
        () => k
      );
    });
  }
  return L(t, ct), Te(Fe);
}
let $g = 0;
var ep = /* @__PURE__ */ be('<span class="mdc-deprecated-list-item__ripple"></span>'), tp = /* @__PURE__ */ be("<!><!>", 1);
function np(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = he("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => he("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), v = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : he("SMUI:list:item:role")), m = p(e, "selected", 15, !1), h = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), y = p(e, "inputId", 19, () => "SMUI-form-field-list-" + $g++), S = p(e, "component", 3, Fr), I = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Xe(e, [
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
  ae("SMUI:list:nonInteractive", void 0), ae("SMUI:list:item:role", void 0);
  let E, x = ue({}), w = ue({}), C = ue({}), A = /* @__PURE__ */ ve(void 0), M = /* @__PURE__ */ ve(void 0);
  const G = /* @__PURE__ */ fe(() => r(b()) ? !l() && !h() && (m() || s(A) && s(A).checked) ? 0 : -1 : b());
  ae("SMUI:generic:input:props", { id: y() }), ae("SMUI:separator:context", void 0), ae("SMUI:generic:input:mount", (Z) => {
    ("_smui_checkbox_accessor" in Z || "_smui_radio_accessor" in Z) && K(A, Z, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    K(A, void 0);
  });
  const k = he("SMUI:list:item:mount"), j = he("SMUI:list:item:unmount");
  it(() => {
    if (!m() && !l()) {
      let ce = !0, we = E.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          ce = !1;
          break;
        }
      ce && K(M, window.requestAnimationFrame(() => R(we)), !0);
    }
    const Z = {
      _smui_list_item_accessor: !0,
      get element() {
        return F();
      },
      get selected() {
        return m();
      },
      set selected(ce) {
        m(ce);
      },
      hasClass: O,
      addClass: T,
      removeClass: H,
      getAttr: z,
      addAttr: J,
      removeAttr: P,
      getPrimaryText: _e,
      // For inputs within item.
      get checked() {
        return (s(A) && s(A).checked) ?? !1;
      },
      set checked(ce) {
        s(A) && (s(A).checked = !!ce);
      },
      get hasCheckbox() {
        return !!(s(A) && "_smui_checkbox_accessor" in s(A));
      },
      get hasRadio() {
        return !!(s(A) && "_smui_radio_accessor" in s(A));
      },
      activateRipple() {
        s(A) && s(A).activateRipple();
      },
      deactivateRipple() {
        s(A) && s(A).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ae,
      get tabindex() {
        return s(G);
      },
      set tabindex(ce) {
        b(ce);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(ce) {
        v(ce);
      }
    };
    return k && k(Z), () => {
      j && j(Z);
    };
  }), Tn(() => {
    s(M) && window.cancelAnimationFrame(s(M));
  });
  function O(Z) {
    return Z in x ? x[Z] : F().classList.contains(Z);
  }
  function T(Z) {
    x[Z] || (x[Z] = !0);
  }
  function H(Z) {
    (!(Z in x) || x[Z]) && (x[Z] = !1);
  }
  function U(Z, ce) {
    w[Z] != ce && (ce === "" || ce == null ? delete w[Z] : w[Z] = ce);
  }
  function z(Z) {
    return Z in C ? C[Z] ?? null : F().getAttribute(Z);
  }
  function J(Z, ce) {
    C[Z] !== ce && (C[Z] = ce);
  }
  function P(Z) {
    (!(Z in C) || C[Z] != null) && (C[Z] = void 0);
  }
  function R(Z) {
    let ce = !0;
    for (; Z.nextElementSibling; )
      if (Z = Z.nextElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item")) {
        const we = Z.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          ce = !1;
          break;
        }
      }
    ce && b(0);
  }
  function W(Z) {
    const ce = Z.key === "Enter", we = Z.key === "Space";
    (ce || we) && Ae(Z);
  }
  function Ae(Z) {
    h() || Je(F(), "SMUIAction", Z);
  }
  function _e() {
    const Z = F(), ce = Z.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ce)
      return ce.textContent ?? "";
    const we = Z.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : Z.textContent ?? "";
  }
  function F() {
    return E.getElement();
  }
  var V = { action: Ae, getPrimaryText: _e, getElement: F }, B = re(), ee = Q(B);
  {
    let Z = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          zt,
          {
            ripple: !s(A),
            unbounded: !1,
            color: (v() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: T,
            removeClass: H,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), ce = /* @__PURE__ */ fe(() => Pe({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...x,
      [o()]: !0
    })), we = /* @__PURE__ */ fe(() => Object.entries(w).map(([ie, Me]) => `${ie}: ${Me};`).concat([u()]).join(" ")), $ = /* @__PURE__ */ fe(() => g() || void 0);
    pr(ee, S, (ie, Me) => {
      Ee(
        Me(ie, nt(
          {
            get tag() {
              return I();
            },
            get use() {
              return s(Z);
            },
            get class() {
              return s(ce);
            },
            get style() {
              return s(we);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(A) && s(A).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s($);
            },
            get tabindex() {
              return s(G);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (Le) => {
              var je;
              Ae(Le), (je = e.onclick) == null || je.call(e, Le);
            },
            onkeydown: (Le) => {
              var je;
              W(Le), (je = e.onkeydown) == null || je.call(e, Le);
            },
            children: (Le, je) => {
              var Ke = tp(), Be = Q(Ke);
              {
                var N = (de) => {
                  var Oe = ep();
                  L(de, Oe);
                };
                oe(Be, (de) => {
                  c() && de(N);
                });
              }
              var X = Ie(Be);
              Se(X, () => e.children ?? pe), L(Le, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return L(t, B), Te(V);
}
let rp = 0;
var ip = /* @__PURE__ */ be("<div><!></div>");
function ap(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + rp++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ ve(void 0), d = ue({}), v = ue({}), f = /* @__PURE__ */ ve(void 0);
  const m = he("SMUI:select:helper-text:id"), h = he("SMUI:select:helper-text:mount"), g = he("SMUI:select:helper-text:unmount");
  it(() => (K(
    c,
    new Kg({
      addClass: y,
      removeClass: S,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: E,
      setContent: (k) => {
        K(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(c)), s(c).init(), () => {
    var k;
    g && s(c) && g(s(c)), (k = s(c)) == null || k.destroy();
  }));
  function b(k) {
    return k in d ? d[k] : x().classList.contains(k);
  }
  function y(k) {
    d[k] || (d[k] = !0);
  }
  function S(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function I(k) {
    return k in v ? v[k] ?? null : x().getAttribute(k);
  }
  function _(k, j) {
    v[k] !== j && (v[k] = j);
  }
  function E(k) {
    (!(k in v) || v[k] != null) && (v[k] = void 0);
  }
  function x() {
    return l;
  }
  var w = { getElement: x }, C = ip();
  Ue(
    C,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...u
    }),
    [
      () => Pe({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var A = me(C);
  {
    var M = (k) => {
      var j = re(), O = Q(j);
      Se(O, () => e.children ?? pe), L(k, j);
    }, G = (k) => {
      var j = Rt();
      Re(() => st(j, s(f))), L(k, j);
    };
    oe(A, (k) => {
      s(f) == null ? k(M) : k(G, !1);
    });
  }
  return Ee(C, (k) => l = k, () => l), De(C, (k, j) => q == null ? void 0 : q(k, j), n), L(t, C), Te(w);
}
let op = 0;
var sp = /* @__PURE__ */ be("<input/>"), lp = /* @__PURE__ */ be('<span class="mdc-select__ripple"></span>'), up = /* @__PURE__ */ be('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function cp(t, e) {
  xe(e, !0);
  const n = () => Xn(Oe, "$selectedTextStore", r), [r, i] = br();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), v = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (D) => D), y = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), I = p(e, "updateInvalid", 19, () => o(S())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + op++), x = p(e, "hiddenInput", 3, !1), w = p(e, "withLeadingIcon", 3, a), C = p(e, "anchor$use", 19, () => []), A = p(e, "anchor$class", 3, ""), M = p(e, "selectedTextContainer$use", 19, () => []), G = p(e, "selectedTextContainer$class", 3, ""), k = p(e, "selectedText$use", 19, () => []), j = p(e, "selectedText$class", 3, ""), O = p(e, "dropdownIcon$use", 19, () => []), T = p(e, "dropdownIcon$class", 3, ""), H = p(e, "menu$class", 3, ""), U = /* @__PURE__ */ Xe(e, [
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
  const z = o(S());
  o(S()) && S(!1);
  let J, P = /* @__PURE__ */ ve(void 0), R = ue({}), W = ue({}), Ae, _e = ue({}), F = /* @__PURE__ */ ve(-1);
  const V = /* @__PURE__ */ fe(() => U.menu$id ?? E() + "-menu");
  let B = /* @__PURE__ */ ve(void 0), ee = he("SMUI:addLayoutListener"), Z, ce = /* @__PURE__ */ ve(!1), we = ue({}), $ = /* @__PURE__ */ ve(void 0), ie = /* @__PURE__ */ ve(void 0), Me = /* @__PURE__ */ ve(!1), Le, je = he("SMUI:select:context"), Ke, Be, N, X, de;
  ae("SMUI:list:role", ""), ae("SMUI:list:nav", !1);
  const Oe = en("");
  ae("SMUI:select:selectedText", Oe);
  const Fe = en(g());
  Ce(() => {
    ci(Fe, g());
  }), ae("SMUI:select:value", Fe), Ce(() => {
    s(P) && s(P).getValue() !== b()(g()) && s(P).setValue(b()(g()));
  });
  let ct = s(F);
  Ce(() => {
    if (ct !== s(F))
      if (ct = s(F), s(P))
        s(P).setSelectedIndex(
          s(F),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = Ut();
        g() !== D[s(F)] && g(D[s(F)]);
      }
  }), Ce(() => {
    s(P) && s(P).getDisabled() !== v() && s(P).setDisabled(v());
  }), Ce(() => {
    s(P) && y() && s(P).isValid() !== !S() && (I() ? S(!s(P).isValid()) : s(P).setValid(!S()));
  }), Ce(() => {
    s(P) && s(P).getRequired() !== _() && s(P).setRequired(_());
  }), ee && (Z = ee(pi)), ae("SMUI:select:leading-icon:mount", (D) => {
    Ke = D;
  }), ae("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), ae("SMUI:list:mount", (D) => {
    Le = D;
  }), ae("SMUI:select:helper-text:id", (D) => {
    K(B, D, !0);
  }), ae("SMUI:select:helper-text:mount", (D) => {
    Be = D;
  }), ae("SMUI:select:helper-text:unmount", () => {
    K(B, void 0), Be = void 0;
  }), it(() => (K(
    P,
    new Xg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          ci(Oe, D);
        },
        isSelectAnchorFocused: () => document.activeElement === Ae,
        getSelectAnchorAttr: dt,
        setSelectAnchorAttr: bt,
        removeSelectAnchorAttr: mt,
        addMenuClass: te,
        removeMenuClass: Ne,
        openMenu: () => {
          K(ce, !0);
        },
        closeMenu: () => {
          K(ce, !1);
        },
        getAnchorElement: () => Ae,
        setMenuAnchorElement: (D) => {
          K($, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          K(ie, D, !0);
        },
        setMenuWrapFocus: (D) => {
          K(Me, D, !0);
        },
        getSelectedIndex: () => s(F),
        setSelectedIndex: (D) => {
          ct = D, K(F, D, !0), g(Ut()[s(F)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Ut().map(b()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, ge) => Le.typeaheadMatchItem(D, ge),
        // getCommonAdapterMethods
        addClass: se,
        removeClass: ye,
        hasClass: pt,
        setRippleCenter: (D) => X && X.setRippleCenter(D),
        activateBottomLine: () => X && X.activate(),
        deactivateBottomLine: () => X && X.deactivate(),
        notifyChange: (D) => {
          var ge;
          y(!0), I() && S(!((ge = s(P)) != null && ge.isValid())), Je(kn(), "SMUISelectChange", { value: g(), index: s(F) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!de,
        notchOutline: (D) => de && de.notch(D),
        closeOutline: () => de && de.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!N,
        floatLabel: (D) => N && N.float(D),
        getLabelWidth: () => N ? N.getWidth() : 0,
        setLabelRequired: (D) => N && N.setRequired(D)
      },
      {
        get helperText() {
          return Be;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), K(F, Ut().indexOf(g()), !0), s(P).init(), yt(z), () => {
    var D;
    (D = s(P)) == null || D.destroy();
  })), Tn(() => {
    Z && Z();
  });
  function pt(D) {
    return D in R ? R[D] : kn().classList.contains(D);
  }
  function se(D) {
    R[D] || (R[D] = !0);
  }
  function ye(D) {
    (!(D in R) || R[D]) && (R[D] = !1);
  }
  function Y(D, ge) {
    W[D] != ge && (ge === "" || ge == null ? delete W[D] : W[D] = ge);
  }
  function te(D) {
    we[D] || (we[D] = !0);
  }
  function Ne(D) {
    (!(D in we) || we[D]) && (we[D] = !1);
  }
  function dt(D) {
    return D in _e ? _e[D] ?? null : kn().getAttribute(D);
  }
  function bt(D, ge) {
    _e[D] !== ge && (_e[D] = ge);
  }
  function mt(D) {
    (!(D in _e) || _e[D] != null) && (_e[D] = void 0);
  }
  function Ut() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function _r(D) {
    const ge = D.currentTarget.getBoundingClientRect();
    return (ht(D) ? D.touches[0].clientX : D.clientX) - ge.left;
  }
  function ht(D) {
    return "touches" in D;
  }
  function Mt() {
    if (s(P) == null)
      throw new Error("Instance is undefined.");
    return s(P).getUseDefaultValidation();
  }
  function yt(D) {
    var ge;
    (ge = s(P)) == null || ge.setUseDefaultValidation(D);
  }
  function wn() {
    Ae.focus();
  }
  function pi() {
    var D;
    (D = s(P)) == null || D.layout();
  }
  function kn() {
    return J;
  }
  var qe = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: yt,
    focus: wn,
    layout: pi,
    getElement: kn
  }, Qe = up(), $e = Q(Qe);
  Ue($e, (D, ge, ft) => ({ class: D, style: ge, ...ft }), [
    () => Pe({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(ce),
      "mdc-data-table__pagination-rows-per-page-select": je === "data-table:pagination",
      ...R,
      [l()]: !0
    }),
    () => Object.entries(W).map(([D, ge]) => `${D}: ${ge};`).concat([c()]).join(" "),
    () => Zn(U, [
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
  var Dt = me($e);
  {
    var vn = (D) => {
      var ge = sp();
      Ue(
        ge,
        (ft) => ({
          type: "hidden",
          required: _(),
          disabled: v(),
          value: g(),
          ...ft
        }),
        [() => rt(U, "input$")],
        void 0,
        void 0,
        !0
      ), L(D, ge);
    };
    oe(Dt, (D) => {
      x() && D(vn);
    });
  }
  var at = Ie(Dt, 2), ut = (D) => {
    var ge;
    Ae.focus(), s(P) && s(P).handleClick(_r(D)), (ge = e.anchor$onclick) == null || ge.call(e, D);
  }, At = (D) => {
    var ge;
    s(P) && s(P).handleKeydown(D), (ge = e.onkeydown) == null || ge.call(e, D);
  }, et = (D) => {
    var ge;
    s(P) && s(P).handleBlur(), Je(kn(), "blur", D), (ge = e.anchor$onblur) == null || ge.call(e, D);
  }, wt = (D) => {
    var ge;
    s(P) && s(P).handleFocus(), Je(kn(), "focus", D), (ge = e.anchor$onfocus) == null || ge.call(e, D);
  };
  Ue(
    at,
    (D, ge) => ({
      class: D,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": s(V),
      "aria-expanded": s(ce) ? "true" : "false",
      "aria-describedby": s(B),
      role: "combobox",
      tabindex: "0",
      ..._e,
      ...ge,
      onclick: ut,
      onkeydown: At,
      onblur: et,
      onfocus: wt
    }),
    [
      () => Pe({ "mdc-select__anchor": !0, [A()]: !0 }),
      () => rt(U, "anchor$")
    ]
  );
  var Ln = me(at);
  {
    var Lt = (D) => {
      var ge = lp();
      L(D, ge);
    };
    oe(Ln, (D) => {
      f() === "filled" && D(Lt);
    });
  }
  var _t = Ie(Ln, 2);
  {
    var Pt = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => E() + "-smui-label"), ft = /* @__PURE__ */ fe(() => n() !== ""), Ot = /* @__PURE__ */ fe(() => rt(U, "label$"));
        Ee(
          go(D, nt(
            {
              get id() {
                return s(ge);
              },
              get floatAbove() {
                return s(ft);
              },
              get required() {
                return _();
              }
            },
            () => s(Ot),
            {
              children: (er, tr) => {
                var na = re(), bi = Q(na);
                {
                  var Wr = (qr) => {
                  }, Uo = (qr) => {
                    var Ua = re(), ra = Q(Ua);
                    {
                      var tl = (yr) => {
                        var zr = Rt();
                        Re(() => st(zr, h())), L(yr, zr);
                      }, ka = (yr) => {
                        var zr = re(), ko = Q(zr);
                        Se(ko, h), L(yr, zr);
                      };
                      oe(
                        ra,
                        (yr) => {
                          typeof h() == "string" ? yr(tl) : yr(ka, !1);
                        },
                        !0
                      );
                    }
                    L(qr, Ua);
                  };
                  oe(bi, (qr) => {
                    h() == null ? qr(Wr) : qr(Uo, !1);
                  });
                }
                L(er, na);
              },
              $$slots: { default: !0 }
            }
          )),
          (er) => N = er,
          () => N
        );
      }
    };
    oe(_t, (D) => {
      f() !== "outlined" && !m() && h() != null && D(Pt);
    });
  }
  var on = Ie(_t, 2);
  {
    var kt = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => m() || h() == null), ft = /* @__PURE__ */ fe(() => rt(U, "outline$"));
        Ee(
          Fc(D, nt(
            {
              get noLabel() {
                return s(ge);
              }
            },
            () => s(ft),
            {
              children: (Ot, er) => {
                var tr = re(), na = Q(tr);
                {
                  var bi = (Wr) => {
                    {
                      let Uo = /* @__PURE__ */ fe(() => E() + "-smui-label"), qr = /* @__PURE__ */ fe(() => n() !== ""), Ua = /* @__PURE__ */ fe(() => rt(U, "label$"));
                      Ee(
                        go(Wr, nt(
                          {
                            get id() {
                              return s(Uo);
                            },
                            get floatAbove() {
                              return s(qr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Ua),
                          {
                            children: (ra, tl) => {
                              var ka = re(), yr = Q(ka);
                              {
                                var zr = (ia) => {
                                }, ko = (ia) => {
                                  var nl = re(), Id = Q(nl);
                                  {
                                    var Ed = (_i) => {
                                      var aa = Rt();
                                      Re(() => st(aa, h())), L(_i, aa);
                                    }, Sd = (_i) => {
                                      var aa = re(), Ad = Q(aa);
                                      Se(Ad, h), L(_i, aa);
                                    };
                                    oe(
                                      Id,
                                      (_i) => {
                                        typeof h() == "string" ? _i(Ed) : _i(Sd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(ia, nl);
                                };
                                oe(yr, (ia) => {
                                  h() == null ? ia(zr) : ia(ko, !1);
                                });
                              }
                              L(ra, ka);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ra) => N = ra,
                        () => N
                      );
                    }
                  };
                  oe(na, (Wr) => {
                    !m() && h() != null && Wr(bi);
                  });
                }
                L(Ot, tr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => de = Ot,
          () => de
        );
      }
    };
    oe(on, (D) => {
      f() === "outlined" && D(kt);
    });
  }
  var sn = Ie(on, 2);
  Se(sn, () => e.leadingIcon ?? pe);
  var Kt = Ie(sn, 2);
  Ue(Kt, (D, ge) => ({ class: D, ...ge }), [
    () => Pe({
      "mdc-select__selected-text-container": !0,
      [G()]: !0
    }),
    () => rt(U, "selectedTextContainer$")
  ]);
  var Bn = me(Kt);
  Ue(
    Bn,
    (D, ge) => ({
      id: E() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ...ge
    }),
    [
      () => Pe({
        "mdc-select__selected-text": !0,
        [j()]: !0
      }),
      () => rt(U, "selectedText$")
    ]
  );
  var Gr = me(Bn);
  De(Bn, (D, ge) => q == null ? void 0 : q(D, ge), k), De(Kt, (D, ge) => q == null ? void 0 : q(D, ge), M);
  var ln = Ie(Kt, 2);
  Ue(ln, (D, ge) => ({ class: D, ...ge }), [
    () => Pe({
      "mdc-select__dropdown-icon": !0,
      [T()]: !0
    }),
    () => rt(U, "dropdownIcon$")
  ]), De(ln, (D, ge) => q == null ? void 0 : q(D, ge), O);
  var jt = Ie(ln, 2);
  {
    var Fn = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => rt(U, "ripple$"));
        Ee(Bc(D, nt(() => s(ge))), (ft) => X = ft, () => X);
      }
    };
    oe(jt, (D) => {
      f() !== "outlined" && d() && D(Fn);
    });
  }
  Ee(at, (D) => Ae = D, () => Ae), De(at, (D, ge) => q == null ? void 0 : q(D, ge), C);
  var jr = Ie(at, 2);
  {
    let D = /* @__PURE__ */ fe(() => Pe({
      "mdc-select__menu": !0,
      ...we,
      [H()]: !0
    })), ge = /* @__PURE__ */ fe(() => rt(U, "menu$"));
    Qg(jr, nt(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(V);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s($);
        },
        get anchorCorner() {
          return s(ie);
        }
      },
      () => s(ge),
      {
        onSMUIMenuSelected: (ft) => {
          var Ot;
          s(P) && s(P).handleMenuItemAction(ft.detail.index), (Ot = e.onSMUIMenuSelected) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosing: (ft) => {
          var Ot;
          s(P) && s(P).handleMenuClosing(), (Ot = e.onSMUIMenuSurfaceClosing) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosed: (ft) => {
          var Ot;
          s(P) && s(P).handleMenuClosed(), (Ot = e.onSMUIMenuSurfaceClosed) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceOpened: (ft) => {
          var Ot;
          s(P) && s(P).handleMenuOpened(), (Ot = e.onSMUIMenuSurfaceOpened) == null || Ot.call(e, ft);
        },
        get open() {
          return s(ce);
        },
        set open(ft) {
          K(ce, ft, !0);
        },
        children: (ft, Ot) => {
          {
            let er = /* @__PURE__ */ fe(() => rt(U, "list$"));
            Jg(ft, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Me);
                }
              },
              () => s(er),
              {
                get selectedIndex() {
                  return s(F);
                },
                set selectedIndex(tr) {
                  K(F, tr, !0);
                },
                children: (tr, na) => {
                  var bi = re(), Wr = Q(bi);
                  Se(Wr, () => e.children ?? pe), L(tr, bi);
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
  Ee($e, (D) => J = D, () => J), De($e, (D, ge) => zt == null ? void 0 : zt(D, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: se,
    removeClass: ye,
    addStyle: Y
  })), De($e, (D, ge) => Jo == null ? void 0 : Jo(D, ge), () => ({ addClass: se, removeClass: ye })), De($e, (D, ge) => q == null ? void 0 : q(D, ge), u);
  var Ho = Ie($e, 2);
  {
    var _d = (D) => {
      {
        let ge = /* @__PURE__ */ fe(() => rt(U, "helperText$"));
        ap(D, nt(() => s(ge), {
          children: (ft, Ot) => {
            var er = re(), tr = Q(er);
            Se(tr, () => e.helperText ?? pe), L(ft, er);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(Ho, (D) => {
      e.helperText && D(_d);
    });
  }
  Re(() => st(Gr, n())), L(t, Qe);
  var yd = Te(qe);
  return i(), yd;
}
function dp(t, e) {
  xe(e, !0);
  const n = () => Xn(d, "$selectedValue", r), [r, i] = br();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), u = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = he("SMUI:select:selectedText"), d = he("SMUI:select:value");
  ae("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ fe(() => o() != null && o() !== "" && n() === o());
  it(f), Tn(f);
  function f() {
    s(v) && l && ci(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Ee(
    np(t, nt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return o();
        },
        get value() {
          return o();
        },
        get selected() {
          return s(v);
        }
      },
      () => u,
      {
        children: (b, y) => {
          var S = re(), I = Q(S);
          Se(I, () => e.children ?? pe), L(b, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var g = Te(h);
  return i(), g;
}
function fp(t, e) {
  xe(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let o = p(e, "variant", 3, "standard"), u = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  cp(t, {
    get disabled() {
      return l();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return o();
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
    children: (d, v) => {
      var f = re(), m = Q(f);
      Pn(m, 17, n, wi, (h, g, b) => {
        {
          let y = /* @__PURE__ */ fe(() => c(b));
          dp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(g).value;
            },
            children: (S, I) => {
              var _ = Rt();
              Re(() => st(_, s(g).label)), L(S, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
}
const hp = en([]);
hp.subscribe;
ue({ freeze: !1 });
const Bt = [];
for (let t = 0; t < 256; ++t)
  Bt.push((t + 256).toString(16).slice(1));
function vp(t, e = 0) {
  return (Bt[t[e + 0]] + Bt[t[e + 1]] + Bt[t[e + 2]] + Bt[t[e + 3]] + "-" + Bt[t[e + 4]] + Bt[t[e + 5]] + "-" + Bt[t[e + 6]] + Bt[t[e + 7]] + "-" + Bt[t[e + 8]] + Bt[t[e + 9]] + "-" + Bt[t[e + 10]] + Bt[t[e + 11]] + Bt[t[e + 12]] + Bt[t[e + 13]] + Bt[t[e + 14]] + Bt[t[e + 15]]).toLowerCase();
}
let $o;
const mp = new Uint8Array(16);
function gp() {
  if (!$o) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $o = crypto.getRandomValues.bind(crypto);
  }
  return $o(mp);
}
const pp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ql = { randomUUID: pp };
function bp(t, e, n) {
  var i;
  if (Ql.randomUUID && !e && !t)
    return Ql.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? gp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return vp(r);
}
var _p = /* @__PURE__ */ be('<span class="oscd-icon"><!></span>');
function Jn(t, e) {
  var n = _p(), r = me(n);
  Se(r, () => e.children ?? pe), L(t, n);
}
var yp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Ip(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = yp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Ep = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Wc(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Ep();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Sp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Ap(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Sp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Cp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function xp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Cp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Tp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function wp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Tp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Lp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Op(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Lp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Rp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Mp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Rp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Dp = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Pp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Dp();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
Zd();
var Np = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Hp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = Np();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
var Up = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function kp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Jn(t, {
    children: (r, i) => {
      var a = Up();
      Re(() => Gt(a, n())), L(r, a);
    }
  });
}
function Bp(t, e) {
  e(t.target.value);
}
var Fp = /* @__PURE__ */ be('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Vp(t, e) {
  xe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Fp(), a = me(i);
  a.__change = [Bp, r];
  var o = Ie(a, 2), u = me(o);
  Re(() => st(u, n())), Sa(a, r), L(t, i), Te();
}
dn(["change"]);
function Gp(t, e) {
  e(t.target.value);
}
var jp = /* @__PURE__ */ be('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Wp(t, e) {
  xe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = jp(), a = me(i);
  a.__change = [Gp, r];
  var o = Ie(a, 2), u = me(o);
  Re(() => st(u, n())), Sa(a, r), L(t, i), Te();
}
dn(["change"]);
function qp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var zp = /* @__PURE__ */ be('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function po(t, e) {
  xe(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1), u = p(e, "offset", 3, 8), l = p(e, "backgroundColor", 3, "#000"), c = p(e, "paddingY", 3, 6), d = p(e, "paddingX", 3, 10), v = p(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let m = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), g = /* @__PURE__ */ ve(null), b = /* @__PURE__ */ ve(null), y = /* @__PURE__ */ ve(!1), S = /* @__PURE__ */ ve(null), I = /* @__PURE__ */ ve(null);
  function _(T) {
    var W;
    if (!T || !T.trim().startsWith("var(")) return T;
    const H = T.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!H) return T;
    const U = H[1], z = (W = H[2]) == null ? void 0 : W.trim(), J = s(m) ? getComputedStyle(s(m)).getPropertyValue(U) : "", P = getComputedStyle(document.documentElement).getPropertyValue(U), R = (J || P).trim();
    return R || z || T;
  }
  function E() {
    !n() || o() || (s(S) && clearTimeout(s(S)), i() > 0 ? K(S, setTimeout(() => K(y, !0), i()), !0) : K(y, !0));
  }
  function x() {
    s(S) && clearTimeout(s(S)), K(y, !1);
  }
  function w() {
    E();
  }
  function C() {
    x();
  }
  function A() {
    E();
  }
  function M() {
    x();
  }
  function G() {
    if (!s(h) || !s(b) || !s(m) || o()) return;
    const T = s(m).getBoundingClientRect(), H = s(b).getBoundingClientRect();
    let U = 0, z = 0;
    const J = u();
    switch (r()) {
      case "top":
        U = T.top - H.height - J, z = T.left + T.width / 2 - H.width / 2;
        break;
      case "bottom":
        U = T.bottom + J, z = T.left + T.width / 2 - H.width / 2;
        break;
      case "left":
        U = T.top + T.height / 2 - H.height / 2, z = T.left - H.width - J;
        break;
      case "right":
        U = T.top + T.height / 2 - H.height / 2, z = T.right + J;
        break;
    }
    s(h).style.top = `${U + window.scrollY}px`, s(h).style.left = `${z + window.scrollX}px`;
  }
  function k() {
    var T;
    (T = s(I)) == null || T.disconnect(), K(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), K(h, null), K(b, null), K(g, null), s(S) && clearTimeout(s(S));
  }
  Tn(k), Ce(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        K(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), K(g, s(h).attachShadow({ mode: "open" }), !0);
        const T = document.createElement("style"), H = _(l()), U = _(v());
        T.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${H};
          --fg: ${U};
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
      `, s(g).appendChild(T), K(b, document.createElement("div"), !0), s(g).appendChild(s(b)), K(
          I,
          new MutationObserver(() => {
            s(y) && G();
          }),
          !0
        ), s(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", G());
    }
  }), Ce(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const T = s(h), H = setTimeout(
      () => {
        T && T.parentNode && T.parentNode.removeChild(T), s(h) === T && k();
      },
      a()
    );
    return () => clearTimeout(H);
  });
  var j = zp();
  j.__keydown = [qp, n, E, x];
  var O = me(j);
  Se(O, () => e.children ?? pe), Ee(j, (T) => K(m, T), () => s(m)), Re(() => {
    Rr(j, "aria-describedby", n() && !o() ? f : void 0), Rr(j, "aria-haspopup", n() ? "true" : void 0), Rr(j, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), va("mouseenter", j, w), va("mouseleave", j, C), va("focus", j, A), va("blur", j, M), L(t, j), Te();
}
dn(["keydown"]);
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
var ca = {
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
}, _n = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Jl = {
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
var Xp = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = _n.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Jl;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(ca.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(ca.DISABLED) : this.adapter.removeClass(ca.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, Jl.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = _n.TRANSITION_STATE_UNCHECKED, a = ca.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = _n.TRANSITION_STATE_INDETERMINATE, r = _n.TRANSITION_STATE_CHECKED, i = _n.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = _n.TRANSITION_STATE_INIT, a = _n.TRANSITION_STATE_CHECKED, o = _n.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, v = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : m;
        case o:
          return r === a ? l : c;
        case a:
          return r === o ? d : v;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(_n.ARIA_CHECKED_ATTR, _n.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(_n.ARIA_CHECKED_ATTR);
    }, e;
  }(Tt)
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
var mn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, On = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, da = {
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
var Kp = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return On;
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
      this.determinate = !this.adapter.hasClass(mn.INDETERMINATE_CLASS), this.adapter.addClass(mn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Ht(r), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(mn.INDETERMINATE_CLASS), this.adapter.setAttribute(On.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(On.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(On.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(mn.INDETERMINATE_CLASS), this.adapter.removeAttribute(On.ARIA_VALUENOW), this.adapter.removeAttribute(On.ARIA_VALUEMAX), this.adapter.removeAttribute(On.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(On.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(mn.CLOSED_CLASS), this.adapter.removeClass(mn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(On.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(mn.CLOSED_CLASS), this.adapter.setAttribute(On.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(mn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(mn.CLOSED_CLASS) && this.adapter.addClass(mn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(mn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(mn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Wg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(On.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * da.PRIMARY_HALF, i = n * da.PRIMARY_FULL, a = n * da.SECONDARY_QUARTER, o = n * da.SECONDARY_HALF, u = n * da.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Tt)
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
var ar = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $l = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Zr = {
  ARIA_SELECTED: $l.ARIA_SELECTED,
  ARIA_SORT: $l.ARIA_SORT
}, pn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(pn || (pn = {}));
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
var Yp = (
  /** @class */
  function(t) {
    We(e, t);
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
      return dc(this, void 0, void 0, function() {
        return Ws(this, function(n) {
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
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, ar.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Zr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Zr.ARIA_SORT), l = pn.NONE;
      u === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : u === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(ar.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ar.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Zr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Zr.ARIA_SELECTED, "false"));
    }, e;
  }(Tt)
), Zp = /* @__PURE__ */ be('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Qp = /* @__PURE__ */ be("<div><div><table><!></table></div> <!> <!></div>");
function Jp(t, e) {
  xe(e, !0);
  const n = () => Xn(j, "$progressClosed", r), [r, i] = br(), { closest: a } = Na;
  let o = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), v = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), y = p(e, "table$class", 3, ""), S = /* @__PURE__ */ Xe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E, x = /* @__PURE__ */ ve(void 0), w = /* @__PURE__ */ ve(void 0), C = ue({}), A = /* @__PURE__ */ ve(ue({ height: "auto", top: "initial" })), M = he("SMUI:addLayoutListener"), G, k = !1, j = en(!1), O = en(d());
  Ce(() => {
    ci(O, d());
  });
  let T = en(v());
  Ce(() => {
    ci(T, v());
  }), ae("SMUI:checkbox:context", "data-table"), ae("SMUI:linear-progress:context", "data-table"), ae("SMUI:linear-progress:closed", j), ae("SMUI:data-table:sortable", c()), ae("SMUI:data-table:sort", O), ae("SMUI:data-table:sortDirection", T), ae("SMUI:data-table:sortAscendingAriaLabel", f()), ae("SMUI:data-table:sortDescendingAriaLabel", m()), M && (G = M(_e));
  let H;
  Ce(() => {
    e.progress && s(_) && H !== n() && (H = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ae("SMUI:checkbox:mount", () => {
    s(_) && k && s(_).layout();
  }), ae("SMUI:data-table:header:mount", (N) => {
    K(x, N, !0);
  }), ae("SMUI:data-table:header:unmount", () => {
    K(x, void 0);
  }), ae("SMUI:data-table:body:mount", (N) => {
    K(w, N, !0);
  }), ae("SMUI:data-table:body:unmount", () => {
    K(w, void 0);
  }), it(() => (K(
    _,
    new Yp({
      addClass: z,
      removeClass: J,
      getHeaderCellElements: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.map((X) => X.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (N, X) => {
        var de;
        return ((de = s(x)) == null ? void 0 : de.orderedCells[N].getAttr(X)) ?? null;
      },
      setAttributeByHeaderCellIndex: (N, X, de) => {
        var Oe;
        (Oe = s(x)) == null || Oe.orderedCells[N].addAttr(X, de);
      },
      setClassNameByHeaderCellIndex: (N, X) => {
        var de;
        (de = s(x)) == null || de.orderedCells[N].addClass(X);
      },
      removeClassNameByHeaderCellIndex: (N, X) => {
        var de;
        (de = s(x)) == null || de.orderedCells[N].removeClass(X);
      },
      notifySortAction: (N) => {
        d(N.columnId), v(N.sortValue), Je(F(), "SMUIDataTableSorted", N);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const N = F().querySelector(".mdc-data-table__header-row");
        if (!N)
          throw new Error("MDCDataTable: Table header element not found.");
        return N.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (N) => {
        K(A, N, !0);
      },
      addClassAtRowIndex: (N, X) => {
        var de;
        (de = s(w)) == null || de.orderedRows[N].addClass(X);
      },
      getRowCount: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.length) ?? 0;
      },
      getRowElements: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.map((X) => X.element)) ?? [];
      },
      getRowIdAtIndex: (N) => {
        var X;
        return ((X = s(w)) == null ? void 0 : X.orderedRows[N].rowId) ?? null;
      },
      getRowIndexByChildElement: (N) => {
        var X;
        return ((X = s(w)) == null ? void 0 : X.orderedRows.map((de) => de.element).indexOf(a(N, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var N;
        return ((N = s(w)) == null ? void 0 : N.rows.filter((X) => X.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (N) => {
        var de;
        const X = (de = s(w)) == null ? void 0 : de.orderedRows[N].checkbox;
        return X ? X.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var X;
        const N = (X = s(x)) == null ? void 0 : X.checkbox;
        return N ? N.checked : !1;
      },
      isRowsSelectable: () => !!F().querySelector(".mdc-data-table__row-checkbox") || !!F().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (N) => {
        var de;
        const X = (de = s(w)) == null ? void 0 : de.orderedRows[N.rowIndex];
        X && Je(F(), "SMUIDataTableSelectionChanged", {
          row: X.element,
          rowId: X.rowId,
          rowIndex: N.rowIndex,
          selected: N.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), Je(F(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), Je(F(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (N) => Je(F(), "SMUIDataTableClickRow", N),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (N, X) => {
        var de;
        (de = s(w)) == null || de.orderedRows[N].removeClass(X);
      },
      setAttributeAtRowIndex: (N, X, de) => {
        var Oe;
        (Oe = s(w)) == null || Oe.orderedRows[N].addAttr(X, de);
      },
      setHeaderRowCheckboxChecked: (N) => {
        var de;
        const X = (de = s(x)) == null ? void 0 : de.checkbox;
        X && (X.checked = N);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (N, X) => {
        var Oe;
        const de = (Oe = s(w)) == null ? void 0 : Oe.orderedRows[N].checkbox;
        de && (de.checked = X);
      },
      setSortStatusLabelByHeaderCellIndex: (N, X) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), k = !0, () => {
    var N;
    (N = s(_)) == null || N.destroy();
  })), Tn(() => {
    G && G();
  });
  function U(N) {
    s(_) && s(_).handleRowCheckboxChange(N);
  }
  function z(N) {
    C[N] || (C[N] = !0);
  }
  function J(N) {
    (!(N in C) || C[N]) && (C[N] = !1);
  }
  function P(N) {
    var de;
    const X = (de = s(x)) == null ? void 0 : de.checkbox;
    X && (X.indeterminate = N);
  }
  function R(N) {
    if (!s(_) || !N.detail.target)
      return;
    const X = a(N.detail.target, ".mdc-data-table__header-cell--with-sort");
    X && Ae(X);
  }
  function W(N) {
    if (!s(_) || !N.detail.target)
      return;
    const X = a(N.detail.target, ".mdc-data-table__row");
    X && s(_) && s(_).handleRowClick({ rowId: N.detail.rowId, row: X });
  }
  function Ae(N) {
    var Fe, ct;
    const X = ((Fe = s(x)) == null ? void 0 : Fe.orderedCells) ?? [], de = X.map((pt) => pt.element).indexOf(N);
    if (de === -1)
      return;
    const Oe = X[de].columnId ?? null;
    (ct = s(_)) == null || ct.handleSortAction({ columnId: Oe, columnIndex: de, headerCell: N });
  }
  function _e() {
    var N;
    return (N = s(_)) == null ? void 0 : N.layout();
  }
  function F() {
    return I;
  }
  var V = { layout: _e, getElement: F }, B = Qp(), ee = (N) => {
    var X;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (X = e.onSMUIDataTableHeaderCheckboxChange) == null || X.call(e, N);
  }, Z = (N) => {
    var X;
    R(N), (X = e.onSMUIDataTableHeaderClick) == null || X.call(e, N);
  }, ce = (N) => {
    var X;
    W(N), (X = e.onSMUIDataTableRowClick) == null || X.call(e, N);
  }, we = (N) => {
    var X;
    U(N), (X = e.onSMUIDataTableBodyCheckboxChange) == null || X.call(e, N);
  };
  Ue(
    B,
    (N, X) => ({
      class: N,
      ...X,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: Z,
      onSMUIDataTableRowClick: ce,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => Pe({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Zn(S, ["container$", "table$"])
    ]
  );
  var $ = me(B);
  Ue($, (N, X) => ({ class: N, ...X }), [
    () => Pe({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => rt(S, "container$")
  ]);
  var ie = me($);
  Ue(ie, (N, X) => ({ class: N, ...X }), [
    () => Pe({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => rt(S, "table$")
  ]);
  var Me = me(ie);
  Se(Me, () => e.children ?? pe), De(ie, (N, X) => q == null ? void 0 : q(N, X), b), Ee($, (N) => E = N, () => E), De($, (N, X) => q == null ? void 0 : q(N, X), h);
  var Le = Ie($, 2);
  {
    var je = (N) => {
      var X = Zp(), de = Ie(me(X), 2);
      Se(de, () => e.progress ?? pe), Re((Oe) => Gt(X, Oe), [
        () => Object.entries(s(A)).map(([Oe, Fe]) => `${Oe}: ${Fe};`).join(" ")
      ]), L(N, X);
    };
    oe(Le, (N) => {
      e.progress && N(je);
    });
  }
  var Ke = Ie(Le, 2);
  Se(Ke, () => e.paginate ?? pe), Ee(B, (N) => I = N, () => I), De(B, (N, X) => q == null ? void 0 : q(N, X), o), L(t, B);
  var Be = Te(V);
  return i(), Be;
}
var $p = /* @__PURE__ */ be("<thead><!></thead>");
function eb(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !0);
  const l = he("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (y) => {
    K(a, y, !0), l && l(y);
  });
  const c = he("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (y) => {
    K(a, void 0), c && c(y);
  }), ae("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ae("SMUI:data-table:cell:unmount", (y) => {
    const S = o.findIndex((I) => I === y);
    S !== -1 && o.splice(S, 1), u.delete(y.element);
  });
  const d = he("SMUI:data-table:header:mount"), v = he("SMUI:data-table:header:unmount");
  it(() => {
    const y = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return s(a);
      }
    };
    return d && d(y), () => {
      v && v(y);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, g = $p();
  Ue(g, () => ({ ...r }));
  var b = me(g);
  return Se(b, () => e.children ?? pe), Ee(g, (y) => i = y, () => i), De(g, (y, S) => q == null ? void 0 : q(y, S), n), L(t, g), Te(h);
}
var tb = /* @__PURE__ */ be("<tbody><!></tbody>");
function nb(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !1), ae("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), ae("SMUI:data-table:row:unmount", (g) => {
    const b = o.findIndex((y) => y === g);
    b !== -1 && o.splice(b, 1), u.delete(g.element);
  });
  const l = he("SMUI:data-table:body:mount"), c = he("SMUI:data-table:body:unmount");
  it(() => {
    const g = {
      get rows() {
        return o;
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
    return [...v().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, m = tb();
  Ue(m, (g) => ({ class: g, ...i }), [
    () => Pe({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = me(m);
  return Se(h, () => e.children ?? pe), Ee(m, (g) => a = g, () => a), De(m, (g, b) => q == null ? void 0 : q(g, b), n), L(t, m), Te(f);
}
let rb = 0;
var ib = /* @__PURE__ */ be("<tr><!></tr>");
function Xa(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + rb++), a = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ve(void 0), l = ue({}), c = ue({}), d = he("SMUI:data-table:row:header");
  const v = he("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (M) => {
    K(u, M, !0), v && v(M);
  });
  const f = he("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (M) => {
    K(u, void 0), f && f(M);
  });
  const m = he("SMUI:data-table:row:mount"), h = he("SMUI:data-table:row:unmount");
  it(() => {
    const M = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return E();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: y,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: b,
      getAttr: y,
      addAttr: S
    };
    return m && m(M), () => {
      h && h(M);
    };
  });
  function g(M) {
    l[M] || (l[M] = !0);
  }
  function b(M) {
    (!(M in l) || l[M]) && (l[M] = !1);
  }
  function y(M) {
    return M in c ? c[M] ?? null : E().getAttribute(M);
  }
  function S(M, G) {
    c[M] !== G && (c[M] = G);
  }
  function I(M) {
    Je(E(), "SMUIDataTableHeaderClick", M);
  }
  function _(M) {
    Je(E(), "SMUIDataTableRowClick", { rowId: i(), target: M.target });
  }
  function E() {
    return o;
  }
  var x = { getElement: E }, w = ib(), C = (M) => {
    var G;
    d ? I(M) : _(M), (G = e.onclick) == null || G.call(e, M);
  };
  Ue(
    w,
    (M) => ({
      class: M,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
    }),
    [
      () => Pe({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var A = me(w);
  return Se(A, () => e.children ?? pe), Ee(w, (M) => o = M, () => o), De(w, (M, G) => q == null ? void 0 : q(M, G), n), L(t, w), Te(x);
}
let ab = 0;
var ob = /* @__PURE__ */ be('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), sb = /* @__PURE__ */ be("<th><!></th>"), lb = /* @__PURE__ */ be("<td><!></td>");
function fa(t, e) {
  xe(e, !0);
  const n = () => Xn(y, "$sort", i), r = () => Xn(S, "$sortDirection", i), [i, a] = br();
  let o = he("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), v = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + ab++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => he("SMUI:data-table:sortable")), m = /* @__PURE__ */ Xe(e, [
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
  ]), h, g = ue({}), b = ue({}), y = he("SMUI:data-table:sort"), S = he("SMUI:data-table:sortDirection"), I = he("SMUI:data-table:sortAscendingAriaLabel"), _ = he("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ae("SMUI:label:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const E = he("SMUI:data-table:cell:mount"), x = he("SMUI:data-table:cell:unmount");
  it(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return v();
      },
      addClass: w,
      removeClass: C,
      getAttr: A,
      addAttr: M
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: C,
      getAttr: A,
      addAttr: M
    };
    return E && E(P), () => {
      x && x(P);
    };
  });
  function w(P) {
    g[P] || (g[P] = !0);
  }
  function C(P) {
    (!(P in g) || g[P]) && (g[P] = !1);
  }
  function A(P) {
    return P in b ? b[P] ?? null : j().getAttribute(P);
  }
  function M(P, R) {
    b[P] !== R && (b[P] = R);
  }
  function G(P) {
    Je(j(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function k(P) {
    Je(j(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function j() {
    return h;
  }
  var O = { getElement: j }, T = re(), H = Q(T);
  {
    var U = (P) => {
      var R = sb(), W = (V) => {
        var B;
        d() && G(V), (B = e.onchange) == null || B.call(e, V);
      };
      Ue(
        R,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: W
        }),
        [
          () => Pe({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === v(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = me(R);
      {
        var _e = (V) => {
          var B = ob(), ee = me(B);
          Se(ee, () => e.children ?? pe);
          var Z = Ie(ee, 2), ce = me(Z);
          Re(() => {
            Rr(Z, "id", `${v() ?? ""}-status-label`), st(ce, n() === v() ? r() === "ascending" ? I : _ : "");
          }), L(V, B);
        }, F = (V) => {
          var B = re(), ee = Q(B);
          Se(ee, () => e.children ?? pe), L(V, B);
        };
        oe(Ae, (V) => {
          f() ? V(_e) : V(F, !1);
        });
      }
      Ee(R, (V) => h = V, () => h), De(R, (V, B) => q == null ? void 0 : q(V, B), u), L(P, R);
    }, z = (P) => {
      var R = lb(), W = (_e) => {
        var F;
        d() && k(_e), (F = e.onchange) == null || F.call(e, _e);
      };
      Ue(
        R,
        (_e) => ({
          class: _e,
          ...b,
          ...m,
          onchange: W
        }),
        [
          () => Pe({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = me(R);
      Se(Ae, () => e.children ?? pe), Ee(R, (_e) => h = _e, () => h), De(R, (_e, F) => q == null ? void 0 : q(_e, F), u), L(P, R);
    };
    oe(H, (P) => {
      o ? P(U) : P(z, !1);
    });
  }
  L(t, T);
  var J = Te(O);
  return a(), J;
}
dn(["click"]);
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
var ub = {
  ROOT: "mdc-form-field"
}, cb = {
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
var db = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ub;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return cb;
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
  }(Tt)
);
let fb = 0;
var hb = /* @__PURE__ */ be("<div><!> <label><!></label></div>");
function vb(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), o = p(e, "inputId", 19, () => "SMUI-form-field-" + fb++), u = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ Xe(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ea(), f, m = /* @__PURE__ */ ve(void 0);
  ae("SMUI:generic:input:props", { id: o() }), ae("SMUI:generic:input:mount", (_) => {
    K(m, _, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    K(m, void 0);
  }), it(() => (K(
    d,
    new db({
      activateInputRipple: () => {
        s(m) && s(m).activateRipple();
      },
      deactivateInputRipple: () => {
        s(m) && s(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, E) => v.off(f, _, E),
      registerInteractionHandler: (_, E) => v.on(f, _, E)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), v.clear();
  }));
  function h() {
    return c;
  }
  var g = { getElement: h }, b = hb();
  Ue(b, (_, E) => ({ class: _, ...E }), [
    () => Pe({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Zn(l, ["label$"])
  ]);
  var y = me(b);
  Se(y, () => e.children ?? pe);
  var S = Ie(y, 2);
  Ue(S, (_) => ({ for: o(), ..._ }), [() => rt(l, "label$")]);
  var I = me(S);
  return Se(I, () => e.label ?? pe), Ee(S, (_) => f = _, () => f), De(S, (_, E) => q == null ? void 0 : q(_, E), u), Ee(b, (_) => c = _, () => c), De(b, (_, E) => q == null ? void 0 : q(_, E), n), L(t, b), Te(g);
}
dn(["click"]);
function Cs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var mb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Cs({}, mb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ka, eu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ka = {}, Cs(Ka, eu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Cs(Ka, eu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function gb(t) {
  return t * t * t;
}
function qc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function pb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (x) => Math.sqrt(x) * 120, easing: o = qc } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var v = bb(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * c, g = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, S = (h - b) * f, I = (g - y) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + I * I)) : a,
    easing: o,
    css: (x, w) => {
      var C = w * S, A = w * I, M = x + w * _, G = x + w * E;
      return `transform: ${l} translate(${C}px, ${A}px) scale(${M}, ${G});`;
    }
  };
}
function bb(t) {
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
function _b(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function tu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function bo(t, { delay: e = 0, duration: n = 400, easing: r = _b, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [v, f] = tu(i), [m, h] = tu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * v}${f}, ${(1 - g) * m}${h});
			opacity: ${l - d * b}`
  };
}
dn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function yb(t, e) {
  var n;
  (n = e()) == null || n();
}
var Ib = /* @__PURE__ */ be('<div class="detail svelte-4xu36c"> </div>'), Eb = /* @__PURE__ */ be('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function Sb(t, e) {
  xe(e, !0);
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
  var a = Eb(), o = me(a), u = me(o);
  Es(u, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt();
      Re(() => st(y, r[e.type])), L(g, y);
    },
    $$slots: { default: !0 }
  });
  var l = Ie(o, 2), c = me(l), d = me(c), v = Ie(c, 2);
  {
    var f = (g) => {
      var b = Ib(), y = me(b);
      Re(() => st(y, e.detail)), L(g, b);
    };
    oe(v, (g) => {
      e.detail && g(f);
    });
  }
  var m = Ie(l, 2);
  m.__click = [yb, n];
  var h = me(m);
  Es(h, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt("close");
      L(g, y);
    },
    $$slots: { default: !0 }
  }), Re(() => {
    Gt(a, `--color:${i[e.type] ?? ""}`), st(d, e.summary);
  }), co(1, a, () => bo, () => ({ x: 0, y: 30, duration: 150, easing: gb })), co(2, a, () => bo, () => ({ x: 50, y: 0, duration: 150, easing: qc })), L(t, a), Te();
}
dn(["click"]);
const Ab = 4e3;
function Cb() {
  let t = ue({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = Ab) => {
    const l = e++, c = { id: l, summary: a, detail: o, type: i };
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
    success: (i, a, o) => r("success", i, a, o),
    error: (i, a, o) => r("error", i, a, o),
    info: (i, a, o) => r("info", i, a, o),
    warn: (i, a, o) => r("warn", i, a, o),
    remove: n
  };
}
const ya = Cb();
var xb = /* @__PURE__ */ be("<div><!></div>"), Tb = /* @__PURE__ */ be('<div class="toast-host svelte-11vwiay"></div>');
function wb(t, e) {
  xe(e, !1);
  const n = ya.toasts;
  th();
  var r = Tb();
  Pn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = xb(), u = me(o);
    Sb(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => ya.remove(s(a).id)
    }), $f(o, () => pb, null), L(i, o);
  }), L(t, r), Te();
}
var Lb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, Ob = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, Rb = /* @__PURE__ */ be('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), Mb = /* @__PURE__ */ be('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), Db = /* @__PURE__ */ be('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Pb(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = Db();
  r.__click = [Lb, e];
  var i = me(r), a = me(i);
  {
    var o = (f) => {
      po(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var g = Rb();
          g.__click = [Ob, e];
          var b = me(g);
          Wc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), L(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      po(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          kp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    oe(a, (f) => {
      s(n) ? f(o) : f(u, !1);
    });
  }
  var l = Ie(i, 2), c = me(l), d = Ie(l, 2);
  {
    var v = (f) => {
      var m = Mb(), h = Ie(Q(m), 2), g = me(h), b = Ie(h, 2), y = me(b);
      Hp(y, { svgStyles: "fill: gray;" }), Re(() => st(g, e.value)), L(f, m);
    };
    oe(d, (f) => {
      s(n) && f(v);
    });
  }
  Re(() => {
    Vs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), st(c, e.label);
  }), L(t, r), Te();
}
dn(["click"]);
var Nb = /* @__PURE__ */ be('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Hb(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), c = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), v = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), h = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ Xe(e, [
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
  ]), y, S = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = ue({}), E = ue({}), x = ue({}), w = /* @__PURE__ */ ve(!1), C = ue(he("SMUI:generic:input:props") ?? {}), A = /* @__PURE__ */ ve(ue(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex(($) => $ === f()) !== -1)), M = he("SMUI:checkbox:context"), G = he("SMUI:data-table:row:header"), k = v(), j = r(d()) ? [] : [...d()], O = s(A);
  Ce(() => {
    let $ = !1;
    if (!r(d()))
      if (O !== s(A)) {
        const ie = d().findIndex((Me) => Me === f());
        s(A) && ie === -1 ? d().push(f()) : !s(A) && ie !== -1 && d().splice(ie, 1), $ = !0;
      } else {
        const ie = j.findIndex((Le) => Le === f()), Me = d().findIndex((Le) => Le === f());
        ie > -1 && Me === -1 ? (K(A, !1), $ = !0) : Me > -1 && ie === -1 && (K(A, !0), $ = !0);
      }
    r(v()) ? O !== s(A) && ($ = !0) : (v() !== (c() ? null : s(A)) || s(A) !== O) && (v() === k && s(A) !== O ? (v(s(A)), r(c()) || c(!1)) : K(A, !!v()), $ = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, $ = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, $ = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, K(A, !1), $ = !0)), k = v(), j = r(d()) ? [] : [...d()], O = s(A), $ && s(S) && s(S).handleChange();
  });
  const T = he("SMUI:generic:input:mount"), H = he("SMUI:generic:input:unmount"), U = he("SMUI:checkbox:mount"), z = he("SMUI:checkbox:unmount");
  it(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), K(
      S,
      new Xp({
        addClass: J,
        forceLayout: () => F().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!F().parentNode,
        isChecked: () => s(A),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: P,
        removeNativeControlAttr: Ae,
        setNativeControlAttr: W,
        setNativeControlDisabled: (ie) => u(ie)
      }),
      !0
    );
    const $ = {
      _smui_checkbox_accessor: !0,
      get element() {
        return F();
      },
      get checked() {
        return s(A);
      },
      set checked(ie) {
        s(A) !== ie && K(A, ie, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ie) {
        c(ie);
      },
      activateRipple() {
        u() || K(w, !0);
      },
      deactivateRipple() {
        K(w, !1);
      }
    };
    return T && T($), U && U($), s(S).init(), () => {
      var ie;
      H && H($), z && z($), (ie = s(S)) == null || ie.destroy();
    };
  });
  function J($) {
    _[$] || (_[$] = !0);
  }
  function P($) {
    (!($ in _) || _[$]) && (_[$] = !1);
  }
  function R($, ie) {
    E[$] != ie && (ie === "" || ie == null ? delete E[$] : E[$] = ie);
  }
  function W($, ie) {
    x[$] !== ie && (x[$] = ie);
  }
  function Ae($) {
    (!($ in x) || x[$] != null) && (x[$] = void 0);
  }
  function _e() {
    return C && C.id;
  }
  function F() {
    return y;
  }
  var V = { getId: _e, getElement: F }, B = Nb(), ee = ($) => {
    var ie;
    s(S) && s(S).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, $);
  };
  Ue(B, ($, ie, Me) => ({ class: $, style: ie, ...Me, onanimationend: ee }), [
    () => Pe({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": M === "data-table" && G,
      "mdc-data-table__row-checkbox": M === "data-table" && !G,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([o()]).join(" "),
    () => Zn(b, ["input$"])
  ]);
  var Z = me(B), ce = ($) => {
    var ie;
    Je(F(), "blur", $), (ie = e.input$onblur) == null || ie.call(e, $);
  }, we = ($) => {
    var ie;
    Je(F(), "focus", $), (ie = e.input$onfocus) == null || ie.call(e, $);
  };
  return Ue(
    Z,
    ($, ie, Me, Le) => ({
      class: $,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: ie,
      "data-indeterminate": Me,
      ...x,
      ...Le,
      onblur: ce,
      onfocus: we
    }),
    [
      () => Pe({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => rt(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ee(Z, ($) => K(I, $), () => s(I)), De(Z, ($, ie) => q == null ? void 0 : q($, ie), h), Hr(() => eh(Z, () => s(A), ($) => K(A, $))), Ee(B, ($) => y = $, () => y), De(B, ($, ie) => q == null ? void 0 : q($, ie), i), De(B, ($, ie) => zt == null ? void 0 : zt($, ie), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: P,
    addStyle: R,
    active: s(w),
    eventTarget: s(I)
  })), L(t, B), Te(V);
}
var Ub = /* @__PURE__ */ be('<div style="display: flex; flex-direction: column;"></div>');
function kb(t, e) {
  xe(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ue([]));
  var i = Ub();
  Pn(i, 21, n, wi, (a, o) => {
    vb(a, {
      label: (l) => {
        var c = Rt();
        Re(() => st(c, s(o).label)), L(l, c);
      },
      children: (l, c) => {
        Hb(l, {
          get value() {
            return s(o).value;
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
var Bb = (t) => t.stopPropagation(), Fb = /* @__PURE__ */ be('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Vb = /* @__PURE__ */ be('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Gb = /* @__PURE__ */ be('<div class="oscd-filters svelte-58jwwf"></div>');
function jb(t, e) {
  xe(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function o(h) {
    var g;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (g = h.options) == null ? void 0 : g.find((I) => I.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var E;
            const _ = (E = h.options) == null ? void 0 : E.find((x) => x.value === I);
            return _ ? _.label : String(I);
          }), S = 1;
          return y.length <= S ? y.join(", ") : `${y.slice(0, S).join(", ")} +${y.length - S} more`;
        case "date":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : I.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(I);
          } catch {
            return String(h.value);
          }
        default:
          return String(h.value);
      }
  }
  function u(h) {
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
  function l(h) {
    s(r) === h ? K(r, null) : (K(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    K(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), K(r, null);
  }
  function v(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), c();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || c();
  }
  it(() => {
    document.addEventListener("click", f);
  }), Tn(() => {
    document.removeEventListener("click", f);
  }), Ce(() => {
  });
  var m = Gb();
  Pn(m, 23, n, (h) => h.key, (h, g, b) => {
    var y = Vb(), S = me(y);
    {
      let E = /* @__PURE__ */ fe(() => o(s(g)));
      Pb(S, {
        get label() {
          return s(g).label;
        },
        get value() {
          return s(E);
        },
        onOpen: () => l(s(b)),
        onRemove: () => v(s(b))
      });
    }
    var I = Ie(S, 2);
    {
      var _ = (E) => {
        var x = Fb();
        x.__click = [Bb];
        var w = Ie(me(x), 2), C = me(w), A = Ie(w, 2), M = me(A);
        {
          var G = (O) => {
            Ss(O, {
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
                return a[s(b)];
              },
              set value(T) {
                a[s(b)] = T;
              }
            });
          }, k = (O) => {
            var T = re(), H = Q(T);
            {
              var U = (J) => {
                {
                  let P = /* @__PURE__ */ fe(() => {
                    var R;
                    return (R = s(g)) == null ? void 0 : R.options;
                  });
                  fp(J, {
                    get label() {
                      return s(g).label;
                    },
                    get data() {
                      return s(P);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(R) {
                      a[s(b)] = R;
                    }
                  });
                }
              }, z = (J) => {
                var P = re(), R = Q(P);
                {
                  var W = (_e) => {
                    {
                      let F = /* @__PURE__ */ fe(() => {
                        var V;
                        return (V = s(g)) == null ? void 0 : V.options;
                      });
                      kb(_e, {
                        get data() {
                          return s(F);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(V) {
                          a[s(b)] = V;
                        }
                      });
                    }
                  }, Ae = (_e) => {
                    var F = re(), V = Q(F);
                    {
                      var B = (Z) => {
                        Vp(Z, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(ce) {
                            a[s(b)] = ce;
                          }
                        });
                      }, ee = (Z) => {
                        var ce = re(), we = Q(ce);
                        {
                          var $ = (ie) => {
                            Wp(ie, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Me) {
                                a[s(b)] = Me;
                              }
                            });
                          };
                          oe(
                            we,
                            (ie) => {
                              s(g).type === "datetime" && ie($);
                            },
                            !0
                          );
                        }
                        L(Z, ce);
                      };
                      oe(
                        V,
                        (Z) => {
                          s(g).type === "date" ? Z(B) : Z(ee, !1);
                        },
                        !0
                      );
                    }
                    L(_e, F);
                  };
                  oe(
                    R,
                    (_e) => {
                      s(g).type === "multiselect" ? _e(W) : _e(Ae, !1);
                    },
                    !0
                  );
                }
                L(J, P);
              };
              oe(
                H,
                (J) => {
                  s(g).type === "select" ? J(U) : J(z, !1);
                },
                !0
              );
            }
            L(O, T);
          };
          oe(M, (O) => {
            s(g).type === "text" || s(g).type === "number" ? O(G) : O(k, !1);
          });
        }
        var j = Ie(A, 2);
        kc(j, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (O, T) => {
            var H = Rt("Apply");
            L(O, H);
          },
          $$slots: { default: !0 }
        }), Re(() => st(C, `Filter by ${s(g).label ?? ""}`)), co(2, x, () => bo, () => ({ y: 5, duration: 120 })), co(1, x, () => bo, () => ({ y: -5, duration: 120 })), L(E, x);
      };
      oe(I, (E) => {
        s(r) === s(b) && E(_);
      });
    }
    Ee(y, (E, x) => i[x] = E, (E) => i == null ? void 0 : i[E], () => [s(b)]), L(h, y);
  }), L(t, m), Te();
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
var zc = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, Wb = {
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
var Ks = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.adapter = e;
    }
    return t;
  }()
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
var qb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function() {
      var n = this.adapter.getScrollAreaScrollLeft(), r = this.calculateScrollEdges().right;
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.calculateScrollEdges(), i = this.adapter.getScrollAreaScrollLeft(), a = this.clampScrollValue(r.right - n);
      return {
        finalScrollPosition: a,
        scrollDelta: a - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n) {
      return n;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e;
  }(Ks)
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
var zb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(n - r);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(-n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n - r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: r - n,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.max(Math.min(r.right, n), r.left);
    }, e;
  }(Ks)
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
var Xb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r + n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n + r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: n - r,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.right, n), r.left);
    }, e;
  }(Ks)
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
var Kb = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          eventTargetMatchesSelector: function() {
            return !1;
          },
          addClass: function() {
          },
          removeClass: function() {
          },
          addScrollAreaClass: function() {
          },
          setScrollAreaStyleProperty: function() {
          },
          setScrollContentStyleProperty: function() {
          },
          getScrollContentStyleValue: function() {
            return "";
          },
          setScrollAreaScrollLeft: function() {
          },
          getScrollAreaScrollLeft: function() {
            return 0;
          },
          getScrollContentOffsetWidth: function() {
            return 0;
          },
          getScrollAreaOffsetWidth: function() {
            return 0;
          },
          computeScrollAreaClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeScrollContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeHorizontalScrollbarHeight: function() {
            return 0;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.computeHorizontalScrollbarHeight();
      this.adapter.setScrollAreaStyleProperty("margin-bottom", -n + "px"), this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL);
    }, e.prototype.getScrollPosition = function() {
      if (this.isRTL())
        return this.computeCurrentScrollPositionRTL();
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return r - n;
    }, e.prototype.handleInteraction = function() {
      this.isAnimating && this.stopScrollAnimation();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = n.target;
      !this.isAnimating || !this.adapter.eventTargetMatchesSelector(r, e.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(e.cssClasses.ANIMATING));
    }, e.prototype.incrementScroll = function(n) {
      n !== 0 && this.animate(this.getIncrementScrollOperation(n));
    }, e.prototype.incrementScrollImmediate = function(n) {
      if (n !== 0) {
        var r = this.getIncrementScrollOperation(n);
        r.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition));
      }
    }, e.prototype.scrollTo = function(n) {
      if (this.isRTL()) {
        this.scrollToImplRTL(n);
        return;
      }
      this.scrollToImpl(n);
    }, e.prototype.getRTLScroller = function() {
      return this.rtlScrollerInstance || (this.rtlScrollerInstance = this.rtlScrollerFactory()), this.rtlScrollerInstance;
    }, e.prototype.calculateCurrentTranslateX = function() {
      var n = this.adapter.getScrollContentStyleValue("transform");
      if (n === "none")
        return 0;
      var r = /\((.+?)\)/.exec(n);
      if (!r)
        return 0;
      var i = r[1], a = vr(i.split(","), 6);
      a[0], a[1], a[2], a[3];
      var o = a[4];
      return a[5], parseFloat(o);
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e.prototype.computeCurrentScrollPositionRTL = function() {
      var n = this.calculateCurrentTranslateX();
      return this.getRTLScroller().getScrollPositionRTL(n);
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.scrollToImpl = function(n) {
      var r = this.getScrollPosition(), i = this.clampScrollValue(n), a = i - r;
      this.animate({
        finalScrollPosition: i,
        scrollDelta: a
      });
    }, e.prototype.scrollToImplRTL = function(n) {
      var r = this.getRTLScroller().scrollToRTL(n);
      this.animate(r);
    }, e.prototype.getIncrementScrollOperation = function(n) {
      if (this.isRTL())
        return this.getRTLScroller().incrementScrollRTL(n);
      var r = this.getScrollPosition(), i = n + r, a = this.clampScrollValue(i), o = a - r;
      return {
        finalScrollPosition: a,
        scrollDelta: o
      };
    }, e.prototype.animate = function(n) {
      var r = this;
      n.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition), this.adapter.setScrollContentStyleProperty("transform", "translateX(" + n.scrollDelta + "px)"), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame(function() {
        r.adapter.addClass(e.cssClasses.ANIMATING), r.adapter.setScrollContentStyleProperty("transform", "none");
      }), this.isAnimating = !0);
    }, e.prototype.stopScrollAnimation = function() {
      this.isAnimating = !1;
      var n = this.getAnimatingScrollPosition();
      this.adapter.removeClass(e.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(n);
    }, e.prototype.getAnimatingScrollPosition = function() {
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return this.isRTL() ? this.getRTLScroller().getAnimatingScrollPosition(r, n) : r - n;
    }, e.prototype.rtlScrollerFactory = function() {
      var n = this.adapter.getScrollAreaScrollLeft();
      this.adapter.setScrollAreaScrollLeft(n - 1);
      var r = this.adapter.getScrollAreaScrollLeft();
      if (r < 0)
        return this.adapter.setScrollAreaScrollLeft(n), new zb(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Xb(this.adapter) : new qb(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(Tt)
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
var es;
function Yb(t, e) {
  if (e === void 0 && (e = !0), e && typeof es < "u")
    return es;
  var n = t.createElement("div");
  n.classList.add(zc.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (es = r), r;
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
var Zb = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, Qb = {
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
var lr = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      return t.call(this, le(le({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          computeContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          setContentStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.computeContentClientRect = function() {
      return this.adapter.computeContentClientRect();
    }, e;
  }(Tt)
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
var Jb = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(lr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(lr.cssClasses.ACTIVE);
    }, e;
  }(lr)
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
var nu = (
  /** @class */
  function(t) {
    We(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(lr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(lr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(lr.cssClasses.NO_TRANSITION), this.adapter.addClass(lr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(lr.cssClasses.ACTIVE);
    }, e;
  }(lr)
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
var Ya = {
  ACTIVE: "mdc-tab--active"
}, ha = {
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
var $b = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ya;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
          activateIndicator: function() {
          },
          deactivateIndicator: function() {
          },
          notifyInteracted: function() {
          },
          getOffsetLeft: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          getContentOffsetLeft: function() {
            return 0;
          },
          getContentOffsetWidth: function() {
            return 0;
          },
          focus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function() {
      this.adapter.notifyInteracted();
    }, e.prototype.isActive = function() {
      return this.adapter.hasClass(Ya.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(Ya.ACTIVE), this.adapter.setAttr(ha.ARIA_SELECTED, "true"), this.adapter.setAttr(ha.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(Ya.ACTIVE), this.adapter.setAttr(ha.ARIA_SELECTED, "false"), this.adapter.setAttr(ha.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(Tt)
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
var xt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, Nn = {
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
var mi = /* @__PURE__ */ new Set();
mi.add(xt.ARROW_LEFT_KEY);
mi.add(xt.ARROW_RIGHT_KEY);
mi.add(xt.END_KEY);
mi.add(xt.HOME_KEY);
mi.add(xt.ENTER_KEY);
mi.add(xt.SPACE_KEY);
var gi = /* @__PURE__ */ new Map();
gi.set(Nn.ARROW_LEFT_KEYCODE, xt.ARROW_LEFT_KEY);
gi.set(Nn.ARROW_RIGHT_KEYCODE, xt.ARROW_RIGHT_KEY);
gi.set(Nn.END_KEYCODE, xt.END_KEY);
gi.set(Nn.HOME_KEYCODE, xt.HOME_KEY);
gi.set(Nn.ENTER_KEYCODE, xt.ENTER_KEY);
gi.set(Nn.SPACE_KEYCODE, xt.SPACE_KEY);
var e_ = (
  /** @class */
  function(t) {
    We(e, t);
    function e(n) {
      var r = t.call(this, le(le({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          scrollTo: function() {
          },
          incrementScroll: function() {
          },
          getScrollPosition: function() {
            return 0;
          },
          getScrollContentWidth: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          isRTL: function() {
            return !1;
          },
          setActiveTab: function() {
          },
          activateTabAtIndex: function() {
          },
          deactivateTabAtIndex: function() {
          },
          focusTabAtIndex: function() {
          },
          getTabIndicatorClientRectAtIndex: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          getTabDimensionsAtIndex: function() {
            return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
          },
          getPreviousActiveTabIndex: function() {
            return -1;
          },
          getFocusedTabIndex: function() {
            return -1;
          },
          getIndexOfTabById: function() {
            return -1;
          },
          getTabListLength: function() {
            return 0;
          },
          notifyTabActivated: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setUseAutomaticActivation = function(n) {
      this.useAutomaticActivation = n;
    }, e.prototype.activateTab = function(n) {
      var r = this.adapter.getPreviousActiveTabIndex();
      if (!(!this.indexIsInRange(n) || n === r)) {
        var i;
        r !== -1 && (this.adapter.deactivateTabAtIndex(r), i = this.adapter.getTabIndicatorClientRectAtIndex(r)), this.adapter.activateTabAtIndex(n, i), this.scrollIntoView(n), this.adapter.notifyTabActivated(n);
      }
    }, e.prototype.handleKeyDown = function(n) {
      var r = this.getKeyFromEvent(n);
      if (r !== void 0)
        if (this.isActivationKey(r) || n.preventDefault(), this.useAutomaticActivation) {
          if (this.isActivationKey(r))
            return;
          var i = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), r);
          this.adapter.setActiveTab(i), this.scrollIntoView(i);
        } else {
          var a = this.adapter.getFocusedTabIndex();
          if (this.isActivationKey(r))
            this.adapter.setActiveTab(a);
          else {
            var i = this.determineTargetFromKey(a, r);
            this.adapter.focusTabAtIndex(i), this.scrollIntoView(i);
          }
        }
    }, e.prototype.handleTabInteraction = function(n) {
      this.adapter.setActiveTab(this.adapter.getIndexOfTabById(n.detail.tabId));
    }, e.prototype.scrollIntoView = function(n) {
      if (this.indexIsInRange(n)) {
        if (n === 0) {
          this.adapter.scrollTo(0);
          return;
        }
        if (n === this.adapter.getTabListLength() - 1) {
          this.adapter.scrollTo(this.adapter.getScrollContentWidth());
          return;
        }
        if (this.isRTL()) {
          this.scrollIntoViewImplRTL(n);
          return;
        }
        this.scrollIntoViewImpl(n);
      }
    }, e.prototype.determineTargetFromKey = function(n, r) {
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === xt.END_KEY, u = r === xt.ARROW_LEFT_KEY && !i || r === xt.ARROW_RIGHT_KEY && i, l = r === xt.ARROW_RIGHT_KEY && !i || r === xt.ARROW_LEFT_KEY && i, c = n;
      return o ? c = a : u ? c -= 1 : l ? c += 1 : c = 0, c < 0 ? c = a : c > a && (c = 0), c;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Nn.EXTRA_SCROLL_AMOUNT, d = u + Nn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Nn.EXTRA_SCROLL_AMOUNT, v = l - Nn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(v, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, v = l < 0 || c < 0;
      return d ? n + 1 : v ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return mi.has(n.key) ? n.key : gi.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === xt.SPACE_KEY || n === xt.ENTER_KEY;
    }, e.prototype.indexIsInRange = function(n) {
      return n >= 0 && n < this.adapter.getTabListLength();
    }, e.prototype.isRTL = function() {
      return this.adapter.isRTL();
    }, e.prototype.scrollIntoViewImpl = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.findAdjacentTabIndexClosestToEdge(n, a, r, i);
      if (this.indexIsInRange(o)) {
        var u = this.calculateScrollIncrement(n, o, r, i);
        this.adapter.incrementScroll(u);
      }
    }, e.prototype.scrollIntoViewImplRTL = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.adapter.getScrollContentWidth(), u = this.findAdjacentTabIndexClosestToEdgeRTL(n, a, r, i, o);
      if (this.indexIsInRange(u)) {
        var l = this.calculateScrollIncrementRTL(n, u, r, i, o);
        this.adapter.incrementScroll(l);
      }
    }, e;
  }(Tt)
), t_ = /* @__PURE__ */ be("<div><div><div><!></div></div></div>");
function n_(t, e) {
  xe(e, !0);
  const { matches: n } = Na;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "align", 3, void 0), o = p(e, "scrollArea$use", 19, () => []), u = p(e, "scrollArea$class", 3, ""), l = p(e, "scrollContent$use", 19, () => []), c = p(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ Xe(e, [
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
  ]), v, f = /* @__PURE__ */ ve(void 0), m, h, g = ue({}), b = ue({}), y = ue({}), S = ue({});
  it(() => (K(
    f,
    new Kb({
      eventTargetMatchesSelector: (F, V) => n(F, V),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: E,
      setScrollAreaStyleProperty: x,
      setScrollContentStyleProperty: w,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (F) => m.scrollLeft = F,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => Yb(document)
    }),
    !0
  ), s(f).init(), () => {
    var F;
    (F = s(f)) == null || F.destroy();
  }));
  function I(F) {
    g[F] || (g[F] = !0);
  }
  function _(F) {
    (!(F in g) || g[F]) && (g[F] = !1);
  }
  function E(F) {
    b[F] || (b[F] = !0);
  }
  function x(F, V) {
    y[F] != V && (V === "" || V == null ? delete y[F] : y[F] = V);
  }
  function w(F, V) {
    S[F] != V && (V === "" || V == null ? delete S[F] : S[F] = V);
  }
  function C(F) {
    return F in S ? S[F] : getComputedStyle(h).getPropertyValue(F);
  }
  function A() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function M() {
    return h.offsetWidth;
  }
  function G(F) {
    var V;
    (V = s(f)) == null || V.incrementScroll(F);
  }
  function k(F) {
    var V;
    (V = s(f)) == null || V.scrollTo(F);
  }
  function j() {
    return v;
  }
  var O = {
    getScrollPosition: A,
    getScrollContentWidth: M,
    incrementScroll: G,
    scrollTo: k,
    getElement: j
  }, T = t_();
  Ue(T, (F, V) => ({ class: F, ...V }), [
    () => Pe({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => Zn(d, ["scrollArea$", "scrollContent$"])
  ]);
  var H = me(T), U = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onwheel) == null || V.call(e, F);
  }, z = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$ontouchstart) == null || V.call(e, F);
  }, J = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onpointerdown) == null || V.call(e, F);
  }, P = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onmousedown) == null || V.call(e, F);
  }, R = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onkeydown) == null || V.call(e, F);
  };
  Ue(
    H,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      onwheel: U,
      ontouchstart: z,
      onpointerdown: J,
      onmousedown: P,
      onkeydown: R
    }),
    [
      () => Pe({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => rt(d, "scrollArea$")
    ]
  );
  var W = me(H), Ae = (F) => {
    var V;
    s(f) && s(f).handleTransitionEnd(F), (V = e.scrollContent$ontransitionend) == null || V.call(e, F);
  };
  Ue(
    W,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      ontransitionend: Ae
    }),
    [
      () => Pe({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(S).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => rt(d, "scrollContent$")
    ]
  );
  var _e = me(W);
  return Se(_e, () => e.children ?? pe), Ee(W, (F) => h = F, () => h), De(W, (F, V) => q == null ? void 0 : q(F, V), l), Ee(H, (F) => m = F, () => m), De(H, (F, V) => q == null ? void 0 : q(F, V), o), Ee(T, (F) => v = F, () => v), De(T, (F, V) => q == null ? void 0 : q(F, V), r), L(t, T), Te(O);
}
var r_ = /* @__PURE__ */ be("<div><!></div>");
function i_(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "tabs", 19, () => []), a = p(e, "key", 3, (O) => O), o = p(e, "focusOnActivate", 3, !0), u = p(e, "focusOnProgrammatic", 3, !1), l = p(e, "useAutomaticActivation", 3, !0), c = p(e, "active", 15), d = p(e, "tabindex", 3, 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h, g = /* @__PURE__ */ ve(ue(c() == null ? -1 : i().findIndex((O) => c() && a()(O) === a()(c())))), b = ue({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), S = !1;
  ae("SMUI:tab:focusOnActivate", o()), ae("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Ce(() => {
    (c() == null && s(g) !== -1 || c() != null && s(g) === -1 || c() != null && a()(c()) !== a()(i()[s(g)])) && (K(g, i().findIndex((O) => c() && a()(O) === a()(c())), !0), s(m) && (S = !u(), s(m).activateTab(s(g)), S = !1));
  }), Ce(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      O && O.forceAccessible(s(g) === -1);
    }
  });
  let I = !1;
  Ce(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(l()));
  }), ae("SMUI:tab:mount", (O) => {
    E(O.tabId, O);
  }), ae("SMUI:tab:unmount", (O) => {
    x(O.tabId);
  }), it(() => (K(
    m,
    new e_({
      scrollTo: (O) => h.scrollTo(O),
      incrementScroll: (O) => h.incrementScroll(O),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var T;
        c(i()[O]), K(g, O, !0), (T = s(m)) == null || T.activateTab(O);
      },
      activateTabAtIndex: (O, T) => {
        var H;
        return (H = _(i()[O])) == null ? void 0 : H.activate(T, S);
      },
      deactivateTabAtIndex: (O) => {
        var T;
        return (T = _(i()[O])) == null ? void 0 : T.deactivate();
      },
      focusTabAtIndex: (O) => {
        var T;
        return (T = _(i()[O])) == null ? void 0 : T.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var T;
        return ((T = _(i()[O])) == null ? void 0 : T.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var T;
        return ((T = _(i()[O])) == null ? void 0 : T.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let T = 0; T < i().length; T++)
          if ((O = _(i()[T])) != null && O.active)
            return T;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((H) => {
          var U;
          return (U = _(H)) == null ? void 0 : U.element;
        }), T = document.activeElement;
        return O.indexOf(T);
      },
      getIndexOfTabById: (O) => i().findIndex((T) => a()(T) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => Je(C(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy();
  }));
  function _(O) {
    return O instanceof Object ? s(y).get(O) : b[O];
  }
  function E(O, T) {
    O instanceof Object ? (s(y).set(O, T), K(y, s(y))) : b[O] = T;
  }
  function x(O) {
    O instanceof Object ? (s(y).delete(O), K(y, s(y))) : delete b[O];
  }
  function w(O) {
    var T;
    (T = s(m)) == null || T.scrollIntoView(O);
  }
  function C() {
    return f;
  }
  var A = { scrollIntoView: w, getElement: C }, M = r_(), G = (O) => {
    var T;
    s(m) && s(m).handleKeyDown(O), (T = e.onkeydown) == null || T.call(e, O);
  }, k = (O) => {
    var T;
    s(m) && s(m).handleTabInteraction(O), (T = e.onSMUITabInteracted) == null || T.call(e, O);
  };
  Ue(
    M,
    (O, T) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...T,
      onkeydown: G,
      onSMUITabInteracted: k
    }),
    [
      () => Pe({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Zn(v, ["tabScroller$"])
    ]
  );
  var j = me(M);
  {
    let O = /* @__PURE__ */ fe(() => rt(v, "tabScroller$"));
    Ee(
      n_(j, nt(() => s(O), {
        children: (T, H) => {
          var U = re(), z = Q(U);
          Pn(z, 17, i, (J) => a()(J), (J, P) => {
            var R = re(), W = Q(R);
            Se(W, () => e.tab, () => s(P)), L(J, R);
          }), L(T, U);
        },
        $$slots: { default: !0 }
      })),
      (T) => h = T,
      () => h
    );
  }
  return Ee(M, (O) => f = O, () => f), De(M, (O, T) => q == null ? void 0 : q(O, T), n), L(t, M), Te(A);
}
var a_ = /* @__PURE__ */ be("<span><span><!></span></span>");
function o_(t, e) {
  xe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "active", 15, !1), a = p(e, "type", 3, "underline"), o = p(e, "transition", 3, "slide"), u = p(e, "content$use", 19, () => []), l = p(e, "content$class", 3, ""), c = /* @__PURE__ */ Xe(e, [
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
  ]), d, v = /* @__PURE__ */ ve(void 0), f, m = /* @__PURE__ */ ve(ue({})), h = /* @__PURE__ */ ve(ue({})), g = ue([]), b = o();
  Ce(() => {
    b !== o() && (b = o(), s(v) && s(v).destroy(), K(m, {}, !0), K(h, {}, !0), K(v, y(), !0), s(v).init());
  }), ku(() => {
    g.length && requestAnimationFrame(() => {
      const O = g.shift() ?? [];
      for (const T of O)
        T();
    });
  }), it(() => (K(v, y(), !0), s(v).init(), () => {
    var O;
    (O = s(v)) == null || O.destroy();
  }));
  function y() {
    const O = {
      fade: Jb,
      slide: nu
    }[o()] || nu;
    return new O({
      addClass: (...T) => S(() => I(...T)),
      removeClass: (...T) => S(() => _(...T)),
      computeContentClientRect: C,
      setContentStyleProperty: (...T) => S(() => E(...T))
    });
  }
  function S(O) {
    g.length ? g[g.length - 1].push(O) : O();
  }
  function I(O) {
    s(m)[O] || (s(m)[O] = !0);
  }
  function _(O) {
    (!(O in s(m)) || s(m)[O]) && (s(m)[O] = !1);
  }
  function E(O, T) {
    s(h)[O] != T && (T === "" || T == null ? delete s(h)[O] : s(h)[O] = T);
  }
  function x(O) {
    var T;
    i(!0), (T = s(v)) == null || T.activate(O);
  }
  function w() {
    var O;
    i(!1), (O = s(v)) == null || O.deactivate();
  }
  function C() {
    return g.push([]), f.getBoundingClientRect();
  }
  function A() {
    return d;
  }
  var M = { activate: x, deactivate: w, computeContentClientRect: C, getElement: A }, G = a_();
  Ue(G, (O, T) => ({ class: O, ...T }), [
    () => Pe({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => Zn(c, ["content$"])
  ]);
  var k = me(G);
  Ue(
    k,
    (O, T, H) => ({
      class: O,
      style: T,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...H
    }),
    [
      () => Pe({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([O, T]) => `${O}: ${T};`).join(" "),
      () => rt(c, "content$")
    ]
  );
  var j = me(k);
  return Se(j, () => e.children ?? pe), Ee(k, (O) => f = O, () => f), De(k, (O, T) => q == null ? void 0 : q(O, T), u), Ee(G, (O) => d = O, () => d), De(G, (O, T) => q == null ? void 0 : q(O, T), n), L(t, G), Te(M);
}
var s_ = /* @__PURE__ */ be('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function l_(t, e) {
  xe(e, !0);
  const n = (V) => {
    {
      let B = /* @__PURE__ */ fe(() => rt(g, "tabIndicator$"));
      Ee(
        o_(V, nt(() => s(B), {
          get active() {
            return s(A);
          },
          set active(ee) {
            K(A, ee, !0);
          },
          children: (ee, Z) => {
            var ce = re(), we = Q(ce);
            Se(we, () => e.tabIndicator ?? pe), L(ee, ce);
          },
          $$slots: { default: !0 }
        })),
        (ee) => I = ee,
        () => I
      );
    }
  };
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), u = p(e, "stacked", 3, !1), l = p(e, "minWidth", 3, !1), c = p(e, "indicatorSpanOnlyContent", 3, !1), d = p(e, "href", 3, void 0), v = p(e, "content$use", 19, () => []), f = p(e, "content$class", 3, ""), m = p(e, "component", 3, Fr), h = p(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ Xe(e, [
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
  ]), b, y = /* @__PURE__ */ ve(void 0), S, I, _ = ue({}), E = ue({}), x = ue({}), w = he("SMUI:tab:focusOnActivate");
  const C = he("SMUI:tab:initialActive");
  let A = /* @__PURE__ */ ve(ue(C.active != null && C.key(e.tab) === C.active)), M = /* @__PURE__ */ ve(!1);
  if (ae("SMUI:label:context", "tab"), ae("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let G = !1;
  Ce(() => {
    if (!s(y)) {
      G = !1;
      return;
    }
    G || (G = !0, s(y).setFocusOnActivate(w));
  });
  const k = he("SMUI:tab:mount"), j = he("SMUI:tab:unmount");
  it(() => {
    K(
      y,
      new $b({
        setAttr: z,
        addClass: T,
        removeClass: H,
        hasClass: O,
        activateIndicator: (B) => I.activate(B),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Je(W(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => W().offsetLeft,
        getOffsetWidth: () => W().offsetWidth,
        getContentOffsetLeft: () => S.offsetLeft,
        getContentOffsetWidth: () => S.offsetWidth,
        focus: R
      }),
      !0
    );
    const V = {
      tabId: e.tab,
      get element() {
        return W();
      },
      get active() {
        return s(A);
      },
      forceAccessible(B) {
        K(M, B, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: R,
      activate: J,
      deactivate: P
    };
    return k && k(V), s(y).init(), () => {
      var B;
      j && j(V), (B = s(y)) == null || B.destroy();
    };
  });
  function O(V) {
    return V in _ ? _[V] : W().classList.contains(V);
  }
  function T(V) {
    _[V] || (_[V] = !0);
  }
  function H(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function U(V, B) {
    E[V] != B && (B === "" || B == null ? delete E[V] : E[V] = B);
  }
  function z(V, B) {
    x[V] !== B && (x[V] = B);
  }
  function J(V, B) {
    var ee, Z, ce;
    K(A, !0), B && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (Z = s(y)) == null || Z.activate(V), B && ((ce = s(y)) == null || ce.setFocusOnActivate(w));
  }
  function P() {
    var V;
    K(A, !1), (V = s(y)) == null || V.deactivate();
  }
  function R() {
    W().focus();
  }
  function W() {
    return b.getElement();
  }
  var Ae = { activate: J, deactivate: P, focus: R, getElement: W }, _e = re(), F = Q(_e);
  {
    let V = /* @__PURE__ */ fe(() => [
      [
        zt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: T,
          removeClass: H,
          addStyle: U
        }
      ],
      ...r()
    ]), B = /* @__PURE__ */ fe(() => Pe({
      "mdc-tab": !0,
      "mdc-tab--active": s(A),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ fe(() => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([a()]).join(" ")), Z = /* @__PURE__ */ fe(() => s(A) ? "true" : "false"), ce = /* @__PURE__ */ fe(() => s(A) || s(M) ? "0" : "-1"), we = /* @__PURE__ */ fe(() => Zn(g, ["content$", "tabIndicator$"]));
    pr(F, m, ($, ie) => {
      Ee(
        ie($, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(B);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(Z);
            },
            get tabindex() {
              return s(ce);
            },
            get href() {
              return d();
            }
          },
          () => x,
          () => s(we),
          {
            onclick: (Me) => {
              var Le;
              (Le = e.onclick) == null || Le.call(e, Me), !Me.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Me, Le) => {
              var je = s_(), Ke = Q(je);
              Ue(Ke, (Fe, ct) => ({ class: Fe, ...ct }), [
                () => Pe({ "mdc-tab__content": !0, [f()]: !0 }),
                () => rt(g, "content$")
              ]);
              var Be = me(Ke);
              Se(Be, () => e.children ?? pe);
              var N = Ie(Be, 2);
              {
                var X = (Fe) => {
                  n(Fe);
                };
                oe(N, (Fe) => {
                  c() && Fe(X);
                });
              }
              Ee(Ke, (Fe) => S = Fe, () => S), De(Ke, (Fe, ct) => q == null ? void 0 : q(Fe, ct), v);
              var de = Ie(Ke, 2);
              {
                var Oe = (Fe) => {
                  n(Fe);
                };
                oe(de, (Fe) => {
                  c() || Fe(Oe);
                });
              }
              L(Me, je);
            },
            $$slots: { default: !0 }
          }
        )),
        (Me) => b = Me,
        () => b
      );
    });
  }
  return L(t, _e), Te(Ae);
}
var u_ = (t, e) => e(), c_ = /* @__PURE__ */ be('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), d_ = /* @__PURE__ */ be('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), f_ = /* @__PURE__ */ be('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function h_(t, e) {
  xe(e, !0);
  let n = p(e, "filters", 31, () => ue([])), r = p(e, "onFilterChange", 3, (I) => {
  }), i = p(e, "activeNavigationTab", 31, () => ue(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = p(e, "searchText", 15, ""), o = p(e, "searchLabel", 3, "Search"), u = p(e, "searchPlaceholder", 3, "Type to search..."), l = p(e, "onSearchInput", 3, () => {
  }), c = p(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ fe(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), v = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = f_(), m = me(f);
  {
    var h = (I) => {
      Mg(I, {
        oninput: () => l()(),
        icon: "search",
        get label() {
          return o();
        },
        get placeholder() {
          return u();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(_) {
          a(_);
        }
      });
    };
    oe(m, (I) => {
      c() || I(h);
    });
  }
  var g = Ie(m, 2);
  {
    var b = (I) => {
      i_(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(E) {
          i(E);
        },
        tab: (E, x = pe) => {
          l_(E, {
            get tab() {
              return x();
            },
            minWidth: !0,
            children: (w, C) => {
              Vm(w, {
                children: (A, M) => {
                  var G = Rt();
                  Re(() => st(G, x())), L(A, G);
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
    oe(g, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = Ie(g, 2);
  {
    var S = (I) => {
      var _ = d_(), E = Ie(me(_), 2);
      jb(E, {
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var x = Ie(E, 2);
      {
        var w = (C) => {
          var A = c_();
          A.__click = [u_, v], L(C, A);
        };
        oe(x, (C) => {
          s(d) && C(w);
        });
      }
      L(I, _);
    };
    oe(y, (I) => {
      n() && n().length > 0 && I(S);
    });
  }
  L(t, f), Te();
}
dn(["click"]);
dn(["change", "click"]);
var v_ = /* @__PURE__ */ be('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function m_(t, e) {
  xe(e, !0);
  const [n, r] = br();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h = ue({}), g = ue({}), b = ue({}), y = ue({}), S = ue({}), I = he("SMUI:linear-progress:context"), _ = he("SMUI:linear-progress:closed");
  Ce(() => {
    _ && ci(_, l());
  }), Ce(() => {
    s(m) && s(m).isDeterminate() !== !u() && s(m).setDeterminate(!u());
  }), Ce(() => {
    s(m) && s(m).getProgress() !== c() && s(m).setProgress(c());
  }), Ce(() => {
    s(m) && (d() == null ? s(m).setBuffer(1) : s(m).setBuffer(d()));
  }), Ce(() => {
    s(m) && (l() ? s(m).close() : s(m).open());
  }), it(() => (K(
    m,
    new Kp({
      addClass: x,
      forceLayout: () => {
        j().getBoundingClientRect();
      },
      setBufferBarStyle: G,
      setPrimaryBarStyle: k,
      hasClass: E,
      removeAttribute: A,
      removeClass: w,
      setAttribute: C,
      setStyle: M,
      attachResizeObserver: (R) => {
        const W = window.ResizeObserver;
        if (W) {
          const Ae = new W(R);
          return Ae.observe(j()), Ae;
        }
        return null;
      },
      getWidth: () => j().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function E(R) {
    return R in h ? h[R] : j().classList.contains(R);
  }
  function x(R) {
    h[R] || (h[R] = !0);
  }
  function w(R) {
    (!(R in h) || h[R]) && (h[R] = !1);
  }
  function C(R, W) {
    g[R] !== W && (g[R] = W);
  }
  function A(R) {
    (!(R in g) || g[R] != null) && (g[R] = void 0);
  }
  function M(R, W) {
    b[R] != W && (W === "" || W == null ? delete b[R] : b[R] = W);
  }
  function G(R, W) {
    y[R] != W && (W === "" || W == null ? delete y[R] : y[R] = W);
  }
  function k(R, W) {
    S[R] != W && (W === "" || W == null ? delete S[R] : S[R] = W);
  }
  function j() {
    return f;
  }
  var O = { getElement: j }, T = v_(), H = (R) => {
    var W;
    s(m) && s(m).handleTransitionEnd(), (W = e.ontransitionend) == null || W.call(e, R);
  };
  Ue(
    T,
    (R, W) => ({
      class: R,
      style: W,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...v,
      ontransitionend: H
    }),
    [
      () => Pe({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([R, W]) => `${R}: ${W};`).concat([o()]).join(" ")
    ]
  );
  var U = me(T), z = me(U), J = Ie(U, 2);
  Ee(T, (R) => f = R, () => f), De(T, (R, W) => q == null ? void 0 : q(R, W), i), Re(
    (R, W) => {
      Gt(z, R), Gt(J, W);
    },
    [
      () => Object.entries(y).map(([R, W]) => `${R}: ${W};`).join(" "),
      () => Object.entries(S).map(([R, W]) => `${R}: ${W};`).join(" ")
    ]
  ), L(t, T);
  var P = Te(O);
  return r(), P;
}
var g_ = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), p_ = /* @__PURE__ */ fn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), b_ = /* @__PURE__ */ be('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), __ = (t, e) => e(), y_ = /* @__PURE__ */ be('<input type="text" class="svelte-1mj71p3"/>'), I_ = (t, e) => e(), E_ = /* @__PURE__ */ be('<input type="number" class="svelte-1mj71p3"/>'), S_ = /* @__PURE__ */ be("<!> <!>", 1), A_ = /* @__PURE__ */ be("<!> <!>", 1), C_ = /* @__PURE__ */ be('<div class="cell-actions svelte-1mj71p3"></div>'), x_ = /* @__PURE__ */ be("<!> <!>", 1);
function T_(t, e) {
  xe(e, !0);
  const n = () => Xn(b, "$sortColumn", a), r = () => Xn(y, "$sortDirection", a), i = () => Xn(g, "$filteredData", a), [a, o] = br();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, bp), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ue([])), v = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), h = ue({ name: "", color: "", number: "" }), g = en([]), b = en(null), y = en(null), S = /* @__PURE__ */ fe(() => c().some((x) => x.filter));
  e.store.store.subscribe((x) => {
    d([...x]), I();
  });
  function I() {
    let x = d().filter((w) => c().every((C) => {
      const A = h[C.field], M = C.filterValueGetter ? C.filterValueGetter(w) : w[C.field];
      return A ? C.filterType === "number" ? M == A : M.toString().toLowerCase().includes(A.toLowerCase()) : !0;
    }));
    x = _(x), g.set(x);
  }
  function _(x) {
    let w, C;
    return b.subscribe((A) => w = A), y.subscribe((A) => C = A), !w || !C ? x : x.sort((A, M) => {
      let G = A[w], k = M[w];
      return G == null && (G = ""), k == null && (k = ""), C === "asc" ? G.toString().localeCompare(k.toString()) : k.toString().localeCompare(G.toString());
    });
  }
  function E(x) {
    b.update((w) => {
      if (w === x)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), x;
      return x;
    }), I();
  }
  g.set(d()), Jp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (w) => {
      m_(w, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(C) {
          u(C);
        }
      });
    },
    children: (w, C) => {
      var A = x_(), M = Q(A);
      eb(M, {
        children: (k, j) => {
          var O = A_(), T = Q(O);
          Xa(T, {
            class: "header-title-row",
            children: (z, J) => {
              var P = re(), R = Q(P);
              Pn(R, 17, c, wi, (W, Ae) => {
                fa(W, {
                  onclick: () => s(Ae).sortable && E(s(Ae).field),
                  get style() {
                    return s(Ae).headerStyle;
                  },
                  children: (_e, F) => {
                    var V = b_(), B = me(V), ee = me(B), Z = me(ee), ce = Ie(ee, 2);
                    {
                      var we = ($) => {
                        var ie = re(), Me = Q(ie);
                        {
                          var Le = (je) => {
                            var Ke = re(), Be = Q(Ke);
                            {
                              var N = (de) => {
                                var Oe = g_();
                                L(de, Oe);
                              }, X = (de) => {
                                var Oe = re(), Fe = Q(Oe);
                                {
                                  var ct = (pt) => {
                                    var se = p_();
                                    L(pt, se);
                                  };
                                  oe(
                                    Fe,
                                    (pt) => {
                                      r() === "desc" && pt(ct);
                                    },
                                    !0
                                  );
                                }
                                L(de, Oe);
                              };
                              oe(Be, (de) => {
                                r() === "asc" ? de(N) : de(X, !1);
                              });
                            }
                            L(je, Ke);
                          };
                          oe(Me, (je) => {
                            n() === s(Ae).field && r() !== null && je(Le);
                          });
                        }
                        L($, ie);
                      };
                      oe(ce, ($) => {
                        s(Ae).sortable && $(we);
                      });
                    }
                    Re(() => {
                      Gt(V, `min-width: ${s(Ae).minWidth ?? 0 ?? ""}`), st(Z, s(Ae).headerName);
                    }), L(_e, V);
                  },
                  $$slots: { default: !0 }
                });
              }), L(z, P);
            },
            $$slots: { default: !0 }
          });
          var H = Ie(T, 2);
          {
            var U = (z) => {
              Xa(z, {
                class: "header-filter-row",
                children: (J, P) => {
                  var R = re(), W = Q(R);
                  Pn(W, 17, c, wi, (Ae, _e) => {
                    fa(Ae, {
                      children: (F, V) => {
                        var B = re(), ee = Q(B);
                        {
                          var Z = (ce) => {
                            var we = S_(), $ = Q(we);
                            {
                              var ie = (je) => {
                                var Ke = y_();
                                Ke.__input = [__, I], Re(() => Rr(Ke, "placeholder", `${f()} ${s(_e).headerName}`)), Sa(Ke, () => h[s(_e).field], (Be) => h[s(_e).field] = Be), L(je, Ke);
                              };
                              oe($, (je) => {
                                s(_e).filterType === "text" && je(ie);
                              });
                            }
                            var Me = Ie($, 2);
                            {
                              var Le = (je) => {
                                var Ke = E_();
                                Ke.__input = [I_, I], Re(() => Rr(Ke, "placeholder", `${f()} ${s(_e).headerName}`)), Sa(Ke, () => h[s(_e).field], (Be) => h[s(_e).field] = Be), L(je, Ke);
                              };
                              oe(Me, (je) => {
                                s(_e).filterType === "number" && je(Le);
                              });
                            }
                            L(ce, we);
                          };
                          oe(ee, (ce) => {
                            s(_e).filter && ce(Z);
                          });
                        }
                        L(F, B);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(J, R);
                },
                $$slots: { default: !0 }
              });
            };
            oe(H, (z) => {
              s(S) && z(U);
            });
          }
          L(k, O);
        },
        $$slots: { default: !0 }
      });
      var G = Ie(M, 2);
      nb(G, {
        children: (k, j) => {
          var O = re(), T = Q(O);
          {
            var H = (z) => {
              Xa(z, {
                children: (J, P) => {
                  fa(J, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, W) => {
                      var Ae = Rt();
                      Re(() => st(Ae, m())), L(R, Ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (z) => {
              var J = re(), P = Q(J);
              Pn(P, 1, i, wi, (R, W) => {
                Xa(R, {
                  children: (Ae, _e) => {
                    var F = re(), V = Q(F);
                    Pn(V, 17, c, (B) => B.field, (B, ee) => {
                      var Z = re(), ce = Q(Z);
                      {
                        var we = (ie) => {
                          fa(ie, {
                            children: (Me, Le) => {
                              var je = C_();
                              Pn(je, 21, v, wi, (Ke, Be) => {
                                var N = re(), X = Q(N);
                                {
                                  var de = (Fe) => {
                                    po(Fe, {
                                      get content() {
                                        return s(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let se = /* @__PURE__ */ fe(() => s(Be).disabled(s(W)));
                                          Jm(ct, {
                                            get iconComponent() {
                                              return s(Be).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Be).iconStyles;
                                            },
                                            callback: () => s(Be).callback(s(W)),
                                            get disabled() {
                                              return s(se);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Oe = (Fe) => {
                                    po(Fe, {
                                      get content() {
                                        return s(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let se = /* @__PURE__ */ fe(() => s(Be).disabled(s(W)));
                                          Xm(ct, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Be).callback(s(W)),
                                            get disabled() {
                                              return s(se);
                                            },
                                            children: (ye, Y) => {
                                              var te = re(), Ne = Q(te);
                                              {
                                                var dt = (mt) => {
                                                  Ip(mt, { svgStyles: "margin: unset" });
                                                }, bt = (mt) => {
                                                  var Ut = re(), _r = Q(Ut);
                                                  {
                                                    var ht = (yt) => {
                                                      Wc(yt, { svgStyles: "margin: unset" });
                                                    }, Mt = (yt) => {
                                                      var wn = re(), pi = Q(wn);
                                                      {
                                                        var kn = (Qe) => {
                                                          Ap(Qe, { svgStyles: "margin: unset" });
                                                        }, qe = (Qe) => {
                                                          var $e = re(), Dt = Q($e);
                                                          {
                                                            var vn = (ut) => {
                                                              xp(ut, { svgStyles: "margin: unset" });
                                                            }, at = (ut) => {
                                                              var At = re(), et = Q(At);
                                                              {
                                                                var wt = (Lt) => {
                                                                  Op(Lt, { svgStyles: "margin: unset" });
                                                                }, Ln = (Lt) => {
                                                                  var _t = re(), Pt = Q(_t);
                                                                  {
                                                                    var on = (sn) => {
                                                                      Mp(sn, { svgStyles: "margin: unset" });
                                                                    }, kt = (sn) => {
                                                                      var Kt = re(), Bn = Q(Kt);
                                                                      {
                                                                        var Gr = (jt) => {
                                                                          Pp(jt, { svgStyles: "margin: unset" });
                                                                        }, ln = (jt) => {
                                                                          wp(jt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        oe(
                                                                          Bn,
                                                                          (jt) => {
                                                                            s(Be).icon === "delete" ? jt(Gr) : jt(ln, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      L(sn, Kt);
                                                                    };
                                                                    oe(
                                                                      Pt,
                                                                      (sn) => {
                                                                        s(Be).icon === "edit" ? sn(on) : sn(kt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Lt, _t);
                                                                };
                                                                oe(
                                                                  et,
                                                                  (Lt) => {
                                                                    s(Be).icon === "remove" ? Lt(wt) : Lt(Ln, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(ut, At);
                                                            };
                                                            oe(
                                                              Dt,
                                                              (ut) => {
                                                                s(Be).icon === "find-in-page" ? ut(vn) : ut(at, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(Qe, $e);
                                                        };
                                                        oe(
                                                          pi,
                                                          (Qe) => {
                                                            s(Be).icon === "download" ? Qe(kn) : Qe(qe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(yt, wn);
                                                    };
                                                    oe(
                                                      _r,
                                                      (yt) => {
                                                        s(Be).icon === "cancel" ? yt(ht) : yt(Mt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(mt, Ut);
                                                };
                                                oe(Ne, (mt) => {
                                                  s(Be).icon === "add" ? mt(dt) : mt(bt, !1);
                                                });
                                              }
                                              L(ye, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(X, (Fe) => {
                                    s(Be).iconComponent ? Fe(de) : Fe(Oe, !1);
                                  });
                                }
                                L(Ke, N);
                              }), L(Me, je);
                            },
                            $$slots: { default: !0 }
                          });
                        }, $ = (ie) => {
                          fa(ie, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Me, Le) => {
                              var je = re(), Ke = Q(je);
                              {
                                var Be = (X) => {
                                  const de = /* @__PURE__ */ fe(() => s(ee).cellRenderer);
                                  var Oe = re(), Fe = Q(Oe);
                                  pr(Fe, () => s(de), (ct, pt) => {
                                    pt(ct, nt(
                                      {
                                        get row() {
                                          return s(W);
                                        },
                                        get value() {
                                          return s(W)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), L(X, Oe);
                                }, N = (X) => {
                                  var de = re(), Oe = Q(de);
                                  {
                                    var Fe = (pt) => {
                                      var se = Rt();
                                      Re((ye) => st(se, ye), [
                                        () => s(ee).valueFormatter(s(W)[s(ee).field])
                                      ]), L(pt, se);
                                    }, ct = (pt) => {
                                      var se = Rt();
                                      Re(() => st(se, s(W)[s(ee).field] ?? "")), L(pt, se);
                                    };
                                    oe(
                                      Oe,
                                      (pt) => {
                                        s(ee).valueFormatter ? pt(Fe) : pt(ct, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(X, de);
                                };
                                oe(Ke, (X) => {
                                  s(ee).cellRenderer ? X(Be) : X(N, !1);
                                });
                              }
                              L(Me, je);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(ce, (ie) => {
                          s(ee).field === "actions" ? ie(we) : ie($, !1);
                        });
                      }
                      L(B, Z);
                    }), L(Ae, F);
                  },
                  $$slots: { default: !0 }
                });
              }), L(z, J);
            };
            oe(T, (z) => {
              i().length === 0 ? z(H) : z(U, !1);
            });
          }
          L(k, O);
        },
        $$slots: { default: !0 }
      }), L(w, A);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), o();
}
dn(["input"]);
function St(t) {
  return typeof t == "function";
}
function Ys(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ts = Ys(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function _o(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ha = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Ht(o), l = u.next(); !l.done; l = u.next()) {
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
          o.remove(this);
      var d = this.initialTeardown;
      if (St(d))
        try {
          d();
        } catch (g) {
          a = g instanceof ts ? g.errors : [g];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = Ht(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              ru(h);
            } catch (g) {
              a = a ?? [], g instanceof ts ? a = Kn(Kn([], vr(a)), vr(g.errors)) : a.push(g);
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
        throw new ts(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        ru(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && _o(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && _o(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Xc = Ha.EMPTY;
function Kc(t) {
  return t instanceof Ha || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function ru(t) {
  St(t) ? t() : t.unsubscribe();
}
var w_ = {
  Promise: void 0
}, L_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Kn([t, e], vr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Yc(t) {
  L_.setTimeout(function() {
    throw t;
  });
}
function iu() {
}
function ro(t) {
  t();
}
var Zs = function(t) {
  We(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Kc(n) && n.add(r)) : r.destination = M_, r;
  }
  return e.create = function(n, r, i) {
    return new xs(n, r, i);
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
}(Ha), O_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Za(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Za(r);
      }
    else
      Za(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Za(n);
      }
  }, t;
}(), xs = function(t) {
  We(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return St(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new O_(o), a;
  }
  return e;
}(Zs);
function Za(t) {
  Yc(t);
}
function R_(t) {
  throw t;
}
var M_ = {
  closed: !0,
  next: iu,
  error: R_,
  complete: iu
}, Qs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function No(t) {
  return t;
}
function D_(t) {
  return t.length === 0 ? No : t.length === 1 ? t[0] : function(n) {
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
    var i = this, a = N_(e) ? e : new xs(e, n, r);
    return ro(function() {
      var o = i, u = o.operator, l = o.source;
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
    return n = au(n), new n(function(i, a) {
      var o = new xs({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Qs] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return D_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = au(e), new e(function(r, i) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function au(t) {
  var e;
  return (e = t ?? w_.Promise) !== null && e !== void 0 ? e : Promise;
}
function P_(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function N_(t) {
  return t && t instanceof Zs || P_(t) && Kc(t);
}
function H_(t) {
  return St(t == null ? void 0 : t.lift);
}
function $n(t) {
  return function(e) {
    if (H_(e))
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
function mr(t, e, n, r, i) {
  return new U_(t, e, n, r, i);
}
var U_ = function(t) {
  We(e, t);
  function e(n, r, i, a, o, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = r ? function(c) {
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
}(Zs), k_ = Ys(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ts = function(t) {
  We(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new ou(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new k_();
  }, e.prototype.next = function(n) {
    var r = this;
    ro(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Ht(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
            var l = u.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = o.return) && a.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    ro(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    ro(function() {
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
    var r = this, i = this, a = i.hasError, o = i.isStopped, u = i.observers;
    return a || o ? Xc : (this.currentObservers = null, u.push(n), new Ha(function() {
      r.currentObservers = null, _o(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new xn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new ou(n, r);
  }, e;
}(xn), ou = function(t) {
  We(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Xc;
  }, e;
}(Ts), B_ = {
  now: function() {
    return Date.now();
  }
}, F_ = function(t) {
  We(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ha), su = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Kn([t, e], vr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, V_ = function(t) {
  We(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, o = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(o, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), su.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && su.clearInterval(r);
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
    } catch (o) {
      i = !0, a = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, _o(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(F_), lu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = B_.now, t;
}(), G_ = function(t) {
  We(e, t);
  function e(n, r) {
    r === void 0 && (r = lu.now);
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
}(lu), j_ = new G_(V_);
function W_(t) {
  return t && St(t.schedule);
}
function Zc(t) {
  return t[t.length - 1];
}
function Qc(t) {
  return W_(Zc(t)) ? t.pop() : void 0;
}
function q_(t, e) {
  return typeof Zc(t) == "number" ? t.pop() : e;
}
var Jc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function $c(t) {
  return St(t == null ? void 0 : t.then);
}
function ed(t) {
  return St(t[Qs]);
}
function td(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function nd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function z_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var rd = z_();
function id(t) {
  return St(t == null ? void 0 : t[rd]);
}
function ad(t) {
  return Ah(this, arguments, function() {
    var n, r, i, a;
    return Ws(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Mi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Mi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Mi(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
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
function od(t) {
  return St(t == null ? void 0 : t.getReader);
}
function ta(t) {
  if (t instanceof xn)
    return t;
  if (t != null) {
    if (ed(t))
      return X_(t);
    if (Jc(t))
      return K_(t);
    if ($c(t))
      return Y_(t);
    if (td(t))
      return sd(t);
    if (id(t))
      return Z_(t);
    if (od(t))
      return Q_(t);
  }
  throw nd(t);
}
function X_(t) {
  return new xn(function(e) {
    var n = t[Qs]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function K_(t) {
  return new xn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Y_(t) {
  return new xn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Yc);
  });
}
function Z_(t) {
  return new xn(function(e) {
    var n, r;
    try {
      for (var i = Ht(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
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
function sd(t) {
  return new xn(function(e) {
    J_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Q_(t) {
  return sd(ad(t));
}
function J_(t, e) {
  var n, r, i, a;
  return dc(this, void 0, void 0, function() {
    var o, u;
    return Ws(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Ch(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
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
function si(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function ld(t, e) {
  return e === void 0 && (e = 0), $n(function(n, r) {
    n.subscribe(mr(r, function(i) {
      return si(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return si(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return si(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function ud(t, e) {
  return e === void 0 && (e = 0), $n(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function $_(t, e) {
  return ta(t).pipe(ud(e), ld(e));
}
function ey(t, e) {
  return ta(t).pipe(ud(e), ld(e));
}
function ty(t, e) {
  return new xn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function ny(t, e) {
  return new xn(function(n) {
    var r;
    return si(n, e, function() {
      r = t[rd](), si(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return St(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new xn(function(n) {
    si(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      si(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function ry(t, e) {
  return cd(ad(t), e);
}
function iy(t, e) {
  if (t != null) {
    if (ed(t))
      return $_(t, e);
    if (Jc(t))
      return ty(t, e);
    if ($c(t))
      return ey(t, e);
    if (td(t))
      return cd(t, e);
    if (id(t))
      return ny(t, e);
    if (od(t))
      return ry(t, e);
  }
  throw nd(t);
}
function dd(t, e) {
  return e ? iy(t, e) : ta(t);
}
function fd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Qc(t);
  return dd(t, n);
}
function Qt(t, e) {
  return $n(function(n, r) {
    var i = 0;
    n.subscribe(mr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function ay(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, v = !1, f = function() {
    v && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? h(g) : l.push(g);
  }, h = function(g) {
    c++;
    var b = !1;
    ta(n(g, d++)).subscribe(mr(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var S = l.shift();
            o || h(S);
          }; l.length && c < r; )
            y();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(mr(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function yo(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? yo(function(r, i) {
    return Qt(function(a, o) {
      return e(r, a, i, o);
    })(ta(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), $n(function(r, i) {
    return ay(r, i, t, n);
  }));
}
function oy(t) {
  return t === void 0 && (t = 1 / 0), yo(No, t);
}
function hd(t, e) {
  return St(e) ? yo(t, e, 1) : yo(t, 1);
}
function sy(t, e) {
  return e === void 0 && (e = j_), $n(function(n, r) {
    var i = null, a = null, o = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = a;
        a = null, r.next(c);
      }
    };
    function l() {
      var c = o + t, d = e.now();
      if (d < c) {
        i = this.schedule(void 0, c - d), r.add(i);
        return;
      }
      u();
    }
    n.subscribe(mr(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function ly(t, e) {
  return e === void 0 && (e = No), t = t ?? uy, $n(function(n, r) {
    var i, a = !0;
    n.subscribe(mr(r, function(o) {
      var u = e(o);
      (a || !t(i, u)) && (a = !1, i = u, r.next(o));
    }));
  });
}
function uy(t, e) {
  return t === e;
}
function cy(t) {
  return $n(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function dy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Qc(t), r = q_(t, 1 / 0);
  return $n(function(i, a) {
    oy(r)(dd(Kn([i], vr(t)), n)).subscribe(a);
  });
}
function fy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return dy.apply(void 0, Kn([], vr(t)));
}
function hy(t, e) {
  return $n(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(mr(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      ta(t(l, d)).subscribe(i = mr(r, function(v) {
        return r.next(e ? e(l, v, d, c++) : v);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function uu(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? $n(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(mr(a, function(l) {
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
  }) : No;
}
function vd(t) {
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
var vy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = vd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Io = Ys(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = vd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), my = function() {
  function t(e, n) {
    return Io.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Io.prototype), t;
}();
function gy(t, e) {
  return Vr({ method: "GET", url: t, headers: e });
}
function py(t, e, n) {
  return Vr({ method: "POST", url: t, body: e, headers: n });
}
function by(t, e) {
  return Vr({ method: "DELETE", url: t, headers: e });
}
function _y(t, e, n) {
  return Vr({ method: "PUT", url: t, body: e, headers: n });
}
function yy(t, e, n) {
  return Vr({ method: "PATCH", url: t, body: e, headers: n });
}
var Iy = Qt(function(t) {
  return t.response;
});
function Ey(t, e) {
  return Iy(Vr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Vr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ay(n);
  };
  return t.get = gy, t.post = py, t.delete = by, t.put = _y, t.patch = yy, t.getJSON = Ey, t;
}(), Sy = "upload", cu = "download", ns = "loadstart", rs = "progress", du = "load";
function Ay(t) {
  return new xn(function(e) {
    var n, r, i = le({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, z) {
          return c.set(z, U);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var v = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (v[f.toLowerCase()] = u[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in v) && (v["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !m) && g && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (v[b] = y);
    }
    var S = Cy(o, v), I = le(le({}, i), {
      url: l,
      headers: v,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, x = t.includeDownloadProgress, w = x === void 0 ? !1 : x, C = t.includeUploadProgress, A = C === void 0 ? !1 : C, M = function(U, z) {
        _.addEventListener(U, function() {
          var J, P = z();
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, P), e.error(P);
        });
      };
      M("timeout", function() {
        return new my(_, I);
      }), M("abort", function() {
        return new Io("aborted", _, I);
      });
      var G = function(U, z) {
        return new vy(z, _, I, U + "_" + z.type);
      }, k = function(U, z, J) {
        U.addEventListener(z, function(P) {
          e.next(G(J, P));
        });
      };
      A && [ns, rs, du].forEach(function(U) {
        return k(_.upload, U, Sy);
      }), E && [ns, rs].forEach(function(U) {
        return _.upload.addEventListener(U, function(z) {
          var J;
          return (J = E == null ? void 0 : E.next) === null || J === void 0 ? void 0 : J.call(E, z);
        });
      }), w && [ns, rs].forEach(function(U) {
        return k(_, U, cu);
      });
      var j = function(U) {
        var z = "ajax error" + (U ? " " + U : "");
        e.error(new Io(z, _, I));
      };
      _.addEventListener("error", function(U) {
        var z;
        (z = E == null ? void 0 : E.error) === null || z === void 0 || z.call(E, U), j();
      }), _.addEventListener(du, function(U) {
        var z, J, P = _.status;
        if (P < 400) {
          (z = E == null ? void 0 : E.complete) === null || z === void 0 || z.call(E);
          var R = void 0;
          try {
            R = G(cu, U);
          } catch (W) {
            e.error(W);
            return;
          }
          e.next(R), e.complete();
        } else
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, U), j(P);
      });
    }
    var O = I.user, T = I.method, H = I.async;
    O ? _.open(T, l, H, O, I.password) : _.open(T, l, H), H && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && _.setRequestHeader(f, v[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Cy(t, e) {
  var n;
  if (!t || typeof t == "string" || Ry(t) || My(t) || Ty(t) || wy(t) || Ly(t) || Dy(t))
    return t;
  if (Oy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var xy = Object.prototype.toString;
function Js(t, e) {
  return xy.call(t) === "[object " + e + "]";
}
function Ty(t) {
  return Js(t, "ArrayBuffer");
}
function wy(t) {
  return Js(t, "File");
}
function Ly(t) {
  return Js(t, "Blob");
}
function Oy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Ry(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function My(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Dy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let Py = class {
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
const Ny = new Py("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Hy = [Ny], Uy = Hy[0].getUrl();
let md = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Uy;
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
}, ky = class {
  constructor(e = new md()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${By(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => fd(n).pipe(
      Qt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      hd(
        (r) => Vr(r).pipe(
          Qt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Qt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const dr = (t) => encodeURIComponent(`${t}`), By = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${dr(e)}=${dr(r)}`).join("&") : `${dr(e)}=${dr(n)}`
).join("&"), Ci = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Fy extends ky {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ci(e, "id", "deleteAllSclFileVersions"), Ci(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", dr(e)).replace("{type}", dr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ci(e, "id", "retrieveDataResourceByVersion"), Ci(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", dr(e)).replace("{version}", dr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ci(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", dr(e)),
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
class $s {
  constructor(e, n, r, i, a, o, u, l, c) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = o, this.available = u, this.deleted = l, this.location = c;
  }
  static from(e) {
    return new $s(
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
class Vy {
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
const Gy = new Vy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), jy = [Gy], Wy = jy[0].getUrl();
class gd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Wy;
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
class qy {
  constructor(e = new gd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${zy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => fd(n).pipe(
      Qt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      hd(
        (r) => Vr(r).pipe(
          Qt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Qt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Mn = (t) => encodeURIComponent(`${t}`), zy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Mn(e)}=${Mn(r)}`).join("&") : `${Mn(e)}=${Mn(n)}`
).join("&"), or = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Xy extends qy {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    or(e, "locationId", "assignResourceToLocation"), or(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Mn(e)).replace("{uuid}", Mn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    or(e, "location", "createLocation");
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
    or(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    or(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mn(e)),
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
    or(e, "locationId", "unassignResourceFromLocation"), or(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Mn(e)).replace("{uuid}", Mn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    or(e, "locationId", "updateLocation"), or(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Mn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class el {
  constructor(e, n, r, i, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new el(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Oi {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      Qt((n) => n || []),
      Qt((n) => n.map((r) => el.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(Qt(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(Qt(() => {
    }));
  }
  searchResources(e) {
    return this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Qt((n) => n.results),
      Qt(
        (n) => n.map((r) => $s.from(r))
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
    const n = new gd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Xy(n);
  }
  createHistoryApiClient(e) {
    const n = new md({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Fy(n);
  }
}
var ur;
class Ky {
  constructor() {
    tt(this, ur, en([]));
  }
  get store() {
    return ne(this, ur);
  }
  set(e) {
    ne(this, ur).set(e);
  }
  update(e) {
    ne(this, ur).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    ne(this, ur).update((n) => [...n, e]);
  }
  remove(e) {
    ne(this, ur).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return uc(ne(this, ur)).find((n) => n.uuid === e);
  }
}
ur = new WeakMap();
var Yy = (t, e, n) => {
  var r;
  return (r = e.onChange) == null ? void 0 : r.call(e, e.row, s(n));
}, Zy = /* @__PURE__ */ be("<option> </option>"), Qy = /* @__PURE__ */ be(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function Jy(t, e) {
  xe(e, !0);
  let n = p(e, "locations", 19, () => []), r = /* @__PURE__ */ ve(ue(e.value ?? ""));
  Ce(() => {
    K(r, e.value ?? "", !0);
  }), Ce(() => {
    var l;
    s(r) !== (e.value ?? "") && ((l = e.onChange) == null || l.call(e, e.row, s(r)));
  });
  var i = Qy(), a = me(i);
  a.__change = [Yy, e, r];
  var o = me(a);
  o.value = o.__value = "";
  var u = Ie(o);
  Pn(u, 17, n, (l) => l.value, (l, c) => {
    var d = Zy(), v = me(d), f = {};
    Re(() => {
      st(v, s(c).label), f !== (f = s(c).value) && (d.value = (d.__value = s(c).value) ?? "");
    }), L(l, d);
  }), zf(a, () => s(r), (l) => K(r, l)), L(t, i), Te();
}
dn(["change"]);
em({ en: Om, de: mm });
var $y = /* @__PURE__ */ be('<div class="app-container svelte-1lw4l1e"><!> <!></div> <!>', 1);
function eI(t, e) {
  xe(e, !0);
  const n = () => Xn($v, "$_", r), [r, i] = br(), a = Oi.getInstance();
  let o = /* @__PURE__ */ ve(ue([])), u = "", l = /* @__PURE__ */ ve(!0), c = /* @__PURE__ */ ve("");
  const d = new Ts(), f = new Ts().pipe(fy(d.pipe(sy(200)))).pipe(
    Qt(() => y(s(m))),
    ly((A, M) => JSON.stringify(A) === JSON.stringify(M)),
    uu(() => {
      K(l, !0);
    }),
    hy((A) => a.searchResources(A).pipe(
      uu((M) => {
        h.set(M.filter((G) => G.location !== u));
      }),
      cy(() => {
        K(l, !1);
      })
    ))
  );
  it(() => {
    const A = f.subscribe();
    return a.getLocations().subscribe({
      next: (M) => {
        K(o, M.map((G) => ({ label: G.name, value: G.uuid })), !0), K(m, s(
          m
          // populate location filter options
        ).map((G) => G.key === "location" ? { ...G, options: s(o) } : G), !0);
      },
      error: (M) => {
        console.error("Error loading locations:", M), ya.error("Failed to load locations.");
      }
    }), d.next(), () => A.unsubscribe();
  });
  let m = /* @__PURE__ */ ve(ue([
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
  const h = new Ky();
  function g(A) {
    return new Date(A).toLocaleDateString();
  }
  function b(A) {
    var M;
    return !s(o) || !A ? A || "" : ((M = s(o).find((G) => G.value === A)) == null ? void 0 : M.label) ?? A;
  }
  function y(A) {
    const M = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return A.forEach((G) => {
      if (G.value) {
        if (G.type === "date") {
          const k = new Date(G.value);
          G.key === "from" && (M.from = k.toISOString()), G.key === "to" && (k.setHours(23, 59, 59, 999), M.to = k.toISOString());
          return;
        }
        G.key in M && (M[G.key] = G.value);
      }
    }), s(c) && s(c).trim() !== "" && (M.name = s(c).trim()), M;
  }
  function S(A, M) {
    const G = A.location, k = M || null;
    if (G === k)
      return;
    const j = { ...A, location: k };
    h.update(j), (k ? a.assignResourceToLocation(k, A.uuid) : a.unassignResourceFromLocation(G ?? "", A.uuid)).subscribe({
      next: () => {
        d.next(), ya.success("Resource location updated successfully.");
      },
      error: () => {
        ya.error("Failed to update resource location.");
        const T = { ...A, location: G };
        h.update(T);
      }
    });
  }
  let I = /* @__PURE__ */ fe(() => [
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
      cellRenderer: Jy,
      cellRendererProps: {
        locations: s(o),
        onChange: S
      },
      filterValueGetter: (A) => b(A.location)
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
  Ce(() => {
  });
  var _ = $y(), E = Q(_), x = me(E);
  h_(x, {
    searchLabel: "Search name...",
    onFilterChange: () => d.next(null),
    onSearchInput: () => d.next(null),
    get filters() {
      return s(m);
    },
    set filters(A) {
      K(m, A, !0);
    },
    get searchText() {
      return s(c);
    },
    set searchText(A) {
      K(c, A, !0);
    }
  });
  var w = Ie(x, 2);
  {
    let A = /* @__PURE__ */ fe(() => !s(l)), M = /* @__PURE__ */ fe(() => n()("search"));
    T_(w, {
      get columnDefs() {
        return s(I);
      },
      get loadingDone() {
        return s(A);
      },
      get store() {
        return h;
      },
      get searchInputLabel() {
        return s(M);
      }
    });
  }
  var C = Ie(E, 2);
  wb(C, {}), L(t, _), Te(), i();
}
const pd = "location-viewer", bd = "0.0.1";
var tI = /* @__PURE__ */ be('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function nI(t, e) {
  xe(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = tI(), i = Q(r);
  {
    var a = (l) => {
      eI(l, {});
    };
    oe(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), u = Ie(o, 2);
  Re(() => {
    _l(o, pd), _l(u, bd);
  }), L(t, r), Te();
}
var Bi;
class cI extends HTMLElement {
  constructor() {
    super();
    tt(this, Bi);
    He(this, Bi, /* @__PURE__ */ ve(ue({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(ne(this, Bi));
  }
  set props(n) {
    K(ne(this, Bi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Hf(nI, { target: this.shadowRoot, props: this.props });
    const n = rI();
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
function rI() {
  const t = `${pd}-v${bd}-style`, e = iI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function iI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  cI as default
};
