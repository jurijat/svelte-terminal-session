var Ca = Object.defineProperty;
var an = (e) => {
  throw TypeError(e);
};
var Aa = (e, t, r) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fe = (e, t, r) => Aa(e, typeof t != "symbol" ? t + "" : t, r), wr = (e, t, r) => t.has(e) || an("Cannot " + r);
var y = (e, t, r) => (wr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), se = (e, t, r) => t.has(e) ? an("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pe = (e, t, r, n) => (wr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ze = (e, t, r) => (wr(e, t, "access private method"), r);
const Ra = "5";
var bn;
typeof window < "u" && ((bn = window.__svelte ?? (window.__svelte = {})).v ?? (bn.v = /* @__PURE__ */ new Set())).add(Ra);
const Na = 1, Ia = 2, Oa = 16, Ba = 1, Da = 4, Ma = 8, Fa = 16, La = 2, mn = "[", Br = "[!", Dr = "]", _t = {}, ae = Symbol(), gn = !1;
var Mr = Array.isArray, Ha = Array.prototype.indexOf, Fr = Array.from, nr = Object.keys, $t = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, za = Object.prototype, ja = Array.prototype, Ua = Object.getPrototypeOf, sn = Object.isExtensible;
function wn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Va() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const ge = 2, Lr = 4, yn = 8, qt = 16, Le = 32, Ke = 64, $n = 128, $e = 256, ar = 512, de = 1024, Te = 2048, Ge = 4096, xe = 8192, st = 16384, Hr = 32768, zr = 65536, ln = 1 << 17, Ya = 1 << 18, St = 1 << 19, Wa = 1 << 20, xr = 1 << 21, jr = 1 << 22, nt = 1 << 23, It = Symbol("$state"), Tn = Symbol("legacy props"), Ur = new class extends Error {
  constructor() {
    super(...arguments);
    fe(this, "name", "StaleReactionError");
    fe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), kn = 3, Ot = 8;
function Ka() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ga() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ja(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Za(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ei() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ti(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ri() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ni() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ai() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function cr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let z = !1;
function Fe(e) {
  z = e;
}
let M;
function Ie(e) {
  if (e === null)
    throw cr(), _t;
  return M = e;
}
function dr() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(M)
  );
}
function Y(e) {
  if (z) {
    if (/* @__PURE__ */ lt(M) !== null)
      throw cr(), _t;
    M = e;
  }
}
function qr() {
  for (var e = 0, t = M; ; ) {
    if (t.nodeType === Ot) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Dr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === mn || r === Br) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(t)
    );
    t.remove(), t = n;
  }
}
function En(e) {
  if (!e || e.nodeType !== Ot)
    throw cr(), _t;
  return (
    /** @type {Comment} */
    e.data
  );
}
function xn(e) {
  return e === this.v;
}
function ii(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qn(e) {
  return !ii(e, this.v);
}
let si = !1, Se = null;
function ir(e) {
  Se = e;
}
function Sn(e, t = !1, r) {
  Se = {
    p: Se,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Pn(e) {
  var t = (
    /** @type {ComponentContext} */
    Se
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Kn(n);
  }
  return e !== void 0 && (t.x = e), Se = t.p, e ?? /** @type {T} */
  {};
}
function Cn() {
  return !0;
}
const li = /* @__PURE__ */ new WeakMap();
function oi(e) {
  var t = x;
  if (t === null)
    return E.f |= nt, e;
  if (t.f & Hr)
    Vr(e, t);
  else {
    if (!(t.f & $n))
      throw !t.parent && e instanceof Error && An(e), e;
    t.b.error(e);
  }
}
function Vr(e, t) {
  for (; t !== null; ) {
    if (t.f & $n)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && An(e), e;
}
function An(e) {
  const t = li.get(e);
  t && ($t(e, "message", {
    value: t.message
  }), $t(e, "stack", {
    value: t.stack
  }));
}
let Bt = [], Sr = [];
function Rn() {
  var e = Bt;
  Bt = [], wn(e);
}
function ui() {
  var e = Sr;
  Sr = [], wn(e);
}
function fi(e) {
  Bt.length === 0 && queueMicrotask(Rn), Bt.push(e);
}
function ci() {
  Bt.length > 0 && Rn(), Sr.length > 0 && ui();
}
function di() {
  for (var e = (
    /** @type {Effect} */
    x.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Ka(), e;
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  var t = ge | Te, r = E !== null && E.f & ge ? (
    /** @type {Derived} */
    E
  ) : null;
  return x === null || r !== null && r.f & $e ? t |= $e : x.f |= St, {
    ctx: Se,
    deps: null,
    effects: null,
    equals: xn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ae
    ),
    wv: 0,
    parent: r ?? x,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function vi(e, t) {
  let r = (
    /** @type {Effect | null} */
    x
  );
  r === null && Ga();
  var n = (
    /** @type {Boundary} */
    r.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Dt(
    /** @type {V} */
    ae
  ), s = null, o = !E;
  return $i(() => {
    try {
      var u = e();
    } catch (p) {
      u = Promise.reject(p);
    }
    var c = () => u;
    a = (s == null ? void 0 : s.then(c, c)) ?? Promise.resolve(u), s = a;
    var _ = (
      /** @type {Batch} */
      G
    ), b = n.pending;
    o && (n.update_pending_count(1), b || _.increment());
    const v = (p, h = void 0) => {
      s = null, b || _.activate(), h ? h !== Ur && (i.f |= nt, lr(i, h)) : (i.f & nt && (i.f ^= nt), lr(i, p)), o && (n.update_pending_count(-1), b || _.decrement()), Bn();
    };
    if (a.then(v, (p) => v(null, p || "unknown")), _)
      return () => {
        queueMicrotask(() => _.neuter());
      };
  }), new Promise((u) => {
    function c(_) {
      function b() {
        _ === a ? u(i) : c(a);
      }
      _.then(b, b);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = /* @__PURE__ */ vr(e);
  return na(t), t;
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  const t = /* @__PURE__ */ vr(e);
  return t.equals = qn, t;
}
function In(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Oe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function hi(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ge))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Yr(e) {
  var t, r = x;
  We(hi(e));
  try {
    In(e), t = la(e);
  } finally {
    We(r);
  }
  return t;
}
function On(e) {
  var t = Yr(e);
  if (e.equals(t) || (e.v = t, e.wv = ia()), !ot)
    if (Ue !== null)
      Ue.set(e, e.v);
    else {
      var r = (Ve || e.f & $e) && e.deps !== null ? Ge : de;
      me(e, r);
    }
}
function _i(e, t, r) {
  const n = vr;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var a = G, i = (
    /** @type {Effect} */
    x
  ), s = pi(), o = di();
  Promise.all(t.map((u) => /* @__PURE__ */ vi(u))).then((u) => {
    a == null || a.activate(), s();
    try {
      r([...e.map(n), ...u]);
    } catch (c) {
      i.f & st || Vr(c, i);
    }
    a == null || a.deactivate(), Bn();
  }).catch((u) => {
    o.error(u);
  });
}
function pi() {
  var e = x, t = E, r = Se;
  return function() {
    We(e), Be(t), ir(r);
  };
}
function Bn() {
  We(null), Be(null), ir(null);
}
const Nt = /* @__PURE__ */ new Set();
let G = null, Ue = null, on = /* @__PURE__ */ new Set(), sr = [];
function Dn() {
  const e = (
    /** @type {() => void} */
    sr.shift()
  );
  sr.length > 0 && queueMicrotask(Dn), e();
}
let it = [], hr = null, Pr = !1, er = !1;
var mt, gt, ze, Ft, Lt, et, wt, tt, je, yt, Ht, zt, qe, Mn, tr, Cr;
const fr = class fr {
  constructor() {
    se(this, qe);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    fe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    se(this, mt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    se(this, gt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    se(this, ze, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    se(this, Ft, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    se(this, Lt, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    se(this, et, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    se(this, wt, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    se(this, tt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    se(this, je, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    se(this, yt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    se(this, Ht, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    se(this, zt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    fe(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    it = [];
    var r = null;
    if (Nt.size > 1) {
      r = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map();
      for (const [s, o] of this.current)
        r.set(s, { v: s.v, wv: s.wv }), s.v = o;
      for (const s of Nt)
        if (s !== this)
          for (const [o, u] of y(s, mt))
            r.has(o) || (r.set(o, { v: o.v, wv: o.wv }), o.v = u);
    }
    for (const s of t)
      Ze(this, qe, Mn).call(this, s);
    if (y(this, et).length === 0 && y(this, ze) === 0) {
      Ze(this, qe, Cr).call(this);
      var n = y(this, tt), a = y(this, je);
      pe(this, tt, []), pe(this, je, []), pe(this, yt, []), G = null, un(n), un(a), G === null ? G = this : Nt.delete(this), (i = y(this, Ft)) == null || i.resolve();
    } else
      Ze(this, qe, tr).call(this, y(this, tt)), Ze(this, qe, tr).call(this, y(this, je)), Ze(this, qe, tr).call(this, y(this, yt));
    if (r) {
      for (const [s, { v: o, wv: u }] of r)
        s.wv <= u && (s.v = o);
      Ue = null;
    }
    for (const s of y(this, et))
      bt(s);
    for (const s of y(this, wt))
      bt(s);
    pe(this, et, []), pe(this, wt, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    y(this, mt).has(t) || y(this, mt).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    G = this;
  }
  deactivate() {
    G = null;
    for (const t of on)
      if (on.delete(t), t(), G !== null)
        break;
  }
  neuter() {
    pe(this, Lt, !0);
  }
  flush() {
    it.length > 0 ? Fn() : Ze(this, qe, Cr).call(this), G === this && (y(this, ze) === 0 && Nt.delete(this), this.deactivate());
  }
  increment() {
    pe(this, ze, y(this, ze) + 1);
  }
  decrement() {
    if (pe(this, ze, y(this, ze) - 1), y(this, ze) === 0) {
      for (const t of y(this, Ht))
        me(t, Te), kt(t);
      for (const t of y(this, zt))
        me(t, Ge), kt(t);
      pe(this, tt, []), pe(this, je, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    y(this, gt).add(t);
  }
  settled() {
    return (y(this, Ft) ?? pe(this, Ft, Va())).promise;
  }
  static ensure() {
    if (G === null) {
      const t = G = new fr();
      Nt.add(G), er || fr.enqueue(() => {
        G === t && t.flush();
      });
    }
    return G;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    sr.length === 0 && queueMicrotask(Dn), sr.unshift(t);
  }
};
mt = new WeakMap(), gt = new WeakMap(), ze = new WeakMap(), Ft = new WeakMap(), Lt = new WeakMap(), et = new WeakMap(), wt = new WeakMap(), tt = new WeakMap(), je = new WeakMap(), yt = new WeakMap(), Ht = new WeakMap(), zt = new WeakMap(), qe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Mn = function(t) {
  var _;
  t.f ^= de;
  for (var r = t.first; r !== null; ) {
    var n = r.f, a = (n & (Le | Ke)) !== 0, i = a && (n & de) !== 0, s = i || (n & xe) !== 0 || this.skipped_effects.has(r);
    if (!s && r.fn !== null) {
      if (a)
        r.f ^= de;
      else if (n & Lr)
        y(this, je).push(r);
      else if (!(n & de))
        if (n & jr) {
          var o = (_ = r.b) != null && _.pending ? y(this, wt) : y(this, et);
          o.push(r);
        } else _r(r) && (r.f & qt && y(this, yt).push(r), bt(r));
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
tr = function(t) {
  for (const r of t)
    (r.f & Te ? y(this, Ht) : y(this, zt)).push(r), me(r, de);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Cr = function() {
  if (!y(this, Lt))
    for (const t of y(this, gt))
      t();
  y(this, gt).clear();
};
let Tt = fr;
function H(e) {
  var t = er;
  er = !0;
  try {
    for (var r; ; ) {
      if (ci(), it.length === 0 && (G == null || G.flush(), it.length === 0))
        return hr = null, /** @type {T} */
        r;
      Fn();
    }
  } finally {
    er = t;
  }
}
function Fn() {
  var e = pt;
  Pr = !0;
  try {
    var t = 0;
    for (cn(!0); it.length > 0; ) {
      var r = Tt.ensure();
      if (t++ > 1e3) {
        var n, a;
        bi();
      }
      r.process(it), Ye.clear();
    }
  } finally {
    Pr = !1, cn(e), hr = null;
  }
}
function bi() {
  try {
    Qa();
  } catch (e) {
    Vr(e, hr);
  }
}
let Qe = null;
function un(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (st | xe)) && _r(n) && (Qe = [], bt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ea(n) : n.fn = null), Qe.length > 0)) {
        Ye.clear();
        for (const a of Qe)
          bt(a);
        Qe = [];
      }
    }
    Qe = null;
  }
}
function kt(e) {
  for (var t = hr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Pr && t === x && r & qt)
      return;
    if (r & (Ke | Le)) {
      if (!(r & de)) return;
      t.f ^= de;
    }
  }
  it.push(t);
}
const Ye = /* @__PURE__ */ new Map();
function Dt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: xn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  const r = Dt(e);
  return na(r), r;
}
// @__NO_SIDE_EFFECTS__
function Ln(e, t = !1, r = !0) {
  const n = Dt(e);
  return t || (n.equals = qn), n;
}
function w(e, t, r = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Re || E.f & ln) && Cn() && E.f & (ge | qt | jr | ln) && !(ve != null && ve.includes(e)) && ai();
  let n = r ? Ne(t) : t;
  return lr(e, n);
}
function lr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    ot ? Ye.set(e, t) : Ye.set(e, r), e.v = t;
    var n = Tt.ensure();
    n.capture(e, r), e.f & ge && (e.f & Te && Yr(
      /** @type {Derived} */
      e
    ), me(e, e.f & $e ? Ge : de)), e.wv = ia(), Hn(e, Te), x !== null && x.f & de && !(x.f & (Le | Ke)) && (we === null ? Ei([e]) : we.push(e));
  }
  return t;
}
function Xt(e, t = 1) {
  var r = l(e), n = t === 1 ? r++ : r--;
  return w(e, r), n;
}
function yr(e) {
  w(e, e.v + 1);
}
function Hn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, a = 0; a < n; a++) {
      var i = r[a], s = i.f, o = (s & Te) === 0;
      o && me(i, t), s & ge ? Hn(
        /** @type {Derived} */
        i,
        Ge
      ) : o && (s & qt && Qe !== null && Qe.push(
        /** @type {Effect} */
        i
      ), kt(
        /** @type {Effect} */
        i
      ));
    }
}
function Ne(e) {
  if (typeof e != "object" || e === null || It in e)
    return e;
  const t = Ua(e);
  if (t !== za && t !== ja)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Mr(e), a = /* @__PURE__ */ ee(0), i = at, s = (o) => {
    if (at === i)
      return o();
    var u = E, c = at;
    Be(null), vn(i);
    var _ = o();
    return Be(u), vn(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ri();
        var _ = r.get(u);
        return _ === void 0 ? _ = s(() => {
          var b = /* @__PURE__ */ ee(c.value);
          return r.set(u, b), b;
        }) : w(_, c.value, !0), !0;
      },
      deleteProperty(o, u) {
        var c = r.get(u);
        if (c === void 0) {
          if (u in o) {
            const _ = s(() => /* @__PURE__ */ ee(ae));
            r.set(u, _), yr(a);
          }
        } else
          w(c, ae), yr(a);
        return !0;
      },
      get(o, u, c) {
        var p;
        if (u === It)
          return e;
        var _ = r.get(u), b = u in o;
        if (_ === void 0 && (!b || (p = rt(o, u)) != null && p.writable) && (_ = s(() => {
          var h = Ne(b ? o[u] : ae), d = /* @__PURE__ */ ee(h);
          return d;
        }), r.set(u, _)), _ !== void 0) {
          var v = l(_);
          return v === ae ? void 0 : v;
        }
        return Reflect.get(o, u, c);
      },
      getOwnPropertyDescriptor(o, u) {
        var c = Reflect.getOwnPropertyDescriptor(o, u);
        if (c && "value" in c) {
          var _ = r.get(u);
          _ && (c.value = l(_));
        } else if (c === void 0) {
          var b = r.get(u), v = b == null ? void 0 : b.v;
          if (b !== void 0 && v !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(o, u) {
        var v;
        if (u === It)
          return !0;
        var c = r.get(u), _ = c !== void 0 && c.v !== ae || Reflect.has(o, u);
        if (c !== void 0 || x !== null && (!_ || (v = rt(o, u)) != null && v.writable)) {
          c === void 0 && (c = s(() => {
            var p = _ ? Ne(o[u]) : ae, h = /* @__PURE__ */ ee(p);
            return h;
          }), r.set(u, c));
          var b = l(c);
          if (b === ae)
            return !1;
        }
        return _;
      },
      set(o, u, c, _) {
        var m;
        var b = r.get(u), v = u in o;
        if (n && u === "length")
          for (var p = c; p < /** @type {Source<number>} */
          b.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? w(h, ae) : p in o && (h = s(() => /* @__PURE__ */ ee(ae)), r.set(p + "", h));
          }
        if (b === void 0)
          (!v || (m = rt(o, u)) != null && m.writable) && (b = s(() => /* @__PURE__ */ ee(void 0)), w(b, Ne(c)), r.set(u, b));
        else {
          v = b.v !== ae;
          var d = s(() => Ne(c));
          w(b, d);
        }
        var k = Reflect.getOwnPropertyDescriptor(o, u);
        if (k != null && k.set && k.set.call(_, c), !v) {
          if (n && typeof u == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(u);
            Number.isInteger(S) && S >= N.v && w(N, S + 1);
          }
          yr(a);
        }
        return !0;
      },
      ownKeys(o) {
        l(a);
        var u = Reflect.ownKeys(o).filter((b) => {
          var v = r.get(b);
          return v === void 0 || v.v !== ae;
        });
        for (var [c, _] of r)
          _.v !== ae && !(c in o) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        ni();
      }
    }
  );
}
var fn, zn, jn, Un;
function Ar() {
  if (fn === void 0) {
    fn = window, zn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    jn = rt(t, "firstChild").get, Un = rt(t, "nextSibling").get, sn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), sn(r) && (r.__t = void 0);
  }
}
function Et(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  return jn.call(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return Un.call(e);
}
function W(e, t) {
  if (!z)
    return /* @__PURE__ */ or(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ or(M)
  );
  if (r === null)
    r = M.appendChild(Et());
  else if (t && r.nodeType !== kn) {
    var n = Et();
    return r == null || r.before(n), Ie(n), n;
  }
  return Ie(r), r;
}
function ne(e, t = 1, r = !1) {
  let n = z ? M : e;
  for (var a; t--; )
    a = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ lt(n);
  if (!z)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== kn) {
    var i = Et();
    return n === null ? a == null || a.after(i) : n.before(i), Ie(i), i;
  }
  return Ie(n), /** @type {TemplateNode} */
  n;
}
function Vn(e) {
  e.textContent = "";
}
function Yn() {
  return !1;
}
function Wn(e) {
  var t = E, r = x;
  Be(null), We(null);
  try {
    return e();
  } finally {
    Be(t), We(r);
  }
}
function mi(e) {
  x === null && E === null && Za(), E !== null && E.f & $e && x === null && Xa(), ot && Ja();
}
function gi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function He(e, t, r, n = !0) {
  var a = x;
  a !== null && a.f & xe && (e |= xe);
  var i = {
    ctx: Se,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Te,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      bt(i), i.f |= Hr;
    } catch (u) {
      throw Oe(i), u;
    }
  else t !== null && kt(i);
  if (n) {
    var s = i;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & St) && (s = s.first), s !== null && (s.parent = a, a !== null && gi(s, a), E !== null && E.f & ge && !(e & Ke))) {
      var o = (
        /** @type {Derived} */
        E
      );
      (o.effects ?? (o.effects = [])).push(s);
    }
  }
  return i;
}
function vt(e) {
  mi();
  var t = (
    /** @type {Effect} */
    x.f
  ), r = !E && (t & Le) !== 0 && (t & Hr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Se
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Kn(e);
}
function Kn(e) {
  return He(Lr | Wa, e, !1);
}
function wi(e) {
  Tt.ensure();
  const t = He(Ke | St, e, !0);
  return () => {
    Oe(t);
  };
}
function yi(e) {
  Tt.ensure();
  const t = He(Ke | St, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Wr(t, () => {
      Oe(t), n(void 0);
    }) : (Oe(t), n(void 0));
  });
}
function Gn(e) {
  return He(Lr, e, !1);
}
function $i(e) {
  return He(jr | St, e, !0);
}
function Jn(e, t = 0) {
  return He(yn | t, e, !0);
}
function Ee(e, t = [], r = []) {
  _i(t, r, (n) => {
    He(yn, () => e(...n.map(l)), !0);
  });
}
function Xn(e, t = 0) {
  var r = He(qt | t, e, !0);
  return r;
}
function xt(e, t = !0) {
  return He(Le | St, e, !0, t);
}
function Zn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ot, n = E;
    dn(!0), Be(null);
    try {
      t.call(null);
    } finally {
      dn(r), Be(n);
    }
  }
}
function Qn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Wn(() => {
      a.abort(Ur);
    });
    var n = r.next;
    r.f & Ke ? r.parent = null : Oe(r, t), r = n;
  }
}
function Ti(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Le || Oe(t), t = r;
  }
}
function Oe(e, t = !0) {
  var r = !1;
  (t || e.f & Ya) && e.nodes_start !== null && e.nodes_end !== null && (ki(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Qn(e, t && !r), ur(e, 0), me(e, st);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Zn(e);
  var a = e.parent;
  a !== null && a.first !== null && ea(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ki(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(e)
    );
    e.remove(), e = r;
  }
}
function ea(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Wr(e, t) {
  var r = [];
  Kr(e, r, !0), ta(r, () => {
    Oe(e), t && t();
  });
}
function ta(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var a of e)
      a.out(n);
  } else
    t();
}
function Kr(e, t, r) {
  if (!(e.f & xe)) {
    if (e.f ^= xe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var a = n.next, i = (n.f & zr) !== 0 || (n.f & Le) !== 0;
      Kr(n, t, i ? r : !1), n = a;
    }
  }
}
function Gr(e) {
  ra(e, !0);
}
function ra(e, t) {
  if (e.f & xe) {
    e.f ^= xe, e.f & de || (me(e, Te), kt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & zr) !== 0 || (r.f & Le) !== 0;
      ra(r, a ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let pt = !1;
function cn(e) {
  pt = e;
}
let ot = !1;
function dn(e) {
  ot = e;
}
let E = null, Re = !1;
function Be(e) {
  E = e;
}
let x = null;
function We(e) {
  x = e;
}
let ve = null;
function na(e) {
  E !== null && (ve === null ? ve = [e] : ve.push(e));
}
let ce = null, be = 0, we = null;
function Ei(e) {
  we = e;
}
let aa = 1, Mt = 0, at = Mt;
function vn(e) {
  at = e;
}
let Ve = !1;
function ia() {
  return ++aa;
}
function _r(e) {
  var b;
  var t = e.f;
  if (t & Te)
    return !0;
  if (t & Ge) {
    var r = e.deps, n = (t & $e) !== 0;
    if (r !== null) {
      var a, i, s = (t & ar) !== 0, o = n && x !== null && !Ve, u = r.length;
      if ((s || o) && (x === null || !(x.f & st))) {
        var c = (
          /** @type {Derived} */
          e
        ), _ = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((b = i == null ? void 0 : i.reactions) != null && b.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= ar), o && _ !== null && !(_.f & $e) && (c.f ^= $e);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], _r(
          /** @type {Derived} */
          i
        ) && On(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || x !== null && !Ve) && me(e, de);
  }
  return !1;
}
function sa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ve != null && ve.includes(e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      i.f & ge ? sa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? me(i, Te) : i.f & de && me(i, Ge), kt(
        /** @type {Effect} */
        i
      ));
    }
}
function la(e) {
  var d;
  var t = ce, r = be, n = we, a = E, i = Ve, s = ve, o = Se, u = Re, c = at, _ = e.f;
  ce = /** @type {null | Value[]} */
  null, be = 0, we = null, Ve = (_ & $e) !== 0 && (Re || !pt || E === null), E = _ & (Le | Ke) ? null : e, ve = null, ir(e.ctx), Re = !1, at = ++Mt, e.ac !== null && (Wn(() => {
    e.ac.abort(Ur);
  }), e.ac = null);
  try {
    e.f |= xr;
    var b = (
      /** @type {Function} */
      e.fn
    ), v = b(), p = e.deps;
    if (ce !== null) {
      var h;
      if (ur(e, be), p !== null && be > 0)
        for (p.length = be + ce.length, h = 0; h < ce.length; h++)
          p[be + h] = ce[h];
      else
        e.deps = p = ce;
      if (!Ve || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      _ & ge && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = be; h < p.length; h++)
          ((d = p[h]).reactions ?? (d.reactions = [])).push(e);
    } else p !== null && be < p.length && (ur(e, be), p.length = be);
    if (Cn() && we !== null && !Re && p !== null && !(e.f & (ge | Ge | Te)))
      for (h = 0; h < /** @type {Source[]} */
      we.length; h++)
        sa(
          we[h],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (Mt++, we !== null && (n === null ? n = we : n.push(.../** @type {Source[]} */
    we))), e.f & nt && (e.f ^= nt), v;
  } catch (k) {
    return oi(k);
  } finally {
    e.f ^= xr, ce = t, be = r, we = n, E = a, Ve = i, ve = s, ir(o), Re = u, at = c;
  }
}
function xi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ha.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  r === null && t.f & ge && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !ce.includes(t)) && (me(t, Ge), t.f & ($e | ar) || (t.f ^= ar), In(
    /** @type {Derived} **/
    t
  ), ur(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ur(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      xi(e, r[n]);
}
function bt(e) {
  var t = e.f;
  if (!(t & st)) {
    me(e, de);
    var r = x, n = pt;
    x = e, pt = !0;
    try {
      t & qt ? Ti(e) : Qn(e), Zn(e);
      var a = la(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = aa;
      var i;
      gn && si && e.f & Te && e.deps;
    } finally {
      pt = n, x = r;
    }
  }
}
async function qi() {
  await Promise.resolve(), H();
}
function l(e) {
  var t = e.f, r = (t & ge) !== 0;
  if (E !== null && !Re) {
    var n = x !== null && (x.f & st) !== 0;
    if (!n && !(ve != null && ve.includes(e))) {
      var a = E.deps;
      if (E.f & xr)
        e.rv < Mt && (e.rv = Mt, ce === null && a !== null && a[be] === e ? be++ : ce === null ? ce = [e] : (!Ve || !ce.includes(e)) && ce.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [E] : i.includes(E) || i.push(E);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), o = s.parent;
    o !== null && !(o.f & $e) && (s.f ^= $e);
  }
  if (ot) {
    if (Ye.has(e))
      return Ye.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var u = s.v;
      return (!(s.f & de) && s.reactions !== null || oa(s)) && (u = Yr(s)), Ye.set(s, u), u;
    }
  } else if (r) {
    if (s = /** @type {Derived} */
    e, Ue != null && Ue.has(s))
      return Ue.get(s);
    _r(s) && On(s);
  }
  if (e.f & nt)
    throw e.v;
  return e.v;
}
function oa(e) {
  if (e.v === ae) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ye.has(t) || t.f & ge && oa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ua(e) {
  var t = Re;
  try {
    return Re = !0, e();
  } finally {
    Re = t;
  }
}
const Si = -7169;
function me(e, t) {
  e.f = e.f & Si | t;
}
const fa = /* @__PURE__ */ new Set(), Rr = /* @__PURE__ */ new Set();
function Pi(e) {
  for (var t = 0; t < e.length; t++)
    fa.add(e[t]);
  for (var r of Rr)
    r(e);
}
let hn = null;
function Zt(e) {
  var S;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = ((S = e.composedPath) == null ? void 0 : S.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  hn = e;
  var s = 0, o = hn === e && e.__root;
  if (o) {
    var u = a.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== t) {
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = E, b = x;
    Be(null), We(null);
    try {
      for (var v, p = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var d = i["__" + n];
          if (d != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Mr(d)) {
              var [k, ...N] = d;
              k.apply(i, [e, ...N]);
            } else
              d.call(i, e);
        } catch (m) {
          v ? p.push(m) : v = m;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (v) {
        for (let m of p)
          queueMicrotask(() => {
            throw m;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Be(_), We(b);
    }
  }
}
function Ci(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Nr(e, t) {
  var r = (
    /** @type {Effect} */
    x
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
  var r = (t & La) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (z)
      return Nr(M, null), M;
    n === void 0 && (n = Ci(a ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ or(n));
    var i = (
      /** @type {TemplateNode} */
      r || zn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Nr(i, i), i;
  };
}
function B(e, t) {
  if (z) {
    x.nodes_end = M, dr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Ai = ["touchstart", "touchmove"];
function Ri(e) {
  return Ai.includes(e);
}
function Ce(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ca(e, t) {
  return da(e, t);
}
function Ni(e, t) {
  Ar(), t.intro = t.intro ?? !1;
  const r = t.target, n = z, a = M;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ or(r)
    ); i && (i.nodeType !== Ot || /** @type {Comment} */
    i.data !== mn); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ lt(i);
    if (!i)
      throw _t;
    Fe(!0), Ie(
      /** @type {Comment} */
      i
    ), dr();
    const s = da(e, { ...t, anchor: i });
    if (M === null || M.nodeType !== Ot || /** @type {Comment} */
    M.data !== Dr)
      throw cr(), _t;
    return Fe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== _t && console.warn("Failed to hydrate: ", s), t.recover === !1 && ei(), Ar(), Vn(r), Fe(!1), ca(e, t);
  } finally {
    Fe(n), Ie(a);
  }
}
const ht = /* @__PURE__ */ new Map();
function da(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: s = !0 }) {
  Ar();
  var o = /* @__PURE__ */ new Set(), u = (b) => {
    for (var v = 0; v < b.length; v++) {
      var p = b[v];
      if (!o.has(p)) {
        o.add(p);
        var h = Ri(p);
        t.addEventListener(p, Zt, { passive: h });
        var d = ht.get(p);
        d === void 0 ? (document.addEventListener(p, Zt, { passive: h }), ht.set(p, 1)) : ht.set(p, d + 1);
      }
    }
  };
  u(Fr(fa)), Rr.add(u);
  var c = void 0, _ = yi(() => {
    var b = r ?? t.appendChild(Et());
    return xt(() => {
      if (i) {
        Sn({});
        var v = (
          /** @type {ComponentContext} */
          Se
        );
        v.c = i;
      }
      a && (n.$$events = a), z && Nr(
        /** @type {TemplateNode} */
        b,
        null
      ), c = e(b, n) || {}, z && (x.nodes_end = M), i && Pn();
    }), () => {
      var h;
      for (var v of o) {
        t.removeEventListener(v, Zt);
        var p = (
          /** @type {number} */
          ht.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, Zt), ht.delete(v)) : ht.set(v, p);
      }
      Rr.delete(u), b !== r && ((h = b.parentNode) == null || h.removeChild(b));
    };
  });
  return Ir.set(c, _), c;
}
let Ir = /* @__PURE__ */ new WeakMap();
function Ii(e, t) {
  const r = Ir.get(e);
  return r ? (Ir.delete(e), r(t)) : Promise.resolve();
}
function Q(e, t, r = !1) {
  z && dr();
  var n = e, a = null, i = null, s = ae, o = r ? zr : 0, u = !1;
  const c = (p, h = !0) => {
    u = !0, v(h, p);
  };
  var _ = null;
  function b() {
    _ !== null && (_.lastChild.remove(), n.before(_), _ = null);
    var p = s ? a : i, h = s ? i : a;
    p && Gr(p), h && Wr(h, () => {
      s ? i = null : a = null;
    });
  }
  const v = (p, h) => {
    if (s === (s = p)) return;
    let d = !1;
    if (z) {
      const T = En(n) === Br;
      !!s === T && (n = qr(), Ie(n), Fe(!1), d = !0);
    }
    var k = Yn(), N = n;
    if (k && (_ = document.createDocumentFragment(), _.append(N = Et())), s ? a ?? (a = h && xt(() => h(N))) : i ?? (i = h && xt(() => h(N))), k) {
      var S = (
        /** @type {Batch} */
        G
      ), m = s ? a : i, q = s ? i : a;
      m && S.skipped_effects.delete(m), q && S.skipped_effects.add(q), S.add_callback(b);
    } else
      b();
    d && Fe(!0);
  };
  Xn(() => {
    u = !1, t(c), u || v(null, null);
  }, o), z && (n = M);
}
function $r(e, t) {
  return t;
}
function Oi(e, t, r) {
  for (var n = e.items, a = [], i = t.length, s = 0; s < i; s++)
    Kr(t[s].e, a, !0);
  var o = i > 0 && a.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Vn(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Ae(e, t[0].prev, t[i - 1].next);
  }
  ta(a, () => {
    for (var c = 0; c < i; c++) {
      var _ = t[c];
      o || (n.delete(_.k), Ae(e, _.prev, _.next)), Oe(_.e, !o);
    }
  });
}
function Tr(e, t, r, n, a, i = null) {
  var s = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  z && dr();
  var u = null, c = !1, _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ Nn(() => {
    var d = r();
    return Mr(d) ? d : d == null ? [] : Fr(d);
  }), v, p;
  function h() {
    Bi(
      p,
      v,
      o,
      _,
      s,
      a,
      t,
      n,
      r
    ), i !== null && (v.length === 0 ? u ? Gr(u) : u = xt(() => i(s)) : u !== null && Wr(u, () => {
      u = null;
    }));
  }
  Xn(() => {
    p ?? (p = /** @type {Effect} */
    x), v = /** @type {V[]} */
    l(b);
    var d = v.length;
    if (c && d === 0)
      return;
    c = d === 0;
    let k = !1;
    if (z) {
      var N = En(s) === Br;
      N !== (d === 0) && (s = qr(), Ie(s), Fe(!1), k = !0);
    }
    if (z) {
      for (var S = null, m, q = 0; q < d; q++) {
        if (M.nodeType === Ot && /** @type {Comment} */
        M.data === Dr) {
          s = /** @type {Comment} */
          M, k = !0, Fe(!1);
          break;
        }
        var T = v[q], J = n(T, q);
        m = Or(
          M,
          o,
          S,
          null,
          T,
          J,
          q,
          a,
          t,
          r
        ), o.items.set(J, m), S = m;
      }
      d > 0 && Ie(qr());
    }
    if (z)
      d === 0 && i && (u = xt(() => i(s)));
    else if (Yn()) {
      var he = /* @__PURE__ */ new Set(), _e = (
        /** @type {Batch} */
        G
      );
      for (q = 0; q < d; q += 1) {
        T = v[q], J = n(T, q);
        var O = o.items.get(J) ?? _.get(J);
        O ? va(O, T, q) : (m = Or(
          null,
          o,
          null,
          null,
          T,
          J,
          q,
          a,
          t,
          r,
          !0
        ), _.set(J, m)), he.add(J);
      }
      for (const [P, Je] of o.items)
        he.has(P) || _e.skipped_effects.add(Je.e);
      _e.add_callback(h);
    } else
      h();
    k && Fe(!0), l(b);
  }), z && (s = M);
}
function Bi(e, t, r, n, a, i, s, o, u) {
  var c = t.length, _ = r.items, b = r.first, v = b, p, h = null, d = [], k = [], N, S, m, q;
  for (q = 0; q < c; q += 1) {
    if (N = t[q], S = o(N, q), m = _.get(S), m === void 0) {
      var T = n.get(S);
      if (T !== void 0) {
        n.delete(S), _.set(S, T);
        var J = h ? h.next : v;
        Ae(r, h, T), Ae(r, T, J), kr(T, J, a), h = T;
      } else {
        var he = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        h = Or(
          he,
          r,
          h,
          h === null ? r.first : h.next,
          N,
          S,
          q,
          i,
          s,
          u
        );
      }
      _.set(S, h), d = [], k = [], v = h.next;
      continue;
    }
    if (va(m, N, q), m.e.f & xe && Gr(m.e), m !== v) {
      if (p !== void 0 && p.has(m)) {
        if (d.length < k.length) {
          var _e = k[0], O;
          h = _e.prev;
          var P = d[0], Je = d[d.length - 1];
          for (O = 0; O < d.length; O += 1)
            kr(d[O], _e, a);
          for (O = 0; O < k.length; O += 1)
            p.delete(k[O]);
          Ae(r, P.prev, Je.next), Ae(r, h, P), Ae(r, Je, _e), v = _e, h = Je, q -= 1, d = [], k = [];
        } else
          p.delete(m), kr(m, v, a), Ae(r, m.prev, m.next), Ae(r, m, h === null ? r.first : h.next), Ae(r, h, m), h = m;
        continue;
      }
      for (d = [], k = []; v !== null && v.k !== S; )
        v.e.f & xe || (p ?? (p = /* @__PURE__ */ new Set())).add(v), k.push(v), v = v.next;
      if (v === null)
        continue;
      m = v;
    }
    d.push(m), h = m, v = m.next;
  }
  if (v !== null || p !== void 0) {
    for (var ut = p === void 0 ? [] : Fr(p); v !== null; )
      v.e.f & xe || ut.push(v), v = v.next;
    var jt = ut.length;
    if (jt > 0) {
      var Ut = null;
      Oi(r, ut, Ut);
    }
  }
  e.first = r.first && r.first.e, e.last = h && h.e;
  for (var pr of n.values())
    Oe(pr.e);
  n.clear();
}
function va(e, t, r, n) {
  lr(e.v, t), e.i = r;
}
function Or(e, t, r, n, a, i, s, o, u, c, _) {
  var b = (u & Na) !== 0, v = (u & Oa) === 0, p = b ? v ? /* @__PURE__ */ Ln(a, !1, !1) : Dt(a) : a, h = u & Ia ? Dt(s) : s, d = {
    i: h,
    v: p,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var k = document.createDocumentFragment();
      k.append(e = Et());
    }
    return d.e = xt(() => o(
      /** @type {Node} */
      e,
      p,
      h,
      c
    ), z), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? _ || (t.first = d) : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function kr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(i)
    );
    a.before(i), i = s;
  }
}
function Ae(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Di(e, t) {
  Gn(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function Mi(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function Er(e, t, r, n, a, i) {
  var s = e.__className;
  if (z || s !== r || s === void 0) {
    var o = Mi(r, n);
    (!z || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return i;
}
function _n(e, t) {
  return e === t || (e == null ? void 0 : e[It]) === t;
}
function pn(e = {}, t, r, n) {
  return Gn(() => {
    var a, i;
    return Jn(() => {
      a = i, i = [], ua(() => {
        e !== r(...i) && (t(e, ...i), a && _n(r(...a), e) && t(null, ...a));
      });
    }), () => {
      fi(() => {
        i && _n(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
let Qt = !1;
function Fi(e) {
  var t = Qt;
  try {
    return Qt = !1, [e(), Qt];
  } finally {
    Qt = t;
  }
}
function K(e, t, r, n) {
  var S;
  var a = (r & Ma) !== 0, i = (r & Fa) !== 0, s = (
    /** @type {V} */
    n
  ), o = !0, u = () => (o && (o = !1, s = i ? ua(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), c;
  if (a) {
    var _ = It in e || Tn in e;
    c = ((S = rt(e, t)) == null ? void 0 : S.set) ?? (_ && t in e ? (m) => e[t] = m : void 0);
  }
  var b, v = !1;
  a ? [b, v] = Fi(() => (
    /** @type {V} */
    e[t]
  )) : b = /** @type {V} */
  e[t], b === void 0 && n !== void 0 && (b = u(), c && (ti(), c(b)));
  var p;
  if (p = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? u() : (o = !0, m);
  }, !(r & Da))
    return p;
  if (c) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      function(m, q) {
        return arguments.length > 0 ? ((!q || h || v) && c(q ? p() : m), m) : p();
      }
    );
  }
  var d = !1, k = (r & Ba ? vr : Nn)(() => (d = !1, p()));
  a && l(k);
  var N = (
    /** @type {Effect} */
    x
  );
  return (
    /** @type {() => V} */
    function(m, q) {
      if (arguments.length > 0) {
        const T = q ? l(k) : a ? Ne(m) : m;
        return w(k, T), d = !0, s !== void 0 && (s = T), m;
      }
      return ot && d || N.f & st ? k.v : l(k);
    }
  );
}
function Li(e) {
  return new Hi(e);
}
var Me, ye;
class Hi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    se(this, Me);
    /** @type {Record<string, any>} */
    se(this, ye);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (s, o) => {
      var u = /* @__PURE__ */ Ln(o, !1, !1);
      return r.set(s, u), u;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return l(r.get(o) ?? n(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === Tn ? !0 : (l(r.get(o) ?? n(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, u) {
          return w(r.get(o) ?? n(o, u), u), Reflect.set(s, o, u);
        }
      }
    );
    pe(this, ye, (t.hydrate ? Ni : ca)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && H(), pe(this, Me, a.$$events);
    for (const s of Object.keys(y(this, ye)))
      s === "$set" || s === "$destroy" || s === "$on" || $t(this, s, {
        get() {
          return y(this, ye)[s];
        },
        /** @param {any} value */
        set(o) {
          y(this, ye)[s] = o;
        },
        enumerable: !0
      });
    y(this, ye).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, y(this, ye).$destroy = () => {
      Ii(y(this, ye));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    y(this, ye).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    y(this, Me)[t] = y(this, Me)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return y(this, Me)[t].push(n), () => {
      y(this, Me)[t] = y(this, Me)[t].filter(
        /** @param {any} fn */
        (a) => a !== n
      );
    };
  }
  $destroy() {
    y(this, ye).$destroy();
  }
}
Me = new WeakMap(), ye = new WeakMap();
let ha;
typeof HTMLElement == "function" && (ha = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    fe(this, "$$ctor");
    /** Slots */
    fe(this, "$$s");
    /** @type {any} The Svelte component instance */
    fe(this, "$$c");
    /** Whether or not the custom element is connected */
    fe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    fe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    fe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    fe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    fe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    fe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    fe(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (i) => {
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), B(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = zi(this);
      for (const a of this.$$s)
        a in n && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = rr(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Li({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wi(() => {
        Jn(() => {
          var a;
          this.$$r = !0;
          for (const i of nr(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = rr(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const i of this.$$l[a]) {
          const s = this.$$c.$on(a, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = rr(t, n, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return nr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function rr(e, t, r, n) {
  var i;
  const a = (i = r[e]) == null ? void 0 : i.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function zi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ji(e, t, r, n, a, i) {
  let s = class extends ha {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return nr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return nr(t).forEach((o) => {
    $t(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var b;
        u = rr(o, u, t), this.$$d[o] = u;
        var c = this.$$c;
        if (c) {
          var _ = (b = rt(c, o)) == null ? void 0 : b.get;
          _ ? c[o] = u : c.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    $t(s.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Ui = {
  background: "#0d1117",
  foreground: "#c9d1d9",
  border: "#30363d",
  headerBg: "#161b22",
  headerFg: "#8b949e",
  prompt: "#58a6ff",
  command: "#79c0ff",
  output: "#c9d1d9",
  error: "#ff7b72",
  warning: "#ffa657",
  info: "#58a6ff",
  success: "#56d364",
  selection: "#264f78",
  cursor: "#58a6ff"
}, Vi = {
  background: "#ffffff",
  foreground: "#24292f",
  border: "#d0d7de",
  headerBg: "#f6f8fa",
  headerFg: "#57606a",
  prompt: "#0969da",
  command: "#0550ae",
  output: "#24292f",
  error: "#cf222e",
  warning: "#9a6700",
  info: "#0969da",
  success: "#1a7f37",
  selection: "#b6e3ff",
  cursor: "#0969da"
};
function Yi(e, t) {
  const r = t.style;
  r.setProperty("--terminal-bg", e.background), r.setProperty("--terminal-fg", e.foreground), r.setProperty("--terminal-border", e.border), r.setProperty("--terminal-header-bg", e.headerBg), r.setProperty("--terminal-header-fg", e.headerFg), r.setProperty("--terminal-prompt", e.prompt), r.setProperty("--terminal-command", e.command), r.setProperty("--terminal-output", e.output), r.setProperty("--terminal-error", e.error), r.setProperty("--terminal-warning", e.warning), r.setProperty("--terminal-info", e.info), r.setProperty("--terminal-success", e.success), r.setProperty("--terminal-selection", e.selection), r.setProperty("--terminal-cursor", e.cursor);
}
function Wi(e, t) {
  return { ...e, ...t };
}
var Ki = /* @__PURE__ */ F('<div class="terminal-buttons svelte-2qd9r7"><span class="terminal-button close svelte-2qd9r7"></span> <span class="terminal-button minimize svelte-2qd9r7"></span> <span class="terminal-button maximize svelte-2qd9r7"></span></div>'), Gi = /* @__PURE__ */ F('<button class="control-button svelte-2qd9r7"> </button>'), Ji = /* @__PURE__ */ F('<button class="control-button svelte-2qd9r7">↺</button>'), Xi = /* @__PURE__ */ F('<button class="control-button svelte-2qd9r7"> </button>'), Zi = /* @__PURE__ */ F('<div class="terminal-controls svelte-2qd9r7"><!> <!> <!></div>'), Qi = /* @__PURE__ */ F('<div class="terminal-header svelte-2qd9r7"><!> <div class="terminal-title svelte-2qd9r7"> </div> <!></div>'), es = /* @__PURE__ */ F('<span class="tab-icon svelte-2qd9r7"> </span>'), ts = /* @__PURE__ */ F('<span class="tab-badge svelte-2qd9r7"> </span>'), rs = /* @__PURE__ */ F('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), ns = /* @__PURE__ */ F('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), as = /* @__PURE__ */ F('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), is = /* @__PURE__ */ F('<div class="terminal-tabs svelte-2qd9r7"><!> <!></div>'), ss = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, ls = /* @__PURE__ */ F('<span class="typing-cursor svelte-2qd9r7">▊</span>'), os = /* @__PURE__ */ F('<div><pre class="svelte-2qd9r7"> <!></pre></div>'), us = /* @__PURE__ */ F('<div class="terminal-cursor svelte-2qd9r7">▊</div>'), fs = /* @__PURE__ */ F('<span class="tab-icon svelte-2qd9r7"> </span>'), cs = /* @__PURE__ */ F('<span class="tab-badge svelte-2qd9r7"> </span>'), ds = /* @__PURE__ */ F('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), vs = /* @__PURE__ */ F('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), hs = /* @__PURE__ */ F('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), _s = /* @__PURE__ */ F('<div class="terminal-tabs terminal-tabs-bottom svelte-2qd9r7"><!> <!></div>'), ps = /* @__PURE__ */ F('<div class="terminal svelte-2qd9r7"><!> <!> <div class="terminal-content svelte-2qd9r7" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const bs = {
  hash: "svelte-2qd9r7",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-2qd9r7 {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-2qd9r7 {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-2qd9r7 {display:flex;gap:8px;}.terminal-button.svelte-2qd9r7 {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-2qd9r7 {background:#ff5f56;}.terminal-button.minimize.svelte-2qd9r7 {background:#ffbd2e;}.terminal-button.maximize.svelte-2qd9r7 {background:#27c93f;}.terminal-title.svelte-2qd9r7 {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-2qd9r7 {display:flex;gap:8px;}.control-button.svelte-2qd9r7 {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-2qd9r7:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-2qd9r7:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-2qd9r7 {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-2qd9r7 {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-2qd9r7 pre:where(.svelte-2qd9r7) {margin:0;font-family:inherit;}.step-command.svelte-2qd9r7 {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-2qd9r7 {color:var(--terminal-output);}.step-error.svelte-2qd9r7 {color:var(--terminal-error);}.step-warning.svelte-2qd9r7 {color:var(--terminal-warning);}.step-info.svelte-2qd9r7 {color:var(--terminal-info);}.step-success.svelte-2qd9r7 {color:var(--terminal-success);}.terminal-cursor.svelte-2qd9r7 {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-2qd9r7-blink 1s infinite;}.typing-cursor.svelte-2qd9r7 {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-2qd9r7-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-2qd9r7-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-2qd9r7::-webkit-scrollbar {width:8px;}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-2qd9r7::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-2qd9r7 {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-2qd9r7 {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-2qd9r7 {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-2qd9r7 .terminal-tab:where(.svelte-2qd9r7) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-2qd9r7:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-2qd9r7 {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-2qd9r7 .terminal-tab.active:where(.svelte-2qd9r7) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-2qd9r7 {font-size:14px;}.tab-title.svelte-2qd9r7 {flex:1;}.tab-badge.svelte-2qd9r7 {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-2qd9r7 {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-2qd9r7:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-2qd9r7 {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-2qd9r7:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-2qd9r7-pulse 1.5s infinite;}.tab-status-error.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-2qd9r7 .tab-icon:where(.svelte-2qd9r7)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-2qd9r7-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-2qd9r7::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}`
};
function ms(e, t) {
  Sn(t, !0), Di(e, bs);
  let r = K(t, "theme", 7, "dark"), n = K(t, "session", 23, () => []), a = K(t, "autoplay", 7, !1), i = K(t, "playbackSpeed", 7, 1), s = K(t, "showHeader", 7), o = K(t, "title", 7, "Terminal"), u = K(t, "colors", 23, () => ({})), c = K(t, "typingSpeed", 7, 40), _ = K(t, "enableTyping", 7, !0), b = K(t, "showPlayButton", 7), v = K(t, "showResetButton", 7), p = K(t, "showThemeToggle", 7), h = K(t, "showWindowButtons", 7), d = K(t, "tabs", 23, () => []), k = K(t, "activeTab", 7, 0), N = K(t, "showTabs", 7, !1), S = K(t, "allowTabClose", 7, !0), m = K(t, "allowTabAdd", 7, !1), q = K(t, "tabBarPosition", 7, "top"), T, J, he = /* @__PURE__ */ ee(Ne(k() || 0)), _e = /* @__PURE__ */ ee(Ne(/* @__PURE__ */ new Map())), O = /* @__PURE__ */ Pe(() => N() && d() && d().length > 0 ? d()[l(he)] || d()[0] : null), P = /* @__PURE__ */ Pe(() => l(O) ? l(O).session : n()), Je = /* @__PURE__ */ Pe(() => l(O) ? l(O).title : o()), ut = /* @__PURE__ */ Pe(() => b() ?? !0), jt = /* @__PURE__ */ Pe(() => v() ?? !0), Ut = /* @__PURE__ */ Pe(() => p() ?? !0), pr = /* @__PURE__ */ Pe(() => h() ?? !0), _a = /* @__PURE__ */ Pe(() => l(ut) || l(jt) || l(Ut)), pa = /* @__PURE__ */ Pe(() => s() ?? !0), j = /* @__PURE__ */ ee(0), U = /* @__PURE__ */ ee(!1), V = /* @__PURE__ */ ee(Ne([])), le = /* @__PURE__ */ ee(-1), ke = /* @__PURE__ */ ee(""), Pt = /* @__PURE__ */ ee(!1), br = /* @__PURE__ */ ee(!1), mr = /* @__PURE__ */ ee(Ne(a())), ie = null, X = null, Jr = -1, Vt = "", Xr = /* @__PURE__ */ Pe(() => Wi(r() === "dark" ? Ui : Vi, u()));
  vt(() => {
    T && l(Xr) && Yi(l(Xr), T);
  }), vt(() => {
    const f = l(V).length;
    J && f > 0 && qi().then(() => {
      J && (J.scrollTop = J.scrollHeight);
    });
  });
  function Yt() {
    l(U) || !l(P) || l(j) >= l(P).length || (w(U, !0), Ct());
  }
  function Ct() {
    if (!l(P) || l(j) >= l(P).length) {
      w(U, !1), ie = null;
      return;
    }
    const f = l(P)[l(j)], g = (f.delay || 1e3) / i();
    ie = setTimeout(
      () => {
        if (!l(P)) {
          w(U, !1), ie = null;
          return;
        }
        f.type === "command" && _() && !f.skipTyping ? ba(f) : (w(V, [...l(V), f], !0), Xt(j), l(j) < l(P).length && l(U) ? Ct() : (w(U, !1), ie = null));
      },
      g
    );
  }
  function ba(f) {
    w(le, l(V).length, !0), w(ke, ""), w(V, [...l(V), { ...f, content: "" }], !0);
    const g = f.content;
    let I = 0;
    const te = 1e3 / (f.typingSpeed || c());
    function D() {
      if (!l(U) || !l(P) || l(le) < 0) {
        X = null, w(le, -1), w(ke, "");
        return;
      }
      if (I < g.length) {
        w(ke, l(ke) + g[I]), w(V, l(V).map((A, re) => re === l(le) ? { ...f, content: l(ke) } : A), !0), I++;
        const C = te * 0.2, oe = te + (Math.random() - 0.5) * C;
        X = setTimeout(
          () => {
            requestAnimationFrame(() => D());
          },
          oe
        );
      } else
        w(le, -1), w(ke, ""), X = null, Xt(j), l(j) < l(P).length && l(U) ? Ct() : w(U, !1);
    }
    requestAnimationFrame(() => D());
  }
  function Wt() {
    ie && (clearTimeout(ie), ie = null), X && (clearTimeout(X), X = null), w(j, 0), w(V, [], !0), w(U, !1), w(le, -1), w(ke, "");
  }
  function ma() {
    if (l(U))
      w(U, !1), ie && (clearTimeout(ie), ie = null), X && (clearTimeout(X), X = null);
    else {
      if (!l(P) || l(P).length === 0)
        return;
      l(j) >= l(P).length ? (Wt(), setTimeout(() => Yt(), 10)) : Yt();
    }
  }
  function ga(f) {
    return `step-${f}`;
  }
  function wa(f, g) {
    const I = f.prompt || "$";
    return f.type === "command" ? g === l(le) ? `${I} ${l(ke)}` : `${I} ${f.content}` : f.content;
  }
  function Zr() {
    l(le) >= 0 && l(le) < l(V).length && (X && (clearTimeout(X), X = null), w(
      V,
      l(V).map((f, g) => g === l(le) ? {
        ...f,
        content: l(P)[l(j)].content
      } : f),
      !0
    ), w(le, -1), w(ke, ""), Xt(j), l(j) < l(P).length && l(U) ? Ct() : w(U, !1));
  }
  let Kt = null;
  vt(() => {
    if (T && typeof IntersectionObserver < "u") {
      const f = new IntersectionObserver(
        (g) => {
          g.forEach((I) => {
            w(br, I.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return f.observe(T), () => {
        f && f.disconnect();
      };
    }
  }), vt(() => {
    a() !== l(mr) && (!l(mr) && a() && w(Pt, !1), w(mr, a()));
  }), vt(() => {
    a() && l(br) && !l(Pt) && !l(U) && l(P) && l(P).length > 0 && l(j) === 0 && (w(Pt, !0), setTimeout(() => Yt(), 300));
  }), vt(() => {
    if (T) {
      if (N() && d() && d().length > 0) {
        const g = d()[l(he)] || d()[0];
        g && (Vt = g.id);
      }
      const f = () => {
        const g = l(P);
        !N() && g && g.length !== Jr && (Jr = g.length, (l(V).length > 0 || l(j) > 0) && (Wt(), w(
          Pt,
          !1
          // Reset autoplay flag for new session
        ))), N() && l(O) && l(O).id !== Vt && !l(_e).has(l(O).id) && (Vt = l(O).id, l(_e).has(l(O).id) || w(Pt, !1));
      };
      f(), Kt = setInterval(f, 500);
    }
    return () => {
      Kt !== null && (clearInterval(Kt), Kt = null), ie && (clearTimeout(ie), ie = null), X && (clearTimeout(X), X = null);
    };
  });
  function ya() {
    const f = r() === "dark" ? "light" : "dark";
    T == null || T.dispatchEvent(new CustomEvent("theme-change", { detail: f }));
  }
  function $a() {
    l(O) && l(_e).set(l(O).id, {
      currentStepIndex: l(j),
      isPlaying: l(U),
      displayedSteps: [...l(V)],
      typingStepIndex: l(le),
      typedContent: l(ke),
      lastUpdateTime: Date.now()
    });
  }
  function Ta(f) {
    const g = l(_e).get(f);
    if (g) {
      const I = Date.now() - g.lastUpdateTime;
      if (w(j, g.currentStepIndex, !0), w(U, g.isPlaying, !0), w(V, [...g.displayedSteps], !0), w(le, g.typingStepIndex, !0), w(ke, g.typedContent, !0), g.isPlaying && l(P) && l(j) < l(P).length) {
        let Z = l(j), te = 0;
        for (; Z < l(P).length && te < I; ) {
          const D = l(P)[Z], C = (D.delay || 1e3) / i();
          if (te + C <= I)
            w(V, [...l(V), D], !0), Z++, te += C;
          else
            break;
        }
        w(j, Z, !0), l(j) < l(P).length ? Ct() : w(U, !1);
      }
    } else
      l(_e).has(f) || (Wt(), a() && l(br) && l(P) && l(P).length > 0 && setTimeout(() => Yt(), 300));
  }
  function gr(f) {
    if (f === l(he) || !d() || f < 0 || f >= d().length) return;
    $a(), ie && (clearTimeout(ie), ie = null), X && (clearTimeout(X), X = null), w(he, f, !0);
    const g = d()[f];
    g && (Ta(g.id), Vt = g.id), T == null || T.dispatchEvent(new CustomEvent("tab-change", { detail: { index: f, tab: g } }));
  }
  function Gt(f) {
    if (!d() || d().length <= 1) return;
    const g = d()[f];
    if (g.closable !== !1 && S())
      if (g && l(_e).delete(g.id), T == null || T.dispatchEvent(new CustomEvent("tab-close", { detail: { index: f, tab: g } })), f === l(he)) {
        const Z = f > 0 ? f - 1 : 0;
        d().length > 1 && gr(Z);
      } else f < l(he) && Xt(he, -1);
  }
  function Qr() {
    m() && (T == null || T.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function en(f) {
    return f ? `tab-status-${f}` : "";
  }
  var Jt = ps(), tn = W(Jt);
  {
    var ka = (f) => {
      var g = Qi(), I = W(g);
      {
        var Z = (A) => {
          var re = Ki();
          B(A, re);
        };
        Q(I, (A) => {
          l(pr) && A(Z);
        });
      }
      var te = ne(I, 2), D = W(te, !0);
      Y(te);
      var C = ne(te, 2);
      {
        var oe = (A) => {
          var re = Zi(), ct = W(re);
          {
            var De = (ue) => {
              var $ = Gi();
              $.__click = ma;
              var R = W($, !0);
              Y($), Ee(() => {
                $.disabled = !l(P) || l(P).length === 0, Ce(R, l(U) ? "⏸" : "▶");
              }), B(ue, $);
            };
            Q(ct, (ue) => {
              l(ut) && ue(De);
            });
          }
          var dt = ne(ct, 2);
          {
            var Xe = (ue) => {
              var $ = Ji();
              $.__click = Wt, Ee(() => $.disabled = l(V).length === 0), B(ue, $);
            };
            Q(dt, (ue) => {
              l(jt) && ue(Xe);
            });
          }
          var At = ne(dt, 2);
          {
            var Rt = (ue) => {
              var $ = Xi();
              $.__click = ya;
              var R = W($, !0);
              Y($), Ee(() => Ce(R, r() === "dark" ? "☀" : "🌙")), B(ue, $);
            };
            Q(At, (ue) => {
              l(Ut) && ue(Rt);
            });
          }
          Y(re), B(A, re);
        };
        Q(C, (A) => {
          l(_a) && A(oe);
        });
      }
      Y(g), Ee(() => Ce(D, l(Je))), B(f, g);
    };
    Q(tn, (f) => {
      l(pa) && f(ka);
    });
  }
  var rn = ne(tn, 2);
  {
    var Ea = (f) => {
      var g = is(), I = W(g);
      Tr(I, 17, d, $r, (D, C, oe) => {
        var A = ns();
        A.__click = () => gr(oe);
        var re = W(A);
        {
          var ct = ($) => {
            var R = es(), L = W(R, !0);
            Y(R), Ee(() => Ce(L, l(C).icon)), B($, R);
          };
          Q(re, ($) => {
            l(C).icon && $(ct);
          });
        }
        var De = ne(re, 2), dt = W(De, !0);
        Y(De);
        var Xe = ne(De, 2);
        {
          var At = ($) => {
            var R = ts(), L = W(R, !0);
            Y(R), Ee(() => Ce(L, l(C).badge)), B($, R);
          };
          Q(Xe, ($) => {
            l(C).badge !== void 0 && $(At);
          });
        }
        var Rt = ne(Xe, 2);
        {
          var ue = ($) => {
            var R = rs();
            R.__click = (L) => {
              L.stopPropagation(), Gt(oe);
            }, R.__keydown = (L) => {
              (L.key === "Enter" || L.key === " ") && (L.stopPropagation(), L.preventDefault(), Gt(oe));
            }, B($, R);
          };
          Q(Rt, ($) => {
            l(C).closable !== !1 && S() && d().length > 1 && $(ue);
          });
        }
        Y(A), Ee(
          ($) => {
            Er(A, 1, `terminal-tab ${oe === l(he) ? "active" : ""} ${$ ?? ""}`, "svelte-2qd9r7"), Ce(dt, l(C).title);
          },
          [() => en(l(C).status)]
        ), B(D, A);
      });
      var Z = ne(I, 2);
      {
        var te = (D) => {
          var C = as();
          C.__click = Qr, B(D, C);
        };
        Q(Z, (D) => {
          m() && D(te);
        });
      }
      Y(g), B(f, g);
    };
    Q(rn, (f) => {
      N() && d() && d().length > 0 && q() === "top" && f(Ea);
    });
  }
  var ft = ne(rn, 2);
  ft.__click = Zr, ft.__keydown = [ss, Zr];
  var nn = W(ft);
  Tr(nn, 17, () => l(V), $r, (f, g, I) => {
    var Z = os(), te = W(Z), D = W(te, !0), C = ne(D);
    {
      var oe = (A) => {
        var re = ls();
        B(A, re);
      };
      Q(C, (A) => {
        I === l(le) && A(oe);
      });
    }
    Y(te), Y(Z), Ee(
      (A, re) => {
        Er(Z, 1, `terminal-line ${A ?? ""}`, "svelte-2qd9r7"), Ce(D, re);
      },
      [
        () => ga(l(g).type),
        () => wa(l(g), I)
      ]
    ), B(f, Z);
  });
  var xa = ne(nn, 2);
  {
    var qa = (f) => {
      var g = us();
      B(f, g);
    };
    Q(xa, (f) => {
      l(U) && l(le) === -1 && f(qa);
    });
  }
  Y(ft), pn(ft, (f) => J = f, () => J);
  var Sa = ne(ft, 2);
  {
    var Pa = (f) => {
      var g = _s(), I = W(g);
      Tr(I, 17, d, $r, (D, C, oe) => {
        var A = vs();
        A.__click = () => gr(oe);
        var re = W(A);
        {
          var ct = ($) => {
            var R = fs(), L = W(R, !0);
            Y(R), Ee(() => Ce(L, l(C).icon)), B($, R);
          };
          Q(re, ($) => {
            l(C).icon && $(ct);
          });
        }
        var De = ne(re, 2), dt = W(De, !0);
        Y(De);
        var Xe = ne(De, 2);
        {
          var At = ($) => {
            var R = cs(), L = W(R, !0);
            Y(R), Ee(() => Ce(L, l(C).badge)), B($, R);
          };
          Q(Xe, ($) => {
            l(C).badge !== void 0 && $(At);
          });
        }
        var Rt = ne(Xe, 2);
        {
          var ue = ($) => {
            var R = ds();
            R.__click = (L) => {
              L.stopPropagation(), Gt(oe);
            }, R.__keydown = (L) => {
              (L.key === "Enter" || L.key === " ") && (L.stopPropagation(), L.preventDefault(), Gt(oe));
            }, B($, R);
          };
          Q(Rt, ($) => {
            l(C).closable !== !1 && S() && d().length > 1 && $(ue);
          });
        }
        Y(A), Ee(
          ($) => {
            Er(A, 1, `terminal-tab ${oe === l(he) ? "active" : ""} ${$ ?? ""}`, "svelte-2qd9r7"), Ce(dt, l(C).title);
          },
          [() => en(l(C).status)]
        ), B(D, A);
      });
      var Z = ne(I, 2);
      {
        var te = (D) => {
          var C = hs();
          C.__click = Qr, B(D, C);
        };
        Q(Z, (D) => {
          m() && D(te);
        });
      }
      Y(g), B(f, g);
    };
    Q(Sa, (f) => {
      N() && d() && d().length > 0 && q() === "bottom" && f(Pa);
    });
  }
  return Y(Jt), pn(Jt, (f) => T = f, () => T), B(e, Jt), Pn({
    get theme() {
      return r();
    },
    set theme(f = "dark") {
      r(f), H();
    },
    get session() {
      return n();
    },
    set session(f = []) {
      n(f), H();
    },
    get autoplay() {
      return a();
    },
    set autoplay(f = !1) {
      a(f), H();
    },
    get playbackSpeed() {
      return i();
    },
    set playbackSpeed(f = 1) {
      i(f), H();
    },
    get showHeader() {
      return s();
    },
    set showHeader(f) {
      s(f), H();
    },
    get title() {
      return o();
    },
    set title(f = "Terminal") {
      o(f), H();
    },
    get colors() {
      return u();
    },
    set colors(f = {}) {
      u(f), H();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(f = 40) {
      c(f), H();
    },
    get enableTyping() {
      return _();
    },
    set enableTyping(f = !0) {
      _(f), H();
    },
    get showPlayButton() {
      return b();
    },
    set showPlayButton(f) {
      b(f), H();
    },
    get showResetButton() {
      return v();
    },
    set showResetButton(f) {
      v(f), H();
    },
    get showThemeToggle() {
      return p();
    },
    set showThemeToggle(f) {
      p(f), H();
    },
    get showWindowButtons() {
      return h();
    },
    set showWindowButtons(f) {
      h(f), H();
    },
    get tabs() {
      return d();
    },
    set tabs(f = []) {
      d(f), H();
    },
    get activeTab() {
      return k();
    },
    set activeTab(f = 0) {
      k(f), H();
    },
    get showTabs() {
      return N();
    },
    set showTabs(f = !1) {
      N(f), H();
    },
    get allowTabClose() {
      return S();
    },
    set allowTabClose(f = !0) {
      S(f), H();
    },
    get allowTabAdd() {
      return m();
    },
    set allowTabAdd(f = !1) {
      m(f), H();
    },
    get tabBarPosition() {
      return q();
    },
    set tabBarPosition(f = "top") {
      q(f), H();
    }
  });
}
Pi(["click", "keydown"]);
customElements.define("terminal-session", ji(
  ms,
  {
    showPlayButton: { attribute: "show-play-button", type: "Boolean" },
    showResetButton: { attribute: "show-reset-button", type: "Boolean" },
    showThemeToggle: { attribute: "show-theme-toggle", type: "Boolean" },
    showWindowButtons: { attribute: "show-window-buttons", type: "Boolean" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header", type: "Boolean" },
    playbackSpeed: { attribute: "playback-speed", type: "Number" },
    typingSpeed: { attribute: "typing-speed", type: "Number" },
    activeTab: { attribute: "active-tab", type: "Number" },
    theme: { attribute: "theme" },
    title: { attribute: "title" },
    tabBarPosition: { attribute: "tab-bar-position" },
    session: {},
    colors: {},
    tabs: {}
  },
  [],
  [],
  !0
));
export {
  ms as default
};
