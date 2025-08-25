var Ia = Object.defineProperty;
var on = (e) => {
  throw TypeError(e);
};
var Oa = (e, t, r) => t in e ? Ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ce = (e, t, r) => Oa(e, typeof t != "symbol" ? t + "" : t, r), gr = (e, t, r) => t.has(e) || on("Cannot " + r);
var E = (e, t, r) => (gr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), fe = (e, t, r) => t.has(e) ? on("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pe = (e, t, r, n) => (gr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), nt = (e, t, r) => (gr(e, t, "access private method"), r);
const Da = "5";
var wn;
typeof window < "u" && ((wn = window.__svelte ?? (window.__svelte = {})).v ?? (wn.v = /* @__PURE__ */ new Set())).add(Da);
const Ma = 1, Fa = 2, La = 16, Ha = 1, Ua = 4, za = 8, ja = 16, Wa = 2, yn = "[", Or = "[!", Dr = "]", bt = {}, ue = Symbol(), $n = !1;
var Mr = Array.isArray, Va = Array.prototype.indexOf, Fr = Array.from, rr = Object.keys, kt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Ya = Object.prototype, Ka = Array.prototype, Ga = Object.getPrototypeOf, un = Object.isExtensible;
function Tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ja() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const ye = 2, Lr = 4, kn = 8, Pt = 16, je = 32, Qe = 64, En = 128, qe = 256, nr = 512, ve = 1024, Se = 2048, et = 4096, Ae = 8192, ct = 16384, Hr = 32768, Ur = 65536, fn = 1 << 17, Xa = 1 << 18, Ct = 1 << 19, Za = 1 << 20, Er = 1 << 21, zr = 1 << 22, ot = 1 << 23, Dt = Symbol("$state"), xn = Symbol("legacy props"), jr = new class extends Error {
  constructor() {
    super(...arguments);
    ce(this, "name", "StaleReactionError");
    ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), qn = 3, Mt = 8;
function Qa() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Sn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function es() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ts(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ns(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function as() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ss() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ls(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function is() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function os() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function us() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function fr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function Ue(e) {
  V = e;
}
let H;
function Me(e) {
  if (e === null)
    throw fr(), bt;
  return H = e;
}
function cr() {
  return Me(
    /** @type {TemplateNode} */
    /* @__PURE__ */ dt(H)
  );
}
function Z(e) {
  if (V) {
    if (/* @__PURE__ */ dt(H) !== null)
      throw fr(), bt;
    H = e;
  }
}
function xr() {
  for (var e = 0, t = H; ; ) {
    if (t.nodeType === Mt) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Dr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === yn || r === Or) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(t)
    );
    t.remove(), t = n;
  }
}
function Pn(e) {
  if (!e || e.nodeType !== Mt)
    throw fr(), bt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Cn(e) {
  return e === this.v;
}
function fs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function An(e) {
  return !fs(e, this.v);
}
let cs = !1, $e = null;
function ar(e) {
  $e = e;
}
function Nn(e, t = !1, r) {
  $e = {
    p: $e,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Rn(e) {
  var t = (
    /** @type {ComponentContext} */
    $e
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Zn(n);
  }
  return e !== void 0 && (t.x = e), $e = t.p, e ?? /** @type {T} */
  {};
}
function Bn() {
  return !0;
}
const ds = /* @__PURE__ */ new WeakMap();
function vs(e) {
  var t = S;
  if (t === null)
    return q.f |= ot, e;
  if (t.f & Hr)
    Wr(e, t);
  else {
    if (!(t.f & En))
      throw !t.parent && e instanceof Error && In(e), e;
    t.b.error(e);
  }
}
function Wr(e, t) {
  for (; t !== null; ) {
    if (t.f & En)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && In(e), e;
}
function In(e) {
  const t = ds.get(e);
  t && (kt(e, "message", {
    value: t.message
  }), kt(e, "stack", {
    value: t.stack
  }));
}
let Ft = [], qr = [];
function On() {
  var e = Ft;
  Ft = [], Tn(e);
}
function hs() {
  var e = qr;
  qr = [], Tn(e);
}
function _s(e) {
  Ft.length === 0 && queueMicrotask(On), Ft.push(e);
}
function ps() {
  Ft.length > 0 && On(), qr.length > 0 && hs();
}
function bs() {
  for (var e = (
    /** @type {Effect} */
    S.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && Qa(), e;
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  var t = ye | Se, r = q !== null && q.f & ye ? (
    /** @type {Derived} */
    q
  ) : null;
  return S === null || r !== null && r.f & qe ? t |= qe : S.f |= Ct, {
    ctx: $e,
    deps: null,
    effects: null,
    equals: Cn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ue
    ),
    wv: 0,
    parent: r ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ms(e, t) {
  let r = (
    /** @type {Effect | null} */
    S
  );
  r === null && es();
  var n = (
    /** @type {Boundary} */
    r.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Lt(
    /** @type {V} */
    ue
  ), l = null, o = !q;
  return qs(() => {
    try {
      var u = e();
    } catch (p) {
      u = Promise.reject(p);
    }
    var c = () => u;
    a = (l == null ? void 0 : l.then(c, c)) ?? Promise.resolve(u), l = a;
    var _ = (
      /** @type {Batch} */
      te
    ), b = n.pending;
    o && (n.update_pending_count(1), b || _.increment());
    const v = (p, h = void 0) => {
      l = null, b || _.activate(), h ? h !== jr && (s.f |= ot, lr(s, h)) : (s.f & ot && (s.f ^= ot), lr(s, p)), o && (n.update_pending_count(-1), b || _.decrement()), Ln();
    };
    if (a.then(v, (p) => v(null, p || "unknown")), _)
      return () => {
        queueMicrotask(() => _.neuter());
      };
  }), new Promise((u) => {
    function c(_) {
      function b() {
        _ === a ? u(s) : c(a);
      }
      _.then(b, b);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = /* @__PURE__ */ dr(e);
  return ia(t), t;
}
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  const t = /* @__PURE__ */ dr(e);
  return t.equals = An, t;
}
function Mn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Fe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function gs(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ye))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Vr(e) {
  var t, r = S;
  Ze(gs(e));
  try {
    Mn(e), t = ca(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Fn(e) {
  var t = Vr(e);
  if (e.equals(t) || (e.v = t, e.wv = ua()), !vt)
    if (Ge !== null)
      Ge.set(e, e.v);
    else {
      var r = (Je || e.f & qe) && e.deps !== null ? et : ve;
      we(e, r);
    }
}
function ws(e, t, r) {
  const n = dr;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var a = te, s = (
    /** @type {Effect} */
    S
  ), l = ys(), o = bs();
  Promise.all(t.map((u) => /* @__PURE__ */ ms(u))).then((u) => {
    a == null || a.activate(), l();
    try {
      r([...e.map(n), ...u]);
    } catch (c) {
      s.f & ct || Wr(c, s);
    }
    a == null || a.deactivate(), Ln();
  }).catch((u) => {
    o.error(u);
  });
}
function ys() {
  var e = S, t = q, r = $e;
  return function() {
    Ze(e), Le(t), ar(r);
  };
}
function Ln() {
  Ze(null), Le(null), ar(null);
}
const Ot = /* @__PURE__ */ new Set();
let te = null, Ge = null, cn = /* @__PURE__ */ new Set(), sr = [];
function Hn() {
  const e = (
    /** @type {() => void} */
    sr.shift()
  );
  sr.length > 0 && queueMicrotask(Hn), e();
}
let ft = [], vr = null, Sr = !1, Qt = !1;
var wt, yt, Ye, Ut, zt, st, $t, lt, Ke, Tt, jt, Wt, Ne, Un, er, Pr;
const ur = class ur {
  constructor() {
    fe(this, Ne);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ce(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    fe(this, wt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    fe(this, yt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    fe(this, Ye, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    fe(this, Ut, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    fe(this, zt, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    fe(this, st, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    fe(this, $t, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    fe(this, lt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    fe(this, Ke, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    fe(this, Tt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    fe(this, jt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    fe(this, Wt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ce(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var s;
    ft = [];
    var r = null;
    if (Ot.size > 1) {
      r = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
      for (const [l, o] of this.current)
        r.set(l, { v: l.v, wv: l.wv }), l.v = o;
      for (const l of Ot)
        if (l !== this)
          for (const [o, u] of E(l, wt))
            r.has(o) || (r.set(o, { v: o.v, wv: o.wv }), o.v = u);
    }
    for (const l of t)
      nt(this, Ne, Un).call(this, l);
    if (E(this, st).length === 0 && E(this, Ye) === 0) {
      nt(this, Ne, Pr).call(this);
      var n = E(this, lt), a = E(this, Ke);
      pe(this, lt, []), pe(this, Ke, []), pe(this, Tt, []), te = null, dn(n), dn(a), te === null ? te = this : Ot.delete(this), (s = E(this, Ut)) == null || s.resolve();
    } else
      nt(this, Ne, er).call(this, E(this, lt)), nt(this, Ne, er).call(this, E(this, Ke)), nt(this, Ne, er).call(this, E(this, Tt));
    if (r) {
      for (const [l, { v: o, wv: u }] of r)
        l.wv <= u && (l.v = o);
      Ge = null;
    }
    for (const l of E(this, st))
      gt(l);
    for (const l of E(this, $t))
      gt(l);
    pe(this, st, []), pe(this, $t, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    E(this, wt).has(t) || E(this, wt).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    te = this;
  }
  deactivate() {
    te = null;
    for (const t of cn)
      if (cn.delete(t), t(), te !== null)
        break;
  }
  neuter() {
    pe(this, zt, !0);
  }
  flush() {
    ft.length > 0 ? zn() : nt(this, Ne, Pr).call(this), te === this && (E(this, Ye) === 0 && Ot.delete(this), this.deactivate());
  }
  increment() {
    pe(this, Ye, E(this, Ye) + 1);
  }
  decrement() {
    if (pe(this, Ye, E(this, Ye) - 1), E(this, Ye) === 0) {
      for (const t of E(this, jt))
        we(t, Se), xt(t);
      for (const t of E(this, Wt))
        we(t, et), xt(t);
      pe(this, lt, []), pe(this, Ke, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    E(this, yt).add(t);
  }
  settled() {
    return (E(this, Ut) ?? pe(this, Ut, Ja())).promise;
  }
  static ensure() {
    if (te === null) {
      const t = te = new ur();
      Ot.add(te), Qt || ur.enqueue(() => {
        te === t && t.flush();
      });
    }
    return te;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    sr.length === 0 && queueMicrotask(Hn), sr.unshift(t);
  }
};
wt = new WeakMap(), yt = new WeakMap(), Ye = new WeakMap(), Ut = new WeakMap(), zt = new WeakMap(), st = new WeakMap(), $t = new WeakMap(), lt = new WeakMap(), Ke = new WeakMap(), Tt = new WeakMap(), jt = new WeakMap(), Wt = new WeakMap(), Ne = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Un = function(t) {
  var _;
  t.f ^= ve;
  for (var r = t.first; r !== null; ) {
    var n = r.f, a = (n & (je | Qe)) !== 0, s = a && (n & ve) !== 0, l = s || (n & Ae) !== 0 || this.skipped_effects.has(r);
    if (!l && r.fn !== null) {
      if (a)
        r.f ^= ve;
      else if (n & Lr)
        E(this, Ke).push(r);
      else if (!(n & ve))
        if (n & zr) {
          var o = (_ = r.b) != null && _.pending ? E(this, $t) : E(this, st);
          o.push(r);
        } else hr(r) && (r.f & Pt && E(this, Tt).push(r), gt(r));
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
er = function(t) {
  for (const r of t)
    (r.f & Se ? E(this, jt) : E(this, Wt)).push(r), we(r, ve);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Pr = function() {
  if (!E(this, zt))
    for (const t of E(this, yt))
      t();
  E(this, yt).clear();
};
let Et = ur;
function W(e) {
  var t = Qt;
  Qt = !0;
  try {
    for (var r; ; ) {
      if (ps(), ft.length === 0 && (te == null || te.flush(), ft.length === 0))
        return vr = null, /** @type {T} */
        r;
      zn();
    }
  } finally {
    Qt = t;
  }
}
function zn() {
  var e = mt;
  Sr = !0;
  try {
    var t = 0;
    for (hn(!0); ft.length > 0; ) {
      var r = Et.ensure();
      if (t++ > 1e3) {
        var n, a;
        $s();
      }
      r.process(ft), Xe.clear();
    }
  } finally {
    Sr = !1, hn(e), vr = null;
  }
}
function $s() {
  try {
    as();
  } catch (e) {
    Wr(e, vr);
  }
}
let at = null;
function dn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (ct | Ae)) && hr(n) && (at = [], gt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? aa(n) : n.fn = null), at.length > 0)) {
        Xe.clear();
        for (const a of at)
          gt(a);
        at = [];
      }
    }
    at = null;
  }
}
function xt(e) {
  for (var t = vr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Sr && t === S && r & Pt)
      return;
    if (r & (Qe | je)) {
      if (!(r & ve)) return;
      t.f ^= ve;
    }
  }
  ft.push(t);
}
const Xe = /* @__PURE__ */ new Map();
function Lt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Lt(e);
  return ia(r), r;
}
// @__NO_SIDE_EFFECTS__
function jn(e, t = !1, r = !0) {
  const n = Lt(e);
  return t || (n.equals = An), n;
}
function w(e, t, r = !1) {
  q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!De || q.f & fn) && Bn() && q.f & (ye | Pt | zr | fn) && !(he != null && he.includes(e)) && us();
  let n = r ? ze(t) : t;
  return lr(e, n);
}
function lr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    vt ? Xe.set(e, t) : Xe.set(e, r), e.v = t;
    var n = Et.ensure();
    n.capture(e, r), e.f & ye && (e.f & Se && Vr(
      /** @type {Derived} */
      e
    ), we(e, e.f & qe ? et : ve)), e.wv = ua(), Wn(e, Se), S !== null && S.f & ve && !(S.f & (je | Qe)) && (Ee === null ? Cs([e]) : Ee.push(e));
  }
  return t;
}
function Jt(e, t = 1) {
  var r = i(e), n = t === 1 ? r++ : r--;
  return w(e, r), n;
}
function wr(e) {
  w(e, e.v + 1);
}
function Wn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, a = 0; a < n; a++) {
      var s = r[a], l = s.f, o = (l & Se) === 0;
      o && we(s, t), l & ye ? Wn(
        /** @type {Derived} */
        s,
        et
      ) : o && (l & Pt && at !== null && at.push(
        /** @type {Effect} */
        s
      ), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function ze(e) {
  if (typeof e != "object" || e === null || Dt in e)
    return e;
  const t = Ga(e);
  if (t !== Ya && t !== Ka)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Mr(e), a = /* @__PURE__ */ L(0), s = ut, l = (o) => {
    if (ut === s)
      return o();
    var u = q, c = ut;
    Le(null), pn(s);
    var _ = o();
    return Le(u), pn(c), _;
  };
  return n && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && is();
        var _ = r.get(u);
        return _ === void 0 ? _ = l(() => {
          var b = /* @__PURE__ */ L(c.value);
          return r.set(u, b), b;
        }) : w(_, c.value, !0), !0;
      },
      deleteProperty(o, u) {
        var c = r.get(u);
        if (c === void 0) {
          if (u in o) {
            const _ = l(() => /* @__PURE__ */ L(ue));
            r.set(u, _), wr(a);
          }
        } else
          w(c, ue), wr(a);
        return !0;
      },
      get(o, u, c) {
        var p;
        if (u === Dt)
          return e;
        var _ = r.get(u), b = u in o;
        if (_ === void 0 && (!b || (p = it(o, u)) != null && p.writable) && (_ = l(() => {
          var h = ze(b ? o[u] : ue), d = /* @__PURE__ */ L(h);
          return d;
        }), r.set(u, _)), _ !== void 0) {
          var v = i(_);
          return v === ue ? void 0 : v;
        }
        return Reflect.get(o, u, c);
      },
      getOwnPropertyDescriptor(o, u) {
        var c = Reflect.getOwnPropertyDescriptor(o, u);
        if (c && "value" in c) {
          var _ = r.get(u);
          _ && (c.value = i(_));
        } else if (c === void 0) {
          var b = r.get(u), v = b == null ? void 0 : b.v;
          if (b !== void 0 && v !== ue)
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
        if (u === Dt)
          return !0;
        var c = r.get(u), _ = c !== void 0 && c.v !== ue || Reflect.has(o, u);
        if (c !== void 0 || S !== null && (!_ || (v = it(o, u)) != null && v.writable)) {
          c === void 0 && (c = l(() => {
            var p = _ ? ze(o[u]) : ue, h = /* @__PURE__ */ L(p);
            return h;
          }), r.set(u, c));
          var b = i(c);
          if (b === ue)
            return !1;
        }
        return _;
      },
      set(o, u, c, _) {
        var g;
        var b = r.get(u), v = u in o;
        if (n && u === "length")
          for (var p = c; p < /** @type {Source<number>} */
          b.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? w(h, ue) : p in o && (h = l(() => /* @__PURE__ */ L(ue)), r.set(p + "", h));
          }
        if (b === void 0)
          (!v || (g = it(o, u)) != null && g.writable) && (b = l(() => /* @__PURE__ */ L(void 0)), w(b, ze(c)), r.set(u, b));
        else {
          v = b.v !== ue;
          var d = l(() => ze(c));
          w(b, d);
        }
        var x = Reflect.getOwnPropertyDescriptor(o, u);
        if (x != null && x.set && x.set.call(_, c), !v) {
          if (n && typeof u == "string") {
            var B = (
              /** @type {Source<number>} */
              r.get("length")
            ), A = Number(u);
            Number.isInteger(A) && A >= B.v && w(B, A + 1);
          }
          wr(a);
        }
        return !0;
      },
      ownKeys(o) {
        i(a);
        var u = Reflect.ownKeys(o).filter((b) => {
          var v = r.get(b);
          return v === void 0 || v.v !== ue;
        });
        for (var [c, _] of r)
          _.v !== ue && !(c in o) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        os();
      }
    }
  );
}
var vn, Vn, Yn, Kn;
function Cr() {
  if (vn === void 0) {
    vn = window, Vn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Yn = it(t, "firstChild").get, Kn = it(t, "nextSibling").get, un(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), un(r) && (r.__t = void 0);
  }
}
function qt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return Yn.call(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return Kn.call(e);
}
function Q(e, t) {
  if (!V)
    return /* @__PURE__ */ ir(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ir(H)
  );
  if (r === null)
    r = H.appendChild(qt());
  else if (t && r.nodeType !== qn) {
    var n = qt();
    return r == null || r.before(n), Me(n), n;
  }
  return Me(r), r;
}
function oe(e, t = 1, r = !1) {
  let n = V ? H : e;
  for (var a; t--; )
    a = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ dt(n);
  if (!V)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== qn) {
    var s = qt();
    return n === null ? a == null || a.after(s) : n.before(s), Me(s), s;
  }
  return Me(n), /** @type {TemplateNode} */
  n;
}
function Gn(e) {
  e.textContent = "";
}
function Jn() {
  return !1;
}
function Xn(e) {
  var t = q, r = S;
  Le(null), Ze(null);
  try {
    return e();
  } finally {
    Le(t), Ze(r);
  }
}
function Ts(e) {
  S === null && q === null && ns(), q !== null && q.f & qe && S === null && rs(), vt && ts();
}
function ks(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function We(e, t, r, n = !0) {
  var a = S;
  a !== null && a.f & Ae && (e |= Ae);
  var s = {
    ctx: $e,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Se,
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
      gt(s), s.f |= Hr;
    } catch (u) {
      throw Fe(s), u;
    }
  else t !== null && xt(s);
  if (n) {
    var l = s;
    if (r && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & Ct) && (l = l.first), l !== null && (l.parent = a, a !== null && ks(l, a), q !== null && q.f & ye && !(e & Qe))) {
      var o = (
        /** @type {Derived} */
        q
      );
      (o.effects ?? (o.effects = [])).push(l);
    }
  }
  return s;
}
function Ar(e) {
  Ts();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !q && (t & je) !== 0 && (t & Hr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      $e
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Zn(e);
}
function Zn(e) {
  return We(Lr | Za, e, !1);
}
function Es(e) {
  Et.ensure();
  const t = We(Qe | Ct, e, !0);
  return () => {
    Fe(t);
  };
}
function xs(e) {
  Et.ensure();
  const t = We(Qe | Ct, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Yr(t, () => {
      Fe(t), n(void 0);
    }) : (Fe(t), n(void 0));
  });
}
function Qn(e) {
  return We(Lr, e, !1);
}
function qs(e) {
  return We(zr | Ct, e, !0);
}
function ea(e, t = 0) {
  return We(kn | t, e, !0);
}
function Ce(e, t = [], r = []) {
  ws(t, r, (n) => {
    We(kn, () => e(...n.map(i)), !0);
  });
}
function ta(e, t = 0) {
  var r = We(Pt | t, e, !0);
  return r;
}
function St(e, t = !0) {
  return We(je | Ct, e, !0, t);
}
function ra(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = vt, n = q;
    _n(!0), Le(null);
    try {
      t.call(null);
    } finally {
      _n(r), Le(n);
    }
  }
}
function na(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Xn(() => {
      a.abort(jr);
    });
    var n = r.next;
    r.f & Qe ? r.parent = null : Fe(r, t), r = n;
  }
}
function Ss(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & je || Fe(t), t = r;
  }
}
function Fe(e, t = !0) {
  var r = !1;
  (t || e.f & Xa) && e.nodes_start !== null && e.nodes_end !== null && (Ps(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), na(e, t && !r), or(e, 0), we(e, ct);
  var n = e.transitions;
  if (n !== null)
    for (const s of n)
      s.stop();
  ra(e);
  var a = e.parent;
  a !== null && a.first !== null && aa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ps(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(e)
    );
    e.remove(), e = r;
  }
}
function aa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Yr(e, t) {
  var r = [];
  Kr(e, r, !0), sa(r, () => {
    Fe(e), t && t();
  });
}
function sa(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var a of e)
      a.out(n);
  } else
    t();
}
function Kr(e, t, r) {
  if (!(e.f & Ae)) {
    if (e.f ^= Ae, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var a = n.next, s = (n.f & Ur) !== 0 || (n.f & je) !== 0;
      Kr(n, t, s ? r : !1), n = a;
    }
  }
}
function Gr(e) {
  la(e, !0);
}
function la(e, t) {
  if (e.f & Ae) {
    e.f ^= Ae, e.f & ve || (we(e, Se), xt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & Ur) !== 0 || (r.f & je) !== 0;
      la(r, a ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
let mt = !1;
function hn(e) {
  mt = e;
}
let vt = !1;
function _n(e) {
  vt = e;
}
let q = null, De = !1;
function Le(e) {
  q = e;
}
let S = null;
function Ze(e) {
  S = e;
}
let he = null;
function ia(e) {
  q !== null && (he === null ? he = [e] : he.push(e));
}
let de = null, ge = 0, Ee = null;
function Cs(e) {
  Ee = e;
}
let oa = 1, Ht = 0, ut = Ht;
function pn(e) {
  ut = e;
}
let Je = !1;
function ua() {
  return ++oa;
}
function hr(e) {
  var b;
  var t = e.f;
  if (t & Se)
    return !0;
  if (t & et) {
    var r = e.deps, n = (t & qe) !== 0;
    if (r !== null) {
      var a, s, l = (t & nr) !== 0, o = n && S !== null && !Je, u = r.length;
      if ((l || o) && (S === null || !(S.f & ct))) {
        var c = (
          /** @type {Derived} */
          e
        ), _ = c.parent;
        for (a = 0; a < u; a++)
          s = r[a], (l || !((b = s == null ? void 0 : s.reactions) != null && b.includes(c))) && (s.reactions ?? (s.reactions = [])).push(c);
        l && (c.f ^= nr), o && _ !== null && !(_.f & qe) && (c.f ^= qe);
      }
      for (a = 0; a < u; a++)
        if (s = r[a], hr(
          /** @type {Derived} */
          s
        ) && Fn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!n || S !== null && !Je) && we(e, ve);
  }
  return !1;
}
function fa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(he != null && he.includes(e)))
    for (var a = 0; a < n.length; a++) {
      var s = n[a];
      s.f & ye ? fa(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (r ? we(s, Se) : s.f & ve && we(s, et), xt(
        /** @type {Effect} */
        s
      ));
    }
}
function ca(e) {
  var d;
  var t = de, r = ge, n = Ee, a = q, s = Je, l = he, o = $e, u = De, c = ut, _ = e.f;
  de = /** @type {null | Value[]} */
  null, ge = 0, Ee = null, Je = (_ & qe) !== 0 && (De || !mt || q === null), q = _ & (je | Qe) ? null : e, he = null, ar(e.ctx), De = !1, ut = ++Ht, e.ac !== null && (Xn(() => {
    e.ac.abort(jr);
  }), e.ac = null);
  try {
    e.f |= Er;
    var b = (
      /** @type {Function} */
      e.fn
    ), v = b(), p = e.deps;
    if (de !== null) {
      var h;
      if (or(e, ge), p !== null && ge > 0)
        for (p.length = ge + de.length, h = 0; h < de.length; h++)
          p[ge + h] = de[h];
      else
        e.deps = p = de;
      if (!Je || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      _ & ye && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = ge; h < p.length; h++)
          ((d = p[h]).reactions ?? (d.reactions = [])).push(e);
    } else p !== null && ge < p.length && (or(e, ge), p.length = ge);
    if (Bn() && Ee !== null && !De && p !== null && !(e.f & (ye | et | Se)))
      for (h = 0; h < /** @type {Source[]} */
      Ee.length; h++)
        fa(
          Ee[h],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (Ht++, Ee !== null && (n === null ? n = Ee : n.push(.../** @type {Source[]} */
    Ee))), e.f & ot && (e.f ^= ot), v;
  } catch (x) {
    return vs(x);
  } finally {
    e.f ^= Er, de = t, ge = r, Ee = n, q = a, Je = s, he = l, ar(o), De = u, ut = c;
  }
}
function As(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Va.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  r === null && t.f & ye && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (de === null || !de.includes(t)) && (we(t, et), t.f & (qe | nr) || (t.f ^= nr), Mn(
    /** @type {Derived} **/
    t
  ), or(
    /** @type {Derived} **/
    t,
    0
  ));
}
function or(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      As(e, r[n]);
}
function gt(e) {
  var t = e.f;
  if (!(t & ct)) {
    we(e, ve);
    var r = S, n = mt;
    S = e, mt = !0;
    try {
      t & Pt ? Ss(e) : na(e), ra(e);
      var a = ca(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = oa;
      var s;
      $n && cs && e.f & Se && e.deps;
    } finally {
      mt = n, S = r;
    }
  }
}
async function Ns() {
  await Promise.resolve(), W();
}
function i(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (q !== null && !De) {
    var n = S !== null && (S.f & ct) !== 0;
    if (!n && !(he != null && he.includes(e))) {
      var a = q.deps;
      if (q.f & Er)
        e.rv < Ht && (e.rv = Ht, de === null && a !== null && a[ge] === e ? ge++ : de === null ? de = [e] : (!Je || !de.includes(e)) && de.push(e));
      else {
        (q.deps ?? (q.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [q] : s.includes(q) || s.push(q);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && !(o.f & qe) && (l.f ^= qe);
  }
  if (vt) {
    if (Xe.has(e))
      return Xe.get(e);
    if (r) {
      l = /** @type {Derived} */
      e;
      var u = l.v;
      return (!(l.f & ve) && l.reactions !== null || da(l)) && (u = Vr(l)), Xe.set(l, u), u;
    }
  } else if (r) {
    if (l = /** @type {Derived} */
    e, Ge != null && Ge.has(l))
      return Ge.get(l);
    hr(l) && Fn(l);
  }
  if (e.f & ot)
    throw e.v;
  return e.v;
}
function da(e) {
  if (e.v === ue) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xe.has(t) || t.f & ye && da(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function _r(e) {
  var t = De;
  try {
    return De = !0, e();
  } finally {
    De = t;
  }
}
const Rs = -7169;
function we(e, t) {
  e.f = e.f & Rs | t;
}
const va = /* @__PURE__ */ new Set(), Nr = /* @__PURE__ */ new Set();
function Bs(e) {
  for (var t = 0; t < e.length; t++)
    va.add(e[t]);
  for (var r of Nr)
    r(e);
}
let bn = null;
function Xt(e) {
  var A;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [], s = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  bn = e;
  var l = 0, o = bn === e && e.__root;
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
    u <= c && (l = u);
  }
  if (s = /** @type {Element} */
  a[l] || e.target, s !== t) {
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var _ = q, b = S;
    Le(null), Ze(null);
    try {
      for (var v, p = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var d = s["__" + n];
          if (d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Mr(d)) {
              var [x, ...B] = d;
              x.apply(s, [e, ...B]);
            } else
              d.call(s, e);
        } catch (g) {
          v ? p.push(g) : v = g;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (v) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Le(_), Ze(b);
    }
  }
}
function Is(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Rr(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function U(e, t) {
  var r = (t & Wa) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (V)
      return Rr(H, null), H;
    n === void 0 && (n = Is(a ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ ir(n));
    var s = (
      /** @type {TemplateNode} */
      r || Vn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Rr(s, s), s;
  };
}
function D(e, t) {
  if (V) {
    S.nodes_end = H, cr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Os = ["touchstart", "touchmove"];
function Ds(e) {
  return Os.includes(e);
}
function Ie(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ha(e, t) {
  return _a(e, t);
}
function Ms(e, t) {
  Cr(), t.intro = t.intro ?? !1;
  const r = t.target, n = V, a = H;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ir(r)
    ); s && (s.nodeType !== Mt || /** @type {Comment} */
    s.data !== yn); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ dt(s);
    if (!s)
      throw bt;
    Ue(!0), Me(
      /** @type {Comment} */
      s
    ), cr();
    const l = _a(e, { ...t, anchor: s });
    if (H === null || H.nodeType !== Mt || /** @type {Comment} */
    H.data !== Dr)
      throw fr(), bt;
    return Ue(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== bt && console.warn("Failed to hydrate: ", l), t.recover === !1 && ss(), Cr(), Gn(r), Ue(!1), ha(e, t);
  } finally {
    Ue(n), Me(a);
  }
}
const pt = /* @__PURE__ */ new Map();
function _a(e, { target: t, anchor: r, props: n = {}, events: a, context: s, intro: l = !0 }) {
  Cr();
  var o = /* @__PURE__ */ new Set(), u = (b) => {
    for (var v = 0; v < b.length; v++) {
      var p = b[v];
      if (!o.has(p)) {
        o.add(p);
        var h = Ds(p);
        t.addEventListener(p, Xt, { passive: h });
        var d = pt.get(p);
        d === void 0 ? (document.addEventListener(p, Xt, { passive: h }), pt.set(p, 1)) : pt.set(p, d + 1);
      }
    }
  };
  u(Fr(va)), Nr.add(u);
  var c = void 0, _ = xs(() => {
    var b = r ?? t.appendChild(qt());
    return St(() => {
      if (s) {
        Nn({});
        var v = (
          /** @type {ComponentContext} */
          $e
        );
        v.c = s;
      }
      a && (n.$$events = a), V && Rr(
        /** @type {TemplateNode} */
        b,
        null
      ), c = e(b, n) || {}, V && (S.nodes_end = H), s && Rn();
    }), () => {
      var h;
      for (var v of o) {
        t.removeEventListener(v, Xt);
        var p = (
          /** @type {number} */
          pt.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, Xt), pt.delete(v)) : pt.set(v, p);
      }
      Nr.delete(u), b !== r && ((h = b.parentNode) == null || h.removeChild(b));
    };
  });
  return Br.set(c, _), c;
}
let Br = /* @__PURE__ */ new WeakMap();
function Fs(e, t) {
  const r = Br.get(e);
  return r ? (Br.delete(e), r(t)) : Promise.resolve();
}
function pa(e) {
  $e === null && Sn(), Ar(() => {
    const t = _r(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ls(e) {
  $e === null && Sn(), pa(() => () => _r(e));
}
function se(e, t, r = !1) {
  V && cr();
  var n = e, a = null, s = null, l = ue, o = r ? Ur : 0, u = !1;
  const c = (p, h = !0) => {
    u = !0, v(h, p);
  };
  var _ = null;
  function b() {
    _ !== null && (_.lastChild.remove(), n.before(_), _ = null);
    var p = l ? a : s, h = l ? s : a;
    p && Gr(p), h && Yr(h, () => {
      l ? s = null : a = null;
    });
  }
  const v = (p, h) => {
    if (l === (l = p)) return;
    let d = !1;
    if (V) {
      const $ = Pn(n) === Or;
      !!l === $ && (n = xr(), Me(n), Ue(!1), d = !0);
    }
    var x = Jn(), B = n;
    if (x && (_ = document.createDocumentFragment(), _.append(B = qt())), l ? a ?? (a = h && St(() => h(B))) : s ?? (s = h && St(() => h(B))), x) {
      var A = (
        /** @type {Batch} */
        te
      ), g = l ? a : s, P = l ? s : a;
      g && A.skipped_effects.delete(g), P && A.skipped_effects.add(P), A.add_callback(b);
    } else
      b();
    d && Ue(!0);
  };
  ta(() => {
    u = !1, t(c), u || v(null, null);
  }, o), V && (n = H);
}
function yr(e, t) {
  return t;
}
function Hs(e, t, r) {
  for (var n = e.items, a = [], s = t.length, l = 0; l < s; l++)
    Kr(t[l].e, a, !0);
  var o = s > 0 && a.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Gn(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Oe(e, t[0].prev, t[s - 1].next);
  }
  sa(a, () => {
    for (var c = 0; c < s; c++) {
      var _ = t[c];
      o || (n.delete(_.k), Oe(e, _.prev, _.next)), Fe(_.e, !o);
    }
  });
}
function $r(e, t, r, n, a, s = null) {
  var l = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  V && cr();
  var u = null, c = !1, _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ Dn(() => {
    var d = r();
    return Mr(d) ? d : d == null ? [] : Fr(d);
  }), v, p;
  function h() {
    Us(
      p,
      v,
      o,
      _,
      l,
      a,
      t,
      n,
      r
    ), s !== null && (v.length === 0 ? u ? Gr(u) : u = St(() => s(l)) : u !== null && Yr(u, () => {
      u = null;
    }));
  }
  ta(() => {
    p ?? (p = /** @type {Effect} */
    S), v = /** @type {V[]} */
    i(b);
    var d = v.length;
    if (c && d === 0)
      return;
    c = d === 0;
    let x = !1;
    if (V) {
      var B = Pn(l) === Or;
      B !== (d === 0) && (l = xr(), Me(l), Ue(!1), x = !0);
    }
    if (V) {
      for (var A = null, g, P = 0; P < d; P++) {
        if (H.nodeType === Mt && /** @type {Comment} */
        H.data === Dr) {
          l = /** @type {Comment} */
          H, x = !0, Ue(!1);
          break;
        }
        var $ = v[P], re = n($, P);
        g = Ir(
          H,
          o,
          A,
          null,
          $,
          re,
          P,
          a,
          t,
          r
        ), o.items.set(re, g), A = g;
      }
      d > 0 && Me(xr());
    }
    if (V)
      d === 0 && s && (u = St(() => s(l)));
    else if (Jn()) {
      var _e = /* @__PURE__ */ new Set(), be = (
        /** @type {Batch} */
        te
      );
      for (P = 0; P < d; P += 1) {
        $ = v[P], re = n($, P);
        var M = o.items.get(re) ?? _.get(re);
        M ? ba(M, $, P) : (g = Ir(
          null,
          o,
          null,
          null,
          $,
          re,
          P,
          a,
          t,
          r,
          !0
        ), _.set(re, g)), _e.add(re);
      }
      for (const [N, tt] of o.items)
        _e.has(N) || be.skipped_effects.add(tt.e);
      be.add_callback(h);
    } else
      h();
    x && Ue(!0), i(b);
  }), V && (l = H);
}
function Us(e, t, r, n, a, s, l, o, u) {
  var c = t.length, _ = r.items, b = r.first, v = b, p, h = null, d = [], x = [], B, A, g, P;
  for (P = 0; P < c; P += 1) {
    if (B = t[P], A = o(B, P), g = _.get(A), g === void 0) {
      var $ = n.get(A);
      if ($ !== void 0) {
        n.delete(A), _.set(A, $);
        var re = h ? h.next : v;
        Oe(r, h, $), Oe(r, $, re), Tr($, re, a), h = $;
      } else {
        var _e = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        h = Ir(
          _e,
          r,
          h,
          h === null ? r.first : h.next,
          B,
          A,
          P,
          s,
          l,
          u
        );
      }
      _.set(A, h), d = [], x = [], v = h.next;
      continue;
    }
    if (ba(g, B, P), g.e.f & Ae && Gr(g.e), g !== v) {
      if (p !== void 0 && p.has(g)) {
        if (d.length < x.length) {
          var be = x[0], M;
          h = be.prev;
          var N = d[0], tt = d[d.length - 1];
          for (M = 0; M < d.length; M += 1)
            Tr(d[M], be, a);
          for (M = 0; M < x.length; M += 1)
            p.delete(x[M]);
          Oe(r, N.prev, tt.next), Oe(r, h, N), Oe(r, tt, be), v = be, h = tt, P -= 1, d = [], x = [];
        } else
          p.delete(g), Tr(g, v, a), Oe(r, g.prev, g.next), Oe(r, g, h === null ? r.first : h.next), Oe(r, h, g), h = g;
        continue;
      }
      for (d = [], x = []; v !== null && v.k !== A; )
        v.e.f & Ae || (p ?? (p = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      g = v;
    }
    d.push(g), h = g, v = g.next;
  }
  if (v !== null || p !== void 0) {
    for (var rt = p === void 0 ? [] : Fr(p); v !== null; )
      v.e.f & Ae || rt.push(v), v = v.next;
    var At = rt.length;
    if (At > 0) {
      var Nt = null;
      Hs(r, rt, Nt);
    }
  }
  e.first = r.first && r.first.e, e.last = h && h.e;
  for (var Rt of n.values())
    Fe(Rt.e);
  n.clear();
}
function ba(e, t, r, n) {
  lr(e.v, t), e.i = r;
}
function Ir(e, t, r, n, a, s, l, o, u, c, _) {
  var b = (u & Ma) !== 0, v = (u & La) === 0, p = b ? v ? /* @__PURE__ */ jn(a, !1, !1) : Lt(a) : a, h = u & Fa ? Lt(l) : l, d = {
    i: h,
    v: p,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var x = document.createDocumentFragment();
      x.append(e = qt());
    }
    return d.e = St(() => o(
      /** @type {Node} */
      e,
      p,
      h,
      c
    ), V), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? _ || (t.first = d) : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Tr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== null && s !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(s)
    );
    a.before(s), s = l;
  }
}
function Oe(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function zs(e, t) {
  Qn(() => {
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
function js(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n = n ? n + " " + t : t, n === "" ? null : n;
}
function kr(e, t, r, n, a, s) {
  var l = e.__className;
  if (V || l !== r || l === void 0) {
    var o = js(r, n);
    (!V || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return s;
}
function mn(e, t) {
  return e === t || (e == null ? void 0 : e[Dt]) === t;
}
function gn(e = {}, t, r, n) {
  return Qn(() => {
    var a, s;
    return ea(() => {
      a = s, s = [], _r(() => {
        e !== r(...s) && (t(e, ...s), a && mn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      _s(() => {
        s && mn(r(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let Zt = !1;
function Ws(e) {
  var t = Zt;
  try {
    return Zt = !1, [e(), Zt];
  } finally {
    Zt = t;
  }
}
function ee(e, t, r, n) {
  var A;
  var a = (r & za) !== 0, s = (r & ja) !== 0, l = (
    /** @type {V} */
    n
  ), o = !0, u = () => (o && (o = !1, l = s ? _r(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), c;
  if (a) {
    var _ = Dt in e || xn in e;
    c = ((A = it(e, t)) == null ? void 0 : A.set) ?? (_ && t in e ? (g) => e[t] = g : void 0);
  }
  var b, v = !1;
  a ? [b, v] = Ws(() => (
    /** @type {V} */
    e[t]
  )) : b = /** @type {V} */
  e[t], b === void 0 && n !== void 0 && (b = u(), c && (ls(), c(b)));
  var p;
  if (p = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? u() : (o = !0, g);
  }, !(r & Ua))
    return p;
  if (c) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      function(g, P) {
        return arguments.length > 0 ? ((!P || h || v) && c(P ? p() : g), g) : p();
      }
    );
  }
  var d = !1, x = (r & Ha ? dr : Dn)(() => (d = !1, p()));
  a && i(x);
  var B = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    function(g, P) {
      if (arguments.length > 0) {
        const $ = P ? i(x) : a ? ze(g) : g;
        return w(x, $), d = !0, l !== void 0 && (l = $), g;
      }
      return vt && d || B.f & ct ? x.v : i(x);
    }
  );
}
function Vs(e) {
  return new Ys(e);
}
var He, xe;
class Ys {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    fe(this, He);
    /** @type {Record<string, any>} */
    fe(this, xe);
    var s;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var u = /* @__PURE__ */ jn(o, !1, !1);
      return r.set(l, u), u;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return i(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === xn ? !0 : (i(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, u) {
          return w(r.get(o) ?? n(o, u), u), Reflect.set(l, o, u);
        }
      }
    );
    pe(this, xe, (t.hydrate ? Ms : ha)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && W(), pe(this, He, a.$$events);
    for (const l of Object.keys(E(this, xe)))
      l === "$set" || l === "$destroy" || l === "$on" || kt(this, l, {
        get() {
          return E(this, xe)[l];
        },
        /** @param {any} value */
        set(o) {
          E(this, xe)[l] = o;
        },
        enumerable: !0
      });
    E(this, xe).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(a, l);
    }, E(this, xe).$destroy = () => {
      Fs(E(this, xe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    E(this, xe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    E(this, He)[t] = E(this, He)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return E(this, He)[t].push(n), () => {
      E(this, He)[t] = E(this, He)[t].filter(
        /** @param {any} fn */
        (a) => a !== n
      );
    };
  }
  $destroy() {
    E(this, xe).$destroy();
  }
}
He = new WeakMap(), xe = new WeakMap();
let ma;
typeof HTMLElement == "function" && (ma = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ce(this, "$$ctor");
    /** Slots */
    ce(this, "$$s");
    /** @type {any} The Svelte component instance */
    ce(this, "$$c");
    /** Whether or not the custom element is connected */
    ce(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ce(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ce(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ce(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ce(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ce(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ce(this, "$$me");
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
        return (s) => {
          const l = document.createElement("slot");
          a !== "default" && (l.name = a), D(s, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ks(this);
      for (const a of this.$$s)
        a in n && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const s = this.$$g_p(a.name);
        s in this.$$d || (this.$$d[s] = tr(s, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Vs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Es(() => {
        ea(() => {
          var a;
          this.$$r = !0;
          for (const s of rr(this.$$c)) {
            if (!((a = this.$$p_d[s]) != null && a.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const l = tr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const s of this.$$l[a]) {
          const l = this.$$c.$on(a, s);
          this.$$l_u.set(s, l);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = tr(t, n, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return rr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function tr(e, t, r, n) {
  var s;
  const a = (s = r[e]) == null ? void 0 : s.type;
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
function Ks(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Gs(e, t, r, n, a, s) {
  let l = class extends ma {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return rr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return rr(t).forEach((o) => {
    kt(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var b;
        u = tr(o, u, t), this.$$d[o] = u;
        var c = this.$$c;
        if (c) {
          var _ = (b = it(c, o)) == null ? void 0 : b.get;
          _ ? c[o] = u : c.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    kt(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const Js = {
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
}, Xs = {
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
function Zs(e, t) {
  const r = t.style;
  r.setProperty("--terminal-bg", e.background), r.setProperty("--terminal-fg", e.foreground), r.setProperty("--terminal-border", e.border), r.setProperty("--terminal-header-bg", e.headerBg), r.setProperty("--terminal-header-fg", e.headerFg), r.setProperty("--terminal-prompt", e.prompt), r.setProperty("--terminal-command", e.command), r.setProperty("--terminal-output", e.output), r.setProperty("--terminal-error", e.error), r.setProperty("--terminal-warning", e.warning), r.setProperty("--terminal-info", e.info), r.setProperty("--terminal-success", e.success), r.setProperty("--terminal-selection", e.selection), r.setProperty("--terminal-cursor", e.cursor);
}
function Qs(e, t) {
  return { ...e, ...t };
}
var el = /* @__PURE__ */ U('<div class="terminal-buttons svelte-2qd9r7"><span class="terminal-button close svelte-2qd9r7"></span> <span class="terminal-button minimize svelte-2qd9r7"></span> <span class="terminal-button maximize svelte-2qd9r7"></span></div>'), tl = /* @__PURE__ */ U('<button class="control-button svelte-2qd9r7"> </button>'), rl = /* @__PURE__ */ U('<button class="control-button svelte-2qd9r7">↺</button>'), nl = /* @__PURE__ */ U('<button class="control-button svelte-2qd9r7"> </button>'), al = /* @__PURE__ */ U('<div class="terminal-controls svelte-2qd9r7"><!> <!> <!></div>'), sl = /* @__PURE__ */ U('<div class="terminal-header svelte-2qd9r7"><!> <div class="terminal-title svelte-2qd9r7"> </div> <!></div>'), ll = /* @__PURE__ */ U('<span class="tab-icon svelte-2qd9r7"> </span>'), il = /* @__PURE__ */ U('<span class="tab-badge svelte-2qd9r7"> </span>'), ol = /* @__PURE__ */ U('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), ul = /* @__PURE__ */ U('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), fl = /* @__PURE__ */ U('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), cl = /* @__PURE__ */ U('<div class="terminal-tabs svelte-2qd9r7"><!> <!></div>'), dl = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, vl = /* @__PURE__ */ U('<span class="typing-cursor svelte-2qd9r7">▊</span>'), hl = /* @__PURE__ */ U('<div><pre class="svelte-2qd9r7"> <!></pre></div>'), _l = /* @__PURE__ */ U('<div class="terminal-cursor svelte-2qd9r7">▊</div>'), pl = /* @__PURE__ */ U('<span class="tab-icon svelte-2qd9r7"> </span>'), bl = /* @__PURE__ */ U('<span class="tab-badge svelte-2qd9r7"> </span>'), ml = /* @__PURE__ */ U('<span class="tab-close svelte-2qd9r7" role="button" tabindex="0">×</span>'), gl = /* @__PURE__ */ U('<button><!> <span class="tab-title svelte-2qd9r7"> </span> <!> <!></button>'), wl = /* @__PURE__ */ U('<button class="terminal-tab tab-add svelte-2qd9r7">+</button>'), yl = /* @__PURE__ */ U('<div class="terminal-tabs terminal-tabs-bottom svelte-2qd9r7"><!> <!></div>'), $l = /* @__PURE__ */ U('<div class="terminal svelte-2qd9r7"><!> <!> <div class="terminal-content svelte-2qd9r7" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Tl = {
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
function kl(e, t) {
  Nn(t, !0), zs(e, Tl);
  let r = ee(t, "theme", 7, "dark"), n = ee(t, "session", 23, () => []), a = ee(t, "autoplay", 7, !1), s = ee(t, "playbackSpeed", 7, 1), l = ee(t, "showHeader", 7), o = ee(t, "title", 7, "Terminal"), u = ee(t, "colors", 23, () => ({})), c = ee(t, "typingSpeed", 7, 40), _ = ee(t, "enableTyping", 7, !0), b = ee(t, "showPlayButton", 7), v = ee(t, "showResetButton", 7), p = ee(t, "showThemeToggle", 7), h = ee(t, "showWindowButtons", 7), d = ee(t, "tabs", 23, () => []), x = ee(t, "activeTab", 7, 0), B = ee(t, "showTabs", 7, !1), A = ee(t, "allowTabClose", 7, !0), g = ee(t, "allowTabAdd", 7, !1), P = ee(t, "tabBarPosition", 7, "top"), $, re, _e = /* @__PURE__ */ L(ze(x() || 0)), be = /* @__PURE__ */ L(ze(/* @__PURE__ */ new Map())), M = /* @__PURE__ */ Be(() => B() && d() && d().length > 0 ? d()[i(_e)] || d()[0] : null), N = /* @__PURE__ */ Be(() => i(M) ? i(M).session : n()), tt = /* @__PURE__ */ Be(() => i(M) ? i(M).title : o()), rt = /* @__PURE__ */ L(!0), At = /* @__PURE__ */ L(!0), Nt = /* @__PURE__ */ L(!0), Rt = /* @__PURE__ */ L(!0), pr = /* @__PURE__ */ L(!0), Jr = /* @__PURE__ */ Be(() => i(At)), Xr = /* @__PURE__ */ Be(() => i(Nt)), Zr = /* @__PURE__ */ Be(() => i(Rt)), ga = /* @__PURE__ */ Be(() => i(pr)), wa = /* @__PURE__ */ Be(() => i(Jr) || i(Xr) || i(Zr)), ya = /* @__PURE__ */ Be(() => i(rt)), Y = /* @__PURE__ */ L(0), z = /* @__PURE__ */ L(!1), J = /* @__PURE__ */ L(ze([])), me = /* @__PURE__ */ L(-1), Re = /* @__PURE__ */ L(""), Bt = /* @__PURE__ */ L(!1), br = /* @__PURE__ */ L(!1), le = null, X = null, Qr = -1, Vt = "", en = /* @__PURE__ */ Be(() => Qs(r() === "dark" ? Js : Xs, u()));
  Ar(() => {
    $ && i(en) && Zs(i(en), $);
  }), Ar(() => {
    const f = i(J).length;
    re && f > 0 && Ns().then(() => {
      re && (re.scrollTop = re.scrollHeight);
    });
  });
  function ht() {
    i(z) || !i(N) || i(Y) >= i(N).length || (w(z, !0), It());
  }
  function It() {
    if (!i(N) || i(Y) >= i(N).length) {
      w(z, !1), le = null;
      return;
    }
    const f = i(N)[i(Y)], y = (f.delay || 1e3) / s();
    le = setTimeout(
      () => {
        if (!i(N)) {
          w(z, !1), le = null;
          return;
        }
        f.type === "command" && _() && !f.skipTyping ? $a(f) : (w(J, [...i(J), f], !0), Jt(Y), i(Y) < i(N).length && i(z) ? It() : (w(z, !1), le = null));
      },
      y
    );
  }
  function $a(f) {
    w(me, i(J).length, !0), w(Re, ""), w(J, [...i(J), { ...f, content: "" }], !0);
    const y = f.content;
    let I = 0;
    const G = 1e3 / (f.typingSpeed || c());
    function O() {
      if (!i(z)) {
        X = null;
        return;
      }
      if (I < y.length) {
        w(Re, i(Re) + y[I]), w(J, i(J).map((m, T) => T === i(me) ? { ...f, content: i(Re) } : m), !0), I++;
        const C = G * 0.2, ne = G + (Math.random() - 0.5) * C;
        X = setTimeout(O, ne);
      } else
        w(me, -1), w(Re, ""), X = null, Jt(Y), i(Y) < i(N).length && i(z) ? It() : w(z, !1);
    }
    O();
  }
  function Yt() {
    le && (clearTimeout(le), le = null), X && (clearTimeout(X), X = null), w(Y, 0), w(J, [], !0), w(z, !1), w(me, -1), w(Re, "");
  }
  function Ta() {
    if (i(z))
      w(z, !1), le && (clearTimeout(le), le = null), X && (clearTimeout(X), X = null);
    else {
      if (!i(N) || i(N).length === 0)
        return;
      i(Y) >= i(N).length ? (Yt(), setTimeout(() => ht(), 10)) : ht();
    }
  }
  function ka(f) {
    return `step-${f}`;
  }
  function Ea(f, y) {
    const I = f.prompt || "$";
    return f.type === "command" ? y === i(me) ? `${I} ${i(Re)}` : `${I} ${f.content}` : f.content;
  }
  function tn() {
    i(me) >= 0 && i(me) < i(J).length && (X && (clearTimeout(X), X = null), w(
      J,
      i(J).map((f, y) => y === i(me) ? {
        ...f,
        content: i(N)[i(Y)].content
      } : f),
      !0
    ), w(me, -1), w(Re, ""), Jt(Y), i(Y) < i(N).length && i(z) ? It() : w(z, !1));
  }
  pa(() => {
    var G, O, C, ne;
    if ($) {
      const m = "terminal-" + Math.random().toString(36).substr(2, 9);
      let T = null, F = "none";
      const Te = $.closest("terminal-session");
      Te && (T = Te, F = "closest()");
      let ke = $.parentElement;
      for (; ke && !T; ) {
        if (((G = ke.tagName) == null ? void 0 : G.toLowerCase()) === "terminal-session") {
          T = ke, F = "parentElement traversal";
          break;
        }
        ke = ke.parentElement;
      }
      if (!T) {
        const ie = $.getRootNode();
        ie && ie.host && ((O = ie.host.tagName) == null ? void 0 : O.toLowerCase()) === "terminal-session" && (T = ie.host, F = "getRootNode().host");
      }
      if (!T) {
        const ie = document.querySelectorAll("terminal-session");
        for (const Pe of ie)
          if (Pe.contains($)) {
            T = Pe, F = "document.querySelectorAll + contains()";
            break;
          }
      }
      if (console.log(`[${m}] DOM Structure Analysis:`), console.log(`[${m}] Inner element:`, $.tagName, $.className), console.log(`[${m}] Parent chain:`, f($)), console.log(`[${m}] Root node:`, (ne = (C = $.getRootNode()) == null ? void 0 : C.constructor) == null ? void 0 : ne.name), console.log(`[${m}] Host found via:`, F), console.log(`[${m}] Host element:`, T == null ? void 0 : T.tagName, T == null ? void 0 : T.id), T) {
        const ie = T.getAttribute("show-header");
        w(rt, ie === "false" ? !1 : l() ?? !0, !0);
        const Pe = T.getAttribute("show-play-button");
        w(At, Pe === "false" ? !1 : b() ?? !0, !0);
        const Ve = T.getAttribute("show-reset-button");
        w(Nt, Ve === "false" ? !1 : v() ?? !0, !0);
        const ae = T.getAttribute("show-theme-toggle");
        w(Rt, ae === "false" ? !1 : p() ?? !0, !0);
        const k = T.getAttribute("show-window-buttons");
        w(pr, k === "false" ? !1 : h() ?? !0, !0), console.log(`[${m}] ✅ ATTRIBUTES FOUND:`), console.log(`[${m}] show-header="${ie}" -> parsedShowHeader:`, i(rt)), console.log(`[${m}] show-play-button="${Pe}" -> parsedShowPlayButton:`, i(At)), console.log(`[${m}] show-reset-button="${Ve}" -> parsedShowResetButton:`, i(Nt)), console.log(`[${m}] show-theme-toggle="${ae}" -> parsedShowThemeToggle:`, i(Rt)), console.log(`[${m}] show-window-buttons="${k}" -> parsedShowWindowButtons:`, i(pr));
      } else
        console.error(`[${m}] ❌ FAILED: Could not find host terminal-session element with any method!`), console.error(`[${m}] This suggests a fundamental issue with custom element structure.`);
    }
    function f(m) {
      const T = [];
      let F = m;
      for (; F && T.length < 10; )
        T.push({
          tag: F.tagName,
          class: F.className,
          id: F.id
        }), F = F.parentElement;
      return T;
    }
    if (B() && d() && d().length > 0) {
      const m = d()[i(_e)] || d()[0];
      m && (Vt = m.id);
    }
    let y = null;
    typeof IntersectionObserver < "u" && $ && (y = new IntersectionObserver(
      (m) => {
        m.forEach((T) => {
          if (w(br, T.isIntersecting, !0), T.isIntersecting && a() && !i(Bt) && !i(z)) {
            const F = i(N);
            F && F.length > 0 && i(Y) === 0 && (w(Bt, !0), setTimeout(() => ht(), 300));
          }
          !T.isIntersecting && i(z);
        });
      },
      { threshold: 0.1 }
      // Trigger when 10% visible
    ), y.observe($));
    const I = () => {
      const m = i(N);
      !B() && m && m.length !== Qr && (Qr = m.length, (i(J).length > 0 || i(Y) > 0) && (Yt(), w(
        Bt,
        !1
        // Reset autoplay flag for new session
      )), a() && m.length > 0 && (i(br) || !y) && (i(Bt) || (w(Bt, !0), setTimeout(() => ht(), 100)))), B() && i(M) && i(M).id !== Vt && !i(be).has(i(M).id) && (Vt = i(M).id, a() && i(N) && i(N).length > 0 && setTimeout(() => ht(), 300));
    };
    I();
    const K = setInterval(I, 500);
    return () => {
      clearInterval(K), y && y.disconnect(), le && clearTimeout(le), X && clearTimeout(X);
    };
  }), Ls(() => {
    le && clearTimeout(le), X && clearTimeout(X);
  });
  function xa() {
    const f = r() === "dark" ? "light" : "dark";
    $ == null || $.dispatchEvent(new CustomEvent("theme-change", { detail: f }));
  }
  function qa() {
    i(M) && i(be).set(i(M).id, {
      currentStepIndex: i(Y),
      isPlaying: i(z),
      displayedSteps: [...i(J)],
      typingStepIndex: i(me),
      typedContent: i(Re),
      lastUpdateTime: Date.now()
    });
  }
  function Sa(f) {
    const y = i(be).get(f);
    if (y) {
      const I = Date.now() - y.lastUpdateTime;
      if (w(Y, y.currentStepIndex, !0), w(z, y.isPlaying, !0), w(J, [...y.displayedSteps], !0), w(me, y.typingStepIndex, !0), w(Re, y.typedContent, !0), y.isPlaying && i(N) && i(Y) < i(N).length) {
        let K = i(Y), G = 0;
        for (; K < i(N).length && G < I; ) {
          const O = i(N)[K], C = (O.delay || 1e3) / s();
          if (G + C <= I)
            w(J, [...i(J), O], !0), K++, G += C;
          else
            break;
        }
        w(Y, K, !0), i(Y) < i(N).length ? It() : w(z, !1);
      }
    } else
      i(be).has(f) || (Yt(), a() && i(br) && i(N) && i(N).length > 0 && setTimeout(() => ht(), 300));
  }
  function mr(f) {
    if (f === i(_e) || !d() || f < 0 || f >= d().length) return;
    qa(), le && (clearTimeout(le), le = null), X && (clearTimeout(X), X = null), w(_e, f, !0);
    const y = d()[f];
    y && (Sa(y.id), Vt = y.id), $ == null || $.dispatchEvent(new CustomEvent("tab-change", { detail: { index: f, tab: y } }));
  }
  function Kt(f) {
    if (!d() || d().length <= 1) return;
    const y = d()[f];
    if (y.closable !== !1 && A())
      if (y && i(be).delete(y.id), $ == null || $.dispatchEvent(new CustomEvent("tab-close", { detail: { index: f, tab: y } })), f === i(_e)) {
        const K = f > 0 ? f - 1 : 0;
        d().length > 1 && mr(K);
      } else f < i(_e) && Jt(_e, -1);
  }
  function rn() {
    g() && ($ == null || $.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function nn(f) {
    return f ? `tab-status-${f}` : "";
  }
  var Gt = $l(), an = Q(Gt);
  {
    var Pa = (f) => {
      var y = sl(), I = Q(y);
      {
        var K = (m) => {
          var T = el();
          D(m, T);
        };
        se(I, (m) => {
          i(ga) && m(K);
        });
      }
      var G = oe(I, 2), O = Q(G, !0);
      Z(G);
      var C = oe(G, 2);
      {
        var ne = (m) => {
          var T = al(), F = Q(T);
          {
            var Te = (ae) => {
              var k = tl();
              k.__click = Ta;
              var R = Q(k, !0);
              Z(k), Ce(() => {
                k.disabled = !i(N) || i(N).length === 0, Ie(R, i(z) ? "⏸" : "▶");
              }), D(ae, k);
            };
            se(F, (ae) => {
              i(Jr) && ae(Te);
            });
          }
          var ke = oe(F, 2);
          {
            var ie = (ae) => {
              var k = rl();
              k.__click = Yt, Ce(() => k.disabled = i(J).length === 0), D(ae, k);
            };
            se(ke, (ae) => {
              i(Xr) && ae(ie);
            });
          }
          var Pe = oe(ke, 2);
          {
            var Ve = (ae) => {
              var k = nl();
              k.__click = xa;
              var R = Q(k, !0);
              Z(k), Ce(() => Ie(R, r() === "dark" ? "☀" : "🌙")), D(ae, k);
            };
            se(Pe, (ae) => {
              i(Zr) && ae(Ve);
            });
          }
          Z(T), D(m, T);
        };
        se(C, (m) => {
          i(wa) && m(ne);
        });
      }
      Z(y), Ce(() => Ie(O, i(tt))), D(f, y);
    };
    se(an, (f) => {
      i(ya) && f(Pa);
    });
  }
  var sn = oe(an, 2);
  {
    var Ca = (f) => {
      var y = cl(), I = Q(y);
      $r(I, 17, d, yr, (O, C, ne) => {
        var m = ul();
        m.__click = () => mr(ne);
        var T = Q(m);
        {
          var F = (k) => {
            var R = ll(), j = Q(R, !0);
            Z(R), Ce(() => Ie(j, i(C).icon)), D(k, R);
          };
          se(T, (k) => {
            i(C).icon && k(F);
          });
        }
        var Te = oe(T, 2), ke = Q(Te, !0);
        Z(Te);
        var ie = oe(Te, 2);
        {
          var Pe = (k) => {
            var R = il(), j = Q(R, !0);
            Z(R), Ce(() => Ie(j, i(C).badge)), D(k, R);
          };
          se(ie, (k) => {
            i(C).badge !== void 0 && k(Pe);
          });
        }
        var Ve = oe(ie, 2);
        {
          var ae = (k) => {
            var R = ol();
            R.__click = (j) => {
              j.stopPropagation(), Kt(ne);
            }, R.__keydown = (j) => {
              (j.key === "Enter" || j.key === " ") && (j.stopPropagation(), j.preventDefault(), Kt(ne));
            }, D(k, R);
          };
          se(Ve, (k) => {
            i(C).closable !== !1 && A() && d().length > 1 && k(ae);
          });
        }
        Z(m), Ce(
          (k) => {
            kr(m, 1, `terminal-tab ${ne === i(_e) ? "active" : ""} ${k ?? ""}`, "svelte-2qd9r7"), Ie(ke, i(C).title);
          },
          [() => nn(i(C).status)]
        ), D(O, m);
      });
      var K = oe(I, 2);
      {
        var G = (O) => {
          var C = fl();
          C.__click = rn, D(O, C);
        };
        se(K, (O) => {
          g() && O(G);
        });
      }
      Z(y), D(f, y);
    };
    se(sn, (f) => {
      B() && d() && d().length > 0 && P() === "top" && f(Ca);
    });
  }
  var _t = oe(sn, 2);
  _t.__click = tn, _t.__keydown = [dl, tn];
  var ln = Q(_t);
  $r(ln, 17, () => i(J), yr, (f, y, I) => {
    var K = hl(), G = Q(K), O = Q(G, !0), C = oe(O);
    {
      var ne = (m) => {
        var T = vl();
        D(m, T);
      };
      se(C, (m) => {
        I === i(me) && m(ne);
      });
    }
    Z(G), Z(K), Ce(
      (m, T) => {
        kr(K, 1, `terminal-line ${m ?? ""}`, "svelte-2qd9r7"), Ie(O, T);
      },
      [
        () => ka(i(y).type),
        () => Ea(i(y), I)
      ]
    ), D(f, K);
  });
  var Aa = oe(ln, 2);
  {
    var Na = (f) => {
      var y = _l();
      D(f, y);
    };
    se(Aa, (f) => {
      i(z) && i(me) === -1 && f(Na);
    });
  }
  Z(_t), gn(_t, (f) => re = f, () => re);
  var Ra = oe(_t, 2);
  {
    var Ba = (f) => {
      var y = yl(), I = Q(y);
      $r(I, 17, d, yr, (O, C, ne) => {
        var m = gl();
        m.__click = () => mr(ne);
        var T = Q(m);
        {
          var F = (k) => {
            var R = pl(), j = Q(R, !0);
            Z(R), Ce(() => Ie(j, i(C).icon)), D(k, R);
          };
          se(T, (k) => {
            i(C).icon && k(F);
          });
        }
        var Te = oe(T, 2), ke = Q(Te, !0);
        Z(Te);
        var ie = oe(Te, 2);
        {
          var Pe = (k) => {
            var R = bl(), j = Q(R, !0);
            Z(R), Ce(() => Ie(j, i(C).badge)), D(k, R);
          };
          se(ie, (k) => {
            i(C).badge !== void 0 && k(Pe);
          });
        }
        var Ve = oe(ie, 2);
        {
          var ae = (k) => {
            var R = ml();
            R.__click = (j) => {
              j.stopPropagation(), Kt(ne);
            }, R.__keydown = (j) => {
              (j.key === "Enter" || j.key === " ") && (j.stopPropagation(), j.preventDefault(), Kt(ne));
            }, D(k, R);
          };
          se(Ve, (k) => {
            i(C).closable !== !1 && A() && d().length > 1 && k(ae);
          });
        }
        Z(m), Ce(
          (k) => {
            kr(m, 1, `terminal-tab ${ne === i(_e) ? "active" : ""} ${k ?? ""}`, "svelte-2qd9r7"), Ie(ke, i(C).title);
          },
          [() => nn(i(C).status)]
        ), D(O, m);
      });
      var K = oe(I, 2);
      {
        var G = (O) => {
          var C = wl();
          C.__click = rn, D(O, C);
        };
        se(K, (O) => {
          g() && O(G);
        });
      }
      Z(y), D(f, y);
    };
    se(Ra, (f) => {
      B() && d() && d().length > 0 && P() === "bottom" && f(Ba);
    });
  }
  return Z(Gt), gn(Gt, (f) => $ = f, () => $), D(e, Gt), Rn({
    get theme() {
      return r();
    },
    set theme(f = "dark") {
      r(f), W();
    },
    get session() {
      return n();
    },
    set session(f = []) {
      n(f), W();
    },
    get autoplay() {
      return a();
    },
    set autoplay(f = !1) {
      a(f), W();
    },
    get playbackSpeed() {
      return s();
    },
    set playbackSpeed(f = 1) {
      s(f), W();
    },
    get showHeader() {
      return l();
    },
    set showHeader(f) {
      l(f), W();
    },
    get title() {
      return o();
    },
    set title(f = "Terminal") {
      o(f), W();
    },
    get colors() {
      return u();
    },
    set colors(f = {}) {
      u(f), W();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(f = 40) {
      c(f), W();
    },
    get enableTyping() {
      return _();
    },
    set enableTyping(f = !0) {
      _(f), W();
    },
    get showPlayButton() {
      return b();
    },
    set showPlayButton(f) {
      b(f), W();
    },
    get showResetButton() {
      return v();
    },
    set showResetButton(f) {
      v(f), W();
    },
    get showThemeToggle() {
      return p();
    },
    set showThemeToggle(f) {
      p(f), W();
    },
    get showWindowButtons() {
      return h();
    },
    set showWindowButtons(f) {
      h(f), W();
    },
    get tabs() {
      return d();
    },
    set tabs(f = []) {
      d(f), W();
    },
    get activeTab() {
      return x();
    },
    set activeTab(f = 0) {
      x(f), W();
    },
    get showTabs() {
      return B();
    },
    set showTabs(f = !1) {
      B(f), W();
    },
    get allowTabClose() {
      return A();
    },
    set allowTabClose(f = !0) {
      A(f), W();
    },
    get allowTabAdd() {
      return g();
    },
    set allowTabAdd(f = !1) {
      g(f), W();
    },
    get tabBarPosition() {
      return P();
    },
    set tabBarPosition(f = "top") {
      P(f), W();
    }
  });
}
Bs(["click", "keydown"]);
customElements.define("terminal-session", Gs(
  kl,
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
  kl as default
};
